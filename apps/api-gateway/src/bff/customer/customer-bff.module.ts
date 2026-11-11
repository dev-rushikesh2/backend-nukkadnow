import { Module } from "@nestjs/common";
import { CustomerController } from "./customer.controller";
import { CustomerAuthController } from "./customer-auth.controller";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";

@Module({
  controllers: [CustomerController, CustomerAuthController],
  providers: [ProxyDispatcherService],
})
export class CustomerBffModule {}
