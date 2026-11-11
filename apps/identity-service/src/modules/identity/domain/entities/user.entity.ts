import { PhoneNumber } from "../value-objects/phone-number.vo";

export interface UserProps {
  id: string;
  phoneNumber: PhoneNumber;
  fullName?: string;
  email?: string;
  status: "ACTIVE" | "SUSPENDED";
  roles: string[];
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

  isActive(): boolean {
    return this.props.status === "ACTIVE";
  }

  suspend(): void {
    this.props.status = "SUSPENDED";
    this.props.updatedAt = new Date();
  }
}
