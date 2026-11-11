export class PhoneNumber {
  private readonly value: string;

  private constructor(rawPhone: string) {
    const cleaned = rawPhone.trim().replace(/[\s-]/g, "");
    const inRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!inRegex.test(cleaned)) {
      throw new Error(`Invalid Indian mobile number format: ${rawPhone}`);
    }
    this.value = cleaned.startsWith("+91") ? cleaned : `+91${cleaned}`;
  }

  static create(raw: string): PhoneNumber {
    return new PhoneNumber(raw);
  }

  getValue(): string {
    return this.value;
  }
}
