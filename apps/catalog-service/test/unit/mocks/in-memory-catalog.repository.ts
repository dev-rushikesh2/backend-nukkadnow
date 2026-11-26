import { Injectable } from "@nestjs/common";
import { ProductRepositoryPort, StockRepositoryPort, PriceCapRepositoryPort } from "../../../src/modules/catalog/domain/repositories/catalog.repository.port";
import { Product, ProductVariant } from "../../../src/modules/catalog/domain/entities/product.entity";
import { StockBalance } from "../../../src/modules/catalog/domain/entities/stock-balance.entity";
import { StockMovement } from "../../../src/modules/catalog/domain/entities/stock-movement.entity";
import { AdminPriceCapRule } from "../../../src/modules/catalog/domain/entities/price-cap.entity";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class InMemoryProductRepository implements ProductRepositoryPort {
  private products = new Map<string, Product>();

  constructor() {
    this.seedProducts();
  }

  private seedProducts() {
    // 1. Patil Fresh Sabji Mandi
    const sabjiItems = [
      {
        id: "prod-sabji-001",
        tenantId: "merchant-sabji-001",
        outletId: "outlet-sabji-001",
        name: "Fresh Nagpur Palak (Spinach)",
        description: "Farm-harvested, pesticide-tested fresh green spinach bunches directly from local Vidarbha farmers.",
        category: "Vegetables & Fruits",
        subCategory: "Leafy Greens",
        isAvailable: true,
        variantId: "var-sabji-001",
        variantName: "500 g Bunch",
        pricePaise: 2500, // Rs 25.00
        compareAtPaise: 3000,
      },
      {
        id: "prod-sabji-002",
        tenantId: "merchant-sabji-001",
        outletId: "outlet-sabji-001",
        name: "Farm Fresh Desi Tomatoes",
        description: "Juicy, ripe, firm red desi tomatoes ideal for daily curries and salads.",
        category: "Vegetables & Fruits",
        subCategory: "Daily Veggies",
        isAvailable: true,
        variantId: "var-sabji-002",
        variantName: "1 kg",
        pricePaise: 4000, // Rs 40.00
        compareAtPaise: 5000,
      },
      {
        id: "prod-sabji-003",
        tenantId: "merchant-sabji-001",
        outletId: "outlet-sabji-001",
        name: "Green Shimla Mirch (Capsicum)",
        description: "Crisp and crunchy bell peppers hand-graded for premium quality.",
        category: "Vegetables & Fruits",
        subCategory: "Daily Veggies",
        isAvailable: true,
        variantId: "var-sabji-003",
        variantName: "500 g",
        pricePaise: 3500, // Rs 35.00
      },
      {
        id: "prod-sabji-004",
        tenantId: "merchant-sabji-001",
        outletId: "outlet-sabji-001",
        name: "Fresh Desi Kothimbir (Coriander)",
        description: "Aromatic, fresh coriander bunches with roots intact for lasting freshness.",
        category: "Vegetables & Fruits",
        subCategory: "Herbs & Seasoning",
        isAvailable: true,
        variantId: "var-sabji-004",
        variantName: "250 g Bunch",
        pricePaise: 1500, // Rs 15.00
      },
      {
        id: "prod-sabji-005",
        tenantId: "merchant-sabji-001",
        outletId: "outlet-sabji-001",
        name: "Local Vidarbha Red Onions (Kanda)",
        description: "Medium to large dry red onions, pungent flavor and excellent shelf life.",
        category: "Vegetables & Fruits",
        subCategory: "Root Veggies",
        isAvailable: true,
        variantId: "var-sabji-005",
        variantName: "1 kg",
        pricePaise: 3000, // Rs 30.00
        compareAtPaise: 3500,
      },
      {
        id: "prod-sabji-006",
        tenantId: "merchant-sabji-001",
        outletId: "outlet-sabji-001",
        name: "Fresh Ginger & Garlic Combo",
        description: "Clean washed ginger roots paired with bold Vidarbha garlic bulbs.",
        category: "Vegetables & Fruits",
        subCategory: "Herbs & Seasoning",
        isAvailable: true,
        variantId: "var-sabji-006",
        variantName: "250 g Pack",
        pricePaise: 2500, // Rs 25.00
      },
    ];

    // 2. Sharma Kirana & General Store
    const kiranaItems = [
      {
        id: "prod-kirana-001",
        tenantId: "merchant-kirana-002",
        outletId: "outlet-kirana-002",
        name: "Sharbati Premium Wheat Atta",
        description: "100% MP Sharbati whole wheat stone-ground chakki fresh flour for soft rotis.",
        category: "Grocery & Daily Needs",
        subCategory: "Atta & Flours",
        isAvailable: true,
        variantId: "var-kirana-001",
        variantName: "5 kg Bag",
        pricePaise: 24000, // Rs 240.00
        compareAtPaise: 26000,
      },
      {
        id: "prod-kirana-002",
        tenantId: "merchant-kirana-002",
        outletId: "outlet-kirana-002",
        name: "Vidarbha Desi Toor Dal (Unpolished)",
        description: "Traditional unpolished high-protein toor dal with natural aroma and authentic taste.",
        category: "Grocery & Daily Needs",
        subCategory: "Pulses & Dals",
        isAvailable: true,
        variantId: "var-kirana-002",
        variantName: "1 kg",
        pricePaise: 16500, // Rs 165.00
        compareAtPaise: 18000,
      },
      {
        id: "prod-kirana-003",
        tenantId: "merchant-kirana-002",
        outletId: "outlet-kirana-002",
        name: "Gemini Refined Sunflower Oil",
        description: "Nutritious edible oil fortified with Vitamin A and D for healthy daily cooking.",
        category: "Grocery & Daily Needs",
        subCategory: "Edible Oils",
        isAvailable: true,
        variantId: "var-kirana-003",
        variantName: "1 L Pouch",
        pricePaise: 13500, // Rs 135.00
        compareAtPaise: 15000,
      },
      {
        id: "prod-kirana-004",
        tenantId: "merchant-kirana-002",
        outletId: "outlet-kirana-002",
        name: "Wada Kolam Premium Rice",
        description: "Aged long grain aromatic Kolam rice, ideal for daily dal-rice and pulao.",
        category: "Grocery & Daily Needs",
        subCategory: "Rice & Grains",
        isAvailable: true,
        variantId: "var-kirana-004",
        variantName: "5 kg Bag",
        pricePaise: 32000, // Rs 320.00
        compareAtPaise: 35000,
      },
      {
        id: "prod-kirana-005",
        tenantId: "merchant-kirana-002",
        outletId: "outlet-kirana-002",
        name: "Tata Salt Vacuum Evaporated Iodized",
        description: "Purity guaranteed iodized cooking salt for proper mental development and health.",
        category: "Grocery & Daily Needs",
        subCategory: "Spices & Seasonings",
        isAvailable: true,
        variantId: "var-kirana-005",
        variantName: "1 kg Pack",
        pricePaise: 2800, // Rs 28.00
      },
      {
        id: "prod-kirana-006",
        tenantId: "merchant-kirana-002",
        outletId: "outlet-kirana-002",
        name: "Maggi 2-Minute Masala Noodles",
        description: "India's favorite instant snack enriched with iron and authentic spices.",
        category: "Grocery & Daily Needs",
        subCategory: "Instant Food",
        isAvailable: true,
        variantId: "var-kirana-006",
        variantName: "4-Pack (280g)",
        pricePaise: 5600, // Rs 56.00
      },
    ];

    // 3. Garguti Homemade Chivda & Snacks (Home Business)
    const gargutiItems = [
      {
        id: "prod-garguti-001",
        tenantId: "merchant-garguti-003",
        outletId: "outlet-garguti-003",
        name: "Vidarbha Special Spicy Poha Chivda",
        description: "Authentic homemade thin poha chivda fried in pure groundnut oil, roasted peanuts, dry coconut slices and Vidarbha secret spice blend.",
        category: "Home Bakery & Traditional Snacks",
        subCategory: "Chivda & Mixtures",
        isAvailable: true,
        variantId: "var-garguti-001",
        variantName: "500 g Airtight Pouch",
        pricePaise: 16000, // Rs 160.00
        compareAtPaise: 18000,
      },
      {
        id: "prod-garguti-002",
        tenantId: "merchant-garguti-003",
        outletId: "outlet-garguti-003",
        name: "Crispy Golden Cornflakes Mixture",
        description: "Sweet, sour and spicy crunchy cornflake snack made with dry fruits and roasted curry leaves.",
        category: "Home Bakery & Traditional Snacks",
        subCategory: "Chivda & Mixtures",
        isAvailable: true,
        variantId: "var-garguti-002",
        variantName: "400 g Pouch",
        pricePaise: 14000, // Rs 140.00
      },
      {
        id: "prod-garguti-003",
        tenantId: "merchant-garguti-003",
        outletId: "outlet-garguti-003",
        name: "Authentic Nagpuri Bakarwadi",
        description: "Spicy and tangy rolled pinwheels stuffed with poppy seeds, roasted coconut and clove-scented masala.",
        category: "Home Bakery & Traditional Snacks",
        subCategory: "Farsan & Namkeen",
        isAvailable: true,
        variantId: "var-garguti-003",
        variantName: "250 g Box",
        pricePaise: 11000, // Rs 110.00
      },
      {
        id: "prod-garguti-004",
        tenantId: "merchant-garguti-003",
        outletId: "outlet-garguti-003",
        name: "Pure Cow Ghee Besan Laddoo",
        description: "Melt-in-mouth slow-roasted gram flour laddoos with fragrant cardamom, almonds and pure cow ghee.",
        category: "Home Bakery & Traditional Snacks",
        subCategory: "Homemade Sweets",
        isAvailable: true,
        variantId: "var-garguti-004",
        variantName: "500 g Box (12 Pcs)",
        pricePaise: 26000, // Rs 260.00
        compareAtPaise: 29000,
      },
      {
        id: "prod-garguti-005",
        tenantId: "merchant-garguti-003",
        outletId: "outlet-garguti-003",
        name: "Crunchy Bhajani Chakli",
        description: "Traditional roasted multi-grain flour spiral snacks fried to golden crisp perfection.",
        category: "Home Bakery & Traditional Snacks",
        subCategory: "Farsan & Namkeen",
        isAvailable: true,
        variantId: "var-garguti-005",
        variantName: "250 g Pack",
        pricePaise: 9500, // Rs 95.00
      },
    ];

    // 4. Mahalaxmi Sweets, Dairy & Bakery
    const sweetsItems = [
      {
        id: "prod-sweets-001",
        tenantId: "merchant-sweets-004",
        outletId: "outlet-sweets-004",
        name: "Famous Nagpur Orange Santra Barfi",
        description: "World-famous GI-tagged Nagpur mandarin orange fudge made with pure mawa, orange pulp and silver leaf.",
        category: "Dairy, Sweets & Bakery",
        subCategory: "Signature Sweets",
        isAvailable: true,
        variantId: "var-sweets-001",
        variantName: "500 g Gift Box",
        pricePaise: 32000, // Rs 320.00
        compareAtPaise: 35000,
      },
      {
        id: "prod-sweets-002",
        tenantId: "merchant-sweets-004",
        outletId: "outlet-sweets-004",
        name: "Fresh Buffalo Malai Paneer",
        description: "Soft, spongy, freshly set cottage cheese prepared daily from pure whole buffalo milk.",
        category: "Dairy, Sweets & Bakery",
        subCategory: "Fresh Dairy",
        isAvailable: true,
        variantId: "var-sweets-002",
        variantName: "250 g Block",
        pricePaise: 11000, // Rs 110.00
      },
      {
        id: "prod-sweets-003",
        tenantId: "merchant-sweets-004",
        outletId: "outlet-sweets-004",
        name: "Pure A2 Cow Ghee (Danedar)",
        description: "Golden aromatic clarified butter churned using traditional Bilona method from grass-fed cows.",
        category: "Dairy, Sweets & Bakery",
        subCategory: "Pure Ghee",
        isAvailable: true,
        variantId: "var-sweets-003",
        variantName: "500 ml Glass Jar",
        pricePaise: 38000, // Rs 380.00
      },
      {
        id: "prod-sweets-004",
        tenantId: "merchant-sweets-004",
        outletId: "outlet-sweets-004",
        name: "Fresh Artisan Sourdough Ladi Pav",
        description: "Soft, pillowy local bakery pav baked twice daily in traditional wood-fired brick oven.",
        category: "Dairy, Sweets & Bakery",
        subCategory: "Bakery Breads",
        isAvailable: true,
        variantId: "var-sweets-004",
        variantName: "Pack of 6 (300g)",
        pricePaise: 4500, // Rs 45.00
      },
      {
        id: "prod-sweets-005",
        tenantId: "merchant-sweets-004",
        outletId: "outlet-sweets-004",
        name: "Motichoor Pure Ghee Laddoo",
        description: "Delicate fine gram flour pearls dipped in saffron syrup and shaped with pure cow ghee.",
        category: "Dairy, Sweets & Bakery",
        subCategory: "Traditional Sweets",
        isAvailable: true,
        variantId: "var-sweets-005",
        variantName: "500 g Box",
        pricePaise: 28000, // Rs 280.00
      },
      {
        id: "prod-sweets-006",
        tenantId: "merchant-sweets-004",
        outletId: "outlet-sweets-004",
        name: "Hot Crispy Punjabi Samosa with Chutney",
        description: "Flaky triangular pastry stuffed with spicy potato and green pea filling, served with tamarind chutney.",
        category: "Dairy, Sweets & Bakery",
        subCategory: "Hot Savouries",
        isAvailable: true,
        variantId: "var-sweets-006",
        variantName: "Plate of 2 Pcs",
        pricePaise: 3500, // Rs 35.00
      },
    ];

    const allItems = [...sabjiItems, ...kiranaItems, ...gargutiItems, ...sweetsItems];
    for (const item of allItems) {
      const variant = new ProductVariant({
        id: item.variantId,
        productId: item.id,
        name: item.variantName,
        pricePaise: item.pricePaise,
        compareAtPricePaise: item.compareAtPaise,
        isPreorder: false,
        leadTimeMinutes: 15,
      });

      const product = new Product({
        id: item.id,
        tenantId: item.tenantId,
        outletId: item.outletId,
        name: item.name,
        description: item.description,
        category: item.category,
        subCategory: item.subCategory,
        isAvailable: item.isAvailable,
        variants: [variant],
        createdAt: new Date("2026-11-15T08:00:00Z"),
        updatedAt: new Date("2026-11-15T08:00:00Z"),
      });

      this.products.set(product.id, product);
    }
  }

  async findById(id: string): Promise<Product | null> {
    return this.products.get(id) || null;
  }

  async findByOutletId(outletId: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.outletId === outletId);
  }

  async findByTenantId(tenantId: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.tenantId === tenantId);
  }

  async save(product: Product): Promise<void> {
    this.products.set(product.id, product);
  }

  async delete(id: string): Promise<void> {
    this.products.delete(id);
  }
}

