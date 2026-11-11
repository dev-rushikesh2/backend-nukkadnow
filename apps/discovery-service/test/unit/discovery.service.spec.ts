import { DiscoveryService } from "../../src/modules/discovery/application/services/discovery.service";
import { InMemoryDiscoveryRepository } from "../../src/modules/discovery/infrastructure/persistence/repositories/in-memory-discovery.repository";

describe("Discovery Service (Sprint 6)", () => {
  let service: DiscoveryService;
  let repo: InMemoryDiscoveryRepository;

  beforeEach(async () => {
    repo = new InMemoryDiscoveryRepository();
    service = new DiscoveryService(repo);

    // Seed test outlets in Nagpur
    // Customer location reference: Zero Mile Monument Nagpur (21.1458, 79.0882)
    // 1. Sitabuldi (~0.8 km)
    await service.syncOutletDocument({
      outletId: "outlet_sitabuldi",
      merchantName: "Sitabuldi Daily Mart",
      sellerMode: "PERMANENT",
      locality: "Sitabuldi",
      city: "Nagpur",
      latitude: 21.1465,
      longitude: 79.0835,
      categoryTags: ["Grocery", "Dairy"],
      isCurrentlyOpen: true,
      queueEstimateMinutes: 5,
      isApproximateLocation: false,
      addressDisplay: "Main Rd, Sitabuldi",
    });

    // 2. Dharampeth (~2.5 km)
    await service.syncOutletDocument({
      outletId: "outlet_dharampeth",
      merchantName: "Dharampeth Bakers",
      sellerMode: "HOME_CHEF",
      locality: "Dharampeth",
      city: "Nagpur",
      latitude: 21.1415,
      longitude: 79.0645,
      categoryTags: ["Bakery", "Desserts"],
      isCurrentlyOpen: true,
      queueEstimateMinutes: 12,
      isApproximateLocation: true,
      addressDisplay: "Private Kitchen (Dharampeth)",
    });

    // 3. Kamptee (~15 km away, outside 5km radius)
    await service.syncOutletDocument({
      outletId: "outlet_kamptee",
      merchantName: "Kamptee Spice Hub",
      sellerMode: "PERMANENT",
      locality: "Kamptee",
      city: "Nagpur",
      latitude: 21.2235,
      longitude: 79.1985,
      categoryTags: ["Spices"],
      isCurrentlyOpen: true,
      queueEstimateMinutes: 0,
      isApproximateLocation: false,
      addressDisplay: "Old Market, Kamptee",
    });
  });

  it("should find outlets within 5 km and sort by closest first", async () => {
    const results = await service.searchNearby({
      latitude: 21.1458,
      longitude: 79.0882,
      radiusKm: 5,
    });

    expect(results.count).toBe(2);
    // Closest outlet first (Sitabuldi ~0.5km, then Dharampeth ~2.5km)
    expect(results.outlets[0].outletId).toBe("outlet_sitabuldi");
    expect(results.outlets[1].outletId).toBe("outlet_dharampeth");
    // Kamptee excluded (15km away)
    expect(results.outlets.some(o => o.outletId === "outlet_kamptee")).toBe(false);
  });

  it("should filter by locality accurately", async () => {
    const results = await service.searchNearby({
      latitude: 21.1458,
      longitude: 79.0882,
      radiusKm: 10,
      locality: "Dharampeth",
    });

    expect(results.count).toBe(1);
    expect(results.outlets[0].outletId).toBe("outlet_dharampeth");
    expect(results.outlets[0].isApproximateLocation).toBe(true);
  });
});
