/**
 * NukkadNow Local Merchants, Outlets & KYC Reference Dataset (Merchants Seed)
 * 8 Hyperlocal Indian Merchants across Nagpur, Akola, Amravati, and Pune:
 * 1. Patil Fresh Sabji Mandi (Nagpur - Sitabuldi)
 * 2. Sharma Kirana & General Store (Nagpur - Dharampeth)
 * 3. Garguti Homemade Chivda & Snacks (Akola - Home Chef, Masked Address per ADR-0011)
 * 4. Mahalaxmi Sweets, Dairy & Bakery (Nagpur - Ramdaspeth)
 * 5. Vidarbha Agro & Grains (Akola - Civil Lines)
 * 6. Amravati Spices & Masala (Amravati - Rajapeth)
 * 7. Pune Organic Farm Produce (Pune - Baner)
 * 8. Kothrud Artisan Bakers (Pune - Kothrud)
 */

export interface OutletHourSeed {
  dayOfWeek: number; // 0 = Sunday, 1 = Monday ... 6 = Saturday
  openTime: string;
  closeTime: string;
  breakTime?: string;
  isClosed: boolean;
}

export interface VerificationRecordSeed {
  documentType: 'PAN' | 'AADHAAR' | 'FSSAI' | 'GSTIN' | 'SHOP_ACT';
  documentNumber: string;
  fileUrl: string;
  verificationStatus: 'VERIFIED' | 'PENDING' | 'REJECTED';
  verifiedAt?: string;
  verifiedBy?: string;
  rejectionReason?: string;
}

export interface MerchantOutletSeed {
  id: string;
  name: string;
  sellerMode: 'PERMANENT' | 'HOME_CHEF' | 'SEASONAL' | 'EVENT' | 'ARTISAN';
  addressLine: string;
  locality: string;
  city: string;
  cityCode: string;
  district: string;
  districtCode: string;
  state: string;
  stateCode: string;
  pincode: string;
  latitude: number;
  longitude: number;
  isAddressPublic: boolean;
  storePickup: boolean;
  merchantDelivery: boolean;
  deliveryRadiusKm: number;
  minOrderValue: number;
  prepTimeMinutes: number;
  isActive: boolean;
  hours: OutletHourSeed[];
}

export interface MerchantSeed {
  id: string;
  organizationName: string;
  legalBusinessName: string;
  contactName: string;
  contactPhone: string;
  email: string;
  businessType: 'retail' | 'home' | 'manufacturer' | 'seasonal' | 'event';
  category: string;
  description: string;
  verificationStatus: 'VERIFIED' | 'PENDING' | 'SUSPENDED';
  isSuspended: boolean;
  cityCode: string;
  districtCode: string;
  stateCode: string;
  bankDetails: {
    bankName: string;
    accountNumberMasked: string;
    ifscCode: string;
  };
  outlets: MerchantOutletSeed[];
  verifications: VerificationRecordSeed[];
}

const STANDARD_HOURS: OutletHourSeed[] = [
  { dayOfWeek: 0, openTime: '08:00', closeTime: '21:00', isClosed: false },
  { dayOfWeek: 1, openTime: '08:00', closeTime: '21:30', isClosed: false },
  { dayOfWeek: 2, openTime: '08:00', closeTime: '21:30', isClosed: false },
  { dayOfWeek: 3, openTime: '08:00', closeTime: '21:30', isClosed: false },
  { dayOfWeek: 4, openTime: '08:00', closeTime: '21:30', isClosed: false },
  { dayOfWeek: 5, openTime: '08:00', closeTime: '22:00', isClosed: false },
  { dayOfWeek: 6, openTime: '08:00', closeTime: '22:00', isClosed: false },
];

