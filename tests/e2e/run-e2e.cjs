/**
 * Standalone E2E Architecture Flow Verifier
 * Executes the complete 11-step customer saga from Sprint 0 to 15:
 * Identity -> Merchant -> Catalog -> Discovery -> Order -> Inventory -> Fulfillment -> Payment -> Notifications -> Handover -> Analytics
 */

const assert = require('node:assert/strict');
const path = require('path');

process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = process.env.JWT_SECRET || 'local-development-secret-must-be-min-32-chars-long!';
process.env.JWT_ISSUER = process.env.JWT_ISSUER || 'nukkadnow-identity-service';
process.env.JWT_AUDIENCE = process.env.JWT_AUDIENCE || 'nukkadnow-platform';
process.env.OTP_HMAC_SECRET = process.env.OTP_HMAC_SECRET || 'dev_otp_hmac_secret_min_16_chars';
process.env.QR_SIGNING_SECRET = process.env.QR_SIGNING_SECRET || 'dev_qr_signing_secret_min_32_chars!';
process.env.PAYMENT_KEY_ID = process.env.PAYMENT_KEY_ID || 'rzp_test_e2e_key_id';
process.env.PAYMENT_KEY_SECRET = process.env.PAYMENT_KEY_SECRET || 'rzp_test_e2e_key_secret';
process.env.PAYMENT_WEBHOOK_SECRET = process.env.PAYMENT_WEBHOOK_SECRET || 'rzp_test_e2e_webhook_secret';

