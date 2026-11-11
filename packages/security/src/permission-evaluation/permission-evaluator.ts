export enum PlatformRole {
  GUEST = "GUEST",
  CUSTOMER = "CUSTOMER",
  MERCHANT_OWNER = "MERCHANT_OWNER",
  OUTLET_MANAGER = "OUTLET_MANAGER",
  CASHIER = "CASHIER",
  SUPPORT_AGENT = "SUPPORT_AGENT",
  PLATFORM_ADMIN = "PLATFORM_ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
}

export class PermissionEvaluator {
  static hasAnyRole(userRoles: string[], requiredRoles: PlatformRole[]): boolean {
    if (userRoles.includes(PlatformRole.SUPER_ADMIN)) {
      return true; // Super admin has bypass privilege
    }
    return requiredRoles.some(role => userRoles.includes(role));
  }

  static assertTenantAccess(userTenantId: string | undefined, resourceTenantId: string): void {
    if (!userTenantId || userTenantId !== resourceTenantId) {
      throw new Error("Forbidden: Cross-tenant resource access attempted");
    }
  }
}
