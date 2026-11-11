import { Injectable } from "@nestjs/common";
import { StructuredLogger } from "@nukkadnow/observability";

@Injectable()
export class ProxyDispatcherService {
  private readonly logger = new StructuredLogger("proxy-dispatcher");

  async dispatch<T>(serviceUrl: string, path: string, options: RequestInit = {}): Promise<T> {
    const targetUrl = `${serviceUrl}${path}`;
    const startTime = Date.now();

    try {
      const response = await fetch(targetUrl, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...(options.headers || {}),
        },
      });

      const durationMs = Date.now() - startTime;
      this.logger.debug(`Proxied call to ${targetUrl}`, { status: response.status, durationMs });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({ message: response.statusText }));
        throw { status: response.status, ...errorBody };
      }

      return (await response.json()) as T;
    } catch (error) {
      this.logger.error(`Failed downstream call to ${targetUrl}`, error);
      throw error;
    }
  }
}
