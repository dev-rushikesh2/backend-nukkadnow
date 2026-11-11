import { AuthService } from "../../apps/identity-service/src/modules/identity/application/services/auth.service";
import { OtpManagerService } from "../../apps/identity-service/src/modules/identity/infrastructure/otp/otp-manager.service";
import { InMemoryUserRepository, InMemorySessionRepository } from "../../apps/identity-service/src/modules/identity/infrastructure/persistence/repositories/in-memory-identity.repository";

import { MerchantService } from "../../apps/merchant-service/src/modules/merchant/application/services/merchant.service";
import { InMemoryMerchantRepository, InMemoryOutletRepository } from "../../apps/merchant-service/src/modules/merchant/infrastructure/persistence/repositories/in-memory-merchant.repository";
import { SellerMode } from "../../apps/merchant-service/src/modules/merchant/domain/value-objects/seller-mode.vo";

import { CatalogService } from "../../apps/catalog-service/src/modules/catalog/application/services/catalog.service";
import { InMemoryProductRepository, InMemoryStockRepository } from "../../apps/catalog-service/src/modules/catalog/infrastructure/persistence/repositories/in-memory-catalog.repository";

import { DiscoveryService } from "../../apps/discovery-service/src/modules/discovery/application/services/discovery.service";
import { InMemoryDiscoveryRepository } from "../../apps/discovery-service/src/modules/discovery/infrastructure/persistence/repositories/in-memory-discovery.repository";

import { OrderService } from "../../apps/order-service/src/modules/orders/application/services/order.service";
import { InMemoryOrderRepository, InMemoryCartRepository } from "../../apps/order-service/src/modules/orders/infrastructure/persistence/repositories/in-memory-order.repository";

import { PaymentService } from "../../apps/payment-service/src/modules/payments/application/services/payment.service";
import { InMemoryPaymentRepository } from "../../apps/payment-service/src/modules/payments/infrastructure/persistence/repositories/in-memory-payment.repository";
import { PspClientFactory } from "../../apps/payment-service/src/modules/payments/infrastructure/external-clients/psp-client-factory.service";
import { MockPspAdapter } from "../../apps/payment-service/src/modules/payments/infrastructure/external-clients/mock-psp.adapter";
import { RazorpayAdapter } from "../../apps/payment-service/src/modules/payments/infrastructure/external-clients/razorpay.adapter";

import { FulfillmentService } from "../../apps/fulfillment-service/src/modules/fulfillment/application/services/fulfillment.service";
import { InMemoryFulfillmentRepository } from "../../apps/fulfillment-service/src/modules/fulfillment/infrastructure/persistence/repositories/in-memory-fulfillment.repository";

import { NotificationService } from "../../apps/notification-service/src/modules/notifications/application/services/notification.service";
import { InMemoryNotificationRepository } from "../../apps/notification-service/src/modules/notifications/infrastructure/persistence/repositories/in-memory-notification.repository";
import { NotificationChannelFactory } from "../../apps/notification-service/src/modules/notifications/infrastructure/external-clients/channel-factory.service";
import { MockChannelAdapter } from "../../apps/notification-service/src/modules/notifications/infrastructure/external-clients/mock-channel.adapter";
import { Msg91SmsAdapter } from "../../apps/notification-service/src/modules/notifications/infrastructure/external-clients/msg91-sms.adapter";
import { WhatsAppCloudAdapter } from "../../apps/notification-service/src/modules/notifications/infrastructure/external-clients/whatsapp-cloud.adapter";

import { AnalyticsService } from "../../apps/analytics-service/src/modules/analytics/application/services/analytics.service";
import { InMemoryAnalyticsRepository } from "../../apps/analytics-service/src/modules/analytics/infrastructure/persistence/repositories/in-memory-analytics.repository";

