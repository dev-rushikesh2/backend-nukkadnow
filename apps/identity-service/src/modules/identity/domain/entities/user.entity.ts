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
  mfaEnabled?: boolean;
  mfaSecret?: string;
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
  get mfaEnabled(): boolean { return this.props.mfaEnabled === true && Boolean(this.props.mfaSecret); }
  get mfaSecret(): string | undefined { return this.props.mfaSecret; }

  isActive(): boolean {
    return this.props.status === "ACTIVE";
  }

  isMfaEnabled(): boolean {
    return this.props.mfaEnabled === true && Boolean(this.props.mfaSecret);
  }

  enableMfa(secret: string): void {
    this.props.mfaEnabled = true;
    this.props.mfaSecret = secret;
    this.props.updatedAt = new Date();
  }

  disableMfa(): void {
    this.props.mfaEnabled = false;
    this.props.mfaSecret = undefined;
    this.props.updatedAt = new Date();
  }

  setFullName(name: string): void {
    this.props.fullName = name;
    this.props.updatedAt = new Date();
  }

  setRoles(roles: string[]): void {
    this.props.roles = roles;
    this.props.updatedAt = new Date();
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
      mfaEnabled: this.props.mfaEnabled,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    };
  }
}
