import { EventEnvelope } from "./envelope";

export interface PaymentConfirmedPayload {
  paymentId: string;
  orderId: string;
  tenantId: string;
  outletId: string;
  amountPaise: number;
  currency: string;
  provider: string;
  providerPaymentId: string;
  confirmedAt: string;
}

export type PaymentConfirmedEvent = EventEnvelope<PaymentConfirmedPayload>;

export interface RefundCompletedPayload {
  refundId: string;
  paymentId: string;
  orderId: string;
  amountPaise: number;
  reason: string;
  completedAt: string;
}

export type RefundCompletedEvent = EventEnvelope<RefundCompletedPayload>;
