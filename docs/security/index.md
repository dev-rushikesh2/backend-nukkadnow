# Security & Threat Model

- Least privilege service-to-service communication with HMAC authentication tokens.
- Tenant context enforced on every query via `TenantContextHolder` (AsyncLocalStorage).
- PII data masked in logs.
- Sensitive credentials loaded via secrets management.
