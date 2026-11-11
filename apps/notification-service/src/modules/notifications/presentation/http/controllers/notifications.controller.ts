import { Controller, Post, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { NotificationService } from "../../../application/services/notification.service";
import { CreateTemplateDto, SendNotificationDto } from "../../../application/dto/notification.dto";

@ApiTags("Notifications & Messaging")
@Controller("api/v1/notifications")
export class NotificationsController {
  constructor(private readonly notifService: NotificationService) {}

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
}
