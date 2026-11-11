export interface CapacitySlotProps {
  id: string;
  outletId: string;
  slotDate: string; // "YYYY-MM-DD"
  startTime: string; // "10:00"
  endTime: string;   // "10:30"
  maxCapacity: number;
  reservedCount: number;
  isWalkIn: boolean;
}

export class CapacitySlot {
  constructor(private props: CapacitySlotProps) {}

  get id(): string { return this.props.id; }
  get outletId(): string { return this.props.outletId; }
  get slotDate(): string { return this.props.slotDate; }
  get startTime(): string { return this.props.startTime; }
  get endTime(): string { return this.props.endTime; }
  get maxCapacity(): number { return this.props.maxCapacity; }
  get reservedCount(): number { return this.props.reservedCount; }

  get availableCapacity(): number {
    return Math.max(0, this.props.maxCapacity - this.props.reservedCount);
  }

  hasCapacity(): boolean {
    return this.availableCapacity > 0;
  }

  reserve(): void {
    if (!this.hasCapacity()) {
      throw new Error(`Slot '${this.props.startTime}-${this.props.endTime}' is fully booked.`);
    }
    this.props.reservedCount++;
  }

  release(): void {
    this.props.reservedCount = Math.max(0, this.props.reservedCount - 1);
  }
}

export interface TokenProps {
  id: string;
  orderId: string;
  outletId: string;
  tokenNumber: string; // e.g. "A-12"
  status: "ISSUED" | "READY" | "COLLECTED";
  createdAt: Date;
}

export class PickupToken {
  constructor(private props: TokenProps) {}

  get id(): string { return this.props.id; }
  get orderId(): string { return this.props.orderId; }
  get outletId(): string { return this.props.outletId; }
  get tokenNumber(): string { return this.props.tokenNumber; }
  get status(): string { return this.props.status; }

  markReady(): void {
    this.props.status = "READY";
  }

  markCollected(): void {
    this.props.status = "COLLECTED";
  }
}
