export interface MoneyProps {
  amountPaise: number;
  currency: string;
}

export class Money {
  private readonly _amountPaise: number;
  private readonly _currency: string;

  private constructor(amountPaise: number, currency: string = "INR") {
    if (!Number.isInteger(amountPaise)) {
      throw new Error(`Monetary amount in paise must be an integer, received: ${amountPaise}`);
    }
    this._amountPaise = amountPaise;
    this._currency = currency.toUpperCase();
  }

  static fromPaise(amountPaise: number, currency: string = "INR"): Money {
    return new Money(amountPaise, currency);
  }

  static fromRupees(rupees: number, currency: string = "INR"): Money {
    return new Money(Math.round(rupees * 100), currency);
  }

  static zero(currency: string = "INR"): Money {
    return new Money(0, currency);
  }

  get amountPaise(): number {
    return this._amountPaise;
  }

  get currency(): string {
    return this._currency;
  }

  get inRupees(): number {
    return this._amountPaise / 100;
  }

  add(other: Money): Money {
    this.assertSameCurrency(other);
    return new Money(this._amountPaise + other._amountPaise, this._currency);
  }

  subtract(other: Money): Money {
    this.assertSameCurrency(other);
    return new Money(this._amountPaise - other._amountPaise, this._currency);
  }

  multiply(factor: number): Money {
    return new Money(Math.round(this._amountPaise * factor), this._currency);
  }

  isGreaterThan(other: Money): boolean {
    this.assertSameCurrency(other);
    return this._amountPaise > other._amountPaise;
  }

  isLessThan(other: Money): boolean {
    this.assertSameCurrency(other);
    return this._amountPaise < other._amountPaise;
  }

  isZero(): boolean {
    return this._amountPaise === 0;
  }

  format(): string {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: this._currency,
    }).format(this.inRupees);
  }

  private assertSameCurrency(other: Money): void {
    if (this._currency !== other._currency) {
      throw new Error(`Currency mismatch: ${this._currency} vs ${other._currency}`);
    }
  }
}