@Injectable()
export class InMemoryStockRepository implements StockRepositoryPort {
  private stockBalances = new Map<string, StockBalance>();
  private movements: StockMovement[] = [];
  private reservations: Array<{
    id: string;
    variantId: string;
    outletId: string;
    quantity: number;
    orderId: string;
    expiresAt: Date;
    status: string;
  }> = [];

  constructor() {
    this.seedStockBalances();
  }

  private seedStockBalances() {
    const variantOutlets = [
      { variantId: "var-sabji-001", outletId: "outlet-sabji-001", qty: 80 },
      { variantId: "var-sabji-002", outletId: "outlet-sabji-001", qty: 150 },
      { variantId: "var-sabji-003", outletId: "outlet-sabji-001", qty: 60 },
      { variantId: "var-sabji-004", outletId: "outlet-sabji-001", qty: 100 },
      { variantId: "var-sabji-005", outletId: "outlet-sabji-001", qty: 200 },
      { variantId: "var-sabji-006", outletId: "outlet-sabji-001", qty: 90 },
      { variantId: "var-kirana-001", outletId: "outlet-kirana-002", qty: 50 },
      { variantId: "var-kirana-002", outletId: "outlet-kirana-002", qty: 70 },
      { variantId: "var-kirana-003", outletId: "outlet-kirana-002", qty: 100 },
      { variantId: "var-kirana-004", outletId: "outlet-kirana-002", qty: 40 },
      { variantId: "var-kirana-005", outletId: "outlet-kirana-002", qty: 120 },
      { variantId: "var-kirana-006", outletId: "outlet-kirana-002", qty: 85 },
      { variantId: "var-garguti-001", outletId: "outlet-garguti-003", qty: 35 },
      { variantId: "var-garguti-002", outletId: "outlet-garguti-003", qty: 40 },
      { variantId: "var-garguti-003", outletId: "outlet-garguti-003", qty: 30 },
      { variantId: "var-garguti-004", outletId: "outlet-garguti-003", qty: 25 },
      { variantId: "var-garguti-005", outletId: "outlet-garguti-003", qty: 45 },
      { variantId: "var-sweets-001", outletId: "outlet-sweets-004", qty: 60 },
      { variantId: "var-sweets-002", outletId: "outlet-sweets-004", qty: 50 },
      { variantId: "var-sweets-003", outletId: "outlet-sweets-004", qty: 40 },
      { variantId: "var-sweets-004", outletId: "outlet-sweets-004", qty: 70 },
      { variantId: "var-sweets-005", outletId: "outlet-sweets-004", qty: 45 },
      { variantId: "var-sweets-006", outletId: "outlet-sweets-004", qty: 100 },
    ];

    for (const v of variantOutlets) {
      this.stockBalances.set(
        v.variantId,
        new StockBalance({
          id: `stock-${v.variantId}`,
          variantId: v.variantId,
          outletId: v.outletId,
          onHandQuantity: v.qty,
          reservedQuantity: 0,
          version: 1,
          updatedAt: new Date("2026-11-15T08:00:00Z"),
        })
      );
    }
  }

