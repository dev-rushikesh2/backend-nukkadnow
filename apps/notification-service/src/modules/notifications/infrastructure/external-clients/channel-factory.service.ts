import { Injectable } from "@nestjs/common";
import { ChannelDispatchPort } from "./channel-dispatch.port";
import { MockChannelAdapter } from "./mock-channel.adapter";
import { Msg91SmsAdapter } from "./msg91-sms.adapter";
import { WhatsAppCloudAdapter } from "./whatsapp-cloud.adapter";
import { SmtpEmailAdapter } from "./smtp-email.adapter";
import { FcmPushAdapter } from "./fcm-push.adapter";

@Injectable()
export class NotificationChannelFactory {
  constructor(
    private readonly mockAdapter: MockChannelAdapter,
    private readonly msg91Adapter: Msg91SmsAdapter,
    private readonly waAdapter: WhatsAppCloudAdapter,
    private readonly emailAdapter?: SmtpEmailAdapter,
    private readonly fcmPushAdapter?: FcmPushAdapter
  ) {}

  getAdapter(channel: "SMS" | "WHATSAPP" | "EMAIL" | "PUSH"): ChannelDispatchPort {
    if (channel === "EMAIL") {
      if (this.emailAdapter) return this.emailAdapter;
      if (process.env.NODE_ENV === "production") throw new Error("SmtpEmailAdapter not configured");
      return this.mockAdapter;
    }

    if (channel === "PUSH") {
      if (this.fcmPushAdapter) return this.fcmPushAdapter;
      if (process.env.NODE_ENV === "production") throw new Error("FcmPushAdapter not configured");
      return this.mockAdapter;
    }

    const provider = process.env.NOTIFICATION_PROVIDER || "MOCK";

    if (process.env.NODE_ENV === "production" && provider === "MOCK") {
      throw new Error("MockChannelAdapter is not permitted in production environment.");
    }

    if (provider === "MOCK") {
      return this.mockAdapter;
    }

    if (channel === "WHATSAPP") {
      if (process.env.WHATSAPP_API_TOKEN) {
        return this.waAdapter;
      }
      if (process.env.NODE_ENV === "production") {
        throw new Error("WHATSAPP_API_TOKEN is not configured in production environment.");
      }
    }

    if (channel === "SMS") {
      if (process.env.MSG91_AUTH_KEY) {
        return this.msg91Adapter;
      }
      if (process.env.NODE_ENV === "production") {
        throw new Error("MSG91_AUTH_KEY is not configured in production environment.");
      }
    }

    if (process.env.NODE_ENV === "production") {
      throw new Error(`No notification adapter configured for channel ${channel} in production.`);
    }

    return this.mockAdapter;
  }
}
