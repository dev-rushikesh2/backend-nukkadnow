import { Money } from "@nukkadnow/platform-kernel";

export interface VariantProps {
  id: string;
  productId: string;
  name: string;
  sku?: string;
  pricePaise: number;
  compareAtPricePaise?: number;
  isPreorder: boolean;
  leadTimeMinutes: number;
}

export class ProductVariant {
  constructor(private props: VariantProps) {
    if (!Number.isInteger(props.pricePaise) || props.pricePaise <= 0) {
      throw new Error(`Variant price must be a positive integer in paise, received: ${props.pricePaise}`);
    }
  }

  get id(): string { return this.props.id; }
  get productId(): string { return this.props.productId; }
  get name(): string { return this.props.name; }
  get sku(): string | undefined { return this.props.sku; }
  get pricePaise(): number { return this.props.pricePaise; }
  get compareAtPricePaise(): number | undefined { return this.props.compareAtPricePaise; }
  get isPreorder(): boolean { return this.props.isPreorder; }
  get leadTimeMinutes(): number { return this.props.leadTimeMinutes; }

  get priceMoney(): Money {
    return Money.fromPaise(this.props.pricePaise);
  }
}

export interface ProductProps {
  id: string;
  tenantId: string;
  outletId: string;
  name: string;
  description?: string;
  category: string;
  isAvailable: boolean;
  variants: ProductVariant[];
  createdAt: Date;
  updatedAt: Date;
}

export class Product {
  constructor(private props: ProductProps) {
    if (props.variants.length === 0) {
      throw new Error("A product must have at least one variant.");
    }
  }

  get id(): string { return this.props.id; }
  get tenantId(): string { return this.props.tenantId; }
  get outletId(): string { return this.props.outletId; }
  get name(): string { return this.props.name; }
  get description(): string | undefined { return this.props.description; }
  get category(): string { return this.props.category; }
  get isAvailable(): boolean { return this.props.isAvailable; }
  get variants(): ProductVariant[] { return [...this.props.variants]; }

  setAvailability(available: boolean): void {
    this.props.isAvailable = available;
    this.props.updatedAt = new Date();
  }

  findVariant(variantId: string): ProductVariant | undefined {
    return this.props.variants.find(v => v.id === variantId);
  }
}
