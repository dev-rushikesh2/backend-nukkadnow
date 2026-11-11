import { CapacitySlot, PickupToken } from "../entities/capacity-slot.entity";

export abstract class FulfillmentRepositoryPort {
  abstract saveSlot(slot: CapacitySlot): Promise<void>;
  abstract findSlotById(id: string): Promise<CapacitySlot | null>;
  abstract findSlotsByOutletAndDate(outletId: string, date: string): Promise<CapacitySlot[]>;
  abstract saveToken(token: PickupToken): Promise<void>;
  abstract findTokenByNumber(outletId: string, tokenNumber: string): Promise<PickupToken | null>;
  abstract findTokenByOrderId(orderId: string): Promise<PickupToken | null>;
  abstract getNextTokenSequence(outletId: string): Promise<number>;
}
