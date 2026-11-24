import { Injectable, ServiceUnavailableException, GatewayTimeoutException } from "@nestjs/common";
import { StructuredLogger } from "@nukkadnow/observability";
import * as crypto from "crypto";

const DEFAULT_TIMEOUT_MS = 10_000; // 10 s — overridable per call

@Injectable()
export class ProxyDispatcherService {
  private readonly logger = new StructuredLogger("proxy-dispatcher");

  async dispatch<T>(
    serviceUrl: string,
    path: string,
    options: RequestInit & { timeoutMs?: number } = {}
  ): Promise<T> {
    const { timeoutMs = DEFAULT_TIMEOUT_MS, ...fetchOptions } = options;
    const targetUrl = `${serviceUrl}${path}`;
    const correlationId = (options.headers as Record<string, string>)?.["x-correlation-id"] ?? crypto.randomUUID();
    const startTime = Date.now();

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(targetUrl, {
        ...fetchOptions,
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          "x-correlation-id": correlationId,
          ...(fetchOptions.headers as Record<string, string> ?? {}),
        },
      });

      clearTimeout(timer);
      const durationMs = Date.now() - startTime;
      this.logger.debug(`Proxied ${fetchOptions.method ?? "GET"} ${targetUrl}`, {
        status: response.status,
        durationMs,
        correlationId,
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({
          message: response.statusText,
          statusCode: response.status,
        }));
        const err: any = new Error(errorBody.message ?? response.statusText);
        err.status = response.status;
        err.correlationId = correlationId;
        Object.assign(err, errorBody);
        throw err;
      }

      return (await response.json()) as T;
    } catch (error: any) {
      clearTimeout(timer);
      const durationMs = Date.now() - startTime;

      if (error?.name === "AbortError") {
        this.logger.error(`Timeout after ${timeoutMs}ms calling ${targetUrl}`, {
          correlationId,
          durationMs,
        });
        throw new GatewayTimeoutException(
          `Downstream service did not respond within ${timeoutMs}ms`
        );
      }

      if (error?.status) {
        // Re-throw structured downstream error preserving status
        throw error;
      }

      this.logger.error(`Network failure calling ${targetUrl}`, {
        error: error?.message,
        correlationId,
        durationMs,
      });
      throw new ServiceUnavailableException(
        "A required downstream service is temporarily unavailable"
      );
    }
  }
}
