import { PaymentIntent, Payment } from "../entities/payment-intent.entity";

export abstract class PaymentRepositoryPort {
  abstract saveIntent(intent: PaymentIntent): Promise<void>;
  abstract findIntentById(id: string): Promise<PaymentIntent | null>;
  abstract findIntentByOrderId(orderId: string): Promise<PaymentIntent | null>;
  abstract savePayment(payment: Payment): Promise<void>;
  abstract findPaymentById(id: string): Promise<Payment | null>;
  abstract isWebhookProcessed(eventId: string): Promise<boolean>;
  abstract markWebhookProcessed(eventId: string): Promise<void>;
}
