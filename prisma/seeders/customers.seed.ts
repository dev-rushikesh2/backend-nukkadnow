/**
 * NukkadNow Customer Directory, Profiles, Saved Addresses & Segments (Customers Seed)
 * Realistic customer test data across Nagpur, Akola, Amravati, and Pune.
 * Enforces:
 * - Clean privacy controls (PII unmasking audit compliance)
 * - Customer segmentation (NEW, ACTIVE, REPEAT, VIP, INACTIVE)
 * - Lifetime spend in integer paise
 */

export interface CustomerAddressSeed {
  id: string;
  label: 'Home' | 'Work' | 'Other';
  addressLine: string;
  locality: string;
  city: string;
  cityCode: string;
  pincode: string;
  latitude: number;
  longitude: number;
  isDefault: boolean;
}

export interface CustomerSeed {
  id: string;
  fullName: string;
  phoneNumber: string;
  email?: string;
  cityCode: string;
  cityName: string;
  status: 'ACTIVE' | 'RESTRICTED' | 'SUSPENDED';
  segment: 'NEW' | 'ACTIVE' | 'REPEAT' | 'VIP' | 'INACTIVE';
  totalOrdersCount: number;
  lifetimeSpendPaise: number;
  registeredAt: string;
  lastActiveAt: string;
  addresses: CustomerAddressSeed[];
}

