import { Module, MiddlewareConsumer, NestModule } from "@nestjs/common";
import { CustomerBffModule } from "./bff/customer/customer-bff.module";
import { MerchantBffModule } from "./bff/merchant/merchant-bff.module";
import { AdminBffModule } from "./bff/admin/admin-bff.module";
import { HealthModule } from "./health/health.module";
import { RealtimeGateway } from "./realtime/socket.gateway";
import { RequestContextMiddleware } from "./common/request-context/request-context.middleware";
import { SecurityHeadersMiddleware } from "./common/response-headers/security-headers.middleware";
import { ProxyDispatcherService } from "./clients/proxy-dispatcher.service";

@Module({
  imports: [
    HealthModule,
    CustomerBffModule,
    MerchantBffModule,
    AdminBffModule,
  ],
  providers: [RealtimeGateway, ProxyDispatcherService],
  exports: [ProxyDispatcherService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestContextMiddleware, SecurityHeadersMiddleware)
      .forRoutes("*");
  }
}
