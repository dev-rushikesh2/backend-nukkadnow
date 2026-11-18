/**
 * NukkadNow Finance, Ledger, Escrow, Settlements & SaaS Subscriptions (Finance Seed)
 * Enforces:
 * - Double-entry ledger compliance
 * - Integer paise financial arithmetic
 * - Two-tier refund approval threshold (<= ₹5,000 vs > ₹5,000 step-up)
 * - Merchant SaaS subscription management
 */

export interface PaymentTransactionSeed {
  id: string;
  orderId: string;
  orderNumber: string;
  gatewayTransactionId: string;
  amountPaise: number;
  currency: string;
  method: 'UPI' | 'CARD' | 'NETBANKING' | 'COUNTER_CASH';
  status: 'CAPTURED' | 'REFUNDED' | 'FAILED';
  gatewayFeePaise: number;
  platformCommissionPaise: number;
  merchantPayablePaise: number;
  cityCode: string;
  createdAt: string;
}

export interface SettlementBatchSeed {
  id: string;
  merchantId: string;
  merchantName: string;
  bankName: string;
  bankAccountMasked: string;
  utrNumber?: string;
  totalAmountPaise: number;
  ordersCount: number;
  status: 'PENDING' | 'PROCESSING' | 'SETTLED';
  cityCode: string;
  settledAt?: string;
  createdAt: string;
}

export interface RefundDisputeSeed {
  id: string;
  orderId: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  merchantId: string;
  merchantName: string;
  amountPaise: number;
  reasonCode: 'ITEM_SPOILED' | 'MISSING_ITEM' | 'WRONG_ITEM' | 'CUSTOMER_CANCELLED' | 'OUT_OF_STOCK';
  reasonDescription: string;
  requiresStepUpApproval: boolean; // > ₹5,000
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  cityCode: string;
  reviewedBy?: string;
  reviewedAt?: string;
  createdAt: string;
}

export interface SubscriptionPlanSeed {
  id: string;
  name: string;
  code: 'BASIC' | 'GROWTH' | 'PRO' | 'ENTERPRISE';
  monthlyPricePaise: number;
  annualPricePaise: number;
  featureList: string[];
  maxProducts: number;
  maxStaffLogins: number;
  isActive: boolean;
}

export interface MerchantSubscriptionSeed {
  id: string;
  merchantId: string;
  merchantName: string;
  planCode: 'BASIC' | 'GROWTH' | 'PRO' | 'ENTERPRISE';
  billingCycle: 'MONTHLY' | 'ANNUAL';
  amountPaise: number;
  status: 'ACTIVE' | 'TRIAL' | 'EXPIRING' | 'CANCELLED';
  startDate: string;
  renewalDate: string;
  cityCode: string;
}

export const SUBSCRIPTION_PLANS_SEED: SubscriptionPlanSeed[] = [
  {
    id: 'plan-basic',
    name: 'Nukkad Starter',
    code: 'BASIC',
    monthlyPricePaise: 49900, // ₹499/mo
    annualPricePaise: 499900, // ₹4,999/yr
    featureList: ['Digital Storefront', 'Store Counter QR Code', 'Up to 50 Products', 'Single Staff Login', 'Email Support'],
    maxProducts: 50,
    maxStaffLogins: 1,
    isActive: true,
  },
  {
    id: 'plan-growth',
    name: 'Nukkad Growth',
    code: 'GROWTH',
    monthlyPricePaise: 99900, // ₹999/mo
    annualPricePaise: 999900, // ₹9,999/yr
    featureList: ['Everything in Starter', 'Up to 250 Products', 'WhatsApp Order Notifications', '3 Staff POS Terminals', 'Daily Settlements'],
    maxProducts: 250,
    maxStaffLogins: 3,
    isActive: true,
  },
  {
    id: 'plan-pro',
    name: 'Nukkad Pro & Hyperlocal Empire',
    code: 'PRO',
    monthlyPricePaise: 199900, // ₹1,999/mo
    annualPricePaise: 1999900, // ₹19,999/yr
    featureList: ['Unlimited Products', 'Multi-Outlet Support', 'Thermal POS Printer Integration', 'Dedicated Account Manager', 'Priority KYC'],
    maxProducts: 10000,
    maxStaffLogins: 10,
    isActive: true,
  },
];

