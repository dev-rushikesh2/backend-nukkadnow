import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from "@nestjs/common";
import { PrismaClient } from "../../../../../../prisma/client";
import { MASTER_CATALOG_SEED } from "../../seed/master-catalog.data";

function buildDatasourceUrl(raw: string | undefined): string {
  if (!raw) return "";
  if (raw.includes("connection_limit=")) return raw;
  const sep = raw.includes("?") ? "&" : "?";
  return `${raw}${sep}connection_limit=5&pool_timeout=10&connect_timeout=5`;
}

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  [key: string]: any;

  constructor() {
    super({
      datasources: { db: { url: buildDatasourceUrl(process.env["CATALOG_DATABASE_URL"]) } },
      log: process.env.NODE_ENV === "production"
        ? [{ emit: "event", level: "error" }]
        : [{ emit: "stdout", level: "warn" }],
    });
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log("PostgreSQL connected via Prisma (pool_limit=5).");
    await this.seedMasterCatalogIfEmpty();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  /** Idempotently seeds starter-pack Master Catalog templates on first boot. */
  async seedMasterCatalogIfEmpty(): Promise<void> {
    try {
      const existingCount = await this.masterProductTemplate.count();
      if (existingCount > 0) return;

      for (const item of MASTER_CATALOG_SEED) {
        await this.masterProductTemplate.create({
          data: {
            code: item.code,
            name: item.name,
            description: item.description,
            storeTypes: item.storeTypes,
            category: item.category,
            subCategory: item.subCategory,
            searchAliases: item.searchAliases,
            gstPercent: item.gstPercent,
            emoji: item.emoji,
            imageUrl: item.imageUrl ?? null,
            sortOrder: item.sortOrder,
            isActive: true,
            variants: {
              create: item.variants.map((v) => ({
                name: v.name,
                skuPrefix: v.skuPrefix ?? null,
                barcode: v.barcode ?? null,
                suggestedPricePaise: v.suggestedPricePaise,
                mrpPaise: v.mrpPaise ?? null,
                defaultStock: v.defaultStock,
                unitLabel: v.unitLabel ?? null,
              })),
            },
          },
        });
      }
      this.logger.log(`Seeded ${MASTER_CATALOG_SEED.length} Master Catalog starter templates.`);
    } catch (err: any) {
      this.logger.warn(`Master catalog auto-seed skipped: ${err?.message || err}`);
    }
  }
}
