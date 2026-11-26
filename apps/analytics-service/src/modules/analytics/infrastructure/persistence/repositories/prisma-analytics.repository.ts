import { Injectable } from "@nestjs/common";
import { AnalyticsRepositoryPort, DailyMetric } from "../../../domain/entities/daily-metric.entity";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaAnalyticsRepository implements AnalyticsRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async saveMetric(metric: DailyMetric): Promise<void> {
    await this.prisma.dailyMetric.upsert({
      where: {
        metricDate_outletId: {
          metricDate: metric.metricDate,
          outletId: metric.outletId,
        },
      },
      create: {
        id: metric.id,
        metricDate: metric.metricDate,
        tenantId: metric.tenantId ?? null,
        outletId: metric.outletId,
        cityCode: metric.cityCode,
        totalOrders: metric.totalOrders,
        totalSalesPaise: BigInt(metric.totalSalesPaise),
        avgPrepTimeMinutes: metric.avgPrepMinutes,
      },
      update: {
        ...(metric.tenantId ? { tenantId: metric.tenantId } : {}),
        totalOrders: metric.totalOrders,
        totalSalesPaise: BigInt(metric.totalSalesPaise),
        avgPrepTimeMinutes: metric.avgPrepMinutes,
      },
    });
  }

  async recordPlatformFact(factDate: string, cityCode: string, amountPaise: number, isFulfilled: boolean): Promise<void> {
    for (const targetCity of Array.from(new Set(["GLOBAL", cityCode || "IN-MH-NGP"]))) {
      await this.prisma.platformReportingFact.upsert({
        where: {
          factDate_cityCode: {
            factDate,
            cityCode: targetCity,
          },
        },
        create: {
          id: `${factDate}-${targetCity}`,
          factDate,
          cityCode: targetCity,
          totalGmvPaise: BigInt(amountPaise),
          activeMerchantsCount: 1,
          activeCustomersCount: 1,
          totalOrdersFulfilled: isFulfilled ? 1 : 0,
        },
        update: {
          totalGmvPaise: { increment: BigInt(amountPaise) },
          ...(isFulfilled ? { totalOrdersFulfilled: { increment: 1 } } : {}),
        },
      });
    }
  }

  async findMetric(outletId: string, date: string): Promise<DailyMetric | null> {
    const record = await this.prisma.dailyMetric.findUnique({
      where: {
        metricDate_outletId: {
          metricDate: date,
          outletId,
        },
      },
    });
    return record ? this.toDomain(record) : null;
  }

  async getPlatformTotals(): Promise<{ totalGmvPaise: number; totalOrders: number }> {
    const agg = await this.prisma.dailyMetric.aggregate({
      _sum: {
        totalSalesPaise: true,
        totalOrders: true,
      },
    });

    return {
      totalGmvPaise: Number(agg._sum.totalSalesPaise ?? 0n),
      totalOrders: Number(agg._sum.totalOrders ?? 0),
    };
  }

  private toDomain(record: any): DailyMetric {
    return new DailyMetric({
      id: record.id,
      metricDate: record.metricDate,
      outletId: record.outletId,
      totalOrders: record.totalOrders,
      totalSalesPaise: Number(record.totalSalesPaise),
      avgPrepMinutes: record.avgPrepTimeMinutes,
    });
  }
}
