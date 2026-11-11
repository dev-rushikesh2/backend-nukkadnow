import { Merchant } from "../entities/merchant.entity";
import { Outlet } from "../entities/outlet.entity";

export abstract class MerchantRepositoryPort {
  abstract findById(id: string): Promise<Merchant | null>;
  abstract findByContactPhone(phone: string): Promise<Merchant | null>;
  abstract save(merchant: Merchant): Promise<void>;
}

export abstract class OutletRepositoryPort {
  abstract findById(id: string): Promise<Outlet | null>;
  abstract findByMerchantId(merchantId: string): Promise<Outlet[]>;
  abstract findByLocality(locality: string): Promise<Outlet[]>;
  abstract save(outlet: Outlet): Promise<void>;
}
