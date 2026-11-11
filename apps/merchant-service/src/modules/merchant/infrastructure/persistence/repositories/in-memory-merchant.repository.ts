import { Injectable } from "@nestjs/common";
import { MerchantRepositoryPort, OutletRepositoryPort } from "../../../domain/repositories/merchant.repository.port";
import { Merchant } from "../../../domain/entities/merchant.entity";
import { Outlet } from "../../../domain/entities/outlet.entity";

@Injectable()
export class InMemoryMerchantRepository implements MerchantRepositoryPort {
  private merchants = new Map<string, Merchant>();

  async findById(id: string): Promise<Merchant | null> {
    return this.merchants.get(id) || null;
  }

  async findByContactPhone(phone: string): Promise<Merchant | null> {
    for (const m of this.merchants.values()) {
      if (m.contactPhone === phone) return m;
    }
    return null;
  }

  async save(merchant: Merchant): Promise<void> {
    this.merchants.set(merchant.id, merchant);
  }
}

@Injectable()
export class InMemoryOutletRepository implements OutletRepositoryPort {
  private outlets = new Map<string, Outlet>();

  async findById(id: string): Promise<Outlet | null> {
    return this.outlets.get(id) || null;
  }

  async findByMerchantId(merchantId: string): Promise<Outlet[]> {
    return Array.from(this.outlets.values()).filter(o => o.merchantId === merchantId);
  }

  async findByLocality(locality: string): Promise<Outlet[]> {
    return Array.from(this.outlets.values()).filter(
      o => o.address.locality.toLowerCase() === locality.toLowerCase()
    );
  }

  async save(outlet: Outlet): Promise<void> {
    this.outlets.set(outlet.id, outlet);
  }
}