export const CUSTOMERS_SEED: CustomerSeed[] = [
  // 1. Nagpur Active Repeat Customer
  {
    id: 'cust-ngp-001',
    fullName: 'Amitabh Joshi',
    phoneNumber: '+919823099881',
    email: 'amitabh.joshi@gmail.com',
    cityCode: 'IN-MH-NGP',
    cityName: 'Nagpur',
    status: 'ACTIVE',
    segment: 'VIP',
    totalOrdersCount: 24,
    lifetimeSpendPaise: 3850000, // ₹38,500.00
    registeredAt: '2026-08-15T09:30:00Z',
    lastActiveAt: '2026-11-18T18:45:00Z',
    addresses: [
      {
        id: 'addr-ngp-001-1',
        label: 'Home',
        addressLine: 'A-402, Shivom Enclave, Dharampeth',
        locality: 'Dharampeth',
        city: 'Nagpur',
        cityCode: 'IN-MH-NGP',
        pincode: '440010',
        latitude: 21.1415,
        longitude: 79.0635,
        isDefault: true,
      },
      {
        id: 'addr-ngp-001-2',
        label: 'Work',
        addressLine: 'Tech Tower, Civil Lines',
        locality: 'Sadar',
        city: 'Nagpur',
        cityCode: 'IN-MH-NGP',
        pincode: '440001',
        latitude: 21.161,
        longitude: 79.0825,
        isDefault: false,
      },
    ],
  },

  // 2. Nagpur Sitabuldi Customer
  {
    id: 'cust-ngp-002',
    fullName: 'Neha Pande',
    phoneNumber: '+919823099882',
    email: 'neha.pande@outlook.com',
    cityCode: 'IN-MH-NGP',
    cityName: 'Nagpur',
    status: 'ACTIVE',
    segment: 'REPEAT',
    totalOrdersCount: 11,
    lifetimeSpendPaise: 1420000, // ₹14,200.00
    registeredAt: '2026-09-01T11:15:00Z',
    lastActiveAt: '2026-11-18T15:20:00Z',
    addresses: [
      {
        id: 'addr-ngp-002-1',
        label: 'Home',
        addressLine: '22, Anand Nagar, Sitabuldi',
        locality: 'Sitabuldi',
        city: 'Nagpur',
        cityCode: 'IN-MH-NGP',
        pincode: '440012',
        latitude: 21.1472,
        longitude: 79.0845,
        isDefault: true,
      },
    ],
  },

  // 3. Akola Active Customer
  {
    id: 'cust-akl-003',
    fullName: 'Girish Wagh',
    phoneNumber: '+919823099883',
    email: 'girish.wagh@yahoo.in',
    cityCode: 'IN-MH-AKL',
    cityName: 'Akola',
    status: 'ACTIVE',
    segment: 'REPEAT',
    totalOrdersCount: 8,
    lifetimeSpendPaise: 960000, // ₹9,600.00
    registeredAt: '2026-09-20T14:00:00Z',
    lastActiveAt: '2026-11-17T19:10:00Z',
    addresses: [
      {
        id: 'addr-akl-003-1',
        label: 'Home',
        addressLine: 'Bunglow 5, Toshniwal Layout',
        locality: 'Toshniwal Layout',
        city: 'Akola',
        cityCode: 'IN-MH-AKL',
        pincode: '444005',
        latitude: 20.69,
        longitude: 77.026,
        isDefault: true,
      },
    ],
  },

  // 4. Akola New Customer
  {
    id: 'cust-akl-004',
    fullName: 'Shrikant Patil',
    phoneNumber: '+919823099884',
    cityCode: 'IN-MH-AKL',
    cityName: 'Akola',
    status: 'ACTIVE',
    segment: 'NEW',
    totalOrdersCount: 1,
    lifetimeSpendPaise: 45000, // ₹450.00
    registeredAt: '2026-11-16T16:45:00Z',
    lastActiveAt: '2026-11-18T10:00:00Z',
    addresses: [
      {
        id: 'addr-akl-004-1',
        label: 'Home',
        addressLine: 'Near Durga Chowk, Old City',
        locality: 'Old City & Sarafa Bazaar',
        city: 'Akola',
        cityCode: 'IN-MH-AKL',
        pincode: '444002',
        latitude: 20.695,
        longitude: 77.003,
        isDefault: true,
      },
    ],
  },

  // 5. Amravati Customer
  {
    id: 'cust-amr-005',
    fullName: 'Pallavi Deshpande',
    phoneNumber: '+919823099885',
    email: 'pallavi.deshpande@rediffmail.com',
    cityCode: 'IN-MH-AMR',
    cityName: 'Amravati',
    status: 'ACTIVE',
    segment: 'ACTIVE',
    totalOrdersCount: 5,
    lifetimeSpendPaise: 680000, // ₹6,800.00
    registeredAt: '2026-10-05T08:20:00Z',
    lastActiveAt: '2026-11-18T12:30:00Z',
    addresses: [
      {
        id: 'addr-amr-005-1',
        label: 'Home',
        addressLine: 'Row House 12, Camp Area',
        locality: 'Camp Area',
        city: 'Amravati',
        cityCode: 'IN-MH-AMR',
        pincode: '444602',
        latitude: 20.942,
        longitude: 77.756,
        isDefault: true,
      },
    ],
  },

  // 6. Pune VIP Customer
  {
    id: 'cust-pun-006',
    fullName: 'Sameer Joshi',
    phoneNumber: '+919823099886',
    email: 'sameer.j@gmail.com',
    cityCode: 'IN-MH-PUN',
    cityName: 'Pune',
    status: 'ACTIVE',
    segment: 'VIP',
    totalOrdersCount: 38,
    lifetimeSpendPaise: 8250000, // ₹82,500.00
    registeredAt: '2026-07-10T10:00:00Z',
    lastActiveAt: '2026-11-18T20:15:00Z',
    addresses: [
      {
        id: 'addr-pun-006-1',
        label: 'Home',
        addressLine: 'Flat 1102, Marvel Cerise, Kothrud',
        locality: 'Kothrud',
        city: 'Pune',
        cityCode: 'IN-MH-PUN',
        pincode: '411038',
        latitude: 18.5085,
        longitude: 73.809,
        isDefault: true,
      },
      {
        id: 'addr-pun-006-2',
        label: 'Work',
        addressLine: 'Quadron Business Park, Hinjawadi',
        locality: 'Baner',
        city: 'Pune',
        cityCode: 'IN-MH-PUN',
        pincode: '411045',
        latitude: 18.56,
        longitude: 73.788,
        isDefault: false,
      },
    ],
  },

  // 7. Pune Baner Customer
  {
    id: 'cust-pun-007',
    fullName: 'Ananya Roy',
    phoneNumber: '+919823099887',
    email: 'ananya.roy@corporate.com',
    cityCode: 'IN-MH-PUN',
    cityName: 'Pune',
    status: 'ACTIVE',
    segment: 'ACTIVE',
    totalOrdersCount: 7,
    lifetimeSpendPaise: 1140000, // ₹11,400.00
    registeredAt: '2026-10-12T13:40:00Z',
    lastActiveAt: '2026-11-18T17:00:00Z',
    addresses: [
      {
        id: 'addr-pun-007-1',
        label: 'Home',
        addressLine: 'Building B, Rohan Leher, Baner',
        locality: 'Baner',
        city: 'Pune',
        cityCode: 'IN-MH-PUN',
        pincode: '411045',
        latitude: 18.561,
        longitude: 73.785,
        isDefault: true,
      },
    ],
  },

  // 8. Restricted Customer (Fraud Detection Flag)
  {
    id: 'cust-ngp-008-flagged',
    fullName: 'Unknown Caller',
    phoneNumber: '+919823099888',
    cityCode: 'IN-MH-NGP',
    cityName: 'Nagpur',
    status: 'RESTRICTED',
    segment: 'INACTIVE',
    totalOrdersCount: 3,
    lifetimeSpendPaise: 85000,
    registeredAt: '2026-11-01T10:00:00Z',
    lastActiveAt: '2026-11-05T12:00:00Z',
    addresses: [
      {
        id: 'addr-ngp-008-1',
        label: 'Other',
        addressLine: 'Railway Station Road, Nagpur',
        locality: 'Sitabuldi',
        city: 'Nagpur',
        cityCode: 'IN-MH-NGP',
        pincode: '440001',
        latitude: 21.15,
        longitude: 79.085,
        isDefault: true,
      },
    ],
  },

  // 9. Nashik Customer (College Road)
  {
    id: 'cust-nsk-009',
    fullName: 'Sunil Shinde',
    phoneNumber: '+919822011224',
    email: 'sunil.shinde@nashik.in',
    cityCode: 'IN-MH-NSK',
    cityName: 'Nashik',
    status: 'ACTIVE',
    segment: 'ACTIVE',
    totalOrdersCount: 6,
    lifetimeSpendPaise: 950000,
    registeredAt: '2026-10-01T10:00:00Z',
    lastActiveAt: '2026-11-18T16:00:00Z',
    addresses: [
      {
        id: 'addr-nsk-009-1',
        label: 'Home',
        addressLine: 'Bunglow 4, D’Souza Colony, College Road',
        locality: 'College Road',
        city: 'Nashik',
        cityCode: 'IN-MH-NSK',
        pincode: '422005',
        latitude: 20.006,
        longitude: 73.763,
        isDefault: true,
      },
    ],
  },

  // 10. Mumbai Customer (Dadar West)
  {
    id: 'cust-mum-010',
    fullName: 'Kavita Sawant',
    phoneNumber: '+919820033445',
    email: 'kavita.sawant@mumbai.in',
    cityCode: 'IN-MH-MUM',
    cityName: 'Mumbai',
    status: 'ACTIVE',
    segment: 'VIP',
    totalOrdersCount: 19,
    lifetimeSpendPaise: 4200000,
    registeredAt: '2026-08-01T12:00:00Z',
    lastActiveAt: '2026-11-18T17:30:00Z',
    addresses: [
      {
        id: 'addr-mum-010-1',
        label: 'Home',
        addressLine: 'Flat 4B, Shivaji Park View, Dadar West',
        locality: 'Dadar',
        city: 'Mumbai',
        cityCode: 'IN-MH-MUM',
        pincode: '400028',
        latitude: 19.02,
        longitude: 72.845,
        isDefault: true,
      },
    ],
  },
];
