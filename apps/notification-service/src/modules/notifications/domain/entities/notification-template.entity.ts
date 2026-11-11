export type NotificationChannel = "SMS" | "WHATSAPP" | "EMAIL" | "PUSH";

export interface TemplateProps {
  id: string;
  code: string;
  channel: NotificationChannel;
  templateBody: string; // e.g. "Namaste {customerName}, your order {orderNumber} is ready for pickup! Token: {tokenNumber}"
}

export class NotificationTemplate {
  constructor(private props: TemplateProps) {}

  get id(): string { return this.props.id; }
  get code(): string { return this.props.code; }
  get channel(): NotificationChannel { return this.props.channel; }
  get templateBody(): string { return this.props.templateBody; }

  render(variables: Record<string, string>): string {
    let text = this.props.templateBody;
    for (const [key, value] of Object.entries(variables)) {
      text = text.replace(new RegExp(`\\{${key}\\}`, "g"), value);
    }
    return text;
  }
}

export interface JobProps {
  id: string;
  recipient: string;
  channel: NotificationChannel;
  renderedMessage: string;
  status: "SENT" | "FAILED";
  sentAt: Date;
}

export class NotificationJob {
  constructor(private props: JobProps) {}

  get id(): string { return this.props.id; }
  get recipient(): string { return this.props.recipient; }
  get channel(): NotificationChannel { return this.props.channel; }
  get renderedMessage(): string { return this.props.renderedMessage; }
  get status(): string { return this.props.status; }
  get sentAt(): Date { return this.props.sentAt; }
}

export abstract class NotificationRepositoryPort {
  abstract saveTemplate(tpl: NotificationTemplate): Promise<void>;
  abstract findTemplateByCode(code: string): Promise<NotificationTemplate | null>;
  abstract saveJob(job: NotificationJob): Promise<void>;
  abstract findJobsByRecipient(recipient: string): Promise<NotificationJob[]>;
}
