import { Money } from "@nukkadnow/platform-kernel";

export interface IntentProps {
  id: string;
  orderId: string;
  tenantId: string;
  amountPaise: number;
  currency: string;
  status: "CREATED" | "SUCCEEDED" | "FAILED";
  provider: "RAZORPAY" | "CASHFREE" | "MOCK";
  pspReference?: string;
  createdAt: Date;
}

export class PaymentIntent {
  constructor(private props: IntentProps) {}

  get id(): string { return this.props.id; }
  get orderId(): string { return this.props.orderId; }
  get tenantId(): string { return this.props.tenantId; }
  get amountPaise(): number { return this.props.amountPaise; }
  get currency(): string { return this.props.currency; }
  get status(): string { return this.props.status; }
  get provider(): string { return this.props.provider; }
  get pspReference(): string | undefined { return this.props.pspReference; }

  get amountMoney(): Money {
    return Money.fromPaise(this.props.amountPaise, this.props.currency);
  }

  markSucceeded(pspRef: string): void {
    this.props.status = "SUCCEEDED";
    this.props.pspReference = pspRef;
  }

  markFailed(): void {
    this.props.status = "FAILED";
  }
}

export interface PaymentProps {
  id: string;
  intentId: string;
  orderId: string;
  amountPaise: number;
  pspPaymentId: string;
  status: "CONFIRMED" | "REFUNDED" | "PARTIALLY_REFUNDED";
  refundedAmountPaise: number;
  verifiedAt: Date;
}

export class Payment {
  constructor(private props: PaymentProps) {}

  get id(): string { return this.props.id; }
  get intentId(): string { return this.props.intentId; }
  get orderId(): string { return this.props.orderId; }
  get amountPaise(): number { return this.props.amountPaise; }
  get pspPaymentId(): string { return this.props.pspPaymentId; }
  get status(): string { return this.props.status; }
  get refundedAmountPaise(): number { return this.props.refundedAmountPaise; }

  addRefund(refundPaise: number): void {
    if (this.props.refundedAmountPaise + refundPaise > this.props.amountPaise) {
      throw new Error("Total refunds cannot exceed original payment amount.");
    }
    this.props.refundedAmountPaise += refundPaise;
    this.props.status = this.props.refundedAmountPaise === this.props.amountPaise ? "REFUNDED" : "PARTIALLY_REFUNDED";
  }
}
