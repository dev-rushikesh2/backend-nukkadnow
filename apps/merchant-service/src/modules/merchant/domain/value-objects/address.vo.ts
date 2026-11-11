export interface AddressProps {
  addressLine: string;
  locality: string;
  city: string;
  latitude: number;
  longitude: number;
  isAddressPublic: boolean;
}

export class Address {
  constructor(private readonly props: AddressProps) {
    if (!props.locality || props.locality.trim().length === 0) {
      throw new Error("Locality is required for an outlet address.");
    }
    if (props.latitude < -90 || props.latitude > 90) {
      throw new Error(`Invalid latitude: ${props.latitude}`);
    }
    if (props.longitude < -180 || props.longitude > 180) {
      throw new Error(`Invalid longitude: ${props.longitude}`);
    }
  }

  get addressLine(): string { return this.props.addressLine; }
  get locality(): string { return this.props.locality; }
  get city(): string { return this.props.city; }
  get latitude(): number { return this.props.latitude; }
  get longitude(): number { return this.props.longitude; }
  get isAddressPublic(): boolean { return this.props.isAddressPublic; }

  /**
   * ADR 0011: Mask private residential address for home sellers and private outlets.
   * Returns coarse coordinates and hides building/flat number.
   */
  getPublicRepresentation(isHomeSeller: boolean): {
    addressLine: string;
    locality: string;
    city: string;
    latitude: number;
    longitude: number;
    isApproximateLocation: boolean;
  } {
    if (isHomeSeller || !this.props.isAddressPublic) {
      // Coarse coordinates blurred by ~150 meters for privacy
      const blurredLat = Math.round(this.props.latitude * 1000) / 1000;
      const blurredLng = Math.round(this.props.longitude * 1000) / 1000;
      return {
        addressLine: "Private Kitchen (Exact address provided on order confirmation)",
        locality: this.props.locality,
        city: this.props.city,
        latitude: blurredLat,
        longitude: blurredLng,
        isApproximateLocation: true,
      };
    }

    return {
      addressLine: this.props.addressLine,
      locality: this.props.locality,
      city: this.props.city,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      isApproximateLocation: false,
    };
  }
}
