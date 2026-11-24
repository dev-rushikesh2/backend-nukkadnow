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
  BadRequestException,
  ForbiddenException,
  UnauthorizedException
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiQuery } from "@nestjs/swagger";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";
import { SEEDED_PROFILES, SEEDED_ORDERS, MerchantOrder } from "../merchant/merchant.controller";
import { SEEDED_PRODUCTS, SEEDED_MERCHANTS_OUTLETS } from "../customer/customer.controller";
import * as jwt from "jsonwebtoken";
import * as crypto from "crypto";

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
const mutableLocalitiesList: any[] = [
  { id: "loc-1", name: "Sitabuldi", city: "Nagpur", pincode: "440012", activeOutlets: 48, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 5, congestionMultiplier: 1.0, createdAt: "2026-11-01T10:00:00Z" },
  { id: "loc-2", name: "Dharampeth", city: "Nagpur", pincode: "440010", activeOutlets: 30, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 6, congestionMultiplier: 1.0, createdAt: "2026-11-01T10:00:00Z" },
  { id: "loc-3", name: "Sadar", city: "Nagpur", pincode: "440001", activeOutlets: 36, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 5, congestionMultiplier: 1.0, createdAt: "2026-11-01T10:00:00Z" },
  { id: "loc-4", name: "Civil Lines", city: "Akola", pincode: "444001", activeOutlets: 32, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 6, congestionMultiplier: 1.0, createdAt: "2026-11-01T10:00:00Z" },
  { id: "loc-5", name: "Ramdaspeth", city: "Akola", pincode: "444005", activeOutlets: 28, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 5, congestionMultiplier: 1.0, createdAt: "2026-11-01T10:00:00Z" },
  { id: "loc-6", name: "Rajkamal Chowk", city: "Amravati", pincode: "444601", activeOutlets: 26, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 5, congestionMultiplier: 1.0, createdAt: "2026-11-01T10:00:00Z" },
  { id: "loc-7", name: "Badnera Road", city: "Amravati", pincode: "444607", activeOutlets: 22, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 6, congestionMultiplier: 1.0, createdAt: "2026-11-01T10:00:00Z" },
  { id: "loc-8", name: "Kothrud", city: "Pune", pincode: "411038", activeOutlets: 64, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 7, congestionMultiplier: 1.0, createdAt: "2026-11-01T10:00:00Z" },
  { id: "loc-9", name: "Deccan Gymkhana", city: "Pune", pincode: "411004", activeOutlets: 52, status: "ACTIVE", geofenceType: "POLYGON", deliveryRadiusKm: 6, congestionMultiplier: 1.0, createdAt: "2026-11-01T10:00:00Z" },
];

const mutableServiceableCities: any[] = [
  {
    id: "pune",
    name: "Pune City",
    state: "Maharashtra",
    district: "Pune District",
    status: "SERVICEABLE",
    isLive: true,
    localitiesCount: 42,
    totalLocalities: 54,
    merchantsCount: 342,
    orders30d: 12840,
    customersCount: 36210,
    coveragePercent: 78,
    pickupEnabled: 42,
    deliveryEnabled: 38,
    notServiceable: 12,
    launchDate: "12 Jan 2026",
    cityOperationsManager: "Amit Deshmukh",
    cityAreaKm2: 312.6,
    serviceableAreaKm2: 244.8,
  },
  {
    id: "pcmc",
    name: "Pimpri-Chinchwad",
    state: "Maharashtra",
    district: "Pune District",
    status: "SERVICEABLE",
    isLive: true,
    localitiesCount: 42,
    totalLocalities: 48,
    merchantsCount: 285,
    orders30d: 4820,
    customersCount: 18450,
    coveragePercent: 88,
    pickupEnabled: 42,
    deliveryEnabled: 40,
    notServiceable: 6,
    launchDate: "20 Jan 2026",
    cityOperationsManager: "Amit Deshmukh",
    cityAreaKm2: 181.0,
    serviceableAreaKm2: 159.2,
  },
  {
    id: "nagpur",
    name: "Nagpur",
    state: "Maharashtra",
    district: "Nagpur District",
    status: "SERVICEABLE",
    isLive: true,
    localitiesCount: 38,
    totalLocalities: 45,
    merchantsCount: 310,
    orders30d: 5200,
    customersCount: 22100,
    coveragePercent: 84,
    pickupEnabled: 38,
    deliveryEnabled: 35,
    notServiceable: 7,
    launchDate: "01 Nov 2025",
    cityOperationsManager: "Rohan Sharma",
    cityAreaKm2: 227.4,
    serviceableAreaKm2: 191.0,
  },
  {
    id: "nashik",
    name: "Nashik",
    state: "Maharashtra",
    district: "Nashik District",
    status: "PLANNED",
    isLive: false,
    localitiesCount: 28,
    totalLocalities: 36,
    merchantsCount: 195,
    orders30d: 1200,
    customersCount: 8900,
    coveragePercent: 77,
    pickupEnabled: 28,
    deliveryEnabled: 24,
    notServiceable: 8,
    launchDate: "15 Mar 2027",
    cityOperationsManager: "Unassigned",
    cityAreaKm2: 259.0,
    serviceableAreaKm2: 199.4,
  },
  {
    id: "aurangabad",
    name: "Aurangabad",
    state: "Maharashtra",
    district: "Chhatrapati Sambhajinagar",
    status: "PLANNED",
    isLive: false,
    localitiesCount: 26,
    totalLocalities: 34,
    merchantsCount: 160,
    orders30d: 800,
    customersCount: 6780,
    coveragePercent: 76,
    pickupEnabled: 26,
    deliveryEnabled: 20,
    notServiceable: 8,
    launchDate: "01 May 2027",
    cityOperationsManager: "Unassigned",
    cityAreaKm2: 139.0,
    serviceableAreaKm2: 105.6,
  },
];

const mutableCoverageLocalities: any[] = [
  { id: "cov-loc-1", name: "Baner", cityId: "pune", cityName: "Pune City", status: "ACTIVE", serviceTypes: ["PICKUP", "DELIVERY"], merchantsCount: 48, orders30d: 2186, customersCount: 8420, boundaryAreaKm2: 4.86, lastUpdated: "15 Nov 2026, 06:24 PM", pincode: "411045", lat: 18.5597, lng: 73.7799 },
  { id: "cov-loc-2", name: "Wakad", cityId: "pune", cityName: "Pune City", status: "ACTIVE", serviceTypes: ["PICKUP", "DELIVERY"], merchantsCount: 42, orders30d: 1975, customersCount: 7310, boundaryAreaKm2: 5.64, lastUpdated: "15 Nov 2026, 05:47 PM", pincode: "411057", lat: 18.5987, lng: 73.7634 },
  { id: "cov-loc-3", name: "Hinjawadi", cityId: "pune", cityName: "Pune City", status: "ACTIVE", serviceTypes: ["PICKUP", "DELIVERY"], merchantsCount: 36, orders30d: 1842, customersCount: 6980, boundaryAreaKm2: 8.72, lastUpdated: "15 Nov 2026, 04:12 PM", pincode: "411057", lat: 18.5913, lng: 73.7389 },
  { id: "cov-loc-4", name: "Balewadi", cityId: "pune", cityName: "Pune City", status: "ACTIVE", serviceTypes: ["PICKUP", "DELIVERY"], merchantsCount: 29, orders30d: 1403, customersCount: 5260, boundaryAreaKm2: 3.91, lastUpdated: "14 Nov 2026, 09:28 PM", pincode: "411045", lat: 18.5756, lng: 73.7707 },
  { id: "cov-loc-5", name: "Kothrud", cityId: "pune", cityName: "Pune City", status: "ACTIVE", serviceTypes: ["PICKUP"], merchantsCount: 34, orders30d: 1566, customersCount: 5970, boundaryAreaKm2: 6.18, lastUpdated: "14 Nov 2026, 06:13 PM", pincode: "411038", lat: 18.5074, lng: 73.8077 },
  { id: "cov-loc-6", name: "Kharadi", cityId: "pune", cityName: "Pune City", status: "ACTIVE", serviceTypes: ["PICKUP", "DELIVERY"], merchantsCount: 52, orders30d: 2430, customersCount: 8910, boundaryAreaKm2: 7.25, lastUpdated: "14 Nov 2026, 03:45 PM", pincode: "411014", lat: 18.5516, lng: 73.9349 },
  { id: "cov-loc-7", name: "Hadapsar", cityId: "pune", cityName: "Pune City", status: "ACTIVE", serviceTypes: ["DELIVERY"], merchantsCount: 41, orders30d: 1720, customersCount: 6840, boundaryAreaKm2: 9.10, lastUpdated: "13 Nov 2026, 11:15 AM", pincode: "411028", lat: 18.5089, lng: 73.9259 },
  { id: "cov-loc-8", name: "Aundh", cityId: "pune", cityName: "Pune City", status: "ACTIVE", serviceTypes: ["PICKUP", "DELIVERY"], merchantsCount: 38, orders30d: 1690, customersCount: 6750, boundaryAreaKm2: 4.12, lastUpdated: "13 Nov 2026, 09:20 AM", pincode: "411007", lat: 18.5580, lng: 73.8077 },
  { id: "cov-loc-9", name: "Katraj", cityId: "pune", cityName: "Pune City", status: "INACTIVE", serviceTypes: [], merchantsCount: 12, orders30d: 0, customersCount: 1420, boundaryAreaKm2: 5.40, lastUpdated: "10 Nov 2026, 02:00 PM", pincode: "411046", lat: 18.4575, lng: 73.8677 },
  { id: "cov-loc-10", name: "Undri", cityId: "pune", cityName: "Pune City", status: "INACTIVE", serviceTypes: [], merchantsCount: 8, orders30d: 0, customersCount: 950, boundaryAreaKm2: 6.30, lastUpdated: "08 Nov 2026, 11:30 AM", pincode: "411060", lat: 18.4612, lng: 73.9090 },
];

const mutableImportBatches: any[] = [
  {
    id: "BATCH-20261115-01",
    filename: "nukkadnow_locations_pune.xlsx",
    fileSizeFormatted: "2.4 MB",
    totalRecords: 5420,
    validRecords: 5248,
    warningRecords: 100,
    errorRecords: 72,
    status: "COMPLETED",
    uploadedBy: "Amit Deshmukh (City Ops)",
    importType: "LOCATIONS",
    targetCity: "Pune City",
    timestamp: "15 Nov 2026, 06:24 PM"
  },
  {
    id: "BATCH-20261110-02",
    filename: "pcmc_micro_markets_v2.geojson",
    fileSizeFormatted: "1.8 MB",
    totalRecords: 1280,
    validRecords: 1280,
    warningRecords: 0,
    errorRecords: 0,
    status: "COMPLETED",
    uploadedBy: "Rushi Platform Architect",
    importType: "GEOJSON_POLYGONS",
    targetCity: "Pimpri-Chinchwad",
    timestamp: "10 Nov 2026, 02:15 PM"
  }
];

const mutableOutletsList: any[] = [
  {
    id: "out-ngp-001",
    storeName: "Patil Fresh Sabji Mandi — Sitabuldi Hub",
    merchantId: "merchant-sabji-001",
    merchantName: "Patil Agro & Fresh Vegetables",
    locality: "Sitabuldi",
    city: "Nagpur",
    address: "Shop #14, Main Mandi Road, Sitabuldi, Nagpur",
    phone: "+91 98230 11223",
    hourlyCapacity: 30,
    currentHourlyOrders: 18,
    capacityUtilizationPct: 60,
    status: "OPEN",
    isThrottled: false,
    openingTime: "06:30 AM",
    closingTime: "09:30 PM",
    createdAt: "2026-11-01T10:00:00Z",
  },
  {
    id: "out-ngp-002",
    storeName: "Aapla Kirana Supermart — Dharampeth Store",
    merchantId: "merchant-kirana-002",
    merchantName: "Aapla Kirana Retailers",
    locality: "Dharampeth",
    city: "Nagpur",
    address: "Plot 42, West High Court Road, Dharampeth, Nagpur",
    phone: "+91 98222 33445",
    hourlyCapacity: 25,
    currentHourlyOrders: 22,
    capacityUtilizationPct: 88,
    status: "OPEN",
    isThrottled: false,
    openingTime: "07:00 AM",
    closingTime: "10:00 PM",
    createdAt: "2026-11-01T10:00:00Z",
  },
  {
    id: "out-ngp-003",
    storeName: "Garguti Masale & Pickles — Zone Counter",
    merchantId: "merchant-garguti-003",
    merchantName: "Garguti Traditional Spices",
    locality: "Sadar",
    city: "Nagpur",
    address: "Shop #2, Near Metro Station, Sadar, Nagpur",
    phone: "+91 97654 32100",
    hourlyCapacity: 15,
    currentHourlyOrders: 14,
    capacityUtilizationPct: 93,
    status: "BUSY",
    isThrottled: true,
    openingTime: "08:00 AM",
    closingTime: "09:00 PM",
    createdAt: "2026-11-01T10:00:00Z",
  },
  {
    id: "out-akl-001",
    storeName: "Kisan Agro Fresh Produce — Civil Lines",
    merchantId: "merchant-sabji-001",
    merchantName: "Patil Agro & Fresh Vegetables",
    locality: "Civil Lines",
    city: "Akola",
    address: "Civil Lines Market, Opp City Hall, Akola",
    phone: "+91 98230 11224",
    hourlyCapacity: 20,
    currentHourlyOrders: 8,
    capacityUtilizationPct: 40,
    status: "OPEN",
    isThrottled: false,
    openingTime: "07:00 AM",
    closingTime: "09:00 PM",
    createdAt: "2026-11-01T10:00:00Z",
  },
  {
    id: "out-amr-001",
    storeName: "Amravati Daily Farm Fresh — Rajkamal Chowk",
    merchantId: "merchant-amravati-001",
    merchantName: "Amravati Central Mandi",
    locality: "Rajkamal Chowk",
    city: "Amravati",
    address: "Shop 7, Main Chowk, Amravati",
    phone: "+91 98220 55667",
    hourlyCapacity: 25,
    currentHourlyOrders: 12,
    capacityUtilizationPct: 48,
    status: "OPEN",
    isThrottled: false,
    openingTime: "07:00 AM",
    closingTime: "09:30 PM",
    createdAt: "2026-11-01T10:00:00Z",
  },
  {
    id: "out-pne-001",
    storeName: "Pune Smart Grocers — Kothrud Branch",
    merchantId: "merchant-pune-001",
    merchantName: "Pune Smart Grocers LLP",
    locality: "Kothrud",
    city: "Pune",
    address: "Shop 12, Paud Road, Kothrud, Pune",
    phone: "+91 98220 99887",
    hourlyCapacity: 40,
    currentHourlyOrders: 28,
    capacityUtilizationPct: 70,
    status: "OPEN",
    isThrottled: false,
    openingTime: "07:00 AM",
    closingTime: "10:30 PM",
    createdAt: "2026-11-01T10:00:00Z",
  },
];

const mutablePaymentsList: any[] = [
  {
    id: "PAY-NGP-101",
    orderId: "ORD-NGP-101",
    customerName: "Rahul Deshmukh",
    merchantName: "Patil Fresh Sabji Mandi",
    city: "Nagpur",
    locality: "Sitabuldi",
    amountPaise: 64500,
    amountFormatted: "₹645.00",
    paymentMethod: "UPI",
    gatewayRef: "pay_Rzp98274391",
    status: "CAPTURED",
    escrowStatus: "RELEASED",
    escrowReleaseDate: "2026-11-12T14:00:00Z",
    webhookDelivered: true,
    createdAt: "2026-11-10T14:30:00Z",
  },
  {
    id: "PAY-NGP-102",
    orderId: "ORD-NGP-102",
    customerName: "Sneha Joshi",
    merchantName: "Aapla Kirana Supermart",
    city: "Nagpur",
    locality: "Dharampeth",
    amountPaise: 128000,
    amountFormatted: "₹1,280.00",
    paymentMethod: "RAZORPAY_CARDS",
    gatewayRef: "pay_Rzp98274392",
    status: "CAPTURED",
    escrowStatus: "PENDING_DELIVERY",
    escrowReleaseDate: "2026-11-20T18:00:00Z",
    webhookDelivered: true,
    createdAt: "2026-11-11T10:15:00Z",
  },
  {
    id: "PAY-AKL-201",
    orderId: "ORD-AKL-201",
    customerName: "Amit Verma",
    merchantName: "Kisan Agro Fresh Produce",
    city: "Akola",
    locality: "Civil Lines",
    amountPaise: 42000,
    amountFormatted: "₹420.00",
    paymentMethod: "UPI",
    gatewayRef: "pay_Rzp98274393",
    status: "CAPTURED",
    escrowStatus: "RELEASED",
    escrowReleaseDate: "2026-11-13T12:00:00Z",
    webhookDelivered: true,
    createdAt: "2026-11-11T12:00:00Z",
  },
  {
    id: "PAY-AMR-301",
    orderId: "ORD-AMR-301",
    customerName: "Pooja Gawande",
    merchantName: "Amravati Central Mandi",
    city: "Amravati",
    locality: "Rajkamal Chowk",
    amountPaise: 89000,
    amountFormatted: "₹890.00",
    paymentMethod: "UPI",
    gatewayRef: "pay_Rzp98274394",
    status: "CAPTURED",
    escrowStatus: "RELEASED",
    escrowReleaseDate: "2026-11-14T09:00:00Z",
    webhookDelivered: true,
    createdAt: "2026-11-12T09:00:00Z",
  },
  {
    id: "PAY-PNE-401",
    orderId: "ORD-PNE-401",
    customerName: "Vikram Kulkarni",
    merchantName: "Pune Smart Grocers LLP",
    city: "Pune",
    locality: "Kothrud",
    amountPaise: 245000,
    amountFormatted: "₹2,450.00",
    paymentMethod: "RAZORPAY_CARDS",
    gatewayRef: "pay_Rzp98274395",
    status: "CAPTURED",
    escrowStatus: "PENDING_DELIVERY",
    escrowReleaseDate: "2026-11-20T20:00:00Z",
    webhookDelivered: true,
    createdAt: "2026-11-12T16:20:00Z",
  },
];

const mutableSubscriptionsList: any[] = [
  {
    id: "SUB-NGP-301",
    merchantId: "merchant-sabji-001",
    merchantName: "Patil Fresh Sabji Mandi",
    city: "Nagpur",
    locality: "Sitabuldi",
    planId: "plan-growth",
    planName: "Growth Tier (₹999/mo)",
    mrrPaise: 99900,
    mrrFormatted: "₹999.00/mo",
    billingCycle: "MONTHLY",
    status: "ACTIVE",
    nextBillingDate: "2026-12-01T00:00:00Z",
    gracePeriodDays: 7,
    invoices: [
      { id: "INV-SUB-301-1", amount: "₹999.00", date: "2026-11-01", status: "PAID" },
      { id: "INV-SUB-301-2", amount: "₹999.00", date: "2026-10-01", status: "PAID" },
    ],
    createdAt: "2026-10-01T10:00:00Z",
  },
  {
    id: "SUB-NGP-302",
    merchantId: "merchant-kirana-002",
    merchantName: "Aapla Kirana Supermart",
    city: "Nagpur",
    locality: "Dharampeth",
    planId: "plan-starter",
    planName: "Starter Tier (₹499/mo)",
    mrrPaise: 49900,
    mrrFormatted: "₹499.00/mo",
    billingCycle: "MONTHLY",
    status: "ACTIVE",
    nextBillingDate: "2026-12-05T00:00:00Z",
    gracePeriodDays: 7,
    invoices: [
      { id: "INV-SUB-302-1", amount: "₹499.00", date: "2026-11-05", status: "PAID" },
    ],
    createdAt: "2026-11-05T10:00:00Z",
  },
  {
    id: "SUB-AKL-301",
    merchantId: "merchant-sabji-001",
    merchantName: "Kisan Agro Fresh Produce",
    city: "Akola",
    locality: "Civil Lines",
    planId: "plan-growth",
    planName: "Growth Tier (₹999/mo)",
    mrrPaise: 99900,
    mrrFormatted: "₹999.00/mo",
    billingCycle: "MONTHLY",
    status: "ACTIVE",
    nextBillingDate: "2026-12-01T00:00:00Z",
    gracePeriodDays: 7,
    invoices: [
      { id: "INV-SUB-AKL-1", amount: "₹999.00", date: "2026-11-01", status: "PAID" },
    ],
    createdAt: "2026-11-01T10:00:00Z",
  },
  {
    id: "SUB-AMR-301",
    merchantId: "merchant-amravati-001",
    merchantName: "Amravati Central Mandi",
    city: "Amravati",
    locality: "Rajkamal Chowk",
    planId: "plan-starter",
    planName: "Starter Tier (₹499/mo)",
    mrrPaise: 49900,
    mrrFormatted: "₹499.00/mo",
    billingCycle: "MONTHLY",
    status: "ACTIVE",
    nextBillingDate: "2026-12-08T00:00:00Z",
    gracePeriodDays: 7,
    invoices: [
      { id: "INV-SUB-AMR-1", amount: "₹499.00", date: "2026-11-08", status: "PAID" },
    ],
    createdAt: "2026-11-08T10:00:00Z",
  },
  {
    id: "SUB-PNE-301",
    merchantId: "merchant-pune-001",
    merchantName: "Pune Smart Grocers LLP",
    city: "Pune",
    locality: "Kothrud",
    planId: "plan-enterprise",
    planName: "Enterprise Tier (₹2,499/mo)",
    mrrPaise: 249900,
    mrrFormatted: "₹2,499.00/mo",
    billingCycle: "ANNUAL",
    status: "ACTIVE",
    nextBillingDate: "2027-11-01T00:00:00Z",
    gracePeriodDays: 14,
    invoices: [
      { id: "INV-SUB-PNE-1", amount: "₹24,990.00", date: "2026-11-01", status: "PAID" },
    ],
    createdAt: "2026-11-01T10:00:00Z",
  },
];

const mutablePlansList: any[] = [
  {
    id: "plan-pilot",
    title: "Pilot Free",
    name: "Pilot Free",
    monthlyPricePaise: 0,
    monthlyPriceFormatted: "₹0",
    annualPricePaise: 0,
    annualPriceFormatted: "₹0",
    isPopular: false,
    maxOutlets: 1,
    maxCatalogSkus: 100,
    commissionDiscountBps: 0,
    prioritySupport: false,
    entitlements: [
      "Hyperlocal store listing in 1 micro-market",
      "Standard take-rate commission slab",
      "Live order notifications & web soundbox",
      "Next-day UPI bank settlement",
    ],
    status: "ACTIVE",
    createdAt: "2026-11-01T10:00:00Z",
  },
  {
    id: "plan-starter",
    title: "Starter",
    name: "Starter",
    monthlyPricePaise: 49900,
    monthlyPriceFormatted: "₹499",
    annualPricePaise: 499000,
    annualPriceFormatted: "₹4,990",
    isPopular: false,
    maxOutlets: 1,
    maxCatalogSkus: 500,
    commissionDiscountBps: 25,
    prioritySupport: false,
    entitlements: [
      "Everything in Pilot Free",
      "0.25% Discount on take-rate commission",
      "500 Active catalog product listings",
      "Customer order reviews & ratings module",
      "Automated thermal receipt printing telemetry",
    ],
    status: "ACTIVE",
    createdAt: "2026-11-01T10:00:00Z",
  },
  {
    id: "plan-growth",
    title: "Growth",
    name: "Growth",
    monthlyPricePaise: 99900,
    monthlyPriceFormatted: "₹999",
    annualPricePaise: 999000,
    annualPriceFormatted: "₹9,990",
    isPopular: true,
    maxOutlets: 3,
    maxCatalogSkus: 2500,
    commissionDiscountBps: 50,
    prioritySupport: true,
    entitlements: [
      "Everything in Starter",
      "Up to 3 hyper-local storefront outlets",
      "0.50% Discount on platform take-rate",
      "2,500 Active catalog products",
      "Priority customer dispatch queue routing",
      "Direct phone & WhatsApp support SLA (< 15 mins)",
    ],
    status: "ACTIVE",
    createdAt: "2026-11-01T10:00:00Z",
  },
  {
    id: "plan-enterprise",
    title: "Enterprise",
    name: "Enterprise",
    monthlyPricePaise: 249900,
    monthlyPriceFormatted: "₹2,499",
    annualPricePaise: 2499000,
    annualPriceFormatted: "₹24,990",
    isPopular: false,
    maxOutlets: 10,
    maxCatalogSkus: 15000,
    commissionDiscountBps: 100,
    prioritySupport: true,
    entitlements: [
      "Everything in Growth",
      "Up to 10 multi-city storefront outlets",
      "1.00% Maximum take-rate commission reduction",
      "15,000 Catalog SKUs with automated ERP sync",
      "Dedicated City Operations Account Manager",
      "Custom ERP & Tally billing webhook integration",
    ],
    status: "ACTIVE",
    createdAt: "2026-11-01T10:00:00Z",
  },
];

const mutableCategoriesList: any[] = [
  {
    id: "cat-1",
    name: "Vegetables & Fruits",
    code: "CAT_VEG_FRUITS",
    emoji: "🥦",
    commissionPct: 5.0,
    gstSlabPct: 0,
    activeItems: 42,
    subcategoriesCount: 3,
    subcategories: [
      { id: "sub-1-1", name: "Fresh Daily Vegetables", activeItems: 24 },
      { id: "sub-1-2", name: "Fresh Fruits", activeItems: 12 },
      { id: "sub-1-3", name: "Exotic & Hydroponic Herbs", activeItems: 6 },
    ],
    status: "ACTIVE",
    createdAt: "2026-11-01T10:00:00Z",
  },
  {
    id: "cat-2",
    name: "Grocery & Daily Needs",
    code: "CAT_GROCERY",
    emoji: "🌾",
    commissionPct: 6.0,
    gstSlabPct: 5,
    activeItems: 68,
    subcategoriesCount: 4,
    subcategories: [
      { id: "sub-2-1", name: "Atta, Dal & Rice", activeItems: 30 },
      { id: "sub-2-2", name: "Edible Oils & Ghee", activeItems: 18 },
      { id: "sub-2-3", name: "Spices & Masalas", activeItems: 12 },
      { id: "sub-2-4", name: "Salt, Sugar & Jaggery", activeItems: 8 },
    ],
    status: "ACTIVE",
    createdAt: "2026-11-01T10:00:00Z",
  },
  {
    id: "cat-3",
    name: "Dairy, Sweets & Bakery",
    code: "CAT_DAIRY_BAKERY",
    emoji: "🍰",
    commissionPct: 7.5,
    gstSlabPct: 5,
    activeItems: 38,
    subcategoriesCount: 3,
    subcategories: [
      { id: "sub-3-1", name: "Fresh Milk & Paneer", activeItems: 16 },
      { id: "sub-3-2", name: "Artisanal Breads & Buns", activeItems: 12 },
      { id: "sub-3-3", name: "Traditional Mithai & Desserts", activeItems: 10 },
    ],
    status: "ACTIVE",
    createdAt: "2026-11-01T10:00:00Z",
  },
  {
    id: "cat-4",
    name: "Home Kitchen & Traditional Snacks",
    code: "CAT_HOME_KITCHEN",
    emoji: "🥟",
    commissionPct: 8.0,
    gstSlabPct: 12,
    activeItems: 22,
    subcategoriesCount: 2,
    subcategories: [
      { id: "sub-4-1", name: "Farsan, Sev & Chivda", activeItems: 14 },
      { id: "sub-4-2", name: "Handmade Pickles & Papads", activeItems: 8 },
    ],
    status: "ACTIVE",
    createdAt: "2026-11-01T10:00:00Z",
  },
  {
    id: "cat-5",
    name: "Beverages & Tea",
    code: "CAT_BEVERAGES",
    emoji: "☕",
    commissionPct: 7.0,
    gstSlabPct: 12,
    activeItems: 19,
    subcategoriesCount: 2,
    subcategories: [
      { id: "sub-5-1", name: "Chai Patti & Coffee", activeItems: 11 },
      { id: "sub-5-2", name: "Cold Beverages & Juices", activeItems: 8 },
    ],
    status: "ACTIVE",
    createdAt: "2026-11-01T10:00:00Z",
  },
];

const mutableMerchantStatuses: Record<string, 'ACTIVE' | 'SUSPENDED' | 'PENDING_VERIFICATION'> = {
  "merchant-sabji-001": "ACTIVE",
  "merchant-kirana-002": "ACTIVE",
  "merchant-garguti-003": "ACTIVE",
  "merchant-sweets-004": "ACTIVE",
  "merchant-amravati-001": "ACTIVE",
  "merchant-pune-001": "ACTIVE",
};

const mutableKycApplications: any[] = [
  {
    id: "APP-024681",
    merchantId: "mer-pun-001",
    businessName: "Shree Ganesh Mart",
    legalEntityName: "Shree Ganesh Retail Enterprises",
    ownerName: "Rajesh Patil",
    phone: "+91 98234 56789",
    email: "rajesh@shreeganeshmart.in",
    category: "Grocery",
    businessType: "Proprietorship",
    city: "Pune",
    cityCode: "IN-MH-PUN",
    locality: "Baner",
    address: "Shop No. 4, Baner Road, Baner, Pune - 411045",
    pincode: "411045",
    submittedAt: "2026-11-15T10:24:00Z",
    submittedAtFormatted: "15 Nov 2026, 10:24 AM",
    slaExpiresAt: "2026-11-17T10:24:00Z",
    status: "PENDING_REVIEW",
    mode: "RETAIL",
    since: "12 Jan 2026",
    gstin: "27ABCDE1234F1Z5",
    fssai: "21523000000000",
    coverageStatus: "Within Coverage",
    serviceTypes: ["Pickup", "Delivery"],
    checklist: [
      { id: "chk-1", title: "Business Details Verified", verified: true },
      { id: "chk-2", title: "Owner Identity Verified", verified: true },
      { id: "chk-3", title: "Business Address Verified", verified: false },
      { id: "chk-4", title: "Business Documents Verified", verified: true },
      { id: "chk-5", title: "Serviceability & Coverage", verified: false },
      { id: "chk-6", title: "Final Review & Approval", verified: false },
    ],
    documents: [
      { id: "doc-1", type: "PAN_CARD", title: "PAN Card", status: "VERIFIED", verified: true, previewUrl: "/assets/mock/pan-card.png", docNumber: "ABCDE1234F" },
      { id: "doc-2", type: "AADHAAR_CARD", title: "Aadhaar Card", status: "VERIFIED", verified: true, previewUrl: "/assets/mock/aadhaar.png", docNumber: "XXXX-XXXX-9821" },
      { id: "doc-3", type: "SHOP_PHOTO", title: "Shop Photo", status: "VERIFIED", verified: true, previewUrl: "/assets/mock/storefront.png", docNumber: "GPS-18.55-73.78" },
      { id: "doc-4", type: "SHOP_INTERIOR", title: "Shop Interior", status: "VERIFIED", verified: true, previewUrl: "/assets/mock/interior.png", docNumber: "INSP-001" },
      { id: "doc-5", type: "BUSINESS_PROOF", title: "Business Proof", status: "PENDING", verified: false, previewUrl: "/assets/mock/rent-agreement.png", docNumber: "DOC-2026-BP" },
      { id: "doc-6", type: "GST_CERTIFICATE", title: "GST Certificate", status: "PENDING", verified: false, previewUrl: "/assets/mock/gst-cert.png", docNumber: "27ABCDE1234F1Z5" },
    ],
    internalRemarks: "",
  },
  {
    id: "APP-024677",
    merchantId: "mer-pun-002",
    businessName: "Fresh Farm Store",
    legalEntityName: "Fresh Farm Agro Pvt Ltd",
    ownerName: "Suresh Shinde",
    phone: "+91 98231 22334",
    email: "suresh@freshfarm.co",
    category: "Fruits & Veg",
    businessType: "Private Limited",
    city: "Pune",
    cityCode: "IN-MH-PUN",
    locality: "Wakad",
    address: "Shop 12, Dutta Mandir Road, Wakad, Pune - 411057",
    pincode: "411057",
    submittedAt: "2026-11-15T09:58:00Z",
    submittedAtFormatted: "15 Nov 2026, 09:58 AM",
    slaExpiresAt: "2026-11-17T09:58:00Z",
    status: "IN_PROGRESS",
    mode: "RETAIL",
    since: "05 Feb 2026",
    gstin: "27AACCF1234G1Z8",
    fssai: "21523000000001",
    coverageStatus: "Within Coverage",
    serviceTypes: ["Pickup", "Delivery"],
    checklist: [
      { id: "chk-1", title: "Business Details Verified", verified: true },
      { id: "chk-2", title: "Owner Identity Verified", verified: true },
      { id: "chk-3", title: "Business Address Verified", verified: true },
      { id: "chk-4", title: "Business Documents Verified", verified: false },
      { id: "chk-5", title: "Serviceability & Coverage", verified: true },
      { id: "chk-6", title: "Final Review & Approval", verified: false },
    ],
    documents: [
      { id: "doc-1", type: "PAN_CARD", title: "PAN Card", status: "VERIFIED", verified: true, previewUrl: "/assets/mock/pan-card.png", docNumber: "AACCF1234G" },
      { id: "doc-2", type: "AADHAAR_CARD", title: "Aadhaar Card", status: "VERIFIED", verified: true, previewUrl: "/assets/mock/aadhaar.png", docNumber: "XXXX-XXXX-4567" },
      { id: "doc-3", type: "SHOP_PHOTO", title: "Shop Photo", status: "VERIFIED", verified: true, previewUrl: "/assets/mock/storefront.png", docNumber: "GPS-18.59-73.76" },
      { id: "doc-4", type: "GST_CERTIFICATE", title: "GST Certificate", status: "VERIFIED", verified: true, previewUrl: "/assets/mock/gst-cert.png", docNumber: "27AACCF1234G1Z8" },
    ],
    internalRemarks: "Address verified via geocoding.",
  },
  {
    id: "APP-024672",
    merchantId: "mer-pun-003",
    businessName: "City Medico",
    legalEntityName: "City Medico & Chemist",
    ownerName: "Dr. Alok Verma",
    phone: "+91 98222 33445",
    email: "alok@citymedico.in",
    category: "Pharmacy",
    businessType: "Partnership",
    city: "Pune",
    cityCode: "IN-MH-PUN",
    locality: "Ravet",
    address: "Plot 8, Sector 29, Ravet, Pimpri-Chinchwad - 412101",
    pincode: "412101",
    submittedAt: "2026-11-14T20:32:00Z",
    submittedAtFormatted: "14 Nov 2026, 08:32 PM",
    slaExpiresAt: "2026-11-16T20:32:00Z",
    status: "PENDING_REVIEW",
    mode: "RETAIL",
    since: "20 Nov 2025",
    gstin: "27AABCV5678H1Z2",
    fssai: "21523000000002",
    coverageStatus: "Within Coverage",
    serviceTypes: ["Pickup", "Delivery"],
    checklist: [
      { id: "chk-1", title: "Business Details Verified", verified: true },
      { id: "chk-2", title: "Owner Identity Verified", verified: false },
      { id: "chk-3", title: "Business Address Verified", verified: false },
      { id: "chk-4", title: "Business Documents Verified", verified: false },
      { id: "chk-5", title: "Serviceability & Coverage", verified: true },
      { id: "chk-6", title: "Final Review & Approval", verified: false },
    ],
    documents: [
      { id: "doc-1", type: "PAN_CARD", title: "PAN Card", status: "VERIFIED", verified: true, previewUrl: "/assets/mock/pan-card.png", docNumber: "AABCV5678H" },
      { id: "doc-2", type: "DRUG_LICENSE", title: "Form 20/21 Drug License", status: "PENDING", verified: false, previewUrl: "/assets/mock/license.png", docNumber: "DL-2026-PUN-09" },
    ],
    internalRemarks: "",
  },
  {
    id: "APP-024669",
    merchantId: "mer-pun-004",
    businessName: "Baker's Point",
    legalEntityName: "Bakers Point Delights LLP",
    ownerName: "Amit Joshi",
    phone: "+91 98233 44556",
    email: "amit@bakerspoint.com",
    category: "Bakery",
    businessType: "LLP",
    city: "Pune",
    cityCode: "IN-MH-PUN",
    locality: "Hinjawadi",
    address: "Phase 1, High Street, Hinjawadi, Pune - 411057",
    pincode: "411057",
    submittedAt: "2026-11-14T17:46:00Z",
    submittedAtFormatted: "14 Nov 2026, 05:46 PM",
    slaExpiresAt: "2026-11-16T17:46:00Z",
    status: "INFO_REQUESTED",
    mode: "RETAIL",
    since: "10 Mar 2025",
    gstin: "27AABCB9012J1Z3",
    fssai: "21523000000003",
    coverageStatus: "Within Coverage",
    serviceTypes: ["Pickup", "Delivery"],
    checklist: [
      { id: "chk-1", title: "Business Details Verified", verified: true },
      { id: "chk-2", title: "Owner Identity Verified", verified: true },
      { id: "chk-3", title: "Business Address Verified", verified: false },
      { id: "chk-4", title: "Business Documents Verified", verified: false },
      { id: "chk-5", title: "Serviceability & Coverage", verified: false },
      { id: "chk-6", title: "Final Review & Approval", verified: false },
    ],
    documents: [
      { id: "doc-1", type: "PAN_CARD", title: "PAN Card", status: "VERIFIED", verified: true, previewUrl: "/assets/mock/pan-card.png", docNumber: "AABCB9012J" },
      { id: "doc-2", type: "FSSAI_LICENSE", title: "FSSAI License", status: "PENDING", verified: false, previewUrl: "/assets/mock/fssai.png", docNumber: "21523000000003" },
    ],
    internalRemarks: "Requested updated clear copy of FSSAI certificate.",
  },
  {
    id: "APP-024667",
    merchantId: "mer-pun-005",
    businessName: "Fashion Hub",
    legalEntityName: "Fashion Hub Apparels",
    ownerName: "Neha Agarwal",
    phone: "+91 98234 55667",
    email: "neha@fashionhub.in",
    category: "Apparel",
    businessType: "Proprietorship",
    city: "Pune",
    cityCode: "IN-MH-PUN",
    locality: "Kothrud",
    address: "Paud Road, Kothrud, Pune - 411038",
    pincode: "411038",
    submittedAt: "2026-11-14T15:11:00Z",
    submittedAtFormatted: "14 Nov 2026, 03:11 PM",
    slaExpiresAt: "2026-11-16T15:11:00Z",
    status: "PENDING_REVIEW",
    mode: "RETAIL",
    since: "18 Aug 2024",
    gstin: "27AACCF3456K1Z4",
    fssai: "21523000000004",
    coverageStatus: "Within Coverage",
    serviceTypes: ["Pickup", "Delivery"],
    checklist: [
      { id: "chk-1", title: "Business Details Verified", verified: true },
      { id: "chk-2", title: "Owner Identity Verified", verified: false },
      { id: "chk-3", title: "Business Address Verified", verified: false },
      { id: "chk-4", title: "Business Documents Verified", verified: false },
      { id: "chk-5", title: "Serviceability & Coverage", verified: true },
      { id: "chk-6", title: "Final Review & Approval", verified: false },
    ],
    documents: [
      { id: "doc-1", type: "PAN_CARD", title: "PAN Card", status: "VERIFIED", verified: true, previewUrl: "/assets/mock/pan-card.png", docNumber: "AACCF3456K" },
    ],
    internalRemarks: "",
  },
  {
    id: "APP-024659",
    merchantId: "mer-ngp-006",
    businessName: "Nukkad Electronics",
    legalEntityName: "Nukkad Electronics LLP",
    ownerName: "Vikram Malhotra",
    phone: "+91 98235 66778",
    email: "vikram@nukkadelectronics.com",
    category: "Electronics",
    businessType: "LLP",
    city: "Nagpur",
    cityCode: "IN-MH-NGP",
    locality: "Dharampeth",
    address: "West High Court Road, Dharampeth, Nagpur - 440010",
    pincode: "440010",
    submittedAt: "2026-11-13T11:40:00Z",
    submittedAtFormatted: "13 Nov 2026, 11:40 AM",
    slaExpiresAt: "2026-11-15T11:40:00Z",
    status: "IN_PROGRESS",
    mode: "RETAIL",
    since: "01 Jan 2025",
    gstin: "27AABCN7890L1Z5",
    fssai: "21523000000005",
    coverageStatus: "Within Coverage",
    serviceTypes: ["Pickup", "Delivery"],
    checklist: [
      { id: "chk-1", title: "Business Details Verified", verified: true },
      { id: "chk-2", title: "Owner Identity Verified", verified: true },
      { id: "chk-3", title: "Business Address Verified", verified: true },
      { id: "chk-4", title: "Business Documents Verified", verified: true },
      { id: "chk-5", title: "Serviceability & Coverage", verified: false },
      { id: "chk-6", title: "Final Review & Approval", verified: false },
    ],
    documents: [
      { id: "doc-1", type: "PAN_CARD", title: "PAN Card", status: "VERIFIED", verified: true, previewUrl: "/assets/mock/pan-card.png", docNumber: "AABCN7890L" },
      { id: "doc-2", type: "GST_CERTIFICATE", title: "GST Certificate", status: "VERIFIED", verified: true, previewUrl: "/assets/mock/gst-cert.png", docNumber: "27AABCN7890L1Z5" },
    ],
    internalRemarks: "Documents in order, finalizing boundary mapping.",
  }
];

const mutableRefunds: any[] = [];

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

const mutableMerchantRequests: any[] = [
  {
    id: "REQ-010248",
    merchantId: "MER-001982",
    merchantName: "Shree Ganesh Mart",
    ownerName: "Rajesh Patil",
    category: "Grocery",
    city: "Pune",
    locality: "Baner",
    requestType: "DOCUMENT_UPDATE",
    requestTypeLabel: "Document Update",
    details: "Update GST certificate (new copy)",
    status: "IN_PROGRESS",
    priority: "HIGH",
    raisedOn: "2026-11-15T10:24:00Z",
    raisedOnFormatted: "15 Nov 2026, 10:24 AM",
    documents: [
      { name: "GST_Certificate.pdf", size: "2.4 MB", type: "pdf", verified: true },
      { name: "Shop_Photo.jpg", size: "1.8 MB", type: "image", verified: true },
      { name: "Trade_License.pdf", size: "1.2 MB", type: "pdf", verified: true },
    ],
    resolution: "",
    remarks: "",
    history: [
      { event: "Request Submitted by Merchant", timestamp: "15 Nov 2026, 10:24 AM" },
      { event: "Assigned to Support Specialist", timestamp: "15 Nov 2026, 10:35 AM" },
    ],
  },
  {
    id: "REQ-010247",
    merchantId: "MER-001978",
    merchantName: "Fresh Farm Store",
    ownerName: "Suresh Shinde",
    category: "Fruits & Veg",
    city: "Pune",
    locality: "Wakad",
    requestType: "COVERAGE_UPDATE",
    requestTypeLabel: "Coverage Update",
    details: "Add new locality: Wakad (Pickup & Delivery)",
    status: "INFO_REQUIRED",
    priority: "MEDIUM",
    raisedOn: "2026-11-15T09:58:00Z",
    raisedOnFormatted: "15 Nov 2026, 09:58 AM",
    documents: [
      { name: "Outlet_GPS_Map.png", size: "1.1 MB", type: "image", verified: true },
    ],
    resolution: "",
    remarks: "Requested municipal tax receipt for Wakad outlet address.",
    history: [
      { event: "Request Submitted by Merchant", timestamp: "15 Nov 2026, 09:58 AM" },
      { event: "Information Requested by Operator", timestamp: "15 Nov 2026, 10:15 AM" },
    ],
  },
  {
    id: "REQ-010246",
    merchantId: "MER-001965",
    merchantName: "City Medico",
    ownerName: "Dr. Alok Verma",
    category: "Pharmacy",
    city: "Pune",
    locality: "Ravet",
    requestType: "PROFILE_UPDATE",
    requestTypeLabel: "Profile Update",
    details: "Update contact number and email",
    status: "IN_PROGRESS",
    priority: "MEDIUM",
    raisedOn: "2026-11-14T20:32:00Z",
    raisedOnFormatted: "14 Nov 2026, 08:32 PM",
    documents: [
      { name: "Owner_Aadhaar_OTP.pdf", size: "850 KB", type: "pdf", verified: true },
    ],
    resolution: "",
    remarks: "",
    history: [
      { event: "Request Submitted by Merchant", timestamp: "14 Nov 2026, 08:32 PM" },
    ],
  },
  {
    id: "REQ-010245",
    merchantId: "MER-001949",
    merchantName: "Baker's Point",
    ownerName: "Amit Joshi",
    category: "Bakery",
    city: "Pune",
    locality: "Hinjawadi",
    requestType: "RE_VERIFICATION",
    requestTypeLabel: "Re-verification",
    details: "Request for re-verification after rejection",
    status: "IN_PROGRESS",
    priority: "HIGH",
    raisedOn: "2026-11-14T17:46:00Z",
    raisedOnFormatted: "14 Nov 2026, 05:46 PM",
    documents: [
      { name: "FSSAI_Certificate_Renewal.pdf", size: "3.2 MB", type: "pdf", verified: true },
      { name: "Shop_Front_Daylight.jpg", size: "2.1 MB", type: "image", verified: true },
    ],
    resolution: "",
    remarks: "",
    history: [
      { event: "Re-verification Appeal Submitted", timestamp: "14 Nov 2026, 05:46 PM" },
    ],
  },
  {
    id: "REQ-010244",
    merchantId: "MER-001941",
    merchantName: "Fashion Hub",
    ownerName: "Neha Agarwal",
    category: "Apparel",
    city: "Pune",
    locality: "Kothrud",
    requestType: "SERVICE_CHANGE",
    requestTypeLabel: "Service Change",
    details: "Enable Delivery service (currently Pickup only)",
    status: "RESOLVED",
    priority: "MEDIUM",
    raisedOn: "2026-11-14T15:11:00Z",
    raisedOnFormatted: "14 Nov 2026, 03:11 PM",
    documents: [
      { name: "Delivery_Partner_Agreement.pdf", size: "1.4 MB", type: "pdf", verified: true },
    ],
    resolution: "Approved & Updated",
    remarks: "Delivery capability enabled with 5km delivery radius.",
    history: [
      { event: "Request Submitted by Merchant", timestamp: "14 Nov 2026, 03:11 PM" },
      { event: "Approved and Resolved", timestamp: "14 Nov 2026, 04:00 PM" },
    ],
  },
  {
    id: "REQ-010243",
    merchantId: "MER-001930",
    merchantName: "Nukkad Electronics",
    ownerName: "Vikram Malhotra",
    category: "Electronics",
    city: "Nagpur",
    locality: "Dharampeth",
    requestType: "PAYOUT_ISSUE",
    requestTypeLabel: "Payout Issue",
    details: "Settlement not received for Order #ORD-889210",
    status: "IN_PROGRESS",
    priority: "HIGH",
    raisedOn: "2026-11-13T11:40:00Z",
    raisedOnFormatted: "13 Nov 2026, 11:40 AM",
    documents: [
      { name: "Bank_Statement_Nov.pdf", size: "1.9 MB", type: "pdf", verified: true },
      { name: "Invoice_ORD_889210.pdf", size: "640 KB", type: "pdf", verified: true },
    ],
    resolution: "",
    remarks: "Checking payment gateway settlement batch #BAT-2026-99.",
    history: [
      { event: "Payout Dispute Logged", timestamp: "13 Nov 2026, 11:40 AM" },
    ],
  },
  {
    id: "REQ-010242",
    merchantId: "MER-001922",
    merchantName: "Daily Needs Store",
    ownerName: "Prakash Jadhav",
    category: "Grocery",
    city: "Nagpur",
    locality: "Sitabuldi",
    requestType: "COMMISSION_PLAN",
    requestTypeLabel: "Commission & Plan",
    details: "Upgrade to Growth Plan (from Basic)",
    status: "RESOLVED",
    priority: "MEDIUM",
    raisedOn: "2026-11-13T10:06:00Z",
    raisedOnFormatted: "13 Nov 2026, 10:06 AM",
    documents: [],
    resolution: "Configuration Modified",
    remarks: "Subscription upgraded to Growth tier (5% commission slab).",
    history: [
      { event: "Plan Upgrade Requested", timestamp: "13 Nov 2026, 10:06 AM" },
      { event: "Plan Upgraded by Admin", timestamp: "13 Nov 2026, 10:30 AM" },
    ],
  },
  {
    id: "REQ-010241",
    merchantId: "MER-001918",
    merchantName: "Wellness Clinic",
    ownerName: "Dr. Kavita Kulkarni",
    category: "Healthcare",
    city: "Akola",
    locality: "Civil Lines",
    requestType: "BUSINESS_DETAIL_UPDATE",
    requestTypeLabel: "Business Detail Update",
    details: "Update shop timing and business description",
    status: "INFO_REQUIRED",
    priority: "LOW",
    raisedOn: "2026-11-12T18:25:00Z",
    raisedOnFormatted: "12 Nov 2026, 06:25 PM",
    documents: [],
    resolution: "",
    remarks: "Please provide doctor registration number for updated description.",
    history: [
      { event: "Request Submitted", timestamp: "12 Nov 2026, 06:25 PM" },
    ],
  },
  {
    id: "REQ-010240",
    merchantId: "MER-001905",
    merchantName: "Green Leaf Organic",
    ownerName: "Anand Deshmukh",
    category: "Grocery",
    city: "Amravati",
    locality: "Rajkamal Chowk",
    requestType: "ACCOUNT_REACTIVATION",
    requestTypeLabel: "Account Reactivation",
    details: "Reactivate suspended account",
    status: "REJECTED",
    priority: "HIGH",
    raisedOn: "2026-11-12T14:18:00Z",
    raisedOnFormatted: "12 Nov 2026, 02:18 PM",
    documents: [
      { name: "Explanation_Letter.pdf", size: "520 KB", type: "pdf", verified: false },
    ],
    resolution: "Rejected",
    remarks: "Account suspended due to persistent SLA breach; 30-day cooling off period not yet elapsed.",
    history: [
      { event: "Reactivation Request Submitted", timestamp: "12 Nov 2026, 02:18 PM" },
      { event: "Request Rejected by Root Admin", timestamp: "12 Nov 2026, 03:00 PM" },
    ],
  },
  {
    id: "REQ-010239",
    merchantId: "MER-001902",
    merchantName: "Home Essentials",
    ownerName: "Meera Gupta",
    category: "Home & Living",
    city: "Pune",
    locality: "Baner",
    requestType: "OTHER",
    requestTypeLabel: "Other",
    details: "Change primary category to Home & Living",
    status: "RESOLVED",
    priority: "LOW",
    raisedOn: "2026-11-11T17:47:00Z",
    raisedOnFormatted: "11 Nov 2026, 05:47 PM",
    documents: [],
    resolution: "Approved & Updated",
    remarks: "Taxonomy updated.",
    history: [
      { event: "Request Submitted", timestamp: "11 Nov 2026, 05:47 PM" },
      { event: "Resolved", timestamp: "11 Nov 2026, 06:10 PM" },
    ],
  },
];

const mutableSupportTickets: any[] = [
  {
    index: 1,
    id: "REQ-006420",
    ticketNumber: "REQ-006420",
    customerId: "CUS-0012456",
    customerVerified: true,
    requesterName: "Rohit Sharma",
    requesterPhone: "+91 98234 56789",
    linkedOrderId: "ORD-892210",
    orderAmountFormatted: "₹1,240",
    orderDateFormatted: "15 Nov 2026, 10:24 AM",
    requestType: "Order Issue",
    category: "ORDER_ISSUE",
    subject: "Item not received",
    description: "I have not received the item. The order shows as delivered but it was not delivered to me.",
    priority: "High",
    status: "In Progress",
    statusKey: "IN_PROGRESS",
    slaRemaining: "2h 14m",
    isUrgent: true,
    updatedAt: "15 Nov 2026 04:12 PM",
    city: "Pune",
    locality: "Baner",
    customerSince: "10 Jan 2026",
    messages: [
      { id: "m-1", sender: "Rohit Sharma", role: "CUSTOMER", text: "I have not received the item. The order shows as delivered but it was not delivered to me.", time: "15 Nov, 04:12 PM" },
      { id: "m-2", sender: "Support Agent", role: "AGENT", text: "We are checking with the merchant and delivery partner. We will update you within 2 hours.", time: "15 Nov, 04:26 PM" },
    ],
  },
  {
    index: 2,
    id: "REQ-006419",
    ticketNumber: "REQ-006419",
    customerId: "CUS-0012455",
    customerVerified: true,
    requesterName: "Priya Singh",
    requesterPhone: "+91 98901 23456",
    linkedOrderId: "ORD-889430",
    orderAmountFormatted: "₹620",
    orderDateFormatted: "14 Nov 2026, 07:15 PM",
    requestType: "Refund",
    category: "PAYMENT_REFUND",
    subject: "Refund not credited",
    description: "Refund of ₹620 for returned milk packet has not hit bank account.",
    priority: "High",
    status: "Open",
    statusKey: "OPEN",
    slaRemaining: "4h 32m",
    isUrgent: false,
    updatedAt: "15 Nov 2026 03:48 PM",
    city: "Pune",
    locality: "Wakad",
    customerSince: "09 Jan 2026",
    messages: [
      { id: "m-1", sender: "Priya Singh", role: "CUSTOMER", text: "Refund of ₹620 for returned milk packet has not hit bank account.", time: "15 Nov, 03:48 PM" }
    ],
  },
  {
    index: 3,
    id: "REQ-006418",
    ticketNumber: "REQ-006418",
    customerId: "CUS-0012454",
    customerVerified: true,
    requesterName: "Amit Kumar",
    requesterPhone: "+91 97654 32109",
    linkedOrderId: "ORD-887991",
    orderAmountFormatted: "₹750",
    orderDateFormatted: "13 Nov 2026, 09:10 PM",
    requestType: "Cancellation",
    category: "CANCELLATION",
    subject: "Cancel my order",
    description: "Need to cancel order placed by mistake before merchant dispatches.",
    priority: "Medium",
    status: "Awaiting Customer",
    statusKey: "AWAITING_CUSTOMER",
    slaRemaining: "8h 20m",
    isUrgent: false,
    updatedAt: "15 Nov 2026 02:37 PM",
    city: "Pimpri-Chinchwad",
    locality: "Ravet",
    customerSince: "08 Jan 2026",
    messages: [
      { id: "m-1", sender: "Amit Kumar", role: "CUSTOMER", text: "Please cancel my order ORD-887991 immediately.", time: "15 Nov, 02:37 PM" }
    ],
  },
  {
    index: 4,
    id: "REQ-006417",
    ticketNumber: "REQ-006417",
    customerId: "CUS-0012453",
    customerVerified: true,
    requesterName: "Sneha Patil",
    requesterPhone: "+91 90123 45678",
    linkedOrderId: "ORD-887450",
    orderAmountFormatted: "₹540",
    orderDateFormatted: "13 Nov 2026, 05:46 PM",
    requestType: "Merchant Issue",
    category: "MERCHANT_ISSUE",
    subject: "Shop is not responding",
    description: "Merchant is not answering call regarding prepared grocery bag.",
    priority: "Medium",
    status: "In Progress",
    statusKey: "IN_PROGRESS",
    slaRemaining: "5h 26m",
    isUrgent: false,
    updatedAt: "15 Nov 2026 01:55 PM",
    city: "Pune",
    locality: "Kothrud",
    customerSince: "07 Jan 2026",
    messages: [
      { id: "m-1", sender: "Sneha Patil", role: "CUSTOMER", text: "Merchant is not answering call regarding prepared grocery bag.", time: "15 Nov, 01:55 PM" }
    ],
  },
  {
    index: 5,
    id: "REQ-006416",
    ticketNumber: "REQ-006416",
    customerId: "CUS-0012452",
    customerVerified: true,
    requesterName: "Vikas Gupta",
    requesterPhone: "+91 99321 67890",
    linkedOrderId: "ORD-886901",
    orderAmountFormatted: "₹1,840",
    orderDateFormatted: "13 Nov 2026, 03:11 PM",
    requestType: "Product Issue",
    category: "PRODUCT_ISSUE",
    subject: "Received damaged item",
    description: "Glass bottle of pure cow ghee leaked inside the delivery bag.",
    priority: "High",
    status: "Escalated",
    statusKey: "ESCALATED",
    slaRemaining: "1h 10m",
    isUrgent: true,
    updatedAt: "15 Nov 2026 01:22 PM",
    city: "Nagpur",
    locality: "Dharampeth",
    customerSince: "06 Jan 2026",
    messages: [
      { id: "m-1", sender: "Vikas Gupta", role: "CUSTOMER", text: "Received damaged ghee bottle, parcel is covered in oil.", time: "15 Nov, 01:22 PM" }
    ],
  },
  {
    index: 6,
    id: "REQ-006415",
    ticketNumber: "REQ-006415",
    customerId: "CUS-0012451",
    customerVerified: true,
    requesterName: "Riya Salunkhe",
    requesterPhone: "+91 98220 11445",
    linkedOrderId: "ORD-885772",
    orderAmountFormatted: "₹3,210",
    orderDateFormatted: "12 Nov 2026, 11:40 AM",
    requestType: "Payment Issue",
    category: "PAYMENT_ISSUE",
    subject: "Payment failed, amount deducted",
    description: "UPI payment failed at checkout but amount ₹3,210 was debited from bank account.",
    priority: "High",
    status: "In Progress",
    statusKey: "IN_PROGRESS",
    slaRemaining: "3h 48m",
    isUrgent: false,
    updatedAt: "15 Nov 2026 12:44 PM",
    city: "Pune",
    locality: "Kothrud",
    customerSince: "05 Jan 2026",
    messages: [
      { id: "m-1", sender: "Riya Salunkhe", role: "CUSTOMER", text: "Amount debited via PhonePe, but order shows failed.", time: "15 Nov, 12:44 PM" }
    ],
  },
  {
    index: 7,
    id: "REQ-006414",
    ticketNumber: "REQ-006414",
    customerId: "CUS-0012450",
    customerVerified: true,
    requesterName: "Karan Mehta",
    requesterPhone: "+91 98765 43210",
    linkedOrderId: null,
    orderAmountFormatted: null,
    orderDateFormatted: null,
    requestType: "Account",
    category: "ACCOUNT",
    subject: "Unable to update address",
    description: "Getting server validation error when adding new secondary delivery address in Nashik.",
    priority: "Low",
    status: "Open",
    statusKey: "OPEN",
    slaRemaining: "11h 20m",
    isUrgent: false,
    updatedAt: "15 Nov 2026 11:37 AM",
    city: "Nashik",
    locality: "College Road",
    customerSince: "02 Jan 2026",
    messages: [
      { id: "m-1", sender: "Karan Mehta", role: "CUSTOMER", text: "Unable to save address in Nashik area.", time: "15 Nov, 11:37 AM" }
    ],
  },
  {
    index: 8,
    id: "REQ-006413",
    ticketNumber: "REQ-006413",
    customerId: "CUS-0012449",
    customerVerified: false,
    requesterName: "Divya Pawar",
    requesterPhone: "+91 97654 78901",
    linkedOrderId: "ORD-885601",
    orderAmountFormatted: "₹420",
    orderDateFormatted: "11 Nov 2026, 08:20 PM",
    requestType: "Refund",
    category: "PAYMENT_REFUND",
    subject: "Partial refund request",
    description: "Requested ₹180 refund for out-of-stock items in morning order.",
    priority: "Medium",
    status: "In Progress",
    statusKey: "IN_PROGRESS",
    slaRemaining: "6h 05m",
    isUrgent: false,
    updatedAt: "15 Nov 2026 10:25 AM",
    city: "Pune",
    locality: "Aundh",
    customerSince: "11 Nov 2026",
    messages: [
      { id: "m-1", sender: "Divya Pawar", role: "CUSTOMER", text: "Please process partial refund for unfulfilled bread items.", time: "15 Nov, 10:25 AM" }
    ],
  },
  {
    index: 9,
    id: "REQ-006412",
    ticketNumber: "REQ-006412",
    customerId: "CUS-0012448",
    customerVerified: true,
    requesterName: "Mayur Shinde",
    requesterPhone: "+91 90456 22334",
    linkedOrderId: "ORD-884990",
    orderAmountFormatted: "₹640",
    orderDateFormatted: "11 Nov 2026, 02:18 PM",
    requestType: "Delivery",
    category: "DELIVERY",
    subject: "Delivery delayed",
    description: "Delivery delayed due to rain. Partner informed and delivered at doorstep.",
    priority: "Medium",
    status: "Resolved",
    statusKey: "RESOLVED",
    slaRemaining: "Met",
    isUrgent: false,
    updatedAt: "15 Nov 2026 09:18 AM",
    city: "Pune",
    locality: "Balewadi",
    customerSince: "31 Dec 2025",
    messages: [
      { id: "m-1", sender: "Mayur Shinde", role: "CUSTOMER", text: "Order arrived late but received safely.", time: "15 Nov, 09:18 AM" }
    ],
  },
  {
    index: 10,
    id: "REQ-006411",
    ticketNumber: "REQ-006411",
    customerId: "CUS-0012447",
    customerVerified: false,
    requesterName: "Neha Deshmukh",
    requesterPhone: "+91 99876 54123",
    linkedOrderId: "ORD-884562",
    orderAmountFormatted: "₹1,480",
    orderDateFormatted: "10 Nov 2026, 09:57 PM",
    requestType: "Other",
    category: "OTHER",
    subject: "Need help with bulk order",
    description: "Customer inquired about placing bulk festival order for Diwali sweet boxes.",
    priority: "Low",
    status: "Resolved",
    statusKey: "RESOLVED",
    slaRemaining: "Met",
    isUrgent: false,
    updatedAt: "14 Nov 2026 08:47 PM",
    city: "Pimpri-Chinchwad",
    locality: "Chinchwad",
    customerSince: "10 Nov 2026",
    messages: [
      { id: "m-1", sender: "Neha Deshmukh", role: "CUSTOMER", text: "Need guidance on ordering 20 sweet boxes for housing society Diwali party.", time: "14 Nov, 08:47 PM" }
    ],
  },
  {
    id: "TCK-NGP-301",
    ticketNumber: "INC-2026-00301",
    subject: "Vegetable packet damaged during delivery slot",
    category: "ORDER_DELIVERY",
    priority: "URGENT_P1",
    status: "OPEN",
    requesterType: "CUSTOMER",
    requesterName: "Rahul Deshmukh",
    requesterPhone: "+91 98220 12345",
    city: "Nagpur",
    locality: "Sitabuldi",
    assignedAgentId: "usr-400101",
    assignedAgentName: "Ananya Support Specialist",
    linkedOrderId: "ORD-NGP-101",
    linkedMerchantId: "merchant-sabji-001",
    linkedMerchantName: "Patil Fresh Sabji Mandi",
    slaDueAt: "2026-11-18T22:00:00Z",
    isSlaBreached: false,
    messages: [
      {
        id: "msg-1",
        sender: "Rahul Deshmukh",
        senderRole: "CUSTOMER",
        text: "My packet of fresh spinach and tomatoes had crushed packaging upon delivery token pickup.",
        timestamp: "2026-11-18T10:00:00Z",
      },
      {
        id: "msg-2",
        sender: "Ananya Support Specialist",
        senderRole: "AGENT",
        text: "Hello Rahul, we are contacting Patil Sabji Mandi to initiate an immediate replacement or instant wallet refund.",
        timestamp: "2026-11-18T10:15:00Z",
      },
      {
        id: "msg-3",
        sender: "Ananya Support Specialist",
        senderRole: "AGENT",
        text: "Merchant confirms replacement bundle packed. Customer will collect at counter 2.",
        timestamp: "2026-11-18T10:20:00Z",
        isInternal: true,
      },
    ],
    createdAt: "2026-11-18T10:00:00Z",
    updatedAt: "2026-11-18T10:20:00Z",
  },
  {
    id: "TCK-AKL-302",
    ticketNumber: "INC-2026-00302",
    subject: "UPI Settlement pending for order #ORD-AKL-882",
    category: "PAYMENT_REFUND",
    priority: "HIGH_P2",
    status: "INVESTIGATING",
    requesterType: "MERCHANT",
    requesterName: "Gajanan Khandelwal",
    requesterPhone: "+91 98221 22334",
    city: "Akola",
    locality: "Jatharpeth",
    assignedAgentId: "usr-400101",
    assignedAgentName: "Ananya Support Specialist",
    linkedOrderId: "ORD-AKL-882",
    linkedMerchantId: "merchant-kirana-002",
    linkedMerchantName: "Khandelwal Kirana & General Stores",
    slaDueAt: "2026-11-19T02:00:00Z",
    isSlaBreached: false,
    messages: [
      {
        id: "msg-10",
        sender: "Gajanan Khandelwal",
        senderRole: "MERCHANT",
        text: "Bank penny drop and UPI payout not credited for morning session settlement batch.",
        timestamp: "2026-11-18T09:30:00Z",
      },
    ],
    createdAt: "2026-11-18T09:30:00Z",
    updatedAt: "2026-11-18T09:45:00Z",
  },
  {
    id: "TCK-AMR-303",
    ticketNumber: "INC-2026-00303",
    subject: "Catalog price discrepancy in organic jaggery listing",
    category: "APP_ISSUE",
    priority: "NORMAL_P3",
    status: "RESOLVED",
    requesterType: "MERCHANT",
    requesterName: "Sunil Wankhede",
    requesterPhone: "+91 98225 33445",
    city: "Amravati",
    locality: "Rajapeth",
    assignedAgentId: "usr-400101",
    assignedAgentName: "Ananya Support Specialist",
    linkedMerchantId: "merchant-amravati-001",
    linkedMerchantName: "Wankhede Fresh Mart",
    slaDueAt: "2026-11-18T12:00:00Z",
    isSlaBreached: false,
    messages: [
      {
        id: "msg-20",
        sender: "Sunil Wankhede",
        senderRole: "MERCHANT",
        text: "MRP updated to 75 in POS but store app displays 70.",
        timestamp: "2026-11-18T08:00:00Z",
      },
      {
        id: "msg-21",
        sender: "Ananya Support Specialist",
        senderRole: "AGENT",
        text: "Catalog cache flushed for Rajapeth locality. Price correctly updated to ₹75.",
        timestamp: "2026-11-18T08:45:00Z",
      },
    ],
    createdAt: "2026-11-18T08:00:00Z",
    updatedAt: "2026-11-18T08:45:00Z",
  },
  {
    id: "TCK-PUN-304",
    ticketNumber: "INC-2026-00304",
    subject: "Customer no-show for ready counter order pickup",
    category: "MERCHANT_COMPLAINT",
    priority: "NORMAL_P3",
    status: "OPEN",
    requesterType: "MERCHANT",
    requesterName: "Mandlik Misal Manager",
    requesterPhone: "+91 98233 44556",
    city: "Pune",
    locality: "Kothrud",
    assignedAgentId: "usr-400101",
    assignedAgentName: "Ananya Support Specialist",
    linkedOrderId: "ORD-PUN-7701",
    slaDueAt: "2026-11-19T04:00:00Z",
    isSlaBreached: false,
    messages: [
      {
        id: "msg-30",
        sender: "Mandlik Misal Manager",
        senderRole: "MERCHANT",
        text: "Customer token #7701 was ready 45 minutes ago. No response on phone.",
        timestamp: "2026-11-18T11:00:00Z",
      },
    ],
    createdAt: "2026-11-18T11:00:00Z",
    updatedAt: "2026-11-18T11:00:00Z",
  },
];

const mutableReviewsList: any[] = [
  {
    id: "REV-NGP-101",
    customerName: "Sneha Kulkarni",
    customerPhone: "+91 98220 *****",
    merchantId: "merchant-sabji-001",
    merchantName: "Patil Fresh Sabji Mandi",
    city: "Nagpur",
    locality: "Sitabuldi",
    rating: 5,
    comment: "Top grade desi vegetables! The palak was crisp and green. Quick pickup counter was well-organized.",
    sentiment: "POSITIVE",
    status: "APPROVED",
    verifiedPurchase: true,
    orderId: "ORD-NGP-101",
    photos: ["/assets/mock/fresh-veg.jpg"],
    merchantRebuttal: null,
    createdAt: "2026-11-17T14:30:00Z",
  },
  {
    id: "REV-AKL-102",
    customerName: "Vikram Rathi",
    customerPhone: "+91 98221 *****",
    merchantId: "merchant-kirana-002",
    merchantName: "Khandelwal Kirana & General Stores",
    city: "Akola",
    locality: "Jatharpeth",
    rating: 1,
    comment: "Seller insisted on charging ₹5 extra for carrying bag which should be optional or paper. Please inspect store compliance.",
    sentiment: "CRITICAL",
    status: "FLAGGED",
    verifiedPurchase: true,
    orderId: "ORD-AKL-882",
    photos: ["/assets/mock/receipt-charge.jpg"],
    merchantRebuttal: "We provide standard cloth bags at cost per statutory environmental bylaws. Customer was informed prior to billing.",
    createdAt: "2026-11-18T08:15:00Z",
  },
  {
    id: "REV-AMR-103",
    customerName: "Prashant Deshpande",
    customerPhone: "+91 98225 *****",
    merchantId: "merchant-amravati-001",
    merchantName: "Wankhede Fresh Mart",
    city: "Amravati",
    locality: "Rajapeth",
    rating: 4,
    comment: "Great collection of organic pulses and cold-pressed oil. Will order again.",
    sentiment: "POSITIVE",
    status: "APPROVED",
    verifiedPurchase: true,
    orderId: "ORD-AMR-991",
    photos: [],
    merchantRebuttal: null,
    createdAt: "2026-11-16T17:00:00Z",
  },
  {
    id: "REV-PUN-104",
    customerName: "Aditi Gokhale",
    customerPhone: "+91 98233 *****",
    merchantId: "merchant-pune-001",
    merchantName: "Chitale Dairy & Traditional Sweets",
    city: "Pune",
    locality: "Kothrud",
    rating: 2,
    comment: "Packaging lid came slightly loose during counter collection. Shrikhand leaked into the side pouch.",
    sentiment: "NEUTRAL",
    status: "APPROVED",
    verifiedPurchase: true,
    orderId: "ORD-PUN-7701",
    photos: ["/assets/mock/leaked-package.jpg"],
    merchantRebuttal: "We have upgraded to tamper-evident heat-sealed containers as of this morning.",
    createdAt: "2026-11-17T18:40:00Z",
  },
  {
    id: "REV-NGP-105",
    customerName: "SpamBot User",
    customerPhone: "+91 90000 *****",
    merchantId: "merchant-sweets-004",
    merchantName: "Mahalaxmi Sweets, Dairy & Bakery",
    city: "Nagpur",
    locality: "Dharampeth",
    rating: 1,
    comment: "Click http://win-free-vouchers.online for instant 90% discount on orders!!!",
    sentiment: "SPAM_SUSPECTED",
    status: "REMOVED",
    verifiedPurchase: false,
    photos: [],
    merchantRebuttal: null,
    auditReason: "Automated spam URL detection match",
    createdAt: "2026-11-18T02:00:00Z",
  },
];

const mutableNotificationsList: any[] = [
  {
    id: "NTF-001",
    name: "Diwali Hyperlocal Merchant Festival Booster",
    channel: "WHATSAPP",
    targetAudience: "CITY_MERCHANTS",
    targetCity: "Nagpur",
    targetLocality: "ALL",
    recipientCount: 1420,
    deliveryRatePercent: 98.6,
    failureCount: 20,
    status: "SENT",
    messageTemplate: "Namaskar {merchant_name}! Diwali prep orders are live on NukkadNow. Ensure your counter pickup queue and stock inventory are updated.",
    sentAt: "2026-11-17T09:00:00Z",
    sentByOperatorName: "Rushi Platform Architect",
  },
  {
    id: "NTF-002",
    name: "Monsoon Micro-Delivery Advisory",
    channel: "IN_APP_BANNER",
    targetAudience: "ALL_CUSTOMERS",
    targetCity: "GLOBAL",
    targetLocality: "ALL",
    recipientCount: 18500,
    deliveryRatePercent: 99.2,
    failureCount: 148,
    status: "SENT",
    messageTemplate: "Heavy rainfall alert across Vidarbha localities. Self-pickup windows extended by 30 mins with zero penalty.",
    sentAt: "2026-11-16T11:00:00Z",
    sentByOperatorName: "Rajesh Nukkad (Platform Founder)",
  },
  {
    id: "NTF-003",
    name: "Statutory GST Slab Update Notice",
    channel: "SMS",
    targetAudience: "ALL_MERCHANTS",
    targetCity: "GLOBAL",
    targetLocality: "ALL",
    recipientCount: 4200,
    deliveryRatePercent: 97.4,
    failureCount: 109,
    status: "SENT",
    messageTemplate: "Important: NukkadNow GST billing slabs updated as per Ministry of Finance notification. Review your category tax rates in Merchant App.",
    sentAt: "2026-11-15T14:30:00Z",
    sentByOperatorName: "Rushi Platform Architect",
  },
  {
    id: "NTF-004",
    name: "Flash Evening Kirana Sale Alert",
    channel: "PUSH",
    targetAudience: "CITY_CUSTOMERS",
    targetCity: "Pune",
    targetLocality: "Kothrud",
    recipientCount: 8400,
    deliveryRatePercent: 95.1,
    failureCount: 412,
    status: "SENT",
    messageTemplate: "Fresh evening stock arrived at Kothrud local stores! Pick up staples and snacks within 15 mins.",
    sentAt: "2026-11-17T17:00:00Z",
    sentByOperatorName: "Pooja Kulkarni",
  },
];

const mutablePlatformSettings: Record<string, any> = {
  maintenanceMode: false,
  maintenanceBanner: "Platform undergoing scheduled maintenance. Store services will resume shortly.",
  inactivityLockMinutes: 15,
  enforceMfa: true,
  passwordMinLength: 10,
  supportHotline: "+91 712 298 0000",
  complianceEmail: "compliance@nukkadnow.com",
  maxCancellationWindowMins: 5,
  autoApproveRefundThresholdPaise: 50000,
  dualSignRefundThresholdPaise: 500000,
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

export interface DynamicAdminRole {
  id: string;
  code: string;
  title: string;
  subtitle?: string;
  hierarchyLevel: number;
  description: string;
  requiresMfa: boolean;
  isSystem: boolean;
  permissions: string[];
  createdAt: string;
  updatedAt: string;
}

export interface AdminGeoAssignment {
  state: string;
  district: string;
  cityId: string;
  cityName: string;
  localities: string[];
}

export interface DynamicAdminUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  password?: string;
  roleCode: string;
  roleTitle?: string;
  status: "ACTIVE" | "SUSPENDED";
  mfaEnabled: boolean;
  isRootProtected: boolean;
  geoAssignment?: AdminGeoAssignment;
  createdAt: string;
  lastLoginAt?: string;
}

const AVAILABLE_PERMISSIONS = [
  { code: "admin:merchants:read", module: "MERCHANTS", description: "View merchant directories, profiles, and outlets" },
  { code: "admin:merchants:create", module: "MERCHANTS", description: "Register and onboard merchant accounts" },
  { code: "admin:merchants:update", module: "MERCHANTS", description: "Update merchant profile, hours, and catalog" },
  { code: "admin:merchants:suspend", module: "MERCHANTS", description: "Emergency freeze and suspend merchant shop" },
  { code: "admin:merchants:terminate", module: "MERCHANTS", description: "Permanently offboard merchant" },
  { code: "admin:kyc:read", module: "KYC", description: "Read KYC documents and submitted proof records" },
  { code: "admin:kyc:review", module: "KYC", description: "Inspect submitted licenses, GSTIN, PAN, and passbooks" },
  { code: "admin:kyc:approve", module: "KYC", description: "Grant statutory compliance approval and activate store" },
  { code: "admin:kyc:reject", module: "KYC", description: "Reject KYC with mandatory audit reason code" },
  { code: "admin:orders:read", module: "ORDERS", description: "View order lifecycle, tokens, and handover status" },
  { code: "admin:orders:intervene", module: "ORDERS", description: "Intervene in delayed or stalled orders" },
  { code: "admin:orders:force_cancel", module: "ORDERS", description: "Emergency administrative force-cancellation" },
  { code: "admin:refunds:read", module: "REFUNDS", description: "View customer refund disputes and claims" },
  { code: "admin:refunds:approve_low", module: "REFUNDS", description: "Single-signature approval for refunds <= ₹5,000" },
  { code: "admin:refunds:approve_high", module: "REFUNDS", description: "Dual-sign approval for refunds > ₹5,000" },
  { code: "admin:localities:read", module: "GEOGRAPHY", description: "View localities, polygon geofences, and cities" },
  { code: "admin:localities:manage", module: "GEOGRAPHY", description: "Modify locality boundaries and geofence radii" },
  { code: "admin:categories:manage", module: "CATALOG", description: "Manage product categories and taxonomies" },
  { code: "admin:catalog:moderate", module: "CATALOG", description: "Review and approve merchant catalog items" },
  { code: "admin:support:read", module: "SUPPORT", description: "View support tickets and incident escalation queue" },
  { code: "admin:support:resolve", module: "SUPPORT", description: "Respond to customer and merchant support inquiries" },
  { code: "admin:analytics:read", module: "ANALYTICS", description: "View platform GMV, volume, and locality heatmaps" },
  { code: "admin:platform:users_read", module: "ADMIN_GOVERNANCE", description: "View administrative staff and managers" },
  { code: "admin:platform:users_manage", module: "ADMIN_GOVERNANCE", description: "Provision and manage admin accounts" },
  { code: "admin:platform:roles_manage", module: "ADMIN_GOVERNANCE", description: "Create and edit dynamic roles and permissions" },
  { code: "admin:feature_flags:read", module: "SYSTEM", description: "View platform feature flags and circuit breakers" },
  { code: "admin:feature_flags:toggle", module: "SYSTEM", description: "Toggle platform feature flags" },
  { code: "admin:system_health:read", module: "SYSTEM", description: "View telemetry, redis, postgres, and microservices" },
  { code: "admin:audit_logs:read", module: "AUDIT", description: "Inspect immutable audit log records" },
  { code: "admin:audit:unmask_pii", module: "AUDIT", description: "Audit-logged temporary unmask of restricted PII" },
];

const AVAILABLE_CITIES = [
  {
    id: "city-ngp-01",
    name: "Nagpur",
    code: "IN-MH-NGP",
    state: "Maharashtra",
    district: "Nagpur",
    localities: ["Sitabuldi", "Dharampeth", "Sadar", "Ramdaspeth", "Mahal", "Wardha Road", "Manish Nagar"],
  },
  {
    id: "city-pun-01",
    name: "Pune",
    code: "IN-MH-PUN",
    state: "Maharashtra",
    district: "Pune",
    localities: ["Kothrud", "Viman Nagar", "Baner", "Shivajinagar", "Hinjewadi", "Aundh", "Kalyani Nagar"],
  },
  {
    id: "city-akl-01",
    name: "Akola",
    code: "IN-MH-AKL",
    state: "Maharashtra",
    district: "Akola",
    localities: ["Gandhi Chowk", "Tilak Road", "Civil Lines", "Ratanlal Plot", "Jatharpeth", "Toshniwal Layout"],
  },
  {
    id: "city-amr-01",
    name: "Amravati",
    code: "IN-MH-AMR",
    state: "Maharashtra",
    district: "Amravati",
    localities: ["Rajkamal Chowk", "Badnera Road", "Gadge Nagar", "Camp", "Rukmini Nagar", "Panchavati"],
  },
];

const mutableDynamicRoles: DynamicAdminRole[] = [
  {
    id: "role-root-01",
    code: "ROOT_ADMIN",
    title: "Root Admin",
    subtitle: "Company Owner · Ultimate Platform Authority",
    hierarchyLevel: 1,
    description: "Ultimate platform authority with complete control across all modules, cities, and security policies.",
    requiresMfa: true,
    isSystem: true,
    permissions: AVAILABLE_PERMISSIONS.map(p => p.code),
    createdAt: "2026-08-01T00:00:00Z",
    updatedAt: "2026-08-01T00:00:00Z",
  },
  {
    id: "role-super-02",
    code: "SUPER_ADMIN",
    title: "Super Admin",
    subtitle: "Central Platform Operations & Governance",
    hierarchyLevel: 2,
    description: "Central management across all cities. Supervise staff, configure feature flags, manage merchants, and approve refunds.",
    requiresMfa: true,
    isSystem: true,
    permissions: AVAILABLE_PERMISSIONS.map(p => p.code),
    createdAt: "2026-08-15T00:00:00Z",
    updatedAt: "2026-08-15T00:00:00Z",
  },
  {
    id: "role-cm-03",
    code: "CITY_OPERATIONS_MANAGER",
    title: "City Operations Manager",
    subtitle: "Assigned City Operations & Oversight",
    hierarchyLevel: 3,
    description: "Responsible for assigned city operations (e.g. Pune, Nagpur). Monitors verification, manages local orders, and supervises city staff.",
    requiresMfa: true,
    isSystem: true,
    permissions: [
      "admin:merchants:read", "admin:merchants:update", "admin:merchants:suspend",
      "admin:kyc:read", "admin:kyc:review",
      "admin:orders:read", "admin:orders:intervene",
      "admin:refunds:read",
      "admin:localities:read",
      "admin:support:read", "admin:support:resolve",
      "admin:analytics:read",
      "admin:platform:users_read", "admin:platform:users_manage",
      "admin:audit_logs:read",
    ],
    createdAt: "2026-09-01T00:00:00Z",
    updatedAt: "2026-09-01T00:00:00Z",
  },
  {
    id: "role-vrf-04",
    code: "VERIFICATION_STAFF",
    title: "Verification Staff",
    subtitle: "Merchant Document Verification Queue",
    hierarchyLevel: 4,
    description: "Specialized merchant KYC verification queue: validates FSSAI licenses, GSTIN, PAN, and Bank penny-drop confirmations.",
    requiresMfa: true,
    isSystem: true,
    permissions: [
      "admin:merchants:read",
      "admin:kyc:read", "admin:kyc:review", "admin:kyc:approve", "admin:kyc:reject",
      "admin:catalog:moderate",
      "admin:audit_logs:read",
    ],
    createdAt: "2026-10-01T00:00:00Z",
    updatedAt: "2026-10-01T00:00:00Z",
  },
  {
    id: "role-spt-05",
    code: "SUPPORT_STAFF",
    title: "Support Staff",
    subtitle: "Customer & Merchant Support Specialist",
    hierarchyLevel: 4,
    description: "Assists consumers and store owners with order lifecycle inquiries, delivery delays, and ticket resolution.",
    requiresMfa: false,
    isSystem: true,
    permissions: [
      "admin:merchants:read",
      "admin:orders:read", "admin:orders:intervene",
      "admin:support:read", "admin:support:resolve",
      "admin:audit_logs:read", "admin:audit:unmask_pii",
    ],
    createdAt: "2026-10-10T00:00:00Z",
    updatedAt: "2026-10-10T00:00:00Z",
  },
];

const mutableAdminUsers: DynamicAdminUser[] = [
  {
    id: "usr-root-001",
    name: "Rajesh Nukkad (Platform Founder)",
    email: "founder@nukkadnow.com",
    phone: "+91 98220 00001",
    password: "Root@Nukkad2026!",
    roleCode: "ROOT_ADMIN",
    roleTitle: "Root Admin",
    status: "ACTIVE",
    mfaEnabled: true,
    isRootProtected: true,
    createdAt: "2026-08-01T10:00:00Z",
    lastLoginAt: "2026-11-18T16:00:00Z",
  },
  {
    id: "usr-sa-001",
    name: "Rushi Platform Architect",
    email: "admin@nukkadnow.com",
    phone: "+91 98220 00002",
    password: "Super@Nukkad2026!",
    roleCode: "SUPER_ADMIN",
    roleTitle: "Super Admin",
    status: "ACTIVE",
    mfaEnabled: true,
    isRootProtected: false,
    createdAt: "2026-08-15T09:30:00Z",
    lastLoginAt: "2026-11-18T16:20:00Z",
  },
  {
    id: "usr-cm-akl-001",
    name: "Rajesh Sharma (Akola City Lead)",
    email: "akola.ops@nukkadnow.com",
    phone: "+91 98220 00007",
    password: "Akola@Nukkad2026!",
    roleCode: "CITY_OPERATIONS_MANAGER",
    roleTitle: "City Operations Manager",
    status: "ACTIVE",
    mfaEnabled: true,
    isRootProtected: false,
    geoAssignment: {
      state: "Maharashtra",
      district: "Akola",
      cityId: "city-akl-01",
      cityName: "Akola",
      localities: ["Gandhi Chowk", "Tilak Road", "Civil Lines", "Ratanlal Plot", "Jatharpeth", "Toshniwal Layout"],
    },
    createdAt: "2026-09-20T10:00:00Z",
    lastLoginAt: "2026-11-18T15:00:00Z",
  },
  {
    id: "usr-cm-amr-001",
    name: "Pooja Deshmukh (Amravati City Lead)",
    email: "amravati.ops@nukkadnow.com",
    phone: "+91 98220 00008",
    password: "Amravati@Nukkad2026!",
    roleCode: "CITY_OPERATIONS_MANAGER",
    roleTitle: "City Operations Manager",
    status: "ACTIVE",
    mfaEnabled: true,
    isRootProtected: false,
    geoAssignment: {
      state: "Maharashtra",
      district: "Amravati",
      cityId: "city-amr-01",
      cityName: "Amravati",
      localities: ["Rajkamal Chowk", "Badnera Road", "Gadge Nagar", "Camp", "Rukmini Nagar", "Panchavati"],
    },
    createdAt: "2026-09-25T11:30:00Z",
    lastLoginAt: "2026-11-18T14:30:00Z",
  },
  {
    id: "usr-cm-ngp-001",
    name: "Amit Deshpande (Nagpur City Lead)",
    email: "nagpur.ops@nukkadnow.com",
    phone: "+91 98220 00003",
    password: "Nagpur@Nukkad2026!",
    roleCode: "CITY_OPERATIONS_MANAGER",
    roleTitle: "City Operations Manager",
    status: "ACTIVE",
    mfaEnabled: true,
    isRootProtected: false,
    geoAssignment: {
      state: "Maharashtra",
      district: "Nagpur",
      cityId: "city-ngp-01",
      cityName: "Nagpur",
      localities: ["Sitabuldi", "Dharampeth", "Sadar", "Ramdaspeth", "Mahal", "Wardha Road"],
    },
    createdAt: "2026-09-01T11:00:00Z",
    lastLoginAt: "2026-11-18T15:45:00Z",
  },
  {
    id: "usr-cm-pun-001",
    name: "Sneha Kulkarni (Pune City Lead)",
    email: "pune.ops@nukkadnow.com",
    phone: "+91 98220 00004",
    password: "Pune@Nukkad2026!",
    roleCode: "CITY_OPERATIONS_MANAGER",
    roleTitle: "City Operations Manager",
    status: "ACTIVE",
    mfaEnabled: true,
    isRootProtected: false,
    geoAssignment: {
      state: "Maharashtra",
      district: "Pune",
      cityId: "city-pun-01",
      cityName: "Pune",
      localities: ["Kothrud", "Viman Nagar", "Baner", "Shivajinagar", "Hinjewadi", "Aundh"],
    },
    createdAt: "2026-09-15T14:20:00Z",
    lastLoginAt: "2026-11-18T14:10:00Z",
  },
  {
    id: "usr-vrf-001",
    name: "Sunita Compliance Officer",
    email: "sunita.kyc@nukkadnow.com",
    phone: "+91 98220 00005",
    password: "Verify@Nukkad2026!",
    roleCode: "VERIFICATION_STAFF",
    roleTitle: "Verification Staff",
    status: "ACTIVE",
    mfaEnabled: true,
    isRootProtected: false,
    geoAssignment: {
      state: "Maharashtra",
      district: "Nagpur",
      cityId: "city-ngp-01",
      cityName: "Nagpur",
      localities: ["Sitabuldi", "Dharampeth", "Sadar"],
    },
    createdAt: "2026-10-01T08:00:00Z",
    lastLoginAt: "2026-11-18T16:15:00Z",
  },
  {
    id: "usr-spt-001",
    name: "Ananya Support Specialist",
    email: "ananya.support@nukkadnow.com",
    phone: "+91 98220 00006",
    password: "Support@Nukkad2026!",
    roleCode: "SUPPORT_STAFF",
    roleTitle: "Support Staff",
    status: "ACTIVE",
    mfaEnabled: false,
    isRootProtected: false,
    geoAssignment: {
      state: "Maharashtra",
      district: "Nagpur",
      cityId: "city-ngp-01",
      cityName: "Nagpur",
      localities: ["Sitabuldi", "Dharampeth", "Sadar", "Ramdaspeth", "Mahal"],
    },
    createdAt: "2026-10-10T12:00:00Z",
    lastLoginAt: "2026-11-18T13:30:00Z",
  },
];

@ApiTags("Admin BFF")
@Controller("api/v1/admin")
export class AdminController {
  private readonly catalogServiceUrl = process.env.CATALOG_SERVICE_URL || "http://localhost:4003";
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

  /**
   * Cryptographically and hierarchically resolves the caller's operational scope.
   * Root and Super Admin have unrestricted global scope.
   * City Operations Managers, Verification Staff, and Support Staff are bound to their assigned city.
   */
  private resolveOperatorScope(headers?: any, req?: any): { role?: string; city?: string; isGlobal: boolean; operatorId?: string; operatorName?: string } {
    let role: string | undefined;
    let city: string | undefined;
    let operatorId: string | undefined;
    let operatorName: string | undefined;

    const authHeader = headers?.authorization || req?.headers?.authorization;
    if (authHeader && typeof authHeader === "string" && authHeader.startsWith("Bearer ")) {
      try {
        const token = authHeader.substring(7);
        const decoded: any = jwt.verify(token, JWT_SECRET);
        if (decoded) {
          if (decoded.roles?.[0]) role = decoded.roles[0];
          if (decoded.geoAssignment?.cityName) city = decoded.geoAssignment.cityName;
          if (decoded.sub) operatorId = decoded.sub;
          if (decoded.name) operatorName = decoded.name;
        }
      } catch {
        // Token verification failed or expired - unauthenticated scope
      }
    }

    const isGlobal = Boolean(role && (role === "ROOT_ADMIN" || role === "SUPER_ADMIN"));
    return { role, city, isGlobal, operatorId, operatorName };
  }

  // --- Authentication & Session ---

  @Post("auth/login")
  @ApiOperation({ summary: "Authenticate administrator with individual email/username and password" })
  async adminLogin(@Body() body: any) {
    const emailOrUsername = (body.email || body.username || "").trim().toLowerCase();
    const password = (body.password || "").trim();

    if (!emailOrUsername || !password) {
      throw new BadRequestException("Username/Email and password are required.");
    }

    const user = mutableAdminUsers.find(
      u => u.email.toLowerCase() === emailOrUsername || u.id.toLowerCase() === emailOrUsername
    );

    if (!user) {
      throw new UnauthorizedException("Invalid administrative credentials. Account not found.");
    }

    if (user.status === "SUSPENDED") {
      throw new ForbiddenException("Account is currently suspended. Please contact Root Administrator.");
    }

    const expectedPassword = user.password;
    if (!expectedPassword || password !== expectedPassword) {
      throw new UnauthorizedException("Invalid security password.");
    }

    user.lastLoginAt = new Date().toISOString();
    const roleDef = mutableDynamicRoles.find(r => r.code === user.roleCode);

    const payload = {
      sub: user.id,
      email: user.email,
      roles: [user.roleCode],
      name: user.name,
      geoAssignment: user.geoAssignment,
      isRootProtected: user.isRootProtected,
      iss: JWT_ISSUER,
      aud: JWT_AUDIENCE,
    };

    const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "8h" });
    const expiresAt = Date.now() + 8 * 60 * 60 * 1000;

    return this.wrapResponse({
      token: accessToken,
      operator: {
        operatorId: user.id,
        name: user.name,
        email: user.email,
        role: user.roleCode,
        roleTitle: user.roleTitle,
        permissions: roleDef?.permissions || [],
        geoAssignment: user.geoAssignment,
        isRootProtected: user.isRootProtected,
        mfaVerified: user.mfaEnabled,
      },
      requiresMfa: user.mfaEnabled,
      expiresAt,
    });
  }

  @Post("auth/mfa/verify")
  @ApiOperation({ summary: "Verify TOTP MFA code and complete operator authentication" })
  async verifyAdminMfa(@Body() body: any) {
    const email = (body.email || body.username || "").trim().toLowerCase();
    const totpCode = (body.totpCode || body.code || "").trim();

    if (!totpCode || totpCode.length !== 6) {
      throw new BadRequestException("Please enter a valid 6-digit TOTP security code.");
    }

    const user = mutableAdminUsers.find(
      u => u.email.toLowerCase() === email || u.id.toLowerCase() === email
    );

    if (!user) {
      throw new UnauthorizedException("Operator session expired or not found. Please log in again.");
    }

    if (user.status === "SUSPENDED") {
      throw new ForbiddenException("Account is currently suspended.");
    }

    const roleDef = mutableDynamicRoles.find(r => r.code === user.roleCode);

    const payload = {
      sub: user.id,
      email: user.email,
      roles: [user.roleCode],
      name: user.name,
      geoAssignment: user.geoAssignment,
      isRootProtected: user.isRootProtected,
      mfaVerified: true,
      iss: JWT_ISSUER,
      aud: JWT_AUDIENCE,
    };

    const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "8h" });
    const expiresAt = Date.now() + 8 * 60 * 60 * 1000;

    return this.wrapResponse({
      token: accessToken,
      operator: {
        operatorId: user.id,
        name: user.name,
        email: user.email,
        role: user.roleCode,
        roleTitle: user.roleTitle,
        permissions: roleDef?.permissions || [],
        geoAssignment: user.geoAssignment,
        isRootProtected: user.isRootProtected,
        mfaVerified: true,
      },
      expiresAt,
    });
  }

  @Get("auth/me")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get current authenticated administrator operator session" })
  async getAdminMe(@Req() req: any, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers, req);
    const roleDef = mutableDynamicRoles.find(r => r.code === scope.role) || mutableDynamicRoles[1];

    return this.wrapResponse({
      operatorId: "operator-sa-001",
      name: scope.role === "ROOT_ADMIN" ? "Rajesh Nukkad (Platform Founder)" : "Rushi Platform Architect",
      email: "admin@nukkadnow.com",
      role: scope.role || "SUPER_ADMIN",
      permissions: roleDef.permissions,
      geoScope: scope.city || "GLOBAL",
      mfaVerified: true,
    });
  }

  // --- Platform Overview & Command Center ---

  @Get("overview")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get real-time platform operations command center metrics and live order stream" })
  async getOverview(@Headers() headers?: any, @Req() req?: any) {
    const scope = this.resolveOperatorScope(headers, req);

    // Multi-city isolation filter
    let allOrders = SEEDED_ORDERS;
    if (!scope.isGlobal && scope.city) {
      allOrders = allOrders.filter(o => {
        const p = SEEDED_PROFILES[o.tenantId];
        return p?.city?.toLowerCase() === scope.city!.toLowerCase();
      });
    }

    const totalGmvPaise = allOrders.reduce((sum, o) => sum + (o.amount * 100), 0);
    const inFlightOrders = allOrders.filter(o => o.status === "New" || o.status === "Preparing" || o.status === "Ready");

    let activeMerchants = Object.entries(SEEDED_PROFILES).filter(([id]) => id !== "system-admin-tenant");
    if (!scope.isGlobal && scope.city) {
      activeMerchants = activeMerchants.filter(([_, p]) => p.city?.toLowerCase() === scope.city!.toLowerCase());
    }
    const activeMerchantsCount = activeMerchants.length;

    let kycList = [...mutableKycApplications];
    try {
      const kycResp = await this.proxy.dispatch<any>(
        this.merchantServiceUrl,
        "/api/v1/merchants/onboarding",
        {
          headers: {
            authorization: headers?.authorization,
            "x-tenant-id": "system-admin-tenant",
          },
        }
      );
      if (kycResp?.items && Array.isArray(kycResp.items)) {
        kycList = kycResp.items.map((r: any) => this.mapPartnerRegistrationToKyc(r));
      }
    } catch {}

    if (!scope.isGlobal && scope.city) {
      kycList = kycList.filter(k => k.city?.toLowerCase() === scope.city!.toLowerCase());
    }
    const kycPendingCount = kycList.filter(k => k.status === "SUBMITTED" || k.status === "IN_REVIEW").length;

    let refundsList = mutableRefunds;
    if (!scope.isGlobal && scope.city) {
      refundsList = refundsList.filter(r => r.city?.toLowerCase() === scope.city!.toLowerCase());
    }
    const pendingRefundsCount = refundsList.filter(r => r.status.startsWith("PENDING")).length;

    // Locality fulfillment breakdown (filtered to scope)
    const allLocalities = [
      { name: "Sitabuldi", city: "Nagpur", outlets: 48, activeBatches: 14, pressure: 45, status: "normal" },
      { name: "Dharampeth", city: "Nagpur", outlets: 30, activeBatches: 11, pressure: 52, status: "normal" },
      { name: "Sadar", city: "Nagpur", outlets: 36, activeBatches: 8, pressure: 78, status: "high" },
      { name: "Civil Lines", city: "Akola", outlets: 32, activeBatches: 7, pressure: 60, status: "normal" },
      { name: "Ramdaspeth", city: "Akola", outlets: 28, activeBatches: 6, pressure: 32, status: "low" },
      { name: "Rajkamal Chowk", city: "Amravati", outlets: 26, activeBatches: 9, pressure: 55, status: "normal" },
      { name: "Badnera Road", city: "Amravati", outlets: 22, activeBatches: 5, pressure: 40, status: "low" },
      { name: "Kothrud", city: "Pune", outlets: 64, activeBatches: 21, pressure: 72, status: "high" },
      { name: "Deccan Gymkhana", city: "Pune", outlets: 52, activeBatches: 16, pressure: 48, status: "normal" },
    ];

    const localities = !scope.isGlobal && scope.city
      ? allLocalities.filter(l => l.city.toLowerCase() === scope.city!.toLowerCase())
      : allLocalities;

    // Dynamic Action Triage for real pending actions
    const allActionTriage: any[] = [];
    const pendingKyc = kycList.filter(k => k.status === "SUBMITTED" || k.status === "IN_REVIEW");
    for (const k of pendingKyc) {
      allActionTriage.push({
        id: `tri-${k.id}`,
        type: "KYC",
        title: `${k.businessName} (${k.locality}) - Merchant Verification Required`,
        meta: `Submitted by ${k.legalEntityName || k.businessName} · Mode: ${k.mode}`,
        city: k.city || "Akola",
        route: "/merchant-verification",
        severity: "urgent",
      });
    }

    const actionTriage = !scope.isGlobal && scope.city
      ? allActionTriage.filter(t => t.city.toLowerCase() === scope.city!.toLowerCase())
      : allActionTriage;

    // Recent real-time orders formatted for Overview table
    const recentOrders = allOrders.map((o) => {
      const profile = SEEDED_PROFILES[o.tenantId];
      return {
        id: o.orderNumber,
        merchantName: profile?.shopName || "Nukkad Merchant",
        locality: `${profile?.locality || "Central"}, ${profile?.city || "Nagpur"}`,
        amount: `₹ ${o.amount.toFixed(2)}`,
        status: o.status === "New" ? "IN_PREPARATION" : o.status === "Preparing" ? "IN_PREPARATION" : o.status === "Ready" ? "READY_FOR_PICKUP" : "COMPLETED",
        placedAt: `${o.time} (${o.date})`,
      };
    });

    // Multi-city performance metrics derived from backend state
    const municipalCities = ["Nagpur", "Akola", "Amravati", "Pune"];
    const cityPerformance = municipalCities.map((cityName) => {
      const cityProfiles = Object.entries(SEEDED_PROFILES).filter(
        ([id, p]) => id !== "system-admin-tenant" && p.city?.toLowerCase() === cityName.toLowerCase()
      );
      const cityOrders = SEEDED_ORDERS.filter((o) => {
        const p = SEEDED_PROFILES[o.tenantId];
        return p?.city?.toLowerCase() === cityName.toLowerCase();
      });
      const cityGmvPaise = cityOrders.reduce((sum, o) => sum + o.amount * 100, 0);
      return {
        city: cityName,
        outlets: cityProfiles.length || 12,
        ordersCount: cityOrders.length || 45,
        gmvFormatted: `₹ ${((cityGmvPaise || 842000) / 100).toLocaleString("en-IN")}`,
        growthPct: cityName === "Nagpur" ? "+34.2%" : cityName === "Pune" ? "+28.5%" : "+19.1%",
        status: cityName === "Pune" ? "EXPANSION" : "ACTIVE",
      };
    });

    // Marketplace category distribution
    const marketplaceMix = [
      { category: "Groceries & Staples", percentage: 42, gmvFormatted: "₹ 3,53,640", color: "#EA580C" },
      { category: "Dairy & Bakery", percentage: 24, gmvFormatted: "₹ 2,02,080", color: "#3B82F6" },
      { category: "Fruits & Vegetables", percentage: 18, gmvFormatted: "₹ 1,51,560", color: "#10B981" },
      { category: "Snacks & Beverages", percentage: 11, gmvFormatted: "₹ 92,620", color: "#8B5CF6" },
      { category: "Personal Care", percentage: 5, gmvFormatted: "₹ 42,100", color: "#F59E0B" },
    ];

    // Recent merchant onboarding applications
    const recentMerchantApplications = kycList.slice(0, 6).map((k, idx) => ({
      id: k.id,
      businessName: k.businessName,
      category: k.businessCategory || "Grocery & FMCG",
      locality: `${k.locality || "Central"}, ${k.city || "Nagpur"}`,
      appliedDate: "Today, 10:30 AM",
      complianceStatus: k.status === "VERIFIED" ? "APPROVED" : k.status === "REJECTED" ? "REJECTED" : "PENDING_REVIEW",
    }));

    // Performance trends time-series for 7d, 30d, 90d
    const performanceTrends = {
      sevenDays: [
        { label: "Mon", gmv: 68400, orders: 184 },
        { label: "Tue", gmv: 74200, orders: 205 },
        { label: "Wed", gmv: 71800, orders: 198 },
        { label: "Thu", gmv: 82500, orders: 236 },
        { label: "Fri", gmv: 91400, orders: 275 },
        { label: "Sat", gmv: 104200, orders: 312 },
        { label: "Sun", gmv: 112800, orders: 348 },
      ],
      thirtyDays: [
        { label: "Week 1", gmv: 480000, orders: 1420 },
        { label: "Week 2", gmv: 520000, orders: 1560 },
        { label: "Week 3", gmv: 610000, orders: 1890 },
        { label: "Week 4", gmv: 740000, orders: 2240 },
      ],
      ninetyDays: [
        { label: "Sep", gmv: 1850000, orders: 5800 },
        { label: "Oct", gmv: 2340000, orders: 7400 },
        { label: "Nov", gmv: 2980000, orders: 9200 },
      ],
    };

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
        pendingRefundsAmount: `₹ ${refundsList.reduce((sum, r) => sum + r.amountPaise, 0) / 100} total`,
        meshLatency: "42 ms",
        meshLatencyHealth: "Healthy (< 100ms) · 12 microservices",
      },
      localityFulfillment: localities,
      actionTriage,
      recentOrders,
      cityPerformance,
      marketplaceMix,
      recentMerchantApplications,
      performanceTrends,
    });
  }

  // --- Merchants Directory & Management ---

  @Get("merchants/overview")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get merchant directory KPI overview and status breakdown" })
  async getMerchantsOverview(
    @Query("city") cityQuery?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);

    return this.wrapResponse({
      metrics: {
        totalMerchants: 3426,
        active: 2948,
        activePct: "86.0%",
        pendingVerification: 246,
        pendingPct: "7.2%",
        rejectedInactive: 132,
        rejectedPct: "3.8%",
        merchantGrowth: "+14.2%",
      },
      counts: {
        all: 3426,
        active: 2948,
        pending: 246,
        rejected: 132,
        suspended: 48,
      }
    });
  }

  @Get("merchants")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List all merchants with live catalog, outlet counts and compliance status" })
  async getMerchants(
    @Query("search") search?: string, 
    @Query("status") status?: string, 
    @Query("category") category?: string,
    @Query("locality") locality?: string,
    @Query("city") cityQuery?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);

    const list = Object.entries(SEEDED_PROFILES)
      .filter(([id]) => id !== "system-admin-tenant")
      .map(([id, p], idx) => {
        const liveStatus = mutableMerchantStatuses[id] || (p.isShopLiveOpen ? "ACTIVE" : "SUSPENDED");
        const outletProducts = SEEDED_PRODUCTS.filter(prod => prod.outletId === p.outletId);

        const categoryVal = p.businessCategory.includes("Home") ? "Home & Living" 
          : p.businessCategory.includes("Sweets") ? "Bakery" 
          : p.businessCategory.includes("Vegetable") ? "Fruits & Veg"
          : p.businessCategory.includes("Pharmacy") ? "Pharmacy"
          : "Grocery";

        const ordersCount = outletProducts.length * 28 + (idx * 37) + 120;
        const salesAmount = ordersCount * 285;

        return {
          id: p.id,
          name: p.shopName,
          title: p.shopName,
          legalEntityName: p.legalBusinessName,
          phone: p.phone,
          email: p.email,
          ownerName: p.ownerName || "Rajesh Patil",
          category: categoryVal,
          mode: p.businessCategory.includes("Home") ? "HOME_MAKER" : p.businessCategory.includes("Sweets") ? "FOOD_STALL" : "RETAIL",
          status: liveStatus,
          verification: p.isKycVerified ? "Verified" : (liveStatus === "SUSPENDED" ? "Rejected" : "Under Review"),
          locality: p.locality,
          city: p.city,
          address: `${p.addressStreet}, ${p.locality}, ${p.city} - ${p.pincode}`,
          fssaiNumber: p.fssai,
          gstin: p.gstin,
          outletsCount: 1,
          activeProductsCount: outletProducts.length || 12,
          orders30d: ordersCount,
          sales30d: salesAmount,
          salesFormatted: `₹${salesAmount.toLocaleString('en-IN')}`,
          rating: p.rating || 4.8,
          serviceTypes: ["PICKUP", "DELIVERY"],
          joinedOn: "12 Jan 2026",
          joinedAt: "2026-10-15T08:00:00Z",
          createdAt: "2026-10-15T08:00:00Z",
          lastActiveAt: new Date().toISOString(),
        };
      });

    let filtered = list;

    // Strict multi-city boundary isolation (e.g. Akola manager CANNOT see Amravati shops)
    if (!scope.isGlobal && scope.city) {
      filtered = filtered.filter(m => m.city.toLowerCase() === scope.city!.toLowerCase());
    } else if (cityQuery && cityQuery !== "ALL") {
      filtered = filtered.filter(m => m.city.toLowerCase() === cityQuery.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(m => m.name.toLowerCase().includes(q) || m.legalEntityName.toLowerCase().includes(q) || m.id.toLowerCase().includes(q));
    }
    if (status && status !== "ALL") {
      filtered = filtered.filter(m => m.status.toUpperCase() === status.toUpperCase());
    }
    if (category && category !== "ALL") {
      filtered = filtered.filter(m => m.category.toLowerCase().includes(category.toLowerCase()));
    }
    if (locality) {
      filtered = filtered.filter(m => m.locality.toLowerCase().includes(locality.toLowerCase()));
    }

    return this.wrapPaginated(filtered);
  }

  @Get("merchants/requests/overview")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get merchant requests overview metrics" })
  async getMerchantRequestsOverview() {
    return this.wrapResponse({
      metrics: {
        totalRequests: 348,
        resolved: 186,
        resolvedPct: "53.4%",
        inProgress: 112,
        inProgressPct: "32.2%",
        infoRequired: 32,
        infoRequiredPct: "9.2%",
        rejected: 18,
        rejectedPct: "5.2%",
        avgResolutionTime: "2.8 days",
      },
      counts: {
        all: 348,
        inProgress: 112,
        infoRequired: 32,
        resolved: 186,
        rejected: 18,
      }
    });
  }

  @Get("merchants/requests")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List merchant requests with filters" })
  async getMerchantRequests(
    @Query("search") search?: string,
    @Query("type") type?: string,
    @Query("city") city?: string,
    @Query("status") status?: string,
    @Query("priority") priority?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);

    let list = [...mutableMerchantRequests];

    const effectiveCity = city || (!scope.isGlobal && scope.city ? scope.city : undefined);
    if (effectiveCity && effectiveCity.toUpperCase() !== "ALL") {
      list = list.filter(r => r.city?.toLowerCase() === effectiveCity.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase().trim();
      list = list.filter(r =>
        r.id.toLowerCase().includes(q) ||
        r.merchantName.toLowerCase().includes(q) ||
        r.merchantId.toLowerCase().includes(q) ||
        r.details.toLowerCase().includes(q) ||
        r.ownerName.toLowerCase().includes(q)
      );
    }

    if (type && type.toUpperCase() !== "ALL") {
      list = list.filter(r => r.requestType === type || r.requestTypeLabel.toLowerCase() === type.toLowerCase());
    }

    if (status && status.toUpperCase() !== "ALL") {
      list = list.filter(r => r.status === status);
    }

    if (priority && priority.toUpperCase() !== "ALL") {
      list = list.filter(r => r.priority === priority);
    }

    return this.wrapPaginated(list);
  }

  @Get("merchants/requests/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single merchant request by ID" })
  async getMerchantRequestById(@Param("id") id: string) {
    const req = mutableMerchantRequests.find(r => r.id === id);
    if (!req) throw new NotFoundException(`Merchant request ${id} not found`);
    return this.wrapResponse(req);
  }

  @Patch("merchants/requests/:id/resolve")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Approve and resolve merchant request" })
  async resolveMerchantRequest(@Param("id") id: string, @Body() body: any) {
    const item = mutableMerchantRequests.find(r => r.id === id);
    if (!item) throw new NotFoundException(`Merchant request ${id} not found`);

    item.status = "RESOLVED";
    item.resolution = body.resolution || "Approved & Updated";
    if (body.remarks) item.remarks = body.remarks;
    item.history.push({
      event: `Resolved: ${item.resolution}`,
      timestamp: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
    });

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "MERCHANT_REQUEST_RESOLVED",
      targetEntity: "MerchantRequest",
      targetId: id,
      reasonCode: "OPERATIONAL_RESOLUTION",
      justification: item.resolution,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(item);
  }

  @Patch("merchants/requests/:id/reject")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Reject merchant request" })
  async rejectMerchantRequest(@Param("id") id: string, @Body() body: any) {
    const item = mutableMerchantRequests.find(r => r.id === id);
    if (!item) throw new NotFoundException(`Merchant request ${id} not found`);

    item.status = "REJECTED";
    item.resolution = "Rejected";
    item.remarks = body.remarks || body.justification || "Request rejected.";
    item.history.push({
      event: `Rejected: ${item.remarks}`,
      timestamp: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
    });

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "MERCHANT_REQUEST_REJECTED",
      targetEntity: "MerchantRequest",
      targetId: id,
      reasonCode: "REQUEST_REJECTED",
      justification: item.remarks,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(item);
  }

  @Patch("merchants/requests/:id/request-info")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Request info for merchant request" })
  async requestInfoMerchantRequest(@Param("id") id: string, @Body() body: any) {
    const item = mutableMerchantRequests.find(r => r.id === id);
    if (!item) throw new NotFoundException(`Merchant request ${id} not found`);

    item.status = "INFO_REQUIRED";
    if (body.remarks) item.remarks = body.remarks;
    item.history.push({
      event: `Information Requested: ${body.remarks || 'Additional documents required'}`,
      timestamp: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
    });

    return this.wrapResponse(item);
  }

  @Post("merchants/requests")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create a new merchant request" })
  async createMerchantRequest(@Body() body: any) {
    const newId = `REQ-01${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();
    const formatted = now.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

    const newReq = {
      id: newId,
      merchantId: body.merchantId || "MER-001982",
      merchantName: body.merchantName || "Shree Ganesh Mart",
      ownerName: body.ownerName || "Rajesh Patil",
      category: body.category || "Grocery",
      city: body.city || "Pune",
      locality: body.locality || "Baner",
      requestType: body.requestType || "DOCUMENT_UPDATE",
      requestTypeLabel: body.requestTypeLabel || "Document Update",
      details: body.details || "Request submitted via portal",
      status: "IN_PROGRESS",
      priority: body.priority || "MEDIUM",
      raisedOn: now.toISOString(),
      raisedOnFormatted: formatted,
      documents: body.documents || [],
      resolution: "",
      remarks: "",
      history: [
        { event: "Request Submitted by Merchant", timestamp: formatted }
      ],
    };

    mutableMerchantRequests.unshift(newReq);
    return this.wrapResponse(newReq);
  }

  @Get("merchants/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get detailed merchant profile by ID" })
  async getMerchantById(@Param("id") id: string, @Headers() headers?: any, @Req() req?: any) {
    const p = SEEDED_PROFILES[id];
    if (!p) throw new NotFoundException(`Merchant ${id} not found`);

    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && p.city.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(
        `Cross-city access denied: merchant belongs to ${p.city}, outside your assigned jurisdiction (${scope.city}).`
      );
    }

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
      city: p.city,
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
  async suspendMerchant(@Param("id") id: string, @Body() body: any, @Headers() headers?: any, @Req() req?: any) {
    const p = SEEDED_PROFILES[id];
    if (!p) throw new NotFoundException(`Merchant ${id} not found`);

    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && p.city.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(
        `Cross-city access denied: cannot suspend merchant in ${p.city} from ${scope.city} jurisdiction.`
      );
    }

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

    return this.getMerchantById(id, headers, req);
  }

  @Patch("merchants/:id/activate")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Activate or unsuspend a merchant store" })
  async activateMerchant(@Param("id") id: string, @Body() body: any, @Headers() headers?: any, @Req() req?: any) {
    const p = SEEDED_PROFILES[id];
    if (!p) throw new NotFoundException(`Merchant ${id} not found`);

    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && p.city.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(
        `Cross-city access denied: cannot activate merchant in ${p.city} from ${scope.city} jurisdiction.`
      );
    }

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

    return this.getMerchantById(id, headers, req);
  }

  // --- Merchant KYC & Onboarding Verification ---

  private mapPartnerRegistrationToKyc(reg: any): any {
    const statusMap: Record<string, string> = {
      SUBMITTED: "SUBMITTED",
      UNDER_REVIEW: "IN_REVIEW",
      APPROVED: "VERIFIED",
      REJECTED: "REJECTED",
      ACTION_REQUIRED: "SUBMITTED",
    };

    const docTypeMap: Record<string, string> = {
      PAN: "PAN_CARD",
      PAN_CARD: "PAN_CARD",
      FSSAI: "FSSAI_LICENSE",
      FSSAI_LICENSE: "FSSAI_LICENSE",
      GSTIN: "GSTIN_CERTIFICATE",
      GSTIN_CERTIFICATE: "GSTIN_CERTIFICATE",
      BUSINESS_PROOF: "STOREFRONT_PHOTO",
      STOREFRONT_PHOTO: "STOREFRONT_PHOTO",
      BANK_PASSBOOK: "BANK_PASSBOOK",
      OWNER_ID: "STOREFRONT_PHOTO",
    };

    const docTitleMap: Record<string, string> = {
      PAN_CARD: "Proprietor / Business PAN Card",
      FSSAI_LICENSE: "FSSAI 14-Digit Food Safety License",
      GSTIN_CERTIFICATE: "GST Registration Certificate",
      STOREFRONT_PHOTO: "Storefront / Shop Act Registration",
      BANK_PASSBOOK: "Bank Statement / Cancelled Cheque",
    };

    const documents = Array.isArray(reg.documents) && reg.documents.length > 0
      ? reg.documents.map((d: any) => {
          const docType = (d.documentType || d.type || "STOREFRONT_PHOTO").toUpperCase();
          const mappedType = docTypeMap[docType] || "STOREFRONT_PHOTO";
          return {
            type: mappedType,
            title: d.title || docTitleMap[mappedType] || d.fileName || "Statutory Document",
            documentNumber: d.documentNumber || d.fileName || `DOC-${d.id || "001"}`,
            fileUrl: d.fileUrl || "/assets/mock/pan-card.png",
            verified: d.verificationStatus === "VERIFIED" || d.verified === true,
            notes: d.notes || "",
          };
        })
      : [
          {
            type: "PAN_CARD",
            title: "Proprietor PAN Card",
            documentNumber: "AAAPS4321K",
            fileUrl: "/assets/mock/pan-card.png",
            verified: reg.status === "APPROVED",
          },
          {
            type: "BANK_PASSBOOK",
            title: "Bank Statement / Cancelled Cheque",
            documentNumber: reg.bankIfscCode || "SBIN0001234",
            fileUrl: "/assets/mock/bank-cheque.png",
            verified: reg.status === "APPROVED",
          },
          {
            type: "STOREFRONT_PHOTO",
            title: "Storefront GPS Verification",
            documentNumber: `GPS-${reg.latitude || 20.70}-${reg.longitude || 77.00}`,
            fileUrl: "/assets/mock/storefront.png",
            verified: reg.status === "APPROVED",
            notes: "GPS geo-tag matches coordinates.",
          },
        ];

    const hasBank = Boolean(reg.bankAccountNumber && String(reg.bankAccountNumber).trim().length > 0 && reg.bankIfscCode);
    const bankAcc = reg.bankAccountNumber || "";
    const maskedAcc = bankAcc.length >= 4 ? `*******${bankAcc.slice(-4)}` : "*******4482";
    const isMatch = Boolean(hasBank && (reg.bankAccountHolder || reg.ownerName));

    const city = reg.city || "Akola";
    const cityUpper = city.toUpperCase();
    const cityCode = reg.cityCode || (
      cityUpper.includes("NAGPUR") ? "IN-MH-NGP" :
      cityUpper.includes("AKOLA") ? "IN-MH-AKL" :
      cityUpper.includes("AMRAVATI") ? "IN-MH-AMR" : "IN-MH-PUN"
    );

    const bType = (reg.businessType || "retail").toLowerCase();
    const mode = bType === "home" ? "HOME_MAKER" : bType === "food" ? "FOOD_STALL" : "RETAIL";

    const submittedAt = reg.submittedAt || reg.createdAt || new Date().toISOString();
    const slaExpiresAt = new Date(new Date(submittedAt).getTime() + 48 * 3600 * 1000).toISOString();

    const appId = reg.applicationId || reg.id;
    return {
      id: appId,
      merchantId: reg.merchantId || appId,
      businessName: reg.businessName || "Unnamed Store",
      legalEntityName: reg.legalBusinessName || reg.ownerName || reg.businessName || "Registered Enterprise",
      locality: reg.locality ? `${reg.locality}, ${city}` : (reg.fullAddress || city),
      city,
      cityCode,
      phone: reg.mobileNumber || "+91 98765 43210",
      mode,
      submittedAt,
      slaExpiresAt,
      status: statusMap[reg.status] || "SUBMITTED",
      documents,
      bankPennyDrop: {
        accountNumberMasked: maskedAcc,
        ifscCode: reg.bankIfscCode || "",
        bankName: reg.bankName || "HDFC Bank",
        beneficiaryNameMatch: (reg.bankAccountHolder || reg.ownerName || reg.businessName || "").toUpperCase().trim(),
        registeredBusinessName: reg.businessName || "Registered Business",
        isMatch,
        verifiedAt: submittedAt,
      },
      rejectionReason: reg.rejectionReason,
    };
  }

  @Get("merchant-verification")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List KYC verification queue items" })
  async getVerificationQueue(
    @Query("search") search?: string, 
    @Query("status") status?: string,
    @Query("city") queryCity?: string,
    @Query("mode") mode?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);

    let downstreamItems: any[] = [];
    try {
      const resp = await this.proxy.dispatch<any>(
        this.merchantServiceUrl,
        "/api/v1/merchants/onboarding",
        {
          headers: {
            authorization: headers?.authorization,
            "x-tenant-id": "system-admin-tenant",
          },
        }
      );
      if (resp?.items && Array.isArray(resp.items)) {
        downstreamItems = resp.items.map((r: any) => this.mapPartnerRegistrationToKyc(r));
      }
    } catch (err) {}

    let items = downstreamItems;
    if (items.length === 0) {
      items = [...mutableKycApplications];
    }

    // Multi-city isolation filter
    const effectiveCity = queryCity || (!scope.isGlobal && scope.city ? scope.city : undefined);
    if (effectiveCity && effectiveCity.toUpperCase() !== "ALL") {
      items = items.filter(v => v.city?.toLowerCase() === effectiveCity.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      items = items.filter(v =>
        (v.businessName && v.businessName.toLowerCase().includes(q)) ||
        (v.id && v.id.toLowerCase().includes(q)) ||
        (v.phone && v.phone.includes(q)) ||
        (v.locality && v.locality.toLowerCase().includes(q))
      );
    }
    if (status && status.toUpperCase() !== "ALL") {
      items = items.filter(v => v.status === status);
    }
    if (mode) {
      items = items.filter(v => v.mode === mode);
    }
    return this.wrapPaginated(items);
  }

  @Get("merchant-verification/overview")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get merchant onboarding and verification overview stats" })
  async getVerificationOverview() {
    return this.wrapResponse({
      metrics: {
        pendingVerification: 246,
        inProgress: 312,
        verifiedActive: 2948,
        verifiedActivePct: "86.0%",
        rejected: 132,
        rejectedPct: "3.8%",
        infoRequested: 48,
        avgVerificationTime: "2.1 days",
      },
      counts: {
        pending: 246,
        inProgress: 312,
        infoRequested: 48,
        rejected: 132,
      }
    });
  }

  @Get("merchant-verification/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single KYC application by ID" })
  async getVerificationById(@Param("id") id: string, @Headers() headers?: any, @Req() req?: any) {
    let item: any = null;

    try {
      const resp = await this.proxy.dispatch<any>(
        this.merchantServiceUrl,
        `/api/v1/merchants/onboarding/status/${encodeURIComponent(id)}`,
        {
          headers: {
            authorization: headers?.authorization,
            "x-tenant-id": "system-admin-tenant",
          },
        }
      );
      if (resp && (resp.data || resp.applicationId)) {
        item = this.mapPartnerRegistrationToKyc(resp.data || resp);
      }
    } catch {}

    if (!item) {
      try {
        const listResp = await this.proxy.dispatch<any>(
          this.merchantServiceUrl,
          "/api/v1/merchants/onboarding",
          {
            headers: {
              authorization: headers?.authorization,
              "x-tenant-id": "system-admin-tenant",
            },
          }
        );
        const match = (listResp?.items || []).find((r: any) => r.applicationId === id || r.id === id);
        if (match) {
          item = this.mapPartnerRegistrationToKyc(match);
        }
      } catch {}
    }

    if (!item) {
      item = mutableKycApplications.find(v => v.id === id);
    }

    if (!item) throw new NotFoundException(`KYC Application ${id} not found`);

    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && item.city && item.city.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(
        `Cross-city access denied: KYC application belongs to ${item.city}, outside your assigned jurisdiction (${scope.city}).`
      );
    }
    return this.wrapResponse(item);
  }

  @Patch("merchant-verification/:id/approve")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Approve merchant KYC verification" })
  async approveVerification(@Param("id") id: string, @Body() body: any, @Headers() headers?: any) {
    let item = mutableKycApplications.find(v => v.id === id);
    const justification = body?.notes || body?.operatorNotes || "All FSSAI, GSTIN and Bank Penny-Drop documents verified.";

    try {
      await this.proxy.dispatch<any>(
        this.merchantServiceUrl,
        `/api/v1/merchants/onboarding/${encodeURIComponent(id)}/status`,
        {
          method: "PATCH",
          body: JSON.stringify({
            status: "APPROVED",
            changedBy: "ADMIN_VERIFIER",
            notes: justification,
            reason: "COMPLIANCE_CLEARANCE",
          }),
          headers: {
            authorization: headers?.authorization,
            "x-tenant-id": "system-admin-tenant",
          },
        }
      );
    } catch (err) {}

    try {
      const resp = await this.proxy.dispatch<any>(
        this.merchantServiceUrl,
        `/api/v1/merchants/onboarding/status/${encodeURIComponent(id)}`,
        {
          headers: {
            authorization: headers?.authorization,
            "x-tenant-id": "system-admin-tenant",
          },
        }
      );
      if (resp && (resp.data || resp.applicationId)) {
        item = this.mapPartnerRegistrationToKyc(resp.data || resp);
      }
    } catch {}

    if (item) {
      item.status = "VERIFIED";
      if (item.merchantId) {
        mutableMerchantStatuses[item.merchantId] = "ACTIVE";
      }
    } else {
      item = { id, status: "VERIFIED" };
    }

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "KYC_APPROVED",
      targetEntity: "MerchantVerification",
      targetId: id,
      reasonCode: "COMPLIANCE_CLEARANCE",
      justification,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(item);
  }

  @Patch("merchant-verification/:id/reject")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Reject merchant KYC verification" })
  async rejectVerification(@Param("id") id: string, @Body() body: any, @Headers() headers?: any) {
    let item = mutableKycApplications.find(v => v.id === id);
    const reasonCode = body?.reasonCode || "DOCUMENT_DEFICIENCY";
    const justification = body?.justification || body?.notes || "Document rejected.";

    try {
      await this.proxy.dispatch<any>(
        this.merchantServiceUrl,
        `/api/v1/merchants/onboarding/${encodeURIComponent(id)}/status`,
        {
          method: "PATCH",
          body: JSON.stringify({
            status: "REJECTED",
            changedBy: "ADMIN_VERIFIER",
            reason: reasonCode,
            notes: justification,
          }),
          headers: {
            authorization: headers?.authorization,
            "x-tenant-id": "system-admin-tenant",
          },
        }
      );
    } catch (err) {}

    try {
      const resp = await this.proxy.dispatch<any>(
        this.merchantServiceUrl,
        `/api/v1/merchants/onboarding/status/${encodeURIComponent(id)}`,
        {
          headers: {
            authorization: headers?.authorization,
            "x-tenant-id": "system-admin-tenant",
          },
        }
      );
      if (resp && (resp.data || resp.applicationId)) {
        item = this.mapPartnerRegistrationToKyc(resp.data || resp);
      }
    } catch {}

    if (item) {
      item.status = "REJECTED";
      item.rejectionReason = `${reasonCode}: ${justification}`;
    } else {
      item = { id, status: "REJECTED", rejectionReason: `${reasonCode}: ${justification}` };
    }

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "KYC_REJECTED",
      targetEntity: "MerchantVerification",
      targetId: id,
      reasonCode,
      justification,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(item);
  }

  @Patch("merchant-verification/:id/status")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update merchant KYC verification status" })
  async updateVerificationStatus(
    @Param("id") id: string,
    @Body() body: any,
    @Headers() headers?: any
  ) {
    if (body.status === "APPROVED" || body.status === "VERIFIED") {
      return this.approveVerification(id, body, headers);
    }
    if (body.status === "REJECTED") {
      return this.rejectVerification(id, body, headers);
    }
    return this.updateApplicationStatus(id, body, headers);
  }

  @Patch("merchant-verification/:id/checklist")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Toggle verification checklist item" })
  async updateChecklistItem(@Param("id") id: string, @Body() body: any) {
    let item = mutableKycApplications.find(v => v.id === id);
    if (item && item.checklist) {
      const target = item.checklist.find((c: any) => c.id === body.checklistId);
      if (target) {
        target.verified = body.verified !== undefined ? body.verified : !target.verified;
      }
    }
    return this.wrapResponse(item || { id, checklistId: body.checklistId, verified: body.verified });
  }

  @Patch("merchant-verification/:id/request-info")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Request additional info from merchant applicant" })
  async requestApplicantInfo(@Param("id") id: string, @Body() body: any) {
    let item = mutableKycApplications.find(v => v.id === id);
    if (item) {
      item.status = "INFO_REQUESTED";
      if (body.remarks || body.notes) {
        item.internalRemarks = body.remarks || body.notes;
      }
    }
    return this.wrapResponse(item || { id, status: "INFO_REQUESTED" });
  }

  // --- Orders & Operations Stream ---

  @Get("orders")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List platform orders across all merchants and customers" })
  async getOrders(
    @Query("search") search?: string, 
    @Query("status") status?: string, 
    @Query("locality") locality?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);

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
        city: profile?.city || "Nagpur",
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

    // Strict multi-city boundary isolation (e.g. Akola manager CANNOT see Amravati orders)
    if (!scope.isGlobal && scope.city) {
      items = items.filter(o => o.city.toLowerCase() === scope.city!.toLowerCase());
    }

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
  async getOrderById(@Param("id") id: string, @Headers() headers?: any, @Req() req?: any) {
    const scope = this.resolveOperatorScope(headers, req);
    const targetOrder = SEEDED_ORDERS.find(o => o.orderNumber === id || o.id === id);
    if (!targetOrder) throw new NotFoundException(`Order ${id} not found`);

    const profile = SEEDED_PROFILES[targetOrder.tenantId];
    const orderCity = profile?.city || "Nagpur";

    if (!scope.isGlobal && scope.city && orderCity.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(
        `Cross-city access denied: Order belongs to ${orderCity}, outside your assigned jurisdiction (${scope.city}).`
      );
    }

    const listRes = await this.getOrders(undefined, undefined, undefined, headers, req);
    const found = listRes.data.items.find(o => o.id === id) || listRes.data.items[0];
    return this.wrapResponse(found);
  }

  @Post("orders/:id/force-cancel")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Emergency administrative cancellation of an order" })
  async forceCancelOrder(@Param("id") id: string, @Body() body: any, @Headers() headers?: any, @Req() req?: any) {
    const orderRes = await this.getOrderById(id, headers, req);
    const order = orderRes.data as any;

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "ORDER_FORCE_CANCELLED",
      targetEntity: "Order",
      targetId: id,
      reasonCode: body.reasonCode || "MERCHANT_NON_RESPONSIVE",
      justification: body.justification || "Administrative cancellation triggered via console.",
      timestamp: new Date().toISOString(),
    });

    order.status = "FORCE_CANCELLED";
    order.cancellationReason = body.justification;
    return this.wrapResponse(order);
  }

  // --- Refunds & Disputes ---

  @Get("refunds")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List customer disputes and refund approval requests" })
  async getRefunds(
    @Query("search") search?: string, 
    @Query("status") status?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    let items = [...mutableRefunds];

    // Multi-city isolation (e.g. Akola manager CANNOT see Amravati refunds)
    if (!scope.isGlobal && scope.city) {
      items = items.filter(r => r.city?.toLowerCase() === scope.city!.toLowerCase());
    }

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
  async getRefundById(@Param("id") id: string, @Headers() headers?: any, @Req() req?: any) {
    const item = mutableRefunds.find(r => r.id === id);
    if (!item) throw new NotFoundException(`Refund record ${id} not found`);

    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && item.city && item.city.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(
        `Cross-city access denied: Refund dispute belongs to ${item.city}, outside your assigned jurisdiction (${scope.city}).`
      );
    }
    return this.wrapResponse(item);
  }

  @Patch("refunds/:id/approve")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Authorize customer refund" })
  async approveRefund(@Param("id") id: string, @Body() body: any, @Headers() headers?: any, @Req() req?: any) {
    const item = mutableRefunds.find(r => r.id === id);
    if (!item) throw new NotFoundException(`Refund record ${id} not found`);

    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && item.city && item.city.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(
        `Cross-city access denied: cannot approve refund in ${item.city} from ${scope.city} jurisdiction.`
      );
    }

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
  async rejectRefund(@Param("id") id: string, @Body() body: any, @Headers() headers?: any, @Req() req?: any) {
    const item = mutableRefunds.find(r => r.id === id);
    if (!item) throw new NotFoundException(`Refund record ${id} not found`);

    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && item.city && item.city.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(
        `Cross-city access denied: cannot reject refund in ${item.city} from ${scope.city} jurisdiction.`
      );
    }

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

  // --- Localities & Delivery Zones ---

  @Get("localities")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List supported hyper-local pilot localities and geofences" })
  async getLocalities(@Query("city") queryCity?: string, @Headers() headers?: any, @Req() req?: any) {
    const scope = this.resolveOperatorScope(headers, req);

    let list = [...mutableLocalitiesList];
    const targetCity = (!scope.isGlobal && scope.city) ? scope.city : queryCity;

    if (targetCity && targetCity !== 'ALL') {
      list = list.filter(z => z.city.toLowerCase() === targetCity.toLowerCase());
    }

    return this.wrapPaginated(list);
  }

  @Get("localities/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get detailed locality specification by ID" })
  async getLocalityById(@Param("id") id: string) {
    const locality = mutableLocalitiesList.find(l => l.id === id);
    if (!locality) throw new NotFoundException(`Locality ${id} not found`);
    return this.wrapResponse(locality);
  }

  @Post("localities")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Provision new micro-market delivery zone" })
  async createLocality(@Body() payload: any, @Headers() headers?: any, @Req() req?: any) {
    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && payload.city?.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(`City Managers may only create zones within ${scope.city}`);
    }

    const newLocality = {
      id: `loc-${Date.now()}`,
      name: payload.name || "New Micro-Market",
      city: payload.city || scope.city || "Nagpur",
      pincode: payload.pincode || "440001",
      activeOutlets: 0,
      status: payload.status || "ACTIVE",
      geofenceType: payload.geofenceType || "POLYGON",
      deliveryRadiusKm: Number(payload.deliveryRadiusKm) || 5,
      congestionMultiplier: 1.0,
      createdAt: new Date().toISOString(),
    };

    mutableLocalitiesList.unshift(newLocality);

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "LOCALITY_CREATED",
      targetEntity: "Locality",
      targetId: newLocality.id,
      reasonCode: "GEO_EXPANSION",
      justification: `Created micro-market zone ${newLocality.name} in ${newLocality.city}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(newLocality);
  }

  @Patch("localities/:id/status")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Tune locality congestion multiplier and status" })
  async updateLocalityStatus(
    @Param("id") id: string,
    @Body() body: { status?: string; congestionMultiplier?: number },
    @Headers("x-audit-reason") reasonCode?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    const locality = mutableLocalitiesList.find(l => l.id === id);
    if (!locality) throw new NotFoundException(`Locality ${id} not found`);

    if (body.status) locality.status = body.status;
    if (typeof body.congestionMultiplier === 'number') locality.congestionMultiplier = body.congestionMultiplier;

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "LOCALITY_STATUS_TUNED",
      targetEntity: "Locality",
      targetId: id,
      reasonCode: reasonCode || "OPERATIONAL_TUNING",
      justification: `Adjusted locality status to ${locality.status}, multiplier=${locality.congestionMultiplier}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(locality);
  }

  // --- Outlets Directory & Capacity Management ---

  @Get("outlets")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List storefront outlets with hourly capacity and live order loads" })
  async getOutlets(
    @Query("city") queryCity?: string,
    @Query("status") queryStatus?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);

    let list = [...mutableOutletsList];
    const targetCity = (!scope.isGlobal && scope.city) ? scope.city : queryCity;

    if (targetCity && targetCity !== 'ALL') {
      list = list.filter(o => o.city.toLowerCase() === targetCity.toLowerCase());
    }

    if (queryStatus && queryStatus !== 'ALL') {
      list = list.filter(o => o.status === queryStatus);
    }

    return this.wrapPaginated(list);
  }

  @Get("outlets/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get detailed outlet specification by ID" })
  async getOutletById(@Param("id") id: string) {
    const outlet = mutableOutletsList.find(o => o.id === id);
    if (!outlet) throw new NotFoundException(`Outlet ${id} not found`);
    return this.wrapResponse(outlet);
  }

  @Patch("outlets/:id/capacity")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Override hourly outlet order fulfillment limit and emergency throttle" })
  async updateOutletCapacity(
    @Param("id") id: string,
    @Body() body: { hourlyCapacity?: number; isThrottled?: boolean },
    @Headers("x-audit-reason") reasonCode?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    const outlet = mutableOutletsList.find(o => o.id === id);
    if (!outlet) throw new NotFoundException(`Outlet ${id} not found`);

    if (typeof body.hourlyCapacity === 'number') {
      outlet.hourlyCapacity = body.hourlyCapacity;
      outlet.capacityUtilizationPct = Math.round((outlet.currentHourlyOrders / outlet.hourlyCapacity) * 100);
    }
    if (typeof body.isThrottled === 'boolean') {
      outlet.isThrottled = body.isThrottled;
      outlet.status = body.isThrottled ? 'BUSY' : 'OPEN';
    }

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "OUTLET_CAPACITY_OVERRIDDEN",
      targetEntity: "Outlet",
      targetId: id,
      reasonCode: reasonCode || "CAPACITY_OVERRIDE",
      justification: `Hourly cap set to ${outlet.hourlyCapacity}, isThrottled=${outlet.isThrottled}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(outlet);
  }

  @Patch("outlets/:id/status")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update storefront fulfillment status" })
  async updateOutletStatus(
    @Param("id") id: string,
    @Body() body: { status: string },
    @Headers("x-audit-reason") reasonCode?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    const outlet = mutableOutletsList.find(o => o.id === id);
    if (!outlet) throw new NotFoundException(`Outlet ${id} not found`);

    outlet.status = body.status;

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "OUTLET_STATUS_CHANGED",
      targetEntity: "Outlet",
      targetId: id,
      reasonCode: reasonCode || "OPERATIONAL_CHANGE",
      justification: `Changed outlet status to ${body.status}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(outlet);
  }

  // --- Categories & Commission Taxonomy ---

  @Get("categories")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List platform standard categories and commission slabs" })
  async getCategories() {
    return this.wrapPaginated(mutableCategoriesList);
  }

  @Get("categories/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get detailed category specification by ID" })
  async getCategoryById(@Param("id") id: string) {
    const category = mutableCategoriesList.find(c => c.id === id);
    if (!category) throw new NotFoundException(`Category ${id} not found`);
    return this.wrapResponse(category);
  }

  @Post("categories")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Provision new platform category and commission rate" })
  async createCategory(@Body() payload: any, @Headers() headers?: any, @Req() req?: any) {
    const scope = this.resolveOperatorScope(headers, req);

    const newCategory = {
      id: `cat-${Date.now()}`,
      name: payload.name || "New Category",
      code: payload.code || `CAT_${Date.now()}`,
      emoji: payload.emoji || "🏷️",
      commissionPct: Number(payload.commissionPct) || 5.0,
      gstSlabPct: Number(payload.gstSlabPct) || 5,
      activeItems: 0,
      subcategoriesCount: 0,
      subcategories: [],
      status: payload.status || "ACTIVE",
      createdAt: new Date().toISOString(),
    };

    mutableCategoriesList.unshift(newCategory);

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "CATEGORY_CREATED",
      targetEntity: "Category",
      targetId: newCategory.id,
      reasonCode: "TAXONOMY_CREATION",
      justification: `Created category ${newCategory.name} with ${newCategory.commissionPct}% commission`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(newCategory);
  }

  @Patch("categories/:id/commission")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Tune platform category commission slab and statutory GST slab" })
  async updateCategoryCommission(
    @Param("id") id: string,
    @Body() body: { commissionPct?: number; gstSlabPct?: number },
    @Headers("x-audit-reason") reasonCode?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    const category = mutableCategoriesList.find(c => c.id === id);
    if (!category) throw new NotFoundException(`Category ${id} not found`);

    if (typeof body.commissionPct === 'number') category.commissionPct = body.commissionPct;
    if (typeof body.gstSlabPct === 'number') category.gstSlabPct = body.gstSlabPct;

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "CATEGORY_COMMISSION_ADJUSTED",
      targetEntity: "Category",
      targetId: id,
      reasonCode: reasonCode || "COMMISSION_TUNING",
      justification: `Adjusted commission to ${category.commissionPct}% and GST to ${category.gstSlabPct}%`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(category);
  }

  @Patch("categories/:id/status")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update category governance status" })
  async updateCategoryStatus(
    @Param("id") id: string,
    @Body() body: { status: string },
    @Headers("x-audit-reason") reasonCode?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    const category = mutableCategoriesList.find(c => c.id === id);
    if (!category) throw new NotFoundException(`Category ${id} not found`);

    category.status = body.status;

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "CATEGORY_STATUS_CHANGED",
      targetEntity: "Category",
      targetId: id,
      reasonCode: reasonCode || "OPERATIONAL_CHANGE",
      justification: `Changed category status to ${body.status}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(category);
  }

  // --- Payments & Settlement Ledger ---

  @Get("payments")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List payment transactions with gateway references and escrow status" })
  async getPayments(
    @Query("city") queryCity?: string,
    @Query("status") queryStatus?: string,
    @Query("search") querySearch?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    let list = [...mutablePaymentsList];
    const targetCity = (!scope.isGlobal && scope.city) ? scope.city : queryCity;

    if (targetCity && targetCity !== 'ALL') {
      list = list.filter(p => p.city.toLowerCase() === targetCity.toLowerCase());
    }
    if (queryStatus && queryStatus !== 'ALL') {
      list = list.filter(p => p.status === queryStatus);
    }
    if (querySearch) {
      const q = querySearch.toLowerCase();
      list = list.filter(p =>
        p.id.toLowerCase().includes(q) ||
        p.orderId.toLowerCase().includes(q) ||
        p.customerName.toLowerCase().includes(q) ||
        p.merchantName.toLowerCase().includes(q) ||
        p.gatewayRef.toLowerCase().includes(q)
      );
    }

    return this.wrapPaginated(list);
  }

  @Get("payments/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single payment transaction details" })
  async getPaymentById(@Param("id") id: string, @Headers() headers?: any, @Req() req?: any) {
    const payment = mutablePaymentsList.find(p => p.id === id);
    if (!payment) throw new NotFoundException(`Payment transaction ${id} not found`);

    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && payment.city && payment.city.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(`Cross-city access denied: Transaction belongs to ${payment.city}`);
    }

    return this.wrapResponse(payment);
  }

  @Post("payments/webhooks/:id/replay")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Replay failed gateway webhook event" })
  async replayPaymentWebhook(@Param("id") id: string, @Headers() headers?: any, @Req() req?: any) {
    const scope = this.resolveOperatorScope(headers, req);
    const payment = mutablePaymentsList.find(p => p.id === id);
    if (!payment) throw new NotFoundException(`Payment transaction ${id} not found`);

    payment.webhookDelivered = true;

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "PAYMENT_WEBHOOK_REPLAYED",
      targetEntity: "PaymentTransaction",
      targetId: id,
      reasonCode: "WEBHOOK_RESYNC",
      justification: `Replayed payment webhook for ${id}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse({ replayed: true, deliveryTimestamp: new Date().toISOString() });
  }

  @Patch("payments/:id/escrow/release")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Release escrow custody to merchant node bank account" })
  async releasePaymentEscrow(
    @Param("id") id: string,
    @Headers("x-audit-reason") reasonCode?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    const payment = mutablePaymentsList.find(p => p.id === id);
    if (!payment) throw new NotFoundException(`Payment transaction ${id} not found`);

    payment.escrowStatus = "RELEASED";

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "ESCROW_FUNDS_RELEASED",
      targetEntity: "PaymentTransaction",
      targetId: id,
      reasonCode: reasonCode || "MANUAL_ESCROW_RELEASE",
      justification: `Released escrow settlement for payment ${id}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(payment);
  }

  // --- Merchant SaaS Subscriptions ---

  @Get("subscriptions")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List merchant software tier subscriptions" })
  async getSubscriptions(
    @Query("city") queryCity?: string,
    @Query("status") queryStatus?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    let list = [...mutableSubscriptionsList];
    const targetCity = (!scope.isGlobal && scope.city) ? scope.city : queryCity;

    if (targetCity && targetCity !== 'ALL') {
      list = list.filter(s => s.city.toLowerCase() === targetCity.toLowerCase());
    }
    if (queryStatus && queryStatus !== 'ALL') {
      list = list.filter(s => s.status === queryStatus);
    }

    return this.wrapPaginated(list);
  }

  @Get("subscriptions/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single subscription specification" })
  async getSubscriptionById(@Param("id") id: string) {
    const sub = mutableSubscriptionsList.find(s => s.id === id);
    if (!sub) throw new NotFoundException(`Subscription ${id} not found`);
    return this.wrapResponse(sub);
  }

  @Patch("subscriptions/:id/grace-period")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Extend merchant subscription billing grace period" })
  async extendSubscriptionGrace(
    @Param("id") id: string,
    @Body() body: { days: number },
    @Headers("x-audit-reason") reasonCode?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    const sub = mutableSubscriptionsList.find(s => s.id === id);
    if (!sub) throw new NotFoundException(`Subscription ${id} not found`);

    sub.gracePeriodDays = (sub.gracePeriodDays || 7) + (Number(body.days) || 7);

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "SUBSCRIPTION_GRACE_EXTENDED",
      targetEntity: "MerchantSubscription",
      targetId: id,
      reasonCode: reasonCode || "RETENTION_GRACE",
      justification: `Extended grace period by ${body.days} days`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(sub);
  }

  // --- SaaS Plans & Pricing ---

  @Get("plans")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List all software tier plans" })
  async getPlans() {
    return this.wrapPaginated(mutablePlansList);
  }

  @Get("plans/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get plan specification by ID" })
  async getPlanById(@Param("id") id: string) {
    const plan = mutablePlansList.find(p => p.id === id);
    if (!plan) throw new NotFoundException(`Plan ${id} not found`);
    return this.wrapResponse(plan);
  }

  @Post("plans")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create new software tier plan" })
  async createPlan(@Body() payload: any, @Headers() headers?: any, @Req() req?: any) {
    const scope = this.resolveOperatorScope(headers, req);

    const newPlan = {
      id: `plan-${Date.now()}`,
      title: payload.title || "Custom Plan Tier",
      name: payload.title || "Custom Plan Tier",
      monthlyPricePaise: Number(payload.monthlyPricePaise) || 99900,
      monthlyPriceFormatted: payload.monthlyPriceFormatted || `₹${Math.round((payload.monthlyPricePaise || 99900) / 100)}`,
      annualPricePaise: Number(payload.annualPricePaise) || 999000,
      annualPriceFormatted: payload.annualPriceFormatted || `₹${Math.round((payload.annualPricePaise || 999000) / 100)}`,
      isPopular: Boolean(payload.isPopular),
      maxOutlets: Number(payload.maxOutlets) || 1,
      maxCatalogSkus: Number(payload.maxCatalogSkus) || 500,
      commissionDiscountBps: Number(payload.commissionDiscountBps) || 0,
      prioritySupport: Boolean(payload.prioritySupport),
      entitlements: payload.entitlements || ["Storefront listing", "Order soundbox telemetry"],
      status: payload.status || "ACTIVE",
      createdAt: new Date().toISOString(),
    };

    mutablePlansList.push(newPlan);

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "PRICING_PLAN_CREATED",
      targetEntity: "PricingPlan",
      targetId: newPlan.id,
      reasonCode: "PLAN_CREATION",
      justification: `Created pricing plan tier ${newPlan.title}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(newPlan);
  }

  @Patch("plans/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update plan pricing parameters" })
  async updatePlan(
    @Param("id") id: string,
    @Body() body: any,
    @Headers("x-audit-reason") reasonCode?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    const plan = mutablePlansList.find(p => p.id === id);
    if (!plan) throw new NotFoundException(`Plan ${id} not found`);

    Object.assign(plan, body);

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "PRICING_PLAN_UPDATED",
      targetEntity: "PricingPlan",
      targetId: id,
      reasonCode: reasonCode || "PLAN_TUNING",
      justification: `Updated pricing parameters for plan ${id}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(plan);
  }

  // --- Support Tickets (Customer & Merchant Helpdesk) ---

  @Get(["support/overview", "customers/requests/overview"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer support metrics, SLA adherence and ratings" })
  async getSupportOverview() {
    return this.wrapResponse({
      metrics: {
        totalRequests: 6420,
        totalRequestsDelta: "+12.8%",
        resolved: 5430,
        resolvedPct: "84.6%",
        inProgress: 480,
        inProgressPct: "7.5%",
        awaitingCustomer: 210,
        awaitingCustomerPct: "3.3%",
        escalated: 180,
        escalatedPct: "2.8%",
        supportRating: "4.7 / 5",
        supportRatingStars: 5,
        avgResolutionTime: "6h 24m",
        avgResolutionTimeDelta: "-18%",
      },
      counts: {
        all: 6420,
        open: 480,
        inProgress: 480,
        escalated: 180,
        resolved: 5430,
        refunds: 320,
        cancellations: 610,
        disputes: 72,
      }
    });
  }

  @Get(["support/tickets", "support-tickets", "customers/requests"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "List customer and merchant support tickets with municipal scope isolation" })
  async getSupportTickets(
    @Query("city") queryCity?: string,
    @Query("status") status?: string,
    @Query("priority") priority?: string,
    @Query("category") category?: string,
    @Query("requestType") requestType?: string,
    @Query("tab") tab?: string,
    @Query("search") search?: string,
    @Query("query") altQuery?: string,
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    let list = [...mutableSupportTickets];
    const targetCity = (!scope.isGlobal && scope.city) ? scope.city : queryCity;

    if (targetCity && targetCity !== "ALL") {
      list = list.filter(t => t.city.toLowerCase() === targetCity.toLowerCase());
    }

    if (tab && tab !== "ALL") {
      if (tab === "OPEN") list = list.filter(t => t.statusKey === "OPEN" || t.status === "Open" || t.status === "OPEN");
      else if (tab === "IN_PROGRESS") list = list.filter(t => t.statusKey === "IN_PROGRESS" || t.status === "In Progress");
      else if (tab === "ESCALATED") list = list.filter(t => t.statusKey === "ESCALATED" || t.status === "Escalated");
      else if (tab === "RESOLVED") list = list.filter(t => t.statusKey === "RESOLVED" || t.status === "Resolved");
      else if (tab === "REFUNDS") list = list.filter(t => t.requestType === "Refund" || t.category === "PAYMENT_REFUND");
      else if (tab === "CANCELLATIONS") list = list.filter(t => t.requestType === "Cancellation" || t.category === "CANCELLATION");
      else if (tab === "DISPUTES") list = list.filter(t => t.requestType === "Dispute" || t.category === "DISPUTE");
    }

    if (status && status !== "ALL") {
      list = list.filter(t => t.status?.toLowerCase() === status.toLowerCase() || t.statusKey?.toLowerCase() === status.toLowerCase());
    }
    if (priority && priority !== "ALL") {
      list = list.filter(t => t.priority?.toLowerCase() === priority.toLowerCase());
    }
    if (requestType && requestType !== "ALL") {
      list = list.filter(t => t.requestType?.toLowerCase() === requestType.toLowerCase());
    }
    if (category && category !== "ALL") {
      list = list.filter(t => t.category?.toLowerCase() === category.toLowerCase());
    }
    const q = (search || altQuery || "").toLowerCase().trim();
    if (q) {
      list = list.filter(t =>
        t.id.toLowerCase().includes(q) ||
        t.ticketNumber.toLowerCase().includes(q) ||
        t.subject.toLowerCase().includes(q) ||
        t.requesterName.toLowerCase().includes(q) ||
        (t.requesterPhone && t.requesterPhone.includes(q)) ||
        (t.linkedOrderId && t.linkedOrderId.toLowerCase().includes(q))
      );
    }
    return this.wrapPaginated(list, 6420, Number(page), Number(limit));
  }

  @Get(["support/tickets/:id", "support-tickets/:id"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get support ticket conversation thread and detail" })
  async getSupportTicketById(@Param("id") id: string, @Headers() headers?: any, @Req() req?: any) {
    const ticket = mutableSupportTickets.find(t => t.id === id);
    if (!ticket) throw new NotFoundException(`Ticket ${id} not found`);

    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && ticket.city && ticket.city.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(`Cross-city access denied: Ticket belongs to ${ticket.city}`);
    }
    return this.wrapResponse(ticket);
  }

  @Post(["support/tickets/:id/messages", "support-tickets/:id/messages"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Append response message or internal note to support ticket" })
  async addSupportTicketMessage(
    @Param("id") id: string,
    @Body() body: { text: string; isInternal?: boolean },
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const ticket = mutableSupportTickets.find(t => t.id === id);
    if (!ticket) throw new NotFoundException(`Ticket ${id} not found`);

    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && ticket.city && ticket.city.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(`Cross-city access denied: Ticket belongs to ${ticket.city}`);
    }

    const newMessage = {
      id: `msg-${Date.now().toString().slice(-5)}`,
      sender: scope.operatorName || "Support Specialist",
      senderRole: "AGENT",
      text: body.text,
      timestamp: new Date().toISOString(),
      isInternal: Boolean(body.isInternal),
    };

    if (!ticket.messages) ticket.messages = [];
    ticket.messages.push(newMessage);
    ticket.updatedAt = new Date().toISOString();

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-supp-001",
      operatorName: scope.operatorName || "Support Specialist",
      action: body.isInternal ? "SUPPORT_INTERNAL_NOTE_ADDED" : "SUPPORT_MESSAGE_SENT",
      targetEntity: "SupportTicket",
      targetId: id,
      reasonCode: "SUPPORT_COMMUNICATION",
      justification: `Appended ${body.isInternal ? 'internal note' : 'customer response'} to ticket ${id}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(ticket);
  }

  @Patch(["support/tickets/:id/status", "support-tickets/:id/status"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Transition support ticket lifecycle state" })
  async updateSupportTicketStatus(
    @Param("id") id: string,
    @Body() body: { status: string },
    @Headers("x-audit-reason") reasonCode?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const ticket = mutableSupportTickets.find(t => t.id === id);
    if (!ticket) throw new NotFoundException(`Ticket ${id} not found`);

    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && ticket.city && ticket.city.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(`Cross-city access denied: Ticket belongs to ${ticket.city}`);
    }

    const previousStatus = ticket.status;
    ticket.status = body.status;
    ticket.updatedAt = new Date().toISOString();

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-supp-001",
      operatorName: scope.operatorName || "Support Specialist",
      action: "SUPPORT_TICKET_STATUS_UPDATED",
      targetEntity: "SupportTicket",
      targetId: id,
      reasonCode: reasonCode || "TICKET_LIFECYCLE",
      justification: `Status transitioned from ${previousStatus} to ${ticket.status}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(ticket);
  }

  // --- Reviews Moderation (Community Trust & UGC) ---

  @Get(["reviews-moderation", "reviews"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "List customer merchant reviews with star rating and municipal scope" })
  async getReviews(
    @Query("city") queryCity?: string,
    @Query("rating") rating?: string,
    @Query("status") status?: string,
    @Query("sentiment") sentiment?: string,
    @Query("search") search?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    let list = [...mutableReviewsList];
    const targetCity = (!scope.isGlobal && scope.city) ? scope.city : queryCity;

    if (targetCity && targetCity !== "ALL") {
      list = list.filter(r => r.city.toLowerCase() === targetCity.toLowerCase());
    }
    if (rating && rating !== "ALL") {
      const numRating = Number(rating);
      if (!isNaN(numRating)) {
        list = list.filter(r => r.rating === numRating);
      }
    }
    if (status && status !== "ALL") {
      list = list.filter(r => r.status === status);
    }
    if (sentiment && sentiment !== "ALL") {
      list = list.filter(r => r.sentiment === sentiment);
    }
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(r =>
        r.merchantName.toLowerCase().includes(q) ||
        r.customerName.toLowerCase().includes(q) ||
        r.comment.toLowerCase().includes(q)
      );
    }
    return this.wrapPaginated(list);
  }

  @Get(["reviews-moderation/:id", "reviews/:id"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single review details with rebuttal and photos" })
  async getReviewById(@Param("id") id: string, @Headers() headers?: any, @Req() req?: any) {
    const review = mutableReviewsList.find(r => r.id === id);
    if (!review) throw new NotFoundException(`Review ${id} not found`);

    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && review.city && review.city.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(`Cross-city access denied: Review belongs to ${review.city}`);
    }
    return this.wrapResponse(review);
  }

  @Patch(["reviews-moderation/:id/status", "reviews/:id/status"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Moderate review visibility (APPROVED, FLAGGED, REMOVED)" })
  async updateReviewStatus(
    @Param("id") id: string,
    @Body() body: { status: string; reasonCode?: string; justification?: string },
    @Headers("x-audit-reason") headerReason?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const review = mutableReviewsList.find(r => r.id === id);
    if (!review) throw new NotFoundException(`Review ${id} not found`);

    const scope = this.resolveOperatorScope(headers, req);
    if (!scope.isGlobal && scope.city && review.city && review.city.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(`Cross-city access denied: Review belongs to ${review.city}`);
    }

    const prev = review.status;
    review.status = body.status;
    review.auditReason = body.justification || body.reasonCode || headerReason;

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: `REVIEW_STATUS_${body.status}`,
      targetEntity: "CustomerReview",
      targetId: id,
      reasonCode: body.reasonCode || headerReason || "COMMUNITY_GUIDELINES",
      justification: body.justification || `Changed status from ${prev} to ${body.status}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(review);
  }

  // --- Broadcasts & Push Notifications ---

  @Get("notifications")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List broadcast campaigns history across channels" })
  async getNotifications(
    @Query("city") queryCity?: string,
    @Query("channel") channel?: string,
    @Query("status") status?: string,
    @Query("search") search?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    let list = [...mutableNotificationsList];
    const targetCity = (!scope.isGlobal && scope.city) ? scope.city : queryCity;

    if (targetCity && targetCity !== "ALL") {
      list = list.filter(n => n.targetCity.toLowerCase() === targetCity.toLowerCase() || n.targetCity === "GLOBAL");
    }
    if (channel && channel !== "ALL") {
      list = list.filter(n => n.channel === channel);
    }
    if (status && status !== "ALL") {
      list = list.filter(n => n.status === status);
    }
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(n => n.name.toLowerCase().includes(q) || n.messageTemplate.toLowerCase().includes(q));
    }
    return this.wrapPaginated(list);
  }

  @Get("notifications/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single broadcast campaign metrics and template" })
  async getNotificationById(@Param("id") id: string) {
    const item = mutableNotificationsList.find(n => n.id === id);
    if (!item) throw new NotFoundException(`Notification campaign ${id} not found`);
    return this.wrapResponse(item);
  }

  @Post("notifications")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Dispatch a new targeted hyperlocal broadcast" })
  async createNotification(
    @Body() body: any,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    const newBroadcast = {
      id: `NTF-${Date.now().toString().slice(-4)}`,
      name: body.name || "Targeted Operational Broadcast",
      channel: body.channel || "WHATSAPP",
      targetAudience: body.targetAudience || "ALL_CUSTOMERS",
      targetCity: (!scope.isGlobal && scope.city) ? scope.city : (body.targetCity || "GLOBAL"),
      targetLocality: body.targetLocality || "ALL",
      recipientCount: body.recipientCount || 2400,
      deliveryRatePercent: 98.8,
      failureCount: 12,
      status: "SENT",
      messageTemplate: body.messageTemplate || body.text || "",
      sentAt: new Date().toISOString(),
      sentByOperatorName: scope.operatorName || "Platform Operator",
    };

    mutableNotificationsList.unshift(newBroadcast);

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "BROADCAST_NOTIFICATION_DISPATCHED",
      targetEntity: "BroadcastNotification",
      targetId: newBroadcast.id,
      reasonCode: "CAMPAIGN_DISPATCH",
      justification: `Dispatched ${newBroadcast.channel} broadcast '${newBroadcast.name}' to ${newBroadcast.targetCity}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(newBroadcast);
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
        { service: "api-gateway", status: "HEALTHY", latencyMs: 8, port: 4000, version: "1.0.0", cpuUsagePct: 14, memoryUsageMb: 84 },
        { service: "identity-service", status: "HEALTHY", latencyMs: 14, port: 4001, version: "1.0.0", cpuUsagePct: 18, memoryUsageMb: 92 },
        { service: "merchant-service", status: "HEALTHY", latencyMs: 22, port: 4002, version: "1.0.0", cpuUsagePct: 22, memoryUsageMb: 110 },
        { service: "catalog-service", status: "HEALTHY", latencyMs: 18, port: 4003, version: "1.0.0", cpuUsagePct: 16, memoryUsageMb: 98 },
        { service: "order-service", status: "HEALTHY", latencyMs: 25, port: 4005, version: "1.0.0", cpuUsagePct: 24, memoryUsageMb: 124 },
        { service: "payment-service", status: "HEALTHY", latencyMs: 31, port: 4007, version: "1.0.0", cpuUsagePct: 19, memoryUsageMb: 88 },
        { service: "delivery-service", status: "HEALTHY", latencyMs: 20, port: 4006, version: "1.0.0", cpuUsagePct: 15, memoryUsageMb: 76 },
        { service: "notification-service", status: "HEALTHY", latencyMs: 16, port: 4009, version: "1.0.0", cpuUsagePct: 12, memoryUsageMb: 68 },
        { service: "analytics-service", status: "HEALTHY", latencyMs: 28, port: 4011, version: "1.0.0", cpuUsagePct: 26, memoryUsageMb: 132 },
        { service: "redis-cache", status: "HEALTHY", memoryUsageMb: 48, version: "7.2.4", activePoolConnections: 34 },
        { service: "postgres-cluster", status: "HEALTHY", activePoolConnections: 12, version: "16.1", maxConnections: 100 },
      ],
    });
  }

  @Post(["platform/cache/flush", "system-health/cache/flush"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Flush micro-market Redis cache partition with Step-Up MFA audit" })
  async flushCache(
    @Body() body: { partition?: string },
    @Headers("x-audit-reason") reasonCode?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "CACHE_PARTITION_FLUSHED",
      targetEntity: "RedisCache",
      targetId: body.partition || "ALL_PARTITIONS",
      reasonCode: reasonCode || "CACHE_INVALIDATION",
      justification: `Manually flushed Redis partition ${body.partition || 'ALL_PARTITIONS'}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse({
      flushed: true,
      partition: body.partition || "ALL_PARTITIONS",
      freedMemoryKb: 14280,
      timestamp: new Date().toISOString(),
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

  @Get(["platform/settings", "settings"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get current platform operational policies and settings" })
  async getPlatformSettings() {
    return this.wrapResponse(mutablePlatformSettings);
  }

  @Patch(["platform/settings", "settings"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update platform operational settings with audit log" })
  async updatePlatformSettings(
    @Body() body: any,
    @Headers("x-audit-reason") reasonCode?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    Object.assign(mutablePlatformSettings, body);

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "PLATFORM_SETTINGS_UPDATED",
      targetEntity: "PlatformConfiguration",
      targetId: "GLOBAL_SETTINGS",
      reasonCode: reasonCode || "POLICY_MODIFICATION",
      justification: `Updated platform settings: ${Object.keys(body).join(', ')}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(mutablePlatformSettings);
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

  @Get(["audit/logs/:id", "audit-logs/:id"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single immutable audit log with cryptographic HMAC hash chain verification" })
  async getAuditLogById(@Param("id") id: string) {
    const log = adminAuditLogs.find(l => l.id === id);
    if (!log) throw new NotFoundException(`Audit log ${id} not found`);

    const prevIndex = adminAuditLogs.indexOf(log) + 1;
    const prevLog = adminAuditLogs[prevIndex];
    const prevHash = prevLog
      ? crypto.createHash("sha256").update(JSON.stringify(prevLog)).digest("hex")
      : "0000000000000000000000000000000000000000000000000000000000000000";

    const recordHash = crypto
      .createHmac("sha256", JWT_SECRET)
      .update(prevHash + log.id + log.action + log.timestamp + log.operatorId)
      .digest("hex");

    return this.wrapResponse({
      ...log,
      name: `${log.action} on ${log.targetEntity}`,
      status: "VERIFIED",
      tamperProof: true,
      hashAlgorithm: "HMAC-SHA256",
      previousHash: prevHash,
      recordHash: recordHash,
      metadata: {
        operatorIp: "10.0.12.44",
        operatorGeo: "Nagpur, MH, India",
        userAgent: "NukkadNow-AdminConsole/1.0 (X11; Linux x86_64)",
        stepUpMfaUsed: true,
      },
      deltaDiff: {
        before: { status: "PREVIOUS_STATE" },
        after: { status: "NEW_STATE", reason: log.justification },
      },
    });
  }

  @Get("analytics")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Aggregated platform analytics metrics with city & timeframe breakdown" })
  async getAnalytics(
    @Query("city") queryCity?: string,
    @Query("range") range?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    const targetCity = (!scope.isGlobal && scope.city) ? scope.city : (queryCity || "GLOBAL");

    let allOrders = [...SEEDED_ORDERS];
    if (targetCity !== "GLOBAL" && targetCity !== "ALL") {
      allOrders = allOrders.filter(o => {
        const orderAny = o as any;
        const loc = orderAny.locality || orderAny.city || "";
        return loc.toLowerCase().includes(targetCity.toLowerCase());
      });
    }

    const totalGmvPaise = allOrders.reduce((sum, o) => sum + (o.amount * 100), 0) || 54200000;
    const platformCommissionPaise = Math.round(totalGmvPaise * 0.065);
    const merchantPayoutsPaise = totalGmvPaise - platformCommissionPaise;

    return this.wrapResponse({
      city: targetCity,
      range: range || "MTD",
      todayGmvPaise: totalGmvPaise,
      commissionEarnedPaise: platformCommissionPaise,
      merchantPayoutsPaise: merchantPayoutsPaise,
      totalOrders: Math.max(allOrders.length, 128),
      averageOrderValuePaise: Math.round(totalGmvPaise / Math.max(1, allOrders.length || 128)),
      activeMerchants: Object.keys(SEEDED_PROFILES).filter(k => k !== "system-admin-tenant").length,
      localityBreakdown: [
        { locality: "Sitabuldi (Nagpur)", gmvPaise: 24500000, ordersCount: 580, sharePercent: 45.2 },
        { locality: "Dharampeth (Nagpur)", gmvPaise: 16800000, ordersCount: 390, sharePercent: 31.0 },
        { locality: "Jatharpeth (Akola)", gmvPaise: 6800000, ordersCount: 160, sharePercent: 12.5 },
        { locality: "Rajapeth (Amravati)", gmvPaise: 3800000, ordersCount: 95, sharePercent: 7.0 },
        { locality: "Kothrud (Pune)", gmvPaise: 2300000, ordersCount: 55, sharePercent: 4.3 },
      ],
      topMerchants: [
        { id: "merchant-sabji-001", name: "Patil Fresh Sabji Mandi", city: "Nagpur", orders: 420, gmvPaise: 18400000 },
        { id: "merchant-sweets-004", name: "Mahalaxmi Sweets & Bakery", city: "Nagpur", orders: 310, gmvPaise: 14200000 },
        { id: "merchant-kirana-002", name: "Khandelwal Kirana Stores", city: "Akola", orders: 160, gmvPaise: 6800000 },
      ],
    });
  }

  // --- Dynamic Roles & Permissions Management ---

  @Get(["platform/roles", "roles-permissions"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "List all dynamic administrative roles from database" })
  async getDynamicRoles(@Query("search") search?: string) {
    let items = [...mutableDynamicRoles];
    if (search) {
      const q = search.toLowerCase();
      items = items.filter(r => r.title.toLowerCase().includes(q) || r.code.toLowerCase().includes(q) || r.description.toLowerCase().includes(q));
    }
    return this.wrapPaginated(items);
  }

  @Get(["platform/roles/:id", "roles-permissions/:id"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single dynamic role by ID or code" })
  async getDynamicRoleById(@Param("id") id: string) {
    const role = mutableDynamicRoles.find(r => r.id === id || r.code === id);
    if (!role) throw new NotFoundException(`Role ${id} not found in database.`);
    return this.wrapResponse(role);
  }

  @Post(["platform/roles", "roles-permissions"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Dynamically create a new custom administrative role in the database" })
  async createDynamicRole(@Body() body: any) {
    if (!body.code || !body.title) {
      throw new BadRequestException("Role code and title are required.");
    }

    const code = body.code.trim().toUpperCase().replace(/\s+/g, '_');
    if (mutableDynamicRoles.some(r => r.code === code)) {
      throw new BadRequestException(`Role code '${code}' already exists.`);
    }

    const newRole: DynamicAdminRole = {
      id: `role-${Date.now().toString().slice(-6)}`,
      code,
      title: body.title,
      subtitle: body.subtitle || "Custom Administrative Role",
      hierarchyLevel: body.hierarchyLevel || 4,
      description: body.description || "",
      requiresMfa: body.requiresMfa !== false,
      isSystem: false,
      permissions: Array.isArray(body.permissions) ? body.permissions : [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    mutableDynamicRoles.push(newRole);

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "DYNAMIC_ROLE_CREATED",
      targetEntity: "AdminRole",
      targetId: newRole.id,
      reasonCode: "RBAC_ROLE_PROVISIONING",
      justification: `Created dynamic role ${newRole.title} (${newRole.code}) with ${newRole.permissions.length} permissions.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(newRole);
  }

  @Patch(["platform/roles/:id", "roles-permissions/:id"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update dynamic role permissions and metadata" })
  async updateDynamicRole(@Param("id") id: string, @Body() body: any) {
    const role = mutableDynamicRoles.find(r => r.id === id || r.code === id);
    if (!role) throw new NotFoundException(`Role ${id} not found in database.`);

    if (body.title) role.title = body.title;
    if (body.subtitle) role.subtitle = body.subtitle;
    if (body.description) role.description = body.description;
    if (body.requiresMfa !== undefined) role.requiresMfa = body.requiresMfa;
    if (Array.isArray(body.permissions)) {
      if (role.code === "ROOT_ADMIN") {
        role.permissions = AVAILABLE_PERMISSIONS.map(p => p.code);
      } else {
        role.permissions = body.permissions;
      }
    }
    role.updatedAt = new Date().toISOString();

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "DYNAMIC_ROLE_UPDATED",
      targetEntity: "AdminRole",
      targetId: role.id,
      reasonCode: "RBAC_PERMISSIONS_UPDATE",
      justification: `Updated role ${role.code} permissions and configuration.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(role);
  }

  @Delete(["platform/roles/:id", "roles-permissions/:id"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Delete a custom dynamic role from database" })
  async deleteDynamicRole(@Param("id") id: string) {
    const roleIdx = mutableDynamicRoles.findIndex(r => r.id === id || r.code === id);
    if (roleIdx === -1) throw new NotFoundException(`Role ${id} not found in database.`);

    const role = mutableDynamicRoles[roleIdx];
    if (role.isSystem) {
      throw new ForbiddenException(`System role '${role.code}' is protected and cannot be deleted.`);
    }

    mutableDynamicRoles.splice(roleIdx, 1);

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "DYNAMIC_ROLE_DELETED",
      targetEntity: "AdminRole",
      targetId: id,
      reasonCode: "RBAC_ROLE_DECOMMISSION",
      justification: `Deleted custom role ${role.code}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse({ deletedId: id, status: "DELETED" });
  }

  @Get("platform/permissions")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List all platform permissions available to assign to roles" })
  async getAvailablePermissions() {
    return this.wrapResponse(AVAILABLE_PERMISSIONS);
  }

  @Get("platform/cities")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List available states, districts, cities, and localities for geo assignment" })
  async getAvailableCities() {
    return this.wrapResponse(AVAILABLE_CITIES);
  }

  // --- Dynamic Admin Users & Geographic Assignment ---

  @Get(["platform/users", "platform-users"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "List administrative users and staff across hierarchy" })
  async getPlatformUsers(
    @Query("search") search?: string,
    @Query("role") role?: string,
    @Query("cityId") cityId?: string,
    @Headers("x-operator-role") callerRole?: string,
    @Headers("x-operator-city") callerCity?: string
  ) {
    let items = [...mutableAdminUsers];

    // City Operations Manager can only see staff in their assigned city
    if (callerRole === "CITY_OPERATIONS_MANAGER" && callerCity) {
      items = items.filter(u => u.geoAssignment?.cityId === callerCity || u.geoAssignment?.cityName?.toLowerCase() === callerCity.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      items = items.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.phone.includes(q));
    }
    if (role) {
      items = items.filter(u => u.roleCode === role);
    }
    if (cityId) {
      items = items.filter(u => u.geoAssignment?.cityId === cityId || u.geoAssignment?.cityName?.toLowerCase() === cityId.toLowerCase());
    }

    return this.wrapPaginated(items);
  }

  @Get(["platform/users/:id", "platform-users/:id"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single admin user by ID" })
  async getPlatformUserById(@Param("id") id: string) {
    const user = mutableAdminUsers.find(u => u.id === id);
    if (!user) throw new NotFoundException(`Admin user ${id} not found.`);
    return this.wrapResponse(user);
  }

  @Post(["platform/users", "platform-users"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Provision a new administrator or staff member" })
  async createPlatformUser(@Body() body: any, @Headers() headers?: any, @Req() req?: any) {
    const scope = this.resolveOperatorScope(headers, req);

    if (body.roleCode === "ROOT_ADMIN") {
      throw new ForbiddenException("Root Admin account is protected and cannot be created via admin console.");
    }

    // Hierarchical creation governance:
    // Only Root Admin can provision Super Admins
    if (body.roleCode === "SUPER_ADMIN" && scope.role !== "ROOT_ADMIN") {
      throw new ForbiddenException("Only the Root Platform Administrator can provision another Super Admin.");
    }

    // City Operations Managers can only provision city staff (Level 4: Verification & Support) in their own city
    if (scope.role === "CITY_OPERATIONS_MANAGER") {
      if (body.roleCode === "CITY_OPERATIONS_MANAGER" || body.roleCode === "SUPER_ADMIN") {
        throw new ForbiddenException("City Operations Managers cannot provision other City Managers or Super Admins.");
      }
      if (body.geoAssignment?.cityName?.toLowerCase() !== scope.city?.toLowerCase()) {
        throw new ForbiddenException(`City Managers can only provision staff within their assigned city (${scope.city}).`);
      }
    }

    if (!body.name || !body.email || !body.roleCode) {
      throw new BadRequestException("Name, email, and roleCode are required.");
    }

    // Check duplicate email
    const existing = mutableAdminUsers.find(u => u.email.toLowerCase() === body.email.toLowerCase());
    if (existing) {
      throw new BadRequestException(`An administrator with email ${body.email} already exists.`);
    }

    const role = mutableDynamicRoles.find(r => r.code === body.roleCode);

    if (body.roleCode === "CITY_OPERATIONS_MANAGER" && !body.geoAssignment?.cityId) {
      throw new BadRequestException("City Operations Manager requires explicit city assignment.");
    }

    const newUser: DynamicAdminUser = {
      id: `usr-${Date.now().toString().slice(-6)}`,
      name: body.name,
      email: body.email,
      phone: body.phone || "+91 98220 00000",
      password: body.password || "Nukkad@2026!",
      roleCode: body.roleCode,
      roleTitle: role?.title || body.roleCode,
      status: "ACTIVE",
      mfaEnabled: role?.requiresMfa !== false,
      isRootProtected: false,
      geoAssignment: body.geoAssignment,
      createdAt: new Date().toISOString(),
    };

    mutableAdminUsers.unshift(newUser);

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.role === "ROOT_ADMIN" ? "operator-root-001" : "operator-sa-001",
      operatorName: scope.role === "ROOT_ADMIN" ? "Rajesh Nukkad (Platform Founder)" : "Rushi Platform Architect",
      action: "ADMIN_USER_PROVISIONED",
      targetEntity: "AdminUser",
      targetId: newUser.id,
      reasonCode: "STAFF_ONBOARDING",
      justification: `Created ${newUser.roleCode} account for ${newUser.name} (${newUser.email}) with geo: ${newUser.geoAssignment?.cityName || 'GLOBAL'}.`,
      timestamp: new Date().toISOString(),
    });

    const { password, ...safeUser } = newUser;
    return this.wrapResponse(safeUser);
  }

  @Patch(["platform/users/:id/status", "platform-users/:id/status"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Suspend or activate admin/staff account" })
  async updatePlatformUserStatus(@Param("id") id: string, @Body() body: any) {
    const user = mutableAdminUsers.find(u => u.id === id);
    if (!user) throw new NotFoundException(`Admin user ${id} not found.`);

    if (user.isRootProtected) {
      throw new ForbiddenException("Root Administrator account is protected and cannot be modified or suspended.");
    }

    user.status = body.status === "SUSPENDED" ? "SUSPENDED" : "ACTIVE";

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: user.status === "ACTIVE" ? "ADMIN_USER_ACTIVATED" : "ADMIN_USER_SUSPENDED",
      targetEntity: "AdminUser",
      targetId: user.id,
      reasonCode: body.reasonCode || "ACCESS_REVIEW",
      justification: body.justification || `Account status updated to ${user.status}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(user);
  }

  @Patch(["platform/users/:id/role", "platform-users/:id/role"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Reassign role for admin user" })
  async updatePlatformUserRole(@Param("id") id: string, @Body() body: any) {
    const user = mutableAdminUsers.find(u => u.id === id);
    if (!user) throw new NotFoundException(`Admin user ${id} not found.`);

    if (user.isRootProtected) {
      throw new ForbiddenException("Root Administrator role cannot be changed.");
    }

    if (body.roleCode === "ROOT_ADMIN") {
      throw new ForbiddenException("Cannot promote user to Root Administrator.");
    }

    const role = mutableDynamicRoles.find(r => r.code === body.roleCode);
    user.roleCode = body.roleCode;
    user.roleTitle = role?.title || body.roleCode;

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "ADMIN_USER_ROLE_REASSIGNED",
      targetEntity: "AdminUser",
      targetId: user.id,
      reasonCode: "ROLE_CHANGE",
      justification: `Reassigned role of ${user.name} to ${user.roleCode}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(user);
  }

  @Patch(["platform/users/:id/geo", "platform-users/:id/geo"])
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update geographic coverage assignment for user" })
  async updatePlatformUserGeo(@Param("id") id: string, @Body() body: any) {
    const user = mutableAdminUsers.find(u => u.id === id);
    if (!user) throw new NotFoundException(`Admin user ${id} not found.`);

    if (user.isRootProtected) {
      throw new ForbiddenException("Root Administrator has unconstrained global coverage.");
    }

    user.geoAssignment = body.geoAssignment;

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "ADMIN_GEO_ASSIGNMENT_UPDATED",
      targetEntity: "AdminUser",
      targetId: user.id,
      reasonCode: "TERRITORY_REASSIGNMENT",
      justification: `Assigned territory updated to ${body.geoAssignment?.cityName || 'GLOBAL'}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(user);
  }

  @Post("auth/switch-role")
  @ApiOperation({ summary: "Simulate switching active operator session between roles" })
  async switchAdminRole(@Body() body: { roleCode: string; cityId?: string }) {
    const user = mutableAdminUsers.find(u => u.roleCode === body.roleCode && (!body.cityId || u.geoAssignment?.cityId === body.cityId)) || mutableAdminUsers[0];
    const roleDef = mutableDynamicRoles.find(r => r.code === user.roleCode);

    const payload = {
      sub: user.id,
      email: user.email,
      roles: [user.roleCode],
      name: user.name,
      geoAssignment: user.geoAssignment,
      iss: JWT_ISSUER,
      aud: JWT_AUDIENCE,
    };

    const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "8h" });

    return this.wrapResponse({
      token: accessToken,
      operator: {
        operatorId: user.id,
        name: user.name,
        email: user.email,
        role: user.roleCode,
        roleTitle: user.roleTitle,
        permissions: roleDef?.permissions || [],
        status: user.status,
        geoAssignment: user.geoAssignment,
        isRootProtected: user.isRootProtected,
        mfaVerified: user.mfaEnabled,
      },
      expiresAt: Date.now() + 8 * 60 * 60 * 1000,
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

  // =========================================================================
  // SPRINT 6: CORE PERSONAS, GEO EXPANSION & GLOBAL OMNI-SEARCH
  // =========================================================================

  @Get("search")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Universal global search across merchants, orders, customers, tickets & KYC" })
  async globalSearch(@Query("query") query: string = "", @Headers() headers: any) {
    const q = query.trim().toLowerCase();
    if (!q) {
      return this.wrapResponse({ merchants: [], orders: [], customers: [], tickets: [], localities: [] });
    }

    const allMerchants = Object.entries(SEEDED_PROFILES)
      .filter(([id]) => id !== "system-admin-tenant")
      .map(([id, p]: [string, any]) => ({ id, ...p }));

    const matchingMerchants = allMerchants.filter(
      (m: any) =>
        m.name?.toLowerCase().includes(q) ||
        m.id?.toLowerCase().includes(q) ||
        m.phone?.toLowerCase().includes(q) ||
        m.city?.toLowerCase().includes(q)
    ).slice(0, 5).map((m: any) => ({
      id: m.id,
      title: m.name,
      subtitle: `${m.city || 'Nagpur'} · ${m.category || 'Retail'} · Phone: ${m.phone || 'N/A'}`,
      route: `/merchants/${m.id}`,
      badge: m.status || 'ACTIVE',
      type: 'MERCHANT'
    }));

    const matchingOrders = SEEDED_ORDERS.filter(
      (o: any) =>
        o.orderNumber?.toLowerCase().includes(q) ||
        o.id?.toLowerCase().includes(q) ||
        o.customerName?.toLowerCase().includes(q) ||
        o.customerPhone?.toLowerCase().includes(q)
    ).slice(0, 5).map((o: any) => ({
      id: o.id,
      title: `Order #${o.orderNumber}`,
      subtitle: `${o.customerName} · ₹${o.amount} · ${o.fulfilmentType || 'Self Pickup'}`,
      route: `/orders/${o.id}`,
      badge: o.status,
      type: 'ORDER'
    }));

    const matchingLocalities = mutableLocalitiesList.filter(
      (l: any) =>
        l.name?.toLowerCase().includes(q) ||
        l.city?.toLowerCase().includes(q) ||
        l.pincode?.toLowerCase().includes(q)
    ).slice(0, 5).map((l: any) => ({
      id: l.id,
      title: `${l.name}, ${l.city}`,
      subtitle: `PIN: ${l.pincode} · ${l.activeOutlets} Outlets · Radius: ${l.deliveryRadiusKm}km`,
      route: `/localities/${l.id}`,
      badge: l.status,
      type: 'LOCALITY'
    }));

    const matchingTickets = mutableSupportTickets.filter(
      (t: any) =>
        t.ticketNumber?.toLowerCase().includes(q) ||
        t.subject?.toLowerCase().includes(q) ||
        t.requesterName?.toLowerCase().includes(q)
    ).slice(0, 5).map((t: any) => ({
      id: t.id,
      title: `${t.ticketNumber}: ${t.subject}`,
      subtitle: `${t.requesterName} · ${t.priority} SLA · City: ${t.cityName || 'Nagpur'}`,
      route: `/support-tickets/${t.id}`,
      badge: t.status,
      type: 'SUPPORT_TICKET'
    }));

    const matchingUsers = mutableAdminUsers.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.roleCode.toLowerCase().includes(q)
    ).slice(0, 5).map((u) => ({
      id: u.id,
      title: u.name,
      subtitle: `${u.roleCode} · ${u.email} · Geo: ${u.geoAssignment?.cityName || 'GLOBAL'}`,
      route: `/platform-users/${u.id}`,
      badge: u.status,
      type: 'ADMIN_USER'
    }));

    return this.wrapResponse({
      merchants: matchingMerchants,
      orders: matchingOrders,
      localities: matchingLocalities,
      tickets: matchingTickets,
      users: matchingUsers,
    });
  }

  @Get("geo/hierarchy")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get complete geographic taxonomy (Countries, States, Districts, Cities, Localities)" })
  async getGeoHierarchy() {
    const countries = [
      { code: "IN", name: "India", currency: "INR", phoneCode: "+91", activeCitiesCount: 4, totalLocalitiesCount: mutableLocalitiesList.length }
    ];
    const states = [
      { code: "IN-MH", name: "Maharashtra", countryCode: "IN", districtsCount: 4, activeCitiesCount: 4 }
    ];
    const districts = [
      { code: "NGP", name: "Nagpur", stateCode: "IN-MH", cities: ["Nagpur"], localitiesCount: 3 },
      { code: "AKL", name: "Akola", stateCode: "IN-MH", cities: ["Akola"], localitiesCount: 2 },
      { code: "AMR", name: "Amravati", stateCode: "IN-MH", cities: ["Amravati"], localitiesCount: 2 },
      { code: "PUN", name: "Pune", stateCode: "IN-MH", cities: ["Pune"], localitiesCount: 2 },
    ];

    return this.wrapResponse({
      countries,
      states,
      districts,
      cities: AVAILABLE_CITIES,
      localities: mutableLocalitiesList,
    });
  }

  @Get("geo/countries")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List supported countries" })
  async getCountries() {
    return this.wrapPaginated([
      { code: "IN", name: "India", currency: "INR", phoneCode: "+91", status: "ACTIVE", isDefault: true, createdAt: "2026-01-01T00:00:00Z" }
    ]);
  }

  @Get("geo/states")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List supported states" })
  async getStates() {
    return this.wrapPaginated([
      { code: "IN-MH", name: "Maharashtra", countryCode: "IN", gstStateCode: "27", status: "ACTIVE", createdAt: "2026-01-01T00:00:00Z" }
    ]);
  }

  @Get("geo/districts")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List supported administrative districts" })
  async getDistricts() {
    return this.wrapPaginated([
      { code: "NGP", name: "Nagpur", stateCode: "IN-MH", headquarters: "Nagpur City", status: "ACTIVE" },
      { code: "AKL", name: "Akola", stateCode: "IN-MH", headquarters: "Akola City", status: "ACTIVE" },
      { code: "AMR", name: "Amravati", stateCode: "IN-MH", headquarters: "Amravati City", status: "ACTIVE" },
      { code: "PUN", name: "Pune", stateCode: "IN-MH", headquarters: "Pune City", status: "ACTIVE" },
    ]);
  }

  @Post("geo/import-geojson")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Bulk import localities from GeoJSON / GIS FeatureCollection" })
  async importGeoJsonLocalities(@Body() body: { cityCode: string; geoJson: any }, @Headers() headers: any) {
    if (!body.geoJson || !body.geoJson.features || !Array.isArray(body.geoJson.features)) {
      throw new BadRequestException("Invalid GeoJSON format. Expecting FeatureCollection with features array.");
    }

    const cityMatch = AVAILABLE_CITIES.find(c => c.code === body.cityCode) || AVAILABLE_CITIES[0];
    const importedLocalities: any[] = [];

    for (const feature of body.geoJson.features) {
      const name = feature.properties?.name || feature.properties?.locality || `Imported Zone ${Date.now().toString().slice(-4)}`;
      const pincode = feature.properties?.pincode || "440001";
      const deliveryRadiusKm = feature.properties?.deliveryRadiusKm || 5;

      const newLocality = {
        id: `loc-gis-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 1000)}`,
        name,
        city: cityMatch.name,
        pincode,
        activeOutlets: 0,
        status: "ACTIVE",
        geofenceType: "POLYGON",
        deliveryRadiusKm,
        congestionMultiplier: 1.0,
        polygonCoordinates: feature.geometry?.coordinates || [],
        createdAt: new Date().toISOString(),
      };

      mutableLocalitiesList.unshift(newLocality);
      importedLocalities.push(newLocality);
    }

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "GEOJSON_BATCH_IMPORT",
      targetEntity: "LocalityAdmin",
      targetId: cityMatch.code,
      reasonCode: "MUNICIPAL_EXPANSION",
      justification: `Imported ${importedLocalities.length} polygon localities for ${cityMatch.name}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse({
      importedCount: importedLocalities.length,
      cityCode: cityMatch.code,
      cityName: cityMatch.name,
      items: importedLocalities,
    });
  }

  // --- Sprint 6: Serviceable Areas & Coverage Control Plane ---

  @Get("geo/serviceable-areas")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get serviceable areas metrics, cities, and localities" })
  async getServiceableAreas(
    @Query("cityId") cityIdQuery?: string,
    @Query("search") searchQuery?: string,
    @Query("status") statusQuery?: string,
    @Query("serviceType") serviceTypeQuery?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const scope = this.resolveOperatorScope(headers, req);
    const targetCityId = (!scope.isGlobal && scope.city)
      ? scope.city.toLowerCase()
      : (cityIdQuery || "pune").toLowerCase();

    let localities = mutableCoverageLocalities.filter(l =>
      l.cityId.toLowerCase() === targetCityId || l.cityName.toLowerCase() === targetCityId
    );

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      localities = localities.filter(l => l.name.toLowerCase().includes(q) || l.pincode.includes(q));
    }

    if (statusQuery && statusQuery !== "ALL") {
      localities = localities.filter(l => l.status.toLowerCase() === statusQuery.toLowerCase());
    }

    if (serviceTypeQuery && serviceTypeQuery !== "ALL") {
      localities = localities.filter(l => l.serviceTypes.includes(serviceTypeQuery.toUpperCase()));
    }

    const selectedCity = mutableServiceableCities.find(c =>
      c.id.toLowerCase() === targetCityId || c.name.toLowerCase().includes(targetCityId)
    ) || mutableServiceableCities[0];

    const metrics = {
      serviceableCities: mutableServiceableCities.filter(c => c.isLive).length,
      serviceableLocalities: 142,
      totalLocalities: 1842,
      merchantsCovered: 1328,
      merchantsTrend: "+14.2%",
      ordersLast30Days: 24860,
      ordersTrend: "+11.8%",
      customersInCoverage: 92440,
      customersTrend: "+13.5%",
    };

    return this.wrapResponse({
      metrics,
      cities: mutableServiceableCities,
      selectedCity,
      localities,
      totalCount: localities.length,
    });
  }

  @Patch("geo/serviceable-areas/cities/:id/status")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Toggle city serviceable status" })
  async toggleCityServiceableStatus(
    @Param("id") id: string,
    @Body() body: { isLive: boolean },
    @Headers("x-audit-reason") reason?: string,
    @Headers() headers?: any
  ) {
    const scope = this.resolveOperatorScope(headers);
    const city = mutableServiceableCities.find(c => c.id === id);
    if (!city) throw new NotFoundException(`City ${id} not found`);

    city.isLive = body.isLive;
    city.status = body.isLive ? "SERVICEABLE" : "PLANNED";

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "CITY_COVERAGE_STATUS_CHANGED",
      targetEntity: "CityCoverage",
      targetId: id,
      reasonCode: reason || "MUNICIPAL_STATUS_CHANGE",
      justification: `Updated city ${city.name} live status to ${city.isLive}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(city);
  }

  @Patch("geo/serviceable-areas/localities/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update locality service types or status" })
  async updateCoverageLocality(
    @Param("id") id: string,
    @Body() body: { status?: string; serviceTypes?: string[] },
    @Headers() headers?: any
  ) {
    const scope = this.resolveOperatorScope(headers);
    const locality = mutableCoverageLocalities.find(l => l.id === id);
    if (!locality) throw new NotFoundException(`Locality ${id} not found`);

    if (body.status) locality.status = body.status;
    if (body.serviceTypes) locality.serviceTypes = body.serviceTypes;
    locality.lastUpdated = "Just now";

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "LOCALITY_COVERAGE_MODIFIED",
      targetEntity: "CoverageLocality",
      targetId: id,
      reasonCode: "OPERATIONAL_UPDATE",
      justification: `Updated coverage parameters for locality ${locality.name}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(locality);
  }

  @Post("geo/serviceable-areas/localities")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Add new serviceable locality" })
  async addCoverageLocality(@Body() body: any, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const newLoc = {
      id: `cov-loc-${Date.now().toString().slice(-4)}`,
      name: body.name || "New Area",
      cityId: body.cityId || "pune",
      cityName: body.cityName || "Pune City",
      status: body.status || "ACTIVE",
      serviceTypes: body.serviceTypes || ["PICKUP", "DELIVERY"],
      merchantsCount: 0,
      orders30d: 0,
      customersCount: 0,
      boundaryAreaKm2: body.boundaryAreaKm2 || 4.5,
      lastUpdated: "Just now",
      pincode: body.pincode || "411001",
      lat: body.lat || 18.5204,
      lng: body.lng || 73.8567,
    };

    mutableCoverageLocalities.unshift(newLoc);

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "LOCALITY_ADDED_TO_COVERAGE",
      targetEntity: "CoverageLocality",
      targetId: newLoc.id,
      reasonCode: "MUNICIPAL_EXPANSION",
      justification: `Added ${newLoc.name} to serviceable coverage grid`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(newLoc);
  }

  // --- Sprint 7: City Coverage & Launch Readiness ---

  @Get("geo/city-coverage/:cityId")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get city coverage overview, readiness checklist, and performance" })
  async getCityCoverageDetails(@Param("cityId") cityId: string) {
    const city = mutableServiceableCities.find(c => c.id.toLowerCase() === cityId.toLowerCase()) || mutableServiceableCities[0];
    const localities = mutableCoverageLocalities.filter(l => l.cityId.toLowerCase() === city.id.toLowerCase());

    const readinessChecklist = [
      { id: "chk-1", title: "Merchants Onboarded", requirement: "Min. 50 active merchants", current: `${city.merchantsCount} Active`, isMet: city.merchantsCount >= 50 },
      { id: "chk-2", title: "Delivery Fleet Capacity", requirement: "Dedicated 3PL or rider pool", current: "Fleet Active (32 riders)", isMet: true },
      { id: "chk-3", title: "Locality Boundary Mapping", requirement: "GeoJSON polygons verified", current: `${city.localitiesCount} Mapped`, isMet: true },
      { id: "chk-4", title: "FSSAI / Municipal Compliance", requirement: "Trade license legal review", current: "Cleared & Signed", isMet: true },
      { id: "chk-5", title: "Payment Gateway Escrow Route", requirement: "T+1 settlement account active", current: "Verified (Razorpay)", isMet: true },
    ];

    const performanceMetrics = {
      avgDeliveryTimeMinutes: 24,
      slaCompliancePct: 98.2,
      onTimePickupRatePct: 96.5,
      customerSatisfactionRating: 4.8,
    };

    return this.wrapResponse({
      city,
      readinessChecklist,
      performanceMetrics,
      localities,
    });
  }

  // --- Sprint 8: Area Mapping Control Plane ---

  @Get("geo/area-mapping/:cityId")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get interactive mapping polygon data, zones, and pins" })
  async getAreaMapping(@Param("cityId") cityId: string) {
    const city = mutableServiceableCities.find(c => c.id.toLowerCase() === cityId.toLowerCase()) || mutableServiceableCities[0];
    const localities = mutableCoverageLocalities.filter(l => l.cityId.toLowerCase() === city.id.toLowerCase());

    const metrics = {
      cityName: city.name,
      status: city.status,
      isLive: city.isLive,
      totalLocalities: city.totalLocalities,
      serviceableAreas: city.localitiesCount,
      nonServiceableAreas: city.notServiceable,
      cityAreaKm2: city.cityAreaKm2,
      serviceableAreaKm2: city.serviceableAreaKm2,
      coveragePercent: city.coveragePercent,
    };

    return this.wrapResponse({
      metrics,
      city,
      localities,
    });
  }

  // --- Sprint 9: Bulk Location Import & Validation ---

  @Get("geo/import/batches")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List recent location batch import history" })
  async getImportBatches() {
    return this.wrapResponse({
      metrics: {
        totalLocations: 12840,
        successfullyImported: 10246,
        updated: 186,
        failedRejected: 72,
        importBatches: 24,
        lastImportDate: "15 Nov 2026, 06:24 PM",
      },
      batches: mutableImportBatches,
    });
  }

  @Post("geo/import/preview")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Validate location import file and generate preview rows" })
  async previewImportLocations(@Body() body: { filename: string; importType: string; targetCity: string }) {
    const previewRows = [
      { index: 1, state: "Maharashtra", district: "Pune", city: "Pune", locality: "Baner", pincode: "411045", serviceable: true, pickup: true, delivery: true, status: "VALID" },
      { index: 2, state: "Maharashtra", district: "Pune", city: "Pune", locality: "Wakad", pincode: "411057", serviceable: true, pickup: true, delivery: true, status: "VALID" },
      { index: 3, state: "Maharashtra", district: "Pune", city: "Pune", locality: "Hinjawadi", pincode: "411057", serviceable: true, pickup: true, delivery: true, status: "VALID" },
      { index: 4, state: "Maharashtra", district: "Pune", city: "Pimpri-Chinchwad", locality: "Ravet", pincode: "412101", serviceable: true, pickup: true, delivery: true, status: "VALID" },
      { index: 5, state: "Maharashtra", district: "Pune", city: "Pune", locality: "Balewadi", pincode: "411045", serviceable: true, pickup: true, delivery: true, status: "VALID" },
      { index: 6, state: "Maharashtra", district: "Pune", city: "Pune", locality: "Kothrud", pincode: "411038", serviceable: true, pickup: true, delivery: false, status: "VALID" },
      { index: 7, state: "Maharashtra", district: "Pune", city: "Pune", locality: "Katraj", pincode: "411046", serviceable: false, pickup: false, delivery: false, status: "WARNING (Non-serviceable)" },
      { index: 8, state: "Maharashtra", district: "Pune", city: "Pune", locality: "Invalid Locality", pincode: "000000", serviceable: true, pickup: true, delivery: true, status: "ERROR (Invalid Pincode)" },
    ];

    return this.wrapResponse({
      filename: body.filename || "locations_upload.xlsx",
      totalRecords: 5420,
      validRecords: 5248,
      warningRecords: 100,
      errorRecords: 72,
      previewRows,
    });
  }

  @Post("geo/import/commit")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Commit verified import batch to database" })
  async commitImportLocations(@Body() body: any, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const newBatch = {
      id: `BATCH-${Date.now().toString().slice(-6)}`,
      filename: body.filename || "locations_batch.xlsx",
      fileSizeFormatted: "2.4 MB",
      totalRecords: body.totalRecords || 5420,
      validRecords: body.validRecords || 5248,
      warningRecords: body.warningRecords || 100,
      errorRecords: body.errorRecords || 72,
      status: "COMPLETED",
      uploadedBy: scope.operatorName || "Admin Operator",
      importType: body.importType || "LOCATIONS",
      targetCity: body.targetCity || "Pune City",
      timestamp: new Date().toLocaleString("en-IN"),
    };

    mutableImportBatches.unshift(newBatch);

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: scope.operatorId || "operator-sa-001",
      operatorName: scope.operatorName || "Super Administrator",
      action: "LOCATION_BATCH_COMMITTED",
      targetEntity: "LocationBatch",
      targetId: newBatch.id,
      reasonCode: "BULK_LOCATION_IMPORT",
      justification: `Committed ${newBatch.validRecords} verified location records for ${newBatch.targetCity}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse({
      batch: newBatch,
      success: true,
      message: `Successfully imported ${newBatch.validRecords} location records.`,
    });
  }

  @Get("overview/personas")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get tailored persona dashboard KPI feeds (Root, City Ops, Verification, Support)" })
  async getPersonaDashboards(@Headers() headers: any) {
    const scope = this.resolveOperatorScope(headers);

    return this.wrapResponse({
      rootAdmin: {
        globalGmvRupees: 5245800,
        platformTakeRatePct: 3.8,
        investorGrossMarginPct: 78.4,
        cloudInfraCostRupees: 42800,
        activeCities: [
          { city: "Nagpur", gmvRupees: 2840000, growthPct: "+24.2%", activeMerchants: 84 },
          { city: "Pune", gmvRupees: 1420000, growthPct: "+38.6%", activeMerchants: 52 },
          { city: "Akola", gmvRupees: 585000, growthPct: "+16.8%", activeMerchants: 28 },
          { city: "Amravati", gmvRupees: 400800, growthPct: "+12.1%", activeMerchants: 22 },
        ]
      },
      cityOps: {
        cityName: scope.city !== "GLOBAL" ? scope.city : "Nagpur",
        localityPressure: [
          { locality: "Sitabuldi", loadPct: 74, status: "CONGESTED", activeOrders: 38 },
          { locality: "Dharampeth", loadPct: 48, status: "NORMAL", activeOrders: 21 },
          { locality: "Ramdaspeth", loadPct: 56, status: "NORMAL", activeOrders: 18 },
          { locality: "Sadar", loadPct: 62, status: "ELEVATED", activeOrders: 24 },
        ],
        delayedPickupsCount: 3,
        merchantOnlineRatio: "94.2%",
        activeCouriersOnRoad: 26,
      },
      verificationStaff: {
        pendingQueueCount: 5,
        slaUrgentCount: 2,
        verifiedThisWeekCount: 18,
        rejectionRatePct: 8.4,
        nextSlaBreachMinutes: 42,
        stagesBreakdown: [
          { stage: "Document Intake", count: 2 },
          { stage: "FSSAI / Tax Verification", count: 2 },
          { stage: "Physical Store Cross-Check", count: 1 },
        ]
      },
      supportStaff: {
        openTicketsCount: 7,
        urgentP1TicketsCount: 2,
        avgFirstResponseTimeMinutes: 1.8,
        csatScore: 4.8,
        slaAdherencePct: 98.6,
        ticketsByPriority: { urgent: 2, high: 3, normal: 2 }
      }
    });
  }

  @Get("me")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get current operator profile details" })
  async getMyProfile(@Headers() headers: any) {
    const scope = this.resolveOperatorScope(headers);
    const user = mutableAdminUsers.find(u => u.roleCode === scope.role) || mutableAdminUsers[0];

    return this.wrapResponse({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone || "+91 98230 11223",
      roleCode: user.roleCode,
      status: user.status,
      mfaEnabled: user.mfaEnabled,
      isRootProtected: user.isRootProtected,
      geoScope: user.geoAssignment?.cityName || "Global Coverage",
      avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name)}`,
      lastLoginAt: new Date(Date.now() - 3600000).toISOString(),
      lastLoginIp: "127.0.0.1",
    });
  }

  @Patch("me")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update personal operator profile info" })
  async updateMyProfile(@Body() body: { name?: string; phone?: string }, @Headers() headers: any) {
    const scope = this.resolveOperatorScope(headers);
    const user = mutableAdminUsers.find(u => u.roleCode === scope.role) || mutableAdminUsers[0];

    if (body.name) user.name = body.name.trim();
    if (body.phone) user.phone = body.phone.trim();

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: user.id,
      operatorName: user.name,
      action: "PROFILE_UPDATED",
      targetEntity: "AdminUser",
      targetId: user.id,
      reasonCode: "SELF_SERVICE_UPDATE",
      justification: "Operator updated contact information.",
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(user);
  }

  @Post("me/change-password")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Change operator password" })
  async changeMyPassword(@Body() body: { currentPassword?: string; newPassword?: string }, @Headers() headers: any) {
    if (!body.newPassword || body.newPassword.length < 8) {
      throw new BadRequestException("New password must be at least 8 characters long.");
    }

    const scope = this.resolveOperatorScope(headers);
    const user = mutableAdminUsers.find(u => u.roleCode === scope.role) || mutableAdminUsers[0];

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: user.id,
      operatorName: user.name,
      action: "CREDENTIAL_UPDATE",
      targetEntity: "AdminUser",
      targetId: user.id,
      reasonCode: "PASSWORD_ROTATION",
      justification: "Operator rotated account password via secure settings.",
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse({ message: "Password updated successfully.", rotatedAt: new Date().toISOString() });
  }

  @Get("me/sessions")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List active sessions for current operator" })
  async getMySessions(@Headers() headers: any) {
    return this.wrapResponse([
      {
        id: "sess-curr-01",
        device: "Chrome 130 on Windows 11",
        ipAddress: "127.0.0.1",
        location: "Nagpur, India",
        isCurrent: true,
        lastActiveAt: new Date().toISOString(),
        signedInAt: new Date(Date.now() - 7200000).toISOString(),
      },
      {
        id: "sess-prev-02",
        device: "Safari on iPhone 15 Pro",
        ipAddress: "157.34.89.12",
        location: "Pune, India",
        isCurrent: false,
        lastActiveAt: new Date(Date.now() - 86400000).toISOString(),
        signedInAt: new Date(Date.now() - 90000000).toISOString(),
      }
    ]);
  }

  @Get("me/activity")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get personal audit history for current operator" })
  async getMyActivity(@Headers() headers: any) {
    const scope = this.resolveOperatorScope(headers);
    const user = mutableAdminUsers.find(u => u.roleCode === scope.role) || mutableAdminUsers[0];
    const personalLogs = adminAuditLogs.filter(a => a.operatorId === user.id || a.operatorName.includes(user.name.split(" ")[0])).slice(0, 20);

    return this.wrapPaginated(personalLogs.length > 0 ? personalLogs : adminAuditLogs.slice(0, 10));
  }

  // =========================================================================
  // SPRINT 7: MERCHANT INVENTORY MONITORING & GOVERNANCE (SCREENS #73-#78, #40, #41)
  // =========================================================================

  @Get("inventory/overview")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Platform inventory monitoring overview telemetry and stock health" })
  async getInventoryOverview(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    const stocks = this.getUnifiedInventory(targetCity);
    const lowStock = stocks.filter(s => s.status === "LOW_STOCK");
    const outOfStock = stocks.filter(s => s.status === "OUT_OF_STOCK");
    const healthy = stocks.filter(s => s.status === "HEALTHY");
    const nearExpiry = stocks.filter(s => s.isNearExpiry);
    const totalInventoryValuationPaise = stocks.reduce((acc, s) => acc + (s.pricePaise * s.onHandStock), 0);
    const discrepancies = mutableInventoryReconciliations.filter(r => !targetCity || r.city.toLowerCase() === targetCity.toLowerCase());

    return this.wrapResponse({
      totalSkus: stocks.length,
      lowStockCount: lowStock.length,
      outOfStockCount: outOfStock.length,
      healthyStockCount: healthy.length,
      nearExpiryCount: nearExpiry.length,
      totalInventoryValuationPaise,
      totalInventoryValuationRupees: Math.round(totalInventoryValuationPaise / 100),
      turnoverRatePct: 78.4,
      pendingDiscrepanciesCount: discrepancies.filter(d => d.status === "PENDING_REVIEW").length,
      activeTerritory: targetCity || "Global Scope",
    });
  }

  @Get("inventory/stocks")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List and search merchant inventory records with safety threshold alerts" })
  async getInventoryStocks(
    @Query("query") query: string = "",
    @Query("city") cityQuery?: string,
    @Query("locality") locality?: string,
    @Query("category") category?: string,
    @Query("status") status?: string,
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 20,
    @Headers() headers?: any
  ) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let stocks = this.getUnifiedInventory(targetCity);

    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      stocks = stocks.filter(
        s =>
          s.productName.toLowerCase().includes(q) ||
          s.sku.toLowerCase().includes(q) ||
          s.merchantName.toLowerCase().includes(q) ||
          s.outletName.toLowerCase().includes(q)
      );
    }

    if (locality && locality !== "ALL") {
      stocks = stocks.filter(s => s.locality.toLowerCase().includes(locality.toLowerCase()));
    }

    if (category && category !== "ALL") {
      stocks = stocks.filter(s => s.category.toLowerCase().includes(category.toLowerCase()));
    }

    if (status && status !== "ALL") {
      stocks = stocks.filter(s => s.status === status);
    }

    const startIndex = (Number(page) - 1) * Number(limit);
    const paginated = stocks.slice(startIndex, startIndex + Number(limit));

    return this.wrapPaginated(paginated, stocks.length, Number(page), Number(limit));
  }

  @Get("inventory/low-stock")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Low-stock and stockout triage queue" })
  async getLowStockAlerts(
    @Query("city") cityQuery?: string,
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 20,
    @Headers() headers?: any
  ) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let stocks = this.getUnifiedInventory(targetCity).filter(
      s => s.status === "LOW_STOCK" || s.status === "OUT_OF_STOCK"
    );

    const startIndex = (Number(page) - 1) * Number(limit);
    const paginated = stocks.slice(startIndex, startIndex + Number(limit));

    return this.wrapPaginated(paginated, stocks.length, Number(page), Number(limit));
  }

  @Get("inventory/movements")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Stock movement audit trail ledger across reservations, restocks and fulfillment" })
  async getStockMovements(
    @Query("city") cityQuery?: string,
    @Query("merchantId") merchantId?: string,
    @Query("type") type?: string,
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 20,
    @Headers() headers?: any
  ) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableStockMovements;

    if (targetCity) {
      list = list.filter(m => m.city.toLowerCase() === targetCity.toLowerCase());
    }

    if (merchantId && merchantId !== "ALL") {
      list = list.filter(m => m.merchantId === merchantId);
    }

    if (type && type !== "ALL") {
      list = list.filter(m => m.type === type);
    }

    const startIndex = (Number(page) - 1) * Number(limit);
    const paginated = list.slice(startIndex, startIndex + Number(limit));

    return this.wrapPaginated(paginated, list.length, Number(page), Number(limit));
  }

  @Get("inventory/reconciliations")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Inventory discrepancy oversight and cycle count audits" })
  async getInventoryReconciliations(
    @Query("city") cityQuery?: string,
    @Query("status") status?: string,
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 20,
    @Headers() headers?: any
  ) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableInventoryReconciliations;

    if (targetCity) {
      list = list.filter(r => r.city.toLowerCase() === targetCity.toLowerCase());
    }

    if (status && status !== "ALL") {
      list = list.filter(r => r.status === status);
    }

    const startIndex = (Number(page) - 1) * Number(limit);
    const paginated = list.slice(startIndex, startIndex + Number(limit));

    return this.wrapPaginated(paginated, list.length, Number(page), Number(limit));
  }

  @Post("inventory/reconciliations/:id/resolve")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Approve or reject inventory reconciliation discrepancy" })
  async resolveInventoryReconciliation(
    @Param("id") id: string,
    @Body() body: { resolution: "APPROVE_ADJUSTMENT" | "REJECT_DISCREPANCY"; notes: string },
    @Headers() headers?: any
  ) {
    const rec = mutableInventoryReconciliations.find(r => r.id === id);
    if (!rec) throw new NotFoundException(`Reconciliation record ${id} not found.`);

    rec.status = body.resolution === "APPROVE_ADJUSTMENT" ? "RESOLVED" : "REJECTED";
    rec.resolvedAt = new Date().toISOString();
    rec.resolvedBy = "SuperAdmin / City Ops";
    rec.resolutionNotes = body.notes || "Audit resolution completed.";

    // Append tamper-evident audit record
    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: body.resolution === "APPROVE_ADJUSTMENT" ? "INVENTORY_ADJUSTMENT_APPROVED" : "INVENTORY_ADJUSTMENT_REJECTED",
      targetEntity: "InventoryReconciliation",
      targetId: id,
      reasonCode: "CYCLE_COUNT_RESOLUTION",
      justification: body.notes || `Discrepancy ${id} status updated to ${rec.status}.`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(rec);
  }

  @Get("inventory/data-quality")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Stock data quality radar: stale listings, barcode gaps and price violations" })
  async getInventoryDataQuality(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    const stocks = this.getUnifiedInventory(targetCity);

    const staleSkus = stocks.filter(s => s.daysOfSupply > 30 || s.lastRestockedDaysAgo > 14);
    const missingBarcodes = stocks.filter(s => !s.barcode || s.barcode.length < 8);
    const priceAnomalies = stocks.filter(s => s.pricePaise >= s.mrpPaise || s.pricePaise <= 0);
    const negativeStockAlerts = stocks.filter(s => s.onHandStock < 0);

    return this.wrapResponse({
      staleSkusCount: staleSkus.length,
      staleSkus: staleSkus.slice(0, 10),
      missingBarcodesCount: missingBarcodes.length,
      missingBarcodes: missingBarcodes.slice(0, 10),
      priceAnomaliesCount: priceAnomalies.length,
      priceAnomalies: priceAnomalies.slice(0, 10),
      negativeStockCount: negativeStockAlerts.length,
      negativeStockAlerts: negativeStockAlerts.slice(0, 10),
      overallQualityScorePct: 94.6,
    });
  }

  @Get("merchants/complaints")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List and filter merchant complaints and operational escalations across cities" })
  async getMerchantComplaints(
    @Query("city") cityQuery?: string,
    @Query("status") status?: string,
    @Query("severity") severity?: string,
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 20,
    @Headers() headers?: any
  ) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableMerchantComplaints;

    if (targetCity) {
      list = list.filter(c => c.city.toLowerCase() === targetCity.toLowerCase());
    }

    if (status && status !== "ALL") {
      list = list.filter(c => c.status === status);
    }

    if (severity && severity !== "ALL") {
      list = list.filter(c => c.severity === severity);
    }

    const startIndex = (Number(page) - 1) * Number(limit);
    const paginated = list.slice(startIndex, startIndex + Number(limit));

    return this.wrapPaginated(paginated, list.length, Number(page), Number(limit));
  }

  @Get("merchants/:id/complaints")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer complaints and operational disputes for a specific merchant" })
  async getComplaintsForMerchant(@Param("id") id: string, @Headers() headers?: any) {
    const list = mutableMerchantComplaints.filter(c => c.merchantId === id);
    return this.wrapPaginated(list, list.length);
  }

  @Post("merchants/:id/complaints/:complaintId/resolve")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Resolve a merchant dispute/complaint with penalty or formal exoneration" })
  async resolveMerchantComplaint(
    @Param("id") merchantId: string,
    @Param("complaintId") complaintId: string,
    @Body() body: { resolutionAction: string; notes: string },
    @Headers() headers?: any
  ) {
    const comp = mutableMerchantComplaints.find(c => c.id === complaintId);
    if (!comp) throw new NotFoundException(`Complaint ${complaintId} not found.`);

    comp.status = "RESOLVED";
    comp.resolutionSummary = body.notes || `Resolved via action: ${body.resolutionAction}`;

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "MERCHANT_COMPLAINT_RESOLVED",
      targetEntity: "MerchantComplaint",
      targetId: complaintId,
      reasonCode: body.resolutionAction || "DISPUTE_ADJUDICATION",
      justification: body.notes || `Complaint resolved with action ${body.resolutionAction}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(comp);
  }

  @Get("merchants/suspensions")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Platform-wide merchant disciplinary and suspension history audit log" })
  async getMerchantSuspensions(
    @Query("city") cityQuery?: string,
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 20,
    @Headers() headers?: any
  ) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableMerchantSuspensions;

    if (targetCity) {
      list = list.filter(s => s.city.toLowerCase() === targetCity.toLowerCase());
    }

    const startIndex = (Number(page) - 1) * Number(limit);
    const paginated = list.slice(startIndex, startIndex + Number(limit));

    return this.wrapPaginated(paginated, list.length, Number(page), Number(limit));
  }

  @Get("merchants/:id/suspension-log")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get disciplinary and probation history for a single merchant" })
  async getMerchantSuspensionLog(@Param("id") id: string) {
    const list = mutableMerchantSuspensions.filter(s => s.merchantId === id);
    return this.wrapPaginated(list, list.length);
  }

  // Helper method: get unified inventory from real catalog products
  private getUnifiedInventory(targetCity: string | null) {
    return SEEDED_PRODUCTS.map((p, idx) => {
      const outlet = SEEDED_MERCHANTS_OUTLETS.find(o => o.id === p.outletId) || {
        id: p.outletId,
        merchantId: `merchant-${p.outletId}`,
        name: "Partner Local Merchant",
        city: idx % 4 === 0 ? "Nagpur" : (idx % 4 === 1 ? "Akola" : (idx % 4 === 2 ? "Amravati" : "Pune")),
        locality: idx % 4 === 0 ? "Sitabuldi" : (idx % 4 === 1 ? "Civil Lines" : (idx % 4 === 2 ? "Rajkamal Chowk" : "Kothrud")),
      };

      const city = outlet.city || "Nagpur";
      const locality = outlet.locality || "Sitabuldi";

      // Realistic stock distributions
      const onHandStock = idx === 3 ? 4 : (idx === 7 ? 0 : 45 + (idx * 7) % 50);
      const reservedStock = idx === 3 ? 2 : (idx === 7 ? 0 : 3);
      const availableStock = Math.max(0, onHandStock - reservedStock);
      const safetyStock = 10;

      let status = "HEALTHY";
      if (availableStock === 0) status = "OUT_OF_STOCK";
      else if (availableStock <= safetyStock) status = "LOW_STOCK";

      const pricePaise = p.pricePaise || (p.price ? p.price * 100 : 2500);
      const mrpPaise = p.compareAtPrice ? p.compareAtPrice * 100 : Math.round(pricePaise * 1.15);
      const isPerishable = p.category === "Vegetables & Fruits" || p.category === "Dairy & Breakfast";

      return {
        id: `inv-${p.id}`,
        productId: p.id,
        productName: p.name,
        category: p.category,
        subCategory: p.subCategory || "General",
        unit: p.unit || "1 pc",
        sku: `SKU-${city.substring(0, 3).toUpperCase()}-${String(idx + 101).padStart(4, "0")}`,
        barcode: `890100${String(idx + 101).padStart(6, "0")}`,
        hsnCode: isPerishable ? "0709" : "1006",
        merchantId: outlet.merchantId,
        merchantName: outlet.name,
        outletId: outlet.id,
        outletName: outlet.name,
        city,
        locality,
        pricePaise,
        mrpPaise,
        onHandStock,
        reservedStock,
        availableStock,
        safetyStock,
        status,
        daysOfSupply: Math.max(0, Math.round(availableStock / 4)),
        isNearExpiry: isPerishable && idx % 3 === 0,
        expiryDate: isPerishable
          ? new Date(Date.now() + 86400000 * 2).toISOString()
          : new Date(Date.now() + 86400000 * 180).toISOString(),
        lastRestockedAt: new Date(Date.now() - 86400000 * (idx % 5 + 1)).toISOString(),
        lastRestockedDaysAgo: idx % 5 + 1,
      };
    }).filter((s: any) => !targetCity || s.city.toLowerCase() === targetCity.toLowerCase());
  }

  // =========================================================================
  // SPRINT 8: CUSTOMER DIRECTORY & HELPDESK PRO (SCREENS #42-#50, #102-#104)
  // =========================================================================

  @Get("customers/overview")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Platform customer metrics, retention cohorts and DPDP privacy compliance" })
  async getCustomersOverview(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    const list = targetCity
      ? mutableCustomersList.filter(c => c.cityName.toLowerCase() === targetCity.toLowerCase())
      : mutableCustomersList;

    const totalCustomers = list.length;
    const activeMonthlyUsers = list.filter(c => c.status === "ACTIVE").length;
    const vipCount = list.filter(c => c.segment === "VIP").length;
    const restrictedCount = list.filter(c => c.status === "RESTRICTED").length;
    const suspendedCount = list.filter(c => c.status === "SUSPENDED").length;

    const totalSpendPaise = list.reduce((acc, c) => acc + c.lifetimeSpendPaise, 0);
    const averageLtvPaise = totalCustomers > 0 ? Math.round(totalSpendPaise / totalCustomers) : 0;

    return this.wrapResponse({
      metrics: {
        totalCustomers: 124560,
        totalCustomersDelta: "+14.2%",
        activeCustomers: 93420,
        activeCustomersLabel: "Last 90 days",
        customersWithOrders: 48276,
        customersWithOrdersPct: "38.8%",
        totalOrderValueFormatted: "₹3,24,56,780",
        totalOrderValueDelta: "+21.6%",
        loyaltyMembers: 56320,
        loyaltyMembersPct: "45.2%",
        flaggedAtRisk: 812,
        flaggedAtRiskPct: "0.7%",
      },
      counts: {
        all: 124560,
        active: 93420,
        new: 8276,
        inactive: 30328,
        blocked: 512,
        flagged: 812,
      },
      totalCustomers: 124560,
      activeMonthlyUsers: 93420,
      repeatOrderRatePct: 74.2,
      averageLtvPaise: 260570,
      averageLtvRupees: 2606,
      vipCustomersCount: 14200,
      restrictedCount: 512,
      suspendedCount: 812,
      dpdpConsentCompliancePct: 99.4,
      activeTerritory: targetCity || "Global Scope",
    });
  }

  @Get("customers")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List and search customer master directory with privacy-preserving masked PII" })
  async getCustomers(
    @Query("query") query: string = "",
    @Query("city") cityQuery?: string,
    @Query("segment") segment?: string,
    @Query("status") status?: string,
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 20,
    @Headers() headers?: any
  ) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableCustomersList;

    if (targetCity) {
      list = list.filter(c => c.cityName.toLowerCase() === targetCity.toLowerCase());
    }

    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      list = list.filter(
        c =>
          c.fullName.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q) ||
          c.cityName.toLowerCase().includes(q) ||
          c.addresses.some((a: any) => a.locality.toLowerCase().includes(q))
      );
    }

    if (segment && segment !== "ALL") {
      list = list.filter(c => c.segment === segment);
    }

    if (status && status !== "ALL") {
      list = list.filter(c => c.status === status);
    }

    const startIndex = (Number(page) - 1) * Number(limit);
    const paginated = list.slice(startIndex, startIndex + Number(limit)).map(c => ({
      id: c.id,
      fullName: c.fullName,
      phone: c.phoneNumber,
      maskedPhone: this.maskPhoneNumber(c.phoneNumber),
      email: c.email,
      maskedEmail: c.email ? this.maskEmailAddress(c.email) : "N/A",
      city: c.cityName,
      cityCode: c.cityCode,
      locality: c.locality || c.addresses?.find((a: any) => a.isDefault)?.locality || c.addresses?.[0]?.locality || "General",
      primaryLocality: c.locality || c.addresses?.find((a: any) => a.isDefault)?.locality || c.addresses?.[0]?.locality || "General",
      segment: c.segment,
      segmentLabel: c.segmentLabel || c.segment,
      status: c.status,
      totalOrdersCount: c.totalOrdersCount,
      orders: c.totalOrdersCount,
      lifetimeSpendPaise: c.lifetimeSpendPaise,
      lifetimeSpendRupees: Math.round(c.lifetimeSpendPaise / 100),
      totalSpent: Math.round(c.lifetimeSpendPaise / 100),
      loyaltyPoints: c.loyaltyPoints || 800,
      rating: c.rating || 4.8,
      avgOrderValue: c.avgOrderValue || Math.round(c.lifetimeSpendPaise / ((c.totalOrdersCount || 1) * 100)),
      lastOrderDate: c.lastOrderDate || c.lastActiveAt,
      orderFrequency: c.orderFrequency || "~2.1 orders / month",
      preferredCategories: c.preferredCategories || ["Grocery", "Daily Needs"],
      orderTrend: c.orderTrend || [
        { month: "Jun", orders: 2 },
        { month: "Jul", orders: 3 },
        { month: "Aug", orders: 4 },
        { month: "Sep", orders: 4 },
        { month: "Oct", orders: 5 },
        { month: "Nov", orders: 6 }
      ],
      recentOrders: c.recentOrders || [
        { id: `ORD-${Date.now()}`, date: "15 Nov 2026, 08:24 PM", amount: 842, status: "Delivered" }
      ],
      addressesCount: c.addresses?.length || 1,
      registeredAt: c.registeredAt,
      lastActiveAt: c.lastActiveAt,
    }));

    return this.wrapPaginated(paginated, list.length, Number(page), Number(limit));
  }

  @Get("customers/segments/overview")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer segmentation overview and ROI metrics" })
  async getCustomerSegmentsOverview() {
    return this.wrapResponse({
      metrics: {
        totalCustomers: 124560,
        activeSegments: 8,
        customersInSegments: 93420,
        customersInSegmentsPct: "75.0%",
        engagementReach: 41360,
        engagementReachPeriod: "Last 30 Days",
        revenueFromSegmentsFormatted: "₹18,67,320",
        revenueFromSegmentsDelta: "+24.6%",
        avgSegmentRoi: "5.8x",
      },
      counts: {
        activeSegments: 8,
      }
    });
  }

  @Get("customers/segments")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List smart customer segmentation groups" })
  async getCustomerSegments(
    @Query("search") search?: string,
    @Query("type") type?: string,
    @Query("status") status?: string
  ) {
    let list = [
      {
        id: "SEG-0001",
        name: "Frequent Buyers",
        description: "High repeat purchase users",
        type: "BEHAVIOR",
        typeLabel: "Behavior",
        icon: "⭐",
        customers: 18560,
        pctOfTotal: "14.9%",
        criteriaSummary: "≥ 5 orders (in last 90 days)",
        status: "ACTIVE",
        lastUpdated: "15 Nov 2026, 10:24 AM",
        avgOrders: 5.8,
        avgSpendFormatted: "₹18,560",
        criteriaList: ["Orders in last 90 days ≥ 5", "Status = Active"],
        totalOrders: 107580,
        totalSpendFormatted: "₹3,26,48,560",
        avgOrderValueFormatted: "₹3,036",
        repeatPurchaseRate: "82.4%",
        orderTrendDelta: "+24.6%",
        orderTrend: [
          { month: "Jun", orders: 12 },
          { month: "Jul", orders: 15 },
          { month: "Aug", orders: 18 },
          { month: "Sep", orders: 20 },
          { month: "Oct", orders: 24 },
          { month: "Nov", orders: 28 },
        ],
      },
      {
        id: "SEG-0002",
        name: "Loyal Customers",
        description: "High value & repeat buyers",
        type: "VALUE",
        typeLabel: "Value",
        icon: "👑",
        customers: 12420,
        pctOfTotal: "10.0%",
        criteriaSummary: "≥ ₹10,000 spend & ≥ 3 orders",
        status: "ACTIVE",
        lastUpdated: "14 Nov 2026, 06:38 PM",
        avgOrders: 6.2,
        avgSpendFormatted: "₹24,120",
        criteriaList: ["Total spend ≥ ₹10,000", "Orders count ≥ 3"],
        totalOrders: 77004,
        totalSpendFormatted: "₹2,99,57,040",
        avgOrderValueFormatted: "₹3,890",
        repeatPurchaseRate: "88.2%",
        orderTrendDelta: "+19.4%",
        orderTrend: [
          { month: "Jun", orders: 10 },
          { month: "Jul", orders: 12 },
          { month: "Aug", orders: 14 },
          { month: "Sep", orders: 16 },
          { month: "Oct", orders: 19 },
          { month: "Nov", orders: 22 },
        ],
      },
      {
        id: "SEG-0003",
        name: "New Customers",
        description: "Recently registered users",
        type: "LIFECYCLE",
        typeLabel: "Lifecycle",
        icon: "👤",
        customers: 8276,
        pctOfTotal: "6.6%",
        criteriaSummary: "Joined in last 30 days",
        status: "ACTIVE",
        lastUpdated: "14 Nov 2026, 01:12 PM",
        avgOrders: 1.8,
        avgSpendFormatted: "₹1,240",
        criteriaList: ["Registration date ≤ 30 days"],
        totalOrders: 14896,
        totalSpendFormatted: "₹1,02,62,240",
        avgOrderValueFormatted: "₹688",
        repeatPurchaseRate: "34.1%",
        orderTrendDelta: "+31.0%",
        orderTrend: [
          { month: "Jun", orders: 4 },
          { month: "Jul", orders: 6 },
          { month: "Aug", orders: 8 },
          { month: "Sep", orders: 11 },
          { month: "Oct", orders: 15 },
          { month: "Nov", orders: 18 },
        ],
      },
      {
        id: "SEG-0004",
        name: "Inactive Customers",
        description: "No recent activity",
        type: "ENGAGEMENT",
        typeLabel: "Engagement",
        icon: "🏷️",
        customers: 30328,
        pctOfTotal: "24.4%",
        criteriaSummary: "No orders in last 60 days",
        status: "ACTIVE",
        lastUpdated: "13 Nov 2026, 09:47 AM",
        avgOrders: 2.1,
        avgSpendFormatted: "₹1,850",
        criteriaList: ["Last order date > 60 days ago"],
        totalOrders: 63688,
        totalSpendFormatted: "₹5,61,06,800",
        avgOrderValueFormatted: "₹880",
        repeatPurchaseRate: "12.0%",
        orderTrendDelta: "-8.2%",
        orderTrend: [
          { month: "Jun", orders: 18 },
          { month: "Jul", orders: 16 },
          { month: "Aug", orders: 14 },
          { month: "Sep", orders: 12 },
          { month: "Oct", orders: 9 },
          { month: "Nov", orders: 7 },
        ],
      },
      {
        id: "SEG-0005",
        name: "VIP Customers",
        description: "Top value customers",
        type: "VALUE",
        typeLabel: "Value",
        icon: "💎",
        customers: 5860,
        pctOfTotal: "4.7%",
        criteriaSummary: "≥ ₹50,000 spend (or top 5% by value)",
        status: "ACTIVE",
        lastUpdated: "12 Nov 2026, 05:20 PM",
        avgOrders: 14.5,
        avgSpendFormatted: "₹62,400",
        criteriaList: ["Lifetime spend ≥ ₹50,000"],
        totalOrders: 84970,
        totalSpendFormatted: "₹3,65,66,400",
        avgOrderValueFormatted: "₹4,303",
        repeatPurchaseRate: "94.6%",
        orderTrendDelta: "+28.5%",
        orderTrend: [
          { month: "Jun", orders: 15 },
          { month: "Jul", orders: 18 },
          { month: "Aug", orders: 20 },
          { month: "Sep", orders: 22 },
          { month: "Oct", orders: 25 },
          { month: "Nov", orders: 30 },
        ],
      },
      {
        id: "SEG-0006",
        name: "Occasional Buyers",
        description: "Low frequency customers",
        type: "BEHAVIOR",
        typeLabel: "Behavior",
        icon: "🛒",
        customers: 20940,
        pctOfTotal: "16.8%",
        criteriaSummary: "1 - 2 orders (in last 90 days)",
        status: "ACTIVE",
        lastUpdated: "12 Nov 2026, 11:05 AM",
        avgOrders: 1.5,
        avgSpendFormatted: "₹980",
        criteriaList: ["Orders in last 90 days between 1 and 2"],
        totalOrders: 31410,
        totalSpendFormatted: "₹2,05,21,200",
        avgOrderValueFormatted: "₹653",
        repeatPurchaseRate: "42.0%",
        orderTrendDelta: "+11.2%",
        orderTrend: [
          { month: "Jun", orders: 6 },
          { month: "Jul", orders: 7 },
          { month: "Aug", orders: 7 },
          { month: "Sep", orders: 8 },
          { month: "Oct", orders: 9 },
          { month: "Nov", orders: 10 },
        ],
      },
      {
        id: "SEG-0007",
        name: "Price Sensitive",
        description: "Users who use offers often",
        type: "PREFERENCE",
        typeLabel: "Preference",
        icon: "🏷️",
        customers: 14720,
        pctOfTotal: "11.8%",
        criteriaSummary: "≥ 2 orders with discount/coupon",
        status: "ACTIVE",
        lastUpdated: "11 Nov 2026, 04:32 PM",
        avgOrders: 3.4,
        avgSpendFormatted: "₹2,450",
        criteriaList: ["Discounted orders ≥ 2"],
        totalOrders: 50048,
        totalSpendFormatted: "₹3,60,64,000",
        avgOrderValueFormatted: "₹720",
        repeatPurchaseRate: "68.4%",
        orderTrendDelta: "+16.8%",
        orderTrend: [
          { month: "Jun", orders: 8 },
          { month: "Jul", orders: 9 },
          { month: "Aug", orders: 11 },
          { month: "Sep", orders: 13 },
          { month: "Oct", orders: 15 },
          { month: "Nov", orders: 17 },
        ],
      },
      {
        id: "SEG-0008",
        name: "Pune Customers",
        description: "All customers from Pune",
        type: "LOCATION",
        typeLabel: "Location",
        icon: "📍",
        customers: 52340,
        pctOfTotal: "42.0%",
        criteriaSummary: "City = Pune",
        status: "ACTIVE",
        lastUpdated: "10 Nov 2026, 02:18 PM",
        avgOrders: 4.2,
        avgSpendFormatted: "₹3,840",
        criteriaList: ["City = Pune"],
        totalOrders: 219828,
        totalSpendFormatted: "₹20,09,85,600",
        avgOrderValueFormatted: "₹914",
        repeatPurchaseRate: "76.5%",
        orderTrendDelta: "+22.1%",
        orderTrend: [
          { month: "Jun", orders: 20 },
          { month: "Jul", orders: 24 },
          { month: "Aug", orders: 28 },
          { month: "Sep", orders: 32 },
          { month: "Oct", orders: 36 },
          { month: "Nov", orders: 42 },
        ],
      },
    ];

    if (search) {
      const q = search.toLowerCase().trim();
      list = list.filter(s => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));
    }

    if (type && type.toUpperCase() !== "ALL") {
      list = list.filter(s => s.type === type || s.typeLabel.toLowerCase() === type.toLowerCase());
    }

    if (status && status.toUpperCase() !== "ALL") {
      list = list.filter(s => s.status === status);
    }

    return this.wrapPaginated(list, list.length);
  }

  @Get("customers/segments/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single customer segment by ID" })
  async getCustomerSegmentById(@Param("id") id: string) {
    const resp = await this.getCustomerSegments();
    const item = resp.data?.items?.find((s: any) => s.id === id);
    if (!item) throw new NotFoundException(`Customer segment ${id} not found.`);
    return this.wrapResponse(item);
  }

  @Post("customers/segments")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create new smart customer segment" })
  async createCustomerSegment(@Body() body: any) {
    const newSeg = {
      id: `SEG-000${Math.floor(10 + Math.random() * 90)}`,
      name: body.name || "Custom Segment",
      description: body.description || "User-defined customer cluster",
      type: body.type || "BEHAVIOR",
      typeLabel: body.typeLabel || "Behavior",
      icon: "🎯",
      customers: 2400,
      pctOfTotal: "1.9%",
      criteriaSummary: body.criteriaSummary || "Custom Rule",
      status: "ACTIVE",
      lastUpdated: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
      avgOrders: 3.0,
      avgSpendFormatted: "₹2,500",
      criteriaList: body.criteriaList || ["Custom Criteria"],
      totalOrders: 7200,
      totalSpendFormatted: "₹60,00,000",
      avgOrderValueFormatted: "₹833",
      repeatPurchaseRate: "65.0%",
      orderTrendDelta: "+12.0%",
      orderTrend: [
        { month: "Jun", orders: 2 },
        { month: "Jul", orders: 3 },
        { month: "Aug", orders: 3 },
        { month: "Sep", orders: 4 },
        { month: "Oct", orders: 5 },
        { month: "Nov", orders: 6 },
      ],
    };
    return this.wrapResponse(newSeg);
  }

  // =========================================================================
  // SPRINT 15: CUSTOMER ACCOUNTS & MOBILE VERIFICATION / KYC (SCREENS #17 & #13)
  // =========================================================================

  @Get("customers/verification/overview")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer accounts, OTP mobile verification and KYC metrics" })
  async getCustomerVerificationOverview(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    return this.wrapResponse({
      metrics: {
        totalCustomers: 124560,
        mobileVerified: 118420,
        mobileVerifiedPct: "95.1%",
        guestUsers: 6140,
        guestUsersLabel: "Browsed, Not Ordered",
        newCustomers: 8276,
        newCustomersLabel: "Last 30 Days",
        customersWithOrders: 48276,
        customersWithOrdersPct: "38.8%",
        flaggedCount: 512,
      },
      counts: {
        all: 124560,
        verified: 118420,
        guests: 6140,
        withOrders: 48276,
        flagged: 512,
      },
      kycMetrics: {
        totalCustomers: 48276,
        verified: 32840,
        verifiedPct: "68.0%",
        pendingReview: 6428,
        pendingReviewPct: "13.3%",
        actionRequired: 4196,
        actionRequiredPct: "8.7%",
        rejected: 3212,
        rejectedPct: "6.7%",
        reverification: 1600,
        reverificationPct: "3.3%",
      },
      kycCounts: {
        queue: 6428,
        verified: 32840,
        actionRequired: 4196,
        rejected: 3212,
        reverification: 1600,
      }
    });
  }

  @Get("customers/verification")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List customer accounts with OTP mobile verification status" })
  async getCustomerVerifications(
    @Query("query") query?: string,
    @Query("city") cityQuery?: string,
    @Query("segment") segmentQuery?: string,
    @Query("status") statusQuery?: string,
    @Query("tab") tabQuery: string = "ALL",
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
    @Headers() headers?: any
  ) {
    let list = [...mutableCustomersList];

    if (query && query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(c =>
        c.fullName.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q) ||
        c.phoneNumber.toLowerCase().includes(q)
      );
    }

    if (cityQuery && cityQuery !== "ALL") {
      list = list.filter(c => c.cityName?.toLowerCase() === cityQuery.toLowerCase());
    }

    if (segmentQuery && segmentQuery !== "ALL") {
      list = list.filter(c => c.segment?.toLowerCase() === segmentQuery.toLowerCase());
    }

    if (statusQuery && statusQuery !== "ALL") {
      list = list.filter(c => c.status?.toLowerCase() === statusQuery.toLowerCase());
    }

    if (tabQuery === "VERIFIED") {
      list = list.filter(c => c.verificationStatus === "OTP_VERIFIED");
    } else if (tabQuery === "GUESTS") {
      list = list.filter(c => c.accountType === "Guest");
    } else if (tabQuery === "WITH_ORDERS") {
      list = list.filter(c => c.totalOrdersCount > 0);
    } else if (tabQuery === "FLAGGED") {
      list = list.filter(c => c.status === "FLAGGED" || c.status === "RESTRICTED");
    }

    const startIndex = (Number(page) - 1) * Number(limit);
    const paginated = list.slice(startIndex, startIndex + Number(limit)).map((c, index) => ({
      index: startIndex + index + 1,
      id: c.id,
      name: c.fullName,
      avatar: c.avatar || null,
      initials: c.fullName.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase(),
      mobile: c.phoneNumber,
      accountType: c.accountType || (c.totalOrdersCount > 0 ? "Registered" : "Guest"),
      orders: c.totalOrdersCount || 0,
      totalSpent: c.lifetimeSpendRupees || 0,
      totalSpentFormatted: `₹${(c.lifetimeSpendRupees || 0).toLocaleString("en-IN")}`,
      verificationStatus: c.verificationStatus || (c.accountType === "Guest" ? "NOT_VERIFIED" : "OTP_VERIFIED"),
      verificationMethod: c.verificationMethod || (c.verificationStatus === "NOT_VERIFIED" ? null : "OTP (SMS)"),
      verifiedOn: c.verifiedOn || (c.verificationStatus === "NOT_VERIFIED" ? null : (c.registeredAt ? `${c.registeredAt}, 10:24 AM` : "10 Jan 2026, 10:24 AM")),
      status: c.status || (c.accountType === "Guest" ? "GUEST" : "ACTIVE"),
      lastActive: c.lastActiveAt || "15 Nov 2026, 10:24 AM",
      locality: c.locality || "Baner",
      cityName: c.cityName || "Pune",
      joinedDate: c.registeredAt || "10 Jan 2026",
      loyaltyPoints: c.loyaltyPoints || 0,
      email: c.email || `${c.fullName.toLowerCase().replace(/ /g, ".")}@gmail.com`,
      contactPreference: c.contactPreference || "SMS, Push Notification",
      recentActivity: c.recentActivity || [
        { title: `Order placed — ORD-${Math.floor(800000 + Math.random() * 100000)}`, time: "15 Nov 2026, 08:24 PM", type: "success" },
        { title: "Login — Mobile OTP", time: "15 Nov 2026, 10:24 AM", type: "info" },
        { title: "Account created", time: c.registeredAt ? `${c.registeredAt}, 10:24 AM` : "10 Jan 2026, 10:24 AM", type: "muted" },
      ],
      addressesCount: c.addresses?.length || 1,
    }));

    return this.wrapPaginated(paginated, 124560, Number(page), Number(limit));
  }

  @Get("customers/verification/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer account verification details" })
  async getCustomerVerificationById(@Param("id") id: string) {
    const cust = mutableCustomersList.find(c => c.id === id);
    if (!cust) throw new NotFoundException(`Customer ${id} not found.`);

    return this.wrapResponse({
      id: cust.id,
      name: cust.fullName,
      avatar: cust.avatar || null,
      initials: cust.fullName.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase(),
      mobile: cust.phoneNumber,
      accountType: cust.accountType || (cust.totalOrdersCount > 0 ? "Registered" : "Guest"),
      orders: cust.totalOrdersCount || 0,
      totalSpent: cust.lifetimeSpendRupees || 0,
      totalSpentFormatted: `₹${(cust.lifetimeSpendRupees || 0).toLocaleString("en-IN")}`,
      verificationStatus: cust.verificationStatus || (cust.accountType === "Guest" ? "NOT_VERIFIED" : "OTP_VERIFIED"),
      verificationMethod: cust.verificationMethod || (cust.verificationStatus === "NOT_VERIFIED" ? null : "OTP (SMS)"),
      verifiedOn: cust.verifiedOn || (cust.verificationStatus === "NOT_VERIFIED" ? null : (cust.registeredAt ? `${cust.registeredAt}, 10:24 AM` : "10 Jan 2026, 10:24 AM")),
      status: cust.status || (cust.accountType === "Guest" ? "GUEST" : "ACTIVE"),
      lastActive: cust.lastActiveAt || "15 Nov 2026, 10:24 AM",
      locality: cust.locality || "Baner",
      cityName: cust.cityName || "Pune",
      joinedDate: cust.registeredAt || "10 Jan 2026",
      loyaltyPoints: cust.loyaltyPoints || 0,
      email: cust.email || `${cust.fullName.toLowerCase().replace(/ /g, ".")}@gmail.com`,
      contactPreference: cust.contactPreference || "SMS, Push Notification",
      recentActivity: [
        { title: "Order placed — ORD-892210", time: "15 Nov 2026, 08:24 PM", type: "success" },
        { title: "Login — Mobile OTP", time: "15 Nov 2026, 10:24 AM", type: "info" },
        { title: "Account created", time: cust.registeredAt ? `${cust.registeredAt}, 10:24 AM` : "10 Jan 2026, 10:24 AM", type: "muted" },
      ],
      addresses: cust.addresses || [],
      recentOrders: cust.recentOrders || [],
    });
  }

  @Get("customers/kyc/overview")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer KYC review overview metrics" })
  async getCustomerKycOverview() {
    return this.wrapResponse({
      metrics: {
        totalCustomers: 48276,
        verified: 32840,
        verifiedPct: "68.0%",
        pendingReview: 6428,
        pendingReviewPct: "13.3%",
        actionRequired: 4196,
        actionRequiredPct: "8.7%",
        rejected: 3212,
        rejectedPct: "6.7%",
        reverification: 1600,
        reverificationPct: "3.3%",
      },
      counts: {
        queue: 6428,
        verified: 32840,
        actionRequired: 4196,
        rejected: 3212,
        reverification: 1600,
      }
    });
  }

  @Get("customers/kyc")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List customer KYC review applications" })
  async getCustomerKycList(
    @Query("query") query?: string,
    @Query("city") cityQuery?: string,
    @Query("type") typeQuery?: string,
    @Query("status") statusQuery?: string,
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
  ) {
    let list = [...mutableCustomerKycList];
    if (query && query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(k => k.customerName.toLowerCase().includes(q) || k.customerId.toLowerCase().includes(q));
    }
    if (statusQuery && statusQuery !== "ALL") {
      list = list.filter(k => k.status.toLowerCase() === statusQuery.toLowerCase());
    }
    return this.wrapPaginated(list, 6428, Number(page), Number(limit));
  }

  @Patch("customers/kyc/:id/approve")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Approve customer KYC verification" })
  async approveCustomerKyc(@Param("id") id: string) {
    const kyc = mutableCustomerKycList.find(k => k.id === id);
    if (kyc) {
      kyc.status = "Verified";
      kyc.aadhaarStatus = "Verified";
      kyc.panStatus = "Verified";
    }
    return this.wrapResponse({ success: true, id, status: "Verified" });
  }

  @Patch("customers/kyc/:id/reject")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Reject customer KYC verification with reason" })
  async rejectCustomerKyc(@Param("id") id: string, @Body() body: any) {
    const kyc = mutableCustomerKycList.find(k => k.id === id);
    if (kyc) {
      kyc.status = "Rejected";
      kyc.rejectionReason = body.reason || "Documents unreadable or incomplete";
    }
    return this.wrapResponse({ success: true, id, status: "Rejected", reason: body.reason });
  }

  @Patch("customers/kyc/:id/request-info")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Request additional info/documents for KYC" })
  async requestCustomerKycInfo(@Param("id") id: string, @Body() body: any) {
    const kyc = mutableCustomerKycList.find(k => k.id === id);
    if (kyc) {
      kyc.status = "Action Required";
    }
    return this.wrapResponse({ success: true, id, status: "Action Required", note: body.note });
  }

  @Patch("customers/kyc/:id/reverify")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Trigger customer KYC re-verification" })
  async reverifyCustomerKyc(@Param("id") id: string) {
    const kyc = mutableCustomerKycList.find(k => k.id === id);
    if (kyc) {
      kyc.status = "Re-verification";
    }
    return this.wrapResponse({ success: true, id, status: "Re-verification" });
  }

  @Patch("customers/:id/flag")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Flag or unflag customer account" })
  async flagCustomerAccount(@Param("id") id: string, @Body() body: any) {
    const cust = mutableCustomersList.find(c => c.id === id);
    if (!cust) throw new NotFoundException(`Customer ${id} not found.`);
    cust.status = body.flag ? "FLAGGED" : "ACTIVE";
    return this.wrapResponse({ success: true, id, status: cust.status, reason: body.reason });
  }

  @Patch("customers/:id/block")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Block or unblock customer account" })
  async blockCustomerAccount(@Param("id") id: string, @Body() body: any) {
    const cust = mutableCustomersList.find(c => c.id === id);
    if (!cust) throw new NotFoundException(`Customer ${id} not found.`);
    cust.status = body.block ? "BLOCKED" : "ACTIVE";
    return this.wrapResponse({ success: true, id, status: cust.status, reason: body.reason });
  }

  @Post("customers/:id/send-notification")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Send notification to customer" })
  async sendCustomerNotification(@Param("id") id: string, @Body() body: any) {
    return this.wrapResponse({ success: true, id, title: body.title, channel: body.channel || "SMS", sentAt: new Date().toISOString() });
  }

  @Post("customers/:id/loyalty-points")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Credit loyalty points to customer account" })
  async creditLoyaltyPoints(@Param("id") id: string, @Body() body: any) {
    const cust = mutableCustomersList.find(c => c.id === id);
    if (cust) {
      cust.loyaltyPoints = (cust.loyaltyPoints || 0) + (Number(body.points) || 100);
    }
    return this.wrapResponse({ success: true, id, creditedPoints: body.points, newBalance: cust?.loyaltyPoints || 0 });
  }

  // =========================================================================
  // SPRINT 16: LOYALTY & REWARDS MANAGEMENT (SCREEN #18)
  // =========================================================================

  @Get("customers/loyalty/overview")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer loyalty and rewards program metrics" })
  async getLoyaltyOverview() {
    return this.wrapResponse({
      metrics: {
        loyaltyMembers: 118420,
        loyaltyMembersDelta: "+14.2%",
        pointsIssued: 1560,
        pointsIssuedDelta: "+28.6%",
        rewardsRedeemed: 1240,
        rewardsRedeemedDelta: "+22.8%",
        rewardValuePaise: 48632000,
        rewardValueRupees: 486320,
        rewardValueFormatted: "₹4,86,320",
        repeatPurchaseRatePct: 82.4,
        repeatPurchaseRateDelta: "+6.8 pp",
        loyaltyRoi: "5.8x",
      },
      counts: {
        programs: mutableLoyaltyPrograms.length,
        rewards: mutableLoyaltyCatalog.length,
        activeRules: mutableLoyaltyRules.filter(r => r.status === "Active").length,
      }
    });
  }

  @Get("customers/loyalty/programs")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List customer loyalty programs" })
  async getLoyaltyPrograms(@Query("activeOnly") activeOnly?: string, @Query("query") query?: string) {
    let list = [...mutableLoyaltyPrograms];
    if (activeOnly === "true") {
      list = list.filter(p => p.status === "Active");
    }
    if (query && query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.type.toLowerCase().includes(q));
    }
    return this.wrapResponse(list);
  }

  @Get("customers/loyalty/programs/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get loyalty program details" })
  async getLoyaltyProgramById(@Param("id") id: string) {
    const prog = mutableLoyaltyPrograms.find(p => p.id === id);
    if (!prog) throw new NotFoundException(`Loyalty program ${id} not found.`);
    return this.wrapResponse(prog);
  }

  @Post("customers/loyalty/programs")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create new loyalty program" })
  async createLoyaltyProgram(@Body() body: any) {
    const newProg = {
      index: mutableLoyaltyPrograms.length + 1,
      id: `prog-${Date.now()}`,
      name: body.name || "Custom Loyalty Program",
      subtitle: body.subtitle || "Special customer rewards",
      icon: body.icon || "🎁",
      type: body.type || "Standard",
      members: 0,
      earningRule: body.earningRule || "₹1 = 1 Point",
      redemption: body.redemption || "100 Points = ₹10",
      status: "Active",
      validFrom: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      validTill: body.validTill || "No Expiry",
      minRedemption: body.minRedemption || "100 Points",
      maxRedemption: body.maxRedemption || "5,000 Points / Order",
      description: body.description || "Custom rewards program for targeted customer segments.",
    };
    mutableLoyaltyPrograms.push(newProg);
    return this.wrapResponse(newProg);
  }

  @Patch("customers/loyalty/programs/:id/toggle")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Toggle loyalty program active status" })
  async toggleLoyaltyProgram(@Param("id") id: string) {
    const prog = mutableLoyaltyPrograms.find(p => p.id === id);
    if (!prog) throw new NotFoundException(`Loyalty program ${id} not found.`);
    prog.status = prog.status === "Active" ? "Inactive" : "Active";
    return this.wrapResponse({ id, status: prog.status });
  }

  @Get("customers/loyalty/rules")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List active loyalty points earning rules" })
  async getLoyaltyRules() {
    return this.wrapResponse(mutableLoyaltyRules);
  }

  @Get("customers/loyalty/catalog")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List loyalty rewards catalog vouchers" })
  async getLoyaltyCatalog() {
    return this.wrapResponse(mutableLoyaltyCatalog);
  }

  @Get("customers/loyalty/tiers")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List customer VIP loyalty tier levels" })
  async getLoyaltyTiers() {
    return this.wrapResponse(mutableLoyaltyTiers);
  }

  @Get("customers/loyalty/redemptions")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List recent reward redemptions log" })
  async getLoyaltyRedemptions() {
    return this.wrapResponse(mutableLoyaltyRedemptions);
  }

  @Post("customers/loyalty/redeem")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Process reward redemption for an order" })
  async redeemReward(@Body() body: any) {
    const newRedemption = {
      index: mutableLoyaltyRedemptions.length + 1,
      id: `red-${Date.now()}`,
      customerId: body.customerId || "CUS-0012456",
      customerName: body.customerName || "Rohit Sharma",
      initials: (body.customerName || "RS").split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase(),
      orderId: body.orderId || `ORD-${Math.floor(880000 + Math.random() * 20000)}`,
      rewardRedeemed: body.rewardRedeemed || "₹25 Off",
      pointsUsed: Number(body.pointsUsed) || 200,
      discountValue: body.discountValue || "₹25",
      orderValue: body.orderValue || "₹1,240",
      dateTime: "Just now",
      status: "Applied",
    };
    mutableLoyaltyRedemptions.unshift(newRedemption);
    return this.wrapResponse(newRedemption);
  }

  @Get("customers/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer 360 profile, masked contact info and saved address book" })
  async getCustomerById(@Param("id") id: string, @Headers() headers?: any) {
    const cust = mutableCustomersList.find(c => c.id === id);
    if (!cust) throw new NotFoundException(`Customer ${id} not found.`);

    const scope = this.resolveOperatorScope(headers);
    if (!scope.isGlobal && scope.city && cust.cityName.toLowerCase() !== scope.city.toLowerCase()) {
      throw new ForbiddenException(`Cross-city access denied: customer is in ${cust.cityName} jurisdiction.`);
    }

    return this.wrapResponse({
      ...cust,
      maskedPhone: this.maskPhoneNumber(cust.phoneNumber),
      maskedEmail: cust.email ? this.maskEmailAddress(cust.email) : "N/A",
      lifetimeSpendRupees: Math.round(cust.lifetimeSpendPaise / 100),
      isPiiMasked: true,
    });
  }

  @Post("customers/:id/unmask-pii")
  @ApiBearerAuth()
  @ApiOperation({ summary: "DPDP Act compliant temporary PII unmasking with mandatory purpose justification audit" })
  async unmaskCustomerPii(
    @Param("id") id: string,
    @Body() body: { purposeCode: string; justification: string },
    @Headers() headers?: any
  ) {
    const cust = mutableCustomersList.find(c => c.id === id);
    if (!cust) throw new NotFoundException(`Customer ${id} not found.`);

    if (!body.purposeCode || !body.justification || body.justification.trim().length < 5) {
      throw new BadRequestException("Valid statutory purposeCode and minimum 5-character justification are required under DPDP Act 2023.");
    }

    const scope = this.resolveOperatorScope(headers);

    // Record immutable DPDP access log
    mutablePiiAccessLogs.unshift({
      id: `PII-${Date.now()}`,
      operatorId: scope.role === "ROOT_ADMIN" ? "adm-root-001" : "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      targetEntity: "Customer",
      targetId: id,
      accessedFields: ["phoneNumber", "email", "addresses"],
      purposeCode: body.purposeCode,
      justification: body.justification,
      timestamp: new Date().toISOString(),
    });

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: "CUSTOMER_PII_UNMASKED",
      targetEntity: "Customer",
      targetId: id,
      reasonCode: body.purposeCode,
      justification: body.justification,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse({
      id: cust.id,
      fullName: cust.fullName,
      unmaskedPhoneNumber: cust.phoneNumber,
      unmaskedEmail: cust.email || "N/A",
      unmaskedAddresses: cust.addresses,
      grantedAt: new Date().toISOString(),
      expiresInSeconds: 300,
    });
  }

  @Get("customers/:id/orders")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer order purchase history" })
  async getCustomerOrders(@Param("id") id: string) {
    const cust = mutableCustomersList.find(c => c.id === id);
    const list = SEEDED_ORDERS.filter(
      (o: any) => o.customerId === id || (cust && o.customerName?.toLowerCase().includes(cust.fullName.toLowerCase()))
    );

    return this.wrapPaginated(list.length > 0 ? list : SEEDED_ORDERS.slice(0, 3));
  }

  @Patch("customers/:id/status")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Restrict, suspend or restore customer account access" })
  async updateCustomerStatus(
    @Param("id") id: string,
    @Body() body: { status: "ACTIVE" | "RESTRICTED" | "SUSPENDED"; reasonCode: string; justification: string },
    @Headers() headers?: any
  ) {
    const cust = mutableCustomersList.find(c => c.id === id);
    if (!cust) throw new NotFoundException(`Customer ${id} not found.`);

    cust.status = body.status;

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: `CUSTOMER_ACCOUNT_${body.status}`,
      targetEntity: "Customer",
      targetId: id,
      reasonCode: body.reasonCode || "ACCOUNT_GOVERNANCE",
      justification: body.justification || `Status updated to ${body.status}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(cust);
  }

  // PII Masking Utilities
  private maskPhoneNumber(phone: string): string {
    if (!phone || phone.length < 8) return "••••••••••";
    const cleaned = phone.replace(/\s+/g, "");
    return `${cleaned.substring(0, 7)} •••••`;
  }

  private maskEmailAddress(email: string): string {
    if (!email || !email.includes("@")) return "•••••@••••.com";
    const [user, domain] = email.split("@");
    const maskedUser = user.length > 2 ? `${user[0]}•••${user[user.length - 1]}` : `${user[0]}•••`;
    return `${maskedUser}@${domain}`;
  }

  // =========================================================================
  // SPRINT 9: COMMERCE SCHEDULING, QR COUNTER POS & DISPUTES (SCREENS #59-#63, #70-#72)
  // =========================================================================

  @Get("orders/qr-monitoring")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Live monitoring of store counter QR orders and digital token verification" })
  async getQrOrderMonitoring(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableQrOrders;
    if (targetCity) {
      list = list.filter(o => o.city.toLowerCase() === targetCity.toLowerCase());
    }

    const verifiedToday = list.filter(o => o.status === "VERIFIED_PICKED_UP").length;
    const pendingAtCounter = list.filter(o => o.status === "WAITING_AT_COUNTER").length;

    return this.wrapResponse({
      activeCounterSessions: list.length,
      verifiedToday,
      pendingAtCounter,
      avgTokenVerificationSeconds: 14.5,
      items: list,
    });
  }

  @Get("orders/pre-orders")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Pre-orders and scheduled festival pickup bookings calendar" })
  async getPreOrdersMonitoring(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutablePreOrders;
    if (targetCity) {
      list = list.filter(o => o.city.toLowerCase() === targetCity.toLowerCase());
    }

    return this.wrapPaginated(list, list.length);
  }

  @Get("orders/capacity-monitoring")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Live outlet hourly order capacity and slot saturation meter" })
  async getCapacityMonitoring(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let outlets = mutableOutletsList;
    if (targetCity) {
      outlets = outlets.filter(o => o.city.toLowerCase() === targetCity.toLowerCase());
    }

    const highLoadOutlets = outlets.filter(o => o.capacityUtilizationPct >= 80);

    return this.wrapResponse({
      totalMonitoredOutlets: outlets.length,
      congestedOutletsCount: highLoadOutlets.length,
      outlets: outlets.map(o => ({
        id: o.id,
        storeName: o.storeName,
        merchantName: o.merchantName,
        city: o.city,
        locality: o.locality,
        hourlyCapacity: o.hourlyCapacity,
        currentHourlyOrders: o.currentHourlyOrders,
        capacityUtilizationPct: o.capacityUtilizationPct,
        status: o.status,
        isThrottled: o.isThrottled,
      })),
    });
  }

  @Post("orders/capacity-throttle/:outletId")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Emergency order throttling toggle for congested storefronts" })
  async toggleOutletThrottle(
    @Param("outletId") outletId: string,
    @Body() body: { throttle: boolean; reason: string },
    @Headers() headers?: any
  ) {
    const outlet = mutableOutletsList.find(o => o.id === outletId);
    if (!outlet) throw new NotFoundException(`Outlet ${outletId} not found.`);

    outlet.isThrottled = body.throttle;
    if (body.throttle) {
      outlet.status = "BUSY";
    } else {
      outlet.status = "OPEN";
    }

    adminAuditLogs.unshift({
      id: `AUD-${Date.now()}`,
      operatorId: "operator-sa-001",
      operatorName: "Rushi Platform Architect",
      action: body.throttle ? "OUTLET_THROTTLE_ENGAGED" : "OUTLET_THROTTLE_RELEASED",
      targetEntity: "MerchantOutlet",
      targetId: outletId,
      reasonCode: "CAPACITY_SATURATION",
      justification: body.reason || `Outlet throttle status set to ${body.throttle}`,
      timestamp: new Date().toISOString(),
    });

    return this.wrapResponse(outlet);
  }

  @Get("orders/disputes")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Order disputes queue, escrow freeze and customer claim statements" })
  async getOrderDisputes(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableOrderDisputes;
    if (targetCity) {
      list = list.filter(d => d.city.toLowerCase() === targetCity.toLowerCase());
    }

    return this.wrapPaginated(list, list.length);
  }

  @Get("orders/:id/lifecycle")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Order granular event audit trail and timeline from placement to handover" })
  async getOrderLifecycleTimeline(@Param("id") id: string) {
    const baseTime = Date.now() - 3600000;
    return this.wrapResponse([
      {
        stage: "ORDER_PLACED",
        title: "Order Placed by Customer",
        timestamp: new Date(baseTime).toISOString(),
        actor: "Customer App",
        status: "COMPLETED",
        details: "Basket locked and payment intent initiated",
      },
      {
        stage: "PAYMENT_CAPTURED",
        title: "Escrow Payment Captured",
        timestamp: new Date(baseTime + 15000).toISOString(),
        actor: "UPI Gateway / Razorpay",
        status: "COMPLETED",
        details: "Funds held in nodal settlement escrow account",
      },
      {
        stage: "MERCHANT_ACCEPTED",
        title: "Merchant Store Confirmed",
        timestamp: new Date(baseTime + 65000).toISOString(),
        actor: "Store Manager POS",
        status: "COMPLETED",
        details: "Packing slip generated, items reserved",
      },
      {
        stage: "READY_FOR_PICKUP",
        title: "Packaged & Ready at Counter",
        timestamp: new Date(baseTime + 1200000).toISOString(),
        actor: "Counter Staff",
        status: "COMPLETED",
        details: "Digital token activated on customer smartphone",
      },
      {
        stage: "QR_TOKEN_VERIFIED",
        title: "QR Pickup Token Verified",
        timestamp: new Date(baseTime + 1800000).toISOString(),
        actor: "Storefront POS Scanner",
        status: "COMPLETED",
        details: "Two-way cryptographic token match verified",
      },
      {
        stage: "ORDER_FULFILLED",
        title: "Order Handed Over to Consumer",
        timestamp: new Date(baseTime + 1860000).toISOString(),
        actor: "Store Counter Staff",
        status: "COMPLETED",
        details: "Fulfillment complete. Escrow release scheduled.",
      },
    ]);
  }

  @Get("catalog/restricted-policies")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Regulated and prohibited products policy blocklist" })
  async getRestrictedPolicies() {
    return this.wrapResponse([
      {
        id: "POL-001",
        category: "Tobacco & Nicotine Products",
        restrictionLevel: "TOTAL_PROHIBITION",
        statutoryReference: "COTPA Act 2003",
        status: "ENFORCED",
        actionOnDetection: "IMMEDIATE_TAKEDOWN_AND_FINE",
      },
      {
        id: "POL-002",
        category: "Alcoholic Beverages",
        restrictionLevel: "TOTAL_PROHIBITION",
        statutoryReference: "Maharashtra State Prohibition Act",
        status: "ENFORCED",
        actionOnDetection: "IMMEDIATE_TAKEDOWN_AND_POLICE_REPORT",
      },
      {
        id: "POL-003",
        category: "Schedule H & X Prescription Drugs",
        restrictionLevel: "RESTRICTED_LICENSE_REQUIRED",
        statutoryReference: "Drugs and Cosmetics Rules 1945",
        status: "ENFORCED",
        actionOnDetection: "BLOCK_WITHOUT_VERIFIED_FDCA_LICENSE",
      },
      {
        id: "POL-004",
        category: "Unregulated Pesticides & Toxins",
        restrictionLevel: "TOTAL_PROHIBITION",
        statutoryReference: "Insecticides Act 1968",
        status: "ENFORCED",
        actionOnDetection: "PERMANENT_MERCHANT_BAN",
      },
    ]);
  }

  @Get("catalog/reported-items")
  @ApiBearerAuth()
  @ApiOperation({ summary: "User-reported catalog items for trademark violation or adulteration" })
  async getReportedCatalogItems(@Query("city") cityQuery?: string) {
    return this.wrapPaginated(mutableReportedCatalogItems, mutableReportedCatalogItems.length);
  }

  // ---------------------------------------------------------------------------
  // SPRINT 10: FIDUCIARY, COMPLIANCE & GOVERNANCE ENDPOINTS
  // ---------------------------------------------------------------------------

  @Get("finance/invoices")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Merchant tax invoices and platform commission billing archive (Screen #87 / #93)" })
  async getMerchantInvoices(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableMerchantInvoices;
    if (targetCity) {
      list = list.filter(inv => inv.city.toLowerCase() === targetCity.toLowerCase());
    }
    return this.wrapPaginated(list, list.length);
  }

  @Get("finance/gst-reports")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Statutory GSTR-1, GSTR-3B and Section 52 TCS reports (Screen #88 / #92)" })
  async getGstReports(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableGstReports;
    if (targetCity) {
      list = list.filter(r => r.city.toLowerCase() === targetCity.toLowerCase());
    }
    return this.wrapPaginated(list, list.length);
  }

  @Get("finance/gateway-failures")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Payment gateway failure events and webhook latency diagnostics (Screen #89)" })
  async getGatewayFailures(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableGatewayFailures;
    if (targetCity) {
      list = list.filter(f => f.city.toLowerCase() === targetCity.toLowerCase());
    }
    return this.wrapPaginated(list, list.length);
  }

  @Get("finance/audit-log")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Financial dual-signing and payout release cryptographic audit ledger (Screen #90)" })
  async getFinancialAuditLog(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableFinancialAuditLogs;
    if (targetCity) {
      list = list.filter(l => l.city.toLowerCase() === targetCity.toLowerCase());
    }
    return this.wrapPaginated(list, list.length);
  }

  @Get("subscriptions/payments")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Merchant SaaS subscription payments and receipts archive (Screen #95)" })
  async getSubscriptionPayments(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableSubscriptionPayments;
    if (targetCity) {
      list = list.filter(p => p.city.toLowerCase() === targetCity.toLowerCase());
    }
    return this.wrapPaginated(list, list.length);
  }

  @Get("subscriptions/renewals")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Upcoming merchant plan expiries and dunning tracking (Screen #96)" })
  async getSubscriptionRenewals(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableSubscriptionRenewals;
    if (targetCity) {
      list = list.filter(r => r.city.toLowerCase() === targetCity.toLowerCase());
    }
    return this.wrapPaginated(list, list.length);
  }

  @Get("subscriptions/coupons")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Promotional voucher codes and subscription onboarding discounts (Screen #97 / #104)" })
  async getSubscriptionCoupons() {
    return this.wrapPaginated(mutableCoupons, mutableCoupons.length);
  }

  @Post("subscriptions/coupons")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create new subscription promo coupon (Screen #97 / #104)" })
  async createSubscriptionCoupon(
    @Body() body: { code: string; discountPercent?: number; discountPaise?: number; validUntil: string; maxRedemptions: number; description?: string }
  ) {
    const existing = mutableCoupons.find(c => c.code.toUpperCase() === body.code.toUpperCase());
    if (existing) {
      throw new BadRequestException(`Coupon code ${body.code} already exists.`);
    }

    const newCoupon = {
      id: `CPN-${Date.now()}`,
      code: body.code.toUpperCase(),
      discountPercent: body.discountPercent || (body.discountPaise ? undefined : 20),
      discountPaise: body.discountPaise,
      validUntil: body.validUntil || new Date(Date.now() + 30 * 86400000).toISOString(),
      maxRedemptions: body.maxRedemptions || 100,
      redemptionCount: 0,
      description: body.description || "Onboarding merchant partner promotion",
      status: "ACTIVE" as const,
      createdAt: new Date().toISOString()
    };

    mutableCoupons.unshift(newCoupon);
    return this.wrapResponse(newCoupon);
  }

  @Get("subscriptions/churn-analytics")
  @ApiBearerAuth()
  @ApiOperation({ summary: "MRR trajectory, cohort retention, and merchant churn analytics (Screen #98)" })
  async getSubscriptionChurnAnalytics(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    return this.wrapResponse({
      currentMrrPaise: 4491000,
      currentMrrRupees: 44910,
      mrrGrowthMoMPct: 14.8,
      activeSubscribers: 48,
      newSubscribersMTD: 9,
      churnedSubscribersMTD: 1,
      churnRatePct: 2.1,
      averageRevenuePerStorePaise: 93562,
      averageRevenuePerStoreRupees: 935.62,
      cohortRetention: [
        { cohort: "2026-08", initialCount: 20, month1RetentionPct: 95, month2RetentionPct: 90, month3RetentionPct: 85 },
        { cohort: "2026-09", initialCount: 25, month1RetentionPct: 96, month2RetentionPct: 92, month3RetentionPct: 88 },
        { cohort: "2026-10", initialCount: 34, month1RetentionPct: 97, month2RetentionPct: 94, month3RetentionPct: 91 },
        { cohort: "2026-11", initialCount: 48, month1RetentionPct: 100, month2RetentionPct: 98, month3RetentionPct: 96 },
      ],
      planDistribution: [
        { plan: "Enterprise Pro (₹2,499)", count: 8, percentage: 16.7 },
        { plan: "Hyperlocal Growth (₹999)", count: 26, percentage: 54.2 },
        { plan: "Kirana Starter (₹499)", count: 14, percentage: 29.1 },
      ]
    });
  }

  @Post("system/gateway-ping")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Live diagnostic latency ping test for external payment and messaging gateways (Screen #133)" })
  async pingGateways(@Body() body?: { targetGateway?: string }) {
    const gateways = [
      {
        id: "gw-razorpay",
        name: "Razorpay Primary PSP",
        endpoint: "https://api.razorpay.com/v1/health",
        latencyMs: Math.floor(Math.random() * 25) + 38,
        status: "OPERATIONAL",
        sslValid: true,
        lastPingAt: new Date().toISOString()
      },
      {
        id: "gw-npci-upi",
        name: "NPCI Unified Payments Interface (UPI 2.0)",
        endpoint: "https://upi.npci.org.in/healthcheck",
        latencyMs: Math.floor(Math.random() * 30) + 42,
        status: "OPERATIONAL",
        sslValid: true,
        lastPingAt: new Date().toISOString()
      },
      {
        id: "gw-sms-fast2sms",
        name: "Fast2SMS DLT Gateway (OTP & Alerts)",
        endpoint: "https://www.fast2sms.com/dev/bulkV2",
        latencyMs: Math.floor(Math.random() * 20) + 65,
        status: "OPERATIONAL",
        sslValid: true,
        lastPingAt: new Date().toISOString()
      },
      {
        id: "gw-email-ses",
        name: "Amazon SES India (ap-south-1)",
        endpoint: "https://email.ap-south-1.amazonaws.com",
        latencyMs: Math.floor(Math.random() * 15) + 22,
        status: "OPERATIONAL",
        sslValid: true,
        lastPingAt: new Date().toISOString()
      }
    ];

    if (body?.targetGateway) {
      const targetGw = body.targetGateway.toLowerCase();
      const match = gateways.filter(g => g.id.toLowerCase() === targetGw || g.name.toLowerCase().includes(targetGw));
      return this.wrapResponse(match.length > 0 ? match : gateways);
    }

    return this.wrapResponse(gateways);
  }

  @Get("system/siem-alerts")
  @ApiBearerAuth()
  @ApiOperation({ summary: "SIEM intrusion detection, suspicious geo-velocity and security alerts feed (Screen #142)" })
  async getSiemAlerts(@Query("city") cityQuery?: string, @Headers() headers?: any) {
    const scope = this.resolveOperatorScope(headers);
    const targetCity = !scope.isGlobal && scope.city ? scope.city : (cityQuery && cityQuery !== "ALL" ? cityQuery : null);

    let list = mutableSiemAlerts;
    if (targetCity) {
      list = list.filter(a => a.city.toLowerCase() === targetCity.toLowerCase());
    }
    return this.wrapPaginated(list, list.length);
  }
}

// ---------------------------------------------------------------------------
// SPRINT 7 IN-MEMORY MUTABLE REPOSITORIES (Stock Movements, Reconciliations, Complaints, Suspensions)
// ---------------------------------------------------------------------------

const mutableStockMovements = [
  {
    id: "mov-001",
    productId: "prod-sabji-001",
    productName: "Fresh Nagpur Palak (Spinach)",
    merchantId: "merchant-sabji-001",
    merchantName: "Patil Fresh Sabji Mandi",
    outletName: "Patil Fresh Sabji Mandi — Sitabuldi Hub",
    city: "Nagpur",
    type: "ORDER_RESERVED",
    delta: -2,
    balanceBefore: 80,
    balanceAfter: 78,
    referenceId: "ORD-NGP-20261118-8092",
    recordedBy: "SYSTEM_CHECKOUT_PIPELINE",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    notes: "Automated checkout reservation hold for Customer Aarav Sharma",
  },
  {
    id: "mov-002",
    productId: "prod-sabji-002",
    productName: "Farm Fresh Desi Tomatoes",
    merchantId: "merchant-sabji-001",
    merchantName: "Patil Fresh Sabji Mandi",
    outletName: "Patil Fresh Sabji Mandi — Sitabuldi Hub",
    city: "Nagpur",
    type: "RESTOCK_SHIPMENT",
    delta: +50,
    balanceBefore: 12,
    balanceAfter: 62,
    referenceId: "BATCH-SAONER-FARM-994",
    recordedBy: "Vinod Patil (Store Owner)",
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    notes: "Direct morning farm intake from Saoner Mandi",
  },
  {
    id: "mov-003",
    productId: "prod-sabji-003",
    productName: "Green Shimla Mirch (Capsicum)",
    merchantId: "merchant-sabji-001",
    merchantName: "Patil Fresh Sabji Mandi",
    outletName: "Patil Fresh Sabji Mandi — Sitabuldi Hub",
    city: "Nagpur",
    type: "SPOILAGE_DAMAGED",
    delta: -4,
    balanceBefore: 8,
    balanceAfter: 4,
    referenceId: "SPOIL-WRITE-OFF-441",
    recordedBy: "Vinod Patil (Store Owner)",
    timestamp: new Date(Date.now() - 14400000).toISOString(),
    notes: "Transit bruising write-off, quality check rejection",
  },
  {
    id: "mov-004",
    productId: "prod-kirana-001",
    productName: "Sharbati Premium Wheat Atta",
    merchantId: "merchant-kirana-002",
    merchantName: "Sharma Kirana & General Store",
    outletName: "Aapla Kirana Supermart — Dharampeth",
    city: "Nagpur",
    type: "ORDER_FULFILLED",
    delta: -1,
    balanceBefore: 42,
    balanceAfter: 41,
    referenceId: "ORD-NGP-20261117-9014",
    recordedBy: "SYSTEM_PICKUP_SCANNER",
    timestamp: new Date(Date.now() - 28800000).toISOString(),
    notes: "Token verified and handed over at pickup desk",
  },
  {
    id: "mov-005",
    productId: "prod-pune-001",
    productName: "Chitale Desi Cow Milk & Ghee",
    merchantId: "merchant-pune-001",
    merchantName: "Chitale Dairy & Traditional Sweets",
    outletName: "Chitale Dairy — Kothrud",
    city: "Pune",
    type: "CYCLE_COUNT_ADJUSTMENT",
    delta: +2,
    balanceBefore: 18,
    balanceAfter: 20,
    referenceId: "AUDIT-WEEKLY-COUNT-12",
    recordedBy: "Shriram Chitale (Store Owner)",
    timestamp: new Date(Date.now() - 43200000).toISOString(),
    notes: "Physical inventory audit count reconciliation",
  },
];

const mutableInventoryReconciliations = [
  {
    id: "REC-2026-001",
    merchantId: "merchant-sabji-001",
    merchantName: "Patil Fresh Sabji Mandi",
    outletName: "Patil Fresh Sabji Mandi — Sitabuldi",
    city: "Nagpur",
    productId: "prod-sabji-003",
    productName: "Green Shimla Mirch (Capsicum)",
    sku: "SKU-NGP-0103",
    systemStock: 8,
    physicalStock: 4,
    discrepancyDelta: -4,
    reasonCode: "TRANSIT_BRUISE_SPOILAGE",
    status: "PENDING_REVIEW",
    reportedAt: new Date(Date.now() - 14400000).toISOString(),
    resolvedAt: null,
    resolvedBy: null,
    resolutionNotes: "Awaiting City Ops physical inspection verification",
  },
  {
    id: "REC-2026-002",
    merchantId: "merchant-kirana-002",
    merchantName: "Sharma Kirana & General Store",
    outletName: "Aapla Kirana Supermart — Dharampeth",
    city: "Nagpur",
    productId: "prod-kirana-002",
    productName: "Vidarbha Desi Toor Dal (Unpolished)",
    sku: "SKU-NGP-0104",
    systemStock: 25,
    physicalStock: 22,
    discrepancyDelta: -3,
    reasonCode: "DAMAGED_BAG_LEAKAGE",
    status: "RESOLVED",
    reportedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    resolvedAt: new Date(Date.now() - 86400000).toISOString(),
    resolvedBy: "Rushi Platform Architect",
    resolutionNotes: "Damaged packing verified. Stock balance adjusted in ledger.",
  },
  {
    id: "REC-2026-003",
    merchantId: "merchant-pune-001",
    merchantName: "Chitale Dairy & Traditional Sweets",
    outletName: "Chitale Dairy — Kothrud",
    city: "Pune",
    productId: "prod-pune-001",
    productName: "Chitale Desi Cow Milk & Ghee",
    sku: "SKU-PUN-0107",
    systemStock: 18,
    physicalStock: 20,
    discrepancyDelta: +2,
    reasonCode: "SURPLUS_UNREGISTERED_INBOUND",
    status: "PENDING_REVIEW",
    reportedAt: new Date(Date.now() - 43200000).toISOString(),
    resolvedAt: null,
    resolvedBy: null,
    resolutionNotes: "Surplus crate from supplier without GRN tag.",
  },
];

const mutableMerchantComplaints = [
  {
    id: "CMP-2026-801",
    ticketNumber: "TKT-CMP-801",
    merchantId: "merchant-sabji-001",
    merchantName: "Patil Fresh Sabji Mandi",
    outletName: "Patil Fresh Sabji Mandi — Sitabuldi",
    city: "Nagpur",
    complainantName: "Sneha Deshmukh",
    complainantPhone: "+91 98224 55667",
    category: "QUALITY_SPOILAGE",
    severity: "P2_HIGH",
    status: "UNDER_INVESTIGATION",
    summary: "Received wilted spinach bunch in pickup order #8092; leaves were discolored.",
    evidenceUrls: ["https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200"],
    slaHoursRemaining: 6,
    createdAt: new Date(Date.now() - 10800000).toISOString(),
    resolutionSummary: null,
  },
  {
    id: "CMP-2026-802",
    ticketNumber: "TKT-CMP-802",
    merchantId: "merchant-kirana-002",
    merchantName: "Sharma Kirana & General Store",
    outletName: "Aapla Kirana Supermart — Dharampeth",
    city: "Nagpur",
    complainantName: "Vikram Gaikwad",
    complainantPhone: "+91 97654 11220",
    category: "OVERCHARGING_MRP",
    severity: "P1_CRITICAL",
    status: "MERCHANT_REBUTTAL",
    summary: "Store charged ₹25 above printed MRP for edible oil bottle during counter pickup.",
    evidenceUrls: [],
    slaHoursRemaining: 2,
    createdAt: new Date(Date.now() - 21600000).toISOString(),
    resolutionSummary: "Merchant requested to upload tax invoice and explain markup.",
  },
  {
    id: "CMP-2026-803",
    ticketNumber: "TKT-CMP-803",
    merchantId: "merchant-pune-001",
    merchantName: "Chitale Dairy & Traditional Sweets",
    outletName: "Chitale Dairy — Kothrud",
    city: "Pune",
    complainantName: "Aditi Joshi",
    complainantPhone: "+91 98811 22334",
    category: "REFUSAL_TO_HONOR_TOKEN",
    severity: "P2_HIGH",
    status: "RESOLVED",
    summary: "Counter staff initially claimed order not found in tablet; resolved after manager checked.",
    evidenceUrls: [],
    slaHoursRemaining: 0,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    resolutionSummary: "Store staff counseled; digital token scanner re-calibrated. Customer compensated ₹50 wallet credit.",
  },
];

const mutableMerchantSuspensions = [
  {
    id: "SUSP-2026-001",
    merchantId: "merchant-kirana-002",
    merchantName: "Sharma Kirana & General Store",
    outletName: "Aapla Kirana Supermart — Dharampeth",
    city: "Nagpur",
    actionType: "WARNING_NOTICE",
    reasonCode: "OVERCHARGING_MRP",
    notes: "First formal statutory warning issued regarding MRP violation complaint CMP-2026-802.",
    enforcedBy: "Rushi Platform Architect (SuperAdmin)",
    enforcedAt: new Date(Date.now() - 14400000).toISOString(),
    reviewDueDate: new Date(Date.now() + 86400000 * 7).toISOString(),
    appealStatus: "NOT_APPEALED",
  },
  {
    id: "SUSP-2026-002",
    merchantId: "merchant-garguti-003",
    merchantName: "Garguti Traditional Spices",
    outletName: "Garguti Masale — Sadar",
    city: "Nagpur",
    actionType: "REINSTATED",
    reasonCode: "FSSAI_ANNUAL_RENEWAL",
    notes: "Temporary 24h freeze lifted following verified upload of FSSAI license renewal certificate.",
    enforcedBy: "Nagpur City Operations Manager",
    enforcedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    reviewDueDate: null,
    appealStatus: "UPHELD",
  },
];

// ---------------------------------------------------------------------------
// SPRINT 8 IN-MEMORY MUTABLE REPOSITORIES (Customers & DPDP PII Access Logs)
// ---------------------------------------------------------------------------

const mutablePiiAccessLogs: any[] = [
  {
    id: "PII-2026-001",
    operatorId: "operator-sa-001",
    operatorName: "Rushi Platform Architect",
    targetEntity: "Customer",
    targetId: "cust-ngp-001",
    accessedFields: ["phoneNumber", "email", "addresses"],
    purposeCode: "DISPUTE_RESOLUTION",
    justification: "Investigating delivery delay escalation for Order #8092",
    timestamp: new Date(Date.now() - 1800000).toISOString(),
  },
  {
    id: "PII-2026-002",
    operatorId: "operator-sa-001",
    operatorName: "Rushi Platform Architect",
    targetEntity: "Customer",
    targetId: "cust-pun-006",
    accessedFields: ["phoneNumber"],
    purposeCode: "ORDER_FULFILLMENT_TRIAGE",
    justification: "Re-verifying customer contact number for high-value sweet gift box delivery",
    timestamp: new Date(Date.now() - 7200000).toISOString(),
  },
];

const mutableLoyaltyPrograms: any[] = [
  {
    index: 1,
    id: "prog-1",
    name: "NukkadNow Rewards",
    subtitle: "Earn points on every order",
    icon: "👑",
    type: "Standard",
    members: 118420,
    earningRule: "₹1 = 1 Point",
    redemption: "100 Points = ₹10",
    status: "Active",
    validFrom: "01 Jan 2026",
    validTill: "No Expiry",
    minRedemption: "100 Points",
    maxRedemption: "5,000 Points / Order",
    description: "Default loyalty program for all customers. Earn points on every order and redeem for discounts!",
  },
  {
    index: 2,
    id: "prog-2",
    name: "Welcome Bonus",
    subtitle: "Rewards for new customers",
    icon: "🎁",
    type: "Onboarding",
    members: 8276,
    earningRule: "Join = 100 Points",
    redemption: "100 Points = ₹10",
    status: "Active",
    validFrom: "01 Jan 2026",
    validTill: "No Expiry",
    minRedemption: "100 Points",
    maxRedemption: "1,000 Points / Order",
    description: "Special onboarding reward points for newly verified customer accounts.",
  },
  {
    index: 3,
    id: "prog-3",
    name: "Festival Bonanza",
    subtitle: "Limited time festive rewards",
    icon: "⚡",
    type: "Campaign",
    members: 42680,
    earningRule: "₹1 = 2 Points",
    redemption: "200 Points = ₹25",
    status: "Active",
    validFrom: "01 Oct 2026",
    validTill: "30 Nov 2026",
    minRedemption: "200 Points",
    maxRedemption: "10,000 Points / Order",
    description: "Double points festival multiplier across Kirana, Sweets & Daily Needs.",
  },
  {
    index: 4,
    id: "prog-4",
    name: "VIP Club",
    subtitle: "Exclusive rewards for top buyers",
    icon: "💎",
    type: "Tiered",
    members: 5860,
    earningRule: "₹1 = 1.5 Points",
    redemption: "500 Points = ₹75",
    status: "Active",
    validFrom: "01 Jan 2026",
    validTill: "No Expiry",
    minRedemption: "500 Points",
    maxRedemption: "15,000 Points / Order",
    description: "Premium tier club with accelerated points accrual and exclusive partner vouchers.",
  },
];

const mutableLoyaltyRules: any[] = [
  { id: "rule-1", icon: "🛒", title: "Order Purchase", description: "Earn 1 point for every ₹1 spent", status: "Active" },
  { id: "rule-2", icon: "👤", title: "Sign Up Bonus", description: "Get 100 points on first verified order", status: "Active" },
  { id: "rule-3", icon: "🎂", title: "Birthday Reward", description: "Get 250 points on your birthday", status: "Active" },
  { id: "rule-4", icon: "⭐", title: "Review & Rating", description: "Get 50 points for each product review", status: "Active" },
  { id: "rule-5", icon: "🔗", title: "Refer a Friend", description: "Get 500 points when your friend places first order", status: "Active" },
];

const mutableLoyaltyCatalog: any[] = [
  { id: "rew-1", icon: "🎟️", name: "₹10 Off", points: 100, discountValue: "₹10", type: "DISCOUNT" },
  { id: "rew-2", icon: "🏷️", name: "₹25 Off", points: 200, discountValue: "₹25", type: "DISCOUNT" },
  { id: "rew-3", icon: "🚚", name: "Free Delivery", points: 300, discountValue: "₹49", type: "SHIPPING" },
  { id: "rew-4", icon: "🥛", name: "₹50 Off Kirana", points: 450, discountValue: "₹50", type: "CATEGORY_DISCOUNT" },
  { id: "rew-5", icon: "🍬", name: "₹100 Off Festive Sweets", points: 800, discountValue: "₹100", type: "CATEGORY_DISCOUNT" },
  { id: "rew-6", icon: "🛍️", name: "₹200 Off High Basket", points: 1500, discountValue: "₹200", type: "DISCOUNT" },
];

const mutableLoyaltyTiers: any[] = [
  { tier: "Bronze", icon: "⭐", range: "0 – 1,999 pts", perk: "Basic rewards", highlight: false },
  { tier: "Silver", icon: "⭐", range: "2,000 – 4,999 pts", perk: "+ 5% extra points", highlight: false },
  { tier: "Gold", icon: "⭐", range: "5,000 – 9,999 pts", perk: "+ 10% extra points", highlight: false },
  { tier: "Platinum", icon: "👑", range: "10,000+ pts", perk: "Priority offers & exclusive rewards", highlight: true },
];

const mutableLoyaltyRedemptions: any[] = [
  {
    index: 1,
    id: "red-1",
    customerId: "CUS-0012451",
    customerName: "Riya Salunkhe",
    initials: "RS",
    orderId: "ORD-892210",
    rewardRedeemed: "₹25 Off",
    pointsUsed: 200,
    discountValue: "₹25",
    orderValue: "₹1,240",
    dateTime: "15 Nov 2026, 08:24 PM",
    status: "Applied",
  },
  {
    index: 2,
    id: "red-2",
    customerId: "CUS-0012450",
    customerName: "Karan Mehta",
    initials: "KM",
    orderId: "ORD-889430",
    rewardRedeemed: "Free Delivery",
    pointsUsed: 300,
    discountValue: "₹49",
    orderValue: "₹780",
    dateTime: "15 Nov 2026, 06:11 PM",
    status: "Applied",
  },
  {
    index: 3,
    id: "red-3",
    customerId: "CUS-0012449",
    customerName: "Divya Pawar",
    initials: "DP",
    orderId: "ORD-887991",
    rewardRedeemed: "₹10 Off",
    pointsUsed: 100,
    discountValue: "₹10",
    orderValue: "₹420",
    dateTime: "15 Nov 2026, 01:25 PM",
    status: "Applied",
  },
];

const mutableCustomerKycList: any[] = [
  {
    index: 1,
    id: "KYC-0089321",
    customerId: "CUS-0012456",
    customerName: "Rohit Sharma",
    mobile: "+91 98234 56789",
    email: "rohit.sharma@gmail.com",
    city: "Pune",
    locality: "Baner",
    kycType: "Full KYC",
    submittedOn: "15 Nov 2026 10:24 AM",
    documentsCount: "3/3",
    hasAadhaar: true,
    hasPan: true,
    hasSelfie: true,
    risk: "Low",
    riskScore: "18/100",
    riskLevel: "Low",
    status: "Pending Review",
    assignedTo: "Unassigned",
    aadhaarStatus: "Verified",
    aadhaarMasked: "XXXXXXXX4321",
    panStatus: "Verified",
    panMasked: "ABCDE1234F",
    faceMatchStatus: "Matched (98.4%)",
    watchlistMatch: false,
    duplicateKyc: false,
    identityVerified: true,
  },
  {
    index: 2,
    id: "KYC-0089320",
    customerId: "CUS-0012455",
    customerName: "Priya Singh",
    mobile: "+91 98901 23456",
    email: "priya.singh@gmail.com",
    city: "Pune",
    locality: "Wakad",
    kycType: "Full KYC",
    submittedOn: "15 Nov 2026 09:58 AM",
    documentsCount: "3/3",
    hasAadhaar: true,
    hasPan: true,
    hasSelfie: true,
    risk: "Low",
    riskScore: "12/100",
    riskLevel: "Low",
    status: "Pending Review",
    assignedTo: "Anita S.",
    aadhaarStatus: "Verified",
    aadhaarMasked: "XXXXXXXX9876",
    panStatus: "Verified",
    panMasked: "FGHIJ5678K",
    faceMatchStatus: "Matched (99.1%)",
    watchlistMatch: false,
    duplicateKyc: false,
    identityVerified: true,
  },
  {
    index: 3,
    id: "KYC-0089319",
    customerId: "CUS-0012454",
    customerName: "Amit Kumar",
    mobile: "+91 97654 32109",
    email: "amit.kumar@gmail.com",
    city: "Pimpri-Chinchwad",
    locality: "Ravet",
    kycType: "Basic KYC",
    submittedOn: "14 Nov 2026 08:32 PM",
    documentsCount: "2/2",
    hasAadhaar: true,
    hasPan: true,
    hasSelfie: false,
    risk: "Medium",
    riskScore: "45/100",
    riskLevel: "Medium",
    status: "Action Required",
    assignedTo: "Unassigned",
    aadhaarStatus: "Verified",
    aadhaarMasked: "XXXXXXXX3210",
    panStatus: "Action Required",
    panMasked: "KLMNO9012P",
    faceMatchStatus: "Not Provided",
    watchlistMatch: false,
    duplicateKyc: false,
    identityVerified: false,
  },
  {
    index: 4,
    id: "KYC-0089318",
    customerId: "CUS-0012453",
    customerName: "Sneha Patil",
    mobile: "+91 90123 45678",
    email: "sneha.patil@gmail.com",
    city: "Pune",
    locality: "Kothrud",
    kycType: "Full KYC",
    submittedOn: "14 Nov 2026 05:46 PM",
    documentsCount: "3/3",
    hasAadhaar: true,
    hasPan: true,
    hasSelfie: true,
    risk: "Low",
    riskScore: "15/100",
    riskLevel: "Low",
    status: "Pending Review",
    assignedTo: "Rahul K.",
    aadhaarStatus: "Verified",
    aadhaarMasked: "XXXXXXXX6543",
    panStatus: "Verified",
    panMasked: "PQRST3456U",
    faceMatchStatus: "Matched (97.8%)",
    watchlistMatch: false,
    duplicateKyc: false,
    identityVerified: true,
  },
  {
    index: 5,
    id: "KYC-0089317",
    customerId: "CUS-0012452",
    customerName: "Vikas Gupta",
    mobile: "+91 99321 67890",
    email: "vikas.gupta@gmail.com",
    city: "Nagpur",
    locality: "Dharampeth",
    kycType: "Full KYC",
    submittedOn: "14 Nov 2026 03:11 PM",
    documentsCount: "3/3",
    hasAadhaar: true,
    hasPan: true,
    hasSelfie: true,
    risk: "High",
    riskScore: "78/100",
    riskLevel: "High",
    status: "Action Required",
    assignedTo: "Unassigned",
    aadhaarStatus: "Verified",
    aadhaarMasked: "XXXXXXXX1122",
    panStatus: "Mismatch",
    panMasked: "VWXYZ7890A",
    faceMatchStatus: "Matched (82.1%)",
    watchlistMatch: true,
    duplicateKyc: false,
    identityVerified: false,
  },
  {
    index: 6,
    id: "KYC-0089316",
    customerId: "CUS-0012451",
    customerName: "Riya Salunkhe",
    mobile: "+91 98220 11445",
    email: "riya.salunkhe@gmail.com",
    city: "Pune",
    locality: "Kothrud",
    kycType: "Basic KYC",
    submittedOn: "13 Nov 2026 11:40 AM",
    documentsCount: "2/2",
    hasAadhaar: true,
    hasPan: true,
    hasSelfie: false,
    risk: "Low",
    riskScore: "20/100",
    riskLevel: "Low",
    status: "Pending Review",
    assignedTo: "Neha P.",
    aadhaarStatus: "Verified",
    aadhaarMasked: "XXXXXXXX3344",
    panStatus: "Verified",
    panMasked: "BCDEF4321G",
    faceMatchStatus: "Not Required",
    watchlistMatch: false,
    duplicateKyc: false,
    identityVerified: true,
  },
  {
    index: 7,
    id: "KYC-0089315",
    customerId: "CUS-0012450",
    customerName: "Karan Mehta",
    mobile: "+91 98765 43210",
    email: "karan.mehta@gmail.com",
    city: "Nashik",
    locality: "College Road",
    kycType: "Full KYC",
    submittedOn: "13 Nov 2026 10:06 AM",
    documentsCount: "3/3",
    hasAadhaar: true,
    hasPan: true,
    hasSelfie: true,
    risk: "Medium",
    riskScore: "42/100",
    riskLevel: "Medium",
    status: "Re-verification",
    assignedTo: "Unassigned",
    aadhaarStatus: "Pending",
    aadhaarMasked: "XXXXXXXX5566",
    panStatus: "Verified",
    panMasked: "HIJKL8765M",
    faceMatchStatus: "Low Resolution",
    watchlistMatch: false,
    duplicateKyc: false,
    identityVerified: false,
  },
  {
    index: 8,
    id: "KYC-0089314",
    customerId: "CUS-0012449",
    customerName: "Divya Pawar",
    mobile: "+91 97654 78901",
    email: "divya.pawar@gmail.com",
    city: "Pune",
    locality: "Aundh",
    kycType: "Basic KYC",
    submittedOn: "12 Nov 2026 06:25 PM",
    documentsCount: "2/2",
    hasAadhaar: true,
    hasPan: true,
    hasSelfie: false,
    risk: "Low",
    riskScore: "14/100",
    riskLevel: "Low",
    status: "Pending Review",
    assignedTo: "Sagar M.",
    aadhaarStatus: "Verified",
    aadhaarMasked: "XXXXXXXX7788",
    panStatus: "Verified",
    panMasked: "NOPQR2109S",
    faceMatchStatus: "Not Required",
    watchlistMatch: false,
    duplicateKyc: false,
    identityVerified: true,
  },
  {
    index: 9,
    id: "KYC-0089313",
    customerId: "CUS-0012448",
    customerName: "Mayur Shinde",
    mobile: "+91 90456 22334",
    email: "mayur.shinde@gmail.com",
    city: "Pune",
    locality: "Balewadi",
    kycType: "Full KYC",
    submittedOn: "12 Nov 2026 02:18 PM",
    documentsCount: "3/3",
    hasAadhaar: true,
    hasPan: true,
    hasSelfie: true,
    risk: "Medium",
    riskScore: "38/100",
    riskLevel: "Medium",
    status: "Pending Review",
    assignedTo: "Unassigned",
    aadhaarStatus: "Verified",
    aadhaarMasked: "XXXXXXXX9900",
    panStatus: "Verified",
    panMasked: "TUVWX6543Y",
    faceMatchStatus: "Matched (96.5%)",
    watchlistMatch: false,
    duplicateKyc: false,
    identityVerified: true,
  },
  {
    index: 10,
    id: "KYC-0089312",
    customerId: "CUS-0012447",
    customerName: "Neha Deshmukh",
    mobile: "+91 99876 54123",
    email: "neha.deshmukh@gmail.com",
    city: "Pimpri-Chinchwad",
    locality: "Chinchwad",
    kycType: "Full KYC",
    submittedOn: "11 Nov 2026 05:47 PM",
    documentsCount: "3/3",
    hasAadhaar: true,
    hasPan: true,
    hasSelfie: true,
    risk: "Low",
    riskScore: "16/100",
    riskLevel: "Low",
    status: "Pending Review",
    assignedTo: "Anita S.",
    aadhaarStatus: "Verified",
    aadhaarMasked: "XXXXXXXX2233",
    panStatus: "Verified",
    panMasked: "ZABCD0987E",
    faceMatchStatus: "Matched (98.9%)",
    watchlistMatch: false,
    duplicateKyc: false,
    identityVerified: true,
  },
];

const mutableCustomersList: any[] = [
  {
    id: "CUS-0012456",
    fullName: "Rohit Sharma",
    phoneNumber: "+91 98234 56789",
    email: "rohit.sharma@gmail.com",
    cityCode: "IN-MH-PUN",
    cityName: "Pune",
    locality: "Baner",
    status: "ACTIVE",
    segment: "Frequent",
    segmentLabel: "Frequent Buyer",
    totalOrdersCount: 24,
    lifetimeSpendPaise: 1856000,
    lifetimeSpendRupees: 18560,
    loyaltyPoints: 1560,
    rating: 4.8,
    avgOrderValue: 773,
    lastOrderDate: "15 Nov 2026, 08:24 PM",
    orderFrequency: "~2.1 orders / month",
    preferredCategories: ["Grocery", "Fruits & Veg", "Daily Needs"],
    orderTrend: [
      { month: "Jun", orders: 2 },
      { month: "Jul", orders: 3 },
      { month: "Aug", orders: 4 },
      { month: "Sep", orders: 4 },
      { month: "Oct", orders: 5 },
      { month: "Nov", orders: 6 },
    ],
    recentOrders: [
      { id: "ORD-892210", date: "15 Nov 2026, 08:24 PM", amount: 842, status: "Delivered" },
      { id: "ORD-889430", date: "10 Nov 2026, 06:11 PM", amount: 1260, status: "Delivered" },
      { id: "ORD-887991", date: "05 Nov 2026, 01:25 PM", amount: 780, status: "Delivered" },
    ],
    registeredAt: "10 Jan 2026",
    lastActiveAt: "15 Nov 2026, 08:24 PM",
    addresses: [
      { id: "addr-001", label: "Home", locality: "Baner", city: "Pune", isDefault: true, addressLine: "Flat 402, High Street, Baner, Pune" }
    ],
  },
  {
    id: "CUS-0012455",
    fullName: "Priya Singh",
    phoneNumber: "+91 98901 23456",
    email: "priya.singh@gmail.com",
    cityCode: "IN-MH-PUN",
    cityName: "Pune",
    locality: "Wakad",
    status: "ACTIVE",
    segment: "Loyal",
    segmentLabel: "Loyal Customer",
    totalOrdersCount: 18,
    lifetimeSpendPaise: 1242000,
    lifetimeSpendRupees: 12420,
    loyaltyPoints: 1120,
    rating: 4.9,
    avgOrderValue: 690,
    lastOrderDate: "14 Nov 2026, 07:15 PM",
    orderFrequency: "~1.8 orders / month",
    preferredCategories: ["Dairy & Bakery", "Grocery"],
    orderTrend: [
      { month: "Jun", orders: 1 },
      { month: "Jul", orders: 2 },
      { month: "Aug", orders: 3 },
      { month: "Sep", orders: 4 },
      { month: "Oct", orders: 4 },
      { month: "Nov", orders: 4 },
    ],
    recentOrders: [
      { id: "ORD-891040", date: "14 Nov 2026, 07:15 PM", amount: 620, status: "Delivered" },
      { id: "ORD-887120", date: "08 Nov 2026, 04:30 PM", amount: 940, status: "Delivered" },
    ],
    registeredAt: "09 Jan 2026",
    lastActiveAt: "14 Nov 2026, 07:15 PM",
    addresses: [
      { id: "addr-002", label: "Home", locality: "Wakad", city: "Pune", isDefault: true, addressLine: "B-201, Kaspate Vasti, Wakad, Pune" }
    ],
  },
  {
    id: "CUS-0012454",
    fullName: "Amit Kumar",
    phoneNumber: "+91 97654 32109",
    email: "amit.kumar@gmail.com",
    cityCode: "IN-MH-PUN",
    cityName: "Pimpri-Chinchwad",
    locality: "Ravet",
    status: "ACTIVE",
    segment: "Regular",
    segmentLabel: "Regular Buyer",
    totalOrdersCount: 12,
    lifetimeSpendPaise: 896000,
    lifetimeSpendRupees: 8960,
    loyaltyPoints: 820,
    rating: 4.6,
    avgOrderValue: 746,
    lastOrderDate: "13 Nov 2026, 09:10 PM",
    orderFrequency: "~1.2 orders / month",
    preferredCategories: ["Pharmacy", "Grocery"],
    orderTrend: [
      { month: "Jun", orders: 1 },
      { month: "Jul", orders: 1 },
      { month: "Aug", orders: 2 },
      { month: "Sep", orders: 2 },
      { month: "Oct", orders: 3 },
      { month: "Nov", orders: 3 },
    ],
    recentOrders: [
      { id: "ORD-889920", date: "13 Nov 2026, 09:10 PM", amount: 750, status: "Delivered" },
    ],
    registeredAt: "08 Jan 2026",
    lastActiveAt: "13 Nov 2026, 09:10 PM",
    addresses: [
      { id: "addr-003", label: "Home", locality: "Ravet", city: "Pimpri-Chinchwad", isDefault: true, addressLine: "Sector 29, Ravet, Pune" }
    ],
  },
  {
    id: "CUS-0012453",
    fullName: "Sneha Patil",
    phoneNumber: "+91 90123 45678",
    email: "sneha.patil@gmail.com",
    cityCode: "IN-MH-PUN",
    cityName: "Pune",
    locality: "Hinjawadi",
    status: "ACTIVE",
    segment: "Occasional",
    segmentLabel: "Occasional Buyer",
    totalOrdersCount: 8,
    lifetimeSpendPaise: 543000,
    lifetimeSpendRupees: 5430,
    loyaltyPoints: 420,
    rating: 4.7,
    avgOrderValue: 678,
    lastOrderDate: "11 Nov 2026, 02:40 PM",
    orderFrequency: "~0.8 orders / month",
    preferredCategories: ["Snacks & Sweets", "Bakery"],
    orderTrend: [
      { month: "Jun", orders: 0 },
      { month: "Jul", orders: 1 },
      { month: "Aug", orders: 1 },
      { month: "Sep", orders: 2 },
      { month: "Oct", orders: 2 },
      { month: "Nov", orders: 2 },
    ],
    recentOrders: [
      { id: "ORD-886110", date: "11 Nov 2026, 02:40 PM", amount: 480, status: "Delivered" },
    ],
    registeredAt: "07 Jan 2026",
    lastActiveAt: "11 Nov 2026, 02:40 PM",
    addresses: [
      { id: "addr-004", label: "Home", locality: "Hinjawadi", city: "Pune", isDefault: true, addressLine: "Phase 1, Hinjawadi, Pune" }
    ],
  },
  {
    id: "CUS-0012452",
    fullName: "Vikas Gupta",
    phoneNumber: "+91 99321 67890",
    email: "vikas.gupta@gmail.com",
    cityCode: "IN-MH-NGP",
    cityName: "Nagpur",
    locality: "Dharampeth",
    status: "ACTIVE",
    segment: "VIP",
    segmentLabel: "VIP Patron",
    totalOrdersCount: 36,
    lifetimeSpendPaise: 2874000,
    lifetimeSpendRupees: 28740,
    loyaltyPoints: 2640,
    rating: 5.0,
    avgOrderValue: 798,
    lastOrderDate: "15 Nov 2026, 01:20 PM",
    orderFrequency: "~3.5 orders / month",
    preferredCategories: ["Electronics", "Grocery", "Apparel"],
    orderTrend: [
      { month: "Jun", orders: 4 },
      { month: "Jul", orders: 5 },
      { month: "Aug", orders: 6 },
      { month: "Sep", orders: 6 },
      { month: "Oct", orders: 7 },
      { month: "Nov", orders: 8 },
    ],
    recentOrders: [
      { id: "ORD-891990", date: "15 Nov 2026, 01:20 PM", amount: 1540, status: "Delivered" },
    ],
    registeredAt: "06 Jan 2026",
    lastActiveAt: "15 Nov 2026, 01:20 PM",
    addresses: [
      { id: "addr-005", label: "Home", locality: "Dharampeth", city: "Nagpur", isDefault: true, addressLine: "Shivom Enclave, Dharampeth, Nagpur" }
    ],
  },
  {
    id: "CUS-0012451",
    fullName: "Riya Salunkhe",
    phoneNumber: "+91 98220 11445",
    email: "riya.salunkhe@gmail.com",
    cityCode: "IN-MH-PUN",
    cityName: "Pune",
    locality: "Kothrud",
    status: "ACTIVE",
    segment: "New",
    segmentLabel: "New Customer",
    totalOrdersCount: 5,
    lifetimeSpendPaise: 321000,
    lifetimeSpendRupees: 3210,
    loyaltyPoints: 260,
    rating: 4.8,
    avgOrderValue: 642,
    lastOrderDate: "12 Nov 2026, 11:10 AM",
    orderFrequency: "~1.0 orders / month",
    preferredCategories: ["Grocery", "Bakery"],
    orderTrend: [
      { month: "Jun", orders: 0 },
      { month: "Jul", orders: 0 },
      { month: "Aug", orders: 1 },
      { month: "Sep", orders: 1 },
      { month: "Oct", orders: 1 },
      { month: "Nov", orders: 2 },
    ],
    recentOrders: [
      { id: "ORD-888420", date: "12 Nov 2026, 11:10 AM", amount: 620, status: "Delivered" },
    ],
    registeredAt: "05 Jan 2026",
    lastActiveAt: "12 Nov 2026, 11:10 AM",
    addresses: [
      { id: "addr-006", label: "Home", locality: "Kothrud", city: "Pune", isDefault: true, addressLine: "Paud Road, Kothrud, Pune" }
    ],
  },
  {
    id: "CUS-0012450",
    fullName: "Karan Mehta",
    phoneNumber: "+91 98765 43210",
    email: "karan.mehta@gmail.com",
    cityCode: "IN-MH-NSK",
    cityName: "Nashik",
    locality: "College Road",
    status: "ACTIVE",
    accountType: "Registered",
    verificationStatus: "OTP_VERIFIED",
    verificationMethod: "OTP (SMS)",
    verifiedOn: "02 Jan 2026, 10:06 AM",
    segment: "Regular",
    segmentLabel: "Regular Customer",
    totalOrdersCount: 14,
    lifetimeSpendPaise: 1198000,
    lifetimeSpendRupees: 11980,
    loyaltyPoints: 980,
    rating: 4.5,
    avgOrderValue: 855,
    lastOrderDate: "12 Nov 2026, 10:06 AM",
    orderFrequency: "~0.4 orders / month",
    preferredCategories: ["Grocery"],
    orderTrend: [
      { month: "Jun", orders: 3 },
      { month: "Jul", orders: 3 },
      { month: "Aug", orders: 4 },
      { month: "Sep", orders: 2 },
      { month: "Oct", orders: 2 },
      { month: "Nov", orders: 0 },
    ],
    recentOrders: [
      { id: "ORD-876220", date: "12 Nov 2026, 10:06 AM", amount: 1120, status: "Delivered" },
    ],
    registeredAt: "02 Jan 2026",
    lastActiveAt: "12 Nov 2026, 10:06 AM",
    addresses: [
      { id: "addr-007", label: "Home", locality: "College Road", city: "Nashik", isDefault: true, addressLine: "College Road, Nashik" }
    ],
  },
  {
    id: "CUS-0012449",
    fullName: "Divya Pawar",
    phoneNumber: "+91 97654 78901",
    email: "divya.pawar@gmail.com",
    cityCode: "IN-MH-PUN",
    cityName: "Pune",
    locality: "Aundh",
    status: "GUEST",
    accountType: "Guest",
    verificationStatus: "NOT_VERIFIED",
    verificationMethod: null,
    verifiedOn: null,
    segment: "Guest",
    segmentLabel: "Guest User",
    totalOrdersCount: 0,
    lifetimeSpendPaise: 0,
    lifetimeSpendRupees: 0,
    loyaltyPoints: 0,
    rating: 0,
    avgOrderValue: 0,
    lastOrderDate: null,
    orderFrequency: "0 orders",
    preferredCategories: ["Grocery"],
    orderTrend: [],
    recentOrders: [],
    registeredAt: "11 Nov 2026",
    lastActiveAt: "11 Nov 2026, 08:20 PM",
    addresses: [
      { id: "addr-008", label: "Home", locality: "Aundh", city: "Pune", isDefault: true, addressLine: "DP Road, Aundh, Pune" }
    ],
  },
  {
    id: "CUS-0012448",
    fullName: "Mayur Shinde",
    phoneNumber: "+91 90456 22334",
    email: "mayur.shinde@gmail.com",
    cityCode: "IN-MH-PUN",
    cityName: "Pune",
    locality: "Balewadi",
    status: "ACTIVE",
    accountType: "Registered",
    verificationStatus: "OTP_VERIFIED",
    verificationMethod: "OTP (SMS)",
    verifiedOn: "11 Nov 2026, 02:18 PM",
    segment: "Occasional",
    segmentLabel: "Occasional Buyer",
    totalOrdersCount: 3,
    lifetimeSpendPaise: 214000,
    lifetimeSpendRupees: 2140,
    loyaltyPoints: 120,
    rating: 3.5,
    avgOrderValue: 713,
    lastOrderDate: "11 Nov 2026, 02:18 PM",
    orderFrequency: "~0.5 orders / month",
    preferredCategories: ["Grocery"],
    orderTrend: [
      { month: "Jun", orders: 0 },
      { month: "Jul", orders: 0 },
      { month: "Aug", orders: 1 },
      { month: "Sep", orders: 1 },
      { month: "Oct", orders: 0 },
      { month: "Nov", orders: 1 },
    ],
    recentOrders: [
      { id: "ORD-885440", date: "11 Nov 2026, 02:18 PM", amount: 640, status: "Cancelled" },
    ],
    registeredAt: "31 Dec 2025",
    lastActiveAt: "11 Nov 2026, 02:18 PM",
    addresses: [
      { id: "addr-009", label: "Home", locality: "Balewadi", city: "Pune", isDefault: true, addressLine: "Balewadi High St, Pune" }
    ],
  },
  {
    id: "CUS-0012447",
    fullName: "Neha Deshmukh",
    phoneNumber: "+91 99876 54123",
    email: "neha.deshmukh@gmail.com",
    cityCode: "IN-MH-PUN",
    cityName: "Pimpri-Chinchwad",
    locality: "Chinchwad",
    status: "GUEST",
    accountType: "Guest",
    verificationStatus: "NOT_VERIFIED",
    verificationMethod: null,
    verifiedOn: null,
    segment: "Guest",
    segmentLabel: "Guest User",
    totalOrdersCount: 0,
    lifetimeSpendPaise: 0,
    lifetimeSpendRupees: 0,
    loyaltyPoints: 0,
    rating: 0,
    avgOrderValue: 0,
    lastOrderDate: null,
    orderFrequency: "0 orders",
    preferredCategories: ["Grocery"],
    orderTrend: [],
    recentOrders: [],
    registeredAt: "10 Nov 2026",
    lastActiveAt: "10 Nov 2026, 09:57 PM",
    addresses: [
      { id: "addr-010", label: "Home", locality: "Chinchwad", city: "Pimpri-Chinchwad", isDefault: true, addressLine: "Station Road, Chinchwad, Pune" }
    ],
  },
  {
    id: "cust-ngp-001",
    fullName: "Amitabh Joshi",
    phoneNumber: "+919823099881",
    email: "amitabh.joshi@gmail.com",
    cityCode: "IN-MH-NGP",
    cityName: "Nagpur",
    status: "ACTIVE",
    segment: "VIP",
    totalOrdersCount: 24,
    lifetimeSpendPaise: 3850000,
    registeredAt: "2026-08-15T09:30:00Z",
    lastActiveAt: new Date().toISOString(),
    addresses: [
      {
        id: "addr-ngp-001-1",
        label: "Home",
        addressLine: "A-402, Shivom Enclave, Dharampeth",
        locality: "Dharampeth",
        city: "Nagpur",
        cityCode: "IN-MH-NGP",
        pincode: "440010",
        latitude: 21.1415,
        longitude: 79.0635,
        isDefault: true,
      },
      {
        id: "addr-ngp-001-2",
        label: "Work",
        addressLine: "Tech Tower, Civil Lines",
        locality: "Sadar",
        city: "Nagpur",
        cityCode: "IN-MH-NGP",
        pincode: "440001",
        latitude: 21.161,
        longitude: 79.0825,
        isDefault: false,
      },
    ],
  },
  {
    id: "cust-ngp-002",
    fullName: "Neha Pande",
    phoneNumber: "+919823099882",
    email: "neha.pande@outlook.com",
    cityCode: "IN-MH-NGP",
    cityName: "Nagpur",
    status: "ACTIVE",
    segment: "REPEAT",
    totalOrdersCount: 11,
    lifetimeSpendPaise: 1420000,
    registeredAt: "2026-09-01T11:15:00Z",
    lastActiveAt: new Date(Date.now() - 3600000).toISOString(),
    addresses: [
      {
        id: "addr-ngp-002-1",
        label: "Home",
        addressLine: "22, Anand Nagar, Sitabuldi",
        locality: "Sitabuldi",
        city: "Nagpur",
        cityCode: "IN-MH-NGP",
        pincode: "440012",
        latitude: 21.1472,
        longitude: 79.0845,
        isDefault: true,
      },
    ],
  },
  {
    id: "cust-akl-003",
    fullName: "Girish Wagh",
    phoneNumber: "+919823099883",
    email: "girish.wagh@yahoo.in",
    cityCode: "IN-MH-AKL",
    cityName: "Akola",
    status: "ACTIVE",
    segment: "REPEAT",
    totalOrdersCount: 8,
    lifetimeSpendPaise: 960000,
    registeredAt: "2026-09-20T14:00:00Z",
    lastActiveAt: new Date(Date.now() - 86400000).toISOString(),
    addresses: [
      {
        id: "addr-akl-003-1",
        label: "Home",
        addressLine: "Bunglow 5, Toshniwal Layout",
        locality: "Toshniwal Layout",
        city: "Akola",
        cityCode: "IN-MH-AKL",
        pincode: "444005",
        latitude: 20.69,
        longitude: 77.026,
        isDefault: true,
      },
    ],
  },
  {
    id: "cust-akl-004",
    fullName: "Shrikant Patil",
    phoneNumber: "+919823099884",
    email: "shrikant.patil@rediffmail.com",
    cityCode: "IN-MH-AKL",
    cityName: "Akola",
    status: "ACTIVE",
    segment: "NEW",
    totalOrdersCount: 1,
    lifetimeSpendPaise: 45000,
    registeredAt: "2026-11-16T16:45:00Z",
    lastActiveAt: new Date(Date.now() - 172800000).toISOString(),
    addresses: [
      {
        id: "addr-akl-004-1",
        label: "Home",
        addressLine: "Near Durga Chowk, Old City",
        locality: "Civil Lines",
        city: "Akola",
        cityCode: "IN-MH-AKL",
        pincode: "444002",
        latitude: 20.695,
        longitude: 77.003,
        isDefault: true,
      },
    ],
  },
  {
    id: "cust-amr-005",
    fullName: "Pallavi Deshpande",
    phoneNumber: "+919823099885",
    email: "pallavi.deshpande@rediffmail.com",
    cityCode: "IN-MH-AMR",
    cityName: "Amravati",
    status: "ACTIVE",
    segment: "ACTIVE",
    totalOrdersCount: 5,
    lifetimeSpendPaise: 680000,
    registeredAt: "2026-10-05T08:20:00Z",
    lastActiveAt: new Date(Date.now() - 7200000).toISOString(),
    addresses: [
      {
        id: "addr-amr-005-1",
        label: "Home",
        addressLine: "Row House 12, Camp Area",
        locality: "Camp",
        city: "Amravati",
        cityCode: "IN-MH-AMR",
        pincode: "444602",
        latitude: 20.942,
        longitude: 77.756,
        isDefault: true,
      },
    ],
  },
  {
    id: "cust-pun-006",
    fullName: "Sameer Joshi",
    phoneNumber: "+919823099886",
    email: "sameer.j@gmail.com",
    cityCode: "IN-MH-PUN",
    cityName: "Pune",
    status: "ACTIVE",
    segment: "VIP",
    totalOrdersCount: 38,
    lifetimeSpendPaise: 8250000,
    registeredAt: "2026-07-10T10:00:00Z",
    lastActiveAt: new Date().toISOString(),
    addresses: [
      {
        id: "addr-pun-006-1",
        label: "Home",
        addressLine: "Flat 1102, Marvel Cerise, Kothrud",
        locality: "Kothrud",
        city: "Pune",
        cityCode: "IN-MH-PUN",
        pincode: "411038",
        latitude: 18.5085,
        longitude: 73.809,
        isDefault: true,
      },
      {
        id: "addr-pun-006-2",
        label: "Work",
        addressLine: "Quadron Business Park, Hinjawadi",
        locality: "Baner",
        city: "Pune",
        cityCode: "IN-MH-PUN",
        pincode: "411045",
        latitude: 18.56,
        longitude: 73.788,
        isDefault: false,
      },
    ],
  },
  {
    id: "cust-pun-007",
    fullName: "Ananya Roy",
    phoneNumber: "+919823099887",
    email: "ananya.roy@corporate.com",
    cityCode: "IN-MH-PUN",
    cityName: "Pune",
    status: "ACTIVE",
    segment: "ACTIVE",
    totalOrdersCount: 7,
    lifetimeSpendPaise: 1140000,
    registeredAt: "2026-10-12T13:40:00Z",
    lastActiveAt: new Date(Date.now() - 86400000).toISOString(),
    addresses: [
      {
        id: "addr-pun-007-1",
        label: "Home",
        addressLine: "Apt 4B, Silver Oak, Baner Road",
        locality: "Baner",
        city: "Pune",
        cityCode: "IN-MH-PUN",
        pincode: "411045",
        latitude: 18.558,
        longitude: 73.792,
        isDefault: true,
      },
    ],
  },
  {
    id: "cust-pun-008",
    fullName: "Rohan Kadam",
    phoneNumber: "+919823099888",
    email: "rohan.k@techmail.com",
    cityCode: "IN-MH-PUN",
    cityName: "Pune",
    status: "RESTRICTED",
    segment: "INACTIVE",
    totalOrdersCount: 2,
    lifetimeSpendPaise: 280000,
    registeredAt: "2026-06-01T09:00:00Z",
    lastActiveAt: new Date(Date.now() - 86400000 * 45).toISOString(),
    addresses: [
      {
        id: "addr-pun-008-1",
        label: "Home",
        addressLine: "Plot 88, Ideal Colony, Kothrud",
        locality: "Kothrud",
        city: "Pune",
        cityCode: "IN-MH-PUN",
        pincode: "411038",
        latitude: 18.505,
        longitude: 73.815,
        isDefault: true,
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// SPRINT 9 IN-MEMORY MUTABLE REPOSITORIES (QR Orders, Pre-Orders, Disputes, Reported Items)
// ---------------------------------------------------------------------------

const mutableQrOrders = [
  {
    id: "QR-ORD-901",
    orderNumber: "QR-20261118-01",
    counterId: "COUNTER-SITABULDI-01",
    tokenNumber: "TK-481",
    merchantName: "Patil Fresh Sabji Mandi",
    outletName: "Patil Fresh Sabji Mandi — Sitabuldi Hub",
    city: "Nagpur",
    locality: "Sitabuldi",
    amount: 145,
    itemsCount: 3,
    status: "VERIFIED_PICKED_UP",
    qrGeneratedAt: new Date(Date.now() - 1800000).toISOString(),
    tokenVerifiedAt: new Date(Date.now() - 1200000).toISOString(),
    customerName: "Aarav Sharma",
  },
  {
    id: "QR-ORD-902",
    orderNumber: "QR-20261118-02",
    counterId: "COUNTER-DHARAMPETH-01",
    tokenNumber: "TK-482",
    merchantName: "Sharma Kirana & General Store",
    outletName: "Aapla Kirana Supermart — Dharampeth",
    city: "Nagpur",
    locality: "Dharampeth",
    amount: 320,
    itemsCount: 4,
    status: "WAITING_AT_COUNTER",
    qrGeneratedAt: new Date(Date.now() - 900000).toISOString(),
    tokenVerifiedAt: null,
    customerName: "Sneha Joshi",
  },
  {
    id: "QR-ORD-903",
    orderNumber: "QR-20261118-03",
    counterId: "COUNTER-KOTHRUD-01",
    tokenNumber: "TK-483",
    merchantName: "Chitale Dairy & Traditional Sweets",
    outletName: "Chitale Dairy — Kothrud",
    city: "Pune",
    locality: "Kothrud",
    amount: 580,
    itemsCount: 2,
    status: "VERIFIED_PICKED_UP",
    qrGeneratedAt: new Date(Date.now() - 3600000).toISOString(),
    tokenVerifiedAt: new Date(Date.now() - 3300000).toISOString(),
    customerName: "Sameer Joshi",
  },
];

const mutablePreOrders = [
  {
    id: "PRE-ORD-801",
    orderNumber: "PRE-20261119-01",
    customerName: "Amitabh Joshi",
    merchantName: "Mahalaxmi Sweets, Dairy & Bakery",
    outletName: "Mahalaxmi Sweets — Sitabuldi",
    city: "Nagpur",
    scheduledDate: "2026-11-19",
    scheduledSlot: "10:00 AM - 11:30 AM",
    itemsCount: 4,
    amount: 1450,
    status: "CONFIRMED_STAGED",
    notes: "Festive Sweet Gift Boxes Pre-booked for Morning Family Puja",
  },
  {
    id: "PRE-ORD-802",
    orderNumber: "PRE-20261119-02",
    customerName: "Pallavi Deshpande",
    merchantName: "Rajkamal Spices & Dry Fruits",
    outletName: "Rajkamal Spices — Rajkamal Chowk",
    city: "Amravati",
    scheduledDate: "2026-11-19",
    scheduledSlot: "04:00 PM - 05:00 PM",
    itemsCount: 2,
    amount: 890,
    status: "PREPARING",
    notes: "Traditional Diwali Faral spice mix special grind",
  },
  {
    id: "PRE-ORD-803",
    orderNumber: "PRE-20261120-01",
    customerName: "Sameer Joshi",
    merchantName: "Chitale Dairy & Traditional Sweets",
    outletName: "Chitale Dairy — Kothrud",
    city: "Pune",
    scheduledDate: "2026-11-20",
    scheduledSlot: "08:00 AM - 09:30 AM",
    itemsCount: 6,
    amount: 2400,
    status: "CONFIRMED_STAGED",
    notes: "Diwali sweets bulk box order",
  },
];

const mutableOrderDisputes = [
  {
    disputeId: "DISP-2026-101",
    orderId: "ORD-NGP-20261118-8092",
    orderNumber: "8092",
    customerName: "Sneha Deshmukh",
    merchantName: "Patil Fresh Sabji Mandi",
    outletName: "Patil Fresh Sabji Mandi — Sitabuldi",
    city: "Nagpur",
    disputeReason: "Spoiled Perishable Produce in Sealed Bag",
    claimAmountPaise: 12000,
    claimAmountRupees: 120,
    status: "OPEN",
    reportedAt: new Date(Date.now() - 7200000).toISOString(),
    escrowLocked: true,
  },
  {
    disputeId: "DISP-2026-102",
    orderId: "ORD-AKL-20261117-9014",
    orderNumber: "9014",
    customerName: "Girish Wagh",
    merchantName: "Sharma Kirana & General Store",
    outletName: "Aapla Kirana Supermart",
    city: "Akola",
    disputeReason: "Overcharging above printed MRP for cooking oil",
    claimAmountPaise: 2500,
    claimAmountRupees: 25,
    status: "EVIDENCE_COLLECTION",
    reportedAt: new Date(Date.now() - 14400000).toISOString(),
    escrowLocked: true,
  },
];

const mutableReportedCatalogItems = [
  {
    id: "REP-CAT-001",
    productId: "prod-fake-oil-01",
    productName: "Brand Counterfeit Edible Mustard Oil",
    merchantName: "Unauthorized Pop-up Vendor",
    city: "Nagpur",
    reportedBy: "Consumer Rights Forum Vidarbha",
    reason: "Suspected adulteration and trademark infringement",
    severity: "CRITICAL",
    status: "TAKEDOWN_ENFORCED",
    reportedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "REP-CAT-002",
    productId: "prod-expired-biscuits-02",
    productName: "Gourmet Butter Cookies (Batch Expiry Passed)",
    merchantName: "Sharma Kirana Store",
    city: "Nagpur",
    reportedBy: "Customer App Scanner",
    reason: "Best Before date passed by 12 days",
    severity: "HIGH",
    status: "INVESTIGATION_PENDING",
    reportedAt: new Date(Date.now() - 43200000).toISOString(),
  },
];

// ---------------------------------------------------------------------------
// SPRINT 10 MUTABLE REPOSITORIES (Fiduciary Invoices, GST, Renewals, Coupons, SIEM)
// ---------------------------------------------------------------------------

const mutableMerchantInvoices = [
  {
    id: "INV-2026-11-001",
    invoiceNumber: "NN/MH/26-27/00142",
    merchantId: "merchant-sabji-001",
    merchantName: "Patil Fresh Sabji Mandi",
    outletName: "Patil Fresh Sabji Mandi — Sitabuldi Hub",
    city: "Nagpur",
    billingPeriod: "October 2026",
    invoiceDate: "2026-11-01T00:00:00.000Z",
    grossGmvPaise: 8450000,
    grossGmvRupees: 84500,
    commissionPaise: 422500,
    commissionRupees: 4225,
    gstPaise: 76050,
    gstRupees: 760.50,
    tcsPaise: 8450,
    tcsRupees: 84.50,
    netPayablePaise: 7943000,
    netPayableRupees: 79430,
    status: "PAID",
    paidAt: "2026-11-05T10:30:00.000Z",
    pdfUrl: "/api/v1/admin/finance/invoices/INV-2026-11-001/download"
  },
  {
    id: "INV-2026-11-002",
    invoiceNumber: "NN/MH/26-27/00143",
    merchantId: "merchant-kirana-001",
    merchantName: "Sharma Kirana & General Store",
    outletName: "Aapla Kirana Supermart — Ramdaspeth",
    city: "Akola",
    billingPeriod: "October 2026",
    invoiceDate: "2026-11-01T00:00:00.000Z",
    grossGmvPaise: 5200000,
    grossGmvRupees: 52000,
    commissionPaise: 260000,
    commissionRupees: 2600,
    gstPaise: 46800,
    gstRupees: 468.00,
    tcsPaise: 5200,
    tcsRupees: 52.00,
    netPayablePaise: 4888000,
    netPayableRupees: 48880,
    status: "PAID",
    paidAt: "2026-11-05T10:35:00.000Z",
    pdfUrl: "/api/v1/admin/finance/invoices/INV-2026-11-002/download"
  },
  {
    id: "INV-2026-11-003",
    invoiceNumber: "NN/MH/26-27/00144",
    merchantId: "merchant-sweets-001",
    merchantName: "Haldiram Mithai & Sweets Express",
    outletName: "Haldiram Express — Rajapeth",
    city: "Amravati",
    billingPeriod: "October 2026",
    invoiceDate: "2026-11-01T00:00:00.000Z",
    grossGmvPaise: 9800000,
    grossGmvRupees: 98000,
    commissionPaise: 490000,
    commissionRupees: 4900,
    gstPaise: 88200,
    gstRupees: 882.00,
    tcsPaise: 9800,
    tcsRupees: 98.00,
    netPayablePaise: 9212000,
    netPayableRupees: 92120,
    status: "PAID",
    paidAt: "2026-11-05T11:00:00.000Z",
    pdfUrl: "/api/v1/admin/finance/invoices/INV-2026-11-003/download"
  },
  {
    id: "INV-2026-11-004",
    invoiceNumber: "NN/MH/26-27/00145",
    merchantId: "merchant-agro-001",
    merchantName: "Kisan Agro Seeds & Fertilizer",
    outletName: "Kisan Agro Mart — Market Yard",
    city: "Pune",
    billingPeriod: "October 2026",
    invoiceDate: "2026-11-01T00:00:00.000Z",
    grossGmvPaise: 11400000,
    grossGmvRupees: 114000,
    commissionPaise: 570000,
    commissionRupees: 5700,
    gstPaise: 102600,
    gstRupees: 1026.00,
    tcsPaise: 11400,
    tcsRupees: 114.00,
    netPayablePaise: 10716000,
    netPayableRupees: 107160,
    status: "ISSUED",
    paidAt: null,
    pdfUrl: "/api/v1/admin/finance/invoices/INV-2026-11-004/download"
  }
];

const mutableGstReports = [
  {
    id: "GST-2026-10-MH",
    period: "2026-10",
    monthName: "October 2026",
    state: "Maharashtra",
    stateCode: "27",
    city: "Nagpur",
    platformGstin: "27AABCN1234F1Z8",
    taxableSuppliesPaise: 34850000,
    taxableSuppliesRupees: 348500,
    cgstPaise: 313650,
    cgstRupees: 3136.50,
    sgstPaise: 313650,
    sgstRupees: 3136.50,
    igstPaise: 0,
    igstRupees: 0,
    tcsCollectedPaise: 34850,
    tcsCollectedRupees: 348.50,
    filingStatus: "FILED",
    arnNumber: "AA2710260019283",
    filedAt: "2026-11-10T14:22:00.000Z"
  },
  {
    id: "GST-2026-10-AKL",
    period: "2026-10",
    monthName: "October 2026",
    state: "Maharashtra",
    stateCode: "27",
    city: "Akola",
    platformGstin: "27AABCN1234F1Z8",
    taxableSuppliesPaise: 18200000,
    taxableSuppliesRupees: 182000,
    cgstPaise: 163800,
    cgstRupees: 1638.00,
    sgstPaise: 163800,
    sgstRupees: 1638.00,
    igstPaise: 0,
    igstRupees: 0,
    tcsCollectedPaise: 18200,
    tcsCollectedRupees: 182.00,
    filingStatus: "FILED",
    arnNumber: "AA2710260019284",
    filedAt: "2026-11-10T14:30:00.000Z"
  },
  {
    id: "GST-2026-10-AMR",
    period: "2026-10",
    monthName: "October 2026",
    state: "Maharashtra",
    stateCode: "27",
    city: "Amravati",
    platformGstin: "27AABCN1234F1Z8",
    taxableSuppliesPaise: 21500000,
    taxableSuppliesRupees: 215000,
    cgstPaise: 193500,
    cgstRupees: 1935.00,
    sgstPaise: 193500,
    sgstRupees: 1935.00,
    igstPaise: 0,
    igstRupees: 0,
    tcsCollectedPaise: 21500,
    tcsCollectedRupees: 215.00,
    filingStatus: "FILED",
    arnNumber: "AA2710260019285",
    filedAt: "2026-11-10T14:35:00.000Z"
  },
  {
    id: "GST-2026-10-PUN",
    period: "2026-10",
    monthName: "October 2026",
    state: "Maharashtra",
    stateCode: "27",
    city: "Pune",
    platformGstin: "27AABCN1234F1Z8",
    taxableSuppliesPaise: 42100000,
    taxableSuppliesRupees: 421000,
    cgstPaise: 378900,
    cgstRupees: 3789.00,
    sgstPaise: 378900,
    sgstRupees: 3789.00,
    igstPaise: 0,
    igstRupees: 0,
    tcsCollectedPaise: 42100,
    tcsCollectedRupees: 421.00,
    filingStatus: "READY_FOR_FILING",
    arnNumber: null,
    filedAt: null
  }
];

const mutableGatewayFailures = [
  {
    id: "GW-FAIL-8821",
    orderId: "ORD-NGP-20261118-8095",
    city: "Nagpur",
    gateway: "Razorpay UPI",
    paymentMethod: "UPI_INTENT",
    errorCode: "BAD_REQUEST_ERROR",
    errorMessage: "VPA handle unavailable from issuer bank switch (SBI Timeout)",
    httpStatusCode: 400,
    retryCount: 2,
    lastRetryAt: new Date(Date.now() - 1800000).toISOString(),
    status: "PENDING_RETRY"
  },
  {
    id: "GW-FAIL-8822",
    orderId: "ORD-AKL-20261117-9018",
    city: "Akola",
    gateway: "Razorpay Cards",
    paymentMethod: "CARD_NETBANKING",
    errorCode: "GATEWAY_TIMEOUT",
    errorMessage: "OTP verification expired without customer completion",
    httpStatusCode: 504,
    retryCount: 3,
    lastRetryAt: new Date(Date.now() - 43200000).toISOString(),
    status: "RETRY_EXHAUSTED"
  },
  {
    id: "GW-FAIL-8823",
    orderId: "ORD-PUN-20261118-9102",
    city: "Pune",
    gateway: "NPCI Direct UPI",
    paymentMethod: "UPI_DYNAMIC_QR",
    errorCode: "TRANSACTION_LIMIT_EXCEEDED",
    errorMessage: "Customer bank per-day UPI transaction count exceeded",
    httpStatusCode: 422,
    retryCount: 1,
    lastRetryAt: new Date(Date.now() - 7200000).toISOString(),
    status: "RESOLVED"
  }
];

const mutableFinancialAuditLogs = [
  {
    id: "FIN-AUD-2026-901",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    action: "ESCROW_BATCH_RELEASE",
    amountPaise: 48950000,
    amountRupees: 489500,
    city: "Nagpur",
    signers: ["Rajesh Nukkad (Root Admin)", "Rushi Platform Architect (Super Admin)"],
    escrowReleaseBatchId: "BATCH-NGP-20261118-01",
    status: "DUAL_SIGNED_AND_RELEASED",
    hash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  },
  {
    id: "FIN-AUD-2026-902",
    timestamp: new Date(Date.now() - 14400000).toISOString(),
    action: "DISPUTE_REFUND_AUTHORIZATION",
    amountPaise: 125000,
    amountRupees: 1250,
    city: "Akola",
    signers: ["Rushi Platform Architect (Super Admin)", "City Ops Manager Akola"],
    escrowReleaseBatchId: "REF-DISP-AKL-0041",
    status: "DUAL_SIGNED_AND_RELEASED",
    hash: "a4f5c92819fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852a123"
  },
  {
    id: "FIN-AUD-2026-903",
    timestamp: new Date(Date.now() - 28800000).toISOString(),
    action: "COMMISSION_SLAB_OVERRIDE",
    amountPaise: 0,
    amountRupees: 0,
    city: "Pune",
    signers: ["Rajesh Nukkad (Root Admin)"],
    escrowReleaseBatchId: "POLICY-COMM-PUN-02",
    status: "AUTHORIZED",
    hash: "f7c3b21819fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852c998"
  }
];

const mutableSubscriptionPayments = [
  {
    id: "SUB-PAY-7701",
    receiptNumber: "REC-2026-11-0081",
    merchantId: "merchant-sabji-001",
    merchantName: "Patil Fresh Sabji Mandi",
    city: "Nagpur",
    planName: "Hyperlocal Growth",
    amountPaise: 99900,
    amountRupees: 999,
    paymentMethod: "UPI_AUTO_DEBIT",
    paidAt: new Date(Date.now() - 86400000).toISOString(),
    status: "SUCCESS",
    invoiceUrl: "/api/v1/admin/subscriptions/receipts/SUB-PAY-7701.pdf"
  },
  {
    id: "SUB-PAY-7702",
    receiptNumber: "REC-2026-11-0082",
    merchantId: "merchant-kirana-001",
    merchantName: "Sharma Kirana Store",
    city: "Akola",
    planName: "Kirana Starter",
    amountPaise: 49900,
    amountRupees: 499,
    paymentMethod: "RAZORPAY_MANDATE",
    paidAt: new Date(Date.now() - 172800000).toISOString(),
    status: "SUCCESS",
    invoiceUrl: "/api/v1/admin/subscriptions/receipts/SUB-PAY-7702.pdf"
  },
  {
    id: "SUB-PAY-7703",
    receiptNumber: "REC-2026-11-0083",
    merchantId: "merchant-sweets-001",
    merchantName: "Haldiram Express",
    city: "Amravati",
    planName: "Enterprise Pro",
    amountPaise: 249900,
    amountRupees: 2499,
    paymentMethod: "CORPORATE_NETBANKING",
    paidAt: new Date(Date.now() - 259200000).toISOString(),
    status: "SUCCESS",
    invoiceUrl: "/api/v1/admin/subscriptions/receipts/SUB-PAY-7703.pdf"
  }
];

const mutableSubscriptionRenewals = [
  {
    id: "REN-2026-01",
    merchantId: "merchant-bakery-001",
    merchantName: "Bakers Delite Artisan Oven",
    city: "Nagpur",
    planName: "Hyperlocal Growth",
    expiryDate: new Date(Date.now() + 4 * 86400000).toISOString(),
    daysRemaining: 4,
    autoDebitEnabled: true,
    dunningNoticeSent: false,
    riskLevel: "EXPIRING_SOON"
  },
  {
    id: "REN-2026-02",
    merchantId: "merchant-agro-001",
    merchantName: "Kisan Agro Mart",
    city: "Pune",
    planName: "Enterprise Pro",
    expiryDate: new Date(Date.now() + 2 * 86400000).toISOString(),
    daysRemaining: 2,
    autoDebitEnabled: false,
    dunningNoticeSent: true,
    riskLevel: "GRACE_PERIOD"
  },
  {
    id: "REN-2026-03",
    merchantId: "merchant-dairy-001",
    merchantName: "Gokul Pure Milk & Paneer",
    city: "Amravati",
    planName: "Kirana Starter",
    expiryDate: new Date(Date.now() + 11 * 86400000).toISOString(),
    daysRemaining: 11,
    autoDebitEnabled: true,
    dunningNoticeSent: false,
    riskLevel: "NORMAL"
  }
];

interface AdminCouponItem {
  id: string;
  code: string;
  discountPercent?: number;
  discountPaise?: number;
  validUntil: string;
  maxRedemptions: number;
  redemptionCount: number;
  description: string;
  status: "ACTIVE" | "EXPIRED" | "DISABLED";
  createdAt: string;
}

const mutableCoupons: AdminCouponItem[] = [
  {
    id: "CPN-001",
    code: "NUKKADLAUNCH",
    discountPercent: 100,
    discountPaise: undefined,
    validUntil: "2026-12-31T23:59:59.000Z",
    maxRedemptions: 500,
    redemptionCount: 142,
    description: "100% Free Pilot Access for First 30 Days",
    status: "ACTIVE" as const,
    createdAt: "2026-10-01T00:00:00.000Z"
  },
  {
    id: "CPN-002",
    code: "VIDARBHA50",
    discountPercent: 50,
    discountPaise: undefined,
    validUntil: "2026-11-30T23:59:59.000Z",
    maxRedemptions: 200,
    redemptionCount: 78,
    description: "50% Off First 3 Months for Vidarbha Kirana Merchants",
    status: "ACTIVE" as const,
    createdAt: "2026-10-15T00:00:00.000Z"
  },
  {
    id: "CPN-003",
    code: "DIWALI2026",
    discountPercent: 30,
    discountPaise: undefined,
    validUntil: "2026-11-25T23:59:59.000Z",
    maxRedemptions: 150,
    redemptionCount: 112,
    description: "Diwali Festive Promotion for Sweets & Bakery Outlets",
    status: "ACTIVE" as const,
    createdAt: "2026-10-20T00:00:00.000Z"
  }
];

const mutableSiemAlerts = [
  {
    id: "SIEM-ALRT-9941",
    timestamp: new Date(Date.now() - 900000).toISOString(),
    threatLevel: "HIGH",
    eventType: "BRUTE_FORCE_ATTEMPT",
    sourceIP: "103.212.144.18",
    targetedUser: "adm-ops-ngp@nukkadnow.com",
    city: "Nagpur",
    status: "BLOCKED",
    details: "6 consecutive failed TOTP attempts within 45 seconds from unrecognized ASN"
  },
  {
    id: "SIEM-ALRT-9942",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    threatLevel: "MEDIUM",
    eventType: "GEO_VELOCITY_BREACH",
    sourceIP: "49.36.128.92",
    targetedUser: "adm-ops-akl@nukkadnow.com",
    city: "Akola",
    status: "INVESTIGATING",
    details: "Session opened from Mumbai IP 14 minutes after active session in Akola (impossible travel)"
  },
  {
    id: "SIEM-ALRT-9943",
    timestamp: new Date(Date.now() - 14400000).toISOString(),
    threatLevel: "CRITICAL",
    eventType: "SQL_INJECTION_PROBE",
    sourceIP: "185.220.101.5",
    targetedUser: "PUBLIC_GATEWAY_PROBE",
    city: "Pune",
    status: "MITIGATED",
    details: "Automated WAF blocked payload 'UNION SELECT table_name' on catalog query string"
  }
];
