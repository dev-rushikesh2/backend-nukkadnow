import { Injectable, BadRequestException, UnauthorizedException } from "@nestjs/common";
import { FulfillmentRepositoryPort } from "../../domain/repositories/fulfillment.repository.port";
import { CapacitySlot, PickupToken } from "../../domain/entities/capacity-slot.entity";
import { CreateSlotDto, ReserveSlotDto, GenerateTokenDto } from "../dto/fulfillment.dto";
import { SlotNotFoundError, SlotCapacityExceededError, TokenNotFoundError } from "../../domain/errors/fulfillment-errors";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";
import * as crypto from "crypto";

@Injectable()
export class FulfillmentService {
  constructor(private readonly fulfillmentRepo: FulfillmentRepositoryPort) {}

  async createSlot(dto: CreateSlotDto) {
    const slot = new CapacitySlot({
      id: UniqueIdentifier.generateV7(),
      outletId: dto.outletId,
      slotDate: dto.slotDate,
      startTime: dto.startTime,
      endTime: dto.endTime,
      maxCapacity: dto.maxCapacity,
      reservedCount: 0,
      isWalkIn: false,
    });

    await this.fulfillmentRepo.saveSlot(slot);
    return slot;
  }

  async getOutletSlots(outletId: string, date: string) {
    const slots = await this.fulfillmentRepo.findSlotsByOutletAndDate(outletId, date);
    return slots.map(s => ({
      slotId: s.id,
      date: s.slotDate,
      startTime: s.startTime,
      endTime: s.endTime,
      maxCapacity: s.maxCapacity,
      availableCapacity: s.availableCapacity,
      isAvailable: s.hasCapacity(),
    }));
  }

  async reserveSlot(dto: ReserveSlotDto) {
    if ("reserveSlot" in this.fulfillmentRepo && typeof (this.fulfillmentRepo as any).reserveSlot === "function") {
      await (this.fulfillmentRepo as any).reserveSlot(dto.slotId);
      const slot = await this.fulfillmentRepo.findSlotById(dto.slotId);
      return {
        success: true,
        slotId: dto.slotId,
        orderId: dto.orderId,
        remainingSlotCapacity: slot ? slot.availableCapacity : 0,
      };
    }

    const slot = await this.fulfillmentRepo.findSlotById(dto.slotId);
    if (!slot) throw new SlotNotFoundError(dto.slotId);

    if (!slot.hasCapacity()) {
      throw new SlotCapacityExceededError(`${slot.startTime}-${slot.endTime}`);
    }

    slot.reserve();
    await this.fulfillmentRepo.saveSlot(slot);

    return {
      success: true,
      slotId: slot.id,
      orderId: dto.orderId,
      remainingSlotCapacity: slot.availableCapacity,
    };
  }

  async generatePickupToken(dto: GenerateTokenDto) {
    const existing = await this.fulfillmentRepo.findTokenByOrderId(dto.orderId);
    if (existing) return existing;

    const seq = await this.fulfillmentRepo.getNextTokenSequence(dto.outletId);
    // Format: e.g. A-01, A-02 ...
    const tokenNumber = `A-${seq.toString().padStart(2, "0")}`;

    const token = new PickupToken({
      id: UniqueIdentifier.generateV7(),
      orderId: dto.orderId,
      outletId: dto.outletId,
      tokenNumber,
      status: "ISSUED",
      createdAt: new Date(),
    });

    await this.fulfillmentRepo.saveToken(token);
    return token;
  }

  async markTokenReady(outletId: string, tokenNumber: string) {
    const token = await this.fulfillmentRepo.findTokenByNumber(outletId, tokenNumber);
    if (!token) throw new TokenNotFoundError(tokenNumber);

    token.markReady();
    await this.fulfillmentRepo.saveToken(token);
    return token;
  }

  async collectToken(outletId: string, tokenNumber: string) {
    const token = await this.fulfillmentRepo.findTokenByNumber(outletId, tokenNumber);
    if (!token) throw new TokenNotFoundError(tokenNumber);

    token.markCollected();
    await this.fulfillmentRepo.saveToken(token);
    return token;
  }

  /**
   * Resolves signed Dine-in / At-Shop QR ordering token
   * Format: base64url(payload).base64url(hmacSha256Signature)
   * Payload: { outletId: string, issuedAt: number, tableNumber?: string }
   */
  resolveQrCode(signedToken: string) {
    if (!process.env.QR_SIGNING_SECRET) {
      throw new Error("QR_SIGNING_SECRET is required");
    }

    const parts = signedToken.split(".");
    if (parts.length !== 2) {
      throw new BadRequestException("Invalid QR token format");
    }

    const [payloadB64, signatureB64] = parts;
    const expectedSig = crypto
      .createHmac("sha256", process.env.QR_SIGNING_SECRET)
      .update(payloadB64)
      .digest("base64url");

    if (
      signatureB64.length !== expectedSig.length ||
      !crypto.timingSafeEqual(Buffer.from(signatureB64), Buffer.from(expectedSig))
    ) {
      throw new UnauthorizedException("Invalid QR token signature");
    }

    let payload: { outletId: string; issuedAt: number; tableNumber?: string };
    try {
      payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8"));
    } catch {
      throw new BadRequestException("Malformed QR token payload");
    }

    const maxAgeMs = 24 * 60 * 60 * 1000; // 24 hours
    if (!payload.issuedAt || Date.now() - payload.issuedAt > maxAgeMs) {
      throw new UnauthorizedException("QR token has expired");
    }

    return {
      valid: true,
      outletId: payload.outletId,
      tableNumber: payload.tableNumber || "COUNTER",
      orderMode: "AT_SHOP_DINE_IN",
      issuedAt: payload.issuedAt,
    };
  }
}
