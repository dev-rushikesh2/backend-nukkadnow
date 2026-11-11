import { NotificationService } from "../../src/modules/notifications/application/services/notification.service";
import { InMemoryNotificationRepository } from "../../src/modules/notifications/infrastructure/persistence/repositories/in-memory-notification.repository";
import { NotificationChannelFactory } from "../../src/modules/notifications/infrastructure/external-clients/channel-factory.service";
import { MockChannelAdapter } from "../../src/modules/notifications/infrastructure/external-clients/mock-channel.adapter";
import { Msg91SmsAdapter } from "../../src/modules/notifications/infrastructure/external-clients/msg91-sms.adapter";
import { WhatsAppCloudAdapter } from "../../src/modules/notifications/infrastructure/external-clients/whatsapp-cloud.adapter";
import { NotFoundException } from "@nestjs/common";

describe("Notification Service (Sprint 12)", () => {
  let service: NotificationService;
  let repo: InMemoryNotificationRepository;

  beforeEach(() => {
    repo = new InMemoryNotificationRepository();
    const mock = new MockChannelAdapter();
    const msg91 = new Msg91SmsAdapter();
    const wa = new WhatsAppCloudAdapter();
    const factory = new NotificationChannelFactory(mock, msg91, wa);
    service = new NotificationService(repo, factory);
  });

  it("should render template with variables and dispatch message successfully", async () => {
    const result = await service.dispatchNotification({
      recipient: "+919876543210",
      templateCode: "ORDER_READY_PICKUP",
      variables: {
        orderNumber: "ORD-998877",
        tokenNumber: "A-05",
      },
    });

    expect(result.success).toBe(true);
    expect(result.channel).toBe("WHATSAPP");
    expect(result.provider).toBe("MOCK");
    expect(result.preview).toContain("ORD-998877");
    expect(result.preview).toContain("Token: A-05");
  });

  it("should throw NotFoundException on non-existent template code", async () => {
    await expect(
      service.dispatchNotification({
        recipient: "+919876543210",
        templateCode: "UNKNOWN_TEMPLATE",
        variables: {},
      })
    ).rejects.toThrow(NotFoundException);
  });
});
