export interface PlanProps {
  id: string;
  name: string;
  code: "STARTER" | "GROWTH" | "ENTERPRISE";
  pricePaise: number;
  maxProducts: number;
  qrOrderingEnabled: boolean;
}

export class SubscriptionPlan {
  constructor(private props: PlanProps) {}

  get id(): string { return this.props.id; }
  get name(): string { return this.props.name; }
  get code(): string { return this.props.code; }
  get pricePaise(): number { return this.props.pricePaise; }
  get maxProducts(): number { return this.props.maxProducts; }
  get qrOrderingEnabled(): boolean { return this.props.qrOrderingEnabled; }
}

export interface SubProps {
  id: string;
  merchantId: string;
  planCode: string;
  status: "ACTIVE" | "EXPIRED" | "CANCELLED";
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
}

export class MerchantSubscription {
  constructor(private props: SubProps) {}

  get id(): string { return this.props.id; }
  get merchantId(): string { return this.props.merchantId; }
  get planCode(): string { return this.props.planCode; }
  get status(): string { return this.props.status; }

  isActive(): boolean {
    return this.props.status === "ACTIVE" && this.props.currentPeriodEnd.getTime() > Date.now();
  }
}

export abstract class SubscriptionRepositoryPort {
  abstract savePlan(plan: SubscriptionPlan): Promise<void>;
  abstract findPlanByCode(code: string): Promise<SubscriptionPlan | null>;
  abstract findAllPlans(): Promise<SubscriptionPlan[]>;
  abstract saveSubscription(sub: MerchantSubscription): Promise<void>;
  abstract findSubscriptionByMerchant(merchantId: string): Promise<MerchantSubscription | null>;
}
