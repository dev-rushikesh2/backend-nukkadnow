import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";
import { TenantContextHolder } from "@nukkadnow/security";

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const correlationId = (req.headers["x-correlation-id"] as string) || UniqueIdentifier.generateV7();
    const tenantId = req.headers["x-tenant-id"] as string | undefined;
    const outletId = req.headers["x-outlet-id"] as string | undefined;

    res.setHeader("x-correlation-id", correlationId);

    TenantContextHolder.run(
      {
        correlationId,
        tenantId,
        outletId,
      },
      () => next()
    );
  }
}
