import { EventEnvelope } from "./envelope";

export interface UserCreatedPayload {
  userId: string;
  phoneNumber: string;
  fullName?: string;
  createdAt: string;
}

export type UserCreatedEvent = EventEnvelope<UserCreatedPayload>;

export interface MembershipChangedPayload {
  userId: string;
  tenantId: string;
  outletId?: string;
  role: string;
  action: "GRANTED" | "REVOKED";
}

export type MembershipChangedEvent = EventEnvelope<MembershipChangedPayload>;
