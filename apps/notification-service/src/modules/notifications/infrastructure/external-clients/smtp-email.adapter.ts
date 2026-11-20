import { Injectable } from "@nestjs/common";
import { ChannelDispatchPort, ChannelDispatchResult } from "./channel-dispatch.port";
import { StructuredLogger } from "@nukkadnow/observability";
import * as nodemailer from "nodemailer";

export interface SendEmailOptions {
  to: string;
  subject: string;
  html?: string;
  text?: string;
}

@Injectable()
export class SmtpEmailAdapter implements ChannelDispatchPort {
  private readonly logger = new StructuredLogger("smtp-email-adapter");
  private transporter: nodemailer.Transporter | null = null;

  constructor() {
    this.initTransporter();
  }

  private initTransporter(): void {
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const user = process.env.SMTP_USER;
    const rawPass = process.env.SMTP_PASS;
    const pass = rawPass ? rawPass.replace(/\s+/g, "") : undefined;
    const secure = process.env.SMTP_SECURE === "true" || port === 465;

    if (host && user && pass) {
      this.transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user,
          pass,
        },
      });
      this.logger.info(`SMTP Transporter initialized for ${host}:${port} with user: ${user}`);
    } else {
      this.transporter = null;
      this.logger.warn("SMTP credentials not fully configured in environment. Email adapter operating in simulated mode.");
    }
  }

  /**
   * ChannelDispatchPort interface implementation
   */
  async send(recipient: string, message: string): Promise<ChannelDispatchResult> {
    return this.sendEmail({
      to: recipient,
      subject: "NukkadNow Merchant Notification",
      text: message,
      html: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #1e1e24;">
        <div style="background: linear-gradient(135deg, #2E1065 0%, #6D28D9 100%); padding: 16px; border-radius: 8px 8px 0 0; color: white;">
          <h2 style="margin: 0; font-size: 20px;">NukkadNow Merchant</h2>
        </div>
        <div style="border: 1px solid #e2e8f0; border-top: none; padding: 24px; border-radius: 0 0 8px 8px; background: #ffffff;">
          <p style="margin: 0 0 16px 0; font-size: 15px;">${message}</p>
        </div>
      </div>`,
    });
  }

  /**
   * Rich HTML / Text email sender
   */
  async sendEmail(options: SendEmailOptions): Promise<ChannelDispatchResult> {
    // Re-check transporter if env was updated dynamically
    if (!this.transporter && process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      this.initTransporter();
    }

    const fromAddress = process.env.SMTP_FROM || process.env.EMAIL_FROM || process.env.SMTP_USER || "NukkadNow <no-reply@nukkadnow.com>";

    if (!this.transporter) {
      console.log("\n" + "=".repeat(70));
      console.log(" 📧 [EMAIL DISPATCH - DEV SIMULATION MODE]");
      console.log(` To:      ${options.to}`);
      console.log(` From:    ${fromAddress}`);
      console.log(` Subject: ${options.subject}`);
      console.log(` Text:    ${options.text || "(HTML body provided)"}`);
      console.log(" [NOTE: Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS to .env for real emails]");
      console.log("=".repeat(70) + "\n");

      return {
        success: true,
        provider: "SIMULATED_EMAIL",
        providerRef: `sim_email_${Date.now()}`,
      };
    }

    try {
      const info = await this.transporter.sendMail({
        from: fromAddress,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });

      this.logger.info(`Email dispatched successfully to ${options.to}`, { messageId: info.messageId });
      return {
        success: true,
        provider: "SMTP",
        providerRef: info.messageId,
      };
    } catch (error: any) {
      this.logger.error(`Failed to send email via SMTP to ${options.to}`, error);
      return {
        success: false,
        provider: "SMTP",
        error: error.message || "Failed to dispatch email",
      };
    }
  }
}