async function runE2EVerification() {
  console.log("================================================================================");
  console.log(" NukkadNow Backend Architecture — Master E2E Saga Verification Suite");
  console.log("================================================================================\n");

  // 1. Identity & Auth Service
  const { AuthService } = require('../../apps/identity-service/dist/apps/identity-service/src/modules/identity/application/services/auth.service');
  const { OtpManagerService } = require('../../apps/identity-service/dist/apps/identity-service/src/modules/identity/infrastructure/otp/otp-manager.service');
  const { InMemoryUserRepository, InMemorySessionRepository } = require('../../apps/identity-service/dist/apps/identity-service/src/modules/identity/infrastructure/persistence/repositories/in-memory-identity.repository');

  const authService = new AuthService(
    new OtpManagerService(),
    new InMemoryUserRepository(),
    new InMemorySessionRepository()
  );
  const otpReq = await authService.requestLoginOtp("+919876543210");
  assert.ok(otpReq.devOtp, "devOtp should be generated in test environment");
  const customerAuth = await authService.verifyLoginOtp("+919876543210", otpReq.devOtp);
  assert.ok(customerAuth.user.id, "Customer user ID must be defined");
  console.log("✅ Step 1: Identity & Cryptographic Auth Passed. User ID:", customerAuth.user.id);

  // 2. Merchant & Outlet Setup
  const { MerchantService } = require('../../apps/merchant-service/dist/apps/merchant-service/src/modules/merchant/application/services/merchant.service');
  const { InMemoryMerchantRepository, InMemoryOutletRepository } = require('../../apps/merchant-service/dist/apps/merchant-service/src/modules/merchant/infrastructure/persistence/repositories/in-memory-merchant.repository');
  const { SellerMode } = require('../../apps/merchant-service/dist/apps/merchant-service/src/modules/merchant/domain/value-objects/seller-mode.vo');

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
  assert.ok(merchant.id && outlet.id, "Merchant and Outlet must be created");
  console.log("✅ Step 2: Merchant & Outlet Setup Passed. Outlet:", outlet.name);

  // 3. Catalogue & Inventory Management
  const { CatalogService } = require('../../apps/catalog-service/dist/apps/catalog-service/src/modules/catalog/application/services/catalog.service');
  const { InMemoryProductRepository, InMemoryStockRepository, InMemoryPriceCapRepository } = require('../../apps/catalog-service/dist/apps/catalog-service/src/modules/catalog/infrastructure/persistence/repositories/in-memory-catalog.repository');

  const catalogService = new CatalogService(
    new InMemoryProductRepository(),
    new InMemoryStockRepository(),
    new InMemoryPriceCapRepository()
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
  assert.strictEqual(product.variants[0].pricePaise, 35000);
  console.log("✅ Step 3: Catalog & Inventory Management Passed. Product:", product.name);

  // 4. Discovery Feed Projection
  const { DiscoveryService } = require('../../apps/discovery-service/dist/apps/discovery-service/src/modules/discovery/application/services/discovery.service');
  const { InMemoryDiscoveryRepository } = require('../../apps/discovery-service/dist/apps/discovery-service/src/modules/discovery/infrastructure/persistence/repositories/in-memory-discovery.repository');

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
  assert.strictEqual(nearbyOutlets.count, 1);
  assert.strictEqual(nearbyOutlets.outlets[0].outletId, outlet.id);
  console.log("✅ Step 4: Geospatial Discovery Search Passed. Found 1 outlet in radius.");

  // 5. Cart & Order Checkout Saga
  const { OrderService } = require('../../apps/order-service/dist/apps/order-service/src/modules/orders/application/services/order.service');
  const { InMemoryOrderRepository, InMemoryCartRepository } = require('../../apps/order-service/dist/apps/order-service/src/modules/orders/infrastructure/persistence/repositories/in-memory-order.repository');

  const catalogClientAdapter = {
    reserveStock: async (variantId, quantity, orderId) => {
      const res = await catalogService.reserveStock({ variantId, quantity, orderId });
      return res.remainingAvailable >= 0;
    },
    releaseStock: async (variantId, quantity, orderId) => {
      await catalogService.releaseStock({ variantId, quantity, orderId });
    },
    commitStock: async (variantId, quantity, orderId) => {
      await catalogService.commitStock({ variantId, quantity, orderId });
    },
  };

  const orderService = new OrderService(
    new InMemoryOrderRepository(),
    new InMemoryCartRepository(),
    catalogClientAdapter
  );
  await orderService.addToCart(customerAuth.user.id, {
    outletId: outlet.id,
    tenantId: merchant.id,
    productId: product.id,
    variantId,
    title: "Nagpur Orange Barfi Box",
    quantity: 2,
    unitPricePaise: 35000,
  });

  const order = await orderService.checkout(customerAuth.user.id, {
    fulfillmentType: "STORE_PICKUP",
  }, "unique_idem_key_777");

  assert.strictEqual(order.totalAmountPaise, 74500); // 70000 + 1000 + 3500
  assert.strictEqual(order.status, "PENDING_PAYMENT");
  console.log("✅ Step 5: Authoritative Server-Side Pricing & Checkout Passed. Total:", order.totalAmountPaise, "Paise (Rs. 745.00)");

  // 6. Atomic Inventory Reservation
  const reserved = await catalogService.reserveStock({
    variantId,
    quantity: 2,
    orderId: order.orderId,
  });
  assert.strictEqual(reserved.remainingAvailable, 16);
  console.log("✅ Step 6: Atomic Inventory Reservation Passed. Remaining Stock:", reserved.remainingAvailable);

  // 7. Capacity Slot Reservation
  const { FulfillmentService } = require('../../apps/fulfillment-service/dist/apps/fulfillment-service/src/modules/fulfillment/application/services/fulfillment.service');
  const { InMemoryFulfillmentRepository } = require('../../apps/fulfillment-service/dist/apps/fulfillment-service/src/modules/fulfillment/infrastructure/persistence/repositories/in-memory-fulfillment.repository');

  const fulfillmentService = new FulfillmentService(new InMemoryFulfillmentRepository());
  const slot = await fulfillmentService.createSlot({
    outletId: outlet.id,
    slotDate: "2026-11-12",
    startTime: "11:00",
    endTime: "11:30",
    maxCapacity: 10,
  });
  await fulfillmentService.reserveSlot({ slotId: slot.id, orderId: order.orderId });
  console.log("✅ Step 7: Fulfillment Capacity Slot Reservation Passed. Slot ID:", slot.id);

  // 8. Payment Intent & Webhook
  const { PaymentService } = require('../../apps/payment-service/dist/apps/payment-service/src/modules/payments/application/services/payment.service');
  const { InMemoryPaymentRepository } = require('../../apps/payment-service/dist/apps/payment-service/src/modules/payments/infrastructure/persistence/repositories/in-memory-payment.repository');
  const { PspClientFactory } = require('../../apps/payment-service/dist/apps/payment-service/src/modules/payments/infrastructure/external-clients/psp-client-factory.service');
  const { MockPspAdapter } = require('../../apps/payment-service/dist/apps/payment-service/src/modules/payments/infrastructure/external-clients/mock-psp.adapter');
  const { RazorpayAdapter } = require('../../apps/payment-service/dist/apps/payment-service/src/modules/payments/infrastructure/external-clients/razorpay.adapter');

  const paymentService = new PaymentService(
    new InMemoryPaymentRepository(),
    new PspClientFactory(new MockPspAdapter(), new RazorpayAdapter())
  );
  await paymentService.createPaymentIntent({
    orderId: order.orderId,
    tenantId: merchant.id,
    amountPaise: order.totalAmountPaise,
    provider: "MOCK",
  });

  const webhookResult = await paymentService.handlePspWebhook("MOCK", {
    eventId: "psp_webhook_evt_001",
    orderId: order.orderId,
    paymentId: "pay_mock_test_123",
  });
  assert.strictEqual(webhookResult.status, "confirmed");
  console.log("✅ Step 8: Payment Webhook Processing & Intent Passed. Status:", webhookResult.status);

  // 9. Stock Commit & Token Generation
  await catalogService.commitStock({
    variantId,
    quantity: 2,
    orderId: order.orderId,
  });
  const token = await fulfillmentService.generatePickupToken({
    orderId: order.orderId,
    outletId: outlet.id,
  });
  assert.strictEqual(token.tokenNumber, "A-01");
  console.log("✅ Step 9: Stock Commit & Pickup Token Generation Passed. Token Number:", token.tokenNumber);

  // 10. Multi-Channel Notification Dispatch
  const { NotificationService } = require('../../apps/notification-service/dist/apps/notification-service/src/modules/notifications/application/services/notification.service');
  const { InMemoryNotificationRepository } = require('../../apps/notification-service/dist/apps/notification-service/src/modules/notifications/infrastructure/persistence/repositories/in-memory-notification.repository');
  const { NotificationTemplate } = require('../../apps/notification-service/dist/apps/notification-service/src/modules/notifications/domain/entities/notification-template.entity');
  const { NotificationChannelFactory } = require('../../apps/notification-service/dist/apps/notification-service/src/modules/notifications/infrastructure/external-clients/channel-factory.service');
  const { MockChannelAdapter } = require('../../apps/notification-service/dist/apps/notification-service/src/modules/notifications/infrastructure/external-clients/mock-channel.adapter');
  const { Msg91SmsAdapter } = require('../../apps/notification-service/dist/apps/notification-service/src/modules/notifications/infrastructure/external-clients/msg91-sms.adapter');
  const { WhatsAppCloudAdapter } = require('../../apps/notification-service/dist/apps/notification-service/src/modules/notifications/infrastructure/external-clients/whatsapp-cloud.adapter');

  const notifRepo = new InMemoryNotificationRepository();
  await notifRepo.saveTemplate(
    new NotificationTemplate({
      id: "tpl_order_pickup",
      code: "ORDER_READY_PICKUP",
      channel: "WHATSAPP",
      templateBody: "Your order {orderNumber} is READY for pickup! Show Token: {tokenNumber} at counter.",
    })
  );

  const notifService = new NotificationService(
    notifRepo,
    new NotificationChannelFactory(new MockChannelAdapter(), new Msg91SmsAdapter(), new WhatsAppCloudAdapter())
  );
  const notification = await notifService.dispatchNotification({
    recipient: customerAuth.user.phoneNumber,
    templateCode: "ORDER_READY_PICKUP",
    variables: {
      orderNumber: order.orderNumber,
      tokenNumber: token.tokenNumber,
    },
  });
  assert.strictEqual(notification.success, true);
  assert.ok(notification.preview.includes("Token: A-01"));
  console.log("✅ Step 10: Multi-Channel Notification Dispatch Passed. Recipient:", customerAuth.user.phoneNumber);

  // 11. Customer Handover & Operational Analytics
  await fulfillmentService.collectToken(outlet.id, token.tokenNumber);
  const { AnalyticsService } = require('../../apps/analytics-service/dist/apps/analytics-service/src/modules/analytics/application/services/analytics.service');
  const { InMemoryAnalyticsRepository } = require('../../apps/analytics-service/dist/apps/analytics-service/src/modules/analytics/infrastructure/persistence/repositories/in-memory-analytics.repository');

  const analyticsService = new AnalyticsService(new InMemoryAnalyticsRepository());
  await analyticsService.recordOrderFact(outlet.id, order.totalAmountPaise, 12);

  const cockpit = await analyticsService.getMerchantCockpit(outlet.id);
  assert.strictEqual(cockpit.todayOrdersCount, 1);
  assert.strictEqual(cockpit.todayRevenuePaise, 74500);
  assert.strictEqual(cockpit.todayRevenueFormatted, "₹745.00");
  console.log("✅ Step 11: Customer Handover & Merchant Cockpit Analytics Passed.");
  console.log("   - Today's Orders Count:", cockpit.todayOrdersCount);
  console.log("   - Today's Revenue (Paise):", cockpit.todayRevenuePaise);
  console.log("   - Today's Revenue (Formatted):", cockpit.todayRevenueFormatted);

  console.log("\n================================================================================");
  console.log("🎉 ALL 11 ARCHITECTURAL TIERS VERIFIED PASSING CLEANLY!");
  console.log("================================================================================");
  process.exit(0);
}

runE2EVerification().catch((err) => {
  console.error("\n❌ E2E Verification Failed:", err);
  process.exit(1);
});
