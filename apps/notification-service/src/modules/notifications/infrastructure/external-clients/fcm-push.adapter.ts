import { Injectable } from "@nestjs/common";
import { ChannelDispatchPort, ChannelDispatchResult } from "./channel-dispatch.port";
import { StructuredLogger } from "@nukkadnow/observability";
import * as admin from "firebase-admin";
import { getMessaging, Messaging, Message } from "firebase-admin/messaging";
import * as fs from "fs";
import * as path from "path";

export interface SendPushOptions {
  token?: string;
  topic?: string;
  title: string;
  body: string;
  data?: Record<string, string>;
  imageUrl?: string;
}

@Injectable()
export class FcmPushAdapter implements ChannelDispatchPort {
  private readonly logger = new StructuredLogger("fcm-push-adapter");
  private messaging: Messaging | null = null;
  private initialized = false;

  constructor() {
    this.initFirebase();
  }

  private initFirebase(): void {
    const existingApps = admin.getApps();
    if (existingApps.length > 0) {
      this.messaging = getMessaging(existingApps[0]);
      this.initialized = true;
      return;
    }

    const configuredPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
    const candidates = [
      configuredPath,
      path.resolve(process.cwd(), "secrets/firebase-service-account.json"),
      path.resolve(__dirname, "../../../../../secrets/firebase-service-account.json"),
      path.resolve(process.cwd(), "apps/notification-service/secrets/firebase-service-account.json"),
      "C:/Nukkadnow/nukkadnow-backend/apps/notification-service/secrets/firebase-service-account.json",
    ].filter(Boolean) as string[];

    let serviceAccountPath: string | null = null;
    for (const cand of candidates) {
      if (fs.existsSync(cand)) {
        serviceAccountPath = cand;
        break;
      }
    }

    if (serviceAccountPath) {
      try {
        const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf-8"));
        const app = admin.initializeApp({
          credential: admin.cert(serviceAccount),
        });
        this.messaging = getMessaging(app);
        this.initialized = true;
        this.logger.info(`Firebase Admin SDK initialized successfully with project: ${serviceAccount.project_id}`);
      } catch (err: any) {
        this.logger.error(`Failed to initialize Firebase Admin SDK: ${err?.message}`, err);
      }
    } else {
      this.logger.warn("Firebase service account credentials not found. Push adapter operating in simulated mode.");
    }
  }

  /**
   * ChannelDispatchPort interface implementation
   * recipient can be a specific FCM Device Token or Topic (e.g. topic:merchants or topic:orders)
   */
  async send(recipient: string, message: string): Promise<ChannelDispatchResult> {
    const isTopic = recipient.startsWith("topic:") || recipient.startsWith("/topics/");
    const topic = isTopic ? recipient.replace(/^\/?topics?\//, "") : undefined;
    const token = !isTopic ? recipient : undefined;

    return this.sendPush({
      token,
      topic,
      title: "NukkadNow",
      body: message,
    });
  }

  /**
   * Rich Push Notification dispatcher supporting token, topic, title, body, data payload
   */
  async sendPush(options: SendPushOptions): Promise<ChannelDispatchResult> {
    if (!this.initialized && admin.getApps().length === 0) {
      this.initFirebase();
    }

    if (!this.initialized) {
      console.log("\n" + "=".repeat(70));
      console.log(" 📲 [FCM PUSH DISPATCH - SIMULATED MODE]");
      console.log(` Target:  ${options.token ? `Device Token [${options.token.slice(0, 15)}...]` : `Topic [${options.topic}]`}`);
      console.log(` Title:   ${options.title}`);
      console.log(` Body:    ${options.body}`);
      console.log("=".repeat(70) + "\n");

      return {
        success: true,
        provider: "SIMULATED_FCM",
        providerRef: `sim_push_${Date.now()}`,
      };
    }

    try {
      const messagePayload: Message = {
        notification: {
          title: options.title,
          body: options.body,
          imageUrl: options.imageUrl,
        },
        data: options.data || {},
        ...(options.token ? { token: options.token } : { topic: options.topic || "all" }),
        android: {
          priority: "high",
          notification: {
            sound: "default",
            clickAction: "FLUTTER_NOTIFICATION_CLICK",
            channelId: "nukkadnow_orders_high_priority",
          },
        },
        apns: {
          payload: {
            aps: {
              sound: "default",
              badge: 1,
            },
          },
        },
      };

      const response = await this.messaging!.send(messagePayload);
      this.logger.info(`FCM message dispatched successfully: ${response}`);

      return {
        success: true,
        provider: "FIREBASE_FCM",
        providerRef: response,
      };
    } catch (error: any) {
      this.logger.error(`FCM Push dispatch failed: ${error?.message}`, error);
      return {
        success: false,
        provider: "FIREBASE_FCM",
        error: error?.message || "Unknown FCM Error",
      };
    }
  }
}
