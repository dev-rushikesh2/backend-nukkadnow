import { Injectable, ForbiddenException } from "@nestjs/common";
import { MerchantRepositoryPort, OutletRepositoryPort } from "../../domain/repositories/merchant.repository.port";
import { Merchant } from "../../domain/entities/merchant.entity";
import { Outlet } from "../../domain/entities/outlet.entity";
import { Address } from "../../domain/value-objects/address.vo";
import { OperatingHours } from "../../domain/value-objects/operating-hours.vo";
import { CreateMerchantDto, CreateOutletDto, UpdateOperatingHoursDto } from "../dto/merchant.dto";
import { MerchantNotFoundError, OutletNotFoundError } from "../../domain/errors/merchant-errors";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

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

  async getMerchant(id: string, callerTenantId?: string): Promise<Merchant> {
    if (callerTenantId && callerTenantId !== id) {
      throw new ForbiddenException("Cross-tenant access: You cannot access another organization profile.");
    }
    const merchant = await this.merchantRepo.findById(id);
    if (!merchant) throw new MerchantNotFoundError(id);
    return merchant;
  }

  async createOutlet(dto: CreateOutletDto, callerTenantId?: string): Promise<Outlet> {
    if (callerTenantId && callerTenantId !== dto.merchantId) {
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
    return outlet;
  }

  async getPublicOutlet(id: string) {
    const outlet = await this.outletRepo.findById(id);
    if (!outlet) throw new OutletNotFoundError(id);
    return outlet.getPublicProfile();
  }

  async updateOperatingHours(outletId: string, dto: UpdateOperatingHoursDto, callerTenantId?: string) {
    const outlet = await this.outletRepo.findById(outletId);
    if (!outlet) throw new OutletNotFoundError(outletId);

    if (callerTenantId && callerTenantId !== outlet.merchantId) {
      throw new ForbiddenException("Permission Denied: You do not own this outlet.");
    }

    const hours = new OperatingHours(dto.slots);
    outlet.updateHours(hours);
    await this.outletRepo.save(outlet);

    return { success: true, outletId, updatedSlots: hours.getSlots() };
  }
}
