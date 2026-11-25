/**
 * NukkadNow Support Tickets, Threads, Canned Replies & UGC Reviews (Support Seed)
 * Enforces:
 * - SLA tracking and priority tiers (URGENT, HIGH, MEDIUM, LOW)
 * - Customer & Merchant ticket partitioning
 * - Internal operator private notes vs public message threads
 * - Customer UGC review sentiment classification
 */

export interface TicketMessageSeed {
  id: string;
  senderType: 'CUSTOMER' | 'MERCHANT' | 'SUPPORT_AGENT' | 'SYSTEM';
  senderName: string;
  messageText: string;
  isInternalNote: boolean;
  sentAt: string;
}

export interface SupportTicketSeed {
  id: string;
  ticketNumber: string;
  category: 'CUSTOMER' | 'MERCHANT';
  subject: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  status: 'OPEN' | 'IN_PROGRESS' | 'ESCALATED' | 'RESOLVED';
  assignedAgentId?: string;
  assignedAgentName?: string;
  requesterName: string;
  requesterPhone: string;
  cityCode: string;
  cityName: string;
  relatedOrderId?: string;
  relatedMerchantId?: string;
  createdAt: string;
  updatedAt: string;
  slaDeadline: string;
  messages: TicketMessageSeed[];
}

export interface CannedReplySeed {
  id: string;
  shortcut: string;
  title: string;
  category: 'CUSTOMER' | 'MERCHANT';
  body: string;
}

export interface CustomerReviewSeed {
  id: string;
  merchantId: string;
  merchantName: string;
  orderId: string;
  customerId: string;
  customerName: string;
  rating: number; // 1 to 5
  reviewText: string;
  sentiment: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';
  moderationStatus: 'APPROVED' | 'PENDING' | 'REJECTED';
  cityCode: string;
  createdAt: string;
}

export const CANNED_REPLIES_SEED: CannedReplySeed[] = [
  {
    id: 'can-001',
    shortcut: '#pickup-ready',
    title: 'Store Pickup Token Ready',
    category: 'CUSTOMER',
    body: 'Hello! Your order is freshly packed and ready at the store pickup counter. Please show your Pickup Token to the storekeeper for instant handover.',
  },
  {
    id: 'can-002',
    shortcut: '#payout-timeline',
    title: 'Daily Settlement Schedule',
    category: 'MERCHANT',
    body: 'Dear Partner, daily settlements are processed every business day at 10:00 AM via NEFT. Transactions captured until midnight are cleared in the morning batch.',
  },
  {
    id: 'can-003',
    shortcut: '#kyc-doc-req',
    title: 'KYC Document Clarification',
    category: 'MERCHANT',
    body: 'Dear Merchant, your FSSAI certificate image was blurry. Kindly upload a clear scanned PDF of your active license from the merchant portal to complete verification.',
  },
];

