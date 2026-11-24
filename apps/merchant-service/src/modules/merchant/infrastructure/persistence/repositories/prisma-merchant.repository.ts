import { Injectable } from "@nestjs/common";
import { MerchantRepositoryPort } from "../../../domain/repositories/merchant.repository.port";
import { Merchant } from "../../../domain/entities/merchant.entity";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaMerchantRepository implements MerchantRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<Merchant | null> {
    const record = await this.prisma.merchant.findUnique({ where: { id } });
    return record ? this.toDomain(record) : null;
  }

  async findByContactPhone(phone: string): Promise<Merchant | null> {
    const record = await this.prisma.merchant.findUnique({ where: { contactPhone: phone } });
    return record ? this.toDomain(record) : null;
  }

  async listAll(): Promise<Merchant[]> {
    const records = await this.prisma.merchant.findMany();
    return records.map((r: any) => this.toDomain(r));
  }

  async save(merchant: Merchant): Promise<void> {
    await this.prisma.merchant.upsert({
      where: { id: merchant.id },
      create: {
        id: merchant.id,
        organizationName: merchant.organizationName,
        legalBusinessName: merchant.legalBusinessName ?? null,
        contactName: merchant.contactName,
        contactPhone: merchant.contactPhone,
        email: merchant.email ?? null,
        businessType: merchant.businessType ?? "retail",
        category: merchant.category ?? "Grocery & Daily Needs",
        description: merchant.description ?? null,
        verificationStatus: merchant.verificationStatus,
      },
      update: {
        organizationName: merchant.organizationName,
        legalBusinessName: merchant.legalBusinessName ?? null,
        contactName: merchant.contactName,
        contactPhone: merchant.contactPhone,
        email: merchant.email ?? null,
        businessType: merchant.businessType ?? "retail",
        category: merchant.category ?? "Grocery & Daily Needs",
        description: merchant.description ?? null,
        verificationStatus: merchant.verificationStatus,
        updatedAt: new Date(),
      },
    });
  }

  private toDomain(record: any): Merchant {
    return new Merchant({
      id: record.id,
      organizationName: record.organizationName,
      legalBusinessName: record.legalBusinessName ?? undefined,
      contactName: record.contactName,
      contactPhone: record.contactPhone,
      email: record.email ?? undefined,
      businessType: record.businessType ?? undefined,
      category: record.category ?? undefined,
      description: record.description ?? undefined,
      verificationStatus: record.verificationStatus as "PENDING" | "VERIFIED" | "REJECTED",
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }
}
