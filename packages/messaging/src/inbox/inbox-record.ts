export interface InboxRecord {
  eventId: string;
  eventType: string;
  processedAt: Date;
}

export interface InboxRepositoryPort {
  hasBeenProcessed(eventId: string): Promise<boolean>;
  recordProcessed(eventId: string, eventType: string): Promise<void>;
}

export class IdempotencyConsumerGuard {
  constructor(private readonly inboxRepo: InboxRepositoryPort) {}

  async executeIdempotent(
    eventId: string,
    eventType: string,
    operation: () => Promise<void>
  ): Promise<boolean> {
    const alreadyProcessed = await this.inboxRepo.hasBeenProcessed(eventId);
    if (alreadyProcessed) {
      return false; // Idempotently skipped
    }

    await operation();
    await this.inboxRepo.recordProcessed(eventId, eventType);
    return true;
  }
}
