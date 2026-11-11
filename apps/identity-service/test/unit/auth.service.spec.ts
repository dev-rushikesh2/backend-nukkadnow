import { AuthService } from "../../src/modules/identity/application/services/auth.service";
import { OtpManagerService } from "../../src/modules/identity/infrastructure/otp/otp-manager.service";
import { InMemoryUserRepository, InMemorySessionRepository } from "../../src/modules/identity/infrastructure/persistence/repositories/in-memory-identity.repository";
import { InvalidOtpError, MaxOtpAttemptsError } from "../../src/modules/identity/domain/errors/identity-errors";

describe("Identity Service - AuthService (Sprint 2)", () => {
  let authService: AuthService;
  let otpManager: OtpManagerService;
  let userRepo: InMemoryUserRepository;
  let sessionRepo: InMemorySessionRepository;

  beforeEach(() => {
    otpManager = new OtpManagerService();
    userRepo = new InMemoryUserRepository();
    sessionRepo = new InMemorySessionRepository();
    authService = new AuthService(otpManager, userRepo, sessionRepo);
  });

  it("should request an OTP successfully and verify login", async () => {
    const phone = "+919876543210";
    const requestResult = await authService.requestLoginOtp(phone);
    expect(requestResult.success).toBe(true);
    expect(requestResult.devOtp).toBeDefined();

    const verifyResult = await authService.verifyLoginOtp(phone, requestResult.devOtp!);
    expect(verifyResult.accessToken).toBeDefined();
    expect(verifyResult.refreshToken).toBeDefined();
    expect(verifyResult.user.phoneNumber).toBe(phone);
    expect(verifyResult.user.roles).toContain("CUSTOMER");
  });

  it("should reject an invalid OTP", async () => {
    const phone = "+919876543211";
    await authService.requestLoginOtp(phone);

    await expect(authService.verifyLoginOtp(phone, "000000")).rejects.toThrow(InvalidOtpError);
  });

  it("should lock challenge after 3 failed attempts", async () => {
    const phone = "+919876543212";
    await authService.requestLoginOtp(phone);

    // 3 failed attempts
    await expect(authService.verifyLoginOtp(phone, "111111")).rejects.toThrow(InvalidOtpError);
    await expect(authService.verifyLoginOtp(phone, "222222")).rejects.toThrow(InvalidOtpError);
    await expect(authService.verifyLoginOtp(phone, "333333")).rejects.toThrow(InvalidOtpError);

    // 4th attempt exceeds max attempts
    await expect(authService.verifyLoginOtp(phone, "444444")).rejects.toThrow(MaxOtpAttemptsError);
  });

  it("should rotate refresh tokens and revoke old session", async () => {
    const phone = "+919876543213";
    const req = await authService.requestLoginOtp(phone);
    const login = await authService.verifyLoginOtp(phone, req.devOtp!);

    const refreshed = await authService.refreshTokens(login.refreshToken);
    expect(refreshed.accessToken).toBeDefined();
    expect(refreshed.refreshToken).toBeDefined();
    expect(refreshed.refreshToken).not.toBe(login.refreshToken);

    // Using the old refresh token again should be rejected (reuse detection)
    await expect(authService.refreshTokens(login.refreshToken)).rejects.toThrow();
  });
});
