export interface RequestMetric {
  service: string;
  route: string;
  method: string;
  statusCode: number;
  durationMs: number;
}

export class MetricsCollector {
  private static instance: MetricsCollector;
  private readonly requestCounts: Map<string, number> = new Map();

  static getInstance(): MetricsCollector {
    if (!MetricsCollector.instance) {
      MetricsCollector.instance = new MetricsCollector();
    }
    return MetricsCollector.instance;
  }

  recordRequest(metric: RequestMetric): void {
    const key = `${metric.service}:${metric.method}:${metric.route}:${metric.statusCode}`;
    const current = this.requestCounts.get(key) || 0;
    this.requestCounts.set(key, current + 1);
  }

  getSnapshot(): Record<string, number> {
    return Object.fromEntries(this.requestCounts.entries());
  }
}
