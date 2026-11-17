import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";

@Module({
  controllers: [AdminController],
  providers: [ProxyDispatcherService],
})
export class AdminBffModule {}
