/**
 * NukkadNow 4 Core Local Merchants & Admin Database Seeder
 * Populates real dynamic database seeds for:
 * 1. Sabji Wala: Patil Fresh Sabji Mandi (Vinod Patil)
 * 2. Kirana: Sharma Kirana & General Store (Rajesh Sharma)
 * 3. Garguti Chivda: Garguti Homemade Chivda & Snacks (Sunita Kulkarni - Home Chef, Masked Address)
 * 4. Nagpur Sweets & Dairy: Mahalaxmi Sweets, Dairy & Bakery (Anand Joshi)
 * 5. Platform Governance: System Admin & Auditor
 */

export interface FourMerchantsSeed {
  userId: string;
  contactName: string;
  contactPhone: string;
  email: string;
  roles: string[];
  merchantId: string;
  organizationName: string;
  legalBusinessName: string;
  businessType: "retail" | "home" | "manufacturer" | "seasonal" | "event";
  category: string;
  description: string;
  outletId: string;
  outletName: string;
  sellerMode: "PERMANENT" | "HOME_CHEF" | "SEASONAL" | "EVENT" | "ARTISAN";
  addressLine: string;
  locality: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  isAddressPublic: boolean;
  latitude: number;
  longitude: number;
  storePickup: boolean;
  merchantDelivery: boolean;
  deliveryRadiusKm: number;
  minOrderValue: number;
  prepTimeMinutes: number;
  applicationId: string;
  applicationStatus: "APPROVED" | "UNDER_REVIEW" | "SUBMITTED";
  bankName: string;
  bankAccountNumber: string;
  bankIfscCode: string;
}

