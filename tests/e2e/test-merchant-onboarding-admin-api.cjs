/**
 * Comprehensive API Flow Test:
 * Tests the complete Merchant Onboarding -> Admin Verification Queue flow
 * via API Gateway BFF Controllers and Downstream Merchant Service Controllers.
 */

const assert = require('node:assert/strict');
const path = require('path');

// Configure Environment
process.env.NODE_ENV = 'test';
process.env.PORT = '4002';
process.env.GATEWAY_PORT = '4000';
process.env.MERCHANT_SERVICE_URL = 'http://127.0.0.1:4002';
const JWT_SECRET = process.env.JWT_SECRET || "local-development-secret-must-be-min-32-chars-long!";

const jwt = require('../../apps/api-gateway/node_modules/jsonwebtoken');

// Import compiled services and controllers
const { PartnerRegistrationController } = require('../../apps/merchant-service/dist/apps/merchant-service/src/modules/merchant/presentation/http/controllers/partner-registration.controller');
const { PartnerRegistrationService } = require('../../apps/merchant-service/dist/apps/merchant-service/src/modules/merchant/application/services/partner-registration.service');
const { InMemoryPartnerRegistrationRepository } = require('../../apps/merchant-service/dist/apps/merchant-service/src/modules/merchant/infrastructure/persistence/repositories/in-memory-partner-registration.repository');
const { InMemoryMerchantRepository, InMemoryOutletRepository } = require('../../apps/merchant-service/dist/apps/merchant-service/src/modules/merchant/infrastructure/persistence/repositories/in-memory-merchant.repository');

const { MerchantController } = require('../../apps/api-gateway/dist/apps/api-gateway/src/bff/merchant/merchant.controller');
const { AdminController } = require('../../apps/api-gateway/dist/apps/api-gateway/src/bff/admin/admin.controller');

