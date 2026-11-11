export interface ChannelDispatchResult {
  success: boolean;
  provider: string;
  providerRef?: string;
  error?: string;
}

export abstract class ChannelDispatchPort {
  abstract send(recipient: string, message: string): Promise<ChannelDispatchResult>;
}
