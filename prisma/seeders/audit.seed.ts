/**
 * NukkadNow Cryptographic Audit Trail, PII Access Logs & System Settings (Audit Seed)
 * Enforces:
 * - Blockchain-lite HMAC-SHA256 chained audit integrity
 * - DPDP Act / GDPR compliant PII access justification logging
 * - Platform default governance parameters and operational settings
 */

export interface AuditLogSeed {
  id: string;
  operatorId: string;
  operatorName: string;
  action: string;
  targetEntity: string;
  targetId: string;
  reasonCode: string;
  justification: string;
  previousHash: string;
  recordHash: string;
  ipAddress: string;
  userAgent: string;
  cityCode?: string;
  timestamp: string;
}

export interface PiiAccessLogSeed {
  id: string;
  operatorId: string;
  operatorName: string;
  targetEntity: 'Customer' | 'MerchantBank' | 'HomeChefAddress';
  targetId: string;
  accessedFields: string[];
  purposeCode: 'ORDER_FULFILLMENT_TRIAGE' | 'REGULATORY_KYC_VERIFICATION' | 'DISPUTE_RESOLUTION';
  justification: string;
  timestamp: string;
}

export interface PlatformSettingSeed {
  key: string;
  value: string;
  category: 'GENERAL' | 'OPERATIONS' | 'FINANCE' | 'NOTIFICATIONS' | 'SECURITY';
  description: string;
  isEncrypted: boolean;
  updatedBy: string;
}

export const PLATFORM_SETTINGS_SEED: PlatformSettingSeed[] = [
  {
    key: 'platform.brand_name',
    value: 'NukkadNow Hyperlocal Commerce',
    category: 'GENERAL',
    description: 'Public platform brand display title',
    isEncrypted: false,
    updatedBy: 'adm-root-001',
  },
  {
    key: 'platform.default_currency',
    value: 'INR',
    category: 'GENERAL',
    description: 'System-wide base monetary currency',
    isEncrypted: false,
    updatedBy: 'adm-root-001',
  },
  {
    key: 'platform.timezone',
    value: 'Asia/Kolkata',
    category: 'GENERAL',
    description: 'Default operational timezone',
    isEncrypted: false,
    updatedBy: 'adm-root-001',
  },
  {
    key: 'orders.min_order_value_paise',
    value: '10000', // ₹100.00
    category: 'OPERATIONS',
    description: 'Global minimum basket threshold for pickup orders',
    isEncrypted: false,
    updatedBy: 'adm-super-001',
  },
  {
    key: 'orders.auto_cancel_unpaid_minutes',
    value: '15',
    category: 'OPERATIONS',
    description: 'Auto-cancel orders awaiting payment confirmation',
    isEncrypted: false,
    updatedBy: 'adm-super-001',
  },
  {
    key: 'finance.default_commission_percent',
    value: '3.5',
    category: 'FINANCE',
    description: 'Default platform take rate on retail orders',
    isEncrypted: false,
    updatedBy: 'adm-root-001',
  },
  {
    key: 'finance.refund_step_up_threshold_paise',
    value: '500000', // ₹5,000.00
    category: 'FINANCE',
    description: 'Threshold requiring dual operator authorization for refunds',
    isEncrypted: false,
    updatedBy: 'adm-root-001',
  },
  {
    key: 'security.mfa_enforced_levels',
    value: '1,2,3',
    category: 'SECURITY',
    description: 'Hierarchy levels mandating TOTP two-factor authentication',
    isEncrypted: false,
    updatedBy: 'adm-root-001',
  },
];

export const AUDIT_LOGS_SEED: AuditLogSeed[] = [
  {
    id: 'aud-001-genesis',
    operatorId: 'adm-root-001',
    operatorName: 'Rushi Deshmukh',
    action: 'PLATFORM_INITIALIZATION',
    targetEntity: 'System',
    targetId: 'SYS-GLOBAL-001',
    reasonCode: 'GENESIS_BOOTSTRAP',
    justification: 'Initial pilot platform provisioning for Maharashtra municipal clusters.',
    previousHash: '0000000000000000000000000000000000000000000000000000000000000000',
    recordHash: 'a7f1c24e89b345a90d8ef6712390ab56cd894312389a0b12cdef56789012345a',
    ipAddress: '127.0.0.1',
    userAgent: 'NukkadNow Admin Core Console/1.0',
    cityCode: 'GLOBAL',
    timestamp: '2026-11-18T00:00:00Z',
  },
  {
    id: 'aud-002-kyc',
    operatorId: 'adm-staff-kyc-001',
    operatorName: 'Pooja Raut',
    action: 'MERCHANT_KYC_APPROVAL',
    targetEntity: 'Merchant',
    targetId: 'mer-ngp-sabji-001',
    reasonCode: 'DOCUMENTS_VERIFIED',
    justification: 'Physical shop act license and FSSAI certificate cross-verified against MCA database.',
    previousHash: 'a7f1c24e89b345a90d8ef6712390ab56cd894312389a0b12cdef56789012345a',
    recordHash: 'b8e2d35f90c456ba1e9f07823401bc67de905423490b1c23def067890123456b',
    ipAddress: '192.168.1.45',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/130.0.0.0',
    cityCode: 'IN-MH-NGP',
    timestamp: '2026-11-18T10:15:00Z',
  },
  {
    id: 'aud-003-geo',
    operatorId: 'adm-city-ngp-001',
    operatorName: 'Vikram Wankhede',
    action: 'LOCALITY_GEOFENCE_EXPANSION',
    targetEntity: 'Locality',
    targetId: 'loc-ngp-dharampeth',
    reasonCode: 'COMMERCIAL_EXPANSION',
    justification: 'Expanded coverage radius by 500m to include West High Court Road residential societies.',
    previousHash: 'b8e2d35f90c456ba1e9f07823401bc67de905423490b1c23def067890123456b',
    recordHash: 'c9f3e46001d567cb2f0a18934512cd78ef016534501c2d34ef0178901234567c',
    ipAddress: '192.168.1.12',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/130.0.0.0',
    cityCode: 'IN-MH-NGP',
    timestamp: '2026-11-18T12:00:00Z',
  },
];

export const PII_ACCESS_LOGS_SEED: PiiAccessLogSeed[] = [
  {
    id: 'pii-001',
    operatorId: 'adm-staff-sup-001',
    operatorName: 'Rahul Meshram',
    targetEntity: 'Customer',
    targetId: 'cust-ngp-002',
    accessedFields: ['phoneNumber', 'residentialAddress'],
    purposeCode: 'ORDER_FULFILLMENT_TRIAGE',
    justification: 'Customer reported delayed pickup counter handover for Order NN-20261118-002.',
    timestamp: '2026-11-18T18:27:00Z',
  },
  {
    id: 'pii-002',
    operatorId: 'adm-staff-kyc-001',
    operatorName: 'Pooja Raut',
    targetEntity: 'MerchantBank',
    targetId: 'mer-akl-homechef-003',
    accessedFields: ['bankAccountNumber', 'ifscCode', 'residentialAddress'],
    purposeCode: 'REGULATORY_KYC_VERIFICATION',
    justification: 'Verifying bank penny drop settlement for Home Chef artisan registration.',
    timestamp: '2026-11-14T11:15:00Z',
  },
];
