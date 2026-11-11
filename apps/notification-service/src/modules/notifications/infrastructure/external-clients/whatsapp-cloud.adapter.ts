import { Injectable } from "@nestjs/common";
import { ChannelDispatchPort, ChannelDispatchResult } from "./channel-dispatch.port";
import { StructuredLogger } from "@nukkadnow/observability";

@Injectable()
export class WhatsAppCloudAdapter implements ChannelDispatchPort {
  private readonly logger = new StructuredLogger("whatsapp-cloud-adapter");
  private readonly accessToken = process.env.WHATSAPP_API_TOKEN || "";
  private readonly phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID || "";

  async send(recipient: string, message: string): Promise<ChannelDispatchResult> {
    if (!this.accessToken || !this.phoneNumberId) {
      this.logger.warn("WhatsApp credentials not configured. Falling back to simulated send.");
      return { success: true, provider: "WHATSAPP_SIMULATED", providerRef: `sim_wa_${Date.now()}` };
    }

    try {
      const cleanPhone = recipient.replace("+", "").replace(/[\s-]/g, "");
      const url = `https://graph.facebook.com/v20.0/${this.phoneNumberId}/messages`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: cleanPhone,
          type: "text",
          text: { preview_url: false, body: message },
        }),
      });

      const data = (await response.json()) as any;
      if (response.ok && data.messages && data.messages.length > 0) {
        return { success: true, provider: "WHATSAPP_CLOUD", providerRef: data.messages[0].id };
      }
      return { success: false, provider: "WHATSAPP_CLOUD", error: JSON.stringify(data.error || "Unknown error") };
    } catch (err: any) {
      this.logger.error("Failed to send WhatsApp message", err);
      return { success: false, provider: "WHATSAPP_CLOUD", error: err.message };
    }
  }
}
