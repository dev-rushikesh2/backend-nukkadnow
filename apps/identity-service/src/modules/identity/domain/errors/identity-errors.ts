import { DomainError } from "@nukkadnow/platform-kernel";

export class InvalidOtpError extends DomainError {
  readonly code = "INVALID_OTP";
  constructor(message = "The provided OTP is incorrect.") {
    super(message);
  }
}

export class OtpExpiredError extends DomainError {
  readonly code = "OTP_EXPIRED";
  constructor(message = "The OTP challenge has expired. Please request a new one.") {
    super(message);
  }
}

export class MaxOtpAttemptsError extends DomainError {
  readonly code = "MAX_OTP_ATTEMPTS_EXCEEDED";
  constructor(message = "Maximum verification attempts exceeded. Challenge revoked.") {
    super(message);
  }
}

export class UserSuspendedError extends DomainError {
  readonly code = "USER_SUSPENDED";
  constructor(message = "This user account is suspended.") {
    super(message);
  }
}
