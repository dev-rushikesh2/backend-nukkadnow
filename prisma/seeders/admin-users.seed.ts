/**
 * NukkadNow 4-Tier Administrative Hierarchy Seed Dataset
 * Level 1: Root Admin (Company owner · Complete platform control)
 * Level 2: Super Admin (Central platform operations and management)
 * Level 3: City Operations Manager (Nagpur, Akola, Amravati, Pune municipal territories)
 * Level 4: Verification Staff & Support Staff
 */

export interface AdminRoleSeed {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  hierarchyLevel: 1 | 2 | 3 | 4;
  description: string;
  requiresMfa: boolean;
  isSystem: boolean;
  permissionCodes: string[];
}

export interface AdminUserSeed {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'ACTIVE' | 'SUSPENDED';
  mfaEnabled: boolean;
  isRootProtected: boolean;
  tokenVersion: number;
  roleCode: string;
  geoAssignment?: {
    state: string;
    stateCode: string;
    district: string;
    districtCode: string;
    cityId: string;
    cityCode: string;
    cityName: string;
    localities: string[];
  };
}

export const ADMIN_PERMISSIONS_SEED = [
  // Merchant Operations & Lifecycle
  { code: 'admin:merchants:read', module: 'Merchants', description: 'View merchant directory & profiles' },
  { code: 'admin:merchants:create', module: 'Merchants', description: 'Onboard new merchants' },
  { code: 'admin:merchants:update', module: 'Merchants', description: 'Update merchant profiles' },
  { code: 'admin:merchants:suspend', module: 'Merchants', description: 'Suspend or reinstate merchant operations' },
  { code: 'admin:merchants:terminate', module: 'Merchants', description: 'Permanently terminate merchant account' },
  { code: 'admin:merchants:export', module: 'Merchants', description: 'Export merchant datasets to CSV/Excel' },

  // Merchant Verification & KYC
  { code: 'admin:kyc:read', module: 'KYC', description: 'View merchant verification queue' },
  { code: 'admin:kyc:review', module: 'KYC', description: 'Review submitted KYC documents' },
  { code: 'admin:kyc:approve', module: 'KYC', description: 'Approve merchant verification' },
  { code: 'admin:kyc:reject', module: 'KYC', description: 'Reject or request clarification for KYC' },
  { code: 'admin:kyc:re_verify', module: 'KYC', description: 'Trigger periodic KYC re-verification' },

  // Outlets & Geofences
  { code: 'admin:outlets:read', module: 'Outlets', description: 'View outlet locations and capacity' },
  { code: 'admin:outlets:manage', module: 'Outlets', description: 'Create and edit merchant outlets' },
  { code: 'admin:outlets:override_hours', module: 'Outlets', description: 'Override outlet operating schedules' },
  { code: 'admin:outlets:geofence_edit', module: 'Outlets', description: 'Modify delivery radius and geofences' },

  // Localities & Zones
  { code: 'admin:localities:read', module: 'Localities', description: 'View municipal localities and zones' },
  { code: 'admin:localities:manage', module: 'Localities', description: 'Add, edit, or toggle locality service status' },

  // Categories & Catalog Moderation
  { code: 'admin:categories:manage', module: 'Categories', description: 'Manage product taxonomy and GST/commissions' },
  { code: 'admin:catalog:read', module: 'Catalog', description: 'View merchant product catalog' },
  { code: 'admin:catalog:moderate', module: 'Catalog', description: 'Approve or reject merchant product listings' },
  { code: 'admin:catalog:takedown', module: 'Catalog', description: 'Enforce immediate product takedown' },

  // Orders Management & Emergency Intervention
  { code: 'admin:orders:read', module: 'Orders', description: 'View live order stream and historical orders' },
  { code: 'admin:orders:intervene', module: 'Orders', description: 'Update status or reassign delayed orders' },
  { code: 'admin:orders:force_cancel', module: 'Orders', description: 'Emergency cancellation with refund initiation' },

  // Financials, Payments, Refunds & Settlements
  { code: 'admin:payments:read', module: 'Payments', description: 'View transactions and escrow ledgers' },
  { code: 'admin:payments:reconcile', module: 'Payments', description: 'Execute gateway reconciliation' },
  { code: 'admin:payments:webhook_retry', module: 'Payments', description: 'Trigger manual gateway webhook retries' },
  { code: 'admin:refunds:read', module: 'Refunds', description: 'View refund requests and disputes' },
  { code: 'admin:refunds:approve_low', module: 'Refunds', description: 'Approve refunds <= ₹5,000' },
  { code: 'admin:refunds:approve_high', module: 'Refunds', description: 'Approve high-value refunds > ₹5,000 (Step-up)' },
  { code: 'admin:disputes:resolve', module: 'Disputes', description: 'Resolve bank chargebacks and disputes' },

  // Subscriptions & SaaS Pricing
  { code: 'admin:subscriptions:read', module: 'Subscriptions', description: 'View merchant SaaS subscriptions' },
  { code: 'admin:subscriptions:manage', module: 'Subscriptions', description: 'Extend, adjust or pause subscriptions' },
  { code: 'admin:pricing:manage', module: 'Pricing', description: 'Configure subscription plan tiers and pricing' },

  // Customer & Merchant Support
  { code: 'admin:support:read', module: 'Support', description: 'View support ticket queues' },
  { code: 'admin:support:assign', module: 'Support', description: 'Assign tickets to support agents' },
  { code: 'admin:support:respond', module: 'Support', description: 'Post customer and merchant replies' },
  { code: 'admin:support:escalate', module: 'Support', description: 'Escalate ticket to city operations' },
  { code: 'admin:support:resolve', module: 'Support', description: 'Close and resolve support tickets' },

  // Reviews & Reputation Moderation
  { code: 'admin:reviews:read', module: 'Reviews', description: 'View UGC product and store reviews' },
  { code: 'admin:reviews:moderate', module: 'Reviews', description: 'Approve, hide, or delete abusive reviews' },

  // Broadcast Notifications & Communication
  { code: 'admin:notifications:send_broadcast', module: 'Notifications', description: 'Send push/SMS broadcasts' },
  { code: 'admin:notifications:templates_manage', module: 'Notifications', description: 'Manage notification templates' },

  // Business Analytics & Reporting
  { code: 'admin:analytics:read', module: 'Analytics', description: 'View operational and revenue analytics' },
  { code: 'admin:analytics:financial_export', module: 'Analytics', description: 'Export financial GMV and audit reports' },

  // Platform Operators & Identity Governance
  { code: 'admin:platform:users_read', module: 'Governance', description: 'View administrative users' },
  { code: 'admin:platform:users_manage', module: 'Governance', description: 'Create and manage admin/staff accounts' },
  { code: 'admin:platform:roles_manage', module: 'Governance', description: 'Define dynamic administrative roles' },

  // Feature Flags & Circuit Breakers
  { code: 'admin:feature_flags:read', module: 'FeatureFlags', description: 'View system feature flags' },
  { code: 'admin:feature_flags:toggle', module: 'FeatureFlags', description: 'Toggle kill-switches and canary rollouts' },

  // System Infrastructure Health & Telemetry
  { code: 'admin:system_health:read', module: 'SystemHealth', description: 'View microservice health and telemetry' },
  { code: 'admin:system:maintenance_toggle', module: 'SystemHealth', description: 'Toggle maintenance mode' },

  // Immutable Audit Logs & PII Access
  { code: 'admin:audit_logs:read', module: 'Audit', description: 'Inspect cryptographic audit logs' },
  { code: 'admin:audit:unmask_pii', module: 'Audit', description: 'Unmask customer PII with mandatory audit logging' },

  // General Settings
  { code: 'admin:settings:manage', module: 'Settings', description: 'Configure platform-wide operational settings' },
];

