import { Injectable } from "@nestjs/common";
import { StructuredLogger } from "@nukkadnow/observability";

@Injectable()
export class CatalogClient {
  private readonly logger = new StructuredLogger("catalog-client");
  private readonly baseUrl = process.env.CATALOG_SERVICE_URL || "http://localhost:4003";

  async reserveStock(variantId: string, quantity: number, orderId: string): Promise<boolean> {
    try {
      const res = await fetch(`${this.baseUrl}/api/v1/catalog/inventory/reserve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity, orderId }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        this.logger.warn(`Failed to reserve stock for variant ${variantId}`, body);
        return false;
      }
      return true;
    } catch (err) {
      this.logger.error(`Catalog service unavailable for reservation: ${(err as any).message}`);
      if (process.env.NODE_ENV === "production") {
        return false; // Fail-closed in production to prevent overselling
      }
      return true; // Local decoupled test fallback
    }
  }

  async releaseStock(variantId: string, quantity: number, orderId: string): Promise<void> {
    try {
      await fetch(`${this.baseUrl}/api/v1/catalog/inventory/release`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity, orderId }),
      });
    } catch (err) {
      this.logger.error(`Error releasing stock reservation for order ${orderId}`, err);
    }
  }

  async commitStock(variantId: string, quantity: number, orderId: string): Promise<void> {
    try {
      await fetch(`${this.baseUrl}/api/v1/catalog/inventory/commit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity, orderId }),
      });
    } catch (err) {
      this.logger.error(`Error committing stock reservation for order ${orderId}`, err);
    }
  }
}
