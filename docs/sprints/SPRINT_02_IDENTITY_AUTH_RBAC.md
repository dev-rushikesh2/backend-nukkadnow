# Sprint 02 — Identity, Authentication & Tenant Scoping

- **Sprint ID:** NNK-SPRINT-02
- **Duration:** 2 weeks
- **Goal:** Bulletproof authentication via phone OTP, JWT access tokens, refresh token rotation, multi-tenant RBAC, and outlet-scoped authorization.
- **Owning Service:** `apps/identity-service`, `packages/security`

---

## 1. Principles & Coding Standards

### DRY & KISS
- **Reusable Guards:** Reusable `@Roles(PlatformRole...)` decorator and `TenantGuard` used across all controllers.
- **KISS Auth Flow:** Phone OTP is the primary login for both customers and merchants in India; email/password optional for super admin only.

### SOLID Standards
- **Single Responsibility:** `OtpService` strictly handles OTP generation, cooldown, and SMS dispatch; `TokenService` strictly handles cryptographic signing and verification; `MembershipService` handles tenant/outlet role assignments.
- **Open/Closed:** `SmsProviderPort` interface allows plugging in Twilio, AWS SNS, Msg91, or Mock Provider in local development without altering authentication use cases.

---

## 2. Security Architecture & Threat Defense
- **Timing-Attack Protection:** OTP verification and refresh token hashes verified with `crypto.timingSafeEqual`.
- **OTP Brute-Force Defense:**
  - Maximum 3 incorrect attempts per challenge $\rightarrow$ challenge invalidated immediately.
  - 60-second resend cooldown; maximum 5 OTP requests per phone number per hour.
  - OTPs hashed in Redis/DB using HMAC-SHA256 with an ephemeral server secret.
- **Refresh Token Rotation (Family Detection):**
  - Every refresh token exchange issues a new token pair and revokes the old one.
  - If an already-used refresh token is presented, the entire token family (session) is revoked immediately (stolen token detection).
- **Tenant Context Enforcement:**
  - Every authenticated request sets `TenantContextHolder` via `AsyncLocalStorage`.
  - Service repositories automatically scope queries to `tenantId` and `outletId`.

---

## 3. Endpoints & API Specifications

### Authentication API (`/api/v1/auth`)
| Method | Route | Description | Auth | Rate Limit |
|---|---|---|---|---|
| `POST` | `/api/v1/auth/otp/request` | Request 6-digit login OTP for phone number | Public | 5/min |
| `POST` | `/api/v1/auth/otp/verify` | Verify OTP, issue JWT access + refresh token | Public | 5/min |
| `POST` | `/api/v1/auth/token/refresh` | Rotate refresh token and issue new token pair | Public (Refresh Token) | 20/min |
| `POST` | `/api/v1/auth/logout` | Revoke active session | Required (Any Role) | 30/min |
| `GET` | `/api/v1/auth/me` | Fetch authenticated user profile & memberships | Required (Any Role) | 60/min |

### Request/Response Schemas

#### `POST /api/v1/auth/otp/request`
```json
// Request
{
  "phoneNumber": "+919876543210",
  "purpose": "LOGIN"
}

// Response (200 OK)
{
  "success": true,
  "challengeId": "uuidv7",
  "expiresInSeconds": 300,
  "cooldownSeconds": 60
}
```

#### `POST /api/v1/auth/otp/verify`
```json
// Request
{
  "challengeId": "uuidv7",
  "phoneNumber": "+919876543210",
  "otp": "492817"
}

// Response (200 OK)
{
  "accessToken": "eyJhbGciOi...",
  "refreshToken": "eyJhbGciOi...",
  "expiresIn": 900,
  "user": {
    "id": "uuidv7",
    "phoneNumber": "+919876543210",
    "roles": ["CUSTOMER", "MERCHANT_OWNER"],
    "activeTenantId": "org_uuidv7"
  }
}
```

---

## 4. Definition of Done
- [ ] OTP challenge generated with rate limiting and secure expiry in Redis.
- [ ] JWT tokens issued with asymmetric RS256 / HS256 and verified via `JwtAuthGuard`.
- [ ] Refresh token family rotation implemented with instant theft revocation.
- [ ] Role-Based Access Control (`@Roles`) and Tenant Scoping (`@TenantScope`) enforced.
- [ ] Integration tests covering valid login, invalid OTP, rate-limit rejection, and token replay attacks.
