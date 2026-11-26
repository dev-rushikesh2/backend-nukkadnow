import { OutletSearchDocument } from "../entities/search-document.entity";

export interface PopularLocality {
  name: string;
  city: string;
  pincode: string;
  activeMerchantsCount: number;
}

export abstract class DiscoveryRepositoryPort {
  abstract save(doc: OutletSearchDocument): Promise<void>;
  abstract findById(outletId: string): Promise<OutletSearchDocument | null>;
  abstract findAll(): Promise<OutletSearchDocument[]>;
  abstract getPopularLocalities(): Promise<PopularLocality[]>;
  abstract saveAvailability(outletId: string, hasActiveStock: boolean, nextSlotTime?: Date | null, tenantId?: string): Promise<void>;
}
