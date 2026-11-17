# Sprint Specification: Production-Grade Multi-Tenant Inventory & Admin Price-Capped System

- **Sprint Code:** NNK-SPRINT-INV-PRICING-PROD
- **Target Systems:**
  - `nukkadnow-backend` (`catalog-service`, `order-service`, `api-gateway`)
  - `merchant-app-nukkadnow` (Catalog, Variants, Realtime Inventory, Pricing)
  - `nukkadnow-admin` (Price-Cap Governance, Catalogue Moderation, Audit Log)
- **Architecture Role:** Principal Distributed Systems Architect & Lead Fullstack Engineer

---

## 1. Context & Business Problem

NukkadNow operates as a hyper-local B2B2C marketplace SaaS platform. In this architecture:
1. **Merchant Autonomy:** Each onboarded merchant operates independently. They have their own inventory stock levels, outlet-specific catalogs, and dynamic pricing control.
2. **Platform Governance & Anti-Gouging:** Because NukkadNow is the trust layer and consumer marketplace, Platform Admins must have macro-level controls:
   - Setting price ceilings (caps) per category, subcategory, and locality (e.g., standard dairy, fresh produce during crises/festivals).
   - Mandatory Maximum Retail Price (MRP) cap enforcement under the Legal Metrology Act (`sellingPricePaise <= compareAtPricePaise`).
   - Moderation workflows to flag and takedown anomalous or predatory pricing.
3. **Financial & Concurrency Integrity:** Overselling under high concurrency (e.g. rush-hour food or grocery orders) causes operational failures. Inventory reservations must be atomic, time-bounded (10-minute TTL), and backed by an append-only double-entry stock movement ledger.

---

## 2. Architecture Principles & Standards

- **Paise Precision:** All currency representations are strictly unsigned integers in paise (₹1 = 100 paise). Floating-point arithmetic for pricing is forbidden.
- **Optimistic Concurrency & Row Locking:** Stock balance updates check row version numbers (`WHERE version = :currentVersion`) or use atomic SQL increments to prevent race conditions.
- **Two-Phase Reservation Pattern:**
  - **Phase 1 (Reserve):** Hold `reservedQuantity` with an automatic 10-minute TTL during customer checkout.
  - **Phase 2a (Commit):** Deduct `onHandQuantity` and `reservedQuantity` on successful payment confirmation.
  - **Phase 2b (Release):** Release `reservedQuantity` if payment fails, times out, or the cart is abandoned.
- **Strict Tenant Scoping:** Every merchant API request enforces `tenantId` and `outletId` matches extracted from cryptographically verified JWT tokens.

---

## 3. Database Schema Deliverables

```text
nukkadnow-backend/apps/catalog-service/prisma/schema.prisma
├── Product (Multi-tenant scoped: tenantId, outletId, category, subCategory)
├── ProductVariant (pricePaise, compareAtPricePaise/MRP, sku, barcode)
├── StockBalance (onHandQuantity, reservedQuantity, safetyStock, version)
├── StockMovement (Append-only ledger: quantityChange, balanceAfter, reason, actorId, referenceId)
├── StockReservation (orderId, quantity, expiresAt, status: ACTIVE | COMMITTED | EXPIRED | RELEASED)
└── AdminPriceCapRule (scope: GLOBAL | CATEGORY | LOCALITY, maxPricePaise, enforceMrpCap, isActive)
```

---

## 4. API Specifications

### Merchant BFF & Catalog Service
| Method | Route | Description | Scope |
|---|---|---|---|
| `GET` | `/api/v1/merchant/catalog/products` | List all products with real-time stock balances | Merchant Staff |
| `POST` | `/api/v1/merchant/catalog/products` | Create product with variants, validating Price Caps & MRP | Merchant Staff |
| `PATCH` | `/api/v1/merchant/catalog/products/:id/pricing` | Update variant pricing subject to Admin Price Caps | Merchant Staff |
| `GET` | `/api/v1/merchant/inventory` | Outlet inventory balances with low-stock alerts | Merchant Staff |
| `POST` | `/api/v1/merchant/inventory/adjust` | Manual restock, damage, or audit adjustment | Merchant Staff |
| `GET` | `/api/v1/merchant/inventory/movements` | Immutable audit ledger of stock movements | Merchant Staff |

### Admin Governance & Price Caps
| Method | Route | Description | Scope |
|---|---|---|---|
| `GET` | `/api/v1/admin/price-caps` | List all active and historic price cap rules | Platform Admin |
| `POST` | `/api/v1/admin/price-caps` | Create new category/locality price ceiling | Platform Admin |
| `DELETE` | `/api/v1/admin/price-caps/:id` | Deactivate/remove a price ceiling | Platform Admin |
| `GET` | `/api/v1/admin/catalog/flagged-pricing` | Anomaly review queue (prices violating benchmark) | Platform Admin |

---

## 5. Execution Breakdown

- [x] **Task 1: Architecture Blueprint & Sprint Documentation**
- [ ] **Task 2: Catalog & Inventory Prisma Engine & Price-Cap Policy Service**
- [ ] **Task 3: Background Reservation TTL Sweeper**
- [ ] **Task 4: API Gateway BFF Routing for Merchant & Admin**
- [ ] **Task 5: Order Checkout Inventory Reservation Integration**
- [ ] **Task 6: Merchant App Frontend Real API & Optimistic Stock Sync**
- [ ] **Task 7: Admin Portal Price Cap Governance Interface**
- [ ] **Task 8: End-to-End Verification & Concurrency Checks**
