import { Injectable } from "@nestjs/common";
import { AnalyticsRepositoryPort, DailyMetric } from "../../domain/entities/daily-metric.entity";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class AnalyticsService {
  constructor(private readonly analyticsRepo: AnalyticsRepositoryPort) {}

  async recordOrderFact(outletId: string, amountPaise: number, prepMinutes: number) {
    const today = new Date().toISOString().slice(0, 10);
    let metric = await this.analyticsRepo.findMetric(outletId, today);

    if (!metric) {
      metric = new DailyMetric({
        id: UniqueIdentifier.generateV7(),
        metricDate: today,
        outletId,
        totalOrders: 0,
        totalSalesPaise: 0,
        avgPrepMinutes: 0,
      });
    }

    metric.recordSale(amountPaise, prepMinutes);
    await this.analyticsRepo.saveMetric(metric);

    return {
      outletId,
      date: today,
      totalOrders: metric.totalOrders,
      totalSalesPaise: metric.totalSalesPaise,
      avgPrepMinutes: metric.avgPrepMinutes,
    };
  }

  async getMerchantCockpit(outletId: string) {
    const today = new Date().toISOString().slice(0, 10);
    const metric = await this.analyticsRepo.findMetric(outletId, today);

    const orders = metric?.totalOrders ?? 0;
    const salesPaise = metric?.totalSalesPaise ?? 0;

    return {
      outletId,
      todayDate: today,
      todayOrdersCount: orders,
      todayRevenuePaise: salesPaise,
      todayRevenueFormatted: (salesPaise / 100).toLocaleString("en-IN", { style: "currency", currency: "INR" }),
      avgPrepTimeMinutes: metric?.avgPrepMinutes ?? 0,
    };
  }

  async getPlatformGmv() {
    const totals = await this.analyticsRepo.getPlatformTotals();
    return {
      totalGmvPaise: totals.totalGmvPaise,
      totalGmvFormatted: (totals.totalGmvPaise / 100).toLocaleString("en-IN", { style: "currency", currency: "INR" }),
      totalOrdersFulfilled: totals.totalOrders,
      activeMarket: "Nagpur, India",
    };
  }
}