export const ADMIN_ROLES_SEED: AdminRoleSeed[] = [
  {
    id: 'role-root-admin',
    code: 'ROOT_ADMIN',
    title: 'Root Admin',
    subtitle: 'Company Owner · Ultimate Platform Authority',
    hierarchyLevel: 1,
    description: 'Complete unconstrained platform authority and ownership. Protected account that cannot be modified or suspended by lower tiers.',
    requiresMfa: true,
    isSystem: true,
    permissionCodes: ADMIN_PERMISSIONS_SEED.map((p) => p.code),
  },
  {
    id: 'role-super-admin',
    code: 'SUPER_ADMIN',
    title: 'Super Admin',
    subtitle: 'Central Platform Operations & Management',
    hierarchyLevel: 2,
    description: 'Central operations management across all cities, merchants, finances, and platform settings.',
    requiresMfa: true,
    isSystem: true,
    permissionCodes: ADMIN_PERMISSIONS_SEED.map((p) => p.code).filter(
      (c) => c !== 'admin:platform:roles_manage' // Role modification reserved for Root Admin
    ),
  },
  {
    id: 'role-city-manager',
    code: 'CITY_OPERATIONS_MANAGER',
    title: 'City Operations Manager',
    subtitle: 'Municipal Territory Leader',
    hierarchyLevel: 3,
    description: 'Dedicated leader responsible for a single municipal territory (Nagpur, Akola, Amravati, Pune). Scoped to assigned city data.',
    requiresMfa: true,
    isSystem: false,
    permissionCodes: [
      'admin:merchants:read',
      'admin:merchants:update',
      'admin:merchants:suspend',
      'admin:kyc:read',
      'admin:outlets:read',
      'admin:outlets:manage',
      'admin:outlets:override_hours',
      'admin:localities:read',
      'admin:catalog:read',
      'admin:catalog:moderate',
      'admin:orders:read',
      'admin:orders:intervene',
      'admin:payments:read',
      'admin:refunds:read',
      'admin:refunds:approve_low',
      'admin:subscriptions:read',
      'admin:support:read',
      'admin:support:assign',
      'admin:support:respond',
      'admin:support:resolve',
      'admin:reviews:read',
      'admin:reviews:moderate',
      'admin:notifications:send_broadcast',
      'admin:analytics:read',
      'admin:audit_logs:read',
    ],
  },
  {
    id: 'role-verification-staff',
    code: 'VERIFICATION_STAFF',
    title: 'Verification Staff',
    subtitle: 'Merchant KYC & Regulatory Compliance Specialist',
    hierarchyLevel: 4,
    description: 'Specialist tasked with validating merchant identities, business registration, FSSAI licenses, and GST certificates.',
    requiresMfa: false,
    isSystem: false,
    permissionCodes: [
      'admin:merchants:read',
      'admin:kyc:read',
      'admin:kyc:review',
      'admin:kyc:approve',
      'admin:kyc:reject',
      'admin:outlets:read',
      'admin:catalog:read',
      'admin:support:read',
      'admin:support:respond',
      'admin:audit_logs:read',
    ],
  },
  {
    id: 'role-support-staff',
    code: 'SUPPORT_STAFF',
    title: 'Support Staff',
    subtitle: 'Customer & Merchant Helpdesk Agent',
    hierarchyLevel: 4,
    description: 'Frontline helpdesk team handling customer order inquiries, merchant support tickets, and live chat triage.',
    requiresMfa: false,
    isSystem: false,
    permissionCodes: [
      'admin:merchants:read',
      'admin:outlets:read',
      'admin:orders:read',
      'admin:orders:intervene',
      'admin:payments:read',
      'admin:refunds:read',
      'admin:support:read',
      'admin:support:respond',
      'admin:support:escalate',
      'admin:support:resolve',
      'admin:reviews:read',
      'admin:reviews:moderate',
      'admin:audit_logs:read',
      'admin:audit:unmask_pii',
    ],
  },
  {
    id: 'role-finance-auditor',
    code: 'FINANCE_AUDITOR',
    title: 'Finance & Payout Auditor',
    subtitle: 'Escrow, Reconciliation & Payout Specialist',
    hierarchyLevel: 4,
    description: 'Finance specialist responsible for verifying merchant settlement batches, bank account reconciliation, escrow balances, and payout audits.',
    requiresMfa: true,
    isSystem: false,
    permissionCodes: [
      'admin:payments:read',
      'admin:payments:reconcile',
      'admin:refunds:read',
      'admin:subscriptions:read',
      'admin:audit_logs:read',
    ],
  },
];

