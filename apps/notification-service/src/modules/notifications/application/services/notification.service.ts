import { Injectable, NotFoundException } from "@nestjs/common";
import { NotificationRepositoryPort, NotificationTemplate, NotificationJob } from "../../domain/entities/notification-template.entity";
import { CreateTemplateDto, SendNotificationDto } from "../dto/notification.dto";
import { NotificationChannelFactory } from "../../infrastructure/external-clients/channel-factory.service";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class NotificationService {
  constructor(
    private readonly notifRepo: NotificationRepositoryPort,
    private readonly channelFactory: NotificationChannelFactory
  ) {
    this.seedDefaultTemplates();
  }

  async createTemplate(dto: CreateTemplateDto): Promise<NotificationTemplate> {
    const tpl = new NotificationTemplate({
      id: UniqueIdentifier.generateV7(),
      code: dto.code,
      channel: dto.channel,
      templateBody: dto.templateBody,
    });
    await this.notifRepo.saveTemplate(tpl);
    return tpl;
  }

  async dispatchNotification(dto: SendNotificationDto) {
    const tpl = await this.notifRepo.findTemplateByCode(dto.templateCode);
    if (!tpl) {
      throw new NotFoundException(`Notification template '${dto.templateCode}' not found.`);
    }

    const renderedMessage = tpl.render(dto.variables);
    const adapter = this.channelFactory.getAdapter(tpl.channel);
    const dispatchResult = await adapter.send(dto.recipient, renderedMessage);

    const job = new NotificationJob({
      id: UniqueIdentifier.generateV7(),
      recipient: dto.recipient,
      channel: tpl.channel,
      renderedMessage,
      status: dispatchResult.success ? "SENT" : "FAILED",
      sentAt: new Date(),
    });

    await this.notifRepo.saveJob(job);

    return {
      success: dispatchResult.success,
      jobId: job.id,
      channel: job.channel,
      provider: dispatchResult.provider,
      providerRef: dispatchResult.providerRef,
      error: dispatchResult.error,
      recipient: job.recipient,
      preview: renderedMessage,
    };
  }

  private seedDefaultTemplates() {
    this.createTemplate({
      code: "ORDER_CONFIRMED",
      channel: "WHATSAPP",
      templateBody: "Namaste! Your order {orderNumber} has been confirmed. Preparing now at {storeName}.",
    });
    this.createTemplate({
      code: "ORDER_READY_PICKUP",
      channel: "WHATSAPP",
      templateBody: "Your order {orderNumber} is READY for pickup! Show Token: {tokenNumber} at counter.",
    });
  }
}
