import { Controller, Get, Post, Patch, Body, Param, Query, NotFoundException } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { SupportService } from "../../../application/services/support.service";
import { CreateReviewDto, CreateTicketDto, AddMessageDto } from "../../../application/dto/review-support.dto";
import { PrismaService } from "../../../infrastructure/persistence/prisma/prisma.service";

@ApiTags("Support & Reviews")
@Controller("api/v1/support")
export class supportController {
  constructor(
    private readonly supportService: SupportService,
    private readonly prisma: PrismaService
  ) {}

  @Get("ping")
  @ApiOperation({ summary: "Domain probe" })
  ping() {
    return { message: "Hello from support domain" };
  }

  // =========================================================================
  // ADMIN: SUPPORT TICKETS & REVIEWS MODERATION
  // =========================================================================

  @Get("admin/tickets")
  @ApiOperation({ summary: "Admin: List support tickets & merchant requests" })
  async adminListTickets(
    @Query("status") status?: string,
    @Query("priority") priority?: string,
    @Query("cityCode") cityCode?: string,
    @Query("role") role?: string,
    @Query("merchantId") merchantId?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string
  ) {
    const where: any = {};
    if (status && status !== "ALL") where.status = status.toUpperCase();
    if (priority && priority !== "ALL") where.priority = priority.toUpperCase();
    if (cityCode && cityCode !== "ALL") where.cityCode = cityCode;
    if (merchantId) where.tenantId = merchantId;
    if (role && role.toUpperCase() === "MERCHANT") {
      where.tenantId = { not: null };
    }

    const pageNum = Math.max(1, Number(page) || 1);
    const take = Math.min(100, Math.max(1, Number(limit) || 20));
    const [items, total, openCount] = await Promise.all([
      this.prisma.supportTicket.findMany({
        where,
        include: { messages: true },
        orderBy: { createdAt: "desc" },
        skip: (pageNum - 1) * take,
        take,
      }),
      this.prisma.supportTicket.count({ where }),
      this.prisma.supportTicket.count({ where: { status: "OPEN" } }),
    ]);

    return {
      success: true,
      data: {
        items,
        total,
        page: pageNum,
        limit: take,
        metrics: {
          totalRequests: total,
          openTickets: openCount,
        },
      },
    };
  }

  @Get("tickets/:id")
  @ApiOperation({ summary: "Admin: Get support ticket detail" })
  async adminGetTicket(@Param("id") id: string) {
    const ticket = await this.prisma.supportTicket.findFirst({
      where: { OR: [{ id }, { ticketNumber: id }] },
      include: { messages: true },
    });
    if (!ticket) throw new NotFoundException(`Support ticket '${id}' not found`);
    return { success: true, data: ticket };
  }

  @Patch("tickets/:id/status")
  @ApiOperation({ summary: "Admin: Update support ticket status" })
  async adminUpdateTicketStatus(@Param("id") id: string, @Body() body: { status?: string; remarks?: string }) {
    const ticket = await this.prisma.supportTicket.findFirst({
      where: { OR: [{ id }, { ticketNumber: id }] },
    });
    if (!ticket) throw new NotFoundException(`Support ticket '${id}' not found`);
    const updated = await this.prisma.supportTicket.update({
      where: { id: ticket.id },
      data: { status: (body?.status || "RESOLVED").toUpperCase() },
      include: { messages: true },
    });
    return { success: true, data: updated };
  }

  @Get("admin/reviews")
  @ApiOperation({ summary: "Admin: List reviews for moderation" })
  async adminListReviews(
    @Query("cityCode") cityCode?: string,
    @Query("isModerated") isModerated?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string
  ) {
    const where: any = {};
    if (cityCode && cityCode !== "ALL") where.cityCode = cityCode;
    if (isModerated !== undefined && isModerated !== "") {
      where.isModerated = isModerated === "true";
    }

    const pageNum = Math.max(1, Number(page) || 1);
    const take = Math.min(100, Math.max(1, Number(limit) || 20));
    const [items, total] = await Promise.all([
      this.prisma.review.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (pageNum - 1) * take,
        take,
      }),
      this.prisma.review.count({ where }),
    ]);

    return { success: true, data: { items, total, page: pageNum, limit: take } };
  }

  @Post("reviews/:id/moderate")
  @ApiOperation({ summary: "Admin: Approve or remove a review" })
  async adminModerateReview(@Param("id") id: string, @Body() body: { action: "APPROVE" | "REMOVE"; reason?: string }) {
    const review = await this.prisma.review.findUnique({ where: { id } });
    if (!review) throw new NotFoundException(`Review '${id}' not found`);
    if (body?.action === "REMOVE") {
      await this.prisma.review.delete({ where: { id } });
      return { success: true, data: { id, removed: true } };
    }
    const updated = await this.prisma.review.update({
      where: { id },
      data: { isModerated: true },
    });
    return { success: true, data: updated };
  }

  @Post("reviews")
  @ApiOperation({ summary: "Submit a customer review for an order or purchased product" })
  @ApiResponse({ status: 201, description: "Review submitted" })
  async createReview(@Body() dto: CreateReviewDto) {
    return this.supportService.createReview(dto);
  }

  @Get("reviews/summaries")
  @ApiOperation({ summary: "Get aggregated ratings for all reviewed outlets and products" })
  async getRatingSummaries() {
    return this.supportService.getAllRatingSummaries();
  }

  @Get("reviews/outlet/:outletId")
  @ApiOperation({ summary: "Get aggregated rating and review list for an outlet" })
  async getOutletReviews(@Param("outletId") outletId: string) {
    return this.supportService.getOutletReviews(outletId);
  }

  @Get("reviews/product/:productId")
  @ApiOperation({ summary: "Get aggregated rating and review list for a product" })
  async getProductReviews(@Param("productId") productId: string) {
    return this.supportService.getProductReviews(productId);
  }

  @Get("reviews/customer/:customerId")
  @ApiOperation({ summary: "List all reviews submitted by a customer" })
  async getCustomerReviews(@Param("customerId") customerId: string) {
    return this.supportService.getCustomerReviews(customerId);
  }

  @Post("tickets")
  @ApiOperation({ summary: "Open a customer support ticket" })
  @ApiResponse({ status: 201, description: "Ticket created" })
  async createTicket(@Body() dto: CreateTicketDto) {
    return this.supportService.createTicket(dto);
  }

  @Get("tickets/customer/:customerId")
  @ApiOperation({ summary: "List customer support tickets" })
  async getCustomerTickets(@Param("customerId") customerId: string) {
    return this.supportService.getCustomerTickets(customerId);
  }

  @Post("tickets/:ticketId/messages")
  @ApiOperation({ summary: "Add a message to an existing support ticket" })
  async addMessage(@Param("ticketId") ticketId: string, @Body() dto: AddMessageDto) {
    return this.supportService.addMessage(ticketId, dto);
  }
}
