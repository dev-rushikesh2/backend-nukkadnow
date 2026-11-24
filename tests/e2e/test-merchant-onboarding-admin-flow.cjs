/**
 * Complete End-to-End API Flow Test:
 * 1. Apply for Merchant Registration via API Gateway Merchant BFF
 * 2. Submit progressive onboarding draft and final submission
 * 3. Verify status as Merchant via API
 * 4. Verify application appears in Admin Verification Queue via Admin BFF API
 * 5. Admin Approves the application via Admin BFF API
 * 6. Confirm status transitions to APPROVED in both Admin and Merchant views
 */

const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const assert = require('node:assert/strict');
const jwt = require('../../apps/api-gateway/node_modules/jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || "local-development-secret-must-be-min-32-chars-long!";
const GATEWAY_URL = "http://127.0.0.1:4000";
const MERCHANT_URL = "http://127.0.0.1:4002";

function waitForHttp(url, maxAttempts = 30, intervalMs = 1000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      http.get(url, (res) => {
        if (res.statusCode < 500) {
          clearInterval(interval);
          resolve(true);
        }
      }).on('error', () => {
        if (attempts >= maxAttempts) {
          clearInterval(interval);
          reject(new Error(`Timed out waiting for ${url} after ${maxAttempts} attempts`));
        }
      });
    }, intervalMs);
  });
}

