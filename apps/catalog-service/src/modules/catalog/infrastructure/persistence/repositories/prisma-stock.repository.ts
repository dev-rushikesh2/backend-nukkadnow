import { Injectable, ConflictException, ForbiddenException, NotFoundException } from "@nestjs/common";
import {
  StockRepositoryPort,
  AtomicStockAdjustCommand,
  AtomicStockAdjustResult,
} from "../../../domain/repositories/catalog.repository.port";
import { StockBalance } from "../../../domain/entities/stock-balance.entity";
import { StockMovement, StockMovementReason } from "../../../domain/entities/stock-movement.entity";
import { InsufficientStockError } from "../../../domain/errors/catalog-errors";
import { PrismaService } from "../prisma/prisma.service";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class PrismaStockRepository implements StockRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findByVariantId(variantId: string): Promise<StockBalance | null> {
    const record = await this.prisma.stockBalance.findUnique({
      where: { variantId },
    });
    return record ? this.toDomain(record) : null;
  }

  async findByOutletId(outletId: string): Promise<StockBalance[]> {
    const records = await this.prisma.stockBalance.findMany({
      where: { outletId },
    });
    return records.map((r: any) => this.toDomain(r));
  }

  private async resolveVariantContext(variantId: string, tx: any = this.prisma): Promise<{ tenantId: string; outletId: string }> {
    const variant = await tx.productVariant.findUnique({
      where: { id: variantId },
      include: { product: { select: { tenantId: true, outletId: true } } },
    });
    if (!variant?.product) {
      throw new NotFoundException(`ProductVariant '${variantId}' not found in catalog.`);
    }
    return {
      tenantId: variant.product.tenantId,
      outletId: variant.product.outletId,
    };
  }

  async save(stock: StockBalance): Promise<void> {
    const ctx = await this.resolveVariantContext(stock.variantId);
    if (ctx.outletId !== stock.outletId) {
      throw new ForbiddenException(`Outlet Mismatch: Variant '${stock.variantId}' does not belong to outlet '${stock.outletId}'.`);
    }

    const existing = await this.prisma.stockBalance.findUnique({
      where: { variantId: stock.variantId },
      select: { version: true },
    });

    if (!existing) {
      await this.prisma.stockBalance.create({
        data: {
          id: stock.id,
          variantId: stock.variantId,
          tenantId: ctx.tenantId,
          outletId: ctx.outletId,
          onHandQuantity: stock.onHandQuantity,
          reservedQuantity: stock.reservedQuantity,
          version: stock.version,
        },
      });
      return;
    }

    const expectedVersion = stock.version > existing.version ? stock.version - 1 : existing.version;
    const updated = await this.prisma.stockBalance.updateMany({
      where: { variantId: stock.variantId, version: expectedVersion },
      data: {
        tenantId: ctx.tenantId,
        outletId: ctx.outletId,
        onHandQuantity: stock.onHandQuantity,
        reservedQuantity: stock.reservedQuantity,
        version: existing.version + 1,
        updatedAt: new Date(),
      },
    });
    if (updated.count === 0) {
      throw new ConflictException(`Concurrent stock modification detected for variant '${stock.variantId}'. Please retry.`);
    }
  }

  async recordMovement(movement: StockMovement): Promise<void> {
    const ctx = await this.resolveVariantContext(movement.variantId);
    await this.prisma.stockMovement.create({
      data: {
        id: movement.id,
        variantId: movement.variantId,
        tenantId: ctx.tenantId,
        outletId: ctx.outletId,
        quantityChange: movement.quantityChange,
        balanceAfter: movement.balanceAfter,
        reason: movement.reason,
        actorId: movement.actorId,
        referenceId: movement.referenceId ?? null,
        notes: movement.notes ?? null,
        createdAt: movement.createdAt,
      },
    });
  }

  async atomicAdjustStock(command: AtomicStockAdjustCommand): Promise<AtomicStockAdjustResult> {
    const [result] = await this.atomicAdjustBatch([command]);
    return result;
  }

  async atomicAdjustBatch(commands: AtomicStockAdjustCommand[]): Promise<AtomicStockAdjustResult[]> {
    return this.prisma.$transaction(async (tx: any) => {
      const results: AtomicStockAdjustResult[] = [];
      for (const cmd of commands) {
        const ctx = await this.resolveVariantContext(cmd.variantId, tx);
        if (ctx.outletId !== cmd.outletId) {
          throw new ForbiddenException(`Outlet Mismatch: Variant '${cmd.variantId}' belongs to another outlet.`);
        }
        if (cmd.callerTenantId && ctx.tenantId !== cmd.callerTenantId) {
          throw new ForbiddenException(`Tenant Mismatch: Variant '${cmd.variantId}' belongs to another merchant organization.`);
        }

        // Ensure 1:1 balance row exists before atomic conditional update
        await tx.$executeRaw`
          INSERT INTO "stock_balances" ("id", "variantId", "tenantId", "outletId", "onHandQuantity", "reservedQuantity", "safetyStock", "version", "updatedAt")
          VALUES (${UniqueIdentifier.generateV7()}, ${cmd.variantId}, ${ctx.tenantId}, ${ctx.outletId}, 0, 0, 5, 1, NOW())
          ON CONFLICT ("variantId") DO NOTHING
        `;

        const updatedRows: Array<{
          onHandQuantity: number;
          reservedQuantity: number;
          tenantId: string;
          outletId: string;
          version: number;
        }> = await tx.$queryRaw`
          UPDATE "stock_balances"
          SET "onHandQuantity" = "onHandQuantity" + ${cmd.quantityChange},
              "version" = "version" + 1,
              "updatedAt" = NOW()
          WHERE "variantId" = ${cmd.variantId}
            AND "outletId" = ${ctx.outletId}
            AND "tenantId" = ${ctx.tenantId}
            AND ("onHandQuantity" + ${cmd.quantityChange}) >= "reservedQuantity"
            AND ("onHandQuantity" + ${cmd.quantityChange}) >= 0
          RETURNING "onHandQuantity", "reservedQuantity", "tenantId", "outletId", "version"
        `;

        if (!updatedRows || updatedRows.length === 0) {
          const current = await tx.stockBalance.findUnique({ where: { variantId: cmd.variantId } });
          const avail = current ? Math.max(0, current.onHandQuantity - current.reservedQuantity) : 0;
          throw new InsufficientStockError(avail, Math.abs(cmd.quantityChange));
        }

        const updated = updatedRows[0];
        const available = Math.max(0, updated.onHandQuantity - updated.reservedQuantity);

        await tx.stockMovement.create({
          data: {
            id: UniqueIdentifier.generateV7(),
            variantId: cmd.variantId,
            tenantId: ctx.tenantId,
            outletId: ctx.outletId,
            quantityChange: cmd.quantityChange,
            balanceAfter: available,
            reason: cmd.reason || "RESTOCK",
            actorId: cmd.actorId,
            referenceId: cmd.referenceId ?? null,
            notes: cmd.notes ?? null,
            createdAt: new Date(),
          },
        });

        results.push({
          variantId: cmd.variantId,
          tenantId: ctx.tenantId,
          outletId: ctx.outletId,
          onHand: updated.onHandQuantity,
          reserved: updated.reservedQuantity,
          available,
          version: updated.version,
        });
      }
      return results;
    });
  }

  async findMovementsByOutlet(outletId: string, limit = 50): Promise<StockMovement[]> {
    const records = await this.prisma.stockMovement.findMany({
      where: { outletId },
      orderBy: { createdAt: "desc" },
      take: limit,
    });
    return records.map(
      (r: any) =>
        new StockMovement({
          id: r.id,
          variantId: r.variantId,
          outletId: r.outletId,
          quantityChange: r.quantityChange,
          balanceAfter: r.balanceAfter,
          reason: r.reason as StockMovementReason,
          actorId: r.actorId,
          referenceId: r.referenceId ?? undefined,
          notes: r.notes ?? undefined,
          createdAt: r.createdAt,
        })
    );
  }

  async addReservation(res: {
    variantId: string;
    outletId: string;
    quantity: number;
    orderId: string;
    ttlMinutes?: number;
    tenantId?: string;
  }): Promise<void> {
    await this.prisma.$transaction(async (tx: any) => {
      const ctx = await this.resolveVariantContext(res.variantId, tx);
      if (ctx.outletId !== res.outletId) {
        throw new ForbiddenException(`Outlet Mismatch: Variant '${res.variantId}' does not belong to outlet '${res.outletId}'.`);
      }
      if (res.tenantId && ctx.tenantId !== res.tenantId) {
        throw new ForbiddenException(`Tenant Mismatch: Variant '${res.variantId}' belongs to another merchant.`);
      }

      const updated = await tx.$executeRaw`
        UPDATE "stock_balances"
        SET "reservedQuantity" = "reservedQuantity" + ${res.quantity},
            "version" = "version" + 1,
            "updatedAt" = NOW()
        WHERE "variantId" = ${res.variantId}
          AND "outletId" = ${ctx.outletId}
          AND ("onHandQuantity" - "reservedQuantity") >= ${res.quantity}
      `;
      if (updated === 0) {
        throw new InsufficientStockError(0, res.quantity);
      }
      await tx.stockReservation.create({
        data: {
          id: UniqueIdentifier.generateV7(),
          variantId: res.variantId,
          tenantId: ctx.tenantId,
          outletId: ctx.outletId,
          quantity: res.quantity,
          orderId: res.orderId,
          expiresAt: new Date(Date.now() + (res.ttlMinutes ?? 10) * 60 * 1000),
          status: "ACTIVE",
        },
      });
    });
  }

  async commitReservation(orderId: string): Promise<void> {
    await this.prisma.$transaction(async (tx: any) => {
      const reservations = await tx.stockReservation.findMany({
        where: { orderId, status: "ACTIVE" },
      });
      for (const reservation of reservations) {
        await tx.stockReservation.update({
          where: { id: reservation.id },
          data: { status: "COMMITTED" },
        });
        const rows: Array<{ onHandQuantity: number; reservedQuantity: number }> = await tx.$queryRaw`
          UPDATE "stock_balances"
          SET "onHandQuantity" = "onHandQuantity" - ${reservation.quantity},
              "reservedQuantity" = "reservedQuantity" - ${reservation.quantity},
              "version" = "version" + 1,
              "updatedAt" = NOW()
          WHERE "variantId" = ${reservation.variantId}
            AND "reservedQuantity" >= ${reservation.quantity}
            AND "onHandQuantity" >= ${reservation.quantity}
          RETURNING "onHandQuantity", "reservedQuantity"
        `;
        const avail = rows[0] ? Math.max(0, rows[0].onHandQuantity - rows[0].reservedQuantity) : 0;
        await tx.stockMovement.create({
          data: {
            id: UniqueIdentifier.generateV7(),
            variantId: reservation.variantId,
            tenantId: reservation.tenantId,
            outletId: reservation.outletId,
            quantityChange: -reservation.quantity,
            balanceAfter: avail,
            reason: "SALE_COMMIT",
            actorId: "ORDER_SERVICE",
            referenceId: orderId,
          },
        });
      }
    });
  }

  async releaseReservation(orderId: string): Promise<void> {
    await this.prisma.$transaction(async (tx: any) => {
      const reservations = await tx.stockReservation.findMany({
        where: { orderId, status: "ACTIVE" },
      });
      for (const reservation of reservations) {
        await tx.stockReservation.update({
          where: { id: reservation.id },
          data: { status: "RELEASED" },
        });
        const rows: Array<{ onHandQuantity: number; reservedQuantity: number }> = await tx.$queryRaw`
          UPDATE "stock_balances"
          SET "reservedQuantity" = GREATEST(0, "reservedQuantity" - ${reservation.quantity}),
              "version" = "version" + 1,
              "updatedAt" = NOW()
          WHERE "variantId" = ${reservation.variantId}
          RETURNING "onHandQuantity", "reservedQuantity"
        `;
        const avail = rows[0] ? Math.max(0, rows[0].onHandQuantity - rows[0].reservedQuantity) : 0;
        await tx.stockMovement.create({
          data: {
            id: UniqueIdentifier.generateV7(),
            variantId: reservation.variantId,
            tenantId: reservation.tenantId,
            outletId: reservation.outletId,
            quantityChange: 0,
            balanceAfter: avail,
            reason: "RESERVATION_RELEASE",
            actorId: "ORDER_SERVICE",
            referenceId: orderId,
          },
        });
      }
    });
  }

  async releaseReservationById(
    resId: string,
    variantId: string,
    quantity: number,
    tenantId: string,
    outletId: string,
    orderId: string
  ): Promise<void> {
    await this.prisma.$transaction(async (tx: any) => {
      await tx.stockReservation.update({
        where: { id: resId },
        data: { status: "EXPIRED" },
      });
      const rows: Array<{ onHandQuantity: number; reservedQuantity: number }> = await tx.$queryRaw`
        UPDATE "stock_balances"
        SET "reservedQuantity" = GREATEST(0, "reservedQuantity" - ${quantity}),
            "version" = "version" + 1,
            "updatedAt" = NOW()
        WHERE "variantId" = ${variantId}
        RETURNING "onHandQuantity", "reservedQuantity"
      `;
      const avail = rows[0] ? Math.max(0, rows[0].onHandQuantity - rows[0].reservedQuantity) : 0;
      await tx.stockMovement.create({
        data: {
          id: UniqueIdentifier.generateV7(),
          variantId,
          tenantId,
          outletId,
          quantityChange: 0,
          balanceAfter: avail,
          reason: "RESERVATION_RELEASE",
          actorId: "TTL_SWEEPER",
          referenceId: orderId,
          notes: "Automatic TTL expiration release",
        },
      });
    });
  }

  async expireExpiredReservations(): Promise<number> {
    const expired = await this.prisma.stockReservation.findMany({
      where: { status: "ACTIVE", expiresAt: { lt: new Date() } },
    });
    for (const res of expired) {
      await this.releaseReservationById(
        res.id,
        res.variantId,
        res.quantity,
        res.tenantId,
        res.outletId,
        res.orderId
      );
    }
    return expired.length;
  }

  private toDomain(record: any): StockBalance {
    return new StockBalance({
      id: record.id,
      variantId: record.variantId,
      outletId: record.outletId,
      onHandQuantity: record.onHandQuantity,
      reservedQuantity: record.reservedQuantity,
      version: record.version,
      updatedAt: record.updatedAt,
    });
  }
}
