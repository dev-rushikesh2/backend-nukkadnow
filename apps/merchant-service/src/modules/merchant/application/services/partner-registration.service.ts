import { Injectable, NotFoundException, BadRequestException, Logger } from "@nestjs/common";
import { PartnerRegistrationRepositoryPort } from "../../domain/repositories/partner-registration.repository.port";
import { MerchantRepositoryPort, OutletRepositoryPort } from "../../domain/repositories/merchant.repository.port";
import { PartnerRegistration, ApplicationStatusCode, BusinessTypeEnum } from "../../domain/entities/partner-registration.entity";
import { Merchant } from "../../domain/entities/merchant.entity";
import { Outlet } from "../../domain/entities/outlet.entity";
import { Address } from "../../domain/value-objects/address.vo";
import { OperatingHours } from "../../domain/value-objects/operating-hours.vo";
import { SellerMode } from "../../domain/value-objects/seller-mode.vo";
import {
  SaveDraftRegistrationDto,
  SubmitRegistrationDto,
  UpdateApplicationStatusDto,
  UploadDocumentDto
} from "../dto/partner-registration.dto";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class PartnerRegistrationService {
  private readonly logger = new Logger(PartnerRegistrationService.name);

  constructor(
    private readonly registrationRepo: PartnerRegistrationRepositoryPort,
    private readonly merchantRepo: MerchantRepositoryPort,
    private readonly outletRepo: OutletRepositoryPort
  ) {}

  /**
   * Generates a unique business application tracking ID: NN-MR-YYYYMMDD-XXXX
   */
  private generateApplicationId(): string {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    return `NN-MR-${yyyy}${mm}${dd}-${randomSuffix}`;
  }

  /**
   * Progressive Draft Upsert (Steps 1 to 6)
   */
  async saveDraft(dto: SaveDraftRegistrationDto): Promise<PartnerRegistration> {
    let registration: PartnerRegistration | null = null;

    if (dto.applicationId) {
      registration = await this.registrationRepo.findByApplicationId(dto.applicationId);
    }

    if (!registration && dto.mobileNumber) {
      registration = await this.registrationRepo.findByMobileNumber(dto.mobileNumber);
    }

    if (registration) {
      // Update existing application
      registration.updateStepData({
        currentStep: dto.currentStep ?? Math.max(registration.currentStep, dto.currentStep || 1),
        businessType: dto.businessType ?? registration.businessType,
        businessName: dto.businessName ?? registration.businessName,
        ownerName: dto.ownerName ?? registration.ownerName,
        mobileNumber: dto.mobileNumber ?? registration.mobileNumber,
        email: dto.email ?? registration.email,
        businessCategory: dto.businessCategory ?? registration.businessCategory,
        businessDescription: dto.businessDescription ?? registration.businessDescription,
        pincode: dto.pincode ?? registration.pincode,
        state: dto.state ?? registration.state,
        district: dto.district ?? registration.district,
        city: dto.city ?? registration.city,
        locality: dto.locality ?? registration.locality,
        fullAddress: dto.fullAddress ?? registration.fullAddress,
        latitude: dto.latitude ?? registration.latitude,
        longitude: dto.longitude ?? registration.longitude,
        homeBusinessPrivacy: dto.homeBusinessPrivacy ?? registration.homeBusinessPrivacy,
        scheduleMode: dto.scheduleMode ?? registration.scheduleMode,
        operatingHours: dto.operatingHours ?? registration.operatingHours,
        holidays: dto.holidays ?? registration.holidays,
        storePickup: dto.storePickup ?? registration.storePickup,
        merchantDelivery: dto.merchantDelivery ?? registration.merchantDelivery,
        serviceRadius: dto.serviceRadius ?? registration.serviceRadius,
        minOrderValue: dto.minOrderValue ?? registration.minOrderValue,
        prepTime: dto.prepTime ?? registration.prepTime,
        bankAccountHolder: dto.bankAccountHolder ?? registration.bankAccountHolder,
        bankAccountNumber: dto.bankAccountNumber ?? registration.bankAccountNumber,
        bankIfscCode: dto.bankIfscCode ?? registration.bankIfscCode,
        bankName: dto.bankName ?? registration.bankName,
      });

      if (dto.documents && dto.documents.length > 0) {
        dto.documents.forEach(doc => registration!.attachDocument(doc));
      }

      await this.registrationRepo.save(registration);
      return registration;
    }

    // Create a new registration
    const newAppId = this.generateApplicationId();
    const defaultHours = [
      { dayOfWeek: 1, dayShort: "Mon", isOpen: true, openTime: "09:00 AM", closeTime: "09:00 PM", breakTime: "01:00 - 02:00 PM" },
      { dayOfWeek: 2, dayShort: "Tue", isOpen: true, openTime: "09:00 AM", closeTime: "09:00 PM", breakTime: "01:00 - 02:00 PM" },
      { dayOfWeek: 3, dayShort: "Wed", isOpen: true, openTime: "09:00 AM", closeTime: "09:00 PM", breakTime: "01:00 - 02:00 PM" },
      { dayOfWeek: 4, dayShort: "Thu", isOpen: true, openTime: "09:00 AM", closeTime: "09:00 PM", breakTime: "01:00 - 02:00 PM" },
      { dayOfWeek: 5, dayShort: "Fri", isOpen: true, openTime: "09:00 AM", closeTime: "09:00 PM", breakTime: "01:00 - 02:00 PM" },
      { dayOfWeek: 6, dayShort: "Sat", isOpen: true, openTime: "09:00 AM", closeTime: "10:00 PM", breakTime: "01:00 - 02:00 PM" },
      { dayOfWeek: 0, dayShort: "Sun", isOpen: false, openTime: "09:00 AM", closeTime: "09:00 PM" },
    ];

    const newRegistration = new PartnerRegistration({
      id: UniqueIdentifier.generateV7(),
      applicationId: newAppId,
      currentStep: dto.currentStep || 1,
      status: "SUBMITTED",
      businessType: (dto.businessType as BusinessTypeEnum) || "retail",
      businessName: dto.businessName || "Pending Name",
      ownerName: dto.ownerName || "Pending Owner",
      mobileNumber: dto.mobileNumber,
      email: dto.email,
      businessCategory: dto.businessCategory || "Grocery & Daily Needs",
      businessDescription: dto.businessDescription || "",
      pincode: dto.pincode || "440001",
      state: dto.state || "Maharashtra",
      district: dto.district || "Nagpur",
      city: dto.city || "Nagpur",
      locality: dto.locality || "Sitabuldi",
      fullAddress: dto.fullAddress || "",
      latitude: dto.latitude || 21.1458,
      longitude: dto.longitude || 79.0882,
      homeBusinessPrivacy: dto.homeBusinessPrivacy ?? false,
      scheduleMode: dto.scheduleMode || "weekly",
      operatingHours: dto.operatingHours || defaultHours,
      holidays: dto.holidays || ["26 Jan (Republic Day)", "15 Aug (Independence Day)", "02 Oct (Gandhi Jayanti)"],
      storePickup: dto.storePickup ?? true,
      merchantDelivery: dto.merchantDelivery ?? true,
      serviceRadius: dto.serviceRadius || "5 km",
      serviceRadiusMeters: 5000,
      minOrderValue: dto.minOrderValue ?? 300,
      prepTime: dto.prepTime || "30 minutes",
      bankAccountHolder: dto.bankAccountHolder,
      bankAccountNumber: dto.bankAccountNumber,
      bankIfscCode: dto.bankIfscCode,
      bankName: dto.bankName,
      termsAgreed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      documents: (dto.documents as any) || [],
      statusHistory: [
        {
          fromStatus: "DRAFT",
          toStatus: "SUBMITTED",
          changedBy: "MERCHANT",
          reason: "Partner application started",
          createdAt: new Date(),
        },
      ],
    });

    await this.registrationRepo.save(newRegistration);
    this.logger.log(`Created new registration draft: ${newRegistration.applicationId}`);
    return newRegistration;
  }

  /**
   * Final Submission & Transition to UNDER_REVIEW
   */
  async submitRegistration(dto: SubmitRegistrationDto): Promise<PartnerRegistration> {
    const registration = await this.registrationRepo.findByApplicationId(dto.applicationId);
    if (!registration) {
      throw new NotFoundException(`Application with ID ${dto.applicationId} not found`);
    }

    if (!dto.termsAgreed) {
      throw new BadRequestException("You must accept terms and conditions to proceed with submission");
    }

    registration.submit(dto.termsAgreed);
    await this.registrationRepo.save(registration);
    this.logger.log(`Application submitted for verification: ${registration.applicationId}`);
    return registration;
  }

  /**
   * Retrieve live application status and details
   */
  async getApplicationStatus(identifier: string): Promise<PartnerRegistration> {
    let registration = await this.registrationRepo.findByApplicationId(identifier);
    if (!registration) {
      registration = await this.registrationRepo.findByMobileNumber(identifier);
    }
    if (!registration) {
      registration = await this.registrationRepo.findById(identifier);
    }
    if (!registration) {
      throw new NotFoundException(`Application '${identifier}' not found`);
    }
    return registration;
  }

  /**
   * Attach Document
   */
  async attachDocument(applicationId: string, doc: UploadDocumentDto): Promise<PartnerRegistration> {
    const registration = await this.getApplicationStatus(applicationId);
    registration.attachDocument(doc);
    await this.registrationRepo.save(registration);
    return registration;
  }

  /**
   * Status change (Admin approval, rejection, request info)
   * When APPROVED, creates verified Merchant & active Outlet in DB!
   */
  async updateApplicationStatus(
    applicationId: string,
    dto: UpdateApplicationStatusDto
  ): Promise<PartnerRegistration> {
    const registration = await this.registrationRepo.findByApplicationId(applicationId);
    if (!registration) {
      throw new NotFoundException(`Application with ID ${applicationId} not found`);
    }

    registration.transitionStatus(
      dto.status,
      dto.changedBy || "ADMIN_VERIFIER",
      dto.reason,
      dto.notes
    );

    // If application is APPROVED, automatically onboard into Merchant & Outlet entities!
    if (dto.status === "APPROVED" && !registration.merchantId) {
      const merchantId = UniqueIdentifier.generateV7();

      const merchant = new Merchant({
        id: merchantId,
        organizationName: registration.businessName,
        legalBusinessName: registration.businessName,
        contactName: registration.ownerName,
        contactPhone: registration.mobileNumber,
        email: registration.email,
        businessType: registration.businessType,
        category: registration.businessCategory,
        description: registration.businessDescription,
        verificationStatus: "VERIFIED",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await this.merchantRepo.save(merchant);

      // Create primary outlet
      const outletId = UniqueIdentifier.generateV7();
      const slots = registration.operatingHours.map(h => ({
        dayOfWeek: h.dayOfWeek,
        openTime: h.openTime,
        closeTime: h.closeTime,
        breakTime: h.breakTime,
        isClosed: !h.isOpen,
      }));

      const sellerModeMap: Record<BusinessTypeEnum, SellerMode> = {
        retail: SellerMode.PERMANENT,
        home: SellerMode.HOME_CHEF,
        manufacturer: SellerMode.ARTISAN,
        seasonal: SellerMode.SEASONAL,
        event: SellerMode.EVENT,
      };

      const outlet = new Outlet({
        id: outletId,
        merchantId: merchant.id,
        name: registration.businessName,
        sellerMode: sellerModeMap[registration.businessType] || SellerMode.PERMANENT,
        address: new Address({
          addressLine: registration.fullAddress,
          locality: registration.locality,
          city: registration.city,
          latitude: registration.latitude,
          longitude: registration.longitude,
          isAddressPublic: !registration.homeBusinessPrivacy,
        }),
        hours: new OperatingHours(slots),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await this.outletRepo.save(outlet);

      registration.updateStepData({ merchantId: merchant.id });
      this.logger.log(`Application APPROVED! Automatically created Merchant (${merchant.id}) and Outlet (${outlet.id})`);
    }

    await this.registrationRepo.save(registration);
    return registration;
  }

  /**
   * List all registrations (for Admin verification portal)
   */
  async listRegistrations(status?: ApplicationStatusCode): Promise<PartnerRegistration[]> {
    return this.registrationRepo.list({ status });
  }
}
