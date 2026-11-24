import { Module } from "@nestjs/common";
import { AuthController } from "./presentation/http/controllers/auth.controller";
import { identityController } from "./presentation/http/controllers/identity.controller";
import { AuthService } from "./application/services/auth.service";
import { OtpManagerService } from "./infrastructure/otp/otp-manager.service";
import { UserRepositoryPort } from "./domain/repositories/user.repository.port";
import { SessionRepositoryPort } from "./domain/repositories/session.repository.port";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";
import { PrismaUserRepository } from "./infrastructure/persistence/repositories/prisma-user.repository";
import { PrismaSessionRepository } from "./infrastructure/persistence/repositories/prisma-session.repository";

@Module({
  controllers: [AuthController, identityController],
  providers: [
    PrismaService,
    AuthService,
    OtpManagerService,
    {
      provide: UserRepositoryPort,
      useClass: PrismaUserRepository,
    },
    {
      provide: SessionRepositoryPort,
      useClass: PrismaSessionRepository,
    },
  ],
  exports: [AuthService, PrismaService],
})
export class IdentityModule {}
