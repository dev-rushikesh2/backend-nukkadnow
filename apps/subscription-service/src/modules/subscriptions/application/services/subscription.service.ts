import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { SubscriptionRepositoryPort, SubscriptionPlan, MerchantSubscription } from "../../domain/entities/subscription-plan.entity";
import { SubscribePlanDto } from "../dto/subscription.dto";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class SubscriptionService {
  constructor(private readonly subRepo: SubscriptionRepositoryPort) {}

  async listPlans() {
    const plans = await this.subRepo.findAllPlans();
    return plans.map(p => ({
      name: p.name,
      code: p.code,
      pricePaise: p.pricePaise,
      priceFormatted: (p.pricePaise / 100).toLocaleString("en-IN", { style: "currency", currency: "INR" }),
      maxProducts: p.maxProducts,
      qrOrderingEnabled: p.qrOrderingEnabled,
    }));
  }

  async subscribe(merchantId: string, dto: SubscribePlanDto) {
    const plan = await this.subRepo.findPlanByCode(dto.planCode);
    if (!plan) throw new NotFoundException(`Plan '${dto.planCode}' not found.`);

    if (plan.pricePaise > 0 && process.env.NODE_ENV === "production" && !dto.paymentId) {
      throw new BadRequestException(`Payment verification required for paid subscription plan '${dto.planCode}'.`);
    }

    const now = new Date();
    const periodEnd = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days

    const sub = new MerchantSubscription({
      id: UniqueIdentifier.generateV7(),
      merchantId,
      planCode: plan.code,
      planId: plan.id,
      status: "ACTIVE",
      currentPeriodStart: now,
      currentPeriodEnd: periodEnd,
    });

    await this.subRepo.saveSubscription(sub);

    return {
      success: true,
      subscriptionId: sub.id,
      merchantId: sub.merchantId,
      planCode: sub.planCode,
      status: sub.status,
    };
  }

  async checkEntitlement(merchantId: string, feature: "QR_ORDERING" | "MAX_PRODUCTS") {
    const sub = await this.subRepo.findSubscriptionByMerchant(merchantId);
    const planCode = sub && sub.isActive() ? sub.planCode : "STARTER"; // Default to STARTER if no active sub
    const plan = await this.subRepo.findPlanByCode(planCode);

    if (feature === "QR_ORDERING") {
      return { feature, enabled: plan?.qrOrderingEnabled ?? false };
    }
    if (feature === "MAX_PRODUCTS") {
      return { feature, maxLimit: plan?.maxProducts ?? 25 };
    }
    return { feature, enabled: false };
  }
}
