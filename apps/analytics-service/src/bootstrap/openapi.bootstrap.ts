import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupOpenApi(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle("NukkadNow - analytics-service")
    .setDescription("Aggregated Dashboards, Daily Revenue Metrics & Reporting Facts")
    .setVersion("1.0.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, document);
}
