import { Session } from "../entities/session.entity";

export abstract class SessionRepositoryPort {
  abstract findById(id: string): Promise<Session | null>;
  abstract findByTokenHash(tokenHash: string): Promise<Session | null>;
  abstract save(session: Session): Promise<void>;
  abstract revokeAllForUser(userId: string): Promise<void>;
}
