import { Controller, Get } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags("support")
@Controller("api/v1/support")
export class supportController {
  @Get("ping")
  @ApiOperation({ summary: "Domain probe" })
  ping() {
    return { message: "Hello from support domain" };
  }
}
