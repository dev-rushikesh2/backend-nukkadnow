export interface OutboxRecord {
  id: string;
  aggregateType: string;
  aggregateId: string;
  eventType: string;
  payload: string; // JSON stringified
  occurredAt: Date;
  processedAt?: Date | null;
  status: "PENDING" | "PUBLISHED" | "FAILED";
  retryCount: number;
}

export interface OutboxRepositoryPort {
  save(record: OutboxRecord): Promise<void>;
  fetchPending(limit: number): Promise<OutboxRecord[]>;
  markAsPublished(id: string): Promise<void>;
  markAsFailed(id: string, reason: string): Promise<void>;
}