export const PAYMENT_TRANSACTIONS_SEED: PaymentTransactionSeed[] = [
  {
    id: 'tx-pay-001',
    orderId: 'ord-ngp-1001',
    orderNumber: 'NN-20261118-001',
    gatewayTransactionId: 'pay_NUKKAD_NGP_001',
    amountPaise: 5500,
    currency: 'INR',
    method: 'UPI',
    status: 'CAPTURED',
    gatewayFeePaise: 110, // ~2%
    platformCommissionPaise: 165,
    merchantPayablePaise: 4835,
    cityCode: 'IN-MH-NGP',
    createdAt: '2026-11-18T18:16:00Z',
  },
  {
    id: 'tx-pay-002',
    orderId: 'ord-ngp-1002',
    orderNumber: 'NN-20261118-002',
    gatewayTransactionId: 'pay_NUKKAD_NGP_002',
    amountPaise: 50000,
    currency: 'INR',
    method: 'UPI',
    status: 'CAPTURED',
    gatewayFeePaise: 1000,
    platformCommissionPaise: 3500,
    merchantPayablePaise: 40700,
    cityCode: 'IN-MH-NGP',
    createdAt: '2026-11-18T18:01:00Z',
  },
  {
    id: 'tx-pay-003',
    orderId: 'ord-ngp-1003',
    orderNumber: 'NN-20261118-003',
    gatewayTransactionId: 'pay_NUKKAD_NGP_003',
    amountPaise: 41000,
    currency: 'INR',
    method: 'CARD',
    status: 'CAPTURED',
    gatewayFeePaise: 820,
    platformCommissionPaise: 1025,
    merchantPayablePaise: 36425,
    cityCode: 'IN-MH-NGP',
    createdAt: '2026-11-18T14:31:00Z',
  },
  {
    id: 'tx-pay-004',
    orderId: 'ord-akl-2001',
    orderNumber: 'NN-20261118-004',
    gatewayTransactionId: 'pay_NUKKAD_AKL_004',
    amountPaise: 36000,
    currency: 'INR',
    method: 'UPI',
    status: 'CAPTURED',
    gatewayFeePaise: 720,
    platformCommissionPaise: 2880,
    merchantPayablePaise: 27800,
    cityCode: 'IN-MH-AKL',
    createdAt: '2026-11-18T16:02:00Z',
  },
  {
    id: 'tx-pay-005',
    orderId: 'ord-pun-3001',
    orderNumber: 'NN-20261118-005',
    gatewayTransactionId: 'pay_NUKKAD_PUN_005',
    amountPaise: 15000,
    currency: 'INR',
    method: 'UPI',
    status: 'REFUNDED',
    gatewayFeePaise: 0,
    platformCommissionPaise: 0,
    merchantPayablePaise: 0,
    cityCode: 'IN-MH-PUN',
    createdAt: '2026-11-18T11:01:00Z',
  },
];

export const SETTLEMENT_BATCHES_SEED: SettlementBatchSeed[] = [
  {
    id: 'set-ngp-001',
    merchantId: 'mer-ngp-kirana-002',
    merchantName: 'Sharma Kirana & General Store',
    bankName: 'HDFC Bank',
    bankAccountMasked: '**********9981',
    utrNumber: 'HDFCN26322001892',
    totalAmountPaise: 1425000, // ₹14,250.00
    ordersCount: 38,
    status: 'SETTLED',
    cityCode: 'IN-MH-NGP',
    settledAt: '2026-11-18T10:00:00Z',
    createdAt: '2026-11-18T06:00:00Z',
  },
  {
    id: 'set-ngp-002',
    merchantId: 'mer-ngp-sabji-001',
    merchantName: 'Patil Fresh Sabji Mandi',
    bankName: 'State Bank of India',
    bankAccountMasked: '**********1245',
    totalAmountPaise: 842000, // ₹8,420.00
    ordersCount: 65,
    status: 'PENDING',
    cityCode: 'IN-MH-NGP',
    createdAt: '2026-11-18T18:00:00Z',
  },
];

