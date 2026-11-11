import { OrderService } from "../../src/modules/orders/application/services/order.service";
import { InMemoryOrderRepository, InMemoryCartRepository } from "../../src/modules/orders/infrastructure/persistence/repositories/in-memory-order.repository";
import { MultiSellerCartNotAllowedError, EmptyCartError } from "../../src/modules/orders/domain/errors/order-errors";

describe("Order & Checkout Service (Sprint 7 & 8)", () => {
  let service: OrderService;
  let orderRepo: InMemoryOrderRepository;
  let cartRepo: InMemoryCartRepository;

  beforeEach(() => {
    orderRepo = new InMemoryOrderRepository();
    cartRepo = new InMemoryCartRepository();
    service = new OrderService(orderRepo, cartRepo);
  });

  it("should add items to cart and compute subtotal in paise", async () => {
    const customerId = "cust_1";
    await service.addToCart(customerId, {
      outletId: "outlet_A",
      tenantId: "tenant_A",
      productId: "prod_1",
      variantId: "var_1",
      title: "Pav Bhaji Bun Pack",
      quantity: 2,
      unitPricePaise: 4000, // Rs. 40.00 each -> Total 8000 paise (Rs 80)
    });

    const cart = await service.getCart(customerId);
    expect(cart.items).toHaveLength(1);
    expect(cart.subtotalPaise).toBe(8000);
    expect(cart.subtotalFormatted).toBe("₹80.00");
  });

  it("should enforce MVP single-seller cart constraint", async () => {
    const customerId = "cust_2";
    // 1. Add item from Store A
    await service.addToCart(customerId, {
      outletId: "outlet_A",
      tenantId: "tenant_A",
      productId: "prod_1",
      variantId: "var_1",
      title: "Tea Leaf 250g",
      quantity: 1,
      unitPricePaise: 15000,
    });

    // 2. Attempting to add item from Store B should be blocked
    await expect(
      service.addToCart(customerId, {
        outletId: "outlet_B", // Different outlet
        tenantId: "tenant_B",
        productId: "prod_2",
        variantId: "var_2",
        title: "Cold Coffee",
        quantity: 1,
        unitPricePaise: 9000,
      })
    ).rejects.toThrow(MultiSellerCartNotAllowedError);
  });

  it("should checkout cart with integer paise financial precision", async () => {
    const customerId = "cust_3";
    await service.addToCart(customerId, {
      outletId: "outlet_A",
      tenantId: "tenant_A",
      productId: "prod_1",
      variantId: "var_1",
      title: "Samosa Box (6 pcs)",
      quantity: 1,
      unitPricePaise: 12000, // Rs. 120.00
    });

    const order = await service.checkout(customerId, {
      fulfillmentType: "STORE_PICKUP",
    });

    expect(order.orderId).toBeDefined();
    expect(order.status).toBe("PENDING_PAYMENT");
    expect(order.subtotalPaise).toBe(12000);
    expect(order.packagingPaise).toBe(1000); // Rs 10
    expect(order.deliveryPaise).toBe(0); // Store pickup
    expect(order.taxPaise).toBe(600); // 5% GST on 12000 = 600 paise (Rs 6)
    // 12000 + 1000 + 600 = 13600 paise (Rs 136.00)
    expect(order.totalAmountPaise).toBe(13600);
    expect(order.totalFormatted).toBe("₹136.00");

    // Cart should now be empty after checkout
    const cartAfter = await service.getCart(customerId);
    expect(cartAfter.items).toHaveLength(0);
  });

  it("should return cached order on duplicate idempotency key (replay attack defense)", async () => {
    const customerId = "cust_4";
    await service.addToCart(customerId, {
      outletId: "outlet_A",
      tenantId: "tenant_A",
      productId: "prod_1",
      variantId: "var_1",
      title: "Sandwich",
      quantity: 1,
      unitPricePaise: 6000,
    });

    const idempotencyKey = "unique-client-uuid-999";

    // 1st submit
    const order1 = await service.checkout(
      customerId,
      { fulfillmentType: "STORE_PICKUP" },
      idempotencyKey
    );

    // 2nd duplicate submit with identical idempotency key
    const order2 = await service.checkout(
      customerId,
      { fulfillmentType: "STORE_PICKUP" },
      idempotencyKey
    );

    expect(order1.orderId).toBe(order2.orderId);
    expect(order1.orderNumber).toBe(order2.orderNumber);
  });

  it("should transition order state safely through merchant acceptance and readiness", async () => {
    const customerId = "cust_5";
    await service.addToCart(customerId, {
      outletId: "outlet_A",
      tenantId: "tenant_A",
      productId: "prod_1",
      variantId: "var_1",
      title: "Gulab Jamun",
      quantity: 1,
      unitPricePaise: 5000,
    });

    const created = await service.checkout(customerId, { fulfillmentType: "STORE_PICKUP" });
    const order = await orderRepo.findById(created.orderId);

    // Simulate payment confirmation event
    order!.confirmPayment();
    await orderRepo.save(order!);

    // Merchant accepts with 15 min estimate
    const accepted = await service.acceptOrder(created.orderId, { estimatedMinutes: 15 }, "tenant_A");
    expect(accepted.status).toBe("ACCEPTED");
    expect(accepted.estimatedReadyAt).toBeDefined();

    // Merchant marks ready for pickup
    const ready = await service.markOrderReady(created.orderId, "tenant_A");
    expect(ready.status).toBe("READY_FOR_PICKUP");
  });
});
