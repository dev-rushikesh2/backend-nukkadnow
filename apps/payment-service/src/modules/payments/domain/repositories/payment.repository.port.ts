import { PaymentIntent, Payment } from "../entities/payment-intent.entity";

export abstract class PaymentRepositoryPort {
  abstract saveIntent(intent: PaymentIntent): Promise<void>;
  abstract findIntentById(id: string): Promise<PaymentIntent | null>;
  abstract findIntentByOrderId(orderId: string): Promise<PaymentIntent | null>;
  abstract savePayment(payment: Payment): Promise<void>;
  abstract findPaymentById(id: string): Promise<Payment | null>;
  abstract isWebhookProcessed(eventId: string): Promise<boolean>;
  abstract markWebhookProcessed(eventId: string, provider?: string, payload?: any): Promise<void>;
  abstract saveRefund?(refund: {
    id: string;
    paymentId: string;
    orderId: string;
    amountPaise: number;
    reason: string;
    status: string;
    pspRefundId?: string;
  }): Promise<void>;
}
