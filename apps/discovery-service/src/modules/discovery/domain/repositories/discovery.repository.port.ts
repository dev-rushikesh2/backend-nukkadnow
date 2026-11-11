import { OutletSearchDocument } from "../entities/search-document.entity";

export abstract class DiscoveryRepositoryPort {
  abstract save(doc: OutletSearchDocument): Promise<void>;
  abstract findById(outletId: string): Promise<OutletSearchDocument | null>;
  abstract findAll(): Promise<OutletSearchDocument[]>;
}
