import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupOpenApi } from "./bootstrap/openapi.bootstrap";
import { HttpExceptionFilter } from "./common/error-mapping/http-exception.filter";
import { ValidationPipe } from "@nestjs/common";
import { StructuredLogger } from "@nukkadnow/observability";
import helmet from "helmet";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const compressionMiddleware = require("compression") as () => any;

// ---------------------------------------------------------------------------
// Startup guard — fail fast before any service wires up
// ---------------------------------------------------------------------------
const REQUIRED_ENV_VARS = [
  "JWT_SECRET",
  "JWT_ISSUER",
  "JWT_AUDIENCE",
  "INTERNAL_SERVICE_SECRET",
  "IDENTITY_SERVICE_URL",
  "MERCHANT_SERVICE_URL",
  "CATALOG_SERVICE_URL",
  "DISCOVERY_SERVICE_URL",
  "ORDER_SERVICE_URL",
  "FULFILLMENT_SERVICE_URL",
  "PAYMENT_SERVICE_URL",
  "SUBSCRIPTION_SERVICE_URL",
  "NOTIFICATION_SERVICE_URL",
  "REVIEW_SUPPORT_SERVICE_URL",
  "ANALYTICS_SERVICE_URL",
];

for (const key of REQUIRED_ENV_VARS) {
  if (!process.env[key]) {
    // eslint-disable-next-line no-console
    console.error(`[FATAL] Missing required environment variable: ${key}`);
    process.exit(1);
  }
}

if ((process.env.JWT_SECRET?.length ?? 0) < 32) {
  // eslint-disable-next-line no-console
  console.error("[FATAL] JWT_SECRET must be at least 32 characters");
  process.exit(1);
}

async function bootstrap() {
  const logger = new StructuredLogger("api-gateway");
  const app = await NestFactory.create(AppModule);

  // ── Security & compression ─────────────────────────────────────────────
  app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }));
  app.use(compressionMiddleware());

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
  logger.info(`api-gateway running on port ${port}`);
}

bootstrap();