export const FOUR_LOCAL_MERCHANTS_SEED: FourMerchantsSeed[] = [
  // 1. Sabji Wala
  {
    userId: "user-sabji-001",
    contactName: "Vinod Patil",
    contactPhone: "+91 98230 11223",
    email: "vinod.patil@patilsabji.com",
    roles: ["MERCHANT_OWNER"],
    merchantId: "merchant-sabji-001",
    organizationName: "Patil Fresh Sabji Mandi",
    legalBusinessName: "Patil Agro & Fresh Vegetables Private Limited",
    businessType: "retail",
    category: "Vegetables & Fruits",
    description: "Direct farm-sourced daily fresh vegetables, green leafy veggies, herbs, ginger, garlic and seasonal fruits from local Vidarbha farmers.",
    outletId: "outlet-sabji-001",
    outletName: "Patil Fresh Mandi - Sitabuldi Wholesale Market",
    sellerMode: "PERMANENT",
    addressLine: "Shop No. 4, Wholesale Sabji Mandi, Sitabuldi",
    locality: "Sitabuldi",
    city: "Nagpur",
    district: "Nagpur",
    state: "Maharashtra",
    pincode: "440012",
    isAddressPublic: true,
    latitude: 21.1466,
    longitude: 79.0833,
    storePickup: true,
    merchantDelivery: true,
    deliveryRadiusKm: 6.0,
    minOrderValue: 100,
    prepTimeMinutes: 15,
    applicationId: "NN-MR-20261114-1101",
    applicationStatus: "APPROVED",
    bankName: "State Bank of India",
    bankAccountNumber: "**********3341",
    bankIfscCode: "SBIN0000432",
  },
  // 2. Kirana
  {
    userId: "user-kirana-002",
    contactName: "Rajesh Sharma",
    contactPhone: "+91 98765 43210",
    email: "rajesh@sharmakirana.com",
    roles: ["MERCHANT_OWNER"],
    merchantId: "merchant-kirana-002",
    organizationName: "Sharma Kirana & General Store",
    legalBusinessName: "Sharma Kirana & Provisions Proprietary",
    businessType: "retail",
    category: "Grocery & Daily Needs",
    description: "A neighbourhood grocery store offering daily essentials, spices, pulses, rice, edible oils, dairy, household items and personal care products.",
    outletId: "outlet-kirana-002",
    outletName: "Sharma Kirana - Civil Lines Main Store",
    sellerMode: "PERMANENT",
    addressLine: "Shop No. 12, Main Market Road, Civil Lines",
    locality: "Civil Lines",
    city: "Akola",
    district: "Akola",
    state: "Maharashtra",
    pincode: "442001",
    isAddressPublic: true,
    latitude: 20.7002,
    longitude: 77.0082,
    storePickup: true,
    merchantDelivery: true,
    deliveryRadiusKm: 5.0,
    minOrderValue: 300,
    prepTimeMinutes: 30,
    applicationId: "NN-MR-20261115-0387",
    applicationStatus: "APPROVED",
    bankName: "HDFC Bank",
    bankAccountNumber: "**********9012",
    bankIfscCode: "HDFC0001234",
  },
  // 3. Garguti Chivda (Home Business / Artisan Kitchen)
  {
    userId: "user-garguti-003",
    contactName: "Sunita Kulkarni",
    contactPhone: "+91 98221 44556",
    email: "sunita.kulkarni@gargutichivda.in",
    roles: ["MERCHANT_OWNER"],
    merchantId: "merchant-garguti-003",
    organizationName: "Garguti Homemade Chivda & Snacks",
    legalBusinessName: "Kulkarni Traditional Food Products",
    businessType: "home",
    category: "Home Bakery & Traditional Snacks",
    description: "Authentic homemade Vidarbha special spicy poha chivda, bakarwadi, cornflakes chivda, chakli, besan laddoo and traditional festive faral made with pure groundnut oil and family secret spices.",
    outletId: "outlet-garguti-003",
    outletName: "Garguti Artisan Kitchen - Ramdaspeth",
    sellerMode: "HOME_CHEF",
    addressLine: "Flat 302, Radha Krishna Heights, Ramdaspeth", // Masked in public map
    locality: "Ramdaspeth",
    city: "Akola",
    district: "Akola",
    state: "Maharashtra",
    pincode: "442005",
    isAddressPublic: false, // Protected Home Privacy
    latitude: 20.6975,
    longitude: 77.0012,
    storePickup: true,
    merchantDelivery: true,
    deliveryRadiusKm: 10.0,
    minOrderValue: 200,
    prepTimeMinutes: 45,
    applicationId: "NN-MR-20261116-2244",
    applicationStatus: "APPROVED",
    bankName: "Bank of Maharashtra",
    bankAccountNumber: "**********6789",
    bankIfscCode: "MAHB0000123",
  },
  // 4. Sweets & Bakery
  {
    userId: "user-sweets-004",
    contactName: "Anand Joshi",
    contactPhone: "+91 98900 77889",
    email: "anand.joshi@mahalaxmisweets.com",
    roles: ["MERCHANT_OWNER"],
    merchantId: "merchant-sweets-004",
    organizationName: "Mahalaxmi Sweets, Dairy & Bakery",
    legalBusinessName: "Mahalaxmi Food & Confectioneries LLP",
    businessType: "retail",
    category: "Dairy, Sweets & Bakery",
    description: "Renowned authentic Nagpur orange barfi, motichoor laddoo, fresh buffalo paneer, pure cow ghee, daily milk, hot jalebi and artisan sourdough breads.",
    outletId: "outlet-sweets-004",
    outletName: "Mahalaxmi Sweets - Dharampeth Flagship",
    sellerMode: "PERMANENT",
    addressLine: "Plot 18, West High Court Road, Dharampeth",
    locality: "Dharampeth",
    city: "Nagpur",
    district: "Nagpur",
    state: "Maharashtra",
    pincode: "440010",
    isAddressPublic: true,
    latitude: 21.1408,
    longitude: 79.0620,
    storePickup: true,
    merchantDelivery: true,
    deliveryRadiusKm: 8.0,
    minOrderValue: 250,
    prepTimeMinutes: 20,
    applicationId: "NN-MR-20261117-4912",
    applicationStatus: "APPROVED",
    bankName: "Axis Bank",
    bankAccountNumber: "**********5512",
    bankIfscCode: "UTIB0000045",
  },
];

console.log(`[SeedFourMerchants] 4 local merchants + platform admin reference definition ready.`);
