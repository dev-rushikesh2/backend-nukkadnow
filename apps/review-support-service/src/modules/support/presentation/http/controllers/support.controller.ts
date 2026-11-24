import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { SupportService } from "../../../application/services/support.service";
import { CreateReviewDto, CreateTicketDto, AddMessageDto } from "../../../application/dto/review-support.dto";

@ApiTags("Support & Reviews")
@Controller("api/v1/support")
export class supportController {
  constructor(private readonly supportService: SupportService) {}

  @Get("ping")
  @ApiOperation({ summary: "Domain probe" })
  ping() {
    return { message: "Hello from support domain" };
  }

  @Post("reviews")
  @ApiOperation({ summary: "Submit a customer review for an order" })
  @ApiResponse({ status: 201, description: "Review submitted" })
  async createReview(@Body() dto: CreateReviewDto) {
    return this.supportService.createReview(dto);
  }

  @Get("reviews/outlet/:outletId")
  @ApiOperation({ summary: "Get aggregated rating and review list for an outlet" })
  async getOutletReviews(@Param("outletId") outletId: string) {
    return this.supportService.getOutletReviews(outletId);
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
