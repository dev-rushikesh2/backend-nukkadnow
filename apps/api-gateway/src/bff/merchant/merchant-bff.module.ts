import { Module } from "@nestjs/common";
import { MerchantController } from "./merchant.controller";
import { MerchantAuthController } from "./merchant-auth.controller";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";
import { StaffPermissionGuard } from "../../common/guards/staff-permission.guard";

@Module({
  controllers: [MerchantController, MerchantAuthController],
  providers: [ProxyDispatcherService, StaffPermissionGuard],
})
export class MerchantBffModule {}
