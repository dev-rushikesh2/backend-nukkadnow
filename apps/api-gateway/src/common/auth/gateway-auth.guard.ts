import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import * as jwt from "jsonwebtoken";

@Injectable()
export class GatewayAuthGuard implements CanActivate {
  private readonly jwtSecret = process.env.JWT_SECRET || "local-development-secret-must-be-min-32-chars-long!";

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
      const decoded = jwt.verify(token, this.jwtSecret) as Record<string, unknown>;
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
