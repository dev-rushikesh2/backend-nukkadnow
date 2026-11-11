# Sprint 07 — Cart, Pricing Snapshot & Checkout Quote

- **Sprint ID:** NNK-SPRINT-07
- **Duration:** 2 weeks
- **Goal:** Single-seller cart validation, dynamic price calculation in paise, taxes, packaging fees, and checkout quote generation.
- **Owning Service:** `apps/order-service`

---

## 1. Principles & Coding Standards
- **DRY:** Price calculation encapsulated in domain service `PricingCalculator`.
- **KISS:** Enforce single-seller cart rule at MVP. If a user adds an item from another outlet, prompt to clear cart.
- **SOLID (SRP):** Cart validation separated from final order placement.

---

## 2. Financial Correctness
- **Paise Precision:** All item totals, discount adjustments, packaging charges, and taxes calculated in integer paise. Floating-point division is forbidden.
- **Immutable Quote:** Checkout quote signed with a short TTL (10 minutes) so price cannot change mid-checkout.

---

## 3. Endpoints & API Surface
| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/v1/carts` | Get customer active cart | Customer |
| `POST` | `/api/v1/carts/items` | Add / update item in cart | Customer |
| `DELETE`| `/api/v1/carts/items/:variantId`| Remove item from cart | Customer |
| `POST` | `/api/v1/checkouts/quote` | Generate signed checkout quote with pricing | Customer |
