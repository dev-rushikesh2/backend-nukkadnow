import { Controller, Get, Post, Patch, Body, Query } from "@nestjs/common";
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

    const role =
      String(body?.audience || "").toUpperCase().includes("MERCHANT")
        ? "MERCHANT"
        : String(body?.audience || "").toUpperCase().includes("CUSTOMER")
          ? "CUSTOMER"
          : "ALL";

    const job = await this.prisma.notificationJob.create({
      data: {
        id: UniqueIdentifier.generateV7(),
        recipient: body?.audience || "ALL_PLATFORM_USERS",
        role,
        title: body?.title || "Platform Announcement",
        message: body?.message || "",
        channel: (body?.channel || "PUSH").toUpperCase(),
        templateId: template.id,
        cityCode: body?.cityCode || "GLOBAL",
        status: "DISPATCHED",
        sentAt: new Date(),
      },
    });

    return { success: true, data: job };
  }

  @Get("feed")
  @ApiOperation({ summary: "Fetch notification feed for a user or merchant" })
  async getFeed(@Query("userId") userId?: string, @Query("role") role?: string, @Query("cityCode") cityCode?: string) {
    const targetRole = String(role || "CUSTOMER").toUpperCase();
    const orFilters: any[] = [{ role: "ALL" }, { role: targetRole }];
    if (userId) orFilters.push({ userId });

    const jobs = await this.prisma.notificationJob.findMany({
      where: {
        OR: orFilters,
        ...(cityCode ? { cityCode: { in: ["GLOBAL", cityCode] } } : {}),
      },
      include: { template: true },
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return jobs.map((j: any) => ({
      id: j.id,
      title: j.title || "NukkadNow Update",
      message: j.message || j.template?.templateBody || "",
      channel: j.channel,
      cityCode: j.cityCode,
      isRead: j.isRead,
      createdAt: j.createdAt,
    }));
  }

  @Patch("read-all")
  @ApiOperation({ summary: "Mark notifications read for a user" })
  async markReadAll(@Body() body: { userId?: string; role?: string }) {
    if (body?.userId) {
      await this.prisma.notificationJob.updateMany({
        where: { userId: body.userId, isRead: false },
        data: { isRead: true },
      });
    }
    return { success: true };
  }

  @Post("device-tokens")
  @ApiOperation({ summary: "Register web/mobile push device token in PostgreSQL" })
  async registerDeviceToken(@Body() body: { userId: string; role?: string; token: string; platform?: string }) {
    if (!body?.token || !body?.userId) {
      return { success: true, registered: false };
    }
    await this.prisma.pushDeviceToken.upsert({
      where: { token: body.token },
      create: {
        id: UniqueIdentifier.generateV7(),
        userId: body.userId,
        role: (body.role || "CUSTOMER").toUpperCase(),
        token: body.token,
        platform: body.platform || "web",
      },
      update: {
        userId: body.userId,
        role: (body.role || "CUSTOMER").toUpperCase(),
        platform: body.platform || "web",
      },
    });
    return { success: true, registered: true };
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
