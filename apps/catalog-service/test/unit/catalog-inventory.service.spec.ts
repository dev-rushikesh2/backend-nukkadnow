import { CatalogService } from "../../src/modules/catalog/application/services/catalog.service";
import { InMemoryProductRepository, InMemoryStockRepository } from "../../src/modules/catalog/infrastructure/persistence/repositories/in-memory-catalog.repository";
import { InsufficientStockError } from "../../src/modules/catalog/domain/errors/catalog-errors";

describe("Catalog & Inventory Service (Sprint 4 & 5)", () => {
  let service: CatalogService;
  let productRepo: InMemoryProductRepository;
  let stockRepo: InMemoryStockRepository;

  beforeEach(() => {
    productRepo = new InMemoryProductRepository();
    stockRepo = new InMemoryStockRepository();
    service = new CatalogService(productRepo, stockRepo);
  });

  it("should create product with variants and initial stock", async () => {
    const product = await service.createProduct({
      tenantId: "tenant_1",
      outletId: "outlet_1",
      name: "Organic Whole Wheat Bread",
      category: "Bakery",
      variants: [
        {
          name: "400g Loaf",
          pricePaise: 4500, // Rs. 45.00
          initialStock: 10,
        },
      ],
    });

    expect(product.id).toBeDefined();
    expect(product.variants).toHaveLength(1);

    const variant = product.variants[0];
    expect(variant.pricePaise).toBe(4500);

    const productView = await service.getProduct(product.id);
    expect(productView.variants[0].availableStock).toBe(10);
    expect(productView.variants[0].priceFormatted).toBe("₹45.00");
  });

  it("should atomically reserve stock and prevent overselling", async () => {
    const product = await service.createProduct({
      tenantId: "tenant_1",
      outletId: "outlet_1",
      name: "Chocolate Croissant",
      category: "Bakery",
      variants: [
        {
          name: "Single Piece",
          pricePaise: 6500,
          initialStock: 5,
        },
      ],
    });

    const variantId = product.variants[0].id;

    // 1. Reserve 3 items
    const res1 = await service.reserveStock({
      variantId,
      quantity: 3,
      orderId: "order_1",
    });
    expect(res1.success).toBe(true);
    expect(res1.remainingAvailable).toBe(2);

    // 2. Attempting to reserve 3 more should fail (only 2 left)
    await expect(
      service.reserveStock({
        variantId,
        quantity: 3,
        orderId: "order_2",
      })
    ).rejects.toThrow(InsufficientStockError);

    // 3. Reserving the remaining 2 succeeds
    const res2 = await service.reserveStock({
      variantId,
      quantity: 2,
      orderId: "order_3",
    });
    expect(res2.remainingAvailable).toBe(0);
  });

  it("should release reserved stock upon checkout cancellation", async () => {
    const product = await service.createProduct({
      tenantId: "tenant_1",
      outletId: "outlet_1",
      name: "Sourdough",
      category: "Bakery",
      variants: [
        {
          name: "500g",
          pricePaise: 12000,
          initialStock: 4,
        },
      ],
    });

    const variantId = product.variants[0].id;

    // Reserve 4 items (available becomes 0)
    await service.reserveStock({ variantId, quantity: 4, orderId: "order_x" });
    let view = await service.getProduct(product.id);
    expect(view.variants[0].availableStock).toBe(0);

    // Order fails/times out -> Release reservation
    await service.releaseStock({ variantId, quantity: 4, orderId: "order_x" });
    view = await service.getProduct(product.id);
    expect(view.variants[0].availableStock).toBe(4);
  });

  it("should permanently deduct stock on commit", async () => {
    const product = await service.createProduct({
      tenantId: "tenant_1",
      outletId: "outlet_1",
      name: "Muffins",
      category: "Bakery",
      variants: [
        {
          name: "Pack of 2",
          pricePaise: 8000,
          initialStock: 10,
        },
      ],
    });

    const variantId = product.variants[0].id;

    // Reserve 2
    await service.reserveStock({ variantId, quantity: 2, orderId: "order_paid" });

    // Payment confirmed -> Commit
    await service.commitStock({ variantId, quantity: 2, orderId: "order_paid" });

    const view = await service.getProduct(product.id);
    expect(view.variants[0].availableStock).toBe(8);
  });
});
