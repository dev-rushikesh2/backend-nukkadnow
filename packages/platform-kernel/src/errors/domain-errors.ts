export abstract class DomainError extends Error {
  abstract readonly code: string;
  readonly occurredAt: Date;

  constructor(message: string, readonly details?: Record<string, unknown>) {
    super(message);
    this.name = this.constructor.name;
    this.occurredAt = new Date();
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends DomainError {
  readonly code = "RESOURCE_NOT_FOUND";
}

export class ConflictError extends DomainError {
  readonly code = "RESOURCE_CONFLICT";
}

export class ValidationError extends DomainError {
  readonly code = "VALIDATION_FAILED";
}

export class UnauthorizedError extends DomainError {
  readonly code = "UNAUTHORIZED";
}

export class ForbiddenError extends DomainError {
  readonly code = "FORBIDDEN";
}

export class PreconditionFailedError extends DomainError {
  readonly code = "PRECONDITION_FAILED";
}