  async findByVariantId(variantId: string): Promise<StockBalance | null> {
    return this.stockBalances.get(variantId) || null;
  }

  async findByOutletId(outletId: string): Promise<StockBalance[]> {
    return Array.from(this.stockBalances.values()).filter(s => s.outletId === outletId);
  }

  async save(stock: StockBalance): Promise<void> {
    this.stockBalances.set(stock.variantId, stock);
  }

  async recordMovement(movement: StockMovement): Promise<void> {
    this.movements.unshift(movement);
  }

  async findMovementsByOutlet(outletId: string, limit = 50): Promise<StockMovement[]> {
    return this.movements.filter(m => m.outletId === outletId).slice(0, limit);
  }

  async addReservation(res: { variantId: string; outletId: string; quantity: number; orderId: string; ttlMinutes?: number }) {
    const expiresAt = new Date(Date.now() + (res.ttlMinutes || 10) * 60 * 1000);
    this.reservations.push({
      id: UniqueIdentifier.generateV7(),
      variantId: res.variantId,
      outletId: res.outletId,
      quantity: res.quantity,
      orderId: res.orderId,
      expiresAt,
      status: "ACTIVE",
    });
  }

  async commitReservation(orderId: string): Promise<void> {
    const res = this.reservations.find(r => r.orderId === orderId && r.status === "ACTIVE");
    if (res) {
      res.status = "COMMITTED";
      const stock = this.stockBalances.get(res.variantId);
      if (stock) {
        stock.commitReservation(res.quantity);
        this.recordMovement(
          new StockMovement({
            id: UniqueIdentifier.generateV7(),
            variantId: res.variantId,
            outletId: res.outletId,
            quantityChange: -res.quantity,
            balanceAfter: stock.availableQuantity,
            reason: "SALE_COMMIT",
            actorId: "ORDER_SERVICE",
            referenceId: orderId,
            notes: "Reservation committed upon payment confirmation",
            createdAt: new Date(),
          })
        );
      }
    }
  }

