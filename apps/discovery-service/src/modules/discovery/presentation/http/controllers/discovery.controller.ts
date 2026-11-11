import { Controller, Get, Post, Query, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { DiscoveryService } from "../../../application/services/discovery.service";
import { NearbySearchQueryDto, SyncOutletDocumentDto } from "../../../application/dto/discovery.dto";

@ApiTags("Discovery & Search")
@Controller("api/v1/discovery")
export class DiscoveryController {
  constructor(private readonly discoveryService: DiscoveryService) {}

  @Get("outlets/nearby")
  @ApiOperation({ summary: "Find nearby outlets based on customer GPS and radius" })
  @ApiResponse({ status: 200, description: "Nearby outlets sorted by proximity" })
  async getNearbyOutlets(@Query() query: NearbySearchQueryDto) {
    return this.discoveryService.searchNearby(query);
  }

  @Get("localities")
  @ApiOperation({ summary: "List active pilot localities in Nagpur" })
  async getLocalities() {
    return this.discoveryService.listPopularLocalities();
  }

  @Post("sync")
  @ApiOperation({ summary: "Internal sync hook to upsert outlet search projections" })
  async syncDocument(@Body() dto: SyncOutletDocumentDto) {
    await this.discoveryService.syncOutletDocument(dto);
    return { success: true };
  }
}
