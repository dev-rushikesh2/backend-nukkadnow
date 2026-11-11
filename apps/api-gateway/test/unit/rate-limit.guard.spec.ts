import { RateLimitGuard } from "../../src/common/throttling/rate-limit.guard";
import { ExecutionContext, HttpException } from "@nestjs/common";

describe("API Gateway - RateLimitGuard (Sprint 1)", () => {
  let guard: RateLimitGuard;

  beforeEach(() => {
    guard = new RateLimitGuard();
  });

  const createMockContext = (ip: string, path: string): ExecutionContext => {
    const req = {
      headers: { "x-forwarded-for": ip },
      path,
      socket: { remoteAddress: ip },
    };
    return {
      switchToHttp: () => ({
        getRequest: () => req,
      }),
    } as unknown as ExecutionContext;
  };

  it("should allow requests under the limit", () => {
    const ctx = createMockContext("192.168.1.1", "/api/v1/customer/outlets/nearby");
    expect(guard.canActivate(ctx)).toBe(true);
  });

  it("should block requests exceeding the rate limit", () => {
    const ctx = createMockContext("192.168.1.2", "/api/v1/customer/outlets/nearby");
    for (let i = 0; i < 100; i++) {
      guard.canActivate(ctx);
    }
    expect(() => guard.canActivate(ctx)).toThrow(HttpException);
  });
});
