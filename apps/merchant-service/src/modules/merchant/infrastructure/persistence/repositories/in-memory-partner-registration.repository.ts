import { Injectable } from "@nestjs/common";
import { PartnerRegistrationRepositoryPort } from "../../../domain/repositories/partner-registration.repository.port";
import { PartnerRegistration, ApplicationStatusCode } from "../../../domain/entities/partner-registration.entity";

@Injectable()
export class InMemoryPartnerRegistrationRepository implements PartnerRegistrationRepositoryPort {
  private registrations = new Map<string, PartnerRegistration>();

  constructor() {
    this.seedAllRegistrations();
  }

  private seedAllRegistrations() {
    // 1. Sabji Wala: Patil Fresh Sabji Mandi
    const sabjiReg = new PartnerRegistration({
      id: "reg-sabji-001",
      applicationId: "NN-MR-20261114-1101",
      merchantId: "merchant-sabji-001",
      currentStep: 8,
      status: "APPROVED",
      businessType: "retail",
      businessName: "Patil Fresh Sabji Mandi",
      ownerName: "Vinod Patil",
      mobileNumber: "+91 98230 11223",
      email: "vinod.patil@patilsabji.com",
      businessCategory: "Vegetables & Fruits",
      businessDescription: "Direct farm-sourced daily fresh vegetables, green leafy veggies, herbs, ginger, garlic and seasonal fruits from local Vidarbha farmers.",
      pincode: "440012",
      state: "Maharashtra",
      district: "Nagpur",
      city: "Nagpur",
      locality: "Sitabuldi",
      fullAddress: "Shop No. 4, Wholesale Sabji Mandi, Sitabuldi, Nagpur, Maharashtra - 440012",
      latitude: 21.1466,
      longitude: 79.0833,
      homeBusinessPrivacy: false,
      scheduleMode: "weekly",
      operatingHours: [
        { dayOfWeek: 1, dayShort: "Mon", isOpen: true, openTime: "06:00 AM", closeTime: "08:30 PM", breakTime: "01:00 - 02:00 PM" },
        { dayOfWeek: 2, dayShort: "Tue", isOpen: true, openTime: "06:00 AM", closeTime: "08:30 PM", breakTime: "01:00 - 02:00 PM" },
        { dayOfWeek: 3, dayShort: "Wed", isOpen: true, openTime: "06:00 AM", closeTime: "08:30 PM", breakTime: "01:00 - 02:00 PM" },
        { dayOfWeek: 4, dayShort: "Thu", isOpen: true, openTime: "06:00 AM", closeTime: "08:30 PM", breakTime: "01:00 - 02:00 PM" },
        { dayOfWeek: 5, dayShort: "Fri", isOpen: true, openTime: "06:00 AM", closeTime: "08:30 PM", breakTime: "01:00 - 02:00 PM" },
        { dayOfWeek: 6, dayShort: "Sat", isOpen: true, openTime: "06:00 AM", closeTime: "09:00 PM", breakTime: "01:00 - 02:00 PM" },
        { dayOfWeek: 0, dayShort: "Sun", isOpen: true, openTime: "06:00 AM", closeTime: "08:30 PM" }
      ],
      holidays: ["26 Jan (Republic Day)", "15 Aug (Independence Day)"],
      storePickup: true,
      merchantDelivery: true,
      serviceRadius: "6 km",
      serviceRadiusMeters: 6000,
      minOrderValue: 100,
      prepTime: "15 minutes",
      bankAccountHolder: "Vinod Patil",
      bankAccountNumber: "**********3341",
      bankIfscCode: "SBIN0000432",
      bankName: "State Bank of India",
      termsAgreed: true,
      submittedAt: new Date("2026-11-14T06:30:00Z"),
      reviewedAt: new Date("2026-11-14T08:00:00Z"),
      createdAt: new Date("2026-11-14T06:00:00Z"),
      updatedAt: new Date("2026-11-14T08:00:00Z"),
      documents: [
        { id: "doc-s1", documentType: "PAN", fileName: "PAN_VINOD_PATIL.pdf", fileUrl: "https://storage.nukkadnow.internal/docs/PAN_VINOD_PATIL.pdf", fileSize: "1.1 MB", verificationStatus: "VERIFIED" },
        { id: "doc-s2", documentType: "OWNER_ID", fileName: "AADHAAR_PATIL.jpg", fileUrl: "https://storage.nukkadnow.internal/docs/AADHAAR_PATIL.jpg", fileSize: "2.1 MB", verificationStatus: "VERIFIED" },
        { id: "doc-s3", documentType: "BUSINESS_PROOF", fileName: "APMC_MANDI_LICENCE.pdf", fileUrl: "https://storage.nukkadnow.internal/docs/APMC_MANDI_LICENCE.pdf", fileSize: "1.5 MB", verificationStatus: "VERIFIED" }
      ],
      statusHistory: [
        { fromStatus: "DRAFT", toStatus: "SUBMITTED", changedBy: "MERCHANT", reason: "Mandi application submitted", createdAt: new Date("2026-11-14T06:30:00Z") },
        { fromStatus: "SUBMITTED", toStatus: "APPROVED", changedBy: "ADMIN_VERIFIER", reason: "APMC Mandi Licence & KYC approved", createdAt: new Date("2026-11-14T08:00:00Z") }
      ]
    });

    // 2. Kirana: Sharma Kirana & General Store
    const kiranaReg = new PartnerRegistration({
      id: "reg-kirana-002",
      applicationId: "NN-MR-20261115-0387",
      merchantId: "merchant-kirana-002",
      currentStep: 8,
      status: "APPROVED",
      businessType: "retail",
      businessName: "Sharma Kirana & General Store",
      ownerName: "Rajesh Sharma",
      mobileNumber: "+91 98765 43210",
      email: "rajesh@sharmakirana.com",
      businessCategory: "Grocery & Daily Needs",
      businessDescription: "A neighbourhood grocery store offering daily essentials, spices, pulses, rice, edible oils, dairy, household items and personal care products.",
      pincode: "442001",
      state: "Maharashtra",
      district: "Akola",
      city: "Akola",
      locality: "Civil Lines",
      fullAddress: "Shop No. 12, Main Market Road, Civil Lines, Akola, Maharashtra - 442001",
      latitude: 20.7002,
      longitude: 77.0082,
      homeBusinessPrivacy: false,
      scheduleMode: "weekly",
      operatingHours: [
        { dayOfWeek: 1, dayShort: "Mon", isOpen: true, openTime: "09:00 AM", closeTime: "09:00 PM", breakTime: "01:00 - 02:00 PM" },
        { dayOfWeek: 2, dayShort: "Tue", isOpen: true, openTime: "09:00 AM", closeTime: "09:00 PM", breakTime: "01:00 - 02:00 PM" },
        { dayOfWeek: 3, dayShort: "Wed", isOpen: true, openTime: "09:00 AM", closeTime: "09:00 PM", breakTime: "01:00 - 02:00 PM" },
        { dayOfWeek: 4, dayShort: "Thu", isOpen: true, openTime: "09:00 AM", closeTime: "09:00 PM", breakTime: "01:00 - 02:00 PM" },
        { dayOfWeek: 5, dayShort: "Fri", isOpen: true, openTime: "09:00 AM", closeTime: "09:00 PM", breakTime: "01:00 - 02:00 PM" },
        { dayOfWeek: 6, dayShort: "Sat", isOpen: true, openTime: "09:00 AM", closeTime: "10:00 PM", breakTime: "01:00 - 02:00 PM" },
        { dayOfWeek: 0, dayShort: "Sun", isOpen: false, openTime: "09:00 AM", closeTime: "09:00 PM" }
      ],
      holidays: ["26 Jan (Republic Day)", "15 Aug (Independence Day)", "02 Oct (Gandhi Jayanti)"],
      storePickup: true,
      merchantDelivery: true,
      serviceRadius: "5 km",
      serviceRadiusMeters: 5000,
      minOrderValue: 300,
      prepTime: "30 minutes",
      bankAccountHolder: "Rajesh Sharma",
      bankAccountNumber: "**********9012",
      bankIfscCode: "HDFC0001234",
      bankName: "HDFC Bank",
      termsAgreed: true,
      submittedAt: new Date("2026-11-15T10:24:00Z"),
      reviewedAt: new Date("2026-11-15T11:30:00Z"),
      createdAt: new Date("2026-11-15T10:00:00Z"),
      updatedAt: new Date("2026-11-15T11:30:00Z"),
      documents: [
        { id: "doc-k1", documentType: "PAN", fileName: "PAN_RAJESH_SHARMA.pdf", fileUrl: "https://storage.nukkadnow.internal/docs/PAN_RAJESH_SHARMA.pdf", fileSize: "1.2 MB", verificationStatus: "VERIFIED" },
        { id: "doc-k2", documentType: "OWNER_ID", fileName: "AADHAAR_CARD.jpg", fileUrl: "https://storage.nukkadnow.internal/docs/AADHAAR_CARD.jpg", fileSize: "2.4 MB", verificationStatus: "VERIFIED" },
        { id: "doc-k3", documentType: "BUSINESS_PROOF", fileName: "SHOP_ACT_REGISTRATION.pdf", fileUrl: "https://storage.nukkadnow.internal/docs/SHOP_ACT_REGISTRATION.pdf", fileSize: "1.8 MB", verificationStatus: "VERIFIED" }
      ],
      statusHistory: [
        { fromStatus: "DRAFT", toStatus: "SUBMITTED", changedBy: "MERCHANT", reason: "Application submitted", createdAt: new Date("2026-11-15T10:24:00Z") },
        { fromStatus: "SUBMITTED", toStatus: "APPROVED", changedBy: "ADMIN_VERIFIER", reason: "Shop Act verification approved", createdAt: new Date("2026-11-15T11:30:00Z") }
      ]
    });

    // 3. Garguti Chivda: Sunita Kulkarni (Home Business)
    const gargutiReg = new PartnerRegistration({
      id: "reg-garguti-003",
      applicationId: "NN-MR-20261116-2244",
      merchantId: "merchant-garguti-003",
      currentStep: 8,
      status: "APPROVED",
      businessType: "home",
      businessName: "Garguti Homemade Chivda & Snacks",
      ownerName: "Sunita Kulkarni",
      mobileNumber: "+91 98221 44556",
      email: "sunita.kulkarni@gargutichivda.in",
      businessCategory: "Home Bakery & Traditional Snacks",
      businessDescription: "Authentic homemade Vidarbha special spicy poha chivda, bakarwadi, cornflakes chivda, chakli, besan laddoo and traditional festive faral made with pure groundnut oil and family secret spices.",
      pincode: "442005",
      state: "Maharashtra",
      district: "Akola",
      city: "Akola",
      locality: "Ramdaspeth",
      fullAddress: "Flat 302, Radha Krishna Heights, Ramdaspeth, Akola, Maharashtra - 442005",
      latitude: 20.6975,
      longitude: 77.0012,
      homeBusinessPrivacy: true, // Address masked for privacy
      scheduleMode: "weekly",
      operatingHours: [
        { dayOfWeek: 1, dayShort: "Mon", isOpen: true, openTime: "10:00 AM", closeTime: "07:00 PM" },
        { dayOfWeek: 2, dayShort: "Tue", isOpen: true, openTime: "10:00 AM", closeTime: "07:00 PM" },
        { dayOfWeek: 3, dayShort: "Wed", isOpen: true, openTime: "10:00 AM", closeTime: "07:00 PM" },
        { dayOfWeek: 4, dayShort: "Thu", isOpen: true, openTime: "10:00 AM", closeTime: "07:00 PM" },
        { dayOfWeek: 5, dayShort: "Fri", isOpen: true, openTime: "10:00 AM", closeTime: "07:00 PM" },
        { dayOfWeek: 6, dayShort: "Sat", isOpen: true, openTime: "10:00 AM", closeTime: "07:00 PM" },
        { dayOfWeek: 0, dayShort: "Sun", isOpen: true, openTime: "11:00 AM", closeTime: "04:00 PM" }
      ],
      storePickup: true,
      merchantDelivery: true,
      serviceRadius: "10 km",
      serviceRadiusMeters: 10000,
      minOrderValue: 200,
      prepTime: "45 minutes",
      bankAccountHolder: "Sunita Kulkarni",
      bankAccountNumber: "**********6789",
      bankIfscCode: "MAHB0000123",
      bankName: "Bank of Maharashtra",
      termsAgreed: true,
      submittedAt: new Date("2026-11-16T10:15:00Z"),
      reviewedAt: new Date("2026-11-16T12:00:00Z"),
      createdAt: new Date("2026-11-16T10:00:00Z"),
      updatedAt: new Date("2026-11-16T12:00:00Z"),
      documents: [
        { id: "doc-g1", documentType: "PAN", fileName: "PAN_SUNITA_KULKARNI.pdf", fileUrl: "https://storage.nukkadnow.internal/docs/PAN_SUNITA_KULKARNI.pdf", fileSize: "0.9 MB", verificationStatus: "VERIFIED" },
        { id: "doc-g2", documentType: "OWNER_ID", fileName: "AADHAAR_SUNITA.jpg", fileUrl: "https://storage.nukkadnow.internal/docs/AADHAAR_SUNITA.jpg", fileSize: "1.9 MB", verificationStatus: "VERIFIED" },
        { id: "doc-g3", documentType: "BUSINESS_PROOF", fileName: "FSSAI_HOME_REGISTRATION.pdf", fileUrl: "https://storage.nukkadnow.internal/docs/FSSAI_HOME_REGISTRATION.pdf", fileSize: "1.3 MB", verificationStatus: "VERIFIED" }
      ],
      statusHistory: [
        { fromStatus: "DRAFT", toStatus: "SUBMITTED", changedBy: "MERCHANT", reason: "Home chef business submitted", createdAt: new Date("2026-11-16T10:15:00Z") },
        { fromStatus: "SUBMITTED", toStatus: "APPROVED", changedBy: "ADMIN_VERIFIER", reason: "FSSAI Home Chef Registration Verified", createdAt: new Date("2026-11-16T12:00:00Z") }
      ]
    });

    // 4. Sweets & Bakery: Anand Joshi
    const sweetsReg = new PartnerRegistration({
      id: "reg-sweets-004",
      applicationId: "NN-MR-20261117-4912",
      merchantId: "merchant-sweets-004",
      currentStep: 8,
      status: "APPROVED",
      businessType: "retail",
      businessName: "Mahalaxmi Sweets, Dairy & Bakery",
      ownerName: "Anand Joshi",
      mobileNumber: "+91 98900 77889",
      email: "anand.joshi@mahalaxmisweets.com",
      businessCategory: "Dairy, Sweets & Bakery",
      businessDescription: "Renowned authentic Nagpur orange barfi, motichoor laddoo, fresh buffalo paneer, pure cow ghee, daily milk, hot jalebi and artisan sourdough breads.",
      pincode: "440010",
      state: "Maharashtra",
      district: "Nagpur",
      city: "Nagpur",
      locality: "Dharampeth",
      fullAddress: "Plot 18, West High Court Road, Dharampeth, Nagpur, Maharashtra - 440010",
      latitude: 21.1408,
      longitude: 79.0620,
      homeBusinessPrivacy: false,
      scheduleMode: "weekly",
      operatingHours: [
        { dayOfWeek: 1, dayShort: "Mon", isOpen: true, openTime: "07:30 AM", closeTime: "10:30 PM" },
        { dayOfWeek: 2, dayShort: "Tue", isOpen: true, openTime: "07:30 AM", closeTime: "10:30 PM" },
        { dayOfWeek: 3, dayShort: "Wed", isOpen: true, openTime: "07:30 AM", closeTime: "10:30 PM" },
        { dayOfWeek: 4, dayShort: "Thu", isOpen: true, openTime: "07:30 AM", closeTime: "10:30 PM" },
        { dayOfWeek: 5, dayShort: "Fri", isOpen: true, openTime: "07:30 AM", closeTime: "10:30 PM" },
        { dayOfWeek: 6, dayShort: "Sat", isOpen: true, openTime: "07:30 AM", closeTime: "11:00 PM" },
        { dayOfWeek: 0, dayShort: "Sun", isOpen: true, openTime: "07:30 AM", closeTime: "10:30 PM" }
      ],
      storePickup: true,
      merchantDelivery: true,
      serviceRadius: "8 km",
      serviceRadiusMeters: 8000,
      minOrderValue: 250,
      prepTime: "20 minutes",
      bankAccountHolder: "Mahalaxmi Food LLP",
      bankAccountNumber: "**********5512",
      bankIfscCode: "UTIB0000045",
      bankName: "Axis Bank",
      termsAgreed: true,
      submittedAt: new Date("2026-11-17T08:00:00Z"),
      reviewedAt: new Date("2026-11-17T09:30:00Z"),
      createdAt: new Date("2026-11-17T07:30:00Z"),
      updatedAt: new Date("2026-11-17T09:30:00Z"),
      documents: [
        { id: "doc-sw1", documentType: "PAN", fileName: "PAN_MAHALAXMI_LLP.pdf", fileUrl: "https://storage.nukkadnow.internal/docs/PAN_MAHALAXMI_LLP.pdf", fileSize: "1.4 MB", verificationStatus: "VERIFIED" },
        { id: "doc-sw2", documentType: "OWNER_ID", fileName: "AADHAAR_ANAND_JOSHI.jpg", fileUrl: "https://storage.nukkadnow.internal/docs/AADHAAR_ANAND_JOSHI.jpg", fileSize: "2.3 MB", verificationStatus: "VERIFIED" },
        { id: "doc-sw3", documentType: "BUSINESS_PROOF", fileName: "GST_CERTIFICATE_MAHALAXMI.pdf", fileUrl: "https://storage.nukkadnow.internal/docs/GST_CERTIFICATE_MAHALAXMI.pdf", fileSize: "2.0 MB", verificationStatus: "VERIFIED" }
      ],
      statusHistory: [
        { fromStatus: "DRAFT", toStatus: "SUBMITTED", changedBy: "MERCHANT", reason: "LLP onboarding submitted", createdAt: new Date("2026-11-17T08:00:00Z") },
        { fromStatus: "SUBMITTED", toStatus: "APPROVED", changedBy: "ADMIN_VERIFIER", reason: "GST & FSSAI verified", createdAt: new Date("2026-11-17T09:30:00Z") }
      ]
    });

    [sabjiReg, kiranaReg, gargutiReg, sweetsReg].forEach(r => {
      this.registrations.set(r.applicationId, r);
      this.registrations.set(r.id, r);
      if (r.merchantId) {
        this.registrations.set(r.merchantId, r);
      }
    });
  }

  async save(registration: PartnerRegistration): Promise<void> {
    this.registrations.set(registration.id, registration);
    this.registrations.set(registration.applicationId, registration);
    if (registration.merchantId) {
      this.registrations.set(registration.merchantId, registration);
    }
  }

  async findById(id: string): Promise<PartnerRegistration | null> {
    return this.registrations.get(id) || null;
  }

  async findByApplicationId(applicationId: string): Promise<PartnerRegistration | null> {
    return this.registrations.get(applicationId) || null;
  }

  async findByMobileNumber(mobileNumber: string): Promise<PartnerRegistration | null> {
    const cleaned = mobileNumber.replace(/\s+/g, "");
    for (const reg of this.registrations.values()) {
      if (reg.mobileNumber.replace(/\s+/g, "") === cleaned) {
        return reg;
      }
    }
    return null;
  }

  async list(filters?: { status?: ApplicationStatusCode; limit?: number; offset?: number }): Promise<PartnerRegistration[]> {
    const all = Array.from(new Set(this.registrations.values()));
    if (!filters?.status) return all;
    return all.filter(r => r.status === filters.status);
  }
}
