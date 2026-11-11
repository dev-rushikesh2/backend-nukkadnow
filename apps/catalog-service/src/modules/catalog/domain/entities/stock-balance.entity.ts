export interface StockBalanceProps {
  id: string;
  variantId: string;
  outletId: string;
  onHandQuantity: number;
  reservedQuantity: number;
  version: number;
  updatedAt: Date;
}

export class StockBalance {
  constructor(private props: StockBalanceProps) {}

  get id(): string { return this.props.id; }
  get variantId(): string { return this.props.variantId; }
  get outletId(): string { return this.props.outletId; }
  get onHandQuantity(): number { return this.props.onHandQuantity; }
  get reservedQuantity(): number { return this.props.reservedQuantity; }
  get version(): number { return this.props.version; }

  get availableQuantity(): number {
    return Math.max(0, this.props.onHandQuantity - this.props.reservedQuantity);
  }

  hasAvailable(quantity: number): boolean {
    return this.availableQuantity >= quantity;
  }

  /**
   * Atomic Reservation with Optimistic Locking Check
   */
  reserve(quantity: number): void {
    if (!this.hasAvailable(quantity)) {
      throw new Error(`Insufficient stock. Available: ${this.availableQuantity}, Requested: ${quantity}`);
    }
    this.props.reservedQuantity += quantity;
    this.props.version += 1;
    this.props.updatedAt = new Date();
  }

  /**
   * Release previously reserved stock (e.g. on checkout failure or TTL expiry)
   */
  releaseReservation(quantity: number): void {
    this.props.reservedQuantity = Math.max(0, this.props.reservedQuantity - quantity);
    this.props.version += 1;
    this.props.updatedAt = new Date();
  }

  /**
   * Commit reservation to permanent sale upon payment confirmation
   */
  commitReservation(quantity: number): void {
    this.props.reservedQuantity = Math.max(0, this.props.reservedQuantity - quantity);
    this.props.onHandQuantity = Math.max(0, this.props.onHandQuantity - quantity);
    this.props.version += 1;
    this.props.updatedAt = new Date();
  }

  adjustOnHand(change: number): void {
    if (this.props.onHandQuantity + change < this.props.reservedQuantity) {
      throw new Error("Cannot reduce on-hand stock below currently reserved quantity.");
    }
    this.props.onHandQuantity += change;
    this.props.version += 1;
    this.props.updatedAt = new Date();
  }
}
