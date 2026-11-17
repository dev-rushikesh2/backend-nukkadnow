import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

export type ApplicationStatusCode = 'SUBMITTED' | 'UNDER_REVIEW' | 'APPROVED' | 'ACTION_REQUIRED' | 'REJECTED';
export type BusinessTypeEnum = 'retail' | 'home' | 'manufacturer' | 'seasonal' | 'event';

export interface DayScheduleDto {
  dayOfWeek: number;
  dayShort: string;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
  breakTime?: string;
}

export interface DocumentDto {
  id?: string;
  documentType: 'PAN' | 'OWNER_ID' | 'BUSINESS_PROOF' | 'CATEGORY_LICENCE';
  fileName: string;
  fileUrl: string;
  fileSize?: string;
  verificationStatus?: 'PENDING' | 'VERIFIED' | 'REJECTED';
  rejectionReason?: string;
}

export interface StatusHistoryEntry {
  fromStatus: string;
  toStatus: string;
  changedBy: string;
  reason?: string;
  notes?: string;
  createdAt: Date;
}

export interface PartnerRegistrationProps {
  id: string;
  applicationId: string;
  merchantId?: string;
  currentStep: number;
  status: ApplicationStatusCode;

  // Step 1: Business Type
  businessType: BusinessTypeEnum;

  // Step 2: Details
  businessName: string;
  ownerName: string;
  mobileNumber: string;
  email?: string;
  businessCategory: string;
  businessDescription: string;

  // Step 3: Location
  pincode: string;
  state: string;
  district: string;
  city: string;
  locality: string;
  fullAddress: string;
  latitude: number;
  longitude: number;
  homeBusinessPrivacy: boolean;

  // Step 4: Hours
  scheduleMode: 'weekly' | 'same_every_day';
  operatingHours: DayScheduleDto[];
  holidays?: string[];
  temporaryClosure?: {
    startDate: string;
    endDate: string;
    reason: string;
  };

  // Step 5: Fulfilment
  storePickup: boolean;
  merchantDelivery: boolean;
  serviceRadius: string;
  serviceRadiusMeters: number;
  minOrderValue: number;
  prepTime: string;

  // Step 6: Bank Settlement
  bankAccountHolder?: string;
  bankAccountNumber?: string;
  bankIfscCode?: string;
  bankName?: string;
  categoryLicenceUrl?: string;
  categoryLicenceName?: string;

  // Step 7: Terms & Review
  termsAgreed: boolean;
  submittedAt?: Date;
  reviewedAt?: Date;
  reviewNotes?: string;
  createdAt: Date;
  updatedAt: Date;

  // Documents & History
  documents: DocumentDto[];
  statusHistory: StatusHistoryEntry[];
}

export class PartnerRegistration {
  private props: PartnerRegistrationProps;

  constructor(props: PartnerRegistrationProps) {
    this.props = { ...props };
  }

