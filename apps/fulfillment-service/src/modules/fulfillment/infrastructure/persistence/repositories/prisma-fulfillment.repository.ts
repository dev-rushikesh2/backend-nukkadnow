import { Injectable } from "@nestjs/common";
import { FulfillmentRepositoryPort } from "../../../domain/repositories/fulfillment.repository.port";
import { CapacitySlot, PickupToken } from "../../../domain/entities/capacity-slot.entity";
import { SlotCapacityExceededError } from "../../../domain/errors/fulfillment-errors";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaFulfillmentRepository implements FulfillmentRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async saveSlot(slot: CapacitySlot): Promise<void> {
    await this.prisma.capacitySlot.upsert({
      where: { id: slot.id },
      create: {
        id: slot.id,
        outletId: slot.outletId,
        slotDate: slot.slotDate,
        startTime: slot.startTime,
        endTime: slot.endTime,
        maxCapacity: slot.maxCapacity,
        reservedCount: slot.reservedCount,
        isWalkIn: (slot as any).props?.isWalkIn ?? false,
        version: 1,
      },
      update: {
        maxCapacity: slot.maxCapacity,
        reservedCount: slot.reservedCount,
        isWalkIn: (slot as any).props?.isWalkIn ?? false,
      },
    });
  }

  async findSlotById(id: string): Promise<CapacitySlot | null> {
    const record = await this.prisma.capacitySlot.findUnique({ where: { id } });
    return record ? this.toSlotDomain(record) : null;
  }

  async findSlotsByOutletAndDate(outletId: string, date: string): Promise<CapacitySlot[]> {
    const records = await this.prisma.capacitySlot.findMany({
      where: { outletId, slotDate: date },
      orderBy: { startTime: "asc" },
    });
    return records.map((r: any) => this.toSlotDomain(r));
  }

  async saveToken(token: PickupToken): Promise<void> {
    await this.prisma.pickupToken.upsert({
      where: { orderId: token.orderId },
      create: {
        id: token.id,
        orderId: token.orderId,
        outletId: token.outletId,
        tokenNumber: token.tokenNumber,
        status: token.status,
        createdAt: (token as any).props?.createdAt || new Date(),
      },
      update: {
        tokenNumber: token.tokenNumber,
        status: token.status,
      },
    });
  }

  async findTokenByNumber(outletId: string, tokenNumber: string): Promise<PickupToken | null> {
    const record = await this.prisma.pickupToken.findFirst({
      where: { outletId, tokenNumber },
    });
    return record ? this.toTokenDomain(record) : null;
  }

  async findTokenByOrderId(orderId: string): Promise<PickupToken | null> {
    const record = await this.prisma.pickupToken.findUnique({
      where: { orderId },
    });
    return record ? this.toTokenDomain(record) : null;
  }

  async getNextTokenSequence(outletId: string): Promise<number> {
    const today = new Date().toISOString().slice(0, 10);
    const result = await this.prisma.$queryRaw<Array<{ last_sequence: number | bigint }>>`
      INSERT INTO outlet_token_sequences (id, outlet_id, seq_date, last_sequence, updated_at)
      VALUES (gen_random_uuid(), ${outletId}, ${today}, 1, NOW())
      ON CONFLICT (outlet_id, seq_date)
      DO UPDATE SET last_sequence = outlet_token_sequences.last_sequence + 1, updated_at = NOW()
      RETURNING last_sequence
    `;
    return Number(result[0].last_sequence);
  }

  async reserveSlot(slotId: string): Promise<void> {
    await this.prisma.$transaction(async (tx: any) => {
      const slot = await tx.capacitySlot.findUnique({ where: { id: slotId } });
      if (!slot || slot.reservedCount >= slot.maxCapacity) {
        throw new SlotCapacityExceededError(slotId);
      }
      const updated = await tx.capacitySlot.updateMany({
        where: { id: slotId, version: slot.version, reservedCount: { lt: slot.maxCapacity } },
        data: { reservedCount: { increment: 1 }, version: { increment: 1 } },
      });
      if (updated.count === 0) {
        throw new SlotCapacityExceededError(slotId);
      }
    });
  }

  private toSlotDomain(record: any): CapacitySlot {
    return new CapacitySlot({
      id: record.id,
      outletId: record.outletId,
      slotDate: record.slotDate,
      startTime: record.startTime,
      endTime: record.endTime,
      maxCapacity: record.maxCapacity,
      reservedCount: record.reservedCount,
      isWalkIn: record.isWalkIn ?? false,
    });
  }

  private toTokenDomain(record: any): PickupToken {
    return new PickupToken({
      id: record.id,
      orderId: record.orderId,
      outletId: record.outletId,
      tokenNumber: record.tokenNumber,
      status: record.status as any,
      createdAt: record.createdAt,
    });
  }
}
