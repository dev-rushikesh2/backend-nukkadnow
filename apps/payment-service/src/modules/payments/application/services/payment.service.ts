import { Injectable } from "@nestjs/common";
import { PaymentRepositoryPort } from "../../domain/repositories/payment.repository.port";
import { PaymentIntent, Payment } from "../../domain/entities/payment-intent.entity";
import { CreatePaymentIntentDto, ProcessRefundDto } from "../dto/payment.dto";
import { InvalidWebhookSignatureError, PaymentIntentNotFoundError, PaymentNotFoundError } from "../../domain/errors/payment-errors";
import { PspClientFactory } from "../../infrastructure/external-clients/psp-client-factory.service";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class PaymentService {
  constructor(
    private readonly paymentRepo: PaymentRepositoryPort,
    private readonly pspFactory: PspClientFactory
  ) {}

  async createPaymentIntent(dto: CreatePaymentIntentDto) {
    const pspClient = this.pspFactory.getClient(dto.provider);
    const pspOrder = await pspClient.createOrder(dto.orderId, dto.amountPaise, dto.currency || "INR");

    const intent = new PaymentIntent({
      id: UniqueIdentifier.generateV7(),
      orderId: dto.orderId,
      tenantId: dto.tenantId,
      amountPaise: dto.amountPaise,
      currency: dto.currency || "INR",
      status: "CREATED",
      provider: dto.provider || "MOCK",
      pspReference: pspOrder.pspOrderId,
      createdAt: new Date(),
    });

    await this.paymentRepo.saveIntent(intent);

    return {
      intentId: intent.id,
      orderId: intent.orderId,
      amountPaise: intent.amountPaise,
      currency: intent.currency,
      provider: intent.provider,
      pspOrderId: pspOrder.pspOrderId,
      clientSecret: `psp_token_${intent.id}`,
    };
  }

  /**
   * Cryptographic Webhook Handler (Signature verification + Inbox deduplication)
   */
  async handlePspWebhook(provider: string, payload: any, signature?: string) {
    const pspClient = this.pspFactory.getClient(provider);

    if (provider !== "MOCK") {
      const isValid = pspClient.verifyWebhookSignature(payload, signature || "");
      if (!isValid) {
        throw new InvalidWebhookSignatureError();
      }
    }

    const eventId = payload.eventId || payload.id;
    const isDuplicate = await this.paymentRepo.isWebhookProcessed(eventId);
    if (isDuplicate) {
      return { status: "duplicate_skipped" };
    }

    const orderId = payload.orderId;
    const pspPaymentId = payload.paymentId || `psp_pay_${Date.now()}`;
    const intent = await this.paymentRepo.findIntentByOrderId(orderId);
    if (!intent) {
      throw new PaymentIntentNotFoundError(orderId);
    }

    intent.markSucceeded(pspPaymentId);
    await this.paymentRepo.saveIntent(intent);

    const payment = new Payment({
      id: UniqueIdentifier.generateV7(),
      intentId: intent.id,
      orderId: intent.orderId,
      amountPaise: intent.amountPaise,
      pspPaymentId,
      status: "CONFIRMED",
      refundedAmountPaise: 0,
      verifiedAt: new Date(),
    });

    await this.paymentRepo.savePayment(payment);
    await this.paymentRepo.markWebhookProcessed(eventId);

    return {
      status: "confirmed",
      orderId: intent.orderId,
      paymentId: payment.id,
      amountPaise: payment.amountPaise,
      provider,
    };
  }

  async processRefund(dto: ProcessRefundDto) {
    const payment = await this.paymentRepo.findPaymentById(dto.paymentId);
    if (!payment) throw new PaymentNotFoundError(dto.paymentId);

    const intent = await this.paymentRepo.findIntentById(payment.intentId);
    const pspClient = this.pspFactory.getClient(intent?.provider);

    // Call PSP to execute refund
    const pspRefund = await pspClient.createRefund(payment.pspPaymentId, dto.amountPaise, dto.reason);

    payment.addRefund(dto.amountPaise);
    await this.paymentRepo.savePayment(payment);

    return {
      refundId: UniqueIdentifier.generateV7(),
      paymentId: payment.id,
      pspRefundId: pspRefund.pspRefundId,
      orderId: payment.orderId,
      refundedAmountPaise: dto.amountPaise,
      currentStatus: payment.status,
    };
  }

  async getPayment(paymentId: string) {
    const payment = await this.paymentRepo.findPaymentById(paymentId);
    if (!payment) throw new PaymentNotFoundError(paymentId);
    return payment;
  }
}
