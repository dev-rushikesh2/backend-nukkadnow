import { Injectable } from "@nestjs/common";
import { DiscoveryRepositoryPort, PopularLocality } from "../../../src/modules/discovery/domain/repositories/discovery.repository.port";
import { OutletSearchDocument } from "../../../src/modules/discovery/domain/entities/search-document.entity";

@Injectable()
export class InMemoryDiscoveryRepository implements DiscoveryRepositoryPort {
  private docs = new Map<string, OutletSearchDocument>();
  private availability = new Map<string, { hasActiveStock: boolean; nextSlotTime?: Date | null }>();

  async save(doc: OutletSearchDocument): Promise<void> {
    this.docs.set(doc.outletId, doc);
  }

  async findById(outletId: string): Promise<OutletSearchDocument | null> {
    return this.docs.get(outletId) || null;
  }

  async findAll(): Promise<OutletSearchDocument[]> {
    return Array.from(this.docs.values());
  }

  async getPopularLocalities(): Promise<PopularLocality[]> {
    const counts = new Map<string, { city: string; count: number }>();
    for (const doc of this.docs.values()) {
      const existing = counts.get(doc.locality);
      if (existing) {
        existing.count++;
      } else {
        counts.set(doc.locality, { city: doc.city, count: 1 });
      }
    }
    return Array.from(counts.entries()).map(([locality, data]) => ({
      name: locality,
      city: data.city,
      pincode: "",
      activeMerchantsCount: data.count,
    }));
  }

  async saveAvailability(outletId: string, hasActiveStock: boolean, nextSlotTime?: Date | null): Promise<void> {
    this.availability.set(outletId, { hasActiveStock, nextSlotTime });
  }
}
