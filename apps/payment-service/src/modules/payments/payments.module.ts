import { Module } from "@nestjs/common";
import { PaymentsController } from "./presentation/http/controllers/payments.controller";
import { PaymentService } from "./application/services/payment.service";
import { PaymentRepositoryPort } from "./domain/repositories/payment.repository.port";
import { InMemoryPaymentRepository } from "./infrastructure/persistence/repositories/in-memory-payment.repository";
import { MockPspAdapter } from "./infrastructure/external-clients/mock-psp.adapter";
import { RazorpayAdapter } from "./infrastructure/external-clients/razorpay.adapter";
import { PspClientFactory } from "./infrastructure/external-clients/psp-client-factory.service";

@Module({
  controllers: [PaymentsController],
  providers: [
    PaymentService,
    MockPspAdapter,
    RazorpayAdapter,
    PspClientFactory,
    {
      provide: PaymentRepositoryPort,
      useClass: InMemoryPaymentRepository,
    },
  ],
  exports: [PaymentService],
})
export class PaymentsModule {}
