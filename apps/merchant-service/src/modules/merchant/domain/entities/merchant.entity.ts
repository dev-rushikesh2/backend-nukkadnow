export interface MerchantProps {
  id: string;
  organizationName: string;
  legalBusinessName?: string;
  contactName: string;
  contactPhone: string;
  email?: string;
  businessType?: string;
  category?: string;
  description?: string;
  verificationStatus: "PENDING" | "VERIFIED" | "REJECTED";
  createdAt: Date;
  updatedAt: Date;
}

export class Merchant {
  constructor(private props: MerchantProps) {}

  get id(): string { return this.props.id; }
  get organizationName(): string { return this.props.organizationName; }
  get legalBusinessName(): string | undefined { return this.props.legalBusinessName; }
  get contactName(): string { return this.props.contactName; }
  get contactPhone(): string { return this.props.contactPhone; }
  get email(): string | undefined { return this.props.email; }
  get businessType(): string | undefined { return this.props.businessType; }
  get category(): string | undefined { return this.props.category; }
  get description(): string | undefined { return this.props.description; }
  get verificationStatus(): string { return this.props.verificationStatus; }

  verify(): void {
    this.props.verificationStatus = "VERIFIED";
    this.props.updatedAt = new Date();
  }

  reject(): void {
    this.props.verificationStatus = "REJECTED";
    this.props.updatedAt = new Date();
  }
}
