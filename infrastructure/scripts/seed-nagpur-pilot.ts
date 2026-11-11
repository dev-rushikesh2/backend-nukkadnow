/**
 * NukkadNow Nagpur Pilot Reference Data Seeder
 * Populates 5 distinct merchants across 5 localities with products,
 * variants (pricing in paise), inventory stock, operating hours,
 * and 15-minute capacity pickup slots.
 */

export interface PilotOutletSeed {
  merchantName: string;
  contactName: string;
  contactPhone: string;
  outletName: string;
  sellerMode: "PERMANENT" | "HOME_CHEF" | "SEASONAL" | "EVENT" | "ARTISAN";
  locality: string;
  addressLine: string;
  isAddressPublic: boolean;
  latitude: number;
  longitude: number;
  products: Array<{
    name: string;
    category: string;
    variants: Array<{
      name: string;
      pricePaise: number;
      initialStock: number;
    }>;
  }>;
}

export const NAGPUR_PILOT_SEEDS: PilotOutletSeed[] = [
  {
    merchantName: "Apna Kirana & Daily Needs",
    contactName: "Rameshwar Sharma",
    contactPhone: "+919876543201",
    outletName: "Apna Kirana Sitabuldi",
    sellerMode: "PERMANENT",
    locality: "Sitabuldi",
    addressLine: "Shop 14, Main Market, Sitabuldi",
    isAddressPublic: true,
    latitude: 21.1465,
    longitude: 79.0835,
    products: [
      {
        name: "Sharbati Whole Wheat Atta",
        category: "Groceries",
        variants: [
          { name: "5kg Bag", pricePaise: 24500, initialStock: 40 },
          { name: "10kg Bag", pricePaise: 46000, initialStock: 25 },
        ],
      },
      {
        name: "Pure Cow Ghee (Danedar)",
        category: "Dairy",
        variants: [
          { name: "500ml Jar", pricePaise: 38000, initialStock: 20 },
          { name: "1 Litre Tin", pricePaise: 72000, initialStock: 15 },
        ],
      },
    ],
  },
  {
    merchantName: "Dharampeth Artisanal Bakery",
    contactName: "Vikram Kulkarni",
    contactPhone: "+919876543202",
    outletName: "Dharampeth Bakes & Patisserie",
    sellerMode: "PERMANENT",
    locality: "Dharampeth",
    addressLine: "Plot 22, West High Court Rd, Dharampeth",
    isAddressPublic: true,
    latitude: 21.1415,
    longitude: 79.0645,
    products: [
      {
        name: "Naturally Fermented Sourdough Loaf",
        category: "Bakery",
        variants: [
          { name: "400g Loaf", pricePaise: 14000, initialStock: 15 },
        ],
      },
      {
        name: "Almond Butter Croissant",
        category: "Bakery",
        variants: [
          { name: "Single Piece", pricePaise: 9500, initialStock: 30 },
          { name: "Box of 4", pricePaise: 35000, initialStock: 10 },
        ],
      },
    ],
  },
  {
    merchantName: "Priya Homemade Treats",
    contactName: "Priya Joshi",
    contactPhone: "+919876543203",
    outletName: "Priya's Kitchen (Dhantoli)",
    sellerMode: "HOME_CHEF", // ADR 0011: Address line will be masked for public discovery
    locality: "Dhantoli",
    addressLine: "Flat 402, Gokul Heights, Dhantoli", // Private residential address
    isAddressPublic: false,
    latitude: 21.1325,
    longitude: 79.0815,
    products: [
      {
        name: "Authentic Ukadiche Modak",
        category: "Sweets & Desserts",
        variants: [
          { name: "Box of 6 pcs", pricePaise: 21000, initialStock: 20 },
          { name: "Box of 11 pcs", pricePaise: 36000, initialStock: 10 },
        ],
      },
      {
        name: "Traditional Puran Poli Pack",
        category: "Homemade Food",
        variants: [
          { name: "Pack of 4 pcs", pricePaise: 16000, initialStock: 25 },
        ],
      },
    ],
  },
  {
    merchantName: "Nagpur Santra & Organic Hub",
    contactName: "Sanjay Deshmukh",
    contactPhone: "+919876543204",
    outletName: "Ramdaspeth Fruit Stall",
    sellerMode: "ARTISAN",
    locality: "Ramdaspeth",
    addressLine: "Near Central Mall, Canal Rd, Ramdaspeth",
    isAddressPublic: true,
    latitude: 21.1350,
    longitude: 79.0720,
    products: [
      {
        name: "GI-Tagged Nagpur Santra (Fresh Oranges)",
        category: "Fresh Produce",
        variants: [
          { name: "1 kg Bag", pricePaise: 9000, initialStock: 50 },
          { name: "5 kg Crate", pricePaise: 42000, initialStock: 20 },
        ],
      },
    ],
  },
  {
    merchantName: "Sadar Street Food & Snacks",
    contactName: "Mohd. Azhar",
    contactPhone: "+919876543205",
    outletName: "Sadar Quick Corner",
    sellerMode: "PERMANENT",
    locality: "Sadar",
    addressLine: "Residency Rd, Sadar Bazar, Sadar",
    isAddressPublic: true,
    latitude: 21.1610,
    longitude: 79.0850,
    products: [
      {
        name: "Nagpur Special Tarri Poha Kit",
        category: "Breakfast & Snacks",
        variants: [
          { name: "Single Serving", pricePaise: 4500, initialStock: 60 },
          { name: "Family Pack (4 Servings)", pricePaise: 16000, initialStock: 15 },
        ],
      },
      {
        name: "Crispy Samosa Box with Mint Chutney",
        category: "Breakfast & Snacks",
        variants: [
          { name: "Box of 4 pcs", pricePaise: 7000, initialStock: 40 },
        ],
      },
    ],
  },
];

console.log(`Nagpur Pilot Seed definition loaded: ${NAGPUR_PILOT_SEEDS.length} merchants.`);
