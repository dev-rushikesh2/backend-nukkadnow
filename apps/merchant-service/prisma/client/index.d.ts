
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Merchant
 * 
 */
export type Merchant = $Result.DefaultSelection<Prisma.$MerchantPayload>
/**
 * Model Outlet
 * 
 */
export type Outlet = $Result.DefaultSelection<Prisma.$OutletPayload>
/**
 * Model OutletHours
 * 
 */
export type OutletHours = $Result.DefaultSelection<Prisma.$OutletHoursPayload>
/**
 * Model ServiceArea
 * 
 */
export type ServiceArea = $Result.DefaultSelection<Prisma.$ServiceAreaPayload>
/**
 * Model VerificationRecord
 * 
 */
export type VerificationRecord = $Result.DefaultSelection<Prisma.$VerificationRecordPayload>
/**
 * Model PartnerRegistration
 * 
 */
export type PartnerRegistration = $Result.DefaultSelection<Prisma.$PartnerRegistrationPayload>
/**
 * Model RegistrationDocument
 * 
 */
export type RegistrationDocument = $Result.DefaultSelection<Prisma.$RegistrationDocumentPayload>
/**
 * Model RegistrationStatusHistory
 * 
 */
export type RegistrationStatusHistory = $Result.DefaultSelection<Prisma.$RegistrationStatusHistoryPayload>
/**
 * Model PlatformCity
 * 
 */
export type PlatformCity = $Result.DefaultSelection<Prisma.$PlatformCityPayload>
/**
 * Model ServiceableLocality
 * 
 */
export type ServiceableLocality = $Result.DefaultSelection<Prisma.$ServiceableLocalityPayload>
/**
 * Model ShopAuditLog
 * 
 */
export type ShopAuditLog = $Result.DefaultSelection<Prisma.$ShopAuditLogPayload>
/**
 * Model MarketingBanner
 * 
 */
export type MarketingBanner = $Result.DefaultSelection<Prisma.$MarketingBannerPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Merchants
 * const merchants = await prisma.merchant.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Merchants
   * const merchants = await prisma.merchant.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.merchant`: Exposes CRUD operations for the **Merchant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merchants
    * const merchants = await prisma.merchant.findMany()
    * ```
    */
  get merchant(): Prisma.MerchantDelegate<ExtArgs>;

  /**
   * `prisma.outlet`: Exposes CRUD operations for the **Outlet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outlets
    * const outlets = await prisma.outlet.findMany()
    * ```
    */
  get outlet(): Prisma.OutletDelegate<ExtArgs>;

  /**
   * `prisma.outletHours`: Exposes CRUD operations for the **OutletHours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutletHours
    * const outletHours = await prisma.outletHours.findMany()
    * ```
    */
  get outletHours(): Prisma.OutletHoursDelegate<ExtArgs>;

  /**
   * `prisma.serviceArea`: Exposes CRUD operations for the **ServiceArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceAreas
    * const serviceAreas = await prisma.serviceArea.findMany()
    * ```
    */
  get serviceArea(): Prisma.ServiceAreaDelegate<ExtArgs>;

  /**
   * `prisma.verificationRecord`: Exposes CRUD operations for the **VerificationRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationRecords
    * const verificationRecords = await prisma.verificationRecord.findMany()
    * ```
    */
  get verificationRecord(): Prisma.VerificationRecordDelegate<ExtArgs>;

  /**
   * `prisma.partnerRegistration`: Exposes CRUD operations for the **PartnerRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartnerRegistrations
    * const partnerRegistrations = await prisma.partnerRegistration.findMany()
    * ```
    */
  get partnerRegistration(): Prisma.PartnerRegistrationDelegate<ExtArgs>;

  /**
   * `prisma.registrationDocument`: Exposes CRUD operations for the **RegistrationDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistrationDocuments
    * const registrationDocuments = await prisma.registrationDocument.findMany()
    * ```
    */
  get registrationDocument(): Prisma.RegistrationDocumentDelegate<ExtArgs>;

  /**
   * `prisma.registrationStatusHistory`: Exposes CRUD operations for the **RegistrationStatusHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistrationStatusHistories
    * const registrationStatusHistories = await prisma.registrationStatusHistory.findMany()
    * ```
    */
  get registrationStatusHistory(): Prisma.RegistrationStatusHistoryDelegate<ExtArgs>;

  /**
   * `prisma.platformCity`: Exposes CRUD operations for the **PlatformCity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlatformCities
    * const platformCities = await prisma.platformCity.findMany()
    * ```
    */
  get platformCity(): Prisma.PlatformCityDelegate<ExtArgs>;

  /**
   * `prisma.serviceableLocality`: Exposes CRUD operations for the **ServiceableLocality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceableLocalities
    * const serviceableLocalities = await prisma.serviceableLocality.findMany()
    * ```
    */
  get serviceableLocality(): Prisma.ServiceableLocalityDelegate<ExtArgs>;

  /**
   * `prisma.shopAuditLog`: Exposes CRUD operations for the **ShopAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopAuditLogs
    * const shopAuditLogs = await prisma.shopAuditLog.findMany()
    * ```
    */
  get shopAuditLog(): Prisma.ShopAuditLogDelegate<ExtArgs>;

  /**
   * `prisma.marketingBanner`: Exposes CRUD operations for the **MarketingBanner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketingBanners
    * const marketingBanners = await prisma.marketingBanner.findMany()
    * ```
    */
  get marketingBanner(): Prisma.MarketingBannerDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Merchant: 'Merchant',
    Outlet: 'Outlet',
    OutletHours: 'OutletHours',
    ServiceArea: 'ServiceArea',
    VerificationRecord: 'VerificationRecord',
    PartnerRegistration: 'PartnerRegistration',
    RegistrationDocument: 'RegistrationDocument',
    RegistrationStatusHistory: 'RegistrationStatusHistory',
    PlatformCity: 'PlatformCity',
    ServiceableLocality: 'ServiceableLocality',
    ShopAuditLog: 'ShopAuditLog',
    MarketingBanner: 'MarketingBanner'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "merchant" | "outlet" | "outletHours" | "serviceArea" | "verificationRecord" | "partnerRegistration" | "registrationDocument" | "registrationStatusHistory" | "platformCity" | "serviceableLocality" | "shopAuditLog" | "marketingBanner"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Merchant: {
        payload: Prisma.$MerchantPayload<ExtArgs>
        fields: Prisma.MerchantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerchantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerchantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findFirst: {
            args: Prisma.MerchantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerchantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findMany: {
            args: Prisma.MerchantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          create: {
            args: Prisma.MerchantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          createMany: {
            args: Prisma.MerchantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerchantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          delete: {
            args: Prisma.MerchantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          update: {
            args: Prisma.MerchantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          deleteMany: {
            args: Prisma.MerchantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerchantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MerchantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          aggregate: {
            args: Prisma.MerchantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchant>
          }
          groupBy: {
            args: Prisma.MerchantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerchantCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantCountAggregateOutputType> | number
          }
        }
      }
      Outlet: {
        payload: Prisma.$OutletPayload<ExtArgs>
        fields: Prisma.OutletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          findFirst: {
            args: Prisma.OutletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          findMany: {
            args: Prisma.OutletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>[]
          }
          create: {
            args: Prisma.OutletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          createMany: {
            args: Prisma.OutletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>[]
          }
          delete: {
            args: Prisma.OutletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          update: {
            args: Prisma.OutletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          deleteMany: {
            args: Prisma.OutletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          aggregate: {
            args: Prisma.OutletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutlet>
          }
          groupBy: {
            args: Prisma.OutletGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutletGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutletCountArgs<ExtArgs>
            result: $Utils.Optional<OutletCountAggregateOutputType> | number
          }
        }
      }
      OutletHours: {
        payload: Prisma.$OutletHoursPayload<ExtArgs>
        fields: Prisma.OutletHoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutletHoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletHoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutletHoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletHoursPayload>
          }
          findFirst: {
            args: Prisma.OutletHoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletHoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutletHoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletHoursPayload>
          }
          findMany: {
            args: Prisma.OutletHoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletHoursPayload>[]
          }
          create: {
            args: Prisma.OutletHoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletHoursPayload>
          }
          createMany: {
            args: Prisma.OutletHoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutletHoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletHoursPayload>[]
          }
          delete: {
            args: Prisma.OutletHoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletHoursPayload>
          }
          update: {
            args: Prisma.OutletHoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletHoursPayload>
          }
          deleteMany: {
            args: Prisma.OutletHoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutletHoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutletHoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletHoursPayload>
          }
          aggregate: {
            args: Prisma.OutletHoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutletHours>
          }
          groupBy: {
            args: Prisma.OutletHoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutletHoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutletHoursCountArgs<ExtArgs>
            result: $Utils.Optional<OutletHoursCountAggregateOutputType> | number
          }
        }
      }
      ServiceArea: {
        payload: Prisma.$ServiceAreaPayload<ExtArgs>
        fields: Prisma.ServiceAreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceAreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceAreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          findFirst: {
            args: Prisma.ServiceAreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceAreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          findMany: {
            args: Prisma.ServiceAreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>[]
          }
          create: {
            args: Prisma.ServiceAreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          createMany: {
            args: Prisma.ServiceAreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceAreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>[]
          }
          delete: {
            args: Prisma.ServiceAreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          update: {
            args: Prisma.ServiceAreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          deleteMany: {
            args: Prisma.ServiceAreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceAreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceAreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          aggregate: {
            args: Prisma.ServiceAreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceArea>
          }
          groupBy: {
            args: Prisma.ServiceAreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceAreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceAreaCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceAreaCountAggregateOutputType> | number
          }
        }
      }
      VerificationRecord: {
        payload: Prisma.$VerificationRecordPayload<ExtArgs>
        fields: Prisma.VerificationRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRecordPayload>
          }
          findFirst: {
            args: Prisma.VerificationRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRecordPayload>
          }
          findMany: {
            args: Prisma.VerificationRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRecordPayload>[]
          }
          create: {
            args: Prisma.VerificationRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRecordPayload>
          }
          createMany: {
            args: Prisma.VerificationRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRecordPayload>[]
          }
          delete: {
            args: Prisma.VerificationRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRecordPayload>
          }
          update: {
            args: Prisma.VerificationRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRecordPayload>
          }
          deleteMany: {
            args: Prisma.VerificationRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRecordPayload>
          }
          aggregate: {
            args: Prisma.VerificationRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationRecord>
          }
          groupBy: {
            args: Prisma.VerificationRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationRecordCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationRecordCountAggregateOutputType> | number
          }
        }
      }
      PartnerRegistration: {
        payload: Prisma.$PartnerRegistrationPayload<ExtArgs>
        fields: Prisma.PartnerRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRegistrationPayload>
          }
          findFirst: {
            args: Prisma.PartnerRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRegistrationPayload>
          }
          findMany: {
            args: Prisma.PartnerRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRegistrationPayload>[]
          }
          create: {
            args: Prisma.PartnerRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRegistrationPayload>
          }
          createMany: {
            args: Prisma.PartnerRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRegistrationPayload>[]
          }
          delete: {
            args: Prisma.PartnerRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRegistrationPayload>
          }
          update: {
            args: Prisma.PartnerRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.PartnerRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartnerRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRegistrationPayload>
          }
          aggregate: {
            args: Prisma.PartnerRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartnerRegistration>
          }
          groupBy: {
            args: Prisma.PartnerRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerRegistrationCountAggregateOutputType> | number
          }
        }
      }
      RegistrationDocument: {
        payload: Prisma.$RegistrationDocumentPayload<ExtArgs>
        fields: Prisma.RegistrationDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>
          }
          findFirst: {
            args: Prisma.RegistrationDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>
          }
          findMany: {
            args: Prisma.RegistrationDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>[]
          }
          create: {
            args: Prisma.RegistrationDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>
          }
          createMany: {
            args: Prisma.RegistrationDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistrationDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>[]
          }
          delete: {
            args: Prisma.RegistrationDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>
          }
          update: {
            args: Prisma.RegistrationDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistrationDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>
          }
          aggregate: {
            args: Prisma.RegistrationDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistrationDocument>
          }
          groupBy: {
            args: Prisma.RegistrationDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationDocumentCountAggregateOutputType> | number
          }
        }
      }
      RegistrationStatusHistory: {
        payload: Prisma.$RegistrationStatusHistoryPayload<ExtArgs>
        fields: Prisma.RegistrationStatusHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationStatusHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStatusHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationStatusHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStatusHistoryPayload>
          }
          findFirst: {
            args: Prisma.RegistrationStatusHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStatusHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationStatusHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStatusHistoryPayload>
          }
          findMany: {
            args: Prisma.RegistrationStatusHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStatusHistoryPayload>[]
          }
          create: {
            args: Prisma.RegistrationStatusHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStatusHistoryPayload>
          }
          createMany: {
            args: Prisma.RegistrationStatusHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistrationStatusHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStatusHistoryPayload>[]
          }
          delete: {
            args: Prisma.RegistrationStatusHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStatusHistoryPayload>
          }
          update: {
            args: Prisma.RegistrationStatusHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStatusHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationStatusHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationStatusHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistrationStatusHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStatusHistoryPayload>
          }
          aggregate: {
            args: Prisma.RegistrationStatusHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistrationStatusHistory>
          }
          groupBy: {
            args: Prisma.RegistrationStatusHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationStatusHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationStatusHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationStatusHistoryCountAggregateOutputType> | number
          }
        }
      }
      PlatformCity: {
        payload: Prisma.$PlatformCityPayload<ExtArgs>
        fields: Prisma.PlatformCityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformCityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformCityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformCityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformCityPayload>
          }
          findFirst: {
            args: Prisma.PlatformCityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformCityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformCityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformCityPayload>
          }
          findMany: {
            args: Prisma.PlatformCityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformCityPayload>[]
          }
          create: {
            args: Prisma.PlatformCityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformCityPayload>
          }
          createMany: {
            args: Prisma.PlatformCityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformCityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformCityPayload>[]
          }
          delete: {
            args: Prisma.PlatformCityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformCityPayload>
          }
          update: {
            args: Prisma.PlatformCityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformCityPayload>
          }
          deleteMany: {
            args: Prisma.PlatformCityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformCityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlatformCityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformCityPayload>
          }
          aggregate: {
            args: Prisma.PlatformCityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatformCity>
          }
          groupBy: {
            args: Prisma.PlatformCityGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformCityGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformCityCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformCityCountAggregateOutputType> | number
          }
        }
      }
      ServiceableLocality: {
        payload: Prisma.$ServiceableLocalityPayload<ExtArgs>
        fields: Prisma.ServiceableLocalityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceableLocalityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceableLocalityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceableLocalityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceableLocalityPayload>
          }
          findFirst: {
            args: Prisma.ServiceableLocalityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceableLocalityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceableLocalityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceableLocalityPayload>
          }
          findMany: {
            args: Prisma.ServiceableLocalityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceableLocalityPayload>[]
          }
          create: {
            args: Prisma.ServiceableLocalityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceableLocalityPayload>
          }
          createMany: {
            args: Prisma.ServiceableLocalityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceableLocalityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceableLocalityPayload>[]
          }
          delete: {
            args: Prisma.ServiceableLocalityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceableLocalityPayload>
          }
          update: {
            args: Prisma.ServiceableLocalityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceableLocalityPayload>
          }
          deleteMany: {
            args: Prisma.ServiceableLocalityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceableLocalityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceableLocalityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceableLocalityPayload>
          }
          aggregate: {
            args: Prisma.ServiceableLocalityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceableLocality>
          }
          groupBy: {
            args: Prisma.ServiceableLocalityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceableLocalityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceableLocalityCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceableLocalityCountAggregateOutputType> | number
          }
        }
      }
      ShopAuditLog: {
        payload: Prisma.$ShopAuditLogPayload<ExtArgs>
        fields: Prisma.ShopAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopAuditLogPayload>
          }
          findFirst: {
            args: Prisma.ShopAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopAuditLogPayload>
          }
          findMany: {
            args: Prisma.ShopAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopAuditLogPayload>[]
          }
          create: {
            args: Prisma.ShopAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopAuditLogPayload>
          }
          createMany: {
            args: Prisma.ShopAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopAuditLogPayload>[]
          }
          delete: {
            args: Prisma.ShopAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopAuditLogPayload>
          }
          update: {
            args: Prisma.ShopAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.ShopAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopAuditLogPayload>
          }
          aggregate: {
            args: Prisma.ShopAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopAuditLog>
          }
          groupBy: {
            args: Prisma.ShopAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<ShopAuditLogCountAggregateOutputType> | number
          }
        }
      }
      MarketingBanner: {
        payload: Prisma.$MarketingBannerPayload<ExtArgs>
        fields: Prisma.MarketingBannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketingBannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingBannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketingBannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingBannerPayload>
          }
          findFirst: {
            args: Prisma.MarketingBannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingBannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketingBannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingBannerPayload>
          }
          findMany: {
            args: Prisma.MarketingBannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingBannerPayload>[]
          }
          create: {
            args: Prisma.MarketingBannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingBannerPayload>
          }
          createMany: {
            args: Prisma.MarketingBannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketingBannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingBannerPayload>[]
          }
          delete: {
            args: Prisma.MarketingBannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingBannerPayload>
          }
          update: {
            args: Prisma.MarketingBannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingBannerPayload>
          }
          deleteMany: {
            args: Prisma.MarketingBannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketingBannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MarketingBannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingBannerPayload>
          }
          aggregate: {
            args: Prisma.MarketingBannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketingBanner>
          }
          groupBy: {
            args: Prisma.MarketingBannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketingBannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketingBannerCountArgs<ExtArgs>
            result: $Utils.Optional<MarketingBannerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MerchantCountOutputType
   */

  export type MerchantCountOutputType = {
    outlets: number
    verifications: number
  }

  export type MerchantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlets?: boolean | MerchantCountOutputTypeCountOutletsArgs
    verifications?: boolean | MerchantCountOutputTypeCountVerificationsArgs
  }

  // Custom InputTypes
  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCountOutputType
     */
    select?: MerchantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountOutletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationRecordWhereInput
  }


  /**
   * Count Type OutletCountOutputType
   */

  export type OutletCountOutputType = {
    hours: number
    serviceAreas: number
  }

  export type OutletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hours?: boolean | OutletCountOutputTypeCountHoursArgs
    serviceAreas?: boolean | OutletCountOutputTypeCountServiceAreasArgs
  }

  // Custom InputTypes
  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletCountOutputType
     */
    select?: OutletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeCountHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletHoursWhereInput
  }

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeCountServiceAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceAreaWhereInput
  }


  /**
   * Count Type PartnerRegistrationCountOutputType
   */

  export type PartnerRegistrationCountOutputType = {
    documents: number
    statusHistory: number
  }

  export type PartnerRegistrationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | PartnerRegistrationCountOutputTypeCountDocumentsArgs
    statusHistory?: boolean | PartnerRegistrationCountOutputTypeCountStatusHistoryArgs
  }

  // Custom InputTypes
  /**
   * PartnerRegistrationCountOutputType without action
   */
  export type PartnerRegistrationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRegistrationCountOutputType
     */
    select?: PartnerRegistrationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartnerRegistrationCountOutputType without action
   */
  export type PartnerRegistrationCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationDocumentWhereInput
  }

  /**
   * PartnerRegistrationCountOutputType without action
   */
  export type PartnerRegistrationCountOutputTypeCountStatusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationStatusHistoryWhereInput
  }


  /**
   * Count Type PlatformCityCountOutputType
   */

  export type PlatformCityCountOutputType = {
    localities: number
  }

  export type PlatformCityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localities?: boolean | PlatformCityCountOutputTypeCountLocalitiesArgs
  }

  // Custom InputTypes
  /**
   * PlatformCityCountOutputType without action
   */
  export type PlatformCityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCityCountOutputType
     */
    select?: PlatformCityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatformCityCountOutputType without action
   */
  export type PlatformCityCountOutputTypeCountLocalitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceableLocalityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Merchant
   */

  export type AggregateMerchant = {
    _count: MerchantCountAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  export type MerchantMinAggregateOutputType = {
    id: string | null
    organizationName: string | null
    legalBusinessName: string | null
    contactName: string | null
    contactPhone: string | null
    email: string | null
    businessType: string | null
    category: string | null
    description: string | null
    verificationStatus: string | null
    isSuspended: boolean | null
    suspendedReason: string | null
    suspendedAt: Date | null
    cityCode: string | null
    districtCode: string | null
    stateCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MerchantMaxAggregateOutputType = {
    id: string | null
    organizationName: string | null
    legalBusinessName: string | null
    contactName: string | null
    contactPhone: string | null
    email: string | null
    businessType: string | null
    category: string | null
    description: string | null
    verificationStatus: string | null
    isSuspended: boolean | null
    suspendedReason: string | null
    suspendedAt: Date | null
    cityCode: string | null
    districtCode: string | null
    stateCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MerchantCountAggregateOutputType = {
    id: number
    organizationName: number
    legalBusinessName: number
    contactName: number
    contactPhone: number
    email: number
    businessType: number
    category: number
    description: number
    verificationStatus: number
    isSuspended: number
    suspendedReason: number
    suspendedAt: number
    cityCode: number
    districtCode: number
    stateCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MerchantMinAggregateInputType = {
    id?: true
    organizationName?: true
    legalBusinessName?: true
    contactName?: true
    contactPhone?: true
    email?: true
    businessType?: true
    category?: true
    description?: true
    verificationStatus?: true
    isSuspended?: true
    suspendedReason?: true
    suspendedAt?: true
    cityCode?: true
    districtCode?: true
    stateCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MerchantMaxAggregateInputType = {
    id?: true
    organizationName?: true
    legalBusinessName?: true
    contactName?: true
    contactPhone?: true
    email?: true
    businessType?: true
    category?: true
    description?: true
    verificationStatus?: true
    isSuspended?: true
    suspendedReason?: true
    suspendedAt?: true
    cityCode?: true
    districtCode?: true
    stateCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MerchantCountAggregateInputType = {
    id?: true
    organizationName?: true
    legalBusinessName?: true
    contactName?: true
    contactPhone?: true
    email?: true
    businessType?: true
    category?: true
    description?: true
    verificationStatus?: true
    isSuspended?: true
    suspendedReason?: true
    suspendedAt?: true
    cityCode?: true
    districtCode?: true
    stateCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MerchantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchant to aggregate.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Merchants
    **/
    _count?: true | MerchantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantMaxAggregateInputType
  }

  export type GetMerchantAggregateType<T extends MerchantAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchant[P]>
      : GetScalarType<T[P], AggregateMerchant[P]>
  }




  export type MerchantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantWhereInput
    orderBy?: MerchantOrderByWithAggregationInput | MerchantOrderByWithAggregationInput[]
    by: MerchantScalarFieldEnum[] | MerchantScalarFieldEnum
    having?: MerchantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantCountAggregateInputType | true
    _min?: MerchantMinAggregateInputType
    _max?: MerchantMaxAggregateInputType
  }

  export type MerchantGroupByOutputType = {
    id: string
    organizationName: string
    legalBusinessName: string | null
    contactName: string
    contactPhone: string
    email: string | null
    businessType: string | null
    category: string | null
    description: string | null
    verificationStatus: string
    isSuspended: boolean
    suspendedReason: string | null
    suspendedAt: Date | null
    cityCode: string
    districtCode: string
    stateCode: string
    createdAt: Date
    updatedAt: Date
    _count: MerchantCountAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  type GetMerchantGroupByPayload<T extends MerchantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantGroupByOutputType[P]>
        }
      >
    >


  export type MerchantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationName?: boolean
    legalBusinessName?: boolean
    contactName?: boolean
    contactPhone?: boolean
    email?: boolean
    businessType?: boolean
    category?: boolean
    description?: boolean
    verificationStatus?: boolean
    isSuspended?: boolean
    suspendedReason?: boolean
    suspendedAt?: boolean
    cityCode?: boolean
    districtCode?: boolean
    stateCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    outlets?: boolean | Merchant$outletsArgs<ExtArgs>
    verifications?: boolean | Merchant$verificationsArgs<ExtArgs>
    partnerApplication?: boolean | Merchant$partnerApplicationArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationName?: boolean
    legalBusinessName?: boolean
    contactName?: boolean
    contactPhone?: boolean
    email?: boolean
    businessType?: boolean
    category?: boolean
    description?: boolean
    verificationStatus?: boolean
    isSuspended?: boolean
    suspendedReason?: boolean
    suspendedAt?: boolean
    cityCode?: boolean
    districtCode?: boolean
    stateCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectScalar = {
    id?: boolean
    organizationName?: boolean
    legalBusinessName?: boolean
    contactName?: boolean
    contactPhone?: boolean
    email?: boolean
    businessType?: boolean
    category?: boolean
    description?: boolean
    verificationStatus?: boolean
    isSuspended?: boolean
    suspendedReason?: boolean
    suspendedAt?: boolean
    cityCode?: boolean
    districtCode?: boolean
    stateCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MerchantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlets?: boolean | Merchant$outletsArgs<ExtArgs>
    verifications?: boolean | Merchant$verificationsArgs<ExtArgs>
    partnerApplication?: boolean | Merchant$partnerApplicationArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MerchantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MerchantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Merchant"
    objects: {
      outlets: Prisma.$OutletPayload<ExtArgs>[]
      verifications: Prisma.$VerificationRecordPayload<ExtArgs>[]
      partnerApplication: Prisma.$PartnerRegistrationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationName: string
      legalBusinessName: string | null
      contactName: string
      contactPhone: string
      email: string | null
      businessType: string | null
      category: string | null
      description: string | null
      verificationStatus: string
      isSuspended: boolean
      suspendedReason: string | null
      suspendedAt: Date | null
      cityCode: string
      districtCode: string
      stateCode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["merchant"]>
    composites: {}
  }

  type MerchantGetPayload<S extends boolean | null | undefined | MerchantDefaultArgs> = $Result.GetResult<Prisma.$MerchantPayload, S>

  type MerchantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MerchantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MerchantCountAggregateInputType | true
    }

  export interface MerchantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Merchant'], meta: { name: 'Merchant' } }
    /**
     * Find zero or one Merchant that matches the filter.
     * @param {MerchantFindUniqueArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerchantFindUniqueArgs>(args: SelectSubset<T, MerchantFindUniqueArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Merchant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MerchantFindUniqueOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerchantFindUniqueOrThrowArgs>(args: SelectSubset<T, MerchantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Merchant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerchantFindFirstArgs>(args?: SelectSubset<T, MerchantFindFirstArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Merchant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerchantFindFirstOrThrowArgs>(args?: SelectSubset<T, MerchantFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merchants
     * const merchants = await prisma.merchant.findMany()
     * 
     * // Get first 10 Merchants
     * const merchants = await prisma.merchant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchantWithIdOnly = await prisma.merchant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerchantFindManyArgs>(args?: SelectSubset<T, MerchantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Merchant.
     * @param {MerchantCreateArgs} args - Arguments to create a Merchant.
     * @example
     * // Create one Merchant
     * const Merchant = await prisma.merchant.create({
     *   data: {
     *     // ... data to create a Merchant
     *   }
     * })
     * 
     */
    create<T extends MerchantCreateArgs>(args: SelectSubset<T, MerchantCreateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Merchants.
     * @param {MerchantCreateManyArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerchantCreateManyArgs>(args?: SelectSubset<T, MerchantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merchants and returns the data saved in the database.
     * @param {MerchantCreateManyAndReturnArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerchantCreateManyAndReturnArgs>(args?: SelectSubset<T, MerchantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Merchant.
     * @param {MerchantDeleteArgs} args - Arguments to delete one Merchant.
     * @example
     * // Delete one Merchant
     * const Merchant = await prisma.merchant.delete({
     *   where: {
     *     // ... filter to delete one Merchant
     *   }
     * })
     * 
     */
    delete<T extends MerchantDeleteArgs>(args: SelectSubset<T, MerchantDeleteArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Merchant.
     * @param {MerchantUpdateArgs} args - Arguments to update one Merchant.
     * @example
     * // Update one Merchant
     * const merchant = await prisma.merchant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerchantUpdateArgs>(args: SelectSubset<T, MerchantUpdateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Merchants.
     * @param {MerchantDeleteManyArgs} args - Arguments to filter Merchants to delete.
     * @example
     * // Delete a few Merchants
     * const { count } = await prisma.merchant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerchantDeleteManyArgs>(args?: SelectSubset<T, MerchantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerchantUpdateManyArgs>(args: SelectSubset<T, MerchantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Merchant.
     * @param {MerchantUpsertArgs} args - Arguments to update or create a Merchant.
     * @example
     * // Update or create a Merchant
     * const merchant = await prisma.merchant.upsert({
     *   create: {
     *     // ... data to create a Merchant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merchant we want to update
     *   }
     * })
     */
    upsert<T extends MerchantUpsertArgs>(args: SelectSubset<T, MerchantUpsertArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCountArgs} args - Arguments to filter Merchants to count.
     * @example
     * // Count the number of Merchants
     * const count = await prisma.merchant.count({
     *   where: {
     *     // ... the filter for the Merchants we want to count
     *   }
     * })
    **/
    count<T extends MerchantCountArgs>(
      args?: Subset<T, MerchantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MerchantAggregateArgs>(args: Subset<T, MerchantAggregateArgs>): Prisma.PrismaPromise<GetMerchantAggregateType<T>>

    /**
     * Group by Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MerchantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerchantGroupByArgs['orderBy'] }
        : { orderBy?: MerchantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MerchantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Merchant model
   */
  readonly fields: MerchantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Merchant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerchantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    outlets<T extends Merchant$outletsArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$outletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findMany"> | Null>
    verifications<T extends Merchant$verificationsArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$verificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationRecordPayload<ExtArgs>, T, "findMany"> | Null>
    partnerApplication<T extends Merchant$partnerApplicationArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$partnerApplicationArgs<ExtArgs>>): Prisma__PartnerRegistrationClient<$Result.GetResult<Prisma.$PartnerRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Merchant model
   */ 
  interface MerchantFieldRefs {
    readonly id: FieldRef<"Merchant", 'String'>
    readonly organizationName: FieldRef<"Merchant", 'String'>
    readonly legalBusinessName: FieldRef<"Merchant", 'String'>
    readonly contactName: FieldRef<"Merchant", 'String'>
    readonly contactPhone: FieldRef<"Merchant", 'String'>
    readonly email: FieldRef<"Merchant", 'String'>
    readonly businessType: FieldRef<"Merchant", 'String'>
    readonly category: FieldRef<"Merchant", 'String'>
    readonly description: FieldRef<"Merchant", 'String'>
    readonly verificationStatus: FieldRef<"Merchant", 'String'>
    readonly isSuspended: FieldRef<"Merchant", 'Boolean'>
    readonly suspendedReason: FieldRef<"Merchant", 'String'>
    readonly suspendedAt: FieldRef<"Merchant", 'DateTime'>
    readonly cityCode: FieldRef<"Merchant", 'String'>
    readonly districtCode: FieldRef<"Merchant", 'String'>
    readonly stateCode: FieldRef<"Merchant", 'String'>
    readonly createdAt: FieldRef<"Merchant", 'DateTime'>
    readonly updatedAt: FieldRef<"Merchant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Merchant findUnique
   */
  export type MerchantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findUniqueOrThrow
   */
  export type MerchantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findFirst
   */
  export type MerchantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findFirstOrThrow
   */
  export type MerchantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findMany
   */
  export type MerchantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchants to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant create
   */
  export type MerchantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to create a Merchant.
     */
    data: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
  }

  /**
   * Merchant createMany
   */
  export type MerchantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant createManyAndReturn
   */
  export type MerchantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant update
   */
  export type MerchantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to update a Merchant.
     */
    data: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
    /**
     * Choose, which Merchant to update.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant updateMany
   */
  export type MerchantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Merchants.
     */
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyInput>
    /**
     * Filter which Merchants to update
     */
    where?: MerchantWhereInput
  }

  /**
   * Merchant upsert
   */
  export type MerchantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The filter to search for the Merchant to update in case it exists.
     */
    where: MerchantWhereUniqueInput
    /**
     * In case the Merchant found by the `where` argument doesn't exist, create a new Merchant with this data.
     */
    create: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
    /**
     * In case the Merchant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
  }

  /**
   * Merchant delete
   */
  export type MerchantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter which Merchant to delete.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant deleteMany
   */
  export type MerchantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchants to delete
     */
    where?: MerchantWhereInput
  }

  /**
   * Merchant.outlets
   */
  export type Merchant$outletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    where?: OutletWhereInput
    orderBy?: OutletOrderByWithRelationInput | OutletOrderByWithRelationInput[]
    cursor?: OutletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[]
  }

  /**
   * Merchant.verifications
   */
  export type Merchant$verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRecord
     */
    select?: VerificationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationRecordInclude<ExtArgs> | null
    where?: VerificationRecordWhereInput
    orderBy?: VerificationRecordOrderByWithRelationInput | VerificationRecordOrderByWithRelationInput[]
    cursor?: VerificationRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationRecordScalarFieldEnum | VerificationRecordScalarFieldEnum[]
  }

  /**
   * Merchant.partnerApplication
   */
  export type Merchant$partnerApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRegistration
     */
    select?: PartnerRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRegistrationInclude<ExtArgs> | null
    where?: PartnerRegistrationWhereInput
  }

  /**
   * Merchant without action
   */
  export type MerchantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
  }


  /**
   * Model Outlet
   */

  export type AggregateOutlet = {
    _count: OutletCountAggregateOutputType | null
    _avg: OutletAvgAggregateOutputType | null
    _sum: OutletSumAggregateOutputType | null
    _min: OutletMinAggregateOutputType | null
    _max: OutletMaxAggregateOutputType | null
  }

  export type OutletAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    deliveryRadiusKm: number | null
    minOrderValue: number | null
    prepTimeMinutes: number | null
  }

  export type OutletSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    deliveryRadiusKm: number | null
    minOrderValue: number | null
    prepTimeMinutes: number | null
  }

  export type OutletMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    name: string | null
    sellerMode: string | null
    addressLine: string | null
    locality: string | null
    city: string | null
    cityCode: string | null
    district: string | null
    districtCode: string | null
    state: string | null
    stateCode: string | null
    pincode: string | null
    latitude: number | null
    longitude: number | null
    isAddressPublic: boolean | null
    storePickup: boolean | null
    merchantDelivery: boolean | null
    deliveryRadiusKm: number | null
    minOrderValue: number | null
    prepTimeMinutes: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutletMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    name: string | null
    sellerMode: string | null
    addressLine: string | null
    locality: string | null
    city: string | null
    cityCode: string | null
    district: string | null
    districtCode: string | null
    state: string | null
    stateCode: string | null
    pincode: string | null
    latitude: number | null
    longitude: number | null
    isAddressPublic: boolean | null
    storePickup: boolean | null
    merchantDelivery: boolean | null
    deliveryRadiusKm: number | null
    minOrderValue: number | null
    prepTimeMinutes: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutletCountAggregateOutputType = {
    id: number
    merchantId: number
    name: number
    sellerMode: number
    addressLine: number
    locality: number
    city: number
    cityCode: number
    district: number
    districtCode: number
    state: number
    stateCode: number
    pincode: number
    latitude: number
    longitude: number
    isAddressPublic: number
    storePickup: number
    merchantDelivery: number
    deliveryRadiusKm: number
    minOrderValue: number
    prepTimeMinutes: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OutletAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    deliveryRadiusKm?: true
    minOrderValue?: true
    prepTimeMinutes?: true
  }

  export type OutletSumAggregateInputType = {
    latitude?: true
    longitude?: true
    deliveryRadiusKm?: true
    minOrderValue?: true
    prepTimeMinutes?: true
  }

  export type OutletMinAggregateInputType = {
    id?: true
    merchantId?: true
    name?: true
    sellerMode?: true
    addressLine?: true
    locality?: true
    city?: true
    cityCode?: true
    district?: true
    districtCode?: true
    state?: true
    stateCode?: true
    pincode?: true
    latitude?: true
    longitude?: true
    isAddressPublic?: true
    storePickup?: true
    merchantDelivery?: true
    deliveryRadiusKm?: true
    minOrderValue?: true
    prepTimeMinutes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutletMaxAggregateInputType = {
    id?: true
    merchantId?: true
    name?: true
    sellerMode?: true
    addressLine?: true
    locality?: true
    city?: true
    cityCode?: true
    district?: true
    districtCode?: true
    state?: true
    stateCode?: true
    pincode?: true
    latitude?: true
    longitude?: true
    isAddressPublic?: true
    storePickup?: true
    merchantDelivery?: true
    deliveryRadiusKm?: true
    minOrderValue?: true
    prepTimeMinutes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutletCountAggregateInputType = {
    id?: true
    merchantId?: true
    name?: true
    sellerMode?: true
    addressLine?: true
    locality?: true
    city?: true
    cityCode?: true
    district?: true
    districtCode?: true
    state?: true
    stateCode?: true
    pincode?: true
    latitude?: true
    longitude?: true
    isAddressPublic?: true
    storePickup?: true
    merchantDelivery?: true
    deliveryRadiusKm?: true
    minOrderValue?: true
    prepTimeMinutes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OutletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outlet to aggregate.
     */
    where?: OutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlets to fetch.
     */
    orderBy?: OutletOrderByWithRelationInput | OutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outlets
    **/
    _count?: true | OutletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutletMaxAggregateInputType
  }

  export type GetOutletAggregateType<T extends OutletAggregateArgs> = {
        [P in keyof T & keyof AggregateOutlet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutlet[P]>
      : GetScalarType<T[P], AggregateOutlet[P]>
  }




  export type OutletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletWhereInput
    orderBy?: OutletOrderByWithAggregationInput | OutletOrderByWithAggregationInput[]
    by: OutletScalarFieldEnum[] | OutletScalarFieldEnum
    having?: OutletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutletCountAggregateInputType | true
    _avg?: OutletAvgAggregateInputType
    _sum?: OutletSumAggregateInputType
    _min?: OutletMinAggregateInputType
    _max?: OutletMaxAggregateInputType
  }

  export type OutletGroupByOutputType = {
    id: string
    merchantId: string
    name: string
    sellerMode: string
    addressLine: string
    locality: string
    city: string
    cityCode: string
    district: string | null
    districtCode: string | null
    state: string | null
    stateCode: string | null
    pincode: string | null
    latitude: number
    longitude: number
    isAddressPublic: boolean
    storePickup: boolean
    merchantDelivery: boolean
    deliveryRadiusKm: number
    minOrderValue: number
    prepTimeMinutes: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: OutletCountAggregateOutputType | null
    _avg: OutletAvgAggregateOutputType | null
    _sum: OutletSumAggregateOutputType | null
    _min: OutletMinAggregateOutputType | null
    _max: OutletMaxAggregateOutputType | null
  }

  type GetOutletGroupByPayload<T extends OutletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutletGroupByOutputType[P]>
            : GetScalarType<T[P], OutletGroupByOutputType[P]>
        }
      >
    >


  export type OutletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    name?: boolean
    sellerMode?: boolean
    addressLine?: boolean
    locality?: boolean
    city?: boolean
    cityCode?: boolean
    district?: boolean
    districtCode?: boolean
    state?: boolean
    stateCode?: boolean
    pincode?: boolean
    latitude?: boolean
    longitude?: boolean
    isAddressPublic?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    deliveryRadiusKm?: boolean
    minOrderValue?: boolean
    prepTimeMinutes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
    hours?: boolean | Outlet$hoursArgs<ExtArgs>
    serviceAreas?: boolean | Outlet$serviceAreasArgs<ExtArgs>
    _count?: boolean | OutletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outlet"]>

  export type OutletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    name?: boolean
    sellerMode?: boolean
    addressLine?: boolean
    locality?: boolean
    city?: boolean
    cityCode?: boolean
    district?: boolean
    districtCode?: boolean
    state?: boolean
    stateCode?: boolean
    pincode?: boolean
    latitude?: boolean
    longitude?: boolean
    isAddressPublic?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    deliveryRadiusKm?: boolean
    minOrderValue?: boolean
    prepTimeMinutes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outlet"]>

  export type OutletSelectScalar = {
    id?: boolean
    merchantId?: boolean
    name?: boolean
    sellerMode?: boolean
    addressLine?: boolean
    locality?: boolean
    city?: boolean
    cityCode?: boolean
    district?: boolean
    districtCode?: boolean
    state?: boolean
    stateCode?: boolean
    pincode?: boolean
    latitude?: boolean
    longitude?: boolean
    isAddressPublic?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    deliveryRadiusKm?: boolean
    minOrderValue?: boolean
    prepTimeMinutes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OutletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
    hours?: boolean | Outlet$hoursArgs<ExtArgs>
    serviceAreas?: boolean | Outlet$serviceAreasArgs<ExtArgs>
    _count?: boolean | OutletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OutletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $OutletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outlet"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
      hours: Prisma.$OutletHoursPayload<ExtArgs>[]
      serviceAreas: Prisma.$ServiceAreaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      name: string
      sellerMode: string
      addressLine: string
      locality: string
      city: string
      cityCode: string
      district: string | null
      districtCode: string | null
      state: string | null
      stateCode: string | null
      pincode: string | null
      latitude: number
      longitude: number
      isAddressPublic: boolean
      storePickup: boolean
      merchantDelivery: boolean
      deliveryRadiusKm: number
      minOrderValue: number
      prepTimeMinutes: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["outlet"]>
    composites: {}
  }

  type OutletGetPayload<S extends boolean | null | undefined | OutletDefaultArgs> = $Result.GetResult<Prisma.$OutletPayload, S>

  type OutletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OutletFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OutletCountAggregateInputType | true
    }

  export interface OutletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outlet'], meta: { name: 'Outlet' } }
    /**
     * Find zero or one Outlet that matches the filter.
     * @param {OutletFindUniqueArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutletFindUniqueArgs>(args: SelectSubset<T, OutletFindUniqueArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Outlet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OutletFindUniqueOrThrowArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutletFindUniqueOrThrowArgs>(args: SelectSubset<T, OutletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Outlet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletFindFirstArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutletFindFirstArgs>(args?: SelectSubset<T, OutletFindFirstArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Outlet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletFindFirstOrThrowArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutletFindFirstOrThrowArgs>(args?: SelectSubset<T, OutletFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Outlets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outlets
     * const outlets = await prisma.outlet.findMany()
     * 
     * // Get first 10 Outlets
     * const outlets = await prisma.outlet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outletWithIdOnly = await prisma.outlet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutletFindManyArgs>(args?: SelectSubset<T, OutletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Outlet.
     * @param {OutletCreateArgs} args - Arguments to create a Outlet.
     * @example
     * // Create one Outlet
     * const Outlet = await prisma.outlet.create({
     *   data: {
     *     // ... data to create a Outlet
     *   }
     * })
     * 
     */
    create<T extends OutletCreateArgs>(args: SelectSubset<T, OutletCreateArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Outlets.
     * @param {OutletCreateManyArgs} args - Arguments to create many Outlets.
     * @example
     * // Create many Outlets
     * const outlet = await prisma.outlet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutletCreateManyArgs>(args?: SelectSubset<T, OutletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outlets and returns the data saved in the database.
     * @param {OutletCreateManyAndReturnArgs} args - Arguments to create many Outlets.
     * @example
     * // Create many Outlets
     * const outlet = await prisma.outlet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outlets and only return the `id`
     * const outletWithIdOnly = await prisma.outlet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutletCreateManyAndReturnArgs>(args?: SelectSubset<T, OutletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Outlet.
     * @param {OutletDeleteArgs} args - Arguments to delete one Outlet.
     * @example
     * // Delete one Outlet
     * const Outlet = await prisma.outlet.delete({
     *   where: {
     *     // ... filter to delete one Outlet
     *   }
     * })
     * 
     */
    delete<T extends OutletDeleteArgs>(args: SelectSubset<T, OutletDeleteArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Outlet.
     * @param {OutletUpdateArgs} args - Arguments to update one Outlet.
     * @example
     * // Update one Outlet
     * const outlet = await prisma.outlet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutletUpdateArgs>(args: SelectSubset<T, OutletUpdateArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Outlets.
     * @param {OutletDeleteManyArgs} args - Arguments to filter Outlets to delete.
     * @example
     * // Delete a few Outlets
     * const { count } = await prisma.outlet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutletDeleteManyArgs>(args?: SelectSubset<T, OutletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outlets
     * const outlet = await prisma.outlet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutletUpdateManyArgs>(args: SelectSubset<T, OutletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Outlet.
     * @param {OutletUpsertArgs} args - Arguments to update or create a Outlet.
     * @example
     * // Update or create a Outlet
     * const outlet = await prisma.outlet.upsert({
     *   create: {
     *     // ... data to create a Outlet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outlet we want to update
     *   }
     * })
     */
    upsert<T extends OutletUpsertArgs>(args: SelectSubset<T, OutletUpsertArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletCountArgs} args - Arguments to filter Outlets to count.
     * @example
     * // Count the number of Outlets
     * const count = await prisma.outlet.count({
     *   where: {
     *     // ... the filter for the Outlets we want to count
     *   }
     * })
    **/
    count<T extends OutletCountArgs>(
      args?: Subset<T, OutletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutletAggregateArgs>(args: Subset<T, OutletAggregateArgs>): Prisma.PrismaPromise<GetOutletAggregateType<T>>

    /**
     * Group by Outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutletGroupByArgs['orderBy'] }
        : { orderBy?: OutletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outlet model
   */
  readonly fields: OutletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outlet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    hours<T extends Outlet$hoursArgs<ExtArgs> = {}>(args?: Subset<T, Outlet$hoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletHoursPayload<ExtArgs>, T, "findMany"> | Null>
    serviceAreas<T extends Outlet$serviceAreasArgs<ExtArgs> = {}>(args?: Subset<T, Outlet$serviceAreasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Outlet model
   */ 
  interface OutletFieldRefs {
    readonly id: FieldRef<"Outlet", 'String'>
    readonly merchantId: FieldRef<"Outlet", 'String'>
    readonly name: FieldRef<"Outlet", 'String'>
    readonly sellerMode: FieldRef<"Outlet", 'String'>
    readonly addressLine: FieldRef<"Outlet", 'String'>
    readonly locality: FieldRef<"Outlet", 'String'>
    readonly city: FieldRef<"Outlet", 'String'>
    readonly cityCode: FieldRef<"Outlet", 'String'>
    readonly district: FieldRef<"Outlet", 'String'>
    readonly districtCode: FieldRef<"Outlet", 'String'>
    readonly state: FieldRef<"Outlet", 'String'>
    readonly stateCode: FieldRef<"Outlet", 'String'>
    readonly pincode: FieldRef<"Outlet", 'String'>
    readonly latitude: FieldRef<"Outlet", 'Float'>
    readonly longitude: FieldRef<"Outlet", 'Float'>
    readonly isAddressPublic: FieldRef<"Outlet", 'Boolean'>
    readonly storePickup: FieldRef<"Outlet", 'Boolean'>
    readonly merchantDelivery: FieldRef<"Outlet", 'Boolean'>
    readonly deliveryRadiusKm: FieldRef<"Outlet", 'Float'>
    readonly minOrderValue: FieldRef<"Outlet", 'Int'>
    readonly prepTimeMinutes: FieldRef<"Outlet", 'Int'>
    readonly isActive: FieldRef<"Outlet", 'Boolean'>
    readonly createdAt: FieldRef<"Outlet", 'DateTime'>
    readonly updatedAt: FieldRef<"Outlet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Outlet findUnique
   */
  export type OutletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlet to fetch.
     */
    where: OutletWhereUniqueInput
  }

  /**
   * Outlet findUniqueOrThrow
   */
  export type OutletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlet to fetch.
     */
    where: OutletWhereUniqueInput
  }

  /**
   * Outlet findFirst
   */
  export type OutletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlet to fetch.
     */
    where?: OutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlets to fetch.
     */
    orderBy?: OutletOrderByWithRelationInput | OutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outlets.
     */
    cursor?: OutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outlets.
     */
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[]
  }

  /**
   * Outlet findFirstOrThrow
   */
  export type OutletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlet to fetch.
     */
    where?: OutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlets to fetch.
     */
    orderBy?: OutletOrderByWithRelationInput | OutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outlets.
     */
    cursor?: OutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outlets.
     */
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[]
  }

  /**
   * Outlet findMany
   */
  export type OutletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlets to fetch.
     */
    where?: OutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlets to fetch.
     */
    orderBy?: OutletOrderByWithRelationInput | OutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outlets.
     */
    cursor?: OutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlets.
     */
    skip?: number
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[]
  }

  /**
   * Outlet create
   */
  export type OutletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * The data needed to create a Outlet.
     */
    data: XOR<OutletCreateInput, OutletUncheckedCreateInput>
  }

  /**
   * Outlet createMany
   */
  export type OutletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outlets.
     */
    data: OutletCreateManyInput | OutletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outlet createManyAndReturn
   */
  export type OutletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Outlets.
     */
    data: OutletCreateManyInput | OutletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outlet update
   */
  export type OutletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * The data needed to update a Outlet.
     */
    data: XOR<OutletUpdateInput, OutletUncheckedUpdateInput>
    /**
     * Choose, which Outlet to update.
     */
    where: OutletWhereUniqueInput
  }

  /**
   * Outlet updateMany
   */
  export type OutletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outlets.
     */
    data: XOR<OutletUpdateManyMutationInput, OutletUncheckedUpdateManyInput>
    /**
     * Filter which Outlets to update
     */
    where?: OutletWhereInput
  }

  /**
   * Outlet upsert
   */
  export type OutletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * The filter to search for the Outlet to update in case it exists.
     */
    where: OutletWhereUniqueInput
    /**
     * In case the Outlet found by the `where` argument doesn't exist, create a new Outlet with this data.
     */
    create: XOR<OutletCreateInput, OutletUncheckedCreateInput>
    /**
     * In case the Outlet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutletUpdateInput, OutletUncheckedUpdateInput>
  }

  /**
   * Outlet delete
   */
  export type OutletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter which Outlet to delete.
     */
    where: OutletWhereUniqueInput
  }

  /**
   * Outlet deleteMany
   */
  export type OutletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outlets to delete
     */
    where?: OutletWhereInput
  }

  /**
   * Outlet.hours
   */
  export type Outlet$hoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletHours
     */
    select?: OutletHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletHoursInclude<ExtArgs> | null
    where?: OutletHoursWhereInput
    orderBy?: OutletHoursOrderByWithRelationInput | OutletHoursOrderByWithRelationInput[]
    cursor?: OutletHoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutletHoursScalarFieldEnum | OutletHoursScalarFieldEnum[]
  }

  /**
   * Outlet.serviceAreas
   */
  export type Outlet$serviceAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    where?: ServiceAreaWhereInput
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    cursor?: ServiceAreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceAreaScalarFieldEnum | ServiceAreaScalarFieldEnum[]
  }

  /**
   * Outlet without action
   */
  export type OutletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
  }


  /**
   * Model OutletHours
   */

  export type AggregateOutletHours = {
    _count: OutletHoursCountAggregateOutputType | null
    _avg: OutletHoursAvgAggregateOutputType | null
    _sum: OutletHoursSumAggregateOutputType | null
    _min: OutletHoursMinAggregateOutputType | null
    _max: OutletHoursMaxAggregateOutputType | null
  }

  export type OutletHoursAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type OutletHoursSumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type OutletHoursMinAggregateOutputType = {
    id: string | null
    outletId: string | null
    dayOfWeek: number | null
    openTime: string | null
    closeTime: string | null
    breakTime: string | null
    isClosed: boolean | null
  }

  export type OutletHoursMaxAggregateOutputType = {
    id: string | null
    outletId: string | null
    dayOfWeek: number | null
    openTime: string | null
    closeTime: string | null
    breakTime: string | null
    isClosed: boolean | null
  }

  export type OutletHoursCountAggregateOutputType = {
    id: number
    outletId: number
    dayOfWeek: number
    openTime: number
    closeTime: number
    breakTime: number
    isClosed: number
    _all: number
  }


  export type OutletHoursAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type OutletHoursSumAggregateInputType = {
    dayOfWeek?: true
  }

  export type OutletHoursMinAggregateInputType = {
    id?: true
    outletId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    breakTime?: true
    isClosed?: true
  }

  export type OutletHoursMaxAggregateInputType = {
    id?: true
    outletId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    breakTime?: true
    isClosed?: true
  }

  export type OutletHoursCountAggregateInputType = {
    id?: true
    outletId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    breakTime?: true
    isClosed?: true
    _all?: true
  }

  export type OutletHoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutletHours to aggregate.
     */
    where?: OutletHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletHours to fetch.
     */
    orderBy?: OutletHoursOrderByWithRelationInput | OutletHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutletHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutletHours
    **/
    _count?: true | OutletHoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutletHoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutletHoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutletHoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutletHoursMaxAggregateInputType
  }

  export type GetOutletHoursAggregateType<T extends OutletHoursAggregateArgs> = {
        [P in keyof T & keyof AggregateOutletHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutletHours[P]>
      : GetScalarType<T[P], AggregateOutletHours[P]>
  }




  export type OutletHoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletHoursWhereInput
    orderBy?: OutletHoursOrderByWithAggregationInput | OutletHoursOrderByWithAggregationInput[]
    by: OutletHoursScalarFieldEnum[] | OutletHoursScalarFieldEnum
    having?: OutletHoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutletHoursCountAggregateInputType | true
    _avg?: OutletHoursAvgAggregateInputType
    _sum?: OutletHoursSumAggregateInputType
    _min?: OutletHoursMinAggregateInputType
    _max?: OutletHoursMaxAggregateInputType
  }

  export type OutletHoursGroupByOutputType = {
    id: string
    outletId: string
    dayOfWeek: number
    openTime: string
    closeTime: string
    breakTime: string | null
    isClosed: boolean
    _count: OutletHoursCountAggregateOutputType | null
    _avg: OutletHoursAvgAggregateOutputType | null
    _sum: OutletHoursSumAggregateOutputType | null
    _min: OutletHoursMinAggregateOutputType | null
    _max: OutletHoursMaxAggregateOutputType | null
  }

  type GetOutletHoursGroupByPayload<T extends OutletHoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutletHoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutletHoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutletHoursGroupByOutputType[P]>
            : GetScalarType<T[P], OutletHoursGroupByOutputType[P]>
        }
      >
    >


  export type OutletHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    breakTime?: boolean
    isClosed?: boolean
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outletHours"]>

  export type OutletHoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    breakTime?: boolean
    isClosed?: boolean
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outletHours"]>

  export type OutletHoursSelectScalar = {
    id?: boolean
    outletId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    breakTime?: boolean
    isClosed?: boolean
  }

  export type OutletHoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }
  export type OutletHoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }

  export type $OutletHoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutletHours"
    objects: {
      outlet: Prisma.$OutletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      outletId: string
      dayOfWeek: number
      openTime: string
      closeTime: string
      breakTime: string | null
      isClosed: boolean
    }, ExtArgs["result"]["outletHours"]>
    composites: {}
  }

  type OutletHoursGetPayload<S extends boolean | null | undefined | OutletHoursDefaultArgs> = $Result.GetResult<Prisma.$OutletHoursPayload, S>

  type OutletHoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OutletHoursFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OutletHoursCountAggregateInputType | true
    }

  export interface OutletHoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutletHours'], meta: { name: 'OutletHours' } }
    /**
     * Find zero or one OutletHours that matches the filter.
     * @param {OutletHoursFindUniqueArgs} args - Arguments to find a OutletHours
     * @example
     * // Get one OutletHours
     * const outletHours = await prisma.outletHours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutletHoursFindUniqueArgs>(args: SelectSubset<T, OutletHoursFindUniqueArgs<ExtArgs>>): Prisma__OutletHoursClient<$Result.GetResult<Prisma.$OutletHoursPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OutletHours that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OutletHoursFindUniqueOrThrowArgs} args - Arguments to find a OutletHours
     * @example
     * // Get one OutletHours
     * const outletHours = await prisma.outletHours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutletHoursFindUniqueOrThrowArgs>(args: SelectSubset<T, OutletHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutletHoursClient<$Result.GetResult<Prisma.$OutletHoursPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OutletHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletHoursFindFirstArgs} args - Arguments to find a OutletHours
     * @example
     * // Get one OutletHours
     * const outletHours = await prisma.outletHours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutletHoursFindFirstArgs>(args?: SelectSubset<T, OutletHoursFindFirstArgs<ExtArgs>>): Prisma__OutletHoursClient<$Result.GetResult<Prisma.$OutletHoursPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OutletHours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletHoursFindFirstOrThrowArgs} args - Arguments to find a OutletHours
     * @example
     * // Get one OutletHours
     * const outletHours = await prisma.outletHours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutletHoursFindFirstOrThrowArgs>(args?: SelectSubset<T, OutletHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutletHoursClient<$Result.GetResult<Prisma.$OutletHoursPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OutletHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletHoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutletHours
     * const outletHours = await prisma.outletHours.findMany()
     * 
     * // Get first 10 OutletHours
     * const outletHours = await prisma.outletHours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outletHoursWithIdOnly = await prisma.outletHours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutletHoursFindManyArgs>(args?: SelectSubset<T, OutletHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletHoursPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OutletHours.
     * @param {OutletHoursCreateArgs} args - Arguments to create a OutletHours.
     * @example
     * // Create one OutletHours
     * const OutletHours = await prisma.outletHours.create({
     *   data: {
     *     // ... data to create a OutletHours
     *   }
     * })
     * 
     */
    create<T extends OutletHoursCreateArgs>(args: SelectSubset<T, OutletHoursCreateArgs<ExtArgs>>): Prisma__OutletHoursClient<$Result.GetResult<Prisma.$OutletHoursPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OutletHours.
     * @param {OutletHoursCreateManyArgs} args - Arguments to create many OutletHours.
     * @example
     * // Create many OutletHours
     * const outletHours = await prisma.outletHours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutletHoursCreateManyArgs>(args?: SelectSubset<T, OutletHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutletHours and returns the data saved in the database.
     * @param {OutletHoursCreateManyAndReturnArgs} args - Arguments to create many OutletHours.
     * @example
     * // Create many OutletHours
     * const outletHours = await prisma.outletHours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutletHours and only return the `id`
     * const outletHoursWithIdOnly = await prisma.outletHours.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutletHoursCreateManyAndReturnArgs>(args?: SelectSubset<T, OutletHoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletHoursPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OutletHours.
     * @param {OutletHoursDeleteArgs} args - Arguments to delete one OutletHours.
     * @example
     * // Delete one OutletHours
     * const OutletHours = await prisma.outletHours.delete({
     *   where: {
     *     // ... filter to delete one OutletHours
     *   }
     * })
     * 
     */
    delete<T extends OutletHoursDeleteArgs>(args: SelectSubset<T, OutletHoursDeleteArgs<ExtArgs>>): Prisma__OutletHoursClient<$Result.GetResult<Prisma.$OutletHoursPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OutletHours.
     * @param {OutletHoursUpdateArgs} args - Arguments to update one OutletHours.
     * @example
     * // Update one OutletHours
     * const outletHours = await prisma.outletHours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutletHoursUpdateArgs>(args: SelectSubset<T, OutletHoursUpdateArgs<ExtArgs>>): Prisma__OutletHoursClient<$Result.GetResult<Prisma.$OutletHoursPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OutletHours.
     * @param {OutletHoursDeleteManyArgs} args - Arguments to filter OutletHours to delete.
     * @example
     * // Delete a few OutletHours
     * const { count } = await prisma.outletHours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutletHoursDeleteManyArgs>(args?: SelectSubset<T, OutletHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutletHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletHoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutletHours
     * const outletHours = await prisma.outletHours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutletHoursUpdateManyArgs>(args: SelectSubset<T, OutletHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OutletHours.
     * @param {OutletHoursUpsertArgs} args - Arguments to update or create a OutletHours.
     * @example
     * // Update or create a OutletHours
     * const outletHours = await prisma.outletHours.upsert({
     *   create: {
     *     // ... data to create a OutletHours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutletHours we want to update
     *   }
     * })
     */
    upsert<T extends OutletHoursUpsertArgs>(args: SelectSubset<T, OutletHoursUpsertArgs<ExtArgs>>): Prisma__OutletHoursClient<$Result.GetResult<Prisma.$OutletHoursPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OutletHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletHoursCountArgs} args - Arguments to filter OutletHours to count.
     * @example
     * // Count the number of OutletHours
     * const count = await prisma.outletHours.count({
     *   where: {
     *     // ... the filter for the OutletHours we want to count
     *   }
     * })
    **/
    count<T extends OutletHoursCountArgs>(
      args?: Subset<T, OutletHoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutletHoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutletHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletHoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutletHoursAggregateArgs>(args: Subset<T, OutletHoursAggregateArgs>): Prisma.PrismaPromise<GetOutletHoursAggregateType<T>>

    /**
     * Group by OutletHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletHoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutletHoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutletHoursGroupByArgs['orderBy'] }
        : { orderBy?: OutletHoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutletHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutletHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutletHours model
   */
  readonly fields: OutletHoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutletHours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutletHoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    outlet<T extends OutletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OutletDefaultArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutletHours model
   */ 
  interface OutletHoursFieldRefs {
    readonly id: FieldRef<"OutletHours", 'String'>
    readonly outletId: FieldRef<"OutletHours", 'String'>
    readonly dayOfWeek: FieldRef<"OutletHours", 'Int'>
    readonly openTime: FieldRef<"OutletHours", 'String'>
    readonly closeTime: FieldRef<"OutletHours", 'String'>
    readonly breakTime: FieldRef<"OutletHours", 'String'>
    readonly isClosed: FieldRef<"OutletHours", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * OutletHours findUnique
   */
  export type OutletHoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletHours
     */
    select?: OutletHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletHoursInclude<ExtArgs> | null
    /**
     * Filter, which OutletHours to fetch.
     */
    where: OutletHoursWhereUniqueInput
  }

  /**
   * OutletHours findUniqueOrThrow
   */
  export type OutletHoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletHours
     */
    select?: OutletHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletHoursInclude<ExtArgs> | null
    /**
     * Filter, which OutletHours to fetch.
     */
    where: OutletHoursWhereUniqueInput
  }

  /**
   * OutletHours findFirst
   */
  export type OutletHoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletHours
     */
    select?: OutletHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletHoursInclude<ExtArgs> | null
    /**
     * Filter, which OutletHours to fetch.
     */
    where?: OutletHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletHours to fetch.
     */
    orderBy?: OutletHoursOrderByWithRelationInput | OutletHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutletHours.
     */
    cursor?: OutletHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutletHours.
     */
    distinct?: OutletHoursScalarFieldEnum | OutletHoursScalarFieldEnum[]
  }

  /**
   * OutletHours findFirstOrThrow
   */
  export type OutletHoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletHours
     */
    select?: OutletHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletHoursInclude<ExtArgs> | null
    /**
     * Filter, which OutletHours to fetch.
     */
    where?: OutletHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletHours to fetch.
     */
    orderBy?: OutletHoursOrderByWithRelationInput | OutletHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutletHours.
     */
    cursor?: OutletHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutletHours.
     */
    distinct?: OutletHoursScalarFieldEnum | OutletHoursScalarFieldEnum[]
  }

  /**
   * OutletHours findMany
   */
  export type OutletHoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletHours
     */
    select?: OutletHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletHoursInclude<ExtArgs> | null
    /**
     * Filter, which OutletHours to fetch.
     */
    where?: OutletHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletHours to fetch.
     */
    orderBy?: OutletHoursOrderByWithRelationInput | OutletHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutletHours.
     */
    cursor?: OutletHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletHours.
     */
    skip?: number
    distinct?: OutletHoursScalarFieldEnum | OutletHoursScalarFieldEnum[]
  }

  /**
   * OutletHours create
   */
  export type OutletHoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletHours
     */
    select?: OutletHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletHoursInclude<ExtArgs> | null
    /**
     * The data needed to create a OutletHours.
     */
    data: XOR<OutletHoursCreateInput, OutletHoursUncheckedCreateInput>
  }

  /**
   * OutletHours createMany
   */
  export type OutletHoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutletHours.
     */
    data: OutletHoursCreateManyInput | OutletHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutletHours createManyAndReturn
   */
  export type OutletHoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletHours
     */
    select?: OutletHoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OutletHours.
     */
    data: OutletHoursCreateManyInput | OutletHoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletHoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutletHours update
   */
  export type OutletHoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletHours
     */
    select?: OutletHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletHoursInclude<ExtArgs> | null
    /**
     * The data needed to update a OutletHours.
     */
    data: XOR<OutletHoursUpdateInput, OutletHoursUncheckedUpdateInput>
    /**
     * Choose, which OutletHours to update.
     */
    where: OutletHoursWhereUniqueInput
  }

  /**
   * OutletHours updateMany
   */
  export type OutletHoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutletHours.
     */
    data: XOR<OutletHoursUpdateManyMutationInput, OutletHoursUncheckedUpdateManyInput>
    /**
     * Filter which OutletHours to update
     */
    where?: OutletHoursWhereInput
  }

  /**
   * OutletHours upsert
   */
  export type OutletHoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletHours
     */
    select?: OutletHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletHoursInclude<ExtArgs> | null
    /**
     * The filter to search for the OutletHours to update in case it exists.
     */
    where: OutletHoursWhereUniqueInput
    /**
     * In case the OutletHours found by the `where` argument doesn't exist, create a new OutletHours with this data.
     */
    create: XOR<OutletHoursCreateInput, OutletHoursUncheckedCreateInput>
    /**
     * In case the OutletHours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutletHoursUpdateInput, OutletHoursUncheckedUpdateInput>
  }

  /**
   * OutletHours delete
   */
  export type OutletHoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletHours
     */
    select?: OutletHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletHoursInclude<ExtArgs> | null
    /**
     * Filter which OutletHours to delete.
     */
    where: OutletHoursWhereUniqueInput
  }

  /**
   * OutletHours deleteMany
   */
  export type OutletHoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutletHours to delete
     */
    where?: OutletHoursWhereInput
  }

  /**
   * OutletHours without action
   */
  export type OutletHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletHours
     */
    select?: OutletHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletHoursInclude<ExtArgs> | null
  }


  /**
   * Model ServiceArea
   */

  export type AggregateServiceArea = {
    _count: ServiceAreaCountAggregateOutputType | null
    _avg: ServiceAreaAvgAggregateOutputType | null
    _sum: ServiceAreaSumAggregateOutputType | null
    _min: ServiceAreaMinAggregateOutputType | null
    _max: ServiceAreaMaxAggregateOutputType | null
  }

  export type ServiceAreaAvgAggregateOutputType = {
    radiusMeters: number | null
  }

  export type ServiceAreaSumAggregateOutputType = {
    radiusMeters: number | null
  }

  export type ServiceAreaMinAggregateOutputType = {
    id: string | null
    outletId: string | null
    radiusMeters: number | null
  }

  export type ServiceAreaMaxAggregateOutputType = {
    id: string | null
    outletId: string | null
    radiusMeters: number | null
  }

  export type ServiceAreaCountAggregateOutputType = {
    id: number
    outletId: number
    radiusMeters: number
    geoJson: number
    _all: number
  }


  export type ServiceAreaAvgAggregateInputType = {
    radiusMeters?: true
  }

  export type ServiceAreaSumAggregateInputType = {
    radiusMeters?: true
  }

  export type ServiceAreaMinAggregateInputType = {
    id?: true
    outletId?: true
    radiusMeters?: true
  }

  export type ServiceAreaMaxAggregateInputType = {
    id?: true
    outletId?: true
    radiusMeters?: true
  }

  export type ServiceAreaCountAggregateInputType = {
    id?: true
    outletId?: true
    radiusMeters?: true
    geoJson?: true
    _all?: true
  }

  export type ServiceAreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceArea to aggregate.
     */
    where?: ServiceAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAreas to fetch.
     */
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceAreas
    **/
    _count?: true | ServiceAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceAreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceAreaMaxAggregateInputType
  }

  export type GetServiceAreaAggregateType<T extends ServiceAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceArea[P]>
      : GetScalarType<T[P], AggregateServiceArea[P]>
  }




  export type ServiceAreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceAreaWhereInput
    orderBy?: ServiceAreaOrderByWithAggregationInput | ServiceAreaOrderByWithAggregationInput[]
    by: ServiceAreaScalarFieldEnum[] | ServiceAreaScalarFieldEnum
    having?: ServiceAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceAreaCountAggregateInputType | true
    _avg?: ServiceAreaAvgAggregateInputType
    _sum?: ServiceAreaSumAggregateInputType
    _min?: ServiceAreaMinAggregateInputType
    _max?: ServiceAreaMaxAggregateInputType
  }

  export type ServiceAreaGroupByOutputType = {
    id: string
    outletId: string
    radiusMeters: number
    geoJson: JsonValue | null
    _count: ServiceAreaCountAggregateOutputType | null
    _avg: ServiceAreaAvgAggregateOutputType | null
    _sum: ServiceAreaSumAggregateOutputType | null
    _min: ServiceAreaMinAggregateOutputType | null
    _max: ServiceAreaMaxAggregateOutputType | null
  }

  type GetServiceAreaGroupByPayload<T extends ServiceAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceAreaGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceAreaGroupByOutputType[P]>
        }
      >
    >


  export type ServiceAreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    radiusMeters?: boolean
    geoJson?: boolean
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceArea"]>

  export type ServiceAreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    radiusMeters?: boolean
    geoJson?: boolean
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceArea"]>

  export type ServiceAreaSelectScalar = {
    id?: boolean
    outletId?: boolean
    radiusMeters?: boolean
    geoJson?: boolean
  }

  export type ServiceAreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }
  export type ServiceAreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }

  export type $ServiceAreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceArea"
    objects: {
      outlet: Prisma.$OutletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      outletId: string
      radiusMeters: number
      geoJson: Prisma.JsonValue | null
    }, ExtArgs["result"]["serviceArea"]>
    composites: {}
  }

  type ServiceAreaGetPayload<S extends boolean | null | undefined | ServiceAreaDefaultArgs> = $Result.GetResult<Prisma.$ServiceAreaPayload, S>

  type ServiceAreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceAreaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceAreaCountAggregateInputType | true
    }

  export interface ServiceAreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceArea'], meta: { name: 'ServiceArea' } }
    /**
     * Find zero or one ServiceArea that matches the filter.
     * @param {ServiceAreaFindUniqueArgs} args - Arguments to find a ServiceArea
     * @example
     * // Get one ServiceArea
     * const serviceArea = await prisma.serviceArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceAreaFindUniqueArgs>(args: SelectSubset<T, ServiceAreaFindUniqueArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ServiceArea that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceAreaFindUniqueOrThrowArgs} args - Arguments to find a ServiceArea
     * @example
     * // Get one ServiceArea
     * const serviceArea = await prisma.serviceArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceAreaFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ServiceArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaFindFirstArgs} args - Arguments to find a ServiceArea
     * @example
     * // Get one ServiceArea
     * const serviceArea = await prisma.serviceArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceAreaFindFirstArgs>(args?: SelectSubset<T, ServiceAreaFindFirstArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ServiceArea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaFindFirstOrThrowArgs} args - Arguments to find a ServiceArea
     * @example
     * // Get one ServiceArea
     * const serviceArea = await prisma.serviceArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceAreaFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ServiceAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceAreas
     * const serviceAreas = await prisma.serviceArea.findMany()
     * 
     * // Get first 10 ServiceAreas
     * const serviceAreas = await prisma.serviceArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceAreaWithIdOnly = await prisma.serviceArea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceAreaFindManyArgs>(args?: SelectSubset<T, ServiceAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ServiceArea.
     * @param {ServiceAreaCreateArgs} args - Arguments to create a ServiceArea.
     * @example
     * // Create one ServiceArea
     * const ServiceArea = await prisma.serviceArea.create({
     *   data: {
     *     // ... data to create a ServiceArea
     *   }
     * })
     * 
     */
    create<T extends ServiceAreaCreateArgs>(args: SelectSubset<T, ServiceAreaCreateArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ServiceAreas.
     * @param {ServiceAreaCreateManyArgs} args - Arguments to create many ServiceAreas.
     * @example
     * // Create many ServiceAreas
     * const serviceArea = await prisma.serviceArea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceAreaCreateManyArgs>(args?: SelectSubset<T, ServiceAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceAreas and returns the data saved in the database.
     * @param {ServiceAreaCreateManyAndReturnArgs} args - Arguments to create many ServiceAreas.
     * @example
     * // Create many ServiceAreas
     * const serviceArea = await prisma.serviceArea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceAreas and only return the `id`
     * const serviceAreaWithIdOnly = await prisma.serviceArea.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceAreaCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceAreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ServiceArea.
     * @param {ServiceAreaDeleteArgs} args - Arguments to delete one ServiceArea.
     * @example
     * // Delete one ServiceArea
     * const ServiceArea = await prisma.serviceArea.delete({
     *   where: {
     *     // ... filter to delete one ServiceArea
     *   }
     * })
     * 
     */
    delete<T extends ServiceAreaDeleteArgs>(args: SelectSubset<T, ServiceAreaDeleteArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ServiceArea.
     * @param {ServiceAreaUpdateArgs} args - Arguments to update one ServiceArea.
     * @example
     * // Update one ServiceArea
     * const serviceArea = await prisma.serviceArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceAreaUpdateArgs>(args: SelectSubset<T, ServiceAreaUpdateArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ServiceAreas.
     * @param {ServiceAreaDeleteManyArgs} args - Arguments to filter ServiceAreas to delete.
     * @example
     * // Delete a few ServiceAreas
     * const { count } = await prisma.serviceArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceAreaDeleteManyArgs>(args?: SelectSubset<T, ServiceAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceAreas
     * const serviceArea = await prisma.serviceArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceAreaUpdateManyArgs>(args: SelectSubset<T, ServiceAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceArea.
     * @param {ServiceAreaUpsertArgs} args - Arguments to update or create a ServiceArea.
     * @example
     * // Update or create a ServiceArea
     * const serviceArea = await prisma.serviceArea.upsert({
     *   create: {
     *     // ... data to create a ServiceArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceArea we want to update
     *   }
     * })
     */
    upsert<T extends ServiceAreaUpsertArgs>(args: SelectSubset<T, ServiceAreaUpsertArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ServiceAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaCountArgs} args - Arguments to filter ServiceAreas to count.
     * @example
     * // Count the number of ServiceAreas
     * const count = await prisma.serviceArea.count({
     *   where: {
     *     // ... the filter for the ServiceAreas we want to count
     *   }
     * })
    **/
    count<T extends ServiceAreaCountArgs>(
      args?: Subset<T, ServiceAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAreaAggregateArgs>(args: Subset<T, ServiceAreaAggregateArgs>): Prisma.PrismaPromise<GetServiceAreaAggregateType<T>>

    /**
     * Group by ServiceArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceAreaGroupByArgs['orderBy'] }
        : { orderBy?: ServiceAreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceArea model
   */
  readonly fields: ServiceAreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceAreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    outlet<T extends OutletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OutletDefaultArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceArea model
   */ 
  interface ServiceAreaFieldRefs {
    readonly id: FieldRef<"ServiceArea", 'String'>
    readonly outletId: FieldRef<"ServiceArea", 'String'>
    readonly radiusMeters: FieldRef<"ServiceArea", 'Int'>
    readonly geoJson: FieldRef<"ServiceArea", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ServiceArea findUnique
   */
  export type ServiceAreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceArea to fetch.
     */
    where: ServiceAreaWhereUniqueInput
  }

  /**
   * ServiceArea findUniqueOrThrow
   */
  export type ServiceAreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceArea to fetch.
     */
    where: ServiceAreaWhereUniqueInput
  }

  /**
   * ServiceArea findFirst
   */
  export type ServiceAreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceArea to fetch.
     */
    where?: ServiceAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAreas to fetch.
     */
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceAreas.
     */
    cursor?: ServiceAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceAreas.
     */
    distinct?: ServiceAreaScalarFieldEnum | ServiceAreaScalarFieldEnum[]
  }

  /**
   * ServiceArea findFirstOrThrow
   */
  export type ServiceAreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceArea to fetch.
     */
    where?: ServiceAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAreas to fetch.
     */
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceAreas.
     */
    cursor?: ServiceAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceAreas.
     */
    distinct?: ServiceAreaScalarFieldEnum | ServiceAreaScalarFieldEnum[]
  }

  /**
   * ServiceArea findMany
   */
  export type ServiceAreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAreas to fetch.
     */
    where?: ServiceAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAreas to fetch.
     */
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceAreas.
     */
    cursor?: ServiceAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAreas.
     */
    skip?: number
    distinct?: ServiceAreaScalarFieldEnum | ServiceAreaScalarFieldEnum[]
  }

  /**
   * ServiceArea create
   */
  export type ServiceAreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceArea.
     */
    data: XOR<ServiceAreaCreateInput, ServiceAreaUncheckedCreateInput>
  }

  /**
   * ServiceArea createMany
   */
  export type ServiceAreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceAreas.
     */
    data: ServiceAreaCreateManyInput | ServiceAreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceArea createManyAndReturn
   */
  export type ServiceAreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ServiceAreas.
     */
    data: ServiceAreaCreateManyInput | ServiceAreaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceArea update
   */
  export type ServiceAreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceArea.
     */
    data: XOR<ServiceAreaUpdateInput, ServiceAreaUncheckedUpdateInput>
    /**
     * Choose, which ServiceArea to update.
     */
    where: ServiceAreaWhereUniqueInput
  }

  /**
   * ServiceArea updateMany
   */
  export type ServiceAreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceAreas.
     */
    data: XOR<ServiceAreaUpdateManyMutationInput, ServiceAreaUncheckedUpdateManyInput>
    /**
     * Filter which ServiceAreas to update
     */
    where?: ServiceAreaWhereInput
  }

  /**
   * ServiceArea upsert
   */
  export type ServiceAreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceArea to update in case it exists.
     */
    where: ServiceAreaWhereUniqueInput
    /**
     * In case the ServiceArea found by the `where` argument doesn't exist, create a new ServiceArea with this data.
     */
    create: XOR<ServiceAreaCreateInput, ServiceAreaUncheckedCreateInput>
    /**
     * In case the ServiceArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceAreaUpdateInput, ServiceAreaUncheckedUpdateInput>
  }

  /**
   * ServiceArea delete
   */
  export type ServiceAreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter which ServiceArea to delete.
     */
    where: ServiceAreaWhereUniqueInput
  }

  /**
   * ServiceArea deleteMany
   */
  export type ServiceAreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceAreas to delete
     */
    where?: ServiceAreaWhereInput
  }

  /**
   * ServiceArea without action
   */
  export type ServiceAreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
  }


  /**
   * Model VerificationRecord
   */

  export type AggregateVerificationRecord = {
    _count: VerificationRecordCountAggregateOutputType | null
    _min: VerificationRecordMinAggregateOutputType | null
    _max: VerificationRecordMaxAggregateOutputType | null
  }

  export type VerificationRecordMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    documentType: string | null
    documentUrl: string | null
    status: string | null
    notes: string | null
    verifiedAt: Date | null
    createdAt: Date | null
  }

  export type VerificationRecordMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    documentType: string | null
    documentUrl: string | null
    status: string | null
    notes: string | null
    verifiedAt: Date | null
    createdAt: Date | null
  }

  export type VerificationRecordCountAggregateOutputType = {
    id: number
    merchantId: number
    documentType: number
    documentUrl: number
    status: number
    notes: number
    verifiedAt: number
    createdAt: number
    _all: number
  }


  export type VerificationRecordMinAggregateInputType = {
    id?: true
    merchantId?: true
    documentType?: true
    documentUrl?: true
    status?: true
    notes?: true
    verifiedAt?: true
    createdAt?: true
  }

  export type VerificationRecordMaxAggregateInputType = {
    id?: true
    merchantId?: true
    documentType?: true
    documentUrl?: true
    status?: true
    notes?: true
    verifiedAt?: true
    createdAt?: true
  }

  export type VerificationRecordCountAggregateInputType = {
    id?: true
    merchantId?: true
    documentType?: true
    documentUrl?: true
    status?: true
    notes?: true
    verifiedAt?: true
    createdAt?: true
    _all?: true
  }

  export type VerificationRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationRecord to aggregate.
     */
    where?: VerificationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRecords to fetch.
     */
    orderBy?: VerificationRecordOrderByWithRelationInput | VerificationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationRecords
    **/
    _count?: true | VerificationRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationRecordMaxAggregateInputType
  }

  export type GetVerificationRecordAggregateType<T extends VerificationRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationRecord[P]>
      : GetScalarType<T[P], AggregateVerificationRecord[P]>
  }




  export type VerificationRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationRecordWhereInput
    orderBy?: VerificationRecordOrderByWithAggregationInput | VerificationRecordOrderByWithAggregationInput[]
    by: VerificationRecordScalarFieldEnum[] | VerificationRecordScalarFieldEnum
    having?: VerificationRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationRecordCountAggregateInputType | true
    _min?: VerificationRecordMinAggregateInputType
    _max?: VerificationRecordMaxAggregateInputType
  }

  export type VerificationRecordGroupByOutputType = {
    id: string
    merchantId: string
    documentType: string
    documentUrl: string
    status: string
    notes: string | null
    verifiedAt: Date | null
    createdAt: Date
    _count: VerificationRecordCountAggregateOutputType | null
    _min: VerificationRecordMinAggregateOutputType | null
    _max: VerificationRecordMaxAggregateOutputType | null
  }

  type GetVerificationRecordGroupByPayload<T extends VerificationRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationRecordGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationRecordGroupByOutputType[P]>
        }
      >
    >


  export type VerificationRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    documentType?: boolean
    documentUrl?: boolean
    status?: boolean
    notes?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationRecord"]>

  export type VerificationRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    documentType?: boolean
    documentUrl?: boolean
    status?: boolean
    notes?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationRecord"]>

  export type VerificationRecordSelectScalar = {
    id?: boolean
    merchantId?: boolean
    documentType?: boolean
    documentUrl?: boolean
    status?: boolean
    notes?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
  }

  export type VerificationRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type VerificationRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $VerificationRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationRecord"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      documentType: string
      documentUrl: string
      status: string
      notes: string | null
      verifiedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["verificationRecord"]>
    composites: {}
  }

  type VerificationRecordGetPayload<S extends boolean | null | undefined | VerificationRecordDefaultArgs> = $Result.GetResult<Prisma.$VerificationRecordPayload, S>

  type VerificationRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationRecordCountAggregateInputType | true
    }

  export interface VerificationRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationRecord'], meta: { name: 'VerificationRecord' } }
    /**
     * Find zero or one VerificationRecord that matches the filter.
     * @param {VerificationRecordFindUniqueArgs} args - Arguments to find a VerificationRecord
     * @example
     * // Get one VerificationRecord
     * const verificationRecord = await prisma.verificationRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationRecordFindUniqueArgs>(args: SelectSubset<T, VerificationRecordFindUniqueArgs<ExtArgs>>): Prisma__VerificationRecordClient<$Result.GetResult<Prisma.$VerificationRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VerificationRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationRecordFindUniqueOrThrowArgs} args - Arguments to find a VerificationRecord
     * @example
     * // Get one VerificationRecord
     * const verificationRecord = await prisma.verificationRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationRecordClient<$Result.GetResult<Prisma.$VerificationRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VerificationRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRecordFindFirstArgs} args - Arguments to find a VerificationRecord
     * @example
     * // Get one VerificationRecord
     * const verificationRecord = await prisma.verificationRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationRecordFindFirstArgs>(args?: SelectSubset<T, VerificationRecordFindFirstArgs<ExtArgs>>): Prisma__VerificationRecordClient<$Result.GetResult<Prisma.$VerificationRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VerificationRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRecordFindFirstOrThrowArgs} args - Arguments to find a VerificationRecord
     * @example
     * // Get one VerificationRecord
     * const verificationRecord = await prisma.verificationRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationRecordClient<$Result.GetResult<Prisma.$VerificationRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VerificationRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationRecords
     * const verificationRecords = await prisma.verificationRecord.findMany()
     * 
     * // Get first 10 VerificationRecords
     * const verificationRecords = await prisma.verificationRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationRecordWithIdOnly = await prisma.verificationRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationRecordFindManyArgs>(args?: SelectSubset<T, VerificationRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VerificationRecord.
     * @param {VerificationRecordCreateArgs} args - Arguments to create a VerificationRecord.
     * @example
     * // Create one VerificationRecord
     * const VerificationRecord = await prisma.verificationRecord.create({
     *   data: {
     *     // ... data to create a VerificationRecord
     *   }
     * })
     * 
     */
    create<T extends VerificationRecordCreateArgs>(args: SelectSubset<T, VerificationRecordCreateArgs<ExtArgs>>): Prisma__VerificationRecordClient<$Result.GetResult<Prisma.$VerificationRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VerificationRecords.
     * @param {VerificationRecordCreateManyArgs} args - Arguments to create many VerificationRecords.
     * @example
     * // Create many VerificationRecords
     * const verificationRecord = await prisma.verificationRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationRecordCreateManyArgs>(args?: SelectSubset<T, VerificationRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationRecords and returns the data saved in the database.
     * @param {VerificationRecordCreateManyAndReturnArgs} args - Arguments to create many VerificationRecords.
     * @example
     * // Create many VerificationRecords
     * const verificationRecord = await prisma.verificationRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationRecords and only return the `id`
     * const verificationRecordWithIdOnly = await prisma.verificationRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VerificationRecord.
     * @param {VerificationRecordDeleteArgs} args - Arguments to delete one VerificationRecord.
     * @example
     * // Delete one VerificationRecord
     * const VerificationRecord = await prisma.verificationRecord.delete({
     *   where: {
     *     // ... filter to delete one VerificationRecord
     *   }
     * })
     * 
     */
    delete<T extends VerificationRecordDeleteArgs>(args: SelectSubset<T, VerificationRecordDeleteArgs<ExtArgs>>): Prisma__VerificationRecordClient<$Result.GetResult<Prisma.$VerificationRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VerificationRecord.
     * @param {VerificationRecordUpdateArgs} args - Arguments to update one VerificationRecord.
     * @example
     * // Update one VerificationRecord
     * const verificationRecord = await prisma.verificationRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationRecordUpdateArgs>(args: SelectSubset<T, VerificationRecordUpdateArgs<ExtArgs>>): Prisma__VerificationRecordClient<$Result.GetResult<Prisma.$VerificationRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VerificationRecords.
     * @param {VerificationRecordDeleteManyArgs} args - Arguments to filter VerificationRecords to delete.
     * @example
     * // Delete a few VerificationRecords
     * const { count } = await prisma.verificationRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationRecordDeleteManyArgs>(args?: SelectSubset<T, VerificationRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationRecords
     * const verificationRecord = await prisma.verificationRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationRecordUpdateManyArgs>(args: SelectSubset<T, VerificationRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationRecord.
     * @param {VerificationRecordUpsertArgs} args - Arguments to update or create a VerificationRecord.
     * @example
     * // Update or create a VerificationRecord
     * const verificationRecord = await prisma.verificationRecord.upsert({
     *   create: {
     *     // ... data to create a VerificationRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationRecord we want to update
     *   }
     * })
     */
    upsert<T extends VerificationRecordUpsertArgs>(args: SelectSubset<T, VerificationRecordUpsertArgs<ExtArgs>>): Prisma__VerificationRecordClient<$Result.GetResult<Prisma.$VerificationRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VerificationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRecordCountArgs} args - Arguments to filter VerificationRecords to count.
     * @example
     * // Count the number of VerificationRecords
     * const count = await prisma.verificationRecord.count({
     *   where: {
     *     // ... the filter for the VerificationRecords we want to count
     *   }
     * })
    **/
    count<T extends VerificationRecordCountArgs>(
      args?: Subset<T, VerificationRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationRecordAggregateArgs>(args: Subset<T, VerificationRecordAggregateArgs>): Prisma.PrismaPromise<GetVerificationRecordAggregateType<T>>

    /**
     * Group by VerificationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationRecordGroupByArgs['orderBy'] }
        : { orderBy?: VerificationRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationRecord model
   */
  readonly fields: VerificationRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationRecord model
   */ 
  interface VerificationRecordFieldRefs {
    readonly id: FieldRef<"VerificationRecord", 'String'>
    readonly merchantId: FieldRef<"VerificationRecord", 'String'>
    readonly documentType: FieldRef<"VerificationRecord", 'String'>
    readonly documentUrl: FieldRef<"VerificationRecord", 'String'>
    readonly status: FieldRef<"VerificationRecord", 'String'>
    readonly notes: FieldRef<"VerificationRecord", 'String'>
    readonly verifiedAt: FieldRef<"VerificationRecord", 'DateTime'>
    readonly createdAt: FieldRef<"VerificationRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationRecord findUnique
   */
  export type VerificationRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRecord
     */
    select?: VerificationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationRecordInclude<ExtArgs> | null
    /**
     * Filter, which VerificationRecord to fetch.
     */
    where: VerificationRecordWhereUniqueInput
  }

  /**
   * VerificationRecord findUniqueOrThrow
   */
  export type VerificationRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRecord
     */
    select?: VerificationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationRecordInclude<ExtArgs> | null
    /**
     * Filter, which VerificationRecord to fetch.
     */
    where: VerificationRecordWhereUniqueInput
  }

  /**
   * VerificationRecord findFirst
   */
  export type VerificationRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRecord
     */
    select?: VerificationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationRecordInclude<ExtArgs> | null
    /**
     * Filter, which VerificationRecord to fetch.
     */
    where?: VerificationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRecords to fetch.
     */
    orderBy?: VerificationRecordOrderByWithRelationInput | VerificationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationRecords.
     */
    cursor?: VerificationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationRecords.
     */
    distinct?: VerificationRecordScalarFieldEnum | VerificationRecordScalarFieldEnum[]
  }

  /**
   * VerificationRecord findFirstOrThrow
   */
  export type VerificationRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRecord
     */
    select?: VerificationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationRecordInclude<ExtArgs> | null
    /**
     * Filter, which VerificationRecord to fetch.
     */
    where?: VerificationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRecords to fetch.
     */
    orderBy?: VerificationRecordOrderByWithRelationInput | VerificationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationRecords.
     */
    cursor?: VerificationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationRecords.
     */
    distinct?: VerificationRecordScalarFieldEnum | VerificationRecordScalarFieldEnum[]
  }

  /**
   * VerificationRecord findMany
   */
  export type VerificationRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRecord
     */
    select?: VerificationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationRecordInclude<ExtArgs> | null
    /**
     * Filter, which VerificationRecords to fetch.
     */
    where?: VerificationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRecords to fetch.
     */
    orderBy?: VerificationRecordOrderByWithRelationInput | VerificationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationRecords.
     */
    cursor?: VerificationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRecords.
     */
    skip?: number
    distinct?: VerificationRecordScalarFieldEnum | VerificationRecordScalarFieldEnum[]
  }

  /**
   * VerificationRecord create
   */
  export type VerificationRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRecord
     */
    select?: VerificationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationRecord.
     */
    data: XOR<VerificationRecordCreateInput, VerificationRecordUncheckedCreateInput>
  }

  /**
   * VerificationRecord createMany
   */
  export type VerificationRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationRecords.
     */
    data: VerificationRecordCreateManyInput | VerificationRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationRecord createManyAndReturn
   */
  export type VerificationRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRecord
     */
    select?: VerificationRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationRecords.
     */
    data: VerificationRecordCreateManyInput | VerificationRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationRecord update
   */
  export type VerificationRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRecord
     */
    select?: VerificationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationRecord.
     */
    data: XOR<VerificationRecordUpdateInput, VerificationRecordUncheckedUpdateInput>
    /**
     * Choose, which VerificationRecord to update.
     */
    where: VerificationRecordWhereUniqueInput
  }

  /**
   * VerificationRecord updateMany
   */
  export type VerificationRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationRecords.
     */
    data: XOR<VerificationRecordUpdateManyMutationInput, VerificationRecordUncheckedUpdateManyInput>
    /**
     * Filter which VerificationRecords to update
     */
    where?: VerificationRecordWhereInput
  }

  /**
   * VerificationRecord upsert
   */
  export type VerificationRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRecord
     */
    select?: VerificationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationRecord to update in case it exists.
     */
    where: VerificationRecordWhereUniqueInput
    /**
     * In case the VerificationRecord found by the `where` argument doesn't exist, create a new VerificationRecord with this data.
     */
    create: XOR<VerificationRecordCreateInput, VerificationRecordUncheckedCreateInput>
    /**
     * In case the VerificationRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationRecordUpdateInput, VerificationRecordUncheckedUpdateInput>
  }

  /**
   * VerificationRecord delete
   */
  export type VerificationRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRecord
     */
    select?: VerificationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationRecordInclude<ExtArgs> | null
    /**
     * Filter which VerificationRecord to delete.
     */
    where: VerificationRecordWhereUniqueInput
  }

  /**
   * VerificationRecord deleteMany
   */
  export type VerificationRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationRecords to delete
     */
    where?: VerificationRecordWhereInput
  }

  /**
   * VerificationRecord without action
   */
  export type VerificationRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRecord
     */
    select?: VerificationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationRecordInclude<ExtArgs> | null
  }


  /**
   * Model PartnerRegistration
   */

  export type AggregatePartnerRegistration = {
    _count: PartnerRegistrationCountAggregateOutputType | null
    _avg: PartnerRegistrationAvgAggregateOutputType | null
    _sum: PartnerRegistrationSumAggregateOutputType | null
    _min: PartnerRegistrationMinAggregateOutputType | null
    _max: PartnerRegistrationMaxAggregateOutputType | null
  }

  export type PartnerRegistrationAvgAggregateOutputType = {
    currentStep: number | null
    latitude: number | null
    longitude: number | null
    serviceRadiusMeters: number | null
    minOrderValue: number | null
  }

  export type PartnerRegistrationSumAggregateOutputType = {
    currentStep: number | null
    latitude: number | null
    longitude: number | null
    serviceRadiusMeters: number | null
    minOrderValue: number | null
  }

  export type PartnerRegistrationMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    merchantId: string | null
    currentStep: number | null
    status: string | null
    businessType: string | null
    businessName: string | null
    ownerName: string | null
    mobileNumber: string | null
    email: string | null
    businessCategory: string | null
    businessDescription: string | null
    pincode: string | null
    state: string | null
    stateCode: string | null
    district: string | null
    districtCode: string | null
    city: string | null
    cityCode: string | null
    locality: string | null
    fullAddress: string | null
    latitude: number | null
    longitude: number | null
    homeBusinessPrivacy: boolean | null
    scheduleMode: string | null
    storePickup: boolean | null
    merchantDelivery: boolean | null
    serviceRadius: string | null
    serviceRadiusMeters: number | null
    minOrderValue: number | null
    prepTime: string | null
    bankAccountHolder: string | null
    bankAccountNumber: string | null
    bankIfscCode: string | null
    bankName: string | null
    categoryLicenceUrl: string | null
    categoryLicenceName: string | null
    termsAgreed: boolean | null
    submittedAt: Date | null
    reviewedAt: Date | null
    reviewNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerRegistrationMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    merchantId: string | null
    currentStep: number | null
    status: string | null
    businessType: string | null
    businessName: string | null
    ownerName: string | null
    mobileNumber: string | null
    email: string | null
    businessCategory: string | null
    businessDescription: string | null
    pincode: string | null
    state: string | null
    stateCode: string | null
    district: string | null
    districtCode: string | null
    city: string | null
    cityCode: string | null
    locality: string | null
    fullAddress: string | null
    latitude: number | null
    longitude: number | null
    homeBusinessPrivacy: boolean | null
    scheduleMode: string | null
    storePickup: boolean | null
    merchantDelivery: boolean | null
    serviceRadius: string | null
    serviceRadiusMeters: number | null
    minOrderValue: number | null
    prepTime: string | null
    bankAccountHolder: string | null
    bankAccountNumber: string | null
    bankIfscCode: string | null
    bankName: string | null
    categoryLicenceUrl: string | null
    categoryLicenceName: string | null
    termsAgreed: boolean | null
    submittedAt: Date | null
    reviewedAt: Date | null
    reviewNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerRegistrationCountAggregateOutputType = {
    id: number
    applicationId: number
    merchantId: number
    currentStep: number
    status: number
    businessType: number
    businessName: number
    ownerName: number
    mobileNumber: number
    email: number
    businessCategory: number
    businessDescription: number
    pincode: number
    state: number
    stateCode: number
    district: number
    districtCode: number
    city: number
    cityCode: number
    locality: number
    fullAddress: number
    latitude: number
    longitude: number
    homeBusinessPrivacy: number
    scheduleMode: number
    operatingHours: number
    holidays: number
    temporaryClosure: number
    storePickup: number
    merchantDelivery: number
    serviceRadius: number
    serviceRadiusMeters: number
    minOrderValue: number
    prepTime: number
    bankAccountHolder: number
    bankAccountNumber: number
    bankIfscCode: number
    bankName: number
    categoryLicenceUrl: number
    categoryLicenceName: number
    termsAgreed: number
    submittedAt: number
    reviewedAt: number
    reviewNotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnerRegistrationAvgAggregateInputType = {
    currentStep?: true
    latitude?: true
    longitude?: true
    serviceRadiusMeters?: true
    minOrderValue?: true
  }

  export type PartnerRegistrationSumAggregateInputType = {
    currentStep?: true
    latitude?: true
    longitude?: true
    serviceRadiusMeters?: true
    minOrderValue?: true
  }

  export type PartnerRegistrationMinAggregateInputType = {
    id?: true
    applicationId?: true
    merchantId?: true
    currentStep?: true
    status?: true
    businessType?: true
    businessName?: true
    ownerName?: true
    mobileNumber?: true
    email?: true
    businessCategory?: true
    businessDescription?: true
    pincode?: true
    state?: true
    stateCode?: true
    district?: true
    districtCode?: true
    city?: true
    cityCode?: true
    locality?: true
    fullAddress?: true
    latitude?: true
    longitude?: true
    homeBusinessPrivacy?: true
    scheduleMode?: true
    storePickup?: true
    merchantDelivery?: true
    serviceRadius?: true
    serviceRadiusMeters?: true
    minOrderValue?: true
    prepTime?: true
    bankAccountHolder?: true
    bankAccountNumber?: true
    bankIfscCode?: true
    bankName?: true
    categoryLicenceUrl?: true
    categoryLicenceName?: true
    termsAgreed?: true
    submittedAt?: true
    reviewedAt?: true
    reviewNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerRegistrationMaxAggregateInputType = {
    id?: true
    applicationId?: true
    merchantId?: true
    currentStep?: true
    status?: true
    businessType?: true
    businessName?: true
    ownerName?: true
    mobileNumber?: true
    email?: true
    businessCategory?: true
    businessDescription?: true
    pincode?: true
    state?: true
    stateCode?: true
    district?: true
    districtCode?: true
    city?: true
    cityCode?: true
    locality?: true
    fullAddress?: true
    latitude?: true
    longitude?: true
    homeBusinessPrivacy?: true
    scheduleMode?: true
    storePickup?: true
    merchantDelivery?: true
    serviceRadius?: true
    serviceRadiusMeters?: true
    minOrderValue?: true
    prepTime?: true
    bankAccountHolder?: true
    bankAccountNumber?: true
    bankIfscCode?: true
    bankName?: true
    categoryLicenceUrl?: true
    categoryLicenceName?: true
    termsAgreed?: true
    submittedAt?: true
    reviewedAt?: true
    reviewNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerRegistrationCountAggregateInputType = {
    id?: true
    applicationId?: true
    merchantId?: true
    currentStep?: true
    status?: true
    businessType?: true
    businessName?: true
    ownerName?: true
    mobileNumber?: true
    email?: true
    businessCategory?: true
    businessDescription?: true
    pincode?: true
    state?: true
    stateCode?: true
    district?: true
    districtCode?: true
    city?: true
    cityCode?: true
    locality?: true
    fullAddress?: true
    latitude?: true
    longitude?: true
    homeBusinessPrivacy?: true
    scheduleMode?: true
    operatingHours?: true
    holidays?: true
    temporaryClosure?: true
    storePickup?: true
    merchantDelivery?: true
    serviceRadius?: true
    serviceRadiusMeters?: true
    minOrderValue?: true
    prepTime?: true
    bankAccountHolder?: true
    bankAccountNumber?: true
    bankIfscCode?: true
    bankName?: true
    categoryLicenceUrl?: true
    categoryLicenceName?: true
    termsAgreed?: true
    submittedAt?: true
    reviewedAt?: true
    reviewNotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnerRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerRegistration to aggregate.
     */
    where?: PartnerRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerRegistrations to fetch.
     */
    orderBy?: PartnerRegistrationOrderByWithRelationInput | PartnerRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartnerRegistrations
    **/
    _count?: true | PartnerRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartnerRegistrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartnerRegistrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerRegistrationMaxAggregateInputType
  }

  export type GetPartnerRegistrationAggregateType<T extends PartnerRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregatePartnerRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartnerRegistration[P]>
      : GetScalarType<T[P], AggregatePartnerRegistration[P]>
  }




  export type PartnerRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerRegistrationWhereInput
    orderBy?: PartnerRegistrationOrderByWithAggregationInput | PartnerRegistrationOrderByWithAggregationInput[]
    by: PartnerRegistrationScalarFieldEnum[] | PartnerRegistrationScalarFieldEnum
    having?: PartnerRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerRegistrationCountAggregateInputType | true
    _avg?: PartnerRegistrationAvgAggregateInputType
    _sum?: PartnerRegistrationSumAggregateInputType
    _min?: PartnerRegistrationMinAggregateInputType
    _max?: PartnerRegistrationMaxAggregateInputType
  }

  export type PartnerRegistrationGroupByOutputType = {
    id: string
    applicationId: string
    merchantId: string | null
    currentStep: number
    status: string
    businessType: string
    businessName: string
    ownerName: string
    mobileNumber: string
    email: string | null
    businessCategory: string
    businessDescription: string
    pincode: string
    state: string
    stateCode: string
    district: string
    districtCode: string
    city: string
    cityCode: string
    locality: string
    fullAddress: string
    latitude: number
    longitude: number
    homeBusinessPrivacy: boolean
    scheduleMode: string
    operatingHours: JsonValue
    holidays: JsonValue | null
    temporaryClosure: JsonValue | null
    storePickup: boolean
    merchantDelivery: boolean
    serviceRadius: string
    serviceRadiusMeters: number
    minOrderValue: number
    prepTime: string
    bankAccountHolder: string | null
    bankAccountNumber: string | null
    bankIfscCode: string | null
    bankName: string | null
    categoryLicenceUrl: string | null
    categoryLicenceName: string | null
    termsAgreed: boolean
    submittedAt: Date | null
    reviewedAt: Date | null
    reviewNotes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PartnerRegistrationCountAggregateOutputType | null
    _avg: PartnerRegistrationAvgAggregateOutputType | null
    _sum: PartnerRegistrationSumAggregateOutputType | null
    _min: PartnerRegistrationMinAggregateOutputType | null
    _max: PartnerRegistrationMaxAggregateOutputType | null
  }

  type GetPartnerRegistrationGroupByPayload<T extends PartnerRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type PartnerRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    merchantId?: boolean
    currentStep?: boolean
    status?: boolean
    businessType?: boolean
    businessName?: boolean
    ownerName?: boolean
    mobileNumber?: boolean
    email?: boolean
    businessCategory?: boolean
    businessDescription?: boolean
    pincode?: boolean
    state?: boolean
    stateCode?: boolean
    district?: boolean
    districtCode?: boolean
    city?: boolean
    cityCode?: boolean
    locality?: boolean
    fullAddress?: boolean
    latitude?: boolean
    longitude?: boolean
    homeBusinessPrivacy?: boolean
    scheduleMode?: boolean
    operatingHours?: boolean
    holidays?: boolean
    temporaryClosure?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    serviceRadius?: boolean
    serviceRadiusMeters?: boolean
    minOrderValue?: boolean
    prepTime?: boolean
    bankAccountHolder?: boolean
    bankAccountNumber?: boolean
    bankIfscCode?: boolean
    bankName?: boolean
    categoryLicenceUrl?: boolean
    categoryLicenceName?: boolean
    termsAgreed?: boolean
    submittedAt?: boolean
    reviewedAt?: boolean
    reviewNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    merchant?: boolean | PartnerRegistration$merchantArgs<ExtArgs>
    documents?: boolean | PartnerRegistration$documentsArgs<ExtArgs>
    statusHistory?: boolean | PartnerRegistration$statusHistoryArgs<ExtArgs>
    _count?: boolean | PartnerRegistrationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerRegistration"]>

  export type PartnerRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    merchantId?: boolean
    currentStep?: boolean
    status?: boolean
    businessType?: boolean
    businessName?: boolean
    ownerName?: boolean
    mobileNumber?: boolean
    email?: boolean
    businessCategory?: boolean
    businessDescription?: boolean
    pincode?: boolean
    state?: boolean
    stateCode?: boolean
    district?: boolean
    districtCode?: boolean
    city?: boolean
    cityCode?: boolean
    locality?: boolean
    fullAddress?: boolean
    latitude?: boolean
    longitude?: boolean
    homeBusinessPrivacy?: boolean
    scheduleMode?: boolean
    operatingHours?: boolean
    holidays?: boolean
    temporaryClosure?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    serviceRadius?: boolean
    serviceRadiusMeters?: boolean
    minOrderValue?: boolean
    prepTime?: boolean
    bankAccountHolder?: boolean
    bankAccountNumber?: boolean
    bankIfscCode?: boolean
    bankName?: boolean
    categoryLicenceUrl?: boolean
    categoryLicenceName?: boolean
    termsAgreed?: boolean
    submittedAt?: boolean
    reviewedAt?: boolean
    reviewNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    merchant?: boolean | PartnerRegistration$merchantArgs<ExtArgs>
  }, ExtArgs["result"]["partnerRegistration"]>

  export type PartnerRegistrationSelectScalar = {
    id?: boolean
    applicationId?: boolean
    merchantId?: boolean
    currentStep?: boolean
    status?: boolean
    businessType?: boolean
    businessName?: boolean
    ownerName?: boolean
    mobileNumber?: boolean
    email?: boolean
    businessCategory?: boolean
    businessDescription?: boolean
    pincode?: boolean
    state?: boolean
    stateCode?: boolean
    district?: boolean
    districtCode?: boolean
    city?: boolean
    cityCode?: boolean
    locality?: boolean
    fullAddress?: boolean
    latitude?: boolean
    longitude?: boolean
    homeBusinessPrivacy?: boolean
    scheduleMode?: boolean
    operatingHours?: boolean
    holidays?: boolean
    temporaryClosure?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    serviceRadius?: boolean
    serviceRadiusMeters?: boolean
    minOrderValue?: boolean
    prepTime?: boolean
    bankAccountHolder?: boolean
    bankAccountNumber?: boolean
    bankIfscCode?: boolean
    bankName?: boolean
    categoryLicenceUrl?: boolean
    categoryLicenceName?: boolean
    termsAgreed?: boolean
    submittedAt?: boolean
    reviewedAt?: boolean
    reviewNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnerRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | PartnerRegistration$merchantArgs<ExtArgs>
    documents?: boolean | PartnerRegistration$documentsArgs<ExtArgs>
    statusHistory?: boolean | PartnerRegistration$statusHistoryArgs<ExtArgs>
    _count?: boolean | PartnerRegistrationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartnerRegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | PartnerRegistration$merchantArgs<ExtArgs>
  }

  export type $PartnerRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartnerRegistration"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs> | null
      documents: Prisma.$RegistrationDocumentPayload<ExtArgs>[]
      statusHistory: Prisma.$RegistrationStatusHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      merchantId: string | null
      currentStep: number
      status: string
      businessType: string
      businessName: string
      ownerName: string
      mobileNumber: string
      email: string | null
      businessCategory: string
      businessDescription: string
      pincode: string
      state: string
      stateCode: string
      district: string
      districtCode: string
      city: string
      cityCode: string
      locality: string
      fullAddress: string
      latitude: number
      longitude: number
      homeBusinessPrivacy: boolean
      scheduleMode: string
      operatingHours: Prisma.JsonValue
      holidays: Prisma.JsonValue | null
      temporaryClosure: Prisma.JsonValue | null
      storePickup: boolean
      merchantDelivery: boolean
      serviceRadius: string
      serviceRadiusMeters: number
      minOrderValue: number
      prepTime: string
      bankAccountHolder: string | null
      bankAccountNumber: string | null
      bankIfscCode: string | null
      bankName: string | null
      categoryLicenceUrl: string | null
      categoryLicenceName: string | null
      termsAgreed: boolean
      submittedAt: Date | null
      reviewedAt: Date | null
      reviewNotes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partnerRegistration"]>
    composites: {}
  }

  type PartnerRegistrationGetPayload<S extends boolean | null | undefined | PartnerRegistrationDefaultArgs> = $Result.GetResult<Prisma.$PartnerRegistrationPayload, S>

  type PartnerRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PartnerRegistrationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PartnerRegistrationCountAggregateInputType | true
    }

  export interface PartnerRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartnerRegistration'], meta: { name: 'PartnerRegistration' } }
    /**
     * Find zero or one PartnerRegistration that matches the filter.
     * @param {PartnerRegistrationFindUniqueArgs} args - Arguments to find a PartnerRegistration
     * @example
     * // Get one PartnerRegistration
     * const partnerRegistration = await prisma.partnerRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerRegistrationFindUniqueArgs>(args: SelectSubset<T, PartnerRegistrationFindUniqueArgs<ExtArgs>>): Prisma__PartnerRegistrationClient<$Result.GetResult<Prisma.$PartnerRegistrationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PartnerRegistration that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PartnerRegistrationFindUniqueOrThrowArgs} args - Arguments to find a PartnerRegistration
     * @example
     * // Get one PartnerRegistration
     * const partnerRegistration = await prisma.partnerRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerRegistrationClient<$Result.GetResult<Prisma.$PartnerRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PartnerRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRegistrationFindFirstArgs} args - Arguments to find a PartnerRegistration
     * @example
     * // Get one PartnerRegistration
     * const partnerRegistration = await prisma.partnerRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerRegistrationFindFirstArgs>(args?: SelectSubset<T, PartnerRegistrationFindFirstArgs<ExtArgs>>): Prisma__PartnerRegistrationClient<$Result.GetResult<Prisma.$PartnerRegistrationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PartnerRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRegistrationFindFirstOrThrowArgs} args - Arguments to find a PartnerRegistration
     * @example
     * // Get one PartnerRegistration
     * const partnerRegistration = await prisma.partnerRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerRegistrationClient<$Result.GetResult<Prisma.$PartnerRegistrationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PartnerRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartnerRegistrations
     * const partnerRegistrations = await prisma.partnerRegistration.findMany()
     * 
     * // Get first 10 PartnerRegistrations
     * const partnerRegistrations = await prisma.partnerRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerRegistrationWithIdOnly = await prisma.partnerRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerRegistrationFindManyArgs>(args?: SelectSubset<T, PartnerRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerRegistrationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PartnerRegistration.
     * @param {PartnerRegistrationCreateArgs} args - Arguments to create a PartnerRegistration.
     * @example
     * // Create one PartnerRegistration
     * const PartnerRegistration = await prisma.partnerRegistration.create({
     *   data: {
     *     // ... data to create a PartnerRegistration
     *   }
     * })
     * 
     */
    create<T extends PartnerRegistrationCreateArgs>(args: SelectSubset<T, PartnerRegistrationCreateArgs<ExtArgs>>): Prisma__PartnerRegistrationClient<$Result.GetResult<Prisma.$PartnerRegistrationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PartnerRegistrations.
     * @param {PartnerRegistrationCreateManyArgs} args - Arguments to create many PartnerRegistrations.
     * @example
     * // Create many PartnerRegistrations
     * const partnerRegistration = await prisma.partnerRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerRegistrationCreateManyArgs>(args?: SelectSubset<T, PartnerRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartnerRegistrations and returns the data saved in the database.
     * @param {PartnerRegistrationCreateManyAndReturnArgs} args - Arguments to create many PartnerRegistrations.
     * @example
     * // Create many PartnerRegistrations
     * const partnerRegistration = await prisma.partnerRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartnerRegistrations and only return the `id`
     * const partnerRegistrationWithIdOnly = await prisma.partnerRegistration.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerRegistrationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PartnerRegistration.
     * @param {PartnerRegistrationDeleteArgs} args - Arguments to delete one PartnerRegistration.
     * @example
     * // Delete one PartnerRegistration
     * const PartnerRegistration = await prisma.partnerRegistration.delete({
     *   where: {
     *     // ... filter to delete one PartnerRegistration
     *   }
     * })
     * 
     */
    delete<T extends PartnerRegistrationDeleteArgs>(args: SelectSubset<T, PartnerRegistrationDeleteArgs<ExtArgs>>): Prisma__PartnerRegistrationClient<$Result.GetResult<Prisma.$PartnerRegistrationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PartnerRegistration.
     * @param {PartnerRegistrationUpdateArgs} args - Arguments to update one PartnerRegistration.
     * @example
     * // Update one PartnerRegistration
     * const partnerRegistration = await prisma.partnerRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerRegistrationUpdateArgs>(args: SelectSubset<T, PartnerRegistrationUpdateArgs<ExtArgs>>): Prisma__PartnerRegistrationClient<$Result.GetResult<Prisma.$PartnerRegistrationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PartnerRegistrations.
     * @param {PartnerRegistrationDeleteManyArgs} args - Arguments to filter PartnerRegistrations to delete.
     * @example
     * // Delete a few PartnerRegistrations
     * const { count } = await prisma.partnerRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerRegistrationDeleteManyArgs>(args?: SelectSubset<T, PartnerRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartnerRegistrations
     * const partnerRegistration = await prisma.partnerRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerRegistrationUpdateManyArgs>(args: SelectSubset<T, PartnerRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PartnerRegistration.
     * @param {PartnerRegistrationUpsertArgs} args - Arguments to update or create a PartnerRegistration.
     * @example
     * // Update or create a PartnerRegistration
     * const partnerRegistration = await prisma.partnerRegistration.upsert({
     *   create: {
     *     // ... data to create a PartnerRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartnerRegistration we want to update
     *   }
     * })
     */
    upsert<T extends PartnerRegistrationUpsertArgs>(args: SelectSubset<T, PartnerRegistrationUpsertArgs<ExtArgs>>): Prisma__PartnerRegistrationClient<$Result.GetResult<Prisma.$PartnerRegistrationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PartnerRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRegistrationCountArgs} args - Arguments to filter PartnerRegistrations to count.
     * @example
     * // Count the number of PartnerRegistrations
     * const count = await prisma.partnerRegistration.count({
     *   where: {
     *     // ... the filter for the PartnerRegistrations we want to count
     *   }
     * })
    **/
    count<T extends PartnerRegistrationCountArgs>(
      args?: Subset<T, PartnerRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartnerRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerRegistrationAggregateArgs>(args: Subset<T, PartnerRegistrationAggregateArgs>): Prisma.PrismaPromise<GetPartnerRegistrationAggregateType<T>>

    /**
     * Group by PartnerRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRegistrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: PartnerRegistrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartnerRegistration model
   */
  readonly fields: PartnerRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartnerRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends PartnerRegistration$merchantArgs<ExtArgs> = {}>(args?: Subset<T, PartnerRegistration$merchantArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    documents<T extends PartnerRegistration$documentsArgs<ExtArgs> = {}>(args?: Subset<T, PartnerRegistration$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "findMany"> | Null>
    statusHistory<T extends PartnerRegistration$statusHistoryArgs<ExtArgs> = {}>(args?: Subset<T, PartnerRegistration$statusHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationStatusHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartnerRegistration model
   */ 
  interface PartnerRegistrationFieldRefs {
    readonly id: FieldRef<"PartnerRegistration", 'String'>
    readonly applicationId: FieldRef<"PartnerRegistration", 'String'>
    readonly merchantId: FieldRef<"PartnerRegistration", 'String'>
    readonly currentStep: FieldRef<"PartnerRegistration", 'Int'>
    readonly status: FieldRef<"PartnerRegistration", 'String'>
    readonly businessType: FieldRef<"PartnerRegistration", 'String'>
    readonly businessName: FieldRef<"PartnerRegistration", 'String'>
    readonly ownerName: FieldRef<"PartnerRegistration", 'String'>
    readonly mobileNumber: FieldRef<"PartnerRegistration", 'String'>
    readonly email: FieldRef<"PartnerRegistration", 'String'>
    readonly businessCategory: FieldRef<"PartnerRegistration", 'String'>
    readonly businessDescription: FieldRef<"PartnerRegistration", 'String'>
    readonly pincode: FieldRef<"PartnerRegistration", 'String'>
    readonly state: FieldRef<"PartnerRegistration", 'String'>
    readonly stateCode: FieldRef<"PartnerRegistration", 'String'>
    readonly district: FieldRef<"PartnerRegistration", 'String'>
    readonly districtCode: FieldRef<"PartnerRegistration", 'String'>
    readonly city: FieldRef<"PartnerRegistration", 'String'>
    readonly cityCode: FieldRef<"PartnerRegistration", 'String'>
    readonly locality: FieldRef<"PartnerRegistration", 'String'>
    readonly fullAddress: FieldRef<"PartnerRegistration", 'String'>
    readonly latitude: FieldRef<"PartnerRegistration", 'Float'>
    readonly longitude: FieldRef<"PartnerRegistration", 'Float'>
    readonly homeBusinessPrivacy: FieldRef<"PartnerRegistration", 'Boolean'>
    readonly scheduleMode: FieldRef<"PartnerRegistration", 'String'>
    readonly operatingHours: FieldRef<"PartnerRegistration", 'Json'>
    readonly holidays: FieldRef<"PartnerRegistration", 'Json'>
    readonly temporaryClosure: FieldRef<"PartnerRegistration", 'Json'>
    readonly storePickup: FieldRef<"PartnerRegistration", 'Boolean'>
    readonly merchantDelivery: FieldRef<"PartnerRegistration", 'Boolean'>
    readonly serviceRadius: FieldRef<"PartnerRegistration", 'String'>
    readonly serviceRadiusMeters: FieldRef<"PartnerRegistration", 'Int'>
    readonly minOrderValue: FieldRef<"PartnerRegistration", 'Int'>
    readonly prepTime: FieldRef<"PartnerRegistration", 'String'>
    readonly bankAccountHolder: FieldRef<"PartnerRegistration", 'String'>
    readonly bankAccountNumber: FieldRef<"PartnerRegistration", 'String'>
    readonly bankIfscCode: FieldRef<"PartnerRegistration", 'String'>
    readonly bankName: FieldRef<"PartnerRegistration", 'String'>
    readonly categoryLicenceUrl: FieldRef<"PartnerRegistration", 'String'>
    readonly categoryLicenceName: FieldRef<"PartnerRegistration", 'String'>
    readonly termsAgreed: FieldRef<"PartnerRegistration", 'Boolean'>
    readonly submittedAt: FieldRef<"PartnerRegistration", 'DateTime'>
    readonly reviewedAt: FieldRef<"PartnerRegistration", 'DateTime'>
    readonly reviewNotes: FieldRef<"PartnerRegistration", 'String'>
    readonly createdAt: FieldRef<"PartnerRegistration", 'DateTime'>
    readonly updatedAt: FieldRef<"PartnerRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartnerRegistration findUnique
   */
  export type PartnerRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRegistration
     */
    select?: PartnerRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRegistration to fetch.
     */
    where: PartnerRegistrationWhereUniqueInput
  }

  /**
   * PartnerRegistration findUniqueOrThrow
   */
  export type PartnerRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRegistration
     */
    select?: PartnerRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRegistration to fetch.
     */
    where: PartnerRegistrationWhereUniqueInput
  }

  /**
   * PartnerRegistration findFirst
   */
  export type PartnerRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRegistration
     */
    select?: PartnerRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRegistration to fetch.
     */
    where?: PartnerRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerRegistrations to fetch.
     */
    orderBy?: PartnerRegistrationOrderByWithRelationInput | PartnerRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerRegistrations.
     */
    cursor?: PartnerRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerRegistrations.
     */
    distinct?: PartnerRegistrationScalarFieldEnum | PartnerRegistrationScalarFieldEnum[]
  }

  /**
   * PartnerRegistration findFirstOrThrow
   */
  export type PartnerRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRegistration
     */
    select?: PartnerRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRegistration to fetch.
     */
    where?: PartnerRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerRegistrations to fetch.
     */
    orderBy?: PartnerRegistrationOrderByWithRelationInput | PartnerRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerRegistrations.
     */
    cursor?: PartnerRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerRegistrations.
     */
    distinct?: PartnerRegistrationScalarFieldEnum | PartnerRegistrationScalarFieldEnum[]
  }

  /**
   * PartnerRegistration findMany
   */
  export type PartnerRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRegistration
     */
    select?: PartnerRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRegistrations to fetch.
     */
    where?: PartnerRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerRegistrations to fetch.
     */
    orderBy?: PartnerRegistrationOrderByWithRelationInput | PartnerRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartnerRegistrations.
     */
    cursor?: PartnerRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerRegistrations.
     */
    skip?: number
    distinct?: PartnerRegistrationScalarFieldEnum | PartnerRegistrationScalarFieldEnum[]
  }

  /**
   * PartnerRegistration create
   */
  export type PartnerRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRegistration
     */
    select?: PartnerRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a PartnerRegistration.
     */
    data: XOR<PartnerRegistrationCreateInput, PartnerRegistrationUncheckedCreateInput>
  }

  /**
   * PartnerRegistration createMany
   */
  export type PartnerRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartnerRegistrations.
     */
    data: PartnerRegistrationCreateManyInput | PartnerRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnerRegistration createManyAndReturn
   */
  export type PartnerRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRegistration
     */
    select?: PartnerRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PartnerRegistrations.
     */
    data: PartnerRegistrationCreateManyInput | PartnerRegistrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartnerRegistration update
   */
  export type PartnerRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRegistration
     */
    select?: PartnerRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a PartnerRegistration.
     */
    data: XOR<PartnerRegistrationUpdateInput, PartnerRegistrationUncheckedUpdateInput>
    /**
     * Choose, which PartnerRegistration to update.
     */
    where: PartnerRegistrationWhereUniqueInput
  }

  /**
   * PartnerRegistration updateMany
   */
  export type PartnerRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartnerRegistrations.
     */
    data: XOR<PartnerRegistrationUpdateManyMutationInput, PartnerRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which PartnerRegistrations to update
     */
    where?: PartnerRegistrationWhereInput
  }

  /**
   * PartnerRegistration upsert
   */
  export type PartnerRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRegistration
     */
    select?: PartnerRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the PartnerRegistration to update in case it exists.
     */
    where: PartnerRegistrationWhereUniqueInput
    /**
     * In case the PartnerRegistration found by the `where` argument doesn't exist, create a new PartnerRegistration with this data.
     */
    create: XOR<PartnerRegistrationCreateInput, PartnerRegistrationUncheckedCreateInput>
    /**
     * In case the PartnerRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerRegistrationUpdateInput, PartnerRegistrationUncheckedUpdateInput>
  }

  /**
   * PartnerRegistration delete
   */
  export type PartnerRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRegistration
     */
    select?: PartnerRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRegistrationInclude<ExtArgs> | null
    /**
     * Filter which PartnerRegistration to delete.
     */
    where: PartnerRegistrationWhereUniqueInput
  }

  /**
   * PartnerRegistration deleteMany
   */
  export type PartnerRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerRegistrations to delete
     */
    where?: PartnerRegistrationWhereInput
  }

  /**
   * PartnerRegistration.merchant
   */
  export type PartnerRegistration$merchantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    where?: MerchantWhereInput
  }

  /**
   * PartnerRegistration.documents
   */
  export type PartnerRegistration$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    where?: RegistrationDocumentWhereInput
    orderBy?: RegistrationDocumentOrderByWithRelationInput | RegistrationDocumentOrderByWithRelationInput[]
    cursor?: RegistrationDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationDocumentScalarFieldEnum | RegistrationDocumentScalarFieldEnum[]
  }

  /**
   * PartnerRegistration.statusHistory
   */
  export type PartnerRegistration$statusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStatusHistory
     */
    select?: RegistrationStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStatusHistoryInclude<ExtArgs> | null
    where?: RegistrationStatusHistoryWhereInput
    orderBy?: RegistrationStatusHistoryOrderByWithRelationInput | RegistrationStatusHistoryOrderByWithRelationInput[]
    cursor?: RegistrationStatusHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationStatusHistoryScalarFieldEnum | RegistrationStatusHistoryScalarFieldEnum[]
  }

  /**
   * PartnerRegistration without action
   */
  export type PartnerRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRegistration
     */
    select?: PartnerRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRegistrationInclude<ExtArgs> | null
  }


  /**
   * Model RegistrationDocument
   */

  export type AggregateRegistrationDocument = {
    _count: RegistrationDocumentCountAggregateOutputType | null
    _min: RegistrationDocumentMinAggregateOutputType | null
    _max: RegistrationDocumentMaxAggregateOutputType | null
  }

  export type RegistrationDocumentMinAggregateOutputType = {
    id: string | null
    registrationId: string | null
    documentType: string | null
    fileName: string | null
    fileUrl: string | null
    fileSize: string | null
    verificationStatus: string | null
    rejectionReason: string | null
    uploadedAt: Date | null
  }

  export type RegistrationDocumentMaxAggregateOutputType = {
    id: string | null
    registrationId: string | null
    documentType: string | null
    fileName: string | null
    fileUrl: string | null
    fileSize: string | null
    verificationStatus: string | null
    rejectionReason: string | null
    uploadedAt: Date | null
  }

  export type RegistrationDocumentCountAggregateOutputType = {
    id: number
    registrationId: number
    documentType: number
    fileName: number
    fileUrl: number
    fileSize: number
    verificationStatus: number
    rejectionReason: number
    uploadedAt: number
    _all: number
  }


  export type RegistrationDocumentMinAggregateInputType = {
    id?: true
    registrationId?: true
    documentType?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    verificationStatus?: true
    rejectionReason?: true
    uploadedAt?: true
  }

  export type RegistrationDocumentMaxAggregateInputType = {
    id?: true
    registrationId?: true
    documentType?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    verificationStatus?: true
    rejectionReason?: true
    uploadedAt?: true
  }

  export type RegistrationDocumentCountAggregateInputType = {
    id?: true
    registrationId?: true
    documentType?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    verificationStatus?: true
    rejectionReason?: true
    uploadedAt?: true
    _all?: true
  }

  export type RegistrationDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationDocument to aggregate.
     */
    where?: RegistrationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationDocuments to fetch.
     */
    orderBy?: RegistrationDocumentOrderByWithRelationInput | RegistrationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistrationDocuments
    **/
    _count?: true | RegistrationDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationDocumentMaxAggregateInputType
  }

  export type GetRegistrationDocumentAggregateType<T extends RegistrationDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistrationDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistrationDocument[P]>
      : GetScalarType<T[P], AggregateRegistrationDocument[P]>
  }




  export type RegistrationDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationDocumentWhereInput
    orderBy?: RegistrationDocumentOrderByWithAggregationInput | RegistrationDocumentOrderByWithAggregationInput[]
    by: RegistrationDocumentScalarFieldEnum[] | RegistrationDocumentScalarFieldEnum
    having?: RegistrationDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationDocumentCountAggregateInputType | true
    _min?: RegistrationDocumentMinAggregateInputType
    _max?: RegistrationDocumentMaxAggregateInputType
  }

  export type RegistrationDocumentGroupByOutputType = {
    id: string
    registrationId: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize: string | null
    verificationStatus: string
    rejectionReason: string | null
    uploadedAt: Date
    _count: RegistrationDocumentCountAggregateOutputType | null
    _min: RegistrationDocumentMinAggregateOutputType | null
    _max: RegistrationDocumentMaxAggregateOutputType | null
  }

  type GetRegistrationDocumentGroupByPayload<T extends RegistrationDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationDocumentGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    verificationStatus?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
    registration?: boolean | PartnerRegistrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrationDocument"]>

  export type RegistrationDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    verificationStatus?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
    registration?: boolean | PartnerRegistrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrationDocument"]>

  export type RegistrationDocumentSelectScalar = {
    id?: boolean
    registrationId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    verificationStatus?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
  }

  export type RegistrationDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registration?: boolean | PartnerRegistrationDefaultArgs<ExtArgs>
  }
  export type RegistrationDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registration?: boolean | PartnerRegistrationDefaultArgs<ExtArgs>
  }

  export type $RegistrationDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistrationDocument"
    objects: {
      registration: Prisma.$PartnerRegistrationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      registrationId: string
      documentType: string
      fileName: string
      fileUrl: string
      fileSize: string | null
      verificationStatus: string
      rejectionReason: string | null
      uploadedAt: Date
    }, ExtArgs["result"]["registrationDocument"]>
    composites: {}
  }

  type RegistrationDocumentGetPayload<S extends boolean | null | undefined | RegistrationDocumentDefaultArgs> = $Result.GetResult<Prisma.$RegistrationDocumentPayload, S>

  type RegistrationDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegistrationDocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegistrationDocumentCountAggregateInputType | true
    }

  export interface RegistrationDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistrationDocument'], meta: { name: 'RegistrationDocument' } }
    /**
     * Find zero or one RegistrationDocument that matches the filter.
     * @param {RegistrationDocumentFindUniqueArgs} args - Arguments to find a RegistrationDocument
     * @example
     * // Get one RegistrationDocument
     * const registrationDocument = await prisma.registrationDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationDocumentFindUniqueArgs>(args: SelectSubset<T, RegistrationDocumentFindUniqueArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RegistrationDocument that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RegistrationDocumentFindUniqueOrThrowArgs} args - Arguments to find a RegistrationDocument
     * @example
     * // Get one RegistrationDocument
     * const registrationDocument = await prisma.registrationDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RegistrationDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentFindFirstArgs} args - Arguments to find a RegistrationDocument
     * @example
     * // Get one RegistrationDocument
     * const registrationDocument = await prisma.registrationDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationDocumentFindFirstArgs>(args?: SelectSubset<T, RegistrationDocumentFindFirstArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RegistrationDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentFindFirstOrThrowArgs} args - Arguments to find a RegistrationDocument
     * @example
     * // Get one RegistrationDocument
     * const registrationDocument = await prisma.registrationDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RegistrationDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistrationDocuments
     * const registrationDocuments = await prisma.registrationDocument.findMany()
     * 
     * // Get first 10 RegistrationDocuments
     * const registrationDocuments = await prisma.registrationDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationDocumentWithIdOnly = await prisma.registrationDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationDocumentFindManyArgs>(args?: SelectSubset<T, RegistrationDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RegistrationDocument.
     * @param {RegistrationDocumentCreateArgs} args - Arguments to create a RegistrationDocument.
     * @example
     * // Create one RegistrationDocument
     * const RegistrationDocument = await prisma.registrationDocument.create({
     *   data: {
     *     // ... data to create a RegistrationDocument
     *   }
     * })
     * 
     */
    create<T extends RegistrationDocumentCreateArgs>(args: SelectSubset<T, RegistrationDocumentCreateArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RegistrationDocuments.
     * @param {RegistrationDocumentCreateManyArgs} args - Arguments to create many RegistrationDocuments.
     * @example
     * // Create many RegistrationDocuments
     * const registrationDocument = await prisma.registrationDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationDocumentCreateManyArgs>(args?: SelectSubset<T, RegistrationDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistrationDocuments and returns the data saved in the database.
     * @param {RegistrationDocumentCreateManyAndReturnArgs} args - Arguments to create many RegistrationDocuments.
     * @example
     * // Create many RegistrationDocuments
     * const registrationDocument = await prisma.registrationDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistrationDocuments and only return the `id`
     * const registrationDocumentWithIdOnly = await prisma.registrationDocument.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistrationDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistrationDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RegistrationDocument.
     * @param {RegistrationDocumentDeleteArgs} args - Arguments to delete one RegistrationDocument.
     * @example
     * // Delete one RegistrationDocument
     * const RegistrationDocument = await prisma.registrationDocument.delete({
     *   where: {
     *     // ... filter to delete one RegistrationDocument
     *   }
     * })
     * 
     */
    delete<T extends RegistrationDocumentDeleteArgs>(args: SelectSubset<T, RegistrationDocumentDeleteArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RegistrationDocument.
     * @param {RegistrationDocumentUpdateArgs} args - Arguments to update one RegistrationDocument.
     * @example
     * // Update one RegistrationDocument
     * const registrationDocument = await prisma.registrationDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationDocumentUpdateArgs>(args: SelectSubset<T, RegistrationDocumentUpdateArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RegistrationDocuments.
     * @param {RegistrationDocumentDeleteManyArgs} args - Arguments to filter RegistrationDocuments to delete.
     * @example
     * // Delete a few RegistrationDocuments
     * const { count } = await prisma.registrationDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationDocumentDeleteManyArgs>(args?: SelectSubset<T, RegistrationDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistrationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistrationDocuments
     * const registrationDocument = await prisma.registrationDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationDocumentUpdateManyArgs>(args: SelectSubset<T, RegistrationDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegistrationDocument.
     * @param {RegistrationDocumentUpsertArgs} args - Arguments to update or create a RegistrationDocument.
     * @example
     * // Update or create a RegistrationDocument
     * const registrationDocument = await prisma.registrationDocument.upsert({
     *   create: {
     *     // ... data to create a RegistrationDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistrationDocument we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationDocumentUpsertArgs>(args: SelectSubset<T, RegistrationDocumentUpsertArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RegistrationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentCountArgs} args - Arguments to filter RegistrationDocuments to count.
     * @example
     * // Count the number of RegistrationDocuments
     * const count = await prisma.registrationDocument.count({
     *   where: {
     *     // ... the filter for the RegistrationDocuments we want to count
     *   }
     * })
    **/
    count<T extends RegistrationDocumentCountArgs>(
      args?: Subset<T, RegistrationDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistrationDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistrationDocumentAggregateArgs>(args: Subset<T, RegistrationDocumentAggregateArgs>): Prisma.PrismaPromise<GetRegistrationDocumentAggregateType<T>>

    /**
     * Group by RegistrationDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegistrationDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationDocumentGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegistrationDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistrationDocument model
   */
  readonly fields: RegistrationDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistrationDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registration<T extends PartnerRegistrationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartnerRegistrationDefaultArgs<ExtArgs>>): Prisma__PartnerRegistrationClient<$Result.GetResult<Prisma.$PartnerRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RegistrationDocument model
   */ 
  interface RegistrationDocumentFieldRefs {
    readonly id: FieldRef<"RegistrationDocument", 'String'>
    readonly registrationId: FieldRef<"RegistrationDocument", 'String'>
    readonly documentType: FieldRef<"RegistrationDocument", 'String'>
    readonly fileName: FieldRef<"RegistrationDocument", 'String'>
    readonly fileUrl: FieldRef<"RegistrationDocument", 'String'>
    readonly fileSize: FieldRef<"RegistrationDocument", 'String'>
    readonly verificationStatus: FieldRef<"RegistrationDocument", 'String'>
    readonly rejectionReason: FieldRef<"RegistrationDocument", 'String'>
    readonly uploadedAt: FieldRef<"RegistrationDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistrationDocument findUnique
   */
  export type RegistrationDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationDocument to fetch.
     */
    where: RegistrationDocumentWhereUniqueInput
  }

  /**
   * RegistrationDocument findUniqueOrThrow
   */
  export type RegistrationDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationDocument to fetch.
     */
    where: RegistrationDocumentWhereUniqueInput
  }

  /**
   * RegistrationDocument findFirst
   */
  export type RegistrationDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationDocument to fetch.
     */
    where?: RegistrationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationDocuments to fetch.
     */
    orderBy?: RegistrationDocumentOrderByWithRelationInput | RegistrationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationDocuments.
     */
    cursor?: RegistrationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationDocuments.
     */
    distinct?: RegistrationDocumentScalarFieldEnum | RegistrationDocumentScalarFieldEnum[]
  }

  /**
   * RegistrationDocument findFirstOrThrow
   */
  export type RegistrationDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationDocument to fetch.
     */
    where?: RegistrationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationDocuments to fetch.
     */
    orderBy?: RegistrationDocumentOrderByWithRelationInput | RegistrationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationDocuments.
     */
    cursor?: RegistrationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationDocuments.
     */
    distinct?: RegistrationDocumentScalarFieldEnum | RegistrationDocumentScalarFieldEnum[]
  }

  /**
   * RegistrationDocument findMany
   */
  export type RegistrationDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationDocuments to fetch.
     */
    where?: RegistrationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationDocuments to fetch.
     */
    orderBy?: RegistrationDocumentOrderByWithRelationInput | RegistrationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistrationDocuments.
     */
    cursor?: RegistrationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationDocuments.
     */
    skip?: number
    distinct?: RegistrationDocumentScalarFieldEnum | RegistrationDocumentScalarFieldEnum[]
  }

  /**
   * RegistrationDocument create
   */
  export type RegistrationDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistrationDocument.
     */
    data: XOR<RegistrationDocumentCreateInput, RegistrationDocumentUncheckedCreateInput>
  }

  /**
   * RegistrationDocument createMany
   */
  export type RegistrationDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistrationDocuments.
     */
    data: RegistrationDocumentCreateManyInput | RegistrationDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistrationDocument createManyAndReturn
   */
  export type RegistrationDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RegistrationDocuments.
     */
    data: RegistrationDocumentCreateManyInput | RegistrationDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistrationDocument update
   */
  export type RegistrationDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistrationDocument.
     */
    data: XOR<RegistrationDocumentUpdateInput, RegistrationDocumentUncheckedUpdateInput>
    /**
     * Choose, which RegistrationDocument to update.
     */
    where: RegistrationDocumentWhereUniqueInput
  }

  /**
   * RegistrationDocument updateMany
   */
  export type RegistrationDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistrationDocuments.
     */
    data: XOR<RegistrationDocumentUpdateManyMutationInput, RegistrationDocumentUncheckedUpdateManyInput>
    /**
     * Filter which RegistrationDocuments to update
     */
    where?: RegistrationDocumentWhereInput
  }

  /**
   * RegistrationDocument upsert
   */
  export type RegistrationDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistrationDocument to update in case it exists.
     */
    where: RegistrationDocumentWhereUniqueInput
    /**
     * In case the RegistrationDocument found by the `where` argument doesn't exist, create a new RegistrationDocument with this data.
     */
    create: XOR<RegistrationDocumentCreateInput, RegistrationDocumentUncheckedCreateInput>
    /**
     * In case the RegistrationDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationDocumentUpdateInput, RegistrationDocumentUncheckedUpdateInput>
  }

  /**
   * RegistrationDocument delete
   */
  export type RegistrationDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * Filter which RegistrationDocument to delete.
     */
    where: RegistrationDocumentWhereUniqueInput
  }

  /**
   * RegistrationDocument deleteMany
   */
  export type RegistrationDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationDocuments to delete
     */
    where?: RegistrationDocumentWhereInput
  }

  /**
   * RegistrationDocument without action
   */
  export type RegistrationDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
  }


  /**
   * Model RegistrationStatusHistory
   */

  export type AggregateRegistrationStatusHistory = {
    _count: RegistrationStatusHistoryCountAggregateOutputType | null
    _min: RegistrationStatusHistoryMinAggregateOutputType | null
    _max: RegistrationStatusHistoryMaxAggregateOutputType | null
  }

  export type RegistrationStatusHistoryMinAggregateOutputType = {
    id: string | null
    registrationId: string | null
    fromStatus: string | null
    toStatus: string | null
    changedBy: string | null
    reason: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type RegistrationStatusHistoryMaxAggregateOutputType = {
    id: string | null
    registrationId: string | null
    fromStatus: string | null
    toStatus: string | null
    changedBy: string | null
    reason: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type RegistrationStatusHistoryCountAggregateOutputType = {
    id: number
    registrationId: number
    fromStatus: number
    toStatus: number
    changedBy: number
    reason: number
    notes: number
    createdAt: number
    _all: number
  }


  export type RegistrationStatusHistoryMinAggregateInputType = {
    id?: true
    registrationId?: true
    fromStatus?: true
    toStatus?: true
    changedBy?: true
    reason?: true
    notes?: true
    createdAt?: true
  }

  export type RegistrationStatusHistoryMaxAggregateInputType = {
    id?: true
    registrationId?: true
    fromStatus?: true
    toStatus?: true
    changedBy?: true
    reason?: true
    notes?: true
    createdAt?: true
  }

  export type RegistrationStatusHistoryCountAggregateInputType = {
    id?: true
    registrationId?: true
    fromStatus?: true
    toStatus?: true
    changedBy?: true
    reason?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type RegistrationStatusHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationStatusHistory to aggregate.
     */
    where?: RegistrationStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationStatusHistories to fetch.
     */
    orderBy?: RegistrationStatusHistoryOrderByWithRelationInput | RegistrationStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistrationStatusHistories
    **/
    _count?: true | RegistrationStatusHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationStatusHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationStatusHistoryMaxAggregateInputType
  }

  export type GetRegistrationStatusHistoryAggregateType<T extends RegistrationStatusHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistrationStatusHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistrationStatusHistory[P]>
      : GetScalarType<T[P], AggregateRegistrationStatusHistory[P]>
  }




  export type RegistrationStatusHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationStatusHistoryWhereInput
    orderBy?: RegistrationStatusHistoryOrderByWithAggregationInput | RegistrationStatusHistoryOrderByWithAggregationInput[]
    by: RegistrationStatusHistoryScalarFieldEnum[] | RegistrationStatusHistoryScalarFieldEnum
    having?: RegistrationStatusHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationStatusHistoryCountAggregateInputType | true
    _min?: RegistrationStatusHistoryMinAggregateInputType
    _max?: RegistrationStatusHistoryMaxAggregateInputType
  }

  export type RegistrationStatusHistoryGroupByOutputType = {
    id: string
    registrationId: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason: string | null
    notes: string | null
    createdAt: Date
    _count: RegistrationStatusHistoryCountAggregateOutputType | null
    _min: RegistrationStatusHistoryMinAggregateOutputType | null
    _max: RegistrationStatusHistoryMaxAggregateOutputType | null
  }

  type GetRegistrationStatusHistoryGroupByPayload<T extends RegistrationStatusHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationStatusHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationStatusHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationStatusHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationStatusHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationStatusHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    reason?: boolean
    notes?: boolean
    createdAt?: boolean
    registration?: boolean | PartnerRegistrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrationStatusHistory"]>

  export type RegistrationStatusHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    reason?: boolean
    notes?: boolean
    createdAt?: boolean
    registration?: boolean | PartnerRegistrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrationStatusHistory"]>

  export type RegistrationStatusHistorySelectScalar = {
    id?: boolean
    registrationId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    reason?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type RegistrationStatusHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registration?: boolean | PartnerRegistrationDefaultArgs<ExtArgs>
  }
  export type RegistrationStatusHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registration?: boolean | PartnerRegistrationDefaultArgs<ExtArgs>
  }

  export type $RegistrationStatusHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistrationStatusHistory"
    objects: {
      registration: Prisma.$PartnerRegistrationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      registrationId: string
      fromStatus: string
      toStatus: string
      changedBy: string
      reason: string | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["registrationStatusHistory"]>
    composites: {}
  }

  type RegistrationStatusHistoryGetPayload<S extends boolean | null | undefined | RegistrationStatusHistoryDefaultArgs> = $Result.GetResult<Prisma.$RegistrationStatusHistoryPayload, S>

  type RegistrationStatusHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegistrationStatusHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegistrationStatusHistoryCountAggregateInputType | true
    }

  export interface RegistrationStatusHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistrationStatusHistory'], meta: { name: 'RegistrationStatusHistory' } }
    /**
     * Find zero or one RegistrationStatusHistory that matches the filter.
     * @param {RegistrationStatusHistoryFindUniqueArgs} args - Arguments to find a RegistrationStatusHistory
     * @example
     * // Get one RegistrationStatusHistory
     * const registrationStatusHistory = await prisma.registrationStatusHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationStatusHistoryFindUniqueArgs>(args: SelectSubset<T, RegistrationStatusHistoryFindUniqueArgs<ExtArgs>>): Prisma__RegistrationStatusHistoryClient<$Result.GetResult<Prisma.$RegistrationStatusHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RegistrationStatusHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RegistrationStatusHistoryFindUniqueOrThrowArgs} args - Arguments to find a RegistrationStatusHistory
     * @example
     * // Get one RegistrationStatusHistory
     * const registrationStatusHistory = await prisma.registrationStatusHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationStatusHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationStatusHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationStatusHistoryClient<$Result.GetResult<Prisma.$RegistrationStatusHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RegistrationStatusHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStatusHistoryFindFirstArgs} args - Arguments to find a RegistrationStatusHistory
     * @example
     * // Get one RegistrationStatusHistory
     * const registrationStatusHistory = await prisma.registrationStatusHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationStatusHistoryFindFirstArgs>(args?: SelectSubset<T, RegistrationStatusHistoryFindFirstArgs<ExtArgs>>): Prisma__RegistrationStatusHistoryClient<$Result.GetResult<Prisma.$RegistrationStatusHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RegistrationStatusHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStatusHistoryFindFirstOrThrowArgs} args - Arguments to find a RegistrationStatusHistory
     * @example
     * // Get one RegistrationStatusHistory
     * const registrationStatusHistory = await prisma.registrationStatusHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationStatusHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationStatusHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationStatusHistoryClient<$Result.GetResult<Prisma.$RegistrationStatusHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RegistrationStatusHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStatusHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistrationStatusHistories
     * const registrationStatusHistories = await prisma.registrationStatusHistory.findMany()
     * 
     * // Get first 10 RegistrationStatusHistories
     * const registrationStatusHistories = await prisma.registrationStatusHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationStatusHistoryWithIdOnly = await prisma.registrationStatusHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationStatusHistoryFindManyArgs>(args?: SelectSubset<T, RegistrationStatusHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationStatusHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RegistrationStatusHistory.
     * @param {RegistrationStatusHistoryCreateArgs} args - Arguments to create a RegistrationStatusHistory.
     * @example
     * // Create one RegistrationStatusHistory
     * const RegistrationStatusHistory = await prisma.registrationStatusHistory.create({
     *   data: {
     *     // ... data to create a RegistrationStatusHistory
     *   }
     * })
     * 
     */
    create<T extends RegistrationStatusHistoryCreateArgs>(args: SelectSubset<T, RegistrationStatusHistoryCreateArgs<ExtArgs>>): Prisma__RegistrationStatusHistoryClient<$Result.GetResult<Prisma.$RegistrationStatusHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RegistrationStatusHistories.
     * @param {RegistrationStatusHistoryCreateManyArgs} args - Arguments to create many RegistrationStatusHistories.
     * @example
     * // Create many RegistrationStatusHistories
     * const registrationStatusHistory = await prisma.registrationStatusHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationStatusHistoryCreateManyArgs>(args?: SelectSubset<T, RegistrationStatusHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistrationStatusHistories and returns the data saved in the database.
     * @param {RegistrationStatusHistoryCreateManyAndReturnArgs} args - Arguments to create many RegistrationStatusHistories.
     * @example
     * // Create many RegistrationStatusHistories
     * const registrationStatusHistory = await prisma.registrationStatusHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistrationStatusHistories and only return the `id`
     * const registrationStatusHistoryWithIdOnly = await prisma.registrationStatusHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistrationStatusHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistrationStatusHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationStatusHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RegistrationStatusHistory.
     * @param {RegistrationStatusHistoryDeleteArgs} args - Arguments to delete one RegistrationStatusHistory.
     * @example
     * // Delete one RegistrationStatusHistory
     * const RegistrationStatusHistory = await prisma.registrationStatusHistory.delete({
     *   where: {
     *     // ... filter to delete one RegistrationStatusHistory
     *   }
     * })
     * 
     */
    delete<T extends RegistrationStatusHistoryDeleteArgs>(args: SelectSubset<T, RegistrationStatusHistoryDeleteArgs<ExtArgs>>): Prisma__RegistrationStatusHistoryClient<$Result.GetResult<Prisma.$RegistrationStatusHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RegistrationStatusHistory.
     * @param {RegistrationStatusHistoryUpdateArgs} args - Arguments to update one RegistrationStatusHistory.
     * @example
     * // Update one RegistrationStatusHistory
     * const registrationStatusHistory = await prisma.registrationStatusHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationStatusHistoryUpdateArgs>(args: SelectSubset<T, RegistrationStatusHistoryUpdateArgs<ExtArgs>>): Prisma__RegistrationStatusHistoryClient<$Result.GetResult<Prisma.$RegistrationStatusHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RegistrationStatusHistories.
     * @param {RegistrationStatusHistoryDeleteManyArgs} args - Arguments to filter RegistrationStatusHistories to delete.
     * @example
     * // Delete a few RegistrationStatusHistories
     * const { count } = await prisma.registrationStatusHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationStatusHistoryDeleteManyArgs>(args?: SelectSubset<T, RegistrationStatusHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistrationStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStatusHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistrationStatusHistories
     * const registrationStatusHistory = await prisma.registrationStatusHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationStatusHistoryUpdateManyArgs>(args: SelectSubset<T, RegistrationStatusHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegistrationStatusHistory.
     * @param {RegistrationStatusHistoryUpsertArgs} args - Arguments to update or create a RegistrationStatusHistory.
     * @example
     * // Update or create a RegistrationStatusHistory
     * const registrationStatusHistory = await prisma.registrationStatusHistory.upsert({
     *   create: {
     *     // ... data to create a RegistrationStatusHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistrationStatusHistory we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationStatusHistoryUpsertArgs>(args: SelectSubset<T, RegistrationStatusHistoryUpsertArgs<ExtArgs>>): Prisma__RegistrationStatusHistoryClient<$Result.GetResult<Prisma.$RegistrationStatusHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RegistrationStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStatusHistoryCountArgs} args - Arguments to filter RegistrationStatusHistories to count.
     * @example
     * // Count the number of RegistrationStatusHistories
     * const count = await prisma.registrationStatusHistory.count({
     *   where: {
     *     // ... the filter for the RegistrationStatusHistories we want to count
     *   }
     * })
    **/
    count<T extends RegistrationStatusHistoryCountArgs>(
      args?: Subset<T, RegistrationStatusHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationStatusHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistrationStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStatusHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistrationStatusHistoryAggregateArgs>(args: Subset<T, RegistrationStatusHistoryAggregateArgs>): Prisma.PrismaPromise<GetRegistrationStatusHistoryAggregateType<T>>

    /**
     * Group by RegistrationStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStatusHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegistrationStatusHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationStatusHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationStatusHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegistrationStatusHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationStatusHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistrationStatusHistory model
   */
  readonly fields: RegistrationStatusHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistrationStatusHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationStatusHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registration<T extends PartnerRegistrationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartnerRegistrationDefaultArgs<ExtArgs>>): Prisma__PartnerRegistrationClient<$Result.GetResult<Prisma.$PartnerRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RegistrationStatusHistory model
   */ 
  interface RegistrationStatusHistoryFieldRefs {
    readonly id: FieldRef<"RegistrationStatusHistory", 'String'>
    readonly registrationId: FieldRef<"RegistrationStatusHistory", 'String'>
    readonly fromStatus: FieldRef<"RegistrationStatusHistory", 'String'>
    readonly toStatus: FieldRef<"RegistrationStatusHistory", 'String'>
    readonly changedBy: FieldRef<"RegistrationStatusHistory", 'String'>
    readonly reason: FieldRef<"RegistrationStatusHistory", 'String'>
    readonly notes: FieldRef<"RegistrationStatusHistory", 'String'>
    readonly createdAt: FieldRef<"RegistrationStatusHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistrationStatusHistory findUnique
   */
  export type RegistrationStatusHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStatusHistory
     */
    select?: RegistrationStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationStatusHistory to fetch.
     */
    where: RegistrationStatusHistoryWhereUniqueInput
  }

  /**
   * RegistrationStatusHistory findUniqueOrThrow
   */
  export type RegistrationStatusHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStatusHistory
     */
    select?: RegistrationStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationStatusHistory to fetch.
     */
    where: RegistrationStatusHistoryWhereUniqueInput
  }

  /**
   * RegistrationStatusHistory findFirst
   */
  export type RegistrationStatusHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStatusHistory
     */
    select?: RegistrationStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationStatusHistory to fetch.
     */
    where?: RegistrationStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationStatusHistories to fetch.
     */
    orderBy?: RegistrationStatusHistoryOrderByWithRelationInput | RegistrationStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationStatusHistories.
     */
    cursor?: RegistrationStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationStatusHistories.
     */
    distinct?: RegistrationStatusHistoryScalarFieldEnum | RegistrationStatusHistoryScalarFieldEnum[]
  }

  /**
   * RegistrationStatusHistory findFirstOrThrow
   */
  export type RegistrationStatusHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStatusHistory
     */
    select?: RegistrationStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationStatusHistory to fetch.
     */
    where?: RegistrationStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationStatusHistories to fetch.
     */
    orderBy?: RegistrationStatusHistoryOrderByWithRelationInput | RegistrationStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationStatusHistories.
     */
    cursor?: RegistrationStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationStatusHistories.
     */
    distinct?: RegistrationStatusHistoryScalarFieldEnum | RegistrationStatusHistoryScalarFieldEnum[]
  }

  /**
   * RegistrationStatusHistory findMany
   */
  export type RegistrationStatusHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStatusHistory
     */
    select?: RegistrationStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationStatusHistories to fetch.
     */
    where?: RegistrationStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationStatusHistories to fetch.
     */
    orderBy?: RegistrationStatusHistoryOrderByWithRelationInput | RegistrationStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistrationStatusHistories.
     */
    cursor?: RegistrationStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationStatusHistories.
     */
    skip?: number
    distinct?: RegistrationStatusHistoryScalarFieldEnum | RegistrationStatusHistoryScalarFieldEnum[]
  }

  /**
   * RegistrationStatusHistory create
   */
  export type RegistrationStatusHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStatusHistory
     */
    select?: RegistrationStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistrationStatusHistory.
     */
    data: XOR<RegistrationStatusHistoryCreateInput, RegistrationStatusHistoryUncheckedCreateInput>
  }

  /**
   * RegistrationStatusHistory createMany
   */
  export type RegistrationStatusHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistrationStatusHistories.
     */
    data: RegistrationStatusHistoryCreateManyInput | RegistrationStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistrationStatusHistory createManyAndReturn
   */
  export type RegistrationStatusHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStatusHistory
     */
    select?: RegistrationStatusHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RegistrationStatusHistories.
     */
    data: RegistrationStatusHistoryCreateManyInput | RegistrationStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStatusHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistrationStatusHistory update
   */
  export type RegistrationStatusHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStatusHistory
     */
    select?: RegistrationStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistrationStatusHistory.
     */
    data: XOR<RegistrationStatusHistoryUpdateInput, RegistrationStatusHistoryUncheckedUpdateInput>
    /**
     * Choose, which RegistrationStatusHistory to update.
     */
    where: RegistrationStatusHistoryWhereUniqueInput
  }

  /**
   * RegistrationStatusHistory updateMany
   */
  export type RegistrationStatusHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistrationStatusHistories.
     */
    data: XOR<RegistrationStatusHistoryUpdateManyMutationInput, RegistrationStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RegistrationStatusHistories to update
     */
    where?: RegistrationStatusHistoryWhereInput
  }

  /**
   * RegistrationStatusHistory upsert
   */
  export type RegistrationStatusHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStatusHistory
     */
    select?: RegistrationStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStatusHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistrationStatusHistory to update in case it exists.
     */
    where: RegistrationStatusHistoryWhereUniqueInput
    /**
     * In case the RegistrationStatusHistory found by the `where` argument doesn't exist, create a new RegistrationStatusHistory with this data.
     */
    create: XOR<RegistrationStatusHistoryCreateInput, RegistrationStatusHistoryUncheckedCreateInput>
    /**
     * In case the RegistrationStatusHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationStatusHistoryUpdateInput, RegistrationStatusHistoryUncheckedUpdateInput>
  }

  /**
   * RegistrationStatusHistory delete
   */
  export type RegistrationStatusHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStatusHistory
     */
    select?: RegistrationStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter which RegistrationStatusHistory to delete.
     */
    where: RegistrationStatusHistoryWhereUniqueInput
  }

  /**
   * RegistrationStatusHistory deleteMany
   */
  export type RegistrationStatusHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationStatusHistories to delete
     */
    where?: RegistrationStatusHistoryWhereInput
  }

  /**
   * RegistrationStatusHistory without action
   */
  export type RegistrationStatusHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStatusHistory
     */
    select?: RegistrationStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStatusHistoryInclude<ExtArgs> | null
  }


  /**
   * Model PlatformCity
   */

  export type AggregatePlatformCity = {
    _count: PlatformCityCountAggregateOutputType | null
    _min: PlatformCityMinAggregateOutputType | null
    _max: PlatformCityMaxAggregateOutputType | null
  }

  export type PlatformCityMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    state: string | null
    stateCode: string | null
    district: string | null
    districtCode: string | null
    status: string | null
    managerName: string | null
    managerEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlatformCityMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    state: string | null
    stateCode: string | null
    district: string | null
    districtCode: string | null
    status: string | null
    managerName: string | null
    managerEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlatformCityCountAggregateOutputType = {
    id: number
    code: number
    name: number
    state: number
    stateCode: number
    district: number
    districtCode: number
    status: number
    managerName: number
    managerEmail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlatformCityMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    state?: true
    stateCode?: true
    district?: true
    districtCode?: true
    status?: true
    managerName?: true
    managerEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlatformCityMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    state?: true
    stateCode?: true
    district?: true
    districtCode?: true
    status?: true
    managerName?: true
    managerEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlatformCityCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    state?: true
    stateCode?: true
    district?: true
    districtCode?: true
    status?: true
    managerName?: true
    managerEmail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlatformCityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformCity to aggregate.
     */
    where?: PlatformCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformCities to fetch.
     */
    orderBy?: PlatformCityOrderByWithRelationInput | PlatformCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformCities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlatformCities
    **/
    _count?: true | PlatformCityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformCityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformCityMaxAggregateInputType
  }

  export type GetPlatformCityAggregateType<T extends PlatformCityAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatformCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatformCity[P]>
      : GetScalarType<T[P], AggregatePlatformCity[P]>
  }




  export type PlatformCityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformCityWhereInput
    orderBy?: PlatformCityOrderByWithAggregationInput | PlatformCityOrderByWithAggregationInput[]
    by: PlatformCityScalarFieldEnum[] | PlatformCityScalarFieldEnum
    having?: PlatformCityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformCityCountAggregateInputType | true
    _min?: PlatformCityMinAggregateInputType
    _max?: PlatformCityMaxAggregateInputType
  }

  export type PlatformCityGroupByOutputType = {
    id: string
    code: string
    name: string
    state: string
    stateCode: string
    district: string
    districtCode: string
    status: string
    managerName: string | null
    managerEmail: string | null
    createdAt: Date
    updatedAt: Date
    _count: PlatformCityCountAggregateOutputType | null
    _min: PlatformCityMinAggregateOutputType | null
    _max: PlatformCityMaxAggregateOutputType | null
  }

  type GetPlatformCityGroupByPayload<T extends PlatformCityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformCityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformCityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformCityGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformCityGroupByOutputType[P]>
        }
      >
    >


  export type PlatformCitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    state?: boolean
    stateCode?: boolean
    district?: boolean
    districtCode?: boolean
    status?: boolean
    managerName?: boolean
    managerEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    localities?: boolean | PlatformCity$localitiesArgs<ExtArgs>
    _count?: boolean | PlatformCityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platformCity"]>

  export type PlatformCitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    state?: boolean
    stateCode?: boolean
    district?: boolean
    districtCode?: boolean
    status?: boolean
    managerName?: boolean
    managerEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platformCity"]>

  export type PlatformCitySelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    state?: boolean
    stateCode?: boolean
    district?: boolean
    districtCode?: boolean
    status?: boolean
    managerName?: boolean
    managerEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlatformCityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localities?: boolean | PlatformCity$localitiesArgs<ExtArgs>
    _count?: boolean | PlatformCityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlatformCityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlatformCityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlatformCity"
    objects: {
      localities: Prisma.$ServiceableLocalityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      state: string
      stateCode: string
      district: string
      districtCode: string
      status: string
      managerName: string | null
      managerEmail: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["platformCity"]>
    composites: {}
  }

  type PlatformCityGetPayload<S extends boolean | null | undefined | PlatformCityDefaultArgs> = $Result.GetResult<Prisma.$PlatformCityPayload, S>

  type PlatformCityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlatformCityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlatformCityCountAggregateInputType | true
    }

  export interface PlatformCityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlatformCity'], meta: { name: 'PlatformCity' } }
    /**
     * Find zero or one PlatformCity that matches the filter.
     * @param {PlatformCityFindUniqueArgs} args - Arguments to find a PlatformCity
     * @example
     * // Get one PlatformCity
     * const platformCity = await prisma.platformCity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformCityFindUniqueArgs>(args: SelectSubset<T, PlatformCityFindUniqueArgs<ExtArgs>>): Prisma__PlatformCityClient<$Result.GetResult<Prisma.$PlatformCityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PlatformCity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlatformCityFindUniqueOrThrowArgs} args - Arguments to find a PlatformCity
     * @example
     * // Get one PlatformCity
     * const platformCity = await prisma.platformCity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformCityFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformCityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformCityClient<$Result.GetResult<Prisma.$PlatformCityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PlatformCity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCityFindFirstArgs} args - Arguments to find a PlatformCity
     * @example
     * // Get one PlatformCity
     * const platformCity = await prisma.platformCity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformCityFindFirstArgs>(args?: SelectSubset<T, PlatformCityFindFirstArgs<ExtArgs>>): Prisma__PlatformCityClient<$Result.GetResult<Prisma.$PlatformCityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PlatformCity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCityFindFirstOrThrowArgs} args - Arguments to find a PlatformCity
     * @example
     * // Get one PlatformCity
     * const platformCity = await prisma.platformCity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformCityFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformCityFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformCityClient<$Result.GetResult<Prisma.$PlatformCityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PlatformCities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlatformCities
     * const platformCities = await prisma.platformCity.findMany()
     * 
     * // Get first 10 PlatformCities
     * const platformCities = await prisma.platformCity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformCityWithIdOnly = await prisma.platformCity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformCityFindManyArgs>(args?: SelectSubset<T, PlatformCityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformCityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PlatformCity.
     * @param {PlatformCityCreateArgs} args - Arguments to create a PlatformCity.
     * @example
     * // Create one PlatformCity
     * const PlatformCity = await prisma.platformCity.create({
     *   data: {
     *     // ... data to create a PlatformCity
     *   }
     * })
     * 
     */
    create<T extends PlatformCityCreateArgs>(args: SelectSubset<T, PlatformCityCreateArgs<ExtArgs>>): Prisma__PlatformCityClient<$Result.GetResult<Prisma.$PlatformCityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PlatformCities.
     * @param {PlatformCityCreateManyArgs} args - Arguments to create many PlatformCities.
     * @example
     * // Create many PlatformCities
     * const platformCity = await prisma.platformCity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformCityCreateManyArgs>(args?: SelectSubset<T, PlatformCityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlatformCities and returns the data saved in the database.
     * @param {PlatformCityCreateManyAndReturnArgs} args - Arguments to create many PlatformCities.
     * @example
     * // Create many PlatformCities
     * const platformCity = await prisma.platformCity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlatformCities and only return the `id`
     * const platformCityWithIdOnly = await prisma.platformCity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformCityCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformCityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformCityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PlatformCity.
     * @param {PlatformCityDeleteArgs} args - Arguments to delete one PlatformCity.
     * @example
     * // Delete one PlatformCity
     * const PlatformCity = await prisma.platformCity.delete({
     *   where: {
     *     // ... filter to delete one PlatformCity
     *   }
     * })
     * 
     */
    delete<T extends PlatformCityDeleteArgs>(args: SelectSubset<T, PlatformCityDeleteArgs<ExtArgs>>): Prisma__PlatformCityClient<$Result.GetResult<Prisma.$PlatformCityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PlatformCity.
     * @param {PlatformCityUpdateArgs} args - Arguments to update one PlatformCity.
     * @example
     * // Update one PlatformCity
     * const platformCity = await prisma.platformCity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformCityUpdateArgs>(args: SelectSubset<T, PlatformCityUpdateArgs<ExtArgs>>): Prisma__PlatformCityClient<$Result.GetResult<Prisma.$PlatformCityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PlatformCities.
     * @param {PlatformCityDeleteManyArgs} args - Arguments to filter PlatformCities to delete.
     * @example
     * // Delete a few PlatformCities
     * const { count } = await prisma.platformCity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformCityDeleteManyArgs>(args?: SelectSubset<T, PlatformCityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformCities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlatformCities
     * const platformCity = await prisma.platformCity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformCityUpdateManyArgs>(args: SelectSubset<T, PlatformCityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlatformCity.
     * @param {PlatformCityUpsertArgs} args - Arguments to update or create a PlatformCity.
     * @example
     * // Update or create a PlatformCity
     * const platformCity = await prisma.platformCity.upsert({
     *   create: {
     *     // ... data to create a PlatformCity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlatformCity we want to update
     *   }
     * })
     */
    upsert<T extends PlatformCityUpsertArgs>(args: SelectSubset<T, PlatformCityUpsertArgs<ExtArgs>>): Prisma__PlatformCityClient<$Result.GetResult<Prisma.$PlatformCityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PlatformCities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCityCountArgs} args - Arguments to filter PlatformCities to count.
     * @example
     * // Count the number of PlatformCities
     * const count = await prisma.platformCity.count({
     *   where: {
     *     // ... the filter for the PlatformCities we want to count
     *   }
     * })
    **/
    count<T extends PlatformCityCountArgs>(
      args?: Subset<T, PlatformCityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformCityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlatformCity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatformCityAggregateArgs>(args: Subset<T, PlatformCityAggregateArgs>): Prisma.PrismaPromise<GetPlatformCityAggregateType<T>>

    /**
     * Group by PlatformCity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatformCityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformCityGroupByArgs['orderBy'] }
        : { orderBy?: PlatformCityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformCityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlatformCity model
   */
  readonly fields: PlatformCityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlatformCity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformCityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    localities<T extends PlatformCity$localitiesArgs<ExtArgs> = {}>(args?: Subset<T, PlatformCity$localitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceableLocalityPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlatformCity model
   */ 
  interface PlatformCityFieldRefs {
    readonly id: FieldRef<"PlatformCity", 'String'>
    readonly code: FieldRef<"PlatformCity", 'String'>
    readonly name: FieldRef<"PlatformCity", 'String'>
    readonly state: FieldRef<"PlatformCity", 'String'>
    readonly stateCode: FieldRef<"PlatformCity", 'String'>
    readonly district: FieldRef<"PlatformCity", 'String'>
    readonly districtCode: FieldRef<"PlatformCity", 'String'>
    readonly status: FieldRef<"PlatformCity", 'String'>
    readonly managerName: FieldRef<"PlatformCity", 'String'>
    readonly managerEmail: FieldRef<"PlatformCity", 'String'>
    readonly createdAt: FieldRef<"PlatformCity", 'DateTime'>
    readonly updatedAt: FieldRef<"PlatformCity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlatformCity findUnique
   */
  export type PlatformCityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCity
     */
    select?: PlatformCitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformCityInclude<ExtArgs> | null
    /**
     * Filter, which PlatformCity to fetch.
     */
    where: PlatformCityWhereUniqueInput
  }

  /**
   * PlatformCity findUniqueOrThrow
   */
  export type PlatformCityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCity
     */
    select?: PlatformCitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformCityInclude<ExtArgs> | null
    /**
     * Filter, which PlatformCity to fetch.
     */
    where: PlatformCityWhereUniqueInput
  }

  /**
   * PlatformCity findFirst
   */
  export type PlatformCityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCity
     */
    select?: PlatformCitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformCityInclude<ExtArgs> | null
    /**
     * Filter, which PlatformCity to fetch.
     */
    where?: PlatformCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformCities to fetch.
     */
    orderBy?: PlatformCityOrderByWithRelationInput | PlatformCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformCities.
     */
    cursor?: PlatformCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformCities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformCities.
     */
    distinct?: PlatformCityScalarFieldEnum | PlatformCityScalarFieldEnum[]
  }

  /**
   * PlatformCity findFirstOrThrow
   */
  export type PlatformCityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCity
     */
    select?: PlatformCitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformCityInclude<ExtArgs> | null
    /**
     * Filter, which PlatformCity to fetch.
     */
    where?: PlatformCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformCities to fetch.
     */
    orderBy?: PlatformCityOrderByWithRelationInput | PlatformCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformCities.
     */
    cursor?: PlatformCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformCities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformCities.
     */
    distinct?: PlatformCityScalarFieldEnum | PlatformCityScalarFieldEnum[]
  }

  /**
   * PlatformCity findMany
   */
  export type PlatformCityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCity
     */
    select?: PlatformCitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformCityInclude<ExtArgs> | null
    /**
     * Filter, which PlatformCities to fetch.
     */
    where?: PlatformCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformCities to fetch.
     */
    orderBy?: PlatformCityOrderByWithRelationInput | PlatformCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlatformCities.
     */
    cursor?: PlatformCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformCities.
     */
    skip?: number
    distinct?: PlatformCityScalarFieldEnum | PlatformCityScalarFieldEnum[]
  }

  /**
   * PlatformCity create
   */
  export type PlatformCityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCity
     */
    select?: PlatformCitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformCityInclude<ExtArgs> | null
    /**
     * The data needed to create a PlatformCity.
     */
    data: XOR<PlatformCityCreateInput, PlatformCityUncheckedCreateInput>
  }

  /**
   * PlatformCity createMany
   */
  export type PlatformCityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlatformCities.
     */
    data: PlatformCityCreateManyInput | PlatformCityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformCity createManyAndReturn
   */
  export type PlatformCityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCity
     */
    select?: PlatformCitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PlatformCities.
     */
    data: PlatformCityCreateManyInput | PlatformCityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformCity update
   */
  export type PlatformCityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCity
     */
    select?: PlatformCitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformCityInclude<ExtArgs> | null
    /**
     * The data needed to update a PlatformCity.
     */
    data: XOR<PlatformCityUpdateInput, PlatformCityUncheckedUpdateInput>
    /**
     * Choose, which PlatformCity to update.
     */
    where: PlatformCityWhereUniqueInput
  }

  /**
   * PlatformCity updateMany
   */
  export type PlatformCityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlatformCities.
     */
    data: XOR<PlatformCityUpdateManyMutationInput, PlatformCityUncheckedUpdateManyInput>
    /**
     * Filter which PlatformCities to update
     */
    where?: PlatformCityWhereInput
  }

  /**
   * PlatformCity upsert
   */
  export type PlatformCityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCity
     */
    select?: PlatformCitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformCityInclude<ExtArgs> | null
    /**
     * The filter to search for the PlatformCity to update in case it exists.
     */
    where: PlatformCityWhereUniqueInput
    /**
     * In case the PlatformCity found by the `where` argument doesn't exist, create a new PlatformCity with this data.
     */
    create: XOR<PlatformCityCreateInput, PlatformCityUncheckedCreateInput>
    /**
     * In case the PlatformCity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformCityUpdateInput, PlatformCityUncheckedUpdateInput>
  }

  /**
   * PlatformCity delete
   */
  export type PlatformCityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCity
     */
    select?: PlatformCitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformCityInclude<ExtArgs> | null
    /**
     * Filter which PlatformCity to delete.
     */
    where: PlatformCityWhereUniqueInput
  }

  /**
   * PlatformCity deleteMany
   */
  export type PlatformCityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformCities to delete
     */
    where?: PlatformCityWhereInput
  }

  /**
   * PlatformCity.localities
   */
  export type PlatformCity$localitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceableLocality
     */
    select?: ServiceableLocalitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceableLocalityInclude<ExtArgs> | null
    where?: ServiceableLocalityWhereInput
    orderBy?: ServiceableLocalityOrderByWithRelationInput | ServiceableLocalityOrderByWithRelationInput[]
    cursor?: ServiceableLocalityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceableLocalityScalarFieldEnum | ServiceableLocalityScalarFieldEnum[]
  }

  /**
   * PlatformCity without action
   */
  export type PlatformCityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCity
     */
    select?: PlatformCitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformCityInclude<ExtArgs> | null
  }


  /**
   * Model ServiceableLocality
   */

  export type AggregateServiceableLocality = {
    _count: ServiceableLocalityCountAggregateOutputType | null
    _avg: ServiceableLocalityAvgAggregateOutputType | null
    _sum: ServiceableLocalitySumAggregateOutputType | null
    _min: ServiceableLocalityMinAggregateOutputType | null
    _max: ServiceableLocalityMaxAggregateOutputType | null
  }

  export type ServiceableLocalityAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    radiusMeters: number | null
  }

  export type ServiceableLocalitySumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    radiusMeters: number | null
  }

  export type ServiceableLocalityMinAggregateOutputType = {
    id: string | null
    name: string | null
    pincode: string | null
    cityCode: string | null
    cityName: string | null
    district: string | null
    state: string | null
    latitude: number | null
    longitude: number | null
    radiusMeters: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceableLocalityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    pincode: string | null
    cityCode: string | null
    cityName: string | null
    district: string | null
    state: string | null
    latitude: number | null
    longitude: number | null
    radiusMeters: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceableLocalityCountAggregateOutputType = {
    id: number
    name: number
    pincode: number
    cityCode: number
    cityName: number
    district: number
    state: number
    latitude: number
    longitude: number
    radiusMeters: number
    status: number
    geoJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceableLocalityAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    radiusMeters?: true
  }

  export type ServiceableLocalitySumAggregateInputType = {
    latitude?: true
    longitude?: true
    radiusMeters?: true
  }

  export type ServiceableLocalityMinAggregateInputType = {
    id?: true
    name?: true
    pincode?: true
    cityCode?: true
    cityName?: true
    district?: true
    state?: true
    latitude?: true
    longitude?: true
    radiusMeters?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceableLocalityMaxAggregateInputType = {
    id?: true
    name?: true
    pincode?: true
    cityCode?: true
    cityName?: true
    district?: true
    state?: true
    latitude?: true
    longitude?: true
    radiusMeters?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceableLocalityCountAggregateInputType = {
    id?: true
    name?: true
    pincode?: true
    cityCode?: true
    cityName?: true
    district?: true
    state?: true
    latitude?: true
    longitude?: true
    radiusMeters?: true
    status?: true
    geoJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceableLocalityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceableLocality to aggregate.
     */
    where?: ServiceableLocalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceableLocalities to fetch.
     */
    orderBy?: ServiceableLocalityOrderByWithRelationInput | ServiceableLocalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceableLocalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceableLocalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceableLocalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceableLocalities
    **/
    _count?: true | ServiceableLocalityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceableLocalityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceableLocalitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceableLocalityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceableLocalityMaxAggregateInputType
  }

  export type GetServiceableLocalityAggregateType<T extends ServiceableLocalityAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceableLocality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceableLocality[P]>
      : GetScalarType<T[P], AggregateServiceableLocality[P]>
  }




  export type ServiceableLocalityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceableLocalityWhereInput
    orderBy?: ServiceableLocalityOrderByWithAggregationInput | ServiceableLocalityOrderByWithAggregationInput[]
    by: ServiceableLocalityScalarFieldEnum[] | ServiceableLocalityScalarFieldEnum
    having?: ServiceableLocalityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceableLocalityCountAggregateInputType | true
    _avg?: ServiceableLocalityAvgAggregateInputType
    _sum?: ServiceableLocalitySumAggregateInputType
    _min?: ServiceableLocalityMinAggregateInputType
    _max?: ServiceableLocalityMaxAggregateInputType
  }

  export type ServiceableLocalityGroupByOutputType = {
    id: string
    name: string
    pincode: string
    cityCode: string
    cityName: string
    district: string
    state: string
    latitude: number
    longitude: number
    radiusMeters: number
    status: string
    geoJson: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ServiceableLocalityCountAggregateOutputType | null
    _avg: ServiceableLocalityAvgAggregateOutputType | null
    _sum: ServiceableLocalitySumAggregateOutputType | null
    _min: ServiceableLocalityMinAggregateOutputType | null
    _max: ServiceableLocalityMaxAggregateOutputType | null
  }

  type GetServiceableLocalityGroupByPayload<T extends ServiceableLocalityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceableLocalityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceableLocalityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceableLocalityGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceableLocalityGroupByOutputType[P]>
        }
      >
    >


  export type ServiceableLocalitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pincode?: boolean
    cityCode?: boolean
    cityName?: boolean
    district?: boolean
    state?: boolean
    latitude?: boolean
    longitude?: boolean
    radiusMeters?: boolean
    status?: boolean
    geoJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    city?: boolean | ServiceableLocality$cityArgs<ExtArgs>
  }, ExtArgs["result"]["serviceableLocality"]>

  export type ServiceableLocalitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pincode?: boolean
    cityCode?: boolean
    cityName?: boolean
    district?: boolean
    state?: boolean
    latitude?: boolean
    longitude?: boolean
    radiusMeters?: boolean
    status?: boolean
    geoJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    city?: boolean | ServiceableLocality$cityArgs<ExtArgs>
  }, ExtArgs["result"]["serviceableLocality"]>

  export type ServiceableLocalitySelectScalar = {
    id?: boolean
    name?: boolean
    pincode?: boolean
    cityCode?: boolean
    cityName?: boolean
    district?: boolean
    state?: boolean
    latitude?: boolean
    longitude?: boolean
    radiusMeters?: boolean
    status?: boolean
    geoJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceableLocalityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | ServiceableLocality$cityArgs<ExtArgs>
  }
  export type ServiceableLocalityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | ServiceableLocality$cityArgs<ExtArgs>
  }

  export type $ServiceableLocalityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceableLocality"
    objects: {
      city: Prisma.$PlatformCityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      pincode: string
      cityCode: string
      cityName: string
      district: string
      state: string
      latitude: number
      longitude: number
      radiusMeters: number
      status: string
      geoJson: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceableLocality"]>
    composites: {}
  }

  type ServiceableLocalityGetPayload<S extends boolean | null | undefined | ServiceableLocalityDefaultArgs> = $Result.GetResult<Prisma.$ServiceableLocalityPayload, S>

  type ServiceableLocalityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceableLocalityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceableLocalityCountAggregateInputType | true
    }

  export interface ServiceableLocalityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceableLocality'], meta: { name: 'ServiceableLocality' } }
    /**
     * Find zero or one ServiceableLocality that matches the filter.
     * @param {ServiceableLocalityFindUniqueArgs} args - Arguments to find a ServiceableLocality
     * @example
     * // Get one ServiceableLocality
     * const serviceableLocality = await prisma.serviceableLocality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceableLocalityFindUniqueArgs>(args: SelectSubset<T, ServiceableLocalityFindUniqueArgs<ExtArgs>>): Prisma__ServiceableLocalityClient<$Result.GetResult<Prisma.$ServiceableLocalityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ServiceableLocality that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceableLocalityFindUniqueOrThrowArgs} args - Arguments to find a ServiceableLocality
     * @example
     * // Get one ServiceableLocality
     * const serviceableLocality = await prisma.serviceableLocality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceableLocalityFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceableLocalityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceableLocalityClient<$Result.GetResult<Prisma.$ServiceableLocalityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ServiceableLocality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceableLocalityFindFirstArgs} args - Arguments to find a ServiceableLocality
     * @example
     * // Get one ServiceableLocality
     * const serviceableLocality = await prisma.serviceableLocality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceableLocalityFindFirstArgs>(args?: SelectSubset<T, ServiceableLocalityFindFirstArgs<ExtArgs>>): Prisma__ServiceableLocalityClient<$Result.GetResult<Prisma.$ServiceableLocalityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ServiceableLocality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceableLocalityFindFirstOrThrowArgs} args - Arguments to find a ServiceableLocality
     * @example
     * // Get one ServiceableLocality
     * const serviceableLocality = await prisma.serviceableLocality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceableLocalityFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceableLocalityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceableLocalityClient<$Result.GetResult<Prisma.$ServiceableLocalityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ServiceableLocalities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceableLocalityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceableLocalities
     * const serviceableLocalities = await prisma.serviceableLocality.findMany()
     * 
     * // Get first 10 ServiceableLocalities
     * const serviceableLocalities = await prisma.serviceableLocality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceableLocalityWithIdOnly = await prisma.serviceableLocality.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceableLocalityFindManyArgs>(args?: SelectSubset<T, ServiceableLocalityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceableLocalityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ServiceableLocality.
     * @param {ServiceableLocalityCreateArgs} args - Arguments to create a ServiceableLocality.
     * @example
     * // Create one ServiceableLocality
     * const ServiceableLocality = await prisma.serviceableLocality.create({
     *   data: {
     *     // ... data to create a ServiceableLocality
     *   }
     * })
     * 
     */
    create<T extends ServiceableLocalityCreateArgs>(args: SelectSubset<T, ServiceableLocalityCreateArgs<ExtArgs>>): Prisma__ServiceableLocalityClient<$Result.GetResult<Prisma.$ServiceableLocalityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ServiceableLocalities.
     * @param {ServiceableLocalityCreateManyArgs} args - Arguments to create many ServiceableLocalities.
     * @example
     * // Create many ServiceableLocalities
     * const serviceableLocality = await prisma.serviceableLocality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceableLocalityCreateManyArgs>(args?: SelectSubset<T, ServiceableLocalityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceableLocalities and returns the data saved in the database.
     * @param {ServiceableLocalityCreateManyAndReturnArgs} args - Arguments to create many ServiceableLocalities.
     * @example
     * // Create many ServiceableLocalities
     * const serviceableLocality = await prisma.serviceableLocality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceableLocalities and only return the `id`
     * const serviceableLocalityWithIdOnly = await prisma.serviceableLocality.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceableLocalityCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceableLocalityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceableLocalityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ServiceableLocality.
     * @param {ServiceableLocalityDeleteArgs} args - Arguments to delete one ServiceableLocality.
     * @example
     * // Delete one ServiceableLocality
     * const ServiceableLocality = await prisma.serviceableLocality.delete({
     *   where: {
     *     // ... filter to delete one ServiceableLocality
     *   }
     * })
     * 
     */
    delete<T extends ServiceableLocalityDeleteArgs>(args: SelectSubset<T, ServiceableLocalityDeleteArgs<ExtArgs>>): Prisma__ServiceableLocalityClient<$Result.GetResult<Prisma.$ServiceableLocalityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ServiceableLocality.
     * @param {ServiceableLocalityUpdateArgs} args - Arguments to update one ServiceableLocality.
     * @example
     * // Update one ServiceableLocality
     * const serviceableLocality = await prisma.serviceableLocality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceableLocalityUpdateArgs>(args: SelectSubset<T, ServiceableLocalityUpdateArgs<ExtArgs>>): Prisma__ServiceableLocalityClient<$Result.GetResult<Prisma.$ServiceableLocalityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ServiceableLocalities.
     * @param {ServiceableLocalityDeleteManyArgs} args - Arguments to filter ServiceableLocalities to delete.
     * @example
     * // Delete a few ServiceableLocalities
     * const { count } = await prisma.serviceableLocality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceableLocalityDeleteManyArgs>(args?: SelectSubset<T, ServiceableLocalityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceableLocalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceableLocalityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceableLocalities
     * const serviceableLocality = await prisma.serviceableLocality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceableLocalityUpdateManyArgs>(args: SelectSubset<T, ServiceableLocalityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceableLocality.
     * @param {ServiceableLocalityUpsertArgs} args - Arguments to update or create a ServiceableLocality.
     * @example
     * // Update or create a ServiceableLocality
     * const serviceableLocality = await prisma.serviceableLocality.upsert({
     *   create: {
     *     // ... data to create a ServiceableLocality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceableLocality we want to update
     *   }
     * })
     */
    upsert<T extends ServiceableLocalityUpsertArgs>(args: SelectSubset<T, ServiceableLocalityUpsertArgs<ExtArgs>>): Prisma__ServiceableLocalityClient<$Result.GetResult<Prisma.$ServiceableLocalityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ServiceableLocalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceableLocalityCountArgs} args - Arguments to filter ServiceableLocalities to count.
     * @example
     * // Count the number of ServiceableLocalities
     * const count = await prisma.serviceableLocality.count({
     *   where: {
     *     // ... the filter for the ServiceableLocalities we want to count
     *   }
     * })
    **/
    count<T extends ServiceableLocalityCountArgs>(
      args?: Subset<T, ServiceableLocalityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceableLocalityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceableLocality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceableLocalityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceableLocalityAggregateArgs>(args: Subset<T, ServiceableLocalityAggregateArgs>): Prisma.PrismaPromise<GetServiceableLocalityAggregateType<T>>

    /**
     * Group by ServiceableLocality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceableLocalityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceableLocalityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceableLocalityGroupByArgs['orderBy'] }
        : { orderBy?: ServiceableLocalityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceableLocalityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceableLocalityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceableLocality model
   */
  readonly fields: ServiceableLocalityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceableLocality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceableLocalityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends ServiceableLocality$cityArgs<ExtArgs> = {}>(args?: Subset<T, ServiceableLocality$cityArgs<ExtArgs>>): Prisma__PlatformCityClient<$Result.GetResult<Prisma.$PlatformCityPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceableLocality model
   */ 
  interface ServiceableLocalityFieldRefs {
    readonly id: FieldRef<"ServiceableLocality", 'String'>
    readonly name: FieldRef<"ServiceableLocality", 'String'>
    readonly pincode: FieldRef<"ServiceableLocality", 'String'>
    readonly cityCode: FieldRef<"ServiceableLocality", 'String'>
    readonly cityName: FieldRef<"ServiceableLocality", 'String'>
    readonly district: FieldRef<"ServiceableLocality", 'String'>
    readonly state: FieldRef<"ServiceableLocality", 'String'>
    readonly latitude: FieldRef<"ServiceableLocality", 'Float'>
    readonly longitude: FieldRef<"ServiceableLocality", 'Float'>
    readonly radiusMeters: FieldRef<"ServiceableLocality", 'Int'>
    readonly status: FieldRef<"ServiceableLocality", 'String'>
    readonly geoJson: FieldRef<"ServiceableLocality", 'Json'>
    readonly createdAt: FieldRef<"ServiceableLocality", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceableLocality", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceableLocality findUnique
   */
  export type ServiceableLocalityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceableLocality
     */
    select?: ServiceableLocalitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceableLocalityInclude<ExtArgs> | null
    /**
     * Filter, which ServiceableLocality to fetch.
     */
    where: ServiceableLocalityWhereUniqueInput
  }

  /**
   * ServiceableLocality findUniqueOrThrow
   */
  export type ServiceableLocalityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceableLocality
     */
    select?: ServiceableLocalitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceableLocalityInclude<ExtArgs> | null
    /**
     * Filter, which ServiceableLocality to fetch.
     */
    where: ServiceableLocalityWhereUniqueInput
  }

  /**
   * ServiceableLocality findFirst
   */
  export type ServiceableLocalityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceableLocality
     */
    select?: ServiceableLocalitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceableLocalityInclude<ExtArgs> | null
    /**
     * Filter, which ServiceableLocality to fetch.
     */
    where?: ServiceableLocalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceableLocalities to fetch.
     */
    orderBy?: ServiceableLocalityOrderByWithRelationInput | ServiceableLocalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceableLocalities.
     */
    cursor?: ServiceableLocalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceableLocalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceableLocalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceableLocalities.
     */
    distinct?: ServiceableLocalityScalarFieldEnum | ServiceableLocalityScalarFieldEnum[]
  }

  /**
   * ServiceableLocality findFirstOrThrow
   */
  export type ServiceableLocalityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceableLocality
     */
    select?: ServiceableLocalitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceableLocalityInclude<ExtArgs> | null
    /**
     * Filter, which ServiceableLocality to fetch.
     */
    where?: ServiceableLocalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceableLocalities to fetch.
     */
    orderBy?: ServiceableLocalityOrderByWithRelationInput | ServiceableLocalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceableLocalities.
     */
    cursor?: ServiceableLocalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceableLocalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceableLocalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceableLocalities.
     */
    distinct?: ServiceableLocalityScalarFieldEnum | ServiceableLocalityScalarFieldEnum[]
  }

  /**
   * ServiceableLocality findMany
   */
  export type ServiceableLocalityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceableLocality
     */
    select?: ServiceableLocalitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceableLocalityInclude<ExtArgs> | null
    /**
     * Filter, which ServiceableLocalities to fetch.
     */
    where?: ServiceableLocalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceableLocalities to fetch.
     */
    orderBy?: ServiceableLocalityOrderByWithRelationInput | ServiceableLocalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceableLocalities.
     */
    cursor?: ServiceableLocalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceableLocalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceableLocalities.
     */
    skip?: number
    distinct?: ServiceableLocalityScalarFieldEnum | ServiceableLocalityScalarFieldEnum[]
  }

  /**
   * ServiceableLocality create
   */
  export type ServiceableLocalityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceableLocality
     */
    select?: ServiceableLocalitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceableLocalityInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceableLocality.
     */
    data: XOR<ServiceableLocalityCreateInput, ServiceableLocalityUncheckedCreateInput>
  }

  /**
   * ServiceableLocality createMany
   */
  export type ServiceableLocalityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceableLocalities.
     */
    data: ServiceableLocalityCreateManyInput | ServiceableLocalityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceableLocality createManyAndReturn
   */
  export type ServiceableLocalityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceableLocality
     */
    select?: ServiceableLocalitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ServiceableLocalities.
     */
    data: ServiceableLocalityCreateManyInput | ServiceableLocalityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceableLocalityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceableLocality update
   */
  export type ServiceableLocalityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceableLocality
     */
    select?: ServiceableLocalitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceableLocalityInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceableLocality.
     */
    data: XOR<ServiceableLocalityUpdateInput, ServiceableLocalityUncheckedUpdateInput>
    /**
     * Choose, which ServiceableLocality to update.
     */
    where: ServiceableLocalityWhereUniqueInput
  }

  /**
   * ServiceableLocality updateMany
   */
  export type ServiceableLocalityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceableLocalities.
     */
    data: XOR<ServiceableLocalityUpdateManyMutationInput, ServiceableLocalityUncheckedUpdateManyInput>
    /**
     * Filter which ServiceableLocalities to update
     */
    where?: ServiceableLocalityWhereInput
  }

  /**
   * ServiceableLocality upsert
   */
  export type ServiceableLocalityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceableLocality
     */
    select?: ServiceableLocalitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceableLocalityInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceableLocality to update in case it exists.
     */
    where: ServiceableLocalityWhereUniqueInput
    /**
     * In case the ServiceableLocality found by the `where` argument doesn't exist, create a new ServiceableLocality with this data.
     */
    create: XOR<ServiceableLocalityCreateInput, ServiceableLocalityUncheckedCreateInput>
    /**
     * In case the ServiceableLocality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceableLocalityUpdateInput, ServiceableLocalityUncheckedUpdateInput>
  }

  /**
   * ServiceableLocality delete
   */
  export type ServiceableLocalityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceableLocality
     */
    select?: ServiceableLocalitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceableLocalityInclude<ExtArgs> | null
    /**
     * Filter which ServiceableLocality to delete.
     */
    where: ServiceableLocalityWhereUniqueInput
  }

  /**
   * ServiceableLocality deleteMany
   */
  export type ServiceableLocalityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceableLocalities to delete
     */
    where?: ServiceableLocalityWhereInput
  }

  /**
   * ServiceableLocality.city
   */
  export type ServiceableLocality$cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCity
     */
    select?: PlatformCitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformCityInclude<ExtArgs> | null
    where?: PlatformCityWhereInput
  }

  /**
   * ServiceableLocality without action
   */
  export type ServiceableLocalityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceableLocality
     */
    select?: ServiceableLocalitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceableLocalityInclude<ExtArgs> | null
  }


  /**
   * Model ShopAuditLog
   */

  export type AggregateShopAuditLog = {
    _count: ShopAuditLogCountAggregateOutputType | null
    _min: ShopAuditLogMinAggregateOutputType | null
    _max: ShopAuditLogMaxAggregateOutputType | null
  }

  export type ShopAuditLogMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    outletId: string | null
    actorStaffId: string | null
    actorName: string | null
    actorRole: string | null
    authMode: string | null
    module: string | null
    action: string | null
    targetType: string | null
    targetId: string | null
    targetLabel: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type ShopAuditLogMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    outletId: string | null
    actorStaffId: string | null
    actorName: string | null
    actorRole: string | null
    authMode: string | null
    module: string | null
    action: string | null
    targetType: string | null
    targetId: string | null
    targetLabel: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type ShopAuditLogCountAggregateOutputType = {
    id: number
    tenantId: number
    outletId: number
    actorStaffId: number
    actorName: number
    actorRole: number
    authMode: number
    module: number
    action: number
    targetType: number
    targetId: number
    targetLabel: number
    beforeState: number
    afterState: number
    notes: number
    createdAt: number
    _all: number
  }


  export type ShopAuditLogMinAggregateInputType = {
    id?: true
    tenantId?: true
    outletId?: true
    actorStaffId?: true
    actorName?: true
    actorRole?: true
    authMode?: true
    module?: true
    action?: true
    targetType?: true
    targetId?: true
    targetLabel?: true
    notes?: true
    createdAt?: true
  }

  export type ShopAuditLogMaxAggregateInputType = {
    id?: true
    tenantId?: true
    outletId?: true
    actorStaffId?: true
    actorName?: true
    actorRole?: true
    authMode?: true
    module?: true
    action?: true
    targetType?: true
    targetId?: true
    targetLabel?: true
    notes?: true
    createdAt?: true
  }

  export type ShopAuditLogCountAggregateInputType = {
    id?: true
    tenantId?: true
    outletId?: true
    actorStaffId?: true
    actorName?: true
    actorRole?: true
    authMode?: true
    module?: true
    action?: true
    targetType?: true
    targetId?: true
    targetLabel?: true
    beforeState?: true
    afterState?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type ShopAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopAuditLog to aggregate.
     */
    where?: ShopAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopAuditLogs to fetch.
     */
    orderBy?: ShopAuditLogOrderByWithRelationInput | ShopAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopAuditLogs
    **/
    _count?: true | ShopAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopAuditLogMaxAggregateInputType
  }

  export type GetShopAuditLogAggregateType<T extends ShopAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateShopAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopAuditLog[P]>
      : GetScalarType<T[P], AggregateShopAuditLog[P]>
  }




  export type ShopAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopAuditLogWhereInput
    orderBy?: ShopAuditLogOrderByWithAggregationInput | ShopAuditLogOrderByWithAggregationInput[]
    by: ShopAuditLogScalarFieldEnum[] | ShopAuditLogScalarFieldEnum
    having?: ShopAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopAuditLogCountAggregateInputType | true
    _min?: ShopAuditLogMinAggregateInputType
    _max?: ShopAuditLogMaxAggregateInputType
  }

  export type ShopAuditLogGroupByOutputType = {
    id: string
    tenantId: string
    outletId: string | null
    actorStaffId: string
    actorName: string
    actorRole: string
    authMode: string
    module: string
    action: string
    targetType: string | null
    targetId: string | null
    targetLabel: string | null
    beforeState: JsonValue | null
    afterState: JsonValue | null
    notes: string | null
    createdAt: Date
    _count: ShopAuditLogCountAggregateOutputType | null
    _min: ShopAuditLogMinAggregateOutputType | null
    _max: ShopAuditLogMaxAggregateOutputType | null
  }

  type GetShopAuditLogGroupByPayload<T extends ShopAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], ShopAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type ShopAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    outletId?: boolean
    actorStaffId?: boolean
    actorName?: boolean
    actorRole?: boolean
    authMode?: boolean
    module?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    targetLabel?: boolean
    beforeState?: boolean
    afterState?: boolean
    notes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shopAuditLog"]>

  export type ShopAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    outletId?: boolean
    actorStaffId?: boolean
    actorName?: boolean
    actorRole?: boolean
    authMode?: boolean
    module?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    targetLabel?: boolean
    beforeState?: boolean
    afterState?: boolean
    notes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shopAuditLog"]>

  export type ShopAuditLogSelectScalar = {
    id?: boolean
    tenantId?: boolean
    outletId?: boolean
    actorStaffId?: boolean
    actorName?: boolean
    actorRole?: boolean
    authMode?: boolean
    module?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    targetLabel?: boolean
    beforeState?: boolean
    afterState?: boolean
    notes?: boolean
    createdAt?: boolean
  }


  export type $ShopAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopAuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      outletId: string | null
      actorStaffId: string
      actorName: string
      actorRole: string
      authMode: string
      module: string
      action: string
      targetType: string | null
      targetId: string | null
      targetLabel: string | null
      beforeState: Prisma.JsonValue | null
      afterState: Prisma.JsonValue | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["shopAuditLog"]>
    composites: {}
  }

  type ShopAuditLogGetPayload<S extends boolean | null | undefined | ShopAuditLogDefaultArgs> = $Result.GetResult<Prisma.$ShopAuditLogPayload, S>

  type ShopAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShopAuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShopAuditLogCountAggregateInputType | true
    }

  export interface ShopAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopAuditLog'], meta: { name: 'ShopAuditLog' } }
    /**
     * Find zero or one ShopAuditLog that matches the filter.
     * @param {ShopAuditLogFindUniqueArgs} args - Arguments to find a ShopAuditLog
     * @example
     * // Get one ShopAuditLog
     * const shopAuditLog = await prisma.shopAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopAuditLogFindUniqueArgs>(args: SelectSubset<T, ShopAuditLogFindUniqueArgs<ExtArgs>>): Prisma__ShopAuditLogClient<$Result.GetResult<Prisma.$ShopAuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ShopAuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ShopAuditLogFindUniqueOrThrowArgs} args - Arguments to find a ShopAuditLog
     * @example
     * // Get one ShopAuditLog
     * const shopAuditLog = await prisma.shopAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopAuditLogClient<$Result.GetResult<Prisma.$ShopAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ShopAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAuditLogFindFirstArgs} args - Arguments to find a ShopAuditLog
     * @example
     * // Get one ShopAuditLog
     * const shopAuditLog = await prisma.shopAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopAuditLogFindFirstArgs>(args?: SelectSubset<T, ShopAuditLogFindFirstArgs<ExtArgs>>): Prisma__ShopAuditLogClient<$Result.GetResult<Prisma.$ShopAuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ShopAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAuditLogFindFirstOrThrowArgs} args - Arguments to find a ShopAuditLog
     * @example
     * // Get one ShopAuditLog
     * const shopAuditLog = await prisma.shopAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopAuditLogClient<$Result.GetResult<Prisma.$ShopAuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ShopAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopAuditLogs
     * const shopAuditLogs = await prisma.shopAuditLog.findMany()
     * 
     * // Get first 10 ShopAuditLogs
     * const shopAuditLogs = await prisma.shopAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopAuditLogWithIdOnly = await prisma.shopAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopAuditLogFindManyArgs>(args?: SelectSubset<T, ShopAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopAuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ShopAuditLog.
     * @param {ShopAuditLogCreateArgs} args - Arguments to create a ShopAuditLog.
     * @example
     * // Create one ShopAuditLog
     * const ShopAuditLog = await prisma.shopAuditLog.create({
     *   data: {
     *     // ... data to create a ShopAuditLog
     *   }
     * })
     * 
     */
    create<T extends ShopAuditLogCreateArgs>(args: SelectSubset<T, ShopAuditLogCreateArgs<ExtArgs>>): Prisma__ShopAuditLogClient<$Result.GetResult<Prisma.$ShopAuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ShopAuditLogs.
     * @param {ShopAuditLogCreateManyArgs} args - Arguments to create many ShopAuditLogs.
     * @example
     * // Create many ShopAuditLogs
     * const shopAuditLog = await prisma.shopAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopAuditLogCreateManyArgs>(args?: SelectSubset<T, ShopAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShopAuditLogs and returns the data saved in the database.
     * @param {ShopAuditLogCreateManyAndReturnArgs} args - Arguments to create many ShopAuditLogs.
     * @example
     * // Create many ShopAuditLogs
     * const shopAuditLog = await prisma.shopAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShopAuditLogs and only return the `id`
     * const shopAuditLogWithIdOnly = await prisma.shopAuditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopAuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ShopAuditLog.
     * @param {ShopAuditLogDeleteArgs} args - Arguments to delete one ShopAuditLog.
     * @example
     * // Delete one ShopAuditLog
     * const ShopAuditLog = await prisma.shopAuditLog.delete({
     *   where: {
     *     // ... filter to delete one ShopAuditLog
     *   }
     * })
     * 
     */
    delete<T extends ShopAuditLogDeleteArgs>(args: SelectSubset<T, ShopAuditLogDeleteArgs<ExtArgs>>): Prisma__ShopAuditLogClient<$Result.GetResult<Prisma.$ShopAuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ShopAuditLog.
     * @param {ShopAuditLogUpdateArgs} args - Arguments to update one ShopAuditLog.
     * @example
     * // Update one ShopAuditLog
     * const shopAuditLog = await prisma.shopAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopAuditLogUpdateArgs>(args: SelectSubset<T, ShopAuditLogUpdateArgs<ExtArgs>>): Prisma__ShopAuditLogClient<$Result.GetResult<Prisma.$ShopAuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ShopAuditLogs.
     * @param {ShopAuditLogDeleteManyArgs} args - Arguments to filter ShopAuditLogs to delete.
     * @example
     * // Delete a few ShopAuditLogs
     * const { count } = await prisma.shopAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopAuditLogDeleteManyArgs>(args?: SelectSubset<T, ShopAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopAuditLogs
     * const shopAuditLog = await prisma.shopAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopAuditLogUpdateManyArgs>(args: SelectSubset<T, ShopAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopAuditLog.
     * @param {ShopAuditLogUpsertArgs} args - Arguments to update or create a ShopAuditLog.
     * @example
     * // Update or create a ShopAuditLog
     * const shopAuditLog = await prisma.shopAuditLog.upsert({
     *   create: {
     *     // ... data to create a ShopAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends ShopAuditLogUpsertArgs>(args: SelectSubset<T, ShopAuditLogUpsertArgs<ExtArgs>>): Prisma__ShopAuditLogClient<$Result.GetResult<Prisma.$ShopAuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ShopAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAuditLogCountArgs} args - Arguments to filter ShopAuditLogs to count.
     * @example
     * // Count the number of ShopAuditLogs
     * const count = await prisma.shopAuditLog.count({
     *   where: {
     *     // ... the filter for the ShopAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends ShopAuditLogCountArgs>(
      args?: Subset<T, ShopAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopAuditLogAggregateArgs>(args: Subset<T, ShopAuditLogAggregateArgs>): Prisma.PrismaPromise<GetShopAuditLogAggregateType<T>>

    /**
     * Group by ShopAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: ShopAuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopAuditLog model
   */
  readonly fields: ShopAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopAuditLog model
   */ 
  interface ShopAuditLogFieldRefs {
    readonly id: FieldRef<"ShopAuditLog", 'String'>
    readonly tenantId: FieldRef<"ShopAuditLog", 'String'>
    readonly outletId: FieldRef<"ShopAuditLog", 'String'>
    readonly actorStaffId: FieldRef<"ShopAuditLog", 'String'>
    readonly actorName: FieldRef<"ShopAuditLog", 'String'>
    readonly actorRole: FieldRef<"ShopAuditLog", 'String'>
    readonly authMode: FieldRef<"ShopAuditLog", 'String'>
    readonly module: FieldRef<"ShopAuditLog", 'String'>
    readonly action: FieldRef<"ShopAuditLog", 'String'>
    readonly targetType: FieldRef<"ShopAuditLog", 'String'>
    readonly targetId: FieldRef<"ShopAuditLog", 'String'>
    readonly targetLabel: FieldRef<"ShopAuditLog", 'String'>
    readonly beforeState: FieldRef<"ShopAuditLog", 'Json'>
    readonly afterState: FieldRef<"ShopAuditLog", 'Json'>
    readonly notes: FieldRef<"ShopAuditLog", 'String'>
    readonly createdAt: FieldRef<"ShopAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopAuditLog findUnique
   */
  export type ShopAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAuditLog
     */
    select?: ShopAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which ShopAuditLog to fetch.
     */
    where: ShopAuditLogWhereUniqueInput
  }

  /**
   * ShopAuditLog findUniqueOrThrow
   */
  export type ShopAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAuditLog
     */
    select?: ShopAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which ShopAuditLog to fetch.
     */
    where: ShopAuditLogWhereUniqueInput
  }

  /**
   * ShopAuditLog findFirst
   */
  export type ShopAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAuditLog
     */
    select?: ShopAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which ShopAuditLog to fetch.
     */
    where?: ShopAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopAuditLogs to fetch.
     */
    orderBy?: ShopAuditLogOrderByWithRelationInput | ShopAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopAuditLogs.
     */
    cursor?: ShopAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopAuditLogs.
     */
    distinct?: ShopAuditLogScalarFieldEnum | ShopAuditLogScalarFieldEnum[]
  }

  /**
   * ShopAuditLog findFirstOrThrow
   */
  export type ShopAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAuditLog
     */
    select?: ShopAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which ShopAuditLog to fetch.
     */
    where?: ShopAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopAuditLogs to fetch.
     */
    orderBy?: ShopAuditLogOrderByWithRelationInput | ShopAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopAuditLogs.
     */
    cursor?: ShopAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopAuditLogs.
     */
    distinct?: ShopAuditLogScalarFieldEnum | ShopAuditLogScalarFieldEnum[]
  }

  /**
   * ShopAuditLog findMany
   */
  export type ShopAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAuditLog
     */
    select?: ShopAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which ShopAuditLogs to fetch.
     */
    where?: ShopAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopAuditLogs to fetch.
     */
    orderBy?: ShopAuditLogOrderByWithRelationInput | ShopAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopAuditLogs.
     */
    cursor?: ShopAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopAuditLogs.
     */
    skip?: number
    distinct?: ShopAuditLogScalarFieldEnum | ShopAuditLogScalarFieldEnum[]
  }

  /**
   * ShopAuditLog create
   */
  export type ShopAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAuditLog
     */
    select?: ShopAuditLogSelect<ExtArgs> | null
    /**
     * The data needed to create a ShopAuditLog.
     */
    data: XOR<ShopAuditLogCreateInput, ShopAuditLogUncheckedCreateInput>
  }

  /**
   * ShopAuditLog createMany
   */
  export type ShopAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopAuditLogs.
     */
    data: ShopAuditLogCreateManyInput | ShopAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopAuditLog createManyAndReturn
   */
  export type ShopAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAuditLog
     */
    select?: ShopAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ShopAuditLogs.
     */
    data: ShopAuditLogCreateManyInput | ShopAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopAuditLog update
   */
  export type ShopAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAuditLog
     */
    select?: ShopAuditLogSelect<ExtArgs> | null
    /**
     * The data needed to update a ShopAuditLog.
     */
    data: XOR<ShopAuditLogUpdateInput, ShopAuditLogUncheckedUpdateInput>
    /**
     * Choose, which ShopAuditLog to update.
     */
    where: ShopAuditLogWhereUniqueInput
  }

  /**
   * ShopAuditLog updateMany
   */
  export type ShopAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopAuditLogs.
     */
    data: XOR<ShopAuditLogUpdateManyMutationInput, ShopAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which ShopAuditLogs to update
     */
    where?: ShopAuditLogWhereInput
  }

  /**
   * ShopAuditLog upsert
   */
  export type ShopAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAuditLog
     */
    select?: ShopAuditLogSelect<ExtArgs> | null
    /**
     * The filter to search for the ShopAuditLog to update in case it exists.
     */
    where: ShopAuditLogWhereUniqueInput
    /**
     * In case the ShopAuditLog found by the `where` argument doesn't exist, create a new ShopAuditLog with this data.
     */
    create: XOR<ShopAuditLogCreateInput, ShopAuditLogUncheckedCreateInput>
    /**
     * In case the ShopAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopAuditLogUpdateInput, ShopAuditLogUncheckedUpdateInput>
  }

  /**
   * ShopAuditLog delete
   */
  export type ShopAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAuditLog
     */
    select?: ShopAuditLogSelect<ExtArgs> | null
    /**
     * Filter which ShopAuditLog to delete.
     */
    where: ShopAuditLogWhereUniqueInput
  }

  /**
   * ShopAuditLog deleteMany
   */
  export type ShopAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopAuditLogs to delete
     */
    where?: ShopAuditLogWhereInput
  }

  /**
   * ShopAuditLog without action
   */
  export type ShopAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAuditLog
     */
    select?: ShopAuditLogSelect<ExtArgs> | null
  }


  /**
   * Model MarketingBanner
   */

  export type AggregateMarketingBanner = {
    _count: MarketingBannerCountAggregateOutputType | null
    _avg: MarketingBannerAvgAggregateOutputType | null
    _sum: MarketingBannerSumAggregateOutputType | null
    _min: MarketingBannerMinAggregateOutputType | null
    _max: MarketingBannerMaxAggregateOutputType | null
  }

  export type MarketingBannerAvgAggregateOutputType = {
    displayOrder: number | null
    clickCount: number | null
    impressionCount: number | null
  }

  export type MarketingBannerSumAggregateOutputType = {
    displayOrder: number | null
    clickCount: number | null
    impressionCount: number | null
  }

  export type MarketingBannerMinAggregateOutputType = {
    id: string | null
    title: string | null
    highlightText: string | null
    subtitle: string | null
    badgeText: string | null
    ctaLabel: string | null
    actionType: string | null
    actionTarget: string | null
    visualIcons: string | null
    imageUrl: string | null
    bgGradient: string | null
    textColor: string | null
    highlightColor: string | null
    cityCode: string | null
    displayOrder: number | null
    isActive: boolean | null
    startsAt: Date | null
    endsAt: Date | null
    clickCount: number | null
    impressionCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketingBannerMaxAggregateOutputType = {
    id: string | null
    title: string | null
    highlightText: string | null
    subtitle: string | null
    badgeText: string | null
    ctaLabel: string | null
    actionType: string | null
    actionTarget: string | null
    visualIcons: string | null
    imageUrl: string | null
    bgGradient: string | null
    textColor: string | null
    highlightColor: string | null
    cityCode: string | null
    displayOrder: number | null
    isActive: boolean | null
    startsAt: Date | null
    endsAt: Date | null
    clickCount: number | null
    impressionCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketingBannerCountAggregateOutputType = {
    id: number
    title: number
    highlightText: number
    subtitle: number
    badgeText: number
    ctaLabel: number
    actionType: number
    actionTarget: number
    visualIcons: number
    imageUrl: number
    bgGradient: number
    textColor: number
    highlightColor: number
    cityCode: number
    displayOrder: number
    isActive: number
    startsAt: number
    endsAt: number
    clickCount: number
    impressionCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MarketingBannerAvgAggregateInputType = {
    displayOrder?: true
    clickCount?: true
    impressionCount?: true
  }

  export type MarketingBannerSumAggregateInputType = {
    displayOrder?: true
    clickCount?: true
    impressionCount?: true
  }

  export type MarketingBannerMinAggregateInputType = {
    id?: true
    title?: true
    highlightText?: true
    subtitle?: true
    badgeText?: true
    ctaLabel?: true
    actionType?: true
    actionTarget?: true
    visualIcons?: true
    imageUrl?: true
    bgGradient?: true
    textColor?: true
    highlightColor?: true
    cityCode?: true
    displayOrder?: true
    isActive?: true
    startsAt?: true
    endsAt?: true
    clickCount?: true
    impressionCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketingBannerMaxAggregateInputType = {
    id?: true
    title?: true
    highlightText?: true
    subtitle?: true
    badgeText?: true
    ctaLabel?: true
    actionType?: true
    actionTarget?: true
    visualIcons?: true
    imageUrl?: true
    bgGradient?: true
    textColor?: true
    highlightColor?: true
    cityCode?: true
    displayOrder?: true
    isActive?: true
    startsAt?: true
    endsAt?: true
    clickCount?: true
    impressionCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketingBannerCountAggregateInputType = {
    id?: true
    title?: true
    highlightText?: true
    subtitle?: true
    badgeText?: true
    ctaLabel?: true
    actionType?: true
    actionTarget?: true
    visualIcons?: true
    imageUrl?: true
    bgGradient?: true
    textColor?: true
    highlightColor?: true
    cityCode?: true
    displayOrder?: true
    isActive?: true
    startsAt?: true
    endsAt?: true
    clickCount?: true
    impressionCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MarketingBannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingBanner to aggregate.
     */
    where?: MarketingBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingBanners to fetch.
     */
    orderBy?: MarketingBannerOrderByWithRelationInput | MarketingBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketingBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketingBanners
    **/
    _count?: true | MarketingBannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketingBannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketingBannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketingBannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketingBannerMaxAggregateInputType
  }

  export type GetMarketingBannerAggregateType<T extends MarketingBannerAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketingBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketingBanner[P]>
      : GetScalarType<T[P], AggregateMarketingBanner[P]>
  }




  export type MarketingBannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketingBannerWhereInput
    orderBy?: MarketingBannerOrderByWithAggregationInput | MarketingBannerOrderByWithAggregationInput[]
    by: MarketingBannerScalarFieldEnum[] | MarketingBannerScalarFieldEnum
    having?: MarketingBannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketingBannerCountAggregateInputType | true
    _avg?: MarketingBannerAvgAggregateInputType
    _sum?: MarketingBannerSumAggregateInputType
    _min?: MarketingBannerMinAggregateInputType
    _max?: MarketingBannerMaxAggregateInputType
  }

  export type MarketingBannerGroupByOutputType = {
    id: string
    title: string
    highlightText: string | null
    subtitle: string
    badgeText: string | null
    ctaLabel: string
    actionType: string
    actionTarget: string | null
    visualIcons: string
    imageUrl: string | null
    bgGradient: string
    textColor: string
    highlightColor: string
    cityCode: string
    displayOrder: number
    isActive: boolean
    startsAt: Date | null
    endsAt: Date | null
    clickCount: number
    impressionCount: number
    createdAt: Date
    updatedAt: Date
    _count: MarketingBannerCountAggregateOutputType | null
    _avg: MarketingBannerAvgAggregateOutputType | null
    _sum: MarketingBannerSumAggregateOutputType | null
    _min: MarketingBannerMinAggregateOutputType | null
    _max: MarketingBannerMaxAggregateOutputType | null
  }

  type GetMarketingBannerGroupByPayload<T extends MarketingBannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketingBannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketingBannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketingBannerGroupByOutputType[P]>
            : GetScalarType<T[P], MarketingBannerGroupByOutputType[P]>
        }
      >
    >


  export type MarketingBannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    highlightText?: boolean
    subtitle?: boolean
    badgeText?: boolean
    ctaLabel?: boolean
    actionType?: boolean
    actionTarget?: boolean
    visualIcons?: boolean
    imageUrl?: boolean
    bgGradient?: boolean
    textColor?: boolean
    highlightColor?: boolean
    cityCode?: boolean
    displayOrder?: boolean
    isActive?: boolean
    startsAt?: boolean
    endsAt?: boolean
    clickCount?: boolean
    impressionCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["marketingBanner"]>

  export type MarketingBannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    highlightText?: boolean
    subtitle?: boolean
    badgeText?: boolean
    ctaLabel?: boolean
    actionType?: boolean
    actionTarget?: boolean
    visualIcons?: boolean
    imageUrl?: boolean
    bgGradient?: boolean
    textColor?: boolean
    highlightColor?: boolean
    cityCode?: boolean
    displayOrder?: boolean
    isActive?: boolean
    startsAt?: boolean
    endsAt?: boolean
    clickCount?: boolean
    impressionCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["marketingBanner"]>

  export type MarketingBannerSelectScalar = {
    id?: boolean
    title?: boolean
    highlightText?: boolean
    subtitle?: boolean
    badgeText?: boolean
    ctaLabel?: boolean
    actionType?: boolean
    actionTarget?: boolean
    visualIcons?: boolean
    imageUrl?: boolean
    bgGradient?: boolean
    textColor?: boolean
    highlightColor?: boolean
    cityCode?: boolean
    displayOrder?: boolean
    isActive?: boolean
    startsAt?: boolean
    endsAt?: boolean
    clickCount?: boolean
    impressionCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MarketingBannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketingBanner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      highlightText: string | null
      subtitle: string
      badgeText: string | null
      ctaLabel: string
      actionType: string
      actionTarget: string | null
      visualIcons: string
      imageUrl: string | null
      bgGradient: string
      textColor: string
      highlightColor: string
      cityCode: string
      displayOrder: number
      isActive: boolean
      startsAt: Date | null
      endsAt: Date | null
      clickCount: number
      impressionCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["marketingBanner"]>
    composites: {}
  }

  type MarketingBannerGetPayload<S extends boolean | null | undefined | MarketingBannerDefaultArgs> = $Result.GetResult<Prisma.$MarketingBannerPayload, S>

  type MarketingBannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MarketingBannerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MarketingBannerCountAggregateInputType | true
    }

  export interface MarketingBannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketingBanner'], meta: { name: 'MarketingBanner' } }
    /**
     * Find zero or one MarketingBanner that matches the filter.
     * @param {MarketingBannerFindUniqueArgs} args - Arguments to find a MarketingBanner
     * @example
     * // Get one MarketingBanner
     * const marketingBanner = await prisma.marketingBanner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketingBannerFindUniqueArgs>(args: SelectSubset<T, MarketingBannerFindUniqueArgs<ExtArgs>>): Prisma__MarketingBannerClient<$Result.GetResult<Prisma.$MarketingBannerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MarketingBanner that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MarketingBannerFindUniqueOrThrowArgs} args - Arguments to find a MarketingBanner
     * @example
     * // Get one MarketingBanner
     * const marketingBanner = await prisma.marketingBanner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketingBannerFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketingBannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketingBannerClient<$Result.GetResult<Prisma.$MarketingBannerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MarketingBanner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingBannerFindFirstArgs} args - Arguments to find a MarketingBanner
     * @example
     * // Get one MarketingBanner
     * const marketingBanner = await prisma.marketingBanner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketingBannerFindFirstArgs>(args?: SelectSubset<T, MarketingBannerFindFirstArgs<ExtArgs>>): Prisma__MarketingBannerClient<$Result.GetResult<Prisma.$MarketingBannerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MarketingBanner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingBannerFindFirstOrThrowArgs} args - Arguments to find a MarketingBanner
     * @example
     * // Get one MarketingBanner
     * const marketingBanner = await prisma.marketingBanner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketingBannerFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketingBannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketingBannerClient<$Result.GetResult<Prisma.$MarketingBannerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MarketingBanners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingBannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketingBanners
     * const marketingBanners = await prisma.marketingBanner.findMany()
     * 
     * // Get first 10 MarketingBanners
     * const marketingBanners = await prisma.marketingBanner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketingBannerWithIdOnly = await prisma.marketingBanner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketingBannerFindManyArgs>(args?: SelectSubset<T, MarketingBannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingBannerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MarketingBanner.
     * @param {MarketingBannerCreateArgs} args - Arguments to create a MarketingBanner.
     * @example
     * // Create one MarketingBanner
     * const MarketingBanner = await prisma.marketingBanner.create({
     *   data: {
     *     // ... data to create a MarketingBanner
     *   }
     * })
     * 
     */
    create<T extends MarketingBannerCreateArgs>(args: SelectSubset<T, MarketingBannerCreateArgs<ExtArgs>>): Prisma__MarketingBannerClient<$Result.GetResult<Prisma.$MarketingBannerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MarketingBanners.
     * @param {MarketingBannerCreateManyArgs} args - Arguments to create many MarketingBanners.
     * @example
     * // Create many MarketingBanners
     * const marketingBanner = await prisma.marketingBanner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketingBannerCreateManyArgs>(args?: SelectSubset<T, MarketingBannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketingBanners and returns the data saved in the database.
     * @param {MarketingBannerCreateManyAndReturnArgs} args - Arguments to create many MarketingBanners.
     * @example
     * // Create many MarketingBanners
     * const marketingBanner = await prisma.marketingBanner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketingBanners and only return the `id`
     * const marketingBannerWithIdOnly = await prisma.marketingBanner.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketingBannerCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketingBannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingBannerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MarketingBanner.
     * @param {MarketingBannerDeleteArgs} args - Arguments to delete one MarketingBanner.
     * @example
     * // Delete one MarketingBanner
     * const MarketingBanner = await prisma.marketingBanner.delete({
     *   where: {
     *     // ... filter to delete one MarketingBanner
     *   }
     * })
     * 
     */
    delete<T extends MarketingBannerDeleteArgs>(args: SelectSubset<T, MarketingBannerDeleteArgs<ExtArgs>>): Prisma__MarketingBannerClient<$Result.GetResult<Prisma.$MarketingBannerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MarketingBanner.
     * @param {MarketingBannerUpdateArgs} args - Arguments to update one MarketingBanner.
     * @example
     * // Update one MarketingBanner
     * const marketingBanner = await prisma.marketingBanner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketingBannerUpdateArgs>(args: SelectSubset<T, MarketingBannerUpdateArgs<ExtArgs>>): Prisma__MarketingBannerClient<$Result.GetResult<Prisma.$MarketingBannerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MarketingBanners.
     * @param {MarketingBannerDeleteManyArgs} args - Arguments to filter MarketingBanners to delete.
     * @example
     * // Delete a few MarketingBanners
     * const { count } = await prisma.marketingBanner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketingBannerDeleteManyArgs>(args?: SelectSubset<T, MarketingBannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingBannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketingBanners
     * const marketingBanner = await prisma.marketingBanner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketingBannerUpdateManyArgs>(args: SelectSubset<T, MarketingBannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MarketingBanner.
     * @param {MarketingBannerUpsertArgs} args - Arguments to update or create a MarketingBanner.
     * @example
     * // Update or create a MarketingBanner
     * const marketingBanner = await prisma.marketingBanner.upsert({
     *   create: {
     *     // ... data to create a MarketingBanner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketingBanner we want to update
     *   }
     * })
     */
    upsert<T extends MarketingBannerUpsertArgs>(args: SelectSubset<T, MarketingBannerUpsertArgs<ExtArgs>>): Prisma__MarketingBannerClient<$Result.GetResult<Prisma.$MarketingBannerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MarketingBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingBannerCountArgs} args - Arguments to filter MarketingBanners to count.
     * @example
     * // Count the number of MarketingBanners
     * const count = await prisma.marketingBanner.count({
     *   where: {
     *     // ... the filter for the MarketingBanners we want to count
     *   }
     * })
    **/
    count<T extends MarketingBannerCountArgs>(
      args?: Subset<T, MarketingBannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketingBannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketingBanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingBannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketingBannerAggregateArgs>(args: Subset<T, MarketingBannerAggregateArgs>): Prisma.PrismaPromise<GetMarketingBannerAggregateType<T>>

    /**
     * Group by MarketingBanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingBannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketingBannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketingBannerGroupByArgs['orderBy'] }
        : { orderBy?: MarketingBannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketingBannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketingBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketingBanner model
   */
  readonly fields: MarketingBannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketingBanner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketingBannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarketingBanner model
   */ 
  interface MarketingBannerFieldRefs {
    readonly id: FieldRef<"MarketingBanner", 'String'>
    readonly title: FieldRef<"MarketingBanner", 'String'>
    readonly highlightText: FieldRef<"MarketingBanner", 'String'>
    readonly subtitle: FieldRef<"MarketingBanner", 'String'>
    readonly badgeText: FieldRef<"MarketingBanner", 'String'>
    readonly ctaLabel: FieldRef<"MarketingBanner", 'String'>
    readonly actionType: FieldRef<"MarketingBanner", 'String'>
    readonly actionTarget: FieldRef<"MarketingBanner", 'String'>
    readonly visualIcons: FieldRef<"MarketingBanner", 'String'>
    readonly imageUrl: FieldRef<"MarketingBanner", 'String'>
    readonly bgGradient: FieldRef<"MarketingBanner", 'String'>
    readonly textColor: FieldRef<"MarketingBanner", 'String'>
    readonly highlightColor: FieldRef<"MarketingBanner", 'String'>
    readonly cityCode: FieldRef<"MarketingBanner", 'String'>
    readonly displayOrder: FieldRef<"MarketingBanner", 'Int'>
    readonly isActive: FieldRef<"MarketingBanner", 'Boolean'>
    readonly startsAt: FieldRef<"MarketingBanner", 'DateTime'>
    readonly endsAt: FieldRef<"MarketingBanner", 'DateTime'>
    readonly clickCount: FieldRef<"MarketingBanner", 'Int'>
    readonly impressionCount: FieldRef<"MarketingBanner", 'Int'>
    readonly createdAt: FieldRef<"MarketingBanner", 'DateTime'>
    readonly updatedAt: FieldRef<"MarketingBanner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketingBanner findUnique
   */
  export type MarketingBannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingBanner
     */
    select?: MarketingBannerSelect<ExtArgs> | null
    /**
     * Filter, which MarketingBanner to fetch.
     */
    where: MarketingBannerWhereUniqueInput
  }

  /**
   * MarketingBanner findUniqueOrThrow
   */
  export type MarketingBannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingBanner
     */
    select?: MarketingBannerSelect<ExtArgs> | null
    /**
     * Filter, which MarketingBanner to fetch.
     */
    where: MarketingBannerWhereUniqueInput
  }

  /**
   * MarketingBanner findFirst
   */
  export type MarketingBannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingBanner
     */
    select?: MarketingBannerSelect<ExtArgs> | null
    /**
     * Filter, which MarketingBanner to fetch.
     */
    where?: MarketingBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingBanners to fetch.
     */
    orderBy?: MarketingBannerOrderByWithRelationInput | MarketingBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingBanners.
     */
    cursor?: MarketingBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingBanners.
     */
    distinct?: MarketingBannerScalarFieldEnum | MarketingBannerScalarFieldEnum[]
  }

  /**
   * MarketingBanner findFirstOrThrow
   */
  export type MarketingBannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingBanner
     */
    select?: MarketingBannerSelect<ExtArgs> | null
    /**
     * Filter, which MarketingBanner to fetch.
     */
    where?: MarketingBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingBanners to fetch.
     */
    orderBy?: MarketingBannerOrderByWithRelationInput | MarketingBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingBanners.
     */
    cursor?: MarketingBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingBanners.
     */
    distinct?: MarketingBannerScalarFieldEnum | MarketingBannerScalarFieldEnum[]
  }

  /**
   * MarketingBanner findMany
   */
  export type MarketingBannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingBanner
     */
    select?: MarketingBannerSelect<ExtArgs> | null
    /**
     * Filter, which MarketingBanners to fetch.
     */
    where?: MarketingBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingBanners to fetch.
     */
    orderBy?: MarketingBannerOrderByWithRelationInput | MarketingBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketingBanners.
     */
    cursor?: MarketingBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingBanners.
     */
    skip?: number
    distinct?: MarketingBannerScalarFieldEnum | MarketingBannerScalarFieldEnum[]
  }

  /**
   * MarketingBanner create
   */
  export type MarketingBannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingBanner
     */
    select?: MarketingBannerSelect<ExtArgs> | null
    /**
     * The data needed to create a MarketingBanner.
     */
    data: XOR<MarketingBannerCreateInput, MarketingBannerUncheckedCreateInput>
  }

  /**
   * MarketingBanner createMany
   */
  export type MarketingBannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketingBanners.
     */
    data: MarketingBannerCreateManyInput | MarketingBannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingBanner createManyAndReturn
   */
  export type MarketingBannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingBanner
     */
    select?: MarketingBannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MarketingBanners.
     */
    data: MarketingBannerCreateManyInput | MarketingBannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingBanner update
   */
  export type MarketingBannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingBanner
     */
    select?: MarketingBannerSelect<ExtArgs> | null
    /**
     * The data needed to update a MarketingBanner.
     */
    data: XOR<MarketingBannerUpdateInput, MarketingBannerUncheckedUpdateInput>
    /**
     * Choose, which MarketingBanner to update.
     */
    where: MarketingBannerWhereUniqueInput
  }

  /**
   * MarketingBanner updateMany
   */
  export type MarketingBannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketingBanners.
     */
    data: XOR<MarketingBannerUpdateManyMutationInput, MarketingBannerUncheckedUpdateManyInput>
    /**
     * Filter which MarketingBanners to update
     */
    where?: MarketingBannerWhereInput
  }

  /**
   * MarketingBanner upsert
   */
  export type MarketingBannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingBanner
     */
    select?: MarketingBannerSelect<ExtArgs> | null
    /**
     * The filter to search for the MarketingBanner to update in case it exists.
     */
    where: MarketingBannerWhereUniqueInput
    /**
     * In case the MarketingBanner found by the `where` argument doesn't exist, create a new MarketingBanner with this data.
     */
    create: XOR<MarketingBannerCreateInput, MarketingBannerUncheckedCreateInput>
    /**
     * In case the MarketingBanner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketingBannerUpdateInput, MarketingBannerUncheckedUpdateInput>
  }

  /**
   * MarketingBanner delete
   */
  export type MarketingBannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingBanner
     */
    select?: MarketingBannerSelect<ExtArgs> | null
    /**
     * Filter which MarketingBanner to delete.
     */
    where: MarketingBannerWhereUniqueInput
  }

  /**
   * MarketingBanner deleteMany
   */
  export type MarketingBannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingBanners to delete
     */
    where?: MarketingBannerWhereInput
  }

  /**
   * MarketingBanner without action
   */
  export type MarketingBannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingBanner
     */
    select?: MarketingBannerSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MerchantScalarFieldEnum: {
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

  export type MerchantScalarFieldEnum = (typeof MerchantScalarFieldEnum)[keyof typeof MerchantScalarFieldEnum]


  export const OutletScalarFieldEnum: {
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

  export type OutletScalarFieldEnum = (typeof OutletScalarFieldEnum)[keyof typeof OutletScalarFieldEnum]


  export const OutletHoursScalarFieldEnum: {
    id: 'id',
    outletId: 'outletId',
    dayOfWeek: 'dayOfWeek',
    openTime: 'openTime',
    closeTime: 'closeTime',
    breakTime: 'breakTime',
    isClosed: 'isClosed'
  };

  export type OutletHoursScalarFieldEnum = (typeof OutletHoursScalarFieldEnum)[keyof typeof OutletHoursScalarFieldEnum]


  export const ServiceAreaScalarFieldEnum: {
    id: 'id',
    outletId: 'outletId',
    radiusMeters: 'radiusMeters',
    geoJson: 'geoJson'
  };

  export type ServiceAreaScalarFieldEnum = (typeof ServiceAreaScalarFieldEnum)[keyof typeof ServiceAreaScalarFieldEnum]


  export const VerificationRecordScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    documentType: 'documentType',
    documentUrl: 'documentUrl',
    status: 'status',
    notes: 'notes',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt'
  };

  export type VerificationRecordScalarFieldEnum = (typeof VerificationRecordScalarFieldEnum)[keyof typeof VerificationRecordScalarFieldEnum]


  export const PartnerRegistrationScalarFieldEnum: {
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

  export type PartnerRegistrationScalarFieldEnum = (typeof PartnerRegistrationScalarFieldEnum)[keyof typeof PartnerRegistrationScalarFieldEnum]


  export const RegistrationDocumentScalarFieldEnum: {
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

  export type RegistrationDocumentScalarFieldEnum = (typeof RegistrationDocumentScalarFieldEnum)[keyof typeof RegistrationDocumentScalarFieldEnum]


  export const RegistrationStatusHistoryScalarFieldEnum: {
    id: 'id',
    registrationId: 'registrationId',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    changedBy: 'changedBy',
    reason: 'reason',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type RegistrationStatusHistoryScalarFieldEnum = (typeof RegistrationStatusHistoryScalarFieldEnum)[keyof typeof RegistrationStatusHistoryScalarFieldEnum]


  export const PlatformCityScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    state: 'state',
    stateCode: 'stateCode',
    district: 'district',
    districtCode: 'districtCode',
    status: 'status',
    managerName: 'managerName',
    managerEmail: 'managerEmail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlatformCityScalarFieldEnum = (typeof PlatformCityScalarFieldEnum)[keyof typeof PlatformCityScalarFieldEnum]


  export const ServiceableLocalityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    pincode: 'pincode',
    cityCode: 'cityCode',
    cityName: 'cityName',
    district: 'district',
    state: 'state',
    latitude: 'latitude',
    longitude: 'longitude',
    radiusMeters: 'radiusMeters',
    status: 'status',
    geoJson: 'geoJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceableLocalityScalarFieldEnum = (typeof ServiceableLocalityScalarFieldEnum)[keyof typeof ServiceableLocalityScalarFieldEnum]


  export const ShopAuditLogScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    outletId: 'outletId',
    actorStaffId: 'actorStaffId',
    actorName: 'actorName',
    actorRole: 'actorRole',
    authMode: 'authMode',
    module: 'module',
    action: 'action',
    targetType: 'targetType',
    targetId: 'targetId',
    targetLabel: 'targetLabel',
    beforeState: 'beforeState',
    afterState: 'afterState',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type ShopAuditLogScalarFieldEnum = (typeof ShopAuditLogScalarFieldEnum)[keyof typeof ShopAuditLogScalarFieldEnum]


  export const MarketingBannerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    highlightText: 'highlightText',
    subtitle: 'subtitle',
    badgeText: 'badgeText',
    ctaLabel: 'ctaLabel',
    actionType: 'actionType',
    actionTarget: 'actionTarget',
    visualIcons: 'visualIcons',
    imageUrl: 'imageUrl',
    bgGradient: 'bgGradient',
    textColor: 'textColor',
    highlightColor: 'highlightColor',
    cityCode: 'cityCode',
    displayOrder: 'displayOrder',
    isActive: 'isActive',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    clickCount: 'clickCount',
    impressionCount: 'impressionCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MarketingBannerScalarFieldEnum = (typeof MarketingBannerScalarFieldEnum)[keyof typeof MarketingBannerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type MerchantWhereInput = {
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    id?: StringFilter<"Merchant"> | string
    organizationName?: StringFilter<"Merchant"> | string
    legalBusinessName?: StringNullableFilter<"Merchant"> | string | null
    contactName?: StringFilter<"Merchant"> | string
    contactPhone?: StringFilter<"Merchant"> | string
    email?: StringNullableFilter<"Merchant"> | string | null
    businessType?: StringNullableFilter<"Merchant"> | string | null
    category?: StringNullableFilter<"Merchant"> | string | null
    description?: StringNullableFilter<"Merchant"> | string | null
    verificationStatus?: StringFilter<"Merchant"> | string
    isSuspended?: BoolFilter<"Merchant"> | boolean
    suspendedReason?: StringNullableFilter<"Merchant"> | string | null
    suspendedAt?: DateTimeNullableFilter<"Merchant"> | Date | string | null
    cityCode?: StringFilter<"Merchant"> | string
    districtCode?: StringFilter<"Merchant"> | string
    stateCode?: StringFilter<"Merchant"> | string
    createdAt?: DateTimeFilter<"Merchant"> | Date | string
    updatedAt?: DateTimeFilter<"Merchant"> | Date | string
    outlets?: OutletListRelationFilter
    verifications?: VerificationRecordListRelationFilter
    partnerApplication?: XOR<PartnerRegistrationNullableRelationFilter, PartnerRegistrationWhereInput> | null
  }

  export type MerchantOrderByWithRelationInput = {
    id?: SortOrder
    organizationName?: SortOrder
    legalBusinessName?: SortOrderInput | SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    email?: SortOrderInput | SortOrder
    businessType?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    isSuspended?: SortOrder
    suspendedReason?: SortOrderInput | SortOrder
    suspendedAt?: SortOrderInput | SortOrder
    cityCode?: SortOrder
    districtCode?: SortOrder
    stateCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    outlets?: OutletOrderByRelationAggregateInput
    verifications?: VerificationRecordOrderByRelationAggregateInput
    partnerApplication?: PartnerRegistrationOrderByWithRelationInput
  }

  export type MerchantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contactPhone?: string
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    organizationName?: StringFilter<"Merchant"> | string
    legalBusinessName?: StringNullableFilter<"Merchant"> | string | null
    contactName?: StringFilter<"Merchant"> | string
    email?: StringNullableFilter<"Merchant"> | string | null
    businessType?: StringNullableFilter<"Merchant"> | string | null
    category?: StringNullableFilter<"Merchant"> | string | null
    description?: StringNullableFilter<"Merchant"> | string | null
    verificationStatus?: StringFilter<"Merchant"> | string
    isSuspended?: BoolFilter<"Merchant"> | boolean
    suspendedReason?: StringNullableFilter<"Merchant"> | string | null
    suspendedAt?: DateTimeNullableFilter<"Merchant"> | Date | string | null
    cityCode?: StringFilter<"Merchant"> | string
    districtCode?: StringFilter<"Merchant"> | string
    stateCode?: StringFilter<"Merchant"> | string
    createdAt?: DateTimeFilter<"Merchant"> | Date | string
    updatedAt?: DateTimeFilter<"Merchant"> | Date | string
    outlets?: OutletListRelationFilter
    verifications?: VerificationRecordListRelationFilter
    partnerApplication?: XOR<PartnerRegistrationNullableRelationFilter, PartnerRegistrationWhereInput> | null
  }, "id" | "contactPhone">

  export type MerchantOrderByWithAggregationInput = {
    id?: SortOrder
    organizationName?: SortOrder
    legalBusinessName?: SortOrderInput | SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    email?: SortOrderInput | SortOrder
    businessType?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    isSuspended?: SortOrder
    suspendedReason?: SortOrderInput | SortOrder
    suspendedAt?: SortOrderInput | SortOrder
    cityCode?: SortOrder
    districtCode?: SortOrder
    stateCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MerchantCountOrderByAggregateInput
    _max?: MerchantMaxOrderByAggregateInput
    _min?: MerchantMinOrderByAggregateInput
  }

  export type MerchantScalarWhereWithAggregatesInput = {
    AND?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    OR?: MerchantScalarWhereWithAggregatesInput[]
    NOT?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Merchant"> | string
    organizationName?: StringWithAggregatesFilter<"Merchant"> | string
    legalBusinessName?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    contactName?: StringWithAggregatesFilter<"Merchant"> | string
    contactPhone?: StringWithAggregatesFilter<"Merchant"> | string
    email?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    businessType?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    category?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    description?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    verificationStatus?: StringWithAggregatesFilter<"Merchant"> | string
    isSuspended?: BoolWithAggregatesFilter<"Merchant"> | boolean
    suspendedReason?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    suspendedAt?: DateTimeNullableWithAggregatesFilter<"Merchant"> | Date | string | null
    cityCode?: StringWithAggregatesFilter<"Merchant"> | string
    districtCode?: StringWithAggregatesFilter<"Merchant"> | string
    stateCode?: StringWithAggregatesFilter<"Merchant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Merchant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Merchant"> | Date | string
  }

  export type OutletWhereInput = {
    AND?: OutletWhereInput | OutletWhereInput[]
    OR?: OutletWhereInput[]
    NOT?: OutletWhereInput | OutletWhereInput[]
    id?: StringFilter<"Outlet"> | string
    merchantId?: StringFilter<"Outlet"> | string
    name?: StringFilter<"Outlet"> | string
    sellerMode?: StringFilter<"Outlet"> | string
    addressLine?: StringFilter<"Outlet"> | string
    locality?: StringFilter<"Outlet"> | string
    city?: StringFilter<"Outlet"> | string
    cityCode?: StringFilter<"Outlet"> | string
    district?: StringNullableFilter<"Outlet"> | string | null
    districtCode?: StringNullableFilter<"Outlet"> | string | null
    state?: StringNullableFilter<"Outlet"> | string | null
    stateCode?: StringNullableFilter<"Outlet"> | string | null
    pincode?: StringNullableFilter<"Outlet"> | string | null
    latitude?: FloatFilter<"Outlet"> | number
    longitude?: FloatFilter<"Outlet"> | number
    isAddressPublic?: BoolFilter<"Outlet"> | boolean
    storePickup?: BoolFilter<"Outlet"> | boolean
    merchantDelivery?: BoolFilter<"Outlet"> | boolean
    deliveryRadiusKm?: FloatFilter<"Outlet"> | number
    minOrderValue?: IntFilter<"Outlet"> | number
    prepTimeMinutes?: IntFilter<"Outlet"> | number
    isActive?: BoolFilter<"Outlet"> | boolean
    createdAt?: DateTimeFilter<"Outlet"> | Date | string
    updatedAt?: DateTimeFilter<"Outlet"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
    hours?: OutletHoursListRelationFilter
    serviceAreas?: ServiceAreaListRelationFilter
  }

  export type OutletOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    name?: SortOrder
    sellerMode?: SortOrder
    addressLine?: SortOrder
    locality?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    district?: SortOrderInput | SortOrder
    districtCode?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    stateCode?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isAddressPublic?: SortOrder
    storePickup?: SortOrder
    merchantDelivery?: SortOrder
    deliveryRadiusKm?: SortOrder
    minOrderValue?: SortOrder
    prepTimeMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
    hours?: OutletHoursOrderByRelationAggregateInput
    serviceAreas?: ServiceAreaOrderByRelationAggregateInput
  }

  export type OutletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutletWhereInput | OutletWhereInput[]
    OR?: OutletWhereInput[]
    NOT?: OutletWhereInput | OutletWhereInput[]
    merchantId?: StringFilter<"Outlet"> | string
    name?: StringFilter<"Outlet"> | string
    sellerMode?: StringFilter<"Outlet"> | string
    addressLine?: StringFilter<"Outlet"> | string
    locality?: StringFilter<"Outlet"> | string
    city?: StringFilter<"Outlet"> | string
    cityCode?: StringFilter<"Outlet"> | string
    district?: StringNullableFilter<"Outlet"> | string | null
    districtCode?: StringNullableFilter<"Outlet"> | string | null
    state?: StringNullableFilter<"Outlet"> | string | null
    stateCode?: StringNullableFilter<"Outlet"> | string | null
    pincode?: StringNullableFilter<"Outlet"> | string | null
    latitude?: FloatFilter<"Outlet"> | number
    longitude?: FloatFilter<"Outlet"> | number
    isAddressPublic?: BoolFilter<"Outlet"> | boolean
    storePickup?: BoolFilter<"Outlet"> | boolean
    merchantDelivery?: BoolFilter<"Outlet"> | boolean
    deliveryRadiusKm?: FloatFilter<"Outlet"> | number
    minOrderValue?: IntFilter<"Outlet"> | number
    prepTimeMinutes?: IntFilter<"Outlet"> | number
    isActive?: BoolFilter<"Outlet"> | boolean
    createdAt?: DateTimeFilter<"Outlet"> | Date | string
    updatedAt?: DateTimeFilter<"Outlet"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
    hours?: OutletHoursListRelationFilter
    serviceAreas?: ServiceAreaListRelationFilter
  }, "id">

  export type OutletOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    name?: SortOrder
    sellerMode?: SortOrder
    addressLine?: SortOrder
    locality?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    district?: SortOrderInput | SortOrder
    districtCode?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    stateCode?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isAddressPublic?: SortOrder
    storePickup?: SortOrder
    merchantDelivery?: SortOrder
    deliveryRadiusKm?: SortOrder
    minOrderValue?: SortOrder
    prepTimeMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OutletCountOrderByAggregateInput
    _avg?: OutletAvgOrderByAggregateInput
    _max?: OutletMaxOrderByAggregateInput
    _min?: OutletMinOrderByAggregateInput
    _sum?: OutletSumOrderByAggregateInput
  }

  export type OutletScalarWhereWithAggregatesInput = {
    AND?: OutletScalarWhereWithAggregatesInput | OutletScalarWhereWithAggregatesInput[]
    OR?: OutletScalarWhereWithAggregatesInput[]
    NOT?: OutletScalarWhereWithAggregatesInput | OutletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Outlet"> | string
    merchantId?: StringWithAggregatesFilter<"Outlet"> | string
    name?: StringWithAggregatesFilter<"Outlet"> | string
    sellerMode?: StringWithAggregatesFilter<"Outlet"> | string
    addressLine?: StringWithAggregatesFilter<"Outlet"> | string
    locality?: StringWithAggregatesFilter<"Outlet"> | string
    city?: StringWithAggregatesFilter<"Outlet"> | string
    cityCode?: StringWithAggregatesFilter<"Outlet"> | string
    district?: StringNullableWithAggregatesFilter<"Outlet"> | string | null
    districtCode?: StringNullableWithAggregatesFilter<"Outlet"> | string | null
    state?: StringNullableWithAggregatesFilter<"Outlet"> | string | null
    stateCode?: StringNullableWithAggregatesFilter<"Outlet"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"Outlet"> | string | null
    latitude?: FloatWithAggregatesFilter<"Outlet"> | number
    longitude?: FloatWithAggregatesFilter<"Outlet"> | number
    isAddressPublic?: BoolWithAggregatesFilter<"Outlet"> | boolean
    storePickup?: BoolWithAggregatesFilter<"Outlet"> | boolean
    merchantDelivery?: BoolWithAggregatesFilter<"Outlet"> | boolean
    deliveryRadiusKm?: FloatWithAggregatesFilter<"Outlet"> | number
    minOrderValue?: IntWithAggregatesFilter<"Outlet"> | number
    prepTimeMinutes?: IntWithAggregatesFilter<"Outlet"> | number
    isActive?: BoolWithAggregatesFilter<"Outlet"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Outlet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Outlet"> | Date | string
  }

  export type OutletHoursWhereInput = {
    AND?: OutletHoursWhereInput | OutletHoursWhereInput[]
    OR?: OutletHoursWhereInput[]
    NOT?: OutletHoursWhereInput | OutletHoursWhereInput[]
    id?: StringFilter<"OutletHours"> | string
    outletId?: StringFilter<"OutletHours"> | string
    dayOfWeek?: IntFilter<"OutletHours"> | number
    openTime?: StringFilter<"OutletHours"> | string
    closeTime?: StringFilter<"OutletHours"> | string
    breakTime?: StringNullableFilter<"OutletHours"> | string | null
    isClosed?: BoolFilter<"OutletHours"> | boolean
    outlet?: XOR<OutletRelationFilter, OutletWhereInput>
  }

  export type OutletHoursOrderByWithRelationInput = {
    id?: SortOrder
    outletId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    breakTime?: SortOrderInput | SortOrder
    isClosed?: SortOrder
    outlet?: OutletOrderByWithRelationInput
  }

  export type OutletHoursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    outletId_dayOfWeek?: OutletHoursOutletIdDayOfWeekCompoundUniqueInput
    AND?: OutletHoursWhereInput | OutletHoursWhereInput[]
    OR?: OutletHoursWhereInput[]
    NOT?: OutletHoursWhereInput | OutletHoursWhereInput[]
    outletId?: StringFilter<"OutletHours"> | string
    dayOfWeek?: IntFilter<"OutletHours"> | number
    openTime?: StringFilter<"OutletHours"> | string
    closeTime?: StringFilter<"OutletHours"> | string
    breakTime?: StringNullableFilter<"OutletHours"> | string | null
    isClosed?: BoolFilter<"OutletHours"> | boolean
    outlet?: XOR<OutletRelationFilter, OutletWhereInput>
  }, "id" | "outletId_dayOfWeek">

  export type OutletHoursOrderByWithAggregationInput = {
    id?: SortOrder
    outletId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    breakTime?: SortOrderInput | SortOrder
    isClosed?: SortOrder
    _count?: OutletHoursCountOrderByAggregateInput
    _avg?: OutletHoursAvgOrderByAggregateInput
    _max?: OutletHoursMaxOrderByAggregateInput
    _min?: OutletHoursMinOrderByAggregateInput
    _sum?: OutletHoursSumOrderByAggregateInput
  }

  export type OutletHoursScalarWhereWithAggregatesInput = {
    AND?: OutletHoursScalarWhereWithAggregatesInput | OutletHoursScalarWhereWithAggregatesInput[]
    OR?: OutletHoursScalarWhereWithAggregatesInput[]
    NOT?: OutletHoursScalarWhereWithAggregatesInput | OutletHoursScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutletHours"> | string
    outletId?: StringWithAggregatesFilter<"OutletHours"> | string
    dayOfWeek?: IntWithAggregatesFilter<"OutletHours"> | number
    openTime?: StringWithAggregatesFilter<"OutletHours"> | string
    closeTime?: StringWithAggregatesFilter<"OutletHours"> | string
    breakTime?: StringNullableWithAggregatesFilter<"OutletHours"> | string | null
    isClosed?: BoolWithAggregatesFilter<"OutletHours"> | boolean
  }

  export type ServiceAreaWhereInput = {
    AND?: ServiceAreaWhereInput | ServiceAreaWhereInput[]
    OR?: ServiceAreaWhereInput[]
    NOT?: ServiceAreaWhereInput | ServiceAreaWhereInput[]
    id?: StringFilter<"ServiceArea"> | string
    outletId?: StringFilter<"ServiceArea"> | string
    radiusMeters?: IntFilter<"ServiceArea"> | number
    geoJson?: JsonNullableFilter<"ServiceArea">
    outlet?: XOR<OutletRelationFilter, OutletWhereInput>
  }

  export type ServiceAreaOrderByWithRelationInput = {
    id?: SortOrder
    outletId?: SortOrder
    radiusMeters?: SortOrder
    geoJson?: SortOrderInput | SortOrder
    outlet?: OutletOrderByWithRelationInput
  }

  export type ServiceAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceAreaWhereInput | ServiceAreaWhereInput[]
    OR?: ServiceAreaWhereInput[]
    NOT?: ServiceAreaWhereInput | ServiceAreaWhereInput[]
    outletId?: StringFilter<"ServiceArea"> | string
    radiusMeters?: IntFilter<"ServiceArea"> | number
    geoJson?: JsonNullableFilter<"ServiceArea">
    outlet?: XOR<OutletRelationFilter, OutletWhereInput>
  }, "id">

  export type ServiceAreaOrderByWithAggregationInput = {
    id?: SortOrder
    outletId?: SortOrder
    radiusMeters?: SortOrder
    geoJson?: SortOrderInput | SortOrder
    _count?: ServiceAreaCountOrderByAggregateInput
    _avg?: ServiceAreaAvgOrderByAggregateInput
    _max?: ServiceAreaMaxOrderByAggregateInput
    _min?: ServiceAreaMinOrderByAggregateInput
    _sum?: ServiceAreaSumOrderByAggregateInput
  }

  export type ServiceAreaScalarWhereWithAggregatesInput = {
    AND?: ServiceAreaScalarWhereWithAggregatesInput | ServiceAreaScalarWhereWithAggregatesInput[]
    OR?: ServiceAreaScalarWhereWithAggregatesInput[]
    NOT?: ServiceAreaScalarWhereWithAggregatesInput | ServiceAreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceArea"> | string
    outletId?: StringWithAggregatesFilter<"ServiceArea"> | string
    radiusMeters?: IntWithAggregatesFilter<"ServiceArea"> | number
    geoJson?: JsonNullableWithAggregatesFilter<"ServiceArea">
  }

  export type VerificationRecordWhereInput = {
    AND?: VerificationRecordWhereInput | VerificationRecordWhereInput[]
    OR?: VerificationRecordWhereInput[]
    NOT?: VerificationRecordWhereInput | VerificationRecordWhereInput[]
    id?: StringFilter<"VerificationRecord"> | string
    merchantId?: StringFilter<"VerificationRecord"> | string
    documentType?: StringFilter<"VerificationRecord"> | string
    documentUrl?: StringFilter<"VerificationRecord"> | string
    status?: StringFilter<"VerificationRecord"> | string
    notes?: StringNullableFilter<"VerificationRecord"> | string | null
    verifiedAt?: DateTimeNullableFilter<"VerificationRecord"> | Date | string | null
    createdAt?: DateTimeFilter<"VerificationRecord"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type VerificationRecordOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type VerificationRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationRecordWhereInput | VerificationRecordWhereInput[]
    OR?: VerificationRecordWhereInput[]
    NOT?: VerificationRecordWhereInput | VerificationRecordWhereInput[]
    merchantId?: StringFilter<"VerificationRecord"> | string
    documentType?: StringFilter<"VerificationRecord"> | string
    documentUrl?: StringFilter<"VerificationRecord"> | string
    status?: StringFilter<"VerificationRecord"> | string
    notes?: StringNullableFilter<"VerificationRecord"> | string | null
    verifiedAt?: DateTimeNullableFilter<"VerificationRecord"> | Date | string | null
    createdAt?: DateTimeFilter<"VerificationRecord"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id">

  export type VerificationRecordOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: VerificationRecordCountOrderByAggregateInput
    _max?: VerificationRecordMaxOrderByAggregateInput
    _min?: VerificationRecordMinOrderByAggregateInput
  }

  export type VerificationRecordScalarWhereWithAggregatesInput = {
    AND?: VerificationRecordScalarWhereWithAggregatesInput | VerificationRecordScalarWhereWithAggregatesInput[]
    OR?: VerificationRecordScalarWhereWithAggregatesInput[]
    NOT?: VerificationRecordScalarWhereWithAggregatesInput | VerificationRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationRecord"> | string
    merchantId?: StringWithAggregatesFilter<"VerificationRecord"> | string
    documentType?: StringWithAggregatesFilter<"VerificationRecord"> | string
    documentUrl?: StringWithAggregatesFilter<"VerificationRecord"> | string
    status?: StringWithAggregatesFilter<"VerificationRecord"> | string
    notes?: StringNullableWithAggregatesFilter<"VerificationRecord"> | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"VerificationRecord"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VerificationRecord"> | Date | string
  }

  export type PartnerRegistrationWhereInput = {
    AND?: PartnerRegistrationWhereInput | PartnerRegistrationWhereInput[]
    OR?: PartnerRegistrationWhereInput[]
    NOT?: PartnerRegistrationWhereInput | PartnerRegistrationWhereInput[]
    id?: StringFilter<"PartnerRegistration"> | string
    applicationId?: StringFilter<"PartnerRegistration"> | string
    merchantId?: StringNullableFilter<"PartnerRegistration"> | string | null
    currentStep?: IntFilter<"PartnerRegistration"> | number
    status?: StringFilter<"PartnerRegistration"> | string
    businessType?: StringFilter<"PartnerRegistration"> | string
    businessName?: StringFilter<"PartnerRegistration"> | string
    ownerName?: StringFilter<"PartnerRegistration"> | string
    mobileNumber?: StringFilter<"PartnerRegistration"> | string
    email?: StringNullableFilter<"PartnerRegistration"> | string | null
    businessCategory?: StringFilter<"PartnerRegistration"> | string
    businessDescription?: StringFilter<"PartnerRegistration"> | string
    pincode?: StringFilter<"PartnerRegistration"> | string
    state?: StringFilter<"PartnerRegistration"> | string
    stateCode?: StringFilter<"PartnerRegistration"> | string
    district?: StringFilter<"PartnerRegistration"> | string
    districtCode?: StringFilter<"PartnerRegistration"> | string
    city?: StringFilter<"PartnerRegistration"> | string
    cityCode?: StringFilter<"PartnerRegistration"> | string
    locality?: StringFilter<"PartnerRegistration"> | string
    fullAddress?: StringFilter<"PartnerRegistration"> | string
    latitude?: FloatFilter<"PartnerRegistration"> | number
    longitude?: FloatFilter<"PartnerRegistration"> | number
    homeBusinessPrivacy?: BoolFilter<"PartnerRegistration"> | boolean
    scheduleMode?: StringFilter<"PartnerRegistration"> | string
    operatingHours?: JsonFilter<"PartnerRegistration">
    holidays?: JsonNullableFilter<"PartnerRegistration">
    temporaryClosure?: JsonNullableFilter<"PartnerRegistration">
    storePickup?: BoolFilter<"PartnerRegistration"> | boolean
    merchantDelivery?: BoolFilter<"PartnerRegistration"> | boolean
    serviceRadius?: StringFilter<"PartnerRegistration"> | string
    serviceRadiusMeters?: IntFilter<"PartnerRegistration"> | number
    minOrderValue?: IntFilter<"PartnerRegistration"> | number
    prepTime?: StringFilter<"PartnerRegistration"> | string
    bankAccountHolder?: StringNullableFilter<"PartnerRegistration"> | string | null
    bankAccountNumber?: StringNullableFilter<"PartnerRegistration"> | string | null
    bankIfscCode?: StringNullableFilter<"PartnerRegistration"> | string | null
    bankName?: StringNullableFilter<"PartnerRegistration"> | string | null
    categoryLicenceUrl?: StringNullableFilter<"PartnerRegistration"> | string | null
    categoryLicenceName?: StringNullableFilter<"PartnerRegistration"> | string | null
    termsAgreed?: BoolFilter<"PartnerRegistration"> | boolean
    submittedAt?: DateTimeNullableFilter<"PartnerRegistration"> | Date | string | null
    reviewedAt?: DateTimeNullableFilter<"PartnerRegistration"> | Date | string | null
    reviewNotes?: StringNullableFilter<"PartnerRegistration"> | string | null
    createdAt?: DateTimeFilter<"PartnerRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerRegistration"> | Date | string
    merchant?: XOR<MerchantNullableRelationFilter, MerchantWhereInput> | null
    documents?: RegistrationDocumentListRelationFilter
    statusHistory?: RegistrationStatusHistoryListRelationFilter
  }

  export type PartnerRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    merchantId?: SortOrderInput | SortOrder
    currentStep?: SortOrder
    status?: SortOrder
    businessType?: SortOrder
    businessName?: SortOrder
    ownerName?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    businessCategory?: SortOrder
    businessDescription?: SortOrder
    pincode?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    locality?: SortOrder
    fullAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    homeBusinessPrivacy?: SortOrder
    scheduleMode?: SortOrder
    operatingHours?: SortOrder
    holidays?: SortOrderInput | SortOrder
    temporaryClosure?: SortOrderInput | SortOrder
    storePickup?: SortOrder
    merchantDelivery?: SortOrder
    serviceRadius?: SortOrder
    serviceRadiusMeters?: SortOrder
    minOrderValue?: SortOrder
    prepTime?: SortOrder
    bankAccountHolder?: SortOrderInput | SortOrder
    bankAccountNumber?: SortOrderInput | SortOrder
    bankIfscCode?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    categoryLicenceUrl?: SortOrderInput | SortOrder
    categoryLicenceName?: SortOrderInput | SortOrder
    termsAgreed?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
    documents?: RegistrationDocumentOrderByRelationAggregateInput
    statusHistory?: RegistrationStatusHistoryOrderByRelationAggregateInput
  }

  export type PartnerRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    applicationId?: string
    merchantId?: string
    AND?: PartnerRegistrationWhereInput | PartnerRegistrationWhereInput[]
    OR?: PartnerRegistrationWhereInput[]
    NOT?: PartnerRegistrationWhereInput | PartnerRegistrationWhereInput[]
    currentStep?: IntFilter<"PartnerRegistration"> | number
    status?: StringFilter<"PartnerRegistration"> | string
    businessType?: StringFilter<"PartnerRegistration"> | string
    businessName?: StringFilter<"PartnerRegistration"> | string
    ownerName?: StringFilter<"PartnerRegistration"> | string
    mobileNumber?: StringFilter<"PartnerRegistration"> | string
    email?: StringNullableFilter<"PartnerRegistration"> | string | null
    businessCategory?: StringFilter<"PartnerRegistration"> | string
    businessDescription?: StringFilter<"PartnerRegistration"> | string
    pincode?: StringFilter<"PartnerRegistration"> | string
    state?: StringFilter<"PartnerRegistration"> | string
    stateCode?: StringFilter<"PartnerRegistration"> | string
    district?: StringFilter<"PartnerRegistration"> | string
    districtCode?: StringFilter<"PartnerRegistration"> | string
    city?: StringFilter<"PartnerRegistration"> | string
    cityCode?: StringFilter<"PartnerRegistration"> | string
    locality?: StringFilter<"PartnerRegistration"> | string
    fullAddress?: StringFilter<"PartnerRegistration"> | string
    latitude?: FloatFilter<"PartnerRegistration"> | number
    longitude?: FloatFilter<"PartnerRegistration"> | number
    homeBusinessPrivacy?: BoolFilter<"PartnerRegistration"> | boolean
    scheduleMode?: StringFilter<"PartnerRegistration"> | string
    operatingHours?: JsonFilter<"PartnerRegistration">
    holidays?: JsonNullableFilter<"PartnerRegistration">
    temporaryClosure?: JsonNullableFilter<"PartnerRegistration">
    storePickup?: BoolFilter<"PartnerRegistration"> | boolean
    merchantDelivery?: BoolFilter<"PartnerRegistration"> | boolean
    serviceRadius?: StringFilter<"PartnerRegistration"> | string
    serviceRadiusMeters?: IntFilter<"PartnerRegistration"> | number
    minOrderValue?: IntFilter<"PartnerRegistration"> | number
    prepTime?: StringFilter<"PartnerRegistration"> | string
    bankAccountHolder?: StringNullableFilter<"PartnerRegistration"> | string | null
    bankAccountNumber?: StringNullableFilter<"PartnerRegistration"> | string | null
    bankIfscCode?: StringNullableFilter<"PartnerRegistration"> | string | null
    bankName?: StringNullableFilter<"PartnerRegistration"> | string | null
    categoryLicenceUrl?: StringNullableFilter<"PartnerRegistration"> | string | null
    categoryLicenceName?: StringNullableFilter<"PartnerRegistration"> | string | null
    termsAgreed?: BoolFilter<"PartnerRegistration"> | boolean
    submittedAt?: DateTimeNullableFilter<"PartnerRegistration"> | Date | string | null
    reviewedAt?: DateTimeNullableFilter<"PartnerRegistration"> | Date | string | null
    reviewNotes?: StringNullableFilter<"PartnerRegistration"> | string | null
    createdAt?: DateTimeFilter<"PartnerRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerRegistration"> | Date | string
    merchant?: XOR<MerchantNullableRelationFilter, MerchantWhereInput> | null
    documents?: RegistrationDocumentListRelationFilter
    statusHistory?: RegistrationStatusHistoryListRelationFilter
  }, "id" | "applicationId" | "merchantId">

  export type PartnerRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    merchantId?: SortOrderInput | SortOrder
    currentStep?: SortOrder
    status?: SortOrder
    businessType?: SortOrder
    businessName?: SortOrder
    ownerName?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    businessCategory?: SortOrder
    businessDescription?: SortOrder
    pincode?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    locality?: SortOrder
    fullAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    homeBusinessPrivacy?: SortOrder
    scheduleMode?: SortOrder
    operatingHours?: SortOrder
    holidays?: SortOrderInput | SortOrder
    temporaryClosure?: SortOrderInput | SortOrder
    storePickup?: SortOrder
    merchantDelivery?: SortOrder
    serviceRadius?: SortOrder
    serviceRadiusMeters?: SortOrder
    minOrderValue?: SortOrder
    prepTime?: SortOrder
    bankAccountHolder?: SortOrderInput | SortOrder
    bankAccountNumber?: SortOrderInput | SortOrder
    bankIfscCode?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    categoryLicenceUrl?: SortOrderInput | SortOrder
    categoryLicenceName?: SortOrderInput | SortOrder
    termsAgreed?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnerRegistrationCountOrderByAggregateInput
    _avg?: PartnerRegistrationAvgOrderByAggregateInput
    _max?: PartnerRegistrationMaxOrderByAggregateInput
    _min?: PartnerRegistrationMinOrderByAggregateInput
    _sum?: PartnerRegistrationSumOrderByAggregateInput
  }

  export type PartnerRegistrationScalarWhereWithAggregatesInput = {
    AND?: PartnerRegistrationScalarWhereWithAggregatesInput | PartnerRegistrationScalarWhereWithAggregatesInput[]
    OR?: PartnerRegistrationScalarWhereWithAggregatesInput[]
    NOT?: PartnerRegistrationScalarWhereWithAggregatesInput | PartnerRegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    applicationId?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    merchantId?: StringNullableWithAggregatesFilter<"PartnerRegistration"> | string | null
    currentStep?: IntWithAggregatesFilter<"PartnerRegistration"> | number
    status?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    businessType?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    businessName?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    ownerName?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    mobileNumber?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    email?: StringNullableWithAggregatesFilter<"PartnerRegistration"> | string | null
    businessCategory?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    businessDescription?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    pincode?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    state?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    stateCode?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    district?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    districtCode?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    city?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    cityCode?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    locality?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    fullAddress?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    latitude?: FloatWithAggregatesFilter<"PartnerRegistration"> | number
    longitude?: FloatWithAggregatesFilter<"PartnerRegistration"> | number
    homeBusinessPrivacy?: BoolWithAggregatesFilter<"PartnerRegistration"> | boolean
    scheduleMode?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    operatingHours?: JsonWithAggregatesFilter<"PartnerRegistration">
    holidays?: JsonNullableWithAggregatesFilter<"PartnerRegistration">
    temporaryClosure?: JsonNullableWithAggregatesFilter<"PartnerRegistration">
    storePickup?: BoolWithAggregatesFilter<"PartnerRegistration"> | boolean
    merchantDelivery?: BoolWithAggregatesFilter<"PartnerRegistration"> | boolean
    serviceRadius?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    serviceRadiusMeters?: IntWithAggregatesFilter<"PartnerRegistration"> | number
    minOrderValue?: IntWithAggregatesFilter<"PartnerRegistration"> | number
    prepTime?: StringWithAggregatesFilter<"PartnerRegistration"> | string
    bankAccountHolder?: StringNullableWithAggregatesFilter<"PartnerRegistration"> | string | null
    bankAccountNumber?: StringNullableWithAggregatesFilter<"PartnerRegistration"> | string | null
    bankIfscCode?: StringNullableWithAggregatesFilter<"PartnerRegistration"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"PartnerRegistration"> | string | null
    categoryLicenceUrl?: StringNullableWithAggregatesFilter<"PartnerRegistration"> | string | null
    categoryLicenceName?: StringNullableWithAggregatesFilter<"PartnerRegistration"> | string | null
    termsAgreed?: BoolWithAggregatesFilter<"PartnerRegistration"> | boolean
    submittedAt?: DateTimeNullableWithAggregatesFilter<"PartnerRegistration"> | Date | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"PartnerRegistration"> | Date | string | null
    reviewNotes?: StringNullableWithAggregatesFilter<"PartnerRegistration"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PartnerRegistration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PartnerRegistration"> | Date | string
  }

  export type RegistrationDocumentWhereInput = {
    AND?: RegistrationDocumentWhereInput | RegistrationDocumentWhereInput[]
    OR?: RegistrationDocumentWhereInput[]
    NOT?: RegistrationDocumentWhereInput | RegistrationDocumentWhereInput[]
    id?: StringFilter<"RegistrationDocument"> | string
    registrationId?: StringFilter<"RegistrationDocument"> | string
    documentType?: StringFilter<"RegistrationDocument"> | string
    fileName?: StringFilter<"RegistrationDocument"> | string
    fileUrl?: StringFilter<"RegistrationDocument"> | string
    fileSize?: StringNullableFilter<"RegistrationDocument"> | string | null
    verificationStatus?: StringFilter<"RegistrationDocument"> | string
    rejectionReason?: StringNullableFilter<"RegistrationDocument"> | string | null
    uploadedAt?: DateTimeFilter<"RegistrationDocument"> | Date | string
    registration?: XOR<PartnerRegistrationRelationFilter, PartnerRegistrationWhereInput>
  }

  export type RegistrationDocumentOrderByWithRelationInput = {
    id?: SortOrder
    registrationId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    registration?: PartnerRegistrationOrderByWithRelationInput
  }

  export type RegistrationDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistrationDocumentWhereInput | RegistrationDocumentWhereInput[]
    OR?: RegistrationDocumentWhereInput[]
    NOT?: RegistrationDocumentWhereInput | RegistrationDocumentWhereInput[]
    registrationId?: StringFilter<"RegistrationDocument"> | string
    documentType?: StringFilter<"RegistrationDocument"> | string
    fileName?: StringFilter<"RegistrationDocument"> | string
    fileUrl?: StringFilter<"RegistrationDocument"> | string
    fileSize?: StringNullableFilter<"RegistrationDocument"> | string | null
    verificationStatus?: StringFilter<"RegistrationDocument"> | string
    rejectionReason?: StringNullableFilter<"RegistrationDocument"> | string | null
    uploadedAt?: DateTimeFilter<"RegistrationDocument"> | Date | string
    registration?: XOR<PartnerRegistrationRelationFilter, PartnerRegistrationWhereInput>
  }, "id">

  export type RegistrationDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    registrationId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    _count?: RegistrationDocumentCountOrderByAggregateInput
    _max?: RegistrationDocumentMaxOrderByAggregateInput
    _min?: RegistrationDocumentMinOrderByAggregateInput
  }

  export type RegistrationDocumentScalarWhereWithAggregatesInput = {
    AND?: RegistrationDocumentScalarWhereWithAggregatesInput | RegistrationDocumentScalarWhereWithAggregatesInput[]
    OR?: RegistrationDocumentScalarWhereWithAggregatesInput[]
    NOT?: RegistrationDocumentScalarWhereWithAggregatesInput | RegistrationDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistrationDocument"> | string
    registrationId?: StringWithAggregatesFilter<"RegistrationDocument"> | string
    documentType?: StringWithAggregatesFilter<"RegistrationDocument"> | string
    fileName?: StringWithAggregatesFilter<"RegistrationDocument"> | string
    fileUrl?: StringWithAggregatesFilter<"RegistrationDocument"> | string
    fileSize?: StringNullableWithAggregatesFilter<"RegistrationDocument"> | string | null
    verificationStatus?: StringWithAggregatesFilter<"RegistrationDocument"> | string
    rejectionReason?: StringNullableWithAggregatesFilter<"RegistrationDocument"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"RegistrationDocument"> | Date | string
  }

  export type RegistrationStatusHistoryWhereInput = {
    AND?: RegistrationStatusHistoryWhereInput | RegistrationStatusHistoryWhereInput[]
    OR?: RegistrationStatusHistoryWhereInput[]
    NOT?: RegistrationStatusHistoryWhereInput | RegistrationStatusHistoryWhereInput[]
    id?: StringFilter<"RegistrationStatusHistory"> | string
    registrationId?: StringFilter<"RegistrationStatusHistory"> | string
    fromStatus?: StringFilter<"RegistrationStatusHistory"> | string
    toStatus?: StringFilter<"RegistrationStatusHistory"> | string
    changedBy?: StringFilter<"RegistrationStatusHistory"> | string
    reason?: StringNullableFilter<"RegistrationStatusHistory"> | string | null
    notes?: StringNullableFilter<"RegistrationStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"RegistrationStatusHistory"> | Date | string
    registration?: XOR<PartnerRegistrationRelationFilter, PartnerRegistrationWhereInput>
  }

  export type RegistrationStatusHistoryOrderByWithRelationInput = {
    id?: SortOrder
    registrationId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    registration?: PartnerRegistrationOrderByWithRelationInput
  }

  export type RegistrationStatusHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistrationStatusHistoryWhereInput | RegistrationStatusHistoryWhereInput[]
    OR?: RegistrationStatusHistoryWhereInput[]
    NOT?: RegistrationStatusHistoryWhereInput | RegistrationStatusHistoryWhereInput[]
    registrationId?: StringFilter<"RegistrationStatusHistory"> | string
    fromStatus?: StringFilter<"RegistrationStatusHistory"> | string
    toStatus?: StringFilter<"RegistrationStatusHistory"> | string
    changedBy?: StringFilter<"RegistrationStatusHistory"> | string
    reason?: StringNullableFilter<"RegistrationStatusHistory"> | string | null
    notes?: StringNullableFilter<"RegistrationStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"RegistrationStatusHistory"> | Date | string
    registration?: XOR<PartnerRegistrationRelationFilter, PartnerRegistrationWhereInput>
  }, "id">

  export type RegistrationStatusHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    registrationId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RegistrationStatusHistoryCountOrderByAggregateInput
    _max?: RegistrationStatusHistoryMaxOrderByAggregateInput
    _min?: RegistrationStatusHistoryMinOrderByAggregateInput
  }

  export type RegistrationStatusHistoryScalarWhereWithAggregatesInput = {
    AND?: RegistrationStatusHistoryScalarWhereWithAggregatesInput | RegistrationStatusHistoryScalarWhereWithAggregatesInput[]
    OR?: RegistrationStatusHistoryScalarWhereWithAggregatesInput[]
    NOT?: RegistrationStatusHistoryScalarWhereWithAggregatesInput | RegistrationStatusHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistrationStatusHistory"> | string
    registrationId?: StringWithAggregatesFilter<"RegistrationStatusHistory"> | string
    fromStatus?: StringWithAggregatesFilter<"RegistrationStatusHistory"> | string
    toStatus?: StringWithAggregatesFilter<"RegistrationStatusHistory"> | string
    changedBy?: StringWithAggregatesFilter<"RegistrationStatusHistory"> | string
    reason?: StringNullableWithAggregatesFilter<"RegistrationStatusHistory"> | string | null
    notes?: StringNullableWithAggregatesFilter<"RegistrationStatusHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RegistrationStatusHistory"> | Date | string
  }

  export type PlatformCityWhereInput = {
    AND?: PlatformCityWhereInput | PlatformCityWhereInput[]
    OR?: PlatformCityWhereInput[]
    NOT?: PlatformCityWhereInput | PlatformCityWhereInput[]
    id?: StringFilter<"PlatformCity"> | string
    code?: StringFilter<"PlatformCity"> | string
    name?: StringFilter<"PlatformCity"> | string
    state?: StringFilter<"PlatformCity"> | string
    stateCode?: StringFilter<"PlatformCity"> | string
    district?: StringFilter<"PlatformCity"> | string
    districtCode?: StringFilter<"PlatformCity"> | string
    status?: StringFilter<"PlatformCity"> | string
    managerName?: StringNullableFilter<"PlatformCity"> | string | null
    managerEmail?: StringNullableFilter<"PlatformCity"> | string | null
    createdAt?: DateTimeFilter<"PlatformCity"> | Date | string
    updatedAt?: DateTimeFilter<"PlatformCity"> | Date | string
    localities?: ServiceableLocalityListRelationFilter
  }

  export type PlatformCityOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    status?: SortOrder
    managerName?: SortOrderInput | SortOrder
    managerEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localities?: ServiceableLocalityOrderByRelationAggregateInput
  }

  export type PlatformCityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PlatformCityWhereInput | PlatformCityWhereInput[]
    OR?: PlatformCityWhereInput[]
    NOT?: PlatformCityWhereInput | PlatformCityWhereInput[]
    name?: StringFilter<"PlatformCity"> | string
    state?: StringFilter<"PlatformCity"> | string
    stateCode?: StringFilter<"PlatformCity"> | string
    district?: StringFilter<"PlatformCity"> | string
    districtCode?: StringFilter<"PlatformCity"> | string
    status?: StringFilter<"PlatformCity"> | string
    managerName?: StringNullableFilter<"PlatformCity"> | string | null
    managerEmail?: StringNullableFilter<"PlatformCity"> | string | null
    createdAt?: DateTimeFilter<"PlatformCity"> | Date | string
    updatedAt?: DateTimeFilter<"PlatformCity"> | Date | string
    localities?: ServiceableLocalityListRelationFilter
  }, "id" | "code">

  export type PlatformCityOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    status?: SortOrder
    managerName?: SortOrderInput | SortOrder
    managerEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlatformCityCountOrderByAggregateInput
    _max?: PlatformCityMaxOrderByAggregateInput
    _min?: PlatformCityMinOrderByAggregateInput
  }

  export type PlatformCityScalarWhereWithAggregatesInput = {
    AND?: PlatformCityScalarWhereWithAggregatesInput | PlatformCityScalarWhereWithAggregatesInput[]
    OR?: PlatformCityScalarWhereWithAggregatesInput[]
    NOT?: PlatformCityScalarWhereWithAggregatesInput | PlatformCityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlatformCity"> | string
    code?: StringWithAggregatesFilter<"PlatformCity"> | string
    name?: StringWithAggregatesFilter<"PlatformCity"> | string
    state?: StringWithAggregatesFilter<"PlatformCity"> | string
    stateCode?: StringWithAggregatesFilter<"PlatformCity"> | string
    district?: StringWithAggregatesFilter<"PlatformCity"> | string
    districtCode?: StringWithAggregatesFilter<"PlatformCity"> | string
    status?: StringWithAggregatesFilter<"PlatformCity"> | string
    managerName?: StringNullableWithAggregatesFilter<"PlatformCity"> | string | null
    managerEmail?: StringNullableWithAggregatesFilter<"PlatformCity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PlatformCity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlatformCity"> | Date | string
  }

  export type ServiceableLocalityWhereInput = {
    AND?: ServiceableLocalityWhereInput | ServiceableLocalityWhereInput[]
    OR?: ServiceableLocalityWhereInput[]
    NOT?: ServiceableLocalityWhereInput | ServiceableLocalityWhereInput[]
    id?: StringFilter<"ServiceableLocality"> | string
    name?: StringFilter<"ServiceableLocality"> | string
    pincode?: StringFilter<"ServiceableLocality"> | string
    cityCode?: StringFilter<"ServiceableLocality"> | string
    cityName?: StringFilter<"ServiceableLocality"> | string
    district?: StringFilter<"ServiceableLocality"> | string
    state?: StringFilter<"ServiceableLocality"> | string
    latitude?: FloatFilter<"ServiceableLocality"> | number
    longitude?: FloatFilter<"ServiceableLocality"> | number
    radiusMeters?: IntFilter<"ServiceableLocality"> | number
    status?: StringFilter<"ServiceableLocality"> | string
    geoJson?: JsonNullableFilter<"ServiceableLocality">
    createdAt?: DateTimeFilter<"ServiceableLocality"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceableLocality"> | Date | string
    city?: XOR<PlatformCityNullableRelationFilter, PlatformCityWhereInput> | null
  }

  export type ServiceableLocalityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pincode?: SortOrder
    cityCode?: SortOrder
    cityName?: SortOrder
    district?: SortOrder
    state?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
    status?: SortOrder
    geoJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    city?: PlatformCityOrderByWithRelationInput
  }

  export type ServiceableLocalityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cityCode_name?: ServiceableLocalityCityCodeNameCompoundUniqueInput
    AND?: ServiceableLocalityWhereInput | ServiceableLocalityWhereInput[]
    OR?: ServiceableLocalityWhereInput[]
    NOT?: ServiceableLocalityWhereInput | ServiceableLocalityWhereInput[]
    name?: StringFilter<"ServiceableLocality"> | string
    pincode?: StringFilter<"ServiceableLocality"> | string
    cityCode?: StringFilter<"ServiceableLocality"> | string
    cityName?: StringFilter<"ServiceableLocality"> | string
    district?: StringFilter<"ServiceableLocality"> | string
    state?: StringFilter<"ServiceableLocality"> | string
    latitude?: FloatFilter<"ServiceableLocality"> | number
    longitude?: FloatFilter<"ServiceableLocality"> | number
    radiusMeters?: IntFilter<"ServiceableLocality"> | number
    status?: StringFilter<"ServiceableLocality"> | string
    geoJson?: JsonNullableFilter<"ServiceableLocality">
    createdAt?: DateTimeFilter<"ServiceableLocality"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceableLocality"> | Date | string
    city?: XOR<PlatformCityNullableRelationFilter, PlatformCityWhereInput> | null
  }, "id" | "cityCode_name">

  export type ServiceableLocalityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    pincode?: SortOrder
    cityCode?: SortOrder
    cityName?: SortOrder
    district?: SortOrder
    state?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
    status?: SortOrder
    geoJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceableLocalityCountOrderByAggregateInput
    _avg?: ServiceableLocalityAvgOrderByAggregateInput
    _max?: ServiceableLocalityMaxOrderByAggregateInput
    _min?: ServiceableLocalityMinOrderByAggregateInput
    _sum?: ServiceableLocalitySumOrderByAggregateInput
  }

  export type ServiceableLocalityScalarWhereWithAggregatesInput = {
    AND?: ServiceableLocalityScalarWhereWithAggregatesInput | ServiceableLocalityScalarWhereWithAggregatesInput[]
    OR?: ServiceableLocalityScalarWhereWithAggregatesInput[]
    NOT?: ServiceableLocalityScalarWhereWithAggregatesInput | ServiceableLocalityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceableLocality"> | string
    name?: StringWithAggregatesFilter<"ServiceableLocality"> | string
    pincode?: StringWithAggregatesFilter<"ServiceableLocality"> | string
    cityCode?: StringWithAggregatesFilter<"ServiceableLocality"> | string
    cityName?: StringWithAggregatesFilter<"ServiceableLocality"> | string
    district?: StringWithAggregatesFilter<"ServiceableLocality"> | string
    state?: StringWithAggregatesFilter<"ServiceableLocality"> | string
    latitude?: FloatWithAggregatesFilter<"ServiceableLocality"> | number
    longitude?: FloatWithAggregatesFilter<"ServiceableLocality"> | number
    radiusMeters?: IntWithAggregatesFilter<"ServiceableLocality"> | number
    status?: StringWithAggregatesFilter<"ServiceableLocality"> | string
    geoJson?: JsonNullableWithAggregatesFilter<"ServiceableLocality">
    createdAt?: DateTimeWithAggregatesFilter<"ServiceableLocality"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceableLocality"> | Date | string
  }

  export type ShopAuditLogWhereInput = {
    AND?: ShopAuditLogWhereInput | ShopAuditLogWhereInput[]
    OR?: ShopAuditLogWhereInput[]
    NOT?: ShopAuditLogWhereInput | ShopAuditLogWhereInput[]
    id?: StringFilter<"ShopAuditLog"> | string
    tenantId?: StringFilter<"ShopAuditLog"> | string
    outletId?: StringNullableFilter<"ShopAuditLog"> | string | null
    actorStaffId?: StringFilter<"ShopAuditLog"> | string
    actorName?: StringFilter<"ShopAuditLog"> | string
    actorRole?: StringFilter<"ShopAuditLog"> | string
    authMode?: StringFilter<"ShopAuditLog"> | string
    module?: StringFilter<"ShopAuditLog"> | string
    action?: StringFilter<"ShopAuditLog"> | string
    targetType?: StringNullableFilter<"ShopAuditLog"> | string | null
    targetId?: StringNullableFilter<"ShopAuditLog"> | string | null
    targetLabel?: StringNullableFilter<"ShopAuditLog"> | string | null
    beforeState?: JsonNullableFilter<"ShopAuditLog">
    afterState?: JsonNullableFilter<"ShopAuditLog">
    notes?: StringNullableFilter<"ShopAuditLog"> | string | null
    createdAt?: DateTimeFilter<"ShopAuditLog"> | Date | string
  }

  export type ShopAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrderInput | SortOrder
    actorStaffId?: SortOrder
    actorName?: SortOrder
    actorRole?: SortOrder
    authMode?: SortOrder
    module?: SortOrder
    action?: SortOrder
    targetType?: SortOrderInput | SortOrder
    targetId?: SortOrderInput | SortOrder
    targetLabel?: SortOrderInput | SortOrder
    beforeState?: SortOrderInput | SortOrder
    afterState?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ShopAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopAuditLogWhereInput | ShopAuditLogWhereInput[]
    OR?: ShopAuditLogWhereInput[]
    NOT?: ShopAuditLogWhereInput | ShopAuditLogWhereInput[]
    tenantId?: StringFilter<"ShopAuditLog"> | string
    outletId?: StringNullableFilter<"ShopAuditLog"> | string | null
    actorStaffId?: StringFilter<"ShopAuditLog"> | string
    actorName?: StringFilter<"ShopAuditLog"> | string
    actorRole?: StringFilter<"ShopAuditLog"> | string
    authMode?: StringFilter<"ShopAuditLog"> | string
    module?: StringFilter<"ShopAuditLog"> | string
    action?: StringFilter<"ShopAuditLog"> | string
    targetType?: StringNullableFilter<"ShopAuditLog"> | string | null
    targetId?: StringNullableFilter<"ShopAuditLog"> | string | null
    targetLabel?: StringNullableFilter<"ShopAuditLog"> | string | null
    beforeState?: JsonNullableFilter<"ShopAuditLog">
    afterState?: JsonNullableFilter<"ShopAuditLog">
    notes?: StringNullableFilter<"ShopAuditLog"> | string | null
    createdAt?: DateTimeFilter<"ShopAuditLog"> | Date | string
  }, "id">

  export type ShopAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrderInput | SortOrder
    actorStaffId?: SortOrder
    actorName?: SortOrder
    actorRole?: SortOrder
    authMode?: SortOrder
    module?: SortOrder
    action?: SortOrder
    targetType?: SortOrderInput | SortOrder
    targetId?: SortOrderInput | SortOrder
    targetLabel?: SortOrderInput | SortOrder
    beforeState?: SortOrderInput | SortOrder
    afterState?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ShopAuditLogCountOrderByAggregateInput
    _max?: ShopAuditLogMaxOrderByAggregateInput
    _min?: ShopAuditLogMinOrderByAggregateInput
  }

  export type ShopAuditLogScalarWhereWithAggregatesInput = {
    AND?: ShopAuditLogScalarWhereWithAggregatesInput | ShopAuditLogScalarWhereWithAggregatesInput[]
    OR?: ShopAuditLogScalarWhereWithAggregatesInput[]
    NOT?: ShopAuditLogScalarWhereWithAggregatesInput | ShopAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShopAuditLog"> | string
    tenantId?: StringWithAggregatesFilter<"ShopAuditLog"> | string
    outletId?: StringNullableWithAggregatesFilter<"ShopAuditLog"> | string | null
    actorStaffId?: StringWithAggregatesFilter<"ShopAuditLog"> | string
    actorName?: StringWithAggregatesFilter<"ShopAuditLog"> | string
    actorRole?: StringWithAggregatesFilter<"ShopAuditLog"> | string
    authMode?: StringWithAggregatesFilter<"ShopAuditLog"> | string
    module?: StringWithAggregatesFilter<"ShopAuditLog"> | string
    action?: StringWithAggregatesFilter<"ShopAuditLog"> | string
    targetType?: StringNullableWithAggregatesFilter<"ShopAuditLog"> | string | null
    targetId?: StringNullableWithAggregatesFilter<"ShopAuditLog"> | string | null
    targetLabel?: StringNullableWithAggregatesFilter<"ShopAuditLog"> | string | null
    beforeState?: JsonNullableWithAggregatesFilter<"ShopAuditLog">
    afterState?: JsonNullableWithAggregatesFilter<"ShopAuditLog">
    notes?: StringNullableWithAggregatesFilter<"ShopAuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ShopAuditLog"> | Date | string
  }

  export type MarketingBannerWhereInput = {
    AND?: MarketingBannerWhereInput | MarketingBannerWhereInput[]
    OR?: MarketingBannerWhereInput[]
    NOT?: MarketingBannerWhereInput | MarketingBannerWhereInput[]
    id?: StringFilter<"MarketingBanner"> | string
    title?: StringFilter<"MarketingBanner"> | string
    highlightText?: StringNullableFilter<"MarketingBanner"> | string | null
    subtitle?: StringFilter<"MarketingBanner"> | string
    badgeText?: StringNullableFilter<"MarketingBanner"> | string | null
    ctaLabel?: StringFilter<"MarketingBanner"> | string
    actionType?: StringFilter<"MarketingBanner"> | string
    actionTarget?: StringNullableFilter<"MarketingBanner"> | string | null
    visualIcons?: StringFilter<"MarketingBanner"> | string
    imageUrl?: StringNullableFilter<"MarketingBanner"> | string | null
    bgGradient?: StringFilter<"MarketingBanner"> | string
    textColor?: StringFilter<"MarketingBanner"> | string
    highlightColor?: StringFilter<"MarketingBanner"> | string
    cityCode?: StringFilter<"MarketingBanner"> | string
    displayOrder?: IntFilter<"MarketingBanner"> | number
    isActive?: BoolFilter<"MarketingBanner"> | boolean
    startsAt?: DateTimeNullableFilter<"MarketingBanner"> | Date | string | null
    endsAt?: DateTimeNullableFilter<"MarketingBanner"> | Date | string | null
    clickCount?: IntFilter<"MarketingBanner"> | number
    impressionCount?: IntFilter<"MarketingBanner"> | number
    createdAt?: DateTimeFilter<"MarketingBanner"> | Date | string
    updatedAt?: DateTimeFilter<"MarketingBanner"> | Date | string
  }

  export type MarketingBannerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    highlightText?: SortOrderInput | SortOrder
    subtitle?: SortOrder
    badgeText?: SortOrderInput | SortOrder
    ctaLabel?: SortOrder
    actionType?: SortOrder
    actionTarget?: SortOrderInput | SortOrder
    visualIcons?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    bgGradient?: SortOrder
    textColor?: SortOrder
    highlightColor?: SortOrder
    cityCode?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    startsAt?: SortOrderInput | SortOrder
    endsAt?: SortOrderInput | SortOrder
    clickCount?: SortOrder
    impressionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketingBannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarketingBannerWhereInput | MarketingBannerWhereInput[]
    OR?: MarketingBannerWhereInput[]
    NOT?: MarketingBannerWhereInput | MarketingBannerWhereInput[]
    title?: StringFilter<"MarketingBanner"> | string
    highlightText?: StringNullableFilter<"MarketingBanner"> | string | null
    subtitle?: StringFilter<"MarketingBanner"> | string
    badgeText?: StringNullableFilter<"MarketingBanner"> | string | null
    ctaLabel?: StringFilter<"MarketingBanner"> | string
    actionType?: StringFilter<"MarketingBanner"> | string
    actionTarget?: StringNullableFilter<"MarketingBanner"> | string | null
    visualIcons?: StringFilter<"MarketingBanner"> | string
    imageUrl?: StringNullableFilter<"MarketingBanner"> | string | null
    bgGradient?: StringFilter<"MarketingBanner"> | string
    textColor?: StringFilter<"MarketingBanner"> | string
    highlightColor?: StringFilter<"MarketingBanner"> | string
    cityCode?: StringFilter<"MarketingBanner"> | string
    displayOrder?: IntFilter<"MarketingBanner"> | number
    isActive?: BoolFilter<"MarketingBanner"> | boolean
    startsAt?: DateTimeNullableFilter<"MarketingBanner"> | Date | string | null
    endsAt?: DateTimeNullableFilter<"MarketingBanner"> | Date | string | null
    clickCount?: IntFilter<"MarketingBanner"> | number
    impressionCount?: IntFilter<"MarketingBanner"> | number
    createdAt?: DateTimeFilter<"MarketingBanner"> | Date | string
    updatedAt?: DateTimeFilter<"MarketingBanner"> | Date | string
  }, "id">

  export type MarketingBannerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    highlightText?: SortOrderInput | SortOrder
    subtitle?: SortOrder
    badgeText?: SortOrderInput | SortOrder
    ctaLabel?: SortOrder
    actionType?: SortOrder
    actionTarget?: SortOrderInput | SortOrder
    visualIcons?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    bgGradient?: SortOrder
    textColor?: SortOrder
    highlightColor?: SortOrder
    cityCode?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    startsAt?: SortOrderInput | SortOrder
    endsAt?: SortOrderInput | SortOrder
    clickCount?: SortOrder
    impressionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MarketingBannerCountOrderByAggregateInput
    _avg?: MarketingBannerAvgOrderByAggregateInput
    _max?: MarketingBannerMaxOrderByAggregateInput
    _min?: MarketingBannerMinOrderByAggregateInput
    _sum?: MarketingBannerSumOrderByAggregateInput
  }

  export type MarketingBannerScalarWhereWithAggregatesInput = {
    AND?: MarketingBannerScalarWhereWithAggregatesInput | MarketingBannerScalarWhereWithAggregatesInput[]
    OR?: MarketingBannerScalarWhereWithAggregatesInput[]
    NOT?: MarketingBannerScalarWhereWithAggregatesInput | MarketingBannerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketingBanner"> | string
    title?: StringWithAggregatesFilter<"MarketingBanner"> | string
    highlightText?: StringNullableWithAggregatesFilter<"MarketingBanner"> | string | null
    subtitle?: StringWithAggregatesFilter<"MarketingBanner"> | string
    badgeText?: StringNullableWithAggregatesFilter<"MarketingBanner"> | string | null
    ctaLabel?: StringWithAggregatesFilter<"MarketingBanner"> | string
    actionType?: StringWithAggregatesFilter<"MarketingBanner"> | string
    actionTarget?: StringNullableWithAggregatesFilter<"MarketingBanner"> | string | null
    visualIcons?: StringWithAggregatesFilter<"MarketingBanner"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"MarketingBanner"> | string | null
    bgGradient?: StringWithAggregatesFilter<"MarketingBanner"> | string
    textColor?: StringWithAggregatesFilter<"MarketingBanner"> | string
    highlightColor?: StringWithAggregatesFilter<"MarketingBanner"> | string
    cityCode?: StringWithAggregatesFilter<"MarketingBanner"> | string
    displayOrder?: IntWithAggregatesFilter<"MarketingBanner"> | number
    isActive?: BoolWithAggregatesFilter<"MarketingBanner"> | boolean
    startsAt?: DateTimeNullableWithAggregatesFilter<"MarketingBanner"> | Date | string | null
    endsAt?: DateTimeNullableWithAggregatesFilter<"MarketingBanner"> | Date | string | null
    clickCount?: IntWithAggregatesFilter<"MarketingBanner"> | number
    impressionCount?: IntWithAggregatesFilter<"MarketingBanner"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MarketingBanner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MarketingBanner"> | Date | string
  }

  export type MerchantCreateInput = {
    id?: string
    organizationName: string
    legalBusinessName?: string | null
    contactName: string
    contactPhone: string
    email?: string | null
    businessType?: string | null
    category?: string | null
    description?: string | null
    verificationStatus?: string
    isSuspended?: boolean
    suspendedReason?: string | null
    suspendedAt?: Date | string | null
    cityCode?: string
    districtCode?: string
    stateCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outlets?: OutletCreateNestedManyWithoutMerchantInput
    verifications?: VerificationRecordCreateNestedManyWithoutMerchantInput
    partnerApplication?: PartnerRegistrationCreateNestedOneWithoutMerchantInput
  }

  export type MerchantUncheckedCreateInput = {
    id?: string
    organizationName: string
    legalBusinessName?: string | null
    contactName: string
    contactPhone: string
    email?: string | null
    businessType?: string | null
    category?: string | null
    description?: string | null
    verificationStatus?: string
    isSuspended?: boolean
    suspendedReason?: string | null
    suspendedAt?: Date | string | null
    cityCode?: string
    districtCode?: string
    stateCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outlets?: OutletUncheckedCreateNestedManyWithoutMerchantInput
    verifications?: VerificationRecordUncheckedCreateNestedManyWithoutMerchantInput
    partnerApplication?: PartnerRegistrationUncheckedCreateNestedOneWithoutMerchantInput
  }

  export type MerchantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    legalBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cityCode?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlets?: OutletUpdateManyWithoutMerchantNestedInput
    verifications?: VerificationRecordUpdateManyWithoutMerchantNestedInput
    partnerApplication?: PartnerRegistrationUpdateOneWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    legalBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cityCode?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlets?: OutletUncheckedUpdateManyWithoutMerchantNestedInput
    verifications?: VerificationRecordUncheckedUpdateManyWithoutMerchantNestedInput
    partnerApplication?: PartnerRegistrationUncheckedUpdateOneWithoutMerchantNestedInput
  }

  export type MerchantCreateManyInput = {
    id?: string
    organizationName: string
    legalBusinessName?: string | null
    contactName: string
    contactPhone: string
    email?: string | null
    businessType?: string | null
    category?: string | null
    description?: string | null
    verificationStatus?: string
    isSuspended?: boolean
    suspendedReason?: string | null
    suspendedAt?: Date | string | null
    cityCode?: string
    districtCode?: string
    stateCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MerchantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    legalBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cityCode?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerchantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    legalBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cityCode?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletCreateInput = {
    id?: string
    name: string
    sellerMode?: string
    addressLine: string
    locality: string
    city?: string
    cityCode?: string
    district?: string | null
    districtCode?: string | null
    state?: string | null
    stateCode?: string | null
    pincode?: string | null
    latitude: number
    longitude: number
    isAddressPublic?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    deliveryRadiusKm?: number
    minOrderValue?: number
    prepTimeMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutOutletsInput
    hours?: OutletHoursCreateNestedManyWithoutOutletInput
    serviceAreas?: ServiceAreaCreateNestedManyWithoutOutletInput
  }

  export type OutletUncheckedCreateInput = {
    id?: string
    merchantId: string
    name: string
    sellerMode?: string
    addressLine: string
    locality: string
    city?: string
    cityCode?: string
    district?: string | null
    districtCode?: string | null
    state?: string | null
    stateCode?: string | null
    pincode?: string | null
    latitude: number
    longitude: number
    isAddressPublic?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    deliveryRadiusKm?: number
    minOrderValue?: number
    prepTimeMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hours?: OutletHoursUncheckedCreateNestedManyWithoutOutletInput
    serviceAreas?: ServiceAreaUncheckedCreateNestedManyWithoutOutletInput
  }

  export type OutletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerMode?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    districtCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isAddressPublic?: BoolFieldUpdateOperationsInput | boolean
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    deliveryRadiusKm?: FloatFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTimeMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutOutletsNestedInput
    hours?: OutletHoursUpdateManyWithoutOutletNestedInput
    serviceAreas?: ServiceAreaUpdateManyWithoutOutletNestedInput
  }

  export type OutletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerMode?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    districtCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isAddressPublic?: BoolFieldUpdateOperationsInput | boolean
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    deliveryRadiusKm?: FloatFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTimeMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: OutletHoursUncheckedUpdateManyWithoutOutletNestedInput
    serviceAreas?: ServiceAreaUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type OutletCreateManyInput = {
    id?: string
    merchantId: string
    name: string
    sellerMode?: string
    addressLine: string
    locality: string
    city?: string
    cityCode?: string
    district?: string | null
    districtCode?: string | null
    state?: string | null
    stateCode?: string | null
    pincode?: string | null
    latitude: number
    longitude: number
    isAddressPublic?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    deliveryRadiusKm?: number
    minOrderValue?: number
    prepTimeMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerMode?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    districtCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isAddressPublic?: BoolFieldUpdateOperationsInput | boolean
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    deliveryRadiusKm?: FloatFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTimeMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerMode?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    districtCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isAddressPublic?: BoolFieldUpdateOperationsInput | boolean
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    deliveryRadiusKm?: FloatFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTimeMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletHoursCreateInput = {
    id?: string
    dayOfWeek: number
    openTime: string
    closeTime: string
    breakTime?: string | null
    isClosed?: boolean
    outlet: OutletCreateNestedOneWithoutHoursInput
  }

  export type OutletHoursUncheckedCreateInput = {
    id?: string
    outletId: string
    dayOfWeek: number
    openTime: string
    closeTime: string
    breakTime?: string | null
    isClosed?: boolean
  }

  export type OutletHoursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    breakTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    outlet?: OutletUpdateOneRequiredWithoutHoursNestedInput
  }

  export type OutletHoursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    breakTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OutletHoursCreateManyInput = {
    id?: string
    outletId: string
    dayOfWeek: number
    openTime: string
    closeTime: string
    breakTime?: string | null
    isClosed?: boolean
  }

  export type OutletHoursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    breakTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OutletHoursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    breakTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceAreaCreateInput = {
    id?: string
    radiusMeters: number
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    outlet: OutletCreateNestedOneWithoutServiceAreasInput
  }

  export type ServiceAreaUncheckedCreateInput = {
    id?: string
    outletId: string
    radiusMeters: number
    geoJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServiceAreaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    outlet?: OutletUpdateOneRequiredWithoutServiceAreasNestedInput
  }

  export type ServiceAreaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    geoJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServiceAreaCreateManyInput = {
    id?: string
    outletId: string
    radiusMeters: number
    geoJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServiceAreaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    geoJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServiceAreaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    geoJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VerificationRecordCreateInput = {
    id?: string
    documentType: string
    documentUrl: string
    status?: string
    notes?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutVerificationsInput
  }

  export type VerificationRecordUncheckedCreateInput = {
    id?: string
    merchantId: string
    documentType: string
    documentUrl: string
    status?: string
    notes?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type VerificationRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutVerificationsNestedInput
  }

  export type VerificationRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRecordCreateManyInput = {
    id?: string
    merchantId: string
    documentType: string
    documentUrl: string
    status?: string
    notes?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type VerificationRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerRegistrationCreateInput = {
    id?: string
    applicationId: string
    currentStep?: number
    status?: string
    businessType?: string
    businessName: string
    ownerName: string
    mobileNumber: string
    email?: string | null
    businessCategory?: string
    businessDescription: string
    pincode: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    city?: string
    cityCode?: string
    locality?: string
    fullAddress: string
    latitude?: number
    longitude?: number
    homeBusinessPrivacy?: boolean
    scheduleMode?: string
    operatingHours: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: boolean
    merchantDelivery?: boolean
    serviceRadius?: string
    serviceRadiusMeters?: number
    minOrderValue?: number
    prepTime?: string
    bankAccountHolder?: string | null
    bankAccountNumber?: string | null
    bankIfscCode?: string | null
    bankName?: string | null
    categoryLicenceUrl?: string | null
    categoryLicenceName?: string | null
    termsAgreed?: boolean
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    merchant?: MerchantCreateNestedOneWithoutPartnerApplicationInput
    documents?: RegistrationDocumentCreateNestedManyWithoutRegistrationInput
    statusHistory?: RegistrationStatusHistoryCreateNestedManyWithoutRegistrationInput
  }

  export type PartnerRegistrationUncheckedCreateInput = {
    id?: string
    applicationId: string
    merchantId?: string | null
    currentStep?: number
    status?: string
    businessType?: string
    businessName: string
    ownerName: string
    mobileNumber: string
    email?: string | null
    businessCategory?: string
    businessDescription: string
    pincode: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    city?: string
    cityCode?: string
    locality?: string
    fullAddress: string
    latitude?: number
    longitude?: number
    homeBusinessPrivacy?: boolean
    scheduleMode?: string
    operatingHours: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: boolean
    merchantDelivery?: boolean
    serviceRadius?: string
    serviceRadiusMeters?: number
    minOrderValue?: number
    prepTime?: string
    bankAccountHolder?: string | null
    bankAccountNumber?: string | null
    bankIfscCode?: string | null
    bankName?: string | null
    categoryLicenceUrl?: string | null
    categoryLicenceName?: string | null
    termsAgreed?: boolean
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: RegistrationDocumentUncheckedCreateNestedManyWithoutRegistrationInput
    statusHistory?: RegistrationStatusHistoryUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type PartnerRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: StringFieldUpdateOperationsInput | string
    businessDescription?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    homeBusinessPrivacy?: BoolFieldUpdateOperationsInput | boolean
    scheduleMode?: StringFieldUpdateOperationsInput | string
    operatingHours?: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    serviceRadius?: StringFieldUpdateOperationsInput | string
    serviceRadiusMeters?: IntFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTime?: StringFieldUpdateOperationsInput | string
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankIfscCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceName?: NullableStringFieldUpdateOperationsInput | string | null
    termsAgreed?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneWithoutPartnerApplicationNestedInput
    documents?: RegistrationDocumentUpdateManyWithoutRegistrationNestedInput
    statusHistory?: RegistrationStatusHistoryUpdateManyWithoutRegistrationNestedInput
  }

  export type PartnerRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    merchantId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStep?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: StringFieldUpdateOperationsInput | string
    businessDescription?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    homeBusinessPrivacy?: BoolFieldUpdateOperationsInput | boolean
    scheduleMode?: StringFieldUpdateOperationsInput | string
    operatingHours?: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    serviceRadius?: StringFieldUpdateOperationsInput | string
    serviceRadiusMeters?: IntFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTime?: StringFieldUpdateOperationsInput | string
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankIfscCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceName?: NullableStringFieldUpdateOperationsInput | string | null
    termsAgreed?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: RegistrationDocumentUncheckedUpdateManyWithoutRegistrationNestedInput
    statusHistory?: RegistrationStatusHistoryUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type PartnerRegistrationCreateManyInput = {
    id?: string
    applicationId: string
    merchantId?: string | null
    currentStep?: number
    status?: string
    businessType?: string
    businessName: string
    ownerName: string
    mobileNumber: string
    email?: string | null
    businessCategory?: string
    businessDescription: string
    pincode: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    city?: string
    cityCode?: string
    locality?: string
    fullAddress: string
    latitude?: number
    longitude?: number
    homeBusinessPrivacy?: boolean
    scheduleMode?: string
    operatingHours: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: boolean
    merchantDelivery?: boolean
    serviceRadius?: string
    serviceRadiusMeters?: number
    minOrderValue?: number
    prepTime?: string
    bankAccountHolder?: string | null
    bankAccountNumber?: string | null
    bankIfscCode?: string | null
    bankName?: string | null
    categoryLicenceUrl?: string | null
    categoryLicenceName?: string | null
    termsAgreed?: boolean
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: StringFieldUpdateOperationsInput | string
    businessDescription?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    homeBusinessPrivacy?: BoolFieldUpdateOperationsInput | boolean
    scheduleMode?: StringFieldUpdateOperationsInput | string
    operatingHours?: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    serviceRadius?: StringFieldUpdateOperationsInput | string
    serviceRadiusMeters?: IntFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTime?: StringFieldUpdateOperationsInput | string
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankIfscCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceName?: NullableStringFieldUpdateOperationsInput | string | null
    termsAgreed?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    merchantId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStep?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: StringFieldUpdateOperationsInput | string
    businessDescription?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    homeBusinessPrivacy?: BoolFieldUpdateOperationsInput | boolean
    scheduleMode?: StringFieldUpdateOperationsInput | string
    operatingHours?: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    serviceRadius?: StringFieldUpdateOperationsInput | string
    serviceRadiusMeters?: IntFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTime?: StringFieldUpdateOperationsInput | string
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankIfscCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceName?: NullableStringFieldUpdateOperationsInput | string | null
    termsAgreed?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationDocumentCreateInput = {
    id?: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize?: string | null
    verificationStatus?: string
    rejectionReason?: string | null
    uploadedAt?: Date | string
    registration: PartnerRegistrationCreateNestedOneWithoutDocumentsInput
  }

  export type RegistrationDocumentUncheckedCreateInput = {
    id?: string
    registrationId: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize?: string | null
    verificationStatus?: string
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type RegistrationDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registration?: PartnerRegistrationUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type RegistrationDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationId?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationDocumentCreateManyInput = {
    id?: string
    registrationId: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize?: string | null
    verificationStatus?: string
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type RegistrationDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationId?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationStatusHistoryCreateInput = {
    id?: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason?: string | null
    notes?: string | null
    createdAt?: Date | string
    registration: PartnerRegistrationCreateNestedOneWithoutStatusHistoryInput
  }

  export type RegistrationStatusHistoryUncheckedCreateInput = {
    id?: string
    registrationId: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type RegistrationStatusHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registration?: PartnerRegistrationUpdateOneRequiredWithoutStatusHistoryNestedInput
  }

  export type RegistrationStatusHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationId?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationStatusHistoryCreateManyInput = {
    id?: string
    registrationId: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type RegistrationStatusHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationStatusHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationId?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformCityCreateInput = {
    id?: string
    code: string
    name: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    status?: string
    managerName?: string | null
    managerEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localities?: ServiceableLocalityCreateNestedManyWithoutCityInput
  }

  export type PlatformCityUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    status?: string
    managerName?: string | null
    managerEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    localities?: ServiceableLocalityUncheckedCreateNestedManyWithoutCityInput
  }

  export type PlatformCityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localities?: ServiceableLocalityUpdateManyWithoutCityNestedInput
  }

  export type PlatformCityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localities?: ServiceableLocalityUncheckedUpdateManyWithoutCityNestedInput
  }

  export type PlatformCityCreateManyInput = {
    id?: string
    code: string
    name: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    status?: string
    managerName?: string | null
    managerEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformCityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformCityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceableLocalityCreateInput = {
    id?: string
    name: string
    pincode: string
    cityName: string
    district?: string
    state?: string
    latitude?: number
    longitude?: number
    radiusMeters?: number
    status?: string
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    city?: PlatformCityCreateNestedOneWithoutLocalitiesInput
  }

  export type ServiceableLocalityUncheckedCreateInput = {
    id?: string
    name: string
    pincode: string
    cityCode: string
    cityName: string
    district?: string
    state?: string
    latitude?: number
    longitude?: number
    radiusMeters?: number
    status?: string
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceableLocalityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radiusMeters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: PlatformCityUpdateOneWithoutLocalitiesNestedInput
  }

  export type ServiceableLocalityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radiusMeters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceableLocalityCreateManyInput = {
    id?: string
    name: string
    pincode: string
    cityCode: string
    cityName: string
    district?: string
    state?: string
    latitude?: number
    longitude?: number
    radiusMeters?: number
    status?: string
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceableLocalityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radiusMeters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceableLocalityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radiusMeters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopAuditLogCreateInput = {
    id?: string
    tenantId: string
    outletId?: string | null
    actorStaffId: string
    actorName: string
    actorRole: string
    authMode?: string
    module: string
    action: string
    targetType?: string | null
    targetId?: string | null
    targetLabel?: string | null
    beforeState?: NullableJsonNullValueInput | InputJsonValue
    afterState?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
  }

  export type ShopAuditLogUncheckedCreateInput = {
    id?: string
    tenantId: string
    outletId?: string | null
    actorStaffId: string
    actorName: string
    actorRole: string
    authMode?: string
    module: string
    action: string
    targetType?: string | null
    targetId?: string | null
    targetLabel?: string | null
    beforeState?: NullableJsonNullValueInput | InputJsonValue
    afterState?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
  }

  export type ShopAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    actorStaffId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    actorRole?: StringFieldUpdateOperationsInput | string
    authMode?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    beforeState?: NullableJsonNullValueInput | InputJsonValue
    afterState?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    actorStaffId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    actorRole?: StringFieldUpdateOperationsInput | string
    authMode?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    beforeState?: NullableJsonNullValueInput | InputJsonValue
    afterState?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopAuditLogCreateManyInput = {
    id?: string
    tenantId: string
    outletId?: string | null
    actorStaffId: string
    actorName: string
    actorRole: string
    authMode?: string
    module: string
    action: string
    targetType?: string | null
    targetId?: string | null
    targetLabel?: string | null
    beforeState?: NullableJsonNullValueInput | InputJsonValue
    afterState?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
  }

  export type ShopAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    actorStaffId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    actorRole?: StringFieldUpdateOperationsInput | string
    authMode?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    beforeState?: NullableJsonNullValueInput | InputJsonValue
    afterState?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    actorStaffId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    actorRole?: StringFieldUpdateOperationsInput | string
    authMode?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    beforeState?: NullableJsonNullValueInput | InputJsonValue
    afterState?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingBannerCreateInput = {
    id?: string
    title: string
    highlightText?: string | null
    subtitle: string
    badgeText?: string | null
    ctaLabel?: string
    actionType?: string
    actionTarget?: string | null
    visualIcons?: string
    imageUrl?: string | null
    bgGradient?: string
    textColor?: string
    highlightColor?: string
    cityCode?: string
    displayOrder?: number
    isActive?: boolean
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    clickCount?: number
    impressionCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketingBannerUncheckedCreateInput = {
    id?: string
    title: string
    highlightText?: string | null
    subtitle: string
    badgeText?: string | null
    ctaLabel?: string
    actionType?: string
    actionTarget?: string | null
    visualIcons?: string
    imageUrl?: string | null
    bgGradient?: string
    textColor?: string
    highlightColor?: string
    cityCode?: string
    displayOrder?: number
    isActive?: boolean
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    clickCount?: number
    impressionCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketingBannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlightText?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: StringFieldUpdateOperationsInput | string
    badgeText?: NullableStringFieldUpdateOperationsInput | string | null
    ctaLabel?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    actionTarget?: NullableStringFieldUpdateOperationsInput | string | null
    visualIcons?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgGradient?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    highlightColor?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickCount?: IntFieldUpdateOperationsInput | number
    impressionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingBannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlightText?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: StringFieldUpdateOperationsInput | string
    badgeText?: NullableStringFieldUpdateOperationsInput | string | null
    ctaLabel?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    actionTarget?: NullableStringFieldUpdateOperationsInput | string | null
    visualIcons?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgGradient?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    highlightColor?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickCount?: IntFieldUpdateOperationsInput | number
    impressionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingBannerCreateManyInput = {
    id?: string
    title: string
    highlightText?: string | null
    subtitle: string
    badgeText?: string | null
    ctaLabel?: string
    actionType?: string
    actionTarget?: string | null
    visualIcons?: string
    imageUrl?: string | null
    bgGradient?: string
    textColor?: string
    highlightColor?: string
    cityCode?: string
    displayOrder?: number
    isActive?: boolean
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    clickCount?: number
    impressionCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketingBannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlightText?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: StringFieldUpdateOperationsInput | string
    badgeText?: NullableStringFieldUpdateOperationsInput | string | null
    ctaLabel?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    actionTarget?: NullableStringFieldUpdateOperationsInput | string | null
    visualIcons?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgGradient?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    highlightColor?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickCount?: IntFieldUpdateOperationsInput | number
    impressionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingBannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlightText?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: StringFieldUpdateOperationsInput | string
    badgeText?: NullableStringFieldUpdateOperationsInput | string | null
    ctaLabel?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    actionTarget?: NullableStringFieldUpdateOperationsInput | string | null
    visualIcons?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgGradient?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    highlightColor?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickCount?: IntFieldUpdateOperationsInput | number
    impressionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OutletListRelationFilter = {
    every?: OutletWhereInput
    some?: OutletWhereInput
    none?: OutletWhereInput
  }

  export type VerificationRecordListRelationFilter = {
    every?: VerificationRecordWhereInput
    some?: VerificationRecordWhereInput
    none?: VerificationRecordWhereInput
  }

  export type PartnerRegistrationNullableRelationFilter = {
    is?: PartnerRegistrationWhereInput | null
    isNot?: PartnerRegistrationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OutletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MerchantCountOrderByAggregateInput = {
    id?: SortOrder
    organizationName?: SortOrder
    legalBusinessName?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    email?: SortOrder
    businessType?: SortOrder
    category?: SortOrder
    description?: SortOrder
    verificationStatus?: SortOrder
    isSuspended?: SortOrder
    suspendedReason?: SortOrder
    suspendedAt?: SortOrder
    cityCode?: SortOrder
    districtCode?: SortOrder
    stateCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MerchantMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationName?: SortOrder
    legalBusinessName?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    email?: SortOrder
    businessType?: SortOrder
    category?: SortOrder
    description?: SortOrder
    verificationStatus?: SortOrder
    isSuspended?: SortOrder
    suspendedReason?: SortOrder
    suspendedAt?: SortOrder
    cityCode?: SortOrder
    districtCode?: SortOrder
    stateCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MerchantMinOrderByAggregateInput = {
    id?: SortOrder
    organizationName?: SortOrder
    legalBusinessName?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    email?: SortOrder
    businessType?: SortOrder
    category?: SortOrder
    description?: SortOrder
    verificationStatus?: SortOrder
    isSuspended?: SortOrder
    suspendedReason?: SortOrder
    suspendedAt?: SortOrder
    cityCode?: SortOrder
    districtCode?: SortOrder
    stateCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MerchantRelationFilter = {
    is?: MerchantWhereInput
    isNot?: MerchantWhereInput
  }

  export type OutletHoursListRelationFilter = {
    every?: OutletHoursWhereInput
    some?: OutletHoursWhereInput
    none?: OutletHoursWhereInput
  }

  export type ServiceAreaListRelationFilter = {
    every?: ServiceAreaWhereInput
    some?: ServiceAreaWhereInput
    none?: ServiceAreaWhereInput
  }

  export type OutletHoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceAreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutletCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    name?: SortOrder
    sellerMode?: SortOrder
    addressLine?: SortOrder
    locality?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    pincode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isAddressPublic?: SortOrder
    storePickup?: SortOrder
    merchantDelivery?: SortOrder
    deliveryRadiusKm?: SortOrder
    minOrderValue?: SortOrder
    prepTimeMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutletAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    deliveryRadiusKm?: SortOrder
    minOrderValue?: SortOrder
    prepTimeMinutes?: SortOrder
  }

  export type OutletMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    name?: SortOrder
    sellerMode?: SortOrder
    addressLine?: SortOrder
    locality?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    pincode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isAddressPublic?: SortOrder
    storePickup?: SortOrder
    merchantDelivery?: SortOrder
    deliveryRadiusKm?: SortOrder
    minOrderValue?: SortOrder
    prepTimeMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutletMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    name?: SortOrder
    sellerMode?: SortOrder
    addressLine?: SortOrder
    locality?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    pincode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isAddressPublic?: SortOrder
    storePickup?: SortOrder
    merchantDelivery?: SortOrder
    deliveryRadiusKm?: SortOrder
    minOrderValue?: SortOrder
    prepTimeMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutletSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    deliveryRadiusKm?: SortOrder
    minOrderValue?: SortOrder
    prepTimeMinutes?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type OutletRelationFilter = {
    is?: OutletWhereInput
    isNot?: OutletWhereInput
  }

  export type OutletHoursOutletIdDayOfWeekCompoundUniqueInput = {
    outletId: string
    dayOfWeek: number
  }

  export type OutletHoursCountOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    breakTime?: SortOrder
    isClosed?: SortOrder
  }

  export type OutletHoursAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type OutletHoursMaxOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    breakTime?: SortOrder
    isClosed?: SortOrder
  }

  export type OutletHoursMinOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    breakTime?: SortOrder
    isClosed?: SortOrder
  }

  export type OutletHoursSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ServiceAreaCountOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    radiusMeters?: SortOrder
    geoJson?: SortOrder
  }

  export type ServiceAreaAvgOrderByAggregateInput = {
    radiusMeters?: SortOrder
  }

  export type ServiceAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    radiusMeters?: SortOrder
  }

  export type ServiceAreaMinOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    radiusMeters?: SortOrder
  }

  export type ServiceAreaSumOrderByAggregateInput = {
    radiusMeters?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type VerificationRecordCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationRecordMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MerchantNullableRelationFilter = {
    is?: MerchantWhereInput | null
    isNot?: MerchantWhereInput | null
  }

  export type RegistrationDocumentListRelationFilter = {
    every?: RegistrationDocumentWhereInput
    some?: RegistrationDocumentWhereInput
    none?: RegistrationDocumentWhereInput
  }

  export type RegistrationStatusHistoryListRelationFilter = {
    every?: RegistrationStatusHistoryWhereInput
    some?: RegistrationStatusHistoryWhereInput
    none?: RegistrationStatusHistoryWhereInput
  }

  export type RegistrationDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistrationStatusHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartnerRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    merchantId?: SortOrder
    currentStep?: SortOrder
    status?: SortOrder
    businessType?: SortOrder
    businessName?: SortOrder
    ownerName?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    businessCategory?: SortOrder
    businessDescription?: SortOrder
    pincode?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    locality?: SortOrder
    fullAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    homeBusinessPrivacy?: SortOrder
    scheduleMode?: SortOrder
    operatingHours?: SortOrder
    holidays?: SortOrder
    temporaryClosure?: SortOrder
    storePickup?: SortOrder
    merchantDelivery?: SortOrder
    serviceRadius?: SortOrder
    serviceRadiusMeters?: SortOrder
    minOrderValue?: SortOrder
    prepTime?: SortOrder
    bankAccountHolder?: SortOrder
    bankAccountNumber?: SortOrder
    bankIfscCode?: SortOrder
    bankName?: SortOrder
    categoryLicenceUrl?: SortOrder
    categoryLicenceName?: SortOrder
    termsAgreed?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrder
    reviewNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerRegistrationAvgOrderByAggregateInput = {
    currentStep?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    serviceRadiusMeters?: SortOrder
    minOrderValue?: SortOrder
  }

  export type PartnerRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    merchantId?: SortOrder
    currentStep?: SortOrder
    status?: SortOrder
    businessType?: SortOrder
    businessName?: SortOrder
    ownerName?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    businessCategory?: SortOrder
    businessDescription?: SortOrder
    pincode?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    locality?: SortOrder
    fullAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    homeBusinessPrivacy?: SortOrder
    scheduleMode?: SortOrder
    storePickup?: SortOrder
    merchantDelivery?: SortOrder
    serviceRadius?: SortOrder
    serviceRadiusMeters?: SortOrder
    minOrderValue?: SortOrder
    prepTime?: SortOrder
    bankAccountHolder?: SortOrder
    bankAccountNumber?: SortOrder
    bankIfscCode?: SortOrder
    bankName?: SortOrder
    categoryLicenceUrl?: SortOrder
    categoryLicenceName?: SortOrder
    termsAgreed?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrder
    reviewNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    merchantId?: SortOrder
    currentStep?: SortOrder
    status?: SortOrder
    businessType?: SortOrder
    businessName?: SortOrder
    ownerName?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    businessCategory?: SortOrder
    businessDescription?: SortOrder
    pincode?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    locality?: SortOrder
    fullAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    homeBusinessPrivacy?: SortOrder
    scheduleMode?: SortOrder
    storePickup?: SortOrder
    merchantDelivery?: SortOrder
    serviceRadius?: SortOrder
    serviceRadiusMeters?: SortOrder
    minOrderValue?: SortOrder
    prepTime?: SortOrder
    bankAccountHolder?: SortOrder
    bankAccountNumber?: SortOrder
    bankIfscCode?: SortOrder
    bankName?: SortOrder
    categoryLicenceUrl?: SortOrder
    categoryLicenceName?: SortOrder
    termsAgreed?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrder
    reviewNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerRegistrationSumOrderByAggregateInput = {
    currentStep?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    serviceRadiusMeters?: SortOrder
    minOrderValue?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PartnerRegistrationRelationFilter = {
    is?: PartnerRegistrationWhereInput
    isNot?: PartnerRegistrationWhereInput
  }

  export type RegistrationDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    verificationStatus?: SortOrder
    rejectionReason?: SortOrder
    uploadedAt?: SortOrder
  }

  export type RegistrationDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    verificationStatus?: SortOrder
    rejectionReason?: SortOrder
    uploadedAt?: SortOrder
  }

  export type RegistrationDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    verificationStatus?: SortOrder
    rejectionReason?: SortOrder
    uploadedAt?: SortOrder
  }

  export type RegistrationStatusHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistrationStatusHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistrationStatusHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceableLocalityListRelationFilter = {
    every?: ServiceableLocalityWhereInput
    some?: ServiceableLocalityWhereInput
    none?: ServiceableLocalityWhereInput
  }

  export type ServiceableLocalityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlatformCityCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    status?: SortOrder
    managerName?: SortOrder
    managerEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformCityMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    status?: SortOrder
    managerName?: SortOrder
    managerEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformCityMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    status?: SortOrder
    managerName?: SortOrder
    managerEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformCityNullableRelationFilter = {
    is?: PlatformCityWhereInput | null
    isNot?: PlatformCityWhereInput | null
  }

  export type ServiceableLocalityCityCodeNameCompoundUniqueInput = {
    cityCode: string
    name: string
  }

  export type ServiceableLocalityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pincode?: SortOrder
    cityCode?: SortOrder
    cityName?: SortOrder
    district?: SortOrder
    state?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
    status?: SortOrder
    geoJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceableLocalityAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
  }

  export type ServiceableLocalityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pincode?: SortOrder
    cityCode?: SortOrder
    cityName?: SortOrder
    district?: SortOrder
    state?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceableLocalityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pincode?: SortOrder
    cityCode?: SortOrder
    cityName?: SortOrder
    district?: SortOrder
    state?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceableLocalitySumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
  }

  export type ShopAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    actorStaffId?: SortOrder
    actorName?: SortOrder
    actorRole?: SortOrder
    authMode?: SortOrder
    module?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    targetLabel?: SortOrder
    beforeState?: SortOrder
    afterState?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    actorStaffId?: SortOrder
    actorName?: SortOrder
    actorRole?: SortOrder
    authMode?: SortOrder
    module?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    targetLabel?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    actorStaffId?: SortOrder
    actorName?: SortOrder
    actorRole?: SortOrder
    authMode?: SortOrder
    module?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    targetLabel?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingBannerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    highlightText?: SortOrder
    subtitle?: SortOrder
    badgeText?: SortOrder
    ctaLabel?: SortOrder
    actionType?: SortOrder
    actionTarget?: SortOrder
    visualIcons?: SortOrder
    imageUrl?: SortOrder
    bgGradient?: SortOrder
    textColor?: SortOrder
    highlightColor?: SortOrder
    cityCode?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    clickCount?: SortOrder
    impressionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketingBannerAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
    clickCount?: SortOrder
    impressionCount?: SortOrder
  }

  export type MarketingBannerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    highlightText?: SortOrder
    subtitle?: SortOrder
    badgeText?: SortOrder
    ctaLabel?: SortOrder
    actionType?: SortOrder
    actionTarget?: SortOrder
    visualIcons?: SortOrder
    imageUrl?: SortOrder
    bgGradient?: SortOrder
    textColor?: SortOrder
    highlightColor?: SortOrder
    cityCode?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    clickCount?: SortOrder
    impressionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketingBannerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    highlightText?: SortOrder
    subtitle?: SortOrder
    badgeText?: SortOrder
    ctaLabel?: SortOrder
    actionType?: SortOrder
    actionTarget?: SortOrder
    visualIcons?: SortOrder
    imageUrl?: SortOrder
    bgGradient?: SortOrder
    textColor?: SortOrder
    highlightColor?: SortOrder
    cityCode?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    clickCount?: SortOrder
    impressionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketingBannerSumOrderByAggregateInput = {
    displayOrder?: SortOrder
    clickCount?: SortOrder
    impressionCount?: SortOrder
  }

  export type OutletCreateNestedManyWithoutMerchantInput = {
    create?: XOR<OutletCreateWithoutMerchantInput, OutletUncheckedCreateWithoutMerchantInput> | OutletCreateWithoutMerchantInput[] | OutletUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: OutletCreateOrConnectWithoutMerchantInput | OutletCreateOrConnectWithoutMerchantInput[]
    createMany?: OutletCreateManyMerchantInputEnvelope
    connect?: OutletWhereUniqueInput | OutletWhereUniqueInput[]
  }

  export type VerificationRecordCreateNestedManyWithoutMerchantInput = {
    create?: XOR<VerificationRecordCreateWithoutMerchantInput, VerificationRecordUncheckedCreateWithoutMerchantInput> | VerificationRecordCreateWithoutMerchantInput[] | VerificationRecordUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: VerificationRecordCreateOrConnectWithoutMerchantInput | VerificationRecordCreateOrConnectWithoutMerchantInput[]
    createMany?: VerificationRecordCreateManyMerchantInputEnvelope
    connect?: VerificationRecordWhereUniqueInput | VerificationRecordWhereUniqueInput[]
  }

  export type PartnerRegistrationCreateNestedOneWithoutMerchantInput = {
    create?: XOR<PartnerRegistrationCreateWithoutMerchantInput, PartnerRegistrationUncheckedCreateWithoutMerchantInput>
    connectOrCreate?: PartnerRegistrationCreateOrConnectWithoutMerchantInput
    connect?: PartnerRegistrationWhereUniqueInput
  }

  export type OutletUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<OutletCreateWithoutMerchantInput, OutletUncheckedCreateWithoutMerchantInput> | OutletCreateWithoutMerchantInput[] | OutletUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: OutletCreateOrConnectWithoutMerchantInput | OutletCreateOrConnectWithoutMerchantInput[]
    createMany?: OutletCreateManyMerchantInputEnvelope
    connect?: OutletWhereUniqueInput | OutletWhereUniqueInput[]
  }

  export type VerificationRecordUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<VerificationRecordCreateWithoutMerchantInput, VerificationRecordUncheckedCreateWithoutMerchantInput> | VerificationRecordCreateWithoutMerchantInput[] | VerificationRecordUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: VerificationRecordCreateOrConnectWithoutMerchantInput | VerificationRecordCreateOrConnectWithoutMerchantInput[]
    createMany?: VerificationRecordCreateManyMerchantInputEnvelope
    connect?: VerificationRecordWhereUniqueInput | VerificationRecordWhereUniqueInput[]
  }

  export type PartnerRegistrationUncheckedCreateNestedOneWithoutMerchantInput = {
    create?: XOR<PartnerRegistrationCreateWithoutMerchantInput, PartnerRegistrationUncheckedCreateWithoutMerchantInput>
    connectOrCreate?: PartnerRegistrationCreateOrConnectWithoutMerchantInput
    connect?: PartnerRegistrationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OutletUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<OutletCreateWithoutMerchantInput, OutletUncheckedCreateWithoutMerchantInput> | OutletCreateWithoutMerchantInput[] | OutletUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: OutletCreateOrConnectWithoutMerchantInput | OutletCreateOrConnectWithoutMerchantInput[]
    upsert?: OutletUpsertWithWhereUniqueWithoutMerchantInput | OutletUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: OutletCreateManyMerchantInputEnvelope
    set?: OutletWhereUniqueInput | OutletWhereUniqueInput[]
    disconnect?: OutletWhereUniqueInput | OutletWhereUniqueInput[]
    delete?: OutletWhereUniqueInput | OutletWhereUniqueInput[]
    connect?: OutletWhereUniqueInput | OutletWhereUniqueInput[]
    update?: OutletUpdateWithWhereUniqueWithoutMerchantInput | OutletUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: OutletUpdateManyWithWhereWithoutMerchantInput | OutletUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: OutletScalarWhereInput | OutletScalarWhereInput[]
  }

  export type VerificationRecordUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<VerificationRecordCreateWithoutMerchantInput, VerificationRecordUncheckedCreateWithoutMerchantInput> | VerificationRecordCreateWithoutMerchantInput[] | VerificationRecordUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: VerificationRecordCreateOrConnectWithoutMerchantInput | VerificationRecordCreateOrConnectWithoutMerchantInput[]
    upsert?: VerificationRecordUpsertWithWhereUniqueWithoutMerchantInput | VerificationRecordUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: VerificationRecordCreateManyMerchantInputEnvelope
    set?: VerificationRecordWhereUniqueInput | VerificationRecordWhereUniqueInput[]
    disconnect?: VerificationRecordWhereUniqueInput | VerificationRecordWhereUniqueInput[]
    delete?: VerificationRecordWhereUniqueInput | VerificationRecordWhereUniqueInput[]
    connect?: VerificationRecordWhereUniqueInput | VerificationRecordWhereUniqueInput[]
    update?: VerificationRecordUpdateWithWhereUniqueWithoutMerchantInput | VerificationRecordUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: VerificationRecordUpdateManyWithWhereWithoutMerchantInput | VerificationRecordUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: VerificationRecordScalarWhereInput | VerificationRecordScalarWhereInput[]
  }

  export type PartnerRegistrationUpdateOneWithoutMerchantNestedInput = {
    create?: XOR<PartnerRegistrationCreateWithoutMerchantInput, PartnerRegistrationUncheckedCreateWithoutMerchantInput>
    connectOrCreate?: PartnerRegistrationCreateOrConnectWithoutMerchantInput
    upsert?: PartnerRegistrationUpsertWithoutMerchantInput
    disconnect?: PartnerRegistrationWhereInput | boolean
    delete?: PartnerRegistrationWhereInput | boolean
    connect?: PartnerRegistrationWhereUniqueInput
    update?: XOR<XOR<PartnerRegistrationUpdateToOneWithWhereWithoutMerchantInput, PartnerRegistrationUpdateWithoutMerchantInput>, PartnerRegistrationUncheckedUpdateWithoutMerchantInput>
  }

  export type OutletUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<OutletCreateWithoutMerchantInput, OutletUncheckedCreateWithoutMerchantInput> | OutletCreateWithoutMerchantInput[] | OutletUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: OutletCreateOrConnectWithoutMerchantInput | OutletCreateOrConnectWithoutMerchantInput[]
    upsert?: OutletUpsertWithWhereUniqueWithoutMerchantInput | OutletUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: OutletCreateManyMerchantInputEnvelope
    set?: OutletWhereUniqueInput | OutletWhereUniqueInput[]
    disconnect?: OutletWhereUniqueInput | OutletWhereUniqueInput[]
    delete?: OutletWhereUniqueInput | OutletWhereUniqueInput[]
    connect?: OutletWhereUniqueInput | OutletWhereUniqueInput[]
    update?: OutletUpdateWithWhereUniqueWithoutMerchantInput | OutletUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: OutletUpdateManyWithWhereWithoutMerchantInput | OutletUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: OutletScalarWhereInput | OutletScalarWhereInput[]
  }

  export type VerificationRecordUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<VerificationRecordCreateWithoutMerchantInput, VerificationRecordUncheckedCreateWithoutMerchantInput> | VerificationRecordCreateWithoutMerchantInput[] | VerificationRecordUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: VerificationRecordCreateOrConnectWithoutMerchantInput | VerificationRecordCreateOrConnectWithoutMerchantInput[]
    upsert?: VerificationRecordUpsertWithWhereUniqueWithoutMerchantInput | VerificationRecordUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: VerificationRecordCreateManyMerchantInputEnvelope
    set?: VerificationRecordWhereUniqueInput | VerificationRecordWhereUniqueInput[]
    disconnect?: VerificationRecordWhereUniqueInput | VerificationRecordWhereUniqueInput[]
    delete?: VerificationRecordWhereUniqueInput | VerificationRecordWhereUniqueInput[]
    connect?: VerificationRecordWhereUniqueInput | VerificationRecordWhereUniqueInput[]
    update?: VerificationRecordUpdateWithWhereUniqueWithoutMerchantInput | VerificationRecordUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: VerificationRecordUpdateManyWithWhereWithoutMerchantInput | VerificationRecordUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: VerificationRecordScalarWhereInput | VerificationRecordScalarWhereInput[]
  }

  export type PartnerRegistrationUncheckedUpdateOneWithoutMerchantNestedInput = {
    create?: XOR<PartnerRegistrationCreateWithoutMerchantInput, PartnerRegistrationUncheckedCreateWithoutMerchantInput>
    connectOrCreate?: PartnerRegistrationCreateOrConnectWithoutMerchantInput
    upsert?: PartnerRegistrationUpsertWithoutMerchantInput
    disconnect?: PartnerRegistrationWhereInput | boolean
    delete?: PartnerRegistrationWhereInput | boolean
    connect?: PartnerRegistrationWhereUniqueInput
    update?: XOR<XOR<PartnerRegistrationUpdateToOneWithWhereWithoutMerchantInput, PartnerRegistrationUpdateWithoutMerchantInput>, PartnerRegistrationUncheckedUpdateWithoutMerchantInput>
  }

  export type MerchantCreateNestedOneWithoutOutletsInput = {
    create?: XOR<MerchantCreateWithoutOutletsInput, MerchantUncheckedCreateWithoutOutletsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutOutletsInput
    connect?: MerchantWhereUniqueInput
  }

  export type OutletHoursCreateNestedManyWithoutOutletInput = {
    create?: XOR<OutletHoursCreateWithoutOutletInput, OutletHoursUncheckedCreateWithoutOutletInput> | OutletHoursCreateWithoutOutletInput[] | OutletHoursUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OutletHoursCreateOrConnectWithoutOutletInput | OutletHoursCreateOrConnectWithoutOutletInput[]
    createMany?: OutletHoursCreateManyOutletInputEnvelope
    connect?: OutletHoursWhereUniqueInput | OutletHoursWhereUniqueInput[]
  }

  export type ServiceAreaCreateNestedManyWithoutOutletInput = {
    create?: XOR<ServiceAreaCreateWithoutOutletInput, ServiceAreaUncheckedCreateWithoutOutletInput> | ServiceAreaCreateWithoutOutletInput[] | ServiceAreaUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: ServiceAreaCreateOrConnectWithoutOutletInput | ServiceAreaCreateOrConnectWithoutOutletInput[]
    createMany?: ServiceAreaCreateManyOutletInputEnvelope
    connect?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
  }

  export type OutletHoursUncheckedCreateNestedManyWithoutOutletInput = {
    create?: XOR<OutletHoursCreateWithoutOutletInput, OutletHoursUncheckedCreateWithoutOutletInput> | OutletHoursCreateWithoutOutletInput[] | OutletHoursUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OutletHoursCreateOrConnectWithoutOutletInput | OutletHoursCreateOrConnectWithoutOutletInput[]
    createMany?: OutletHoursCreateManyOutletInputEnvelope
    connect?: OutletHoursWhereUniqueInput | OutletHoursWhereUniqueInput[]
  }

  export type ServiceAreaUncheckedCreateNestedManyWithoutOutletInput = {
    create?: XOR<ServiceAreaCreateWithoutOutletInput, ServiceAreaUncheckedCreateWithoutOutletInput> | ServiceAreaCreateWithoutOutletInput[] | ServiceAreaUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: ServiceAreaCreateOrConnectWithoutOutletInput | ServiceAreaCreateOrConnectWithoutOutletInput[]
    createMany?: ServiceAreaCreateManyOutletInputEnvelope
    connect?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MerchantUpdateOneRequiredWithoutOutletsNestedInput = {
    create?: XOR<MerchantCreateWithoutOutletsInput, MerchantUncheckedCreateWithoutOutletsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutOutletsInput
    upsert?: MerchantUpsertWithoutOutletsInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutOutletsInput, MerchantUpdateWithoutOutletsInput>, MerchantUncheckedUpdateWithoutOutletsInput>
  }

  export type OutletHoursUpdateManyWithoutOutletNestedInput = {
    create?: XOR<OutletHoursCreateWithoutOutletInput, OutletHoursUncheckedCreateWithoutOutletInput> | OutletHoursCreateWithoutOutletInput[] | OutletHoursUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OutletHoursCreateOrConnectWithoutOutletInput | OutletHoursCreateOrConnectWithoutOutletInput[]
    upsert?: OutletHoursUpsertWithWhereUniqueWithoutOutletInput | OutletHoursUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: OutletHoursCreateManyOutletInputEnvelope
    set?: OutletHoursWhereUniqueInput | OutletHoursWhereUniqueInput[]
    disconnect?: OutletHoursWhereUniqueInput | OutletHoursWhereUniqueInput[]
    delete?: OutletHoursWhereUniqueInput | OutletHoursWhereUniqueInput[]
    connect?: OutletHoursWhereUniqueInput | OutletHoursWhereUniqueInput[]
    update?: OutletHoursUpdateWithWhereUniqueWithoutOutletInput | OutletHoursUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: OutletHoursUpdateManyWithWhereWithoutOutletInput | OutletHoursUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: OutletHoursScalarWhereInput | OutletHoursScalarWhereInput[]
  }

  export type ServiceAreaUpdateManyWithoutOutletNestedInput = {
    create?: XOR<ServiceAreaCreateWithoutOutletInput, ServiceAreaUncheckedCreateWithoutOutletInput> | ServiceAreaCreateWithoutOutletInput[] | ServiceAreaUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: ServiceAreaCreateOrConnectWithoutOutletInput | ServiceAreaCreateOrConnectWithoutOutletInput[]
    upsert?: ServiceAreaUpsertWithWhereUniqueWithoutOutletInput | ServiceAreaUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: ServiceAreaCreateManyOutletInputEnvelope
    set?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    disconnect?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    delete?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    connect?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    update?: ServiceAreaUpdateWithWhereUniqueWithoutOutletInput | ServiceAreaUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: ServiceAreaUpdateManyWithWhereWithoutOutletInput | ServiceAreaUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: ServiceAreaScalarWhereInput | ServiceAreaScalarWhereInput[]
  }

  export type OutletHoursUncheckedUpdateManyWithoutOutletNestedInput = {
    create?: XOR<OutletHoursCreateWithoutOutletInput, OutletHoursUncheckedCreateWithoutOutletInput> | OutletHoursCreateWithoutOutletInput[] | OutletHoursUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OutletHoursCreateOrConnectWithoutOutletInput | OutletHoursCreateOrConnectWithoutOutletInput[]
    upsert?: OutletHoursUpsertWithWhereUniqueWithoutOutletInput | OutletHoursUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: OutletHoursCreateManyOutletInputEnvelope
    set?: OutletHoursWhereUniqueInput | OutletHoursWhereUniqueInput[]
    disconnect?: OutletHoursWhereUniqueInput | OutletHoursWhereUniqueInput[]
    delete?: OutletHoursWhereUniqueInput | OutletHoursWhereUniqueInput[]
    connect?: OutletHoursWhereUniqueInput | OutletHoursWhereUniqueInput[]
    update?: OutletHoursUpdateWithWhereUniqueWithoutOutletInput | OutletHoursUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: OutletHoursUpdateManyWithWhereWithoutOutletInput | OutletHoursUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: OutletHoursScalarWhereInput | OutletHoursScalarWhereInput[]
  }

  export type ServiceAreaUncheckedUpdateManyWithoutOutletNestedInput = {
    create?: XOR<ServiceAreaCreateWithoutOutletInput, ServiceAreaUncheckedCreateWithoutOutletInput> | ServiceAreaCreateWithoutOutletInput[] | ServiceAreaUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: ServiceAreaCreateOrConnectWithoutOutletInput | ServiceAreaCreateOrConnectWithoutOutletInput[]
    upsert?: ServiceAreaUpsertWithWhereUniqueWithoutOutletInput | ServiceAreaUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: ServiceAreaCreateManyOutletInputEnvelope
    set?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    disconnect?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    delete?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    connect?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    update?: ServiceAreaUpdateWithWhereUniqueWithoutOutletInput | ServiceAreaUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: ServiceAreaUpdateManyWithWhereWithoutOutletInput | ServiceAreaUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: ServiceAreaScalarWhereInput | ServiceAreaScalarWhereInput[]
  }

  export type OutletCreateNestedOneWithoutHoursInput = {
    create?: XOR<OutletCreateWithoutHoursInput, OutletUncheckedCreateWithoutHoursInput>
    connectOrCreate?: OutletCreateOrConnectWithoutHoursInput
    connect?: OutletWhereUniqueInput
  }

  export type OutletUpdateOneRequiredWithoutHoursNestedInput = {
    create?: XOR<OutletCreateWithoutHoursInput, OutletUncheckedCreateWithoutHoursInput>
    connectOrCreate?: OutletCreateOrConnectWithoutHoursInput
    upsert?: OutletUpsertWithoutHoursInput
    connect?: OutletWhereUniqueInput
    update?: XOR<XOR<OutletUpdateToOneWithWhereWithoutHoursInput, OutletUpdateWithoutHoursInput>, OutletUncheckedUpdateWithoutHoursInput>
  }

  export type OutletCreateNestedOneWithoutServiceAreasInput = {
    create?: XOR<OutletCreateWithoutServiceAreasInput, OutletUncheckedCreateWithoutServiceAreasInput>
    connectOrCreate?: OutletCreateOrConnectWithoutServiceAreasInput
    connect?: OutletWhereUniqueInput
  }

  export type OutletUpdateOneRequiredWithoutServiceAreasNestedInput = {
    create?: XOR<OutletCreateWithoutServiceAreasInput, OutletUncheckedCreateWithoutServiceAreasInput>
    connectOrCreate?: OutletCreateOrConnectWithoutServiceAreasInput
    upsert?: OutletUpsertWithoutServiceAreasInput
    connect?: OutletWhereUniqueInput
    update?: XOR<XOR<OutletUpdateToOneWithWhereWithoutServiceAreasInput, OutletUpdateWithoutServiceAreasInput>, OutletUncheckedUpdateWithoutServiceAreasInput>
  }

  export type MerchantCreateNestedOneWithoutVerificationsInput = {
    create?: XOR<MerchantCreateWithoutVerificationsInput, MerchantUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutVerificationsInput
    connect?: MerchantWhereUniqueInput
  }

  export type MerchantUpdateOneRequiredWithoutVerificationsNestedInput = {
    create?: XOR<MerchantCreateWithoutVerificationsInput, MerchantUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutVerificationsInput
    upsert?: MerchantUpsertWithoutVerificationsInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutVerificationsInput, MerchantUpdateWithoutVerificationsInput>, MerchantUncheckedUpdateWithoutVerificationsInput>
  }

  export type MerchantCreateNestedOneWithoutPartnerApplicationInput = {
    create?: XOR<MerchantCreateWithoutPartnerApplicationInput, MerchantUncheckedCreateWithoutPartnerApplicationInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutPartnerApplicationInput
    connect?: MerchantWhereUniqueInput
  }

  export type RegistrationDocumentCreateNestedManyWithoutRegistrationInput = {
    create?: XOR<RegistrationDocumentCreateWithoutRegistrationInput, RegistrationDocumentUncheckedCreateWithoutRegistrationInput> | RegistrationDocumentCreateWithoutRegistrationInput[] | RegistrationDocumentUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: RegistrationDocumentCreateOrConnectWithoutRegistrationInput | RegistrationDocumentCreateOrConnectWithoutRegistrationInput[]
    createMany?: RegistrationDocumentCreateManyRegistrationInputEnvelope
    connect?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
  }

  export type RegistrationStatusHistoryCreateNestedManyWithoutRegistrationInput = {
    create?: XOR<RegistrationStatusHistoryCreateWithoutRegistrationInput, RegistrationStatusHistoryUncheckedCreateWithoutRegistrationInput> | RegistrationStatusHistoryCreateWithoutRegistrationInput[] | RegistrationStatusHistoryUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: RegistrationStatusHistoryCreateOrConnectWithoutRegistrationInput | RegistrationStatusHistoryCreateOrConnectWithoutRegistrationInput[]
    createMany?: RegistrationStatusHistoryCreateManyRegistrationInputEnvelope
    connect?: RegistrationStatusHistoryWhereUniqueInput | RegistrationStatusHistoryWhereUniqueInput[]
  }

  export type RegistrationDocumentUncheckedCreateNestedManyWithoutRegistrationInput = {
    create?: XOR<RegistrationDocumentCreateWithoutRegistrationInput, RegistrationDocumentUncheckedCreateWithoutRegistrationInput> | RegistrationDocumentCreateWithoutRegistrationInput[] | RegistrationDocumentUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: RegistrationDocumentCreateOrConnectWithoutRegistrationInput | RegistrationDocumentCreateOrConnectWithoutRegistrationInput[]
    createMany?: RegistrationDocumentCreateManyRegistrationInputEnvelope
    connect?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
  }

  export type RegistrationStatusHistoryUncheckedCreateNestedManyWithoutRegistrationInput = {
    create?: XOR<RegistrationStatusHistoryCreateWithoutRegistrationInput, RegistrationStatusHistoryUncheckedCreateWithoutRegistrationInput> | RegistrationStatusHistoryCreateWithoutRegistrationInput[] | RegistrationStatusHistoryUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: RegistrationStatusHistoryCreateOrConnectWithoutRegistrationInput | RegistrationStatusHistoryCreateOrConnectWithoutRegistrationInput[]
    createMany?: RegistrationStatusHistoryCreateManyRegistrationInputEnvelope
    connect?: RegistrationStatusHistoryWhereUniqueInput | RegistrationStatusHistoryWhereUniqueInput[]
  }

  export type MerchantUpdateOneWithoutPartnerApplicationNestedInput = {
    create?: XOR<MerchantCreateWithoutPartnerApplicationInput, MerchantUncheckedCreateWithoutPartnerApplicationInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutPartnerApplicationInput
    upsert?: MerchantUpsertWithoutPartnerApplicationInput
    disconnect?: MerchantWhereInput | boolean
    delete?: MerchantWhereInput | boolean
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutPartnerApplicationInput, MerchantUpdateWithoutPartnerApplicationInput>, MerchantUncheckedUpdateWithoutPartnerApplicationInput>
  }

  export type RegistrationDocumentUpdateManyWithoutRegistrationNestedInput = {
    create?: XOR<RegistrationDocumentCreateWithoutRegistrationInput, RegistrationDocumentUncheckedCreateWithoutRegistrationInput> | RegistrationDocumentCreateWithoutRegistrationInput[] | RegistrationDocumentUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: RegistrationDocumentCreateOrConnectWithoutRegistrationInput | RegistrationDocumentCreateOrConnectWithoutRegistrationInput[]
    upsert?: RegistrationDocumentUpsertWithWhereUniqueWithoutRegistrationInput | RegistrationDocumentUpsertWithWhereUniqueWithoutRegistrationInput[]
    createMany?: RegistrationDocumentCreateManyRegistrationInputEnvelope
    set?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    disconnect?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    delete?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    connect?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    update?: RegistrationDocumentUpdateWithWhereUniqueWithoutRegistrationInput | RegistrationDocumentUpdateWithWhereUniqueWithoutRegistrationInput[]
    updateMany?: RegistrationDocumentUpdateManyWithWhereWithoutRegistrationInput | RegistrationDocumentUpdateManyWithWhereWithoutRegistrationInput[]
    deleteMany?: RegistrationDocumentScalarWhereInput | RegistrationDocumentScalarWhereInput[]
  }

  export type RegistrationStatusHistoryUpdateManyWithoutRegistrationNestedInput = {
    create?: XOR<RegistrationStatusHistoryCreateWithoutRegistrationInput, RegistrationStatusHistoryUncheckedCreateWithoutRegistrationInput> | RegistrationStatusHistoryCreateWithoutRegistrationInput[] | RegistrationStatusHistoryUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: RegistrationStatusHistoryCreateOrConnectWithoutRegistrationInput | RegistrationStatusHistoryCreateOrConnectWithoutRegistrationInput[]
    upsert?: RegistrationStatusHistoryUpsertWithWhereUniqueWithoutRegistrationInput | RegistrationStatusHistoryUpsertWithWhereUniqueWithoutRegistrationInput[]
    createMany?: RegistrationStatusHistoryCreateManyRegistrationInputEnvelope
    set?: RegistrationStatusHistoryWhereUniqueInput | RegistrationStatusHistoryWhereUniqueInput[]
    disconnect?: RegistrationStatusHistoryWhereUniqueInput | RegistrationStatusHistoryWhereUniqueInput[]
    delete?: RegistrationStatusHistoryWhereUniqueInput | RegistrationStatusHistoryWhereUniqueInput[]
    connect?: RegistrationStatusHistoryWhereUniqueInput | RegistrationStatusHistoryWhereUniqueInput[]
    update?: RegistrationStatusHistoryUpdateWithWhereUniqueWithoutRegistrationInput | RegistrationStatusHistoryUpdateWithWhereUniqueWithoutRegistrationInput[]
    updateMany?: RegistrationStatusHistoryUpdateManyWithWhereWithoutRegistrationInput | RegistrationStatusHistoryUpdateManyWithWhereWithoutRegistrationInput[]
    deleteMany?: RegistrationStatusHistoryScalarWhereInput | RegistrationStatusHistoryScalarWhereInput[]
  }

  export type RegistrationDocumentUncheckedUpdateManyWithoutRegistrationNestedInput = {
    create?: XOR<RegistrationDocumentCreateWithoutRegistrationInput, RegistrationDocumentUncheckedCreateWithoutRegistrationInput> | RegistrationDocumentCreateWithoutRegistrationInput[] | RegistrationDocumentUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: RegistrationDocumentCreateOrConnectWithoutRegistrationInput | RegistrationDocumentCreateOrConnectWithoutRegistrationInput[]
    upsert?: RegistrationDocumentUpsertWithWhereUniqueWithoutRegistrationInput | RegistrationDocumentUpsertWithWhereUniqueWithoutRegistrationInput[]
    createMany?: RegistrationDocumentCreateManyRegistrationInputEnvelope
    set?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    disconnect?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    delete?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    connect?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    update?: RegistrationDocumentUpdateWithWhereUniqueWithoutRegistrationInput | RegistrationDocumentUpdateWithWhereUniqueWithoutRegistrationInput[]
    updateMany?: RegistrationDocumentUpdateManyWithWhereWithoutRegistrationInput | RegistrationDocumentUpdateManyWithWhereWithoutRegistrationInput[]
    deleteMany?: RegistrationDocumentScalarWhereInput | RegistrationDocumentScalarWhereInput[]
  }

  export type RegistrationStatusHistoryUncheckedUpdateManyWithoutRegistrationNestedInput = {
    create?: XOR<RegistrationStatusHistoryCreateWithoutRegistrationInput, RegistrationStatusHistoryUncheckedCreateWithoutRegistrationInput> | RegistrationStatusHistoryCreateWithoutRegistrationInput[] | RegistrationStatusHistoryUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: RegistrationStatusHistoryCreateOrConnectWithoutRegistrationInput | RegistrationStatusHistoryCreateOrConnectWithoutRegistrationInput[]
    upsert?: RegistrationStatusHistoryUpsertWithWhereUniqueWithoutRegistrationInput | RegistrationStatusHistoryUpsertWithWhereUniqueWithoutRegistrationInput[]
    createMany?: RegistrationStatusHistoryCreateManyRegistrationInputEnvelope
    set?: RegistrationStatusHistoryWhereUniqueInput | RegistrationStatusHistoryWhereUniqueInput[]
    disconnect?: RegistrationStatusHistoryWhereUniqueInput | RegistrationStatusHistoryWhereUniqueInput[]
    delete?: RegistrationStatusHistoryWhereUniqueInput | RegistrationStatusHistoryWhereUniqueInput[]
    connect?: RegistrationStatusHistoryWhereUniqueInput | RegistrationStatusHistoryWhereUniqueInput[]
    update?: RegistrationStatusHistoryUpdateWithWhereUniqueWithoutRegistrationInput | RegistrationStatusHistoryUpdateWithWhereUniqueWithoutRegistrationInput[]
    updateMany?: RegistrationStatusHistoryUpdateManyWithWhereWithoutRegistrationInput | RegistrationStatusHistoryUpdateManyWithWhereWithoutRegistrationInput[]
    deleteMany?: RegistrationStatusHistoryScalarWhereInput | RegistrationStatusHistoryScalarWhereInput[]
  }

  export type PartnerRegistrationCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<PartnerRegistrationCreateWithoutDocumentsInput, PartnerRegistrationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PartnerRegistrationCreateOrConnectWithoutDocumentsInput
    connect?: PartnerRegistrationWhereUniqueInput
  }

  export type PartnerRegistrationUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<PartnerRegistrationCreateWithoutDocumentsInput, PartnerRegistrationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PartnerRegistrationCreateOrConnectWithoutDocumentsInput
    upsert?: PartnerRegistrationUpsertWithoutDocumentsInput
    connect?: PartnerRegistrationWhereUniqueInput
    update?: XOR<XOR<PartnerRegistrationUpdateToOneWithWhereWithoutDocumentsInput, PartnerRegistrationUpdateWithoutDocumentsInput>, PartnerRegistrationUncheckedUpdateWithoutDocumentsInput>
  }

  export type PartnerRegistrationCreateNestedOneWithoutStatusHistoryInput = {
    create?: XOR<PartnerRegistrationCreateWithoutStatusHistoryInput, PartnerRegistrationUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: PartnerRegistrationCreateOrConnectWithoutStatusHistoryInput
    connect?: PartnerRegistrationWhereUniqueInput
  }

  export type PartnerRegistrationUpdateOneRequiredWithoutStatusHistoryNestedInput = {
    create?: XOR<PartnerRegistrationCreateWithoutStatusHistoryInput, PartnerRegistrationUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: PartnerRegistrationCreateOrConnectWithoutStatusHistoryInput
    upsert?: PartnerRegistrationUpsertWithoutStatusHistoryInput
    connect?: PartnerRegistrationWhereUniqueInput
    update?: XOR<XOR<PartnerRegistrationUpdateToOneWithWhereWithoutStatusHistoryInput, PartnerRegistrationUpdateWithoutStatusHistoryInput>, PartnerRegistrationUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type ServiceableLocalityCreateNestedManyWithoutCityInput = {
    create?: XOR<ServiceableLocalityCreateWithoutCityInput, ServiceableLocalityUncheckedCreateWithoutCityInput> | ServiceableLocalityCreateWithoutCityInput[] | ServiceableLocalityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ServiceableLocalityCreateOrConnectWithoutCityInput | ServiceableLocalityCreateOrConnectWithoutCityInput[]
    createMany?: ServiceableLocalityCreateManyCityInputEnvelope
    connect?: ServiceableLocalityWhereUniqueInput | ServiceableLocalityWhereUniqueInput[]
  }

  export type ServiceableLocalityUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<ServiceableLocalityCreateWithoutCityInput, ServiceableLocalityUncheckedCreateWithoutCityInput> | ServiceableLocalityCreateWithoutCityInput[] | ServiceableLocalityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ServiceableLocalityCreateOrConnectWithoutCityInput | ServiceableLocalityCreateOrConnectWithoutCityInput[]
    createMany?: ServiceableLocalityCreateManyCityInputEnvelope
    connect?: ServiceableLocalityWhereUniqueInput | ServiceableLocalityWhereUniqueInput[]
  }

  export type ServiceableLocalityUpdateManyWithoutCityNestedInput = {
    create?: XOR<ServiceableLocalityCreateWithoutCityInput, ServiceableLocalityUncheckedCreateWithoutCityInput> | ServiceableLocalityCreateWithoutCityInput[] | ServiceableLocalityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ServiceableLocalityCreateOrConnectWithoutCityInput | ServiceableLocalityCreateOrConnectWithoutCityInput[]
    upsert?: ServiceableLocalityUpsertWithWhereUniqueWithoutCityInput | ServiceableLocalityUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: ServiceableLocalityCreateManyCityInputEnvelope
    set?: ServiceableLocalityWhereUniqueInput | ServiceableLocalityWhereUniqueInput[]
    disconnect?: ServiceableLocalityWhereUniqueInput | ServiceableLocalityWhereUniqueInput[]
    delete?: ServiceableLocalityWhereUniqueInput | ServiceableLocalityWhereUniqueInput[]
    connect?: ServiceableLocalityWhereUniqueInput | ServiceableLocalityWhereUniqueInput[]
    update?: ServiceableLocalityUpdateWithWhereUniqueWithoutCityInput | ServiceableLocalityUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: ServiceableLocalityUpdateManyWithWhereWithoutCityInput | ServiceableLocalityUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: ServiceableLocalityScalarWhereInput | ServiceableLocalityScalarWhereInput[]
  }

  export type ServiceableLocalityUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<ServiceableLocalityCreateWithoutCityInput, ServiceableLocalityUncheckedCreateWithoutCityInput> | ServiceableLocalityCreateWithoutCityInput[] | ServiceableLocalityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ServiceableLocalityCreateOrConnectWithoutCityInput | ServiceableLocalityCreateOrConnectWithoutCityInput[]
    upsert?: ServiceableLocalityUpsertWithWhereUniqueWithoutCityInput | ServiceableLocalityUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: ServiceableLocalityCreateManyCityInputEnvelope
    set?: ServiceableLocalityWhereUniqueInput | ServiceableLocalityWhereUniqueInput[]
    disconnect?: ServiceableLocalityWhereUniqueInput | ServiceableLocalityWhereUniqueInput[]
    delete?: ServiceableLocalityWhereUniqueInput | ServiceableLocalityWhereUniqueInput[]
    connect?: ServiceableLocalityWhereUniqueInput | ServiceableLocalityWhereUniqueInput[]
    update?: ServiceableLocalityUpdateWithWhereUniqueWithoutCityInput | ServiceableLocalityUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: ServiceableLocalityUpdateManyWithWhereWithoutCityInput | ServiceableLocalityUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: ServiceableLocalityScalarWhereInput | ServiceableLocalityScalarWhereInput[]
  }

  export type PlatformCityCreateNestedOneWithoutLocalitiesInput = {
    create?: XOR<PlatformCityCreateWithoutLocalitiesInput, PlatformCityUncheckedCreateWithoutLocalitiesInput>
    connectOrCreate?: PlatformCityCreateOrConnectWithoutLocalitiesInput
    connect?: PlatformCityWhereUniqueInput
  }

  export type PlatformCityUpdateOneWithoutLocalitiesNestedInput = {
    create?: XOR<PlatformCityCreateWithoutLocalitiesInput, PlatformCityUncheckedCreateWithoutLocalitiesInput>
    connectOrCreate?: PlatformCityCreateOrConnectWithoutLocalitiesInput
    upsert?: PlatformCityUpsertWithoutLocalitiesInput
    disconnect?: PlatformCityWhereInput | boolean
    delete?: PlatformCityWhereInput | boolean
    connect?: PlatformCityWhereUniqueInput
    update?: XOR<XOR<PlatformCityUpdateToOneWithWhereWithoutLocalitiesInput, PlatformCityUpdateWithoutLocalitiesInput>, PlatformCityUncheckedUpdateWithoutLocalitiesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OutletCreateWithoutMerchantInput = {
    id?: string
    name: string
    sellerMode?: string
    addressLine: string
    locality: string
    city?: string
    cityCode?: string
    district?: string | null
    districtCode?: string | null
    state?: string | null
    stateCode?: string | null
    pincode?: string | null
    latitude: number
    longitude: number
    isAddressPublic?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    deliveryRadiusKm?: number
    minOrderValue?: number
    prepTimeMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hours?: OutletHoursCreateNestedManyWithoutOutletInput
    serviceAreas?: ServiceAreaCreateNestedManyWithoutOutletInput
  }

  export type OutletUncheckedCreateWithoutMerchantInput = {
    id?: string
    name: string
    sellerMode?: string
    addressLine: string
    locality: string
    city?: string
    cityCode?: string
    district?: string | null
    districtCode?: string | null
    state?: string | null
    stateCode?: string | null
    pincode?: string | null
    latitude: number
    longitude: number
    isAddressPublic?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    deliveryRadiusKm?: number
    minOrderValue?: number
    prepTimeMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hours?: OutletHoursUncheckedCreateNestedManyWithoutOutletInput
    serviceAreas?: ServiceAreaUncheckedCreateNestedManyWithoutOutletInput
  }

  export type OutletCreateOrConnectWithoutMerchantInput = {
    where: OutletWhereUniqueInput
    create: XOR<OutletCreateWithoutMerchantInput, OutletUncheckedCreateWithoutMerchantInput>
  }

  export type OutletCreateManyMerchantInputEnvelope = {
    data: OutletCreateManyMerchantInput | OutletCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type VerificationRecordCreateWithoutMerchantInput = {
    id?: string
    documentType: string
    documentUrl: string
    status?: string
    notes?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type VerificationRecordUncheckedCreateWithoutMerchantInput = {
    id?: string
    documentType: string
    documentUrl: string
    status?: string
    notes?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type VerificationRecordCreateOrConnectWithoutMerchantInput = {
    where: VerificationRecordWhereUniqueInput
    create: XOR<VerificationRecordCreateWithoutMerchantInput, VerificationRecordUncheckedCreateWithoutMerchantInput>
  }

  export type VerificationRecordCreateManyMerchantInputEnvelope = {
    data: VerificationRecordCreateManyMerchantInput | VerificationRecordCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type PartnerRegistrationCreateWithoutMerchantInput = {
    id?: string
    applicationId: string
    currentStep?: number
    status?: string
    businessType?: string
    businessName: string
    ownerName: string
    mobileNumber: string
    email?: string | null
    businessCategory?: string
    businessDescription: string
    pincode: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    city?: string
    cityCode?: string
    locality?: string
    fullAddress: string
    latitude?: number
    longitude?: number
    homeBusinessPrivacy?: boolean
    scheduleMode?: string
    operatingHours: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: boolean
    merchantDelivery?: boolean
    serviceRadius?: string
    serviceRadiusMeters?: number
    minOrderValue?: number
    prepTime?: string
    bankAccountHolder?: string | null
    bankAccountNumber?: string | null
    bankIfscCode?: string | null
    bankName?: string | null
    categoryLicenceUrl?: string | null
    categoryLicenceName?: string | null
    termsAgreed?: boolean
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: RegistrationDocumentCreateNestedManyWithoutRegistrationInput
    statusHistory?: RegistrationStatusHistoryCreateNestedManyWithoutRegistrationInput
  }

  export type PartnerRegistrationUncheckedCreateWithoutMerchantInput = {
    id?: string
    applicationId: string
    currentStep?: number
    status?: string
    businessType?: string
    businessName: string
    ownerName: string
    mobileNumber: string
    email?: string | null
    businessCategory?: string
    businessDescription: string
    pincode: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    city?: string
    cityCode?: string
    locality?: string
    fullAddress: string
    latitude?: number
    longitude?: number
    homeBusinessPrivacy?: boolean
    scheduleMode?: string
    operatingHours: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: boolean
    merchantDelivery?: boolean
    serviceRadius?: string
    serviceRadiusMeters?: number
    minOrderValue?: number
    prepTime?: string
    bankAccountHolder?: string | null
    bankAccountNumber?: string | null
    bankIfscCode?: string | null
    bankName?: string | null
    categoryLicenceUrl?: string | null
    categoryLicenceName?: string | null
    termsAgreed?: boolean
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: RegistrationDocumentUncheckedCreateNestedManyWithoutRegistrationInput
    statusHistory?: RegistrationStatusHistoryUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type PartnerRegistrationCreateOrConnectWithoutMerchantInput = {
    where: PartnerRegistrationWhereUniqueInput
    create: XOR<PartnerRegistrationCreateWithoutMerchantInput, PartnerRegistrationUncheckedCreateWithoutMerchantInput>
  }

  export type OutletUpsertWithWhereUniqueWithoutMerchantInput = {
    where: OutletWhereUniqueInput
    update: XOR<OutletUpdateWithoutMerchantInput, OutletUncheckedUpdateWithoutMerchantInput>
    create: XOR<OutletCreateWithoutMerchantInput, OutletUncheckedCreateWithoutMerchantInput>
  }

  export type OutletUpdateWithWhereUniqueWithoutMerchantInput = {
    where: OutletWhereUniqueInput
    data: XOR<OutletUpdateWithoutMerchantInput, OutletUncheckedUpdateWithoutMerchantInput>
  }

  export type OutletUpdateManyWithWhereWithoutMerchantInput = {
    where: OutletScalarWhereInput
    data: XOR<OutletUpdateManyMutationInput, OutletUncheckedUpdateManyWithoutMerchantInput>
  }

  export type OutletScalarWhereInput = {
    AND?: OutletScalarWhereInput | OutletScalarWhereInput[]
    OR?: OutletScalarWhereInput[]
    NOT?: OutletScalarWhereInput | OutletScalarWhereInput[]
    id?: StringFilter<"Outlet"> | string
    merchantId?: StringFilter<"Outlet"> | string
    name?: StringFilter<"Outlet"> | string
    sellerMode?: StringFilter<"Outlet"> | string
    addressLine?: StringFilter<"Outlet"> | string
    locality?: StringFilter<"Outlet"> | string
    city?: StringFilter<"Outlet"> | string
    cityCode?: StringFilter<"Outlet"> | string
    district?: StringNullableFilter<"Outlet"> | string | null
    districtCode?: StringNullableFilter<"Outlet"> | string | null
    state?: StringNullableFilter<"Outlet"> | string | null
    stateCode?: StringNullableFilter<"Outlet"> | string | null
    pincode?: StringNullableFilter<"Outlet"> | string | null
    latitude?: FloatFilter<"Outlet"> | number
    longitude?: FloatFilter<"Outlet"> | number
    isAddressPublic?: BoolFilter<"Outlet"> | boolean
    storePickup?: BoolFilter<"Outlet"> | boolean
    merchantDelivery?: BoolFilter<"Outlet"> | boolean
    deliveryRadiusKm?: FloatFilter<"Outlet"> | number
    minOrderValue?: IntFilter<"Outlet"> | number
    prepTimeMinutes?: IntFilter<"Outlet"> | number
    isActive?: BoolFilter<"Outlet"> | boolean
    createdAt?: DateTimeFilter<"Outlet"> | Date | string
    updatedAt?: DateTimeFilter<"Outlet"> | Date | string
  }

  export type VerificationRecordUpsertWithWhereUniqueWithoutMerchantInput = {
    where: VerificationRecordWhereUniqueInput
    update: XOR<VerificationRecordUpdateWithoutMerchantInput, VerificationRecordUncheckedUpdateWithoutMerchantInput>
    create: XOR<VerificationRecordCreateWithoutMerchantInput, VerificationRecordUncheckedCreateWithoutMerchantInput>
  }

  export type VerificationRecordUpdateWithWhereUniqueWithoutMerchantInput = {
    where: VerificationRecordWhereUniqueInput
    data: XOR<VerificationRecordUpdateWithoutMerchantInput, VerificationRecordUncheckedUpdateWithoutMerchantInput>
  }

  export type VerificationRecordUpdateManyWithWhereWithoutMerchantInput = {
    where: VerificationRecordScalarWhereInput
    data: XOR<VerificationRecordUpdateManyMutationInput, VerificationRecordUncheckedUpdateManyWithoutMerchantInput>
  }

  export type VerificationRecordScalarWhereInput = {
    AND?: VerificationRecordScalarWhereInput | VerificationRecordScalarWhereInput[]
    OR?: VerificationRecordScalarWhereInput[]
    NOT?: VerificationRecordScalarWhereInput | VerificationRecordScalarWhereInput[]
    id?: StringFilter<"VerificationRecord"> | string
    merchantId?: StringFilter<"VerificationRecord"> | string
    documentType?: StringFilter<"VerificationRecord"> | string
    documentUrl?: StringFilter<"VerificationRecord"> | string
    status?: StringFilter<"VerificationRecord"> | string
    notes?: StringNullableFilter<"VerificationRecord"> | string | null
    verifiedAt?: DateTimeNullableFilter<"VerificationRecord"> | Date | string | null
    createdAt?: DateTimeFilter<"VerificationRecord"> | Date | string
  }

  export type PartnerRegistrationUpsertWithoutMerchantInput = {
    update: XOR<PartnerRegistrationUpdateWithoutMerchantInput, PartnerRegistrationUncheckedUpdateWithoutMerchantInput>
    create: XOR<PartnerRegistrationCreateWithoutMerchantInput, PartnerRegistrationUncheckedCreateWithoutMerchantInput>
    where?: PartnerRegistrationWhereInput
  }

  export type PartnerRegistrationUpdateToOneWithWhereWithoutMerchantInput = {
    where?: PartnerRegistrationWhereInput
    data: XOR<PartnerRegistrationUpdateWithoutMerchantInput, PartnerRegistrationUncheckedUpdateWithoutMerchantInput>
  }

  export type PartnerRegistrationUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: StringFieldUpdateOperationsInput | string
    businessDescription?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    homeBusinessPrivacy?: BoolFieldUpdateOperationsInput | boolean
    scheduleMode?: StringFieldUpdateOperationsInput | string
    operatingHours?: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    serviceRadius?: StringFieldUpdateOperationsInput | string
    serviceRadiusMeters?: IntFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTime?: StringFieldUpdateOperationsInput | string
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankIfscCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceName?: NullableStringFieldUpdateOperationsInput | string | null
    termsAgreed?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: RegistrationDocumentUpdateManyWithoutRegistrationNestedInput
    statusHistory?: RegistrationStatusHistoryUpdateManyWithoutRegistrationNestedInput
  }

  export type PartnerRegistrationUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: StringFieldUpdateOperationsInput | string
    businessDescription?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    homeBusinessPrivacy?: BoolFieldUpdateOperationsInput | boolean
    scheduleMode?: StringFieldUpdateOperationsInput | string
    operatingHours?: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    serviceRadius?: StringFieldUpdateOperationsInput | string
    serviceRadiusMeters?: IntFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTime?: StringFieldUpdateOperationsInput | string
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankIfscCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceName?: NullableStringFieldUpdateOperationsInput | string | null
    termsAgreed?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: RegistrationDocumentUncheckedUpdateManyWithoutRegistrationNestedInput
    statusHistory?: RegistrationStatusHistoryUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type MerchantCreateWithoutOutletsInput = {
    id?: string
    organizationName: string
    legalBusinessName?: string | null
    contactName: string
    contactPhone: string
    email?: string | null
    businessType?: string | null
    category?: string | null
    description?: string | null
    verificationStatus?: string
    isSuspended?: boolean
    suspendedReason?: string | null
    suspendedAt?: Date | string | null
    cityCode?: string
    districtCode?: string
    stateCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verifications?: VerificationRecordCreateNestedManyWithoutMerchantInput
    partnerApplication?: PartnerRegistrationCreateNestedOneWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutOutletsInput = {
    id?: string
    organizationName: string
    legalBusinessName?: string | null
    contactName: string
    contactPhone: string
    email?: string | null
    businessType?: string | null
    category?: string | null
    description?: string | null
    verificationStatus?: string
    isSuspended?: boolean
    suspendedReason?: string | null
    suspendedAt?: Date | string | null
    cityCode?: string
    districtCode?: string
    stateCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verifications?: VerificationRecordUncheckedCreateNestedManyWithoutMerchantInput
    partnerApplication?: PartnerRegistrationUncheckedCreateNestedOneWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutOutletsInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutOutletsInput, MerchantUncheckedCreateWithoutOutletsInput>
  }

  export type OutletHoursCreateWithoutOutletInput = {
    id?: string
    dayOfWeek: number
    openTime: string
    closeTime: string
    breakTime?: string | null
    isClosed?: boolean
  }

  export type OutletHoursUncheckedCreateWithoutOutletInput = {
    id?: string
    dayOfWeek: number
    openTime: string
    closeTime: string
    breakTime?: string | null
    isClosed?: boolean
  }

  export type OutletHoursCreateOrConnectWithoutOutletInput = {
    where: OutletHoursWhereUniqueInput
    create: XOR<OutletHoursCreateWithoutOutletInput, OutletHoursUncheckedCreateWithoutOutletInput>
  }

  export type OutletHoursCreateManyOutletInputEnvelope = {
    data: OutletHoursCreateManyOutletInput | OutletHoursCreateManyOutletInput[]
    skipDuplicates?: boolean
  }

  export type ServiceAreaCreateWithoutOutletInput = {
    id?: string
    radiusMeters: number
    geoJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServiceAreaUncheckedCreateWithoutOutletInput = {
    id?: string
    radiusMeters: number
    geoJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServiceAreaCreateOrConnectWithoutOutletInput = {
    where: ServiceAreaWhereUniqueInput
    create: XOR<ServiceAreaCreateWithoutOutletInput, ServiceAreaUncheckedCreateWithoutOutletInput>
  }

  export type ServiceAreaCreateManyOutletInputEnvelope = {
    data: ServiceAreaCreateManyOutletInput | ServiceAreaCreateManyOutletInput[]
    skipDuplicates?: boolean
  }

  export type MerchantUpsertWithoutOutletsInput = {
    update: XOR<MerchantUpdateWithoutOutletsInput, MerchantUncheckedUpdateWithoutOutletsInput>
    create: XOR<MerchantCreateWithoutOutletsInput, MerchantUncheckedCreateWithoutOutletsInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutOutletsInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutOutletsInput, MerchantUncheckedUpdateWithoutOutletsInput>
  }

  export type MerchantUpdateWithoutOutletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    legalBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cityCode?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationRecordUpdateManyWithoutMerchantNestedInput
    partnerApplication?: PartnerRegistrationUpdateOneWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutOutletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    legalBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cityCode?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationRecordUncheckedUpdateManyWithoutMerchantNestedInput
    partnerApplication?: PartnerRegistrationUncheckedUpdateOneWithoutMerchantNestedInput
  }

  export type OutletHoursUpsertWithWhereUniqueWithoutOutletInput = {
    where: OutletHoursWhereUniqueInput
    update: XOR<OutletHoursUpdateWithoutOutletInput, OutletHoursUncheckedUpdateWithoutOutletInput>
    create: XOR<OutletHoursCreateWithoutOutletInput, OutletHoursUncheckedCreateWithoutOutletInput>
  }

  export type OutletHoursUpdateWithWhereUniqueWithoutOutletInput = {
    where: OutletHoursWhereUniqueInput
    data: XOR<OutletHoursUpdateWithoutOutletInput, OutletHoursUncheckedUpdateWithoutOutletInput>
  }

  export type OutletHoursUpdateManyWithWhereWithoutOutletInput = {
    where: OutletHoursScalarWhereInput
    data: XOR<OutletHoursUpdateManyMutationInput, OutletHoursUncheckedUpdateManyWithoutOutletInput>
  }

  export type OutletHoursScalarWhereInput = {
    AND?: OutletHoursScalarWhereInput | OutletHoursScalarWhereInput[]
    OR?: OutletHoursScalarWhereInput[]
    NOT?: OutletHoursScalarWhereInput | OutletHoursScalarWhereInput[]
    id?: StringFilter<"OutletHours"> | string
    outletId?: StringFilter<"OutletHours"> | string
    dayOfWeek?: IntFilter<"OutletHours"> | number
    openTime?: StringFilter<"OutletHours"> | string
    closeTime?: StringFilter<"OutletHours"> | string
    breakTime?: StringNullableFilter<"OutletHours"> | string | null
    isClosed?: BoolFilter<"OutletHours"> | boolean
  }

  export type ServiceAreaUpsertWithWhereUniqueWithoutOutletInput = {
    where: ServiceAreaWhereUniqueInput
    update: XOR<ServiceAreaUpdateWithoutOutletInput, ServiceAreaUncheckedUpdateWithoutOutletInput>
    create: XOR<ServiceAreaCreateWithoutOutletInput, ServiceAreaUncheckedCreateWithoutOutletInput>
  }

  export type ServiceAreaUpdateWithWhereUniqueWithoutOutletInput = {
    where: ServiceAreaWhereUniqueInput
    data: XOR<ServiceAreaUpdateWithoutOutletInput, ServiceAreaUncheckedUpdateWithoutOutletInput>
  }

  export type ServiceAreaUpdateManyWithWhereWithoutOutletInput = {
    where: ServiceAreaScalarWhereInput
    data: XOR<ServiceAreaUpdateManyMutationInput, ServiceAreaUncheckedUpdateManyWithoutOutletInput>
  }

  export type ServiceAreaScalarWhereInput = {
    AND?: ServiceAreaScalarWhereInput | ServiceAreaScalarWhereInput[]
    OR?: ServiceAreaScalarWhereInput[]
    NOT?: ServiceAreaScalarWhereInput | ServiceAreaScalarWhereInput[]
    id?: StringFilter<"ServiceArea"> | string
    outletId?: StringFilter<"ServiceArea"> | string
    radiusMeters?: IntFilter<"ServiceArea"> | number
    geoJson?: JsonNullableFilter<"ServiceArea">
  }

  export type OutletCreateWithoutHoursInput = {
    id?: string
    name: string
    sellerMode?: string
    addressLine: string
    locality: string
    city?: string
    cityCode?: string
    district?: string | null
    districtCode?: string | null
    state?: string | null
    stateCode?: string | null
    pincode?: string | null
    latitude: number
    longitude: number
    isAddressPublic?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    deliveryRadiusKm?: number
    minOrderValue?: number
    prepTimeMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutOutletsInput
    serviceAreas?: ServiceAreaCreateNestedManyWithoutOutletInput
  }

  export type OutletUncheckedCreateWithoutHoursInput = {
    id?: string
    merchantId: string
    name: string
    sellerMode?: string
    addressLine: string
    locality: string
    city?: string
    cityCode?: string
    district?: string | null
    districtCode?: string | null
    state?: string | null
    stateCode?: string | null
    pincode?: string | null
    latitude: number
    longitude: number
    isAddressPublic?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    deliveryRadiusKm?: number
    minOrderValue?: number
    prepTimeMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceAreas?: ServiceAreaUncheckedCreateNestedManyWithoutOutletInput
  }

  export type OutletCreateOrConnectWithoutHoursInput = {
    where: OutletWhereUniqueInput
    create: XOR<OutletCreateWithoutHoursInput, OutletUncheckedCreateWithoutHoursInput>
  }

  export type OutletUpsertWithoutHoursInput = {
    update: XOR<OutletUpdateWithoutHoursInput, OutletUncheckedUpdateWithoutHoursInput>
    create: XOR<OutletCreateWithoutHoursInput, OutletUncheckedCreateWithoutHoursInput>
    where?: OutletWhereInput
  }

  export type OutletUpdateToOneWithWhereWithoutHoursInput = {
    where?: OutletWhereInput
    data: XOR<OutletUpdateWithoutHoursInput, OutletUncheckedUpdateWithoutHoursInput>
  }

  export type OutletUpdateWithoutHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerMode?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    districtCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isAddressPublic?: BoolFieldUpdateOperationsInput | boolean
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    deliveryRadiusKm?: FloatFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTimeMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutOutletsNestedInput
    serviceAreas?: ServiceAreaUpdateManyWithoutOutletNestedInput
  }

  export type OutletUncheckedUpdateWithoutHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerMode?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    districtCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isAddressPublic?: BoolFieldUpdateOperationsInput | boolean
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    deliveryRadiusKm?: FloatFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTimeMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceAreas?: ServiceAreaUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type OutletCreateWithoutServiceAreasInput = {
    id?: string
    name: string
    sellerMode?: string
    addressLine: string
    locality: string
    city?: string
    cityCode?: string
    district?: string | null
    districtCode?: string | null
    state?: string | null
    stateCode?: string | null
    pincode?: string | null
    latitude: number
    longitude: number
    isAddressPublic?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    deliveryRadiusKm?: number
    minOrderValue?: number
    prepTimeMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutOutletsInput
    hours?: OutletHoursCreateNestedManyWithoutOutletInput
  }

  export type OutletUncheckedCreateWithoutServiceAreasInput = {
    id?: string
    merchantId: string
    name: string
    sellerMode?: string
    addressLine: string
    locality: string
    city?: string
    cityCode?: string
    district?: string | null
    districtCode?: string | null
    state?: string | null
    stateCode?: string | null
    pincode?: string | null
    latitude: number
    longitude: number
    isAddressPublic?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    deliveryRadiusKm?: number
    minOrderValue?: number
    prepTimeMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hours?: OutletHoursUncheckedCreateNestedManyWithoutOutletInput
  }

  export type OutletCreateOrConnectWithoutServiceAreasInput = {
    where: OutletWhereUniqueInput
    create: XOR<OutletCreateWithoutServiceAreasInput, OutletUncheckedCreateWithoutServiceAreasInput>
  }

  export type OutletUpsertWithoutServiceAreasInput = {
    update: XOR<OutletUpdateWithoutServiceAreasInput, OutletUncheckedUpdateWithoutServiceAreasInput>
    create: XOR<OutletCreateWithoutServiceAreasInput, OutletUncheckedCreateWithoutServiceAreasInput>
    where?: OutletWhereInput
  }

  export type OutletUpdateToOneWithWhereWithoutServiceAreasInput = {
    where?: OutletWhereInput
    data: XOR<OutletUpdateWithoutServiceAreasInput, OutletUncheckedUpdateWithoutServiceAreasInput>
  }

  export type OutletUpdateWithoutServiceAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerMode?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    districtCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isAddressPublic?: BoolFieldUpdateOperationsInput | boolean
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    deliveryRadiusKm?: FloatFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTimeMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutOutletsNestedInput
    hours?: OutletHoursUpdateManyWithoutOutletNestedInput
  }

  export type OutletUncheckedUpdateWithoutServiceAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerMode?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    districtCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isAddressPublic?: BoolFieldUpdateOperationsInput | boolean
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    deliveryRadiusKm?: FloatFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTimeMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: OutletHoursUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type MerchantCreateWithoutVerificationsInput = {
    id?: string
    organizationName: string
    legalBusinessName?: string | null
    contactName: string
    contactPhone: string
    email?: string | null
    businessType?: string | null
    category?: string | null
    description?: string | null
    verificationStatus?: string
    isSuspended?: boolean
    suspendedReason?: string | null
    suspendedAt?: Date | string | null
    cityCode?: string
    districtCode?: string
    stateCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outlets?: OutletCreateNestedManyWithoutMerchantInput
    partnerApplication?: PartnerRegistrationCreateNestedOneWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutVerificationsInput = {
    id?: string
    organizationName: string
    legalBusinessName?: string | null
    contactName: string
    contactPhone: string
    email?: string | null
    businessType?: string | null
    category?: string | null
    description?: string | null
    verificationStatus?: string
    isSuspended?: boolean
    suspendedReason?: string | null
    suspendedAt?: Date | string | null
    cityCode?: string
    districtCode?: string
    stateCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outlets?: OutletUncheckedCreateNestedManyWithoutMerchantInput
    partnerApplication?: PartnerRegistrationUncheckedCreateNestedOneWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutVerificationsInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutVerificationsInput, MerchantUncheckedCreateWithoutVerificationsInput>
  }

  export type MerchantUpsertWithoutVerificationsInput = {
    update: XOR<MerchantUpdateWithoutVerificationsInput, MerchantUncheckedUpdateWithoutVerificationsInput>
    create: XOR<MerchantCreateWithoutVerificationsInput, MerchantUncheckedCreateWithoutVerificationsInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutVerificationsInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutVerificationsInput, MerchantUncheckedUpdateWithoutVerificationsInput>
  }

  export type MerchantUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    legalBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cityCode?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlets?: OutletUpdateManyWithoutMerchantNestedInput
    partnerApplication?: PartnerRegistrationUpdateOneWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    legalBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cityCode?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlets?: OutletUncheckedUpdateManyWithoutMerchantNestedInput
    partnerApplication?: PartnerRegistrationUncheckedUpdateOneWithoutMerchantNestedInput
  }

  export type MerchantCreateWithoutPartnerApplicationInput = {
    id?: string
    organizationName: string
    legalBusinessName?: string | null
    contactName: string
    contactPhone: string
    email?: string | null
    businessType?: string | null
    category?: string | null
    description?: string | null
    verificationStatus?: string
    isSuspended?: boolean
    suspendedReason?: string | null
    suspendedAt?: Date | string | null
    cityCode?: string
    districtCode?: string
    stateCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outlets?: OutletCreateNestedManyWithoutMerchantInput
    verifications?: VerificationRecordCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutPartnerApplicationInput = {
    id?: string
    organizationName: string
    legalBusinessName?: string | null
    contactName: string
    contactPhone: string
    email?: string | null
    businessType?: string | null
    category?: string | null
    description?: string | null
    verificationStatus?: string
    isSuspended?: boolean
    suspendedReason?: string | null
    suspendedAt?: Date | string | null
    cityCode?: string
    districtCode?: string
    stateCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outlets?: OutletUncheckedCreateNestedManyWithoutMerchantInput
    verifications?: VerificationRecordUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutPartnerApplicationInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutPartnerApplicationInput, MerchantUncheckedCreateWithoutPartnerApplicationInput>
  }

  export type RegistrationDocumentCreateWithoutRegistrationInput = {
    id?: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize?: string | null
    verificationStatus?: string
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type RegistrationDocumentUncheckedCreateWithoutRegistrationInput = {
    id?: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize?: string | null
    verificationStatus?: string
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type RegistrationDocumentCreateOrConnectWithoutRegistrationInput = {
    where: RegistrationDocumentWhereUniqueInput
    create: XOR<RegistrationDocumentCreateWithoutRegistrationInput, RegistrationDocumentUncheckedCreateWithoutRegistrationInput>
  }

  export type RegistrationDocumentCreateManyRegistrationInputEnvelope = {
    data: RegistrationDocumentCreateManyRegistrationInput | RegistrationDocumentCreateManyRegistrationInput[]
    skipDuplicates?: boolean
  }

  export type RegistrationStatusHistoryCreateWithoutRegistrationInput = {
    id?: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type RegistrationStatusHistoryUncheckedCreateWithoutRegistrationInput = {
    id?: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type RegistrationStatusHistoryCreateOrConnectWithoutRegistrationInput = {
    where: RegistrationStatusHistoryWhereUniqueInput
    create: XOR<RegistrationStatusHistoryCreateWithoutRegistrationInput, RegistrationStatusHistoryUncheckedCreateWithoutRegistrationInput>
  }

  export type RegistrationStatusHistoryCreateManyRegistrationInputEnvelope = {
    data: RegistrationStatusHistoryCreateManyRegistrationInput | RegistrationStatusHistoryCreateManyRegistrationInput[]
    skipDuplicates?: boolean
  }

  export type MerchantUpsertWithoutPartnerApplicationInput = {
    update: XOR<MerchantUpdateWithoutPartnerApplicationInput, MerchantUncheckedUpdateWithoutPartnerApplicationInput>
    create: XOR<MerchantCreateWithoutPartnerApplicationInput, MerchantUncheckedCreateWithoutPartnerApplicationInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutPartnerApplicationInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutPartnerApplicationInput, MerchantUncheckedUpdateWithoutPartnerApplicationInput>
  }

  export type MerchantUpdateWithoutPartnerApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    legalBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cityCode?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlets?: OutletUpdateManyWithoutMerchantNestedInput
    verifications?: VerificationRecordUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutPartnerApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    legalBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cityCode?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlets?: OutletUncheckedUpdateManyWithoutMerchantNestedInput
    verifications?: VerificationRecordUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type RegistrationDocumentUpsertWithWhereUniqueWithoutRegistrationInput = {
    where: RegistrationDocumentWhereUniqueInput
    update: XOR<RegistrationDocumentUpdateWithoutRegistrationInput, RegistrationDocumentUncheckedUpdateWithoutRegistrationInput>
    create: XOR<RegistrationDocumentCreateWithoutRegistrationInput, RegistrationDocumentUncheckedCreateWithoutRegistrationInput>
  }

  export type RegistrationDocumentUpdateWithWhereUniqueWithoutRegistrationInput = {
    where: RegistrationDocumentWhereUniqueInput
    data: XOR<RegistrationDocumentUpdateWithoutRegistrationInput, RegistrationDocumentUncheckedUpdateWithoutRegistrationInput>
  }

  export type RegistrationDocumentUpdateManyWithWhereWithoutRegistrationInput = {
    where: RegistrationDocumentScalarWhereInput
    data: XOR<RegistrationDocumentUpdateManyMutationInput, RegistrationDocumentUncheckedUpdateManyWithoutRegistrationInput>
  }

  export type RegistrationDocumentScalarWhereInput = {
    AND?: RegistrationDocumentScalarWhereInput | RegistrationDocumentScalarWhereInput[]
    OR?: RegistrationDocumentScalarWhereInput[]
    NOT?: RegistrationDocumentScalarWhereInput | RegistrationDocumentScalarWhereInput[]
    id?: StringFilter<"RegistrationDocument"> | string
    registrationId?: StringFilter<"RegistrationDocument"> | string
    documentType?: StringFilter<"RegistrationDocument"> | string
    fileName?: StringFilter<"RegistrationDocument"> | string
    fileUrl?: StringFilter<"RegistrationDocument"> | string
    fileSize?: StringNullableFilter<"RegistrationDocument"> | string | null
    verificationStatus?: StringFilter<"RegistrationDocument"> | string
    rejectionReason?: StringNullableFilter<"RegistrationDocument"> | string | null
    uploadedAt?: DateTimeFilter<"RegistrationDocument"> | Date | string
  }

  export type RegistrationStatusHistoryUpsertWithWhereUniqueWithoutRegistrationInput = {
    where: RegistrationStatusHistoryWhereUniqueInput
    update: XOR<RegistrationStatusHistoryUpdateWithoutRegistrationInput, RegistrationStatusHistoryUncheckedUpdateWithoutRegistrationInput>
    create: XOR<RegistrationStatusHistoryCreateWithoutRegistrationInput, RegistrationStatusHistoryUncheckedCreateWithoutRegistrationInput>
  }

  export type RegistrationStatusHistoryUpdateWithWhereUniqueWithoutRegistrationInput = {
    where: RegistrationStatusHistoryWhereUniqueInput
    data: XOR<RegistrationStatusHistoryUpdateWithoutRegistrationInput, RegistrationStatusHistoryUncheckedUpdateWithoutRegistrationInput>
  }

  export type RegistrationStatusHistoryUpdateManyWithWhereWithoutRegistrationInput = {
    where: RegistrationStatusHistoryScalarWhereInput
    data: XOR<RegistrationStatusHistoryUpdateManyMutationInput, RegistrationStatusHistoryUncheckedUpdateManyWithoutRegistrationInput>
  }

  export type RegistrationStatusHistoryScalarWhereInput = {
    AND?: RegistrationStatusHistoryScalarWhereInput | RegistrationStatusHistoryScalarWhereInput[]
    OR?: RegistrationStatusHistoryScalarWhereInput[]
    NOT?: RegistrationStatusHistoryScalarWhereInput | RegistrationStatusHistoryScalarWhereInput[]
    id?: StringFilter<"RegistrationStatusHistory"> | string
    registrationId?: StringFilter<"RegistrationStatusHistory"> | string
    fromStatus?: StringFilter<"RegistrationStatusHistory"> | string
    toStatus?: StringFilter<"RegistrationStatusHistory"> | string
    changedBy?: StringFilter<"RegistrationStatusHistory"> | string
    reason?: StringNullableFilter<"RegistrationStatusHistory"> | string | null
    notes?: StringNullableFilter<"RegistrationStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"RegistrationStatusHistory"> | Date | string
  }

  export type PartnerRegistrationCreateWithoutDocumentsInput = {
    id?: string
    applicationId: string
    currentStep?: number
    status?: string
    businessType?: string
    businessName: string
    ownerName: string
    mobileNumber: string
    email?: string | null
    businessCategory?: string
    businessDescription: string
    pincode: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    city?: string
    cityCode?: string
    locality?: string
    fullAddress: string
    latitude?: number
    longitude?: number
    homeBusinessPrivacy?: boolean
    scheduleMode?: string
    operatingHours: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: boolean
    merchantDelivery?: boolean
    serviceRadius?: string
    serviceRadiusMeters?: number
    minOrderValue?: number
    prepTime?: string
    bankAccountHolder?: string | null
    bankAccountNumber?: string | null
    bankIfscCode?: string | null
    bankName?: string | null
    categoryLicenceUrl?: string | null
    categoryLicenceName?: string | null
    termsAgreed?: boolean
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    merchant?: MerchantCreateNestedOneWithoutPartnerApplicationInput
    statusHistory?: RegistrationStatusHistoryCreateNestedManyWithoutRegistrationInput
  }

  export type PartnerRegistrationUncheckedCreateWithoutDocumentsInput = {
    id?: string
    applicationId: string
    merchantId?: string | null
    currentStep?: number
    status?: string
    businessType?: string
    businessName: string
    ownerName: string
    mobileNumber: string
    email?: string | null
    businessCategory?: string
    businessDescription: string
    pincode: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    city?: string
    cityCode?: string
    locality?: string
    fullAddress: string
    latitude?: number
    longitude?: number
    homeBusinessPrivacy?: boolean
    scheduleMode?: string
    operatingHours: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: boolean
    merchantDelivery?: boolean
    serviceRadius?: string
    serviceRadiusMeters?: number
    minOrderValue?: number
    prepTime?: string
    bankAccountHolder?: string | null
    bankAccountNumber?: string | null
    bankIfscCode?: string | null
    bankName?: string | null
    categoryLicenceUrl?: string | null
    categoryLicenceName?: string | null
    termsAgreed?: boolean
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: RegistrationStatusHistoryUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type PartnerRegistrationCreateOrConnectWithoutDocumentsInput = {
    where: PartnerRegistrationWhereUniqueInput
    create: XOR<PartnerRegistrationCreateWithoutDocumentsInput, PartnerRegistrationUncheckedCreateWithoutDocumentsInput>
  }

  export type PartnerRegistrationUpsertWithoutDocumentsInput = {
    update: XOR<PartnerRegistrationUpdateWithoutDocumentsInput, PartnerRegistrationUncheckedUpdateWithoutDocumentsInput>
    create: XOR<PartnerRegistrationCreateWithoutDocumentsInput, PartnerRegistrationUncheckedCreateWithoutDocumentsInput>
    where?: PartnerRegistrationWhereInput
  }

  export type PartnerRegistrationUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: PartnerRegistrationWhereInput
    data: XOR<PartnerRegistrationUpdateWithoutDocumentsInput, PartnerRegistrationUncheckedUpdateWithoutDocumentsInput>
  }

  export type PartnerRegistrationUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: StringFieldUpdateOperationsInput | string
    businessDescription?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    homeBusinessPrivacy?: BoolFieldUpdateOperationsInput | boolean
    scheduleMode?: StringFieldUpdateOperationsInput | string
    operatingHours?: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    serviceRadius?: StringFieldUpdateOperationsInput | string
    serviceRadiusMeters?: IntFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTime?: StringFieldUpdateOperationsInput | string
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankIfscCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceName?: NullableStringFieldUpdateOperationsInput | string | null
    termsAgreed?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneWithoutPartnerApplicationNestedInput
    statusHistory?: RegistrationStatusHistoryUpdateManyWithoutRegistrationNestedInput
  }

  export type PartnerRegistrationUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    merchantId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStep?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: StringFieldUpdateOperationsInput | string
    businessDescription?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    homeBusinessPrivacy?: BoolFieldUpdateOperationsInput | boolean
    scheduleMode?: StringFieldUpdateOperationsInput | string
    operatingHours?: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    serviceRadius?: StringFieldUpdateOperationsInput | string
    serviceRadiusMeters?: IntFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTime?: StringFieldUpdateOperationsInput | string
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankIfscCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceName?: NullableStringFieldUpdateOperationsInput | string | null
    termsAgreed?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: RegistrationStatusHistoryUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type PartnerRegistrationCreateWithoutStatusHistoryInput = {
    id?: string
    applicationId: string
    currentStep?: number
    status?: string
    businessType?: string
    businessName: string
    ownerName: string
    mobileNumber: string
    email?: string | null
    businessCategory?: string
    businessDescription: string
    pincode: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    city?: string
    cityCode?: string
    locality?: string
    fullAddress: string
    latitude?: number
    longitude?: number
    homeBusinessPrivacy?: boolean
    scheduleMode?: string
    operatingHours: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: boolean
    merchantDelivery?: boolean
    serviceRadius?: string
    serviceRadiusMeters?: number
    minOrderValue?: number
    prepTime?: string
    bankAccountHolder?: string | null
    bankAccountNumber?: string | null
    bankIfscCode?: string | null
    bankName?: string | null
    categoryLicenceUrl?: string | null
    categoryLicenceName?: string | null
    termsAgreed?: boolean
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    merchant?: MerchantCreateNestedOneWithoutPartnerApplicationInput
    documents?: RegistrationDocumentCreateNestedManyWithoutRegistrationInput
  }

  export type PartnerRegistrationUncheckedCreateWithoutStatusHistoryInput = {
    id?: string
    applicationId: string
    merchantId?: string | null
    currentStep?: number
    status?: string
    businessType?: string
    businessName: string
    ownerName: string
    mobileNumber: string
    email?: string | null
    businessCategory?: string
    businessDescription: string
    pincode: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    city?: string
    cityCode?: string
    locality?: string
    fullAddress: string
    latitude?: number
    longitude?: number
    homeBusinessPrivacy?: boolean
    scheduleMode?: string
    operatingHours: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: boolean
    merchantDelivery?: boolean
    serviceRadius?: string
    serviceRadiusMeters?: number
    minOrderValue?: number
    prepTime?: string
    bankAccountHolder?: string | null
    bankAccountNumber?: string | null
    bankIfscCode?: string | null
    bankName?: string | null
    categoryLicenceUrl?: string | null
    categoryLicenceName?: string | null
    termsAgreed?: boolean
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: RegistrationDocumentUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type PartnerRegistrationCreateOrConnectWithoutStatusHistoryInput = {
    where: PartnerRegistrationWhereUniqueInput
    create: XOR<PartnerRegistrationCreateWithoutStatusHistoryInput, PartnerRegistrationUncheckedCreateWithoutStatusHistoryInput>
  }

  export type PartnerRegistrationUpsertWithoutStatusHistoryInput = {
    update: XOR<PartnerRegistrationUpdateWithoutStatusHistoryInput, PartnerRegistrationUncheckedUpdateWithoutStatusHistoryInput>
    create: XOR<PartnerRegistrationCreateWithoutStatusHistoryInput, PartnerRegistrationUncheckedCreateWithoutStatusHistoryInput>
    where?: PartnerRegistrationWhereInput
  }

  export type PartnerRegistrationUpdateToOneWithWhereWithoutStatusHistoryInput = {
    where?: PartnerRegistrationWhereInput
    data: XOR<PartnerRegistrationUpdateWithoutStatusHistoryInput, PartnerRegistrationUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type PartnerRegistrationUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: StringFieldUpdateOperationsInput | string
    businessDescription?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    homeBusinessPrivacy?: BoolFieldUpdateOperationsInput | boolean
    scheduleMode?: StringFieldUpdateOperationsInput | string
    operatingHours?: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    serviceRadius?: StringFieldUpdateOperationsInput | string
    serviceRadiusMeters?: IntFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTime?: StringFieldUpdateOperationsInput | string
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankIfscCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceName?: NullableStringFieldUpdateOperationsInput | string | null
    termsAgreed?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneWithoutPartnerApplicationNestedInput
    documents?: RegistrationDocumentUpdateManyWithoutRegistrationNestedInput
  }

  export type PartnerRegistrationUncheckedUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    merchantId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStep?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: StringFieldUpdateOperationsInput | string
    businessDescription?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    homeBusinessPrivacy?: BoolFieldUpdateOperationsInput | boolean
    scheduleMode?: StringFieldUpdateOperationsInput | string
    operatingHours?: JsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    temporaryClosure?: NullableJsonNullValueInput | InputJsonValue
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    serviceRadius?: StringFieldUpdateOperationsInput | string
    serviceRadiusMeters?: IntFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTime?: StringFieldUpdateOperationsInput | string
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankIfscCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLicenceName?: NullableStringFieldUpdateOperationsInput | string | null
    termsAgreed?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: RegistrationDocumentUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type ServiceableLocalityCreateWithoutCityInput = {
    id?: string
    name: string
    pincode: string
    cityName: string
    district?: string
    state?: string
    latitude?: number
    longitude?: number
    radiusMeters?: number
    status?: string
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceableLocalityUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    pincode: string
    cityName: string
    district?: string
    state?: string
    latitude?: number
    longitude?: number
    radiusMeters?: number
    status?: string
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceableLocalityCreateOrConnectWithoutCityInput = {
    where: ServiceableLocalityWhereUniqueInput
    create: XOR<ServiceableLocalityCreateWithoutCityInput, ServiceableLocalityUncheckedCreateWithoutCityInput>
  }

  export type ServiceableLocalityCreateManyCityInputEnvelope = {
    data: ServiceableLocalityCreateManyCityInput | ServiceableLocalityCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type ServiceableLocalityUpsertWithWhereUniqueWithoutCityInput = {
    where: ServiceableLocalityWhereUniqueInput
    update: XOR<ServiceableLocalityUpdateWithoutCityInput, ServiceableLocalityUncheckedUpdateWithoutCityInput>
    create: XOR<ServiceableLocalityCreateWithoutCityInput, ServiceableLocalityUncheckedCreateWithoutCityInput>
  }

  export type ServiceableLocalityUpdateWithWhereUniqueWithoutCityInput = {
    where: ServiceableLocalityWhereUniqueInput
    data: XOR<ServiceableLocalityUpdateWithoutCityInput, ServiceableLocalityUncheckedUpdateWithoutCityInput>
  }

  export type ServiceableLocalityUpdateManyWithWhereWithoutCityInput = {
    where: ServiceableLocalityScalarWhereInput
    data: XOR<ServiceableLocalityUpdateManyMutationInput, ServiceableLocalityUncheckedUpdateManyWithoutCityInput>
  }

  export type ServiceableLocalityScalarWhereInput = {
    AND?: ServiceableLocalityScalarWhereInput | ServiceableLocalityScalarWhereInput[]
    OR?: ServiceableLocalityScalarWhereInput[]
    NOT?: ServiceableLocalityScalarWhereInput | ServiceableLocalityScalarWhereInput[]
    id?: StringFilter<"ServiceableLocality"> | string
    name?: StringFilter<"ServiceableLocality"> | string
    pincode?: StringFilter<"ServiceableLocality"> | string
    cityCode?: StringFilter<"ServiceableLocality"> | string
    cityName?: StringFilter<"ServiceableLocality"> | string
    district?: StringFilter<"ServiceableLocality"> | string
    state?: StringFilter<"ServiceableLocality"> | string
    latitude?: FloatFilter<"ServiceableLocality"> | number
    longitude?: FloatFilter<"ServiceableLocality"> | number
    radiusMeters?: IntFilter<"ServiceableLocality"> | number
    status?: StringFilter<"ServiceableLocality"> | string
    geoJson?: JsonNullableFilter<"ServiceableLocality">
    createdAt?: DateTimeFilter<"ServiceableLocality"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceableLocality"> | Date | string
  }

  export type PlatformCityCreateWithoutLocalitiesInput = {
    id?: string
    code: string
    name: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    status?: string
    managerName?: string | null
    managerEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformCityUncheckedCreateWithoutLocalitiesInput = {
    id?: string
    code: string
    name: string
    state?: string
    stateCode?: string
    district?: string
    districtCode?: string
    status?: string
    managerName?: string | null
    managerEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformCityCreateOrConnectWithoutLocalitiesInput = {
    where: PlatformCityWhereUniqueInput
    create: XOR<PlatformCityCreateWithoutLocalitiesInput, PlatformCityUncheckedCreateWithoutLocalitiesInput>
  }

  export type PlatformCityUpsertWithoutLocalitiesInput = {
    update: XOR<PlatformCityUpdateWithoutLocalitiesInput, PlatformCityUncheckedUpdateWithoutLocalitiesInput>
    create: XOR<PlatformCityCreateWithoutLocalitiesInput, PlatformCityUncheckedCreateWithoutLocalitiesInput>
    where?: PlatformCityWhereInput
  }

  export type PlatformCityUpdateToOneWithWhereWithoutLocalitiesInput = {
    where?: PlatformCityWhereInput
    data: XOR<PlatformCityUpdateWithoutLocalitiesInput, PlatformCityUncheckedUpdateWithoutLocalitiesInput>
  }

  export type PlatformCityUpdateWithoutLocalitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformCityUncheckedUpdateWithoutLocalitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletCreateManyMerchantInput = {
    id?: string
    name: string
    sellerMode?: string
    addressLine: string
    locality: string
    city?: string
    cityCode?: string
    district?: string | null
    districtCode?: string | null
    state?: string | null
    stateCode?: string | null
    pincode?: string | null
    latitude: number
    longitude: number
    isAddressPublic?: boolean
    storePickup?: boolean
    merchantDelivery?: boolean
    deliveryRadiusKm?: number
    minOrderValue?: number
    prepTimeMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRecordCreateManyMerchantInput = {
    id?: string
    documentType: string
    documentUrl: string
    status?: string
    notes?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OutletUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerMode?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    districtCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isAddressPublic?: BoolFieldUpdateOperationsInput | boolean
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    deliveryRadiusKm?: FloatFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTimeMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: OutletHoursUpdateManyWithoutOutletNestedInput
    serviceAreas?: ServiceAreaUpdateManyWithoutOutletNestedInput
  }

  export type OutletUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerMode?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    districtCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isAddressPublic?: BoolFieldUpdateOperationsInput | boolean
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    deliveryRadiusKm?: FloatFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTimeMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: OutletHoursUncheckedUpdateManyWithoutOutletNestedInput
    serviceAreas?: ServiceAreaUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type OutletUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerMode?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    districtCode?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isAddressPublic?: BoolFieldUpdateOperationsInput | boolean
    storePickup?: BoolFieldUpdateOperationsInput | boolean
    merchantDelivery?: BoolFieldUpdateOperationsInput | boolean
    deliveryRadiusKm?: FloatFieldUpdateOperationsInput | number
    minOrderValue?: IntFieldUpdateOperationsInput | number
    prepTimeMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRecordUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRecordUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRecordUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletHoursCreateManyOutletInput = {
    id?: string
    dayOfWeek: number
    openTime: string
    closeTime: string
    breakTime?: string | null
    isClosed?: boolean
  }

  export type ServiceAreaCreateManyOutletInput = {
    id?: string
    radiusMeters: number
    geoJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutletHoursUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    breakTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OutletHoursUncheckedUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    breakTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OutletHoursUncheckedUpdateManyWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    breakTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceAreaUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    geoJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServiceAreaUncheckedUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    geoJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServiceAreaUncheckedUpdateManyWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    geoJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RegistrationDocumentCreateManyRegistrationInput = {
    id?: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize?: string | null
    verificationStatus?: string
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type RegistrationStatusHistoryCreateManyRegistrationInput = {
    id?: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type RegistrationDocumentUpdateWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationDocumentUncheckedUpdateWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationDocumentUncheckedUpdateManyWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationStatusHistoryUpdateWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationStatusHistoryUncheckedUpdateWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationStatusHistoryUncheckedUpdateManyWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceableLocalityCreateManyCityInput = {
    id?: string
    name: string
    pincode: string
    cityName: string
    district?: string
    state?: string
    latitude?: number
    longitude?: number
    radiusMeters?: number
    status?: string
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceableLocalityUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radiusMeters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceableLocalityUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radiusMeters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceableLocalityUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radiusMeters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MerchantCountOutputTypeDefaultArgs instead
     */
    export type MerchantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MerchantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OutletCountOutputTypeDefaultArgs instead
     */
    export type OutletCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutletCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PartnerRegistrationCountOutputTypeDefaultArgs instead
     */
    export type PartnerRegistrationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PartnerRegistrationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlatformCityCountOutputTypeDefaultArgs instead
     */
    export type PlatformCityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlatformCityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MerchantDefaultArgs instead
     */
    export type MerchantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MerchantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OutletDefaultArgs instead
     */
    export type OutletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutletDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OutletHoursDefaultArgs instead
     */
    export type OutletHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutletHoursDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceAreaDefaultArgs instead
     */
    export type ServiceAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceAreaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationRecordDefaultArgs instead
     */
    export type VerificationRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PartnerRegistrationDefaultArgs instead
     */
    export type PartnerRegistrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PartnerRegistrationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegistrationDocumentDefaultArgs instead
     */
    export type RegistrationDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegistrationDocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegistrationStatusHistoryDefaultArgs instead
     */
    export type RegistrationStatusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegistrationStatusHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlatformCityDefaultArgs instead
     */
    export type PlatformCityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlatformCityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceableLocalityDefaultArgs instead
     */
    export type ServiceableLocalityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceableLocalityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopAuditLogDefaultArgs instead
     */
    export type ShopAuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopAuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MarketingBannerDefaultArgs instead
     */
    export type MarketingBannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MarketingBannerDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}