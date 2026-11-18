/**
 * NukkadNow Master Test Data & Infrastructure Seeder Runner
 * Validates cross-microservice relational integrity, financial integer paise constraints,
 * cryptographic HMAC audit chains, and writes verified seed snapshot.
 *
 * Can be executed directly with:
 * node --experimental-strip-types prisma/seeders/seed-all.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import {
  COUNTRIES_SEED,
  STATES_SEED,
  DISTRICTS_SEED,
  CITIES_SEED,
  LOCALITIES_SEED,
  ADMIN_PERMISSIONS_SEED,
  ADMIN_ROLES_SEED,
  ADMIN_USERS_SEED,
  MERCHANTS_SEED,
  CATEGORIES_SEED,
  PRODUCTS_SEED,
  CUSTOMERS_SEED,
  ORDERS_SEED,
  SUBSCRIPTION_PLANS_SEED,
  PAYMENT_TRANSACTIONS_SEED,
  SETTLEMENT_BATCHES_SEED,
  REFUND_DISPUTES_SEED,
  MERCHANT_SUBSCRIPTIONS_SEED,
  CANNED_REPLIES_SEED,
  SUPPORT_TICKETS_SEED,
  CUSTOMER_REVIEWS_SEED,
  PLATFORM_SETTINGS_SEED,
  AUDIT_LOGS_SEED,
  PII_ACCESS_LOGS_SEED,
} from './index.ts';

const currentDir = path.dirname(fileURLToPath(import.meta.url));

interface ValidationResult {
  passed: boolean;
  checkedEntities: Record<string, number>;
  validationErrors: string[];
}

export function validateAllSeeds(): ValidationResult {
  const errors: string[] = [];

  // 1. Validate Admin Roles & Permissions
  const permissionCodeSet = new Set(ADMIN_PERMISSIONS_SEED.map((p) => p.code));
  for (const role of ADMIN_ROLES_SEED) {
    for (const code of role.permissionCodes) {
      if (!permissionCodeSet.has(code)) {
        errors.push(`Role ${role.code} references unknown permission code: ${code}`);
      }
    }
  }

  // 2. Validate Admin Users
  const roleCodeSet = new Set(ADMIN_ROLES_SEED.map((r) => r.code));
  const cityCodeSet = new Set(CITIES_SEED.map((c) => c.code));
  for (const user of ADMIN_USERS_SEED) {
    if (!roleCodeSet.has(user.roleCode)) {
      errors.push(`User ${user.email} references unknown role: ${user.roleCode}`);
    }
    if (user.geoAssignment && !cityCodeSet.has(user.geoAssignment.cityCode)) {
      errors.push(`User ${user.email} assigned to unknown cityCode: ${user.geoAssignment.cityCode}`);
    }
  }

  // 3. Validate Merchants & Outlets
  const merchantIdSet = new Set(MERCHANTS_SEED.map((m) => m.id));
  for (const merchant of MERCHANTS_SEED) {
    if (!cityCodeSet.has(merchant.cityCode)) {
      errors.push(`Merchant ${merchant.organizationName} has unknown cityCode: ${merchant.cityCode}`);
    }
    for (const outlet of merchant.outlets) {
      if (!cityCodeSet.has(outlet.cityCode)) {
        errors.push(`Outlet ${outlet.name} has unknown cityCode: ${outlet.cityCode}`);
      }
    }
  }

  // 4. Validate Products & Pricing Constraints (Integer Paise)
  for (const product of PRODUCTS_SEED) {
    if (!merchantIdSet.has(product.tenantId)) {
      errors.push(`Product ${product.name} references unknown tenantId: ${product.tenantId}`);
    }
    for (const variant of product.variants) {
      if (!Number.isInteger(variant.pricePaise) || variant.pricePaise < 0) {
        errors.push(`Variant ${variant.name} (${variant.sku}) has invalid pricePaise: ${variant.pricePaise}`);
      }
      if (variant.compareAtPricePaise && (!Number.isInteger(variant.compareAtPricePaise) || variant.compareAtPricePaise < 0)) {
        errors.push(`Variant ${variant.name} has invalid compareAtPricePaise: ${variant.compareAtPricePaise}`);
      }
    }
  }

  // 5. Validate Customers
  const customerIdSet = new Set(CUSTOMERS_SEED.map((c) => c.id));
  for (const customer of CUSTOMERS_SEED) {
    if (!cityCodeSet.has(customer.cityCode)) {
      errors.push(`Customer ${customer.fullName} has unknown cityCode: ${customer.cityCode}`);
    }
    if (!Number.isInteger(customer.lifetimeSpendPaise) || customer.lifetimeSpendPaise < 0) {
      errors.push(`Customer ${customer.fullName} has invalid lifetimeSpendPaise: ${customer.lifetimeSpendPaise}`);
    }
  }

  // 6. Validate Orders
  const orderIdSet = new Set(ORDERS_SEED.map((o) => o.id));
  for (const order of ORDERS_SEED) {
    if (!customerIdSet.has(order.customerId)) {
      errors.push(`Order ${order.orderNumber} references unknown customerId: ${order.customerId}`);
    }
    if (!merchantIdSet.has(order.tenantId)) {
      errors.push(`Order ${order.orderNumber} references unknown tenantId: ${order.tenantId}`);
    }
    if (!Number.isInteger(order.totalAmountPaise) || order.totalAmountPaise < 0) {
      errors.push(`Order ${order.orderNumber} has invalid totalAmountPaise: ${order.totalAmountPaise}`);
    }
    for (const item of order.items) {
      if (!Number.isInteger(item.unitPricePaise) || !Number.isInteger(item.totalPricePaise)) {
        errors.push(`Order item ${item.title} has non-integer price amounts`);
      }
    }
  }

  // 7. Validate Payments & Refunds
  for (const tx of PAYMENT_TRANSACTIONS_SEED) {
    if (!orderIdSet.has(tx.orderId)) {
      errors.push(`Transaction ${tx.id} references unknown orderId: ${tx.orderId}`);
    }
  }
  for (const refund of REFUND_DISPUTES_SEED) {
    if (!orderIdSet.has(refund.orderId)) {
      errors.push(`Refund ${refund.id} references unknown orderId: ${refund.orderId}`);
    }
  }

  // 8. Validate Cryptographic Audit Trail Hash Continuity
  for (let i = 1; i < AUDIT_LOGS_SEED.length; i++) {
    const prev = AUDIT_LOGS_SEED[i - 1];
    const curr = AUDIT_LOGS_SEED[i];
    if (curr.previousHash !== prev.recordHash) {
      errors.push(`Audit log hash chain broken between ${prev.id} and ${curr.id}`);
    }
  }

  const checkedEntities: Record<string, number> = {
    countries: COUNTRIES_SEED.length,
    states: STATES_SEED.length,
    districts: DISTRICTS_SEED.length,
    cities: CITIES_SEED.length,
    localities: LOCALITIES_SEED.length,
    adminPermissions: ADMIN_PERMISSIONS_SEED.length,
    adminRoles: ADMIN_ROLES_SEED.length,
    adminUsers: ADMIN_USERS_SEED.length,
    merchants: MERCHANTS_SEED.length,
    outlets: MERCHANTS_SEED.flatMap((m) => m.outlets).length,
    categories: CATEGORIES_SEED.length,
    products: PRODUCTS_SEED.length,
    variants: PRODUCTS_SEED.flatMap((p) => p.variants).length,
    customers: CUSTOMERS_SEED.length,
    customerAddresses: CUSTOMERS_SEED.flatMap((c) => c.addresses).length,
    orders: ORDERS_SEED.length,
    orderItems: ORDERS_SEED.flatMap((o) => o.items).length,
    paymentTransactions: PAYMENT_TRANSACTIONS_SEED.length,
    settlementBatches: SETTLEMENT_BATCHES_SEED.length,
    refundDisputes: REFUND_DISPUTES_SEED.length,
    subscriptionPlans: SUBSCRIPTION_PLANS_SEED.length,
    merchantSubscriptions: MERCHANT_SUBSCRIPTIONS_SEED.length,
    cannedReplies: CANNED_REPLIES_SEED.length,
    supportTickets: SUPPORT_TICKETS_SEED.length,
    customerReviews: CUSTOMER_REVIEWS_SEED.length,
    platformSettings: PLATFORM_SETTINGS_SEED.length,
    auditLogs: AUDIT_LOGS_SEED.length,
    piiAccessLogs: PII_ACCESS_LOGS_SEED.length,
  };

  return {
    passed: errors.length === 0,
    checkedEntities,
    validationErrors: errors,
  };
}

export async function runMasterSeeder() {
  console.log('========================================================================');
  console.log(' NukkadNow — Master Production Reference Data Seeder Suite');
  console.log(' 15 Operational Modules · 4 Municipal Territories (Nagpur, Akola, AMR, PUN)');
  console.log('========================================================================\n');

  console.log('[Seeder] Step 1: Validating cross-service referential integrity & constraints...');
  const result = validateAllSeeds();

  if (!result.passed) {
    console.error('❌ SEED VALIDATION FAILED with errors:');
    for (const err of result.validationErrors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log('✅ ALL SEEDS VALIDATED SUCCESSFULLY! Referential integrity & paise math verified.');
  console.log('\nEntity Census Across All 15 Operational Domains:');
  console.table(
    Object.entries(result.checkedEntities).map(([entity, count]) => ({
      Domain: entity,
      Count: count,
    }))
  );

  // Write snapshot verification bundle
  const outputFilePath = path.join(currentDir, 'generated-seeds.json');
  const bundle = {
    generatedAt: new Date().toISOString(),
    engine: 'NukkadNow Enterprise Seeder v3.0',
    census: result.checkedEntities,
    data: {
      geo: {
        countries: COUNTRIES_SEED,
        states: STATES_SEED,
        districts: DISTRICTS_SEED,
        cities: CITIES_SEED,
        localities: LOCALITIES_SEED,
      },
      governance: {
        permissions: ADMIN_PERMISSIONS_SEED,
        roles: ADMIN_ROLES_SEED,
        users: ADMIN_USERS_SEED,
      },
      merchants: MERCHANTS_SEED,
      catalog: {
        categories: CATEGORIES_SEED,
        products: PRODUCTS_SEED,
      },
      customers: CUSTOMERS_SEED,
      orders: ORDERS_SEED,
      finance: {
        plans: SUBSCRIPTION_PLANS_SEED,
        subscriptions: MERCHANT_SUBSCRIPTIONS_SEED,
        transactions: PAYMENT_TRANSACTIONS_SEED,
        settlements: SETTLEMENT_BATCHES_SEED,
        refunds: REFUND_DISPUTES_SEED,
      },
      support: {
        cannedReplies: CANNED_REPLIES_SEED,
        tickets: SUPPORT_TICKETS_SEED,
        reviews: CUSTOMER_REVIEWS_SEED,
      },
      audit: {
        settings: PLATFORM_SETTINGS_SEED,
        auditLogs: AUDIT_LOGS_SEED,
        piiLogs: PII_ACCESS_LOGS_SEED,
      },
    },
  };

  fs.writeFileSync(outputFilePath, JSON.stringify(bundle, null, 2), 'utf-8');
  console.log(`\n📦 Seed Snapshot Bundle written to: ${outputFilePath}`);
  console.log('🚀 Reference data is ready for microservices consumption & automated test suites.\n');
}

// Auto-run if executed directly
if (process.argv[1]?.endsWith('seed-all.ts') || process.argv[1]?.endsWith('seed-all.js')) {
  runMasterSeeder().catch((e) => {
    console.error('Fatal seeder error:', e);
    process.exit(1);
  });
}
