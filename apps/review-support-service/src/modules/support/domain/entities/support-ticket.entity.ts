export interface TicketMessageProps {
  id: string;
  ticketId: string;
  senderId: string;
  senderRole: "CUSTOMER" | "AGENT";
  message: string;
  createdAt?: Date;
}

export class TicketMessage {
  constructor(private readonly props: TicketMessageProps) {}

  get id(): string { return this.props.id; }
  get ticketId(): string { return this.props.ticketId; }
  get senderId(): string { return this.props.senderId; }
  get senderRole(): string { return this.props.senderRole; }
  get message(): string { return this.props.message; }
  get createdAt(): Date { return this.props.createdAt || new Date(); }
}

export interface SupportTicketProps {
  id: string;
  ticketNumber: string;
  customerId: string;
  tenantId?: string;
  orderId?: string;
  cityCode?: string;
  subject: string;
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  priority: "LOW" | "NORMAL" | "HIGH" | "URGENT";
  createdAt?: Date;
  messages?: TicketMessage[];
}

export class SupportTicket {
  constructor(private readonly props: SupportTicketProps) {}

  get id(): string { return this.props.id; }
  get ticketNumber(): string { return this.props.ticketNumber; }
  get customerId(): string { return this.props.customerId; }
  get tenantId(): string | undefined { return this.props.tenantId; }
  get orderId(): string | undefined { return this.props.orderId; }
  get cityCode(): string { return this.props.cityCode || "IN-MH-NGP"; }
  get subject(): string { return this.props.subject; }
  get status(): string { return this.props.status; }
  get priority(): string { return this.props.priority; }
  get createdAt(): Date { return this.props.createdAt || new Date(); }
  get messages(): TicketMessage[] { return this.props.messages ?? []; }
}
