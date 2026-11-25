/**
 * NukkadNow Catalog, Products, Variants & Tax Slabs Seed Dataset (Catalog Seed)
 * Enforces:
 * - Integer Paise pricing (DRY/DDD standards)
 * - Statutory GST Slabs (0%, 5%, 12%, 18%)
 * - Platform Category Commission Slabs
 * - Multi-tenant isolation keys (tenantId, outletId)
 */

export interface CategorySeed {
  id: string;
  name: string;
  slug: string;
  gstRatePercent: number;
  commissionRatePercent: number;
  description: string;
  isActive: boolean;
  subcategories: string[];
}

export interface ProductVariantSeed {
  id: string;
  name: string;
  sku: string;
  barcode: string;
  pricePaise: number; // e.g. 24500 = ₹245.00
  compareAtPricePaise?: number; // MRP reference in paise
  isPreorder: boolean;
  leadTimeMinutes: number;
  initialStock: number;
  reservedStock: number;
  safetyStock: number;
}

export interface ProductSeed {
  id: string;
  tenantId: string; // Merchant ID
  outletId: string; // Outlet ID
  name: string;
  description: string;
  category: string;
  subCategory?: string;
  isAvailable: boolean;
  variants: ProductVariantSeed[];
}

export const CATEGORIES_SEED: CategorySeed[] = [
  {
    id: 'cat-veg-fruits',
    name: 'Vegetables & Fruits',
    slug: 'vegetables-fruits',
    gstRatePercent: 0,
    commissionRatePercent: 3.0,
    description: 'Farm-fresh green leafy vegetables, daily potatoes, onions, tomatoes, and seasonal Vidarbha fruits.',
    isActive: true,
    subcategories: ['Daily Vegetables', 'Leafy Greens', 'Root Vegetables', 'Seasonal Fruits', 'Herbs & Ginger Garlic'],
  },
  {
    id: 'cat-grocery',
    name: 'Grocery & Daily Needs',
    slug: 'grocery-daily-needs',
    gstRatePercent: 5,
    commissionRatePercent: 2.5,
    description: 'Grains, whole wheat atta, basmati rice, lentils, pulses, cooking oils, and spices.',
    isActive: true,
    subcategories: ['Atta & Flours', 'Rice & Poha', 'Dals & Pulses', 'Edible Oils & Ghee', 'Salt, Sugar & Jaggery'],
  },
  {
    id: 'cat-dairy',
    name: 'Dairy & Breakfast',
    slug: 'dairy-breakfast',
    gstRatePercent: 5,
    commissionRatePercent: 3.5,
    description: 'Pasteurized milk, buffalo milk, curd, fresh paneer, butter, and breakfast essentials.',
    isActive: true,
    subcategories: ['Milk', 'Paneer & Tofu', 'Curd & Chaas', 'Butter & Cream', 'Eggs & Bread'],
  },
  {
    id: 'cat-bakery',
    name: 'Dairy, Sweets & Bakery',
    slug: 'dairy-sweets-bakery',
    gstRatePercent: 12,
    commissionRatePercent: 7.0,
    description: 'Nagpur orange barfi, pedha, motichoor laddoo, sourdough bread, cakes, and pastries.',
    isActive: true,
    subcategories: ['Regional Sweets', 'Fresh Cakes', 'Artisan Breads', 'Biscuits & Cookies', 'Festive Faral'],
  },
  {
    id: 'cat-snacks',
    name: 'Home Bakery & Traditional Snacks',
    slug: 'home-bakery-traditional-snacks',
    gstRatePercent: 12,
    commissionRatePercent: 8.0,
    description: 'Vidarbha spicy poha chivda, bakarwadi, cornflakes chivda, chakli, besan laddoo, and homemade pickles.',
    isActive: true,
    subcategories: ['Chivda & Faral', 'Savory Snacks', 'Pickles & Papads', 'Homemade Laddoos'],
  },
  {
    id: 'cat-packaged',
    name: 'Packaged Foods & Beverages',
    slug: 'packaged-foods-beverages',
    gstRatePercent: 18,
    commissionRatePercent: 4.5,
    description: 'Noodles, biscuits, namkeen, health drinks, syrups, tea, and specialty roasted coffee.',
    isActive: true,
    subcategories: ['Tea & Coffee', 'Biscuits & Namkeen', 'Sauces & Spreads', 'Beverages & Juices'],
  },
];

