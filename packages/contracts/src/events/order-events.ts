import { EventEnvelope } from "./envelope";

export interface OrderCreatedPayload {
  orderId: string;
  customerId: string;
  tenantId: string;
  outletId: string;
  items: Array<{
    productId: string;
    variantId: string;
    quantity: number;
    unitPricePaise: number;
  }>;
  totalAmountPaise: number;
  pickupSlotId?: string;
}

export type OrderCreatedEvent = EventEnvelope<OrderCreatedPayload>;

export interface OrderCancelledPayload {
  orderId: string;
  tenantId: string;
  outletId: string;
  reason: string;
  cancelledBy: "CUSTOMER" | "MERCHANT" | "SYSTEM";
}

export type OrderCancelledEvent = EventEnvelope<OrderCancelledPayload>;

export interface OrderAcceptedPayload {
  orderId: string;
  tenantId: string;
  outletId: string;
  estimatedReadyAt: string;
}

export type OrderAcceptedEvent = EventEnvelope<OrderAcceptedPayload>;
