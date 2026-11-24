import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  Query,
  Headers,
  Req,
  HttpCode,
  HttpStatus,
  ForbiddenException
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from "@nestjs/swagger";
import { PartnerRegistrationService } from "../../../application/services/partner-registration.service";
import {
  SaveDraftRegistrationDto,
  SubmitRegistrationDto,
  UpdateApplicationStatusDto,
  UploadDocumentDto
} from "../../../application/dto/partner-registration.dto";
import { ApplicationStatusCode } from "../../../domain/entities/partner-registration.entity";

@ApiTags("Partner Business Onboarding & Registration")
@Controller("api/v1/merchants/onboarding")
export class PartnerRegistrationController {
  constructor(private readonly registrationService: PartnerRegistrationService) {}

  @Post("draft")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Save progressive registration draft (Steps 1-6)" })
  @ApiResponse({ status: 200, description: "Draft saved successfully with application tracking ID" })
  async saveDraft(@Body() dto: SaveDraftRegistrationDto) {
    const registration = await this.registrationService.saveDraft(dto);
    return {
      success: true,
      applicationId: registration.applicationId,
      currentStep: registration.currentStep,
      status: registration.status,
      data: registration.toPrimitives(),
    };
  }

  @Post("submit")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Submit registration for verification (Step 7 Review -> Step 8 Status)" })
  @ApiResponse({ status: 200, description: "Application submitted and queued for partner verification" })
  async submit(@Body() dto: SubmitRegistrationDto) {
    const registration = await this.registrationService.submitRegistration(dto);
    return {
      success: true,
      message: "Application submitted successfully and is now under review",
      applicationId: registration.applicationId,
      status: registration.status,
      submittedAt: registration.submittedAt,
      data: registration.toPrimitives(),
    };
  }

  @Get("status/:identifier")
  @ApiOperation({ summary: "Get live application status by Application ID or Mobile Number" })
  @ApiParam({ name: "identifier", description: "Application ID (e.g. NN-MR-20261115-0387) or registered mobile number" })
  @ApiResponse({ status: 200, description: "Application status, timeline, and document verification states" })
  async getStatus(
    @Param("identifier") identifier: string,
    @Headers("x-tenant-id") headerTenantId?: string,
    @Req() req?: any
  ) {
    const callerTenantId = headerTenantId || req?.user?.tenantId;
    const isSystemAdmin = callerTenantId === "system-admin-tenant";
    const callerRoles: string[] = req?.user?.roles || [];
    const isAdmin = isSystemAdmin || callerRoles.includes("PLATFORM_ADMIN") || callerRoles.includes("SUPER_ADMIN");

    const registration = await this.registrationService.getApplicationStatus(identifier);

    // Tenant Isolation Check: If a specific tenant is authenticated, they cannot peek at another merchant's registration
    if (callerTenantId && !isAdmin && registration.merchantId && registration.merchantId !== callerTenantId) {
      throw new ForbiddenException("Cross-tenant access forbidden: You cannot view another merchant's application.");
    }

    const primitives: any = registration.toPrimitives();
    // Protect sensitive financial PII from unauthenticated or cross-tenant exposure
    if (!isAdmin && (!callerTenantId || registration.merchantId !== callerTenantId)) {
      delete primitives.bankAccountHolder;
      delete primitives.bankAccountNumber;
      delete primitives.bankIfscCode;
      delete primitives.bankName;
      delete primitives.categoryLicenceUrl;
      if (primitives.mobileNumber && primitives.mobileNumber.length >= 6) {
        primitives.mobileNumber = primitives.mobileNumber.slice(0, 4) + "XXXX" + primitives.mobileNumber.slice(-2);
      }
    }

    return {
      success: true,
      applicationId: registration.applicationId,
      status: registration.status,
      currentStep: registration.currentStep,
      businessName: registration.businessName,
      ownerName: registration.ownerName,
      mobileNumber: primitives.mobileNumber || registration.mobileNumber,
      timeline: registration.statusHistory,
      documents: isAdmin ? registration.documents : [],
      submittedAt: registration.submittedAt,
      data: primitives,
    };
  }

