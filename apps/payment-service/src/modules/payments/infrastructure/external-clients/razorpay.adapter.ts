import { Injectable } from "@nestjs/common";
import { PspClientPort, PspOrderResult, PspRefundResult } from "./psp-client.port";
import { StructuredLogger } from "@nukkadnow/observability";
import * as crypto from "crypto";

@Injectable()
export class RazorpayAdapter implements PspClientPort {
  private readonly logger = new StructuredLogger("razorpay-adapter");
  private readonly keyId: string;
  private readonly keySecret: string;
  private readonly webhookSecret: string;

  constructor() {
    if (!process.env.PAYMENT_KEY_ID || !process.env.PAYMENT_KEY_SECRET) {
      throw new Error("PAYMENT_KEY_ID and PAYMENT_KEY_SECRET are required");
    }
    if (!process.env.PAYMENT_WEBHOOK_SECRET) {
      throw new Error("PAYMENT_WEBHOOK_SECRET is required");
    }

    this.keyId = process.env.PAYMENT_KEY_ID;
    this.keySecret = process.env.PAYMENT_KEY_SECRET;
    this.webhookSecret = process.env.PAYMENT_WEBHOOK_SECRET;
  }

  async createOrder(orderId: string, amountPaise: number, currency: string): Promise<PspOrderResult> {
    try {
      const auth = Buffer.from(`${this.keyId}:${this.keySecret}`).toString("base64");
      const response = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          "Authorization": `Basic ${auth}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amountPaise,
          currency: currency.toUpperCase(),
          receipt: orderId,
        }),
      });

      const data = (await response.json()) as any;
      if (!response.ok) {
        throw new Error(`Razorpay Error: ${data.error?.description || "Unknown"}`);
      }

      return { pspOrderId: data.id, status: data.status, rawResponse: data };
    } catch (err: any) {
      this.logger.error("Failed to create Razorpay order", err);
      throw err;
    }
  }

  verifyWebhookSignature(payload: any, signature: string): boolean {
    if (!signature) return false;
    const bodyStr = typeof payload === "string" ? payload : JSON.stringify(payload);
    const expected = crypto.createHmac("sha256", this.webhookSecret).update(bodyStr).digest("hex");
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  }

  async createRefund(pspPaymentId: string, amountPaise: number, reason: string): Promise<PspRefundResult> {
    const auth = Buffer.from(`${this.keyId}:${this.keySecret}`).toString("base64");
    const response = await fetch(`https://api.razorpay.com/v1/payments/${pspPaymentId}/refund`, {
      method: "POST",
      headers: {
        "Authorization": `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amountPaise,
        notes: { reason },
      }),
    });

    const data = (await response.json()) as any;
    if (!response.ok) {
      throw new Error(`Razorpay Refund Error: ${data.error?.description || "Failed to process refund"}`);
    }

    return { pspRefundId: data.id, status: data.status, rawResponse: data };
  }
}
