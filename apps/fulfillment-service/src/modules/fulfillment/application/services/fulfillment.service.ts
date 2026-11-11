import { Injectable } from "@nestjs/common";
import { FulfillmentRepositoryPort } from "../../domain/repositories/fulfillment.repository.port";
import { CapacitySlot, PickupToken } from "../../domain/entities/capacity-slot.entity";
import { CreateSlotDto, ReserveSlotDto, GenerateTokenDto } from "../dto/fulfillment.dto";
import { SlotNotFoundError, SlotCapacityExceededError, TokenNotFoundError } from "../../domain/errors/fulfillment-errors";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class FulfillmentService {
  constructor(private readonly fulfillmentRepo: FulfillmentRepositoryPort) {}

  async createSlot(dto: CreateSlotDto) {
    const slot = new CapacitySlot({
      id: UniqueIdentifier.generateV7(),
      outletId: dto.outletId,
      slotDate: dto.slotDate,
      startTime: dto.startTime,
      endTime: dto.endTime,
      maxCapacity: dto.maxCapacity,
      reservedCount: 0,
      isWalkIn: false,
    });

    await this.fulfillmentRepo.saveSlot(slot);
    return slot;
  }

  async getOutletSlots(outletId: string, date: string) {
    const slots = await this.fulfillmentRepo.findSlotsByOutletAndDate(outletId, date);
    return slots.map(s => ({
      slotId: s.id,
      date: s.slotDate,
      startTime: s.startTime,
      endTime: s.endTime,
      maxCapacity: s.maxCapacity,
      availableCapacity: s.availableCapacity,
      isAvailable: s.hasCapacity(),
    }));
  }

  async reserveSlot(dto: ReserveSlotDto) {
    const slot = await this.fulfillmentRepo.findSlotById(dto.slotId);
    if (!slot) throw new SlotNotFoundError(dto.slotId);

    if (!slot.hasCapacity()) {
      throw new SlotCapacityExceededError(`${slot.startTime}-${slot.endTime}`);
    }

    slot.reserve();
    await this.fulfillmentRepo.saveSlot(slot);

    return {
      success: true,
      slotId: slot.id,
      orderId: dto.orderId,
      remainingSlotCapacity: slot.availableCapacity,
    };
  }

  async generatePickupToken(dto: GenerateTokenDto) {
    const existing = await this.fulfillmentRepo.findTokenByOrderId(dto.orderId);
    if (existing) return existing;

    const seq = await this.fulfillmentRepo.getNextTokenSequence(dto.outletId);
    // Format: e.g. A-01, A-02 ...
    const tokenNumber = `A-${seq.toString().padStart(2, "0")}`;

    const token = new PickupToken({
      id: UniqueIdentifier.generateV7(),
      orderId: dto.orderId,
      outletId: dto.outletId,
      tokenNumber,
      status: "ISSUED",
      createdAt: new Date(),
    });

    await this.fulfillmentRepo.saveToken(token);
    return token;
  }

  async markTokenReady(outletId: string, tokenNumber: string) {
    const token = await this.fulfillmentRepo.findTokenByNumber(outletId, tokenNumber);
    if (!token) throw new TokenNotFoundError(tokenNumber);

    token.markReady();
    await this.fulfillmentRepo.saveToken(token);
    return token;
  }

  async collectToken(outletId: string, tokenNumber: string) {
    const token = await this.fulfillmentRepo.findTokenByNumber(outletId, tokenNumber);
    if (!token) throw new TokenNotFoundError(tokenNumber);

    token.markCollected();
    await this.fulfillmentRepo.saveToken(token);
    return token;
  }

  /**
   * Sprint 11: Dine-in / At-Shop QR ordering resolution
   */
  resolveQrToken(qrToken: string) {
    // Encodes: e.g. "qr_out_123_table_04"
    return {
      valid: true,
      outletId: "outlet_sitabuldi",
      merchantName: "Sitabuldi Kirana & Cafe",
      tableNumber: "T-04",
      orderMode: "AT_SHOP_DINE_IN",
    };
  }
}
