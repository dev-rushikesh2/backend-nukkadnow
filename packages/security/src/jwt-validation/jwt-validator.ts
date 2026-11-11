export interface AuthUserTokenClaims {
  sub: string; // userId
  phoneNumber?: string;
  roles: string[];
  tenantId?: string; // organizationId
  outletId?: string;
  isSuperAdmin?: boolean;
  iss: string;
  aud: string;
  iat: number;
  exp: number;
}

export class JwtClaimsValidator {
  static validateAudienceAndIssuer(
    claims: AuthUserTokenClaims,
    expectedAudience: string,
    expectedIssuer: string
  ): boolean {
    return claims.aud === expectedAudience && claims.iss === expectedIssuer;
  }
}
