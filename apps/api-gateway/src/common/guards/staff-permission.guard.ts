import {
  Injectable,
  CanActivate,
  ExecutionContext,
  SetMetadata,
  ForbiddenException,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import * as jwt from "jsonwebtoken";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";

export const REQUIRED_PERMISSIONS_KEY = "required_staff_permissions";

/**
 * RequirePermission(...permissions)
 * Any one of the specified permissions satisfies the route check for a switched-in staff member.
 * Store Owner (no x-staff-shift-token) always has full access.
 */
export const RequirePermission = (...permissions: string[]) =>
  SetMetadata(REQUIRED_PERMISSIONS_KEY, permissions);

const OWNER_ONLY_PERMISSIONS = new Set<string>([
  "staff:manage",
  "staff:invite_remove",
  "permissions:assign",
  "audit:view",
  "billing:manage",
  "billing:view_invoices",
  "profile:edit",
  "delivery:manage",
]);

export interface ActorContext {
  actorStaffId: string;
  actorName: string;
  actorRole: string;
  authMode: "OWNER_OTP" | "PIN_SHIFT";
  permissions: string[] | null; // null => Owner (all permissions)
}

@Injectable()
export class StaffPermissionGuard implements CanActivate {
  private readonly merchantServiceUrl = process.env.MERCHANT_SERVICE_URL as string;
  private readonly jwtSecret = process.env.JWT_SECRET as string;

  constructor(
    private readonly reflector: Reflector,
    private readonly proxy: ProxyDispatcherService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<any>();
    const authHeader = req.headers?.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedException("Authentication required");
    }

    let decodedUser: any;
    try {
      decodedUser = jwt.verify(authHeader.substring(7), this.jwtSecret, {
        issuer: process.env.JWT_ISSUER,
        audience: process.env.JWT_AUDIENCE,
      });
    } catch {
      throw new UnauthorizedException("Invalid or expired token");
    }

    if (!decodedUser?.tenantId) {
      throw new UnauthorizedException("Token missing tenant scope");
    }
    req.user = decodedUser;

    const requiredPerms =
      this.reflector.getAllAndOverride<string[]>(REQUIRED_PERMISSIONS_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) || [];

    const shiftToken = req.headers?.["x-staff-shift-token"] as string | undefined;

    // Owner mode (no staff shift token active)
    if (!shiftToken) {
      const ownerName =
        String(req.headers?.["x-actor-name"] || decodedUser.name || decodedUser.fullName || "Store Owner");
      const actor: ActorContext = {
        actorStaffId: decodedUser.tenantId,
        actorName: ownerName,
        actorRole: "OWNER",
        authMode: "OWNER_OTP",
        permissions: null,
      };
      req.actorContext = actor;
      return true;
    }

    // Staff PIN shift token mode — verify cryptographically and cross-check live roster
    let decodedShift: any;
    try {
      decodedShift = jwt.verify(shiftToken, this.jwtSecret, {
        issuer: process.env.JWT_ISSUER,
        audience: process.env.JWT_AUDIENCE,
      });
    } catch {
      throw new UnauthorizedException("Staff shift token is invalid or expired. Please switch PIN again.");
    }

    if (decodedShift?.type !== "STAFF_SHIFT" || decodedShift?.tenantId !== decodedUser.tenantId) {
      throw new ForbiddenException("Invalid staff shift token for this merchant");
    }

    // Fetch live staff roster from merchant-service so revocations/permission edits apply immediately
    let liveMember: any = null;
    try {
      const roster = await this.proxy.dispatch<any[]>(
        this.merchantServiceUrl,
        `/api/v1/merchants/${decodedUser.tenantId}/staff-access`,
        {
          method: "GET",
          headers: { authorization: authHeader, "x-tenant-id": decodedUser.tenantId },
        }
      );
      if (Array.isArray(roster)) {
        liveMember = roster.find((m) => m.id === decodedShift.staffId);
      }
    } catch {
      // Fallback to signed token claims only if roster service briefly unreachable
      liveMember = {
        id: decodedShift.staffId,
        name: decodedShift.name,
        role: decodedShift.role,
        isActive: true,
        permissions: Array.isArray(decodedShift.permissions) ? decodedShift.permissions : [],
      };
    }

    if (!liveMember || liveMember.isActive === false) {
      throw new ForbiddenException("Staff member is suspended or no longer on the store roster.");
    }

    const rawRole = String(liveMember.role || decodedShift.role || "Staff").trim() || "Staff";
    const isOwner = rawRole.toUpperCase() === "OWNER";
    const permissions: string[] = Array.isArray(liveMember.permissions)
      ? liveMember.permissions
      : [];

    const actor: ActorContext = {
      actorStaffId: liveMember.id,
      actorName: liveMember.name || decodedShift.name,
      actorRole: isOwner ? "OWNER" : rawRole,
      authMode: "PIN_SHIFT",
      permissions: isOwner ? null : permissions,
    };
    req.actorContext = actor;

    if (isOwner || requiredPerms.length === 0) {
      return true;
    }

    // Owner-only permissions cannot be exercised by non-Owner staff shifts
    const hasAllowedPerm = requiredPerms.some(
      (p) => !OWNER_ONLY_PERMISSIONS.has(p) && permissions.includes(p)
    );

    if (!hasAllowedPerm) {
      throw new ForbiddenException(
        `Access denied for ${actor.actorName} (${actor.actorRole}): missing required permission (${requiredPerms.join(" or ")})`
      );
    }

    return true;
  }
}
