import { EventEnvelope } from "./envelope";

export interface StockChangedPayload {
  productId: string;
  variantId: string;
  outletId: string;
  oldQuantity: number;
  newQuantity: number;
  changeReason: "ORDER_RESERVATION" | "RESTOCK" | "WASTE_ADJUSTMENT" | "ORDER_CANCELLATION";
}

export type StockChangedEvent = EventEnvelope<StockChangedPayload>;
