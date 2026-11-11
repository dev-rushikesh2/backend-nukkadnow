import { DomainError } from "@nukkadnow/platform-kernel";

export class OrderNotFoundError extends DomainError {
  readonly code = "ORDER_NOT_FOUND";
  constructor(id: string) {
    super(`Order with id '${id}' was not found.`);
  }
}

export class InvalidOrderStateTransitionError extends DomainError {
  readonly code = "INVALID_ORDER_STATE_TRANSITION";
  constructor(fromStatus: string, toStatus: string) {
    super(`Cannot transition order from '${fromStatus}' to '${toStatus}'.`);
  }
}

export class MultiSellerCartNotAllowedError extends DomainError {
  readonly code = "MULTI_SELLER_CART_NOT_ALLOWED";
  constructor() {
    super("Your cart already contains items from another store. Please complete or clear your current cart first.");
  }
}

export class EmptyCartError extends DomainError {
  readonly code = "EMPTY_CART";
  constructor() {
    super("Cannot checkout with an empty cart.");
  }
}
