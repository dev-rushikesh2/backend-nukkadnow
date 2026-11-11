import { Injectable } from "@nestjs/common";
import { PaymentRepositoryPort } from "../../../domain/repositories/payment.repository.port";
import { PaymentIntent, Payment } from "../../../domain/entities/payment-intent.entity";

@Injectable()
export class InMemoryPaymentRepository implements PaymentRepositoryPort {
  private intents = new Map<string, PaymentIntent>();
  private payments = new Map<string, Payment>();
  private processedWebhooks = new Set<string>();

  async saveIntent(intent: PaymentIntent): Promise<void> {
    this.intents.set(intent.id, intent);
  }

  async findIntentById(id: string): Promise<PaymentIntent | null> {
    return this.intents.get(id) || null;
  }

  async findIntentByOrderId(orderId: string): Promise<PaymentIntent | null> {
    for (const intent of this.intents.values()) {
      if (intent.orderId === orderId) return intent;
    }
    return null;
  }

  async savePayment(payment: Payment): Promise<void> {
    this.payments.set(payment.id, payment);
  }

  async findPaymentById(id: string): Promise<Payment | null> {
    return this.payments.get(id) || null;
  }

  async isWebhookProcessed(eventId: string): Promise<boolean> {
    return this.processedWebhooks.has(eventId);
  }

  async markWebhookProcessed(eventId: string): Promise<void> {
    this.processedWebhooks.add(eventId);
  }
}
