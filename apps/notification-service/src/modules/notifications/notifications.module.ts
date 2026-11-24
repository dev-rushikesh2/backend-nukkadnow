import { Module } from "@nestjs/common";
import { NotificationsController } from "./presentation/http/controllers/notifications.controller";
import { NotificationService } from "./application/services/notification.service";
import { NotificationRepositoryPort } from "./domain/entities/notification-template.entity";
import { PrismaNotificationRepository } from "./infrastructure/persistence/repositories/prisma-notification.repository";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";
import { MockChannelAdapter } from "./infrastructure/external-clients/mock-channel.adapter";
import { Msg91SmsAdapter } from "./infrastructure/external-clients/msg91-sms.adapter";
import { WhatsAppCloudAdapter } from "./infrastructure/external-clients/whatsapp-cloud.adapter";
import { SmtpEmailAdapter } from "./infrastructure/external-clients/smtp-email.adapter";
import { FcmPushAdapter } from "./infrastructure/external-clients/fcm-push.adapter";
import { NotificationChannelFactory } from "./infrastructure/external-clients/channel-factory.service";

@Module({
  controllers: [NotificationsController],
  providers: [
    PrismaService,
    NotificationService,
    MockChannelAdapter,
    Msg91SmsAdapter,
    WhatsAppCloudAdapter,
    SmtpEmailAdapter,
    FcmPushAdapter,
    NotificationChannelFactory,
    {
      provide: NotificationRepositoryPort,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationService, SmtpEmailAdapter, FcmPushAdapter, PrismaService],
})
export class NotificationsModule {}
