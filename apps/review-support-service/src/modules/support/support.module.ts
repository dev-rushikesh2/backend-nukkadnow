import { Module } from "@nestjs/common";
import { supportController } from "./presentation/http/controllers/support.controller";
import { SupportService } from "./application/services/support.service";
import { ReviewSupportRepositoryPort } from "./domain/repositories/review-support.repository.port";
import { PrismaReviewSupportRepository } from "./infrastructure/persistence/repositories/prisma-review-support.repository";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";

@Module({
  controllers: [supportController],
  providers: [
    PrismaService,
    SupportService,
    {
      provide: ReviewSupportRepositoryPort,
      useClass: PrismaReviewSupportRepository,
    },
  ],
  exports: [SupportService, PrismaService],
})
export class supportModule {}
