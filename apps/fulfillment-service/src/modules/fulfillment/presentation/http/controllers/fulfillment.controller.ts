import { Controller, Post, Get, Body, Param, Query } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { FulfillmentService } from "../../../application/services/fulfillment.service";
import { CreateSlotDto, ReserveSlotDto, GenerateTokenDto } from "../../../application/dto/fulfillment.dto";

@ApiTags("Fulfillment, Slots & Queue")
@Controller("api/v1/fulfillment")
export class FulfillmentController {
  constructor(private readonly fulfillmentService: FulfillmentService) {}

  @Post("slots")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Configure capacity time slots for an outlet" })
  async createSlot(@Body() dto: CreateSlotDto) {
    return this.fulfillmentService.createSlot(dto);
  }

  @Get("outlets/:outletId/slots")
  @ApiOperation({ summary: "Get available pickup time slots for a date" })
  async getSlots(
    @Param("outletId") outletId: string,
    @Query("date") date: string
  ) {
    return this.fulfillmentService.getOutletSlots(outletId, date);
  }

  @Post("slots/reserve")
  @ApiOperation({ summary: "Atomic pickup slot reservation" })
  async reserveSlot(@Body() dto: ReserveSlotDto) {
    return this.fulfillmentService.reserveSlot(dto);
  }

  @Post("tokens/generate")
  @ApiOperation({ summary: "Generate customer pickup token (A-01 format)" })
  async generateToken(@Body() dto: GenerateTokenDto) {
    return this.fulfillmentService.generatePickupToken(dto);
  }

  @Post("outlets/:outletId/tokens/:token/ready")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Mark token ready for customer handover" })
  async markTokenReady(
    @Param("outletId") outletId: string,
    @Param("token") token: string
  ) {
    return this.fulfillmentService.markTokenReady(outletId, token);
  }

  @Get("qr/:token")
  @ApiOperation({ summary: "Resolve table / at-shop QR token" })
  async resolveQr(@Param("token") token: string) {
    return this.fulfillmentService.resolveQrToken(token);
  }
}
