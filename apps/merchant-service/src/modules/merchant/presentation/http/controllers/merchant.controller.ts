import {
  Controller,
  Post,
  Get,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  Req,
  Headers,
  ForbiddenException,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { MerchantService } from "../../../application/services/merchant.service";
import { AuditLogService } from "../../../application/services/audit-log.service";
import { CreateMerchantDto, CreateOutletDto, UpdateOperatingHoursDto } from "../../../application/dto/merchant.dto";
import { PrismaService } from "../../../infrastructure/persistence/prisma/prisma.service";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

// Presets are convenience defaults only when permissions[] is omitted on legacy records.
// Owners can assign any custom role name (except reserved "OWNER") and any non-locked permissions.

const OWNER_LOCKED_PERMISSIONS = new Set<string>([
  "staff:manage",
  "staff:invite_remove",
  "permissions:assign",
  "audit:view",
  "billing:manage",
  "billing:view_invoices",
  "profile:edit",
  "delivery:manage",
]);

const DEFAULT_ROLE_PERMISSIONS: Record<string, string[]> = {
  OWNER: [
    "orders:view", "orders:accept", "orders:status_prep_ready", "orders:refund_cancel", "orders:manage",
    "catalog:view", "catalog:create_edit", "catalog:delete", "catalog:edit_price", "catalogue:edit_price",
    "inventory:view", "inventory:adjust_stock", "inventory:view_movements",
    "pos:walkin_billing",
    "capacity:manage", "delivery:manage", "profile:edit",
    "analytics:view", "billing:manage", "billing:view_invoices",
    "staff:manage", "staff:invite_remove", "permissions:assign",
    "audit:view",
  ],
  MANAGER: [
    "orders:view", "orders:accept", "orders:status_prep_ready", "orders:refund_cancel", "orders:manage",
    "catalog:view", "catalog:create_edit", "catalog:edit_price", "catalogue:edit_price",
    "inventory:view", "inventory:adjust_stock", "inventory:view_movements",
    "pos:walkin_billing",
    "capacity:manage",
    "analytics:view",
  ],
  CASHIER: [
    "orders:view", "orders:accept",
    "catalog:view",
    "inventory:view",
    "pos:walkin_billing",
  ],
  CHEF: [
    "orders:view", "orders:accept", "orders:status_prep_ready",
    "catalog:view",
    "inventory:view", "inventory:adjust_stock",
  ],
  INVENTORY: [
    "orders:view",
    "catalog:view",
    "inventory:view", "inventory:adjust_stock", "inventory:view_movements",
  ],
};

function sanitizeStaffPermissions(role: string, requested?: string[]): string[] {
  const normalizedRole = role.toUpperCase();
  const base = Array.isArray(requested)
    ? requested
    : (DEFAULT_ROLE_PERMISSIONS[normalizedRole] || DEFAULT_ROLE_PERMISSIONS.CASHIER);
  const cleaned = Array.from(
    new Set(
      base
        .map((p) => String(p || "").trim())
        .filter((p) => p.length > 0 && !OWNER_LOCKED_PERMISSIONS.has(p))
    )
  );
  // Keep catalogue:edit_price alias aligned with catalog:edit_price
  if (cleaned.includes("catalog:edit_price") && !cleaned.includes("catalogue:edit_price")) {
    cleaned.push("catalogue:edit_price");
  }
  return cleaned;
}

@ApiTags("Merchant Organization & Outlets")
@Controller("api/v1/merchants")
export class MerchantController {
  constructor(
    private readonly merchantService: MerchantService,
    private readonly auditLogService: AuditLogService,
    private readonly prisma: PrismaService
  ) {}

  private resolveActor(headers: Record<string, any> | undefined, req: any, merchant: any) {
    const actorStaffId = String(headers?.["x-actor-id"] || req?.user?.sub || merchant.id);
    const actorName = String(headers?.["x-actor-name"] || merchant.contactName || "Store Owner");
    const actorRole = String(headers?.["x-actor-role"] || "OWNER");
    const authMode = String(headers?.["x-auth-mode"] || "OWNER_OTP");
    return { actorStaffId, actorName, actorRole, authMode };
  }

  @Post()
  @ApiOperation({ summary: "Register new merchant organization" })
  @ApiResponse({ status: 201, description: "Merchant created successfully" })
  async createMerchant(@Body() dto: CreateMerchantDto) {
    return this.merchantService.registerMerchant(dto);
  }

  @Get("my-profile")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get current authenticated merchant organization profile and outlets" })
  async getMyProfile(@Headers("x-tenant-id") headerTenantId: string, @Req() req: any) {
    const tenantId = headerTenantId || req.user?.tenantId;
    const merchant = await this.prisma.merchant.findUnique({
      where: { id: tenantId },
      include: {
        outlets: { include: { hours: true, serviceAreas: true } },
        partnerApplication: true,
      },
    });
    if (!merchant) throw new NotFoundException(`Merchant '${tenantId}' not found`);

    const primaryOutlet = merchant.outlets?.[0];
    const extraMeta: any = (primaryOutlet?.serviceAreas?.[0]?.geoJson as any) || {};
    const profileMeta: any = extraMeta.profile || {};

    return {
      merchant,
      outlets: merchant.outlets || [],
      profile: {
        id: merchant.id,
        outletId: primaryOutlet?.id,
        shopName: profileMeta.shopName || merchant.organizationName,
        businessCategory: profileMeta.businessCategory || merchant.category || "Grocery & Daily Needs",
        ownerName: profileMeta.ownerName || merchant.contactName,
        phone: profileMeta.phone || merchant.contactPhone,
        email: profileMeta.email || merchant.email || merchant.partnerApplication?.email || "",
        tagline: profileMeta.tagline || merchant.description || merchant.partnerApplication?.businessDescription || "",
        addressStreet: profileMeta.addressStreet || primaryOutlet?.addressLine || merchant.partnerApplication?.fullAddress || "",
        locality: primaryOutlet?.locality || merchant.partnerApplication?.locality || "",
        city: profileMeta.city || primaryOutlet?.city || merchant.partnerApplication?.city || "",
        pincode: profileMeta.pincode || primaryOutlet?.pincode || merchant.partnerApplication?.pincode || "",
        gstin: profileMeta.gstin || "",
        fssai: profileMeta.fssai || "",
        coverUrl: profileMeta.coverUrl || undefined,
        logoUrl: profileMeta.logoUrl || undefined,
        storePhotos: profileMeta.storePhotos || [],
        holidays: profileMeta.holidays || [],
        isShopLiveOpen: primaryOutlet?.isActive ?? true,
        weeklySchedule: (primaryOutlet?.hours || []).map((h) => ({
          day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][h.dayOfWeek] || "Day",
          isOpen: !h.isClosed,
          openTime: h.openTime,
          closeTime: h.closeTime,
        })),
      },
    };
  }

  @Put(":id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update merchant organization profile and primary outlet details" })
  async updateProfile(
    @Param("id") id: string,
    @Body() body: any,
    @Headers() headers: Record<string, any>,
    @Req() req: any
  ) {
    const headerTenantId = headers?.["x-tenant-id"];
    const callerTenantId = headerTenantId || req.user?.tenantId;
    if (callerTenantId && callerTenantId !== id) {
      throw new ForbiddenException("Cross-tenant access forbidden");
    }

    const merchant = await this.prisma.merchant.findUnique({
      where: { id },
      include: { outlets: { include: { serviceAreas: true } } },
    });
    if (!merchant) throw new NotFoundException(`Merchant '${id}' not found`);

    const primaryOutlet = merchant.outlets?.[0];
    const beforeState = {
      shopName: merchant.organizationName,
      ownerName: merchant.contactName,
      phone: merchant.contactPhone,
      city: primaryOutlet?.city || "",
      pincode: primaryOutlet?.pincode || "",
    };

    await this.prisma.merchant.update({
      where: { id },
      data: {
        ...(body.shopName ? { organizationName: String(body.shopName).trim() } : {}),
        ...(body.ownerName ? { contactName: String(body.ownerName).trim() } : {}),
        ...(body.phone ? { contactPhone: String(body.phone).trim() } : {}),
        ...(body.email !== undefined ? { email: String(body.email).trim() } : {}),
        ...(body.businessCategory ? { category: String(body.businessCategory).trim() } : {}),
        ...(body.tagline !== undefined ? { description: String(body.tagline) } : {}),
      },
    });

    if (primaryOutlet) {
      await this.prisma.outlet.update({
        where: { id: primaryOutlet.id },
        data: {
          ...(body.shopName ? { name: `${String(body.shopName).trim()} - Main Outlet` } : {}),
          ...(body.addressStreet !== undefined ? { addressLine: String(body.addressStreet) } : {}),
          ...(body.city !== undefined ? { city: String(body.city) } : {}),
          ...(body.pincode !== undefined ? { pincode: String(body.pincode) } : {}),
        },
      });

      const area = primaryOutlet.serviceAreas?.[0];
      const existingGeo: any = (area?.geoJson as any) || {};
      const nextGeo = { ...existingGeo, profile: { ...(existingGeo.profile || {}), ...body } };
      if (area) {
        await this.prisma.serviceArea.update({ where: { id: area.id }, data: { geoJson: nextGeo } });
      } else {
        await this.prisma.serviceArea.create({
          data: {
            id: UniqueIdentifier.generateV7(),
            outletId: primaryOutlet.id,
            radiusMeters: Math.round((primaryOutlet.deliveryRadiusKm || 5) * 1000),
            geoJson: nextGeo,
          },
        });
      }
    }

    const actor = this.resolveActor(headers, req, merchant);
    await this.auditLogService.log({
      tenantId: id,
      outletId: primaryOutlet?.id,
      ...actor,
      module: "PROFILE",
      action: "PROFILE_UPDATED",
      targetType: "MERCHANT_PROFILE",
      targetId: id,
      targetLabel: body.shopName || merchant.organizationName,
      beforeState,
      afterState: {
        shopName: body.shopName || beforeState.shopName,
        ownerName: body.ownerName || beforeState.ownerName,
        phone: body.phone || beforeState.phone,
        city: body.city ?? beforeState.city,
        pincode: body.pincode ?? beforeState.pincode,
      },
    });

    return this.getMyProfile(id, req);
  }

  @Get(":id/delivery-settings")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get tenant delivery geofence, pricing, pincodes, and riders" })
  async getDeliverySettings(
    @Param("id") id: string,
    @Headers("x-tenant-id") headerTenantId: string,
    @Req() req: any
  ) {
    const callerTenantId = headerTenantId || req.user?.tenantId;
    if (callerTenantId && callerTenantId !== id) {
      throw new ForbiddenException("Cross-tenant access forbidden");
    }

    const outlet = await this.prisma.outlet.findFirst({
      where: { merchantId: id },
      include: { serviceAreas: true },
    });
    if (!outlet) throw new NotFoundException(`Outlet for merchant '${id}' not found`);

    const geoJson: any = (outlet.serviceAreas?.[0]?.geoJson as any) || {};
    const deliveryMeta: any = geoJson.deliverySettings || {};

    return {
      isDeliveryEnabled: deliveryMeta.isDeliveryEnabled ?? outlet.merchantDelivery ?? true,
      deliveryRadiusKm: deliveryMeta.deliveryRadiusKm ?? outlet.deliveryRadiusKm ?? 5,
      minOrderAmount: deliveryMeta.minOrderAmount ?? outlet.minOrderValue ?? 149,
      baseDeliveryFee: deliveryMeta.baseDeliveryFee ?? 25,
      freeDeliveryAbove: deliveryMeta.freeDeliveryAbove ?? 499,
      estDeliveryMinutes: deliveryMeta.estDeliveryMinutes ?? outlet.prepTimeMinutes ?? 30,
      pincodes: deliveryMeta.pincodes ?? (outlet.pincode ? [outlet.pincode] : []),
      riders: deliveryMeta.riders ?? [],
      geo: {
        lat: outlet.latitude || 20.7002,
        lng: outlet.longitude || 77.0082,
        locality: outlet.locality || "",
        city: outlet.city || "",
        pincode: outlet.pincode || "",
        keyAreas: deliveryMeta.keyAreas ?? (outlet.locality ? [outlet.locality] : []),
      },
    };
  }

  @Put(":id/delivery-settings")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Save tenant delivery geofence, pricing, pincodes, and riders" })
  async saveDeliverySettings(
    @Param("id") id: string,
    @Body() body: any,
    @Headers() headers: Record<string, any>,
    @Req() req: any
  ) {
    const headerTenantId = headers?.["x-tenant-id"];
    const callerTenantId = headerTenantId || req.user?.tenantId;
    if (callerTenantId && callerTenantId !== id) {
      throw new ForbiddenException("Cross-tenant access forbidden");
    }

    const merchant = await this.prisma.merchant.findUnique({ where: { id } });
    const outlet = await this.prisma.outlet.findFirst({
      where: { merchantId: id },
      include: { serviceAreas: true },
    });
    if (!outlet) throw new NotFoundException(`Outlet for merchant '${id}' not found`);

    const area = outlet.serviceAreas?.[0];
    const existingGeo: any = (area?.geoJson as any) || {};
    const prevDelivery: any = existingGeo.deliverySettings || {};
    const beforeState = {
      isDeliveryEnabled: prevDelivery.isDeliveryEnabled ?? outlet.merchantDelivery,
      deliveryRadiusKm: prevDelivery.deliveryRadiusKm ?? outlet.deliveryRadiusKm,
      minOrderAmount: prevDelivery.minOrderAmount ?? outlet.minOrderValue,
      baseDeliveryFee: prevDelivery.baseDeliveryFee ?? 25,
      ridersCount: Array.isArray(prevDelivery.riders) ? prevDelivery.riders.length : 0,
      pincodesCount: Array.isArray(prevDelivery.pincodes) ? prevDelivery.pincodes.length : 0,
    };

    const radiusKm = Number(body.deliveryRadiusKm ?? outlet.deliveryRadiusKm ?? 5);
    await this.prisma.outlet.update({
      where: { id: outlet.id },
      data: {
        ...(body.isDeliveryEnabled !== undefined ? { merchantDelivery: Boolean(body.isDeliveryEnabled) } : {}),
        deliveryRadiusKm: radiusKm,
        ...(body.minOrderAmount !== undefined ? { minOrderValue: Number(body.minOrderAmount) } : {}),
        ...(body.estDeliveryMinutes !== undefined ? { prepTimeMinutes: Number(body.estDeliveryMinutes) } : {}),
      },
    });

    const nextGeo = {
      ...existingGeo,
      deliverySettings: { ...(existingGeo.deliverySettings || {}), ...body, deliveryRadiusKm: radiusKm },
    };
    if (area) {
      await this.prisma.serviceArea.update({
        where: { id: area.id },
        data: { radiusMeters: Math.round(radiusKm * 1000), geoJson: nextGeo },
      });
    } else {
      await this.prisma.serviceArea.create({
        data: {
          id: UniqueIdentifier.generateV7(),
          outletId: outlet.id,
          radiusMeters: Math.round(radiusKm * 1000),
          geoJson: nextGeo,
        },
      });
    }

    const actor = this.resolveActor(headers, req, merchant || { id, contactName: "Store Owner" });
    await this.auditLogService.log({
      tenantId: id,
      outletId: outlet.id,
      ...actor,
      module: "DELIVERY",
      action: "SETTINGS_UPDATED",
      targetType: "DELIVERY_SETTINGS",
      targetId: outlet.id,
      targetLabel: `Radius ${radiusKm} km`,
      beforeState,
      afterState: {
        isDeliveryEnabled: body.isDeliveryEnabled ?? beforeState.isDeliveryEnabled,
        deliveryRadiusKm: radiusKm,
        minOrderAmount: body.minOrderAmount ?? beforeState.minOrderAmount,
        baseDeliveryFee: body.baseDeliveryFee ?? beforeState.baseDeliveryFee,
        ridersCount: Array.isArray(body.riders) ? body.riders.length : beforeState.ridersCount,
        pincodesCount: Array.isArray(body.pincodes) ? body.pincodes.length : beforeState.pincodesCount,
      },
    });

    return this.getDeliverySettings(id, headerTenantId, req);
  }

  @Get(":id/capacity-settings")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get tenant slot & capacity settings" })
  async getCapacitySettings(
    @Param("id") id: string,
    @Headers("x-tenant-id") headerTenantId: string,
    @Req() req: any
  ) {
    const callerTenantId = headerTenantId || req.user?.tenantId;
    if (callerTenantId && callerTenantId !== id) {
      throw new ForbiddenException("Cross-tenant access forbidden");
    }

    const outlet = await this.prisma.outlet.findFirst({
      where: { merchantId: id },
      include: { serviceAreas: true },
    });
    if (!outlet) throw new NotFoundException(`Outlet for merchant '${id}' not found`);

    const geoJson: any = (outlet.serviceAreas?.[0]?.geoJson as any) || {};
    const cap: any = geoJson.capacitySettings || {};
    return {
      slotInterval: cap.slotInterval ?? 30,
      maxOrdersPerSlot: cap.maxOrdersPerSlot ?? 12,
      maxConcurrentActive: cap.maxConcurrentActive ?? 8,
      bufferMinutes: cap.bufferMinutes ?? 15,
      kitchenLeadTime: cap.kitchenLeadTime ?? outlet.prepTimeMinutes ?? 20,
      blackoutWindows: cap.blackoutWindows ?? [],
      pausedSlotIds: cap.pausedSlotIds ?? [],
    };
  }

  @Put(":id/capacity-settings")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Save tenant slot & capacity settings" })
  async saveCapacitySettings(
    @Param("id") id: string,
    @Body() body: any,
    @Headers() headers: Record<string, any>,
    @Req() req: any
  ) {
    const headerTenantId = headers?.["x-tenant-id"];
    const callerTenantId = headerTenantId || req.user?.tenantId;
    if (callerTenantId && callerTenantId !== id) {
      throw new ForbiddenException("Cross-tenant access forbidden");
    }

    const merchant = await this.prisma.merchant.findUnique({ where: { id } });
    const outlet = await this.prisma.outlet.findFirst({
      where: { merchantId: id },
      include: { serviceAreas: true },
    });
    if (!outlet) throw new NotFoundException(`Outlet for merchant '${id}' not found`);

    const area = outlet.serviceAreas?.[0];
    const existingGeo: any = (area?.geoJson as any) || {};
    const prevCap: any = existingGeo.capacitySettings || {};
    const beforeState = {
      slotInterval: prevCap.slotInterval ?? 30,
      maxOrdersPerSlot: prevCap.maxOrdersPerSlot ?? 12,
      maxConcurrentActive: prevCap.maxConcurrentActive ?? 8,
      kitchenLeadTime: prevCap.kitchenLeadTime ?? outlet.prepTimeMinutes ?? 20,
    };

    const nextCap = { ...(existingGeo.capacitySettings || {}), ...body };
    const nextGeo = {
      ...existingGeo,
      capacitySettings: nextCap,
    };
    if (area) {
      await this.prisma.serviceArea.update({ where: { id: area.id }, data: { geoJson: nextGeo } });
    } else {
      await this.prisma.serviceArea.create({
        data: {
          id: UniqueIdentifier.generateV7(),
          outletId: outlet.id,
          radiusMeters: Math.round((outlet.deliveryRadiusKm || 5) * 1000),
          geoJson: nextGeo,
        },
      });
    }

    const actor = this.resolveActor(headers, req, merchant || { id, contactName: "Store Owner" });
    await this.auditLogService.log({
      tenantId: id,
      outletId: outlet.id,
      ...actor,
      module: "CAPACITY",
      action: "SETTINGS_UPDATED",
      targetType: "CAPACITY_SETTINGS",
      targetId: outlet.id,
      targetLabel: `Max ${nextCap.maxOrdersPerSlot ?? 12} orders/slot`,
      beforeState,
      afterState: {
        slotInterval: nextCap.slotInterval ?? beforeState.slotInterval,
        maxOrdersPerSlot: nextCap.maxOrdersPerSlot ?? beforeState.maxOrdersPerSlot,
        maxConcurrentActive: nextCap.maxConcurrentActive ?? beforeState.maxConcurrentActive,
        kitchenLeadTime: nextCap.kitchenLeadTime ?? beforeState.kitchenLeadTime,
      },
    });

    return this.getCapacitySettings(id, headerTenantId, req);
  }

  private buildOwnerStaff(merchant: any, outlet: any, ownerMeta: any = {}) {
    return {
      id: merchant.id,
      name: merchant.contactName,
      phone: merchant.contactPhone,
      role: "OWNER",
      pin: ownerMeta.pin || "1234",
      outlet: merchant.organizationName,
      isActive: true,
      lastActive: ownerMeta.lastActive || "Active Now",
      permissions: DEFAULT_ROLE_PERMISSIONS.OWNER,
    };
  }

  private normalizeRosterMember(member: any) {
    const rawRole = String(member?.role || "Staff").trim();
    const role = rawRole.length > 0 && rawRole.toUpperCase() !== "OWNER" ? rawRole : "Staff";
    const permissions = Array.isArray(member?.permissions)
      ? sanitizeStaffPermissions(role, member.permissions)
      : sanitizeStaffPermissions(role);
    return {
      ...member,
      role,
      permissions,
    };
  }

  private async loadStaffContext(id: string, headerTenantId?: string, req?: any) {
    const callerTenantId = headerTenantId || req?.user?.tenantId;
    if (callerTenantId && callerTenantId !== id) {
      throw new ForbiddenException("Cross-tenant access forbidden");
    }
    const merchant = await this.prisma.merchant.findUnique({
      where: { id },
      include: { outlets: { include: { serviceAreas: true } } },
    });
    if (!merchant) throw new NotFoundException(`Merchant '${id}' not found`);
    const outlet = merchant.outlets?.[0];
    const area = outlet?.serviceAreas?.[0];
    const geoJson: any = (area?.geoJson as any) || {};
    const rawRoster = Array.isArray(geoJson.staffRoster) ? geoJson.staffRoster : [];
    return {
      merchant,
      outlet,
      area,
      geoJson,
      ownerMeta: geoJson.ownerStaffMeta || {},
      roster: rawRoster.map((m: any) => this.normalizeRosterMember(m)),
    };
  }

  private async persistStaffGeo(outlet: any, area: any, geoJson: any, ownerStaffMeta: any, staffRoster: any[]) {
    const nextGeo = { ...geoJson, ownerStaffMeta, staffRoster };
    if (area) {
      await this.prisma.serviceArea.update({ where: { id: area.id }, data: { geoJson: nextGeo } });
    } else if (outlet) {
      await this.prisma.serviceArea.create({
        data: {
          id: UniqueIdentifier.generateV7(),
          outletId: outlet.id,
          radiusMeters: Math.round((outlet.deliveryRadiusKm || 5) * 1000),
          geoJson: nextGeo,
        },
      });
    }
  }

  @Get(":id/staff-access")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List tenant-isolated staff roster and owner entry" })
  async getStaffAccess(@Param("id") id: string, @Headers("x-tenant-id") headerTenantId: string, @Req() req: any) {
    const ctx = await this.loadStaffContext(id, headerTenantId, req);
    return [this.buildOwnerStaff(ctx.merchant, ctx.outlet, ctx.ownerMeta), ...ctx.roster];
  }

  @Post(":id/staff-access")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Invite/add a new staff member with 4-digit POS PIN and custom permissions" })
  async createStaffMember(
    @Param("id") id: string,
    @Body() body: { name: string; phone: string; role?: string; pin?: string; permissions?: string[] },
    @Headers() headers: Record<string, any>,
    @Req() req: any
  ) {
    const headerTenantId = headers?.["x-tenant-id"];
    const name = String(body?.name || "").trim();
    const phone = String(body?.phone || "").trim();
    const reqRole = String(body?.role || "").trim();
    if (reqRole.toUpperCase() === "OWNER") {
      throw new BadRequestException("Role name 'OWNER' is reserved for the shop owner");
    }
    const role = reqRole.length > 0 ? reqRole.slice(0, 40) : "Staff";
    const pin = String(body?.pin || "").trim() || Math.floor(1000 + Math.random() * 9000).toString();

    if (!name || phone.replace(/\D/g, "").length < 10) {
      throw new BadRequestException("Valid staff name and 10-digit mobile number are required");
    }
    if (!/^\d{4}$/.test(pin)) {
      throw new BadRequestException("Staff POS PIN must be exactly 4 digits");
    }

    const ctx = await this.loadStaffContext(id, headerTenantId, req);
    const owner = this.buildOwnerStaff(ctx.merchant, ctx.outlet, ctx.ownerMeta);
    const allPins = [owner, ...ctx.roster].map((s) => s.pin);
    if (allPins.includes(pin)) {
      throw new BadRequestException(`PIN '${pin}' is already assigned to another active staff member`);
    }

    const permissions = sanitizeStaffPermissions(role, body?.permissions);

    const member = {
      id: `staff-${UniqueIdentifier.generateV7()}`,
      name,
      phone,
      role,
      pin,
      outlet: ctx.merchant.organizationName,
      isActive: true,
      lastActive: "Invited",
      permissions,
    };

    const nextRoster = [...ctx.roster, member];
    await this.persistStaffGeo(ctx.outlet, ctx.area, ctx.geoJson, ctx.ownerMeta, nextRoster);

    const actor = this.resolveActor(headers, req, ctx.merchant);
    await this.auditLogService.log({
      tenantId: id,
      outletId: ctx.outlet?.id,
      ...actor,
      module: "STAFF",
      action: "MEMBER_INVITED",
      targetType: "STAFF_MEMBER",
      targetId: member.id,
      targetLabel: `${member.name} (${member.role})`,
      afterState: { role: member.role, isActive: true, permissions: member.permissions },
    });

    return member;
  }

  @Patch(":id/staff-access/:staffId")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update staff member active status, role, PIN, or custom permissions" })
  async updateStaffMember(
    @Param("id") id: string,
    @Param("staffId") staffId: string,
    @Body() body: { isActive?: boolean; role?: string; pin?: string; permissions?: string[] },
    @Headers() headers: Record<string, any>,
    @Req() req: any
  ) {
    const headerTenantId = headers?.["x-tenant-id"];
    const ctx = await this.loadStaffContext(id, headerTenantId, req);
    const actor = this.resolveActor(headers, req, ctx.merchant);

    if (staffId === ctx.merchant.id) {
      if (body.isActive === false) {
        throw new BadRequestException("Store Owner cannot be suspended");
      }
      if (body.pin && /^\d{4}$/.test(body.pin)) {
        const conflict = ctx.roster.some((s: any) => s.pin === body.pin);
        if (conflict) {
          throw new BadRequestException(`PIN '${body.pin}' is already assigned to another staff member`);
        }
      }
      const nextOwnerMeta = { ...ctx.ownerMeta, ...(body.pin && /^\d{4}$/.test(body.pin) ? { pin: body.pin } : {}) };
      await this.persistStaffGeo(ctx.outlet, ctx.area, ctx.geoJson, nextOwnerMeta, ctx.roster);
      return this.buildOwnerStaff(ctx.merchant, ctx.outlet, nextOwnerMeta);
    }

    const idx = ctx.roster.findIndex((s: any) => s.id === staffId);
    if (idx === -1) throw new NotFoundException(`Staff member '${staffId}' not found`);

    const current = ctx.roster[idx];
    const reqRole = String(body?.role || "").trim();
    if (reqRole.toUpperCase() === "OWNER") {
      throw new BadRequestException("Role name 'OWNER' is reserved for the shop owner");
    }
    const nextRole = reqRole.length > 0 ? reqRole.slice(0, 40) : current.role;

    if (body.pin && /^\d{4}$/.test(body.pin) && body.pin !== current.pin) {
      const owner = this.buildOwnerStaff(ctx.merchant, ctx.outlet, ctx.ownerMeta);
      const conflict = [owner, ...ctx.roster].some((s: any) => s.id !== staffId && s.pin === body.pin);
      if (conflict) {
        throw new BadRequestException(`PIN '${body.pin}' is already assigned to another staff member`);
      }
    }

    const nextPermissions = Array.isArray(body.permissions)
      ? sanitizeStaffPermissions(nextRole, body.permissions)
      : current.permissions;

    const updated = {
      ...current,
      ...(body.isActive !== undefined ? { isActive: Boolean(body.isActive) } : {}),
      role: nextRole,
      ...(body.pin && /^\d{4}$/.test(body.pin) ? { pin: body.pin } : {}),
      permissions: nextPermissions,
    };

    const nextRoster = [...ctx.roster];
    nextRoster[idx] = updated;
    await this.persistStaffGeo(ctx.outlet, ctx.area, ctx.geoJson, ctx.ownerMeta, nextRoster);

    const action = Array.isArray(body.permissions)
      ? "PERMISSIONS_UPDATED"
      : (body.isActive !== undefined && body.isActive !== current.isActive ? "STATUS_CHANGED" : "MEMBER_UPDATED");

    await this.auditLogService.log({
      tenantId: id,
      outletId: ctx.outlet?.id,
      ...actor,
      module: "STAFF",
      action,
      targetType: "STAFF_MEMBER",
      targetId: updated.id,
      targetLabel: `${updated.name} (${updated.role})`,
      beforeState: {
        role: current.role,
        isActive: current.isActive,
        permissions: current.permissions,
      },
      afterState: {
        role: updated.role,
        isActive: updated.isActive,
        permissions: updated.permissions,
      },
    });

    return updated;
  }

  @Delete(":id/staff-access/:staffId")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Remove staff member from store roster" })
  async removeStaffMember(
    @Param("id") id: string,
    @Param("staffId") staffId: string,
    @Headers() headers: Record<string, any>,
    @Req() req: any
  ) {
    const headerTenantId = headers?.["x-tenant-id"];
    const ctx = await this.loadStaffContext(id, headerTenantId, req);
    if (staffId === ctx.merchant.id) {
      throw new BadRequestException("Store Owner cannot be removed");
    }
    const target = ctx.roster.find((s: any) => s.id === staffId);
    if (!target) {
      throw new NotFoundException(`Staff member '${staffId}' not found`);
    }
    const nextRoster = ctx.roster.filter((s: any) => s.id !== staffId);
    await this.persistStaffGeo(ctx.outlet, ctx.area, ctx.geoJson, ctx.ownerMeta, nextRoster);

    const actor = this.resolveActor(headers, req, ctx.merchant);
    await this.auditLogService.log({
      tenantId: id,
      outletId: ctx.outlet?.id,
      ...actor,
      module: "STAFF",
      action: "MEMBER_REMOVED",
      targetType: "STAFF_MEMBER",
      targetId: staffId,
      targetLabel: `${target.name} (${target.role})`,
      beforeState: { role: target.role, isActive: target.isActive, permissions: target.permissions },
    });

    return { deleted: true, id: staffId };
  }

  @Post(":id/staff-access/verify-pin")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Verify 4-digit staff POS PIN and record shift handover" })
  async verifyStaffPin(
    @Param("id") id: string,
    @Body() body: { pin: string },
    @Headers() headers: Record<string, any>,
    @Req() req: any
  ) {
    const headerTenantId = headers?.["x-tenant-id"];
    const pin = String(body?.pin || "").trim();
    const ctx = await this.loadStaffContext(id, headerTenantId, req);
    const owner = this.buildOwnerStaff(ctx.merchant, ctx.outlet, ctx.ownerMeta);
    const nowLabel = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    if (owner.pin === pin) {
      const nextOwnerMeta = { ...ctx.ownerMeta, lastActive: `Active (${nowLabel})` };
      await this.persistStaffGeo(ctx.outlet, ctx.area, ctx.geoJson, nextOwnerMeta, ctx.roster);
      const ownerMember = this.buildOwnerStaff(ctx.merchant, ctx.outlet, nextOwnerMeta);

      await this.auditLogService.log({
        tenantId: id,
        outletId: ctx.outlet?.id,
        actorStaffId: ownerMember.id,
        actorName: ownerMember.name,
        actorRole: "OWNER",
        authMode: "PIN_SHIFT",
        module: "STAFF",
        action: "PIN_SHIFT_SWITCHED",
        targetType: "POS_TERMINAL",
        targetId: ownerMember.id,
        targetLabel: `${ownerMember.name} (OWNER)`,
        afterState: { switchedTo: ownerMember.name, role: "OWNER" },
      });

      return { verified: true, member: ownerMember };
    }

    const idx = ctx.roster.findIndex((s: any) => s.pin === pin && s.isActive);
    if (idx === -1) {
      throw new BadRequestException("Invalid or suspended staff PIN");
    }

    const updatedMember = this.normalizeRosterMember({ ...ctx.roster[idx], lastActive: `Active (${nowLabel})` });
    const nextRoster = [...ctx.roster];
    nextRoster[idx] = updatedMember;
    await this.persistStaffGeo(ctx.outlet, ctx.area, ctx.geoJson, ctx.ownerMeta, nextRoster);

    await this.auditLogService.log({
      tenantId: id,
      outletId: ctx.outlet?.id,
      actorStaffId: updatedMember.id,
      actorName: updatedMember.name,
      actorRole: updatedMember.role,
      authMode: "PIN_SHIFT",
      module: "STAFF",
      action: "PIN_SHIFT_SWITCHED",
      targetType: "POS_TERMINAL",
      targetId: updatedMember.id,
      targetLabel: `${updatedMember.name} (${updatedMember.role})`,
      afterState: {
        switchedTo: updatedMember.name,
        role: updatedMember.role,
        permissions: updatedMember.permissions,
      },
    });

    return { verified: true, member: updatedMember };
  }

  @Get(":id/audit-logs")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Owner-only: Read immutable shop activity & audit logs" })
  async getAuditLogs(
    @Param("id") id: string,
    @Query("module") module?: string,
    @Query("staffId") staffId?: string,
    @Query("from") from?: string,
    @Query("to") to?: string,
    @Query("limit") limit?: string,
    @Headers("x-tenant-id") headerTenantId?: string,
    @Req() req?: any
  ) {
    const callerTenantId = headerTenantId || req?.user?.tenantId;
    if (callerTenantId && callerTenantId !== id) {
      throw new ForbiddenException("Cross-tenant access forbidden");
    }

    const fromDate = from ? new Date(from) : undefined;
    const toDate = to ? new Date(to) : undefined;
    if (toDate && !Number.isNaN(toDate.getTime())) {
      toDate.setHours(23, 59, 59, 999);
    }

    return this.auditLogService.getForTenant(id, {
      module: module && module !== "ALL" ? module.toUpperCase() : undefined,
      actorStaffId: staffId && staffId !== "ALL" ? staffId : undefined,
      from: fromDate && !Number.isNaN(fromDate.getTime()) ? fromDate : undefined,
      to: toDate && !Number.isNaN(toDate.getTime()) ? toDate : undefined,
      limit: limit ? Math.min(500, Math.max(1, Number(limit))) : 200,
    });
  }

  @Post(":id/audit-logs")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Internal append-only audit log writer for BFF/services" })
  async appendAuditLog(
    @Param("id") id: string,
    @Body() body: any,
    @Headers("x-tenant-id") headerTenantId?: string,
    @Req() req?: any
  ) {
    const callerTenantId = headerTenantId || req?.user?.tenantId;
    if (callerTenantId && callerTenantId !== id) {
      throw new ForbiddenException("Cross-tenant access forbidden");
    }

    await this.auditLogService.log({
      tenantId: id,
      outletId: body.outletId,
      actorStaffId: String(body.actorStaffId || id),
      actorName: String(body.actorName || "Store Owner"),
      actorRole: String(body.actorRole || "OWNER"),
      authMode: String(body.authMode || "OWNER_OTP"),
      module: String(body.module || "GENERAL"),
      action: String(body.action || "MUTATION"),
      targetType: body.targetType,
      targetId: body.targetId,
      targetLabel: body.targetLabel,
      beforeState: body.beforeState,
      afterState: body.afterState,
      notes: body.notes,
    });

    return { recorded: true };
  }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: "List merchants (Admin: all, Merchant: own organization)" })
  async listMerchants(@Headers("x-tenant-id") headerTenantId: string, @Req() req: any) {
    const tenantId = headerTenantId || req.user?.tenantId;
    const roles = req.user?.roles;
    return this.merchantService.listMerchants(tenantId, roles);
  }

  @Get(":id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get merchant organization profile with tenant isolation" })
  async getMerchant(
    @Param("id") id: string,
    @Headers("x-tenant-id") headerTenantId: string,
    @Req() req: any
  ) {
    const callerTenantId = headerTenantId || req.user?.tenantId;
    const callerRoles = req.user?.roles;
    return this.merchantService.getMerchant(id, callerTenantId, callerRoles);
  }

  @Post("outlets")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create an outlet under a merchant organization" })
  async createOutlet(
    @Body() dto: CreateOutletDto,
    @Headers("x-tenant-id") headerTenantId: string,
    @Req() req: any
  ) {
    const callerTenantId = headerTenantId || req.user?.tenantId;
    const callerRoles = req.user?.roles;
    return this.merchantService.createOutlet(dto, callerTenantId, callerRoles);
  }

  @Get("outlets/public")
  @ApiOperation({ summary: "Customer-facing: List active outlets directly from PostgreSQL with optional geo/city/query filters" })
  async listPublicOutlets(
    @Query("lat") lat?: string,
    @Query("lng") lng?: string,
    @Query("radiusKm") radiusKm?: string,
    @Query("locality") locality?: string,
    @Query("city") city?: string,
    @Query("pincode") pincode?: string,
    @Query("category") category?: string,
    @Query("query") query?: string,
    @Query("fulfilmentType") fulfilmentType?: string,
    @Query("limit") limit?: string
  ) {
    const outlets = await this.prisma.outlet.findMany({
      where: {
        isActive: true,
        merchant: { isSuspended: false },
      },
      include: {
        merchant: true,
        hours: true,
        serviceAreas: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const parsedLat = lat !== undefined && lat !== "undefined" && lat !== "" ? Number(lat) : NaN;
    const parsedLng = lng !== undefined && lng !== "undefined" && lng !== "" ? Number(lng) : NaN;
    const hasCoords = !Number.isNaN(parsedLat) && !Number.isNaN(parsedLng);
    const maxRadius = radiusKm ? Number(radiusKm) : 25;
    const q = String(query || "").trim().toLowerCase();
    const cat = String(category || "").trim().toLowerCase();
    const locFilter = String(locality || "").trim().toLowerCase();
    const cityFilter = String(city || "").trim().toLowerCase();
    const pinFilter = String(pincode || "").trim();
    const mode = String(fulfilmentType || "").trim().toUpperCase();

    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const calcKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
      const R = 6371;
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    };

    const mapped = outlets
      .map((o) => {
        const geo: any = (o.serviceAreas?.[0]?.geoJson as any) || {};
        const profileMeta: any = geo.profile || {};
        const deliveryMeta: any = geo.deliverySettings || {};
        const name = profileMeta.shopName || o.merchant?.organizationName || o.name;
        const shopCategory = profileMeta.businessCategory || o.merchant?.category || "Grocery & Daily Needs";
        const shopCity = profileMeta.city || o.city;
        const shopLocality = o.locality || "";
        const shopPincode = profileMeta.pincode || o.pincode || "";
        const distKm = hasCoords ? calcKm(parsedLat, parsedLng, o.latitude, o.longitude) : null;
        const catLower = shopCategory.toLowerCase();
        const categoryType = catLower.includes("fruit") || catLower.includes("veg")
          ? "fruits-veg"
          : catLower.includes("bakery") || catLower.includes("sweet")
            ? "bakery"
            : catLower.includes("food") || catLower.includes("snack")
              ? "food"
              : "groceries";

        return {
          id: o.id,
          outletId: o.id,
          merchantId: o.merchantId,
          name,
          outletName: o.name,
          category: shopCategory,
          categoryType,
          tags: [shopCategory, shopLocality, shopCity].filter(Boolean),
          rating: 4.8,
          reviewsCount: 0,
          isOpen: o.isActive && (deliveryMeta.isDeliveryActive ?? true),
          deliveryTime: `${o.prepTimeMinutes || 25} mins`,
          distanceKm: distKm !== null ? Number(distKm.toFixed(1)) : null,
          minOrderPaise: (deliveryMeta.minOrderValue ?? o.minOrderValue ?? 199) * 100,
          deliveryRadiusKm: deliveryMeta.radiusKm ?? o.deliveryRadiusKm ?? 5,
          baseDeliveryFee: deliveryMeta.baseCharge ?? 25,
          freeDeliveryThreshold: deliveryMeta.freeThreshold ?? 499,
          storePickup: o.storePickup,
          merchantDelivery: o.merchantDelivery && (deliveryMeta.isDeliveryActive ?? true),
          locality: shopLocality,
          city: shopCity,
          pincode: shopPincode,
          fullAddress: o.isAddressPublic ? (profileMeta.addressStreet || o.addressLine) : `${shopLocality}, ${shopCity}`,
          latitude: o.latitude,
          longitude: o.longitude,
          homeBusinessPrivacy: o.sellerMode === "HOME_BASED" || !o.isAddressPublic,
          image: profileMeta.logoUrl || "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400",
          coverImage: profileMeta.coverUrl || "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200",
          about: profileMeta.tagline || o.merchant?.description || "",
          phone: profileMeta.phone || o.merchant?.contactPhone || "",
          specialtyBadge: o.merchant?.verificationStatus === "VERIFIED" ? "Verified Local Store" : "",
        };
      })
      .filter((s) => {
        if (mode === "DELIVERY" && !s.merchantDelivery) return false;
        if (mode === "PICKUP" && !s.storePickup) return false;
        if (q) {
          const hay = `${s.name} ${s.category} ${s.locality} ${s.city} ${s.pincode}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        if (cat && cat !== "all") {
          const catHay = `${s.category} ${s.categoryType}`.toLowerCase();
          if (!catHay.includes(cat)) return false;
        }
        if (cityFilter) {
          const matchCity = s.city.toLowerCase().includes(cityFilter) || s.locality.toLowerCase().includes(cityFilter);
          if (!matchCity) return false;
        }
        if (locFilter) {
          const matchLoc =
            s.locality.toLowerCase().includes(locFilter) ||
            s.city.toLowerCase().includes(locFilter);
          if (!matchLoc && (!hasCoords || (s.distanceKm !== null && s.distanceKm > maxRadius))) return false;
        }
        if (pinFilter && s.pincode && s.pincode !== pinFilter) {
          if (!hasCoords || (s.distanceKm !== null && s.distanceKm > maxRadius)) return false;
        }
        return true;
      });

    if (hasCoords) {
      mapped.sort((a, b) => (a.distanceKm ?? 999) - (b.distanceKm ?? 999));
    }

    const maxTake = Math.min(50, Math.max(1, Number(limit) || 25));
    return mapped.slice(0, maxTake);
  }

  @Get("outlets/public/:id")
  @ApiOperation({ summary: "Customer-facing: Get single public outlet storefront profile" })
  async getPublicOutletDetail(@Param("id") id: string) {
    const o = await this.prisma.outlet.findUnique({
      where: { id },
      include: { merchant: true, hours: true, serviceAreas: true },
    });
    if (!o) throw new NotFoundException(`Outlet '${id}' not found`);
    const geo: any = (o.serviceAreas?.[0]?.geoJson as any) || {};
    const profileMeta: any = geo.profile || {};
    const deliveryMeta: any = geo.deliverySettings || {};

    return {
      id: o.id,
      outletId: o.id,
      merchantId: o.merchantId,
      name: profileMeta.shopName || o.merchant?.organizationName || o.name,
      category: profileMeta.businessCategory || o.merchant?.category || "Grocery & Daily Needs",
      tags: [profileMeta.businessCategory || o.merchant?.category || "Grocery", o.locality, o.city].filter(Boolean),
      rating: 4.8,
      reviewsCount: 0,
      deliveryTime: `${o.prepTimeMinutes || 25} mins`,
      isOpen: o.isActive,
      hours: "09:00 AM – 09:00 PM",
      fullAddress: o.isAddressPublic ? (profileMeta.addressStreet || o.addressLine) : `${o.locality}, ${o.city}`,
      locality: o.locality,
      city: profileMeta.city || o.city,
      pincode: profileMeta.pincode || o.pincode || "",
      latitude: o.latitude,
      longitude: o.longitude,
      phone: profileMeta.phone || o.merchant?.contactPhone || "",
      about: profileMeta.tagline || o.merchant?.description || "Trusted neighbourhood store on NukkadNow.",
      image: profileMeta.logoUrl || "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400",
      coverImage: profileMeta.coverUrl || "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200",
      homeBusinessPrivacy: o.sellerMode === "HOME_BASED" || !o.isAddressPublic,
      specialtyBadge: o.merchant?.verificationStatus === "VERIFIED" ? "Verified Local Store" : "",
      deliverySettings: deliveryMeta,
      minOrderValue: deliveryMeta.minOrderValue ?? o.minOrderValue ?? 199,
      baseCharge: deliveryMeta.baseCharge ?? 25,
      freeThreshold: deliveryMeta.freeThreshold ?? 499,
    };
  }

  @Get("outlets/:id")
  @ApiOperation({ summary: "Get public outlet storefront profile (with address masking for home businesses)" })
  async getPublicOutlet(@Param("id") id: string) {
    return this.merchantService.getPublicOutlet(id);
  }

  @Put("outlets/:id/hours")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update weekly operating hours and closures" })
  async updateHours(
    @Param("id") id: string,
    @Body() dto: UpdateOperatingHoursDto,
    @Headers("x-tenant-id") headerTenantId: string,
    @Req() req: any
  ) {
    const callerTenantId = headerTenantId || req.user?.tenantId;
    const callerRoles = req.user?.roles;
    return this.merchantService.updateOperatingHours(id, dto, callerTenantId, callerRoles);
  }
}
