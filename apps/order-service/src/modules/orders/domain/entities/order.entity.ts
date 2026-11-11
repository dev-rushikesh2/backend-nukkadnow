import { OrderPricing } from "../value-objects/order-pricing.vo";
import { InvalidOrderStateTransitionError } from "../errors/order-errors";

export type OrderStatus =
  | "PENDING_PAYMENT"
  | "CONFIRMED"
  | "ACCEPTED"
  | "PREPARING"
  | "READY_FOR_PICKUP"
  | "COMPLETED"
  | "CANCELLED";

export interface OrderItemProps {
  id: string;
  productId: string;
  variantId: string;
  title: string;
  quantity: number;
  unitPricePaise: number;
}

export interface OrderProps {
  id: string;
  orderNumber: string;
  customerId: string;
  tenantId: string;
  outletId: string;
  status: OrderStatus;
  pricing: OrderPricing;
  fulfillmentType: "STORE_PICKUP" | "MERCHANT_DELIVERY";
  pickupSlotId?: string;
  items: OrderItemProps[];
  idempotencyKey?: string;
  estimatedReadyAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class Order {
  constructor(private props: OrderProps) {}

  get id(): string { return this.props.id; }
  get orderNumber(): string { return this.props.orderNumber; }
  get customerId(): string { return this.props.customerId; }
  get tenantId(): string { return this.props.tenantId; }
  get outletId(): string { return this.props.outletId; }
  get status(): OrderStatus { return this.props.status; }
  get pricing(): OrderPricing { return this.props.pricing; }
  get items(): OrderItemProps[] { return [...this.props.items]; }
  get idempotencyKey(): string | undefined { return this.props.idempotencyKey; }
  get estimatedReadyAt(): Date | undefined { return this.props.estimatedReadyAt; }

  // State Machine Transitions

  confirmPayment(): void {
    if (this.props.status !== "PENDING_PAYMENT") {
      throw new InvalidOrderStateTransitionError(this.props.status, "CONFIRMED");
    }
    this.props.status = "CONFIRMED";
    this.props.updatedAt = new Date();
  }

  accept(estimatedMinutes: number): void {
    if (this.props.status !== "CONFIRMED") {
      throw new InvalidOrderStateTransitionError(this.props.status, "ACCEPTED");
    }
    this.props.status = "ACCEPTED";
    this.props.estimatedReadyAt = new Date(Date.now() + estimatedMinutes * 60 * 1000);
    this.props.updatedAt = new Date();
  }

  markReady(): void {
    if (this.props.status !== "ACCEPTED" && this.props.status !== "PREPARING") {
      throw new InvalidOrderStateTransitionError(this.props.status, "READY_FOR_PICKUP");
    }
    this.props.status = "READY_FOR_PICKUP";
    this.props.updatedAt = new Date();
  }

  complete(): void {
    if (this.props.status !== "READY_FOR_PICKUP") {
      throw new InvalidOrderStateTransitionError(this.props.status, "COMPLETED");
    }
    this.props.status = "COMPLETED";
    this.props.updatedAt = new Date();
  }

  cancel(): void {
    if (this.props.status === "COMPLETED") {
      throw new InvalidOrderStateTransitionError(this.props.status, "CANCELLED");
    }
    this.props.status = "CANCELLED";
    this.props.updatedAt = new Date();
  }
}
