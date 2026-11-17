import { Module } from "@nestjs/common";
import { MerchantController } from "./merchant.controller";
import { MerchantAuthController } from "./merchant-auth.controller";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";

@Module({
  controllers: [MerchantController, MerchantAuthController],
  providers: [ProxyDispatcherService],
})
export class MerchantBffModule {}
