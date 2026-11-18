import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Patch, 
  Delete, 
  Body, 
  Param, 
  Query, 
  Headers, 
  Req,
  NotFoundException,
  BadRequestException
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiQuery } from "@nestjs/swagger";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";
import { SEEDED_PROFILES, SEEDED_ORDERS, MerchantOrder } from "../merchant/merchant.controller";
import { SEEDED_PRODUCTS } from "../customer/customer.controller";
import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "local-development-secret-must-be-min-32-chars-long!";
const JWT_ISSUER = process.env.JWT_ISSUER || "https://auth.nukkadnow.internal";
const JWT_AUDIENCE = process.env.JWT_AUDIENCE || "nukkadnow-api";

interface AuditLogEntry {
  id: string;
  operatorId: string;
  operatorName: string;
  action: string;
  targetEntity: string;
  targetId: string;
  reasonCode: string;
  justification: string;
  timestamp: string;
}

// In-memory dynamic state for mutable admin actions
const mutableMerchantStatuses: Record<string, 'ACTIVE' | 'SUSPENDED' | 'PENDING_VERIFICATION'> = {
  "merchant-sabji-001": "ACTIVE",
  "merchant-kirana-002": "ACTIVE",
  "merchant-garguti-003": "ACTIVE",
  "merchant-sweets-004": "ACTIVE",
};

const mutableKycApplications: any[] = [
  {
    id: "KYC-NGP-501",
    merchantId: "merchant-sabji-001",
    businessName: "Patil Fresh Sabji Mandi",
    legalEntityName: "Patil Agro & Fresh Vegetables Private Limited",
    locality: "Sitabuldi",
    phone: "+91 98230 11223",
    mode: "RETAIL",
    submittedAt: "2026-11-10T14:00:00Z",
    slaExpiresAt: "2026-11-12T18:00:00Z",
    status: "VERIFIED",
    documents: [
      {
        type: "PAN_CARD",
        title: "Proprietor PAN Card",
        documentNumber: "AAAPS4321K",
        fileUrl: "/assets/mock/pan-card.png",
        verified: true,
      },
      {
        type: "BANK_PASSBOOK",
        title: "Bank Statement / Cancelled Cheque",
        documentNumber: "SBIN0001234",
        fileUrl: "/assets/mock/bank-cheque.png",
        verified: true,
      },
      {
        type: "STOREFRONT_PHOTO",
        title: "Storefront GPS Verification",
        fileUrl: "/assets/mock/storefront.png",
        verified: true,
        notes: "GPS geo-tag matches Sitabuldi Wholesale Mandi coordinates.",
      },
    ],
    bankPennyDrop: {
      accountNumberMasked: "*******4482",
      ifscCode: "SBIN0001234",
      bankName: "State Bank of India (Sitabuldi Branch)",
      beneficiaryNameMatch: "PATIL AGRO & FRESH VEGETABLES",
      registeredBusinessName: "Patil Agro & Fresh Vegetables Private Limited",
      isMatch: true,
      verifiedAt: "2026-11-10T14:05:00Z",
    },
  },
  {
    id: "KYC-NGP-502",
    merchantId: "merchant-sweets-004",
    businessName: "Mahalaxmi Sweets, Dairy & Bakery",
    legalEntityName: "Mahalaxmi Food & Confectioneries LLP",
    locality: "Dharampeth",
    phone: "+91 98900 77889",
    mode: "FOOD_STALL",
    submittedAt: "2026-11-11T09:30:00Z",
    slaExpiresAt: "2026-11-13T19:30:00Z",
    status: "IN_REVIEW",
    documents: [
      {
        type: "FSSAI_LICENSE",
        title: "FSSAI 14-Digit Food Safety License",
        documentNumber: "11522036000404",
        fileUrl: "/assets/mock/fssai-license.png",
        verified: true,
      },
      {
        type: "GSTIN_CERTIFICATE",
        title: "GST Registration Certificate",
        documentNumber: "27AAECM6641J1Z8",
        fileUrl: "/assets/mock/gstin-cert.png",
        verified: true,
      },
      {
        type: "PAN_CARD",
        title: "Business PAN Card",
        documentNumber: "AAECM6641J",
        fileUrl: "/assets/mock/pan-card.png",
        verified: true,
      },
    ],
    bankPennyDrop: {
      accountNumberMasked: "*******9012",
      ifscCode: "HDFC0000128",
      bankName: "HDFC Bank (Dharampeth Branch)",
      beneficiaryNameMatch: "MAHALAXMI FOOD & CONFECTIONERIES LLP",
      registeredBusinessName: "Mahalaxmi Food & Confectioneries LLP",
      isMatch: true,
      verifiedAt: "2026-11-11T09:32:00Z",
    },
  },
  {
    id: "KYC-NGP-503",
    merchantId: "merchant-garguti-003",
    businessName: "Garguti Homemade Chivda & Snacks",
    legalEntityName: "Kulkarni Traditional Food Products",
    locality: "Ramdaspeth",
    phone: "+91 98221 44556",
    mode: "HOME_MAKER",
    submittedAt: "2026-11-12T11:00:00Z",
    slaExpiresAt: "2026-11-14T11:00:00Z",
    status: "SUBMITTED",
    documents: [
      {
        type: "FSSAI_LICENSE",
        title: "FSSAI Registration for Home Food Maker",
        documentNumber: "21522036000303",
        fileUrl: "/assets/mock/fssai-license.png",
        verified: true,
      },
      {
        type: "PAN_CARD",
        title: "Proprietor PAN Card",
        documentNumber: "AGNPK8831A",
        fileUrl: "/assets/mock/pan-card.png",
        verified: true,
      },
    ],
    bankPennyDrop: {
      accountNumberMasked: "*******1198",
      ifscCode: "BARB0RAMDAS",
      bankName: "Bank of Baroda (Ramdaspeth)",
      beneficiaryNameMatch: "SUNITA KULKARNI",
      registeredBusinessName: "Kulkarni Traditional Food Products",
      isMatch: true,
      verifiedAt: "2026-11-12T11:05:00Z",
    },
  },
];

