import { DomainError } from "@nukkadnow/platform-kernel";

export class InvalidWebhookSignatureError extends DomainError {
  readonly code = "INVALID_WEBHOOK_SIGNATURE";
  constructor() {
    super("Cryptographic webhook signature verification failed. Rejecting untrusted payload.");
  }
}

export class PaymentIntentNotFoundError extends DomainError {
  readonly code = "PAYMENT_INTENT_NOT_FOUND";
  constructor(id: string) {
    super(`Payment intent '${id}' was not found.`);
  }
}

export class PaymentNotFoundError extends DomainError {
  readonly code = "PAYMENT_NOT_FOUND";
  constructor(id: string) {
    super(`Payment '${id}' was not found.`);
  }
}
