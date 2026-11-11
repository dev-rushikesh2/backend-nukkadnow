export interface TraceContext {
  traceparent?: string;
  traceId?: string;
  spanId?: string;
}

export class TraceContextHolder {
  static extractTraceId(traceparent?: string): string | undefined {
    if (!traceparent) return undefined;
    const parts = traceparent.split("-");
    return parts.length >= 2 ? parts[1] : undefined;
  }

  static createTraceparent(traceId: string, spanId: string): string {
    return `00-${traceId}-${spanId}-01`;
  }
}
