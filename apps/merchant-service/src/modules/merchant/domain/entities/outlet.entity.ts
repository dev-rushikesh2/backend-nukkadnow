import { Address } from "../value-objects/address.vo";
import { OperatingHours } from "../value-objects/operating-hours.vo";
import { SellerMode } from "../value-objects/seller-mode.vo";

export interface OutletProps {
  id: string;
  merchantId: string;
  name: string;
  sellerMode: SellerMode;
  address: Address;
  hours: OperatingHours;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class Outlet {
  constructor(private props: OutletProps) {}

  get id(): string { return this.props.id; }
  get merchantId(): string { return this.props.merchantId; }
  get name(): string { return this.props.name; }
  get sellerMode(): SellerMode { return this.props.sellerMode; }
  get address(): Address { return this.props.address; }
  get hours(): OperatingHours { return this.props.hours; }
  get isActive(): boolean { return this.props.isActive; }

  isHomeSeller(): boolean {
    return this.props.sellerMode === SellerMode.HOME_CHEF;
  }

  updateHours(newHours: OperatingHours): void {
    this.props.hours = newHours;
    this.props.updatedAt = new Date();
  }

  getPublicProfile() {
    return {
      id: this.id,
      merchantId: this.merchantId,
      name: this.name,
      sellerMode: this.sellerMode,
      location: this.address.getPublicRepresentation(this.isHomeSeller()),
      hours: this.hours.getSlots(),
      isOpenNow: this.hours.isOpenAt(new Date()),
      isActive: this.isActive,
    };
  }
}
