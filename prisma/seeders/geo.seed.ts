/**
 * NukkadNow Master Geographic Reference Dataset (Geo Seed)
 * Covers 4 core pilot cities across Maharashtra, India:
 * 1. Nagpur (IN-MH-NGP) - Vidarbha Regional Hub
 * 2. Akola (IN-MH-AKL) - Western Vidarbha Agro Trade Hub
 * 3. Amravati (IN-MH-AMR) - Cotton & Spices Market Center
 * 4. Pune (IN-MH-PUN) - Western Maharashtra Urban & IT Hub
 */

export interface CountrySeed {
  code: string;
  name: string;
  currency: string;
  phoneCode: string;
}

export interface StateSeed {
  code: string;
  name: string;
  countryCode: string;
}

export interface DistrictSeed {
  code: string;
  name: string;
  stateCode: string;
}

export interface LocalitySeed {
  id: string;
  name: string;
  cityCode: string;
  cityName: string;
  districtCode: string;
  stateCode: string;
  pincode: string;
  isActive: boolean;
  latitude: number;
  longitude: number;
  radiusMeters: number;
  coordinates: Array<[number, number]>;
}

export interface CitySeed {
  code: string;
  name: string;
  districtCode: string;
  stateCode: string;
  latitude: number;
  longitude: number;
  isActive: boolean;
  operatingHours: {
    openTime: string;
    closeTime: string;
    timezone: string;
  };
}

export const COUNTRIES_SEED: CountrySeed[] = [
  {
    code: 'IN',
    name: 'India',
    currency: 'INR',
    phoneCode: '+91',
  },
];

export const STATES_SEED: StateSeed[] = [
  {
    code: 'IN-MH',
    name: 'Maharashtra',
    countryCode: 'IN',
  },
];

export const DISTRICTS_SEED: DistrictSeed[] = [
  { code: 'NGP', name: 'Nagpur', stateCode: 'IN-MH' },
  { code: 'AKL', name: 'Akola', stateCode: 'IN-MH' },
  { code: 'AMR', name: 'Amravati', stateCode: 'IN-MH' },
  { code: 'PUN', name: 'Pune', stateCode: 'IN-MH' },
];

export const CITIES_SEED: CitySeed[] = [
  {
    code: 'IN-MH-NGP',
    name: 'Nagpur',
    districtCode: 'NGP',
    stateCode: 'IN-MH',
    latitude: 21.1458,
    longitude: 79.0882,
    isActive: true,
    operatingHours: {
      openTime: '06:00',
      closeTime: '23:00',
      timezone: 'Asia/Kolkata',
    },
  },
  {
    code: 'IN-MH-AKL',
    name: 'Akola',
    districtCode: 'AKL',
    stateCode: 'IN-MH',
    latitude: 20.7002,
    longitude: 77.0082,
    isActive: true,
    operatingHours: {
      openTime: '07:00',
      closeTime: '22:00',
      timezone: 'Asia/Kolkata',
    },
  },
  {
    code: 'IN-MH-AMR',
    name: 'Amravati',
    districtCode: 'AMR',
    stateCode: 'IN-MH',
    latitude: 20.9374,
    longitude: 77.7796,
    isActive: true,
    operatingHours: {
      openTime: '07:00',
      closeTime: '22:00',
      timezone: 'Asia/Kolkata',
    },
  },
  {
    code: 'IN-MH-PUN',
    name: 'Pune',
    districtCode: 'PUN',
    stateCode: 'IN-MH',
    latitude: 18.5204,
    longitude: 73.8567,
    isActive: true,
    operatingHours: {
      openTime: '06:00',
      closeTime: '23:30',
      timezone: 'Asia/Kolkata',
    },
  },
];

