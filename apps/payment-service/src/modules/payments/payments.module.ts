import { Module } from "@nestjs/common";
import { PaymentsController } from "./presentation/http/controllers/payments.controller";
import { PaymentService } from "./application/services/payment.service";
import { PaymentRepositoryPort } from "./domain/repositories/payment.repository.port";
import { PrismaPaymentRepository } from "./infrastructure/persistence/repositories/prisma-payment.repository";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";
import { MockPspAdapter } from "./infrastructure/external-clients/mock-psp.adapter";
import { RazorpayAdapter } from "./infrastructure/external-clients/razorpay.adapter";
import { PspClientFactory } from "./infrastructure/external-clients/psp-client-factory.service";

@Module({
  controllers: [PaymentsController],
  providers: [
    PrismaService,
    PaymentService,
    MockPspAdapter,
    RazorpayAdapter,
    PspClientFactory,
    {
      provide: PaymentRepositoryPort,
      useClass: PrismaPaymentRepository,
    },
  ],
  exports: [PaymentService, PrismaService],
})
export class PaymentsModule {}
