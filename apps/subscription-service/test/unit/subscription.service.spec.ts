import { SubscriptionService } from "../../src/modules/subscriptions/application/services/subscription.service";
import { InMemorySubscriptionRepository } from "../../src/modules/subscriptions/infrastructure/persistence/repositories/in-memory-subscription.repository";

describe("Subscription Service (Sprint 13)", () => {
  let service: SubscriptionService;
  let repo: InMemorySubscriptionRepository;

  beforeEach(() => {
    repo = new InMemorySubscriptionRepository();
    service = new SubscriptionService(repo);
  });

  it("should list available plans with formatted pricing", async () => {
    const plans = await service.listPlans();
    expect(plans.length).toBeGreaterThanOrEqual(3);

    const starter = plans.find(p => p.code === "STARTER");
    expect(starter?.pricePaise).toBe(0);

    const growth = plans.find(p => p.code === "GROWTH");
    expect(growth?.pricePaise).toBe(99900); // Rs 999.00
    expect(growth?.qrOrderingEnabled).toBe(true);
  });

  it("should enforce authoritative server-side feature entitlements", async () => {
    const merchantId = "merchant_test_1";

    // 1. By default, merchant is on STARTER tier (no active sub)
    const check1 = await service.checkEntitlement(merchantId, "QR_ORDERING");
    expect(check1.enabled).toBe(false);

    // 2. Merchant upgrades to GROWTH tier
    await service.subscribe(merchantId, { planCode: "GROWTH" });

    // 3. Now QR_ORDERING is enabled
    const check2 = await service.checkEntitlement(merchantId, "QR_ORDERING");
    expect(check2.enabled).toBe(true);
  });
});
