
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CustomerAddress
 * 
 */
export type CustomerAddress = $Result.DefaultSelection<Prisma.$CustomerAddressPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Membership
 * 
 */
export type Membership = $Result.DefaultSelection<Prisma.$MembershipPayload>
/**
 * Model AuditEvent
 * 
 */
export type AuditEvent = $Result.DefaultSelection<Prisma.$AuditEventPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model AdminRole
 * 
 */
export type AdminRole = $Result.DefaultSelection<Prisma.$AdminRolePayload>
/**
 * Model AdminPermission
 * 
 */
export type AdminPermission = $Result.DefaultSelection<Prisma.$AdminPermissionPayload>
/**
 * Model AdminRoleAssignment
 * 
 */
export type AdminRoleAssignment = $Result.DefaultSelection<Prisma.$AdminRoleAssignmentPayload>
/**
 * Model AdminRolePermission
 * 
 */
export type AdminRolePermission = $Result.DefaultSelection<Prisma.$AdminRolePermissionPayload>
/**
 * Model AdminGeoAssignment
 * 
 */
export type AdminGeoAssignment = $Result.DefaultSelection<Prisma.$AdminGeoAssignmentPayload>
/**
 * Model AdminAuditLog
 * 
 */
export type AdminAuditLog = $Result.DefaultSelection<Prisma.$AdminAuditLogPayload>
/**
 * Model PiiAccessAuditLog
 * 
 */
export type PiiAccessAuditLog = $Result.DefaultSelection<Prisma.$PiiAccessAuditLogPayload>
/**
 * Model CustomerFavourite
 * 
 */
