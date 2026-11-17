export type StockMovementReason =
  | "RESTOCK"
  | "ORDER_RESERVATION"
  | "SALE_COMMIT"
  | "RESERVATION_RELEASE"
  | "DAMAGE_WASTE"
  | "RETURN_RESTOCK"
  | "AUDIT_CORRECTION";

export interface StockMovementProps {
  id: string;
  variantId: string;
  outletId: string;
  quantityChange: number;
  balanceAfter: number;
  reason: StockMovementReason;
  actorId: string;
  referenceId?: string;
  notes?: string;
  createdAt: Date;
}

export class StockMovement {
  constructor(private props: StockMovementProps) {}

  get id(): string { return this.props.id; }
  get variantId(): string { return this.props.variantId; }
  get outletId(): string { return this.props.outletId; }
  get quantityChange(): number { return this.props.quantityChange; }
  get balanceAfter(): number { return this.props.balanceAfter; }
  get reason(): StockMovementReason { return this.props.reason; }
  get actorId(): string { return this.props.actorId; }
  get referenceId(): string | undefined { return this.props.referenceId; }
  get notes(): string | undefined { return this.props.notes; }
  get createdAt(): Date { return this.props.createdAt; }
}
