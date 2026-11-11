import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { DiscoveryModule } from "./modules/discovery/discovery.module";

@Module({
  imports: [HealthModule, DiscoveryModule],
})
export class AppModule {}