export const ADMIN_USERS_SEED: AdminUserSeed[] = [
  // 1. Root Admin — Founder (Level 1, Ultimate Platform Authority)
  {
    id: 'adm-root-001',
    name: 'Rajesh Nukkad (Founder)',
    email: 'founder@nukkadnow.com',
    phone: '+919800000001',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: true,
    tokenVersion: 1,
    roleCode: 'ROOT_ADMIN',
  },

  // 1b. Root Admin — System Architect
  {
    id: 'adm-root-002',
    name: 'Rushi Platform Architect',
    email: 'root.admin@nukkadnow.com',
    phone: '+919800000002',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: true,
    tokenVersion: 1,
    roleCode: 'ROOT_ADMIN',
  },

  // 2. Super Admin (Level 2, Global Central Operations)
  {
    id: 'adm-super-001',
    name: 'Rushi Platform Architect',
    email: 'admin@nukkadnow.com',
    phone: '+919800000003',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: false,
    tokenVersion: 1,
    roleCode: 'SUPER_ADMIN',
  },

  // 3. City Operations Manager — Akola (Level 3)
  {
    id: 'adm-city-akl-001',
    name: 'Rajesh Sharma (Akola Lead)',
    email: 'akola.ops@nukkadnow.com',
    phone: '+919823000012',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: false,
    tokenVersion: 1,
    roleCode: 'CITY_OPERATIONS_MANAGER',
    geoAssignment: {
      state: 'Maharashtra',
      stateCode: 'IN-MH',
      district: 'Akola',
      districtCode: 'AKL',
      cityId: 'city-akl',
      cityCode: 'IN-MH-AKL',
      cityName: 'Akola',
      localities: ['Civil Lines', 'Old City & Sarafa Bazaar', 'Toshniwal Layout', 'Gandhi Road'],
    },
  },

  // 4. City Operations Manager — Amravati (Level 3)
  {
    id: 'adm-city-amr-001',
    name: 'Pooja Deshmukh (Amravati Lead)',
    email: 'amravati.ops@nukkadnow.com',
    phone: '+919823000013',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: false,
    tokenVersion: 1,
    roleCode: 'CITY_OPERATIONS_MANAGER',
    geoAssignment: {
      state: 'Maharashtra',
      stateCode: 'IN-MH',
      district: 'Amravati',
      districtCode: 'AMR',
      cityId: 'city-amr',
      cityCode: 'IN-MH-AMR',
      cityName: 'Amravati',
      localities: ['Rajapeth', 'Gadge Nagar', 'Camp Area', 'Badnera Road'],
    },
  },

  // 5. City Operations Manager — Nagpur (Level 3)
  {
    id: 'adm-city-ngp-001',
    name: 'Amit Deshpande (Nagpur Lead)',
    email: 'nagpur.ops@nukkadnow.com',
    phone: '+919823000011',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: false,
    tokenVersion: 1,
    roleCode: 'CITY_OPERATIONS_MANAGER',
    geoAssignment: {
      state: 'Maharashtra',
      stateCode: 'IN-MH',
      district: 'Nagpur',
      districtCode: 'NGP',
      cityId: 'city-ngp',
      cityCode: 'IN-MH-NGP',
      cityName: 'Nagpur',
      localities: ['Sitabuldi', 'Dharampeth', 'Dhantoli', 'Ramdaspeth', 'Sadar'],
    },
  },

  // 6. City Operations Manager — Pune (Level 3)
  {
    id: 'adm-city-pun-001',
    name: 'Sneha Kulkarni (Pune Lead)',
    email: 'pune.ops@nukkadnow.com',
    phone: '+919823000014',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: false,
    tokenVersion: 1,
    roleCode: 'CITY_OPERATIONS_MANAGER',
    geoAssignment: {
      state: 'Maharashtra',
      stateCode: 'IN-MH',
      district: 'Pune',
      districtCode: 'PUN',
      cityId: 'city-pun',
      cityCode: 'IN-MH-PUN',
      cityName: 'Pune',
      localities: ['Kothrud', 'Viman Nagar', 'Baner', 'Koregaon Park'],
    },
  },

  // 7. City Operations Manager — Nashik (Level 3)
  {
    id: 'adm-city-nsk-001',
    name: 'Vikram Shinde (Nashik Lead)',
    email: 'nashik.ops@nukkadnow.com',
    phone: '+919823000015',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: false,
    tokenVersion: 1,
    roleCode: 'CITY_OPERATIONS_MANAGER',
    geoAssignment: {
      state: 'Maharashtra',
      stateCode: 'IN-MH',
      district: 'Nashik',
      districtCode: 'NSK',
      cityId: 'city-nsk',
      cityCode: 'IN-MH-NSK',
      cityName: 'Nashik',
      localities: ['College Road', 'Panchavati'],
    },
  },

  // 8. City Operations Manager — Mumbai (Level 3)
  {
    id: 'adm-city-mum-001',
    name: 'Rohit Sawant (Mumbai Lead)',
    email: 'mumbai.ops@nukkadnow.com',
    phone: '+919823000016',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: false,
    tokenVersion: 1,
    roleCode: 'CITY_OPERATIONS_MANAGER',
    geoAssignment: {
      state: 'Maharashtra',
      stateCode: 'IN-MH',
      district: 'Mumbai',
      districtCode: 'MUM',
      cityId: 'city-mum',
      cityCode: 'IN-MH-MUM',
      cityName: 'Mumbai',
      localities: ['Dadar', 'Bandra West'],
    },
  },

  // 9. Verification Staff (Level 4, Merchant KYC Specialist)
  {
    id: 'adm-staff-kyc-001',
    name: 'Sunita KYC Compliance',
    email: 'sunita.kyc@nukkadnow.com',
    phone: '+919823000021',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: false,
    tokenVersion: 1,
    roleCode: 'VERIFICATION_STAFF',
    geoAssignment: {
      state: 'Maharashtra',
      stateCode: 'IN-MH',
      district: 'Nagpur',
      districtCode: 'NGP',
      cityId: 'city-ngp',
      cityCode: 'IN-MH-NGP',
      cityName: 'Nagpur',
      localities: ['Sitabuldi', 'Dharampeth'],
    },
  },

  // 10. Support Staff (Level 4, Customer & Merchant Helpdesk)
  {
    id: 'adm-staff-sup-001',
    name: 'Ananya Support Desk',
    email: 'ananya.support@nukkadnow.com',
    phone: '+919823000022',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: false,
    tokenVersion: 1,
    roleCode: 'SUPPORT_STAFF',
  },

  // 11. Finance & Settlement Auditor (Level 4)
  {
    id: 'adm-staff-fin-001',
    name: 'Pradeep Joshi (Finance Auditor)',
    email: 'finance.auditor@nukkadnow.com',
    phone: '+919823000023',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: false,
    tokenVersion: 1,
    roleCode: 'FINANCE_AUDITOR',
  },

  // 12. Suspended Operator (For Testing Suspension & 403 Forbidden Access)
  {
    id: 'adm-staff-susp-001',
    name: 'Suspended Operator (Test Account)',
    email: 'suspended.operator@nukkadnow.com',
    phone: '+919823000099',
    status: 'SUSPENDED',
    mfaEnabled: false,
    isRootProtected: false,
    tokenVersion: 1,
    roleCode: 'SUPPORT_STAFF',
  },

  // Legacy/Compatibility Seed Records
  {
    id: 'adm-legacy-kyc-001',
    name: 'Pooja Raut',
    email: 'kyc.staff@nukkadnow.com',
    phone: '+919823000024',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: false,
    tokenVersion: 1,
    roleCode: 'VERIFICATION_STAFF',
  },
  {
    id: 'adm-legacy-sup-001',
    name: 'Rahul Meshram',
    email: 'support.agent@nukkadnow.com',
    phone: '+919823000025',
    status: 'ACTIVE',
    mfaEnabled: false, // Disabled by default; operator activates Authenticator app in Profile
    isRootProtected: false,
    tokenVersion: 1,
    roleCode: 'SUPPORT_STAFF',
  },
];
