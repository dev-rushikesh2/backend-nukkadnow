import { Injectable } from "@nestjs/common";
import { DiscoveryRepositoryPort } from "../../../domain/repositories/discovery.repository.port";
import { OutletSearchDocument } from "../../../domain/entities/search-document.entity";

@Injectable()
export class InMemoryDiscoveryRepository implements DiscoveryRepositoryPort {
  private docs = new Map<string, OutletSearchDocument>();

  async save(doc: OutletSearchDocument): Promise<void> {
    this.docs.set(doc.outletId, doc);
  }

  async findById(outletId: string): Promise<OutletSearchDocument | null> {
    return this.docs.get(outletId) || null;
  }

  async findAll(): Promise<OutletSearchDocument[]> {
    return Array.from(this.docs.values());
  }
}