describe("NukkadNow E2E Architecture Flow (Sprint 0 to 15 Verification)", () => {
  it("should execute complete customer discovery, ordering, atomic reservation, payment, token pickup and analytics flow", async () => {
    // 1. Identity & Auth (Sprint 2)
    const authService = new AuthService(
      new OtpManagerService(),
      new InMemoryUserRepository(),
      new InMemorySessionRepository()
    );
    const otpReq = await authService.requestLoginOtp("+919876543210");
    const customerAuth = await authService.verifyLoginOtp("+919876543210", otpReq.devOtp!);
    expect(customerAuth.user.id).toBeDefined();

    // 2. Merchant & Outlet Setup (Sprint 3)
    const merchantService = new MerchantService(
      new InMemoryMerchantRepository(),
      new InMemoryOutletRepository()
    );
    const merchant = await merchantService.registerMerchant({
      organizationName: "Apna Nagpur Sweets",
      contactName: "Rameshwar Sharma",
      contactPhone: "+919876543211",
    });
    const outlet = await merchantService.createOutlet({
      merchantId: merchant.id,
      name: "Sitabuldi Flagship",
      sellerMode: SellerMode.PERMANENT,
      addressLine: "Shop 5, Main Rd, Sitabuldi",
      locality: "Sitabuldi",
      city: "Nagpur",
      latitude: 21.1458,
      longitude: 79.0882,
      isAddressPublic: true,
    });

    // 3. Catalogue & Inventory Management (Sprint 4 & 5)
    const catalogService = new CatalogService(
      new InMemoryProductRepository(),
      new InMemoryStockRepository()
    );
    const product = await catalogService.createProduct({
      tenantId: merchant.id,
      outletId: outlet.id,
      name: "Nagpur Orange Barfi Box",
      category: "Sweets",
      variants: [
        {
          name: "500g Box",
          pricePaise: 35000, // Rs. 350.00
          initialStock: 20,
        },
      ],
    });
    const variantId = product.variants[0].id;

    // 4. Discovery Feed Projection (Sprint 6)
    const discoveryService = new DiscoveryService(new InMemoryDiscoveryRepository());
    await discoveryService.syncOutletDocument({
      outletId: outlet.id,
      merchantName: merchant.organizationName,
      sellerMode: outlet.sellerMode,
      locality: "Sitabuldi",
      city: "Nagpur",
      latitude: 21.1458,
      longitude: 79.0882,
      categoryTags: ["Sweets", "Gifting"],
      isCurrentlyOpen: true,
      queueEstimateMinutes: 8,
      isApproximateLocation: false,
      addressDisplay: "Shop 5, Main Rd, Sitabuldi",
    });

    const nearbyOutlets = await discoveryService.searchNearby({
      latitude: 21.1458,
      longitude: 79.0882,
      radiusKm: 5,
    });
    expect(nearbyOutlets.count).toBe(1);
    expect(nearbyOutlets.outlets[0].outletId).toBe(outlet.id);

    // 5. Cart & Order Checkout Saga (Sprint 7 & 8)
    const orderService = new OrderService(
      new InMemoryOrderRepository(),
      new InMemoryCartRepository()
    );
    await orderService.addToCart(customerAuth.user.id, {
      outletId: outlet.id,
      tenantId: merchant.id,
      productId: product.id,
      variantId,
      title: "Nagpur Orange Barfi Box",
      quantity: 2,
      unitPricePaise: 35000, // 2 x 35000 = 70000 paise (Rs 700)
    });

    const order = await orderService.checkout(customerAuth.user.id, {
      fulfillmentType: "STORE_PICKUP",
    }, "unique_idem_key_777");

    // Subtotal 70000 + packaging 1000 + 5% tax 3500 = 74500 paise (Rs 745.00)
    expect(order.totalAmountPaise).toBe(74500);
    expect(order.status).toBe("PENDING_PAYMENT");

    // 6. Atomic Inventory Reservation (Sprint 5)
    const reserved = await catalogService.reserveStock({
      variantId,
      quantity: 2,
      orderId: order.orderId,
    });
    expect(reserved.remainingAvailable).toBe(18);

    // 7. Capacity Slot Reservation (Sprint 10)
    const fulfillmentService = new FulfillmentService(new InMemoryFulfillmentRepository());
    const slot = await fulfillmentService.createSlot({
      outletId: outlet.id,
      slotDate: "2026-11-12",
      startTime: "11:00",
      endTime: "11:30",
      maxCapacity: 10,
    });
    await fulfillmentService.reserveSlot({ slotId: slot.id, orderId: order.orderId });

    // 8. Payment Intent & Signed Webhook (Sprint 9)
    const paymentService = new PaymentService(new InMemoryPaymentRepository(), new PspClientFactory(new MockPspAdapter(), new RazorpayAdapter()));
    await paymentService.createPaymentIntent({
      orderId: order.orderId,
      tenantId: merchant.id,
      amountPaise: order.totalAmountPaise,
      provider: "MOCK",
    });

    const webhookResult = await paymentService.handlePspWebhook("MOCK", {
      eventId: "psp_webhook_evt_001",
      orderId: order.orderId,
    });
    expect(webhookResult.status).toBe("confirmed");

    // 9. Payment Confirmation -> Commit Stock & Generate Token (Sprint 5 & 10)
    await catalogService.commitStock({
      variantId,
      quantity: 2,
      orderId: order.orderId,
    });
    const token = await fulfillmentService.generatePickupToken({
      orderId: order.orderId,
      outletId: outlet.id,
    });
    expect(token.tokenNumber).toBe("A-01");

    // 10. Multi-Channel Notification (Sprint 12)
    const notifService = new NotificationService(new InMemoryNotificationRepository(), new NotificationChannelFactory(new MockChannelAdapter(), new Msg91SmsAdapter(), new WhatsAppCloudAdapter()));
    const notification = await notifService.dispatchNotification({
      recipient: customerAuth.user.phoneNumber,
      templateCode: "ORDER_READY_PICKUP",
      variables: {
        orderNumber: order.orderNumber,
        tokenNumber: token.tokenNumber,
      },
    });
    expect(notification.success).toBe(true);
    expect(notification.preview).toContain("Token: A-01");

    // 11. Customer Handover & Operational Analytics Fact (Sprint 14)
    await fulfillmentService.collectToken(outlet.id, token.tokenNumber);
    const analyticsService = new AnalyticsService(new InMemoryAnalyticsRepository());
    await analyticsService.recordOrderFact(outlet.id, order.totalAmountPaise, 12);

    const cockpit = await analyticsService.getMerchantCockpit(outlet.id);
    expect(cockpit.todayOrdersCount).toBe(1);
    expect(cockpit.todayRevenuePaise).toBe(74500);
    expect(cockpit.todayRevenueFormatted).toBe("₹745.00");
  });
});

