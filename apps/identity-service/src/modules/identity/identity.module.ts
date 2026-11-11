import { Module } from "@nestjs/common";
import { AuthController } from "./presentation/http/controllers/auth.controller";
import { identityController } from "./presentation/http/controllers/identity.controller";
import { AuthService } from "./application/services/auth.service";
import { OtpManagerService } from "./infrastructure/otp/otp-manager.service";
import { UserRepositoryPort } from "./domain/repositories/user.repository.port";
import { SessionRepositoryPort } from "./domain/repositories/session.repository.port";
import { InMemoryUserRepository, InMemorySessionRepository } from "./infrastructure/persistence/repositories/in-memory-identity.repository";

@Module({
  controllers: [AuthController, identityController],
  providers: [
    AuthService,
    OtpManagerService,
    {
      provide: UserRepositoryPort,
      useClass: InMemoryUserRepository,
    },
    {
      provide: SessionRepositoryPort,
      useClass: InMemorySessionRepository,
    },
  ],
  exports: [AuthService],
})
export class IdentityModule {}
