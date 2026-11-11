import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupOpenApi } from "./bootstrap/openapi.bootstrap";
import { HttpExceptionFilter } from "./common/error-mapping/http-exception.filter";
import { ValidationPipe } from "@nestjs/common";
import { StructuredLogger } from "@nukkadnow/observability";

async function bootstrap() {
  const logger = new StructuredLogger("api-gateway");
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*", // Locked down in production via environment policy
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  app.useGlobalFilters(new HttpExceptionFilter(logger));

  setupOpenApi(app);

  const port = process.env.GATEWAY_PORT || 4000;
  await app.listen(port);
  logger.info(`api-gateway microservice running on port ${port}`);
}

bootstrap();
