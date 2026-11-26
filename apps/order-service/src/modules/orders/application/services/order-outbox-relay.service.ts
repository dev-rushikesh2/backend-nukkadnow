import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { StructuredLogger } from "@nukkadnow/observability";
import { PrismaService } from "../../infrastructure/persistence/prisma/prisma.service";

@Injectable()
export class OrderOutboxRelayService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new StructuredLogger("order-outbox-relay");
  private readonly analyticsUrl = process.env.ANALYTICS_SERVICE_URL || "http://localhost:4007";
  private readonly fulfillmentUrl = process.env.FULFILLMENT_SERVICE_URL || "http://localhost:4005";
  private timer: NodeJS.Timeout | null = null;
  private isFlushing = false;

  constructor(private readonly prisma: PrismaService) {}

  onModuleInit(): void {
    this.timer = setInterval(() => {
      void this.flushPending();
    }, 10_000);
  }

  onModuleDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  async flushPending(): Promise<void> {
    if (this.isFlushing) return;
    this.isFlushing = true;
    try {
      const events = await this.prisma.transactionalOutbox.findMany({
        where: { status: "PENDING", retryCount: { lt: 5 } },
        orderBy: { createdAt: "asc" },
        take: 25,
      });

      for (const evt of events) {
        try {
          const payload = JSON.parse(evt.payload || "{}");
          await this.dispatchEvent(evt.eventType, payload);
          await this.prisma.transactionalOutbox.update({
            where: { id: evt.id },
            data: { status: "PUBLISHED", processedAt: new Date() },
          });
        } catch (err: any) {
          const nextRetries = (evt.retryCount || 0) + 1;
          await this.prisma.transactionalOutbox.update({
            where: { id: evt.id },
            data: {
              retryCount: nextRetries,
              status: nextRetries >= 5 ? "FAILED" : "PENDING",
            },
          });
          this.logger.warn(`Outbox event ${evt.id} (${evt.eventType}) failed attempt ${nextRetries}: ${err?.message}`);
        }
      }
    } catch {
      // Avoid crashing background relay if DB pool resets temporarily
    } finally {
      this.isFlushing = false;
    }
  }

  private async dispatchEvent(eventType: string, payload: any): Promise<void> {
    if (eventType === "ORDER_PLACED") {
      if (payload.fulfillmentType === "STORE_PICKUP") {
        const tokenRes = await fetch(`${this.fulfillmentUrl}/api/v1/fulfillment/tokens/generate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId: payload.orderId,
            outletId: payload.outletId,
          }),
        });
        if (!tokenRes.ok) {
          throw new Error(`Fulfillment token sync HTTP ${tokenRes.status}`);
        }
      }

      if (payload.status === "CONFIRMED" && payload.fulfillmentType === "WALK_IN") {
        const res = await fetch(`${this.analyticsUrl}/api/v1/analytics/record`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            outletId: payload.outletId,
            tenantId: payload.tenantId,
            cityCode: payload.cityCode || "IN-MH-NGP",
            amountPaise: Number(payload.totalAmountPaise || 0),
            prepMinutes: 5,
            isFulfilled: false,
          }),
        });
        if (!res.ok) throw new Error(`Analytics record HTTP ${res.status}`);
      }
      return;
    }

    if (eventType === "ORDER_COMPLETED") {
      const res = await fetch(`${this.analyticsUrl}/api/v1/analytics/record`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          outletId: payload.outletId,
          tenantId: payload.tenantId,
          cityCode: payload.cityCode || "IN-MH-NGP",
          amountPaise: Number(payload.totalAmountPaise || 0),
          prepMinutes: Number(payload.prepMinutes ?? 15),
          isFulfilled: true,
        }),
      });
      if (!res.ok) {
        throw new Error(`Analytics record HTTP ${res.status}`);
      }
    }
  }
}
