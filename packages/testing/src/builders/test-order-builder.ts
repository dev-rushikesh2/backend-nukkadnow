import { UniqueIdentifier, Money } from "@nukkadnow/platform-kernel";

export class TestOrderBuilder {
  private orderId = UniqueIdentifier.generateV7();
  private customerId = UniqueIdentifier.generateV7();
  private tenantId = UniqueIdentifier.generateV7();
  private outletId = UniqueIdentifier.generateV7();
  private amountPaise = 25000; // Rs. 250.00

  withTenantId(id: string): this {
    this.tenantId = id;
    return this;
  }

  withOutletId(id: string): this {
    this.outletId = id;
    return this;
  }

  withAmountPaise(paise: number): this {
    this.amountPaise = paise;
    return this;
  }

  build() {
    return {
      orderId: this.orderId,
      customerId: this.customerId,
      tenantId: this.tenantId,
      outletId: this.outletId,
      totalMoney: Money.fromPaise(this.amountPaise),
      status: "PENDING_PAYMENT",
      createdAt: new Date(),
    };
  }
}
