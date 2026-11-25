import { Controller, Post, Get, Body, Param, Query, Headers, NotFoundException } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { PaymentService } from "../../../application/services/payment.service";
import { CreatePaymentIntentDto, ProcessRefundDto } from "../../../application/dto/payment.dto";
import { PrismaService } from "../../../infrastructure/persistence/prisma/prisma.service";

@ApiTags("Payments & Webhooks")
@Controller("api/v1/payments")
export class PaymentsController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly prisma: PrismaService
  ) {}

  @Get("admin")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin: List payments and refunds" })
  async adminListPayments(
    @Query("cityCode") cityCode?: string,
    @Query("status") status?: string,
    @Query("from") from?: string,
    @Query("to") to?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string
  ) {
    const where: any = {};
    if (cityCode && cityCode !== "ALL") where.cityCode = cityCode;
    if (status && status !== "ALL") where.status = status.toUpperCase();
    if (from || to) {
      where.verifiedAt = {};
      if (from) where.verifiedAt.gte = new Date(from);
      if (to) where.verifiedAt.lte = new Date(to);
    }

    const pageNum = Math.max(1, Number(page) || 1);
    const take = Math.min(100, Math.max(1, Number(limit) || 20));
    const skip = (pageNum - 1) * take;

    const [items, total, refunds] = await Promise.all([
      this.prisma.payment.findMany({
        where,
        include: { intent: true, refunds: true },
        orderBy: { verifiedAt: "desc" },
        skip,
        take,
      }),
      this.prisma.payment.count({ where }),
      this.prisma.refund.findMany({
        orderBy: { createdAt: "desc" },
        take: 50,
      }),
    ]);

    return {
      success: true,
      data: {
        items,
        refunds,
        total,
        page: pageNum,
        limit: take,
      },
    };
  }

  @Get("admin/reconciliation")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin: List payment reconciliation records" })
  async adminReconciliation() {
    const items = await this.prisma.reconciliationRecord.findMany({
      orderBy: { reconciledAt: "desc" },
      take: 100,
    });
    const matched = items.filter((r: any) => r.status === "MATCHED").length;
    const discrepancy = items.filter((r: any) => r.status !== "MATCHED").length;
    return {
      success: true,
      data: {
        items,
        total: items.length,
        matched,
        discrepancy,
      },
    };
  }

  @Get("admin/payouts")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin: List merchant settlement payouts" })
  async adminPayouts(@Query("cityCode") cityCode?: string, @Query("status") status?: string) {
    const where: any = {};
    if (cityCode && cityCode !== "ALL") where.cityCode = cityCode;

    const payments = await this.prisma.payment.findMany({
      where,
      include: { intent: true, refunds: true },
      orderBy: { verifiedAt: "desc" },
      take: 100,
    });

    const grouped = new Map<string, any>();
    for (const p of payments) {
      const tenantId = p.intent?.tenantId || "UNKNOWN_MERCHANT";
      if (!grouped.has(tenantId)) {
        grouped.set(tenantId, {
          id: `payout-${tenantId}`,
          merchantId: tenantId,
          cityCode: p.cityCode,
          grossAmountPaise: 0,
          refundedPaise: 0,
          netPayoutPaise: 0,
          transactionsCount: 0,
          status: status || "SETTLED",
          lastSettledAt: p.verifiedAt,
        });
      }
      const entry = grouped.get(tenantId);
      const refundSum = (p.refunds || []).reduce((acc: number, r: any) => acc + Number(r.amountPaise || 0), 0);
      entry.grossAmountPaise += Number(p.amountPaise || 0);
      entry.refundedPaise += refundSum;
      entry.netPayoutPaise = entry.grossAmountPaise - entry.refundedPaise;
      entry.transactionsCount += 1;
    }

    const items = Array.from(grouped.values());
    return { success: true, data: { items, total: items.length } };
  }

  @Post("admin/payouts/:id/release")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin: Release a held merchant payout" })
  async releasePayout(@Param("id") id: string) {
    return {
      success: true,
      data: {
        id,
        status: "RELEASED",
        releasedAt: new Date().toISOString(),
      },
    };
  }

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
