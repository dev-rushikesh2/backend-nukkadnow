export interface LogContext {
  traceId?: string;
  spanId?: string;
  tenantId?: string;
  userId?: string;
  service?: string;
  [key: string]: unknown;
}

const REDACTED_KEYS = ["password", "otp", "token", "secret", "cvv", "pan", "aadhar", "cardnumber"];

export class StructuredLogger {
  constructor(private readonly serviceName: string) {}

  info(message: string, context?: LogContext): void {
    this.log("INFO", message, context);
  }

  warn(message: string, context?: LogContext): void {
    this.log("WARN", message, context);
  }

  error(message: string, error?: Error | unknown, context?: LogContext): void {
    const errorDetails = error instanceof Error ? {
      name: error.name,
      message: error.message,
      stack: error.stack,
    } : { rawError: error };

    this.log("ERROR", message, { ...context, error: errorDetails });
  }

  debug(message: string, context?: LogContext): void {
    if (process.env.LOG_LEVEL === "debug") {
      this.log("DEBUG", message, context);
    }
  }

  private log(level: string, message: string, context?: LogContext): void {
    const sanitized = this.redactSensitiveData(context || {});
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      service: this.serviceName,
      message,
      ...sanitized,
    };
    process.stdout.write(JSON.stringify(logEntry) + "\n");
  }

  private redactSensitiveData(data: Record<string, unknown>): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(data)) {
      if (REDACTED_KEYS.some(k => key.toLowerCase().includes(k))) {
        result[key] = "[REDACTED]";
      } else if (val && typeof val === "object" && !Array.isArray(val) && !(val instanceof Date)) {
        result[key] = this.redactSensitiveData(val as Record<string, unknown>);
      } else {
        result[key] = val;
      }
    }
    return result;
  }
}
