import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupOpenApi } from "./bootstrap/openapi.bootstrap";
import { ValidationPipe } from "@nestjs/common";
import { StructuredLogger } from "@nukkadnow/observability";

async function bootstrap() {
  const logger = new StructuredLogger("merchant-service");
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  setupOpenApi(app);

  const port = process.env.PORT || 4002;
  await app.listen(port);
  logger.info(`merchant-service microservice running on port ${port}`);
}

bootstrap();
