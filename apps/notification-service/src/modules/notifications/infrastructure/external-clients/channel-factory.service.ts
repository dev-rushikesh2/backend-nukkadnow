import { Injectable } from "@nestjs/common";
import { ChannelDispatchPort } from "./channel-dispatch.port";
import { MockChannelAdapter } from "./mock-channel.adapter";
import { Msg91SmsAdapter } from "./msg91-sms.adapter";
import { WhatsAppCloudAdapter } from "./whatsapp-cloud.adapter";

@Injectable()
export class NotificationChannelFactory {
  constructor(
    private readonly mockAdapter: MockChannelAdapter,
    private readonly msg91Adapter: Msg91SmsAdapter,
    private readonly waAdapter: WhatsAppCloudAdapter
  ) {}

  getAdapter(channel: "SMS" | "WHATSAPP" | "EMAIL" | "PUSH"): ChannelDispatchPort {
    const provider = process.env.NOTIFICATION_PROVIDER || "MOCK";

    if (provider === "MOCK") {
      return this.mockAdapter;
    }

    if (channel === "WHATSAPP" && process.env.WHATSAPP_API_TOKEN) {
      return this.waAdapter;
    }

    if (channel === "SMS" && process.env.MSG91_AUTH_KEY) {
      return this.msg91Adapter;
    }

    return this.mockAdapter;
  }
}
