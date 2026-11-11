import { Controller, Get } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags("identity")
@Controller("api/v1/identity")
export class identityController {
  @Get("ping")
  @ApiOperation({ summary: "Domain probe" })
  ping() {
    return { message: "Hello from identity domain" };
  }
}
