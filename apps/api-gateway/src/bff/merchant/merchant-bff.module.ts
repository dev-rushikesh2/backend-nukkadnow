import { Module } from "@nestjs/common";
import { MerchantController } from "./merchant.controller";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";

@Module({
  controllers: [MerchantController],
  providers: [ProxyDispatcherService],
})
export class MerchantBffModule {}
