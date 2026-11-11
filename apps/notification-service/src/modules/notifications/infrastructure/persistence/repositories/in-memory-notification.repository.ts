import { Injectable } from "@nestjs/common";
import { NotificationRepositoryPort } from "../../../domain/entities/notification-template.entity";
import { NotificationTemplate, NotificationJob } from "../../../domain/entities/notification-template.entity";

@Injectable()
export class InMemoryNotificationRepository implements NotificationRepositoryPort {
  private templates = new Map<string, NotificationTemplate>();
  private jobs: NotificationJob[] = [];

  async saveTemplate(tpl: NotificationTemplate): Promise<void> {
    this.templates.set(tpl.code, tpl);
  }

  async findTemplateByCode(code: string): Promise<NotificationTemplate | null> {
    return this.templates.get(code) || null;
  }

  async saveJob(job: NotificationJob): Promise<void> {
    this.jobs.push(job);
  }

  async findJobsByRecipient(recipient: string): Promise<NotificationJob[]> {
    return this.jobs.filter(j => j.recipient === recipient);
  }
}