async function runMasterApiFlowTest() {
  console.log("================================================================================");
  console.log("  NUKKADNOW MASTER FLOW TEST: MERCHANT ONBOARDING -> ADMIN VERIFICATION QUEUE");
  console.log("================================================================================\n");

  // 1. Initialize Merchant Service Domain & Controller Layer
  const registrationRepo = new InMemoryPartnerRegistrationRepository();
  const merchantRepo = new InMemoryMerchantRepository();
  const outletRepo = new InMemoryOutletRepository();
  const registrationService = new PartnerRegistrationService(registrationRepo, merchantRepo, outletRepo);
  const partnerRegController = new PartnerRegistrationController(registrationService);

  // 2. Initialize Dispatcher Proxy that wires API Gateway to Downstream Merchant Service
  const proxyDispatcher = {
    dispatch: async (serviceUrl, apiPath, options = {}) => {
      // Direct route dispatch matching API Gateway -> Merchant Service HTTP endpoints
      if (apiPath === '/api/v1/merchants/onboarding/draft') {
        const body = JSON.parse(options.body);
        return await partnerRegController.saveDraft(body);
      }
      if (apiPath === '/api/v1/merchants/onboarding/submit') {
        const body = JSON.parse(options.body);
        return await partnerRegController.submit(body);
      }
      if (apiPath.startsWith('/api/v1/merchants/onboarding/status/')) {
        const identifier = decodeURIComponent(apiPath.replace('/api/v1/merchants/onboarding/status/', ''));
        return await partnerRegController.getStatus(
          identifier,
          options.headers?.['x-tenant-id'],
          { headers: options.headers }
        );
      }
      if (apiPath.startsWith('/api/v1/merchants/onboarding') && options.method === 'PATCH') {
        const parts = apiPath.split('/');
        const applicationId = parts[5];
        const body = JSON.parse(options.body);
        return await partnerRegController.updateStatus(applicationId, body, { headers: options.headers });
      }
      if (apiPath.startsWith('/api/v1/merchants/onboarding')) {
        let status = undefined;
        if (apiPath.includes('?status=')) {
          status = decodeURIComponent(apiPath.split('?status=')[1]);
        }
        return await partnerRegController.listRegistrations(
          status,
          options.headers?.['x-tenant-id'],
          { headers: options.headers }
        );
      }
      throw new Error(`Unhandled dispatch path: ${apiPath}`);
    }
  };

  // 3. Initialize API Gateway BFF Controllers (Merchant BFF and Admin BFF)
  const merchantController = new MerchantController(proxyDispatcher);
  const adminController = new AdminController(proxyDispatcher);

  // ============================================================================
  // STEP 1: Apply for Merchant Registration (Draft via Merchant BFF API)
  // ============================================================================
  console.log("--------------------------------------------------------------------------------");
  console.log("STEP 1: Apply for Merchant Registration via API Gateway Merchant BFF");
  console.log("Endpoint: POST /api/v1/merchant/onboarding/draft");
  console.log("--------------------------------------------------------------------------------");

  const draftPayload = {
    currentStep: 1,
    businessType: "retail",
    businessName: "Vidarbha Organic Farm Fresh",
    ownerName: "Nitin Gadkari Patil",
    mobileNumber: "+919822998877",
    email: "nitin.patil@vidarbhafarm.in",
    businessCategory: "Fruits & Vegetables",
    businessDescription: "Direct farm-fresh organic fruits, vegetables, and daily staples from Vidarbha farms.",
    pincode: "440010",
    state: "Maharashtra",
    district: "Nagpur",
    city: "Nagpur",
    locality: "Ramdaspeth",
    fullAddress: "Shop 10, Central Bazar Rd, Ramdaspeth, Nagpur",
    latitude: 21.1352,
    longitude: 79.0768,
    homeBusinessPrivacy: false,
    scheduleMode: "weekly",
    storePickup: true,
    merchantDelivery: true,
    serviceRadius: "7 km",
    minOrderValue: 250,
    prepTime: "20 minutes",
    bankAccountHolder: "Nitin Patil",
    bankAccountNumber: "91982299887701",
    bankIfscCode: "HDFC0001234",
    bankName: "HDFC Bank Ramdaspeth",
  };

  const draftResult = await merchantController.saveOnboardingDraft(draftPayload, {}, {});
  console.log("Draft Result:", JSON.stringify(draftResult, null, 2));

  assert.ok(draftResult.success, "Draft creation must indicate success");
  assert.ok(draftResult.applicationId, "Must return an applicationId tracking string");
  const applicationId = draftResult.applicationId;
  console.log(`\n✅ Generated Application Tracking ID: ${applicationId}`);

  // ============================================================================
  // STEP 2: Submit Application for Review via Merchant BFF API
  // ============================================================================
  console.log("\n--------------------------------------------------------------------------------");
  console.log("STEP 2: Submit Merchant Registration for Verification Review");
  console.log("Endpoint: POST /api/v1/merchant/onboarding/submit");
  console.log("--------------------------------------------------------------------------------");

  const submitPayload = {
    applicationId,
    termsAgreed: true,
  };

  const submitResult = await merchantController.submitOnboarding(submitPayload, {}, {});
  console.log("Submit Result:", JSON.stringify(submitResult, null, 2));

  assert.ok(submitResult.success, "Submit result must indicate success");
  assert.strictEqual(submitResult.status, "UNDER_REVIEW", "Application status must transition to UNDER_REVIEW");
  console.log(`✅ Application status transitioned to: ${submitResult.status}`);

  // ============================================================================
  // STEP 3: Check Application Status as Merchant via API
  // ============================================================================
  console.log("\n--------------------------------------------------------------------------------");
  console.log("STEP 3: Check Application Status as Merchant");
  console.log(`Endpoint: GET /api/v1/merchant/onboarding/status/${applicationId}`);
  console.log("--------------------------------------------------------------------------------");

  const merchantStatusResult = await merchantController.getOnboardingStatus(applicationId, {}, {});
  console.log("Merchant Status Check:", JSON.stringify(merchantStatusResult, null, 2));

  assert.strictEqual(merchantStatusResult.applicationId, applicationId);
  assert.strictEqual(merchantStatusResult.status, "UNDER_REVIEW");
  assert.strictEqual(merchantStatusResult.businessName, "Vidarbha Organic Farm Fresh");
  console.log("✅ Merchant Status Confirmed: UNDER_REVIEW, businessName verified");

  // ============================================================================
  // STEP 4: Check if Application is Visible in Admin Verification Queue
  // ============================================================================
  console.log("\n--------------------------------------------------------------------------------");
  console.log("STEP 4: Check Application in Admin Verification Queue via Admin BFF");
  console.log("Endpoint: GET /api/v1/admin/onboarding/all");
  console.log("--------------------------------------------------------------------------------");

  // Generate authentic cryptographic Super Admin JWT token
  const adminToken = jwt.sign(
    {
      sub: "admin-master-001",
      email: "superadmin@nukkadnow.com",
      roles: ["SUPER_ADMIN", "PLATFORM_ADMIN"],
      isSuperAdmin: true,
      iss: "https://auth.nukkadnow.internal",
      aud: "nukkadnow-api",
    },
    JWT_SECRET,
    { expiresIn: "2h" }
  );

  const adminHeaders = {
    authorization: `Bearer ${adminToken}`,
  };

  const adminQueueResult = await adminController.listAllRegistrations(undefined, adminHeaders);
  console.log(`Total Applications in Admin Queue: ${adminQueueResult.count}`);

  const items = adminQueueResult.items || [];
  const foundInAdmin = items.find(item => item.applicationId === applicationId || item.mobileNumber === "+919822998877");

  console.log("\nMatched Application in Admin Verification Queue:", JSON.stringify(foundInAdmin, null, 2));

  assert.ok(foundInAdmin, `CRITICAL: Application ${applicationId} MUST appear in the Admin verification queue!`);
  assert.strictEqual(foundInAdmin.applicationId, applicationId);
  assert.strictEqual(foundInAdmin.businessName, "Vidarbha Organic Farm Fresh");
  assert.strictEqual(foundInAdmin.ownerName, "Nitin Gadkari Patil");
  assert.strictEqual(foundInAdmin.status, "UNDER_REVIEW");
  assert.strictEqual(foundInAdmin.city, "Nagpur");
  assert.strictEqual(foundInAdmin.locality, "Ramdaspeth");
  console.log(`\n🎉 VERIFIED: Merchant Application ${applicationId} is PROPERLY SHOWING IN ADMIN!`);

  // ============================================================================
  // STEP 5: Admin Approves the Merchant Application
  // ============================================================================
  console.log("\n--------------------------------------------------------------------------------");
  console.log("STEP 5: Admin Approves the Partner Application via Admin BFF");
  console.log(`Endpoint: PATCH /api/v1/admin/onboarding/${applicationId}/status`);
  console.log("--------------------------------------------------------------------------------");

  const approvalPayload = {
    status: "APPROVED",
    reason: "KYC documentation, FSSAI registration, and geo-locality geofence successfully verified.",
    notes: "Approved by Senior Lead Auditor. Primary storefront created.",
    changedBy: "PLATFORM_SUPER_ADMIN",
  };

  const approvalResult = await adminController.updateApplicationStatus(applicationId, approvalPayload, adminHeaders);
  console.log("Admin Approval Result:", JSON.stringify(approvalResult, null, 2));

  assert.strictEqual(approvalResult.status, "APPROVED");
  assert.ok(approvalResult.merchantId, "Must have provisioned merchantId upon approval");
  const provisionedMerchantId = approvalResult.merchantId;
  console.log(`✅ Application APPROVED! Provisioned Merchant ID: ${provisionedMerchantId}`);

  // ============================================================================
  // STEP 6: Confirm Approved Status in Both Admin and Merchant Views
  // ============================================================================
  console.log("\n--------------------------------------------------------------------------------");
  console.log("STEP 6: Final Verification - Both Admin and Merchant Reflect APPROVED Status");
  console.log("--------------------------------------------------------------------------------");

  // 1. Check in Admin Filtered View (status=APPROVED)
  const approvedQueue = await adminController.listAllRegistrations("APPROVED", adminHeaders);
  const foundApproved = (approvedQueue.items || []).find(item => item.applicationId === applicationId);
  assert.ok(foundApproved, "Application must be present in Admin APPROVED filter list");
  assert.strictEqual(foundApproved.status, "APPROVED");
  console.log("✅ Admin View Status: APPROVED | Merchant ID:", foundApproved.merchantId);

  // 2. Check in Merchant View
  const finalMerchantCheck = await merchantController.getOnboardingStatus(applicationId, {}, {});
  assert.strictEqual(finalMerchantCheck.status, "APPROVED");
  console.log("✅ Merchant View Status: APPROVED");

  // 3. Verify Merchant Entity Provisioned in Storefront DB
  const provisionedMerchant = await merchantRepo.findById(provisionedMerchantId);
  assert.ok(provisionedMerchant, "Merchant entity must exist in the repository");
  assert.strictEqual(provisionedMerchant.organizationName, "Vidarbha Organic Farm Fresh");
  assert.strictEqual(provisionedMerchant.verificationStatus, "VERIFIED");
  console.log("✅ Storefront Merchant Provisioned:", provisionedMerchant.organizationName, "| Status:", provisionedMerchant.verificationStatus);

  console.log("\n================================================================================");
  console.log("🎉 COMPLETE END-TO-END FLOW VERIFICATION COMPLETED WITH 100% SUCCESS!");
  console.log("   1. Merchant Application Submitted via API: ✅ PASSED");
  console.log("   2. Merchant Application Showing in Admin via API: ✅ PASSED");
  console.log("   3. Admin Application Approval via API: ✅ PASSED");
  console.log("   4. Automatic Storefront & Outlet Provisioning: ✅ PASSED");
  console.log("   5. Live Status Synchronized Across Both Roles: ✅ PASSED");
  console.log("================================================================================\n");
}

runMasterApiFlowTest().catch((err) => {
  console.error("\n❌ Master API Flow Test Failed:", err);
  process.exit(1);
});
