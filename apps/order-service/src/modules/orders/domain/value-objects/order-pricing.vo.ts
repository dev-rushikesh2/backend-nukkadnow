import { Money } from "@nukkadnow/platform-kernel";

export interface PricingProps {
  subtotalPaise: number;
  packagingPaise: number;
  deliveryPaise: number;
  taxPaise: number;
}

export class OrderPricing {
  readonly subtotalPaise: number;
  readonly packagingPaise: number;
  readonly deliveryPaise: number;
  readonly taxPaise: number;
  readonly totalAmountPaise: number;

  constructor(props: PricingProps) {
    if (!Number.isInteger(props.subtotalPaise) || props.subtotalPaise < 0) {
      throw new Error(`Subtotal must be non-negative integer paise: ${props.subtotalPaise}`);
    }
    this.subtotalPaise = props.subtotalPaise;
    this.packagingPaise = props.packagingPaise || 0;
    this.deliveryPaise = props.deliveryPaise || 0;
    this.taxPaise = props.taxPaise || 0;
    this.totalAmountPaise = this.subtotalPaise + this.packagingPaise + this.deliveryPaise + this.taxPaise;
  }

  get totalMoney(): Money {
    return Money.fromPaise(this.totalAmountPaise);
  }
}
