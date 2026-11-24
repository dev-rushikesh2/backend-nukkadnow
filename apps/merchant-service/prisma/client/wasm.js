
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.MerchantScalarFieldEnum = {
  id: 'id',
  organizationName: 'organizationName',
  legalBusinessName: 'legalBusinessName',
  contactName: 'contactName',
  contactPhone: 'contactPhone',
  email: 'email',
  businessType: 'businessType',
  category: 'category',
  description: 'description',
  verificationStatus: 'verificationStatus',
  isSuspended: 'isSuspended',
  suspendedReason: 'suspendedReason',
  suspendedAt: 'suspendedAt',
  cityCode: 'cityCode',
  districtCode: 'districtCode',
  stateCode: 'stateCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OutletScalarFieldEnum = {
  id: 'id',
  merchantId: 'merchantId',
  name: 'name',
  sellerMode: 'sellerMode',
  addressLine: 'addressLine',
  locality: 'locality',
  city: 'city',
  cityCode: 'cityCode',
  district: 'district',
  districtCode: 'districtCode',
  state: 'state',
  stateCode: 'stateCode',
  pincode: 'pincode',
  latitude: 'latitude',
  longitude: 'longitude',
  isAddressPublic: 'isAddressPublic',
  storePickup: 'storePickup',
  merchantDelivery: 'merchantDelivery',
  deliveryRadiusKm: 'deliveryRadiusKm',
  minOrderValue: 'minOrderValue',
  prepTimeMinutes: 'prepTimeMinutes',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OutletHoursScalarFieldEnum = {
  id: 'id',
  outletId: 'outletId',
  dayOfWeek: 'dayOfWeek',
  openTime: 'openTime',
  closeTime: 'closeTime',
  breakTime: 'breakTime',
  isClosed: 'isClosed'
};

exports.Prisma.ServiceAreaScalarFieldEnum = {
  id: 'id',
  outletId: 'outletId',
  radiusMeters: 'radiusMeters',
  geoJson: 'geoJson'
};

exports.Prisma.VerificationRecordScalarFieldEnum = {
  id: 'id',
  merchantId: 'merchantId',
  documentType: 'documentType',
  documentUrl: 'documentUrl',
  status: 'status',
  notes: 'notes',
  verifiedAt: 'verifiedAt',
  createdAt: 'createdAt'
};

exports.Prisma.PartnerRegistrationScalarFieldEnum = {
  id: 'id',
  applicationId: 'applicationId',
  merchantId: 'merchantId',
  currentStep: 'currentStep',
  status: 'status',
  businessType: 'businessType',
  businessName: 'businessName',
  ownerName: 'ownerName',
  mobileNumber: 'mobileNumber',
  email: 'email',
  businessCategory: 'businessCategory',
  businessDescription: 'businessDescription',
  pincode: 'pincode',
  state: 'state',
  stateCode: 'stateCode',
  district: 'district',
  districtCode: 'districtCode',
  city: 'city',
  cityCode: 'cityCode',
  locality: 'locality',
  fullAddress: 'fullAddress',
  latitude: 'latitude',
  longitude: 'longitude',
  homeBusinessPrivacy: 'homeBusinessPrivacy',
  scheduleMode: 'scheduleMode',
  operatingHours: 'operatingHours',
  holidays: 'holidays',
  temporaryClosure: 'temporaryClosure',
  storePickup: 'storePickup',
  merchantDelivery: 'merchantDelivery',
  serviceRadius: 'serviceRadius',
  serviceRadiusMeters: 'serviceRadiusMeters',
  minOrderValue: 'minOrderValue',
  prepTime: 'prepTime',
  bankAccountHolder: 'bankAccountHolder',
  bankAccountNumber: 'bankAccountNumber',
  bankIfscCode: 'bankIfscCode',
  bankName: 'bankName',
  categoryLicenceUrl: 'categoryLicenceUrl',
  categoryLicenceName: 'categoryLicenceName',
  termsAgreed: 'termsAgreed',
  submittedAt: 'submittedAt',
  reviewedAt: 'reviewedAt',
  reviewNotes: 'reviewNotes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RegistrationDocumentScalarFieldEnum = {
  id: 'id',
  registrationId: 'registrationId',
  documentType: 'documentType',
  fileName: 'fileName',
  fileUrl: 'fileUrl',
  fileSize: 'fileSize',
  verificationStatus: 'verificationStatus',
  rejectionReason: 'rejectionReason',
  uploadedAt: 'uploadedAt'
};

exports.Prisma.RegistrationStatusHistoryScalarFieldEnum = {
  id: 'id',
  registrationId: 'registrationId',
  fromStatus: 'fromStatus',
  toStatus: 'toStatus',
  changedBy: 'changedBy',
  reason: 'reason',
  notes: 'notes',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  Merchant: 'Merchant',
  Outlet: 'Outlet',
  OutletHours: 'OutletHours',
  ServiceArea: 'ServiceArea',
  VerificationRecord: 'VerificationRecord',
  PartnerRegistration: 'PartnerRegistration',
  RegistrationDocument: 'RegistrationDocument',
  RegistrationStatusHistory: 'RegistrationStatusHistory'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
