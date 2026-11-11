import { Controller, Post, Get, Body, Param, Headers } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { PaymentService } from "../../../application/services/payment.service";
import { CreatePaymentIntentDto, ProcessRefundDto } from "../../../application/dto/payment.dto";

@ApiTags("Payments & Webhooks")
@Controller("api/v1/payments")
export class PaymentsController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post("intents")
  @ApiOperation({ summary: "Create PSP payment intent for pending order" })
  @ApiResponse({ status: 201, description: "Payment intent initialized" })
  async createIntent(@Body() dto: CreatePaymentIntentDto) {
    return this.paymentService.createPaymentIntent(dto);
  }

  @Post("webhooks/:provider")
  @ApiOperation({ summary: "Cryptographic PSP webhook callback (Razorpay/Cashfree/Mock)" })
  async handleWebhook(
    @Param("provider") provider: string,
    @Body() payload: any,
    @Headers("x-psp-signature") signature?: string
  ) {
    return this.paymentService.handlePspWebhook(provider, payload, signature);
  }

  @Post("refunds")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Process full or partial order refund" })
  async processRefund(@Body() dto: ProcessRefundDto) {
    return this.paymentService.processRefund(dto);
  }

  @Get(":id")
  @ApiOperation({ summary: "Get verified payment status" })
  async getPayment(@Param("id") id: string) {
    return this.paymentService.getPayment(id);
  }
}
