import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { StockRepositoryPort } from "../../domain/repositories/catalog.repository.port";

@Injectable()
export class StockReservationExpiryScheduler {
  private readonly logger = new Logger(StockReservationExpiryScheduler.name);

  constructor(private readonly stockRepo: StockRepositoryPort) {}

  @Cron("*/60 * * * * *")
  async handleExpiredReservations(): Promise<void> {
    try {
      const count = await this.stockRepo.expireExpiredReservations();
      if (count > 0) {
        this.logger.log(`Released ${count} expired stock reservations back to inventory.`);
      }
    } catch (err: any) {
      this.logger.error("Failed to release expired reservations:", err.message);
    }
  }
}
