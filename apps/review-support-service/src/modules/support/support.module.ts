import { Module } from "@nestjs/common";
import { supportController } from "./presentation/http/controllers/support.controller";

@Module({
  controllers: [supportController],
  providers: [],
  exports: [],
})
export class supportModule {}
