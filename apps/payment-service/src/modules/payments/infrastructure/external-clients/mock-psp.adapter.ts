import { Injectable } from "@nestjs/common";
import { PspClientPort, PspOrderResult, PspRefundResult } from "./psp-client.port";
import { StructuredLogger } from "@nukkadnow/observability";

@Injectable()
export class MockPspAdapter implements PspClientPort {
  private readonly logger = new StructuredLogger("mock-psp-adapter");

  async createOrder(orderId: string, amountPaise: number, currency: string): Promise<PspOrderResult> {
    this.logger.info(`[MOCK PSP] Created order intent for ${orderId} - Amount: ${amountPaise} ${currency}`);
    return {
      pspOrderId: `mock_order_${Date.now()}`,
      status: "created",
    };
  }

  verifyWebhookSignature(_payload: any, _signature: string): boolean {
    return true; // Always valid in mock mode
  }

  async createRefund(pspPaymentId: string, amountPaise: number, reason: string): Promise<PspRefundResult> {
    this.logger.info(`[MOCK PSP] Refund for ${pspPaymentId} - ${amountPaise} paise: ${reason}`);
    return {
      pspRefundId: `mock_rfnd_${Date.now()}`,
      status: "processed",
    };
  }
}
