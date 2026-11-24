import { Injectable } from "@nestjs/common";
import { PaymentRepositoryPort } from "../../../domain/repositories/payment.repository.port";
import { PaymentIntent, Payment } from "../../../domain/entities/payment-intent.entity";
import { PrismaService } from "../prisma/prisma.service";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class PrismaPaymentRepository implements PaymentRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async saveIntent(intent: PaymentIntent): Promise<void> {
    await this.prisma.paymentIntent.upsert({
      where: { id: intent.id },
      create: {
        id: intent.id,
        orderId: intent.orderId,
        tenantId: intent.tenantId,
        amountPaise: intent.amountPaise,
        currency: intent.currency,
        status: intent.status,
        provider: intent.provider,
        pspReference: intent.pspReference ?? null,
      },
      update: {
        status: intent.status,
        pspReference: intent.pspReference ?? null,
      },
    });
  }

  async findIntentById(id: string): Promise<PaymentIntent | null> {
    const record = await this.prisma.paymentIntent.findUnique({ where: { id } });
    return record ? this.toIntentDomain(record) : null;
  }

  async findIntentByOrderId(orderId: string): Promise<PaymentIntent | null> {
    const record = await this.prisma.paymentIntent.findUnique({ where: { orderId } });
    return record ? this.toIntentDomain(record) : null;
  }

  async savePayment(payment: Payment): Promise<void> {
    await this.prisma.payment.upsert({
      where: { id: payment.id },
      create: {
        id: payment.id,
        intentId: payment.intentId,
        orderId: payment.orderId,
        amountPaise: payment.amountPaise,
        pspPaymentId: payment.pspPaymentId,
        status: payment.status,
        verifiedAt: (payment as any).props?.verifiedAt || new Date(),
      },
      update: {
        status: payment.status,
        pspPaymentId: payment.pspPaymentId,
      },
    });
  }

  async findPaymentById(id: string): Promise<Payment | null> {
    const record = await this.prisma.payment.findUnique({
      where: { id },
      include: { refunds: true },
    });
    return record ? this.toPaymentDomain(record) : null;
  }

  async isWebhookProcessed(eventId: string): Promise<boolean> {
    const record = await this.prisma.webhookInbox.findUnique({ where: { eventId } });
    return record?.isProcessed ?? false;
  }

  async markWebhookProcessed(eventId: string, provider?: string, payload?: any): Promise<void> {
    await this.prisma.webhookInbox.upsert({
      where: { eventId },
      create: {
        id: UniqueIdentifier.generateV7(),
        provider: provider || "PSP",
        eventId,
        payload: payload || {},
        isProcessed: true,
        processedAt: new Date(),
      },
      update: {
        isProcessed: true,
        processedAt: new Date(),
      },
    });
  }

  async saveRefund(refund: {
    id: string;
    paymentId: string;
    orderId: string;
    amountPaise: number;
    reason: string;
    status: string;
    pspRefundId?: string;
  }): Promise<void> {
    await this.prisma.refund.create({
      data: {
        id: refund.id,
        paymentId: refund.paymentId,
        orderId: refund.orderId,
        amountPaise: refund.amountPaise,
        reason: refund.reason,
        status: refund.status,
        pspRefundId: refund.pspRefundId ?? null,
      },
    });
  }

  private toIntentDomain(record: any): PaymentIntent {
    return new PaymentIntent({
      id: record.id,
      orderId: record.orderId,
      tenantId: record.tenantId,
      amountPaise: record.amountPaise,
      currency: record.currency,
      status: record.status as any,
      provider: record.provider as any,
      pspReference: record.pspReference ?? undefined,
      createdAt: record.createdAt,
    });
  }

  private toPaymentDomain(record: any): Payment {
    const totalRefunded = (record.refunds || []).reduce(
      (sum: number, r: any) => sum + r.amountPaise,
      0
    );

    return new Payment({
      id: record.id,
      intentId: record.intentId,
      orderId: record.orderId,
      amountPaise: record.amountPaise,
      pspPaymentId: record.pspPaymentId,
      status: record.status as any,
      refundedAmountPaise: totalRefunded,
      verifiedAt: record.verifiedAt,
    });
  }
}
