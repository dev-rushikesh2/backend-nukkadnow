import { Injectable } from "@nestjs/common";
import { OutletRepositoryPort } from "../../../domain/repositories/merchant.repository.port";
import { Outlet } from "../../../domain/entities/outlet.entity";
import { Address } from "../../../domain/value-objects/address.vo";
import { OperatingHours } from "../../../domain/value-objects/operating-hours.vo";
import { SellerMode } from "../../../domain/value-objects/seller-mode.vo";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaOutletRepository implements OutletRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<Outlet | null> {
    const record = await this.prisma.outlet.findUnique({
      where: { id },
      include: { hours: true },
    });
    return record ? this.toDomain(record) : null;
  }

  async findByMerchantId(merchantId: string): Promise<Outlet[]> {
    const records = await this.prisma.outlet.findMany({
      where: { merchantId },
      include: { hours: true },
    });
    return records.map((r: any) => this.toDomain(r));
  }

  async findByLocality(locality: string): Promise<Outlet[]> {
    const records = await this.prisma.outlet.findMany({
      where: { locality },
      include: { hours: true },
    });
    return records.map((r: any) => this.toDomain(r));
  }

  async listAll(): Promise<Outlet[]> {
    const records = await this.prisma.outlet.findMany({
      include: { hours: true },
    });
    return records.map((r: any) => this.toDomain(r));
  }

  async save(outlet: Outlet): Promise<void> {
    await this.prisma.outlet.upsert({
      where: { id: outlet.id },
      create: {
        id: outlet.id,
        merchantId: outlet.merchantId,
        name: outlet.name,
        sellerMode: outlet.sellerMode,
        addressLine: outlet.address.addressLine,
        locality: outlet.address.locality,
        city: outlet.address.city,
        latitude: outlet.address.latitude,
        longitude: outlet.address.longitude,
        isAddressPublic: !outlet.isHomeSeller(),
        isActive: outlet.isActive,
      },
      update: {
        name: outlet.name,
        sellerMode: outlet.sellerMode,
        addressLine: outlet.address.addressLine,
        locality: outlet.address.locality,
        city: outlet.address.city,
        latitude: outlet.address.latitude,
        longitude: outlet.address.longitude,
        isAddressPublic: !outlet.isHomeSeller(),
        isActive: outlet.isActive,
        updatedAt: new Date(),
      },
    });

    const slots = outlet.hours.getSlots();
    for (const slot of slots) {
      await this.prisma.outletHours.upsert({
        where: {
          outletId_dayOfWeek: {
            outletId: outlet.id,
            dayOfWeek: slot.dayOfWeek,
          },
        },
        create: {
          outletId: outlet.id,
          dayOfWeek: slot.dayOfWeek,
          openTime: slot.openTime,
          closeTime: slot.closeTime,
          breakTime: (slot as any).breakTime ?? null,
          isClosed: slot.isClosed ?? false,
        },
        update: {
          openTime: slot.openTime,
          closeTime: slot.closeTime,
          breakTime: (slot as any).breakTime ?? null,
          isClosed: slot.isClosed ?? false,
        },
      });
    }
  }

  private toDomain(record: any): Outlet {
    const slots = (record.hours || []).map((h: any) => ({
      dayOfWeek: h.dayOfWeek,
      openTime: h.openTime,
      closeTime: h.closeTime,
      breakTime: h.breakTime ?? undefined,
      isClosed: h.isClosed,
    }));

    return new Outlet({
      id: record.id,
      merchantId: record.merchantId,
      name: record.name,
      sellerMode: (record.sellerMode as SellerMode) || SellerMode.PERMANENT,
      address: new Address({
        addressLine: record.addressLine,
        locality: record.locality,
        city: record.city,
        latitude: record.latitude,
        longitude: record.longitude,
        isAddressPublic: record.isAddressPublic,
      }),
      hours: new OperatingHours(slots),
      isActive: record.isActive,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }
}
