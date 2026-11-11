import { Controller, Get } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags("Admin BFF")
@Controller("api/v1/admin")
export class AdminController {
  @Get("merchants/pending")
  @ApiOperation({ summary: "Get merchants awaiting platform onboarding verification" })
  getPendingVerifications() {
    return {
      pendingVerifications: [],
    };
  }
}
