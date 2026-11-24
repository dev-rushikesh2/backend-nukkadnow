import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupOpenApi } from "./bootstrap/openapi.bootstrap";
import { HttpExceptionFilter } from "./common/error-mapping/http-exception.filter";
import { ValidationPipe } from "@nestjs/common";
import { StructuredLogger } from "@nukkadnow/observability";

async function bootstrap() {
  const logger = new StructuredLogger("api-gateway");
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",").map((o) => o.trim())
    : [
        "https://admin.nukkadnow.logixspire.tech",
        "https://merchant.nukkadnow.logixspire.tech",
        "https://nukkadnow.logixspire.tech",
        "https://api.nukkadnow.logixspire.tech",
        "http://localhost:3000",
        "http://localhost:4200",
        "http://localhost:8100",
        "capacitor://localhost",
        "http://localhost",
      ];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== "production") {
        callback(null, true);
      } else {
        callback(new Error(`Origin ${origin} not allowed by CORS policy`));
      }
    },
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
