import { Injectable } from "@nestjs/common";
import { DiscoveryRepositoryPort, PopularLocality } from "../../../domain/repositories/discovery.repository.port";
import { OutletSearchDocument } from "../../../domain/entities/search-document.entity";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaDiscoveryRepository implements DiscoveryRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async save(doc: OutletSearchDocument): Promise<void> {
    const raw: any = (doc as any).props || doc;
    await this.prisma.outletSearchDocument.upsert({
      where: { outletId: doc.outletId },
      create: {
        id: doc.id,
        outletId: doc.outletId,
        tenantId: raw.tenantId ?? null,
        merchantName: doc.merchantName,
        locality: doc.locality,
        city: doc.city,
        cityCode: raw.cityCode || "IN-MH-NGP",
        latitude: doc.latitude,
        longitude: doc.longitude,
        rating: doc.rating,
        categoryTags: doc.categoryTags,
        isCurrentlyOpen: doc.isCurrentlyOpen,
        queueEstimateMinutes: doc.queueEstimateMinutes,
      },
      update: {
        ...(raw.tenantId ? { tenantId: raw.tenantId } : {}),
        ...(raw.cityCode ? { cityCode: raw.cityCode } : {}),
        merchantName: doc.merchantName,
        locality: doc.locality,
        city: doc.city,
        latitude: doc.latitude,
        longitude: doc.longitude,
        rating: doc.rating,
        categoryTags: doc.categoryTags,
        isCurrentlyOpen: doc.isCurrentlyOpen,
        queueEstimateMinutes: doc.queueEstimateMinutes,
        updatedAt: new Date(),
      },
    });
  }

  async findById(outletId: string): Promise<OutletSearchDocument | null> {
    const record = await this.prisma.outletSearchDocument.findUnique({
      where: { outletId },
    });
    return record ? this.toDomain(record) : null;
  }

  async findAll(): Promise<OutletSearchDocument[]> {
    const records = await this.prisma.outletSearchDocument.findMany();
    return records.map((r: any) => this.toDomain(r));
  }

  async getPopularLocalities(): Promise<PopularLocality[]> {
    const groups = await this.prisma.outletSearchDocument.groupBy({
      by: ["locality", "city"],
      _count: {
        outletId: true,
      },
      orderBy: {
        _count: {
          outletId: "desc",
        },
      },
    });

    if (groups.length === 0) {
      // Return empty array when no localities exist in DB
      return [];
    }

    return groups.map((g: any) => ({
      name: g.locality,
      city: g.city,
      pincode: "",
      activeMerchantsCount: g._count.outletId,
    }));
  }

  async saveAvailability(outletId: string, hasActiveStock: boolean, nextSlotTime?: Date | null, tenantId?: string): Promise<void> {
    await this.prisma.availabilityProjection.upsert({
      where: { outletId },
      create: {
        outletId,
        tenantId: tenantId ?? null,
        hasActiveStock,
        nextSlotTime: nextSlotTime ?? null,
      },
      update: {
        ...(tenantId ? { tenantId } : {}),
        hasActiveStock,
        nextSlotTime: nextSlotTime ?? null,
        updatedAt: new Date(),
      },
    });
  }

  private toDomain(record: any): OutletSearchDocument {
    return new OutletSearchDocument({
      id: record.id,
      outletId: record.outletId,
      merchantName: record.merchantName,
      sellerMode: "PERMANENT",
      locality: record.locality,
      city: record.city,
      latitude: record.latitude,
      longitude: record.longitude,
      rating: record.rating ?? 0.0,
      categoryTags: record.categoryTags ?? [],
      isCurrentlyOpen: record.isCurrentlyOpen ?? true,
      queueEstimateMinutes: record.queueEstimateMinutes ?? 5,
      isApproximateLocation: false,
      addressDisplay: `${record.locality}, ${record.city}`,
    });
  }
}