  get id(): string { return this.props.id; }
  get applicationId(): string { return this.props.applicationId; }
  get merchantId(): string | undefined { return this.props.merchantId; }
  get currentStep(): number { return this.props.currentStep; }
  get status(): ApplicationStatusCode { return this.props.status; }
  get businessType(): BusinessTypeEnum { return this.props.businessType; }
  get businessName(): string { return this.props.businessName; }
  get ownerName(): string { return this.props.ownerName; }
  get mobileNumber(): string { return this.props.mobileNumber; }
  get email(): string | undefined { return this.props.email; }
  get businessCategory(): string { return this.props.businessCategory; }
  get businessDescription(): string { return this.props.businessDescription; }
  get pincode(): string { return this.props.pincode; }
  get state(): string { return this.props.state; }
  get district(): string { return this.props.district; }
  get city(): string { return this.props.city; }
  get locality(): string { return this.props.locality; }
  get fullAddress(): string { return this.props.fullAddress; }
  get latitude(): number { return this.props.latitude; }
  get longitude(): number { return this.props.longitude; }
  get homeBusinessPrivacy(): boolean { return this.props.homeBusinessPrivacy; }
  get scheduleMode(): 'weekly' | 'same_every_day' { return this.props.scheduleMode; }
  get operatingHours(): DayScheduleDto[] { return this.props.operatingHours; }
  get holidays(): string[] | undefined { return this.props.holidays; }
  get temporaryClosure() { return this.props.temporaryClosure; }
  get storePickup(): boolean { return this.props.storePickup; }
  get merchantDelivery(): boolean { return this.props.merchantDelivery; }
  get serviceRadius(): string { return this.props.serviceRadius; }
  get serviceRadiusMeters(): number { return this.props.serviceRadiusMeters; }
  get minOrderValue(): number { return this.props.minOrderValue; }
  get prepTime(): string { return this.props.prepTime; }
  get bankAccountHolder(): string | undefined { return this.props.bankAccountHolder; }
  get bankAccountNumber(): string | undefined { return this.props.bankAccountNumber; }
  get bankIfscCode(): string | undefined { return this.props.bankIfscCode; }
  get bankName(): string | undefined { return this.props.bankName; }
  get categoryLicenceUrl(): string | undefined { return this.props.categoryLicenceUrl; }
  get categoryLicenceName(): string | undefined { return this.props.categoryLicenceName; }
  get termsAgreed(): boolean { return this.props.termsAgreed; }
  get submittedAt(): Date | undefined { return this.props.submittedAt; }
  get reviewedAt(): Date | undefined { return this.props.reviewedAt; }
  get reviewNotes(): string | undefined { return this.props.reviewNotes; }
  get createdAt(): Date { return this.props.createdAt; }
  get updatedAt(): Date { return this.props.updatedAt; }
  get documents(): DocumentDto[] { return this.props.documents; }
  get statusHistory(): StatusHistoryEntry[] { return this.props.statusHistory; }

  // Step Progress Update
  updateStepData(partial: Partial<PartnerRegistrationProps>): void {
    this.props = {
      ...this.props,
      ...partial,
      updatedAt: new Date()
    };
  }

  // Final Submission
  submit(termsAgreed: boolean): void {
    if (!termsAgreed) {
      throw new Error("Cannot submit registration without agreeing to Terms & Conditions.");
    }
    const previousStatus = this.props.status;
    this.props.status = 'UNDER_REVIEW';
    this.props.currentStep = 8;
    this.props.termsAgreed = true;
    this.props.submittedAt = new Date();
    this.props.updatedAt = new Date();

    this.props.statusHistory.push({
      fromStatus: previousStatus,
      toStatus: 'UNDER_REVIEW',
      changedBy: 'MERCHANT',
      reason: 'Application submitted for partner review',
      createdAt: new Date()
    });
  }

  // Status Transitions (Admin / Verification Engine)
  transitionStatus(newStatus: ApplicationStatusCode, changedBy: string, reason?: string, notes?: string): void {
    const oldStatus = this.props.status;
    this.props.status = newStatus;
    this.props.reviewedAt = new Date();
    this.props.updatedAt = new Date();
    if (notes) this.props.reviewNotes = notes;

    this.props.statusHistory.push({
      fromStatus: oldStatus,
      toStatus: newStatus,
      changedBy,
      reason,
      notes,
      createdAt: new Date()
    });
  }

  attachDocument(doc: DocumentDto): void {
    const index = this.props.documents.findIndex(d => d.documentType === doc.documentType);
    if (index >= 0) {
      this.props.documents[index] = { ...this.props.documents[index], ...doc };
    } else {
      this.props.documents.push({
        id: doc.id || UniqueIdentifier.generateV7(),
        ...doc,
        verificationStatus: doc.verificationStatus || 'PENDING'
      });
    }
    this.props.updatedAt = new Date();
  }

  toPrimitives(): PartnerRegistrationProps {
    return { ...this.props };
  }
}
