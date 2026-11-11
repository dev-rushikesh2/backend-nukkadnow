export interface OutletSearchDocumentProps {
  id: string;
  outletId: string;
  merchantName: string;
  sellerMode: string;
  locality: string;
  city: string;
  latitude: number;
  longitude: number;
  rating: number;
  categoryTags: string[];
  isCurrentlyOpen: boolean;
  queueEstimateMinutes: number;
  isApproximateLocation: boolean;
  addressDisplay: string;
}

export class GeoCalculator {
  /**
   * Haversine formula to compute great-circle distance in kilometers between two coordinates
   */
  static getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const R = 6371; // Earth radius in KM
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 100) / 100;
  }
}

export class OutletSearchDocument {
  constructor(private props: OutletSearchDocumentProps) {}

  get id(): string { return this.props.id; }
  get outletId(): string { return this.props.outletId; }
  get merchantName(): string { return this.props.merchantName; }
  get sellerMode(): string { return this.props.sellerMode; }
  get locality(): string { return this.props.locality; }
  get city(): string { return this.props.city; }
  get latitude(): number { return this.props.latitude; }
  get longitude(): number { return this.props.longitude; }
  get rating(): number { return this.props.rating; }
  get categoryTags(): string[] { return [...this.props.categoryTags]; }
  get isCurrentlyOpen(): boolean { return this.props.isCurrentlyOpen; }
  get queueEstimateMinutes(): number { return this.props.queueEstimateMinutes; }
  get isApproximateLocation(): boolean { return this.props.isApproximateLocation; }
  get addressDisplay(): string { return this.props.addressDisplay; }

  toDto(distanceKm?: number) {
    return {
      outletId: this.outletId,
      merchantName: this.merchantName,
      sellerMode: this.sellerMode,
      locality: this.locality,
      city: this.city,
      addressDisplay: this.addressDisplay,
      isApproximateLocation: this.isApproximateLocation,
      latitude: this.latitude,
      longitude: this.longitude,
      distanceKm: distanceKm ?? null,
      rating: this.rating,
      categoryTags: this.categoryTags,
      isCurrentlyOpen: this.isCurrentlyOpen,
      queueEstimateMinutes: this.queueEstimateMinutes,
    };
  }
}
