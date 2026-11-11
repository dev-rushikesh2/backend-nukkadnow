export interface SessionProps {
  id: string;
  userId: string;
  tokenHash: string;
  userAgent?: string;
  ipAddress?: string;
  expiresAt: Date;
  isRevoked: boolean;
  createdAt: Date;
}

export class Session {
  constructor(private props: SessionProps) {}

  get id(): string { return this.props.id; }
  get userId(): string { return this.props.userId; }
  get tokenHash(): string { return this.props.tokenHash; }
  get expiresAt(): Date { return this.props.expiresAt; }
  get isRevoked(): boolean { return this.props.isRevoked; }

  isValid(): boolean {
    return !this.props.isRevoked && this.props.expiresAt.getTime() > Date.now();
  }

  revoke(): void {
    this.props.isRevoked = true;
  }
}
