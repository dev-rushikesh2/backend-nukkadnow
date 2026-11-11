export type Result<T, E = Error> = Ok<T, E> | Err<T, E>;

export class Ok<T, E> {
  readonly isOk = true;
  readonly isErr = false;
  constructor(readonly value: T) {}

  unwrap(): T {
    return this.value;
  }

  unwrapOr(_default: T): T {
    return this.value;
  }
}

export class Err<T, E> {
  readonly isOk = false;
  readonly isErr = true;
  constructor(readonly error: E) {}

  unwrap(): T {
    throw this.error instanceof Error ? this.error : new Error(String(this.error));
  }

  unwrapOr(defaultValue: T): T {
    return defaultValue;
  }
}

export function ok<T, E = Error>(value: T): Result<T, E> {
  return new Ok(value);
}

export function err<T = never, E = Error>(error: E): Result<T, E> {
  return new Err(error);
}