  @Post(":applicationId/documents")
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "Upload and attach business verification document" })
  @ApiParam({ name: "applicationId", description: "Application ID" })
  async uploadDocument(
    @Param("applicationId") applicationId: string,
    @Body() doc: UploadDocumentDto,
    @Headers("x-tenant-id") headerTenantId?: string,
    @Req() req?: any
  ) {
    const callerTenantId = headerTenantId || req?.user?.tenantId;
    const isSystemAdmin = callerTenantId === "system-admin-tenant";
    const callerRoles: string[] = req?.user?.roles || [];
    const isAdmin = isSystemAdmin || callerRoles.includes("PLATFORM_ADMIN") || callerRoles.includes("SUPER_ADMIN");

    const existing = await this.registrationService.getApplicationStatus(applicationId);
    if (callerTenantId && !isAdmin && existing.merchantId && existing.merchantId !== callerTenantId) {
      throw new ForbiddenException("Cross-tenant access forbidden: You cannot upload documents for another merchant.");
    }

    const registration = await this.registrationService.attachDocument(applicationId, doc);
    return {
      success: true,
      message: "Document attached successfully",
      applicationId: registration.applicationId,
      documents: registration.documents,
    };
  }

  @Patch(":applicationId/status")
  @ApiOperation({ summary: "Update application verification status (Admin / Automated KYC Engine)" })
  @ApiParam({ name: "applicationId", description: "Application ID" })
  async updateStatus(
    @Param("applicationId") applicationId: string,
    @Body() dto: UpdateApplicationStatusDto,
    @Req() req?: any
  ) {
    const callerTenantId = req?.headers?.["x-tenant-id"];
    const isSystemAdmin = callerTenantId === "system-admin-tenant";
    const callerRoles: string[] = req?.user?.roles || [];
    const isInternal = req?.headers?.["x-internal-secret"] === process.env.INTERNAL_SERVICE_SECRET;
    const isAdmin = isSystemAdmin || callerRoles.includes("PLATFORM_ADMIN") || callerRoles.includes("SUPER_ADMIN") || callerRoles.includes("VERIFICATION_STAFF");

    if (!isAdmin && !isInternal && process.env.NODE_ENV === "production") {
      throw new ForbiddenException("Privileged operation: Only platform administrators or automated KYC engine can update application status.");
    }

    const registration = await this.registrationService.updateApplicationStatus(applicationId, dto);
    return {
      success: true,
      message: `Status updated to ${dto.status}`,
      applicationId: registration.applicationId,
      status: registration.status,
      merchantId: registration.merchantId,
      data: registration.toPrimitives(),
    };
  }

  @Get()
  @ApiOperation({ summary: "List partner registrations with optional status filter (Tenant isolated)" })
  @ApiQuery({ name: "status", required: false, enum: ['SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'ACTION_REQUIRED', 'REJECTED'] })
  async listRegistrations(
    @Query("status") status?: ApplicationStatusCode,
    @Headers("x-tenant-id") headerTenantId?: string,
    @Req() req?: any
  ) {
    const callerTenantId = headerTenantId || req?.user?.tenantId;
    const isSystemAdmin = callerTenantId === "system-admin-tenant";
    const callerRoles: string[] = req?.user?.roles || [];
    const isAdmin = isSystemAdmin || callerRoles.includes("PLATFORM_ADMIN") || callerRoles.includes("SUPER_ADMIN");

    let list = await this.registrationService.listRegistrations(status);

    // If caller is a specific merchant, only show their own registration
    if (callerTenantId && !isAdmin) {
      list = list.filter(r => r.merchantId === callerTenantId);
    }

    return {
      success: true,
      count: list.length,
      items: list.map(r => r.toPrimitives()),
    };
  }
}