export const PRODUCTS_SEED: ProductSeed[] = [
  // --- Patil Fresh Sabji Mandi Products ---
  {
    id: 'prod-patil-001',
    tenantId: 'mer-ngp-sabji-001',
    outletId: 'out-ngp-sabji-001',
    name: 'Fresh Farm Spinach (Palak)',
    description: 'Crisp green farm-fresh palak harvested early morning from local Saoner farms. Washed and tied in bundles.',
    category: 'Vegetables & Fruits',
    subCategory: 'Leafy Greens',
    isAvailable: true,
    variants: [
      {
        id: 'var-patil-palak-250g',
        name: '250g Bundle',
        sku: 'PAT-PLK-250',
        barcode: '890123400101',
        pricePaise: 2000, // ₹20.00
        compareAtPricePaise: 2500,
        isPreorder: false,
        leadTimeMinutes: 0,
        initialStock: 80,
        reservedStock: 2,
        safetyStock: 10,
      },
      {
        id: 'var-patil-palak-500g',
        name: '500g Value Pack',
        sku: 'PAT-PLK-500',
        barcode: '890123400102',
        pricePaise: 3500, // ₹35.00
        compareAtPricePaise: 4500,
        isPreorder: false,
        leadTimeMinutes: 0,
        initialStock: 50,
        reservedStock: 0,
        safetyStock: 5,
      },
    ],
  },
  {
    id: 'prod-patil-002',
    tenantId: 'mer-ngp-sabji-001',
    outletId: 'out-ngp-sabji-001',
    name: 'Nagpur Native Desi Tomatoes',
    description: 'Juicy, naturally ripened tangy desi tomatoes perfect for rich curries and fresh salads.',
    category: 'Vegetables & Fruits',
    subCategory: 'Daily Vegetables',
    isAvailable: true,
    variants: [
      {
        id: 'var-patil-tomato-1kg',
        name: '1 kg Pack',
        sku: 'PAT-TOM-1KG',
        barcode: '890123400103',
        pricePaise: 3500, // ₹35.00
        compareAtPricePaise: 4000,
        isPreorder: false,
        leadTimeMinutes: 0,
        initialStock: 120,
        reservedStock: 5,
        safetyStock: 15,
      },
    ],
  },

  // --- Sharma Kirana Products ---
  {
    id: 'prod-sharma-001',
    tenantId: 'mer-ngp-kirana-002',
    outletId: 'out-ngp-kirana-002',
    name: 'Madhya Pradesh Sharbati Whole Wheat Atta',
    description: '100% stone ground pure Sharbati wheat flour, stone milled without maida adulteration for soft rotis.',
    category: 'Grocery & Daily Needs',
    subCategory: 'Atta & Flours',
    isAvailable: true,
    variants: [
      {
        id: 'var-sharma-atta-5kg',
        name: '5 kg Bag',
        sku: 'SHR-ATT-5KG',
        barcode: '890123400201',
        pricePaise: 24500, // ₹245.00
        compareAtPricePaise: 27500,
        isPreorder: false,
        leadTimeMinutes: 0,
        initialStock: 45,
        reservedStock: 1,
        safetyStock: 5,
      },
      {
        id: 'var-sharma-atta-10kg',
        name: '10 kg Value Bag',
        sku: 'SHR-ATT-10KG',
        barcode: '890123400202',
        pricePaise: 46000, // ₹460.00
        compareAtPricePaise: 52000,
        isPreorder: false,
        leadTimeMinutes: 0,
        initialStock: 30,
        reservedStock: 0,
        safetyStock: 4,
      },
    ],
  },
  {
    id: 'prod-sharma-002',
    tenantId: 'mer-ngp-kirana-002',
    outletId: 'out-ngp-kirana-002',
    name: 'Vidarbha Organic Unpolished Tur Dal',
    description: 'Direct-farm yellow pigeon pea lentils, water washed and unpolished retaining natural proteins.',
    category: 'Grocery & Daily Needs',
    subCategory: 'Dals & Pulses',
    isAvailable: true,
    variants: [
      {
        id: 'var-sharma-turdal-1kg',
        name: '1 kg Pouch',
        sku: 'SHR-DAL-1KG',
        barcode: '890123400203',
        pricePaise: 16500, // ₹165.00
        compareAtPricePaise: 18500,
        isPreorder: false,
        leadTimeMinutes: 0,
        initialStock: 60,
        reservedStock: 3,
        safetyStock: 8,
      },
    ],
  },

  // --- Garguti Homemade Chivda Products ---
  {
    id: 'prod-garguti-001',
    tenantId: 'mer-akl-homechef-003',
    outletId: 'out-akl-garguti-003',
    name: 'Akola Special Spicy Poha Chivda',
    description: 'Traditional Vidarbha recipe roasted thin poha with fried groundnuts, roasted dal, curry leaves, and secret spice mix.',
    category: 'Home Bakery & Traditional Snacks',
    subCategory: 'Chivda & Faral',
    isAvailable: true,
    variants: [
      {
        id: 'var-garguti-chivda-500g',
        name: '500g Fresh Pack',
        sku: 'GAR-CHV-500',
        barcode: '890123400301',
        pricePaise: 19000, // ₹190.00
        compareAtPricePaise: 22000,
        isPreorder: false,
        leadTimeMinutes: 0,
        initialStock: 35,
        reservedStock: 2,
        safetyStock: 5,
      },
      {
        id: 'var-garguti-chivda-1kg',
        name: '1 kg Family Tin Box',
        sku: 'GAR-CHV-1KG',
        barcode: '890123400302',
        pricePaise: 36000, // ₹360.00
        compareAtPricePaise: 40000,
        isPreorder: true,
        leadTimeMinutes: 120, // Pre-order lead time
        initialStock: 15,
        reservedStock: 0,
        safetyStock: 2,
      },
    ],
  },

  // --- Mahalaxmi Sweets & Dairy Products ---
  {
    id: 'prod-mahalaxmi-001',
    tenantId: 'mer-ngp-sweets-004',
    outletId: 'out-ngp-sweets-004',
    name: 'Nagpur GI-Certified Orange Barfi',
    description: 'The world-famous signature sweet of Nagpur made from concentrated fresh Nagpur orange pulp, khoya, and silver foil.',
    category: 'Dairy, Sweets & Bakery',
    subCategory: 'Regional Sweets',
    isAvailable: true,
    variants: [
      {
        id: 'var-mahalaxmi-barfi-500g',
        name: '500g Gift Box',
        sku: 'MHL-BRF-500',
        barcode: '890123400401',
        pricePaise: 38000, // ₹380.00
        compareAtPricePaise: 42000,
        isPreorder: false,
        leadTimeMinutes: 0,
        initialStock: 50,
        reservedStock: 4,
        safetyStock: 10,
      },
      {
        id: 'var-mahalaxmi-barfi-1kg',
        name: '1 kg Festive Box',
        sku: 'MHL-BRF-1KG',
        barcode: '890123400402',
        pricePaise: 72000, // ₹720.00
        compareAtPricePaise: 80000,
        isPreorder: false,
        leadTimeMinutes: 0,
        initialStock: 25,
        reservedStock: 1,
        safetyStock: 5,
      },
    ],
  },
  {
    id: 'prod-mahalaxmi-002',
    tenantId: 'mer-ngp-sweets-004',
    outletId: 'out-ngp-sweets-004',
    name: 'Fresh Malai Buffalo Paneer (Vacuum Packed)',
    description: 'Soft, melt-in-the-mouth paneer made fresh every morning from pure full-cream buffalo milk.',
    category: 'Dairy & Breakfast',
    subCategory: 'Paneer & Tofu',
    isAvailable: true,
    variants: [
      {
        id: 'var-mahalaxmi-paneer-250g',
        name: '250g Vacuum Block',
        sku: 'MHL-PNR-250',
        barcode: '890123400403',
        pricePaise: 12000, // ₹120.00
        compareAtPricePaise: 13500,
        isPreorder: false,
        leadTimeMinutes: 0,
        initialStock: 40,
        reservedStock: 3,
        safetyStock: 8,
      },
    ],
  },

  // --- Pune Organic Farm Products ---
  {
    id: 'prod-pune-001',
    tenantId: 'mer-pun-organic-007',
    outletId: 'out-pun-organic-007',
    name: 'Organic Hydroponic Salad Greens Box',
    description: 'Pesticide-free Italian basil, butterhead lettuce, and baby arugula grown hydroponically in clean water.',
    category: 'Vegetables & Fruits',
    subCategory: 'Leafy Greens',
    isAvailable: true,
    variants: [
      {
        id: 'var-pune-salad-200g',
        name: '200g Fresh Clamshell',
        sku: 'PUN-SLD-200',
        barcode: '890123400701',
        pricePaise: 15000, // ₹150.00
        compareAtPricePaise: 18000,
        isPreorder: false,
        leadTimeMinutes: 0,
        initialStock: 30,
        reservedStock: 1,
        safetyStock: 5,
      },
    ],
  },

  // --- Kothrud Artisan Bakers Products ---
  {
    id: 'prod-kothrud-001',
    tenantId: 'mer-pun-bakery-008',
    outletId: 'out-pun-bakery-008',
    name: 'Country Sourdough Boule (Wild Ferment)',
    description: 'Slow-fermented 36-hour sourdough boule with a crisp blistering crust and open chewy crumb.',
    category: 'Dairy, Sweets & Bakery',
    subCategory: 'Artisan Breads',
    isAvailable: true,
    variants: [
      {
        id: 'var-kothrud-sourdough-650g',
        name: '650g Fresh Baked Loaf',
        sku: 'KOT-SDR-650',
        barcode: '890123400801',
        pricePaise: 22000, // ₹220.00
        compareAtPricePaise: 25000,
        isPreorder: true,
        leadTimeMinutes: 180,
        initialStock: 20,
        reservedStock: 0,
        safetyStock: 3,
      },
    ],
  },

  // --- Shree Medicals (Nashik) Products ---
  {
    id: 'prod-shree-001',
    tenantId: 'mer-nsk-medicals-009',
    outletId: 'out-nsk-medicals-009',
    name: 'First Aid Emergency Care Kit (Comprehensive)',
    description: 'Antiseptic wash, sterile gauze swabs, waterproof adhesive tape, bandage rolls, burn ointment, and digital thermometer.',
    category: 'Grocery & Daily Needs',
    subCategory: 'Pharmacy & Health',
    isAvailable: true,
    variants: [
      {
        id: 'var-shree-firstaid-box',
        name: 'Standard Home Kit (24 Items)',
        sku: 'SHR-FAK-001',
        barcode: '890123400901',
        pricePaise: 49900, // ₹499.00
        compareAtPricePaise: 55000,
        isPreorder: false,
        leadTimeMinutes: 0,
        initialStock: 50,
        reservedStock: 2,
        safetyStock: 10,
      },
    ],
  },

  // --- Aapla Machhi (Mumbai) Products ---
  {
    id: 'prod-aapla-001',
    tenantId: 'mer-mum-poultry-010',
    outletId: 'out-mum-poultry-010',
    name: 'Fresh Arabian Sea Surmai (King Fish Steaks)',
    description: 'Direct day-catch coastal king fish, scaled, gutted, and cut into firm center steaks. Packed on food-grade ice.',
    category: 'Grocery & Daily Needs',
    subCategory: 'Meat & Seafood',
    isAvailable: true,
    variants: [
      {
        id: 'var-aapla-surmai-500g',
        name: '500g Net Cleaned Steaks',
        sku: 'AAP-SRM-500',
        barcode: '890123401001',
        pricePaise: 65000, // ₹650.00
        compareAtPricePaise: 75000,
        isPreorder: false,
        leadTimeMinutes: 20,
        initialStock: 15,
        reservedStock: 1,
        safetyStock: 2,
      },
    ],
  },

  // --- City Bakes & Cafe (Pune) Products ---
  {
    id: 'prod-citybakes-001',
    tenantId: 'mer-pun-bakes-011',
    outletId: 'out-pun-bakes-011',
    name: 'Dutch Chocolate Truffle Cake (1/2 kg)',
    description: 'Rich dark Belgian cocoa sponge layered with silky ganache truffle and topped with dark chocolate shavings.',
    category: 'Dairy, Sweets & Bakery',
    subCategory: 'Bakery & Snacks',
    isAvailable: true,
    variants: [
      {
        id: 'var-citybakes-cake-500g',
        name: '500g Fresh Cream Cake',
        sku: 'CTY-TRF-500',
        barcode: '890123401101',
        pricePaise: 45000, // ₹450.00
        compareAtPricePaise: 50000,
        isPreorder: true,
        leadTimeMinutes: 60,
        initialStock: 25,
        reservedStock: 0,
        safetyStock: 5,
      },
    ],
  },

  // --- Akola Home Essentials (Aurangabad) Products ---
  {
    id: 'prod-akolahome-001',
    tenantId: 'mer-aur-home-012',
    outletId: 'out-aur-home-012',
    name: 'Tri-Ply Heavy Bottom Stainless Steel Kadhai (2.5L)',
    description: 'Grade 304 food-grade stainless steel with pure aluminum core for fast, even heat distribution without hot spots.',
    category: 'Grocery & Daily Needs',
    subCategory: 'Home & Household',
    isAvailable: true,
    variants: [
      {
        id: 'var-akolahome-kadhai-24cm',
        name: '24cm Induction Base Kadhai with Lid',
        sku: 'AKL-KDH-024',
        barcode: '890123401201',
        pricePaise: 129900, // ₹1,299.00
        compareAtPricePaise: 169900,
        isPreorder: false,
        leadTimeMinutes: 0,
        initialStock: 40,
        reservedStock: 3,
        safetyStock: 8,
      },
    ],
  },
];
