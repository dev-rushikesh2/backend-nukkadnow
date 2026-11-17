import { PartnerRegistration, ApplicationStatusCode } from "../entities/partner-registration.entity";

export abstract class PartnerRegistrationRepositoryPort {
  abstract save(registration: PartnerRegistration): Promise<void>;
  abstract findById(id: string): Promise<PartnerRegistration | null>;
  abstract findByApplicationId(applicationId: string): Promise<PartnerRegistration | null>;
  abstract findByMobileNumber(mobileNumber: string): Promise<PartnerRegistration | null>;
  abstract list(filters?: { status?: ApplicationStatusCode; limit?: number; offset?: number }): Promise<PartnerRegistration[]>;
}
