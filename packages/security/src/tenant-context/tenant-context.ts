import { AsyncLocalStorage } from "async_hooks";

export interface TenantContext {
  tenantId?: string; // Merchant organization id
  outletId?: string; // Specific physical/virtual outlet id
  userId?: string;
  correlationId?: string;
  roles?: string[];
}

export class TenantContextHolder {
  private static readonly storage = new AsyncLocalStorage<TenantContext>();

  static run<T>(context: TenantContext, callback: () => T): T {
    return this.storage.run(context, callback);
  }

  static get(): TenantContext | undefined {
    return this.storage.getStore();
  }

  static getRequiredTenantId(): string {
    const ctx = this.get();
    if (!ctx?.tenantId) {
      throw new Error("Security Violation: Operation requires an active Tenant Context");
    }
    return ctx.tenantId;
  }
}
