import { Injectable } from "@nestjs/common";
import { SubscriptionRepositoryPort, SubscriptionPlan, MerchantSubscription } from "../../../domain/entities/subscription-plan.entity";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaSubscriptionRepository implements SubscriptionRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async savePlan(plan: SubscriptionPlan): Promise<void> {
    await this.prisma.subscriptionPlan.upsert({
      where: { code: plan.code },
      create: {
        id: plan.id,
        name: plan.name,
        code: plan.code,
        pricePaise: plan.pricePaise,
        billingCycle: "MONTHLY",
        features: {
          maxProducts: plan.maxProducts,
          qrOrderingEnabled: plan.qrOrderingEnabled,
        },
      },
      update: {
        name: plan.name,
        pricePaise: plan.pricePaise,
        features: {
          maxProducts: plan.maxProducts,
          qrOrderingEnabled: plan.qrOrderingEnabled,
        },
      },
    });
  }

  async findPlanByCode(code: string): Promise<SubscriptionPlan | null> {
    const record = await this.prisma.subscriptionPlan.findUnique({
      where: { code },
    });
    return record ? this.toPlanDomain(record) : null;
  }

  async findAllPlans(): Promise<SubscriptionPlan[]> {
    const records = await this.prisma.subscriptionPlan.findMany({
      orderBy: { pricePaise: "asc" },
    });
    return records.map((r: any) => this.toPlanDomain(r));
  }

  async saveSubscription(sub: MerchantSubscription): Promise<void> {
    let planId = sub.planId;
    if (!planId) {
      const plan = await this.prisma.subscriptionPlan.findUnique({
        where: { code: sub.planCode },
      });
      if (!plan) {
        throw new Error(`Cannot save subscription: Plan '${sub.planCode}' does not exist.`);
      }
      planId = plan.id;
    }

    await this.prisma.merchantSubscription.upsert({
      where: { merchantId: sub.merchantId },
      create: {
        id: sub.id,
        merchantId: sub.merchantId,
        planId: planId!,
        status: sub.status,
        currentPeriodStart: sub.currentPeriodStart,
        currentPeriodEnd: sub.currentPeriodEnd,
      },
      update: {
        planId: planId!,
        status: sub.status,
        currentPeriodStart: sub.currentPeriodStart,
        currentPeriodEnd: sub.currentPeriodEnd,
      },
    });

    const plan = await this.prisma.subscriptionPlan.findUnique({ where: { id: planId } });
    if (plan) {
      const features = (plan.features as any) || {};
      await this.prisma.entitlement.upsert({
        where: {
          merchantId_featureCode: {
            merchantId: sub.merchantId,
            featureCode: "MAX_PRODUCTS",
          },
        },
        create: {
          merchantId: sub.merchantId,
          featureCode: "MAX_PRODUCTS",
          isEnabled: true,
          limitValue: features.maxProducts ?? 25,
        },
        update: {
          isEnabled: true,
          limitValue: features.maxProducts ?? 25,
        },
      });

      await this.prisma.entitlement.upsert({
        where: {
          merchantId_featureCode: {
            merchantId: sub.merchantId,
            featureCode: "QR_ORDERING",
          },
        },
        create: {
          merchantId: sub.merchantId,
          featureCode: "QR_ORDERING",
          isEnabled: features.qrOrderingEnabled ?? false,
        },
        update: {
          isEnabled: features.qrOrderingEnabled ?? false,
        },
      });
    }
  }

  async findSubscriptionByMerchant(merchantId: string): Promise<MerchantSubscription | null> {
    const record = await this.prisma.merchantSubscription.findUnique({
      where: { merchantId },
      include: { plan: true },
    });
    return record ? this.toSubDomain(record) : null;
  }

  private toPlanDomain(record: any): SubscriptionPlan {
    const features = (record.features as any) || {};
    return new SubscriptionPlan({
      id: record.id,
      name: record.name,
      code: record.code as any,
      pricePaise: record.pricePaise,
      maxProducts: features.maxProducts ?? (record.code === "STARTER" ? 25 : record.code === "GROWTH" ? 250 : 5000),
      qrOrderingEnabled: features.qrOrderingEnabled ?? (record.code !== "STARTER"),
    });
  }

  private toSubDomain(record: any): MerchantSubscription {
    return new MerchantSubscription({
      id: record.id,
      merchantId: record.merchantId,
      planCode: record.plan?.code || "STARTER",
      planId: record.planId,
      status: record.status as any,
      currentPeriodStart: record.currentPeriodStart,
      currentPeriodEnd: record.currentPeriodEnd,
    });
  }
}
