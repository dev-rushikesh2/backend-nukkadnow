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

  async createReview(dto: CreateReviewDto): Promise<Review> {
    const existing = await this.repo.findReviewByOrderId(dto.orderId);
    if (existing) {
      throw new ConflictException(`Review already submitted for order '${dto.orderId}'.`);
    }

    const review = new Review({
      id: UniqueIdentifier.generateV7(),
      orderId: dto.orderId,
      customerId: dto.customerId,
      outletId: dto.outletId,
      rating: dto.rating,
      comment: dto.comment,
    });

    await this.repo.saveReview(review);
    return review;
  }

  async getOutletReviews(outletId: string) {
    const reviews = await this.repo.findReviewsByOutletId(outletId);
    const summary = await this.repo.getOutletRatingSummary(outletId);

    return {
      outletId,
      averageRating: summary.averageRating,
      totalReviews: summary.totalReviews,
      reviews: reviews.map((r) => ({
        id: r.id,
        orderId: r.orderId,
        rating: r.rating,
        comment: r.comment,
        createdAt: r.createdAt,
      })),
    };
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