async function runFlowTest() {
  console.log("================================================================================");
  console.log("  NUKKADNOW MASTER FLOW TEST: MERCHANT ONBOARDING -> ADMIN VERIFICATION QUEUE");
  console.log("================================================================================\n");

  const backendDir = path.resolve(__dirname, '..', '..');

  // Step 0: Boot up merchant-service and api-gateway
  console.log("[Setup] Booting merchant-service (Port 4002) and api-gateway (Port 4000)...");
  
  const merchantProc = spawn(process.execPath, ['apps/merchant-service/dist/apps/merchant-service/src/main.js'], {
    cwd: backendDir,
    env: { ...process.env, PORT: '4002', NODE_ENV: 'test' },
    stdio: 'pipe',
  });

  const gatewayProc = spawn(process.execPath, ['apps/api-gateway/dist/apps/api-gateway/src/main.js'], {
    cwd: backendDir,
    env: {
      ...process.env,
      GATEWAY_PORT: '4000',
      MERCHANT_SERVICE_URL: 'http://127.0.0.1:4002',
      NODE_ENV: 'test',
    },
    stdio: 'pipe',
  });

  // Track logs for debugging
  merchantProc.stdout.on('data', (d) => process.stdout.write(`[Merchant] ${d}`));
  merchantProc.stderr.on('data', (d) => process.stderr.write(`[Merchant ERR] ${d}`));
  gatewayProc.stdout.on('data', (d) => process.stdout.write(`[Gateway] ${d}`));
  gatewayProc.stderr.on('data', (d) => process.stderr.write(`[Gateway ERR] ${d}`));

  const cleanup = () => {
    console.log("\n[Teardown] Shutting down service test processes...");
    try { merchantProc.kill('SIGKILL'); } catch {}
    try { gatewayProc.kill('SIGKILL'); } catch {}
  };

  process.on('exit', cleanup);
  process.on('SIGINT', () => { cleanup(); process.exit(1); });

  try {
    console.log("[Setup] Waiting for microservices /health probes...");
    await waitForHttp(`${MERCHANT_URL}/health`);
    console.log("   - merchant-service is healthy on port 4002");
    await waitForHttp(`${GATEWAY_URL}/health`);
    console.log("   - api-gateway is healthy on port 4000\n");

    // ============================================================================
    // STEP 1: Apply for Merchant Registration (Draft & Submit via Merchant API)
    // ============================================================================
    console.log("--------------------------------------------------------------------------------");
    console.log("STEP 1: Apply for Merchant Registration via API Gateway");
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

    const draftRes = await fetch(`${GATEWAY_URL}/api/v1/merchant/onboarding/draft`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draftPayload),
    });

    assert.strictEqual(draftRes.status, 200, `Expected 200 OK from draft creation, got ${draftRes.status}`);
    const draftData = await draftRes.json();
    console.log("Draft Creation Response:", JSON.stringify(draftData, null, 2));

    assert.ok(draftData.success, "Draft response must indicate success");
    assert.ok(draftData.applicationId, "Must return a valid applicationId");
    const applicationId = draftData.applicationId;
    console.log(`\n✅ Generated Application Tracking ID: ${applicationId}`);

    // ============================================================================
    // STEP 2: Submit Merchant Application for Verification Review
    // ============================================================================
    console.log("\n--------------------------------------------------------------------------------");
    console.log("STEP 2: Submit Registration for Review");
    console.log("Endpoint: POST /api/v1/merchant/onboarding/submit");
    console.log("--------------------------------------------------------------------------------");

    const submitRes = await fetch(`${GATEWAY_URL}/api/v1/merchant/onboarding/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        applicationId,
        termsAgreed: true,
      }),
    });

    assert.strictEqual(submitRes.status, 200, `Expected 200 OK from submit, got ${submitRes.status}`);
    const submitData = await submitRes.json();
    console.log("Application Submission Response:", JSON.stringify(submitData, null, 2));

    assert.ok(submitData.success, "Submission must indicate success");
    assert.strictEqual(submitData.status, "UNDER_REVIEW", "Application must transition to UNDER_REVIEW");
    console.log(`✅ Application status transitioned to: ${submitData.status}`);

    // ============================================================================
    // STEP 3: Verify Status as Merchant via API
    // ============================================================================
    console.log("\n--------------------------------------------------------------------------------");
    console.log("STEP 3: Check Application Status as Merchant");
    console.log(`Endpoint: GET /api/v1/merchant/onboarding/status/${applicationId}`);
    console.log("--------------------------------------------------------------------------------");

    const statusRes = await fetch(`${GATEWAY_URL}/api/v1/merchant/onboarding/status/${encodeURIComponent(applicationId)}`);
    assert.strictEqual(statusRes.status, 200, `Expected 200 OK from status check, got ${statusRes.status}`);
    const statusData = await statusRes.json();
    console.log("Merchant Status Check:", JSON.stringify(statusData, null, 2));

    assert.strictEqual(statusData.applicationId, applicationId);
    assert.strictEqual(statusData.status, "UNDER_REVIEW");
    assert.strictEqual(statusData.businessName, "Vidarbha Organic Farm Fresh");
    console.log("✅ Merchant status check confirmed: Application is UNDER_REVIEW");

    // ============================================================================
    // STEP 4: Check if Application is Visible in Admin Verification Queue
    // ============================================================================
    console.log("\n--------------------------------------------------------------------------------");
    console.log("STEP 4: Check Application in Admin Verification Queue via Admin BFF");
    console.log("Endpoint: GET /api/v1/admin/onboarding/all");
    console.log("--------------------------------------------------------------------------------");

    // Sign a cryptographically valid Super Admin JWT
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

    const adminListRes = await fetch(`${GATEWAY_URL}/api/v1/admin/onboarding/all`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${adminToken}`,
        "Content-Type": "application/json",
      },
    });

    assert.strictEqual(adminListRes.status, 200, `Expected 200 OK from admin list, got ${adminListRes.status}`);
    const adminListData = await adminListRes.json();
    console.log(`Admin Queue Count: ${adminListData.count || (adminListData.items && adminListData.items.length)}`);

    const items = adminListData.items || adminListData.data || [];
    const foundApp = items.find(item => item.applicationId === applicationId || item.mobileNumber === "+919822998877");

    console.log("\nFound Application in Admin Queue:", JSON.stringify(foundApp, null, 2));
    assert.ok(foundApp, `CRITICAL: Application ${applicationId} MUST appear in the Admin verification queue!`);
    assert.strictEqual(foundApp.applicationId, applicationId);
    assert.strictEqual(foundApp.businessName, "Vidarbha Organic Farm Fresh");
    assert.strictEqual(foundApp.ownerName, "Nitin Gadkari Patil");
    assert.strictEqual(foundApp.status, "UNDER_REVIEW");
    console.log(`\n🎉 VERIFIED: Merchant Application ${applicationId} is SUCCESSFULLY SHOWING in Admin Queue!`);

    // ============================================================================
    // STEP 5: Admin Approves the Merchant Application
    // ============================================================================
    console.log("\n--------------------------------------------------------------------------------");
    console.log("STEP 5: Admin Approves the Partner Application");
    console.log(`Endpoint: PATCH /api/v1/admin/onboarding/${applicationId}/status`);
    console.log("--------------------------------------------------------------------------------");

    const approveRes = await fetch(`${GATEWAY_URL}/api/v1/admin/onboarding/${encodeURIComponent(applicationId)}/status`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${adminToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "APPROVED",
        reason: "KYC documentation, FSSAI registration, and geo-locality geofence successfully verified.",
        notes: "Approved by Senior Lead Auditor. Primary storefront created.",
        changedBy: "PLATFORM_SUPER_ADMIN",
      }),
    });

    assert.strictEqual(approveRes.status, 200, `Expected 200 OK from approval, got ${approveRes.status}`);
    const approveData = await approveRes.json();
    console.log("Admin Approval Response:", JSON.stringify(approveData, null, 2));

    assert.strictEqual(approveData.status, "APPROVED");
    assert.ok(approveData.merchantId, "Must have provisioned merchantId upon approval");
    const merchantId = approveData.merchantId;
    console.log(`✅ Application APPROVED! Provisioned Merchant ID: ${merchantId}`);

    // ============================================================================
    // STEP 6: Confirm Approved Status in Both Admin and Merchant Views
    // ============================================================================
    console.log("\n--------------------------------------------------------------------------------");
    console.log("STEP 6: Final Verification - Both Admin and Merchant Reflect APPROVED Status");
    console.log("--------------------------------------------------------------------------------");

    // 1. Merchant view
    const finalMerchantRes = await fetch(`${GATEWAY_URL}/api/v1/merchant/onboarding/status/${encodeURIComponent(applicationId)}`);
    const finalMerchantData = await finalMerchantRes.json();
    assert.strictEqual(finalMerchantData.status, "APPROVED");
    console.log("✅ Merchant View Status:", finalMerchantData.status);

    // 2. Admin filtered view
    const adminApprovedRes = await fetch(`${GATEWAY_URL}/api/v1/admin/onboarding/all?status=APPROVED`, {
      headers: { "Authorization": `Bearer ${adminToken}` },
    });
    const adminApprovedData = await adminApprovedRes.json();
    const approvedItems = adminApprovedData.items || [];
    const foundApproved = approvedItems.find(item => item.applicationId === applicationId);
    assert.ok(foundApproved, "Application must be present in Admin APPROVED filter list");
    console.log("✅ Admin View Status:", foundApproved.status, "| Merchant ID:", foundApproved.merchantId);

    console.log("\n================================================================================");
    console.log("🎉 COMPLETE END-TO-END FLOW TEST PASSED WITH 100% SUCCESS!");
    console.log("   1. Merchant Application Applied (Draft + Submit) via API: ✅ PASSED");
    console.log("   2. Application Showing in Admin Verification Queue via API: ✅ PASSED");
    console.log("   3. Admin Application Approval & Storefront Provisioning via API: ✅ PASSED");
    console.log("   4. Live Approved Status Reflection Across Portals: ✅ PASSED");
    console.log("================================================================================");

  } finally {
    cleanup();
  }
}

runFlowTest().catch((err) => {
  console.error("\n❌ Flow Test Execution Failed:", err);
  process.exit(1);
});
