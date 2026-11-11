import { AnalyticsService } from "../../src/modules/analytics/application/services/analytics.service";
import { InMemoryAnalyticsRepository } from "../../src/modules/analytics/infrastructure/persistence/repositories/in-memory-analytics.repository";

describe("Analytics & Operational Reporting Service (Sprint 14)", () => {
  let service: AnalyticsService;
  let repo: InMemoryAnalyticsRepository;

  beforeEach(() => {
    repo = new InMemoryAnalyticsRepository();
    service = new AnalyticsService(repo);
  });

  it("should record order revenue facts and compute moving average prep time", async () => {
    const outletId = "outlet_sitabuldi";

    // 1. First order: Rs 150 (15000 paise), 10 min prep
    await service.recordOrderFact(outletId, 15000, 10);
    let cockpit = await service.getMerchantCockpit(outletId);
    expect(cockpit.todayOrdersCount).toBe(1);
    expect(cockpit.todayRevenuePaise).toBe(15000);
    expect(cockpit.todayRevenueFormatted).toBe("₹150.00");
    expect(cockpit.avgPrepTimeMinutes).toBe(10);

    // 2. Second order: Rs 250 (25000 paise), 20 min prep -> Avg should be 15 min
    await service.recordOrderFact(outletId, 25000, 20);
    cockpit = await service.getMerchantCockpit(outletId);
    expect(cockpit.todayOrdersCount).toBe(2);
    expect(cockpit.todayRevenuePaise).toBe(40000); // Rs 400.00
    expect(cockpit.todayRevenueFormatted).toBe("₹400.00");
    expect(cockpit.avgPrepTimeMinutes).toBe(15);
  });

  it("should aggregate platform GMV across all outlets", async () => {
    await service.recordOrderFact("outlet_A", 20000, 10);
    await service.recordOrderFact("outlet_B", 30000, 15);

    const platform = await service.getPlatformGmv();
    expect(platform.totalOrdersFulfilled).toBe(2);
    expect(platform.totalGmvPaise).toBe(50000); // Rs 500.00
    expect(platform.totalGmvFormatted).toBe("₹500.00");
  });
});
