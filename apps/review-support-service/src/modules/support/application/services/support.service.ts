import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { ReviewSupportRepositoryPort } from "../../domain/repositories/review-support.repository.port";
import { Review } from "../../domain/entities/review.entity";
import { SupportTicket, TicketMessage } from "../../domain/entities/support-ticket.entity";
import { CreateReviewDto, CreateTicketDto, AddMessageDto } from "../dto/review-support.dto";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";
import * as crypto from "crypto";

@Injectable()
export class SupportService {
  constructor(private readonly repo: ReviewSupportRepositoryPort) {}

  async createReview(dto: CreateReviewDto) {
    const scopeKey = dto.productId
      ? `PRODUCT:${dto.orderId}:${dto.productId}`
      : `ORDER:${dto.orderId}`;

    const existing = await this.repo.findReviewByScopeKey(scopeKey);
    if (existing) {
      throw new ConflictException(
        dto.productId
          ? `Review already submitted for this product in order '${dto.orderId}'.`
          : `Review already submitted for order '${dto.orderId}'.`
      );
    }

    const review = new Review({
      id: UniqueIdentifier.generateV7(),
      orderId: dto.orderId,
      reviewScopeKey: scopeKey,
      customerId: dto.customerId,
      customerName: dto.customerName,
      outletId: dto.outletId,
      productId: dto.productId,
      productName: dto.productName,
      rating: dto.rating,
      comment: dto.comment,
    });

    await this.repo.saveReview(review);
    return {
      id: review.id,
      orderId: review.orderId,
      customerId: review.customerId,
      customerName: review.customerName || "Verified Buyer",
      outletId: review.outletId,
      productId: review.productId || null,
      productName: review.productName || null,
      rating: review.rating,
      comment: review.comment || "",
      createdAt: review.createdAt,
    };
  }

  private buildBreakdown(reviews: Review[]): Record<number, number> {
    const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    for (const r of reviews) {
      if (counts[r.rating] !== undefined) counts[r.rating]++;
    }
    return counts;
  }

  private mapReviewSummary(r: Review) {
    return {
      id: r.id,
      orderId: r.orderId,
      outletId: r.outletId,
      productId: r.productId || null,
      productName: r.productName || null,
      customerName: r.customerName || "Verified Buyer",
      rating: r.rating,
      comment: r.comment || "",
      verifiedBuyer: true,
      createdAt: r.createdAt,
    };
  }

  async getOutletReviews(outletId: string) {
    const [reviews, summary] = await Promise.all([
      this.repo.findReviewsByOutletId(outletId),
      this.repo.getOutletRatingSummary(outletId),
    ]);

    return {
      outletId,
      averageRating: summary.averageRating,
      totalReviews: summary.totalReviews,
      ratingBreakdown: this.buildBreakdown(reviews),
      reviews: reviews.map((r) => this.mapReviewSummary(r)),
    };
  }

  async getProductReviews(productId: string) {
    const [reviews, summary] = await Promise.all([
      this.repo.findReviewsByProductId(productId),
      this.repo.getProductRatingSummary(productId),
    ]);

    return {
      productId,
      averageRating: summary.averageRating,
      totalReviews: summary.totalReviews,
      ratingBreakdown: this.buildBreakdown(reviews),
      reviews: reviews.map((r) => this.mapReviewSummary(r)),
    };
  }

  async getCustomerReviews(customerId: string) {
    const reviews = await this.repo.findReviewsByCustomerId(customerId);
    return reviews.map((r) => this.mapReviewSummary(r));
  }

  async getAllRatingSummaries() {
    return this.repo.getAllRatingSummaries();
  }

  async createTicket(dto: CreateTicketDto): Promise<SupportTicket> {
    const ticketId = UniqueIdentifier.generateV7();
    const ticketNumber = `TKT-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(2).toString("hex").toUpperCase()}`;

    const initialMessage = new TicketMessage({
      id: UniqueIdentifier.generateV7(),
      ticketId,
      senderId: dto.customerId,
      senderRole: "CUSTOMER",
      message: dto.initialMessage,
      createdAt: new Date(),
    });

    const ticket = new SupportTicket({
      id: ticketId,
      ticketNumber,
      customerId: dto.customerId,
      orderId: dto.orderId,
      subject: dto.subject,
      status: "OPEN",
      priority: dto.priority || "NORMAL",
      createdAt: new Date(),
      messages: [initialMessage],
    });

    await this.repo.saveTicket(ticket);
    return ticket;
  }

  async getCustomerTickets(customerId: string) {
    const tickets = await this.repo.findTicketsByCustomer(customerId);
    return tickets.map((t) => ({
      id: t.id,
      ticketNumber: t.ticketNumber,
      subject: t.subject,
      status: t.status,
      priority: t.priority,
      orderId: t.orderId,
      createdAt: t.createdAt,
      messageCount: t.messages.length,
    }));
  }

  async addMessage(ticketId: string, dto: AddMessageDto): Promise<TicketMessage> {
    const ticket = await this.repo.findTicketById(ticketId);
    if (!ticket) {
      throw new NotFoundException(`Ticket '${ticketId}' not found.`);
    }

    const message = new TicketMessage({
      id: UniqueIdentifier.generateV7(),
      ticketId,
      senderId: dto.senderId,
      senderRole: dto.senderRole,
      message: dto.message,
      createdAt: new Date(),
    });

    await this.repo.addTicketMessage(message);
    return message;
  }
}
