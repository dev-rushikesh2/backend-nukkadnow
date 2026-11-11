import { Injectable } from "@nestjs/common";
import { PspClientPort } from "./psp-client.port";
import { MockPspAdapter } from "./mock-psp.adapter";
import { RazorpayAdapter } from "./razorpay.adapter";

@Injectable()
export class PspClientFactory {
  constructor(
    private readonly mockAdapter: MockPspAdapter,
    private readonly rzpAdapter: RazorpayAdapter
  ) {}

  getClient(provider?: string): PspClientPort {
    const selected = (provider || process.env.PAYMENT_PROVIDER || "MOCK").toUpperCase();
    if (selected === "RAZORPAY") {
      return this.rzpAdapter;
    }
    return this.mockAdapter;
  }
}
