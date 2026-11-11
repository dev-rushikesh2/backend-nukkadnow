import { Controller, Post, Get, Put, Body, Param, Req } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { MerchantService } from "../../../application/services/merchant.service";
import { CreateMerchantDto, CreateOutletDto, UpdateOperatingHoursDto } from "../../../application/dto/merchant.dto";

@ApiTags("Merchant Organization & Outlets")
@Controller("api/v1/merchants")
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Post()
  @ApiOperation({ summary: "Register new merchant organization" })
  @ApiResponse({ status: 201, description: "Merchant created successfully" })
  async createMerchant(@Body() dto: CreateMerchantDto) {
    return this.merchantService.registerMerchant(dto);
  }

  @Get(":id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get merchant organization profile" })
  async getMerchant(@Param("id") id: string, @Req() req: any) {
    const callerTenantId = req.user?.tenantId;
    return this.merchantService.getMerchant(id, callerTenantId);
  }

  @Post("outlets")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create an outlet under a merchant organization" })
  async createOutlet(@Body() dto: CreateOutletDto, @Req() req: any) {
    const callerTenantId = req.user?.tenantId;
    return this.merchantService.createOutlet(dto, callerTenantId);
  }

  @Get("outlets/:id")
  @ApiOperation({ summary: "Get public outlet storefront profile (with address masking)" })
  async getPublicOutlet(@Param("id") id: string) {
    return this.merchantService.getPublicOutlet(id);
  }

  @Put("outlets/:id/hours")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update weekly operating hours and closures" })
  async updateHours(
    @Param("id") id: string,
    @Body() dto: UpdateOperatingHoursDto,
    @Req() req: any
  ) {
    const callerTenantId = req.user?.tenantId;
    return this.merchantService.updateOperatingHours(id, dto, callerTenantId);
  }
}
