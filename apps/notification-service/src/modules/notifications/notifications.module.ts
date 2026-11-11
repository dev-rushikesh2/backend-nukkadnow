import { Module } from "@nestjs/common";
import { NotificationsController } from "./presentation/http/controllers/notifications.controller";
import { NotificationService } from "./application/services/notification.service";
import { NotificationRepositoryPort } from "./domain/entities/notification-template.entity";
import { InMemoryNotificationRepository } from "./infrastructure/persistence/repositories/in-memory-notification.repository";
import { MockChannelAdapter } from "./infrastructure/external-clients/mock-channel.adapter";
import { Msg91SmsAdapter } from "./infrastructure/external-clients/msg91-sms.adapter";
import { WhatsAppCloudAdapter } from "./infrastructure/external-clients/whatsapp-cloud.adapter";
import { NotificationChannelFactory } from "./infrastructure/external-clients/channel-factory.service";

@Module({
  controllers: [NotificationsController],
  providers: [
    NotificationService,
    MockChannelAdapter,
    Msg91SmsAdapter,
    WhatsAppCloudAdapter,
    NotificationChannelFactory,
    {
      provide: NotificationRepositoryPort,
      useClass: InMemoryNotificationRepository,
    },
  ],
  exports: [NotificationService],
})
export class NotificationsModule {}
