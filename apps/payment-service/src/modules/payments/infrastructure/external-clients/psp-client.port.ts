export interface PspOrderResult {
  pspOrderId: string;
  status: string;
  rawResponse?: any;
}

export interface PspRefundResult {
  pspRefundId: string;
  status: string;
  rawResponse?: any;
}

export abstract class PspClientPort {
  abstract createOrder(orderId: string, amountPaise: number, currency: string): Promise<PspOrderResult>;
  abstract verifyWebhookSignature(payload: any, signature: string): boolean;
  abstract createRefund(pspPaymentId: string, amountPaise: number, reason: string): Promise<PspRefundResult>;
}
