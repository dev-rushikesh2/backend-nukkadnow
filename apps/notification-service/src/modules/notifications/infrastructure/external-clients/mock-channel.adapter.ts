import { Injectable } from "@nestjs/common";
import { ChannelDispatchPort, ChannelDispatchResult } from "./channel-dispatch.port";
import { StructuredLogger } from "@nukkadnow/observability";

@Injectable()
export class MockChannelAdapter implements ChannelDispatchPort {
  private readonly logger = new StructuredLogger("mock-notification-channel");

  async send(recipient: string, message: string): Promise<ChannelDispatchResult> {
    this.logger.info(`[MOCK DISPATCH] To: ${recipient} | Message: ${message}`);
    return {
      success: true,
      provider: "MOCK",
      providerRef: `mock_ref_${Date.now()}`,
    };
  }
}
