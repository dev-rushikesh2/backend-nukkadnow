import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupOpenApi(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle("NukkadNow - notification-service")
    .setDescription("SMS, WhatsApp, Email, WebPush Templates & Dispatch Pipeline")
    .setVersion("1.0.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, document);
}
