import { EventEnvelope } from "@nukkadnow/contracts";

export interface MessageBrokerClient {
  publish<T>(topic: string, routingKey: string, event: EventEnvelope<T>): Promise<boolean>;
  subscribe<T>(
    queueName: string,
    routingKey: string,
    handler: (event: EventEnvelope<T>) => Promise<void>
  ): Promise<void>;
  close(): Promise<void>;
}
