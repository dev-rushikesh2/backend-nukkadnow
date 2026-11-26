export interface MetricProps {
  id: string;
  metricDate: string; // "YYYY-MM-DD"
  tenantId?: string;
  outletId: string;
  cityCode?: string;
  totalOrders: number;
  totalSalesPaise: number;
  avgPrepMinutes: number;
}

export class DailyMetric {
  constructor(private props: MetricProps) {}

  get id(): string { return this.props.id; }
  get metricDate(): string { return this.props.metricDate; }
  get tenantId(): string | undefined { return this.props.tenantId; }
  get outletId(): string { return this.props.outletId; }
  get cityCode(): string { return this.props.cityCode || "IN-MH-NGP"; }
  get totalOrders(): number { return this.props.totalOrders; }
  get totalSalesPaise(): number { return this.props.totalSalesPaise; }
  get avgPrepMinutes(): number { return this.props.avgPrepMinutes; }

  recordSale(amountPaise: number, prepMinutes: number): void {
    const totalMinutes = this.props.avgPrepMinutes * this.props.totalOrders + prepMinutes;
    this.props.totalOrders++;
    this.props.totalSalesPaise += amountPaise;
    this.props.avgPrepMinutes = Math.round((totalMinutes / this.props.totalOrders) * 10) / 10;
  }
}

export abstract class AnalyticsRepositoryPort {
  abstract saveMetric(metric: DailyMetric): Promise<void>;
  abstract findMetric(outletId: string, date: string): Promise<DailyMetric | null>;
  abstract getPlatformTotals(): Promise<{ totalGmvPaise: number; totalOrders: number }>;
  abstract recordPlatformFact?(factDate: string, cityCode: string, amountPaise: number, isFulfilled: boolean): Promise<void>;
}