export const LOCALITIES_SEED: LocalitySeed[] = [
  // --- Nagpur Localities (IN-MH-NGP) ---
  {
    id: 'loc-ngp-sitabuldi',
    name: 'Sitabuldi',
    cityCode: 'IN-MH-NGP',
    cityName: 'Nagpur',
    districtCode: 'NGP',
    stateCode: 'IN-MH',
    pincode: '440012',
    isActive: true,
    latitude: 21.1465,
    longitude: 79.0835,
    radiusMeters: 3000,
    coordinates: [
      [21.148, 79.08],
      [21.149, 79.087],
      [21.143, 79.088],
      [21.142, 79.081],
    ],
  },
  {
    id: 'loc-ngp-dharampeth',
    name: 'Dharampeth',
    cityCode: 'IN-MH-NGP',
    cityName: 'Nagpur',
    districtCode: 'NGP',
    stateCode: 'IN-MH',
    pincode: '440010',
    isActive: true,
    latitude: 21.1408,
    longitude: 79.062,
    radiusMeters: 3500,
    coordinates: [
      [21.144, 79.058],
      [21.145, 79.066],
      [21.137, 79.065],
      [21.136, 79.059],
    ],
  },
  {
    id: 'loc-ngp-dhantoli',
    name: 'Dhantoli',
    cityCode: 'IN-MH-NGP',
    cityName: 'Nagpur',
    districtCode: 'NGP',
    stateCode: 'IN-MH',
    pincode: '440012',
    isActive: true,
    latitude: 21.132,
    longitude: 79.082,
    radiusMeters: 2500,
    coordinates: [
      [21.135, 79.078],
      [21.136, 79.086],
      [21.128, 79.085],
      [21.127, 79.079],
    ],
  },
  {
    id: 'loc-ngp-ramdaspeth',
    name: 'Ramdaspeth',
    cityCode: 'IN-MH-NGP',
    cityName: 'Nagpur',
    districtCode: 'NGP',
    stateCode: 'IN-MH',
    pincode: '440010',
    isActive: true,
    latitude: 21.136,
    longitude: 79.072,
    radiusMeters: 2500,
    coordinates: [
      [21.139, 79.068],
      [21.14, 79.076],
      [21.132, 79.075],
      [21.131, 79.069],
    ],
  },
  {
    id: 'loc-ngp-sadar',
    name: 'Sadar',
    cityCode: 'IN-MH-NGP',
    cityName: 'Nagpur',
    districtCode: 'NGP',
    stateCode: 'IN-MH',
    pincode: '440001',
    isActive: true,
    latitude: 21.162,
    longitude: 79.084,
    radiusMeters: 3000,
    coordinates: [
      [21.166, 79.08],
      [21.167, 79.088],
      [21.158, 79.087],
      [21.157, 79.081],
    ],
  },

  // --- Akola Localities (IN-MH-AKL) ---
  {
    id: 'loc-akl-civillines',
    name: 'Civil Lines',
    cityCode: 'IN-MH-AKL',
    cityName: 'Akola',
    districtCode: 'AKL',
    stateCode: 'IN-MH',
    pincode: '444001',
    isActive: true,
    latitude: 20.702,
    longitude: 77.012,
    radiusMeters: 3000,
    coordinates: [
      [20.706, 77.008],
      [20.707, 77.016],
      [20.698, 77.015],
      [20.697, 77.009],
    ],
  },
  {
    id: 'loc-akl-oldcity',
    name: 'Old City & Sarafa Bazaar',
    cityCode: 'IN-MH-AKL',
    cityName: 'Akola',
    districtCode: 'AKL',
    stateCode: 'IN-MH',
    pincode: '444002',
    isActive: true,
    latitude: 20.694,
    longitude: 77.004,
    radiusMeters: 3500,
    coordinates: [
      [20.698, 77.0],
      [20.699, 77.008],
      [20.69, 77.007],
      [20.689, 77.001],
    ],
  },
  {
    id: 'loc-akl-toshniwal',
    name: 'Toshniwal Layout',
    cityCode: 'IN-MH-AKL',
    cityName: 'Akola',
    districtCode: 'AKL',
    stateCode: 'IN-MH',
    pincode: '444005',
    isActive: true,
    latitude: 20.689,
    longitude: 77.025,
    radiusMeters: 2500,
    coordinates: [
      [20.693, 77.021],
      [20.694, 77.029],
      [20.685, 77.028],
      [20.684, 77.022],
    ],
  },
  {
    id: 'loc-akl-gandhi-rd',
    name: 'Gandhi Road',
    cityCode: 'IN-MH-AKL',
    cityName: 'Akola',
    districtCode: 'AKL',
    stateCode: 'IN-MH',
    pincode: '444001',
    isActive: true,
    latitude: 20.705,
    longitude: 77.005,
    radiusMeters: 2000,
    coordinates: [
      [20.709, 77.001],
      [20.71, 77.009],
      [20.701, 77.008],
      [20.7, 77.002],
    ],
  },

  // --- Amravati Localities (IN-MH-AMR) ---
  {
    id: 'loc-amr-rajapeth',
    name: 'Rajapeth',
    cityCode: 'IN-MH-AMR',
    cityName: 'Amravati',
    districtCode: 'AMR',
    stateCode: 'IN-MH',
    pincode: '444601',
    isActive: true,
    latitude: 20.928,
    longitude: 77.765,
    radiusMeters: 3000,
    coordinates: [
      [20.932, 77.761],
      [20.933, 77.769],
      [20.924, 77.768],
      [20.923, 77.762],
    ],
  },
  {
    id: 'loc-amr-gadgenagar',
    name: 'Gadge Nagar',
    cityCode: 'IN-MH-AMR',
    cityName: 'Amravati',
    districtCode: 'AMR',
    stateCode: 'IN-MH',
    pincode: '444603',
    isActive: true,
    latitude: 20.945,
    longitude: 77.772,
    radiusMeters: 2500,
    coordinates: [
      [20.949, 77.768],
      [20.95, 77.776],
      [20.941, 77.775],
      [20.94, 77.769],
    ],
  },
  {
    id: 'loc-amr-camp',
    name: 'Camp Area',
    cityCode: 'IN-MH-AMR',
    cityName: 'Amravati',
    districtCode: 'AMR',
    stateCode: 'IN-MH',
    pincode: '444602',
    isActive: true,
    latitude: 20.941,
    longitude: 77.755,
    radiusMeters: 3000,
    coordinates: [
      [20.945, 77.751],
      [20.946, 77.759],
      [20.937, 77.758],
      [20.936, 77.752],
    ],
  },
  {
    id: 'loc-amr-badnera',
    name: 'Badnera Road',
    cityCode: 'IN-MH-AMR',
    cityName: 'Amravati',
    districtCode: 'AMR',
    stateCode: 'IN-MH',
    pincode: '444607',
    isActive: true,
    latitude: 20.915,
    longitude: 77.745,
    radiusMeters: 3500,
    coordinates: [
      [20.919, 77.741],
      [20.92, 77.749],
      [20.911, 77.748],
      [20.91, 77.742],
    ],
  },

  // --- Pune Localities (IN-MH-PUN) ---
  {
    id: 'loc-pun-kothrud',
    name: 'Kothrud',
    cityCode: 'IN-MH-PUN',
    cityName: 'Pune',
    districtCode: 'PUN',
    stateCode: 'IN-MH',
    pincode: '411038',
    isActive: true,
    latitude: 18.5074,
    longitude: 73.8077,
    radiusMeters: 4000,
    coordinates: [
      [18.512, 73.803],
      [18.513, 73.812],
      [18.502, 73.811],
      [18.501, 73.804],
    ],
  },
  {
    id: 'loc-pun-vimannagar',
    name: 'Viman Nagar',
    cityCode: 'IN-MH-PUN',
    cityName: 'Pune',
    districtCode: 'PUN',
    stateCode: 'IN-MH',
    pincode: '411014',
    isActive: true,
    latitude: 18.5679,
    longitude: 73.9143,
    radiusMeters: 3500,
    coordinates: [
      [18.572, 73.91],
      [18.573, 73.919],
      [18.563, 73.918],
      [18.562, 73.911],
    ],
  },
  {
    id: 'loc-pun-baner',
    name: 'Baner',
    cityCode: 'IN-MH-PUN',
    cityName: 'Pune',
    districtCode: 'PUN',
    stateCode: 'IN-MH',
    pincode: '411045',
    isActive: true,
    latitude: 18.559,
    longitude: 73.7868,
    radiusMeters: 4000,
    coordinates: [
      [18.564, 73.782],
      [18.565, 73.791],
      [18.554, 73.79],
      [18.553, 73.783],
    ],
  },
  {
    id: 'loc-pun-koregaon',
    name: 'Koregaon Park',
    cityCode: 'IN-MH-PUN',
    cityName: 'Pune',
    districtCode: 'PUN',
    stateCode: 'IN-MH',
    pincode: '411001',
    isActive: true,
    latitude: 18.5362,
    longitude: 73.894,
    radiusMeters: 3000,
    coordinates: [
      [18.541, 73.89],
      [18.542, 73.898],
      [18.532, 73.897],
      [18.531, 73.891],
    ],
  },
];
