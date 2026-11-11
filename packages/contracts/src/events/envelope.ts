export interface EventEnvelope<T = unknown> {
  readonly eventId: string;
  readonly eventType: string;
  readonly occurredAt: string; // ISO 8601 UTC
  readonly aggregateId: string;
  readonly aggregateVersion: number;
  readonly tenantId: string; // Merchant organization id
  readonly correlationId: string; // W3C trace / request uuid
  readonly causationId?: string; // Prior event uuid
  readonly payload: T;
}

export function createEventEnvelope<T>(params: {
  eventId: string;
  eventType: string;
  aggregateId: string;
  aggregateVersion: number;
  tenantId: string;
  correlationId: string;
  causationId?: string;
  payload: T;
}): EventEnvelope<T> {
  return {
    ...params,
    occurredAt: new Date().toISOString(),
  };
}
