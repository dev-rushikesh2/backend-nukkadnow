import { FulfillmentService } from "../../src/modules/fulfillment/application/services/fulfillment.service";
import { InMemoryFulfillmentRepository } from "../../src/modules/fulfillment/infrastructure/persistence/repositories/in-memory-fulfillment.repository";
import { SlotCapacityExceededError } from "../../src/modules/fulfillment/domain/errors/fulfillment-errors";

describe("Fulfillment & Capacity Service (Sprint 10 & 11)", () => {
  let service: FulfillmentService;
  let repo: InMemoryFulfillmentRepository;

  beforeEach(() => {
    repo = new InMemoryFulfillmentRepository();
    service = new FulfillmentService(repo);
  });

  it("should create capacity slots and atomically reserve pickup appointments", async () => {
    const slot = await service.createSlot({
      outletId: "outlet_sitabuldi",
      slotDate: "2026-11-12",
      startTime: "10:00",
      endTime: "10:30",
      maxCapacity: 2, // Only 2 orders allowed
    });

    expect(slot.id).toBeDefined();
    expect(slot.availableCapacity).toBe(2);

    // 1. First customer reserves
    const res1 = await service.reserveSlot({ slotId: slot.id, orderId: "order_1" });
    expect(res1.success).toBe(true);
    expect(res1.remainingSlotCapacity).toBe(1);

    // 2. Second customer reserves
    const res2 = await service.reserveSlot({ slotId: slot.id, orderId: "order_2" });
    expect(res2.success).toBe(true);
    expect(res2.remainingSlotCapacity).toBe(0);

    // 3. Third customer is rejected due to capacity limit
    await expect(
      service.reserveSlot({ slotId: slot.id, orderId: "order_3" })
    ).rejects.toThrow(SlotCapacityExceededError);
  });

  it("should generate formatted pickup tokens and advance status", async () => {
    const outletId = "outlet_sitabuldi";

    // 1. Generate token for Order 1
    const token1 = await service.generatePickupToken({ orderId: "order_A", outletId });
    expect(token1.tokenNumber).toBe("A-01");
    expect(token1.status).toBe("ISSUED");

    // 2. Generate token for Order 2
    const token2 = await service.generatePickupToken({ orderId: "order_B", outletId });
    expect(token2.tokenNumber).toBe("A-02");

    // 3. Merchant marks token ready
    const ready = await service.markTokenReady(outletId, "A-01");
    expect(ready.status).toBe("READY");

    // 4. Customer collects order
    const collected = await service.collectToken(outletId, "A-01");
    expect(collected.status).toBe("COLLECTED");
  });

  it("should resolve at-shop QR tokens for dine-in/counter pickup", () => {
    const qrResult = service.resolveQrToken("qr_sitabuldi_t4");
    expect(qrResult.valid).toBe(true);
    expect(qrResult.tableNumber).toBe("T-04");
    expect(qrResult.orderMode).toBe("AT_SHOP_DINE_IN");
  });
});
