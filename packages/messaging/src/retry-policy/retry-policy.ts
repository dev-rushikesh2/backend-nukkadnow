export interface RetryConfig {
  maxRetries: number;
  initialDelayMs: number;
  maxDelayMs: number;
  backoffFactor: number;
  jitter: boolean;
}

export class RetryPolicy {
  static calculateDelay(attempt: number, config: RetryConfig): number {
    const exponential = config.initialDelayMs * Math.pow(config.backoffFactor, attempt);
    const bounded = Math.min(exponential, config.maxDelayMs);
    if (!config.jitter) return bounded;
    const jitterFactor = 0.5 + Math.random() * 0.5;
    return Math.floor(bounded * jitterFactor);
  }
}
