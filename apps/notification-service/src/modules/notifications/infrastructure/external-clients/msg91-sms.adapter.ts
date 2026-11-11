import { Injectable } from "@nestjs/common";
import { ChannelDispatchPort, ChannelDispatchResult } from "./channel-dispatch.port";
import { StructuredLogger } from "@nukkadnow/observability";

@Injectable()
export class Msg91SmsAdapter implements ChannelDispatchPort {
  private readonly logger = new StructuredLogger("msg91-sms-adapter");
  private readonly authKey = process.env.MSG91_AUTH_KEY || "";
  private readonly senderId = process.env.MSG91_SENDER_ID || "NUKKAD";
  private readonly dltTemplateId = process.env.MSG91_DLT_TE_ID || "";

  async send(recipient: string, message: string): Promise<ChannelDispatchResult> {
    if (!this.authKey) {
      this.logger.warn("MSG91_AUTH_KEY is not configured. Falling back to simulated send.");
      return { success: true, provider: "MSG91_SIMULATED", providerRef: `sim_${Date.now()}` };
    }

    try {
      // MSG91 Indian SMS REST API endpoint
      const response = await fetch("https://control.msg91.com/api/v5/flow/", {
        method: "POST",
        headers: {
          "authkey": this.authKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          template_id: this.dltTemplateId,
          short_url: "0",
          recipients: [
            {
              mobiles: recipient.replace("+", ""),
              message: message,
            },
          ],
        }),
      });

      const data = (await response.json()) as any;
      if (response.ok && data.type === "success") {
        return { success: true, provider: "MSG91", providerRef: data.message };
      }
      return { success: false, provider: "MSG91", error: data.message || "Failed to dispatch SMS" };
    } catch (err: any) {
      this.logger.error("Failed to dispatch via MSG91", err);
      return { success: false, provider: "MSG91", error: err.message };
    }
  }
}
