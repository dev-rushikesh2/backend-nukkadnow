/**
 * NukkadNow Global Orders, Line Items, Fulfillment & Lifecycle Events (Orders Seed)
 * Covers:
 * - Counter QR Pickup & Local Delivery orders
 * - Real lifecycle states (PENDING_PAYMENT, PREPARING, READY_FOR_PICKUP, COMPLETED, CANCELLED)
 * - Integer paise calculation standards
 * - Municipal cityCode isolation keys
 */

export interface OrderItemSeed {
  id: string;
  productId: string;
  variantId: string;
  title: string;
  quantity: number;
  unitPricePaise: number;
  totalPricePaise: number;
}

export interface OrderEventSeed {
  eventType: string;
  fromStatus?: string;
  toStatus: string;
  occurredAt: string;
  note?: string;
}

export interface OrderSeed {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  tenantId: string; // Merchant ID
  merchantName: string;
  outletId: string;
  cityCode: string;
  districtCode: string;
  stateCode: string;
  locality: string;
  status: 'PENDING_PAYMENT' | 'PREPARING' | 'READY_FOR_PICKUP' | 'COMPLETED' | 'CANCELLED';
  paymentStatus: 'PAID' | 'UNPAID' | 'REFUNDED';
  paymentMethod: 'UPI' | 'CARD' | 'COUNTER_CASH' | 'NETBANKING';
  fulfillmentType: 'STORE_PICKUP' | 'MERCHANT_DELIVERY';
  pickupSlot?: string;
  pickupToken?: string;
  isPreorder: boolean;
  totalAmountPaise: number;
  taxAmountPaise: number;
  platformFeePaise: number;
  commissionPaise: number;
  merchantEarningsPaise: number;
  createdAt: string;
  items: OrderItemSeed[];
  events: OrderEventSeed[];
}

