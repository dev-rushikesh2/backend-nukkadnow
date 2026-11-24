export interface ReviewProps {
  id: string;
  orderId: string;
  customerId: string;
  outletId: string;
  cityCode?: string;
  rating: number; // 1-5
  comment?: string;
  isModerated?: boolean;
  createdAt?: Date;
}

export class Review {
  constructor(private readonly props: ReviewProps) {
    if (props.rating < 1 || props.rating > 5) {
      throw new Error("Rating must be between 1 and 5");
    }
  }

  get id(): string { return this.props.id; }
  get orderId(): string { return this.props.orderId; }
  get customerId(): string { return this.props.customerId; }
  get outletId(): string { return this.props.outletId; }
  get cityCode(): string { return this.props.cityCode || "IN-MH-NGP"; }
  get rating(): number { return this.props.rating; }
  get comment(): string | undefined { return this.props.comment; }
  get isModerated(): boolean { return this.props.isModerated ?? false; }
  get createdAt(): Date { return this.props.createdAt || new Date(); }
}
