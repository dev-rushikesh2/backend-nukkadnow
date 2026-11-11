import { EventEnvelope } from "./envelope";

export interface PickupReservedPayload {
  reservationId: string;
  orderId: string;
  outletId: string;
  slotStartTime: string;
  slotEndTime: string;
  tokenNumber: string;
}

export type PickupReservedEvent = EventEnvelope<PickupReservedPayload>;

export interface OrderReadyPayload {
  orderId: string;
  outletId: string;
  tokenNumber: string;
  readyAt: string;
}

export type OrderReadyEvent = EventEnvelope<OrderReadyPayload>;
