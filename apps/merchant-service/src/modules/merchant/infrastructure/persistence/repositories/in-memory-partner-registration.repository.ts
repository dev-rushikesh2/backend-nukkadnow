import { Injectable } from "@nestjs/common";
import { PartnerRegistrationRepositoryPort } from "../../../domain/repositories/partner-registration.repository.port";
import { PartnerRegistration, ApplicationStatusCode } from "../../../domain/entities/partner-registration.entity";

@Injectable()
export class InMemoryPartnerRegistrationRepository implements PartnerRegistrationRepositoryPort {
  private registrations = new Map<string, PartnerRegistration>();

  constructor() {
    // Seed initial demo/real verified partner application
    const seed = new PartnerRegistration({
      id: "reg-demo-001",
      applicationId: "NN-MR-20261115-0387",
      currentStep: 8,
      status: "UNDER_REVIEW",
      businessType: "retail",
      businessName: "Sharma General Store",
      ownerName: "Rajesh Sharma",
      mobileNumber: "+91 98765 43210",
      email: "rajesh@store.com",
      businessCategory: "Grocery & Daily Needs",
      businessDescription: "A neighbourhood grocery store offering daily essentials, household items and personal care products.",
      pincode: "442001",
      state: "Maharashtra",
      district: "Akola",
      city: "Akola",
      locality: "Civil Lines",
      fullAddress: "Shop No. 12, Main Market Road, Civil Lines, Akola - 442001",
      latitude: 20.7002,
      longitude: 77.0082,
      homeBusinessPrivacy: true,
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
      createdAt: new Date("2026-11-15T10:00:00Z"),
      updatedAt: new Date("2026-11-15T10:24:00Z"),
      documents: [
        {
          id: "doc-1",
          documentType: "PAN",
          fileName: "PAN_RAJESH_SHARMA.pdf",
          fileUrl: "https://storage.nukkadnow.internal/docs/PAN_RAJESH_SHARMA.pdf",
          fileSize: "1.2 MB",
          verificationStatus: "PENDING"
        },
        {
          id: "doc-2",
          documentType: "OWNER_ID",
          fileName: "AADHAAR_CARD.jpg",
          fileUrl: "https://storage.nukkadnow.internal/docs/AADHAAR_CARD.jpg",
          fileSize: "2.4 MB",
          verificationStatus: "PENDING"
        },
        {
          id: "doc-3",
          documentType: "BUSINESS_PROOF",
          fileName: "SHOP_ACT_REGISTRATION.pdf",
          fileUrl: "https://storage.nukkadnow.internal/docs/SHOP_ACT_REGISTRATION.pdf",
          fileSize: "1.8 MB",
          verificationStatus: "PENDING"
        }
      ],
      statusHistory: [
        {
          fromStatus: "DRAFT",
          toStatus: "SUBMITTED",
          changedBy: "MERCHANT",
          reason: "Partner application submitted online",
          createdAt: new Date("2026-11-15T10:24:00Z")
        },
        {
          fromStatus: "SUBMITTED",
          toStatus: "UNDER_REVIEW",
          changedBy: "SYSTEM",
          reason: "Automated document OCR verification passed",
          createdAt: new Date("2026-11-15T10:25:00Z")
        }
      ]
    });

    this.registrations.set(seed.applicationId, seed);
    this.registrations.set(seed.id, seed);
  }

  async save(registration: PartnerRegistration): Promise<void> {
    this.registrations.set(registration.id, registration);
    this.registrations.set(registration.applicationId, registration);
  }

  async findById(id: string): Promise<PartnerRegistration | null> {
    return this.registrations.get(id) || null;
  }

  async findByApplicationId(applicationId: string): Promise<PartnerRegistration | null> {
    return this.registrations.get(applicationId) || null;
  }

  async findByMobileNumber(mobileNumber: string): Promise<PartnerRegistration | null> {
    for (const reg of this.registrations.values()) {
      if (reg.mobileNumber.replace(/\s+/g, '') === mobileNumber.replace(/\s+/g, '')) {
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