export const SUPPORT_TICKETS_SEED: SupportTicketSeed[] = [
  // 1. High Priority Order Complaint (Nagpur)
  {
    id: 'tkt-ngp-001',
    ticketNumber: 'TKT-20261118-01',
    category: 'CUSTOMER',
    subject: 'Order delayed beyond estimated pickup slot',
    priority: 'HIGH',
    status: 'IN_PROGRESS',
    assignedAgentId: 'adm-staff-sup-001',
    assignedAgentName: 'Rahul Meshram',
    requesterName: 'Neha Pande',
    requesterPhone: '+919823099882',
    cityCode: 'IN-MH-NGP',
    cityName: 'Nagpur',
    relatedOrderId: 'ord-ngp-1002',
    relatedMerchantId: 'mer-ngp-sweets-004',
    createdAt: '2026-11-18T18:25:00Z',
    updatedAt: '2026-11-18T18:30:00Z',
    slaDeadline: '2026-11-18T19:25:00Z',
    messages: [
      {
        id: 'msg-001',
        senderType: 'CUSTOMER',
        senderName: 'Neha Pande',
        messageText: 'I reached the store at 18:20 but the sweets packaging took longer. Token #089.',
        isInternalNote: false,
        sentAt: '2026-11-18T18:25:00Z',
      },
      {
        id: 'msg-002',
        senderType: 'SUPPORT_AGENT',
        senderName: 'Rahul Meshram',
        messageText: 'Store manager contacted directly via hotline. Box is now handed over. Apologies for the 5-min delay.',
        isInternalNote: true,
        sentAt: '2026-11-18T18:29:00Z',
      },
      {
        id: 'msg-003',
        senderType: 'SUPPORT_AGENT',
        senderName: 'Rahul Meshram',
        messageText: 'Hi Neha, the store counter has expedited your order box. We have credited ₹50 NukkadCash to your wallet for the slight delay.',
        isInternalNote: false,
        sentAt: '2026-11-18T18:30:00Z',
      },
    ],
  },

  // 2. Urgent Merchant Escalation (Pune)
  {
    id: 'tkt-pun-002',
    ticketNumber: 'TKT-20261118-02',
    category: 'MERCHANT',
    subject: 'High-value bulk refund dispute for damaged goods',
    priority: 'URGENT',
    status: 'ESCALATED',
    assignedAgentId: 'adm-city-pun-004',
    assignedAgentName: 'Sneha Kulkarni',
    requesterName: 'Rohit Kadam',
    requesterPhone: '+919822577889',
    cityCode: 'IN-MH-PUN',
    cityName: 'Pune',
    relatedMerchantId: 'mer-pun-organic-007',
    createdAt: '2026-11-18T16:00:00Z',
    updatedAt: '2026-11-18T16:40:00Z',
    slaDeadline: '2026-11-18T18:00:00Z',
    messages: [
      {
        id: 'msg-004',
        senderType: 'MERCHANT',
        senderName: 'Rohit Kadam',
        messageText: 'Customer requested refund claiming damaged hydroponics, but delivery agent states box was dropped at customer gate.',
        isInternalNote: false,
        sentAt: '2026-11-18T16:00:00Z',
      },
      {
        id: 'msg-005',
        senderType: 'SUPPORT_AGENT',
        senderName: 'Sneha Kulkarni',
        messageText: 'Reviewing photo proof submitted by customer and delivery handover geostamp.',
        isInternalNote: true,
        sentAt: '2026-11-18T16:40:00Z',
      },
    ],
  },

  // 3. Merchant KYC Clarification (Nashik - Shree Medicals)
  {
    id: 'tkt-nsk-003',
    ticketNumber: 'TKT-20261118-03',
    category: 'MERCHANT',
    subject: 'Drug License 20B/21B endorsement upload clarification',
    priority: 'HIGH',
    status: 'IN_PROGRESS',
    assignedAgentId: 'adm-staff-kyc-001',
    assignedAgentName: 'Sunita KYC Compliance',
    requesterName: 'Mahesh Kulkarni',
    requesterPhone: '+919822455667',
    cityCode: 'IN-MH-NSK',
    cityName: 'Nashik',
    relatedMerchantId: 'mer-nsk-medicals-009',
    createdAt: '2026-11-18T14:00:00Z',
    updatedAt: '2026-11-18T14:45:00Z',
    slaDeadline: '2026-11-19T14:00:00Z',
    messages: [
      {
        id: 'msg-006',
        senderType: 'MERCHANT',
        senderName: 'Mahesh Kulkarni',
        messageText: 'We have renewed our FDA Maharashtra Form 20B license. Where do we upload the new copy?',
        isInternalNote: false,
        sentAt: '2026-11-18T14:00:00Z',
      },
      {
        id: 'msg-007',
        senderType: 'SUPPORT_AGENT',
        senderName: 'Sunita KYC Compliance',
        messageText: 'Unlocked document slot #3 in merchant portal. Please re-upload before 6 PM today.',
        isInternalNote: false,
        sentAt: '2026-11-18T14:45:00Z',
      },
    ],
  },

  // 4. Critical Payment Escalation (Mumbai - Aapla Machhi)
  {
    id: 'tkt-mum-004',
    ticketNumber: 'TKT-20261118-04',
    category: 'MERCHANT',
    subject: 'Urgent: Daily settlement batch reconciliation query',
    priority: 'URGENT',
    status: 'OPEN',
    assignedAgentId: 'adm-staff-fin-001',
    assignedAgentName: 'Pradeep Joshi (Finance Auditor)',
    requesterName: 'Sunil Tandel',
    requesterPhone: '+919820011223',
    cityCode: 'IN-MH-MUM',
    cityName: 'Mumbai',
    relatedMerchantId: 'mer-mum-poultry-010',
    createdAt: '2026-11-18T17:00:00Z',
    updatedAt: '2026-11-18T17:00:00Z',
    slaDeadline: '2026-11-18T19:00:00Z',
    messages: [
      {
        id: 'msg-008',
        senderType: 'MERCHANT',
        senderName: 'Sunil Tandel',
        messageText: 'Daily NEFT credit of ₹60,750 was not reflected in our Kotak bank account.',
        isInternalNote: false,
        sentAt: '2026-11-18T17:00:00Z',
      },
    ],
  },
];

export const CUSTOMER_REVIEWS_SEED: CustomerReviewSeed[] = [
  {
    id: 'rev-001',
    merchantId: 'mer-ngp-sabji-001',
    merchantName: 'Patil Fresh Sabji Mandi',
    orderId: 'ord-ngp-1001',
    customerId: 'cust-ngp-001',
    customerName: 'Amitabh Joshi',
    rating: 5,
    reviewText: 'Exceptionally fresh palak and desi tomatoes! Store pickup was done in 30 seconds with the QR token. True Vidarbha farm quality.',
    sentiment: 'POSITIVE',
    moderationStatus: 'APPROVED',
    cityCode: 'IN-MH-NGP',
    createdAt: '2026-11-18T19:00:00Z',
  },
  {
    id: 'rev-002',
    merchantId: 'mer-akl-homechef-003',
    merchantName: 'Garguti Homemade Chivda & Snacks',
    orderId: 'ord-akl-2001',
    customerId: 'cust-akl-003',
    customerName: 'Girish Wagh',
    rating: 5,
    reviewText: 'The best spicy poha chivda in Akola! Authentic home kitchen taste, crispy groundnuts and zero excess oil. Highly recommended!',
    sentiment: 'POSITIVE',
    moderationStatus: 'APPROVED',
    cityCode: 'IN-MH-AKL',
    createdAt: '2026-11-17T18:00:00Z',
  },
  {
    id: 'rev-003-flagged',
    merchantId: 'mer-ngp-sweets-004',
    merchantName: 'Mahalaxmi Sweets, Dairy & Bakery',
    orderId: 'ord-ngp-1002',
    customerId: 'cust-ngp-008-flagged',
    customerName: 'Unknown Caller',
    rating: 1,
    reviewText: 'Abusive spam text with external spam links www.fake-coupon.biz',
    sentiment: 'NEGATIVE',
    moderationStatus: 'REJECTED',
    cityCode: 'IN-MH-NGP',
    createdAt: '2026-11-18T12:00:00Z',
  },
];