  async releaseReservation(orderId: string): Promise<void> {
    const res = this.reservations.find(r => r.orderId === orderId && r.status === "ACTIVE");
    if (res) {
      res.status = "RELEASED";
      const stock = this.stockBalances.get(res.variantId);
      if (stock) {
        stock.releaseReservation(res.quantity);
        this.recordMovement(
          new StockMovement({
            id: UniqueIdentifier.generateV7(),
            variantId: res.variantId,
            outletId: res.outletId,
            quantityChange: 0,
            balanceAfter: stock.availableQuantity,
            reason: "RESERVATION_RELEASE",
            actorId: "ORDER_SERVICE",
            referenceId: orderId,
            notes: "Reservation released upon checkout cancel/timeout",
            createdAt: new Date(),
          })
        );
      }
    }
  }

  async expireExpiredReservations(): Promise<number> {
    const now = new Date();
    let expiredCount = 0;

    for (const res of this.reservations) {
      if (res.status === "ACTIVE" && res.expiresAt < now) {
        res.status = "EXPIRED";
        const stock = this.stockBalances.get(res.variantId);
        if (stock) {
          stock.releaseReservation(res.quantity);
          this.recordMovement(
            new StockMovement({
              id: UniqueIdentifier.generateV7(),
              variantId: res.variantId,
              outletId: res.outletId,
              quantityChange: 0,
              balanceAfter: stock.availableQuantity,
              reason: "RESERVATION_RELEASE",
              actorId: "TTL_SWEEPER",
              referenceId: res.orderId,
              notes: "Automatic TTL expiration release",
              createdAt: new Date(),
            })
          );
        }
        expiredCount++;
      }
    }
    return expiredCount;
  }
}

