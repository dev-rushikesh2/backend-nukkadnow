# Sprint 04 — Catalogue, Products, Variants & Media

- **Sprint ID:** NNK-SPRINT-04
- **Duration:** 2 weeks
- **Goal:** Product catalogue management, multi-tier categories, product variants, price in minor units (paise), and secure pre-signed media uploads.
- **Owning Service:** `apps/catalog-service`

---

## 1. Principles & Coding Standards
- **DRY:** Money amounts always parsed as integer paise using `@nukkadnow/platform-kernel`'s `Money`.
- **KISS:** Clean hierarchy: Category $\rightarrow$ Product $\rightarrow$ ProductVariant.
- **SOLID:** Image upload decoupling via `PresignedUrlGeneratorPort`.

---

## 2. Security Architecture & Threat Defense
- **Presigned Upload Safety:** Direct media uploads to S3/MinIO via signed PUT URLs with content-type verification (image/jpeg, image/png, image/webp) and 5MB size limit.
- **Tenant Scope Check:** Catalog controllers verify `product.tenantId === currentTenantId` on all updates/deletes.

---

## 3. Endpoints & API Surface
| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/v1/categories` | List hierarchical product categories | Public |
| `POST` | `/api/v1/products` | Create product with variants | Merchant Staff |
| `GET` | `/api/v1/products/:id` | Get product details with variants & pricing | Public |
| `PUT` | `/api/v1/products/:id` | Update product attributes & availability | Merchant Staff |
| `POST` | `/api/v1/products/media/presign`| Request presigned S3 upload URL | Merchant Staff |
| `DELETE`| `/api/v1/products/:id` | Soft-delete / deactivate product | Merchant Staff |

---

## 4. Definition of Done
- [ ] Product & Variant domain models with validation pipes.
- [ ] Presigned upload URL generation with MIME validation.
- [ ] Event publication: `catalog.product.published.v1` on RabbitMQ.
