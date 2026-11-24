import { Injectable, Logger } from "@nestjs/common";
import { PartnerRegistrationRepositoryPort } from "../../../domain/repositories/partner-registration.repository.port";
import { PartnerRegistration, ApplicationStatusCode, BusinessTypeEnum } from "../../../domain/entities/partner-registration.entity";
import { PrismaService } from "../prisma/prisma.service";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class PrismaPartnerRegistrationRepository implements PartnerRegistrationRepositoryPort {
  private readonly logger = new Logger(PrismaPartnerRegistrationRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  private mapToDomain(record: any): PartnerRegistration {
    return new PartnerRegistration({
      id: record.id,
      applicationId: record.applicationId,
      merchantId: record.merchantId || undefined,
      currentStep: record.currentStep,
      status: record.status as ApplicationStatusCode,
      businessType: record.businessType as BusinessTypeEnum,
      businessName: record.businessName,
      ownerName: record.ownerName,
      mobileNumber: record.mobileNumber,
      email: record.email || undefined,
      businessCategory: record.businessCategory,
      businessDescription: record.businessDescription,
      pincode: record.pincode,
      state: record.state,
      district: record.district,
      city: record.city,
      locality: record.locality,
      fullAddress: record.fullAddress,
      latitude: record.latitude,
      longitude: record.longitude,
      homeBusinessPrivacy: record.homeBusinessPrivacy,
      scheduleMode: (record.scheduleMode as 'weekly' | 'same_every_day') || 'weekly',
      operatingHours: Array.isArray(record.operatingHours) ? record.operatingHours : [],
      holidays: Array.isArray(record.holidays) ? record.holidays : [],
      temporaryClosure: record.temporaryClosure || undefined,
      storePickup: record.storePickup,
      merchantDelivery: record.merchantDelivery,
      serviceRadius: record.serviceRadius,
      serviceRadiusMeters: record.serviceRadiusMeters,
      minOrderValue: record.minOrderValue,
      prepTime: record.prepTime,
      bankAccountHolder: record.bankAccountHolder || undefined,
      bankAccountNumber: record.bankAccountNumber || undefined,
      bankIfscCode: record.bankIfscCode || undefined,
      bankName: record.bankName || undefined,
      categoryLicenceUrl: record.categoryLicenceUrl || undefined,
      categoryLicenceName: record.categoryLicenceName || undefined,
      termsAgreed: record.termsAgreed,
      submittedAt: record.submittedAt ? new Date(record.submittedAt) : undefined,
      reviewedAt: record.reviewedAt ? new Date(record.reviewedAt) : undefined,
      reviewNotes: record.reviewNotes || undefined,
      createdAt: new Date(record.createdAt),
      updatedAt: new Date(record.updatedAt),
      documents: (record.documents || []).map((d: any) => ({
        id: d.id,
        documentType: d.documentType,
        fileName: d.fileName,
        fileUrl: d.fileUrl,
        fileSize: d.fileSize || undefined,
        verificationStatus: d.verificationStatus,
        rejectionReason: d.rejectionReason || undefined,
      })),
      statusHistory: (record.statusHistory || []).map((h: any) => ({
        fromStatus: h.fromStatus,
        toStatus: h.toStatus,
        changedBy: h.changedBy,
        reason: h.reason || undefined,
        notes: h.notes || undefined,
        createdAt: new Date(h.createdAt),
      })),
    });
  }

  async save(registration: PartnerRegistration): Promise<void> {
    const prim = registration.toPrimitives();

    // Satisfy foreign key constraint & persist approved merchant/outlet in PostgreSQL
    if (prim.merchantId) {
      await this.prisma.merchant.upsert({
        where: { id: prim.merchantId },
        update: {
          organizationName: prim.businessName,
          legalBusinessName: prim.businessName,
          contactName: prim.ownerName,
          contactPhone: prim.mobileNumber,
          email: prim.email,
          businessType: prim.businessType,
          category: prim.businessCategory,
          description: prim.businessDescription,
          verificationStatus: 'VERIFIED',
          updatedAt: new Date(),
        },
        create: {
          id: prim.merchantId,
          organizationName: prim.businessName,
          legalBusinessName: prim.businessName,
          contactName: prim.ownerName,
          contactPhone: prim.mobileNumber,
          email: prim.email,
          businessType: prim.businessType,
          category: prim.businessCategory,
          description: prim.businessDescription,
          verificationStatus: 'VERIFIED',
        },
      });

      const existingOutlets = await this.prisma.outlet.findMany({
        where: { merchantId: prim.merchantId },
      });

      const outletId = existingOutlets[0]?.id || UniqueIdentifier.generateV7();
      await this.prisma.outlet.upsert({
        where: { id: outletId },
        update: {
          name: prim.businessName,
          addressLine: prim.fullAddress,
          locality: prim.locality,
          city: prim.city,
          pincode: prim.pincode,
          latitude: prim.latitude,
          longitude: prim.longitude,
          storePickup: prim.storePickup,
          merchantDelivery: prim.merchantDelivery,
          minOrderValue: prim.minOrderValue,
          isActive: true,
          updatedAt: new Date(),
        },
        create: {
          id: outletId,
          merchantId: prim.merchantId,
          name: prim.businessName,
          addressLine: prim.fullAddress,
          locality: prim.locality,
          city: prim.city,
          pincode: prim.pincode,
          latitude: prim.latitude,
          longitude: prim.longitude,
          storePickup: prim.storePickup,
          merchantDelivery: prim.merchantDelivery,
          minOrderValue: prim.minOrderValue,
          isActive: true,
        },
      });
    }

    await this.prisma.partnerRegistration.upsert({
      where: { applicationId: prim.applicationId },
      create: {
        id: prim.id,
        applicationId: prim.applicationId,
        merchantId: prim.merchantId,
        currentStep: prim.currentStep,
        status: prim.status,
        businessType: prim.businessType,
        businessName: prim.businessName,
        ownerName: prim.ownerName,
        mobileNumber: prim.mobileNumber,
        email: prim.email,
        businessCategory: prim.businessCategory,
        businessDescription: prim.businessDescription,
        pincode: prim.pincode,
        state: prim.state,
        district: prim.district,
        city: prim.city,
        locality: prim.locality,
        fullAddress: prim.fullAddress,
        latitude: prim.latitude,
        longitude: prim.longitude,
        homeBusinessPrivacy: prim.homeBusinessPrivacy,
        scheduleMode: prim.scheduleMode,
        operatingHours: prim.operatingHours as any,
        holidays: prim.holidays as any,
        temporaryClosure: prim.temporaryClosure as any,
        storePickup: prim.storePickup,
        merchantDelivery: prim.merchantDelivery,
        serviceRadius: prim.serviceRadius,
        serviceRadiusMeters: prim.serviceRadiusMeters,
        minOrderValue: prim.minOrderValue,
        prepTime: prim.prepTime,
        bankAccountHolder: prim.bankAccountHolder,
        bankAccountNumber: prim.bankAccountNumber,
        bankIfscCode: prim.bankIfscCode,
        bankName: prim.bankName,
        categoryLicenceUrl: prim.categoryLicenceUrl,
        categoryLicenceName: prim.categoryLicenceName,
        termsAgreed: prim.termsAgreed,
        submittedAt: prim.submittedAt,
        reviewedAt: prim.reviewedAt,
        reviewNotes: prim.reviewNotes,
      },
      update: {
        merchantId: prim.merchantId,
        currentStep: prim.currentStep,
        status: prim.status,
        businessType: prim.businessType,
        businessName: prim.businessName,
        ownerName: prim.ownerName,
        mobileNumber: prim.mobileNumber,
        email: prim.email,
        businessCategory: prim.businessCategory,
        businessDescription: prim.businessDescription,
        pincode: prim.pincode,
        state: prim.state,
        district: prim.district,
        city: prim.city,
        locality: prim.locality,
        fullAddress: prim.fullAddress,
        latitude: prim.latitude,
        longitude: prim.longitude,
        homeBusinessPrivacy: prim.homeBusinessPrivacy,
        scheduleMode: prim.scheduleMode,
        operatingHours: prim.operatingHours as any,
        holidays: prim.holidays as any,
        temporaryClosure: prim.temporaryClosure as any,
        storePickup: prim.storePickup,
        merchantDelivery: prim.merchantDelivery,
        serviceRadius: prim.serviceRadius,
        serviceRadiusMeters: prim.serviceRadiusMeters,
        minOrderValue: prim.minOrderValue,
        prepTime: prim.prepTime,
        bankAccountHolder: prim.bankAccountHolder,
        bankAccountNumber: prim.bankAccountNumber,
        bankIfscCode: prim.bankIfscCode,
        bankName: prim.bankName,
        categoryLicenceUrl: prim.categoryLicenceUrl,
        categoryLicenceName: prim.categoryLicenceName,
        termsAgreed: prim.termsAgreed,
        submittedAt: prim.submittedAt,
        reviewedAt: prim.reviewedAt,
        reviewNotes: prim.reviewNotes,
        updatedAt: new Date(),
      },
    });

    // Synchronize Documents
    if (prim.documents && prim.documents.length > 0) {
      for (const doc of prim.documents) {
        if (doc.id) {
          await this.prisma.registrationDocument.upsert({
            where: { id: doc.id },
            create: {
              id: doc.id,
              registrationId: prim.id,
              documentType: doc.documentType,
              fileName: doc.fileName,
              fileUrl: doc.fileUrl,
              fileSize: doc.fileSize,
              verificationStatus: doc.verificationStatus || "PENDING",
              rejectionReason: doc.rejectionReason,
            },
            update: {
              fileName: doc.fileName,
              fileUrl: doc.fileUrl,
              fileSize: doc.fileSize,
              verificationStatus: doc.verificationStatus || "PENDING",
              rejectionReason: doc.rejectionReason,
            },
          });
        }
      }
    }

    // Synchronize Status History
    if (prim.statusHistory && prim.statusHistory.length > 0) {
      await this.prisma.registrationStatusHistory.deleteMany({
        where: { registrationId: prim.id },
      });
      for (const h of prim.statusHistory) {
        await this.prisma.registrationStatusHistory.create({
          data: {
            id: UniqueIdentifier.generateV7(),
            registrationId: prim.id,
            fromStatus: h.fromStatus,
            toStatus: h.toStatus,
            changedBy: h.changedBy,
            reason: h.reason ?? null,
            notes: h.notes ?? null,
            createdAt: h.createdAt ? new Date(h.createdAt) : new Date(),
          },
        });
      }
    }
  }

  async findById(id: string): Promise<PartnerRegistration | null> {
    const record = await this.prisma.partnerRegistration.findUnique({
      where: { id },
      include: { documents: true, statusHistory: true },
    });
    return record ? this.mapToDomain(record) : null;
  }

  async findByApplicationId(applicationId: string): Promise<PartnerRegistration | null> {
    const record = await this.prisma.partnerRegistration.findUnique({
      where: { applicationId },
      include: { documents: true, statusHistory: true },
    });
    return record ? this.mapToDomain(record) : null;
  }

  async findByMobileNumber(mobileNumber: string): Promise<PartnerRegistration | null> {
    const record = await this.prisma.partnerRegistration.findFirst({
      where: { mobileNumber },
      include: { documents: true, statusHistory: true },
    });
    return record ? this.mapToDomain(record) : null;
  }

  async list(filters?: { status?: ApplicationStatusCode; limit?: number; offset?: number }): Promise<PartnerRegistration[]> {
    const records = await this.prisma.partnerRegistration.findMany({
      where: filters?.status ? { status: filters.status } : undefined,
      include: { documents: true, statusHistory: true },
      take: filters?.limit || 50,
      skip: filters?.offset || 0,
      orderBy: { createdAt: "desc" },
    });
    return records.map((r: any) => this.mapToDomain(r));
  }
}