export const REFUND_DISPUTES_SEED: RefundDisputeSeed[] = [
  {
    id: 'ref-001',
    orderId: 'ord-pun-3001',
    orderNumber: 'NN-20261118-005',
    customerId: 'cust-pun-007',
    customerName: 'Ananya Roy',
    merchantId: 'mer-pun-organic-007',
    merchantName: 'Pune Organic Farm Produce',
    amountPaise: 15000, // ₹150.00
    reasonCode: 'CUSTOMER_CANCELLED',
    reasonDescription: 'Customer cancelled before dispatch; automatic full refund initiated.',
    requiresStepUpApproval: false,
    status: 'APPROVED',
    cityCode: 'IN-MH-PUN',
    reviewedBy: 'adm-city-pun-004',
    reviewedAt: '2026-11-18T11:22:00Z',
    createdAt: '2026-11-18T11:20:00Z',
  },
  {
    id: 'ref-002-high-value',
    orderId: 'ord-ngp-bulk-099',
    orderNumber: 'NN-20261117-911',
    customerId: 'cust-ngp-001',
    customerName: 'Amitabh Joshi',
    merchantId: 'mer-ngp-sweets-004',
    merchantName: 'Mahalaxmi Sweets, Dairy & Bakery',
    amountPaise: 720000, // ₹7,200.00 (High-value > ₹5,000 threshold)
    reasonCode: 'ITEM_SPOILED',
    reasonDescription: 'Customer received damaged sweet boxes intended for family wedding function.',
    requiresStepUpApproval: true,
    status: 'PENDING',
    cityCode: 'IN-MH-NGP',
    createdAt: '2026-11-18T16:30:00Z',
  },
];

export const MERCHANT_SUBSCRIPTIONS_SEED: MerchantSubscriptionSeed[] = [
  {
    id: 'sub-001',
    merchantId: 'mer-ngp-sabji-001',
    merchantName: 'Patil Fresh Sabji Mandi',
    planCode: 'BASIC',
    billingCycle: 'MONTHLY',
    amountPaise: 49900,
    status: 'ACTIVE',
    startDate: '2026-11-01T00:00:00Z',
    renewalDate: '2026-12-01T00:00:00Z',
    cityCode: 'IN-MH-NGP',
  },
  {
    id: 'sub-002',
    merchantId: 'mer-ngp-kirana-002',
    merchantName: 'Sharma Kirana & General Store',
    planCode: 'GROWTH',
    billingCycle: 'ANNUAL',
    amountPaise: 999900,
    status: 'ACTIVE',
    startDate: '2026-10-15T00:00:00Z',
    renewalDate: '2027-10-15T00:00:00Z',
    cityCode: 'IN-MH-NGP',
  },
  {
    id: 'sub-003',
    merchantId: 'mer-akl-homechef-003',
    merchantName: 'Garguti Homemade Chivda & Snacks',
    planCode: 'BASIC',
    billingCycle: 'MONTHLY',
    amountPaise: 49900,
    status: 'TRIAL',
    startDate: '2026-11-10T00:00:00Z',
    renewalDate: '2026-12-10T00:00:00Z',
    cityCode: 'IN-MH-AKL',
  },
  {
    id: 'sub-004',
    merchantId: 'mer-ngp-sweets-004',
    merchantName: 'Mahalaxmi Sweets, Dairy & Bakery',
    planCode: 'PRO',
    billingCycle: 'MONTHLY',
    amountPaise: 199900,
    status: 'ACTIVE',
    startDate: '2026-09-01T00:00:00Z',
    renewalDate: '2026-12-01T00:00:00Z',
    cityCode: 'IN-MH-NGP',
  },
];
