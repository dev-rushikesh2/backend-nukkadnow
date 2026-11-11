import { Injectable } from "@nestjs/common";
import { SubscriptionRepositoryPort, SubscriptionPlan, MerchantSubscription } from "../../../domain/entities/subscription-plan.entity";

@Injectable()
export class InMemorySubscriptionRepository implements SubscriptionRepositoryPort {
  private plans = new Map<string, SubscriptionPlan>();
  private subs = new Map<string, MerchantSubscription>();

  async savePlan(plan: SubscriptionPlan): Promise<void> {
    this.plans.set(plan.code, plan);
  }

  async findPlanByCode(code: string): Promise<SubscriptionPlan | null> {
    return this.plans.get(code) || null;
  }

  async findAllPlans(): Promise<SubscriptionPlan[]> {
    return Array.from(this.plans.values());
  }

  async saveSubscription(sub: MerchantSubscription): Promise<void> {
    this.subs.set(sub.merchantId, sub);
  }

  async findSubscriptionByMerchant(merchantId: string): Promise<MerchantSubscription | null> {
    return this.subs.get(merchantId) || null;
  }
}
