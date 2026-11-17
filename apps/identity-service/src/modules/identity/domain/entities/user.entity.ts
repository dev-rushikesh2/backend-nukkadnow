import { PhoneNumber } from "../value-objects/phone-number.vo";

export interface UserProps {
  id: string;
  phoneNumber: PhoneNumber;
  fullName?: string;
  email?: string;
  status: "ACTIVE" | "SUSPENDED";
  roles: string[];
  tenantId?: string; // Merchant organization ID
  outletId?: string; // Specific primary outlet ID
  merchantName?: string; // Cached organization display name
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  constructor(private props: UserProps) {}

  get id(): string { return this.props.id; }
  get phoneNumber(): string { return this.props.phoneNumber.getValue(); }
  get fullName(): string | undefined { return this.props.fullName; }
  get email(): string | undefined { return this.props.email; }
  get status(): string { return this.props.status; }
  get roles(): string[] { return this.props.roles; }
  get tenantId(): string | undefined { return this.props.tenantId; }
  get outletId(): string | undefined { return this.props.outletId; }
  get merchantName(): string | undefined { return this.props.merchantName; }

  isActive(): boolean {
    return this.props.status === "ACTIVE";
  }

  suspend(): void {
    this.props.status = "SUSPENDED";
    this.props.updatedAt = new Date();
  }

  setTenantContext(tenantId: string, outletId?: string, merchantName?: string): void {
    this.props.tenantId = tenantId;
    if (outletId) this.props.outletId = outletId;
    if (merchantName) this.props.merchantName = merchantName;
    this.props.updatedAt = new Date();
  }

  toPrimitives(): Record<string, any> {
    return {
      id: this.props.id,
      phoneNumber: this.phoneNumber,
      fullName: this.props.fullName,
      email: this.props.email,
      status: this.props.status,
      roles: this.props.roles,
      tenantId: this.props.tenantId,
      outletId: this.props.outletId,
      merchantName: this.props.merchantName,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    };
  }
}
