import { DomainError } from "@nukkadnow/platform-kernel";

export class MerchantNotFoundError extends DomainError {
  readonly code = "MERCHANT_NOT_FOUND";
  constructor(id: string) {
    super(`Merchant organization with id '${id}' was not found.`);
  }
}

export class OutletNotFoundError extends DomainError {
  readonly code = "OUTLET_NOT_FOUND";
  constructor(id: string) {
    super(`Outlet with id '${id}' was not found.`);
  }
}

export class UnauthorizedTenantAccessError extends DomainError {
  readonly code = "UNAUTHORIZED_TENANT_ACCESS";
  constructor(message = "Cross-tenant access violation: You do not have permission to manage this merchant.") {
    super(message);
  }
}
