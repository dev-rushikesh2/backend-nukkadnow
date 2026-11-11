import { Injectable } from "@nestjs/common";
import { DiscoveryRepositoryPort } from "../../domain/repositories/discovery.repository.port";
import { OutletSearchDocument, GeoCalculator } from "../../domain/entities/search-document.entity";
import { NearbySearchQueryDto, SyncOutletDocumentDto } from "../dto/discovery.dto";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class DiscoveryService {
  constructor(private readonly discoveryRepo: DiscoveryRepositoryPort) {}

  async searchNearby(query: NearbySearchQueryDto) {
    const allDocs = await this.discoveryRepo.findAll();
    const radius = query.radiusKm || 5;

    const results: Array<{ doc: OutletSearchDocument; distanceKm: number }> = [];

    for (const doc of allDocs) {
      if (query.locality && doc.locality.toLowerCase() !== query.locality.toLowerCase()) {
        continue;
      }
      if (query.category && !doc.categoryTags.some(c => c.toLowerCase() === query.category!.toLowerCase())) {
        continue;
      }

      const distanceKm = GeoCalculator.getDistanceKm(
        query.latitude,
        query.longitude,
        doc.latitude,
        doc.longitude
      );

      if (distanceKm <= radius) {
        results.push({ doc, distanceKm });
      }
    }

    // Sort ascending by distance (closest first)
    results.sort((a, b) => a.distanceKm - b.distanceKm);

    return {
      count: results.length,
      locality: query.locality || "All Nagpur Localities",
      outlets: results.map(r => r.doc.toDto(r.distanceKm)),
    };
  }

  async syncOutletDocument(dto: SyncOutletDocumentDto): Promise<void> {
    const doc = new OutletSearchDocument({
      id: UniqueIdentifier.generateV7(),
      outletId: dto.outletId,
      merchantName: dto.merchantName,
      sellerMode: dto.sellerMode,
      locality: dto.locality,
      city: dto.city || "Nagpur",
      latitude: dto.latitude,
      longitude: dto.longitude,
      rating: 4.8,
      categoryTags: dto.categoryTags,
      isCurrentlyOpen: dto.isCurrentlyOpen,
      queueEstimateMinutes: dto.queueEstimateMinutes,
      isApproximateLocation: dto.isApproximateLocation,
      addressDisplay: dto.addressDisplay,
    });

    await this.discoveryRepo.save(doc);
  }

  listPopularLocalities() {
    return [
      { name: "Sitabuldi", city: "Nagpur", pincode: "440012", activeMerchantsCount: 15 },
      { name: "Dharampeth", city: "Nagpur", pincode: "440010", activeMerchantsCount: 12 },
      { name: "Sadar", city: "Nagpur", pincode: "440001", activeMerchantsCount: 8 },
      { name: "Dhantoli", city: "Nagpur", pincode: "440012", activeMerchantsCount: 9 },
      { name: "Ramdaspeth", city: "Nagpur", pincode: "440010", activeMerchantsCount: 6 },
      { name: "Wardhaman Nagar", city: "Nagpur", pincode: "440008", activeMerchantsCount: 7 },
    ];
  }
}
