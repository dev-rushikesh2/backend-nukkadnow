import { Injectable } from "@nestjs/common";
import { UserRepositoryPort } from "../../../domain/repositories/user.repository.port";
import { User } from "../../../domain/entities/user.entity";
import { PhoneNumber } from "../../../domain/value-objects/phone-number.vo";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaUserRepository implements UserRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<User | null> {
    const record = await this.prisma.user.findUnique({
      where: { id },
      include: { memberships: true },
    });
    return record ? this.toDomain(record) : null;
  }

  async findByPhoneNumber(phone: string): Promise<User | null> {
    const record = await this.prisma.user.findUnique({
      where: { phoneNumber: phone },
      include: { memberships: true },
    });
    return record ? this.toDomain(record) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const record = await this.prisma.user.findUnique({
      where: { email },
      include: { memberships: true },
    });
    return record ? this.toDomain(record) : null;
  }

  async save(user: User): Promise<void> {
    await this.prisma.user.upsert({
      where: { id: user.id },
      create: {
        id: user.id,
        phoneNumber: user.phoneNumber,
        email: user.email ?? null,
        fullName: user.fullName ?? null,
        status: user.status,
      },
      update: {
        phoneNumber: user.phoneNumber,
        email: user.email ?? null,
        fullName: user.fullName ?? null,
        status: user.status,
        updatedAt: new Date(),
      },
    });

    if (user.tenantId && user.roles.length > 0) {
      for (const role of user.roles) {
        await this.prisma.membership.upsert({
          where: {
            userId_tenantId_role: {
              userId: user.id,
              tenantId: user.tenantId,
              role,
            },
          },
          create: {
            userId: user.id,
            tenantId: user.tenantId,
            outletId: user.outletId ?? null,
            role,
          },
          update: {
            outletId: user.outletId ?? null,
            updatedAt: new Date(),
          },
        });
      }
    }
  }

  async listAll(): Promise<User[]> {
    const records = await this.prisma.user.findMany({
      include: { memberships: true },
    });
    return records.map((r: any) => this.toDomain(r));
  }

  private toDomain(record: any): User {
    const primaryMembership = record.memberships?.[0];
    return new User({
      id: record.id,
      phoneNumber: PhoneNumber.create(record.phoneNumber),
      email: record.email ?? undefined,
      fullName: record.fullName ?? undefined,
      status: record.status as "ACTIVE" | "SUSPENDED",
      roles: record.memberships?.map((m: any) => m.role) ?? [],
      tenantId: primaryMembership?.tenantId ?? undefined,
      outletId: primaryMembership?.outletId ?? undefined,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }
}
