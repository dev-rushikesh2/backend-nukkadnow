import { Injectable } from "@nestjs/common";
import { ReviewSupportRepositoryPort } from "../../../domain/repositories/review-support.repository.port";
import { Review } from "../../../domain/entities/review.entity";
import { SupportTicket, TicketMessage } from "../../../domain/entities/support-ticket.entity";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaReviewSupportRepository implements ReviewSupportRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async saveReview(review: Review): Promise<void> {
    await this.prisma.review.upsert({
      where: { reviewScopeKey: review.reviewScopeKey },
      create: {
        id: review.id,
        orderId: review.orderId,
        reviewScopeKey: review.reviewScopeKey,
        customerId: review.customerId,
        customerName: review.customerName ?? null,
        outletId: review.outletId,
        productId: review.productId ?? null,
        productName: review.productName ?? null,
        cityCode: review.cityCode,
        rating: review.rating,
        comment: review.comment ?? null,
        isModerated: review.isModerated,
      },
      update: {
        rating: review.rating,
        comment: review.comment ?? null,
        customerName: review.customerName ?? null,
        isModerated: review.isModerated,
      },
    });
  }

  async findReviewByOrderId(orderId: string): Promise<Review | null> {
    const record = await this.prisma.review.findFirst({
      where: { orderId, productId: null },
    });
    return record ? this.toReviewDomain(record) : null;
  }

  async findReviewByScopeKey(reviewScopeKey: string): Promise<Review | null> {
    const record = await this.prisma.review.findUnique({
      where: { reviewScopeKey },
    });
    return record ? this.toReviewDomain(record) : null;
  }

  async findReviewsByOutletId(outletId: string): Promise<Review[]> {
    const records = await this.prisma.review.findMany({
      where: { outletId, isModerated: false },
      orderBy: { createdAt: "desc" },
    });
    return records.map((r: any) => this.toReviewDomain(r));
  }

  async findReviewsByProductId(productId: string): Promise<Review[]> {
    const records = await this.prisma.review.findMany({
      where: { productId, isModerated: false },
      orderBy: { createdAt: "desc" },
    });
    return records.map((r: any) => this.toReviewDomain(r));
  }

  async findReviewsByCustomerId(customerId: string): Promise<Review[]> {
    const records = await this.prisma.review.findMany({
      where: { customerId },
      orderBy: { createdAt: "desc" },
    });
    return records.map((r: any) => this.toReviewDomain(r));
  }

  async getOutletRatingSummary(outletId: string): Promise<{ averageRating: number; totalReviews: number }> {
    const agg = await this.prisma.review.aggregate({
      where: { outletId, isModerated: false },
      _avg: { rating: true },
      _count: { rating: true },
    });

    const averageRating = Math.round((agg._avg.rating ?? 0) * 10) / 10;
    const totalReviews = agg._count.rating ?? 0;

    return { averageRating, totalReviews };
  }

  async getProductRatingSummary(productId: string): Promise<{ averageRating: number; totalReviews: number }> {
    const agg = await this.prisma.review.aggregate({
      where: { productId, isModerated: false },
      _avg: { rating: true },
      _count: { rating: true },
    });

    const averageRating = Math.round((agg._avg.rating ?? 0) * 10) / 10;
    const totalReviews = agg._count.rating ?? 0;

    return { averageRating, totalReviews };
  }

  async getAllRatingSummaries(): Promise<{
    outlets: Record<string, { averageRating: number; totalReviews: number }>;
    products: Record<string, { averageRating: number; totalReviews: number }>;
  }> {
    const [outletGroups, productGroups] = await Promise.all([
      this.prisma.review.groupBy({
        by: ["outletId"],
        where: { isModerated: false },
        _avg: { rating: true },
        _count: { rating: true },
      }),
      this.prisma.review.groupBy({
        by: ["productId"],
        where: { isModerated: false, productId: { not: null } },
        _avg: { rating: true },
        _count: { rating: true },
      }),
    ]);

    const outlets: Record<string, { averageRating: number; totalReviews: number }> = {};
    for (const g of outletGroups) {
      outlets[g.outletId] = {
        averageRating: Math.round((g._avg.rating ?? 0) * 10) / 10,
        totalReviews: g._count.rating ?? 0,
      };
    }

    const products: Record<string, { averageRating: number; totalReviews: number }> = {};
    for (const g of productGroups) {
      if (g.productId) {
        products[g.productId] = {
          averageRating: Math.round((g._avg.rating ?? 0) * 10) / 10,
          totalReviews: g._count.rating ?? 0,
        };
      }
    }

    return { outlets, products };
  }

  async saveTicket(ticket: SupportTicket): Promise<void> {
    await this.prisma.supportTicket.upsert({
      where: { id: ticket.id },
      create: {
        id: ticket.id,
        ticketNumber: ticket.ticketNumber,
        customerId: ticket.customerId,
        tenantId: ticket.tenantId ?? null,
        orderId: ticket.orderId ?? null,
        cityCode: ticket.cityCode,
        subject: ticket.subject,
        status: ticket.status,
        priority: ticket.priority,
        messages: {
          create: ticket.messages.map((m) => ({
            id: m.id,
            senderId: m.senderId,
            senderRole: m.senderRole,
            message: m.message,
            createdAt: m.createdAt,
          })),
        },
      },
      update: {
        status: ticket.status,
        priority: ticket.priority,
      },
    });
  }

  async findTicketById(id: string): Promise<SupportTicket | null> {
    const record = await this.prisma.supportTicket.findUnique({
      where: { id },
      include: { messages: { orderBy: { createdAt: "asc" } } },
    });
    return record ? this.toTicketDomain(record) : null;
  }

  async findTicketsByCustomer(customerId: string): Promise<SupportTicket[]> {
    const records = await this.prisma.supportTicket.findMany({
      where: { customerId },
      include: { messages: { orderBy: { createdAt: "asc" } } },
      orderBy: { createdAt: "desc" },
    });
    return records.map((r: any) => this.toTicketDomain(r));
  }

  async addTicketMessage(message: TicketMessage): Promise<void> {
    await this.prisma.ticketMessage.create({
      data: {
        id: message.id,
        ticketId: message.ticketId,
        senderId: message.senderId,
        senderRole: message.senderRole,
        message: message.message,
        createdAt: message.createdAt,
      },
    });
  }

  private toReviewDomain(record: any): Review {
    return new Review({
      id: record.id,
      orderId: record.orderId,
      reviewScopeKey: record.reviewScopeKey ?? undefined,
      customerId: record.customerId,
      customerName: record.customerName ?? undefined,
      outletId: record.outletId,
      productId: record.productId ?? undefined,
      productName: record.productName ?? undefined,
      cityCode: record.cityCode,
      rating: record.rating,
      comment: record.comment ?? undefined,
      isModerated: record.isModerated,
      createdAt: record.createdAt,
    });
  }

  private toTicketDomain(record: any): SupportTicket {
    return new SupportTicket({
      id: record.id,
      ticketNumber: record.ticketNumber,
      customerId: record.customerId,
      tenantId: record.tenantId ?? undefined,
      orderId: record.orderId ?? undefined,
      cityCode: record.cityCode,
      subject: record.subject,
      status: record.status,
      priority: record.priority,
      createdAt: record.createdAt,
      messages: (record.messages ?? []).map(
        (m: any) =>
          new TicketMessage({
            id: m.id,
            ticketId: m.ticketId,
            senderId: m.senderId,
            senderRole: m.senderRole,
            message: m.message,
            createdAt: m.createdAt,
          })
      ),
    });
  }
}
