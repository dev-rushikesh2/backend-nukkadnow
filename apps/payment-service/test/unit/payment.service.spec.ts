import { PaymentService } from "../../src/modules/payments/application/services/payment.service";
import { InMemoryPaymentRepository } from "../../src/modules/payments/infrastructure/persistence/repositories/in-memory-payment.repository";
import { PspClientFactory } from "../../src/modules/payments/infrastructure/external-clients/psp-client-factory.service";
import { MockPspAdapter } from "../../src/modules/payments/infrastructure/external-clients/mock-psp.adapter";
import { RazorpayAdapter } from "../../src/modules/payments/infrastructure/external-clients/razorpay.adapter";
import { InvalidWebhookSignatureError } from "../../src/modules/payments/domain/errors/payment-errors";
import * as crypto from "crypto";

describe("Payment Service (Sprint 9)", () => {
  let service: PaymentService;
  let repo: InMemoryPaymentRepository;

  beforeEach(() => {
    repo = new InMemoryPaymentRepository();
    const mock = new MockPspAdapter();
    const rzp = new RazorpayAdapter();
    const factory = new PspClientFactory(mock, rzp);
    service = new PaymentService(repo, factory);
  });

  it("should create a payment intent in integer paise", async () => {
    const intent = await service.createPaymentIntent({
      orderId: "order_101",
      tenantId: "tenant_A",
      amountPaise: 13600, // Rs. 136.00
      provider: "RAZORPAY",
    });

    expect(intent.intentId).toBeDefined();
    expect(intent.amountPaise).toBe(13600);
    expect(intent.provider).toBe("RAZORPAY");
  });

  it("should confirm payment on signed PSP webhook and prevent duplicate processing", async () => {
    await service.createPaymentIntent({
      orderId: "order_102",
      tenantId: "tenant_A",
      amountPaise: 25000,
      provider: "RAZORPAY",
    });

    const payload = {
      eventId: "evt_razorpay_999",
      orderId: "order_102",
      paymentId: "pay_rzp_123456",
    };

    const secret = "webhook_signing_secret_xyz";
    const signature = crypto
      .createHmac("sha256", secret)
      .update(JSON.stringify(payload))
      .digest("hex");

    // 1st webhook call
    const result1 = await service.handlePspWebhook("RAZORPAY", payload, signature);
    expect(result1.status).toBe("confirmed");
    expect(result1.paymentId).toBeDefined();

    // 2nd duplicate webhook call (same eventId) -> Deduplicated
    const result2 = await service.handlePspWebhook("RAZORPAY", payload, signature);
    expect(result2.status).toBe("duplicate_skipped");
  });

  it("should reject tampered or forged webhook signatures", async () => {
    const payload = {
      eventId: "evt_tampered",
      orderId: "order_103",
    };

    await expect(
      service.handlePspWebhook("RAZORPAY", payload, "forged_invalid_signature_hex")
    ).rejects.toThrow(InvalidWebhookSignatureError);
  });

  it("should process partial and full refunds with limit validation", async () => {
    await service.createPaymentIntent({
      orderId: "order_104",
      tenantId: "tenant_A",
      amountPaise: 10000, // Rs 100
      provider: "MOCK",
    });

    const confirmed = await service.handlePspWebhook("MOCK", {
      eventId: "evt_mock_1",
      orderId: "order_104",
    });

    // 1. Partial refund of Rs 40 (4000 paise)
    const refund1 = await service.processRefund({
      paymentId: confirmed.paymentId,
      amountPaise: 4000,
      reason: "Damaged packaging",
    });
    expect(refund1.currentStatus).toBe("PARTIALLY_REFUNDED");
    expect(refund1.refundedAmountPaise).toBe(4000);

    // 2. Remaining refund of Rs 60 (6000 paise)
    const refund2 = await service.processRefund({
      paymentId: confirmed.paymentId,
      amountPaise: 6000,
      reason: "Item sour taste",
    });
    expect(refund2.currentStatus).toBe("REFUNDED");

    // 3. Attempting further refund should throw error
    await expect(
      service.processRefund({
        paymentId: confirmed.paymentId,
        amountPaise: 1000,
        reason: "Excess refund attempt",
      })
    ).rejects.toThrow("Total refunds cannot exceed original payment amount.");
  });
});