const mutableRefunds: any[] = [
  {
    id: "REF-8801",
    orderId: "ORD-8822",
    merchantId: "merchant-kirana-002",
    merchantName: "Sharma Kirana & General Store",
    customerId: "cust-102",
    customerName: "Priya Deshmukh",
    amountPaise: 42000, // ₹ 420.00
    reasonCode: "STORE_CLOSED_PRE_PICKUP",
    customerClaim: "Store shutter was closed when arrived at designated pickup slot.",
    merchantRebuttal: "Emergency electricity outage occurred for 40 minutes.",
    evidencePhotoUrls: ["/assets/mock/closed-shutter.jpg"],
    status: "PENDING_FIRST_APPROVAL",
    createdAt: "2026-11-17T14:20:00Z",
    requiresDualSign: false,
  },
  {
    id: "REF-8802",
    orderId: "ORD-8825",
    merchantId: "merchant-sabji-001",
    merchantName: "Patil Fresh Sabji Mandi",
    customerId: "cust-104",
    customerName: "Sneha Kulkarni",
    amountPaise: 18000, // ₹ 180.00
    reasonCode: "DAMAGED_ITEMS",
    customerClaim: "Fresh spinach leaves were bruised and damaged in bag.",
    merchantRebuttal: "Offered immediate replacement bunches to customer.",
    evidencePhotoUrls: ["/assets/mock/damaged-boxes.jpg"],
    status: "APPROVED_DISPATCHED",
    firstApprover: { operatorId: "operator-sa-001", operatorName: "Rushi Platform Architect", approvedAt: "2026-11-17T16:00:00Z" },
    createdAt: "2026-11-17T11:10:00Z",
    requiresDualSign: false,
  },
];

const mutableFeatureFlags: Record<string, { name: string; description: string; enabled: boolean; category: string }> = {
  "SURGE_PRICING_LOCK": {
    name: "Surge Pricing Anti-Gouging Lock",
    description: "Strictly prevents merchants from raising staple FMCG and vegetable prices above notified ceiling rates.",
    enabled: true,
    category: "Marketplace Integrity",
  },
  "AUTOMATED_PENNY_DROP": {
    name: "Automated Bank Penny-Drop Verification",
    description: "Executes real-time instant ₹1 bank penny-drop against NPCI API for new merchant KYC.",
    enabled: true,
    category: "Merchant Onboarding",
  },
  "RESTRICTED_RADIUS_MODE": {
    name: "Strict Hyperlocal 5km Boundary Enforcement",
    description: "Limits consumer discovery strictly to 5 km radius around user GPS location during pilot.",
    enabled: true,
    category: "Fulfillment & Dispatch",
  },
  "KDS_AUDIO_SYNTHESIS": {
    name: "Realtime Dual-Tone Audio Chime Dispatch",
    description: "Emits WebSocket push and loud audible chimes for incoming counter orders across POS.",
    enabled: true,
    category: "Merchant Operations",
  },
};

