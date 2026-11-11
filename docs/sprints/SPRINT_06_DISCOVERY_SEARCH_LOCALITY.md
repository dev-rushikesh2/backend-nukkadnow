# Sprint 06 — Discovery, Geospatial Search & Localities

- **Sprint ID:** NNK-SPRINT-06
- **Duration:** 2 weeks
- **Goal:** Blazing-fast geospatial discovery of nearby sellers, locality-first filtering, PostGIS index queries, and denormalized availability projections.
- **Owning Service:** `apps/discovery-service`

---

## 1. Principles & Coding Standards
- **KISS:** Event-driven denormalization: Discovery service listens to `merchants.outlet.updated` and `catalog.stock.changed` to maintain pre-calculated search read models.
- **DRY:** Standard Haversine / PostGIS ST_DWithin query utilities.

---

## 2. Scalability & Performance
- **PostGIS Geospatial Indexing:** `GIST (geom)` spatial indexes for sub-10ms queries within a 5km radius.
- **Redis Cache Layer:** Locality-level search results cached with short TTL (60s) to absorb peak browsing traffic.

---

## 3. Endpoints & API Surface
| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/v1/discovery/outlets/nearby`| Find nearby open outlets within radius | Public |
| `GET` | `/api/v1/discovery/search` | Full-text product and outlet search | Public |
| `GET` | `/api/v1/discovery/localities` | List supported operational localities | Public |

---

## 4. Definition of Done
- [ ] PostGIS queries executing with spatial indexing.
- [ ] Event consumer updating `OutletSearchDocument` in real-time.
- [ ] Address privacy filter applied for home-based sellers.