@Injectable()
export class InMemoryPriceCapRepository implements PriceCapRepositoryPort {
  private rules = new Map<string, AdminPriceCapRule>();

  constructor() {
    // Seed default baseline price caps (e.g. for Nagpur Region)
    const seedDairy = new AdminPriceCapRule({
      id: "cap-dairy-default",
      scope: "CATEGORY",
      targetKey: "Dairy & Milk",
      maxPricePaise: 8000, // Rs. 80.00
      enforceMrpCap: true,
      reason: "Essential commodity price stabilization mandate",
      isActive: true,
      createdBy: "PLATFORM_ADMIN",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const seedSnacks = new AdminPriceCapRule({
      id: "cap-snacks-default",
      scope: "CATEGORY",
      targetKey: "Sweets & Snacks",
      maxPricePaise: 50000, // Rs. 500.00 max per standard item
      enforceMrpCap: true,
      reason: "Fair pricing guideline for consumer snacks",
      isActive: true,
      createdBy: "PLATFORM_ADMIN",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.rules.set(seedDairy.id, seedDairy);
    this.rules.set(seedSnacks.id, seedSnacks);
  }

  async findAllActive(): Promise<AdminPriceCapRule[]> {
    return Array.from(this.rules.values()).filter(r => r.isActive);
  }

  async findAll(): Promise<AdminPriceCapRule[]> {
    return Array.from(this.rules.values());
  }

  async findById(id: string): Promise<AdminPriceCapRule | null> {
    return this.rules.get(id) || null;
  }

  async save(rule: AdminPriceCapRule): Promise<void> {
    this.rules.set(rule.id, rule);
  }

  async delete(id: string): Promise<void> {
    this.rules.delete(id);
  }
}
