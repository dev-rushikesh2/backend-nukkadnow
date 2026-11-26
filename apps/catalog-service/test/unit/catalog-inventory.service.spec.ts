import { CatalogService } from "../../src/modules/catalog/application/services/catalog.service";
import {
  InMemoryProductRepository,
  InMemoryStockRepository,
  InMemoryPriceCapRepository,
} from "./mocks/in-memory-catalog.repository";
import { InsufficientStockError } from "../../src/modules/catalog/domain/errors/catalog-errors";
import { UnprocessableEntityException } from "@nestjs/common";

describe("Catalog & Inventory Service (Sprint 4 & 5 + Production Admin Price Caps)", () => {
  let service: CatalogService;
  let productRepo: InMemoryProductRepository;
  let stockRepo: InMemoryStockRepository;
  let priceCapRepo: InMemoryPriceCapRepository;

  beforeEach(() => {
    productRepo = new InMemoryProductRepository();
    stockRepo = new InMemoryStockRepository();
    priceCapRepo = new InMemoryPriceCapRepository();
    service = new CatalogService(productRepo, stockRepo, priceCapRepo);
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

  it("should reject product creation when price exceeds printed MRP (Legal Metrology)", async () => {
    await expect(
      service.createProduct({
        tenantId: "tenant_1",
        outletId: "outlet_1",
        name: "Standard Packaged Curd",
        category: "Dairy & Milk",
        variants: [
          {
            name: "500g Pouch",
            pricePaise: 4500, // Rs. 45.00
            compareAtPricePaise: 4000, // MRP is Rs. 40.00
            initialStock: 20,
          },
        ],
      })
    ).rejects.toThrow(UnprocessableEntityException);
  });

  it("should reject product creation when price breaches Admin Price Cap", async () => {
    // Default seed has Dairy & Milk capped at Rs. 80.00 (8000 paise)
    await expect(
      service.createProduct({
        tenantId: "tenant_1",
        outletId: "outlet_1",
        name: "Luxury Artisanal Buffalo Milk",
        category: "Dairy & Milk",
        variants: [
          {
            name: "1 Litre Glass Bottle",
            pricePaise: 15000, // Rs. 150.00 (exceeds Rs. 80.00 cap)
            compareAtPricePaise: 15000,
            initialStock: 10,
          },
        ],
      })
    ).rejects.toThrow(UnprocessableEntityException);
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

  it("should permanently deduct stock on commit and log movement ledger", async () => {
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

    // Check movements audit trail
    const movements = await service.getOutletMovements("outlet_1");
    expect(movements.length).toBeGreaterThanOrEqual(1);
  });
});
