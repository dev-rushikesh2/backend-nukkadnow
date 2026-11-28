import { Money } from "@nukkadnow/platform-kernel";

export interface VariantProps {
  id: string;
  productId: string;
  masterVariantId?: string;
  name: string;
  sku?: string;
  barcode?: string;
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
  get masterVariantId(): string | undefined { return this.props.masterVariantId; }
  get name(): string { return this.props.name; }
  get sku(): string | undefined { return this.props.sku; }
  get barcode(): string | undefined { return this.props.barcode; }
  get pricePaise(): number { return this.props.pricePaise; }
  get compareAtPricePaise(): number | undefined { return this.props.compareAtPricePaise; }
  get isPreorder(): boolean { return this.props.isPreorder; }
  get leadTimeMinutes(): number { return this.props.leadTimeMinutes; }

  get priceMoney(): Money {
    return Money.fromPaise(this.props.pricePaise);
  }

  updatePricing(newPricePaise: number, compareAtPricePaise?: number): void {
    if (!Number.isInteger(newPricePaise) || newPricePaise <= 0) {
      throw new Error(`Variant price must be a positive integer in paise, received: ${newPricePaise}`);
    }
    this.props.pricePaise = newPricePaise;
    if (compareAtPricePaise !== undefined) {
      this.props.compareAtPricePaise = compareAtPricePaise;
    }
  }
}

export interface ProductProps {
  id: string;
  tenantId: string;
  outletId: string;
  masterProductId?: string;
  name: string;
  description?: string;
  category: string;
  subCategory?: string;
  imageUrl?: string;
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
  get masterProductId(): string | undefined { return this.props.masterProductId; }
  get name(): string { return this.props.name; }
  get description(): string | undefined { return this.props.description; }
  get category(): string { return this.props.category; }
  get subCategory(): string | undefined { return this.props.subCategory; }
  get imageUrl(): string | undefined { return this.props.imageUrl; }
  get isAvailable(): boolean { return this.props.isAvailable; }
  get variants(): ProductVariant[] { return [...this.props.variants]; }
  get createdAt(): Date { return this.props.createdAt; }
  get updatedAt(): Date { return this.props.updatedAt; }

  setAvailability(available: boolean): void {
    this.props.isAvailable = available;
    this.props.updatedAt = new Date();
  }

  findVariant(variantId: string): ProductVariant | undefined {
    return this.props.variants.find(v => v.id === variantId);
  }

  updateVariantPricing(variantId: string, newPricePaise: number, compareAtPricePaise?: number): void {
    const variant = this.findVariant(variantId);
    if (!variant) {
      throw new Error(`Variant ${variantId} not found on product ${this.props.id}`);
    }
    variant.updatePricing(newPricePaise, compareAtPricePaise);
    this.props.updatedAt = new Date();
  }
}
