import { Controller, Post, Get, Put, Body, Param, Req, Headers } from "@nestjs/common";
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

  @Get("my-profile")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get current authenticated merchant organization profile and outlets" })
  async getMyProfile(@Headers("x-tenant-id") headerTenantId: string, @Req() req: any) {
    const tenantId = headerTenantId || req.user?.tenantId;
    return this.merchantService.getMyProfile(tenantId);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: "List merchants (Admin: all, Merchant: own organization)" })
  async listMerchants(@Headers("x-tenant-id") headerTenantId: string, @Req() req: any) {
    const tenantId = headerTenantId || req.user?.tenantId;
    const roles = req.user?.roles;
    return this.merchantService.listMerchants(tenantId, roles);
  }

  @Get(":id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get merchant organization profile with tenant isolation" })
  async getMerchant(
    @Param("id") id: string,
    @Headers("x-tenant-id") headerTenantId: string,
    @Req() req: any
  ) {
    const callerTenantId = headerTenantId || req.user?.tenantId;
    const callerRoles = req.user?.roles;
    return this.merchantService.getMerchant(id, callerTenantId, callerRoles);
  }

  @Post("outlets")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create an outlet under a merchant organization" })
  async createOutlet(
    @Body() dto: CreateOutletDto,
    @Headers("x-tenant-id") headerTenantId: string,
    @Req() req: any
  ) {
    const callerTenantId = headerTenantId || req.user?.tenantId;
    const callerRoles = req.user?.roles;
    return this.merchantService.createOutlet(dto, callerTenantId, callerRoles);
  }

  @Get("outlets/:id")
  @ApiOperation({ summary: "Get public outlet storefront profile (with address masking for home businesses)" })
  async getPublicOutlet(@Param("id") id: string) {
    return this.merchantService.getPublicOutlet(id);
  }

  @Put("outlets/:id/hours")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update weekly operating hours and closures" })
  async updateHours(
    @Param("id") id: string,
    @Body() dto: UpdateOperatingHoursDto,
    @Headers("x-tenant-id") headerTenantId: string,
    @Req() req: any
  ) {
    const callerTenantId = headerTenantId || req.user?.tenantId;
    const callerRoles = req.user?.roles;
    return this.merchantService.updateOperatingHours(id, dto, callerTenantId, callerRoles);
  }
}