export const MERCHANTS_SEED: MerchantSeed[] = [
  // 1. Patil Fresh Sabji Mandi (Nagpur)
  {
    id: 'mer-ngp-sabji-001',
    organizationName: 'Patil Fresh Sabji Mandi',
    legalBusinessName: 'Patil Agro & Fresh Vegetables Private Limited',
    contactName: 'Vinod Patil',
    contactPhone: '+919823011223',
    email: 'vinod.patil@patilsabji.com',
    businessType: 'retail',
    category: 'Vegetables & Fruits',
    description: 'Direct farm-sourced daily fresh vegetables, green leafy veggies, herbs, and seasonal fruits from local Vidarbha farmers.',
    verificationStatus: 'VERIFIED',
    isSuspended: false,
    cityCode: 'IN-MH-NGP',
    districtCode: 'NGP',
    stateCode: 'IN-MH',
    bankDetails: {
      bankName: 'State Bank of India',
      accountNumberMasked: '**********1245',
      ifscCode: 'SBIN0000432',
    },
    outlets: [
      {
        id: 'out-ngp-sabji-001',
        name: 'Patil Fresh Mandi - Sitabuldi Main',
        sellerMode: 'PERMANENT',
        addressLine: 'Shop 12, Cotton Market Yard, Sitabuldi',
        locality: 'Sitabuldi',
        city: 'Nagpur',
        cityCode: 'IN-MH-NGP',
        district: 'Nagpur',
        districtCode: 'NGP',
        state: 'Maharashtra',
        stateCode: 'IN-MH',
        pincode: '440012',
        latitude: 21.1465,
        longitude: 79.0835,
        isAddressPublic: true,
        storePickup: true,
        merchantDelivery: true,
        deliveryRadiusKm: 6.0,
        minOrderValue: 150,
        prepTimeMinutes: 15,
        isActive: true,
        hours: STANDARD_HOURS,
      },
    ],
    verifications: [
      { documentType: 'PAN', documentNumber: 'AAACP1234D', fileUrl: 'https://cdn.nukkadnow.com/kyc/patil_pan.pdf', verificationStatus: 'VERIFIED', verifiedAt: '2026-11-10T10:00:00Z', verifiedBy: 'adm-staff-kyc-001' },
      { documentType: 'FSSAI', documentNumber: '11521034000123', fileUrl: 'https://cdn.nukkadnow.com/kyc/patil_fssai.pdf', verificationStatus: 'VERIFIED', verifiedAt: '2026-11-10T10:15:00Z', verifiedBy: 'adm-staff-kyc-001' },
    ],
  },

  // 2. Sharma Kirana & General Store (Nagpur)
  {
    id: 'mer-ngp-kirana-002',
    organizationName: 'Sharma Kirana & General Store',
    legalBusinessName: 'Sharma Brothers Retail Traders',
    contactName: 'Rajesh Sharma',
    contactPhone: '+919822233445',
    email: 'rajesh.sharma@sharmakirana.com',
    businessType: 'retail',
    category: 'Grocery & Daily Needs',
    description: 'Trusted neighborhood grocery store serving premium Sharbati wheat, Kolam rice, pure pulses, cold-pressed oils, and household goods.',
    verificationStatus: 'VERIFIED',
    isSuspended: false,
    cityCode: 'IN-MH-NGP',
    districtCode: 'NGP',
    stateCode: 'IN-MH',
    bankDetails: {
      bankName: 'HDFC Bank',
      accountNumberMasked: '**********9981',
      ifscCode: 'HDFC0001234',
    },
    outlets: [
      {
        id: 'out-ngp-kirana-002',
        name: 'Sharma Kirana - Dharampeth Outlet',
        sellerMode: 'PERMANENT',
        addressLine: '45, Laxmi Bhuvan Chowk, Dharampeth',
        locality: 'Dharampeth',
        city: 'Nagpur',
        cityCode: 'IN-MH-NGP',
        district: 'Nagpur',
        districtCode: 'NGP',
        state: 'Maharashtra',
        stateCode: 'IN-MH',
        pincode: '440010',
        latitude: 21.1408,
        longitude: 79.062,
        isAddressPublic: true,
        storePickup: true,
        merchantDelivery: true,
        deliveryRadiusKm: 5.0,
        minOrderValue: 200,
        prepTimeMinutes: 20,
        isActive: true,
        hours: STANDARD_HOURS,
      },
    ],
    verifications: [
      { documentType: 'PAN', documentNumber: 'BBBSP5678K', fileUrl: 'https://cdn.nukkadnow.com/kyc/sharma_pan.pdf', verificationStatus: 'VERIFIED', verifiedAt: '2026-11-12T14:00:00Z', verifiedBy: 'adm-staff-kyc-001' },
      { documentType: 'GSTIN', documentNumber: '27BBBSP5678K1Z5', fileUrl: 'https://cdn.nukkadnow.com/kyc/sharma_gst.pdf', verificationStatus: 'VERIFIED', verifiedAt: '2026-11-12T14:10:00Z', verifiedBy: 'adm-staff-kyc-001' },
    ],
  },

  // 3. Garguti Homemade Chivda & Snacks (Akola - Home Chef with Masked Privacy Address)
  {
    id: 'mer-akl-homechef-003',
    organizationName: 'Garguti Homemade Chivda & Snacks',
    legalBusinessName: 'Kulkarni Traditional Food Products',
    contactName: 'Sunita Kulkarni',
    contactPhone: '+919822144556',
    email: 'sunita.kulkarni@gargutichivda.in',
    businessType: 'home',
    category: 'Home Bakery & Traditional Snacks',
    description: 'Authentic homemade Vidarbha special spicy poha chivda, bakarwadi, cornflakes chivda, chakli, besan laddoo, and festive faral made with pure groundnut oil.',
    verificationStatus: 'VERIFIED',
    isSuspended: false,
    cityCode: 'IN-MH-AKL',
    districtCode: 'AKL',
    stateCode: 'IN-MH',
    bankDetails: {
      bankName: 'Bank of Maharashtra',
      accountNumberMasked: '**********6789',
      ifscCode: 'MAHB0000123',
    },
    outlets: [
      {
        id: 'out-akl-garguti-003',
        name: 'Garguti Artisan Kitchen - Old City',
        sellerMode: 'HOME_CHEF',
        addressLine: 'Flat 302, Radha Krishna Heights, Sarafa Bazaar', // Masked from public view
        locality: 'Old City & Sarafa Bazaar',
        city: 'Akola',
        cityCode: 'IN-MH-AKL',
        district: 'Akola',
        districtCode: 'AKL',
        state: 'Maharashtra',
        stateCode: 'IN-MH',
        pincode: '444002',
        latitude: 20.694,
        longitude: 77.004,
        isAddressPublic: false, // Strict Privacy Shield
        storePickup: true,
        merchantDelivery: true,
        deliveryRadiusKm: 8.0,
        minOrderValue: 200,
        prepTimeMinutes: 45,
        isActive: true,
        hours: STANDARD_HOURS,
      },
    ],
    verifications: [
      { documentType: 'AADHAAR', documentNumber: 'XXXXXXXX8891', fileUrl: 'https://cdn.nukkadnow.com/kyc/garguti_aadhaar.pdf', verificationStatus: 'VERIFIED', verifiedAt: '2026-11-14T11:00:00Z', verifiedBy: 'adm-staff-kyc-001' },
      { documentType: 'FSSAI', documentNumber: '21522045000567', fileUrl: 'https://cdn.nukkadnow.com/kyc/garguti_fssai.pdf', verificationStatus: 'VERIFIED', verifiedAt: '2026-11-14T11:30:00Z', verifiedBy: 'adm-staff-kyc-001' },
    ],
  },

  // 4. Mahalaxmi Sweets, Dairy & Bakery (Nagpur)
  {
    id: 'mer-ngp-sweets-004',
    organizationName: 'Mahalaxmi Sweets, Dairy & Bakery',
    legalBusinessName: 'Mahalaxmi Food & Confectioneries LLP',
    contactName: 'Anand Joshi',
    contactPhone: '+919890077889',
    email: 'anand.joshi@mahalaxmisweets.com',
    businessType: 'retail',
    category: 'Dairy, Sweets & Bakery',
    description: 'Nagpur orange barfi, motichoor laddoo, fresh buffalo paneer, pure cow ghee, daily milk, hot jalebi, and sourdough breads.',
    verificationStatus: 'VERIFIED',
    isSuspended: false,
    cityCode: 'IN-MH-NGP',
    districtCode: 'NGP',
    stateCode: 'IN-MH',
    bankDetails: {
      bankName: 'Axis Bank',
      accountNumberMasked: '**********5512',
      ifscCode: 'UTIB0000045',
    },
    outlets: [
      {
        id: 'out-ngp-sweets-004',
        name: 'Mahalaxmi Sweets - Ramdaspeth Flagship',
        sellerMode: 'PERMANENT',
        addressLine: 'Plot 18, Central Bazaar Road, Ramdaspeth',
        locality: 'Ramdaspeth',
        city: 'Nagpur',
        cityCode: 'IN-MH-NGP',
        district: 'Nagpur',
        districtCode: 'NGP',
        state: 'Maharashtra',
        stateCode: 'IN-MH',
        pincode: '440010',
        latitude: 21.136,
        longitude: 79.072,
        isAddressPublic: true,
        storePickup: true,
        merchantDelivery: true,
        deliveryRadiusKm: 8.0,
        minOrderValue: 250,
        prepTimeMinutes: 20,
        isActive: true,
        hours: STANDARD_HOURS,
      },
    ],
    verifications: [
      { documentType: 'GSTIN', documentNumber: '27AAAFM1234F1Z8', fileUrl: 'https://cdn.nukkadnow.com/kyc/mahalaxmi_gst.pdf', verificationStatus: 'VERIFIED', verifiedAt: '2026-11-15T15:00:00Z', verifiedBy: 'adm-staff-kyc-001' },
      { documentType: 'FSSAI', documentNumber: '11521033000890', fileUrl: 'https://cdn.nukkadnow.com/kyc/mahalaxmi_fssai.pdf', verificationStatus: 'VERIFIED', verifiedAt: '2026-11-15T15:15:00Z', verifiedBy: 'adm-staff-kyc-001' },
    ],
  },

  // 5. Vidarbha Agro & Grains (Akola)
  {
    id: 'mer-akl-agro-005',
    organizationName: 'Vidarbha Agro & Grains',
    legalBusinessName: 'Vidarbha Farmers Trading Syndicate',
    contactName: 'Nitin Deshmukh',
    contactPhone: '+919822355667',
    email: 'nitin@vidarbhaagro.com',
    businessType: 'retail',
    category: 'Grocery & Daily Needs',
    description: 'Wholesale & retail supplier of Akola cotton oil, organic tur dal, chana dal, soybean oil, and organic grains.',
    verificationStatus: 'VERIFIED',
    isSuspended: false,
    cityCode: 'IN-MH-AKL',
    districtCode: 'AKL',
    stateCode: 'IN-MH',
    bankDetails: {
      bankName: 'ICICI Bank',
      accountNumberMasked: '**********3341',
      ifscCode: 'ICIC0000214',
    },
    outlets: [
      {
        id: 'out-akl-agro-005',
        name: 'Vidarbha Agro - Civil Lines Depo',
        sellerMode: 'PERMANENT',
        addressLine: 'Grain Market Yard, Civil Lines',
        locality: 'Civil Lines',
        city: 'Akola',
        cityCode: 'IN-MH-AKL',
        district: 'Akola',
        districtCode: 'AKL',
        state: 'Maharashtra',
        stateCode: 'IN-MH',
        pincode: '444001',
        latitude: 20.702,
        longitude: 77.012,
        isAddressPublic: true,
        storePickup: true,
        merchantDelivery: true,
        deliveryRadiusKm: 10.0,
        minOrderValue: 300,
        prepTimeMinutes: 30,
        isActive: true,
        hours: STANDARD_HOURS,
      },
    ],
    verifications: [
      { documentType: 'GSTIN', documentNumber: '27AABCV8912H1ZQ', fileUrl: 'https://cdn.nukkadnow.com/kyc/vidarbha_gst.pdf', verificationStatus: 'VERIFIED', verifiedAt: '2026-11-16T12:00:00Z', verifiedBy: 'adm-staff-kyc-001' },
    ],
  },

  // 6. Amravati Spices & Masala (Amravati)
  {
    id: 'mer-amr-spices-006',
    organizationName: 'Amravati Spices & Masala',
    legalBusinessName: 'Shri Ganesh Agro & Spices Works',
    contactName: 'Sanjay Mundhada',
    contactPhone: '+919822466778',
    email: 'sanjay@amravatispices.com',
    businessType: 'retail',
    category: 'Grocery & Daily Needs',
    description: 'Specialty stone-ground Vidarbha goda masala, red chilli powder (Guntur & Byadgi blend), turmeric, coriander seed powder, and homemade pickles.',
    verificationStatus: 'VERIFIED',
    isSuspended: false,
    cityCode: 'IN-MH-AMR',
    districtCode: 'AMR',
    stateCode: 'IN-MH',
    bankDetails: {
      bankName: 'State Bank of India',
      accountNumberMasked: '**********7823',
      ifscCode: 'SBIN0000312',
    },
    outlets: [
      {
        id: 'out-amr-spices-006',
        name: 'Amravati Spices - Rajapeth Market',
        sellerMode: 'PERMANENT',
        addressLine: 'Shop 8, Near Rajapeth Police Station, Rajapeth',
        locality: 'Rajapeth',
        city: 'Amravati',
        cityCode: 'IN-MH-AMR',
        district: 'Amravati',
        districtCode: 'AMR',
        state: 'Maharashtra',
        stateCode: 'IN-MH',
        pincode: '444601',
        latitude: 20.928,
        longitude: 77.765,
        isAddressPublic: true,
        storePickup: true,
        merchantDelivery: true,
        deliveryRadiusKm: 6.0,
        minOrderValue: 200,
        prepTimeMinutes: 20,
        isActive: true,
        hours: STANDARD_HOURS,
      },
    ],
    verifications: [
      { documentType: 'FSSAI', documentNumber: '11522041000912', fileUrl: 'https://cdn.nukkadnow.com/kyc/amravati_fssai.pdf', verificationStatus: 'VERIFIED', verifiedAt: '2026-11-16T14:30:00Z', verifiedBy: 'adm-staff-kyc-001' },
    ],
  },

  // 7. Pune Organic Farm Produce (Pune)
  {
    id: 'mer-pun-organic-007',
    organizationName: 'Pune Organic Farm Produce',
    legalBusinessName: 'Sahyadri Organic Agro Producer Co Ltd',
    contactName: 'Rohit Kadam',
    contactPhone: '+919822577889',
    email: 'rohit@puneorganic.in',
    businessType: 'retail',
    category: 'Vegetables & Fruits',
    description: 'Certified organic vegetables, hydroponic salad greens, cold-pressed cold oils, and natural honey sourced from Sahyadri farmer cooperatives.',
    verificationStatus: 'VERIFIED',
    isSuspended: false,
    cityCode: 'IN-MH-PUN',
    districtCode: 'PUN',
    stateCode: 'IN-MH',
    bankDetails: {
      bankName: 'Kotak Mahindra Bank',
      accountNumberMasked: '**********4421',
      ifscCode: 'KKBK0000512',
    },
    outlets: [
      {
        id: 'out-pun-organic-007',
        name: 'Pune Organic - Baner Hub',
        sellerMode: 'PERMANENT',
        addressLine: 'Shop 4, High Street, Baner',
        locality: 'Baner',
        city: 'Pune',
        cityCode: 'IN-MH-PUN',
        district: 'Pune',
        districtCode: 'PUN',
        state: 'Maharashtra',
        stateCode: 'IN-MH',
        pincode: '411045',
        latitude: 18.559,
        longitude: 73.7868,
        isAddressPublic: true,
        storePickup: true,
        merchantDelivery: true,
        deliveryRadiusKm: 8.0,
        minOrderValue: 350,
        prepTimeMinutes: 25,
        isActive: true,
        hours: STANDARD_HOURS,
      },
    ],
    verifications: [
      { documentType: 'GSTIN', documentNumber: '27AAGCS1234P1Z4', fileUrl: 'https://cdn.nukkadnow.com/kyc/pune_organic_gst.pdf', verificationStatus: 'VERIFIED', verifiedAt: '2026-11-17T09:00:00Z', verifiedBy: 'adm-staff-kyc-001' },
      { documentType: 'FSSAI', documentNumber: '11520023000781', fileUrl: 'https://cdn.nukkadnow.com/kyc/pune_organic_fssai.pdf', verificationStatus: 'VERIFIED', verifiedAt: '2026-11-17T09:30:00Z', verifiedBy: 'adm-staff-kyc-001' },
    ],
  },

  // 8. Kothrud Artisan Bakers & Patisserie (Pune)
  {
    id: 'mer-pun-bakery-008',
    organizationName: 'Kothrud Artisan Bakers',
    legalBusinessName: 'Pune Patisserie & Bakehouse LLP',
    contactName: 'Tanvi Shinde',
    contactPhone: '+919822688990',
    email: 'tanvi@kothrudbakers.com',
    businessType: 'retail',
    category: 'Dairy, Sweets & Bakery',
    description: 'Artisan sourdough loaves, brioche buns, fresh French croissants, gluten-free cookies, and custom celebration cakes.',
    verificationStatus: 'PENDING',
    isSuspended: false,
    cityCode: 'IN-MH-PUN',
    districtCode: 'PUN',
    stateCode: 'IN-MH',
    bankDetails: {
      bankName: 'HDFC Bank',
      accountNumberMasked: '**********8812',
      ifscCode: 'HDFC0000145',
    },
    outlets: [
      {
        id: 'out-pun-bakery-008',
        name: 'Kothrud Artisan Bakehouse',
        sellerMode: 'PERMANENT',
        addressLine: 'Shop 10, Paud Road, Kothrud',
        locality: 'Kothrud',
        city: 'Pune',
        cityCode: 'IN-MH-PUN',
        district: 'Pune',
        districtCode: 'PUN',
        state: 'Maharashtra',
        stateCode: 'IN-MH',
        pincode: '411038',
        latitude: 18.5074,
        longitude: 73.8077,
        isAddressPublic: true,
        storePickup: true,
        merchantDelivery: true,
        deliveryRadiusKm: 7.0,
        minOrderValue: 250,
        prepTimeMinutes: 30,
        isActive: true,
        hours: STANDARD_HOURS,
      },
    ],
    verifications: [
      { documentType: 'FSSAI', documentNumber: '11523024000345', fileUrl: 'https://cdn.nukkadnow.com/kyc/kothrud_bakers_fssai.pdf', verificationStatus: 'PENDING' },
    ],
  },
];
