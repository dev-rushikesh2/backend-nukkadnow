import { Review } from "../entities/review.entity";
import { SupportTicket, TicketMessage } from "../entities/support-ticket.entity";

export abstract class ReviewSupportRepositoryPort {
  abstract saveReview(review: Review): Promise<void>;
  abstract findReviewByOrderId(orderId: string): Promise<Review | null>;
  abstract findReviewByScopeKey(reviewScopeKey: string): Promise<Review | null>;
  abstract findReviewsByOutletId(outletId: string): Promise<Review[]>;
  abstract findReviewsByProductId(productId: string): Promise<Review[]>;
  abstract findReviewsByCustomerId(customerId: string): Promise<Review[]>;
  abstract getOutletRatingSummary(outletId: string): Promise<{ averageRating: number; totalReviews: number }>;
  abstract getProductRatingSummary(productId: string): Promise<{ averageRating: number; totalReviews: number }>;
  abstract getAllRatingSummaries(): Promise<{
    outlets: Record<string, { averageRating: number; totalReviews: number }>;
    products: Record<string, { averageRating: number; totalReviews: number }>;
  }>;

  abstract saveTicket(ticket: SupportTicket): Promise<void>;
  abstract findTicketById(id: string): Promise<SupportTicket | null>;
  abstract findTicketsByCustomer(customerId: string): Promise<SupportTicket[]>;
  abstract addTicketMessage(message: TicketMessage): Promise<void>;
}
