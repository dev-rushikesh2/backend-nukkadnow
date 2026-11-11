import { DomainError } from "@nukkadnow/platform-kernel";

export class ProductNotFoundError extends DomainError {
  readonly code = "PRODUCT_NOT_FOUND";
  constructor(id: string) {
    super(`Product with id '${id}' was not found.`);
  }
}

export class VariantNotFoundError extends DomainError {
  readonly code = "VARIANT_NOT_FOUND";
  constructor(id: string) {
    super(`Product variant with id '${id}' was not found.`);
  }
}

export class InsufficientStockError extends DomainError {
  readonly code = "INSUFFICIENT_STOCK";
  constructor(available: number, requested: number) {
    super(`Requested quantity (${requested}) exceeds available inventory (${available}).`);
  }
}
