export interface Clock {
  now(): Date;
  timestampMs(): number;
}

export class SystemClock implements Clock {
  now(): Date {
    return new Date();
  }

  timestampMs(): number {
    return Date.now();
  }
}

export class FrozenClock implements Clock {
  constructor(private frozenDate: Date) {}

  now(): Date {
    return new Date(this.frozenDate.getTime());
  }

  timestampMs(): number {
    return this.frozenDate.getTime();
  }

  advanceByMs(ms: number): void {
    this.frozenDate = new Date(this.frozenDate.getTime() + ms);
  }
}
