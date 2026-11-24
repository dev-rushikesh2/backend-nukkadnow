import { Injectable } from "@nestjs/common";
import { NotificationRepositoryPort, NotificationTemplate, NotificationJob, NotificationChannel } from "../../../domain/entities/notification-template.entity";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaNotificationRepository implements NotificationRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async saveTemplate(tpl: NotificationTemplate): Promise<void> {
    await this.prisma.notificationTemplate.upsert({
      where: { code: tpl.code },
      create: {
        id: tpl.id,
        code: tpl.code,
        channel: tpl.channel,
        templateBody: tpl.templateBody,
      },
      update: {
        channel: tpl.channel,
        templateBody: tpl.templateBody,
      },
    });
  }

  async findTemplateByCode(code: string): Promise<NotificationTemplate | null> {
    const record = await this.prisma.notificationTemplate.findUnique({
      where: { code },
    });
    return record ? this.toTemplateDomain(record) : null;
  }

  async saveJob(job: NotificationJob): Promise<void> {
    let templateId = job.templateId;
    if (!templateId) {
      // Find template by channel or fallback
      const found = await this.prisma.notificationTemplate.findFirst({
        where: { channel: job.channel },
      });
      if (found) {
        templateId = found.id;
      } else {
        // Create an ad-hoc template
        const adhoc = await this.prisma.notificationTemplate.create({
          data: {
            code: `ADHOC_${job.channel}_${Date.now()}`,
            channel: job.channel,
            templateBody: job.renderedMessage || "System Notification",
          },
        });
        templateId = adhoc.id;
      }
    }

    await this.prisma.notificationJob.create({
      data: {
        id: job.id,
        recipient: job.recipient,
        channel: job.channel,
        templateId: templateId!,
        status: job.status,
        sentAt: job.sentAt,
      },
    });
  }

  async findJobsByRecipient(recipient: string): Promise<NotificationJob[]> {
    const records = await this.prisma.notificationJob.findMany({
      where: { recipient },
      include: { template: true },
      orderBy: { createdAt: "desc" },
    });

    return records.map((r: any) => this.toJobDomain(r));
  }

  private toTemplateDomain(record: any): NotificationTemplate {
    return new NotificationTemplate({
      id: record.id,
      code: record.code,
      channel: record.channel as NotificationChannel,
      templateBody: record.templateBody,
    });
  }

  private toJobDomain(record: any): NotificationJob {
    return new NotificationJob({
      id: record.id,
      recipient: record.recipient,
      channel: record.channel as NotificationChannel,
      renderedMessage: record.template?.templateBody || "",
      status: record.status as any,
      sentAt: record.sentAt || record.createdAt,
      templateId: record.templateId,
    });
  }
}
