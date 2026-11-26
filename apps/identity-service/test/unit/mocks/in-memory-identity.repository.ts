import { Injectable } from "@nestjs/common";
import { UserRepositoryPort } from "../../../src/modules/identity/domain/repositories/user.repository.port";
import { SessionRepositoryPort } from "../../../src/modules/identity/domain/repositories/session.repository.port";
import { User } from "../../../src/modules/identity/domain/entities/user.entity";
import { Session } from "../../../src/modules/identity/domain/entities/session.entity";
import { PhoneNumber } from "../../../src/modules/identity/domain/value-objects/phone-number.vo";

@Injectable()
export class InMemoryUserRepository implements UserRepositoryPort {
  private users = new Map<string, User>();

  constructor() {
    this.seedUsers();
  }

  private seedUsers() {
    // 1. Sabji Wala: Vinod Patil
    const sabjiUser = new User({
      id: "user-sabji-001",
      phoneNumber: PhoneNumber.create("+91 98230 11223"),
      fullName: "Vinod Patil",
      email: "vinod.patil@patilsabji.com",
      status: "ACTIVE",
      roles: ["MERCHANT_OWNER"],
      tenantId: "merchant-sabji-001",
      outletId: "outlet-sabji-001",
      merchantName: "Patil Fresh Sabji Mandi",
      createdAt: new Date("2026-11-14T06:00:00Z"),
      updatedAt: new Date("2026-11-14T06:00:00Z"),
    });

    // 2. Kirana: Rajesh Sharma
    const kiranaUser = new User({
      id: "user-kirana-002",
      phoneNumber: PhoneNumber.create("+91 98765 43210"),
      fullName: "Rajesh Sharma",
      email: "rajesh@sharmakirana.com",
      status: "ACTIVE",
      roles: ["MERCHANT_OWNER"],
      tenantId: "merchant-kirana-002",
      outletId: "outlet-kirana-002",
      merchantName: "Sharma Kirana & General Store",
      createdAt: new Date("2026-11-15T09:00:00Z"),
      updatedAt: new Date("2026-11-15T09:00:00Z"),
    });

    // 3. Garguti Chivda: Sunita Kulkarni (Home Business)
    const gargutiUser = new User({
      id: "user-garguti-003",
      phoneNumber: PhoneNumber.create("+91 98221 44556"),
      fullName: "Sunita Kulkarni",
      email: "sunita.kulkarni@gargutichivda.in",
      status: "ACTIVE",
      roles: ["MERCHANT_OWNER"],
      tenantId: "merchant-garguti-003",
      outletId: "outlet-garguti-003",
      merchantName: "Garguti Homemade Chivda & Snacks",
      createdAt: new Date("2026-11-16T10:00:00Z"),
      updatedAt: new Date("2026-11-16T10:00:00Z"),
    });

    // 4. Sweets & Dairy: Anand Joshi
    const sweetsUser = new User({
      id: "user-sweets-004",
      phoneNumber: PhoneNumber.create("+91 98900 77889"),
      fullName: "Anand Joshi",
      email: "anand.joshi@mahalaxmisweets.com",
      status: "ACTIVE",
      roles: ["MERCHANT_OWNER"],
      tenantId: "merchant-sweets-004",
      outletId: "outlet-sweets-004",
      merchantName: "Mahalaxmi Sweets, Dairy & Bakery",
      createdAt: new Date("2026-11-17T07:30:00Z"),
      updatedAt: new Date("2026-11-17T07:30:00Z"),
    });

    // 5. Platform Admin & Auditor
    const adminUser = new User({
      id: "user-admin-001",
      phoneNumber: PhoneNumber.create("+91 99999 00001"),
      fullName: "System Admin & Auditor",
      email: "admin@nukkadnow.com",
      status: "ACTIVE",
      roles: ["PLATFORM_ADMIN", "SUPER_ADMIN"],
      tenantId: "system-admin-tenant",
      merchantName: "NukkadNow Operations Platform",
      createdAt: new Date("2026-11-01T00:00:00Z"),
      updatedAt: new Date("2026-11-01T00:00:00Z"),
    });

    [sabjiUser, kiranaUser, gargutiUser, sweetsUser, adminUser].forEach(u => {
      this.users.set(u.id, u);
      this.users.set(u.phoneNumber, u);
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async findByPhoneNumber(phone: string): Promise<User | null> {
    const cleaned = phone.replace(/\s+/g, "");
    for (const u of this.users.values()) {
      if (u.phoneNumber.replace(/\s+/g, "") === cleaned) return u;
    }
    return null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const cleaned = email.toLowerCase().trim();
    for (const u of this.users.values()) {
      if (u.email && u.email.toLowerCase().trim() === cleaned) return u;
    }
    return null;
  }

  async listAll(): Promise<User[]> {
    return Array.from(new Set(this.users.values()));
  }

  async save(user: User): Promise<void> {
    this.users.set(user.id, user);
    this.users.set(user.phoneNumber, user);
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
