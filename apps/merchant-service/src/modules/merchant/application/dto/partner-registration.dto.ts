import { IsString, IsNotEmpty, IsOptional, IsEnum, IsBoolean, IsNumber, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { ApplicationStatusCode, BusinessTypeEnum } from "../../domain/entities/partner-registration.entity";

export class DayScheduleItemDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  dayOfWeek!: number;

  @ApiProperty({ example: 'Mon' })
  @IsString()
  dayShort!: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isOpen!: boolean;

  @ApiProperty({ example: '09:00 AM' })
  @IsString()
  openTime!: string;

  @ApiProperty({ example: '09:00 PM' })
  @IsString()
  closeTime!: string;

  @ApiPropertyOptional({ example: '01:00 - 02:00 PM' })
  @IsOptional()
  @IsString()
  breakTime?: string;
}

export class UploadDocumentDto {
  @ApiProperty({ enum: ['PAN', 'OWNER_ID', 'BUSINESS_PROOF', 'CATEGORY_LICENCE'] })
  @IsString()
  documentType!: 'PAN' | 'OWNER_ID' | 'BUSINESS_PROOF' | 'CATEGORY_LICENCE';

  @ApiProperty({ example: 'PAN_RAJESH_SHARMA.pdf' })
  @IsString()
  fileName!: string;

  @ApiProperty({ example: 'https://storage.nukkadnow.internal/docs/pan-123.pdf' })
  @IsString()
  fileUrl!: string;

  @ApiPropertyOptional({ example: '1.2 MB' })
  @IsOptional()
  @IsString()
  fileSize?: string;
}

export class SaveDraftRegistrationDto {
  @ApiPropertyOptional({ example: 'NN-MR-20261117-0387' })
  @IsOptional()
  @IsString()
  applicationId?: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  currentStep?: number;

  // Step 1: Business Type
  @ApiPropertyOptional({ enum: ['retail', 'home', 'manufacturer', 'seasonal', 'event'] })
  @IsOptional()
  businessType?: BusinessTypeEnum;

  // Step 2: Details
  @ApiPropertyOptional({ example: 'Sharma General Store' })
  @IsOptional()
  @IsString()
  businessName?: string;

  @ApiPropertyOptional({ example: 'Rajesh Sharma' })
  @IsOptional()
  @IsString()
  ownerName?: string;

  @ApiProperty({ example: '+91 98765 43210' })
  @IsNotEmpty()
  @IsString()
  mobileNumber!: string;

  @ApiPropertyOptional({ example: 'rajesh@store.com' })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiPropertyOptional({ example: 'Grocery & Daily Needs' })
  @IsOptional()
  @IsString()
  businessCategory?: string;

  @ApiPropertyOptional({ example: 'Neighbourhood grocery and daily essentials store.' })
  @IsOptional()
  @IsString()
  businessDescription?: string;

  // Step 3: Location
  @ApiPropertyOptional({ example: '442001' })
  @IsOptional()
  @IsString()
  pincode?: string;

  @ApiPropertyOptional({ example: 'Maharashtra' })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiPropertyOptional({ example: 'Akola' })
  @IsOptional()
  @IsString()
  district?: string;

  @ApiPropertyOptional({ example: 'Akola' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ example: 'Civil Lines' })
  @IsOptional()
  @IsString()
  locality?: string;

  @ApiPropertyOptional({ example: 'Shop No. 12, Main Market Road, Civil Lines' })
  @IsOptional()
  @IsString()
  fullAddress?: string;

  @ApiPropertyOptional({ example: 20.7002 })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional({ example: 77.0082 })
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  homeBusinessPrivacy?: boolean;

  // Step 4: Hours
  @ApiPropertyOptional({ enum: ['weekly', 'same_every_day'] })
  @IsOptional()
  scheduleMode?: 'weekly' | 'same_every_day';

  @ApiPropertyOptional({ type: [DayScheduleItemDto] })
  @IsOptional()
  @IsArray()
  operatingHours?: DayScheduleItemDto[];

  @ApiPropertyOptional({ example: ['26 Jan (Republic Day)'] })
  @IsOptional()
  @IsArray()
  holidays?: string[];

  // Step 5: Fulfilment
  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  storePickup?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  merchantDelivery?: boolean;

  @ApiPropertyOptional({ example: '5 km' })
  @IsOptional()
  @IsString()
  serviceRadius?: string;

  @ApiPropertyOptional({ example: 300 })
  @IsOptional()
  @IsNumber()
  minOrderValue?: number;

  @ApiPropertyOptional({ example: '30 minutes' })
  @IsOptional()
  @IsString()
  prepTime?: string;

  // Step 6: Bank Details
  @ApiPropertyOptional({ example: 'Rajesh Sharma' })
  @IsOptional()
  @IsString()
  bankAccountHolder?: string;

  @ApiPropertyOptional({ example: '**********9012' })
  @IsOptional()
  @IsString()
  bankAccountNumber?: string;

  @ApiPropertyOptional({ example: 'HDFC0001234' })
  @IsOptional()
  @IsString()
  bankIfscCode?: string;

  @ApiPropertyOptional({ example: 'HDFC Bank' })
  @IsOptional()
  @IsString()
  bankName?: string;

  @ApiPropertyOptional({ type: [UploadDocumentDto] })
  @IsOptional()
  @IsArray()
  documents?: UploadDocumentDto[];
}

export class SubmitRegistrationDto {
  @ApiProperty({ example: 'NN-MR-20261117-0387' })
  @IsNotEmpty()
  @IsString()
  applicationId!: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  termsAgreed!: boolean;
}

export class UpdateApplicationStatusDto {
  @ApiProperty({ enum: ['SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'ACTION_REQUIRED', 'REJECTED'] })
  @IsNotEmpty()
  status!: ApplicationStatusCode;

  @ApiPropertyOptional({ example: 'ADMIN_VERIFIER' })
  @IsOptional()
  @IsString()
  changedBy?: string;

  @ApiPropertyOptional({ example: 'Documents verified and bank settlement approved.' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ example: 'Missing FSSAI licence' })
  @IsOptional()
  @IsString()
  reason?: string;
}
