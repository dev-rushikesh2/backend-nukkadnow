import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  public isConnected = false;

  async onModuleInit() {
    try {
      await this.$connect();
      this.isConnected = true;
      this.logger.log("Successfully connected to PostgreSQL database via Prisma.");
    } catch (error) {
      this.isConnected = false;
      this.logger.warn(
        "PostgreSQL database is currently offline or unreachable. Operating in high-fidelity In-Memory persistence mode.",
        error
      );
    }
  }

  async onModuleDestroy() {
    if (this.isConnected) {
      await this.$disconnect();
    }
  }
}
