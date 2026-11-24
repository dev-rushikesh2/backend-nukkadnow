import { Injectable } from "@nestjs/common";
import { PriceCapRepositoryPort } from "../../../domain/repositories/catalog.repository.port";
import { AdminPriceCapRule, PriceCapScope } from "../../../domain/entities/price-cap.entity";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaPriceCapRepository implements PriceCapRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findAllActive(): Promise<AdminPriceCapRule[]> {
    const records = await this.prisma.adminPriceCapRule.findMany({
      where: { isActive: true },
    });
    return records.map((r: any) => this.toDomain(r));
  }

  async findAll(): Promise<AdminPriceCapRule[]> {
    const records = await this.prisma.adminPriceCapRule.findMany();
    return records.map((r: any) => this.toDomain(r));
  }

  async findById(id: string): Promise<AdminPriceCapRule | null> {
    const record = await this.prisma.adminPriceCapRule.findUnique({
      where: { id },
    });
    return record ? this.toDomain(record) : null;
  }

  async save(rule: AdminPriceCapRule): Promise<void> {
    await this.prisma.adminPriceCapRule.upsert({
      where: { id: rule.id },
      create: {
        id: rule.id,
        scope: rule.scope,
        targetKey: rule.targetKey,
        maxPricePaise: rule.maxPricePaise,
        enforceMrpCap: rule.enforceMrpCap,
        reason: rule.reason,
        isActive: rule.isActive,
        createdBy: rule.createdBy,
      },
      update: {
        scope: rule.scope,
        targetKey: rule.targetKey,
        maxPricePaise: rule.maxPricePaise,
        enforceMrpCap: rule.enforceMrpCap,
        reason: rule.reason,
        isActive: rule.isActive,
        updatedAt: new Date(),
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.adminPriceCapRule.delete({ where: { id } });
  }

  private toDomain(record: any): AdminPriceCapRule {
    return new AdminPriceCapRule({
      id: record.id,
      scope: record.scope as PriceCapScope,
      targetKey: record.targetKey,
      maxPricePaise: record.maxPricePaise,
      enforceMrpCap: record.enforceMrpCap,
      reason: record.reason,
      isActive: record.isActive,
      createdBy: record.createdBy,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }
}
