import { Injectable } from "@nestjs/common";
import { AnalyticsRepositoryPort, DailyMetric } from "../../../domain/entities/daily-metric.entity";

@Injectable()
export class InMemoryAnalyticsRepository implements AnalyticsRepositoryPort {
  private metrics = new Map<string, DailyMetric>();

  async saveMetric(metric: DailyMetric): Promise<void> {
    this.metrics.set(`${metric.outletId}:${metric.metricDate}`, metric);
  }

  async findMetric(outletId: string, date: string): Promise<DailyMetric | null> {
    return this.metrics.get(`${outletId}:${date}`) || null;
  }

  async getPlatformTotals(): Promise<{ totalGmvPaise: number; totalOrders: number }> {
    let totalGmvPaise = 0;
    let totalOrders = 0;
    for (const m of this.metrics.values()) {
      totalGmvPaise += m.totalSalesPaise;
      totalOrders += m.totalOrders;
    }
    return { totalGmvPaise, totalOrders };
  }
}
