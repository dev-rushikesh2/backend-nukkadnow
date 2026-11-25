import { Controller, Get, Post, Put, Delete, Body, Param, Query, Req, UnauthorizedException, NotFoundException } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { SubscriptionService } from "../../../application/services/subscription.service";
import { SubscribePlanDto } from "../../../application/dto/subscription.dto";
import { PrismaService } from "../../../infrastructure/persistence/prisma/prisma.service";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@ApiTags("SaaS Subscriptions & Entitlements")
@Controller("api/v1/subscriptions")
export class SubscriptionsController {
  constructor(
    private readonly subService: SubscriptionService,
    private readonly prisma: PrismaService
  ) {}

  @Get("merchant/:tenantId")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get merchant SaaS subscription and available plans" })
  async getMerchantSubscription(@Param("tenantId") tenantId: string) {
    const [subscription, plans] = await Promise.all([
      this.prisma.merchantSubscription.findUnique({
        where: { merchantId: tenantId },
        include: { plan: true, invoices: true },
      }),
      this.subService.listPlans(),
    ]);
    return { success: true, data: { subscription, plans } };
  }

  @Get("admin")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin: List all merchant subscriptions" })
  async adminListSubscriptions(@Query("status") status?: string, @Query("page") page?: string, @Query("limit") limit?: string) {
    const where: any = {};
    if (status && status !== "ALL") where.status = status.toUpperCase();

    const pageNum = Math.max(1, Number(page) || 1);
    const take = Math.min(100, Math.max(1, Number(limit) || 20));
    const [items, total] = await Promise.all([
      this.prisma.merchantSubscription.findMany({
        where,
        include: { plan: true, invoices: true },
        skip: (pageNum - 1) * take,
        take,
      }),
      this.prisma.merchantSubscription.count({ where }),
    ]);

    return { success: true, data: { items, total, page: pageNum, limit: take } };
  }

  @Get("admin/commission-rules")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin: List commission rules" })
  async listCommissionRules() {
    const items = await this.prisma.commissionRule.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: { items, total: items.length } };
  }

  @Post("admin/commission-rules")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin: Create commission rule" })
  async createCommissionRule(@Body() body: any) {
    const created = await this.prisma.commissionRule.create({
      data: {
        id: UniqueIdentifier.generateV7(),
        name: body.name || "Standard Commission",
        category: body.category || "ALL",
        cityCode: body.cityCode || "ALL",
        rateBps: Number(body.rateBps ?? (body.ratePercent ? Number(body.ratePercent) * 100 : 500)),
        flatFeePaise: Number(body.flatFeePaise ?? 0),
        minOrderPaise: Number(body.minOrderPaise ?? 0),
        isActive: body.isActive !== undefined ? Boolean(body.isActive) : true,
      },
    });
    return { success: true, data: created };
  }

  @Put("admin/commission-rules/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin: Update commission rule" })
  async updateCommissionRule(@Param("id") id: string, @Body() body: any) {
    const existing = await this.prisma.commissionRule.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException(`Commission rule '${id}' not found`);
    const updated = await this.prisma.commissionRule.update({
      where: { id },
      data: {
        ...(body.name !== undefined && { name: body.name }),
        ...(body.category !== undefined && { category: body.category }),
        ...(body.cityCode !== undefined && { cityCode: body.cityCode }),
        ...(body.rateBps !== undefined && { rateBps: Number(body.rateBps) }),
        ...(body.flatFeePaise !== undefined && { flatFeePaise: Number(body.flatFeePaise) }),
        ...(body.isActive !== undefined && { isActive: Boolean(body.isActive) }),
      },
    });
    return { success: true, data: updated };
  }

  @Delete("admin/commission-rules/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin: Deactivate/delete commission rule" })
  async deleteCommissionRule(@Param("id") id: string) {
    const existing = await this.prisma.commissionRule.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException(`Commission rule '${id}' not found`);
    await this.prisma.commissionRule.delete({ where: { id } });
    return { success: true, data: { deleted: true, id } };
  }

  @Get("plans")
  @ApiOperation({ summary: "List available merchant SaaS subscription tiers" })
  async getPlans() {
    return this.subService.listPlans();
  }

  @Post("subscribe")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Subscribe merchant to SaaS tier" })
  @ApiResponse({ status: 201, description: "Subscribed" })
  async subscribe(@Body() dto: SubscribePlanDto, @Req() req: any) {
    if (!req.user?.tenantId) throw new UnauthorizedException("Merchant authentication required");
    return this.subService.subscribe(req.user.tenantId, dto);
  }

  @Get("entitlements/:merchantId/:feature")
  @ApiOperation({ summary: "Authoritative server-side entitlement check" })
  async checkEntitlement(
    @Param("merchantId") merchantId: string,
    @Param("feature") feature: "QR_ORDERING" | "MAX_PRODUCTS"
  ) {
    return this.subService.checkEntitlement(merchantId, feature);
  }
}
