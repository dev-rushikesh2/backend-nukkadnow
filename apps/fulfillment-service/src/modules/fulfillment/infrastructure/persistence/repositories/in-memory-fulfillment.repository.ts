import { Injectable } from "@nestjs/common";
import { FulfillmentRepositoryPort } from "../../../domain/repositories/fulfillment.repository.port";
import { CapacitySlot, PickupToken } from "../../../domain/entities/capacity-slot.entity";

@Injectable()
export class InMemoryFulfillmentRepository implements FulfillmentRepositoryPort {
  private slots = new Map<string, CapacitySlot>();
  private tokens = new Map<string, PickupToken>();
  private sequences = new Map<string, number>();

  async saveSlot(slot: CapacitySlot): Promise<void> {
    this.slots.set(slot.id, slot);
  }

  async findSlotById(id: string): Promise<CapacitySlot | null> {
    return this.slots.get(id) || null;
  }

  async findSlotsByOutletAndDate(outletId: string, date: string): Promise<CapacitySlot[]> {
    return Array.from(this.slots.values()).filter(
      s => s.outletId === outletId && s.slotDate === date
    );
  }

  async saveToken(token: PickupToken): Promise<void> {
    this.tokens.set(`${token.outletId}:${token.tokenNumber}`, token);
  }

  async findTokenByNumber(outletId: string, tokenNumber: string): Promise<PickupToken | null> {
    return this.tokens.get(`${outletId}:${tokenNumber}`) || null;
  }

  async findTokenByOrderId(orderId: string): Promise<PickupToken | null> {
    for (const t of this.tokens.values()) {
      if (t.orderId === orderId) return t;
    }
    return null;
  }

  async getNextTokenSequence(outletId: string): Promise<number> {
    const current = this.sequences.get(outletId) || 0;
    const next = current + 1;
    this.sequences.set(outletId, next);
    return next;
  }
}
