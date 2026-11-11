import { Injectable } from "@nestjs/common";
import { UserRepositoryPort } from "../../../domain/repositories/user.repository.port";
import { SessionRepositoryPort } from "../../../domain/repositories/session.repository.port";
import { User } from "../../../domain/entities/user.entity";
import { Session } from "../../../domain/entities/session.entity";

@Injectable()
export class InMemoryUserRepository implements UserRepositoryPort {
  private users = new Map<string, User>();

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async findByPhoneNumber(phone: string): Promise<User | null> {
    for (const u of this.users.values()) {
      if (u.phoneNumber === phone) return u;
    }
    return null;
  }

  async save(user: User): Promise<void> {
    this.users.set(user.id, user);
  }
}

@Injectable()
export class InMemorySessionRepository implements SessionRepositoryPort {
  private sessions = new Map<string, Session>();

  async findById(id: string): Promise<Session | null> {
    return this.sessions.get(id) || null;
  }

  async findByTokenHash(tokenHash: string): Promise<Session | null> {
    for (const s of this.sessions.values()) {
      if (s.tokenHash === tokenHash) return s;
    }
    return null;
  }

  async save(session: Session): Promise<void> {
    this.sessions.set(session.id, session);
  }

  async revokeAllForUser(userId: string): Promise<void> {
    for (const s of this.sessions.values()) {
      if (s.userId === userId) s.revoke();
    }
  }
}