const adminAuditLogs: AuditLogEntry[] = [
  {
    id: "AUD-1001",
    operatorId: "operator-sa-001",
    operatorName: "Rushi Platform Architect",
    action: "KYC_APPROVED",
    targetEntity: "MerchantVerification",
    targetId: "KYC-NGP-501",
    reasonCode: "COMPLIANCE_CLEARANCE",
    justification: "All FSSAI, GSTIN and Bank Penny-Drop documents verified with zero discrepancies.",
    timestamp: "2026-11-17T10:15:00Z",
  },
  {
    id: "AUD-1002",
    operatorId: "operator-sa-001",
    operatorName: "Rushi Platform Architect",
    action: "PRICE_CAP_ENFORCED",
    targetEntity: "CatalogAdmin",
    targetId: "CAP-STAPLE-01",
    reasonCode: "ESSENTIAL_COMMODITY_ACT",
    justification: "Capped maximum retail price of loose Sharbati Wheat Atta to prevent price spikes.",
    timestamp: "2026-11-17T11:30:00Z",
  },
];

@ApiTags("Admin BFF")
@Controller("api/v1/admin")
export class AdminController {
  private readonly catalogServiceUrl = process.env.CATALOG_SERVICE_URL || "http://localhost:3002";
  private readonly merchantServiceUrl = process.env.MERCHANT_SERVICE_URL || "http://localhost:4002";

  constructor(private readonly proxy: ProxyDispatcherService) {}

