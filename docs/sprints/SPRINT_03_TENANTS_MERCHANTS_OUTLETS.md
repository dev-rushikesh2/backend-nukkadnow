# Sprint 03 — Tenancy, Merchants, Outlets & Localities

- **Sprint ID:** NNK-SPRINT-03
- **Duration:** 2 weeks
- **Goal:** Comprehensive merchant onboarding, seller types (permanent shop, home chef, seasonal, maker), operating hours, service areas, and strict home seller address privacy.
- **Owning Service:** `apps/merchant-service`

---

## 1. Principles & Coding Standards
- **DRY:** Shared address value object and phone validation utility from `@nukkadnow/platform-kernel`.
- **KISS:** Operating hours stored as standard daily integer slots (`dayOfWeek`: 0-6, `openTime`: "HH:mm", `closeTime`: "HH:mm") with an override closure table.
- **SOLID (DIP):** Verification document storage uses an abstracted `MediaStoragePort` (S3/MinIO signed URLs).

---

## 2. Security & Privacy Rules
- **Home Seller Privacy Protection (ADR 0011):**
  - If `sellerMode == "HOME_CHEF"` or `isAddressPublic == false`, the exact building/flat number is **never** included in public search or storefront DTOs.
  - Only general locality, city, and approximate pickup coordinates ($\pm 200m$ radius) are returned to unauthenticated or browsing users.
  - The precise physical address is only disclosed on a confirmed, paid order receipt.
- **Tenant Isolation:** Every write mutation (`PUT /outlets/:id`, `POST /outlets`) asserts that `req.user.tenantId == outlet.merchantId`.

---

## 3. Endpoints & API Surface
| Method | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/api/v1/merchants` | Register new merchant organization | Authenticated User |
| `GET` | `/api/v1/merchants/my-organization`| Get active merchant organization profile | Merchant Owner |
| `POST` | `/api/v1/outlets` | Create physical or virtual outlet | Merchant Owner |
| `GET` | `/api/v1/outlets/:id` | Get public outlet details (with privacy filter) | Public |
| `PUT` | `/api/v1/outlets/:id/hours` | Update weekly operating hours & closures | Outlet Manager |
| `POST` | `/api/v1/outlets/:id/verify` | Submit KYC/FSSAI business verification docs | Merchant Owner |

---

## 4. Definition of Done
- [ ] Merchant organization and outlet CRUD operations with tenant scoping.
- [ ] Operating hours engine with timezone support (default: `Asia/Kolkata`).
- [ ] Automated address masking on public DTOs for home businesses.
- [ ] Publishes `merchants.outlet.updated.v1` on RabbitMQ topic exchange.
