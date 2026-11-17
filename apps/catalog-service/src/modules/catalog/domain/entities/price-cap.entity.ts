import { Money } from "@nukkadnow/platform-kernel";

export type PriceCapScope = "GLOBAL" | "CATEGORY" | "SUB_CATEGORY" | "LOCALITY" | "SPECIFIC_PRODUCT";

export interface AdminPriceCapRuleProps {
  id: string;
  scope: PriceCapScope;
  targetKey: string; // e.g. "Dairy & Milk", "Nagpur-Central", "*"
  maxPricePaise: number;
  enforceMrpCap: boolean;
  reason: string;
  isActive: boolean;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export class AdminPriceCapRule {
  constructor(private props: AdminPriceCapRuleProps) {
    if (!Number.isInteger(props.maxPricePaise) || props.maxPricePaise <= 0) {
      throw new Error(`Max price cap must be a positive integer in paise, received: ${props.maxPricePaise}`);
    }
  }

  get id(): string { return this.props.id; }
  get scope(): PriceCapScope { return this.props.scope; }
  get targetKey(): string { return this.props.targetKey; }
  get maxPricePaise(): number { return this.props.maxPricePaise; }
  get enforceMrpCap(): boolean { return this.props.enforceMrpCap; }
  get reason(): string { return this.props.reason; }
  get isActive(): boolean { return this.props.isActive; }
  get createdBy(): string { return this.props.createdBy; }
  get createdAt(): Date { return this.props.createdAt; }
  get updatedAt(): Date { return this.props.updatedAt; }

  get maxPriceMoney(): Money {
    return Money.fromPaise(this.props.maxPricePaise);
  }

  deactivate(): void {
    this.props.isActive = false;
    this.props.updatedAt = new Date();
  }
}