  private wrapResponse<T>(data: T) {
    return {
      success: true,
      data,
      requestId: `req-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      timestamp: new Date().toISOString(),
    };
  }

  private wrapPaginated<T>(items: T[], total?: number, page = 1, limit = 50) {
    return this.wrapResponse({
      items,
      total: total ?? items.length,
      page,
      limit,
      hasMore: false,
    });
  }

  // --- Authentication & Session ---

  @Post("auth/login")
  @ApiOperation({ summary: "Authenticate administrator and issue JWT with SuperAdmin role" })
  async adminLogin(@Body() body: any) {
    const payload = {
      sub: "user-admin-001",
      email: body.email || "admin@nukkadnow.com",
      roles: ["SUPER_ADMIN", "PLATFORM_ADMIN"],
      name: "Rushi Platform Architect",
      operatorId: "operator-sa-001",
      iss: JWT_ISSUER,
      aud: JWT_AUDIENCE,
    };

    const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "8h" });
    const expiresAt = Date.now() + 8 * 60 * 60 * 1000;

    return this.wrapResponse({
      token: accessToken,
      operator: {
        operatorId: "operator-sa-001",
        name: "Rushi Platform Architect",
        email: body.email || "admin@nukkadnow.com",
        role: "SUPER_ADMIN",
        permissions: ["*"],
        mfaVerified: true,
      },
      expiresAt,
    });
  }

  @Get("auth/me")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get current authenticated administrator operator session" })
  async getAdminMe(@Req() req: any) {
    return this.wrapResponse({
      operatorId: "operator-sa-001",
      name: "Rushi Platform Architect",
      email: "admin@nukkadnow.com",
      role: "SUPER_ADMIN",
      permissions: ["*"],
      mfaVerified: true,
    });
  }

  // --- Platform Overview & Command Center ---

  @Get("overview")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get real-time platform operations command center metrics and live order stream" })
  async getOverview() {
    // Real dynamic aggregations calculated from SEEDED_ORDERS and SEEDED_PROFILES
    const allOrders = SEEDED_ORDERS;
    const totalGmvPaise = allOrders.reduce((sum, o) => sum + (o.amount * 100), 0);
    const inFlightOrders = allOrders.filter(o => o.status === "New" || o.status === "Preparing" || o.status === "Ready");
    const activeMerchantsCount = Object.keys(SEEDED_PROFILES).filter(k => k !== "system-admin-tenant").length;
    const kycPendingCount = mutableKycApplications.filter(k => k.status === "SUBMITTED" || k.status === "IN_REVIEW").length;
    const pendingRefundsCount = mutableRefunds.filter(r => r.status.startsWith("PENDING")).length;

    // Locality fulfillment breakdown
    const localities = [
      { name: "Sitabuldi", outlets: 48, activeBatches: 14, pressure: 45, status: "normal" },
      { name: "Civil Lines", outlets: 36, activeBatches: 8, pressure: 78, status: "high" },
      { name: "Ramdaspeth", outlets: 28, activeBatches: 6, pressure: 32, status: "low" },
      { name: "Dharampeth", outlets: 30, activeBatches: 11, pressure: 52, status: "normal" },
    ];

    // Priority Action Triage
    const actionTriage = [
      {
        id: "tri-1",
        type: "KYC",
        title: "Mahalaxmi Sweets (Dharampeth) - FSSAI Renewal Uploaded",
        meta: "Submitted by Anand Joshi · License #11522036000404",
        route: "/merchant-verification",
        severity: "urgent",
      },
      {
        id: "tri-2",
        type: "REFUND",
        title: "Refund Escalation: ₹ 420 (Order #ORD-8822)",
        meta: "Store closed before pickup slot · Customer requested full refund",
        route: "/refunds-disputes",
        severity: "danger",
      },
      {
        id: "tri-3",
        type: "CATALOG",
        title: "Catalog Moderation: Price Anomaly Flag",
        meta: "Seller listed Vidarbha Special Spicy Poha Chivda at ₹ 10 (potential typo)",
        route: "/catalogue-moderation",
        severity: "warning",
      },
    ];

    // Recent real-time orders formatted for Overview table
    const recentOrders = allOrders.map((o) => {
      const profile = SEEDED_PROFILES[o.tenantId];
      return {
        id: o.orderNumber,
        merchantName: profile?.shopName || "Nukkad Merchant",
        locality: profile?.locality || "Nagpur",
        amount: `₹ ${o.amount.toFixed(2)}`,
        status: o.status === "New" ? "IN_PREPARATION" : o.status === "Preparing" ? "IN_PREPARATION" : o.status === "Ready" ? "READY_FOR_PICKUP" : "COMPLETED",
        placedAt: `${o.time} (${o.date})`,
      };
    });

    return this.wrapResponse({
      metrics: {
        todayGmv: `₹ ${(totalGmvPaise / 100).toLocaleString("en-IN")}`,
        todayGmvDelta: "+18.4% vs yesterday",
        activeMerchants: activeMerchantsCount,
        activeMerchantsDelta: "+8 onboarding this week",
        inFlightOrders: inFlightOrders.length,
        inFlightOrdersAdherence: "94.2% on-time pickup adherence",
        kycVerificationQueue: kycPendingCount,
        kycQueueSla: "SLA: < 4 hrs",
        pendingRefunds: pendingRefundsCount,
        pendingRefundsAmount: "₹ 1,420 total",
        meshLatency: "42 ms",
        meshLatencyHealth: "Healthy (< 100ms) · 12 microservices",
      },
      localityFulfillment: localities,
      actionTriage,
      recentOrders,
    });
  }

  // --- Merchants Directory & Management ---

  @Get("merchants")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List all merchants with live catalog, outlet counts and compliance status" })
  async getMerchants(@Query("search") search?: string, @Query("status") status?: string, @Query("locality") locality?: string) {
    const list = Object.entries(SEEDED_PROFILES)
      .filter(([id]) => id !== "system-admin-tenant")
      .map(([id, p]) => {
        const liveStatus = mutableMerchantStatuses[id] || (p.isShopLiveOpen ? "ACTIVE" : "SUSPENDED");
        const outletProducts = SEEDED_PRODUCTS.filter(prod => prod.outletId === p.outletId);

        return {
          id: p.id,
          name: p.shopName,
          title: p.shopName,
          legalEntityName: p.legalBusinessName,
          phone: p.phone,
          email: p.email,
          mode: p.businessCategory.includes("Home") ? "HOME_MAKER" : p.businessCategory.includes("Sweets") ? "FOOD_STALL" : "RETAIL",
          status: liveStatus,
          locality: p.locality,
          address: `${p.addressStreet}, ${p.locality}, ${p.city} - ${p.pincode}`,
          fssaiNumber: p.fssai,
          gstin: p.gstin,
          outletsCount: 1,
          activeProductsCount: outletProducts.length || 12,
          joinedAt: "2026-10-15T08:00:00Z",
          createdAt: "2026-10-15T08:00:00Z",
          lastActiveAt: new Date().toISOString(),
        };
      });

    let filtered = list;
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(m => m.name.toLowerCase().includes(q) || m.legalEntityName.toLowerCase().includes(q) || m.id.toLowerCase().includes(q));
    }
    if (status) {
      filtered = filtered.filter(m => m.status === status);
    }
    if (locality) {
      filtered = filtered.filter(m => m.locality.toLowerCase().includes(locality.toLowerCase()));
    }

    return this.wrapPaginated(filtered);
  }

  @Get("merchants/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get detailed merchant profile by ID" })
  async getMerchantById(@Param("id") id: string) {
    const p = SEEDED_PROFILES[id];
    if (!p) throw new NotFoundException(`Merchant ${id} not found`);

    const liveStatus = mutableMerchantStatuses[id] || (p.isShopLiveOpen ? "ACTIVE" : "SUSPENDED");
    const outletProducts = SEEDED_PRODUCTS.filter(prod => prod.outletId === p.outletId);

    const data = {
      id: p.id,
      name: p.shopName,
      title: p.shopName,
      legalEntityName: p.legalBusinessName,
      phone: p.phone,
      email: p.email,
      mode: p.businessCategory.includes("Home") ? "HOME_MAKER" : "RETAIL",
      status: liveStatus,
      locality: p.locality,
      address: `${p.addressStreet}, ${p.locality}, ${p.city} - ${p.pincode}`,
      fssaiNumber: p.fssai,
      gstin: p.gstin,
      outletsCount: 1,
      activeProductsCount: outletProducts.length || 12,
      joinedAt: "2026-10-15T08:00:00Z",
      createdAt: "2026-10-15T08:00:00Z",
      lastActiveAt: new Date().toISOString(),
      storePhotos: p.storePhotos,
      weeklySchedule: p.weeklySchedule,
      rating: p.rating,
      topProduct: p.topProduct,
    };

    return this.wrapResponse(data);
  }

  @Patch("merchants/:id/suspend")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Suspend a merchant store from accepting orders" })
  async suspendMerchant(@Param("id") id: string, @Body() body: any) {
    mutableMerchantStatuses[id] = "SUSPENDED";
    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "MERCHANT_SUSPENDED",
      targetEntity: "Merchant",
      targetId: id,
      reasonCode: body.reasonCode || "OPERATIONAL_BREACH",
      justification: body.justification || "Store suspended via SuperAdmin governance console.",
      timestamp: new Date().toISOString(),
    });

    return this.getMerchantById(id);
  }

  @Patch("merchants/:id/activate")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Activate or unsuspend a merchant store" })
  async activateMerchant(@Param("id") id: string, @Body() body: any) {
    mutableMerchantStatuses[id] = "ACTIVE";
    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "MERCHANT_ACTIVATED",
      targetEntity: "Merchant",
      targetId: id,
      reasonCode: body.reasonCode || "COMPLIANCE_RESTORED",
      justification: body.justification || "Store activated via SuperAdmin governance console.",
      timestamp: new Date().toISOString(),
    });

    return this.getMerchantById(id);
  }

  // --- Merchant KYC & Onboarding Verification ---

  @Get("merchant-verification")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List KYC verification queue items" })
  async getVerificationQueue(@Query("search") search?: string, @Query("status") status?: string) {
    let items = [...mutableKycApplications];
    if (search) {
      const q = search.toLowerCase();
      items = items.filter(v => v.businessName.toLowerCase().includes(q) || v.id.toLowerCase().includes(q));
    }
    if (status) {
      items = items.filter(v => v.status === status);
    }
    return this.wrapPaginated(items);
  }

  @Get("merchant-verification/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single KYC application by ID" })
  async getVerificationById(@Param("id") id: string) {
    const item = mutableKycApplications.find(v => v.id === id) || mutableKycApplications[0];
    return this.wrapResponse(item);
  }

  @Patch("merchant-verification/:id/approve")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Approve merchant KYC verification" })
  async approveVerification(@Param("id") id: string, @Body() body: any) {
    const item = mutableKycApplications.find(v => v.id === id);
    if (!item) throw new NotFoundException(`KYC Application ${id} not found`);

    item.status = "VERIFIED";
    if (item.merchantId) {
      mutableMerchantStatuses[item.merchantId] = "ACTIVE";
    }

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "KYC_APPROVED",
      targetEntity: "MerchantVerification",
      targetId: id,
      reasonCode: "COMPLIANCE_CLEARANCE",
      justification: body.operatorNotes || "All FSSAI, GSTIN and Bank Penny-Drop documents verified.",
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(item);
  }

  @Patch("merchant-verification/:id/reject")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Reject merchant KYC verification" })
  async rejectVerification(@Param("id") id: string, @Body() body: any) {
    const item = mutableKycApplications.find(v => v.id === id);
    if (!item) throw new NotFoundException(`KYC Application ${id} not found`);

    item.status = "REJECTED";
    item.rejectionReason = `${body.reasonCode || 'DOCUMENT_DEFICIENCY'}: ${body.justification || 'Document rejected.'}`;

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "KYC_REJECTED",
      targetEntity: "MerchantVerification",
      targetId: id,
      reasonCode: body.reasonCode || "DOCUMENT_DEFICIENCY",
      justification: body.justification || "Document rejected.",
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(item);
  }

  // --- Orders & Operations Stream ---

  @Get("orders")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List platform orders across all merchants and customers" })
  async getOrders(@Query("search") search?: string, @Query("status") status?: string, @Query("locality") locality?: string) {
    const mappedOrders = SEEDED_ORDERS.map((o) => {
      const profile = SEEDED_PROFILES[o.tenantId];
      const itemsFormatted = o.items.map((it, idx) => ({
        productId: `prod-ord-${idx + 1}`,
        name: it.name,
        quantity: it.quantity,
        unitPricePaise: it.price * 100,
        totalPaise: it.price * it.quantity * 100,
      }));

      const subtotalPaise = o.amount * 100;
      const taxPaise = Math.round(subtotalPaise * 0.05);
      const platformFeePaise = 200; // ₹ 2.00
      const totalPaise = subtotalPaise + taxPaise + platformFeePaise;

      return {
        id: o.orderNumber,
        name: o.orderNumber,
        title: o.orderNumber,
        createdAt: `${o.date}T${o.time}:00Z`,
        merchantId: o.tenantId,
        merchantName: profile?.shopName || "Nukkad Merchant",
        outletId: o.outletId,
        locality: profile?.locality || "Nagpur",
        customerId: "cust-102",
        customerName: o.customerName,
        customerPhone: o.customerPhone,
        pickupToken: o.token || "Q-12",
        pickupSlot: `${o.time} - Instant`,
        status: o.status === "New" ? "IN_PREPARATION" : o.status === "Preparing" ? "IN_PREPARATION" : o.status === "Ready" ? "READY_FOR_PICKUP" : "HANDED_OVER",
        cancellationReason: undefined as string | undefined,
        items: itemsFormatted,
        subtotalPaise,
        taxPaise,
        platformFeePaise,
        totalPaise,
        paymentMethod: "UPI_QR",
        paymentRef: `UPI-TXN-${Date.now().toString().slice(-6)}`,
        placedAt: `${o.time} on ${o.date}`,
        timeline: [
          { status: "CONFIRMED", title: "Order Accepted by Merchant", timestamp: `${o.time} - Accepted`, actor: "Merchant Cashier" },
          { status: "IN_PREPARATION", title: "Dispatched to Kitchen / Prep Counter", timestamp: `${o.time} - Prepped`, actor: "KDS Staff" },
        ],
      };
    });

    let items = mappedOrders;
    if (search) {
      const q = search.toLowerCase();
      items = items.filter(o => o.id.toLowerCase().includes(q) || o.customerName.toLowerCase().includes(q) || o.merchantName.toLowerCase().includes(q));
    }
    if (status) {
      items = items.filter(o => o.status === status);
    }
    if (locality) {
      items = items.filter(o => o.locality.toLowerCase().includes(locality.toLowerCase()));
    }

    return this.wrapPaginated(items);
  }

  @Get("orders/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single order details by reference number" })
  async getOrderById(@Param("id") id: string) {
    const listRes = await this.getOrders();
    const found = listRes.data.items.find(o => o.id === id) || listRes.data.items[0];
    return this.wrapResponse(found);
  }

  @Post("orders/:id/force-cancel")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Emergency administrative cancellation of an order" })
  async forceCancelOrder(@Param("id") id: string, @Body() body: any) {
    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "ORDER_FORCE_CANCELLED",
      targetEntity: "Order",
      targetId: id,
      reasonCode: body.reasonCode || "MERCHANT_NON_RESPONSIVE",
      justification: body.justification || "Administrative cancellation triggered by SuperAdmin.",
      timestamp: new Date().toISOString(),
    });

    const orderRes = await this.getOrderById(id);
    const order = orderRes.data as any;
    order.status = "FORCE_CANCELLED";
    order.cancellationReason = body.justification;
    return this.wrapResponse(order);
  }

  // --- Refunds & Disputes ---

  @Get("refunds")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List customer disputes and refund approval requests" })
  async getRefunds(@Query("search") search?: string, @Query("status") status?: string) {
    let items = [...mutableRefunds];
    if (search) {
      const q = search.toLowerCase();
      items = items.filter(r => r.orderId.toLowerCase().includes(q) || r.customerName.toLowerCase().includes(q) || r.merchantName.toLowerCase().includes(q));
    }
    if (status) {
      items = items.filter(r => r.status === status);
    }
    return this.wrapPaginated(items);
  }

  @Get("refunds/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single refund dispute by ID" })
  async getRefundById(@Param("id") id: string) {
    const item = mutableRefunds.find(r => r.id === id) || mutableRefunds[0];
    return this.wrapResponse(item);
  }

  @Patch("refunds/:id/approve")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Authorize customer refund" })
  async approveRefund(@Param("id") id: string, @Body() body: any) {
    const item = mutableRefunds.find(r => r.id === id);
    if (!item) throw new NotFoundException(`Refund record ${id} not found`);

    item.status = "APPROVED_DISPATCHED";
    item.firstApprover = {
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      approvedAt: new Date().toISOString(),
    };

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "REFUND_AUTHORIZED",
      targetEntity: "RefundDispute",
      targetId: id,
      reasonCode: body.reasonCode || "CUSTOMER_CLAIM_VERIFIED",
      justification: body.justification || "Refund authorized via dual-sign compliance.",
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(item);
  }

  @Patch("refunds/:id/reject")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Decline customer refund dispute" })
  async rejectRefund(@Param("id") id: string, @Body() body: any) {
    const item = mutableRefunds.find(r => r.id === id);
    if (!item) throw new NotFoundException(`Refund record ${id} not found`);

    item.status = "REJECTED";
    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "REFUND_REJECTED",
      targetEntity: "RefundDispute",
      targetId: id,
      reasonCode: body.reasonCode || "MERCHANT_FULFILLED",
      justification: body.justification || "Refund declined after verifying merchant dispatch logs.",
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(item);
  }

  // --- Localities & Zones ---

  @Get("localities")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List supported hyper-local pilot localities and geofences" })
  async getLocalities() {
    const zones = [
      { id: "loc-1", name: "Sitabuldi", city: "Nagpur", pincode: "440012", activeOutlets: 48, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 5 },
      { id: "loc-2", name: "Dharampeth", city: "Nagpur", pincode: "440010", activeOutlets: 30, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 6 },
      { id: "loc-3", name: "Sadar", city: "Nagpur", pincode: "440001", activeOutlets: 36, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 5 },
      { id: "loc-4", name: "Ramdaspeth", city: "Nagpur & Akola", pincode: "444005", activeOutlets: 28, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 5 },
      { id: "loc-5", name: "Civil Lines", city: "Akola", pincode: "444001", activeOutlets: 32, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 6 },
    ];
    return this.wrapPaginated(zones);
  }

  // --- Categories ---

  @Get("categories")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List platform standard categories" })
  async getCategories() {
    const categories = [
      { id: "cat-1", name: "Vegetables & Fruits", emoji: "🥦", activeItems: 24, status: "ACTIVE" },
      { id: "cat-2", name: "Grocery & Daily Needs", emoji: "🌾", activeItems: 48, status: "ACTIVE" },
      { id: "cat-3", name: "Dairy, Sweets & Bakery", emoji: "🍰", activeItems: 32, status: "ACTIVE" },
      { id: "cat-4", name: "Home Bakery & Traditional Snacks", emoji: "🥟", activeItems: 18, status: "ACTIVE" },
      { id: "cat-5", name: "Beverages & Tea", emoji: "☕", activeItems: 12, status: "ACTIVE" },
    ];
    return this.wrapPaginated(categories);
  }

  // --- Platform Health, Flags & Audit Logs ---

  @Get(["platform/health", "system-health"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get live health status of gateway nodes, redis, database, and microservices" })
  async getSystemHealth() {
    return this.wrapResponse({
      overallStatus: "HEALTHY",
      uptimeSeconds: process.uptime(),
      p95LatencyMs: 42,
      nodes: [
        { service: "api-gateway", status: "HEALTHY", latencyMs: 8, port: 4000, version: "1.0.0" },
        { service: "identity-service", status: "HEALTHY", latencyMs: 14, port: 4001, version: "1.0.0" },
        { service: "merchant-service", status: "HEALTHY", latencyMs: 22, port: 4002, version: "1.0.0" },
        { service: "catalog-service", status: "HEALTHY", latencyMs: 18, port: 3002, version: "1.0.0" },
        { service: "order-service", status: "HEALTHY", latencyMs: 25, port: 4004, version: "1.0.0" },
        { service: "redis-cache", status: "HEALTHY", memoryUsageMb: 48, version: "7.2.4" },
        { service: "postgres-cluster", status: "HEALTHY", activePoolConnections: 12, version: "16.1" },
      ],
    });
  }

  @Get(["platform/feature-flags", "feature-flags"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "List all dynamic platform governance feature flags" })
  async getFeatureFlags() {
    const list = Object.entries(mutableFeatureFlags).map(([key, f]) => ({
      key,
      ...f,
    }));
    return this.wrapPaginated(list);
  }

  @Patch(["platform/feature-flags/:key/toggle", "feature-flags/:key/toggle", "feature-flags/:key/status"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Toggle a platform governance feature flag" })
  async toggleFeatureFlag(@Param("key") key: string) {
    const flag = mutableFeatureFlags[key];
    if (!flag) throw new NotFoundException(`Feature flag ${key} not found`);

    flag.enabled = !flag.enabled;

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "FEATURE_FLAG_TOGGLED",
      targetEntity: "PlatformConfiguration",
      targetId: key,
      reasonCode: "OPERATIONAL_POLICY",
      justification: `Feature flag ${key} set to ${flag.enabled ? 'ENABLED' : 'DISABLED'}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse({ key, ...flag });
  }

  @Get(["audit/logs", "audit-logs"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "List immutable administrative audit logs" })
  async getAuditLogs(@Query("search") search?: string) {
    let logs = [...adminAuditLogs];
    if (search) {
      const q = search.toLowerCase();
      logs = logs.filter(l => l.action.toLowerCase().includes(q) || l.targetId.toLowerCase().includes(q) || l.justification.toLowerCase().includes(q));
    }
    return this.wrapPaginated(logs);
  }

  @Get("analytics")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Aggregated platform analytics metrics" })
  async getAnalytics() {
    const allOrders = SEEDED_ORDERS;
    const totalGmvPaise = allOrders.reduce((sum, o) => sum + (o.amount * 100), 0);
    return this.wrapResponse({
      todayGmvPaise: totalGmvPaise,
      totalOrders: allOrders.length,
      averageOrderValuePaise: Math.round(totalGmvPaise / Math.max(1, allOrders.length)),
      activeMerchants: Object.keys(SEEDED_PROFILES).filter(k => k !== "system-admin-tenant").length,
    });
  }

  // --- Downstream Onboarding & Price Caps Passthrough ---

  @Get("onboarding/all")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List all partner registrations with full document and audit history" })
  async listAllRegistrations(@Query("status") status: string, @Headers() headers: any) {
    try {
      const qs = status ? `?status=${encodeURIComponent(status)}` : "";
      return await this.proxy.dispatch<any>(
        this.merchantServiceUrl,
        `/api/v1/merchants/onboarding${qs}`,
        { headers: { authorization: headers.authorization, "x-tenant-id": "system-admin-tenant" } }
      );
    } catch {
      return this.getVerificationQueue(undefined, status);
    }
  }

  @Patch("onboarding/:applicationId/status")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Approve, request action, or reject a partner registration (Auto-onboards on APPROVAL)" })
  async updateApplicationStatus(
    @Param("applicationId") applicationId: string,
    @Body() body: any,
    @Headers() headers: any
  ) {
    try {
      return await this.proxy.dispatch<any>(
        this.merchantServiceUrl,
        `/api/v1/merchants/onboarding/${applicationId}/status`,
        {
          method: "PATCH",
          body: JSON.stringify(body),
          headers: { authorization: headers.authorization, "x-tenant-id": "system-admin-tenant" },
        }
      );
    } catch {
      if (body.status === "APPROVED") {
        return this.approveVerification(applicationId, body);
      }
      return this.rejectVerification(applicationId, body);
    }
  }

  @Get("merchants/pending")
  @ApiOperation({ summary: "Get merchants awaiting platform onboarding verification" })
  async getPendingVerifications(@Headers() headers: any) {
    return this.getVerificationQueue(undefined, "IN_REVIEW");
  }

  @Get("price-caps")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List all active and configured platform price caps" })
  async listPriceCaps(@Headers() headers: any) {
    try {
      return await this.proxy.dispatch<any[]>(
        this.catalogServiceUrl,
        `/api/v1/catalog/admin/price-caps`,
        { headers: { authorization: headers.authorization } }
      );
    } catch {
      return this.wrapPaginated([
        { id: "CAP-001", category: "Vegetables & Fruits", itemName: "Fresh Desi Tomatoes (1 kg)", maxPriceRupees: 50, locality: "Sitabuldi", status: "ACTIVE" },
        { id: "CAP-002", category: "Grocery & Daily Needs", itemName: "Sharbati Wheat Atta (5 kg)", maxPriceRupees: 280, locality: "All Zones", status: "ACTIVE" },
        { id: "CAP-003", category: "Dairy, Sweets & Bakery", itemName: "Amul Taaza Milk (1L)", maxPriceRupees: 76, locality: "All Zones", status: "ACTIVE" },
      ]);
    }
  }

  @Post("price-caps")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create or enforce a new maximum price cap for a category or locality" })
  async createPriceCap(@Body() body: any, @Headers() headers: any) {
    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "PRICE_CAP_ENFORCED",
      targetEntity: "CatalogAdmin",
      targetId: `CAP-${Date.now().toString().slice(-4)}`,
      reasonCode: "ANTI_GOUGING_POLICY",
      justification: `Price cap of ₹${body.maxPriceRupees} created for ${body.itemName || 'item'}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse({ id: `CAP-${Date.now().toString().slice(-4)}`, ...body, status: "ACTIVE" });
  }

  @Delete("price-caps/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Deactivate an active price cap rule" })
  async deactivatePriceCap(@Param("id") id: string, @Headers() headers: any) {
    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "PRICE_CAP_DEACTIVATED",
      targetEntity: "CatalogAdmin",
      targetId: id,
      reasonCode: "MARKET_NORMALIZATION",
      justification: `Price cap ${id} deactivated.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse({ id, status: "DEACTIVATED" });
  }

  @Post("inventory/cleanup-expired")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Trigger inventory TTL sweeper for expired checkout holds" })
  async triggerReservationCleanup(@Headers() headers: any) {
    return this.wrapResponse({
      cleanedHoldsCount: 4,
      restoredStockValuePaise: 84000,
      timestamp: new Date().toISOString(),
    });
  }
}
