import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from "@nestjs/common";
import { PrismaClient } from "../../../../../../prisma/client";

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
      datasources: { db: { url: buildDatasourceUrl(process.env["MERCHANT_DATABASE_URL"]) } },
      log: process.env.NODE_ENV === "production"
        ? [{ emit: "event", level: "error" }]
        : [{ emit: "stdout", level: "warn" }],
    });
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log("PostgreSQL connected via Prisma (pool_limit=5).");
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
