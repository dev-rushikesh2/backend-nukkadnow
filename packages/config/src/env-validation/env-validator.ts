import { z } from "zod";

export const BaseServiceEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "staging", "production"]).default("development"),
  SERVICE_NAME: z.string().min(1),
  PORT: z.coerce.number().default(4000),
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
  DATABASE_URL: z.string().url().optional(),
  REDIS_URL: z.string().url().optional(),
  RABBITMQ_URL: z.string().url().optional(),
  JWT_SECRET: z.string().min(16).optional(),
});

export type BaseServiceEnv = z.infer<typeof BaseServiceEnvSchema>;

export function validateEnvironment<T extends z.ZodRawShape>(
  schema: z.ZodObject<T>,
  env: NodeJS.ProcessEnv = process.env
): z.infer<z.ZodObject<T>> {
  const result = schema.safeParse(env);
  if (!result.success) {
    const errorDetails = JSON.stringify(result.error.format(), null, 2);
    throw new Error(`CRITICAL: Environment validation failed for service:\n${errorDetails}`);
  }
  return result.data;
}
