import { Injectable, ForbiddenException, NotFoundException } from "@nestjs/common";
import { MerchantRepositoryPort, OutletRepositoryPort } from "../../domain/repositories/merchant.repository.port";
import { Merchant } from "../../domain/entities/merchant.entity";
import { Outlet } from "../../domain/entities/outlet.entity";
import { Address } from "../../domain/value-objects/address.vo";
import { OperatingHours } from "../../domain/value-objects/operating-hours.vo";
import { CreateMerchantDto, CreateOutletDto, UpdateOperatingHoursDto } from "../dto/merchant.dto";
import { MerchantNotFoundError, OutletNotFoundError } from "../../domain/errors/merchant-errors";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

const ADMIN_ROLES = new Set([
  "ROOT_ADMIN",
  "SUPER_ADMIN",
  "PLATFORM_ADMIN",
  "CITY_OPERATIONS_MANAGER",
  "VERIFICATION_STAFF",
  "SUPPORT_STAFF",
  "FINANCE_AUDITOR",
]);

@Injectable()
export class MerchantService {
  constructor(
    private readonly merchantRepo: MerchantRepositoryPort,
    private readonly outletRepo: OutletRepositoryPort
  ) {}

  async registerMerchant(dto: CreateMerchantDto): Promise<Merchant> {
    const merchant = new Merchant({
      id: UniqueIdentifier.generateV7(),
      organizationName: dto.organizationName,
      legalBusinessName: dto.legalBusinessName,
      contactName: dto.contactName,
      contactPhone: dto.contactPhone,
      verificationStatus: "PENDING",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.merchantRepo.save(merchant);
    return merchant;
  }

  async getMerchant(id: string, callerTenantId?: string, callerRoles?: string[]): Promise<Merchant> {
    const isSystemAdmin = callerTenantId === "system-admin-tenant";
    const isAdmin = isSystemAdmin || callerRoles?.some(r => ADMIN_ROLES.has(r));
    if (!isAdmin && callerTenantId && callerTenantId !== id) {
      throw new ForbiddenException("Cross-tenant access forbidden: You cannot access another organization profile.");
    }
    const merchant = await this.merchantRepo.findById(id);
    if (!merchant) throw new MerchantNotFoundError(id);
    return merchant;
  }

  async getMyProfile(tenantId: string) {
    const merchant = await this.merchantRepo.findById(tenantId);
    if (!merchant) throw new MerchantNotFoundError(tenantId);
    const outlets = await this.outletRepo.findByMerchantId(tenantId);
    return {
      merchant,
      outlets: outlets.map(o => ({
        id: o.id,
        name: o.name,
        sellerMode: o.sellerMode,
        address: o.address,
        isActive: o.isActive,
        hours: o.hours.getSlots(),
      })),
    };
  }

  async listMerchants(callerTenantId?: string, callerRoles?: string[]): Promise<Merchant[]> {
    const isAdmin = callerRoles?.some(r => ADMIN_ROLES.has(r));
    if (this.merchantRepo.listAll) {
      const all = await this.merchantRepo.listAll();
      if (isAdmin) return all;
      if (callerTenantId) {
        return all.filter(m => m.id === callerTenantId);
      }
    }
    if (callerTenantId) {
      const m = await this.merchantRepo.findById(callerTenantId);
      return m ? [m] : [];
    }
    return [];
  }

  async createOutlet(dto: CreateOutletDto, callerTenantId?: string, callerRoles?: string[]): Promise<Outlet> {
    const isAdmin = callerRoles?.some(r => ADMIN_ROLES.has(r));
    if (!isAdmin && callerTenantId && callerTenantId !== dto.merchantId) {
      throw new ForbiddenException("Tenant Mismatch: Cannot create outlet under another organization.");
    }

    const merchant = await this.merchantRepo.findById(dto.merchantId);
    if (!merchant) throw new MerchantNotFoundError(dto.merchantId);

    // Default operating hours: Monday to Saturday 09:00 - 21:00, Sunday closed
    const defaultSlots = [0, 1, 2, 3, 4, 5, 6].map(day => ({
      dayOfWeek: day,
      openTime: "09:00",
      closeTime: "21:00",
      isClosed: day === 0,
    }));

    const outlet = new Outlet({
      id: UniqueIdentifier.generateV7(),
      merchantId: dto.merchantId,
      name: dto.name,
      sellerMode: dto.sellerMode,
      address: new Address({
        addressLine: dto.addressLine,
        locality: dto.locality,
        city: dto.city || "Nagpur",
        latitude: dto.latitude,
        longitude: dto.longitude,
        isAddressPublic: dto.isAddressPublic ?? true,
      }),
      hours: new OperatingHours(defaultSlots),
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.outletRepo.save(outlet);
    void this.syncOutletToDiscovery(outlet, merchant.organizationName);
    return outlet;
  }

  private async syncOutletToDiscovery(outlet: Outlet, organizationName?: string): Promise<void> {
    const discoveryUrl = process.env.DISCOVERY_SERVICE_URL || "http://localhost:4004";
    try {
      await fetch(`${discoveryUrl}/api/v1/discovery/sync`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          outletId: outlet.id,
          tenantId: outlet.merchantId,
          merchantName: organizationName || outlet.name,  // ← org name is source of truth
          sellerMode: outlet.sellerMode,
          locality: outlet.address.locality || "Nagpur",
          city: outlet.address.city || "Nagpur",
          latitude: outlet.address.latitude ?? 21.1458,
          longitude: outlet.address.longitude ?? 79.0882,
          categoryTags: ["Grocery & Daily Needs"],
          isCurrentlyOpen: outlet.isActive,
          queueEstimateMinutes: 5,
          isApproximateLocation: !outlet.address.isAddressPublic,
          addressDisplay: outlet.address.addressLine || outlet.address.locality || "Nagpur",
        }),
      }).catch(() => {});
    } catch {
      // Best-effort sync
    }
  }

  async getPublicOutlet(id: string) {
    const outlet = await this.outletRepo.findById(id);
    if (!outlet) throw new OutletNotFoundError(id);
    return outlet.getPublicProfile();
  }

  async updateOperatingHours(outletId: string, dto: UpdateOperatingHoursDto, callerTenantId?: string, callerRoles?: string[]) {
    const outlet = await this.outletRepo.findById(outletId);
    if (!outlet) throw new OutletNotFoundError(outletId);

    const isAdmin = callerRoles?.some(r => r === "PLATFORM_ADMIN" || r === "SUPER_ADMIN");
    if (!isAdmin && callerTenantId && callerTenantId !== outlet.merchantId) {
      throw new ForbiddenException("Permission Denied: You do not own this outlet.");
    }

    const hours = new OperatingHours(dto.slots);
    outlet.updateHours(hours);
    await this.outletRepo.save(outlet);

    return { success: true, outletId, updatedSlots: hours.getSlots() };
  }
}