export type CustomerFavourite = $Result.DefaultSelection<Prisma.$CustomerFavouritePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.customerAddress`: Exposes CRUD operations for the **CustomerAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerAddresses
    * const customerAddresses = await prisma.customerAddress.findMany()
    * ```
    */
  get customerAddress(): Prisma.CustomerAddressDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.membership`: Exposes CRUD operations for the **Membership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memberships
    * const memberships = await prisma.membership.findMany()
    * ```
    */
  get membership(): Prisma.MembershipDelegate<ExtArgs>;

  /**
   * `prisma.auditEvent`: Exposes CRUD operations for the **AuditEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditEvents
    * const auditEvents = await prisma.auditEvent.findMany()
    * ```
    */
  get auditEvent(): Prisma.AuditEventDelegate<ExtArgs>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs>;

  /**
   * `prisma.adminRole`: Exposes CRUD operations for the **AdminRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminRoles
    * const adminRoles = await prisma.adminRole.findMany()
    * ```
    */
  get adminRole(): Prisma.AdminRoleDelegate<ExtArgs>;

  /**
   * `prisma.adminPermission`: Exposes CRUD operations for the **AdminPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminPermissions
    * const adminPermissions = await prisma.adminPermission.findMany()
    * ```
    */
  get adminPermission(): Prisma.AdminPermissionDelegate<ExtArgs>;

  /**
   * `prisma.adminRoleAssignment`: Exposes CRUD operations for the **AdminRoleAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminRoleAssignments
    * const adminRoleAssignments = await prisma.adminRoleAssignment.findMany()
    * ```
    */
  get adminRoleAssignment(): Prisma.AdminRoleAssignmentDelegate<ExtArgs>;

  /**
   * `prisma.adminRolePermission`: Exposes CRUD operations for the **AdminRolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminRolePermissions
    * const adminRolePermissions = await prisma.adminRolePermission.findMany()
    * ```
    */
  get adminRolePermission(): Prisma.AdminRolePermissionDelegate<ExtArgs>;

  /**
   * `prisma.adminGeoAssignment`: Exposes CRUD operations for the **AdminGeoAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminGeoAssignments
    * const adminGeoAssignments = await prisma.adminGeoAssignment.findMany()
    * ```
    */
  get adminGeoAssignment(): Prisma.AdminGeoAssignmentDelegate<ExtArgs>;

  /**
   * `prisma.adminAuditLog`: Exposes CRUD operations for the **AdminAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminAuditLogs
    * const adminAuditLogs = await prisma.adminAuditLog.findMany()
    * ```
    */
  get adminAuditLog(): Prisma.AdminAuditLogDelegate<ExtArgs>;

  /**
   * `prisma.piiAccessAuditLog`: Exposes CRUD operations for the **PiiAccessAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PiiAccessAuditLogs
    * const piiAccessAuditLogs = await prisma.piiAccessAuditLog.findMany()
    * ```
    */
  get piiAccessAuditLog(): Prisma.PiiAccessAuditLogDelegate<ExtArgs>;

  /**
   * `prisma.customerFavourite`: Exposes CRUD operations for the **CustomerFavourite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerFavourites
    * const customerFavourites = await prisma.customerFavourite.findMany()
    * ```
    */
  get customerFavourite(): Prisma.CustomerFavouriteDelegate<ExtArgs>;
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
    User: 'User',
    CustomerAddress: 'CustomerAddress',
    Session: 'Session',
    Membership: 'Membership',
    AuditEvent: 'AuditEvent',
    AdminUser: 'AdminUser',
    AdminRole: 'AdminRole',
    AdminPermission: 'AdminPermission',
    AdminRoleAssignment: 'AdminRoleAssignment',
    AdminRolePermission: 'AdminRolePermission',
    AdminGeoAssignment: 'AdminGeoAssignment',
    AdminAuditLog: 'AdminAuditLog',
    PiiAccessAuditLog: 'PiiAccessAuditLog',
    CustomerFavourite: 'CustomerFavourite'
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
      modelProps: "user" | "customerAddress" | "session" | "membership" | "auditEvent" | "adminUser" | "adminRole" | "adminPermission" | "adminRoleAssignment" | "adminRolePermission" | "adminGeoAssignment" | "adminAuditLog" | "piiAccessAuditLog" | "customerFavourite"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CustomerAddress: {
        payload: Prisma.$CustomerAddressPayload<ExtArgs>
        fields: Prisma.CustomerAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          findFirst: {
            args: Prisma.CustomerAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          findMany: {
            args: Prisma.CustomerAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>[]
          }
          create: {
            args: Prisma.CustomerAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          createMany: {
            args: Prisma.CustomerAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>[]
          }
          delete: {
            args: Prisma.CustomerAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          update: {
            args: Prisma.CustomerAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          deleteMany: {
            args: Prisma.CustomerAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          aggregate: {
            args: Prisma.CustomerAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerAddress>
          }
          groupBy: {
            args: Prisma.CustomerAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerAddressCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerAddressCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Membership: {
        payload: Prisma.$MembershipPayload<ExtArgs>
        fields: Prisma.MembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findFirst: {
            args: Prisma.MembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findMany: {
            args: Prisma.MembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          create: {
            args: Prisma.MembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          createMany: {
            args: Prisma.MembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          delete: {
            args: Prisma.MembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          update: {
            args: Prisma.MembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          deleteMany: {
            args: Prisma.MembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          aggregate: {
            args: Prisma.MembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembership>
          }
          groupBy: {
            args: Prisma.MembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipCountAggregateOutputType> | number
          }
        }
      }
      AuditEvent: {
        payload: Prisma.$AuditEventPayload<ExtArgs>
        fields: Prisma.AuditEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findFirst: {
            args: Prisma.AuditEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findMany: {
            args: Prisma.AuditEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          create: {
            args: Prisma.AuditEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          createMany: {
            args: Prisma.AuditEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          delete: {
            args: Prisma.AuditEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          update: {
            args: Prisma.AuditEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          deleteMany: {
            args: Prisma.AuditEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          aggregate: {
            args: Prisma.AuditEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditEvent>
          }
          groupBy: {
            args: Prisma.AuditEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditEventCountArgs<ExtArgs>
            result: $Utils.Optional<AuditEventCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      AdminRole: {
        payload: Prisma.$AdminRolePayload<ExtArgs>
        fields: Prisma.AdminRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>
          }
          findFirst: {
            args: Prisma.AdminRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>
          }
          findMany: {
            args: Prisma.AdminRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>[]
          }
          create: {
            args: Prisma.AdminRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>
          }
          createMany: {
            args: Prisma.AdminRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>[]
          }
          delete: {
            args: Prisma.AdminRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>
          }
          update: {
            args: Prisma.AdminRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>
          }
          deleteMany: {
            args: Prisma.AdminRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>
          }
          aggregate: {
            args: Prisma.AdminRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminRole>
          }
          groupBy: {
            args: Prisma.AdminRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminRoleCountArgs<ExtArgs>
            result: $Utils.Optional<AdminRoleCountAggregateOutputType> | number
          }
        }
      }
      AdminPermission: {
        payload: Prisma.$AdminPermissionPayload<ExtArgs>
        fields: Prisma.AdminPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPermissionPayload>
          }
          findFirst: {
            args: Prisma.AdminPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPermissionPayload>
          }
          findMany: {
            args: Prisma.AdminPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPermissionPayload>[]
          }
          create: {
            args: Prisma.AdminPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPermissionPayload>
          }
          createMany: {
            args: Prisma.AdminPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminPermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPermissionPayload>[]
          }
          delete: {
            args: Prisma.AdminPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPermissionPayload>
          }
          update: {
            args: Prisma.AdminPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPermissionPayload>
          }
          deleteMany: {
            args: Prisma.AdminPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPermissionPayload>
          }
          aggregate: {
            args: Prisma.AdminPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminPermission>
          }
          groupBy: {
            args: Prisma.AdminPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<AdminPermissionCountAggregateOutputType> | number
          }
        }
      }
      AdminRoleAssignment: {
        payload: Prisma.$AdminRoleAssignmentPayload<ExtArgs>
        fields: Prisma.AdminRoleAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminRoleAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRoleAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminRoleAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRoleAssignmentPayload>
          }
          findFirst: {
            args: Prisma.AdminRoleAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRoleAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminRoleAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRoleAssignmentPayload>
          }
          findMany: {
            args: Prisma.AdminRoleAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRoleAssignmentPayload>[]
          }
          create: {
            args: Prisma.AdminRoleAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRoleAssignmentPayload>
          }
          createMany: {
            args: Prisma.AdminRoleAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminRoleAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRoleAssignmentPayload>[]
          }
          delete: {
            args: Prisma.AdminRoleAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRoleAssignmentPayload>
          }
          update: {
            args: Prisma.AdminRoleAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRoleAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AdminRoleAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminRoleAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminRoleAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRoleAssignmentPayload>
          }
          aggregate: {
            args: Prisma.AdminRoleAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminRoleAssignment>
          }
          groupBy: {
            args: Prisma.AdminRoleAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminRoleAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminRoleAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AdminRoleAssignmentCountAggregateOutputType> | number
          }
        }
      }
      AdminRolePermission: {
        payload: Prisma.$AdminRolePermissionPayload<ExtArgs>
        fields: Prisma.AdminRolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminRolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminRolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>
          }
          findFirst: {
            args: Prisma.AdminRolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminRolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>
          }
          findMany: {
            args: Prisma.AdminRolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>[]
          }
          create: {
            args: Prisma.AdminRolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>
          }
          createMany: {
            args: Prisma.AdminRolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminRolePermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>[]
          }
          delete: {
            args: Prisma.AdminRolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>
          }
          update: {
            args: Prisma.AdminRolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.AdminRolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminRolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminRolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>
          }
          aggregate: {
            args: Prisma.AdminRolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminRolePermission>
          }
          groupBy: {
            args: Prisma.AdminRolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminRolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminRolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<AdminRolePermissionCountAggregateOutputType> | number
          }
        }
      }
      AdminGeoAssignment: {
        payload: Prisma.$AdminGeoAssignmentPayload<ExtArgs>
        fields: Prisma.AdminGeoAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminGeoAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminGeoAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminGeoAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminGeoAssignmentPayload>
          }
          findFirst: {
            args: Prisma.AdminGeoAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminGeoAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminGeoAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminGeoAssignmentPayload>
          }
          findMany: {
            args: Prisma.AdminGeoAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminGeoAssignmentPayload>[]
          }
          create: {
            args: Prisma.AdminGeoAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminGeoAssignmentPayload>
          }
          createMany: {
            args: Prisma.AdminGeoAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminGeoAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminGeoAssignmentPayload>[]
          }
          delete: {
            args: Prisma.AdminGeoAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminGeoAssignmentPayload>
          }
          update: {
            args: Prisma.AdminGeoAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminGeoAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AdminGeoAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminGeoAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminGeoAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminGeoAssignmentPayload>
          }
          aggregate: {
            args: Prisma.AdminGeoAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminGeoAssignment>
          }
          groupBy: {
            args: Prisma.AdminGeoAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGeoAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminGeoAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AdminGeoAssignmentCountAggregateOutputType> | number
          }
        }
      }
      AdminAuditLog: {
        payload: Prisma.$AdminAuditLogPayload<ExtArgs>
        fields: Prisma.AdminAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          findFirst: {
            args: Prisma.AdminAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          findMany: {
            args: Prisma.AdminAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>[]
          }
          create: {
            args: Prisma.AdminAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          createMany: {
            args: Prisma.AdminAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>[]
          }
          delete: {
            args: Prisma.AdminAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          update: {
            args: Prisma.AdminAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AdminAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          aggregate: {
            args: Prisma.AdminAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminAuditLog>
          }
          groupBy: {
            args: Prisma.AdminAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AdminAuditLogCountAggregateOutputType> | number
          }
        }
      }
      PiiAccessAuditLog: {
        payload: Prisma.$PiiAccessAuditLogPayload<ExtArgs>
        fields: Prisma.PiiAccessAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PiiAccessAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiiAccessAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PiiAccessAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiiAccessAuditLogPayload>
          }
          findFirst: {
            args: Prisma.PiiAccessAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiiAccessAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PiiAccessAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiiAccessAuditLogPayload>
          }
          findMany: {
            args: Prisma.PiiAccessAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiiAccessAuditLogPayload>[]
          }
          create: {
            args: Prisma.PiiAccessAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiiAccessAuditLogPayload>
          }
          createMany: {
            args: Prisma.PiiAccessAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PiiAccessAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiiAccessAuditLogPayload>[]
          }
          delete: {
            args: Prisma.PiiAccessAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiiAccessAuditLogPayload>
          }
          update: {
            args: Prisma.PiiAccessAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiiAccessAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.PiiAccessAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PiiAccessAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PiiAccessAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiiAccessAuditLogPayload>
          }
          aggregate: {
            args: Prisma.PiiAccessAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePiiAccessAuditLog>
          }
          groupBy: {
            args: Prisma.PiiAccessAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PiiAccessAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PiiAccessAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<PiiAccessAuditLogCountAggregateOutputType> | number
          }
        }
      }
      CustomerFavourite: {
        payload: Prisma.$CustomerFavouritePayload<ExtArgs>
        fields: Prisma.CustomerFavouriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFavouriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFavouritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFavouriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFavouritePayload>
          }
          findFirst: {
            args: Prisma.CustomerFavouriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFavouritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFavouriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFavouritePayload>
          }
          findMany: {
            args: Prisma.CustomerFavouriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFavouritePayload>[]
          }
          create: {
            args: Prisma.CustomerFavouriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFavouritePayload>
          }
          createMany: {
            args: Prisma.CustomerFavouriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerFavouriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFavouritePayload>[]
          }
          delete: {
            args: Prisma.CustomerFavouriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFavouritePayload>
          }
          update: {
            args: Prisma.CustomerFavouriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFavouritePayload>
          }
          deleteMany: {
            args: Prisma.CustomerFavouriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerFavouriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerFavouriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFavouritePayload>
          }
          aggregate: {
            args: Prisma.CustomerFavouriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerFavourite>
          }
          groupBy: {
            args: Prisma.CustomerFavouriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerFavouriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerFavouriteCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerFavouriteCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    memberships: number
    addresses: number
    favourites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    addresses?: boolean | UserCountOutputTypeCountAddressesArgs
    favourites?: boolean | UserCountOutputTypeCountFavouritesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerAddressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerFavouriteWhereInput
  }


  /**
   * Count Type AdminUserCountOutputType
   */

  export type AdminUserCountOutputType = {
    roleAssignments: number
    geoAssignments: number
    auditLogs: number
    piiAccessLogs: number
  }

  export type AdminUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roleAssignments?: boolean | AdminUserCountOutputTypeCountRoleAssignmentsArgs
    geoAssignments?: boolean | AdminUserCountOutputTypeCountGeoAssignmentsArgs
    auditLogs?: boolean | AdminUserCountOutputTypeCountAuditLogsArgs
    piiAccessLogs?: boolean | AdminUserCountOutputTypeCountPiiAccessLogsArgs
  }

  // Custom InputTypes
  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserCountOutputType
     */
    select?: AdminUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountRoleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRoleAssignmentWhereInput
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountGeoAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminGeoAssignmentWhereInput
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminAuditLogWhereInput
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountPiiAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiiAccessAuditLogWhereInput
  }


  /**
   * Count Type AdminRoleCountOutputType
   */

  export type AdminRoleCountOutputType = {
    roleAssignments: number
    rolePermissions: number
  }

  export type AdminRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roleAssignments?: boolean | AdminRoleCountOutputTypeCountRoleAssignmentsArgs
    rolePermissions?: boolean | AdminRoleCountOutputTypeCountRolePermissionsArgs
  }

  // Custom InputTypes
  /**
   * AdminRoleCountOutputType without action
   */
  export type AdminRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleCountOutputType
     */
    select?: AdminRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminRoleCountOutputType without action
   */
  export type AdminRoleCountOutputTypeCountRoleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRoleAssignmentWhereInput
  }

  /**
   * AdminRoleCountOutputType without action
   */
  export type AdminRoleCountOutputTypeCountRolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRolePermissionWhereInput
  }


  /**
   * Count Type AdminPermissionCountOutputType
   */

  export type AdminPermissionCountOutputType = {
    rolePermissions: number
  }

  export type AdminPermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | AdminPermissionCountOutputTypeCountRolePermissionsArgs
  }

  // Custom InputTypes
  /**
   * AdminPermissionCountOutputType without action
   */
  export type AdminPermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPermissionCountOutputType
     */
    select?: AdminPermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminPermissionCountOutputType without action
   */
  export type AdminPermissionCountOutputTypeCountRolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRolePermissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    email: string | null
    fullName: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    email: string | null
    fullName: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phoneNumber: number
    email: number
    fullName: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    email?: true
    fullName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    email?: true
    fullName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    email?: true
    fullName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    phoneNumber: string
    email: string | null
    fullName: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    email?: boolean
    fullName?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    addresses?: boolean | User$addressesArgs<ExtArgs>
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    email?: boolean
    fullName?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phoneNumber?: boolean
    email?: boolean
    fullName?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    addresses?: boolean | User$addressesArgs<ExtArgs>
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      addresses: Prisma.$CustomerAddressPayload<ExtArgs>[]
      favourites: Prisma.$CustomerFavouritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phoneNumber: string
      email: string | null
      fullName: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany"> | Null>
    addresses<T extends User$addressesArgs<ExtArgs> = {}>(args?: Subset<T, User$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findMany"> | Null>
    favourites<T extends User$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerFavouritePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * User.addresses
   */
  export type User$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    where?: CustomerAddressWhereInput
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    cursor?: CustomerAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerAddressScalarFieldEnum | CustomerAddressScalarFieldEnum[]
  }

  /**
   * User.favourites
   */
  export type User$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFavourite
     */
    select?: CustomerFavouriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFavouriteInclude<ExtArgs> | null
    where?: CustomerFavouriteWhereInput
    orderBy?: CustomerFavouriteOrderByWithRelationInput | CustomerFavouriteOrderByWithRelationInput[]
    cursor?: CustomerFavouriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerFavouriteScalarFieldEnum | CustomerFavouriteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CustomerAddress
   */

  export type AggregateCustomerAddress = {
    _count: CustomerAddressCountAggregateOutputType | null
    _avg: CustomerAddressAvgAggregateOutputType | null
    _sum: CustomerAddressSumAggregateOutputType | null
    _min: CustomerAddressMinAggregateOutputType | null
    _max: CustomerAddressMaxAggregateOutputType | null
  }

  export type CustomerAddressAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CustomerAddressSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CustomerAddressMinAggregateOutputType = {
    id: number | null
    userId: string | null
    type: string | null
    fullAddress: string | null
    landmark: string | null
    city: string | null
    pincode: string | null
    latitude: number | null
    longitude: number | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerAddressMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    type: string | null
    fullAddress: string | null
    landmark: string | null
    city: string | null
    pincode: string | null
    latitude: number | null
    longitude: number | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerAddressCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    fullAddress: number
    landmark: number
    city: number
    pincode: number
    latitude: number
    longitude: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAddressAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type CustomerAddressSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type CustomerAddressMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    fullAddress?: true
    landmark?: true
    city?: true
    pincode?: true
    latitude?: true
    longitude?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerAddressMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    fullAddress?: true
    landmark?: true
    city?: true
    pincode?: true
    latitude?: true
    longitude?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerAddressCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    fullAddress?: true
    landmark?: true
    city?: true
    pincode?: true
    latitude?: true
    longitude?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerAddress to aggregate.
     */
    where?: CustomerAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerAddresses to fetch.
     */
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerAddresses
    **/
    _count?: true | CustomerAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerAddressMaxAggregateInputType
  }

  export type GetCustomerAddressAggregateType<T extends CustomerAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerAddress[P]>
      : GetScalarType<T[P], AggregateCustomerAddress[P]>
  }




  export type CustomerAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerAddressWhereInput
    orderBy?: CustomerAddressOrderByWithAggregationInput | CustomerAddressOrderByWithAggregationInput[]
    by: CustomerAddressScalarFieldEnum[] | CustomerAddressScalarFieldEnum
    having?: CustomerAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerAddressCountAggregateInputType | true
    _avg?: CustomerAddressAvgAggregateInputType
    _sum?: CustomerAddressSumAggregateInputType
    _min?: CustomerAddressMinAggregateInputType
    _max?: CustomerAddressMaxAggregateInputType
  }

  export type CustomerAddressGroupByOutputType = {
    id: number
    userId: string
    type: string
    fullAddress: string
    landmark: string | null
    city: string
    pincode: string
    latitude: number | null
    longitude: number | null
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: CustomerAddressCountAggregateOutputType | null
    _avg: CustomerAddressAvgAggregateOutputType | null
    _sum: CustomerAddressSumAggregateOutputType | null
    _min: CustomerAddressMinAggregateOutputType | null
    _max: CustomerAddressMaxAggregateOutputType | null
  }

  type GetCustomerAddressGroupByPayload<T extends CustomerAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerAddressGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerAddressGroupByOutputType[P]>
        }
      >
    >


  export type CustomerAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    fullAddress?: boolean
    landmark?: boolean
    city?: boolean
    pincode?: boolean
    latitude?: boolean
    longitude?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerAddress"]>

  export type CustomerAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    fullAddress?: boolean
    landmark?: boolean
    city?: boolean
    pincode?: boolean
    latitude?: boolean
    longitude?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerAddress"]>

  export type CustomerAddressSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    fullAddress?: boolean
    landmark?: boolean
    city?: boolean
    pincode?: boolean
    latitude?: boolean
    longitude?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomerAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CustomerAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerAddress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      type: string
      fullAddress: string
      landmark: string | null
      city: string
      pincode: string
      latitude: number | null
      longitude: number | null
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customerAddress"]>
    composites: {}
  }

  type CustomerAddressGetPayload<S extends boolean | null | undefined | CustomerAddressDefaultArgs> = $Result.GetResult<Prisma.$CustomerAddressPayload, S>

  type CustomerAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerAddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerAddressCountAggregateInputType | true
    }

  export interface CustomerAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerAddress'], meta: { name: 'CustomerAddress' } }
    /**
     * Find zero or one CustomerAddress that matches the filter.
     * @param {CustomerAddressFindUniqueArgs} args - Arguments to find a CustomerAddress
     * @example
     * // Get one CustomerAddress
     * const customerAddress = await prisma.customerAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerAddressFindUniqueArgs>(args: SelectSubset<T, CustomerAddressFindUniqueArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomerAddress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerAddressFindUniqueOrThrowArgs} args - Arguments to find a CustomerAddress
     * @example
     * // Get one CustomerAddress
     * const customerAddress = await prisma.customerAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomerAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressFindFirstArgs} args - Arguments to find a CustomerAddress
     * @example
     * // Get one CustomerAddress
     * const customerAddress = await prisma.customerAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerAddressFindFirstArgs>(args?: SelectSubset<T, CustomerAddressFindFirstArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomerAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressFindFirstOrThrowArgs} args - Arguments to find a CustomerAddress
     * @example
     * // Get one CustomerAddress
     * const customerAddress = await prisma.customerAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomerAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerAddresses
     * const customerAddresses = await prisma.customerAddress.findMany()
     * 
     * // Get first 10 CustomerAddresses
     * const customerAddresses = await prisma.customerAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerAddressWithIdOnly = await prisma.customerAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerAddressFindManyArgs>(args?: SelectSubset<T, CustomerAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomerAddress.
     * @param {CustomerAddressCreateArgs} args - Arguments to create a CustomerAddress.
     * @example
     * // Create one CustomerAddress
     * const CustomerAddress = await prisma.customerAddress.create({
     *   data: {
     *     // ... data to create a CustomerAddress
     *   }
     * })
     * 
     */
    create<T extends CustomerAddressCreateArgs>(args: SelectSubset<T, CustomerAddressCreateArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomerAddresses.
     * @param {CustomerAddressCreateManyArgs} args - Arguments to create many CustomerAddresses.
     * @example
     * // Create many CustomerAddresses
     * const customerAddress = await prisma.customerAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerAddressCreateManyArgs>(args?: SelectSubset<T, CustomerAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerAddresses and returns the data saved in the database.
     * @param {CustomerAddressCreateManyAndReturnArgs} args - Arguments to create many CustomerAddresses.
     * @example
     * // Create many CustomerAddresses
     * const customerAddress = await prisma.customerAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerAddresses and only return the `id`
     * const customerAddressWithIdOnly = await prisma.customerAddress.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomerAddress.
     * @param {CustomerAddressDeleteArgs} args - Arguments to delete one CustomerAddress.
     * @example
     * // Delete one CustomerAddress
     * const CustomerAddress = await prisma.customerAddress.delete({
     *   where: {
     *     // ... filter to delete one CustomerAddress
     *   }
     * })
     * 
     */
    delete<T extends CustomerAddressDeleteArgs>(args: SelectSubset<T, CustomerAddressDeleteArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomerAddress.
     * @param {CustomerAddressUpdateArgs} args - Arguments to update one CustomerAddress.
     * @example
     * // Update one CustomerAddress
     * const customerAddress = await prisma.customerAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerAddressUpdateArgs>(args: SelectSubset<T, CustomerAddressUpdateArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomerAddresses.
     * @param {CustomerAddressDeleteManyArgs} args - Arguments to filter CustomerAddresses to delete.
     * @example
     * // Delete a few CustomerAddresses
     * const { count } = await prisma.customerAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerAddressDeleteManyArgs>(args?: SelectSubset<T, CustomerAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerAddresses
     * const customerAddress = await prisma.customerAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerAddressUpdateManyArgs>(args: SelectSubset<T, CustomerAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerAddress.
     * @param {CustomerAddressUpsertArgs} args - Arguments to update or create a CustomerAddress.
     * @example
     * // Update or create a CustomerAddress
     * const customerAddress = await prisma.customerAddress.upsert({
     *   create: {
     *     // ... data to create a CustomerAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerAddress we want to update
     *   }
     * })
     */
    upsert<T extends CustomerAddressUpsertArgs>(args: SelectSubset<T, CustomerAddressUpsertArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomerAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressCountArgs} args - Arguments to filter CustomerAddresses to count.
     * @example
     * // Count the number of CustomerAddresses
     * const count = await prisma.customerAddress.count({
     *   where: {
     *     // ... the filter for the CustomerAddresses we want to count
     *   }
     * })
    **/
    count<T extends CustomerAddressCountArgs>(
      args?: Subset<T, CustomerAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAddressAggregateArgs>(args: Subset<T, CustomerAddressAggregateArgs>): Prisma.PrismaPromise<GetCustomerAddressAggregateType<T>>

    /**
     * Group by CustomerAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressGroupByArgs} args - Group by arguments.
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
      T extends CustomerAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerAddressGroupByArgs['orderBy'] }
        : { orderBy?: CustomerAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerAddress model
   */
  readonly fields: CustomerAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CustomerAddress model
   */ 
  interface CustomerAddressFieldRefs {
    readonly id: FieldRef<"CustomerAddress", 'Int'>
    readonly userId: FieldRef<"CustomerAddress", 'String'>
    readonly type: FieldRef<"CustomerAddress", 'String'>
    readonly fullAddress: FieldRef<"CustomerAddress", 'String'>
    readonly landmark: FieldRef<"CustomerAddress", 'String'>
    readonly city: FieldRef<"CustomerAddress", 'String'>
    readonly pincode: FieldRef<"CustomerAddress", 'String'>
    readonly latitude: FieldRef<"CustomerAddress", 'Float'>
    readonly longitude: FieldRef<"CustomerAddress", 'Float'>
    readonly isDefault: FieldRef<"CustomerAddress", 'Boolean'>
    readonly createdAt: FieldRef<"CustomerAddress", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerAddress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerAddress findUnique
   */
  export type CustomerAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * Filter, which CustomerAddress to fetch.
     */
    where: CustomerAddressWhereUniqueInput
  }

  /**
   * CustomerAddress findUniqueOrThrow
   */
  export type CustomerAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * Filter, which CustomerAddress to fetch.
     */
    where: CustomerAddressWhereUniqueInput
  }

  /**
   * CustomerAddress findFirst
   */
  export type CustomerAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * Filter, which CustomerAddress to fetch.
     */
    where?: CustomerAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerAddresses to fetch.
     */
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerAddresses.
     */
    cursor?: CustomerAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerAddresses.
     */
    distinct?: CustomerAddressScalarFieldEnum | CustomerAddressScalarFieldEnum[]
  }

  /**
   * CustomerAddress findFirstOrThrow
   */
  export type CustomerAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * Filter, which CustomerAddress to fetch.
     */
    where?: CustomerAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerAddresses to fetch.
     */
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerAddresses.
     */
    cursor?: CustomerAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerAddresses.
     */
    distinct?: CustomerAddressScalarFieldEnum | CustomerAddressScalarFieldEnum[]
  }

  /**
   * CustomerAddress findMany
   */
  export type CustomerAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * Filter, which CustomerAddresses to fetch.
     */
    where?: CustomerAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerAddresses to fetch.
     */
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerAddresses.
     */
    cursor?: CustomerAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerAddresses.
     */
    skip?: number
    distinct?: CustomerAddressScalarFieldEnum | CustomerAddressScalarFieldEnum[]
  }

  /**
   * CustomerAddress create
   */
  export type CustomerAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerAddress.
     */
    data: XOR<CustomerAddressCreateInput, CustomerAddressUncheckedCreateInput>
  }

  /**
   * CustomerAddress createMany
   */
  export type CustomerAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerAddresses.
     */
    data: CustomerAddressCreateManyInput | CustomerAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerAddress createManyAndReturn
   */
  export type CustomerAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomerAddresses.
     */
    data: CustomerAddressCreateManyInput | CustomerAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerAddress update
   */
  export type CustomerAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerAddress.
     */
    data: XOR<CustomerAddressUpdateInput, CustomerAddressUncheckedUpdateInput>
    /**
     * Choose, which CustomerAddress to update.
     */
    where: CustomerAddressWhereUniqueInput
  }

  /**
   * CustomerAddress updateMany
   */
  export type CustomerAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerAddresses.
     */
    data: XOR<CustomerAddressUpdateManyMutationInput, CustomerAddressUncheckedUpdateManyInput>
    /**
     * Filter which CustomerAddresses to update
     */
    where?: CustomerAddressWhereInput
  }

  /**
   * CustomerAddress upsert
   */
  export type CustomerAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerAddress to update in case it exists.
     */
    where: CustomerAddressWhereUniqueInput
    /**
     * In case the CustomerAddress found by the `where` argument doesn't exist, create a new CustomerAddress with this data.
     */
    create: XOR<CustomerAddressCreateInput, CustomerAddressUncheckedCreateInput>
    /**
     * In case the CustomerAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerAddressUpdateInput, CustomerAddressUncheckedUpdateInput>
  }

  /**
   * CustomerAddress delete
   */
  export type CustomerAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * Filter which CustomerAddress to delete.
     */
    where: CustomerAddressWhereUniqueInput
  }

  /**
   * CustomerAddress deleteMany
   */
  export type CustomerAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerAddresses to delete
     */
    where?: CustomerAddressWhereInput
  }

  /**
   * CustomerAddress without action
   */
  export type CustomerAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    userAgent: string | null
    ipAddress: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    userAgent: string | null
    ipAddress: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    userAgent: number
    ipAddress: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    userAgent?: true
    ipAddress?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    userAgent?: true
    ipAddress?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    userAgent?: true
    ipAddress?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    userAgent: string | null
    ipAddress: string | null
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      userAgent: string | null
      ipAddress: string | null
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly tokenHash: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Membership
   */

  export type AggregateMembership = {
    _count: MembershipCountAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  export type MembershipMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tenantId: string | null
    outletId: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tenantId: string | null
    outletId: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipCountAggregateOutputType = {
    id: number
    userId: number
    tenantId: number
    outletId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MembershipMinAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    outletId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipMaxAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    outletId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipCountAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    outletId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membership to aggregate.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memberships
    **/
    _count?: true | MembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipMaxAggregateInputType
  }

  export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembership[P]>
      : GetScalarType<T[P], AggregateMembership[P]>
  }




  export type MembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithAggregationInput | MembershipOrderByWithAggregationInput[]
    by: MembershipScalarFieldEnum[] | MembershipScalarFieldEnum
    having?: MembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipCountAggregateInputType | true
    _min?: MembershipMinAggregateInputType
    _max?: MembershipMaxAggregateInputType
  }

  export type MembershipGroupByOutputType = {
    id: string
    userId: string
    tenantId: string
    outletId: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: MembershipCountAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  type GetMembershipGroupByPayload<T extends MembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipGroupByOutputType[P]>
        }
      >
    >


  export type MembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    outletId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    outletId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectScalar = {
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    outletId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membership"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tenantId: string
      outletId: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["membership"]>
    composites: {}
  }

  type MembershipGetPayload<S extends boolean | null | undefined | MembershipDefaultArgs> = $Result.GetResult<Prisma.$MembershipPayload, S>

  type MembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MembershipFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MembershipCountAggregateInputType | true
    }

  export interface MembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membership'], meta: { name: 'Membership' } }
    /**
     * Find zero or one Membership that matches the filter.
     * @param {MembershipFindUniqueArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipFindUniqueArgs>(args: SelectSubset<T, MembershipFindUniqueArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Membership that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MembershipFindUniqueOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Membership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipFindFirstArgs>(args?: SelectSubset<T, MembershipFindFirstArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Membership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memberships
     * const memberships = await prisma.membership.findMany()
     * 
     * // Get first 10 Memberships
     * const memberships = await prisma.membership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipWithIdOnly = await prisma.membership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipFindManyArgs>(args?: SelectSubset<T, MembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Membership.
     * @param {MembershipCreateArgs} args - Arguments to create a Membership.
     * @example
     * // Create one Membership
     * const Membership = await prisma.membership.create({
     *   data: {
     *     // ... data to create a Membership
     *   }
     * })
     * 
     */
    create<T extends MembershipCreateArgs>(args: SelectSubset<T, MembershipCreateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Memberships.
     * @param {MembershipCreateManyArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipCreateManyArgs>(args?: SelectSubset<T, MembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memberships and returns the data saved in the database.
     * @param {MembershipCreateManyAndReturnArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memberships and only return the `id`
     * const membershipWithIdOnly = await prisma.membership.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Membership.
     * @param {MembershipDeleteArgs} args - Arguments to delete one Membership.
     * @example
     * // Delete one Membership
     * const Membership = await prisma.membership.delete({
     *   where: {
     *     // ... filter to delete one Membership
     *   }
     * })
     * 
     */
    delete<T extends MembershipDeleteArgs>(args: SelectSubset<T, MembershipDeleteArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Membership.
     * @param {MembershipUpdateArgs} args - Arguments to update one Membership.
     * @example
     * // Update one Membership
     * const membership = await prisma.membership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipUpdateArgs>(args: SelectSubset<T, MembershipUpdateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Memberships.
     * @param {MembershipDeleteManyArgs} args - Arguments to filter Memberships to delete.
     * @example
     * // Delete a few Memberships
     * const { count } = await prisma.membership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipDeleteManyArgs>(args?: SelectSubset<T, MembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipUpdateManyArgs>(args: SelectSubset<T, MembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Membership.
     * @param {MembershipUpsertArgs} args - Arguments to update or create a Membership.
     * @example
     * // Update or create a Membership
     * const membership = await prisma.membership.upsert({
     *   create: {
     *     // ... data to create a Membership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membership we want to update
     *   }
     * })
     */
    upsert<T extends MembershipUpsertArgs>(args: SelectSubset<T, MembershipUpsertArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountArgs} args - Arguments to filter Memberships to count.
     * @example
     * // Count the number of Memberships
     * const count = await prisma.membership.count({
     *   where: {
     *     // ... the filter for the Memberships we want to count
     *   }
     * })
    **/
    count<T extends MembershipCountArgs>(
      args?: Subset<T, MembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembershipAggregateArgs>(args: Subset<T, MembershipAggregateArgs>): Prisma.PrismaPromise<GetMembershipAggregateType<T>>

    /**
     * Group by Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipGroupByArgs} args - Group by arguments.
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
      T extends MembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipGroupByArgs['orderBy'] }
        : { orderBy?: MembershipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membership model
   */
  readonly fields: MembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Membership model
   */ 
  interface MembershipFieldRefs {
    readonly id: FieldRef<"Membership", 'String'>
    readonly userId: FieldRef<"Membership", 'String'>
    readonly tenantId: FieldRef<"Membership", 'String'>
    readonly outletId: FieldRef<"Membership", 'String'>
    readonly role: FieldRef<"Membership", 'String'>
    readonly createdAt: FieldRef<"Membership", 'DateTime'>
    readonly updatedAt: FieldRef<"Membership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Membership findUnique
   */
  export type MembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findUniqueOrThrow
   */
  export type MembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findFirst
   */
  export type MembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findFirstOrThrow
   */
  export type MembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findMany
   */
  export type MembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership create
   */
  export type MembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a Membership.
     */
    data: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
  }

  /**
   * Membership createMany
   */
  export type MembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membership createManyAndReturn
   */
  export type MembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membership update
   */
  export type MembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a Membership.
     */
    data: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
    /**
     * Choose, which Membership to update.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership updateMany
   */
  export type MembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipWhereInput
  }

  /**
   * Membership upsert
   */
  export type MembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the Membership to update in case it exists.
     */
    where: MembershipWhereUniqueInput
    /**
     * In case the Membership found by the `where` argument doesn't exist, create a new Membership with this data.
     */
    create: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
    /**
     * In case the Membership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
  }

  /**
   * Membership delete
   */
  export type MembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter which Membership to delete.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership deleteMany
   */
  export type MembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memberships to delete
     */
    where?: MembershipWhereInput
  }

  /**
   * Membership without action
   */
  export type MembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
  }


  /**
   * Model AuditEvent
   */

  export type AggregateAuditEvent = {
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  export type AuditEventMinAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    targetType: string | null
    targetId: string | null
    occurredAt: Date | null
  }

  export type AuditEventMaxAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    targetType: string | null
    targetId: string | null
    occurredAt: Date | null
  }

  export type AuditEventCountAggregateOutputType = {
    id: number
    actorId: number
    action: number
    targetType: number
    targetId: number
    metadata: number
    occurredAt: number
    _all: number
  }


  export type AuditEventMinAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    targetType?: true
    targetId?: true
    occurredAt?: true
  }

  export type AuditEventMaxAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    targetType?: true
    targetId?: true
    occurredAt?: true
  }

  export type AuditEventCountAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    targetType?: true
    targetId?: true
    metadata?: true
    occurredAt?: true
    _all?: true
  }

  export type AuditEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvent to aggregate.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditEvents
    **/
    _count?: true | AuditEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditEventMaxAggregateInputType
  }

  export type GetAuditEventAggregateType<T extends AuditEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditEvent[P]>
      : GetScalarType<T[P], AggregateAuditEvent[P]>
  }




  export type AuditEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditEventWhereInput
    orderBy?: AuditEventOrderByWithAggregationInput | AuditEventOrderByWithAggregationInput[]
    by: AuditEventScalarFieldEnum[] | AuditEventScalarFieldEnum
    having?: AuditEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditEventCountAggregateInputType | true
    _min?: AuditEventMinAggregateInputType
    _max?: AuditEventMaxAggregateInputType
  }

  export type AuditEventGroupByOutputType = {
    id: string
    actorId: string
    action: string
    targetType: string
    targetId: string
    metadata: JsonValue | null
    occurredAt: Date
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  type GetAuditEventGroupByPayload<T extends AuditEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
            : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
        }
      >
    >


  export type AuditEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    metadata?: boolean
    occurredAt?: boolean
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    metadata?: boolean
    occurredAt?: boolean
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectScalar = {
    id?: boolean
    actorId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    metadata?: boolean
    occurredAt?: boolean
  }


  export type $AuditEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorId: string
      action: string
      targetType: string
      targetId: string
      metadata: Prisma.JsonValue | null
      occurredAt: Date
    }, ExtArgs["result"]["auditEvent"]>
    composites: {}
  }

  type AuditEventGetPayload<S extends boolean | null | undefined | AuditEventDefaultArgs> = $Result.GetResult<Prisma.$AuditEventPayload, S>

  type AuditEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditEventCountAggregateInputType | true
    }

  export interface AuditEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditEvent'], meta: { name: 'AuditEvent' } }
    /**
     * Find zero or one AuditEvent that matches the filter.
     * @param {AuditEventFindUniqueArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditEventFindUniqueArgs>(args: SelectSubset<T, AuditEventFindUniqueArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditEventFindUniqueOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditEventFindFirstArgs>(args?: SelectSubset<T, AuditEventFindFirstArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany()
     * 
     * // Get first 10 AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditEventFindManyArgs>(args?: SelectSubset<T, AuditEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditEvent.
     * @param {AuditEventCreateArgs} args - Arguments to create a AuditEvent.
     * @example
     * // Create one AuditEvent
     * const AuditEvent = await prisma.auditEvent.create({
     *   data: {
     *     // ... data to create a AuditEvent
     *   }
     * })
     * 
     */
    create<T extends AuditEventCreateArgs>(args: SelectSubset<T, AuditEventCreateArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditEvents.
     * @param {AuditEventCreateManyArgs} args - Arguments to create many AuditEvents.
     * @example
     * // Create many AuditEvents
     * const auditEvent = await prisma.auditEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditEventCreateManyArgs>(args?: SelectSubset<T, AuditEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditEvents and returns the data saved in the database.
     * @param {AuditEventCreateManyAndReturnArgs} args - Arguments to create many AuditEvents.
     * @example
     * // Create many AuditEvents
     * const auditEvent = await prisma.auditEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditEvents and only return the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditEvent.
     * @param {AuditEventDeleteArgs} args - Arguments to delete one AuditEvent.
     * @example
     * // Delete one AuditEvent
     * const AuditEvent = await prisma.auditEvent.delete({
     *   where: {
     *     // ... filter to delete one AuditEvent
     *   }
     * })
     * 
     */
    delete<T extends AuditEventDeleteArgs>(args: SelectSubset<T, AuditEventDeleteArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditEvent.
     * @param {AuditEventUpdateArgs} args - Arguments to update one AuditEvent.
     * @example
     * // Update one AuditEvent
     * const auditEvent = await prisma.auditEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditEventUpdateArgs>(args: SelectSubset<T, AuditEventUpdateArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditEvents.
     * @param {AuditEventDeleteManyArgs} args - Arguments to filter AuditEvents to delete.
     * @example
     * // Delete a few AuditEvents
     * const { count } = await prisma.auditEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditEventDeleteManyArgs>(args?: SelectSubset<T, AuditEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditEvents
     * const auditEvent = await prisma.auditEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditEventUpdateManyArgs>(args: SelectSubset<T, AuditEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditEvent.
     * @param {AuditEventUpsertArgs} args - Arguments to update or create a AuditEvent.
     * @example
     * // Update or create a AuditEvent
     * const auditEvent = await prisma.auditEvent.upsert({
     *   create: {
     *     // ... data to create a AuditEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditEvent we want to update
     *   }
     * })
     */
    upsert<T extends AuditEventUpsertArgs>(args: SelectSubset<T, AuditEventUpsertArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventCountArgs} args - Arguments to filter AuditEvents to count.
     * @example
     * // Count the number of AuditEvents
     * const count = await prisma.auditEvent.count({
     *   where: {
     *     // ... the filter for the AuditEvents we want to count
     *   }
     * })
    **/
    count<T extends AuditEventCountArgs>(
      args?: Subset<T, AuditEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditEventAggregateArgs>(args: Subset<T, AuditEventAggregateArgs>): Prisma.PrismaPromise<GetAuditEventAggregateType<T>>

    /**
     * Group by AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventGroupByArgs} args - Group by arguments.
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
      T extends AuditEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditEventGroupByArgs['orderBy'] }
        : { orderBy?: AuditEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditEvent model
   */
  readonly fields: AuditEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AuditEvent model
   */ 
  interface AuditEventFieldRefs {
    readonly id: FieldRef<"AuditEvent", 'String'>
    readonly actorId: FieldRef<"AuditEvent", 'String'>
    readonly action: FieldRef<"AuditEvent", 'String'>
    readonly targetType: FieldRef<"AuditEvent", 'String'>
    readonly targetId: FieldRef<"AuditEvent", 'String'>
    readonly metadata: FieldRef<"AuditEvent", 'Json'>
    readonly occurredAt: FieldRef<"AuditEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditEvent findUnique
   */
  export type AuditEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent findUniqueOrThrow
   */
  export type AuditEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent findFirst
   */
  export type AuditEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent findFirstOrThrow
   */
  export type AuditEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent findMany
   */
  export type AuditEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Filter, which AuditEvents to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent create
   */
  export type AuditEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * The data needed to create a AuditEvent.
     */
    data: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
  }

  /**
   * AuditEvent createMany
   */
  export type AuditEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditEvents.
     */
    data: AuditEventCreateManyInput | AuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditEvent createManyAndReturn
   */
  export type AuditEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditEvents.
     */
    data: AuditEventCreateManyInput | AuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditEvent update
   */
  export type AuditEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * The data needed to update a AuditEvent.
     */
    data: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
    /**
     * Choose, which AuditEvent to update.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent updateMany
   */
  export type AuditEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditEvents.
     */
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyInput>
    /**
     * Filter which AuditEvents to update
     */
    where?: AuditEventWhereInput
  }

  /**
   * AuditEvent upsert
   */
  export type AuditEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * The filter to search for the AuditEvent to update in case it exists.
     */
    where: AuditEventWhereUniqueInput
    /**
     * In case the AuditEvent found by the `where` argument doesn't exist, create a new AuditEvent with this data.
     */
    create: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
    /**
     * In case the AuditEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
  }

  /**
   * AuditEvent delete
   */
  export type AuditEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Filter which AuditEvent to delete.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent deleteMany
   */
  export type AuditEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvents to delete
     */
    where?: AuditEventWhereInput
  }

  /**
   * AuditEvent without action
   */
  export type AuditEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserAvgAggregateOutputType = {
    tokenVersion: number | null
    failedLoginAttempts: number | null
  }

  export type AdminUserSumAggregateOutputType = {
    tokenVersion: number | null
    failedLoginAttempts: number | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    status: string | null
    mfaEnabled: boolean | null
    isRootProtected: boolean | null
    tokenVersion: number | null
    failedLoginAttempts: number | null
    lockedUntil: Date | null
    lastLoginAt: Date | null
    lastLoginIp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    status: string | null
    mfaEnabled: boolean | null
    isRootProtected: boolean | null
    tokenVersion: number | null
    failedLoginAttempts: number | null
    lockedUntil: Date | null
    lastLoginAt: Date | null
    lastLoginIp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    status: number
    mfaEnabled: number
    isRootProtected: number
    tokenVersion: number
    failedLoginAttempts: number
    lockedUntil: number
    lastLoginAt: number
    lastLoginIp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserAvgAggregateInputType = {
    tokenVersion?: true
    failedLoginAttempts?: true
  }

  export type AdminUserSumAggregateInputType = {
    tokenVersion?: true
    failedLoginAttempts?: true
  }

  export type AdminUserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    mfaEnabled?: true
    isRootProtected?: true
    tokenVersion?: true
    failedLoginAttempts?: true
    lockedUntil?: true
    lastLoginAt?: true
    lastLoginIp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    mfaEnabled?: true
    isRootProtected?: true
    tokenVersion?: true
    failedLoginAttempts?: true
    lockedUntil?: true
    lastLoginAt?: true
    lastLoginIp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    mfaEnabled?: true
    isRootProtected?: true
    tokenVersion?: true
    failedLoginAttempts?: true
    lockedUntil?: true
    lastLoginAt?: true
    lastLoginIp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _avg?: AdminUserAvgAggregateInputType
    _sum?: AdminUserSumAggregateInputType
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    status: string
    mfaEnabled: boolean
    isRootProtected: boolean
    tokenVersion: number
    failedLoginAttempts: number
    lockedUntil: Date | null
    lastLoginAt: Date | null
    lastLoginIp: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: boolean
    failedLoginAttempts?: boolean
    lockedUntil?: boolean
    lastLoginAt?: boolean
    lastLoginIp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleAssignments?: boolean | AdminUser$roleAssignmentsArgs<ExtArgs>
    geoAssignments?: boolean | AdminUser$geoAssignmentsArgs<ExtArgs>
    auditLogs?: boolean | AdminUser$auditLogsArgs<ExtArgs>
    piiAccessLogs?: boolean | AdminUser$piiAccessLogsArgs<ExtArgs>
    _count?: boolean | AdminUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: boolean
    failedLoginAttempts?: boolean
    lockedUntil?: boolean
    lastLoginAt?: boolean
    lastLoginIp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: boolean
    failedLoginAttempts?: boolean
    lockedUntil?: boolean
    lastLoginAt?: boolean
    lastLoginIp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roleAssignments?: boolean | AdminUser$roleAssignmentsArgs<ExtArgs>
    geoAssignments?: boolean | AdminUser$geoAssignmentsArgs<ExtArgs>
    auditLogs?: boolean | AdminUser$auditLogsArgs<ExtArgs>
    piiAccessLogs?: boolean | AdminUser$piiAccessLogsArgs<ExtArgs>
    _count?: boolean | AdminUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {
      roleAssignments: Prisma.$AdminRoleAssignmentPayload<ExtArgs>[]
      geoAssignments: Prisma.$AdminGeoAssignmentPayload<ExtArgs>[]
      auditLogs: Prisma.$AdminAuditLogPayload<ExtArgs>[]
      piiAccessLogs: Prisma.$PiiAccessAuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      status: string
      mfaEnabled: boolean
      isRootProtected: boolean
      tokenVersion: number
      failedLoginAttempts: number
      lockedUntil: Date | null
      lastLoginAt: Date | null
      lastLoginIp: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roleAssignments<T extends AdminUser$roleAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$roleAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRoleAssignmentPayload<ExtArgs>, T, "findMany"> | Null>
    geoAssignments<T extends AdminUser$geoAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$geoAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminGeoAssignmentPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends AdminUser$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    piiAccessLogs<T extends AdminUser$piiAccessLogsArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$piiAccessLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiiAccessAuditLogPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AdminUser model
   */ 
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly phone: FieldRef<"AdminUser", 'String'>
    readonly status: FieldRef<"AdminUser", 'String'>
    readonly mfaEnabled: FieldRef<"AdminUser", 'Boolean'>
    readonly isRootProtected: FieldRef<"AdminUser", 'Boolean'>
    readonly tokenVersion: FieldRef<"AdminUser", 'Int'>
    readonly failedLoginAttempts: FieldRef<"AdminUser", 'Int'>
    readonly lockedUntil: FieldRef<"AdminUser", 'DateTime'>
    readonly lastLoginAt: FieldRef<"AdminUser", 'DateTime'>
    readonly lastLoginIp: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
  }

  /**
   * AdminUser.roleAssignments
   */
  export type AdminUser$roleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleAssignment
     */
    select?: AdminRoleAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleAssignmentInclude<ExtArgs> | null
    where?: AdminRoleAssignmentWhereInput
    orderBy?: AdminRoleAssignmentOrderByWithRelationInput | AdminRoleAssignmentOrderByWithRelationInput[]
    cursor?: AdminRoleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminRoleAssignmentScalarFieldEnum | AdminRoleAssignmentScalarFieldEnum[]
  }

  /**
   * AdminUser.geoAssignments
   */
  export type AdminUser$geoAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminGeoAssignment
     */
    select?: AdminGeoAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminGeoAssignmentInclude<ExtArgs> | null
    where?: AdminGeoAssignmentWhereInput
    orderBy?: AdminGeoAssignmentOrderByWithRelationInput | AdminGeoAssignmentOrderByWithRelationInput[]
    cursor?: AdminGeoAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminGeoAssignmentScalarFieldEnum | AdminGeoAssignmentScalarFieldEnum[]
  }

  /**
   * AdminUser.auditLogs
   */
  export type AdminUser$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    where?: AdminAuditLogWhereInput
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    cursor?: AdminAuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminAuditLogScalarFieldEnum | AdminAuditLogScalarFieldEnum[]
  }

  /**
   * AdminUser.piiAccessLogs
   */
  export type AdminUser$piiAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiiAccessAuditLog
     */
    select?: PiiAccessAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiiAccessAuditLogInclude<ExtArgs> | null
    where?: PiiAccessAuditLogWhereInput
    orderBy?: PiiAccessAuditLogOrderByWithRelationInput | PiiAccessAuditLogOrderByWithRelationInput[]
    cursor?: PiiAccessAuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PiiAccessAuditLogScalarFieldEnum | PiiAccessAuditLogScalarFieldEnum[]
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
  }


  /**
   * Model AdminRole
   */

  export type AggregateAdminRole = {
    _count: AdminRoleCountAggregateOutputType | null
    _avg: AdminRoleAvgAggregateOutputType | null
    _sum: AdminRoleSumAggregateOutputType | null
    _min: AdminRoleMinAggregateOutputType | null
    _max: AdminRoleMaxAggregateOutputType | null
  }

  export type AdminRoleAvgAggregateOutputType = {
    hierarchyLevel: number | null
  }

  export type AdminRoleSumAggregateOutputType = {
    hierarchyLevel: number | null
  }

  export type AdminRoleMinAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    subtitle: string | null
    hierarchyLevel: number | null
    description: string | null
    requiresMfa: boolean | null
    isSystem: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminRoleMaxAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    subtitle: string | null
    hierarchyLevel: number | null
    description: string | null
    requiresMfa: boolean | null
    isSystem: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminRoleCountAggregateOutputType = {
    id: number
    code: number
    title: number
    subtitle: number
    hierarchyLevel: number
    description: number
    requiresMfa: number
    isSystem: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminRoleAvgAggregateInputType = {
    hierarchyLevel?: true
  }

  export type AdminRoleSumAggregateInputType = {
    hierarchyLevel?: true
  }

  export type AdminRoleMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    subtitle?: true
    hierarchyLevel?: true
    description?: true
    requiresMfa?: true
    isSystem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminRoleMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    subtitle?: true
    hierarchyLevel?: true
    description?: true
    requiresMfa?: true
    isSystem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminRoleCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    subtitle?: true
    hierarchyLevel?: true
    description?: true
    requiresMfa?: true
    isSystem?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRole to aggregate.
     */
    where?: AdminRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?: AdminRoleOrderByWithRelationInput | AdminRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminRoles
    **/
    _count?: true | AdminRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminRoleMaxAggregateInputType
  }

  export type GetAdminRoleAggregateType<T extends AdminRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminRole[P]>
      : GetScalarType<T[P], AggregateAdminRole[P]>
  }




  export type AdminRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRoleWhereInput
    orderBy?: AdminRoleOrderByWithAggregationInput | AdminRoleOrderByWithAggregationInput[]
    by: AdminRoleScalarFieldEnum[] | AdminRoleScalarFieldEnum
    having?: AdminRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminRoleCountAggregateInputType | true
    _avg?: AdminRoleAvgAggregateInputType
    _sum?: AdminRoleSumAggregateInputType
    _min?: AdminRoleMinAggregateInputType
    _max?: AdminRoleMaxAggregateInputType
  }

  export type AdminRoleGroupByOutputType = {
    id: string
    code: string
    title: string
    subtitle: string | null
    hierarchyLevel: number
    description: string | null
    requiresMfa: boolean
    isSystem: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdminRoleCountAggregateOutputType | null
    _avg: AdminRoleAvgAggregateOutputType | null
    _sum: AdminRoleSumAggregateOutputType | null
    _min: AdminRoleMinAggregateOutputType | null
    _max: AdminRoleMaxAggregateOutputType | null
  }

  type GetAdminRoleGroupByPayload<T extends AdminRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminRoleGroupByOutputType[P]>
            : GetScalarType<T[P], AdminRoleGroupByOutputType[P]>
        }
      >
    >


  export type AdminRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    subtitle?: boolean
    hierarchyLevel?: boolean
    description?: boolean
    requiresMfa?: boolean
    isSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleAssignments?: boolean | AdminRole$roleAssignmentsArgs<ExtArgs>
    rolePermissions?: boolean | AdminRole$rolePermissionsArgs<ExtArgs>
    _count?: boolean | AdminRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminRole"]>

  export type AdminRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    subtitle?: boolean
    hierarchyLevel?: boolean
    description?: boolean
    requiresMfa?: boolean
    isSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminRole"]>

  export type AdminRoleSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    subtitle?: boolean
    hierarchyLevel?: boolean
    description?: boolean
    requiresMfa?: boolean
    isSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roleAssignments?: boolean | AdminRole$roleAssignmentsArgs<ExtArgs>
    rolePermissions?: boolean | AdminRole$rolePermissionsArgs<ExtArgs>
    _count?: boolean | AdminRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminRole"
    objects: {
      roleAssignments: Prisma.$AdminRoleAssignmentPayload<ExtArgs>[]
      rolePermissions: Prisma.$AdminRolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      title: string
      subtitle: string | null
      hierarchyLevel: number
      description: string | null
      requiresMfa: boolean
      isSystem: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminRole"]>
    composites: {}
  }

  type AdminRoleGetPayload<S extends boolean | null | undefined | AdminRoleDefaultArgs> = $Result.GetResult<Prisma.$AdminRolePayload, S>

  type AdminRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminRoleCountAggregateInputType | true
    }

  export interface AdminRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminRole'], meta: { name: 'AdminRole' } }
    /**
     * Find zero or one AdminRole that matches the filter.
     * @param {AdminRoleFindUniqueArgs} args - Arguments to find a AdminRole
     * @example
     * // Get one AdminRole
     * const adminRole = await prisma.adminRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminRoleFindUniqueArgs>(args: SelectSubset<T, AdminRoleFindUniqueArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminRoleFindUniqueOrThrowArgs} args - Arguments to find a AdminRole
     * @example
     * // Get one AdminRole
     * const adminRole = await prisma.adminRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleFindFirstArgs} args - Arguments to find a AdminRole
     * @example
     * // Get one AdminRole
     * const adminRole = await prisma.adminRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminRoleFindFirstArgs>(args?: SelectSubset<T, AdminRoleFindFirstArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleFindFirstOrThrowArgs} args - Arguments to find a AdminRole
     * @example
     * // Get one AdminRole
     * const adminRole = await prisma.adminRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminRoles
     * const adminRoles = await prisma.adminRole.findMany()
     * 
     * // Get first 10 AdminRoles
     * const adminRoles = await prisma.adminRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminRoleWithIdOnly = await prisma.adminRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminRoleFindManyArgs>(args?: SelectSubset<T, AdminRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminRole.
     * @param {AdminRoleCreateArgs} args - Arguments to create a AdminRole.
     * @example
     * // Create one AdminRole
     * const AdminRole = await prisma.adminRole.create({
     *   data: {
     *     // ... data to create a AdminRole
     *   }
     * })
     * 
     */
    create<T extends AdminRoleCreateArgs>(args: SelectSubset<T, AdminRoleCreateArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminRoles.
     * @param {AdminRoleCreateManyArgs} args - Arguments to create many AdminRoles.
     * @example
     * // Create many AdminRoles
     * const adminRole = await prisma.adminRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminRoleCreateManyArgs>(args?: SelectSubset<T, AdminRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminRoles and returns the data saved in the database.
     * @param {AdminRoleCreateManyAndReturnArgs} args - Arguments to create many AdminRoles.
     * @example
     * // Create many AdminRoles
     * const adminRole = await prisma.adminRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminRoles and only return the `id`
     * const adminRoleWithIdOnly = await prisma.adminRole.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminRole.
     * @param {AdminRoleDeleteArgs} args - Arguments to delete one AdminRole.
     * @example
     * // Delete one AdminRole
     * const AdminRole = await prisma.adminRole.delete({
     *   where: {
     *     // ... filter to delete one AdminRole
     *   }
     * })
     * 
     */
    delete<T extends AdminRoleDeleteArgs>(args: SelectSubset<T, AdminRoleDeleteArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminRole.
     * @param {AdminRoleUpdateArgs} args - Arguments to update one AdminRole.
     * @example
     * // Update one AdminRole
     * const adminRole = await prisma.adminRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminRoleUpdateArgs>(args: SelectSubset<T, AdminRoleUpdateArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminRoles.
     * @param {AdminRoleDeleteManyArgs} args - Arguments to filter AdminRoles to delete.
     * @example
     * // Delete a few AdminRoles
     * const { count } = await prisma.adminRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminRoleDeleteManyArgs>(args?: SelectSubset<T, AdminRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminRoles
     * const adminRole = await prisma.adminRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminRoleUpdateManyArgs>(args: SelectSubset<T, AdminRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminRole.
     * @param {AdminRoleUpsertArgs} args - Arguments to update or create a AdminRole.
     * @example
     * // Update or create a AdminRole
     * const adminRole = await prisma.adminRole.upsert({
     *   create: {
     *     // ... data to create a AdminRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminRole we want to update
     *   }
     * })
     */
    upsert<T extends AdminRoleUpsertArgs>(args: SelectSubset<T, AdminRoleUpsertArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleCountArgs} args - Arguments to filter AdminRoles to count.
     * @example
     * // Count the number of AdminRoles
     * const count = await prisma.adminRole.count({
     *   where: {
     *     // ... the filter for the AdminRoles we want to count
     *   }
     * })
    **/
    count<T extends AdminRoleCountArgs>(
      args?: Subset<T, AdminRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminRoleAggregateArgs>(args: Subset<T, AdminRoleAggregateArgs>): Prisma.PrismaPromise<GetAdminRoleAggregateType<T>>

    /**
     * Group by AdminRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleGroupByArgs} args - Group by arguments.
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
      T extends AdminRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminRoleGroupByArgs['orderBy'] }
        : { orderBy?: AdminRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminRole model
   */
  readonly fields: AdminRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roleAssignments<T extends AdminRole$roleAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, AdminRole$roleAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRoleAssignmentPayload<ExtArgs>, T, "findMany"> | Null>
    rolePermissions<T extends AdminRole$rolePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, AdminRole$rolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AdminRole model
   */ 
  interface AdminRoleFieldRefs {
    readonly id: FieldRef<"AdminRole", 'String'>
    readonly code: FieldRef<"AdminRole", 'String'>
    readonly title: FieldRef<"AdminRole", 'String'>
    readonly subtitle: FieldRef<"AdminRole", 'String'>
    readonly hierarchyLevel: FieldRef<"AdminRole", 'Int'>
    readonly description: FieldRef<"AdminRole", 'String'>
    readonly requiresMfa: FieldRef<"AdminRole", 'Boolean'>
    readonly isSystem: FieldRef<"AdminRole", 'Boolean'>
    readonly createdAt: FieldRef<"AdminRole", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminRole findUnique
   */
  export type AdminRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * Filter, which AdminRole to fetch.
     */
    where: AdminRoleWhereUniqueInput
  }

  /**
   * AdminRole findUniqueOrThrow
   */
  export type AdminRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * Filter, which AdminRole to fetch.
     */
    where: AdminRoleWhereUniqueInput
  }

  /**
   * AdminRole findFirst
   */
  export type AdminRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * Filter, which AdminRole to fetch.
     */
    where?: AdminRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?: AdminRoleOrderByWithRelationInput | AdminRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRoles.
     */
    cursor?: AdminRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRoles.
     */
    distinct?: AdminRoleScalarFieldEnum | AdminRoleScalarFieldEnum[]
  }

  /**
   * AdminRole findFirstOrThrow
   */
  export type AdminRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * Filter, which AdminRole to fetch.
     */
    where?: AdminRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?: AdminRoleOrderByWithRelationInput | AdminRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRoles.
     */
    cursor?: AdminRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRoles.
     */
    distinct?: AdminRoleScalarFieldEnum | AdminRoleScalarFieldEnum[]
  }

  /**
   * AdminRole findMany
   */
  export type AdminRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * Filter, which AdminRoles to fetch.
     */
    where?: AdminRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?: AdminRoleOrderByWithRelationInput | AdminRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminRoles.
     */
    cursor?: AdminRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoles.
     */
    skip?: number
    distinct?: AdminRoleScalarFieldEnum | AdminRoleScalarFieldEnum[]
  }

  /**
   * AdminRole create
   */
  export type AdminRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminRole.
     */
    data: XOR<AdminRoleCreateInput, AdminRoleUncheckedCreateInput>
  }

  /**
   * AdminRole createMany
   */
  export type AdminRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminRoles.
     */
    data: AdminRoleCreateManyInput | AdminRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminRole createManyAndReturn
   */
  export type AdminRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminRoles.
     */
    data: AdminRoleCreateManyInput | AdminRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminRole update
   */
  export type AdminRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminRole.
     */
    data: XOR<AdminRoleUpdateInput, AdminRoleUncheckedUpdateInput>
    /**
     * Choose, which AdminRole to update.
     */
    where: AdminRoleWhereUniqueInput
  }

  /**
   * AdminRole updateMany
   */
  export type AdminRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminRoles.
     */
    data: XOR<AdminRoleUpdateManyMutationInput, AdminRoleUncheckedUpdateManyInput>
    /**
     * Filter which AdminRoles to update
     */
    where?: AdminRoleWhereInput
  }

  /**
   * AdminRole upsert
   */
  export type AdminRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminRole to update in case it exists.
     */
    where: AdminRoleWhereUniqueInput
    /**
     * In case the AdminRole found by the `where` argument doesn't exist, create a new AdminRole with this data.
     */
    create: XOR<AdminRoleCreateInput, AdminRoleUncheckedCreateInput>
    /**
     * In case the AdminRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminRoleUpdateInput, AdminRoleUncheckedUpdateInput>
  }

  /**
   * AdminRole delete
   */
  export type AdminRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * Filter which AdminRole to delete.
     */
    where: AdminRoleWhereUniqueInput
  }

  /**
   * AdminRole deleteMany
   */
  export type AdminRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRoles to delete
     */
    where?: AdminRoleWhereInput
  }

  /**
   * AdminRole.roleAssignments
   */
  export type AdminRole$roleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleAssignment
     */
    select?: AdminRoleAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleAssignmentInclude<ExtArgs> | null
    where?: AdminRoleAssignmentWhereInput
    orderBy?: AdminRoleAssignmentOrderByWithRelationInput | AdminRoleAssignmentOrderByWithRelationInput[]
    cursor?: AdminRoleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminRoleAssignmentScalarFieldEnum | AdminRoleAssignmentScalarFieldEnum[]
  }

  /**
   * AdminRole.rolePermissions
   */
  export type AdminRole$rolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRolePermission
     */
    select?: AdminRolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRolePermissionInclude<ExtArgs> | null
    where?: AdminRolePermissionWhereInput
    orderBy?: AdminRolePermissionOrderByWithRelationInput | AdminRolePermissionOrderByWithRelationInput[]
    cursor?: AdminRolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminRolePermissionScalarFieldEnum | AdminRolePermissionScalarFieldEnum[]
  }

  /**
   * AdminRole without action
   */
  export type AdminRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
  }


  /**
   * Model AdminPermission
   */

  export type AggregateAdminPermission = {
    _count: AdminPermissionCountAggregateOutputType | null
    _min: AdminPermissionMinAggregateOutputType | null
    _max: AdminPermissionMaxAggregateOutputType | null
  }

  export type AdminPermissionMinAggregateOutputType = {
    id: string | null
    code: string | null
    module: string | null
    description: string | null
  }

  export type AdminPermissionMaxAggregateOutputType = {
    id: string | null
    code: string | null
    module: string | null
    description: string | null
  }

  export type AdminPermissionCountAggregateOutputType = {
    id: number
    code: number
    module: number
    description: number
    _all: number
  }


  export type AdminPermissionMinAggregateInputType = {
    id?: true
    code?: true
    module?: true
    description?: true
  }

  export type AdminPermissionMaxAggregateInputType = {
    id?: true
    code?: true
    module?: true
    description?: true
  }

  export type AdminPermissionCountAggregateInputType = {
    id?: true
    code?: true
    module?: true
    description?: true
    _all?: true
  }

  export type AdminPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminPermission to aggregate.
     */
    where?: AdminPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminPermissions to fetch.
     */
    orderBy?: AdminPermissionOrderByWithRelationInput | AdminPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminPermissions
    **/
    _count?: true | AdminPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminPermissionMaxAggregateInputType
  }

  export type GetAdminPermissionAggregateType<T extends AdminPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminPermission[P]>
      : GetScalarType<T[P], AggregateAdminPermission[P]>
  }




  export type AdminPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminPermissionWhereInput
    orderBy?: AdminPermissionOrderByWithAggregationInput | AdminPermissionOrderByWithAggregationInput[]
    by: AdminPermissionScalarFieldEnum[] | AdminPermissionScalarFieldEnum
    having?: AdminPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminPermissionCountAggregateInputType | true
    _min?: AdminPermissionMinAggregateInputType
    _max?: AdminPermissionMaxAggregateInputType
  }

  export type AdminPermissionGroupByOutputType = {
    id: string
    code: string
    module: string
    description: string | null
    _count: AdminPermissionCountAggregateOutputType | null
    _min: AdminPermissionMinAggregateOutputType | null
    _max: AdminPermissionMaxAggregateOutputType | null
  }

  type GetAdminPermissionGroupByPayload<T extends AdminPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], AdminPermissionGroupByOutputType[P]>
        }
      >
    >


  export type AdminPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    module?: boolean
    description?: boolean
    rolePermissions?: boolean | AdminPermission$rolePermissionsArgs<ExtArgs>
    _count?: boolean | AdminPermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminPermission"]>

  export type AdminPermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    module?: boolean
    description?: boolean
  }, ExtArgs["result"]["adminPermission"]>

  export type AdminPermissionSelectScalar = {
    id?: boolean
    code?: boolean
    module?: boolean
    description?: boolean
  }

  export type AdminPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | AdminPermission$rolePermissionsArgs<ExtArgs>
    _count?: boolean | AdminPermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminPermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminPermission"
    objects: {
      rolePermissions: Prisma.$AdminRolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      module: string
      description: string | null
    }, ExtArgs["result"]["adminPermission"]>
    composites: {}
  }

  type AdminPermissionGetPayload<S extends boolean | null | undefined | AdminPermissionDefaultArgs> = $Result.GetResult<Prisma.$AdminPermissionPayload, S>

  type AdminPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminPermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminPermissionCountAggregateInputType | true
    }

  export interface AdminPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminPermission'], meta: { name: 'AdminPermission' } }
    /**
     * Find zero or one AdminPermission that matches the filter.
     * @param {AdminPermissionFindUniqueArgs} args - Arguments to find a AdminPermission
     * @example
     * // Get one AdminPermission
     * const adminPermission = await prisma.adminPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminPermissionFindUniqueArgs>(args: SelectSubset<T, AdminPermissionFindUniqueArgs<ExtArgs>>): Prisma__AdminPermissionClient<$Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminPermission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminPermissionFindUniqueOrThrowArgs} args - Arguments to find a AdminPermission
     * @example
     * // Get one AdminPermission
     * const adminPermission = await prisma.adminPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminPermissionClient<$Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPermissionFindFirstArgs} args - Arguments to find a AdminPermission
     * @example
     * // Get one AdminPermission
     * const adminPermission = await prisma.adminPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminPermissionFindFirstArgs>(args?: SelectSubset<T, AdminPermissionFindFirstArgs<ExtArgs>>): Prisma__AdminPermissionClient<$Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPermissionFindFirstOrThrowArgs} args - Arguments to find a AdminPermission
     * @example
     * // Get one AdminPermission
     * const adminPermission = await prisma.adminPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminPermissionClient<$Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminPermissions
     * const adminPermissions = await prisma.adminPermission.findMany()
     * 
     * // Get first 10 AdminPermissions
     * const adminPermissions = await prisma.adminPermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminPermissionWithIdOnly = await prisma.adminPermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminPermissionFindManyArgs>(args?: SelectSubset<T, AdminPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminPermission.
     * @param {AdminPermissionCreateArgs} args - Arguments to create a AdminPermission.
     * @example
     * // Create one AdminPermission
     * const AdminPermission = await prisma.adminPermission.create({
     *   data: {
     *     // ... data to create a AdminPermission
     *   }
     * })
     * 
     */
    create<T extends AdminPermissionCreateArgs>(args: SelectSubset<T, AdminPermissionCreateArgs<ExtArgs>>): Prisma__AdminPermissionClient<$Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminPermissions.
     * @param {AdminPermissionCreateManyArgs} args - Arguments to create many AdminPermissions.
     * @example
     * // Create many AdminPermissions
     * const adminPermission = await prisma.adminPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminPermissionCreateManyArgs>(args?: SelectSubset<T, AdminPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminPermissions and returns the data saved in the database.
     * @param {AdminPermissionCreateManyAndReturnArgs} args - Arguments to create many AdminPermissions.
     * @example
     * // Create many AdminPermissions
     * const adminPermission = await prisma.adminPermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminPermissions and only return the `id`
     * const adminPermissionWithIdOnly = await prisma.adminPermission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminPermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminPermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminPermission.
     * @param {AdminPermissionDeleteArgs} args - Arguments to delete one AdminPermission.
     * @example
     * // Delete one AdminPermission
     * const AdminPermission = await prisma.adminPermission.delete({
     *   where: {
     *     // ... filter to delete one AdminPermission
     *   }
     * })
     * 
     */
    delete<T extends AdminPermissionDeleteArgs>(args: SelectSubset<T, AdminPermissionDeleteArgs<ExtArgs>>): Prisma__AdminPermissionClient<$Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminPermission.
     * @param {AdminPermissionUpdateArgs} args - Arguments to update one AdminPermission.
     * @example
     * // Update one AdminPermission
     * const adminPermission = await prisma.adminPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminPermissionUpdateArgs>(args: SelectSubset<T, AdminPermissionUpdateArgs<ExtArgs>>): Prisma__AdminPermissionClient<$Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminPermissions.
     * @param {AdminPermissionDeleteManyArgs} args - Arguments to filter AdminPermissions to delete.
     * @example
     * // Delete a few AdminPermissions
     * const { count } = await prisma.adminPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminPermissionDeleteManyArgs>(args?: SelectSubset<T, AdminPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminPermissions
     * const adminPermission = await prisma.adminPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminPermissionUpdateManyArgs>(args: SelectSubset<T, AdminPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminPermission.
     * @param {AdminPermissionUpsertArgs} args - Arguments to update or create a AdminPermission.
     * @example
     * // Update or create a AdminPermission
     * const adminPermission = await prisma.adminPermission.upsert({
     *   create: {
     *     // ... data to create a AdminPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminPermission we want to update
     *   }
     * })
     */
    upsert<T extends AdminPermissionUpsertArgs>(args: SelectSubset<T, AdminPermissionUpsertArgs<ExtArgs>>): Prisma__AdminPermissionClient<$Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPermissionCountArgs} args - Arguments to filter AdminPermissions to count.
     * @example
     * // Count the number of AdminPermissions
     * const count = await prisma.adminPermission.count({
     *   where: {
     *     // ... the filter for the AdminPermissions we want to count
     *   }
     * })
    **/
    count<T extends AdminPermissionCountArgs>(
      args?: Subset<T, AdminPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminPermissionAggregateArgs>(args: Subset<T, AdminPermissionAggregateArgs>): Prisma.PrismaPromise<GetAdminPermissionAggregateType<T>>

    /**
     * Group by AdminPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPermissionGroupByArgs} args - Group by arguments.
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
      T extends AdminPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminPermissionGroupByArgs['orderBy'] }
        : { orderBy?: AdminPermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminPermission model
   */
  readonly fields: AdminPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolePermissions<T extends AdminPermission$rolePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, AdminPermission$rolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AdminPermission model
   */ 
  interface AdminPermissionFieldRefs {
    readonly id: FieldRef<"AdminPermission", 'String'>
    readonly code: FieldRef<"AdminPermission", 'String'>
    readonly module: FieldRef<"AdminPermission", 'String'>
    readonly description: FieldRef<"AdminPermission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdminPermission findUnique
   */
  export type AdminPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPermission
     */
    select?: AdminPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPermissionInclude<ExtArgs> | null
    /**
     * Filter, which AdminPermission to fetch.
     */
    where: AdminPermissionWhereUniqueInput
  }

  /**
   * AdminPermission findUniqueOrThrow
   */
  export type AdminPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPermission
     */
    select?: AdminPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPermissionInclude<ExtArgs> | null
    /**
     * Filter, which AdminPermission to fetch.
     */
    where: AdminPermissionWhereUniqueInput
  }

  /**
   * AdminPermission findFirst
   */
  export type AdminPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPermission
     */
    select?: AdminPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPermissionInclude<ExtArgs> | null
    /**
     * Filter, which AdminPermission to fetch.
     */
    where?: AdminPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminPermissions to fetch.
     */
    orderBy?: AdminPermissionOrderByWithRelationInput | AdminPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminPermissions.
     */
    cursor?: AdminPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminPermissions.
     */
    distinct?: AdminPermissionScalarFieldEnum | AdminPermissionScalarFieldEnum[]
  }

  /**
   * AdminPermission findFirstOrThrow
   */
  export type AdminPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPermission
     */
    select?: AdminPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPermissionInclude<ExtArgs> | null
    /**
     * Filter, which AdminPermission to fetch.
     */
    where?: AdminPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminPermissions to fetch.
     */
    orderBy?: AdminPermissionOrderByWithRelationInput | AdminPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminPermissions.
     */
    cursor?: AdminPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminPermissions.
     */
    distinct?: AdminPermissionScalarFieldEnum | AdminPermissionScalarFieldEnum[]
  }

  /**
   * AdminPermission findMany
   */
  export type AdminPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPermission
     */
    select?: AdminPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPermissionInclude<ExtArgs> | null
    /**
     * Filter, which AdminPermissions to fetch.
     */
    where?: AdminPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminPermissions to fetch.
     */
    orderBy?: AdminPermissionOrderByWithRelationInput | AdminPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminPermissions.
     */
    cursor?: AdminPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminPermissions.
     */
    skip?: number
    distinct?: AdminPermissionScalarFieldEnum | AdminPermissionScalarFieldEnum[]
  }

  /**
   * AdminPermission create
   */
  export type AdminPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPermission
     */
    select?: AdminPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminPermission.
     */
    data: XOR<AdminPermissionCreateInput, AdminPermissionUncheckedCreateInput>
  }

  /**
   * AdminPermission createMany
   */
  export type AdminPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminPermissions.
     */
    data: AdminPermissionCreateManyInput | AdminPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminPermission createManyAndReturn
   */
  export type AdminPermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPermission
     */
    select?: AdminPermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminPermissions.
     */
    data: AdminPermissionCreateManyInput | AdminPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminPermission update
   */
  export type AdminPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPermission
     */
    select?: AdminPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminPermission.
     */
    data: XOR<AdminPermissionUpdateInput, AdminPermissionUncheckedUpdateInput>
    /**
     * Choose, which AdminPermission to update.
     */
    where: AdminPermissionWhereUniqueInput
  }

  /**
   * AdminPermission updateMany
   */
  export type AdminPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminPermissions.
     */
    data: XOR<AdminPermissionUpdateManyMutationInput, AdminPermissionUncheckedUpdateManyInput>
    /**
     * Filter which AdminPermissions to update
     */
    where?: AdminPermissionWhereInput
  }

  /**
   * AdminPermission upsert
   */
  export type AdminPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPermission
     */
    select?: AdminPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminPermission to update in case it exists.
     */
    where: AdminPermissionWhereUniqueInput
    /**
     * In case the AdminPermission found by the `where` argument doesn't exist, create a new AdminPermission with this data.
     */
    create: XOR<AdminPermissionCreateInput, AdminPermissionUncheckedCreateInput>
    /**
     * In case the AdminPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminPermissionUpdateInput, AdminPermissionUncheckedUpdateInput>
  }

  /**
   * AdminPermission delete
   */
  export type AdminPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPermission
     */
    select?: AdminPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPermissionInclude<ExtArgs> | null
    /**
     * Filter which AdminPermission to delete.
     */
    where: AdminPermissionWhereUniqueInput
  }

  /**
   * AdminPermission deleteMany
   */
  export type AdminPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminPermissions to delete
     */
    where?: AdminPermissionWhereInput
  }

  /**
   * AdminPermission.rolePermissions
   */
  export type AdminPermission$rolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRolePermission
     */
    select?: AdminRolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRolePermissionInclude<ExtArgs> | null
    where?: AdminRolePermissionWhereInput
    orderBy?: AdminRolePermissionOrderByWithRelationInput | AdminRolePermissionOrderByWithRelationInput[]
    cursor?: AdminRolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminRolePermissionScalarFieldEnum | AdminRolePermissionScalarFieldEnum[]
  }

  /**
   * AdminPermission without action
   */
  export type AdminPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPermission
     */
    select?: AdminPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPermissionInclude<ExtArgs> | null
  }


  /**
   * Model AdminRoleAssignment
   */

  export type AggregateAdminRoleAssignment = {
    _count: AdminRoleAssignmentCountAggregateOutputType | null
    _min: AdminRoleAssignmentMinAggregateOutputType | null
    _max: AdminRoleAssignmentMaxAggregateOutputType | null
  }

  export type AdminRoleAssignmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    roleId: string | null
    assignedAt: Date | null
  }

  export type AdminRoleAssignmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    roleId: string | null
    assignedAt: Date | null
  }

  export type AdminRoleAssignmentCountAggregateOutputType = {
    id: number
    userId: number
    roleId: number
    assignedAt: number
    _all: number
  }


  export type AdminRoleAssignmentMinAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    assignedAt?: true
  }

  export type AdminRoleAssignmentMaxAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    assignedAt?: true
  }

  export type AdminRoleAssignmentCountAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    assignedAt?: true
    _all?: true
  }

  export type AdminRoleAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRoleAssignment to aggregate.
     */
    where?: AdminRoleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoleAssignments to fetch.
     */
    orderBy?: AdminRoleAssignmentOrderByWithRelationInput | AdminRoleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminRoleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminRoleAssignments
    **/
    _count?: true | AdminRoleAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminRoleAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminRoleAssignmentMaxAggregateInputType
  }

  export type GetAdminRoleAssignmentAggregateType<T extends AdminRoleAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminRoleAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminRoleAssignment[P]>
      : GetScalarType<T[P], AggregateAdminRoleAssignment[P]>
  }




  export type AdminRoleAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRoleAssignmentWhereInput
    orderBy?: AdminRoleAssignmentOrderByWithAggregationInput | AdminRoleAssignmentOrderByWithAggregationInput[]
    by: AdminRoleAssignmentScalarFieldEnum[] | AdminRoleAssignmentScalarFieldEnum
    having?: AdminRoleAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminRoleAssignmentCountAggregateInputType | true
    _min?: AdminRoleAssignmentMinAggregateInputType
    _max?: AdminRoleAssignmentMaxAggregateInputType
  }

  export type AdminRoleAssignmentGroupByOutputType = {
    id: string
    userId: string
    roleId: string
    assignedAt: Date
    _count: AdminRoleAssignmentCountAggregateOutputType | null
    _min: AdminRoleAssignmentMinAggregateOutputType | null
    _max: AdminRoleAssignmentMaxAggregateOutputType | null
  }

  type GetAdminRoleAssignmentGroupByPayload<T extends AdminRoleAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminRoleAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminRoleAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminRoleAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AdminRoleAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AdminRoleAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    assignedAt?: boolean
    user?: boolean | AdminUserDefaultArgs<ExtArgs>
    role?: boolean | AdminRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminRoleAssignment"]>

  export type AdminRoleAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    assignedAt?: boolean
    user?: boolean | AdminUserDefaultArgs<ExtArgs>
    role?: boolean | AdminRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminRoleAssignment"]>

  export type AdminRoleAssignmentSelectScalar = {
    id?: boolean
    userId?: boolean
    roleId?: boolean
    assignedAt?: boolean
  }

  export type AdminRoleAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AdminUserDefaultArgs<ExtArgs>
    role?: boolean | AdminRoleDefaultArgs<ExtArgs>
  }
  export type AdminRoleAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AdminUserDefaultArgs<ExtArgs>
    role?: boolean | AdminRoleDefaultArgs<ExtArgs>
  }

  export type $AdminRoleAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminRoleAssignment"
    objects: {
      user: Prisma.$AdminUserPayload<ExtArgs>
      role: Prisma.$AdminRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      roleId: string
      assignedAt: Date
    }, ExtArgs["result"]["adminRoleAssignment"]>
    composites: {}
  }

  type AdminRoleAssignmentGetPayload<S extends boolean | null | undefined | AdminRoleAssignmentDefaultArgs> = $Result.GetResult<Prisma.$AdminRoleAssignmentPayload, S>

  type AdminRoleAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminRoleAssignmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminRoleAssignmentCountAggregateInputType | true
    }

  export interface AdminRoleAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminRoleAssignment'], meta: { name: 'AdminRoleAssignment' } }
    /**
     * Find zero or one AdminRoleAssignment that matches the filter.
     * @param {AdminRoleAssignmentFindUniqueArgs} args - Arguments to find a AdminRoleAssignment
     * @example
     * // Get one AdminRoleAssignment
     * const adminRoleAssignment = await prisma.adminRoleAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminRoleAssignmentFindUniqueArgs>(args: SelectSubset<T, AdminRoleAssignmentFindUniqueArgs<ExtArgs>>): Prisma__AdminRoleAssignmentClient<$Result.GetResult<Prisma.$AdminRoleAssignmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminRoleAssignment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminRoleAssignmentFindUniqueOrThrowArgs} args - Arguments to find a AdminRoleAssignment
     * @example
     * // Get one AdminRoleAssignment
     * const adminRoleAssignment = await prisma.adminRoleAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminRoleAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminRoleAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminRoleAssignmentClient<$Result.GetResult<Prisma.$AdminRoleAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminRoleAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleAssignmentFindFirstArgs} args - Arguments to find a AdminRoleAssignment
     * @example
     * // Get one AdminRoleAssignment
     * const adminRoleAssignment = await prisma.adminRoleAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminRoleAssignmentFindFirstArgs>(args?: SelectSubset<T, AdminRoleAssignmentFindFirstArgs<ExtArgs>>): Prisma__AdminRoleAssignmentClient<$Result.GetResult<Prisma.$AdminRoleAssignmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminRoleAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleAssignmentFindFirstOrThrowArgs} args - Arguments to find a AdminRoleAssignment
     * @example
     * // Get one AdminRoleAssignment
     * const adminRoleAssignment = await prisma.adminRoleAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminRoleAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminRoleAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminRoleAssignmentClient<$Result.GetResult<Prisma.$AdminRoleAssignmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminRoleAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminRoleAssignments
     * const adminRoleAssignments = await prisma.adminRoleAssignment.findMany()
     * 
     * // Get first 10 AdminRoleAssignments
     * const adminRoleAssignments = await prisma.adminRoleAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminRoleAssignmentWithIdOnly = await prisma.adminRoleAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminRoleAssignmentFindManyArgs>(args?: SelectSubset<T, AdminRoleAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRoleAssignmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminRoleAssignment.
     * @param {AdminRoleAssignmentCreateArgs} args - Arguments to create a AdminRoleAssignment.
     * @example
     * // Create one AdminRoleAssignment
     * const AdminRoleAssignment = await prisma.adminRoleAssignment.create({
     *   data: {
     *     // ... data to create a AdminRoleAssignment
     *   }
     * })
     * 
     */
    create<T extends AdminRoleAssignmentCreateArgs>(args: SelectSubset<T, AdminRoleAssignmentCreateArgs<ExtArgs>>): Prisma__AdminRoleAssignmentClient<$Result.GetResult<Prisma.$AdminRoleAssignmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminRoleAssignments.
     * @param {AdminRoleAssignmentCreateManyArgs} args - Arguments to create many AdminRoleAssignments.
     * @example
     * // Create many AdminRoleAssignments
     * const adminRoleAssignment = await prisma.adminRoleAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminRoleAssignmentCreateManyArgs>(args?: SelectSubset<T, AdminRoleAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminRoleAssignments and returns the data saved in the database.
     * @param {AdminRoleAssignmentCreateManyAndReturnArgs} args - Arguments to create many AdminRoleAssignments.
     * @example
     * // Create many AdminRoleAssignments
     * const adminRoleAssignment = await prisma.adminRoleAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminRoleAssignments and only return the `id`
     * const adminRoleAssignmentWithIdOnly = await prisma.adminRoleAssignment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminRoleAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminRoleAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRoleAssignmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminRoleAssignment.
     * @param {AdminRoleAssignmentDeleteArgs} args - Arguments to delete one AdminRoleAssignment.
     * @example
     * // Delete one AdminRoleAssignment
     * const AdminRoleAssignment = await prisma.adminRoleAssignment.delete({
     *   where: {
     *     // ... filter to delete one AdminRoleAssignment
     *   }
     * })
     * 
     */
    delete<T extends AdminRoleAssignmentDeleteArgs>(args: SelectSubset<T, AdminRoleAssignmentDeleteArgs<ExtArgs>>): Prisma__AdminRoleAssignmentClient<$Result.GetResult<Prisma.$AdminRoleAssignmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminRoleAssignment.
     * @param {AdminRoleAssignmentUpdateArgs} args - Arguments to update one AdminRoleAssignment.
     * @example
     * // Update one AdminRoleAssignment
     * const adminRoleAssignment = await prisma.adminRoleAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminRoleAssignmentUpdateArgs>(args: SelectSubset<T, AdminRoleAssignmentUpdateArgs<ExtArgs>>): Prisma__AdminRoleAssignmentClient<$Result.GetResult<Prisma.$AdminRoleAssignmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminRoleAssignments.
     * @param {AdminRoleAssignmentDeleteManyArgs} args - Arguments to filter AdminRoleAssignments to delete.
     * @example
     * // Delete a few AdminRoleAssignments
     * const { count } = await prisma.adminRoleAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminRoleAssignmentDeleteManyArgs>(args?: SelectSubset<T, AdminRoleAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminRoleAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminRoleAssignments
     * const adminRoleAssignment = await prisma.adminRoleAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminRoleAssignmentUpdateManyArgs>(args: SelectSubset<T, AdminRoleAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminRoleAssignment.
     * @param {AdminRoleAssignmentUpsertArgs} args - Arguments to update or create a AdminRoleAssignment.
     * @example
     * // Update or create a AdminRoleAssignment
     * const adminRoleAssignment = await prisma.adminRoleAssignment.upsert({
     *   create: {
     *     // ... data to create a AdminRoleAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminRoleAssignment we want to update
     *   }
     * })
     */
    upsert<T extends AdminRoleAssignmentUpsertArgs>(args: SelectSubset<T, AdminRoleAssignmentUpsertArgs<ExtArgs>>): Prisma__AdminRoleAssignmentClient<$Result.GetResult<Prisma.$AdminRoleAssignmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminRoleAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleAssignmentCountArgs} args - Arguments to filter AdminRoleAssignments to count.
     * @example
     * // Count the number of AdminRoleAssignments
     * const count = await prisma.adminRoleAssignment.count({
     *   where: {
     *     // ... the filter for the AdminRoleAssignments we want to count
     *   }
     * })
    **/
    count<T extends AdminRoleAssignmentCountArgs>(
      args?: Subset<T, AdminRoleAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminRoleAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminRoleAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminRoleAssignmentAggregateArgs>(args: Subset<T, AdminRoleAssignmentAggregateArgs>): Prisma.PrismaPromise<GetAdminRoleAssignmentAggregateType<T>>

    /**
     * Group by AdminRoleAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleAssignmentGroupByArgs} args - Group by arguments.
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
      T extends AdminRoleAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminRoleAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AdminRoleAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminRoleAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminRoleAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminRoleAssignment model
   */
  readonly fields: AdminRoleAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminRoleAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminRoleAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AdminUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminUserDefaultArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    role<T extends AdminRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminRoleDefaultArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AdminRoleAssignment model
   */ 
  interface AdminRoleAssignmentFieldRefs {
    readonly id: FieldRef<"AdminRoleAssignment", 'String'>
    readonly userId: FieldRef<"AdminRoleAssignment", 'String'>
    readonly roleId: FieldRef<"AdminRoleAssignment", 'String'>
    readonly assignedAt: FieldRef<"AdminRoleAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminRoleAssignment findUnique
   */
  export type AdminRoleAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleAssignment
     */
    select?: AdminRoleAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which AdminRoleAssignment to fetch.
     */
    where: AdminRoleAssignmentWhereUniqueInput
  }

  /**
   * AdminRoleAssignment findUniqueOrThrow
   */
  export type AdminRoleAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleAssignment
     */
    select?: AdminRoleAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which AdminRoleAssignment to fetch.
     */
    where: AdminRoleAssignmentWhereUniqueInput
  }

  /**
   * AdminRoleAssignment findFirst
   */
  export type AdminRoleAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleAssignment
     */
    select?: AdminRoleAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which AdminRoleAssignment to fetch.
     */
    where?: AdminRoleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoleAssignments to fetch.
     */
    orderBy?: AdminRoleAssignmentOrderByWithRelationInput | AdminRoleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRoleAssignments.
     */
    cursor?: AdminRoleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRoleAssignments.
     */
    distinct?: AdminRoleAssignmentScalarFieldEnum | AdminRoleAssignmentScalarFieldEnum[]
  }

  /**
   * AdminRoleAssignment findFirstOrThrow
   */
  export type AdminRoleAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleAssignment
     */
    select?: AdminRoleAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which AdminRoleAssignment to fetch.
     */
    where?: AdminRoleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoleAssignments to fetch.
     */
    orderBy?: AdminRoleAssignmentOrderByWithRelationInput | AdminRoleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRoleAssignments.
     */
    cursor?: AdminRoleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRoleAssignments.
     */
    distinct?: AdminRoleAssignmentScalarFieldEnum | AdminRoleAssignmentScalarFieldEnum[]
  }

  /**
   * AdminRoleAssignment findMany
   */
  export type AdminRoleAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleAssignment
     */
    select?: AdminRoleAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which AdminRoleAssignments to fetch.
     */
    where?: AdminRoleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoleAssignments to fetch.
     */
    orderBy?: AdminRoleAssignmentOrderByWithRelationInput | AdminRoleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminRoleAssignments.
     */
    cursor?: AdminRoleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoleAssignments.
     */
    skip?: number
    distinct?: AdminRoleAssignmentScalarFieldEnum | AdminRoleAssignmentScalarFieldEnum[]
  }

  /**
   * AdminRoleAssignment create
   */
  export type AdminRoleAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleAssignment
     */
    select?: AdminRoleAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminRoleAssignment.
     */
    data: XOR<AdminRoleAssignmentCreateInput, AdminRoleAssignmentUncheckedCreateInput>
  }

  /**
   * AdminRoleAssignment createMany
   */
  export type AdminRoleAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminRoleAssignments.
     */
    data: AdminRoleAssignmentCreateManyInput | AdminRoleAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminRoleAssignment createManyAndReturn
   */
  export type AdminRoleAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleAssignment
     */
    select?: AdminRoleAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminRoleAssignments.
     */
    data: AdminRoleAssignmentCreateManyInput | AdminRoleAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminRoleAssignment update
   */
  export type AdminRoleAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleAssignment
     */
    select?: AdminRoleAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminRoleAssignment.
     */
    data: XOR<AdminRoleAssignmentUpdateInput, AdminRoleAssignmentUncheckedUpdateInput>
    /**
     * Choose, which AdminRoleAssignment to update.
     */
    where: AdminRoleAssignmentWhereUniqueInput
  }

  /**
   * AdminRoleAssignment updateMany
   */
  export type AdminRoleAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminRoleAssignments.
     */
    data: XOR<AdminRoleAssignmentUpdateManyMutationInput, AdminRoleAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which AdminRoleAssignments to update
     */
    where?: AdminRoleAssignmentWhereInput
  }

  /**
   * AdminRoleAssignment upsert
   */
  export type AdminRoleAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleAssignment
     */
    select?: AdminRoleAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminRoleAssignment to update in case it exists.
     */
    where: AdminRoleAssignmentWhereUniqueInput
    /**
     * In case the AdminRoleAssignment found by the `where` argument doesn't exist, create a new AdminRoleAssignment with this data.
     */
    create: XOR<AdminRoleAssignmentCreateInput, AdminRoleAssignmentUncheckedCreateInput>
    /**
     * In case the AdminRoleAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminRoleAssignmentUpdateInput, AdminRoleAssignmentUncheckedUpdateInput>
  }

  /**
   * AdminRoleAssignment delete
   */
  export type AdminRoleAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleAssignment
     */
    select?: AdminRoleAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter which AdminRoleAssignment to delete.
     */
    where: AdminRoleAssignmentWhereUniqueInput
  }

  /**
   * AdminRoleAssignment deleteMany
   */
  export type AdminRoleAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRoleAssignments to delete
     */
    where?: AdminRoleAssignmentWhereInput
  }

  /**
   * AdminRoleAssignment without action
   */
  export type AdminRoleAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoleAssignment
     */
    select?: AdminRoleAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model AdminRolePermission
   */

  export type AggregateAdminRolePermission = {
    _count: AdminRolePermissionCountAggregateOutputType | null
    _min: AdminRolePermissionMinAggregateOutputType | null
    _max: AdminRolePermissionMaxAggregateOutputType | null
  }

  export type AdminRolePermissionMinAggregateOutputType = {
    id: string | null
    roleId: string | null
    permissionId: string | null
    assignedAt: Date | null
  }

  export type AdminRolePermissionMaxAggregateOutputType = {
    id: string | null
    roleId: string | null
    permissionId: string | null
    assignedAt: Date | null
  }

  export type AdminRolePermissionCountAggregateOutputType = {
    id: number
    roleId: number
    permissionId: number
    assignedAt: number
    _all: number
  }


  export type AdminRolePermissionMinAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    assignedAt?: true
  }

  export type AdminRolePermissionMaxAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    assignedAt?: true
  }

  export type AdminRolePermissionCountAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    assignedAt?: true
    _all?: true
  }

  export type AdminRolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRolePermission to aggregate.
     */
    where?: AdminRolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRolePermissions to fetch.
     */
    orderBy?: AdminRolePermissionOrderByWithRelationInput | AdminRolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminRolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminRolePermissions
    **/
    _count?: true | AdminRolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminRolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminRolePermissionMaxAggregateInputType
  }

  export type GetAdminRolePermissionAggregateType<T extends AdminRolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminRolePermission[P]>
      : GetScalarType<T[P], AggregateAdminRolePermission[P]>
  }




  export type AdminRolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRolePermissionWhereInput
    orderBy?: AdminRolePermissionOrderByWithAggregationInput | AdminRolePermissionOrderByWithAggregationInput[]
    by: AdminRolePermissionScalarFieldEnum[] | AdminRolePermissionScalarFieldEnum
    having?: AdminRolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminRolePermissionCountAggregateInputType | true
    _min?: AdminRolePermissionMinAggregateInputType
    _max?: AdminRolePermissionMaxAggregateInputType
  }

  export type AdminRolePermissionGroupByOutputType = {
    id: string
    roleId: string
    permissionId: string
    assignedAt: Date
    _count: AdminRolePermissionCountAggregateOutputType | null
    _min: AdminRolePermissionMinAggregateOutputType | null
    _max: AdminRolePermissionMaxAggregateOutputType | null
  }

  type GetAdminRolePermissionGroupByPayload<T extends AdminRolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminRolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminRolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminRolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], AdminRolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type AdminRolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    assignedAt?: boolean
    role?: boolean | AdminRoleDefaultArgs<ExtArgs>
    permission?: boolean | AdminPermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminRolePermission"]>

  export type AdminRolePermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    assignedAt?: boolean
    role?: boolean | AdminRoleDefaultArgs<ExtArgs>
    permission?: boolean | AdminPermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminRolePermission"]>

  export type AdminRolePermissionSelectScalar = {
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    assignedAt?: boolean
  }

  export type AdminRolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | AdminRoleDefaultArgs<ExtArgs>
    permission?: boolean | AdminPermissionDefaultArgs<ExtArgs>
  }
  export type AdminRolePermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | AdminRoleDefaultArgs<ExtArgs>
    permission?: boolean | AdminPermissionDefaultArgs<ExtArgs>
  }

  export type $AdminRolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminRolePermission"
    objects: {
      role: Prisma.$AdminRolePayload<ExtArgs>
      permission: Prisma.$AdminPermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roleId: string
      permissionId: string
      assignedAt: Date
    }, ExtArgs["result"]["adminRolePermission"]>
    composites: {}
  }

  type AdminRolePermissionGetPayload<S extends boolean | null | undefined | AdminRolePermissionDefaultArgs> = $Result.GetResult<Prisma.$AdminRolePermissionPayload, S>

  type AdminRolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminRolePermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminRolePermissionCountAggregateInputType | true
    }

  export interface AdminRolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminRolePermission'], meta: { name: 'AdminRolePermission' } }
    /**
     * Find zero or one AdminRolePermission that matches the filter.
     * @param {AdminRolePermissionFindUniqueArgs} args - Arguments to find a AdminRolePermission
     * @example
     * // Get one AdminRolePermission
     * const adminRolePermission = await prisma.adminRolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminRolePermissionFindUniqueArgs>(args: SelectSubset<T, AdminRolePermissionFindUniqueArgs<ExtArgs>>): Prisma__AdminRolePermissionClient<$Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminRolePermission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminRolePermissionFindUniqueOrThrowArgs} args - Arguments to find a AdminRolePermission
     * @example
     * // Get one AdminRolePermission
     * const adminRolePermission = await prisma.adminRolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminRolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminRolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminRolePermissionClient<$Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminRolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolePermissionFindFirstArgs} args - Arguments to find a AdminRolePermission
     * @example
     * // Get one AdminRolePermission
     * const adminRolePermission = await prisma.adminRolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminRolePermissionFindFirstArgs>(args?: SelectSubset<T, AdminRolePermissionFindFirstArgs<ExtArgs>>): Prisma__AdminRolePermissionClient<$Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminRolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolePermissionFindFirstOrThrowArgs} args - Arguments to find a AdminRolePermission
     * @example
     * // Get one AdminRolePermission
     * const adminRolePermission = await prisma.adminRolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminRolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminRolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminRolePermissionClient<$Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminRolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminRolePermissions
     * const adminRolePermissions = await prisma.adminRolePermission.findMany()
     * 
     * // Get first 10 AdminRolePermissions
     * const adminRolePermissions = await prisma.adminRolePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminRolePermissionWithIdOnly = await prisma.adminRolePermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminRolePermissionFindManyArgs>(args?: SelectSubset<T, AdminRolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminRolePermission.
     * @param {AdminRolePermissionCreateArgs} args - Arguments to create a AdminRolePermission.
     * @example
     * // Create one AdminRolePermission
     * const AdminRolePermission = await prisma.adminRolePermission.create({
     *   data: {
     *     // ... data to create a AdminRolePermission
     *   }
     * })
     * 
     */
    create<T extends AdminRolePermissionCreateArgs>(args: SelectSubset<T, AdminRolePermissionCreateArgs<ExtArgs>>): Prisma__AdminRolePermissionClient<$Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminRolePermissions.
     * @param {AdminRolePermissionCreateManyArgs} args - Arguments to create many AdminRolePermissions.
     * @example
     * // Create many AdminRolePermissions
     * const adminRolePermission = await prisma.adminRolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminRolePermissionCreateManyArgs>(args?: SelectSubset<T, AdminRolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminRolePermissions and returns the data saved in the database.
     * @param {AdminRolePermissionCreateManyAndReturnArgs} args - Arguments to create many AdminRolePermissions.
     * @example
     * // Create many AdminRolePermissions
     * const adminRolePermission = await prisma.adminRolePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminRolePermissions and only return the `id`
     * const adminRolePermissionWithIdOnly = await prisma.adminRolePermission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminRolePermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminRolePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminRolePermission.
     * @param {AdminRolePermissionDeleteArgs} args - Arguments to delete one AdminRolePermission.
     * @example
     * // Delete one AdminRolePermission
     * const AdminRolePermission = await prisma.adminRolePermission.delete({
     *   where: {
     *     // ... filter to delete one AdminRolePermission
     *   }
     * })
     * 
     */
    delete<T extends AdminRolePermissionDeleteArgs>(args: SelectSubset<T, AdminRolePermissionDeleteArgs<ExtArgs>>): Prisma__AdminRolePermissionClient<$Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminRolePermission.
     * @param {AdminRolePermissionUpdateArgs} args - Arguments to update one AdminRolePermission.
     * @example
     * // Update one AdminRolePermission
     * const adminRolePermission = await prisma.adminRolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminRolePermissionUpdateArgs>(args: SelectSubset<T, AdminRolePermissionUpdateArgs<ExtArgs>>): Prisma__AdminRolePermissionClient<$Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminRolePermissions.
     * @param {AdminRolePermissionDeleteManyArgs} args - Arguments to filter AdminRolePermissions to delete.
     * @example
     * // Delete a few AdminRolePermissions
     * const { count } = await prisma.adminRolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminRolePermissionDeleteManyArgs>(args?: SelectSubset<T, AdminRolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminRolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminRolePermissions
     * const adminRolePermission = await prisma.adminRolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminRolePermissionUpdateManyArgs>(args: SelectSubset<T, AdminRolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminRolePermission.
     * @param {AdminRolePermissionUpsertArgs} args - Arguments to update or create a AdminRolePermission.
     * @example
     * // Update or create a AdminRolePermission
     * const adminRolePermission = await prisma.adminRolePermission.upsert({
     *   create: {
     *     // ... data to create a AdminRolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminRolePermission we want to update
     *   }
     * })
     */
    upsert<T extends AdminRolePermissionUpsertArgs>(args: SelectSubset<T, AdminRolePermissionUpsertArgs<ExtArgs>>): Prisma__AdminRolePermissionClient<$Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminRolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolePermissionCountArgs} args - Arguments to filter AdminRolePermissions to count.
     * @example
     * // Count the number of AdminRolePermissions
     * const count = await prisma.adminRolePermission.count({
     *   where: {
     *     // ... the filter for the AdminRolePermissions we want to count
     *   }
     * })
    **/
    count<T extends AdminRolePermissionCountArgs>(
      args?: Subset<T, AdminRolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminRolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminRolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminRolePermissionAggregateArgs>(args: Subset<T, AdminRolePermissionAggregateArgs>): Prisma.PrismaPromise<GetAdminRolePermissionAggregateType<T>>

    /**
     * Group by AdminRolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolePermissionGroupByArgs} args - Group by arguments.
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
      T extends AdminRolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminRolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: AdminRolePermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminRolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminRolePermission model
   */
  readonly fields: AdminRolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminRolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminRolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends AdminRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminRoleDefaultArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    permission<T extends AdminPermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminPermissionDefaultArgs<ExtArgs>>): Prisma__AdminPermissionClient<$Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AdminRolePermission model
   */ 
  interface AdminRolePermissionFieldRefs {
    readonly id: FieldRef<"AdminRolePermission", 'String'>
    readonly roleId: FieldRef<"AdminRolePermission", 'String'>
    readonly permissionId: FieldRef<"AdminRolePermission", 'String'>
    readonly assignedAt: FieldRef<"AdminRolePermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminRolePermission findUnique
   */
  export type AdminRolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRolePermission
     */
    select?: AdminRolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which AdminRolePermission to fetch.
     */
    where: AdminRolePermissionWhereUniqueInput
  }

  /**
   * AdminRolePermission findUniqueOrThrow
   */
  export type AdminRolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRolePermission
     */
    select?: AdminRolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which AdminRolePermission to fetch.
     */
    where: AdminRolePermissionWhereUniqueInput
  }

  /**
   * AdminRolePermission findFirst
   */
  export type AdminRolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRolePermission
     */
    select?: AdminRolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which AdminRolePermission to fetch.
     */
    where?: AdminRolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRolePermissions to fetch.
     */
    orderBy?: AdminRolePermissionOrderByWithRelationInput | AdminRolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRolePermissions.
     */
    cursor?: AdminRolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRolePermissions.
     */
    distinct?: AdminRolePermissionScalarFieldEnum | AdminRolePermissionScalarFieldEnum[]
  }

  /**
   * AdminRolePermission findFirstOrThrow
   */
  export type AdminRolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRolePermission
     */
    select?: AdminRolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which AdminRolePermission to fetch.
     */
    where?: AdminRolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRolePermissions to fetch.
     */
    orderBy?: AdminRolePermissionOrderByWithRelationInput | AdminRolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRolePermissions.
     */
    cursor?: AdminRolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRolePermissions.
     */
    distinct?: AdminRolePermissionScalarFieldEnum | AdminRolePermissionScalarFieldEnum[]
  }

  /**
   * AdminRolePermission findMany
   */
  export type AdminRolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRolePermission
     */
    select?: AdminRolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which AdminRolePermissions to fetch.
     */
    where?: AdminRolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRolePermissions to fetch.
     */
    orderBy?: AdminRolePermissionOrderByWithRelationInput | AdminRolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminRolePermissions.
     */
    cursor?: AdminRolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRolePermissions.
     */
    skip?: number
    distinct?: AdminRolePermissionScalarFieldEnum | AdminRolePermissionScalarFieldEnum[]
  }

  /**
   * AdminRolePermission create
   */
  export type AdminRolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRolePermission
     */
    select?: AdminRolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminRolePermission.
     */
    data: XOR<AdminRolePermissionCreateInput, AdminRolePermissionUncheckedCreateInput>
  }

  /**
   * AdminRolePermission createMany
   */
  export type AdminRolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminRolePermissions.
     */
    data: AdminRolePermissionCreateManyInput | AdminRolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminRolePermission createManyAndReturn
   */
  export type AdminRolePermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRolePermission
     */
    select?: AdminRolePermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminRolePermissions.
     */
    data: AdminRolePermissionCreateManyInput | AdminRolePermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRolePermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminRolePermission update
   */
  export type AdminRolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRolePermission
     */
    select?: AdminRolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminRolePermission.
     */
    data: XOR<AdminRolePermissionUpdateInput, AdminRolePermissionUncheckedUpdateInput>
    /**
     * Choose, which AdminRolePermission to update.
     */
    where: AdminRolePermissionWhereUniqueInput
  }

  /**
   * AdminRolePermission updateMany
   */
  export type AdminRolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminRolePermissions.
     */
    data: XOR<AdminRolePermissionUpdateManyMutationInput, AdminRolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which AdminRolePermissions to update
     */
    where?: AdminRolePermissionWhereInput
  }

  /**
   * AdminRolePermission upsert
   */
  export type AdminRolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRolePermission
     */
    select?: AdminRolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminRolePermission to update in case it exists.
     */
    where: AdminRolePermissionWhereUniqueInput
    /**
     * In case the AdminRolePermission found by the `where` argument doesn't exist, create a new AdminRolePermission with this data.
     */
    create: XOR<AdminRolePermissionCreateInput, AdminRolePermissionUncheckedCreateInput>
    /**
     * In case the AdminRolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminRolePermissionUpdateInput, AdminRolePermissionUncheckedUpdateInput>
  }

  /**
   * AdminRolePermission delete
   */
  export type AdminRolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRolePermission
     */
    select?: AdminRolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRolePermissionInclude<ExtArgs> | null
    /**
     * Filter which AdminRolePermission to delete.
     */
    where: AdminRolePermissionWhereUniqueInput
  }

  /**
   * AdminRolePermission deleteMany
   */
  export type AdminRolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRolePermissions to delete
     */
    where?: AdminRolePermissionWhereInput
  }

  /**
   * AdminRolePermission without action
   */
  export type AdminRolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRolePermission
     */
    select?: AdminRolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRolePermissionInclude<ExtArgs> | null
  }


  /**
   * Model AdminGeoAssignment
   */

  export type AggregateAdminGeoAssignment = {
    _count: AdminGeoAssignmentCountAggregateOutputType | null
    _min: AdminGeoAssignmentMinAggregateOutputType | null
    _max: AdminGeoAssignmentMaxAggregateOutputType | null
  }

  export type AdminGeoAssignmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    state: string | null
    stateCode: string | null
    district: string | null
    districtCode: string | null
    cityId: string | null
    cityCode: string | null
    cityName: string | null
    assignedAt: Date | null
  }

  export type AdminGeoAssignmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    state: string | null
    stateCode: string | null
    district: string | null
    districtCode: string | null
    cityId: string | null
    cityCode: string | null
    cityName: string | null
    assignedAt: Date | null
  }

  export type AdminGeoAssignmentCountAggregateOutputType = {
    id: number
    userId: number
    state: number
    stateCode: number
    district: number
    districtCode: number
    cityId: number
    cityCode: number
    cityName: number
    localities: number
    assignedAt: number
    _all: number
  }


  export type AdminGeoAssignmentMinAggregateInputType = {
    id?: true
    userId?: true
    state?: true
    stateCode?: true
    district?: true
    districtCode?: true
    cityId?: true
    cityCode?: true
    cityName?: true
    assignedAt?: true
  }

  export type AdminGeoAssignmentMaxAggregateInputType = {
    id?: true
    userId?: true
    state?: true
    stateCode?: true
    district?: true
    districtCode?: true
    cityId?: true
    cityCode?: true
    cityName?: true
    assignedAt?: true
  }

  export type AdminGeoAssignmentCountAggregateInputType = {
    id?: true
    userId?: true
    state?: true
    stateCode?: true
    district?: true
    districtCode?: true
    cityId?: true
    cityCode?: true
    cityName?: true
    localities?: true
    assignedAt?: true
    _all?: true
  }

  export type AdminGeoAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminGeoAssignment to aggregate.
     */
    where?: AdminGeoAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminGeoAssignments to fetch.
     */
    orderBy?: AdminGeoAssignmentOrderByWithRelationInput | AdminGeoAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminGeoAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminGeoAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminGeoAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminGeoAssignments
    **/
    _count?: true | AdminGeoAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminGeoAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminGeoAssignmentMaxAggregateInputType
  }

  export type GetAdminGeoAssignmentAggregateType<T extends AdminGeoAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminGeoAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminGeoAssignment[P]>
      : GetScalarType<T[P], AggregateAdminGeoAssignment[P]>
  }




  export type AdminGeoAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminGeoAssignmentWhereInput
    orderBy?: AdminGeoAssignmentOrderByWithAggregationInput | AdminGeoAssignmentOrderByWithAggregationInput[]
    by: AdminGeoAssignmentScalarFieldEnum[] | AdminGeoAssignmentScalarFieldEnum
    having?: AdminGeoAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminGeoAssignmentCountAggregateInputType | true
    _min?: AdminGeoAssignmentMinAggregateInputType
    _max?: AdminGeoAssignmentMaxAggregateInputType
  }

  export type AdminGeoAssignmentGroupByOutputType = {
    id: string
    userId: string
    state: string
    stateCode: string
    district: string
    districtCode: string
    cityId: string
    cityCode: string
    cityName: string
    localities: JsonValue
    assignedAt: Date
    _count: AdminGeoAssignmentCountAggregateOutputType | null
    _min: AdminGeoAssignmentMinAggregateOutputType | null
    _max: AdminGeoAssignmentMaxAggregateOutputType | null
  }

  type GetAdminGeoAssignmentGroupByPayload<T extends AdminGeoAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGeoAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGeoAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGeoAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGeoAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AdminGeoAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    state?: boolean
    stateCode?: boolean
    district?: boolean
    districtCode?: boolean
    cityId?: boolean
    cityCode?: boolean
    cityName?: boolean
    localities?: boolean
    assignedAt?: boolean
    user?: boolean | AdminUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminGeoAssignment"]>

  export type AdminGeoAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    state?: boolean
    stateCode?: boolean
    district?: boolean
    districtCode?: boolean
    cityId?: boolean
    cityCode?: boolean
    cityName?: boolean
    localities?: boolean
    assignedAt?: boolean
    user?: boolean | AdminUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminGeoAssignment"]>

  export type AdminGeoAssignmentSelectScalar = {
    id?: boolean
    userId?: boolean
    state?: boolean
    stateCode?: boolean
    district?: boolean
    districtCode?: boolean
    cityId?: boolean
    cityCode?: boolean
    cityName?: boolean
    localities?: boolean
    assignedAt?: boolean
  }

  export type AdminGeoAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AdminUserDefaultArgs<ExtArgs>
  }
  export type AdminGeoAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AdminUserDefaultArgs<ExtArgs>
  }

  export type $AdminGeoAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminGeoAssignment"
    objects: {
      user: Prisma.$AdminUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      state: string
      stateCode: string
      district: string
      districtCode: string
      cityId: string
      cityCode: string
      cityName: string
      localities: Prisma.JsonValue
      assignedAt: Date
    }, ExtArgs["result"]["adminGeoAssignment"]>
    composites: {}
  }

  type AdminGeoAssignmentGetPayload<S extends boolean | null | undefined | AdminGeoAssignmentDefaultArgs> = $Result.GetResult<Prisma.$AdminGeoAssignmentPayload, S>

  type AdminGeoAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminGeoAssignmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminGeoAssignmentCountAggregateInputType | true
    }

  export interface AdminGeoAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminGeoAssignment'], meta: { name: 'AdminGeoAssignment' } }
    /**
     * Find zero or one AdminGeoAssignment that matches the filter.
     * @param {AdminGeoAssignmentFindUniqueArgs} args - Arguments to find a AdminGeoAssignment
     * @example
     * // Get one AdminGeoAssignment
     * const adminGeoAssignment = await prisma.adminGeoAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminGeoAssignmentFindUniqueArgs>(args: SelectSubset<T, AdminGeoAssignmentFindUniqueArgs<ExtArgs>>): Prisma__AdminGeoAssignmentClient<$Result.GetResult<Prisma.$AdminGeoAssignmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminGeoAssignment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminGeoAssignmentFindUniqueOrThrowArgs} args - Arguments to find a AdminGeoAssignment
     * @example
     * // Get one AdminGeoAssignment
     * const adminGeoAssignment = await prisma.adminGeoAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminGeoAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminGeoAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminGeoAssignmentClient<$Result.GetResult<Prisma.$AdminGeoAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminGeoAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGeoAssignmentFindFirstArgs} args - Arguments to find a AdminGeoAssignment
     * @example
     * // Get one AdminGeoAssignment
     * const adminGeoAssignment = await prisma.adminGeoAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminGeoAssignmentFindFirstArgs>(args?: SelectSubset<T, AdminGeoAssignmentFindFirstArgs<ExtArgs>>): Prisma__AdminGeoAssignmentClient<$Result.GetResult<Prisma.$AdminGeoAssignmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminGeoAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGeoAssignmentFindFirstOrThrowArgs} args - Arguments to find a AdminGeoAssignment
     * @example
     * // Get one AdminGeoAssignment
     * const adminGeoAssignment = await prisma.adminGeoAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminGeoAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminGeoAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminGeoAssignmentClient<$Result.GetResult<Prisma.$AdminGeoAssignmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminGeoAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGeoAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminGeoAssignments
     * const adminGeoAssignments = await prisma.adminGeoAssignment.findMany()
     * 
     * // Get first 10 AdminGeoAssignments
     * const adminGeoAssignments = await prisma.adminGeoAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminGeoAssignmentWithIdOnly = await prisma.adminGeoAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminGeoAssignmentFindManyArgs>(args?: SelectSubset<T, AdminGeoAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminGeoAssignmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminGeoAssignment.
     * @param {AdminGeoAssignmentCreateArgs} args - Arguments to create a AdminGeoAssignment.
     * @example
     * // Create one AdminGeoAssignment
     * const AdminGeoAssignment = await prisma.adminGeoAssignment.create({
     *   data: {
     *     // ... data to create a AdminGeoAssignment
     *   }
     * })
     * 
     */
    create<T extends AdminGeoAssignmentCreateArgs>(args: SelectSubset<T, AdminGeoAssignmentCreateArgs<ExtArgs>>): Prisma__AdminGeoAssignmentClient<$Result.GetResult<Prisma.$AdminGeoAssignmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminGeoAssignments.
     * @param {AdminGeoAssignmentCreateManyArgs} args - Arguments to create many AdminGeoAssignments.
     * @example
     * // Create many AdminGeoAssignments
     * const adminGeoAssignment = await prisma.adminGeoAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminGeoAssignmentCreateManyArgs>(args?: SelectSubset<T, AdminGeoAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminGeoAssignments and returns the data saved in the database.
     * @param {AdminGeoAssignmentCreateManyAndReturnArgs} args - Arguments to create many AdminGeoAssignments.
     * @example
     * // Create many AdminGeoAssignments
     * const adminGeoAssignment = await prisma.adminGeoAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminGeoAssignments and only return the `id`
     * const adminGeoAssignmentWithIdOnly = await prisma.adminGeoAssignment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminGeoAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminGeoAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminGeoAssignmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminGeoAssignment.
     * @param {AdminGeoAssignmentDeleteArgs} args - Arguments to delete one AdminGeoAssignment.
     * @example
     * // Delete one AdminGeoAssignment
     * const AdminGeoAssignment = await prisma.adminGeoAssignment.delete({
     *   where: {
     *     // ... filter to delete one AdminGeoAssignment
     *   }
     * })
     * 
     */
    delete<T extends AdminGeoAssignmentDeleteArgs>(args: SelectSubset<T, AdminGeoAssignmentDeleteArgs<ExtArgs>>): Prisma__AdminGeoAssignmentClient<$Result.GetResult<Prisma.$AdminGeoAssignmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminGeoAssignment.
     * @param {AdminGeoAssignmentUpdateArgs} args - Arguments to update one AdminGeoAssignment.
     * @example
     * // Update one AdminGeoAssignment
     * const adminGeoAssignment = await prisma.adminGeoAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminGeoAssignmentUpdateArgs>(args: SelectSubset<T, AdminGeoAssignmentUpdateArgs<ExtArgs>>): Prisma__AdminGeoAssignmentClient<$Result.GetResult<Prisma.$AdminGeoAssignmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminGeoAssignments.
     * @param {AdminGeoAssignmentDeleteManyArgs} args - Arguments to filter AdminGeoAssignments to delete.
     * @example
     * // Delete a few AdminGeoAssignments
     * const { count } = await prisma.adminGeoAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminGeoAssignmentDeleteManyArgs>(args?: SelectSubset<T, AdminGeoAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminGeoAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGeoAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminGeoAssignments
     * const adminGeoAssignment = await prisma.adminGeoAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminGeoAssignmentUpdateManyArgs>(args: SelectSubset<T, AdminGeoAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminGeoAssignment.
     * @param {AdminGeoAssignmentUpsertArgs} args - Arguments to update or create a AdminGeoAssignment.
     * @example
     * // Update or create a AdminGeoAssignment
     * const adminGeoAssignment = await prisma.adminGeoAssignment.upsert({
     *   create: {
     *     // ... data to create a AdminGeoAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminGeoAssignment we want to update
     *   }
     * })
     */
    upsert<T extends AdminGeoAssignmentUpsertArgs>(args: SelectSubset<T, AdminGeoAssignmentUpsertArgs<ExtArgs>>): Prisma__AdminGeoAssignmentClient<$Result.GetResult<Prisma.$AdminGeoAssignmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminGeoAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGeoAssignmentCountArgs} args - Arguments to filter AdminGeoAssignments to count.
     * @example
     * // Count the number of AdminGeoAssignments
     * const count = await prisma.adminGeoAssignment.count({
     *   where: {
     *     // ... the filter for the AdminGeoAssignments we want to count
     *   }
     * })
    **/
    count<T extends AdminGeoAssignmentCountArgs>(
      args?: Subset<T, AdminGeoAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminGeoAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminGeoAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGeoAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminGeoAssignmentAggregateArgs>(args: Subset<T, AdminGeoAssignmentAggregateArgs>): Prisma.PrismaPromise<GetAdminGeoAssignmentAggregateType<T>>

    /**
     * Group by AdminGeoAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGeoAssignmentGroupByArgs} args - Group by arguments.
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
      T extends AdminGeoAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGeoAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AdminGeoAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGeoAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGeoAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminGeoAssignment model
   */
  readonly fields: AdminGeoAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminGeoAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminGeoAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AdminUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminUserDefaultArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AdminGeoAssignment model
   */ 
  interface AdminGeoAssignmentFieldRefs {
    readonly id: FieldRef<"AdminGeoAssignment", 'String'>
    readonly userId: FieldRef<"AdminGeoAssignment", 'String'>
    readonly state: FieldRef<"AdminGeoAssignment", 'String'>
    readonly stateCode: FieldRef<"AdminGeoAssignment", 'String'>
    readonly district: FieldRef<"AdminGeoAssignment", 'String'>
    readonly districtCode: FieldRef<"AdminGeoAssignment", 'String'>
    readonly cityId: FieldRef<"AdminGeoAssignment", 'String'>
    readonly cityCode: FieldRef<"AdminGeoAssignment", 'String'>
    readonly cityName: FieldRef<"AdminGeoAssignment", 'String'>
    readonly localities: FieldRef<"AdminGeoAssignment", 'Json'>
    readonly assignedAt: FieldRef<"AdminGeoAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminGeoAssignment findUnique
   */
  export type AdminGeoAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminGeoAssignment
     */
    select?: AdminGeoAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminGeoAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which AdminGeoAssignment to fetch.
     */
    where: AdminGeoAssignmentWhereUniqueInput
  }

  /**
   * AdminGeoAssignment findUniqueOrThrow
   */
  export type AdminGeoAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminGeoAssignment
     */
    select?: AdminGeoAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminGeoAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which AdminGeoAssignment to fetch.
     */
    where: AdminGeoAssignmentWhereUniqueInput
  }

  /**
   * AdminGeoAssignment findFirst
   */
  export type AdminGeoAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminGeoAssignment
     */
    select?: AdminGeoAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminGeoAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which AdminGeoAssignment to fetch.
     */
    where?: AdminGeoAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminGeoAssignments to fetch.
     */
    orderBy?: AdminGeoAssignmentOrderByWithRelationInput | AdminGeoAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminGeoAssignments.
     */
    cursor?: AdminGeoAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminGeoAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminGeoAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminGeoAssignments.
     */
    distinct?: AdminGeoAssignmentScalarFieldEnum | AdminGeoAssignmentScalarFieldEnum[]
  }

  /**
   * AdminGeoAssignment findFirstOrThrow
   */
  export type AdminGeoAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminGeoAssignment
     */
    select?: AdminGeoAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminGeoAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which AdminGeoAssignment to fetch.
     */
    where?: AdminGeoAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminGeoAssignments to fetch.
     */
    orderBy?: AdminGeoAssignmentOrderByWithRelationInput | AdminGeoAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminGeoAssignments.
     */
    cursor?: AdminGeoAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminGeoAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminGeoAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminGeoAssignments.
     */
    distinct?: AdminGeoAssignmentScalarFieldEnum | AdminGeoAssignmentScalarFieldEnum[]
  }

  /**
   * AdminGeoAssignment findMany
   */
  export type AdminGeoAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminGeoAssignment
     */
    select?: AdminGeoAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminGeoAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which AdminGeoAssignments to fetch.
     */
    where?: AdminGeoAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminGeoAssignments to fetch.
     */
    orderBy?: AdminGeoAssignmentOrderByWithRelationInput | AdminGeoAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminGeoAssignments.
     */
    cursor?: AdminGeoAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminGeoAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminGeoAssignments.
     */
    skip?: number
    distinct?: AdminGeoAssignmentScalarFieldEnum | AdminGeoAssignmentScalarFieldEnum[]
  }

  /**
   * AdminGeoAssignment create
   */
  export type AdminGeoAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminGeoAssignment
     */
    select?: AdminGeoAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminGeoAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminGeoAssignment.
     */
    data: XOR<AdminGeoAssignmentCreateInput, AdminGeoAssignmentUncheckedCreateInput>
  }

  /**
   * AdminGeoAssignment createMany
   */
  export type AdminGeoAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminGeoAssignments.
     */
    data: AdminGeoAssignmentCreateManyInput | AdminGeoAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminGeoAssignment createManyAndReturn
   */
  export type AdminGeoAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminGeoAssignment
     */
    select?: AdminGeoAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminGeoAssignments.
     */
    data: AdminGeoAssignmentCreateManyInput | AdminGeoAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminGeoAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminGeoAssignment update
   */
  export type AdminGeoAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminGeoAssignment
     */
    select?: AdminGeoAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminGeoAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminGeoAssignment.
     */
    data: XOR<AdminGeoAssignmentUpdateInput, AdminGeoAssignmentUncheckedUpdateInput>
    /**
     * Choose, which AdminGeoAssignment to update.
     */
    where: AdminGeoAssignmentWhereUniqueInput
  }

  /**
   * AdminGeoAssignment updateMany
   */
  export type AdminGeoAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminGeoAssignments.
     */
    data: XOR<AdminGeoAssignmentUpdateManyMutationInput, AdminGeoAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which AdminGeoAssignments to update
     */
    where?: AdminGeoAssignmentWhereInput
  }

  /**
   * AdminGeoAssignment upsert
   */
  export type AdminGeoAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminGeoAssignment
     */
    select?: AdminGeoAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminGeoAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminGeoAssignment to update in case it exists.
     */
    where: AdminGeoAssignmentWhereUniqueInput
    /**
     * In case the AdminGeoAssignment found by the `where` argument doesn't exist, create a new AdminGeoAssignment with this data.
     */
    create: XOR<AdminGeoAssignmentCreateInput, AdminGeoAssignmentUncheckedCreateInput>
    /**
     * In case the AdminGeoAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminGeoAssignmentUpdateInput, AdminGeoAssignmentUncheckedUpdateInput>
  }

  /**
   * AdminGeoAssignment delete
   */
  export type AdminGeoAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminGeoAssignment
     */
    select?: AdminGeoAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminGeoAssignmentInclude<ExtArgs> | null
    /**
     * Filter which AdminGeoAssignment to delete.
     */
    where: AdminGeoAssignmentWhereUniqueInput
  }

  /**
   * AdminGeoAssignment deleteMany
   */
  export type AdminGeoAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminGeoAssignments to delete
     */
    where?: AdminGeoAssignmentWhereInput
  }

  /**
   * AdminGeoAssignment without action
   */
  export type AdminGeoAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminGeoAssignment
     */
    select?: AdminGeoAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminGeoAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model AdminAuditLog
   */

  export type AggregateAdminAuditLog = {
    _count: AdminAuditLogCountAggregateOutputType | null
    _min: AdminAuditLogMinAggregateOutputType | null
    _max: AdminAuditLogMaxAggregateOutputType | null
  }

  export type AdminAuditLogMinAggregateOutputType = {
    id: string | null
    operatorId: string | null
    operatorName: string | null
    action: string | null
    targetEntity: string | null
    targetId: string | null
    reasonCode: string | null
    justification: string | null
    previousHash: string | null
    recordHash: string | null
    ipAddress: string | null
    userAgent: string | null
    timestamp: Date | null
  }

  export type AdminAuditLogMaxAggregateOutputType = {
    id: string | null
    operatorId: string | null
    operatorName: string | null
    action: string | null
    targetEntity: string | null
    targetId: string | null
    reasonCode: string | null
    justification: string | null
    previousHash: string | null
    recordHash: string | null
    ipAddress: string | null
    userAgent: string | null
    timestamp: Date | null
  }

  export type AdminAuditLogCountAggregateOutputType = {
    id: number
    operatorId: number
    operatorName: number
    action: number
    targetEntity: number
    targetId: number
    reasonCode: number
    justification: number
    previousHash: number
    recordHash: number
    ipAddress: number
    userAgent: number
    timestamp: number
    _all: number
  }


  export type AdminAuditLogMinAggregateInputType = {
    id?: true
    operatorId?: true
    operatorName?: true
    action?: true
    targetEntity?: true
    targetId?: true
    reasonCode?: true
    justification?: true
    previousHash?: true
    recordHash?: true
    ipAddress?: true
    userAgent?: true
    timestamp?: true
  }

  export type AdminAuditLogMaxAggregateInputType = {
    id?: true
    operatorId?: true
    operatorName?: true
    action?: true
    targetEntity?: true
    targetId?: true
    reasonCode?: true
    justification?: true
    previousHash?: true
    recordHash?: true
    ipAddress?: true
    userAgent?: true
    timestamp?: true
  }

  export type AdminAuditLogCountAggregateInputType = {
    id?: true
    operatorId?: true
    operatorName?: true
    action?: true
    targetEntity?: true
    targetId?: true
    reasonCode?: true
    justification?: true
    previousHash?: true
    recordHash?: true
    ipAddress?: true
    userAgent?: true
    timestamp?: true
    _all?: true
  }

  export type AdminAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAuditLog to aggregate.
     */
    where?: AdminAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuditLogs to fetch.
     */
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminAuditLogs
    **/
    _count?: true | AdminAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminAuditLogMaxAggregateInputType
  }

  export type GetAdminAuditLogAggregateType<T extends AdminAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminAuditLog[P]>
      : GetScalarType<T[P], AggregateAdminAuditLog[P]>
  }




  export type AdminAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminAuditLogWhereInput
    orderBy?: AdminAuditLogOrderByWithAggregationInput | AdminAuditLogOrderByWithAggregationInput[]
    by: AdminAuditLogScalarFieldEnum[] | AdminAuditLogScalarFieldEnum
    having?: AdminAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminAuditLogCountAggregateInputType | true
    _min?: AdminAuditLogMinAggregateInputType
    _max?: AdminAuditLogMaxAggregateInputType
  }

  export type AdminAuditLogGroupByOutputType = {
    id: string
    operatorId: string | null
    operatorName: string
    action: string
    targetEntity: string
    targetId: string
    reasonCode: string
    justification: string
    previousHash: string | null
    recordHash: string | null
    ipAddress: string | null
    userAgent: string | null
    timestamp: Date
    _count: AdminAuditLogCountAggregateOutputType | null
    _min: AdminAuditLogMinAggregateOutputType | null
    _max: AdminAuditLogMaxAggregateOutputType | null
  }

  type GetAdminAuditLogGroupByPayload<T extends AdminAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AdminAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AdminAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operatorId?: boolean
    operatorName?: boolean
    action?: boolean
    targetEntity?: boolean
    targetId?: boolean
    reasonCode?: boolean
    justification?: boolean
    previousHash?: boolean
    recordHash?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
    user?: boolean | AdminAuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["adminAuditLog"]>

  export type AdminAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operatorId?: boolean
    operatorName?: boolean
    action?: boolean
    targetEntity?: boolean
    targetId?: boolean
    reasonCode?: boolean
    justification?: boolean
    previousHash?: boolean
    recordHash?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
    user?: boolean | AdminAuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["adminAuditLog"]>

  export type AdminAuditLogSelectScalar = {
    id?: boolean
    operatorId?: boolean
    operatorName?: boolean
    action?: boolean
    targetEntity?: boolean
    targetId?: boolean
    reasonCode?: boolean
    justification?: boolean
    previousHash?: boolean
    recordHash?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
  }

  export type AdminAuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AdminAuditLog$userArgs<ExtArgs>
  }
  export type AdminAuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AdminAuditLog$userArgs<ExtArgs>
  }

  export type $AdminAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminAuditLog"
    objects: {
      user: Prisma.$AdminUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      operatorId: string | null
      operatorName: string
      action: string
      targetEntity: string
      targetId: string
      reasonCode: string
      justification: string
      previousHash: string | null
      recordHash: string | null
      ipAddress: string | null
      userAgent: string | null
      timestamp: Date
    }, ExtArgs["result"]["adminAuditLog"]>
    composites: {}
  }

  type AdminAuditLogGetPayload<S extends boolean | null | undefined | AdminAuditLogDefaultArgs> = $Result.GetResult<Prisma.$AdminAuditLogPayload, S>

  type AdminAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminAuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminAuditLogCountAggregateInputType | true
    }

  export interface AdminAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminAuditLog'], meta: { name: 'AdminAuditLog' } }
    /**
     * Find zero or one AdminAuditLog that matches the filter.
     * @param {AdminAuditLogFindUniqueArgs} args - Arguments to find a AdminAuditLog
     * @example
     * // Get one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminAuditLogFindUniqueArgs>(args: SelectSubset<T, AdminAuditLogFindUniqueArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminAuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminAuditLogFindUniqueOrThrowArgs} args - Arguments to find a AdminAuditLog
     * @example
     * // Get one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogFindFirstArgs} args - Arguments to find a AdminAuditLog
     * @example
     * // Get one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminAuditLogFindFirstArgs>(args?: SelectSubset<T, AdminAuditLogFindFirstArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogFindFirstOrThrowArgs} args - Arguments to find a AdminAuditLog
     * @example
     * // Get one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminAuditLogs
     * const adminAuditLogs = await prisma.adminAuditLog.findMany()
     * 
     * // Get first 10 AdminAuditLogs
     * const adminAuditLogs = await prisma.adminAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminAuditLogWithIdOnly = await prisma.adminAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminAuditLogFindManyArgs>(args?: SelectSubset<T, AdminAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminAuditLog.
     * @param {AdminAuditLogCreateArgs} args - Arguments to create a AdminAuditLog.
     * @example
     * // Create one AdminAuditLog
     * const AdminAuditLog = await prisma.adminAuditLog.create({
     *   data: {
     *     // ... data to create a AdminAuditLog
     *   }
     * })
     * 
     */
    create<T extends AdminAuditLogCreateArgs>(args: SelectSubset<T, AdminAuditLogCreateArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminAuditLogs.
     * @param {AdminAuditLogCreateManyArgs} args - Arguments to create many AdminAuditLogs.
     * @example
     * // Create many AdminAuditLogs
     * const adminAuditLog = await prisma.adminAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminAuditLogCreateManyArgs>(args?: SelectSubset<T, AdminAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminAuditLogs and returns the data saved in the database.
     * @param {AdminAuditLogCreateManyAndReturnArgs} args - Arguments to create many AdminAuditLogs.
     * @example
     * // Create many AdminAuditLogs
     * const adminAuditLog = await prisma.adminAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminAuditLogs and only return the `id`
     * const adminAuditLogWithIdOnly = await prisma.adminAuditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminAuditLog.
     * @param {AdminAuditLogDeleteArgs} args - Arguments to delete one AdminAuditLog.
     * @example
     * // Delete one AdminAuditLog
     * const AdminAuditLog = await prisma.adminAuditLog.delete({
     *   where: {
     *     // ... filter to delete one AdminAuditLog
     *   }
     * })
     * 
     */
    delete<T extends AdminAuditLogDeleteArgs>(args: SelectSubset<T, AdminAuditLogDeleteArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminAuditLog.
     * @param {AdminAuditLogUpdateArgs} args - Arguments to update one AdminAuditLog.
     * @example
     * // Update one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminAuditLogUpdateArgs>(args: SelectSubset<T, AdminAuditLogUpdateArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminAuditLogs.
     * @param {AdminAuditLogDeleteManyArgs} args - Arguments to filter AdminAuditLogs to delete.
     * @example
     * // Delete a few AdminAuditLogs
     * const { count } = await prisma.adminAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminAuditLogDeleteManyArgs>(args?: SelectSubset<T, AdminAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminAuditLogs
     * const adminAuditLog = await prisma.adminAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminAuditLogUpdateManyArgs>(args: SelectSubset<T, AdminAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminAuditLog.
     * @param {AdminAuditLogUpsertArgs} args - Arguments to update or create a AdminAuditLog.
     * @example
     * // Update or create a AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.upsert({
     *   create: {
     *     // ... data to create a AdminAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AdminAuditLogUpsertArgs>(args: SelectSubset<T, AdminAuditLogUpsertArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogCountArgs} args - Arguments to filter AdminAuditLogs to count.
     * @example
     * // Count the number of AdminAuditLogs
     * const count = await prisma.adminAuditLog.count({
     *   where: {
     *     // ... the filter for the AdminAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AdminAuditLogCountArgs>(
      args?: Subset<T, AdminAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAuditLogAggregateArgs>(args: Subset<T, AdminAuditLogAggregateArgs>): Prisma.PrismaPromise<GetAdminAuditLogAggregateType<T>>

    /**
     * Group by AdminAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogGroupByArgs} args - Group by arguments.
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
      T extends AdminAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AdminAuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminAuditLog model
   */
  readonly fields: AdminAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AdminAuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AdminAuditLog$userArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the AdminAuditLog model
   */ 
  interface AdminAuditLogFieldRefs {
    readonly id: FieldRef<"AdminAuditLog", 'String'>
    readonly operatorId: FieldRef<"AdminAuditLog", 'String'>
    readonly operatorName: FieldRef<"AdminAuditLog", 'String'>
    readonly action: FieldRef<"AdminAuditLog", 'String'>
    readonly targetEntity: FieldRef<"AdminAuditLog", 'String'>
    readonly targetId: FieldRef<"AdminAuditLog", 'String'>
    readonly reasonCode: FieldRef<"AdminAuditLog", 'String'>
    readonly justification: FieldRef<"AdminAuditLog", 'String'>
    readonly previousHash: FieldRef<"AdminAuditLog", 'String'>
    readonly recordHash: FieldRef<"AdminAuditLog", 'String'>
    readonly ipAddress: FieldRef<"AdminAuditLog", 'String'>
    readonly userAgent: FieldRef<"AdminAuditLog", 'String'>
    readonly timestamp: FieldRef<"AdminAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminAuditLog findUnique
   */
  export type AdminAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuditLog to fetch.
     */
    where: AdminAuditLogWhereUniqueInput
  }

  /**
   * AdminAuditLog findUniqueOrThrow
   */
  export type AdminAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuditLog to fetch.
     */
    where: AdminAuditLogWhereUniqueInput
  }

  /**
   * AdminAuditLog findFirst
   */
  export type AdminAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuditLog to fetch.
     */
    where?: AdminAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuditLogs to fetch.
     */
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAuditLogs.
     */
    cursor?: AdminAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAuditLogs.
     */
    distinct?: AdminAuditLogScalarFieldEnum | AdminAuditLogScalarFieldEnum[]
  }

  /**
   * AdminAuditLog findFirstOrThrow
   */
  export type AdminAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuditLog to fetch.
     */
    where?: AdminAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuditLogs to fetch.
     */
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAuditLogs.
     */
    cursor?: AdminAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAuditLogs.
     */
    distinct?: AdminAuditLogScalarFieldEnum | AdminAuditLogScalarFieldEnum[]
  }

  /**
   * AdminAuditLog findMany
   */
  export type AdminAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuditLogs to fetch.
     */
    where?: AdminAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuditLogs to fetch.
     */
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminAuditLogs.
     */
    cursor?: AdminAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuditLogs.
     */
    skip?: number
    distinct?: AdminAuditLogScalarFieldEnum | AdminAuditLogScalarFieldEnum[]
  }

  /**
   * AdminAuditLog create
   */
  export type AdminAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminAuditLog.
     */
    data: XOR<AdminAuditLogCreateInput, AdminAuditLogUncheckedCreateInput>
  }

  /**
   * AdminAuditLog createMany
   */
  export type AdminAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminAuditLogs.
     */
    data: AdminAuditLogCreateManyInput | AdminAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminAuditLog createManyAndReturn
   */
  export type AdminAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminAuditLogs.
     */
    data: AdminAuditLogCreateManyInput | AdminAuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminAuditLog update
   */
  export type AdminAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminAuditLog.
     */
    data: XOR<AdminAuditLogUpdateInput, AdminAuditLogUncheckedUpdateInput>
    /**
     * Choose, which AdminAuditLog to update.
     */
    where: AdminAuditLogWhereUniqueInput
  }

  /**
   * AdminAuditLog updateMany
   */
  export type AdminAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminAuditLogs.
     */
    data: XOR<AdminAuditLogUpdateManyMutationInput, AdminAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminAuditLogs to update
     */
    where?: AdminAuditLogWhereInput
  }

  /**
   * AdminAuditLog upsert
   */
  export type AdminAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminAuditLog to update in case it exists.
     */
    where: AdminAuditLogWhereUniqueInput
    /**
     * In case the AdminAuditLog found by the `where` argument doesn't exist, create a new AdminAuditLog with this data.
     */
    create: XOR<AdminAuditLogCreateInput, AdminAuditLogUncheckedCreateInput>
    /**
     * In case the AdminAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminAuditLogUpdateInput, AdminAuditLogUncheckedUpdateInput>
  }

  /**
   * AdminAuditLog delete
   */
  export type AdminAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
    /**
     * Filter which AdminAuditLog to delete.
     */
    where: AdminAuditLogWhereUniqueInput
  }

  /**
   * AdminAuditLog deleteMany
   */
  export type AdminAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAuditLogs to delete
     */
    where?: AdminAuditLogWhereInput
  }

  /**
   * AdminAuditLog.user
   */
  export type AdminAuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    where?: AdminUserWhereInput
  }

  /**
   * AdminAuditLog without action
   */
  export type AdminAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuditLogInclude<ExtArgs> | null
  }


  /**
   * Model PiiAccessAuditLog
   */

  export type AggregatePiiAccessAuditLog = {
    _count: PiiAccessAuditLogCountAggregateOutputType | null
    _min: PiiAccessAuditLogMinAggregateOutputType | null
    _max: PiiAccessAuditLogMaxAggregateOutputType | null
  }

  export type PiiAccessAuditLogMinAggregateOutputType = {
    id: string | null
    operatorId: string | null
    targetEntity: string | null
    targetId: string | null
    purposeCode: string | null
    justification: string | null
    consentVerification: string | null
    timestamp: Date | null
  }

  export type PiiAccessAuditLogMaxAggregateOutputType = {
    id: string | null
    operatorId: string | null
    targetEntity: string | null
    targetId: string | null
    purposeCode: string | null
    justification: string | null
    consentVerification: string | null
    timestamp: Date | null
  }

  export type PiiAccessAuditLogCountAggregateOutputType = {
    id: number
    operatorId: number
    targetEntity: number
    targetId: number
    accessedFields: number
    purposeCode: number
    justification: number
    consentVerification: number
    timestamp: number
    _all: number
  }


  export type PiiAccessAuditLogMinAggregateInputType = {
    id?: true
    operatorId?: true
    targetEntity?: true
    targetId?: true
    purposeCode?: true
    justification?: true
    consentVerification?: true
    timestamp?: true
  }

  export type PiiAccessAuditLogMaxAggregateInputType = {
    id?: true
    operatorId?: true
    targetEntity?: true
    targetId?: true
    purposeCode?: true
    justification?: true
    consentVerification?: true
    timestamp?: true
  }

  export type PiiAccessAuditLogCountAggregateInputType = {
    id?: true
    operatorId?: true
    targetEntity?: true
    targetId?: true
    accessedFields?: true
    purposeCode?: true
    justification?: true
    consentVerification?: true
    timestamp?: true
    _all?: true
  }

  export type PiiAccessAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PiiAccessAuditLog to aggregate.
     */
    where?: PiiAccessAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PiiAccessAuditLogs to fetch.
     */
    orderBy?: PiiAccessAuditLogOrderByWithRelationInput | PiiAccessAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PiiAccessAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PiiAccessAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PiiAccessAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PiiAccessAuditLogs
    **/
    _count?: true | PiiAccessAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PiiAccessAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PiiAccessAuditLogMaxAggregateInputType
  }

  export type GetPiiAccessAuditLogAggregateType<T extends PiiAccessAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePiiAccessAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePiiAccessAuditLog[P]>
      : GetScalarType<T[P], AggregatePiiAccessAuditLog[P]>
  }




  export type PiiAccessAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiiAccessAuditLogWhereInput
    orderBy?: PiiAccessAuditLogOrderByWithAggregationInput | PiiAccessAuditLogOrderByWithAggregationInput[]
    by: PiiAccessAuditLogScalarFieldEnum[] | PiiAccessAuditLogScalarFieldEnum
    having?: PiiAccessAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PiiAccessAuditLogCountAggregateInputType | true
    _min?: PiiAccessAuditLogMinAggregateInputType
    _max?: PiiAccessAuditLogMaxAggregateInputType
  }

  export type PiiAccessAuditLogGroupByOutputType = {
    id: string
    operatorId: string | null
    targetEntity: string
    targetId: string
    accessedFields: string[]
    purposeCode: string
    justification: string
    consentVerification: string | null
    timestamp: Date
    _count: PiiAccessAuditLogCountAggregateOutputType | null
    _min: PiiAccessAuditLogMinAggregateOutputType | null
    _max: PiiAccessAuditLogMaxAggregateOutputType | null
  }

  type GetPiiAccessAuditLogGroupByPayload<T extends PiiAccessAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PiiAccessAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PiiAccessAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PiiAccessAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], PiiAccessAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type PiiAccessAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operatorId?: boolean
    targetEntity?: boolean
    targetId?: boolean
    accessedFields?: boolean
    purposeCode?: boolean
    justification?: boolean
    consentVerification?: boolean
    timestamp?: boolean
    user?: boolean | PiiAccessAuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["piiAccessAuditLog"]>

  export type PiiAccessAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operatorId?: boolean
    targetEntity?: boolean
    targetId?: boolean
    accessedFields?: boolean
    purposeCode?: boolean
    justification?: boolean
    consentVerification?: boolean
    timestamp?: boolean
    user?: boolean | PiiAccessAuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["piiAccessAuditLog"]>

  export type PiiAccessAuditLogSelectScalar = {
    id?: boolean
    operatorId?: boolean
    targetEntity?: boolean
    targetId?: boolean
    accessedFields?: boolean
    purposeCode?: boolean
    justification?: boolean
    consentVerification?: boolean
    timestamp?: boolean
  }

  export type PiiAccessAuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PiiAccessAuditLog$userArgs<ExtArgs>
  }
  export type PiiAccessAuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PiiAccessAuditLog$userArgs<ExtArgs>
  }

  export type $PiiAccessAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PiiAccessAuditLog"
    objects: {
      user: Prisma.$AdminUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      operatorId: string | null
      targetEntity: string
      targetId: string
      accessedFields: string[]
      purposeCode: string
      justification: string
      consentVerification: string | null
      timestamp: Date
    }, ExtArgs["result"]["piiAccessAuditLog"]>
    composites: {}
  }

  type PiiAccessAuditLogGetPayload<S extends boolean | null | undefined | PiiAccessAuditLogDefaultArgs> = $Result.GetResult<Prisma.$PiiAccessAuditLogPayload, S>

  type PiiAccessAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PiiAccessAuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PiiAccessAuditLogCountAggregateInputType | true
    }

  export interface PiiAccessAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PiiAccessAuditLog'], meta: { name: 'PiiAccessAuditLog' } }
    /**
     * Find zero or one PiiAccessAuditLog that matches the filter.
     * @param {PiiAccessAuditLogFindUniqueArgs} args - Arguments to find a PiiAccessAuditLog
     * @example
     * // Get one PiiAccessAuditLog
     * const piiAccessAuditLog = await prisma.piiAccessAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PiiAccessAuditLogFindUniqueArgs>(args: SelectSubset<T, PiiAccessAuditLogFindUniqueArgs<ExtArgs>>): Prisma__PiiAccessAuditLogClient<$Result.GetResult<Prisma.$PiiAccessAuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PiiAccessAuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PiiAccessAuditLogFindUniqueOrThrowArgs} args - Arguments to find a PiiAccessAuditLog
     * @example
     * // Get one PiiAccessAuditLog
     * const piiAccessAuditLog = await prisma.piiAccessAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PiiAccessAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PiiAccessAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PiiAccessAuditLogClient<$Result.GetResult<Prisma.$PiiAccessAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PiiAccessAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiiAccessAuditLogFindFirstArgs} args - Arguments to find a PiiAccessAuditLog
     * @example
     * // Get one PiiAccessAuditLog
     * const piiAccessAuditLog = await prisma.piiAccessAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PiiAccessAuditLogFindFirstArgs>(args?: SelectSubset<T, PiiAccessAuditLogFindFirstArgs<ExtArgs>>): Prisma__PiiAccessAuditLogClient<$Result.GetResult<Prisma.$PiiAccessAuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PiiAccessAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiiAccessAuditLogFindFirstOrThrowArgs} args - Arguments to find a PiiAccessAuditLog
     * @example
     * // Get one PiiAccessAuditLog
     * const piiAccessAuditLog = await prisma.piiAccessAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PiiAccessAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PiiAccessAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PiiAccessAuditLogClient<$Result.GetResult<Prisma.$PiiAccessAuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PiiAccessAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiiAccessAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PiiAccessAuditLogs
     * const piiAccessAuditLogs = await prisma.piiAccessAuditLog.findMany()
     * 
     * // Get first 10 PiiAccessAuditLogs
     * const piiAccessAuditLogs = await prisma.piiAccessAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const piiAccessAuditLogWithIdOnly = await prisma.piiAccessAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PiiAccessAuditLogFindManyArgs>(args?: SelectSubset<T, PiiAccessAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiiAccessAuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PiiAccessAuditLog.
     * @param {PiiAccessAuditLogCreateArgs} args - Arguments to create a PiiAccessAuditLog.
     * @example
     * // Create one PiiAccessAuditLog
     * const PiiAccessAuditLog = await prisma.piiAccessAuditLog.create({
     *   data: {
     *     // ... data to create a PiiAccessAuditLog
     *   }
     * })
     * 
     */
    create<T extends PiiAccessAuditLogCreateArgs>(args: SelectSubset<T, PiiAccessAuditLogCreateArgs<ExtArgs>>): Prisma__PiiAccessAuditLogClient<$Result.GetResult<Prisma.$PiiAccessAuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PiiAccessAuditLogs.
     * @param {PiiAccessAuditLogCreateManyArgs} args - Arguments to create many PiiAccessAuditLogs.
     * @example
     * // Create many PiiAccessAuditLogs
     * const piiAccessAuditLog = await prisma.piiAccessAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PiiAccessAuditLogCreateManyArgs>(args?: SelectSubset<T, PiiAccessAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PiiAccessAuditLogs and returns the data saved in the database.
     * @param {PiiAccessAuditLogCreateManyAndReturnArgs} args - Arguments to create many PiiAccessAuditLogs.
     * @example
     * // Create many PiiAccessAuditLogs
     * const piiAccessAuditLog = await prisma.piiAccessAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PiiAccessAuditLogs and only return the `id`
     * const piiAccessAuditLogWithIdOnly = await prisma.piiAccessAuditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PiiAccessAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, PiiAccessAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiiAccessAuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PiiAccessAuditLog.
     * @param {PiiAccessAuditLogDeleteArgs} args - Arguments to delete one PiiAccessAuditLog.
     * @example
     * // Delete one PiiAccessAuditLog
     * const PiiAccessAuditLog = await prisma.piiAccessAuditLog.delete({
     *   where: {
     *     // ... filter to delete one PiiAccessAuditLog
     *   }
     * })
     * 
     */
    delete<T extends PiiAccessAuditLogDeleteArgs>(args: SelectSubset<T, PiiAccessAuditLogDeleteArgs<ExtArgs>>): Prisma__PiiAccessAuditLogClient<$Result.GetResult<Prisma.$PiiAccessAuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PiiAccessAuditLog.
     * @param {PiiAccessAuditLogUpdateArgs} args - Arguments to update one PiiAccessAuditLog.
     * @example
     * // Update one PiiAccessAuditLog
     * const piiAccessAuditLog = await prisma.piiAccessAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PiiAccessAuditLogUpdateArgs>(args: SelectSubset<T, PiiAccessAuditLogUpdateArgs<ExtArgs>>): Prisma__PiiAccessAuditLogClient<$Result.GetResult<Prisma.$PiiAccessAuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PiiAccessAuditLogs.
     * @param {PiiAccessAuditLogDeleteManyArgs} args - Arguments to filter PiiAccessAuditLogs to delete.
     * @example
     * // Delete a few PiiAccessAuditLogs
     * const { count } = await prisma.piiAccessAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PiiAccessAuditLogDeleteManyArgs>(args?: SelectSubset<T, PiiAccessAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PiiAccessAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiiAccessAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PiiAccessAuditLogs
     * const piiAccessAuditLog = await prisma.piiAccessAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PiiAccessAuditLogUpdateManyArgs>(args: SelectSubset<T, PiiAccessAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PiiAccessAuditLog.
     * @param {PiiAccessAuditLogUpsertArgs} args - Arguments to update or create a PiiAccessAuditLog.
     * @example
     * // Update or create a PiiAccessAuditLog
     * const piiAccessAuditLog = await prisma.piiAccessAuditLog.upsert({
     *   create: {
     *     // ... data to create a PiiAccessAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PiiAccessAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends PiiAccessAuditLogUpsertArgs>(args: SelectSubset<T, PiiAccessAuditLogUpsertArgs<ExtArgs>>): Prisma__PiiAccessAuditLogClient<$Result.GetResult<Prisma.$PiiAccessAuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PiiAccessAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiiAccessAuditLogCountArgs} args - Arguments to filter PiiAccessAuditLogs to count.
     * @example
     * // Count the number of PiiAccessAuditLogs
     * const count = await prisma.piiAccessAuditLog.count({
     *   where: {
     *     // ... the filter for the PiiAccessAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends PiiAccessAuditLogCountArgs>(
      args?: Subset<T, PiiAccessAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PiiAccessAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PiiAccessAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiiAccessAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PiiAccessAuditLogAggregateArgs>(args: Subset<T, PiiAccessAuditLogAggregateArgs>): Prisma.PrismaPromise<GetPiiAccessAuditLogAggregateType<T>>

    /**
     * Group by PiiAccessAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiiAccessAuditLogGroupByArgs} args - Group by arguments.
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
      T extends PiiAccessAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PiiAccessAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: PiiAccessAuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PiiAccessAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPiiAccessAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PiiAccessAuditLog model
   */
  readonly fields: PiiAccessAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PiiAccessAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PiiAccessAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends PiiAccessAuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, PiiAccessAuditLog$userArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the PiiAccessAuditLog model
   */ 
  interface PiiAccessAuditLogFieldRefs {
    readonly id: FieldRef<"PiiAccessAuditLog", 'String'>
    readonly operatorId: FieldRef<"PiiAccessAuditLog", 'String'>
    readonly targetEntity: FieldRef<"PiiAccessAuditLog", 'String'>
    readonly targetId: FieldRef<"PiiAccessAuditLog", 'String'>
    readonly accessedFields: FieldRef<"PiiAccessAuditLog", 'String[]'>
    readonly purposeCode: FieldRef<"PiiAccessAuditLog", 'String'>
    readonly justification: FieldRef<"PiiAccessAuditLog", 'String'>
    readonly consentVerification: FieldRef<"PiiAccessAuditLog", 'String'>
    readonly timestamp: FieldRef<"PiiAccessAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PiiAccessAuditLog findUnique
   */
  export type PiiAccessAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiiAccessAuditLog
     */
    select?: PiiAccessAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiiAccessAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which PiiAccessAuditLog to fetch.
     */
    where: PiiAccessAuditLogWhereUniqueInput
  }

  /**
   * PiiAccessAuditLog findUniqueOrThrow
   */
  export type PiiAccessAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiiAccessAuditLog
     */
    select?: PiiAccessAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiiAccessAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which PiiAccessAuditLog to fetch.
     */
    where: PiiAccessAuditLogWhereUniqueInput
  }

  /**
   * PiiAccessAuditLog findFirst
   */
  export type PiiAccessAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiiAccessAuditLog
     */
    select?: PiiAccessAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiiAccessAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which PiiAccessAuditLog to fetch.
     */
    where?: PiiAccessAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PiiAccessAuditLogs to fetch.
     */
    orderBy?: PiiAccessAuditLogOrderByWithRelationInput | PiiAccessAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PiiAccessAuditLogs.
     */
    cursor?: PiiAccessAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PiiAccessAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PiiAccessAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PiiAccessAuditLogs.
     */
    distinct?: PiiAccessAuditLogScalarFieldEnum | PiiAccessAuditLogScalarFieldEnum[]
  }

  /**
   * PiiAccessAuditLog findFirstOrThrow
   */
  export type PiiAccessAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiiAccessAuditLog
     */
    select?: PiiAccessAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiiAccessAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which PiiAccessAuditLog to fetch.
     */
    where?: PiiAccessAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PiiAccessAuditLogs to fetch.
     */
    orderBy?: PiiAccessAuditLogOrderByWithRelationInput | PiiAccessAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PiiAccessAuditLogs.
     */
    cursor?: PiiAccessAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PiiAccessAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PiiAccessAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PiiAccessAuditLogs.
     */
    distinct?: PiiAccessAuditLogScalarFieldEnum | PiiAccessAuditLogScalarFieldEnum[]
  }

  /**
   * PiiAccessAuditLog findMany
   */
  export type PiiAccessAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiiAccessAuditLog
     */
    select?: PiiAccessAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiiAccessAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which PiiAccessAuditLogs to fetch.
     */
    where?: PiiAccessAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PiiAccessAuditLogs to fetch.
     */
    orderBy?: PiiAccessAuditLogOrderByWithRelationInput | PiiAccessAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PiiAccessAuditLogs.
     */
    cursor?: PiiAccessAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PiiAccessAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PiiAccessAuditLogs.
     */
    skip?: number
    distinct?: PiiAccessAuditLogScalarFieldEnum | PiiAccessAuditLogScalarFieldEnum[]
  }

  /**
   * PiiAccessAuditLog create
   */
  export type PiiAccessAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiiAccessAuditLog
     */
    select?: PiiAccessAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiiAccessAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a PiiAccessAuditLog.
     */
    data: XOR<PiiAccessAuditLogCreateInput, PiiAccessAuditLogUncheckedCreateInput>
  }

  /**
   * PiiAccessAuditLog createMany
   */
  export type PiiAccessAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PiiAccessAuditLogs.
     */
    data: PiiAccessAuditLogCreateManyInput | PiiAccessAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PiiAccessAuditLog createManyAndReturn
   */
  export type PiiAccessAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiiAccessAuditLog
     */
    select?: PiiAccessAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PiiAccessAuditLogs.
     */
    data: PiiAccessAuditLogCreateManyInput | PiiAccessAuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiiAccessAuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PiiAccessAuditLog update
   */
  export type PiiAccessAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiiAccessAuditLog
     */
    select?: PiiAccessAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiiAccessAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a PiiAccessAuditLog.
     */
    data: XOR<PiiAccessAuditLogUpdateInput, PiiAccessAuditLogUncheckedUpdateInput>
    /**
     * Choose, which PiiAccessAuditLog to update.
     */
    where: PiiAccessAuditLogWhereUniqueInput
  }

  /**
   * PiiAccessAuditLog updateMany
   */
  export type PiiAccessAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PiiAccessAuditLogs.
     */
    data: XOR<PiiAccessAuditLogUpdateManyMutationInput, PiiAccessAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which PiiAccessAuditLogs to update
     */
    where?: PiiAccessAuditLogWhereInput
  }

  /**
   * PiiAccessAuditLog upsert
   */
  export type PiiAccessAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiiAccessAuditLog
     */
    select?: PiiAccessAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiiAccessAuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the PiiAccessAuditLog to update in case it exists.
     */
    where: PiiAccessAuditLogWhereUniqueInput
    /**
     * In case the PiiAccessAuditLog found by the `where` argument doesn't exist, create a new PiiAccessAuditLog with this data.
     */
    create: XOR<PiiAccessAuditLogCreateInput, PiiAccessAuditLogUncheckedCreateInput>
    /**
     * In case the PiiAccessAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PiiAccessAuditLogUpdateInput, PiiAccessAuditLogUncheckedUpdateInput>
  }

  /**
   * PiiAccessAuditLog delete
   */
  export type PiiAccessAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiiAccessAuditLog
     */
    select?: PiiAccessAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiiAccessAuditLogInclude<ExtArgs> | null
    /**
     * Filter which PiiAccessAuditLog to delete.
     */
    where: PiiAccessAuditLogWhereUniqueInput
  }

  /**
   * PiiAccessAuditLog deleteMany
   */
  export type PiiAccessAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PiiAccessAuditLogs to delete
     */
    where?: PiiAccessAuditLogWhereInput
  }

  /**
   * PiiAccessAuditLog.user
   */
  export type PiiAccessAuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    where?: AdminUserWhereInput
  }

  /**
   * PiiAccessAuditLog without action
   */
  export type PiiAccessAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiiAccessAuditLog
     */
    select?: PiiAccessAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiiAccessAuditLogInclude<ExtArgs> | null
  }


  /**
   * Model CustomerFavourite
   */

  export type AggregateCustomerFavourite = {
    _count: CustomerFavouriteCountAggregateOutputType | null
    _min: CustomerFavouriteMinAggregateOutputType | null
    _max: CustomerFavouriteMaxAggregateOutputType | null
  }

  export type CustomerFavouriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    itemType: string | null
    itemId: string | null
    tenantId: string | null
    outletId: string | null
    createdAt: Date | null
  }

  export type CustomerFavouriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    itemType: string | null
    itemId: string | null
    tenantId: string | null
    outletId: string | null
    createdAt: Date | null
  }

  export type CustomerFavouriteCountAggregateOutputType = {
    id: number
    userId: number
    itemType: number
    itemId: number
    tenantId: number
    outletId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type CustomerFavouriteMinAggregateInputType = {
    id?: true
    userId?: true
    itemType?: true
    itemId?: true
    tenantId?: true
    outletId?: true
    createdAt?: true
  }

  export type CustomerFavouriteMaxAggregateInputType = {
    id?: true
    userId?: true
    itemType?: true
    itemId?: true
    tenantId?: true
    outletId?: true
    createdAt?: true
  }

  export type CustomerFavouriteCountAggregateInputType = {
    id?: true
    userId?: true
    itemType?: true
    itemId?: true
    tenantId?: true
    outletId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerFavouriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerFavourite to aggregate.
     */
    where?: CustomerFavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerFavourites to fetch.
     */
    orderBy?: CustomerFavouriteOrderByWithRelationInput | CustomerFavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerFavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerFavourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerFavourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerFavourites
    **/
    _count?: true | CustomerFavouriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerFavouriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerFavouriteMaxAggregateInputType
  }

  export type GetCustomerFavouriteAggregateType<T extends CustomerFavouriteAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerFavourite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerFavourite[P]>
      : GetScalarType<T[P], AggregateCustomerFavourite[P]>
  }




  export type CustomerFavouriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerFavouriteWhereInput
    orderBy?: CustomerFavouriteOrderByWithAggregationInput | CustomerFavouriteOrderByWithAggregationInput[]
    by: CustomerFavouriteScalarFieldEnum[] | CustomerFavouriteScalarFieldEnum
    having?: CustomerFavouriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerFavouriteCountAggregateInputType | true
    _min?: CustomerFavouriteMinAggregateInputType
    _max?: CustomerFavouriteMaxAggregateInputType
  }

  export type CustomerFavouriteGroupByOutputType = {
    id: string
    userId: string
    itemType: string
    itemId: string
    tenantId: string | null
    outletId: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: CustomerFavouriteCountAggregateOutputType | null
    _min: CustomerFavouriteMinAggregateOutputType | null
    _max: CustomerFavouriteMaxAggregateOutputType | null
  }

  type GetCustomerFavouriteGroupByPayload<T extends CustomerFavouriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerFavouriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerFavouriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerFavouriteGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerFavouriteGroupByOutputType[P]>
        }
      >
    >


  export type CustomerFavouriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemType?: boolean
    itemId?: boolean
    tenantId?: boolean
    outletId?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerFavourite"]>

  export type CustomerFavouriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemType?: boolean
    itemId?: boolean
    tenantId?: boolean
    outletId?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerFavourite"]>

  export type CustomerFavouriteSelectScalar = {
    id?: boolean
    userId?: boolean
    itemType?: boolean
    itemId?: boolean
    tenantId?: boolean
    outletId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type CustomerFavouriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomerFavouriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CustomerFavouritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerFavourite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      itemType: string
      itemId: string
      tenantId: string | null
      outletId: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["customerFavourite"]>
    composites: {}
  }

  type CustomerFavouriteGetPayload<S extends boolean | null | undefined | CustomerFavouriteDefaultArgs> = $Result.GetResult<Prisma.$CustomerFavouritePayload, S>

  type CustomerFavouriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFavouriteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerFavouriteCountAggregateInputType | true
    }

  export interface CustomerFavouriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerFavourite'], meta: { name: 'CustomerFavourite' } }
    /**
     * Find zero or one CustomerFavourite that matches the filter.
     * @param {CustomerFavouriteFindUniqueArgs} args - Arguments to find a CustomerFavourite
     * @example
     * // Get one CustomerFavourite
     * const customerFavourite = await prisma.customerFavourite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFavouriteFindUniqueArgs>(args: SelectSubset<T, CustomerFavouriteFindUniqueArgs<ExtArgs>>): Prisma__CustomerFavouriteClient<$Result.GetResult<Prisma.$CustomerFavouritePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomerFavourite that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFavouriteFindUniqueOrThrowArgs} args - Arguments to find a CustomerFavourite
     * @example
     * // Get one CustomerFavourite
     * const customerFavourite = await prisma.customerFavourite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFavouriteFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFavouriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerFavouriteClient<$Result.GetResult<Prisma.$CustomerFavouritePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomerFavourite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFavouriteFindFirstArgs} args - Arguments to find a CustomerFavourite
     * @example
     * // Get one CustomerFavourite
     * const customerFavourite = await prisma.customerFavourite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFavouriteFindFirstArgs>(args?: SelectSubset<T, CustomerFavouriteFindFirstArgs<ExtArgs>>): Prisma__CustomerFavouriteClient<$Result.GetResult<Prisma.$CustomerFavouritePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomerFavourite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFavouriteFindFirstOrThrowArgs} args - Arguments to find a CustomerFavourite
     * @example
     * // Get one CustomerFavourite
     * const customerFavourite = await prisma.customerFavourite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFavouriteFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFavouriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerFavouriteClient<$Result.GetResult<Prisma.$CustomerFavouritePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomerFavourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFavouriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerFavourites
     * const customerFavourites = await prisma.customerFavourite.findMany()
     * 
     * // Get first 10 CustomerFavourites
     * const customerFavourites = await prisma.customerFavourite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerFavouriteWithIdOnly = await prisma.customerFavourite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFavouriteFindManyArgs>(args?: SelectSubset<T, CustomerFavouriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerFavouritePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomerFavourite.
     * @param {CustomerFavouriteCreateArgs} args - Arguments to create a CustomerFavourite.
     * @example
     * // Create one CustomerFavourite
     * const CustomerFavourite = await prisma.customerFavourite.create({
     *   data: {
     *     // ... data to create a CustomerFavourite
     *   }
     * })
     * 
     */
    create<T extends CustomerFavouriteCreateArgs>(args: SelectSubset<T, CustomerFavouriteCreateArgs<ExtArgs>>): Prisma__CustomerFavouriteClient<$Result.GetResult<Prisma.$CustomerFavouritePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomerFavourites.
     * @param {CustomerFavouriteCreateManyArgs} args - Arguments to create many CustomerFavourites.
     * @example
     * // Create many CustomerFavourites
     * const customerFavourite = await prisma.customerFavourite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerFavouriteCreateManyArgs>(args?: SelectSubset<T, CustomerFavouriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerFavourites and returns the data saved in the database.
     * @param {CustomerFavouriteCreateManyAndReturnArgs} args - Arguments to create many CustomerFavourites.
     * @example
     * // Create many CustomerFavourites
     * const customerFavourite = await prisma.customerFavourite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerFavourites and only return the `id`
     * const customerFavouriteWithIdOnly = await prisma.customerFavourite.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerFavouriteCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerFavouriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerFavouritePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomerFavourite.
     * @param {CustomerFavouriteDeleteArgs} args - Arguments to delete one CustomerFavourite.
     * @example
     * // Delete one CustomerFavourite
     * const CustomerFavourite = await prisma.customerFavourite.delete({
     *   where: {
     *     // ... filter to delete one CustomerFavourite
     *   }
     * })
     * 
     */
    delete<T extends CustomerFavouriteDeleteArgs>(args: SelectSubset<T, CustomerFavouriteDeleteArgs<ExtArgs>>): Prisma__CustomerFavouriteClient<$Result.GetResult<Prisma.$CustomerFavouritePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomerFavourite.
     * @param {CustomerFavouriteUpdateArgs} args - Arguments to update one CustomerFavourite.
     * @example
     * // Update one CustomerFavourite
     * const customerFavourite = await prisma.customerFavourite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerFavouriteUpdateArgs>(args: SelectSubset<T, CustomerFavouriteUpdateArgs<ExtArgs>>): Prisma__CustomerFavouriteClient<$Result.GetResult<Prisma.$CustomerFavouritePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomerFavourites.
     * @param {CustomerFavouriteDeleteManyArgs} args - Arguments to filter CustomerFavourites to delete.
     * @example
     * // Delete a few CustomerFavourites
     * const { count } = await prisma.customerFavourite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerFavouriteDeleteManyArgs>(args?: SelectSubset<T, CustomerFavouriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerFavourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFavouriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerFavourites
     * const customerFavourite = await prisma.customerFavourite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerFavouriteUpdateManyArgs>(args: SelectSubset<T, CustomerFavouriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerFavourite.
     * @param {CustomerFavouriteUpsertArgs} args - Arguments to update or create a CustomerFavourite.
     * @example
     * // Update or create a CustomerFavourite
     * const customerFavourite = await prisma.customerFavourite.upsert({
     *   create: {
     *     // ... data to create a CustomerFavourite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerFavourite we want to update
     *   }
     * })
     */
    upsert<T extends CustomerFavouriteUpsertArgs>(args: SelectSubset<T, CustomerFavouriteUpsertArgs<ExtArgs>>): Prisma__CustomerFavouriteClient<$Result.GetResult<Prisma.$CustomerFavouritePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomerFavourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFavouriteCountArgs} args - Arguments to filter CustomerFavourites to count.
     * @example
     * // Count the number of CustomerFavourites
     * const count = await prisma.customerFavourite.count({
     *   where: {
     *     // ... the filter for the CustomerFavourites we want to count
     *   }
     * })
    **/
    count<T extends CustomerFavouriteCountArgs>(
      args?: Subset<T, CustomerFavouriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerFavouriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerFavourite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFavouriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerFavouriteAggregateArgs>(args: Subset<T, CustomerFavouriteAggregateArgs>): Prisma.PrismaPromise<GetCustomerFavouriteAggregateType<T>>

    /**
     * Group by CustomerFavourite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFavouriteGroupByArgs} args - Group by arguments.
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
      T extends CustomerFavouriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerFavouriteGroupByArgs['orderBy'] }
        : { orderBy?: CustomerFavouriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerFavouriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerFavouriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerFavourite model
   */
  readonly fields: CustomerFavouriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerFavourite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerFavouriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CustomerFavourite model
   */ 
  interface CustomerFavouriteFieldRefs {
    readonly id: FieldRef<"CustomerFavourite", 'String'>
    readonly userId: FieldRef<"CustomerFavourite", 'String'>
    readonly itemType: FieldRef<"CustomerFavourite", 'String'>
    readonly itemId: FieldRef<"CustomerFavourite", 'String'>
    readonly tenantId: FieldRef<"CustomerFavourite", 'String'>
    readonly outletId: FieldRef<"CustomerFavourite", 'String'>
    readonly metadata: FieldRef<"CustomerFavourite", 'Json'>
    readonly createdAt: FieldRef<"CustomerFavourite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerFavourite findUnique
   */
  export type CustomerFavouriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFavourite
     */
    select?: CustomerFavouriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFavouriteInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFavourite to fetch.
     */
    where: CustomerFavouriteWhereUniqueInput
  }

  /**
   * CustomerFavourite findUniqueOrThrow
   */
  export type CustomerFavouriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFavourite
     */
    select?: CustomerFavouriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFavouriteInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFavourite to fetch.
     */
    where: CustomerFavouriteWhereUniqueInput
  }

  /**
   * CustomerFavourite findFirst
   */
  export type CustomerFavouriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFavourite
     */
    select?: CustomerFavouriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFavouriteInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFavourite to fetch.
     */
    where?: CustomerFavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerFavourites to fetch.
     */
    orderBy?: CustomerFavouriteOrderByWithRelationInput | CustomerFavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerFavourites.
     */
    cursor?: CustomerFavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerFavourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerFavourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerFavourites.
     */
    distinct?: CustomerFavouriteScalarFieldEnum | CustomerFavouriteScalarFieldEnum[]
  }

  /**
   * CustomerFavourite findFirstOrThrow
   */
  export type CustomerFavouriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFavourite
     */
    select?: CustomerFavouriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFavouriteInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFavourite to fetch.
     */
    where?: CustomerFavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerFavourites to fetch.
     */
    orderBy?: CustomerFavouriteOrderByWithRelationInput | CustomerFavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerFavourites.
     */
    cursor?: CustomerFavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerFavourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerFavourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerFavourites.
     */
    distinct?: CustomerFavouriteScalarFieldEnum | CustomerFavouriteScalarFieldEnum[]
  }

  /**
   * CustomerFavourite findMany
   */
  export type CustomerFavouriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFavourite
     */
    select?: CustomerFavouriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFavouriteInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFavourites to fetch.
     */
    where?: CustomerFavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerFavourites to fetch.
     */
    orderBy?: CustomerFavouriteOrderByWithRelationInput | CustomerFavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerFavourites.
     */
    cursor?: CustomerFavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerFavourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerFavourites.
     */
    skip?: number
    distinct?: CustomerFavouriteScalarFieldEnum | CustomerFavouriteScalarFieldEnum[]
  }

  /**
   * CustomerFavourite create
   */
  export type CustomerFavouriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFavourite
     */
    select?: CustomerFavouriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFavouriteInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerFavourite.
     */
    data: XOR<CustomerFavouriteCreateInput, CustomerFavouriteUncheckedCreateInput>
  }

  /**
   * CustomerFavourite createMany
   */
  export type CustomerFavouriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerFavourites.
     */
    data: CustomerFavouriteCreateManyInput | CustomerFavouriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerFavourite createManyAndReturn
   */
  export type CustomerFavouriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFavourite
     */
    select?: CustomerFavouriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomerFavourites.
     */
    data: CustomerFavouriteCreateManyInput | CustomerFavouriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFavouriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerFavourite update
   */
  export type CustomerFavouriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFavourite
     */
    select?: CustomerFavouriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFavouriteInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerFavourite.
     */
    data: XOR<CustomerFavouriteUpdateInput, CustomerFavouriteUncheckedUpdateInput>
    /**
     * Choose, which CustomerFavourite to update.
     */
    where: CustomerFavouriteWhereUniqueInput
  }

  /**
   * CustomerFavourite updateMany
   */
  export type CustomerFavouriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerFavourites.
     */
    data: XOR<CustomerFavouriteUpdateManyMutationInput, CustomerFavouriteUncheckedUpdateManyInput>
    /**
     * Filter which CustomerFavourites to update
     */
    where?: CustomerFavouriteWhereInput
  }

  /**
   * CustomerFavourite upsert
   */
  export type CustomerFavouriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFavourite
     */
    select?: CustomerFavouriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFavouriteInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerFavourite to update in case it exists.
     */
    where: CustomerFavouriteWhereUniqueInput
    /**
     * In case the CustomerFavourite found by the `where` argument doesn't exist, create a new CustomerFavourite with this data.
     */
    create: XOR<CustomerFavouriteCreateInput, CustomerFavouriteUncheckedCreateInput>
    /**
     * In case the CustomerFavourite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerFavouriteUpdateInput, CustomerFavouriteUncheckedUpdateInput>
  }

  /**
   * CustomerFavourite delete
   */
  export type CustomerFavouriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFavourite
     */
    select?: CustomerFavouriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFavouriteInclude<ExtArgs> | null
    /**
     * Filter which CustomerFavourite to delete.
     */
    where: CustomerFavouriteWhereUniqueInput
  }

  /**
   * CustomerFavourite deleteMany
   */
  export type CustomerFavouriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerFavourites to delete
     */
    where?: CustomerFavouriteWhereInput
  }

  /**
   * CustomerFavourite without action
   */
  export type CustomerFavouriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFavourite
     */
    select?: CustomerFavouriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFavouriteInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    email: 'email',
    fullName: 'fullName',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerAddressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    fullAddress: 'fullAddress',
    landmark: 'landmark',
    city: 'city',
    pincode: 'pincode',
    latitude: 'latitude',
    longitude: 'longitude',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerAddressScalarFieldEnum = (typeof CustomerAddressScalarFieldEnum)[keyof typeof CustomerAddressScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const MembershipScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tenantId: 'tenantId',
    outletId: 'outletId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum]


  export const AuditEventScalarFieldEnum: {
    id: 'id',
    actorId: 'actorId',
    action: 'action',
    targetType: 'targetType',
    targetId: 'targetId',
    metadata: 'metadata',
    occurredAt: 'occurredAt'
  };

  export type AuditEventScalarFieldEnum = (typeof AuditEventScalarFieldEnum)[keyof typeof AuditEventScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    status: 'status',
    mfaEnabled: 'mfaEnabled',
    isRootProtected: 'isRootProtected',
    tokenVersion: 'tokenVersion',
    failedLoginAttempts: 'failedLoginAttempts',
    lockedUntil: 'lockedUntil',
    lastLoginAt: 'lastLoginAt',
    lastLoginIp: 'lastLoginIp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const AdminRoleScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    subtitle: 'subtitle',
    hierarchyLevel: 'hierarchyLevel',
    description: 'description',
    requiresMfa: 'requiresMfa',
    isSystem: 'isSystem',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminRoleScalarFieldEnum = (typeof AdminRoleScalarFieldEnum)[keyof typeof AdminRoleScalarFieldEnum]


  export const AdminPermissionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    module: 'module',
    description: 'description'
  };

  export type AdminPermissionScalarFieldEnum = (typeof AdminPermissionScalarFieldEnum)[keyof typeof AdminPermissionScalarFieldEnum]


  export const AdminRoleAssignmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roleId: 'roleId',
    assignedAt: 'assignedAt'
  };

  export type AdminRoleAssignmentScalarFieldEnum = (typeof AdminRoleAssignmentScalarFieldEnum)[keyof typeof AdminRoleAssignmentScalarFieldEnum]


  export const AdminRolePermissionScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    permissionId: 'permissionId',
    assignedAt: 'assignedAt'
  };

  export type AdminRolePermissionScalarFieldEnum = (typeof AdminRolePermissionScalarFieldEnum)[keyof typeof AdminRolePermissionScalarFieldEnum]


  export const AdminGeoAssignmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    state: 'state',
    stateCode: 'stateCode',
    district: 'district',
    districtCode: 'districtCode',
    cityId: 'cityId',
    cityCode: 'cityCode',
    cityName: 'cityName',
    localities: 'localities',
    assignedAt: 'assignedAt'
  };

  export type AdminGeoAssignmentScalarFieldEnum = (typeof AdminGeoAssignmentScalarFieldEnum)[keyof typeof AdminGeoAssignmentScalarFieldEnum]


  export const AdminAuditLogScalarFieldEnum: {
    id: 'id',
    operatorId: 'operatorId',
    operatorName: 'operatorName',
    action: 'action',
    targetEntity: 'targetEntity',
    targetId: 'targetId',
    reasonCode: 'reasonCode',
    justification: 'justification',
    previousHash: 'previousHash',
    recordHash: 'recordHash',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    timestamp: 'timestamp'
  };

  export type AdminAuditLogScalarFieldEnum = (typeof AdminAuditLogScalarFieldEnum)[keyof typeof AdminAuditLogScalarFieldEnum]


  export const PiiAccessAuditLogScalarFieldEnum: {
    id: 'id',
    operatorId: 'operatorId',
    targetEntity: 'targetEntity',
    targetId: 'targetId',
    accessedFields: 'accessedFields',
    purposeCode: 'purposeCode',
    justification: 'justification',
    consentVerification: 'consentVerification',
    timestamp: 'timestamp'
  };

  export type PiiAccessAuditLogScalarFieldEnum = (typeof PiiAccessAuditLogScalarFieldEnum)[keyof typeof PiiAccessAuditLogScalarFieldEnum]


  export const CustomerFavouriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    itemType: 'itemType',
    itemId: 'itemId',
    tenantId: 'tenantId',
    outletId: 'outletId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type CustomerFavouriteScalarFieldEnum = (typeof CustomerFavouriteScalarFieldEnum)[keyof typeof CustomerFavouriteScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    fullName?: StringNullableFilter<"User"> | string | null
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    memberships?: MembershipListRelationFilter
    addresses?: CustomerAddressListRelationFilter
    favourites?: CustomerFavouriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    memberships?: MembershipOrderByRelationAggregateInput
    addresses?: CustomerAddressOrderByRelationAggregateInput
    favourites?: CustomerFavouriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringNullableFilter<"User"> | string | null
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    memberships?: MembershipListRelationFilter
    addresses?: CustomerAddressListRelationFilter
    favourites?: CustomerFavouriteListRelationFilter
  }, "id" | "phoneNumber" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CustomerAddressWhereInput = {
    AND?: CustomerAddressWhereInput | CustomerAddressWhereInput[]
    OR?: CustomerAddressWhereInput[]
    NOT?: CustomerAddressWhereInput | CustomerAddressWhereInput[]
    id?: IntFilter<"CustomerAddress"> | number
    userId?: StringFilter<"CustomerAddress"> | string
    type?: StringFilter<"CustomerAddress"> | string
    fullAddress?: StringFilter<"CustomerAddress"> | string
    landmark?: StringNullableFilter<"CustomerAddress"> | string | null
    city?: StringFilter<"CustomerAddress"> | string
    pincode?: StringFilter<"CustomerAddress"> | string
    latitude?: FloatNullableFilter<"CustomerAddress"> | number | null
    longitude?: FloatNullableFilter<"CustomerAddress"> | number | null
    isDefault?: BoolFilter<"CustomerAddress"> | boolean
    createdAt?: DateTimeFilter<"CustomerAddress"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerAddress"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CustomerAddressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    fullAddress?: SortOrder
    landmark?: SortOrderInput | SortOrder
    city?: SortOrder
    pincode?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CustomerAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerAddressWhereInput | CustomerAddressWhereInput[]
    OR?: CustomerAddressWhereInput[]
    NOT?: CustomerAddressWhereInput | CustomerAddressWhereInput[]
    userId?: StringFilter<"CustomerAddress"> | string
    type?: StringFilter<"CustomerAddress"> | string
    fullAddress?: StringFilter<"CustomerAddress"> | string
    landmark?: StringNullableFilter<"CustomerAddress"> | string | null
    city?: StringFilter<"CustomerAddress"> | string
    pincode?: StringFilter<"CustomerAddress"> | string
    latitude?: FloatNullableFilter<"CustomerAddress"> | number | null
    longitude?: FloatNullableFilter<"CustomerAddress"> | number | null
    isDefault?: BoolFilter<"CustomerAddress"> | boolean
    createdAt?: DateTimeFilter<"CustomerAddress"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerAddress"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CustomerAddressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    fullAddress?: SortOrder
    landmark?: SortOrderInput | SortOrder
    city?: SortOrder
    pincode?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerAddressCountOrderByAggregateInput
    _avg?: CustomerAddressAvgOrderByAggregateInput
    _max?: CustomerAddressMaxOrderByAggregateInput
    _min?: CustomerAddressMinOrderByAggregateInput
    _sum?: CustomerAddressSumOrderByAggregateInput
  }

  export type CustomerAddressScalarWhereWithAggregatesInput = {
    AND?: CustomerAddressScalarWhereWithAggregatesInput | CustomerAddressScalarWhereWithAggregatesInput[]
    OR?: CustomerAddressScalarWhereWithAggregatesInput[]
    NOT?: CustomerAddressScalarWhereWithAggregatesInput | CustomerAddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomerAddress"> | number
    userId?: StringWithAggregatesFilter<"CustomerAddress"> | string
    type?: StringWithAggregatesFilter<"CustomerAddress"> | string
    fullAddress?: StringWithAggregatesFilter<"CustomerAddress"> | string
    landmark?: StringNullableWithAggregatesFilter<"CustomerAddress"> | string | null
    city?: StringWithAggregatesFilter<"CustomerAddress"> | string
    pincode?: StringWithAggregatesFilter<"CustomerAddress"> | string
    latitude?: FloatNullableWithAggregatesFilter<"CustomerAddress"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"CustomerAddress"> | number | null
    isDefault?: BoolWithAggregatesFilter<"CustomerAddress"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CustomerAddress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerAddress"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    tokenHash?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    tokenHash?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    tokenHash?: StringWithAggregatesFilter<"Session"> | string
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type MembershipWhereInput = {
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    id?: StringFilter<"Membership"> | string
    userId?: StringFilter<"Membership"> | string
    tenantId?: StringFilter<"Membership"> | string
    outletId?: StringNullableFilter<"Membership"> | string | null
    role?: StringFilter<"Membership"> | string
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    updatedAt?: DateTimeFilter<"Membership"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MembershipOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_tenantId_role?: MembershipUserIdTenantIdRoleCompoundUniqueInput
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    userId?: StringFilter<"Membership"> | string
    tenantId?: StringFilter<"Membership"> | string
    outletId?: StringNullableFilter<"Membership"> | string | null
    role?: StringFilter<"Membership"> | string
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    updatedAt?: DateTimeFilter<"Membership"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_tenantId_role">

  export type MembershipOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MembershipCountOrderByAggregateInput
    _max?: MembershipMaxOrderByAggregateInput
    _min?: MembershipMinOrderByAggregateInput
  }

  export type MembershipScalarWhereWithAggregatesInput = {
    AND?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    OR?: MembershipScalarWhereWithAggregatesInput[]
    NOT?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Membership"> | string
    userId?: StringWithAggregatesFilter<"Membership"> | string
    tenantId?: StringWithAggregatesFilter<"Membership"> | string
    outletId?: StringNullableWithAggregatesFilter<"Membership"> | string | null
    role?: StringWithAggregatesFilter<"Membership"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
  }

  export type AuditEventWhereInput = {
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    id?: StringFilter<"AuditEvent"> | string
    actorId?: StringFilter<"AuditEvent"> | string
    action?: StringFilter<"AuditEvent"> | string
    targetType?: StringFilter<"AuditEvent"> | string
    targetId?: StringFilter<"AuditEvent"> | string
    metadata?: JsonNullableFilter<"AuditEvent">
    occurredAt?: DateTimeFilter<"AuditEvent"> | Date | string
  }

  export type AuditEventOrderByWithRelationInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
  }

  export type AuditEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    actorId?: StringFilter<"AuditEvent"> | string
    action?: StringFilter<"AuditEvent"> | string
    targetType?: StringFilter<"AuditEvent"> | string
    targetId?: StringFilter<"AuditEvent"> | string
    metadata?: JsonNullableFilter<"AuditEvent">
    occurredAt?: DateTimeFilter<"AuditEvent"> | Date | string
  }, "id">

  export type AuditEventOrderByWithAggregationInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
    _count?: AuditEventCountOrderByAggregateInput
    _max?: AuditEventMaxOrderByAggregateInput
    _min?: AuditEventMinOrderByAggregateInput
  }

  export type AuditEventScalarWhereWithAggregatesInput = {
    AND?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    OR?: AuditEventScalarWhereWithAggregatesInput[]
    NOT?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditEvent"> | string
    actorId?: StringWithAggregatesFilter<"AuditEvent"> | string
    action?: StringWithAggregatesFilter<"AuditEvent"> | string
    targetType?: StringWithAggregatesFilter<"AuditEvent"> | string
    targetId?: StringWithAggregatesFilter<"AuditEvent"> | string
    metadata?: JsonNullableWithAggregatesFilter<"AuditEvent">
    occurredAt?: DateTimeWithAggregatesFilter<"AuditEvent"> | Date | string
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    phone?: StringFilter<"AdminUser"> | string
    status?: StringFilter<"AdminUser"> | string
    mfaEnabled?: BoolFilter<"AdminUser"> | boolean
    isRootProtected?: BoolFilter<"AdminUser"> | boolean
    tokenVersion?: IntFilter<"AdminUser"> | number
    failedLoginAttempts?: IntFilter<"AdminUser"> | number
    lockedUntil?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    lastLoginIp?: StringNullableFilter<"AdminUser"> | string | null
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
    roleAssignments?: AdminRoleAssignmentListRelationFilter
    geoAssignments?: AdminGeoAssignmentListRelationFilter
    auditLogs?: AdminAuditLogListRelationFilter
    piiAccessLogs?: PiiAccessAuditLogListRelationFilter
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    mfaEnabled?: SortOrder
    isRootProtected?: SortOrder
    tokenVersion?: SortOrder
    failedLoginAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    lastLoginIp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleAssignments?: AdminRoleAssignmentOrderByRelationAggregateInput
    geoAssignments?: AdminGeoAssignmentOrderByRelationAggregateInput
    auditLogs?: AdminAuditLogOrderByRelationAggregateInput
    piiAccessLogs?: PiiAccessAuditLogOrderByRelationAggregateInput
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    name?: StringFilter<"AdminUser"> | string
    phone?: StringFilter<"AdminUser"> | string
    status?: StringFilter<"AdminUser"> | string
    mfaEnabled?: BoolFilter<"AdminUser"> | boolean
    isRootProtected?: BoolFilter<"AdminUser"> | boolean
    tokenVersion?: IntFilter<"AdminUser"> | number
    failedLoginAttempts?: IntFilter<"AdminUser"> | number
    lockedUntil?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    lastLoginIp?: StringNullableFilter<"AdminUser"> | string | null
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
    roleAssignments?: AdminRoleAssignmentListRelationFilter
    geoAssignments?: AdminGeoAssignmentListRelationFilter
    auditLogs?: AdminAuditLogListRelationFilter
    piiAccessLogs?: PiiAccessAuditLogListRelationFilter
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    mfaEnabled?: SortOrder
    isRootProtected?: SortOrder
    tokenVersion?: SortOrder
    failedLoginAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    lastLoginIp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _avg?: AdminUserAvgOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
    _sum?: AdminUserSumOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    phone?: StringWithAggregatesFilter<"AdminUser"> | string
    status?: StringWithAggregatesFilter<"AdminUser"> | string
    mfaEnabled?: BoolWithAggregatesFilter<"AdminUser"> | boolean
    isRootProtected?: BoolWithAggregatesFilter<"AdminUser"> | boolean
    tokenVersion?: IntWithAggregatesFilter<"AdminUser"> | number
    failedLoginAttempts?: IntWithAggregatesFilter<"AdminUser"> | number
    lockedUntil?: DateTimeNullableWithAggregatesFilter<"AdminUser"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"AdminUser"> | Date | string | null
    lastLoginIp?: StringNullableWithAggregatesFilter<"AdminUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type AdminRoleWhereInput = {
    AND?: AdminRoleWhereInput | AdminRoleWhereInput[]
    OR?: AdminRoleWhereInput[]
    NOT?: AdminRoleWhereInput | AdminRoleWhereInput[]
    id?: StringFilter<"AdminRole"> | string
    code?: StringFilter<"AdminRole"> | string
    title?: StringFilter<"AdminRole"> | string
    subtitle?: StringNullableFilter<"AdminRole"> | string | null
    hierarchyLevel?: IntFilter<"AdminRole"> | number
    description?: StringNullableFilter<"AdminRole"> | string | null
    requiresMfa?: BoolFilter<"AdminRole"> | boolean
    isSystem?: BoolFilter<"AdminRole"> | boolean
    createdAt?: DateTimeFilter<"AdminRole"> | Date | string
    updatedAt?: DateTimeFilter<"AdminRole"> | Date | string
    roleAssignments?: AdminRoleAssignmentListRelationFilter
    rolePermissions?: AdminRolePermissionListRelationFilter
  }

  export type AdminRoleOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    hierarchyLevel?: SortOrder
    description?: SortOrderInput | SortOrder
    requiresMfa?: SortOrder
    isSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleAssignments?: AdminRoleAssignmentOrderByRelationAggregateInput
    rolePermissions?: AdminRolePermissionOrderByRelationAggregateInput
  }

  export type AdminRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: AdminRoleWhereInput | AdminRoleWhereInput[]
    OR?: AdminRoleWhereInput[]
    NOT?: AdminRoleWhereInput | AdminRoleWhereInput[]
    title?: StringFilter<"AdminRole"> | string
    subtitle?: StringNullableFilter<"AdminRole"> | string | null
    hierarchyLevel?: IntFilter<"AdminRole"> | number
    description?: StringNullableFilter<"AdminRole"> | string | null
    requiresMfa?: BoolFilter<"AdminRole"> | boolean
    isSystem?: BoolFilter<"AdminRole"> | boolean
    createdAt?: DateTimeFilter<"AdminRole"> | Date | string
    updatedAt?: DateTimeFilter<"AdminRole"> | Date | string
    roleAssignments?: AdminRoleAssignmentListRelationFilter
    rolePermissions?: AdminRolePermissionListRelationFilter
  }, "id" | "code">

  export type AdminRoleOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    hierarchyLevel?: SortOrder
    description?: SortOrderInput | SortOrder
    requiresMfa?: SortOrder
    isSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminRoleCountOrderByAggregateInput
    _avg?: AdminRoleAvgOrderByAggregateInput
    _max?: AdminRoleMaxOrderByAggregateInput
    _min?: AdminRoleMinOrderByAggregateInput
    _sum?: AdminRoleSumOrderByAggregateInput
  }

  export type AdminRoleScalarWhereWithAggregatesInput = {
    AND?: AdminRoleScalarWhereWithAggregatesInput | AdminRoleScalarWhereWithAggregatesInput[]
    OR?: AdminRoleScalarWhereWithAggregatesInput[]
    NOT?: AdminRoleScalarWhereWithAggregatesInput | AdminRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminRole"> | string
    code?: StringWithAggregatesFilter<"AdminRole"> | string
    title?: StringWithAggregatesFilter<"AdminRole"> | string
    subtitle?: StringNullableWithAggregatesFilter<"AdminRole"> | string | null
    hierarchyLevel?: IntWithAggregatesFilter<"AdminRole"> | number
    description?: StringNullableWithAggregatesFilter<"AdminRole"> | string | null
    requiresMfa?: BoolWithAggregatesFilter<"AdminRole"> | boolean
    isSystem?: BoolWithAggregatesFilter<"AdminRole"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AdminRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminRole"> | Date | string
  }

  export type AdminPermissionWhereInput = {
    AND?: AdminPermissionWhereInput | AdminPermissionWhereInput[]
    OR?: AdminPermissionWhereInput[]
    NOT?: AdminPermissionWhereInput | AdminPermissionWhereInput[]
    id?: StringFilter<"AdminPermission"> | string
    code?: StringFilter<"AdminPermission"> | string
    module?: StringFilter<"AdminPermission"> | string
    description?: StringNullableFilter<"AdminPermission"> | string | null
    rolePermissions?: AdminRolePermissionListRelationFilter
  }

  export type AdminPermissionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    module?: SortOrder
    description?: SortOrderInput | SortOrder
    rolePermissions?: AdminRolePermissionOrderByRelationAggregateInput
  }

  export type AdminPermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: AdminPermissionWhereInput | AdminPermissionWhereInput[]
    OR?: AdminPermissionWhereInput[]
    NOT?: AdminPermissionWhereInput | AdminPermissionWhereInput[]
    module?: StringFilter<"AdminPermission"> | string
    description?: StringNullableFilter<"AdminPermission"> | string | null
    rolePermissions?: AdminRolePermissionListRelationFilter
  }, "id" | "code">

  export type AdminPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    module?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: AdminPermissionCountOrderByAggregateInput
    _max?: AdminPermissionMaxOrderByAggregateInput
    _min?: AdminPermissionMinOrderByAggregateInput
  }

  export type AdminPermissionScalarWhereWithAggregatesInput = {
    AND?: AdminPermissionScalarWhereWithAggregatesInput | AdminPermissionScalarWhereWithAggregatesInput[]
    OR?: AdminPermissionScalarWhereWithAggregatesInput[]
    NOT?: AdminPermissionScalarWhereWithAggregatesInput | AdminPermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminPermission"> | string
    code?: StringWithAggregatesFilter<"AdminPermission"> | string
    module?: StringWithAggregatesFilter<"AdminPermission"> | string
    description?: StringNullableWithAggregatesFilter<"AdminPermission"> | string | null
  }

  export type AdminRoleAssignmentWhereInput = {
    AND?: AdminRoleAssignmentWhereInput | AdminRoleAssignmentWhereInput[]
    OR?: AdminRoleAssignmentWhereInput[]
    NOT?: AdminRoleAssignmentWhereInput | AdminRoleAssignmentWhereInput[]
    id?: StringFilter<"AdminRoleAssignment"> | string
    userId?: StringFilter<"AdminRoleAssignment"> | string
    roleId?: StringFilter<"AdminRoleAssignment"> | string
    assignedAt?: DateTimeFilter<"AdminRoleAssignment"> | Date | string
    user?: XOR<AdminUserRelationFilter, AdminUserWhereInput>
    role?: XOR<AdminRoleRelationFilter, AdminRoleWhereInput>
  }

  export type AdminRoleAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    assignedAt?: SortOrder
    user?: AdminUserOrderByWithRelationInput
    role?: AdminRoleOrderByWithRelationInput
  }

  export type AdminRoleAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_roleId?: AdminRoleAssignmentUserIdRoleIdCompoundUniqueInput
    AND?: AdminRoleAssignmentWhereInput | AdminRoleAssignmentWhereInput[]
    OR?: AdminRoleAssignmentWhereInput[]
    NOT?: AdminRoleAssignmentWhereInput | AdminRoleAssignmentWhereInput[]
    userId?: StringFilter<"AdminRoleAssignment"> | string
    roleId?: StringFilter<"AdminRoleAssignment"> | string
    assignedAt?: DateTimeFilter<"AdminRoleAssignment"> | Date | string
    user?: XOR<AdminUserRelationFilter, AdminUserWhereInput>
    role?: XOR<AdminRoleRelationFilter, AdminRoleWhereInput>
  }, "id" | "userId_roleId">

  export type AdminRoleAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    assignedAt?: SortOrder
    _count?: AdminRoleAssignmentCountOrderByAggregateInput
    _max?: AdminRoleAssignmentMaxOrderByAggregateInput
    _min?: AdminRoleAssignmentMinOrderByAggregateInput
  }

  export type AdminRoleAssignmentScalarWhereWithAggregatesInput = {
    AND?: AdminRoleAssignmentScalarWhereWithAggregatesInput | AdminRoleAssignmentScalarWhereWithAggregatesInput[]
    OR?: AdminRoleAssignmentScalarWhereWithAggregatesInput[]
    NOT?: AdminRoleAssignmentScalarWhereWithAggregatesInput | AdminRoleAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminRoleAssignment"> | string
    userId?: StringWithAggregatesFilter<"AdminRoleAssignment"> | string
    roleId?: StringWithAggregatesFilter<"AdminRoleAssignment"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"AdminRoleAssignment"> | Date | string
  }

  export type AdminRolePermissionWhereInput = {
    AND?: AdminRolePermissionWhereInput | AdminRolePermissionWhereInput[]
    OR?: AdminRolePermissionWhereInput[]
    NOT?: AdminRolePermissionWhereInput | AdminRolePermissionWhereInput[]
    id?: StringFilter<"AdminRolePermission"> | string
    roleId?: StringFilter<"AdminRolePermission"> | string
    permissionId?: StringFilter<"AdminRolePermission"> | string
    assignedAt?: DateTimeFilter<"AdminRolePermission"> | Date | string
    role?: XOR<AdminRoleRelationFilter, AdminRoleWhereInput>
    permission?: XOR<AdminPermissionRelationFilter, AdminPermissionWhereInput>
  }

  export type AdminRolePermissionOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    assignedAt?: SortOrder
    role?: AdminRoleOrderByWithRelationInput
    permission?: AdminPermissionOrderByWithRelationInput
  }

  export type AdminRolePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roleId_permissionId?: AdminRolePermissionRoleIdPermissionIdCompoundUniqueInput
    AND?: AdminRolePermissionWhereInput | AdminRolePermissionWhereInput[]
    OR?: AdminRolePermissionWhereInput[]
    NOT?: AdminRolePermissionWhereInput | AdminRolePermissionWhereInput[]
    roleId?: StringFilter<"AdminRolePermission"> | string
    permissionId?: StringFilter<"AdminRolePermission"> | string
    assignedAt?: DateTimeFilter<"AdminRolePermission"> | Date | string
    role?: XOR<AdminRoleRelationFilter, AdminRoleWhereInput>
    permission?: XOR<AdminPermissionRelationFilter, AdminPermissionWhereInput>
  }, "id" | "roleId_permissionId">

  export type AdminRolePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    assignedAt?: SortOrder
    _count?: AdminRolePermissionCountOrderByAggregateInput
    _max?: AdminRolePermissionMaxOrderByAggregateInput
    _min?: AdminRolePermissionMinOrderByAggregateInput
  }

  export type AdminRolePermissionScalarWhereWithAggregatesInput = {
    AND?: AdminRolePermissionScalarWhereWithAggregatesInput | AdminRolePermissionScalarWhereWithAggregatesInput[]
    OR?: AdminRolePermissionScalarWhereWithAggregatesInput[]
    NOT?: AdminRolePermissionScalarWhereWithAggregatesInput | AdminRolePermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminRolePermission"> | string
    roleId?: StringWithAggregatesFilter<"AdminRolePermission"> | string
    permissionId?: StringWithAggregatesFilter<"AdminRolePermission"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"AdminRolePermission"> | Date | string
  }

  export type AdminGeoAssignmentWhereInput = {
    AND?: AdminGeoAssignmentWhereInput | AdminGeoAssignmentWhereInput[]
    OR?: AdminGeoAssignmentWhereInput[]
    NOT?: AdminGeoAssignmentWhereInput | AdminGeoAssignmentWhereInput[]
    id?: StringFilter<"AdminGeoAssignment"> | string
    userId?: StringFilter<"AdminGeoAssignment"> | string
    state?: StringFilter<"AdminGeoAssignment"> | string
    stateCode?: StringFilter<"AdminGeoAssignment"> | string
    district?: StringFilter<"AdminGeoAssignment"> | string
    districtCode?: StringFilter<"AdminGeoAssignment"> | string
    cityId?: StringFilter<"AdminGeoAssignment"> | string
    cityCode?: StringFilter<"AdminGeoAssignment"> | string
    cityName?: StringFilter<"AdminGeoAssignment"> | string
    localities?: JsonFilter<"AdminGeoAssignment">
    assignedAt?: DateTimeFilter<"AdminGeoAssignment"> | Date | string
    user?: XOR<AdminUserRelationFilter, AdminUserWhereInput>
  }

  export type AdminGeoAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    cityId?: SortOrder
    cityCode?: SortOrder
    cityName?: SortOrder
    localities?: SortOrder
    assignedAt?: SortOrder
    user?: AdminUserOrderByWithRelationInput
  }

  export type AdminGeoAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminGeoAssignmentWhereInput | AdminGeoAssignmentWhereInput[]
    OR?: AdminGeoAssignmentWhereInput[]
    NOT?: AdminGeoAssignmentWhereInput | AdminGeoAssignmentWhereInput[]
    userId?: StringFilter<"AdminGeoAssignment"> | string
    state?: StringFilter<"AdminGeoAssignment"> | string
    stateCode?: StringFilter<"AdminGeoAssignment"> | string
    district?: StringFilter<"AdminGeoAssignment"> | string
    districtCode?: StringFilter<"AdminGeoAssignment"> | string
    cityId?: StringFilter<"AdminGeoAssignment"> | string
    cityCode?: StringFilter<"AdminGeoAssignment"> | string
    cityName?: StringFilter<"AdminGeoAssignment"> | string
    localities?: JsonFilter<"AdminGeoAssignment">
    assignedAt?: DateTimeFilter<"AdminGeoAssignment"> | Date | string
    user?: XOR<AdminUserRelationFilter, AdminUserWhereInput>
  }, "id">

  export type AdminGeoAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    cityId?: SortOrder
    cityCode?: SortOrder
    cityName?: SortOrder
    localities?: SortOrder
    assignedAt?: SortOrder
    _count?: AdminGeoAssignmentCountOrderByAggregateInput
    _max?: AdminGeoAssignmentMaxOrderByAggregateInput
    _min?: AdminGeoAssignmentMinOrderByAggregateInput
  }

  export type AdminGeoAssignmentScalarWhereWithAggregatesInput = {
    AND?: AdminGeoAssignmentScalarWhereWithAggregatesInput | AdminGeoAssignmentScalarWhereWithAggregatesInput[]
    OR?: AdminGeoAssignmentScalarWhereWithAggregatesInput[]
    NOT?: AdminGeoAssignmentScalarWhereWithAggregatesInput | AdminGeoAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminGeoAssignment"> | string
    userId?: StringWithAggregatesFilter<"AdminGeoAssignment"> | string
    state?: StringWithAggregatesFilter<"AdminGeoAssignment"> | string
    stateCode?: StringWithAggregatesFilter<"AdminGeoAssignment"> | string
    district?: StringWithAggregatesFilter<"AdminGeoAssignment"> | string
    districtCode?: StringWithAggregatesFilter<"AdminGeoAssignment"> | string
    cityId?: StringWithAggregatesFilter<"AdminGeoAssignment"> | string
    cityCode?: StringWithAggregatesFilter<"AdminGeoAssignment"> | string
    cityName?: StringWithAggregatesFilter<"AdminGeoAssignment"> | string
    localities?: JsonWithAggregatesFilter<"AdminGeoAssignment">
    assignedAt?: DateTimeWithAggregatesFilter<"AdminGeoAssignment"> | Date | string
  }

  export type AdminAuditLogWhereInput = {
    AND?: AdminAuditLogWhereInput | AdminAuditLogWhereInput[]
    OR?: AdminAuditLogWhereInput[]
    NOT?: AdminAuditLogWhereInput | AdminAuditLogWhereInput[]
    id?: StringFilter<"AdminAuditLog"> | string
    operatorId?: StringNullableFilter<"AdminAuditLog"> | string | null
    operatorName?: StringFilter<"AdminAuditLog"> | string
    action?: StringFilter<"AdminAuditLog"> | string
    targetEntity?: StringFilter<"AdminAuditLog"> | string
    targetId?: StringFilter<"AdminAuditLog"> | string
    reasonCode?: StringFilter<"AdminAuditLog"> | string
    justification?: StringFilter<"AdminAuditLog"> | string
    previousHash?: StringNullableFilter<"AdminAuditLog"> | string | null
    recordHash?: StringNullableFilter<"AdminAuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AdminAuditLog"> | string | null
    userAgent?: StringNullableFilter<"AdminAuditLog"> | string | null
    timestamp?: DateTimeFilter<"AdminAuditLog"> | Date | string
    user?: XOR<AdminUserNullableRelationFilter, AdminUserWhereInput> | null
  }

  export type AdminAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    operatorId?: SortOrderInput | SortOrder
    operatorName?: SortOrder
    action?: SortOrder
    targetEntity?: SortOrder
    targetId?: SortOrder
    reasonCode?: SortOrder
    justification?: SortOrder
    previousHash?: SortOrderInput | SortOrder
    recordHash?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    user?: AdminUserOrderByWithRelationInput
  }

  export type AdminAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminAuditLogWhereInput | AdminAuditLogWhereInput[]
    OR?: AdminAuditLogWhereInput[]
    NOT?: AdminAuditLogWhereInput | AdminAuditLogWhereInput[]
    operatorId?: StringNullableFilter<"AdminAuditLog"> | string | null
    operatorName?: StringFilter<"AdminAuditLog"> | string
    action?: StringFilter<"AdminAuditLog"> | string
    targetEntity?: StringFilter<"AdminAuditLog"> | string
    targetId?: StringFilter<"AdminAuditLog"> | string
    reasonCode?: StringFilter<"AdminAuditLog"> | string
    justification?: StringFilter<"AdminAuditLog"> | string
    previousHash?: StringNullableFilter<"AdminAuditLog"> | string | null
    recordHash?: StringNullableFilter<"AdminAuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AdminAuditLog"> | string | null
    userAgent?: StringNullableFilter<"AdminAuditLog"> | string | null
    timestamp?: DateTimeFilter<"AdminAuditLog"> | Date | string
    user?: XOR<AdminUserNullableRelationFilter, AdminUserWhereInput> | null
  }, "id">

  export type AdminAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    operatorId?: SortOrderInput | SortOrder
    operatorName?: SortOrder
    action?: SortOrder
    targetEntity?: SortOrder
    targetId?: SortOrder
    reasonCode?: SortOrder
    justification?: SortOrder
    previousHash?: SortOrderInput | SortOrder
    recordHash?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: AdminAuditLogCountOrderByAggregateInput
    _max?: AdminAuditLogMaxOrderByAggregateInput
    _min?: AdminAuditLogMinOrderByAggregateInput
  }

  export type AdminAuditLogScalarWhereWithAggregatesInput = {
    AND?: AdminAuditLogScalarWhereWithAggregatesInput | AdminAuditLogScalarWhereWithAggregatesInput[]
    OR?: AdminAuditLogScalarWhereWithAggregatesInput[]
    NOT?: AdminAuditLogScalarWhereWithAggregatesInput | AdminAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    operatorId?: StringNullableWithAggregatesFilter<"AdminAuditLog"> | string | null
    operatorName?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    action?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    targetEntity?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    targetId?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    reasonCode?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    justification?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    previousHash?: StringNullableWithAggregatesFilter<"AdminAuditLog"> | string | null
    recordHash?: StringNullableWithAggregatesFilter<"AdminAuditLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AdminAuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AdminAuditLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"AdminAuditLog"> | Date | string
  }

  export type PiiAccessAuditLogWhereInput = {
    AND?: PiiAccessAuditLogWhereInput | PiiAccessAuditLogWhereInput[]
    OR?: PiiAccessAuditLogWhereInput[]
    NOT?: PiiAccessAuditLogWhereInput | PiiAccessAuditLogWhereInput[]
    id?: StringFilter<"PiiAccessAuditLog"> | string
    operatorId?: StringNullableFilter<"PiiAccessAuditLog"> | string | null
    targetEntity?: StringFilter<"PiiAccessAuditLog"> | string
    targetId?: StringFilter<"PiiAccessAuditLog"> | string
    accessedFields?: StringNullableListFilter<"PiiAccessAuditLog">
    purposeCode?: StringFilter<"PiiAccessAuditLog"> | string
    justification?: StringFilter<"PiiAccessAuditLog"> | string
    consentVerification?: StringNullableFilter<"PiiAccessAuditLog"> | string | null
    timestamp?: DateTimeFilter<"PiiAccessAuditLog"> | Date | string
    user?: XOR<AdminUserNullableRelationFilter, AdminUserWhereInput> | null
  }

  export type PiiAccessAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    operatorId?: SortOrderInput | SortOrder
    targetEntity?: SortOrder
    targetId?: SortOrder
    accessedFields?: SortOrder
    purposeCode?: SortOrder
    justification?: SortOrder
    consentVerification?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    user?: AdminUserOrderByWithRelationInput
  }

  export type PiiAccessAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PiiAccessAuditLogWhereInput | PiiAccessAuditLogWhereInput[]
    OR?: PiiAccessAuditLogWhereInput[]
    NOT?: PiiAccessAuditLogWhereInput | PiiAccessAuditLogWhereInput[]
    operatorId?: StringNullableFilter<"PiiAccessAuditLog"> | string | null
    targetEntity?: StringFilter<"PiiAccessAuditLog"> | string
    targetId?: StringFilter<"PiiAccessAuditLog"> | string
    accessedFields?: StringNullableListFilter<"PiiAccessAuditLog">
    purposeCode?: StringFilter<"PiiAccessAuditLog"> | string
    justification?: StringFilter<"PiiAccessAuditLog"> | string
    consentVerification?: StringNullableFilter<"PiiAccessAuditLog"> | string | null
    timestamp?: DateTimeFilter<"PiiAccessAuditLog"> | Date | string
    user?: XOR<AdminUserNullableRelationFilter, AdminUserWhereInput> | null
  }, "id">

  export type PiiAccessAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    operatorId?: SortOrderInput | SortOrder
    targetEntity?: SortOrder
    targetId?: SortOrder
    accessedFields?: SortOrder
    purposeCode?: SortOrder
    justification?: SortOrder
    consentVerification?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: PiiAccessAuditLogCountOrderByAggregateInput
    _max?: PiiAccessAuditLogMaxOrderByAggregateInput
    _min?: PiiAccessAuditLogMinOrderByAggregateInput
  }

  export type PiiAccessAuditLogScalarWhereWithAggregatesInput = {
    AND?: PiiAccessAuditLogScalarWhereWithAggregatesInput | PiiAccessAuditLogScalarWhereWithAggregatesInput[]
    OR?: PiiAccessAuditLogScalarWhereWithAggregatesInput[]
    NOT?: PiiAccessAuditLogScalarWhereWithAggregatesInput | PiiAccessAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PiiAccessAuditLog"> | string
    operatorId?: StringNullableWithAggregatesFilter<"PiiAccessAuditLog"> | string | null
    targetEntity?: StringWithAggregatesFilter<"PiiAccessAuditLog"> | string
    targetId?: StringWithAggregatesFilter<"PiiAccessAuditLog"> | string
    accessedFields?: StringNullableListFilter<"PiiAccessAuditLog">
    purposeCode?: StringWithAggregatesFilter<"PiiAccessAuditLog"> | string
    justification?: StringWithAggregatesFilter<"PiiAccessAuditLog"> | string
    consentVerification?: StringNullableWithAggregatesFilter<"PiiAccessAuditLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"PiiAccessAuditLog"> | Date | string
  }

  export type CustomerFavouriteWhereInput = {
    AND?: CustomerFavouriteWhereInput | CustomerFavouriteWhereInput[]
    OR?: CustomerFavouriteWhereInput[]
    NOT?: CustomerFavouriteWhereInput | CustomerFavouriteWhereInput[]
    id?: StringFilter<"CustomerFavourite"> | string
    userId?: StringFilter<"CustomerFavourite"> | string
    itemType?: StringFilter<"CustomerFavourite"> | string
    itemId?: StringFilter<"CustomerFavourite"> | string
    tenantId?: StringNullableFilter<"CustomerFavourite"> | string | null
    outletId?: StringNullableFilter<"CustomerFavourite"> | string | null
    metadata?: JsonNullableFilter<"CustomerFavourite">
    createdAt?: DateTimeFilter<"CustomerFavourite"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CustomerFavouriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    outletId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CustomerFavouriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_itemType_itemId?: CustomerFavouriteUserIdItemTypeItemIdCompoundUniqueInput
    AND?: CustomerFavouriteWhereInput | CustomerFavouriteWhereInput[]
    OR?: CustomerFavouriteWhereInput[]
    NOT?: CustomerFavouriteWhereInput | CustomerFavouriteWhereInput[]
    userId?: StringFilter<"CustomerFavourite"> | string
    itemType?: StringFilter<"CustomerFavourite"> | string
    itemId?: StringFilter<"CustomerFavourite"> | string
    tenantId?: StringNullableFilter<"CustomerFavourite"> | string | null
    outletId?: StringNullableFilter<"CustomerFavourite"> | string | null
    metadata?: JsonNullableFilter<"CustomerFavourite">
    createdAt?: DateTimeFilter<"CustomerFavourite"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_itemType_itemId">

  export type CustomerFavouriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    outletId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CustomerFavouriteCountOrderByAggregateInput
    _max?: CustomerFavouriteMaxOrderByAggregateInput
    _min?: CustomerFavouriteMinOrderByAggregateInput
  }

  export type CustomerFavouriteScalarWhereWithAggregatesInput = {
    AND?: CustomerFavouriteScalarWhereWithAggregatesInput | CustomerFavouriteScalarWhereWithAggregatesInput[]
    OR?: CustomerFavouriteScalarWhereWithAggregatesInput[]
    NOT?: CustomerFavouriteScalarWhereWithAggregatesInput | CustomerFavouriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerFavourite"> | string
    userId?: StringWithAggregatesFilter<"CustomerFavourite"> | string
    itemType?: StringWithAggregatesFilter<"CustomerFavourite"> | string
    itemId?: StringWithAggregatesFilter<"CustomerFavourite"> | string
    tenantId?: StringNullableWithAggregatesFilter<"CustomerFavourite"> | string | null
    outletId?: StringNullableWithAggregatesFilter<"CustomerFavourite"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"CustomerFavourite">
    createdAt?: DateTimeWithAggregatesFilter<"CustomerFavourite"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    phoneNumber: string
    email?: string | null
    fullName?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    addresses?: CustomerAddressCreateNestedManyWithoutUserInput
    favourites?: CustomerFavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    phoneNumber: string
    email?: string | null
    fullName?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    addresses?: CustomerAddressUncheckedCreateNestedManyWithoutUserInput
    favourites?: CustomerFavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    addresses?: CustomerAddressUpdateManyWithoutUserNestedInput
    favourites?: CustomerFavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    addresses?: CustomerAddressUncheckedUpdateManyWithoutUserNestedInput
    favourites?: CustomerFavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    phoneNumber: string
    email?: string | null
    fullName?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressCreateInput = {
    type?: string
    fullAddress: string
    landmark?: string | null
    city?: string
    pincode?: string
    latitude?: number | null
    longitude?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAddressesInput
  }

  export type CustomerAddressUncheckedCreateInput = {
    id?: number
    userId: string
    type?: string
    fullAddress: string
    landmark?: string | null
    city?: string
    pincode?: string
    latitude?: number | null
    longitude?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerAddressUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type CustomerAddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressCreateManyInput = {
    id?: number
    userId: string
    type?: string
    fullAddress: string
    landmark?: string | null
    city?: string
    pincode?: string
    latitude?: number | null
    longitude?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerAddressUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    tokenHash: string
    userAgent?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    userAgent?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    userAgent?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateInput = {
    id?: string
    tenantId: string
    outletId?: string | null
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateInput = {
    id?: string
    userId: string
    tenantId: string
    outletId?: string | null
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateManyInput = {
    id?: string
    userId: string
    tenantId: string
    outletId?: string | null
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventCreateInput = {
    id?: string
    actorId: string
    action: string
    targetType: string
    targetId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type AuditEventUncheckedCreateInput = {
    id?: string
    actorId: string
    action: string
    targetType: string
    targetId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type AuditEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventCreateManyInput = {
    id?: string
    actorId: string
    action: string
    targetType: string
    targetId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type AuditEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    status?: string
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: number
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roleAssignments?: AdminRoleAssignmentCreateNestedManyWithoutUserInput
    geoAssignments?: AdminGeoAssignmentCreateNestedManyWithoutUserInput
    auditLogs?: AdminAuditLogCreateNestedManyWithoutUserInput
    piiAccessLogs?: PiiAccessAuditLogCreateNestedManyWithoutUserInput
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    status?: string
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: number
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roleAssignments?: AdminRoleAssignmentUncheckedCreateNestedManyWithoutUserInput
    geoAssignments?: AdminGeoAssignmentUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AdminAuditLogUncheckedCreateNestedManyWithoutUserInput
    piiAccessLogs?: PiiAccessAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    isRootProtected?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleAssignments?: AdminRoleAssignmentUpdateManyWithoutUserNestedInput
    geoAssignments?: AdminGeoAssignmentUpdateManyWithoutUserNestedInput
    auditLogs?: AdminAuditLogUpdateManyWithoutUserNestedInput
    piiAccessLogs?: PiiAccessAuditLogUpdateManyWithoutUserNestedInput
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    isRootProtected?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleAssignments?: AdminRoleAssignmentUncheckedUpdateManyWithoutUserNestedInput
    geoAssignments?: AdminGeoAssignmentUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AdminAuditLogUncheckedUpdateManyWithoutUserNestedInput
    piiAccessLogs?: PiiAccessAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminUserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    status?: string
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: number
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    isRootProtected?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    isRootProtected?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRoleCreateInput = {
    id?: string
    code: string
    title: string
    subtitle?: string | null
    hierarchyLevel?: number
    description?: string | null
    requiresMfa?: boolean
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleAssignments?: AdminRoleAssignmentCreateNestedManyWithoutRoleInput
    rolePermissions?: AdminRolePermissionCreateNestedManyWithoutRoleInput
  }

  export type AdminRoleUncheckedCreateInput = {
    id?: string
    code: string
    title: string
    subtitle?: string | null
    hierarchyLevel?: number
    description?: string | null
    requiresMfa?: boolean
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleAssignments?: AdminRoleAssignmentUncheckedCreateNestedManyWithoutRoleInput
    rolePermissions?: AdminRolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type AdminRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchyLevel?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiresMfa?: BoolFieldUpdateOperationsInput | boolean
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleAssignments?: AdminRoleAssignmentUpdateManyWithoutRoleNestedInput
    rolePermissions?: AdminRolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type AdminRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchyLevel?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiresMfa?: BoolFieldUpdateOperationsInput | boolean
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleAssignments?: AdminRoleAssignmentUncheckedUpdateManyWithoutRoleNestedInput
    rolePermissions?: AdminRolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type AdminRoleCreateManyInput = {
    id?: string
    code: string
    title: string
    subtitle?: string | null
    hierarchyLevel?: number
    description?: string | null
    requiresMfa?: boolean
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchyLevel?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiresMfa?: BoolFieldUpdateOperationsInput | boolean
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchyLevel?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiresMfa?: BoolFieldUpdateOperationsInput | boolean
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminPermissionCreateInput = {
    id?: string
    code: string
    module: string
    description?: string | null
    rolePermissions?: AdminRolePermissionCreateNestedManyWithoutPermissionInput
  }

  export type AdminPermissionUncheckedCreateInput = {
    id?: string
    code: string
    module: string
    description?: string | null
    rolePermissions?: AdminRolePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type AdminPermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rolePermissions?: AdminRolePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type AdminPermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rolePermissions?: AdminRolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type AdminPermissionCreateManyInput = {
    id?: string
    code: string
    module: string
    description?: string | null
  }

  export type AdminPermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminPermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminRoleAssignmentCreateInput = {
    id?: string
    assignedAt?: Date | string
    user: AdminUserCreateNestedOneWithoutRoleAssignmentsInput
    role: AdminRoleCreateNestedOneWithoutRoleAssignmentsInput
  }

  export type AdminRoleAssignmentUncheckedCreateInput = {
    id?: string
    userId: string
    roleId: string
    assignedAt?: Date | string
  }

  export type AdminRoleAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AdminUserUpdateOneRequiredWithoutRoleAssignmentsNestedInput
    role?: AdminRoleUpdateOneRequiredWithoutRoleAssignmentsNestedInput
  }

  export type AdminRoleAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRoleAssignmentCreateManyInput = {
    id?: string
    userId: string
    roleId: string
    assignedAt?: Date | string
  }

  export type AdminRoleAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRoleAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRolePermissionCreateInput = {
    id?: string
    assignedAt?: Date | string
    role: AdminRoleCreateNestedOneWithoutRolePermissionsInput
    permission: AdminPermissionCreateNestedOneWithoutRolePermissionsInput
  }

  export type AdminRolePermissionUncheckedCreateInput = {
    id?: string
    roleId: string
    permissionId: string
    assignedAt?: Date | string
  }

  export type AdminRolePermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: AdminRoleUpdateOneRequiredWithoutRolePermissionsNestedInput
    permission?: AdminPermissionUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type AdminRolePermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRolePermissionCreateManyInput = {
    id?: string
    roleId: string
    permissionId: string
    assignedAt?: Date | string
  }

  export type AdminRolePermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRolePermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminGeoAssignmentCreateInput = {
    id?: string
    state: string
    stateCode?: string
    district: string
    districtCode?: string
    cityId: string
    cityCode?: string
    cityName: string
    localities: JsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
    user: AdminUserCreateNestedOneWithoutGeoAssignmentsInput
  }

  export type AdminGeoAssignmentUncheckedCreateInput = {
    id?: string
    userId: string
    state: string
    stateCode?: string
    district: string
    districtCode?: string
    cityId: string
    cityCode?: string
    cityName: string
    localities: JsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
  }

  export type AdminGeoAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    localities?: JsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AdminUserUpdateOneRequiredWithoutGeoAssignmentsNestedInput
  }

  export type AdminGeoAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    localities?: JsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminGeoAssignmentCreateManyInput = {
    id?: string
    userId: string
    state: string
    stateCode?: string
    district: string
    districtCode?: string
    cityId: string
    cityCode?: string
    cityName: string
    localities: JsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
  }

  export type AdminGeoAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    localities?: JsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminGeoAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    localities?: JsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAuditLogCreateInput = {
    id?: string
    operatorName: string
    action: string
    targetEntity: string
    targetId: string
    reasonCode: string
    justification: string
    previousHash?: string | null
    recordHash?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    timestamp?: Date | string
    user?: AdminUserCreateNestedOneWithoutAuditLogsInput
  }

  export type AdminAuditLogUncheckedCreateInput = {
    id?: string
    operatorId?: string | null
    operatorName: string
    action: string
    targetEntity: string
    targetId: string
    reasonCode: string
    justification: string
    previousHash?: string | null
    recordHash?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    timestamp?: Date | string
  }

  export type AdminAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    reasonCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    previousHash?: NullableStringFieldUpdateOperationsInput | string | null
    recordHash?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AdminUserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AdminAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: NullableStringFieldUpdateOperationsInput | string | null
    operatorName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    reasonCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    previousHash?: NullableStringFieldUpdateOperationsInput | string | null
    recordHash?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAuditLogCreateManyInput = {
    id?: string
    operatorId?: string | null
    operatorName: string
    action: string
    targetEntity: string
    targetId: string
    reasonCode: string
    justification: string
    previousHash?: string | null
    recordHash?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    timestamp?: Date | string
  }

  export type AdminAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    reasonCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    previousHash?: NullableStringFieldUpdateOperationsInput | string | null
    recordHash?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: NullableStringFieldUpdateOperationsInput | string | null
    operatorName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    reasonCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    previousHash?: NullableStringFieldUpdateOperationsInput | string | null
    recordHash?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiiAccessAuditLogCreateInput = {
    id?: string
    targetEntity: string
    targetId: string
    accessedFields?: PiiAccessAuditLogCreateaccessedFieldsInput | string[]
    purposeCode: string
    justification: string
    consentVerification?: string | null
    timestamp?: Date | string
    user?: AdminUserCreateNestedOneWithoutPiiAccessLogsInput
  }

  export type PiiAccessAuditLogUncheckedCreateInput = {
    id?: string
    operatorId?: string | null
    targetEntity: string
    targetId: string
    accessedFields?: PiiAccessAuditLogCreateaccessedFieldsInput | string[]
    purposeCode: string
    justification: string
    consentVerification?: string | null
    timestamp?: Date | string
  }

  export type PiiAccessAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    accessedFields?: PiiAccessAuditLogUpdateaccessedFieldsInput | string[]
    purposeCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    consentVerification?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AdminUserUpdateOneWithoutPiiAccessLogsNestedInput
  }

  export type PiiAccessAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: NullableStringFieldUpdateOperationsInput | string | null
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    accessedFields?: PiiAccessAuditLogUpdateaccessedFieldsInput | string[]
    purposeCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    consentVerification?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiiAccessAuditLogCreateManyInput = {
    id?: string
    operatorId?: string | null
    targetEntity: string
    targetId: string
    accessedFields?: PiiAccessAuditLogCreateaccessedFieldsInput | string[]
    purposeCode: string
    justification: string
    consentVerification?: string | null
    timestamp?: Date | string
  }

  export type PiiAccessAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    accessedFields?: PiiAccessAuditLogUpdateaccessedFieldsInput | string[]
    purposeCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    consentVerification?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiiAccessAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: NullableStringFieldUpdateOperationsInput | string | null
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    accessedFields?: PiiAccessAuditLogUpdateaccessedFieldsInput | string[]
    purposeCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    consentVerification?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerFavouriteCreateInput = {
    id?: string
    itemType: string
    itemId: string
    tenantId?: string | null
    outletId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavouritesInput
  }

  export type CustomerFavouriteUncheckedCreateInput = {
    id?: string
    userId: string
    itemType: string
    itemId: string
    tenantId?: string | null
    outletId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CustomerFavouriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type CustomerFavouriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerFavouriteCreateManyInput = {
    id?: string
    userId: string
    itemType: string
    itemId: string
    tenantId?: string | null
    outletId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CustomerFavouriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerFavouriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type MembershipListRelationFilter = {
    every?: MembershipWhereInput
    some?: MembershipWhereInput
    none?: MembershipWhereInput
  }

  export type CustomerAddressListRelationFilter = {
    every?: CustomerAddressWhereInput
    some?: CustomerAddressWhereInput
    none?: CustomerAddressWhereInput
  }

  export type CustomerFavouriteListRelationFilter = {
    every?: CustomerFavouriteWhereInput
    some?: CustomerFavouriteWhereInput
    none?: CustomerFavouriteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerFavouriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    status?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CustomerAddressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    fullAddress?: SortOrder
    landmark?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAddressAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CustomerAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    fullAddress?: SortOrder
    landmark?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAddressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    fullAddress?: SortOrder
    landmark?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAddressSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MembershipUserIdTenantIdRoleCompoundUniqueInput = {
    userId: string
    tenantId: string
    role: string
  }

  export type MembershipCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type AuditEventCountOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    metadata?: SortOrder
    occurredAt?: SortOrder
  }

  export type AuditEventMaxOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    occurredAt?: SortOrder
  }

  export type AuditEventMinOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    occurredAt?: SortOrder
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

  export type AdminRoleAssignmentListRelationFilter = {
    every?: AdminRoleAssignmentWhereInput
    some?: AdminRoleAssignmentWhereInput
    none?: AdminRoleAssignmentWhereInput
  }

  export type AdminGeoAssignmentListRelationFilter = {
    every?: AdminGeoAssignmentWhereInput
    some?: AdminGeoAssignmentWhereInput
    none?: AdminGeoAssignmentWhereInput
  }

  export type AdminAuditLogListRelationFilter = {
    every?: AdminAuditLogWhereInput
    some?: AdminAuditLogWhereInput
    none?: AdminAuditLogWhereInput
  }

  export type PiiAccessAuditLogListRelationFilter = {
    every?: PiiAccessAuditLogWhereInput
    some?: PiiAccessAuditLogWhereInput
    none?: PiiAccessAuditLogWhereInput
  }

  export type AdminRoleAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminGeoAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminAuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PiiAccessAuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    mfaEnabled?: SortOrder
    isRootProtected?: SortOrder
    tokenVersion?: SortOrder
    failedLoginAttempts?: SortOrder
    lockedUntil?: SortOrder
    lastLoginAt?: SortOrder
    lastLoginIp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserAvgOrderByAggregateInput = {
    tokenVersion?: SortOrder
    failedLoginAttempts?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    mfaEnabled?: SortOrder
    isRootProtected?: SortOrder
    tokenVersion?: SortOrder
    failedLoginAttempts?: SortOrder
    lockedUntil?: SortOrder
    lastLoginAt?: SortOrder
    lastLoginIp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    mfaEnabled?: SortOrder
    isRootProtected?: SortOrder
    tokenVersion?: SortOrder
    failedLoginAttempts?: SortOrder
    lockedUntil?: SortOrder
    lastLoginAt?: SortOrder
    lastLoginIp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserSumOrderByAggregateInput = {
    tokenVersion?: SortOrder
    failedLoginAttempts?: SortOrder
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

  export type AdminRolePermissionListRelationFilter = {
    every?: AdminRolePermissionWhereInput
    some?: AdminRolePermissionWhereInput
    none?: AdminRolePermissionWhereInput
  }

  export type AdminRolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminRoleCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    hierarchyLevel?: SortOrder
    description?: SortOrder
    requiresMfa?: SortOrder
    isSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminRoleAvgOrderByAggregateInput = {
    hierarchyLevel?: SortOrder
  }

  export type AdminRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    hierarchyLevel?: SortOrder
    description?: SortOrder
    requiresMfa?: SortOrder
    isSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminRoleMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    hierarchyLevel?: SortOrder
    description?: SortOrder
    requiresMfa?: SortOrder
    isSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminRoleSumOrderByAggregateInput = {
    hierarchyLevel?: SortOrder
  }

  export type AdminPermissionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    module?: SortOrder
    description?: SortOrder
  }

  export type AdminPermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    module?: SortOrder
    description?: SortOrder
  }

  export type AdminPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    module?: SortOrder
    description?: SortOrder
  }

  export type AdminUserRelationFilter = {
    is?: AdminUserWhereInput
    isNot?: AdminUserWhereInput
  }

  export type AdminRoleRelationFilter = {
    is?: AdminRoleWhereInput
    isNot?: AdminRoleWhereInput
  }

  export type AdminRoleAssignmentUserIdRoleIdCompoundUniqueInput = {
    userId: string
    roleId: string
  }

  export type AdminRoleAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    assignedAt?: SortOrder
  }

  export type AdminRoleAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    assignedAt?: SortOrder
  }

  export type AdminRoleAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    assignedAt?: SortOrder
  }

  export type AdminPermissionRelationFilter = {
    is?: AdminPermissionWhereInput
    isNot?: AdminPermissionWhereInput
  }

  export type AdminRolePermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: string
    permissionId: string
  }

  export type AdminRolePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    assignedAt?: SortOrder
  }

  export type AdminRolePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    assignedAt?: SortOrder
  }

  export type AdminRolePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    assignedAt?: SortOrder
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

  export type AdminGeoAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    cityId?: SortOrder
    cityCode?: SortOrder
    cityName?: SortOrder
    localities?: SortOrder
    assignedAt?: SortOrder
  }

  export type AdminGeoAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    cityId?: SortOrder
    cityCode?: SortOrder
    cityName?: SortOrder
    assignedAt?: SortOrder
  }

  export type AdminGeoAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    stateCode?: SortOrder
    district?: SortOrder
    districtCode?: SortOrder
    cityId?: SortOrder
    cityCode?: SortOrder
    cityName?: SortOrder
    assignedAt?: SortOrder
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

  export type AdminUserNullableRelationFilter = {
    is?: AdminUserWhereInput | null
    isNot?: AdminUserWhereInput | null
  }

  export type AdminAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    operatorName?: SortOrder
    action?: SortOrder
    targetEntity?: SortOrder
    targetId?: SortOrder
    reasonCode?: SortOrder
    justification?: SortOrder
    previousHash?: SortOrder
    recordHash?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
  }

  export type AdminAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    operatorName?: SortOrder
    action?: SortOrder
    targetEntity?: SortOrder
    targetId?: SortOrder
    reasonCode?: SortOrder
    justification?: SortOrder
    previousHash?: SortOrder
    recordHash?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
  }

  export type AdminAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    operatorName?: SortOrder
    action?: SortOrder
    targetEntity?: SortOrder
    targetId?: SortOrder
    reasonCode?: SortOrder
    justification?: SortOrder
    previousHash?: SortOrder
    recordHash?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PiiAccessAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    targetEntity?: SortOrder
    targetId?: SortOrder
    accessedFields?: SortOrder
    purposeCode?: SortOrder
    justification?: SortOrder
    consentVerification?: SortOrder
    timestamp?: SortOrder
  }

  export type PiiAccessAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    targetEntity?: SortOrder
    targetId?: SortOrder
    purposeCode?: SortOrder
    justification?: SortOrder
    consentVerification?: SortOrder
    timestamp?: SortOrder
  }

  export type PiiAccessAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    targetEntity?: SortOrder
    targetId?: SortOrder
    purposeCode?: SortOrder
    justification?: SortOrder
    consentVerification?: SortOrder
    timestamp?: SortOrder
  }

  export type CustomerFavouriteUserIdItemTypeItemIdCompoundUniqueInput = {
    userId: string
    itemType: string
    itemId: string
  }

  export type CustomerFavouriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerFavouriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerFavouriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type MembershipCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type CustomerAddressCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerAddressCreateWithoutUserInput, CustomerAddressUncheckedCreateWithoutUserInput> | CustomerAddressCreateWithoutUserInput[] | CustomerAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutUserInput | CustomerAddressCreateOrConnectWithoutUserInput[]
    createMany?: CustomerAddressCreateManyUserInputEnvelope
    connect?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
  }

  export type CustomerFavouriteCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerFavouriteCreateWithoutUserInput, CustomerFavouriteUncheckedCreateWithoutUserInput> | CustomerFavouriteCreateWithoutUserInput[] | CustomerFavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerFavouriteCreateOrConnectWithoutUserInput | CustomerFavouriteCreateOrConnectWithoutUserInput[]
    createMany?: CustomerFavouriteCreateManyUserInputEnvelope
    connect?: CustomerFavouriteWhereUniqueInput | CustomerFavouriteWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type CustomerAddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerAddressCreateWithoutUserInput, CustomerAddressUncheckedCreateWithoutUserInput> | CustomerAddressCreateWithoutUserInput[] | CustomerAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutUserInput | CustomerAddressCreateOrConnectWithoutUserInput[]
    createMany?: CustomerAddressCreateManyUserInputEnvelope
    connect?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
  }

  export type CustomerFavouriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerFavouriteCreateWithoutUserInput, CustomerFavouriteUncheckedCreateWithoutUserInput> | CustomerFavouriteCreateWithoutUserInput[] | CustomerFavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerFavouriteCreateOrConnectWithoutUserInput | CustomerFavouriteCreateOrConnectWithoutUserInput[]
    createMany?: CustomerFavouriteCreateManyUserInputEnvelope
    connect?: CustomerFavouriteWhereUniqueInput | CustomerFavouriteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type MembershipUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput | MembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutUserInput | MembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutUserInput | MembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type CustomerAddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerAddressCreateWithoutUserInput, CustomerAddressUncheckedCreateWithoutUserInput> | CustomerAddressCreateWithoutUserInput[] | CustomerAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutUserInput | CustomerAddressCreateOrConnectWithoutUserInput[]
    upsert?: CustomerAddressUpsertWithWhereUniqueWithoutUserInput | CustomerAddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerAddressCreateManyUserInputEnvelope
    set?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    disconnect?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    delete?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    connect?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    update?: CustomerAddressUpdateWithWhereUniqueWithoutUserInput | CustomerAddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerAddressUpdateManyWithWhereWithoutUserInput | CustomerAddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerAddressScalarWhereInput | CustomerAddressScalarWhereInput[]
  }

  export type CustomerFavouriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerFavouriteCreateWithoutUserInput, CustomerFavouriteUncheckedCreateWithoutUserInput> | CustomerFavouriteCreateWithoutUserInput[] | CustomerFavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerFavouriteCreateOrConnectWithoutUserInput | CustomerFavouriteCreateOrConnectWithoutUserInput[]
    upsert?: CustomerFavouriteUpsertWithWhereUniqueWithoutUserInput | CustomerFavouriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerFavouriteCreateManyUserInputEnvelope
    set?: CustomerFavouriteWhereUniqueInput | CustomerFavouriteWhereUniqueInput[]
    disconnect?: CustomerFavouriteWhereUniqueInput | CustomerFavouriteWhereUniqueInput[]
    delete?: CustomerFavouriteWhereUniqueInput | CustomerFavouriteWhereUniqueInput[]
    connect?: CustomerFavouriteWhereUniqueInput | CustomerFavouriteWhereUniqueInput[]
    update?: CustomerFavouriteUpdateWithWhereUniqueWithoutUserInput | CustomerFavouriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerFavouriteUpdateManyWithWhereWithoutUserInput | CustomerFavouriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerFavouriteScalarWhereInput | CustomerFavouriteScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput | MembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutUserInput | MembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutUserInput | MembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type CustomerAddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerAddressCreateWithoutUserInput, CustomerAddressUncheckedCreateWithoutUserInput> | CustomerAddressCreateWithoutUserInput[] | CustomerAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutUserInput | CustomerAddressCreateOrConnectWithoutUserInput[]
    upsert?: CustomerAddressUpsertWithWhereUniqueWithoutUserInput | CustomerAddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerAddressCreateManyUserInputEnvelope
    set?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    disconnect?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    delete?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    connect?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    update?: CustomerAddressUpdateWithWhereUniqueWithoutUserInput | CustomerAddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerAddressUpdateManyWithWhereWithoutUserInput | CustomerAddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerAddressScalarWhereInput | CustomerAddressScalarWhereInput[]
  }

  export type CustomerFavouriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerFavouriteCreateWithoutUserInput, CustomerFavouriteUncheckedCreateWithoutUserInput> | CustomerFavouriteCreateWithoutUserInput[] | CustomerFavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerFavouriteCreateOrConnectWithoutUserInput | CustomerFavouriteCreateOrConnectWithoutUserInput[]
    upsert?: CustomerFavouriteUpsertWithWhereUniqueWithoutUserInput | CustomerFavouriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerFavouriteCreateManyUserInputEnvelope
    set?: CustomerFavouriteWhereUniqueInput | CustomerFavouriteWhereUniqueInput[]
    disconnect?: CustomerFavouriteWhereUniqueInput | CustomerFavouriteWhereUniqueInput[]
    delete?: CustomerFavouriteWhereUniqueInput | CustomerFavouriteWhereUniqueInput[]
    connect?: CustomerFavouriteWhereUniqueInput | CustomerFavouriteWhereUniqueInput[]
    update?: CustomerFavouriteUpdateWithWhereUniqueWithoutUserInput | CustomerFavouriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerFavouriteUpdateManyWithWhereWithoutUserInput | CustomerFavouriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerFavouriteScalarWhereInput | CustomerFavouriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAddressesInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    upsert?: UserUpsertWithoutAddressesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressesInput, UserUpdateWithoutAddressesInput>, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type AdminRoleAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminRoleAssignmentCreateWithoutUserInput, AdminRoleAssignmentUncheckedCreateWithoutUserInput> | AdminRoleAssignmentCreateWithoutUserInput[] | AdminRoleAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminRoleAssignmentCreateOrConnectWithoutUserInput | AdminRoleAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: AdminRoleAssignmentCreateManyUserInputEnvelope
    connect?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
  }

  export type AdminGeoAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminGeoAssignmentCreateWithoutUserInput, AdminGeoAssignmentUncheckedCreateWithoutUserInput> | AdminGeoAssignmentCreateWithoutUserInput[] | AdminGeoAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminGeoAssignmentCreateOrConnectWithoutUserInput | AdminGeoAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: AdminGeoAssignmentCreateManyUserInputEnvelope
    connect?: AdminGeoAssignmentWhereUniqueInput | AdminGeoAssignmentWhereUniqueInput[]
  }

  export type AdminAuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminAuditLogCreateWithoutUserInput, AdminAuditLogUncheckedCreateWithoutUserInput> | AdminAuditLogCreateWithoutUserInput[] | AdminAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminAuditLogCreateOrConnectWithoutUserInput | AdminAuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AdminAuditLogCreateManyUserInputEnvelope
    connect?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
  }

  export type PiiAccessAuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<PiiAccessAuditLogCreateWithoutUserInput, PiiAccessAuditLogUncheckedCreateWithoutUserInput> | PiiAccessAuditLogCreateWithoutUserInput[] | PiiAccessAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PiiAccessAuditLogCreateOrConnectWithoutUserInput | PiiAccessAuditLogCreateOrConnectWithoutUserInput[]
    createMany?: PiiAccessAuditLogCreateManyUserInputEnvelope
    connect?: PiiAccessAuditLogWhereUniqueInput | PiiAccessAuditLogWhereUniqueInput[]
  }

  export type AdminRoleAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminRoleAssignmentCreateWithoutUserInput, AdminRoleAssignmentUncheckedCreateWithoutUserInput> | AdminRoleAssignmentCreateWithoutUserInput[] | AdminRoleAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminRoleAssignmentCreateOrConnectWithoutUserInput | AdminRoleAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: AdminRoleAssignmentCreateManyUserInputEnvelope
    connect?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
  }

  export type AdminGeoAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminGeoAssignmentCreateWithoutUserInput, AdminGeoAssignmentUncheckedCreateWithoutUserInput> | AdminGeoAssignmentCreateWithoutUserInput[] | AdminGeoAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminGeoAssignmentCreateOrConnectWithoutUserInput | AdminGeoAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: AdminGeoAssignmentCreateManyUserInputEnvelope
    connect?: AdminGeoAssignmentWhereUniqueInput | AdminGeoAssignmentWhereUniqueInput[]
  }

  export type AdminAuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminAuditLogCreateWithoutUserInput, AdminAuditLogUncheckedCreateWithoutUserInput> | AdminAuditLogCreateWithoutUserInput[] | AdminAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminAuditLogCreateOrConnectWithoutUserInput | AdminAuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AdminAuditLogCreateManyUserInputEnvelope
    connect?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
  }

  export type PiiAccessAuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PiiAccessAuditLogCreateWithoutUserInput, PiiAccessAuditLogUncheckedCreateWithoutUserInput> | PiiAccessAuditLogCreateWithoutUserInput[] | PiiAccessAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PiiAccessAuditLogCreateOrConnectWithoutUserInput | PiiAccessAuditLogCreateOrConnectWithoutUserInput[]
    createMany?: PiiAccessAuditLogCreateManyUserInputEnvelope
    connect?: PiiAccessAuditLogWhereUniqueInput | PiiAccessAuditLogWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AdminRoleAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminRoleAssignmentCreateWithoutUserInput, AdminRoleAssignmentUncheckedCreateWithoutUserInput> | AdminRoleAssignmentCreateWithoutUserInput[] | AdminRoleAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminRoleAssignmentCreateOrConnectWithoutUserInput | AdminRoleAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: AdminRoleAssignmentUpsertWithWhereUniqueWithoutUserInput | AdminRoleAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminRoleAssignmentCreateManyUserInputEnvelope
    set?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    disconnect?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    delete?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    connect?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    update?: AdminRoleAssignmentUpdateWithWhereUniqueWithoutUserInput | AdminRoleAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminRoleAssignmentUpdateManyWithWhereWithoutUserInput | AdminRoleAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminRoleAssignmentScalarWhereInput | AdminRoleAssignmentScalarWhereInput[]
  }

  export type AdminGeoAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminGeoAssignmentCreateWithoutUserInput, AdminGeoAssignmentUncheckedCreateWithoutUserInput> | AdminGeoAssignmentCreateWithoutUserInput[] | AdminGeoAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminGeoAssignmentCreateOrConnectWithoutUserInput | AdminGeoAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: AdminGeoAssignmentUpsertWithWhereUniqueWithoutUserInput | AdminGeoAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminGeoAssignmentCreateManyUserInputEnvelope
    set?: AdminGeoAssignmentWhereUniqueInput | AdminGeoAssignmentWhereUniqueInput[]
    disconnect?: AdminGeoAssignmentWhereUniqueInput | AdminGeoAssignmentWhereUniqueInput[]
    delete?: AdminGeoAssignmentWhereUniqueInput | AdminGeoAssignmentWhereUniqueInput[]
    connect?: AdminGeoAssignmentWhereUniqueInput | AdminGeoAssignmentWhereUniqueInput[]
    update?: AdminGeoAssignmentUpdateWithWhereUniqueWithoutUserInput | AdminGeoAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminGeoAssignmentUpdateManyWithWhereWithoutUserInput | AdminGeoAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminGeoAssignmentScalarWhereInput | AdminGeoAssignmentScalarWhereInput[]
  }

  export type AdminAuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminAuditLogCreateWithoutUserInput, AdminAuditLogUncheckedCreateWithoutUserInput> | AdminAuditLogCreateWithoutUserInput[] | AdminAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminAuditLogCreateOrConnectWithoutUserInput | AdminAuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AdminAuditLogUpsertWithWhereUniqueWithoutUserInput | AdminAuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminAuditLogCreateManyUserInputEnvelope
    set?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    disconnect?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    delete?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    connect?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    update?: AdminAuditLogUpdateWithWhereUniqueWithoutUserInput | AdminAuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminAuditLogUpdateManyWithWhereWithoutUserInput | AdminAuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminAuditLogScalarWhereInput | AdminAuditLogScalarWhereInput[]
  }

  export type PiiAccessAuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<PiiAccessAuditLogCreateWithoutUserInput, PiiAccessAuditLogUncheckedCreateWithoutUserInput> | PiiAccessAuditLogCreateWithoutUserInput[] | PiiAccessAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PiiAccessAuditLogCreateOrConnectWithoutUserInput | PiiAccessAuditLogCreateOrConnectWithoutUserInput[]
    upsert?: PiiAccessAuditLogUpsertWithWhereUniqueWithoutUserInput | PiiAccessAuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PiiAccessAuditLogCreateManyUserInputEnvelope
    set?: PiiAccessAuditLogWhereUniqueInput | PiiAccessAuditLogWhereUniqueInput[]
    disconnect?: PiiAccessAuditLogWhereUniqueInput | PiiAccessAuditLogWhereUniqueInput[]
    delete?: PiiAccessAuditLogWhereUniqueInput | PiiAccessAuditLogWhereUniqueInput[]
    connect?: PiiAccessAuditLogWhereUniqueInput | PiiAccessAuditLogWhereUniqueInput[]
    update?: PiiAccessAuditLogUpdateWithWhereUniqueWithoutUserInput | PiiAccessAuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PiiAccessAuditLogUpdateManyWithWhereWithoutUserInput | PiiAccessAuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PiiAccessAuditLogScalarWhereInput | PiiAccessAuditLogScalarWhereInput[]
  }

  export type AdminRoleAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminRoleAssignmentCreateWithoutUserInput, AdminRoleAssignmentUncheckedCreateWithoutUserInput> | AdminRoleAssignmentCreateWithoutUserInput[] | AdminRoleAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminRoleAssignmentCreateOrConnectWithoutUserInput | AdminRoleAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: AdminRoleAssignmentUpsertWithWhereUniqueWithoutUserInput | AdminRoleAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminRoleAssignmentCreateManyUserInputEnvelope
    set?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    disconnect?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    delete?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    connect?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    update?: AdminRoleAssignmentUpdateWithWhereUniqueWithoutUserInput | AdminRoleAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminRoleAssignmentUpdateManyWithWhereWithoutUserInput | AdminRoleAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminRoleAssignmentScalarWhereInput | AdminRoleAssignmentScalarWhereInput[]
  }

  export type AdminGeoAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminGeoAssignmentCreateWithoutUserInput, AdminGeoAssignmentUncheckedCreateWithoutUserInput> | AdminGeoAssignmentCreateWithoutUserInput[] | AdminGeoAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminGeoAssignmentCreateOrConnectWithoutUserInput | AdminGeoAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: AdminGeoAssignmentUpsertWithWhereUniqueWithoutUserInput | AdminGeoAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminGeoAssignmentCreateManyUserInputEnvelope
    set?: AdminGeoAssignmentWhereUniqueInput | AdminGeoAssignmentWhereUniqueInput[]
    disconnect?: AdminGeoAssignmentWhereUniqueInput | AdminGeoAssignmentWhereUniqueInput[]
    delete?: AdminGeoAssignmentWhereUniqueInput | AdminGeoAssignmentWhereUniqueInput[]
    connect?: AdminGeoAssignmentWhereUniqueInput | AdminGeoAssignmentWhereUniqueInput[]
    update?: AdminGeoAssignmentUpdateWithWhereUniqueWithoutUserInput | AdminGeoAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminGeoAssignmentUpdateManyWithWhereWithoutUserInput | AdminGeoAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminGeoAssignmentScalarWhereInput | AdminGeoAssignmentScalarWhereInput[]
  }

  export type AdminAuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminAuditLogCreateWithoutUserInput, AdminAuditLogUncheckedCreateWithoutUserInput> | AdminAuditLogCreateWithoutUserInput[] | AdminAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminAuditLogCreateOrConnectWithoutUserInput | AdminAuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AdminAuditLogUpsertWithWhereUniqueWithoutUserInput | AdminAuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminAuditLogCreateManyUserInputEnvelope
    set?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    disconnect?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    delete?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    connect?: AdminAuditLogWhereUniqueInput | AdminAuditLogWhereUniqueInput[]
    update?: AdminAuditLogUpdateWithWhereUniqueWithoutUserInput | AdminAuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminAuditLogUpdateManyWithWhereWithoutUserInput | AdminAuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminAuditLogScalarWhereInput | AdminAuditLogScalarWhereInput[]
  }

  export type PiiAccessAuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PiiAccessAuditLogCreateWithoutUserInput, PiiAccessAuditLogUncheckedCreateWithoutUserInput> | PiiAccessAuditLogCreateWithoutUserInput[] | PiiAccessAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PiiAccessAuditLogCreateOrConnectWithoutUserInput | PiiAccessAuditLogCreateOrConnectWithoutUserInput[]
    upsert?: PiiAccessAuditLogUpsertWithWhereUniqueWithoutUserInput | PiiAccessAuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PiiAccessAuditLogCreateManyUserInputEnvelope
    set?: PiiAccessAuditLogWhereUniqueInput | PiiAccessAuditLogWhereUniqueInput[]
    disconnect?: PiiAccessAuditLogWhereUniqueInput | PiiAccessAuditLogWhereUniqueInput[]
    delete?: PiiAccessAuditLogWhereUniqueInput | PiiAccessAuditLogWhereUniqueInput[]
    connect?: PiiAccessAuditLogWhereUniqueInput | PiiAccessAuditLogWhereUniqueInput[]
    update?: PiiAccessAuditLogUpdateWithWhereUniqueWithoutUserInput | PiiAccessAuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PiiAccessAuditLogUpdateManyWithWhereWithoutUserInput | PiiAccessAuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PiiAccessAuditLogScalarWhereInput | PiiAccessAuditLogScalarWhereInput[]
  }

  export type AdminRoleAssignmentCreateNestedManyWithoutRoleInput = {
    create?: XOR<AdminRoleAssignmentCreateWithoutRoleInput, AdminRoleAssignmentUncheckedCreateWithoutRoleInput> | AdminRoleAssignmentCreateWithoutRoleInput[] | AdminRoleAssignmentUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AdminRoleAssignmentCreateOrConnectWithoutRoleInput | AdminRoleAssignmentCreateOrConnectWithoutRoleInput[]
    createMany?: AdminRoleAssignmentCreateManyRoleInputEnvelope
    connect?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
  }

  export type AdminRolePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<AdminRolePermissionCreateWithoutRoleInput, AdminRolePermissionUncheckedCreateWithoutRoleInput> | AdminRolePermissionCreateWithoutRoleInput[] | AdminRolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AdminRolePermissionCreateOrConnectWithoutRoleInput | AdminRolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: AdminRolePermissionCreateManyRoleInputEnvelope
    connect?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
  }

  export type AdminRoleAssignmentUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<AdminRoleAssignmentCreateWithoutRoleInput, AdminRoleAssignmentUncheckedCreateWithoutRoleInput> | AdminRoleAssignmentCreateWithoutRoleInput[] | AdminRoleAssignmentUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AdminRoleAssignmentCreateOrConnectWithoutRoleInput | AdminRoleAssignmentCreateOrConnectWithoutRoleInput[]
    createMany?: AdminRoleAssignmentCreateManyRoleInputEnvelope
    connect?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
  }

  export type AdminRolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<AdminRolePermissionCreateWithoutRoleInput, AdminRolePermissionUncheckedCreateWithoutRoleInput> | AdminRolePermissionCreateWithoutRoleInput[] | AdminRolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AdminRolePermissionCreateOrConnectWithoutRoleInput | AdminRolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: AdminRolePermissionCreateManyRoleInputEnvelope
    connect?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
  }

  export type AdminRoleAssignmentUpdateManyWithoutRoleNestedInput = {
    create?: XOR<AdminRoleAssignmentCreateWithoutRoleInput, AdminRoleAssignmentUncheckedCreateWithoutRoleInput> | AdminRoleAssignmentCreateWithoutRoleInput[] | AdminRoleAssignmentUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AdminRoleAssignmentCreateOrConnectWithoutRoleInput | AdminRoleAssignmentCreateOrConnectWithoutRoleInput[]
    upsert?: AdminRoleAssignmentUpsertWithWhereUniqueWithoutRoleInput | AdminRoleAssignmentUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: AdminRoleAssignmentCreateManyRoleInputEnvelope
    set?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    disconnect?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    delete?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    connect?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    update?: AdminRoleAssignmentUpdateWithWhereUniqueWithoutRoleInput | AdminRoleAssignmentUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: AdminRoleAssignmentUpdateManyWithWhereWithoutRoleInput | AdminRoleAssignmentUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: AdminRoleAssignmentScalarWhereInput | AdminRoleAssignmentScalarWhereInput[]
  }

  export type AdminRolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<AdminRolePermissionCreateWithoutRoleInput, AdminRolePermissionUncheckedCreateWithoutRoleInput> | AdminRolePermissionCreateWithoutRoleInput[] | AdminRolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AdminRolePermissionCreateOrConnectWithoutRoleInput | AdminRolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: AdminRolePermissionUpsertWithWhereUniqueWithoutRoleInput | AdminRolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: AdminRolePermissionCreateManyRoleInputEnvelope
    set?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    disconnect?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    delete?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    connect?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    update?: AdminRolePermissionUpdateWithWhereUniqueWithoutRoleInput | AdminRolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: AdminRolePermissionUpdateManyWithWhereWithoutRoleInput | AdminRolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: AdminRolePermissionScalarWhereInput | AdminRolePermissionScalarWhereInput[]
  }

  export type AdminRoleAssignmentUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<AdminRoleAssignmentCreateWithoutRoleInput, AdminRoleAssignmentUncheckedCreateWithoutRoleInput> | AdminRoleAssignmentCreateWithoutRoleInput[] | AdminRoleAssignmentUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AdminRoleAssignmentCreateOrConnectWithoutRoleInput | AdminRoleAssignmentCreateOrConnectWithoutRoleInput[]
    upsert?: AdminRoleAssignmentUpsertWithWhereUniqueWithoutRoleInput | AdminRoleAssignmentUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: AdminRoleAssignmentCreateManyRoleInputEnvelope
    set?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    disconnect?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    delete?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    connect?: AdminRoleAssignmentWhereUniqueInput | AdminRoleAssignmentWhereUniqueInput[]
    update?: AdminRoleAssignmentUpdateWithWhereUniqueWithoutRoleInput | AdminRoleAssignmentUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: AdminRoleAssignmentUpdateManyWithWhereWithoutRoleInput | AdminRoleAssignmentUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: AdminRoleAssignmentScalarWhereInput | AdminRoleAssignmentScalarWhereInput[]
  }

  export type AdminRolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<AdminRolePermissionCreateWithoutRoleInput, AdminRolePermissionUncheckedCreateWithoutRoleInput> | AdminRolePermissionCreateWithoutRoleInput[] | AdminRolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AdminRolePermissionCreateOrConnectWithoutRoleInput | AdminRolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: AdminRolePermissionUpsertWithWhereUniqueWithoutRoleInput | AdminRolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: AdminRolePermissionCreateManyRoleInputEnvelope
    set?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    disconnect?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    delete?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    connect?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    update?: AdminRolePermissionUpdateWithWhereUniqueWithoutRoleInput | AdminRolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: AdminRolePermissionUpdateManyWithWhereWithoutRoleInput | AdminRolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: AdminRolePermissionScalarWhereInput | AdminRolePermissionScalarWhereInput[]
  }

  export type AdminRolePermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<AdminRolePermissionCreateWithoutPermissionInput, AdminRolePermissionUncheckedCreateWithoutPermissionInput> | AdminRolePermissionCreateWithoutPermissionInput[] | AdminRolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: AdminRolePermissionCreateOrConnectWithoutPermissionInput | AdminRolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: AdminRolePermissionCreateManyPermissionInputEnvelope
    connect?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
  }

  export type AdminRolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<AdminRolePermissionCreateWithoutPermissionInput, AdminRolePermissionUncheckedCreateWithoutPermissionInput> | AdminRolePermissionCreateWithoutPermissionInput[] | AdminRolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: AdminRolePermissionCreateOrConnectWithoutPermissionInput | AdminRolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: AdminRolePermissionCreateManyPermissionInputEnvelope
    connect?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
  }

  export type AdminRolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<AdminRolePermissionCreateWithoutPermissionInput, AdminRolePermissionUncheckedCreateWithoutPermissionInput> | AdminRolePermissionCreateWithoutPermissionInput[] | AdminRolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: AdminRolePermissionCreateOrConnectWithoutPermissionInput | AdminRolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: AdminRolePermissionUpsertWithWhereUniqueWithoutPermissionInput | AdminRolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: AdminRolePermissionCreateManyPermissionInputEnvelope
    set?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    disconnect?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    delete?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    connect?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    update?: AdminRolePermissionUpdateWithWhereUniqueWithoutPermissionInput | AdminRolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: AdminRolePermissionUpdateManyWithWhereWithoutPermissionInput | AdminRolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: AdminRolePermissionScalarWhereInput | AdminRolePermissionScalarWhereInput[]
  }

  export type AdminRolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<AdminRolePermissionCreateWithoutPermissionInput, AdminRolePermissionUncheckedCreateWithoutPermissionInput> | AdminRolePermissionCreateWithoutPermissionInput[] | AdminRolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: AdminRolePermissionCreateOrConnectWithoutPermissionInput | AdminRolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: AdminRolePermissionUpsertWithWhereUniqueWithoutPermissionInput | AdminRolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: AdminRolePermissionCreateManyPermissionInputEnvelope
    set?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    disconnect?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    delete?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    connect?: AdminRolePermissionWhereUniqueInput | AdminRolePermissionWhereUniqueInput[]
    update?: AdminRolePermissionUpdateWithWhereUniqueWithoutPermissionInput | AdminRolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: AdminRolePermissionUpdateManyWithWhereWithoutPermissionInput | AdminRolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: AdminRolePermissionScalarWhereInput | AdminRolePermissionScalarWhereInput[]
  }

  export type AdminUserCreateNestedOneWithoutRoleAssignmentsInput = {
    create?: XOR<AdminUserCreateWithoutRoleAssignmentsInput, AdminUserUncheckedCreateWithoutRoleAssignmentsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutRoleAssignmentsInput
    connect?: AdminUserWhereUniqueInput
  }

  export type AdminRoleCreateNestedOneWithoutRoleAssignmentsInput = {
    create?: XOR<AdminRoleCreateWithoutRoleAssignmentsInput, AdminRoleUncheckedCreateWithoutRoleAssignmentsInput>
    connectOrCreate?: AdminRoleCreateOrConnectWithoutRoleAssignmentsInput
    connect?: AdminRoleWhereUniqueInput
  }

  export type AdminUserUpdateOneRequiredWithoutRoleAssignmentsNestedInput = {
    create?: XOR<AdminUserCreateWithoutRoleAssignmentsInput, AdminUserUncheckedCreateWithoutRoleAssignmentsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutRoleAssignmentsInput
    upsert?: AdminUserUpsertWithoutRoleAssignmentsInput
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutRoleAssignmentsInput, AdminUserUpdateWithoutRoleAssignmentsInput>, AdminUserUncheckedUpdateWithoutRoleAssignmentsInput>
  }

  export type AdminRoleUpdateOneRequiredWithoutRoleAssignmentsNestedInput = {
    create?: XOR<AdminRoleCreateWithoutRoleAssignmentsInput, AdminRoleUncheckedCreateWithoutRoleAssignmentsInput>
    connectOrCreate?: AdminRoleCreateOrConnectWithoutRoleAssignmentsInput
    upsert?: AdminRoleUpsertWithoutRoleAssignmentsInput
    connect?: AdminRoleWhereUniqueInput
    update?: XOR<XOR<AdminRoleUpdateToOneWithWhereWithoutRoleAssignmentsInput, AdminRoleUpdateWithoutRoleAssignmentsInput>, AdminRoleUncheckedUpdateWithoutRoleAssignmentsInput>
  }

  export type AdminRoleCreateNestedOneWithoutRolePermissionsInput = {
    create?: XOR<AdminRoleCreateWithoutRolePermissionsInput, AdminRoleUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: AdminRoleCreateOrConnectWithoutRolePermissionsInput
    connect?: AdminRoleWhereUniqueInput
  }

  export type AdminPermissionCreateNestedOneWithoutRolePermissionsInput = {
    create?: XOR<AdminPermissionCreateWithoutRolePermissionsInput, AdminPermissionUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: AdminPermissionCreateOrConnectWithoutRolePermissionsInput
    connect?: AdminPermissionWhereUniqueInput
  }

  export type AdminRoleUpdateOneRequiredWithoutRolePermissionsNestedInput = {
    create?: XOR<AdminRoleCreateWithoutRolePermissionsInput, AdminRoleUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: AdminRoleCreateOrConnectWithoutRolePermissionsInput
    upsert?: AdminRoleUpsertWithoutRolePermissionsInput
    connect?: AdminRoleWhereUniqueInput
    update?: XOR<XOR<AdminRoleUpdateToOneWithWhereWithoutRolePermissionsInput, AdminRoleUpdateWithoutRolePermissionsInput>, AdminRoleUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type AdminPermissionUpdateOneRequiredWithoutRolePermissionsNestedInput = {
    create?: XOR<AdminPermissionCreateWithoutRolePermissionsInput, AdminPermissionUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: AdminPermissionCreateOrConnectWithoutRolePermissionsInput
    upsert?: AdminPermissionUpsertWithoutRolePermissionsInput
    connect?: AdminPermissionWhereUniqueInput
    update?: XOR<XOR<AdminPermissionUpdateToOneWithWhereWithoutRolePermissionsInput, AdminPermissionUpdateWithoutRolePermissionsInput>, AdminPermissionUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type AdminUserCreateNestedOneWithoutGeoAssignmentsInput = {
    create?: XOR<AdminUserCreateWithoutGeoAssignmentsInput, AdminUserUncheckedCreateWithoutGeoAssignmentsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutGeoAssignmentsInput
    connect?: AdminUserWhereUniqueInput
  }

  export type AdminUserUpdateOneRequiredWithoutGeoAssignmentsNestedInput = {
    create?: XOR<AdminUserCreateWithoutGeoAssignmentsInput, AdminUserUncheckedCreateWithoutGeoAssignmentsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutGeoAssignmentsInput
    upsert?: AdminUserUpsertWithoutGeoAssignmentsInput
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutGeoAssignmentsInput, AdminUserUpdateWithoutGeoAssignmentsInput>, AdminUserUncheckedUpdateWithoutGeoAssignmentsInput>
  }

  export type AdminUserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<AdminUserCreateWithoutAuditLogsInput, AdminUserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutAuditLogsInput
    connect?: AdminUserWhereUniqueInput
  }

  export type AdminUserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<AdminUserCreateWithoutAuditLogsInput, AdminUserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutAuditLogsInput
    upsert?: AdminUserUpsertWithoutAuditLogsInput
    disconnect?: AdminUserWhereInput | boolean
    delete?: AdminUserWhereInput | boolean
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutAuditLogsInput, AdminUserUpdateWithoutAuditLogsInput>, AdminUserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type PiiAccessAuditLogCreateaccessedFieldsInput = {
    set: string[]
  }

  export type AdminUserCreateNestedOneWithoutPiiAccessLogsInput = {
    create?: XOR<AdminUserCreateWithoutPiiAccessLogsInput, AdminUserUncheckedCreateWithoutPiiAccessLogsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutPiiAccessLogsInput
    connect?: AdminUserWhereUniqueInput
  }

  export type PiiAccessAuditLogUpdateaccessedFieldsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AdminUserUpdateOneWithoutPiiAccessLogsNestedInput = {
    create?: XOR<AdminUserCreateWithoutPiiAccessLogsInput, AdminUserUncheckedCreateWithoutPiiAccessLogsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutPiiAccessLogsInput
    upsert?: AdminUserUpsertWithoutPiiAccessLogsInput
    disconnect?: AdminUserWhereInput | boolean
    delete?: AdminUserWhereInput | boolean
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutPiiAccessLogsInput, AdminUserUpdateWithoutPiiAccessLogsInput>, AdminUserUncheckedUpdateWithoutPiiAccessLogsInput>
  }

  export type UserCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavouritesNestedInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput
    upsert?: UserUpsertWithoutFavouritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavouritesInput, UserUpdateWithoutFavouritesInput>, UserUncheckedUpdateWithoutFavouritesInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SessionCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    userAgent?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    userAgent?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MembershipCreateWithoutUserInput = {
    id?: string
    tenantId: string
    outletId?: string | null
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipUncheckedCreateWithoutUserInput = {
    id?: string
    tenantId: string
    outletId?: string | null
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipCreateOrConnectWithoutUserInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput>
  }

  export type MembershipCreateManyUserInputEnvelope = {
    data: MembershipCreateManyUserInput | MembershipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomerAddressCreateWithoutUserInput = {
    type?: string
    fullAddress: string
    landmark?: string | null
    city?: string
    pincode?: string
    latitude?: number | null
    longitude?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerAddressUncheckedCreateWithoutUserInput = {
    id?: number
    type?: string
    fullAddress: string
    landmark?: string | null
    city?: string
    pincode?: string
    latitude?: number | null
    longitude?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerAddressCreateOrConnectWithoutUserInput = {
    where: CustomerAddressWhereUniqueInput
    create: XOR<CustomerAddressCreateWithoutUserInput, CustomerAddressUncheckedCreateWithoutUserInput>
  }

  export type CustomerAddressCreateManyUserInputEnvelope = {
    data: CustomerAddressCreateManyUserInput | CustomerAddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomerFavouriteCreateWithoutUserInput = {
    id?: string
    itemType: string
    itemId: string
    tenantId?: string | null
    outletId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CustomerFavouriteUncheckedCreateWithoutUserInput = {
    id?: string
    itemType: string
    itemId: string
    tenantId?: string | null
    outletId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CustomerFavouriteCreateOrConnectWithoutUserInput = {
    where: CustomerFavouriteWhereUniqueInput
    create: XOR<CustomerFavouriteCreateWithoutUserInput, CustomerFavouriteUncheckedCreateWithoutUserInput>
  }

  export type CustomerFavouriteCreateManyUserInputEnvelope = {
    data: CustomerFavouriteCreateManyUserInput | CustomerFavouriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    tokenHash?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type MembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutUserInput, MembershipUncheckedUpdateWithoutUserInput>
    create: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutUserInput, MembershipUncheckedUpdateWithoutUserInput>
  }

  export type MembershipUpdateManyWithWhereWithoutUserInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutUserInput>
  }

  export type MembershipScalarWhereInput = {
    AND?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    OR?: MembershipScalarWhereInput[]
    NOT?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    id?: StringFilter<"Membership"> | string
    userId?: StringFilter<"Membership"> | string
    tenantId?: StringFilter<"Membership"> | string
    outletId?: StringNullableFilter<"Membership"> | string | null
    role?: StringFilter<"Membership"> | string
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    updatedAt?: DateTimeFilter<"Membership"> | Date | string
  }

  export type CustomerAddressUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomerAddressWhereUniqueInput
    update: XOR<CustomerAddressUpdateWithoutUserInput, CustomerAddressUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerAddressCreateWithoutUserInput, CustomerAddressUncheckedCreateWithoutUserInput>
  }

  export type CustomerAddressUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomerAddressWhereUniqueInput
    data: XOR<CustomerAddressUpdateWithoutUserInput, CustomerAddressUncheckedUpdateWithoutUserInput>
  }

  export type CustomerAddressUpdateManyWithWhereWithoutUserInput = {
    where: CustomerAddressScalarWhereInput
    data: XOR<CustomerAddressUpdateManyMutationInput, CustomerAddressUncheckedUpdateManyWithoutUserInput>
  }

  export type CustomerAddressScalarWhereInput = {
    AND?: CustomerAddressScalarWhereInput | CustomerAddressScalarWhereInput[]
    OR?: CustomerAddressScalarWhereInput[]
    NOT?: CustomerAddressScalarWhereInput | CustomerAddressScalarWhereInput[]
    id?: IntFilter<"CustomerAddress"> | number
    userId?: StringFilter<"CustomerAddress"> | string
    type?: StringFilter<"CustomerAddress"> | string
    fullAddress?: StringFilter<"CustomerAddress"> | string
    landmark?: StringNullableFilter<"CustomerAddress"> | string | null
    city?: StringFilter<"CustomerAddress"> | string
    pincode?: StringFilter<"CustomerAddress"> | string
    latitude?: FloatNullableFilter<"CustomerAddress"> | number | null
    longitude?: FloatNullableFilter<"CustomerAddress"> | number | null
    isDefault?: BoolFilter<"CustomerAddress"> | boolean
    createdAt?: DateTimeFilter<"CustomerAddress"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerAddress"> | Date | string
  }

  export type CustomerFavouriteUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomerFavouriteWhereUniqueInput
    update: XOR<CustomerFavouriteUpdateWithoutUserInput, CustomerFavouriteUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerFavouriteCreateWithoutUserInput, CustomerFavouriteUncheckedCreateWithoutUserInput>
  }

  export type CustomerFavouriteUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomerFavouriteWhereUniqueInput
    data: XOR<CustomerFavouriteUpdateWithoutUserInput, CustomerFavouriteUncheckedUpdateWithoutUserInput>
  }

  export type CustomerFavouriteUpdateManyWithWhereWithoutUserInput = {
    where: CustomerFavouriteScalarWhereInput
    data: XOR<CustomerFavouriteUpdateManyMutationInput, CustomerFavouriteUncheckedUpdateManyWithoutUserInput>
  }

  export type CustomerFavouriteScalarWhereInput = {
    AND?: CustomerFavouriteScalarWhereInput | CustomerFavouriteScalarWhereInput[]
    OR?: CustomerFavouriteScalarWhereInput[]
    NOT?: CustomerFavouriteScalarWhereInput | CustomerFavouriteScalarWhereInput[]
    id?: StringFilter<"CustomerFavourite"> | string
    userId?: StringFilter<"CustomerFavourite"> | string
    itemType?: StringFilter<"CustomerFavourite"> | string
    itemId?: StringFilter<"CustomerFavourite"> | string
    tenantId?: StringNullableFilter<"CustomerFavourite"> | string | null
    outletId?: StringNullableFilter<"CustomerFavourite"> | string | null
    metadata?: JsonNullableFilter<"CustomerFavourite">
    createdAt?: DateTimeFilter<"CustomerFavourite"> | Date | string
  }

  export type UserCreateWithoutAddressesInput = {
    id?: string
    phoneNumber: string
    email?: string | null
    fullName?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    favourites?: CustomerFavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressesInput = {
    id?: string
    phoneNumber: string
    email?: string | null
    fullName?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    favourites?: CustomerFavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
  }

  export type UserUpsertWithoutAddressesInput = {
    update: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type UserUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    favourites?: CustomerFavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    favourites?: CustomerFavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    phoneNumber: string
    email?: string | null
    fullName?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutUserInput
    addresses?: CustomerAddressCreateNestedManyWithoutUserInput
    favourites?: CustomerFavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    phoneNumber: string
    email?: string | null
    fullName?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    addresses?: CustomerAddressUncheckedCreateNestedManyWithoutUserInput
    favourites?: CustomerFavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    addresses?: CustomerAddressUpdateManyWithoutUserNestedInput
    favourites?: CustomerFavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    addresses?: CustomerAddressUncheckedUpdateManyWithoutUserNestedInput
    favourites?: CustomerFavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    phoneNumber: string
    email?: string | null
    fullName?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    addresses?: CustomerAddressCreateNestedManyWithoutUserInput
    favourites?: CustomerFavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    phoneNumber: string
    email?: string | null
    fullName?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    addresses?: CustomerAddressUncheckedCreateNestedManyWithoutUserInput
    favourites?: CustomerFavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    addresses?: CustomerAddressUpdateManyWithoutUserNestedInput
    favourites?: CustomerFavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    addresses?: CustomerAddressUncheckedUpdateManyWithoutUserNestedInput
    favourites?: CustomerFavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminRoleAssignmentCreateWithoutUserInput = {
    id?: string
    assignedAt?: Date | string
    role: AdminRoleCreateNestedOneWithoutRoleAssignmentsInput
  }

  export type AdminRoleAssignmentUncheckedCreateWithoutUserInput = {
    id?: string
    roleId: string
    assignedAt?: Date | string
  }

  export type AdminRoleAssignmentCreateOrConnectWithoutUserInput = {
    where: AdminRoleAssignmentWhereUniqueInput
    create: XOR<AdminRoleAssignmentCreateWithoutUserInput, AdminRoleAssignmentUncheckedCreateWithoutUserInput>
  }

  export type AdminRoleAssignmentCreateManyUserInputEnvelope = {
    data: AdminRoleAssignmentCreateManyUserInput | AdminRoleAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdminGeoAssignmentCreateWithoutUserInput = {
    id?: string
    state: string
    stateCode?: string
    district: string
    districtCode?: string
    cityId: string
    cityCode?: string
    cityName: string
    localities: JsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
  }

  export type AdminGeoAssignmentUncheckedCreateWithoutUserInput = {
    id?: string
    state: string
    stateCode?: string
    district: string
    districtCode?: string
    cityId: string
    cityCode?: string
    cityName: string
    localities: JsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
  }

  export type AdminGeoAssignmentCreateOrConnectWithoutUserInput = {
    where: AdminGeoAssignmentWhereUniqueInput
    create: XOR<AdminGeoAssignmentCreateWithoutUserInput, AdminGeoAssignmentUncheckedCreateWithoutUserInput>
  }

  export type AdminGeoAssignmentCreateManyUserInputEnvelope = {
    data: AdminGeoAssignmentCreateManyUserInput | AdminGeoAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdminAuditLogCreateWithoutUserInput = {
    id?: string
    operatorName: string
    action: string
    targetEntity: string
    targetId: string
    reasonCode: string
    justification: string
    previousHash?: string | null
    recordHash?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    timestamp?: Date | string
  }

  export type AdminAuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    operatorName: string
    action: string
    targetEntity: string
    targetId: string
    reasonCode: string
    justification: string
    previousHash?: string | null
    recordHash?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    timestamp?: Date | string
  }

  export type AdminAuditLogCreateOrConnectWithoutUserInput = {
    where: AdminAuditLogWhereUniqueInput
    create: XOR<AdminAuditLogCreateWithoutUserInput, AdminAuditLogUncheckedCreateWithoutUserInput>
  }

  export type AdminAuditLogCreateManyUserInputEnvelope = {
    data: AdminAuditLogCreateManyUserInput | AdminAuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PiiAccessAuditLogCreateWithoutUserInput = {
    id?: string
    targetEntity: string
    targetId: string
    accessedFields?: PiiAccessAuditLogCreateaccessedFieldsInput | string[]
    purposeCode: string
    justification: string
    consentVerification?: string | null
    timestamp?: Date | string
  }

  export type PiiAccessAuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    targetEntity: string
    targetId: string
    accessedFields?: PiiAccessAuditLogCreateaccessedFieldsInput | string[]
    purposeCode: string
    justification: string
    consentVerification?: string | null
    timestamp?: Date | string
  }

  export type PiiAccessAuditLogCreateOrConnectWithoutUserInput = {
    where: PiiAccessAuditLogWhereUniqueInput
    create: XOR<PiiAccessAuditLogCreateWithoutUserInput, PiiAccessAuditLogUncheckedCreateWithoutUserInput>
  }

  export type PiiAccessAuditLogCreateManyUserInputEnvelope = {
    data: PiiAccessAuditLogCreateManyUserInput | PiiAccessAuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdminRoleAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AdminRoleAssignmentWhereUniqueInput
    update: XOR<AdminRoleAssignmentUpdateWithoutUserInput, AdminRoleAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<AdminRoleAssignmentCreateWithoutUserInput, AdminRoleAssignmentUncheckedCreateWithoutUserInput>
  }

  export type AdminRoleAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AdminRoleAssignmentWhereUniqueInput
    data: XOR<AdminRoleAssignmentUpdateWithoutUserInput, AdminRoleAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type AdminRoleAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: AdminRoleAssignmentScalarWhereInput
    data: XOR<AdminRoleAssignmentUpdateManyMutationInput, AdminRoleAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AdminRoleAssignmentScalarWhereInput = {
    AND?: AdminRoleAssignmentScalarWhereInput | AdminRoleAssignmentScalarWhereInput[]
    OR?: AdminRoleAssignmentScalarWhereInput[]
    NOT?: AdminRoleAssignmentScalarWhereInput | AdminRoleAssignmentScalarWhereInput[]
    id?: StringFilter<"AdminRoleAssignment"> | string
    userId?: StringFilter<"AdminRoleAssignment"> | string
    roleId?: StringFilter<"AdminRoleAssignment"> | string
    assignedAt?: DateTimeFilter<"AdminRoleAssignment"> | Date | string
  }

  export type AdminGeoAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AdminGeoAssignmentWhereUniqueInput
    update: XOR<AdminGeoAssignmentUpdateWithoutUserInput, AdminGeoAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<AdminGeoAssignmentCreateWithoutUserInput, AdminGeoAssignmentUncheckedCreateWithoutUserInput>
  }

  export type AdminGeoAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AdminGeoAssignmentWhereUniqueInput
    data: XOR<AdminGeoAssignmentUpdateWithoutUserInput, AdminGeoAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type AdminGeoAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: AdminGeoAssignmentScalarWhereInput
    data: XOR<AdminGeoAssignmentUpdateManyMutationInput, AdminGeoAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AdminGeoAssignmentScalarWhereInput = {
    AND?: AdminGeoAssignmentScalarWhereInput | AdminGeoAssignmentScalarWhereInput[]
    OR?: AdminGeoAssignmentScalarWhereInput[]
    NOT?: AdminGeoAssignmentScalarWhereInput | AdminGeoAssignmentScalarWhereInput[]
    id?: StringFilter<"AdminGeoAssignment"> | string
    userId?: StringFilter<"AdminGeoAssignment"> | string
    state?: StringFilter<"AdminGeoAssignment"> | string
    stateCode?: StringFilter<"AdminGeoAssignment"> | string
    district?: StringFilter<"AdminGeoAssignment"> | string
    districtCode?: StringFilter<"AdminGeoAssignment"> | string
    cityId?: StringFilter<"AdminGeoAssignment"> | string
    cityCode?: StringFilter<"AdminGeoAssignment"> | string
    cityName?: StringFilter<"AdminGeoAssignment"> | string
    localities?: JsonFilter<"AdminGeoAssignment">
    assignedAt?: DateTimeFilter<"AdminGeoAssignment"> | Date | string
  }

  export type AdminAuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AdminAuditLogWhereUniqueInput
    update: XOR<AdminAuditLogUpdateWithoutUserInput, AdminAuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AdminAuditLogCreateWithoutUserInput, AdminAuditLogUncheckedCreateWithoutUserInput>
  }

  export type AdminAuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AdminAuditLogWhereUniqueInput
    data: XOR<AdminAuditLogUpdateWithoutUserInput, AdminAuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AdminAuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AdminAuditLogScalarWhereInput
    data: XOR<AdminAuditLogUpdateManyMutationInput, AdminAuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AdminAuditLogScalarWhereInput = {
    AND?: AdminAuditLogScalarWhereInput | AdminAuditLogScalarWhereInput[]
    OR?: AdminAuditLogScalarWhereInput[]
    NOT?: AdminAuditLogScalarWhereInput | AdminAuditLogScalarWhereInput[]
    id?: StringFilter<"AdminAuditLog"> | string
    operatorId?: StringNullableFilter<"AdminAuditLog"> | string | null
    operatorName?: StringFilter<"AdminAuditLog"> | string
    action?: StringFilter<"AdminAuditLog"> | string
    targetEntity?: StringFilter<"AdminAuditLog"> | string
    targetId?: StringFilter<"AdminAuditLog"> | string
    reasonCode?: StringFilter<"AdminAuditLog"> | string
    justification?: StringFilter<"AdminAuditLog"> | string
    previousHash?: StringNullableFilter<"AdminAuditLog"> | string | null
    recordHash?: StringNullableFilter<"AdminAuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AdminAuditLog"> | string | null
    userAgent?: StringNullableFilter<"AdminAuditLog"> | string | null
    timestamp?: DateTimeFilter<"AdminAuditLog"> | Date | string
  }

  export type PiiAccessAuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: PiiAccessAuditLogWhereUniqueInput
    update: XOR<PiiAccessAuditLogUpdateWithoutUserInput, PiiAccessAuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<PiiAccessAuditLogCreateWithoutUserInput, PiiAccessAuditLogUncheckedCreateWithoutUserInput>
  }

  export type PiiAccessAuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: PiiAccessAuditLogWhereUniqueInput
    data: XOR<PiiAccessAuditLogUpdateWithoutUserInput, PiiAccessAuditLogUncheckedUpdateWithoutUserInput>
  }

  export type PiiAccessAuditLogUpdateManyWithWhereWithoutUserInput = {
    where: PiiAccessAuditLogScalarWhereInput
    data: XOR<PiiAccessAuditLogUpdateManyMutationInput, PiiAccessAuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type PiiAccessAuditLogScalarWhereInput = {
    AND?: PiiAccessAuditLogScalarWhereInput | PiiAccessAuditLogScalarWhereInput[]
    OR?: PiiAccessAuditLogScalarWhereInput[]
    NOT?: PiiAccessAuditLogScalarWhereInput | PiiAccessAuditLogScalarWhereInput[]
    id?: StringFilter<"PiiAccessAuditLog"> | string
    operatorId?: StringNullableFilter<"PiiAccessAuditLog"> | string | null
    targetEntity?: StringFilter<"PiiAccessAuditLog"> | string
    targetId?: StringFilter<"PiiAccessAuditLog"> | string
    accessedFields?: StringNullableListFilter<"PiiAccessAuditLog">
    purposeCode?: StringFilter<"PiiAccessAuditLog"> | string
    justification?: StringFilter<"PiiAccessAuditLog"> | string
    consentVerification?: StringNullableFilter<"PiiAccessAuditLog"> | string | null
    timestamp?: DateTimeFilter<"PiiAccessAuditLog"> | Date | string
  }

  export type AdminRoleAssignmentCreateWithoutRoleInput = {
    id?: string
    assignedAt?: Date | string
    user: AdminUserCreateNestedOneWithoutRoleAssignmentsInput
  }

  export type AdminRoleAssignmentUncheckedCreateWithoutRoleInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
  }

  export type AdminRoleAssignmentCreateOrConnectWithoutRoleInput = {
    where: AdminRoleAssignmentWhereUniqueInput
    create: XOR<AdminRoleAssignmentCreateWithoutRoleInput, AdminRoleAssignmentUncheckedCreateWithoutRoleInput>
  }

  export type AdminRoleAssignmentCreateManyRoleInputEnvelope = {
    data: AdminRoleAssignmentCreateManyRoleInput | AdminRoleAssignmentCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type AdminRolePermissionCreateWithoutRoleInput = {
    id?: string
    assignedAt?: Date | string
    permission: AdminPermissionCreateNestedOneWithoutRolePermissionsInput
  }

  export type AdminRolePermissionUncheckedCreateWithoutRoleInput = {
    id?: string
    permissionId: string
    assignedAt?: Date | string
  }

  export type AdminRolePermissionCreateOrConnectWithoutRoleInput = {
    where: AdminRolePermissionWhereUniqueInput
    create: XOR<AdminRolePermissionCreateWithoutRoleInput, AdminRolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type AdminRolePermissionCreateManyRoleInputEnvelope = {
    data: AdminRolePermissionCreateManyRoleInput | AdminRolePermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type AdminRoleAssignmentUpsertWithWhereUniqueWithoutRoleInput = {
    where: AdminRoleAssignmentWhereUniqueInput
    update: XOR<AdminRoleAssignmentUpdateWithoutRoleInput, AdminRoleAssignmentUncheckedUpdateWithoutRoleInput>
    create: XOR<AdminRoleAssignmentCreateWithoutRoleInput, AdminRoleAssignmentUncheckedCreateWithoutRoleInput>
  }

  export type AdminRoleAssignmentUpdateWithWhereUniqueWithoutRoleInput = {
    where: AdminRoleAssignmentWhereUniqueInput
    data: XOR<AdminRoleAssignmentUpdateWithoutRoleInput, AdminRoleAssignmentUncheckedUpdateWithoutRoleInput>
  }

  export type AdminRoleAssignmentUpdateManyWithWhereWithoutRoleInput = {
    where: AdminRoleAssignmentScalarWhereInput
    data: XOR<AdminRoleAssignmentUpdateManyMutationInput, AdminRoleAssignmentUncheckedUpdateManyWithoutRoleInput>
  }

  export type AdminRolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: AdminRolePermissionWhereUniqueInput
    update: XOR<AdminRolePermissionUpdateWithoutRoleInput, AdminRolePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<AdminRolePermissionCreateWithoutRoleInput, AdminRolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type AdminRolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: AdminRolePermissionWhereUniqueInput
    data: XOR<AdminRolePermissionUpdateWithoutRoleInput, AdminRolePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type AdminRolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: AdminRolePermissionScalarWhereInput
    data: XOR<AdminRolePermissionUpdateManyMutationInput, AdminRolePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type AdminRolePermissionScalarWhereInput = {
    AND?: AdminRolePermissionScalarWhereInput | AdminRolePermissionScalarWhereInput[]
    OR?: AdminRolePermissionScalarWhereInput[]
    NOT?: AdminRolePermissionScalarWhereInput | AdminRolePermissionScalarWhereInput[]
    id?: StringFilter<"AdminRolePermission"> | string
    roleId?: StringFilter<"AdminRolePermission"> | string
    permissionId?: StringFilter<"AdminRolePermission"> | string
    assignedAt?: DateTimeFilter<"AdminRolePermission"> | Date | string
  }

  export type AdminRolePermissionCreateWithoutPermissionInput = {
    id?: string
    assignedAt?: Date | string
    role: AdminRoleCreateNestedOneWithoutRolePermissionsInput
  }

  export type AdminRolePermissionUncheckedCreateWithoutPermissionInput = {
    id?: string
    roleId: string
    assignedAt?: Date | string
  }

  export type AdminRolePermissionCreateOrConnectWithoutPermissionInput = {
    where: AdminRolePermissionWhereUniqueInput
    create: XOR<AdminRolePermissionCreateWithoutPermissionInput, AdminRolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type AdminRolePermissionCreateManyPermissionInputEnvelope = {
    data: AdminRolePermissionCreateManyPermissionInput | AdminRolePermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type AdminRolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: AdminRolePermissionWhereUniqueInput
    update: XOR<AdminRolePermissionUpdateWithoutPermissionInput, AdminRolePermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<AdminRolePermissionCreateWithoutPermissionInput, AdminRolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type AdminRolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: AdminRolePermissionWhereUniqueInput
    data: XOR<AdminRolePermissionUpdateWithoutPermissionInput, AdminRolePermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type AdminRolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: AdminRolePermissionScalarWhereInput
    data: XOR<AdminRolePermissionUpdateManyMutationInput, AdminRolePermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type AdminUserCreateWithoutRoleAssignmentsInput = {
    id?: string
    name: string
    email: string
    phone: string
    status?: string
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: number
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    geoAssignments?: AdminGeoAssignmentCreateNestedManyWithoutUserInput
    auditLogs?: AdminAuditLogCreateNestedManyWithoutUserInput
    piiAccessLogs?: PiiAccessAuditLogCreateNestedManyWithoutUserInput
  }

  export type AdminUserUncheckedCreateWithoutRoleAssignmentsInput = {
    id?: string
    name: string
    email: string
    phone: string
    status?: string
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: number
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    geoAssignments?: AdminGeoAssignmentUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AdminAuditLogUncheckedCreateNestedManyWithoutUserInput
    piiAccessLogs?: PiiAccessAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type AdminUserCreateOrConnectWithoutRoleAssignmentsInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutRoleAssignmentsInput, AdminUserUncheckedCreateWithoutRoleAssignmentsInput>
  }

  export type AdminRoleCreateWithoutRoleAssignmentsInput = {
    id?: string
    code: string
    title: string
    subtitle?: string | null
    hierarchyLevel?: number
    description?: string | null
    requiresMfa?: boolean
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: AdminRolePermissionCreateNestedManyWithoutRoleInput
  }

  export type AdminRoleUncheckedCreateWithoutRoleAssignmentsInput = {
    id?: string
    code: string
    title: string
    subtitle?: string | null
    hierarchyLevel?: number
    description?: string | null
    requiresMfa?: boolean
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: AdminRolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type AdminRoleCreateOrConnectWithoutRoleAssignmentsInput = {
    where: AdminRoleWhereUniqueInput
    create: XOR<AdminRoleCreateWithoutRoleAssignmentsInput, AdminRoleUncheckedCreateWithoutRoleAssignmentsInput>
  }

  export type AdminUserUpsertWithoutRoleAssignmentsInput = {
    update: XOR<AdminUserUpdateWithoutRoleAssignmentsInput, AdminUserUncheckedUpdateWithoutRoleAssignmentsInput>
    create: XOR<AdminUserCreateWithoutRoleAssignmentsInput, AdminUserUncheckedCreateWithoutRoleAssignmentsInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutRoleAssignmentsInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutRoleAssignmentsInput, AdminUserUncheckedUpdateWithoutRoleAssignmentsInput>
  }

  export type AdminUserUpdateWithoutRoleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    isRootProtected?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geoAssignments?: AdminGeoAssignmentUpdateManyWithoutUserNestedInput
    auditLogs?: AdminAuditLogUpdateManyWithoutUserNestedInput
    piiAccessLogs?: PiiAccessAuditLogUpdateManyWithoutUserNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutRoleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    isRootProtected?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geoAssignments?: AdminGeoAssignmentUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AdminAuditLogUncheckedUpdateManyWithoutUserNestedInput
    piiAccessLogs?: PiiAccessAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminRoleUpsertWithoutRoleAssignmentsInput = {
    update: XOR<AdminRoleUpdateWithoutRoleAssignmentsInput, AdminRoleUncheckedUpdateWithoutRoleAssignmentsInput>
    create: XOR<AdminRoleCreateWithoutRoleAssignmentsInput, AdminRoleUncheckedCreateWithoutRoleAssignmentsInput>
    where?: AdminRoleWhereInput
  }

  export type AdminRoleUpdateToOneWithWhereWithoutRoleAssignmentsInput = {
    where?: AdminRoleWhereInput
    data: XOR<AdminRoleUpdateWithoutRoleAssignmentsInput, AdminRoleUncheckedUpdateWithoutRoleAssignmentsInput>
  }

  export type AdminRoleUpdateWithoutRoleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchyLevel?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiresMfa?: BoolFieldUpdateOperationsInput | boolean
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolePermissions?: AdminRolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type AdminRoleUncheckedUpdateWithoutRoleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchyLevel?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiresMfa?: BoolFieldUpdateOperationsInput | boolean
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolePermissions?: AdminRolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type AdminRoleCreateWithoutRolePermissionsInput = {
    id?: string
    code: string
    title: string
    subtitle?: string | null
    hierarchyLevel?: number
    description?: string | null
    requiresMfa?: boolean
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleAssignments?: AdminRoleAssignmentCreateNestedManyWithoutRoleInput
  }

  export type AdminRoleUncheckedCreateWithoutRolePermissionsInput = {
    id?: string
    code: string
    title: string
    subtitle?: string | null
    hierarchyLevel?: number
    description?: string | null
    requiresMfa?: boolean
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleAssignments?: AdminRoleAssignmentUncheckedCreateNestedManyWithoutRoleInput
  }

  export type AdminRoleCreateOrConnectWithoutRolePermissionsInput = {
    where: AdminRoleWhereUniqueInput
    create: XOR<AdminRoleCreateWithoutRolePermissionsInput, AdminRoleUncheckedCreateWithoutRolePermissionsInput>
  }

  export type AdminPermissionCreateWithoutRolePermissionsInput = {
    id?: string
    code: string
    module: string
    description?: string | null
  }

  export type AdminPermissionUncheckedCreateWithoutRolePermissionsInput = {
    id?: string
    code: string
    module: string
    description?: string | null
  }

  export type AdminPermissionCreateOrConnectWithoutRolePermissionsInput = {
    where: AdminPermissionWhereUniqueInput
    create: XOR<AdminPermissionCreateWithoutRolePermissionsInput, AdminPermissionUncheckedCreateWithoutRolePermissionsInput>
  }

  export type AdminRoleUpsertWithoutRolePermissionsInput = {
    update: XOR<AdminRoleUpdateWithoutRolePermissionsInput, AdminRoleUncheckedUpdateWithoutRolePermissionsInput>
    create: XOR<AdminRoleCreateWithoutRolePermissionsInput, AdminRoleUncheckedCreateWithoutRolePermissionsInput>
    where?: AdminRoleWhereInput
  }

  export type AdminRoleUpdateToOneWithWhereWithoutRolePermissionsInput = {
    where?: AdminRoleWhereInput
    data: XOR<AdminRoleUpdateWithoutRolePermissionsInput, AdminRoleUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type AdminRoleUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchyLevel?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiresMfa?: BoolFieldUpdateOperationsInput | boolean
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleAssignments?: AdminRoleAssignmentUpdateManyWithoutRoleNestedInput
  }

  export type AdminRoleUncheckedUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchyLevel?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiresMfa?: BoolFieldUpdateOperationsInput | boolean
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleAssignments?: AdminRoleAssignmentUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type AdminPermissionUpsertWithoutRolePermissionsInput = {
    update: XOR<AdminPermissionUpdateWithoutRolePermissionsInput, AdminPermissionUncheckedUpdateWithoutRolePermissionsInput>
    create: XOR<AdminPermissionCreateWithoutRolePermissionsInput, AdminPermissionUncheckedCreateWithoutRolePermissionsInput>
    where?: AdminPermissionWhereInput
  }

  export type AdminPermissionUpdateToOneWithWhereWithoutRolePermissionsInput = {
    where?: AdminPermissionWhereInput
    data: XOR<AdminPermissionUpdateWithoutRolePermissionsInput, AdminPermissionUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type AdminPermissionUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminPermissionUncheckedUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUserCreateWithoutGeoAssignmentsInput = {
    id?: string
    name: string
    email: string
    phone: string
    status?: string
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: number
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roleAssignments?: AdminRoleAssignmentCreateNestedManyWithoutUserInput
    auditLogs?: AdminAuditLogCreateNestedManyWithoutUserInput
    piiAccessLogs?: PiiAccessAuditLogCreateNestedManyWithoutUserInput
  }

  export type AdminUserUncheckedCreateWithoutGeoAssignmentsInput = {
    id?: string
    name: string
    email: string
    phone: string
    status?: string
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: number
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roleAssignments?: AdminRoleAssignmentUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AdminAuditLogUncheckedCreateNestedManyWithoutUserInput
    piiAccessLogs?: PiiAccessAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type AdminUserCreateOrConnectWithoutGeoAssignmentsInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutGeoAssignmentsInput, AdminUserUncheckedCreateWithoutGeoAssignmentsInput>
  }

  export type AdminUserUpsertWithoutGeoAssignmentsInput = {
    update: XOR<AdminUserUpdateWithoutGeoAssignmentsInput, AdminUserUncheckedUpdateWithoutGeoAssignmentsInput>
    create: XOR<AdminUserCreateWithoutGeoAssignmentsInput, AdminUserUncheckedCreateWithoutGeoAssignmentsInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutGeoAssignmentsInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutGeoAssignmentsInput, AdminUserUncheckedUpdateWithoutGeoAssignmentsInput>
  }

  export type AdminUserUpdateWithoutGeoAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    isRootProtected?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleAssignments?: AdminRoleAssignmentUpdateManyWithoutUserNestedInput
    auditLogs?: AdminAuditLogUpdateManyWithoutUserNestedInput
    piiAccessLogs?: PiiAccessAuditLogUpdateManyWithoutUserNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutGeoAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    isRootProtected?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleAssignments?: AdminRoleAssignmentUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AdminAuditLogUncheckedUpdateManyWithoutUserNestedInput
    piiAccessLogs?: PiiAccessAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminUserCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    phone: string
    status?: string
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: number
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roleAssignments?: AdminRoleAssignmentCreateNestedManyWithoutUserInput
    geoAssignments?: AdminGeoAssignmentCreateNestedManyWithoutUserInput
    piiAccessLogs?: PiiAccessAuditLogCreateNestedManyWithoutUserInput
  }

  export type AdminUserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    phone: string
    status?: string
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: number
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roleAssignments?: AdminRoleAssignmentUncheckedCreateNestedManyWithoutUserInput
    geoAssignments?: AdminGeoAssignmentUncheckedCreateNestedManyWithoutUserInput
    piiAccessLogs?: PiiAccessAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type AdminUserCreateOrConnectWithoutAuditLogsInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutAuditLogsInput, AdminUserUncheckedCreateWithoutAuditLogsInput>
  }

  export type AdminUserUpsertWithoutAuditLogsInput = {
    update: XOR<AdminUserUpdateWithoutAuditLogsInput, AdminUserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<AdminUserCreateWithoutAuditLogsInput, AdminUserUncheckedCreateWithoutAuditLogsInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutAuditLogsInput, AdminUserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type AdminUserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    isRootProtected?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleAssignments?: AdminRoleAssignmentUpdateManyWithoutUserNestedInput
    geoAssignments?: AdminGeoAssignmentUpdateManyWithoutUserNestedInput
    piiAccessLogs?: PiiAccessAuditLogUpdateManyWithoutUserNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    isRootProtected?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleAssignments?: AdminRoleAssignmentUncheckedUpdateManyWithoutUserNestedInput
    geoAssignments?: AdminGeoAssignmentUncheckedUpdateManyWithoutUserNestedInput
    piiAccessLogs?: PiiAccessAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminUserCreateWithoutPiiAccessLogsInput = {
    id?: string
    name: string
    email: string
    phone: string
    status?: string
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: number
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roleAssignments?: AdminRoleAssignmentCreateNestedManyWithoutUserInput
    geoAssignments?: AdminGeoAssignmentCreateNestedManyWithoutUserInput
    auditLogs?: AdminAuditLogCreateNestedManyWithoutUserInput
  }

  export type AdminUserUncheckedCreateWithoutPiiAccessLogsInput = {
    id?: string
    name: string
    email: string
    phone: string
    status?: string
    mfaEnabled?: boolean
    isRootProtected?: boolean
    tokenVersion?: number
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roleAssignments?: AdminRoleAssignmentUncheckedCreateNestedManyWithoutUserInput
    geoAssignments?: AdminGeoAssignmentUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AdminAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type AdminUserCreateOrConnectWithoutPiiAccessLogsInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutPiiAccessLogsInput, AdminUserUncheckedCreateWithoutPiiAccessLogsInput>
  }

  export type AdminUserUpsertWithoutPiiAccessLogsInput = {
    update: XOR<AdminUserUpdateWithoutPiiAccessLogsInput, AdminUserUncheckedUpdateWithoutPiiAccessLogsInput>
    create: XOR<AdminUserCreateWithoutPiiAccessLogsInput, AdminUserUncheckedCreateWithoutPiiAccessLogsInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutPiiAccessLogsInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutPiiAccessLogsInput, AdminUserUncheckedUpdateWithoutPiiAccessLogsInput>
  }

  export type AdminUserUpdateWithoutPiiAccessLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    isRootProtected?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleAssignments?: AdminRoleAssignmentUpdateManyWithoutUserNestedInput
    geoAssignments?: AdminGeoAssignmentUpdateManyWithoutUserNestedInput
    auditLogs?: AdminAuditLogUpdateManyWithoutUserNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutPiiAccessLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    isRootProtected?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleAssignments?: AdminRoleAssignmentUncheckedUpdateManyWithoutUserNestedInput
    geoAssignments?: AdminGeoAssignmentUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AdminAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFavouritesInput = {
    id?: string
    phoneNumber: string
    email?: string | null
    fullName?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    addresses?: CustomerAddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavouritesInput = {
    id?: string
    phoneNumber: string
    email?: string | null
    fullName?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    addresses?: CustomerAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavouritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
  }

  export type UserUpsertWithoutFavouritesInput = {
    update: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
  }

  export type UserUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    addresses?: CustomerAddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    addresses?: CustomerAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    tokenHash: string
    userAgent?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type MembershipCreateManyUserInput = {
    id?: string
    tenantId: string
    outletId?: string | null
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerAddressCreateManyUserInput = {
    id?: number
    type?: string
    fullAddress: string
    landmark?: string | null
    city?: string
    pincode?: string
    latitude?: number | null
    longitude?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerFavouriteCreateManyUserInput = {
    id?: string
    itemType: string
    itemId: string
    tenantId?: string | null
    outletId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerFavouriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerFavouriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerFavouriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRoleAssignmentCreateManyUserInput = {
    id?: string
    roleId: string
    assignedAt?: Date | string
  }

  export type AdminGeoAssignmentCreateManyUserInput = {
    id?: string
    state: string
    stateCode?: string
    district: string
    districtCode?: string
    cityId: string
    cityCode?: string
    cityName: string
    localities: JsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
  }

  export type AdminAuditLogCreateManyUserInput = {
    id?: string
    operatorName: string
    action: string
    targetEntity: string
    targetId: string
    reasonCode: string
    justification: string
    previousHash?: string | null
    recordHash?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    timestamp?: Date | string
  }

  export type PiiAccessAuditLogCreateManyUserInput = {
    id?: string
    targetEntity: string
    targetId: string
    accessedFields?: PiiAccessAuditLogCreateaccessedFieldsInput | string[]
    purposeCode: string
    justification: string
    consentVerification?: string | null
    timestamp?: Date | string
  }

  export type AdminRoleAssignmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: AdminRoleUpdateOneRequiredWithoutRoleAssignmentsNestedInput
  }

  export type AdminRoleAssignmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRoleAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminGeoAssignmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    localities?: JsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminGeoAssignmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    localities?: JsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminGeoAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    districtCode?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    localities?: JsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    reasonCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    previousHash?: NullableStringFieldUpdateOperationsInput | string | null
    recordHash?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    reasonCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    previousHash?: NullableStringFieldUpdateOperationsInput | string | null
    recordHash?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    reasonCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    previousHash?: NullableStringFieldUpdateOperationsInput | string | null
    recordHash?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiiAccessAuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    accessedFields?: PiiAccessAuditLogUpdateaccessedFieldsInput | string[]
    purposeCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    consentVerification?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiiAccessAuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    accessedFields?: PiiAccessAuditLogUpdateaccessedFieldsInput | string[]
    purposeCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    consentVerification?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiiAccessAuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetEntity?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    accessedFields?: PiiAccessAuditLogUpdateaccessedFieldsInput | string[]
    purposeCode?: StringFieldUpdateOperationsInput | string
    justification?: StringFieldUpdateOperationsInput | string
    consentVerification?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRoleAssignmentCreateManyRoleInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
  }

  export type AdminRolePermissionCreateManyRoleInput = {
    id?: string
    permissionId: string
    assignedAt?: Date | string
  }

  export type AdminRoleAssignmentUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AdminUserUpdateOneRequiredWithoutRoleAssignmentsNestedInput
  }

  export type AdminRoleAssignmentUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRoleAssignmentUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRolePermissionUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: AdminPermissionUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type AdminRolePermissionUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRolePermissionUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRolePermissionCreateManyPermissionInput = {
    id?: string
    roleId: string
    assignedAt?: Date | string
  }

  export type AdminRolePermissionUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: AdminRoleUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type AdminRolePermissionUncheckedUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminUserCountOutputTypeDefaultArgs instead
     */
    export type AdminUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminRoleCountOutputTypeDefaultArgs instead
     */
    export type AdminRoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminRoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminPermissionCountOutputTypeDefaultArgs instead
     */
    export type AdminPermissionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminPermissionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerAddressDefaultArgs instead
     */
    export type CustomerAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerAddressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MembershipDefaultArgs instead
     */
    export type MembershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MembershipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditEventDefaultArgs instead
     */
    export type AuditEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminUserDefaultArgs instead
     */
    export type AdminUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminRoleDefaultArgs instead
     */
    export type AdminRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminPermissionDefaultArgs instead
     */
    export type AdminPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminPermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminRoleAssignmentDefaultArgs instead
     */
    export type AdminRoleAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminRoleAssignmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminRolePermissionDefaultArgs instead
     */
    export type AdminRolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminRolePermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminGeoAssignmentDefaultArgs instead
     */
    export type AdminGeoAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminGeoAssignmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminAuditLogDefaultArgs instead
     */
    export type AdminAuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminAuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PiiAccessAuditLogDefaultArgs instead
     */
    export type PiiAccessAuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PiiAccessAuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerFavouriteDefaultArgs instead
     */
    export type CustomerFavouriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerFavouriteDefaultArgs<ExtArgs>

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