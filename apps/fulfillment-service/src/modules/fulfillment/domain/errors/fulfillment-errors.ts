import { DomainError } from "@nukkadnow/platform-kernel";

export class SlotCapacityExceededError extends DomainError {
  readonly code = "SLOT_CAPACITY_EXCEEDED";
  constructor(slotTime: string) {
    super(`Capacity slot '${slotTime}' is fully booked. Please select another time.`);
  }
}

export class SlotNotFoundError extends DomainError {
  readonly code = "SLOT_NOT_FOUND";
  constructor(id: string) {
    super(`Capacity slot '${id}' was not found.`);
  }
}

export class TokenNotFoundError extends DomainError {
  readonly code = "TOKEN_NOT_FOUND";
  constructor(token: string) {
    super(`Pickup token '${token}' was not found.`);
  }
}
