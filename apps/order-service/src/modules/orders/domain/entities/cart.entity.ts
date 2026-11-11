import { MultiSellerCartNotAllowedError } from "../errors/order-errors";

export interface CartItem {
  variantId: string;
  productId: string;
  title: string;
  quantity: number;
  unitPricePaise: number;
}

export class Cart {
  constructor(
    readonly customerId: string,
    public outletId: string,
    public tenantId: string,
    private items: Map<string, CartItem> = new Map()
  ) {}

  getItems(): CartItem[] {
    return Array.from(this.items.values());
  }

  addItem(outletId: string, tenantId: string, item: CartItem): void {
    // Enforce MVP Single-Seller Cart constraint
    if (this.outletId && this.outletId !== outletId && this.items.size > 0) {
      throw new MultiSellerCartNotAllowedError();
    }

    this.outletId = outletId;
    this.tenantId = tenantId;

    const existing = this.items.get(item.variantId);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.items.set(item.variantId, { ...item });
    }
  }

  removeItem(variantId: string): void {
    this.items.delete(variantId);
  }

  clear(): void {
    this.items.clear();
  }

  calculateSubtotalPaise(): number {
    let sum = 0;
    for (const item of this.items.values()) {
      sum += item.quantity * item.unitPricePaise;
    }
    return sum;
  }
}
