import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { supportModule } from "./modules/support/support.module";

@Module({
  imports: [HealthModule, supportModule],
})
export class AppModule {}
