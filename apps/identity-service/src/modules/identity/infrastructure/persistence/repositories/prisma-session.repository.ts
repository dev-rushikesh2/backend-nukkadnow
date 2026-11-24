import { Injectable } from "@nestjs/common";
import { SessionRepositoryPort } from "../../../domain/repositories/session.repository.port";
import { Session } from "../../../domain/entities/session.entity";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaSessionRepository implements SessionRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<Session | null> {
    const r = await this.prisma.session.findUnique({ where: { id } });
    return r ? this.toDomain(r) : null;
  }

  async findByTokenHash(tokenHash: string): Promise<Session | null> {
    const r = await this.prisma.session.findFirst({ where: { tokenHash } });
    return r ? this.toDomain(r) : null;
  }

  async save(session: Session): Promise<void> {
    await this.prisma.session.upsert({
      where: { id: session.id },
      create: {
        id: session.id,
        userId: session.userId,
        tokenHash: session.tokenHash,
        userAgent: (session as any).userAgent ?? null,
        ipAddress: (session as any).ipAddress ?? null,
        expiresAt: session.expiresAt,
      },
      update: {
        tokenHash: session.tokenHash,
        expiresAt: session.expiresAt,
      },
    });
  }

  async revokeAllForUser(userId: string): Promise<void> {
    await this.prisma.session.deleteMany({ where: { userId } });
  }

  private toDomain(r: any): Session {
    return new Session({
      id: r.id,
      userId: r.userId,
      tokenHash: r.tokenHash,
      userAgent: r.userAgent ?? undefined,
      ipAddress: r.ipAddress ?? undefined,
      expiresAt: r.expiresAt,
      isRevoked: false,
      createdAt: r.createdAt,
    });
  }
}
