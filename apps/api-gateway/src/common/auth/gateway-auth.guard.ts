import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import * as jwt from "jsonwebtoken";

@Injectable()
export class GatewayAuthGuard implements CanActivate {
  private readonly jwtSecret: string;
  private readonly issuer: string;
  private readonly audience: string;

  constructor() {
    if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
      throw new Error("JWT_SECRET env var is required and must be >= 32 chars");
    }
    if (!process.env.JWT_ISSUER) {
      throw new Error("JWT_ISSUER env var is required");
    }
    if (!process.env.JWT_AUDIENCE) {
      throw new Error("JWT_AUDIENCE env var is required");
    }

    this.jwtSecret = process.env.JWT_SECRET;
    this.issuer = process.env.JWT_ISSUER;
    this.audience = process.env.JWT_AUDIENCE;
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedException({
        code: "UNAUTHORIZED",
        message: "Missing or malformed Authorization bearer token",
      });
    }

    const token = authHeader.substring(7);

    try {
      const decoded = jwt.verify(token, this.jwtSecret, {
        issuer: this.issuer,
        audience: this.audience,
      }) as Record<string, unknown>;
      (request as any).user = decoded;
      return true;
    } catch (err) {
      throw new UnauthorizedException({
        code: "INVALID_TOKEN",
        message: "Session token is invalid or has expired",
      });
    }
  }
}
