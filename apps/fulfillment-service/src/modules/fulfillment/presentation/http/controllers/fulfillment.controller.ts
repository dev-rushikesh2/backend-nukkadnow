import { Controller, Post, Get, Body, Param, Query } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { FulfillmentService } from "../../../application/services/fulfillment.service";
import { CreateSlotDto, ReserveSlotDto, GenerateTokenDto } from "../../../application/dto/fulfillment.dto";
import { PrismaService } from "../../../infrastructure/persistence/prisma/prisma.service";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@ApiTags("Fulfillment, Slots & Queue")
@Controller("api/v1/fulfillment")
export class FulfillmentController {
  constructor(
    private readonly fulfillmentService: FulfillmentService,
    private readonly prisma: PrismaService
  ) {}

  @Post("outlets/:outletId/throttle")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin: Throttle or un-throttle outlet capacity" })
  async throttleOutlet(@Param("outletId") outletId: string, @Body() body: { throttled?: boolean; maxCapacity?: number; waitMinutes?: number }) {
    if (body?.maxCapacity !== undefined) {
      await this.prisma.capacitySlot.updateMany({
        where: { outletId },
        data: { maxCapacity: Math.max(0, Number(body.maxCapacity)) },
      });
    }
    const snapshot = await this.prisma.queueSnapshot.create({
      data: {
        id: UniqueIdentifier.generateV7(),
        outletId,
        activeOrdersCount: body?.throttled ? 999 : 0,
        waitMinutes: Number(body?.waitMinutes ?? (body?.throttled ? 45 : 10)),
      },
    });
    return { success: true, data: { outletId, throttled: body?.throttled ?? true, snapshot } };
  }

  @Post("slots")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Configure capacity time slots for an outlet" })
  async createSlot(@Body() dto: CreateSlotDto) {
    return this.fulfillmentService.createSlot(dto);
  }

  @Get("slots")
  @ApiOperation({ summary: "List pickup capacity slots by outletId and optional date" })
  async listSlotsQuery(@Query("outletId") outletId?: string, @Query("date") date?: string) {
    if (!outletId) return [];
    const targetDate = date || new Date().toISOString().slice(0, 10);
    return this.fulfillmentService.getOutletSlots(outletId, targetDate);
  }

  @Get("queue/:outletId")
  @ApiOperation({ summary: "Get live queue snapshot and pickup tokens for an outlet" })
  async getQueueSnapshot(@Param("outletId") outletId: string) {
    if (!outletId) return { outletId: "", activeOrdersCount: 0, waitMinutes: 10, tokens: [] };
    const [latest, tokens] = await Promise.all([
      this.prisma.queueSnapshot.findFirst({
        where: { outletId },
        orderBy: { observedAt: "desc" },
      }),
      this.prisma.pickupToken.findMany({
        where: { outletId, status: { in: ["ISSUED", "READY"] } },
        orderBy: { createdAt: "desc" },
        take: 30,
      }),
    ]);
    return {
      outletId,
      activeOrdersCount: latest?.activeOrdersCount ?? tokens.length,
      waitMinutes: latest?.waitMinutes ?? 10,
      observedAt: latest?.observedAt ?? null,
      tokens,
    };
  }

  @Post("delivery-tasks/sync")
  @ApiOperation({ summary: "Internal sync hook to create/update delivery task for an order" })
  async syncDeliveryTask(
    @Body()
    body: {
      orderId: string;
      outletId: string;
      tenantId?: string;
      cityCode?: string;
      deliveryAddress: string;
      status?: string;
      assignedStaffId?: string;
    }
  ) {
    const task = await this.prisma.deliveryTask.upsert({
      where: { orderId: body.orderId },
      create: {
        id: UniqueIdentifier.generateV7(),
        orderId: body.orderId,
        tenantId: body.tenantId ?? null,
        outletId: body.outletId,
        cityCode: body.cityCode || "IN-MH-NGP",
        deliveryAddress: body.deliveryAddress || "",
        status: (body.status || "PENDING").toUpperCase(),
        assignedStaffId: body.assignedStaffId ?? null,
      },
      update: {
        ...(body.status ? { status: body.status.toUpperCase() } : {}),
        ...(body.assignedStaffId !== undefined ? { assignedStaffId: body.assignedStaffId } : {}),
        ...(body.deliveryAddress ? { deliveryAddress: body.deliveryAddress } : {}),
      },
    });
    return { success: true, data: task };
  }

  @Get("delivery-tasks/order/:orderId")
  @ApiOperation({ summary: "Get live delivery task for an order" })
  async getDeliveryTaskByOrder(@Param("orderId") orderId: string) {
    const task = await this.prisma.deliveryTask.findUnique({ where: { orderId } });
    return { success: true, data: task };
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
    return this.fulfillmentService.resolveQrCode(token);
  }
}
