import { Controller, Post, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { NotificationService } from "../../../application/services/notification.service";
import { CreateTemplateDto, SendNotificationDto } from "../../../application/dto/notification.dto";
import { PrismaService } from "../../../infrastructure/persistence/prisma/prisma.service";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@ApiTags("Notifications & Messaging")
@Controller("api/v1/notifications")
export class NotificationsController {
  constructor(
    private readonly notifService: NotificationService,
    private readonly prisma: PrismaService
  ) {}

  @Post("admin/broadcast")
  @ApiOperation({ summary: "Admin: Send a platform-wide broadcast notification" })
  async adminBroadcast(@Body() body: { title?: string; message?: string; channel?: string; cityCode?: string; audience?: string }) {
    const templateCode = "ADMIN_PLATFORM_BROADCAST";
    const template = await this.prisma.notificationTemplate.upsert({
      where: { code: templateCode },
      create: {
        id: UniqueIdentifier.generateV7(),
        code: templateCode,
        channel: (body?.channel || "PUSH").toUpperCase(),
        templateBody: body?.message || "Platform Announcement",
      },
      update: {
        templateBody: body?.message || "Platform Announcement",
      },
    });

    const job = await this.prisma.notificationJob.create({
      data: {
        id: UniqueIdentifier.generateV7(),
        recipient: body?.audience || "ALL_PLATFORM_USERS",
        channel: (body?.channel || "PUSH").toUpperCase(),
        templateId: template.id,
        cityCode: body?.cityCode || "GLOBAL",
        status: "DISPATCHED",
        sentAt: new Date(),
      },
    });

    return { success: true, data: job };
  }

  @Post("templates")
  @ApiOperation({ summary: "Register or update notification template" })
  @ApiResponse({ status: 201, description: "Template created" })
  async createTemplate(@Body() dto: CreateTemplateDto) {
    return this.notifService.createTemplate(dto);
  }

  @Post("dispatch")
  @ApiOperation({ summary: "Dispatch multi-channel message to customer or merchant" })
  async dispatch(@Body() dto: SendNotificationDto) {
    return this.notifService.dispatchNotification(dto);
  }

  @Post("send-email-otp")
  @ApiOperation({ summary: "Internal: Send OTP email via SMTP" })
  async sendEmailOtp(@Body() body: { email: string; otp: string }) {
    return this.notifService.sendEmailOtp(body.email, body.otp);
  }
}