export const ORDERS_SEED: OrderSeed[] = [
  // 1. Live Preparing Order (Nagpur - Patil Sabji Mandi)
  {
    id: 'ord-ngp-1001',
    orderNumber: 'NN-20261118-001',
    customerId: 'cust-ngp-001',
    customerName: 'Amitabh Joshi',
    customerPhone: '+919823099881',
    tenantId: 'mer-ngp-sabji-001',
    merchantName: 'Patil Fresh Sabji Mandi',
    outletId: 'out-ngp-sabji-001',
    cityCode: 'IN-MH-NGP',
    districtCode: 'NGP',
    stateCode: 'IN-MH',
    locality: 'Sitabuldi',
    status: 'PREPARING',
    paymentStatus: 'PAID',
    paymentMethod: 'UPI',
    fulfillmentType: 'STORE_PICKUP',
    pickupSlot: '18:30 - 18:45',
    pickupToken: 'TKN-042',
    isPreorder: false,
    totalAmountPaise: 5500, // ₹55.00
    taxAmountPaise: 0, // 0% on fresh veg
    platformFeePaise: 500, // ₹5.00
    commissionPaise: 165, // 3%
    merchantEarningsPaise: 4835,
    createdAt: '2026-11-18T18:15:00Z',
    items: [
      {
        id: 'item-1001-1',
        productId: 'prod-patil-001',
        variantId: 'var-patil-palak-250g',
        title: 'Fresh Farm Spinach (Palak) - 250g Bundle',
        quantity: 1,
        unitPricePaise: 2000,
        totalPricePaise: 2000,
      },
      {
        id: 'item-1001-2',
        productId: 'prod-patil-002',
        variantId: 'var-patil-tomato-1kg',
        title: 'Nagpur Native Desi Tomatoes - 1 kg Pack',
        quantity: 1,
        unitPricePaise: 3500,
        totalPricePaise: 3500,
      },
    ],
    events: [
      { eventType: 'ORDER_CREATED', toStatus: 'PENDING_PAYMENT', occurredAt: '2026-11-18T18:15:00Z' },
      { eventType: 'PAYMENT_CONFIRMED', fromStatus: 'PENDING_PAYMENT', toStatus: 'PREPARING', occurredAt: '2026-11-18T18:16:00Z', note: 'Razorpay UPI payment verified' },
    ],
  },

  // 2. Ready for Store Pickup Order (Nagpur - Mahalaxmi Sweets)
  {
    id: 'ord-ngp-1002',
    orderNumber: 'NN-20261118-002',
    customerId: 'cust-ngp-002',
    customerName: 'Neha Pande',
    customerPhone: '+919823099882',
    tenantId: 'mer-ngp-sweets-004',
    merchantName: 'Mahalaxmi Sweets, Dairy & Bakery',
    outletId: 'out-ngp-sweets-004',
    cityCode: 'IN-MH-NGP',
    districtCode: 'NGP',
    stateCode: 'IN-MH',
    locality: 'Ramdaspeth',
    status: 'READY_FOR_PICKUP',
    paymentStatus: 'PAID',
    paymentMethod: 'UPI',
    fulfillmentType: 'STORE_PICKUP',
    pickupSlot: '18:45 - 19:00',
    pickupToken: 'TKN-089',
    isPreorder: false,
    totalAmountPaise: 50000, // ₹500.00
    taxAmountPaise: 4800, // 12% on sweets, 5% on paneer
    platformFeePaise: 1000, // ₹10.00
    commissionPaise: 3500, // 7%
    merchantEarningsPaise: 40700,
    createdAt: '2026-11-18T18:00:00Z',
    items: [
      {
        id: 'item-1002-1',
        productId: 'prod-mahalaxmi-001',
        variantId: 'var-mahalaxmi-barfi-500g',
        title: 'Nagpur GI-Certified Orange Barfi - 500g Gift Box',
        quantity: 1,
        unitPricePaise: 38000,
        totalPricePaise: 38000,
      },
      {
        id: 'item-1002-2',
        productId: 'prod-mahalaxmi-002',
        variantId: 'var-mahalaxmi-paneer-250g',
        title: 'Fresh Malai Buffalo Paneer - 250g Vacuum Block',
        quantity: 1,
        unitPricePaise: 12000,
        totalPricePaise: 12000,
      },
    ],
    events: [
      { eventType: 'ORDER_CREATED', toStatus: 'PENDING_PAYMENT', occurredAt: '2026-11-18T18:00:00Z' },
      { eventType: 'PAYMENT_CONFIRMED', fromStatus: 'PENDING_PAYMENT', toStatus: 'PREPARING', occurredAt: '2026-11-18T18:01:00Z' },
      { eventType: 'READY_FOR_PICKUP', fromStatus: 'PREPARING', toStatus: 'READY_FOR_PICKUP', occurredAt: '2026-11-18T18:20:00Z', note: 'Store packaged and ready at counter' },
    ],
  },

  // 3. Completed Delivery Order (Nagpur - Sharma Kirana)
  {
    id: 'ord-ngp-1003',
    orderNumber: 'NN-20261118-003',
    customerId: 'cust-ngp-001',
    customerName: 'Amitabh Joshi',
    customerPhone: '+919823099881',
    tenantId: 'mer-ngp-kirana-002',
    merchantName: 'Sharma Kirana & General Store',
    outletId: 'out-ngp-kirana-002',
    cityCode: 'IN-MH-NGP',
    districtCode: 'NGP',
    stateCode: 'IN-MH',
    locality: 'Dharampeth',
    status: 'COMPLETED',
    paymentStatus: 'PAID',
    paymentMethod: 'CARD',
    fulfillmentType: 'MERCHANT_DELIVERY',
    isPreorder: false,
    totalAmountPaise: 41000, // ₹410.00
    taxAmountPaise: 2050, // 5% GST
    platformFeePaise: 1500, // ₹15.00
    commissionPaise: 1025, // 2.5%
    merchantEarningsPaise: 36425,
    createdAt: '2026-11-18T14:30:00Z',
    items: [
      {
        id: 'item-1003-1',
        productId: 'prod-sharma-001',
        variantId: 'var-sharma-atta-5kg',
        title: 'Madhya Pradesh Sharbati Whole Wheat Atta - 5 kg Bag',
        quantity: 1,
        unitPricePaise: 24500,
        totalPricePaise: 24500,
      },
      {
        id: 'item-1003-2',
        productId: 'prod-sharma-002',
        variantId: 'var-sharma-turdal-1kg',
        title: 'Vidarbha Organic Unpolished Tur Dal - 1 kg Pouch',
        quantity: 1,
        unitPricePaise: 16500,
        totalPricePaise: 16500,
      },
    ],
    events: [
      { eventType: 'ORDER_CREATED', toStatus: 'PENDING_PAYMENT', occurredAt: '2026-11-18T14:30:00Z' },
      { eventType: 'PAYMENT_CONFIRMED', fromStatus: 'PENDING_PAYMENT', toStatus: 'PREPARING', occurredAt: '2026-11-18T14:31:00Z' },
      { eventType: 'OUT_FOR_DELIVERY', fromStatus: 'PREPARING', toStatus: 'PREPARING', occurredAt: '2026-11-18T15:00:00Z' },
      { eventType: 'DELIVERED', fromStatus: 'PREPARING', toStatus: 'COMPLETED', occurredAt: '2026-11-18T15:25:00Z', note: 'Customer signed handover OTP' },
    ],
  },

  // 4. Pre-order Scheduled (Akola - Garguti Homemade Chivda)
  {
    id: 'ord-akl-2001',
    orderNumber: 'NN-20261118-004',
    customerId: 'cust-akl-003',
    customerName: 'Girish Wagh',
    customerPhone: '+919823099883',
    tenantId: 'mer-akl-homechef-003',
    merchantName: 'Garguti Homemade Chivda & Snacks',
    outletId: 'out-akl-garguti-003',
    cityCode: 'IN-MH-AKL',
    districtCode: 'AKL',
    stateCode: 'IN-MH',
    locality: 'Old City & Sarafa Bazaar',
    status: 'PREPARING',
    paymentStatus: 'PAID',
    paymentMethod: 'UPI',
    fulfillmentType: 'STORE_PICKUP',
    pickupSlot: 'Tomorrow 10:00 - 10:30',
    pickupToken: 'TKN-015',
    isPreorder: true,
    totalAmountPaise: 36000, // ₹360.00
    taxAmountPaise: 4320, // 12% GST
    platformFeePaise: 1000,
    commissionPaise: 2880, // 8%
    merchantEarningsPaise: 27800,
    createdAt: '2026-11-18T16:00:00Z',
    items: [
      {
        id: 'item-2001-1',
        productId: 'prod-garguti-001',
        variantId: 'var-garguti-chivda-1kg',
        title: 'Akola Special Spicy Poha Chivda - 1 kg Family Tin Box',
        quantity: 1,
        unitPricePaise: 36000,
        totalPricePaise: 36000,
      },
    ],
    events: [
      { eventType: 'ORDER_CREATED', toStatus: 'PENDING_PAYMENT', occurredAt: '2026-11-18T16:00:00Z' },
      { eventType: 'PAYMENT_CONFIRMED', fromStatus: 'PENDING_PAYMENT', toStatus: 'PREPARING', occurredAt: '2026-11-18T16:02:00Z', note: 'Artisan scheduled fresh morning frying batch' },
    ],
  },

  // 5. Cancelled Order with Refund (Pune - Pune Organic)
  {
    id: 'ord-pun-3001',
    orderNumber: 'NN-20261118-005',
    customerId: 'cust-pun-007',
    customerName: 'Ananya Roy',
    customerPhone: '+919823099887',
    tenantId: 'mer-pun-organic-007',
    merchantName: 'Pune Organic Farm Produce',
    outletId: 'out-pun-organic-007',
    cityCode: 'IN-MH-PUN',
    districtCode: 'PUN',
    stateCode: 'IN-MH',
    locality: 'Baner',
    status: 'CANCELLED',
    paymentStatus: 'REFUNDED',
    paymentMethod: 'UPI',
    fulfillmentType: 'MERCHANT_DELIVERY',
    isPreorder: false,
    totalAmountPaise: 15000, // ₹150.00
    taxAmountPaise: 0,
    platformFeePaise: 500,
    commissionPaise: 0,
    merchantEarningsPaise: 0,
    createdAt: '2026-11-18T11:00:00Z',
    items: [
      {
        id: 'item-3001-1',
        productId: 'prod-pune-001',
        variantId: 'var-pune-salad-200g',
        title: 'Organic Hydroponic Salad Greens Box - 200g Fresh Clamshell',
        quantity: 1,
        unitPricePaise: 15000,
        totalPricePaise: 15000,
      },
    ],
    events: [
      { eventType: 'ORDER_CREATED', toStatus: 'PENDING_PAYMENT', occurredAt: '2026-11-18T11:00:00Z' },
      { eventType: 'PAYMENT_CONFIRMED', fromStatus: 'PENDING_PAYMENT', toStatus: 'PREPARING', occurredAt: '2026-11-18T11:01:00Z' },
      { eventType: 'ORDER_CANCELLED', fromStatus: 'PREPARING', toStatus: 'CANCELLED', occurredAt: '2026-11-18T11:20:00Z', note: 'Customer requested cancellation due to change of plans; full refund processed' },
    ],
  },

  // 6. High-Value Bulk Order with Dispute Escalation (Nagpur - Mahalaxmi Sweets)
  {
    id: 'ord-ngp-bulk-099',
    orderNumber: 'NN-20261117-911',
    customerId: 'cust-ngp-001',
    customerName: 'Amitabh Joshi',
    customerPhone: '+919823099881',
    tenantId: 'mer-ngp-sweets-004',
    merchantName: 'Mahalaxmi Sweets, Dairy & Bakery',
    outletId: 'out-ngp-sweets-004',
    cityCode: 'IN-MH-NGP',
    districtCode: 'NGP',
    stateCode: 'IN-MH',
    locality: 'Ramdaspeth',
    status: 'COMPLETED',
    paymentStatus: 'PAID',
    paymentMethod: 'UPI',
    fulfillmentType: 'STORE_PICKUP',
    isPreorder: true,
    totalAmountPaise: 720000, // ₹7,200.00 (High-value tier)
    taxAmountPaise: 86400, // 12%
    platformFeePaise: 2500,
    commissionPaise: 50400, // 7%
    merchantEarningsPaise: 580700,
    createdAt: '2026-11-17T12:00:00Z',
    items: [
      {
        id: 'item-bulk-099-1',
        productId: 'prod-mahalaxmi-001',
        variantId: 'var-mahalaxmi-barfi-1kg',
        title: 'Nagpur GI-Certified Orange Barfi - 1 kg Festive Box',
        quantity: 10,
        unitPricePaise: 72000,
        totalPricePaise: 720000,
      },
    ],
    events: [
      { eventType: 'ORDER_CREATED', toStatus: 'PENDING_PAYMENT', occurredAt: '2026-11-17T12:00:00Z' },
      { eventType: 'PAYMENT_CONFIRMED', fromStatus: 'PENDING_PAYMENT', toStatus: 'PREPARING', occurredAt: '2026-11-17T12:05:00Z' },
      { eventType: 'READY_FOR_PICKUP', fromStatus: 'PREPARING', toStatus: 'READY_FOR_PICKUP', occurredAt: '2026-11-17T16:00:00Z' },
      { eventType: 'DELIVERED', fromStatus: 'READY_FOR_PICKUP', toStatus: 'COMPLETED', occurredAt: '2026-11-17T17:00:00Z', note: 'Customer collected boxes for wedding event' },
    ],
  },
];
