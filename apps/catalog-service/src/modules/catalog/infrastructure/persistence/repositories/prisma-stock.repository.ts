import { Injectable } from "@nestjs/common";
import { StockRepositoryPort } from "../../../domain/repositories/catalog.repository.port";
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

  async save(stock: StockBalance): Promise<void> {
    await this.prisma.stockBalance.upsert({
      where: { variantId: stock.variantId },
      create: {
        id: stock.id,
        variantId: stock.variantId,
        outletId: stock.outletId,
        onHandQuantity: stock.onHandQuantity,
        reservedQuantity: stock.reservedQuantity,
        version: stock.version,
      },
      update: {
        onHandQuantity: stock.onHandQuantity,
        reservedQuantity: stock.reservedQuantity,
        version: stock.version,
        updatedAt: new Date(),
      },
    });
  }

  async recordMovement(movement: StockMovement): Promise<void> {
    await this.prisma.stockMovement.create({
      data: {
        id: movement.id,
        variantId: movement.variantId,
        outletId: movement.outletId,
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
      const updated = await tx.$executeRaw`
        UPDATE stock_balances
        SET reserved_quantity = reserved_quantity + ${res.quantity},
            version = version + 1,
            updated_at = NOW()
        WHERE variant_id = ${res.variantId}
          AND (on_hand_quantity - reserved_quantity) >= ${res.quantity}
      `;
      if (updated === 0) {
        throw new InsufficientStockError(0, res.quantity);
      }
      await tx.stockReservation.create({
        data: {
          id: UniqueIdentifier.generateV7(),
          variantId: res.variantId,
          tenantId: res.tenantId || "merchant-main",
          outletId: res.outletId,
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
      const reservation = await tx.stockReservation.findFirst({
        where: { orderId, status: "ACTIVE" },
      });
      if (!reservation) return;
      await tx.stockReservation.update({
        where: { id: reservation.id },
        data: { status: "COMMITTED" },
      });
      await tx.$executeRaw`
        UPDATE stock_balances
        SET on_hand_quantity = on_hand_quantity - ${reservation.quantity},
            reserved_quantity = reserved_quantity - ${reservation.quantity},
            version = version + 1,
            updated_at = NOW()
        WHERE variant_id = ${reservation.variantId}
      `;
      await tx.stockMovement.create({
        data: {
          id: UniqueIdentifier.generateV7(),
          variantId: reservation.variantId,
          tenantId: reservation.tenantId,
          outletId: reservation.outletId,
          quantityChange: -reservation.quantity,
          balanceAfter: 0,
          reason: "SALE_COMMIT",
          actorId: "ORDER_SERVICE",
          referenceId: orderId,
        },
      });
    });
  }

  async releaseReservation(orderId: string): Promise<void> {
    await this.prisma.$transaction(async (tx: any) => {
      const reservation = await tx.stockReservation.findFirst({
        where: { orderId, status: "ACTIVE" },
      });
      if (!reservation) return;
      await tx.stockReservation.update({
        where: { id: reservation.id },
        data: { status: "RELEASED" },
      });
      await tx.$executeRaw`
        UPDATE stock_balances
        SET reserved_quantity = reserved_quantity - ${reservation.quantity},
            version = version + 1,
            updated_at = NOW()
        WHERE variant_id = ${reservation.variantId}
      `;
      await tx.stockMovement.create({
        data: {
          id: UniqueIdentifier.generateV7(),
          variantId: reservation.variantId,
          tenantId: reservation.tenantId,
          outletId: reservation.outletId,
          quantityChange: 0,
          balanceAfter: 0,
          reason: "RESERVATION_RELEASE",
          actorId: "ORDER_SERVICE",
          referenceId: orderId,
        },
      });
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
      await tx.$executeRaw`
        UPDATE stock_balances
        SET reserved_quantity = GREATEST(0, reserved_quantity - ${quantity}),
            version = version + 1,
            updated_at = NOW()
        WHERE variant_id = ${variantId}
      `;
      await tx.stockMovement.create({
        data: {
          id: UniqueIdentifier.generateV7(),
          variantId,
          tenantId,
          outletId,
          quantityChange: 0,
          balanceAfter: 0,
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
