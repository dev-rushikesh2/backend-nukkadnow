
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
 * Model NotificationTemplate
 * 
 */
export type NotificationTemplate = $Result.DefaultSelection<Prisma.$NotificationTemplatePayload>
/**
 * Model NotificationJob
 * 
 */
export type NotificationJob = $Result.DefaultSelection<Prisma.$NotificationJobPayload>
/**
 * Model DeliveryAttempt
 * 
 */
export type DeliveryAttempt = $Result.DefaultSelection<Prisma.$DeliveryAttemptPayload>
/**
 * Model PushDeviceToken
 * 
 */
export type PushDeviceToken = $Result.DefaultSelection<Prisma.$PushDeviceTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NotificationTemplates
 * const notificationTemplates = await prisma.notificationTemplate.findMany()
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
   * // Fetch zero or more NotificationTemplates
   * const notificationTemplates = await prisma.notificationTemplate.findMany()
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
   * `prisma.notificationTemplate`: Exposes CRUD operations for the **NotificationTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationTemplates
    * const notificationTemplates = await prisma.notificationTemplate.findMany()
    * ```
    */
  get notificationTemplate(): Prisma.NotificationTemplateDelegate<ExtArgs>;

  /**
   * `prisma.notificationJob`: Exposes CRUD operations for the **NotificationJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationJobs
    * const notificationJobs = await prisma.notificationJob.findMany()
    * ```
    */
  get notificationJob(): Prisma.NotificationJobDelegate<ExtArgs>;

  /**
   * `prisma.deliveryAttempt`: Exposes CRUD operations for the **DeliveryAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryAttempts
    * const deliveryAttempts = await prisma.deliveryAttempt.findMany()
    * ```
    */
  get deliveryAttempt(): Prisma.DeliveryAttemptDelegate<ExtArgs>;

  /**
   * `prisma.pushDeviceToken`: Exposes CRUD operations for the **PushDeviceToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PushDeviceTokens
    * const pushDeviceTokens = await prisma.pushDeviceToken.findMany()
    * ```
    */
  get pushDeviceToken(): Prisma.PushDeviceTokenDelegate<ExtArgs>;
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
    NotificationTemplate: 'NotificationTemplate',
    NotificationJob: 'NotificationJob',
    DeliveryAttempt: 'DeliveryAttempt',
    PushDeviceToken: 'PushDeviceToken'
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
      modelProps: "notificationTemplate" | "notificationJob" | "deliveryAttempt" | "pushDeviceToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NotificationTemplate: {
        payload: Prisma.$NotificationTemplatePayload<ExtArgs>
        fields: Prisma.NotificationTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          findFirst: {
            args: Prisma.NotificationTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          findMany: {
            args: Prisma.NotificationTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>[]
          }
          create: {
            args: Prisma.NotificationTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          createMany: {
            args: Prisma.NotificationTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>[]
          }
          delete: {
            args: Prisma.NotificationTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          update: {
            args: Prisma.NotificationTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          deleteMany: {
            args: Prisma.NotificationTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          aggregate: {
            args: Prisma.NotificationTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationTemplate>
          }
          groupBy: {
            args: Prisma.NotificationTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationTemplateCountAggregateOutputType> | number
          }
        }
      }
      NotificationJob: {
        payload: Prisma.$NotificationJobPayload<ExtArgs>
        fields: Prisma.NotificationJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>
          }
          findFirst: {
            args: Prisma.NotificationJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>
          }
          findMany: {
            args: Prisma.NotificationJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>[]
          }
          create: {
            args: Prisma.NotificationJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>
          }
          createMany: {
            args: Prisma.NotificationJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>[]
          }
          delete: {
            args: Prisma.NotificationJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>
          }
          update: {
            args: Prisma.NotificationJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>
          }
          deleteMany: {
            args: Prisma.NotificationJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>
          }
          aggregate: {
            args: Prisma.NotificationJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationJob>
          }
          groupBy: {
            args: Prisma.NotificationJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationJobCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationJobCountAggregateOutputType> | number
          }
        }
      }
      DeliveryAttempt: {
        payload: Prisma.$DeliveryAttemptPayload<ExtArgs>
        fields: Prisma.DeliveryAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>
          }
          findFirst: {
            args: Prisma.DeliveryAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>
          }
          findMany: {
            args: Prisma.DeliveryAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>[]
          }
          create: {
            args: Prisma.DeliveryAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>
          }
          createMany: {
            args: Prisma.DeliveryAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>[]
          }
          delete: {
            args: Prisma.DeliveryAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>
          }
          update: {
            args: Prisma.DeliveryAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeliveryAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryAttempt>
          }
          groupBy: {
            args: Prisma.DeliveryAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryAttemptCountAggregateOutputType> | number
          }
        }
      }
      PushDeviceToken: {
        payload: Prisma.$PushDeviceTokenPayload<ExtArgs>
        fields: Prisma.PushDeviceTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PushDeviceTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushDeviceTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PushDeviceTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushDeviceTokenPayload>
          }
          findFirst: {
            args: Prisma.PushDeviceTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushDeviceTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PushDeviceTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushDeviceTokenPayload>
          }
          findMany: {
            args: Prisma.PushDeviceTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushDeviceTokenPayload>[]
          }
          create: {
            args: Prisma.PushDeviceTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushDeviceTokenPayload>
          }
          createMany: {
            args: Prisma.PushDeviceTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PushDeviceTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushDeviceTokenPayload>[]
          }
          delete: {
            args: Prisma.PushDeviceTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushDeviceTokenPayload>
          }
          update: {
            args: Prisma.PushDeviceTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushDeviceTokenPayload>
          }
          deleteMany: {
            args: Prisma.PushDeviceTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PushDeviceTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PushDeviceTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushDeviceTokenPayload>
          }
          aggregate: {
            args: Prisma.PushDeviceTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePushDeviceToken>
          }
          groupBy: {
            args: Prisma.PushDeviceTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PushDeviceTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PushDeviceTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PushDeviceTokenCountAggregateOutputType> | number
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
   * Count Type NotificationTemplateCountOutputType
   */

  export type NotificationTemplateCountOutputType = {
    jobs: number
  }

  export type NotificationTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | NotificationTemplateCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * NotificationTemplateCountOutputType without action
   */
  export type NotificationTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplateCountOutputType
     */
    select?: NotificationTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationTemplateCountOutputType without action
   */
  export type NotificationTemplateCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationJobWhereInput
  }


  /**
   * Count Type NotificationJobCountOutputType
   */

  export type NotificationJobCountOutputType = {
    attempts: number
  }

  export type NotificationJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | NotificationJobCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * NotificationJobCountOutputType without action
   */
  export type NotificationJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJobCountOutputType
     */
    select?: NotificationJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationJobCountOutputType without action
   */
  export type NotificationJobCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryAttemptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model NotificationTemplate
   */

  export type AggregateNotificationTemplate = {
    _count: NotificationTemplateCountAggregateOutputType | null
    _min: NotificationTemplateMinAggregateOutputType | null
    _max: NotificationTemplateMaxAggregateOutputType | null
  }

  export type NotificationTemplateMinAggregateOutputType = {
    id: string | null
    code: string | null
    channel: string | null
    templateBody: string | null
  }

  export type NotificationTemplateMaxAggregateOutputType = {
    id: string | null
    code: string | null
    channel: string | null
    templateBody: string | null
  }

  export type NotificationTemplateCountAggregateOutputType = {
    id: number
    code: number
    channel: number
    templateBody: number
    _all: number
  }


  export type NotificationTemplateMinAggregateInputType = {
    id?: true
    code?: true
    channel?: true
    templateBody?: true
  }

  export type NotificationTemplateMaxAggregateInputType = {
    id?: true
    code?: true
    channel?: true
    templateBody?: true
  }

  export type NotificationTemplateCountAggregateInputType = {
    id?: true
    code?: true
    channel?: true
    templateBody?: true
    _all?: true
  }

  export type NotificationTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationTemplate to aggregate.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationTemplates
    **/
    _count?: true | NotificationTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationTemplateMaxAggregateInputType
  }

  export type GetNotificationTemplateAggregateType<T extends NotificationTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationTemplate[P]>
      : GetScalarType<T[P], AggregateNotificationTemplate[P]>
  }




  export type NotificationTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationTemplateWhereInput
    orderBy?: NotificationTemplateOrderByWithAggregationInput | NotificationTemplateOrderByWithAggregationInput[]
    by: NotificationTemplateScalarFieldEnum[] | NotificationTemplateScalarFieldEnum
    having?: NotificationTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationTemplateCountAggregateInputType | true
    _min?: NotificationTemplateMinAggregateInputType
    _max?: NotificationTemplateMaxAggregateInputType
  }

  export type NotificationTemplateGroupByOutputType = {
    id: string
    code: string
    channel: string
    templateBody: string
    _count: NotificationTemplateCountAggregateOutputType | null
    _min: NotificationTemplateMinAggregateOutputType | null
    _max: NotificationTemplateMaxAggregateOutputType | null
  }

  type GetNotificationTemplateGroupByPayload<T extends NotificationTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationTemplateGroupByOutputType[P]>
        }
      >
    >


  export type NotificationTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    channel?: boolean
    templateBody?: boolean
    jobs?: boolean | NotificationTemplate$jobsArgs<ExtArgs>
    _count?: boolean | NotificationTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationTemplate"]>

  export type NotificationTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    channel?: boolean
    templateBody?: boolean
  }, ExtArgs["result"]["notificationTemplate"]>

  export type NotificationTemplateSelectScalar = {
    id?: boolean
    code?: boolean
    channel?: boolean
    templateBody?: boolean
  }

  export type NotificationTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | NotificationTemplate$jobsArgs<ExtArgs>
    _count?: boolean | NotificationTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotificationTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NotificationTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationTemplate"
    objects: {
      jobs: Prisma.$NotificationJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      channel: string
      templateBody: string
    }, ExtArgs["result"]["notificationTemplate"]>
    composites: {}
  }

  type NotificationTemplateGetPayload<S extends boolean | null | undefined | NotificationTemplateDefaultArgs> = $Result.GetResult<Prisma.$NotificationTemplatePayload, S>

  type NotificationTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationTemplateCountAggregateInputType | true
    }

  export interface NotificationTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationTemplate'], meta: { name: 'NotificationTemplate' } }
    /**
     * Find zero or one NotificationTemplate that matches the filter.
     * @param {NotificationTemplateFindUniqueArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationTemplateFindUniqueArgs>(args: SelectSubset<T, NotificationTemplateFindUniqueArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NotificationTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationTemplateFindUniqueOrThrowArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NotificationTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindFirstArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationTemplateFindFirstArgs>(args?: SelectSubset<T, NotificationTemplateFindFirstArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NotificationTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindFirstOrThrowArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NotificationTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationTemplates
     * const notificationTemplates = await prisma.notificationTemplate.findMany()
     * 
     * // Get first 10 NotificationTemplates
     * const notificationTemplates = await prisma.notificationTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationTemplateWithIdOnly = await prisma.notificationTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationTemplateFindManyArgs>(args?: SelectSubset<T, NotificationTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NotificationTemplate.
     * @param {NotificationTemplateCreateArgs} args - Arguments to create a NotificationTemplate.
     * @example
     * // Create one NotificationTemplate
     * const NotificationTemplate = await prisma.notificationTemplate.create({
     *   data: {
     *     // ... data to create a NotificationTemplate
     *   }
     * })
     * 
     */
    create<T extends NotificationTemplateCreateArgs>(args: SelectSubset<T, NotificationTemplateCreateArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NotificationTemplates.
     * @param {NotificationTemplateCreateManyArgs} args - Arguments to create many NotificationTemplates.
     * @example
     * // Create many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationTemplateCreateManyArgs>(args?: SelectSubset<T, NotificationTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationTemplates and returns the data saved in the database.
     * @param {NotificationTemplateCreateManyAndReturnArgs} args - Arguments to create many NotificationTemplates.
     * @example
     * // Create many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationTemplates and only return the `id`
     * const notificationTemplateWithIdOnly = await prisma.notificationTemplate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NotificationTemplate.
     * @param {NotificationTemplateDeleteArgs} args - Arguments to delete one NotificationTemplate.
     * @example
     * // Delete one NotificationTemplate
     * const NotificationTemplate = await prisma.notificationTemplate.delete({
     *   where: {
     *     // ... filter to delete one NotificationTemplate
     *   }
     * })
     * 
     */
    delete<T extends NotificationTemplateDeleteArgs>(args: SelectSubset<T, NotificationTemplateDeleteArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NotificationTemplate.
     * @param {NotificationTemplateUpdateArgs} args - Arguments to update one NotificationTemplate.
     * @example
     * // Update one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationTemplateUpdateArgs>(args: SelectSubset<T, NotificationTemplateUpdateArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NotificationTemplates.
     * @param {NotificationTemplateDeleteManyArgs} args - Arguments to filter NotificationTemplates to delete.
     * @example
     * // Delete a few NotificationTemplates
     * const { count } = await prisma.notificationTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationTemplateDeleteManyArgs>(args?: SelectSubset<T, NotificationTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationTemplateUpdateManyArgs>(args: SelectSubset<T, NotificationTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationTemplate.
     * @param {NotificationTemplateUpsertArgs} args - Arguments to update or create a NotificationTemplate.
     * @example
     * // Update or create a NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.upsert({
     *   create: {
     *     // ... data to create a NotificationTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationTemplate we want to update
     *   }
     * })
     */
    upsert<T extends NotificationTemplateUpsertArgs>(args: SelectSubset<T, NotificationTemplateUpsertArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NotificationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateCountArgs} args - Arguments to filter NotificationTemplates to count.
     * @example
     * // Count the number of NotificationTemplates
     * const count = await prisma.notificationTemplate.count({
     *   where: {
     *     // ... the filter for the NotificationTemplates we want to count
     *   }
     * })
    **/
    count<T extends NotificationTemplateCountArgs>(
      args?: Subset<T, NotificationTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationTemplateAggregateArgs>(args: Subset<T, NotificationTemplateAggregateArgs>): Prisma.PrismaPromise<GetNotificationTemplateAggregateType<T>>

    /**
     * Group by NotificationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateGroupByArgs} args - Group by arguments.
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
      T extends NotificationTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationTemplateGroupByArgs['orderBy'] }
        : { orderBy?: NotificationTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationTemplate model
   */
  readonly fields: NotificationTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends NotificationTemplate$jobsArgs<ExtArgs> = {}>(args?: Subset<T, NotificationTemplate$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the NotificationTemplate model
   */ 
  interface NotificationTemplateFieldRefs {
    readonly id: FieldRef<"NotificationTemplate", 'String'>
    readonly code: FieldRef<"NotificationTemplate", 'String'>
    readonly channel: FieldRef<"NotificationTemplate", 'String'>
    readonly templateBody: FieldRef<"NotificationTemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NotificationTemplate findUnique
   */
  export type NotificationTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate findUniqueOrThrow
   */
  export type NotificationTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate findFirst
   */
  export type NotificationTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTemplates.
     */
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate findFirstOrThrow
   */
  export type NotificationTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTemplates.
     */
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate findMany
   */
  export type NotificationTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NotificationTemplates to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate create
   */
  export type NotificationTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationTemplate.
     */
    data: XOR<NotificationTemplateCreateInput, NotificationTemplateUncheckedCreateInput>
  }

  /**
   * NotificationTemplate createMany
   */
  export type NotificationTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationTemplates.
     */
    data: NotificationTemplateCreateManyInput | NotificationTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationTemplate createManyAndReturn
   */
  export type NotificationTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NotificationTemplates.
     */
    data: NotificationTemplateCreateManyInput | NotificationTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationTemplate update
   */
  export type NotificationTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationTemplate.
     */
    data: XOR<NotificationTemplateUpdateInput, NotificationTemplateUncheckedUpdateInput>
    /**
     * Choose, which NotificationTemplate to update.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate updateMany
   */
  export type NotificationTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationTemplates.
     */
    data: XOR<NotificationTemplateUpdateManyMutationInput, NotificationTemplateUncheckedUpdateManyInput>
    /**
     * Filter which NotificationTemplates to update
     */
    where?: NotificationTemplateWhereInput
  }

  /**
   * NotificationTemplate upsert
   */
  export type NotificationTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationTemplate to update in case it exists.
     */
    where: NotificationTemplateWhereUniqueInput
    /**
     * In case the NotificationTemplate found by the `where` argument doesn't exist, create a new NotificationTemplate with this data.
     */
    create: XOR<NotificationTemplateCreateInput, NotificationTemplateUncheckedCreateInput>
    /**
     * In case the NotificationTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationTemplateUpdateInput, NotificationTemplateUncheckedUpdateInput>
  }

  /**
   * NotificationTemplate delete
   */
  export type NotificationTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * Filter which NotificationTemplate to delete.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate deleteMany
   */
  export type NotificationTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationTemplates to delete
     */
    where?: NotificationTemplateWhereInput
  }

  /**
   * NotificationTemplate.jobs
   */
  export type NotificationTemplate$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationJobInclude<ExtArgs> | null
    where?: NotificationJobWhereInput
    orderBy?: NotificationJobOrderByWithRelationInput | NotificationJobOrderByWithRelationInput[]
    cursor?: NotificationJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationJobScalarFieldEnum | NotificationJobScalarFieldEnum[]
  }

  /**
   * NotificationTemplate without action
   */
  export type NotificationTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
  }


  /**
   * Model NotificationJob
   */

  export type AggregateNotificationJob = {
    _count: NotificationJobCountAggregateOutputType | null
    _min: NotificationJobMinAggregateOutputType | null
    _max: NotificationJobMaxAggregateOutputType | null
  }

  export type NotificationJobMinAggregateOutputType = {
    id: string | null
    recipient: string | null
    userId: string | null
    role: string | null
    title: string | null
    message: string | null
    channel: string | null
    templateId: string | null
    cityCode: string | null
    status: string | null
    isRead: boolean | null
    sentAt: Date | null
    createdAt: Date | null
  }

  export type NotificationJobMaxAggregateOutputType = {
    id: string | null
    recipient: string | null
    userId: string | null
    role: string | null
    title: string | null
    message: string | null
    channel: string | null
    templateId: string | null
    cityCode: string | null
    status: string | null
    isRead: boolean | null
    sentAt: Date | null
    createdAt: Date | null
  }

  export type NotificationJobCountAggregateOutputType = {
    id: number
    recipient: number
    userId: number
    role: number
    title: number
    message: number
    channel: number
    templateId: number
    cityCode: number
    status: number
    isRead: number
    sentAt: number
    createdAt: number
    _all: number
  }


  export type NotificationJobMinAggregateInputType = {
    id?: true
    recipient?: true
    userId?: true
    role?: true
    title?: true
    message?: true
    channel?: true
    templateId?: true
    cityCode?: true
    status?: true
    isRead?: true
    sentAt?: true
    createdAt?: true
  }

  export type NotificationJobMaxAggregateInputType = {
    id?: true
    recipient?: true
    userId?: true
    role?: true
    title?: true
    message?: true
    channel?: true
    templateId?: true
    cityCode?: true
    status?: true
    isRead?: true
    sentAt?: true
    createdAt?: true
  }

  export type NotificationJobCountAggregateInputType = {
    id?: true
    recipient?: true
    userId?: true
    role?: true
    title?: true
    message?: true
    channel?: true
    templateId?: true
    cityCode?: true
    status?: true
    isRead?: true
    sentAt?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationJob to aggregate.
     */
    where?: NotificationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationJobs to fetch.
     */
    orderBy?: NotificationJobOrderByWithRelationInput | NotificationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationJobs
    **/
    _count?: true | NotificationJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationJobMaxAggregateInputType
  }

  export type GetNotificationJobAggregateType<T extends NotificationJobAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationJob[P]>
      : GetScalarType<T[P], AggregateNotificationJob[P]>
  }




  export type NotificationJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationJobWhereInput
    orderBy?: NotificationJobOrderByWithAggregationInput | NotificationJobOrderByWithAggregationInput[]
    by: NotificationJobScalarFieldEnum[] | NotificationJobScalarFieldEnum
    having?: NotificationJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationJobCountAggregateInputType | true
    _min?: NotificationJobMinAggregateInputType
    _max?: NotificationJobMaxAggregateInputType
  }

  export type NotificationJobGroupByOutputType = {
    id: string
    recipient: string
    userId: string | null
    role: string | null
    title: string | null
    message: string | null
    channel: string
    templateId: string
    cityCode: string | null
    status: string
    isRead: boolean
    sentAt: Date | null
    createdAt: Date
    _count: NotificationJobCountAggregateOutputType | null
    _min: NotificationJobMinAggregateOutputType | null
    _max: NotificationJobMaxAggregateOutputType | null
  }

  type GetNotificationJobGroupByPayload<T extends NotificationJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationJobGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationJobGroupByOutputType[P]>
        }
      >
    >


  export type NotificationJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipient?: boolean
    userId?: boolean
    role?: boolean
    title?: boolean
    message?: boolean
    channel?: boolean
    templateId?: boolean
    cityCode?: boolean
    status?: boolean
    isRead?: boolean
    sentAt?: boolean
    createdAt?: boolean
    template?: boolean | NotificationTemplateDefaultArgs<ExtArgs>
    attempts?: boolean | NotificationJob$attemptsArgs<ExtArgs>
    _count?: boolean | NotificationJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationJob"]>

  export type NotificationJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipient?: boolean
    userId?: boolean
    role?: boolean
    title?: boolean
    message?: boolean
    channel?: boolean
    templateId?: boolean
    cityCode?: boolean
    status?: boolean
    isRead?: boolean
    sentAt?: boolean
    createdAt?: boolean
    template?: boolean | NotificationTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationJob"]>

  export type NotificationJobSelectScalar = {
    id?: boolean
    recipient?: boolean
    userId?: boolean
    role?: boolean
    title?: boolean
    message?: boolean
    channel?: boolean
    templateId?: boolean
    cityCode?: boolean
    status?: boolean
    isRead?: boolean
    sentAt?: boolean
    createdAt?: boolean
  }

  export type NotificationJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | NotificationTemplateDefaultArgs<ExtArgs>
    attempts?: boolean | NotificationJob$attemptsArgs<ExtArgs>
    _count?: boolean | NotificationJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotificationJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | NotificationTemplateDefaultArgs<ExtArgs>
  }

  export type $NotificationJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationJob"
    objects: {
      template: Prisma.$NotificationTemplatePayload<ExtArgs>
      attempts: Prisma.$DeliveryAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipient: string
      userId: string | null
      role: string | null
      title: string | null
      message: string | null
      channel: string
      templateId: string
      cityCode: string | null
      status: string
      isRead: boolean
      sentAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["notificationJob"]>
    composites: {}
  }

  type NotificationJobGetPayload<S extends boolean | null | undefined | NotificationJobDefaultArgs> = $Result.GetResult<Prisma.$NotificationJobPayload, S>

  type NotificationJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationJobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationJobCountAggregateInputType | true
    }

  export interface NotificationJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationJob'], meta: { name: 'NotificationJob' } }
    /**
     * Find zero or one NotificationJob that matches the filter.
     * @param {NotificationJobFindUniqueArgs} args - Arguments to find a NotificationJob
     * @example
     * // Get one NotificationJob
     * const notificationJob = await prisma.notificationJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationJobFindUniqueArgs>(args: SelectSubset<T, NotificationJobFindUniqueArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NotificationJob that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationJobFindUniqueOrThrowArgs} args - Arguments to find a NotificationJob
     * @example
     * // Get one NotificationJob
     * const notificationJob = await prisma.notificationJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationJobFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NotificationJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobFindFirstArgs} args - Arguments to find a NotificationJob
     * @example
     * // Get one NotificationJob
     * const notificationJob = await prisma.notificationJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationJobFindFirstArgs>(args?: SelectSubset<T, NotificationJobFindFirstArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NotificationJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobFindFirstOrThrowArgs} args - Arguments to find a NotificationJob
     * @example
     * // Get one NotificationJob
     * const notificationJob = await prisma.notificationJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationJobFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NotificationJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationJobs
     * const notificationJobs = await prisma.notificationJob.findMany()
     * 
     * // Get first 10 NotificationJobs
     * const notificationJobs = await prisma.notificationJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationJobWithIdOnly = await prisma.notificationJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationJobFindManyArgs>(args?: SelectSubset<T, NotificationJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NotificationJob.
     * @param {NotificationJobCreateArgs} args - Arguments to create a NotificationJob.
     * @example
     * // Create one NotificationJob
     * const NotificationJob = await prisma.notificationJob.create({
     *   data: {
     *     // ... data to create a NotificationJob
     *   }
     * })
     * 
     */
    create<T extends NotificationJobCreateArgs>(args: SelectSubset<T, NotificationJobCreateArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NotificationJobs.
     * @param {NotificationJobCreateManyArgs} args - Arguments to create many NotificationJobs.
     * @example
     * // Create many NotificationJobs
     * const notificationJob = await prisma.notificationJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationJobCreateManyArgs>(args?: SelectSubset<T, NotificationJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationJobs and returns the data saved in the database.
     * @param {NotificationJobCreateManyAndReturnArgs} args - Arguments to create many NotificationJobs.
     * @example
     * // Create many NotificationJobs
     * const notificationJob = await prisma.notificationJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationJobs and only return the `id`
     * const notificationJobWithIdOnly = await prisma.notificationJob.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationJobCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NotificationJob.
     * @param {NotificationJobDeleteArgs} args - Arguments to delete one NotificationJob.
     * @example
     * // Delete one NotificationJob
     * const NotificationJob = await prisma.notificationJob.delete({
     *   where: {
     *     // ... filter to delete one NotificationJob
     *   }
     * })
     * 
     */
    delete<T extends NotificationJobDeleteArgs>(args: SelectSubset<T, NotificationJobDeleteArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NotificationJob.
     * @param {NotificationJobUpdateArgs} args - Arguments to update one NotificationJob.
     * @example
     * // Update one NotificationJob
     * const notificationJob = await prisma.notificationJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationJobUpdateArgs>(args: SelectSubset<T, NotificationJobUpdateArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NotificationJobs.
     * @param {NotificationJobDeleteManyArgs} args - Arguments to filter NotificationJobs to delete.
     * @example
     * // Delete a few NotificationJobs
     * const { count } = await prisma.notificationJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationJobDeleteManyArgs>(args?: SelectSubset<T, NotificationJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationJobs
     * const notificationJob = await prisma.notificationJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationJobUpdateManyArgs>(args: SelectSubset<T, NotificationJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationJob.
     * @param {NotificationJobUpsertArgs} args - Arguments to update or create a NotificationJob.
     * @example
     * // Update or create a NotificationJob
     * const notificationJob = await prisma.notificationJob.upsert({
     *   create: {
     *     // ... data to create a NotificationJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationJob we want to update
     *   }
     * })
     */
    upsert<T extends NotificationJobUpsertArgs>(args: SelectSubset<T, NotificationJobUpsertArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NotificationJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobCountArgs} args - Arguments to filter NotificationJobs to count.
     * @example
     * // Count the number of NotificationJobs
     * const count = await prisma.notificationJob.count({
     *   where: {
     *     // ... the filter for the NotificationJobs we want to count
     *   }
     * })
    **/
    count<T extends NotificationJobCountArgs>(
      args?: Subset<T, NotificationJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationJobAggregateArgs>(args: Subset<T, NotificationJobAggregateArgs>): Prisma.PrismaPromise<GetNotificationJobAggregateType<T>>

    /**
     * Group by NotificationJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobGroupByArgs} args - Group by arguments.
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
      T extends NotificationJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationJobGroupByArgs['orderBy'] }
        : { orderBy?: NotificationJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationJob model
   */
  readonly fields: NotificationJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends NotificationTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationTemplateDefaultArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    attempts<T extends NotificationJob$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, NotificationJob$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the NotificationJob model
   */ 
  interface NotificationJobFieldRefs {
    readonly id: FieldRef<"NotificationJob", 'String'>
    readonly recipient: FieldRef<"NotificationJob", 'String'>
    readonly userId: FieldRef<"NotificationJob", 'String'>
    readonly role: FieldRef<"NotificationJob", 'String'>
    readonly title: FieldRef<"NotificationJob", 'String'>
    readonly message: FieldRef<"NotificationJob", 'String'>
    readonly channel: FieldRef<"NotificationJob", 'String'>
    readonly templateId: FieldRef<"NotificationJob", 'String'>
    readonly cityCode: FieldRef<"NotificationJob", 'String'>
    readonly status: FieldRef<"NotificationJob", 'String'>
    readonly isRead: FieldRef<"NotificationJob", 'Boolean'>
    readonly sentAt: FieldRef<"NotificationJob", 'DateTime'>
    readonly createdAt: FieldRef<"NotificationJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationJob findUnique
   */
  export type NotificationJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationJobInclude<ExtArgs> | null
    /**
     * Filter, which NotificationJob to fetch.
     */
    where: NotificationJobWhereUniqueInput
  }

  /**
   * NotificationJob findUniqueOrThrow
   */
  export type NotificationJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationJobInclude<ExtArgs> | null
    /**
     * Filter, which NotificationJob to fetch.
     */
    where: NotificationJobWhereUniqueInput
  }

  /**
   * NotificationJob findFirst
   */
  export type NotificationJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationJobInclude<ExtArgs> | null
    /**
     * Filter, which NotificationJob to fetch.
     */
    where?: NotificationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationJobs to fetch.
     */
    orderBy?: NotificationJobOrderByWithRelationInput | NotificationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationJobs.
     */
    cursor?: NotificationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationJobs.
     */
    distinct?: NotificationJobScalarFieldEnum | NotificationJobScalarFieldEnum[]
  }

  /**
   * NotificationJob findFirstOrThrow
   */
  export type NotificationJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationJobInclude<ExtArgs> | null
    /**
     * Filter, which NotificationJob to fetch.
     */
    where?: NotificationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationJobs to fetch.
     */
    orderBy?: NotificationJobOrderByWithRelationInput | NotificationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationJobs.
     */
    cursor?: NotificationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationJobs.
     */
    distinct?: NotificationJobScalarFieldEnum | NotificationJobScalarFieldEnum[]
  }

  /**
   * NotificationJob findMany
   */
  export type NotificationJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationJobInclude<ExtArgs> | null
    /**
     * Filter, which NotificationJobs to fetch.
     */
    where?: NotificationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationJobs to fetch.
     */
    orderBy?: NotificationJobOrderByWithRelationInput | NotificationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationJobs.
     */
    cursor?: NotificationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationJobs.
     */
    skip?: number
    distinct?: NotificationJobScalarFieldEnum | NotificationJobScalarFieldEnum[]
  }

  /**
   * NotificationJob create
   */
  export type NotificationJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationJobInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationJob.
     */
    data: XOR<NotificationJobCreateInput, NotificationJobUncheckedCreateInput>
  }

  /**
   * NotificationJob createMany
   */
  export type NotificationJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationJobs.
     */
    data: NotificationJobCreateManyInput | NotificationJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationJob createManyAndReturn
   */
  export type NotificationJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NotificationJobs.
     */
    data: NotificationJobCreateManyInput | NotificationJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationJob update
   */
  export type NotificationJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationJobInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationJob.
     */
    data: XOR<NotificationJobUpdateInput, NotificationJobUncheckedUpdateInput>
    /**
     * Choose, which NotificationJob to update.
     */
    where: NotificationJobWhereUniqueInput
  }

  /**
   * NotificationJob updateMany
   */
  export type NotificationJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationJobs.
     */
    data: XOR<NotificationJobUpdateManyMutationInput, NotificationJobUncheckedUpdateManyInput>
    /**
     * Filter which NotificationJobs to update
     */
    where?: NotificationJobWhereInput
  }

  /**
   * NotificationJob upsert
   */
  export type NotificationJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationJobInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationJob to update in case it exists.
     */
    where: NotificationJobWhereUniqueInput
    /**
     * In case the NotificationJob found by the `where` argument doesn't exist, create a new NotificationJob with this data.
     */
    create: XOR<NotificationJobCreateInput, NotificationJobUncheckedCreateInput>
    /**
     * In case the NotificationJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationJobUpdateInput, NotificationJobUncheckedUpdateInput>
  }

  /**
   * NotificationJob delete
   */
  export type NotificationJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationJobInclude<ExtArgs> | null
    /**
     * Filter which NotificationJob to delete.
     */
    where: NotificationJobWhereUniqueInput
  }

  /**
   * NotificationJob deleteMany
   */
  export type NotificationJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationJobs to delete
     */
    where?: NotificationJobWhereInput
  }

  /**
   * NotificationJob.attempts
   */
  export type NotificationJob$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    where?: DeliveryAttemptWhereInput
    orderBy?: DeliveryAttemptOrderByWithRelationInput | DeliveryAttemptOrderByWithRelationInput[]
    cursor?: DeliveryAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryAttemptScalarFieldEnum | DeliveryAttemptScalarFieldEnum[]
  }

  /**
   * NotificationJob without action
   */
  export type NotificationJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationJobInclude<ExtArgs> | null
  }


  /**
   * Model DeliveryAttempt
   */

  export type AggregateDeliveryAttempt = {
    _count: DeliveryAttemptCountAggregateOutputType | null
    _avg: DeliveryAttemptAvgAggregateOutputType | null
    _sum: DeliveryAttemptSumAggregateOutputType | null
    _min: DeliveryAttemptMinAggregateOutputType | null
    _max: DeliveryAttemptMaxAggregateOutputType | null
  }

  export type DeliveryAttemptAvgAggregateOutputType = {
    attemptNum: number | null
  }

  export type DeliveryAttemptSumAggregateOutputType = {
    attemptNum: number | null
  }

  export type DeliveryAttemptMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    attemptNum: number | null
    status: string | null
    responseCode: string | null
    attemptedAt: Date | null
  }

  export type DeliveryAttemptMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    attemptNum: number | null
    status: string | null
    responseCode: string | null
    attemptedAt: Date | null
  }

  export type DeliveryAttemptCountAggregateOutputType = {
    id: number
    jobId: number
    attemptNum: number
    status: number
    responseCode: number
    attemptedAt: number
    _all: number
  }


  export type DeliveryAttemptAvgAggregateInputType = {
    attemptNum?: true
  }

  export type DeliveryAttemptSumAggregateInputType = {
    attemptNum?: true
  }

  export type DeliveryAttemptMinAggregateInputType = {
    id?: true
    jobId?: true
    attemptNum?: true
    status?: true
    responseCode?: true
    attemptedAt?: true
  }

  export type DeliveryAttemptMaxAggregateInputType = {
    id?: true
    jobId?: true
    attemptNum?: true
    status?: true
    responseCode?: true
    attemptedAt?: true
  }

  export type DeliveryAttemptCountAggregateInputType = {
    id?: true
    jobId?: true
    attemptNum?: true
    status?: true
    responseCode?: true
    attemptedAt?: true
    _all?: true
  }

  export type DeliveryAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryAttempt to aggregate.
     */
    where?: DeliveryAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryAttempts to fetch.
     */
    orderBy?: DeliveryAttemptOrderByWithRelationInput | DeliveryAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryAttempts
    **/
    _count?: true | DeliveryAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliveryAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryAttemptMaxAggregateInputType
  }

  export type GetDeliveryAttemptAggregateType<T extends DeliveryAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryAttempt[P]>
      : GetScalarType<T[P], AggregateDeliveryAttempt[P]>
  }




  export type DeliveryAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryAttemptWhereInput
    orderBy?: DeliveryAttemptOrderByWithAggregationInput | DeliveryAttemptOrderByWithAggregationInput[]
    by: DeliveryAttemptScalarFieldEnum[] | DeliveryAttemptScalarFieldEnum
    having?: DeliveryAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryAttemptCountAggregateInputType | true
    _avg?: DeliveryAttemptAvgAggregateInputType
    _sum?: DeliveryAttemptSumAggregateInputType
    _min?: DeliveryAttemptMinAggregateInputType
    _max?: DeliveryAttemptMaxAggregateInputType
  }

  export type DeliveryAttemptGroupByOutputType = {
    id: string
    jobId: string
    attemptNum: number
    status: string
    responseCode: string | null
    attemptedAt: Date
    _count: DeliveryAttemptCountAggregateOutputType | null
    _avg: DeliveryAttemptAvgAggregateOutputType | null
    _sum: DeliveryAttemptSumAggregateOutputType | null
    _min: DeliveryAttemptMinAggregateOutputType | null
    _max: DeliveryAttemptMaxAggregateOutputType | null
  }

  type GetDeliveryAttemptGroupByPayload<T extends DeliveryAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryAttemptGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    attemptNum?: boolean
    status?: boolean
    responseCode?: boolean
    attemptedAt?: boolean
    job?: boolean | NotificationJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryAttempt"]>

  export type DeliveryAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    attemptNum?: boolean
    status?: boolean
    responseCode?: boolean
    attemptedAt?: boolean
    job?: boolean | NotificationJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryAttempt"]>

  export type DeliveryAttemptSelectScalar = {
    id?: boolean
    jobId?: boolean
    attemptNum?: boolean
    status?: boolean
    responseCode?: boolean
    attemptedAt?: boolean
  }

  export type DeliveryAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | NotificationJobDefaultArgs<ExtArgs>
  }
  export type DeliveryAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | NotificationJobDefaultArgs<ExtArgs>
  }

  export type $DeliveryAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryAttempt"
    objects: {
      job: Prisma.$NotificationJobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      attemptNum: number
      status: string
      responseCode: string | null
      attemptedAt: Date
    }, ExtArgs["result"]["deliveryAttempt"]>
    composites: {}
  }

  type DeliveryAttemptGetPayload<S extends boolean | null | undefined | DeliveryAttemptDefaultArgs> = $Result.GetResult<Prisma.$DeliveryAttemptPayload, S>

  type DeliveryAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeliveryAttemptFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeliveryAttemptCountAggregateInputType | true
    }

  export interface DeliveryAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryAttempt'], meta: { name: 'DeliveryAttempt' } }
    /**
     * Find zero or one DeliveryAttempt that matches the filter.
     * @param {DeliveryAttemptFindUniqueArgs} args - Arguments to find a DeliveryAttempt
     * @example
     * // Get one DeliveryAttempt
     * const deliveryAttempt = await prisma.deliveryAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryAttemptFindUniqueArgs>(args: SelectSubset<T, DeliveryAttemptFindUniqueArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DeliveryAttempt that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeliveryAttemptFindUniqueOrThrowArgs} args - Arguments to find a DeliveryAttempt
     * @example
     * // Get one DeliveryAttempt
     * const deliveryAttempt = await prisma.deliveryAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DeliveryAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptFindFirstArgs} args - Arguments to find a DeliveryAttempt
     * @example
     * // Get one DeliveryAttempt
     * const deliveryAttempt = await prisma.deliveryAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryAttemptFindFirstArgs>(args?: SelectSubset<T, DeliveryAttemptFindFirstArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DeliveryAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptFindFirstOrThrowArgs} args - Arguments to find a DeliveryAttempt
     * @example
     * // Get one DeliveryAttempt
     * const deliveryAttempt = await prisma.deliveryAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DeliveryAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryAttempts
     * const deliveryAttempts = await prisma.deliveryAttempt.findMany()
     * 
     * // Get first 10 DeliveryAttempts
     * const deliveryAttempts = await prisma.deliveryAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryAttemptWithIdOnly = await prisma.deliveryAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryAttemptFindManyArgs>(args?: SelectSubset<T, DeliveryAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DeliveryAttempt.
     * @param {DeliveryAttemptCreateArgs} args - Arguments to create a DeliveryAttempt.
     * @example
     * // Create one DeliveryAttempt
     * const DeliveryAttempt = await prisma.deliveryAttempt.create({
     *   data: {
     *     // ... data to create a DeliveryAttempt
     *   }
     * })
     * 
     */
    create<T extends DeliveryAttemptCreateArgs>(args: SelectSubset<T, DeliveryAttemptCreateArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DeliveryAttempts.
     * @param {DeliveryAttemptCreateManyArgs} args - Arguments to create many DeliveryAttempts.
     * @example
     * // Create many DeliveryAttempts
     * const deliveryAttempt = await prisma.deliveryAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryAttemptCreateManyArgs>(args?: SelectSubset<T, DeliveryAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryAttempts and returns the data saved in the database.
     * @param {DeliveryAttemptCreateManyAndReturnArgs} args - Arguments to create many DeliveryAttempts.
     * @example
     * // Create many DeliveryAttempts
     * const deliveryAttempt = await prisma.deliveryAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryAttempts and only return the `id`
     * const deliveryAttemptWithIdOnly = await prisma.deliveryAttempt.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DeliveryAttempt.
     * @param {DeliveryAttemptDeleteArgs} args - Arguments to delete one DeliveryAttempt.
     * @example
     * // Delete one DeliveryAttempt
     * const DeliveryAttempt = await prisma.deliveryAttempt.delete({
     *   where: {
     *     // ... filter to delete one DeliveryAttempt
     *   }
     * })
     * 
     */
    delete<T extends DeliveryAttemptDeleteArgs>(args: SelectSubset<T, DeliveryAttemptDeleteArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DeliveryAttempt.
     * @param {DeliveryAttemptUpdateArgs} args - Arguments to update one DeliveryAttempt.
     * @example
     * // Update one DeliveryAttempt
     * const deliveryAttempt = await prisma.deliveryAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryAttemptUpdateArgs>(args: SelectSubset<T, DeliveryAttemptUpdateArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DeliveryAttempts.
     * @param {DeliveryAttemptDeleteManyArgs} args - Arguments to filter DeliveryAttempts to delete.
     * @example
     * // Delete a few DeliveryAttempts
     * const { count } = await prisma.deliveryAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryAttemptDeleteManyArgs>(args?: SelectSubset<T, DeliveryAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryAttempts
     * const deliveryAttempt = await prisma.deliveryAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryAttemptUpdateManyArgs>(args: SelectSubset<T, DeliveryAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeliveryAttempt.
     * @param {DeliveryAttemptUpsertArgs} args - Arguments to update or create a DeliveryAttempt.
     * @example
     * // Update or create a DeliveryAttempt
     * const deliveryAttempt = await prisma.deliveryAttempt.upsert({
     *   create: {
     *     // ... data to create a DeliveryAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryAttempt we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryAttemptUpsertArgs>(args: SelectSubset<T, DeliveryAttemptUpsertArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DeliveryAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptCountArgs} args - Arguments to filter DeliveryAttempts to count.
     * @example
     * // Count the number of DeliveryAttempts
     * const count = await prisma.deliveryAttempt.count({
     *   where: {
     *     // ... the filter for the DeliveryAttempts we want to count
     *   }
     * })
    **/
    count<T extends DeliveryAttemptCountArgs>(
      args?: Subset<T, DeliveryAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeliveryAttemptAggregateArgs>(args: Subset<T, DeliveryAttemptAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAttemptAggregateType<T>>

    /**
     * Group by DeliveryAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptGroupByArgs} args - Group by arguments.
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
      T extends DeliveryAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryAttemptGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeliveryAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryAttempt model
   */
  readonly fields: DeliveryAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends NotificationJobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationJobDefaultArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the DeliveryAttempt model
   */ 
  interface DeliveryAttemptFieldRefs {
    readonly id: FieldRef<"DeliveryAttempt", 'String'>
    readonly jobId: FieldRef<"DeliveryAttempt", 'String'>
    readonly attemptNum: FieldRef<"DeliveryAttempt", 'Int'>
    readonly status: FieldRef<"DeliveryAttempt", 'String'>
    readonly responseCode: FieldRef<"DeliveryAttempt", 'String'>
    readonly attemptedAt: FieldRef<"DeliveryAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryAttempt findUnique
   */
  export type DeliveryAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryAttempt to fetch.
     */
    where: DeliveryAttemptWhereUniqueInput
  }

  /**
   * DeliveryAttempt findUniqueOrThrow
   */
  export type DeliveryAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryAttempt to fetch.
     */
    where: DeliveryAttemptWhereUniqueInput
  }

  /**
   * DeliveryAttempt findFirst
   */
  export type DeliveryAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryAttempt to fetch.
     */
    where?: DeliveryAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryAttempts to fetch.
     */
    orderBy?: DeliveryAttemptOrderByWithRelationInput | DeliveryAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryAttempts.
     */
    cursor?: DeliveryAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryAttempts.
     */
    distinct?: DeliveryAttemptScalarFieldEnum | DeliveryAttemptScalarFieldEnum[]
  }

  /**
   * DeliveryAttempt findFirstOrThrow
   */
  export type DeliveryAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryAttempt to fetch.
     */
    where?: DeliveryAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryAttempts to fetch.
     */
    orderBy?: DeliveryAttemptOrderByWithRelationInput | DeliveryAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryAttempts.
     */
    cursor?: DeliveryAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryAttempts.
     */
    distinct?: DeliveryAttemptScalarFieldEnum | DeliveryAttemptScalarFieldEnum[]
  }

  /**
   * DeliveryAttempt findMany
   */
  export type DeliveryAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryAttempts to fetch.
     */
    where?: DeliveryAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryAttempts to fetch.
     */
    orderBy?: DeliveryAttemptOrderByWithRelationInput | DeliveryAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryAttempts.
     */
    cursor?: DeliveryAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryAttempts.
     */
    skip?: number
    distinct?: DeliveryAttemptScalarFieldEnum | DeliveryAttemptScalarFieldEnum[]
  }

  /**
   * DeliveryAttempt create
   */
  export type DeliveryAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryAttempt.
     */
    data: XOR<DeliveryAttemptCreateInput, DeliveryAttemptUncheckedCreateInput>
  }

  /**
   * DeliveryAttempt createMany
   */
  export type DeliveryAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryAttempts.
     */
    data: DeliveryAttemptCreateManyInput | DeliveryAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryAttempt createManyAndReturn
   */
  export type DeliveryAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DeliveryAttempts.
     */
    data: DeliveryAttemptCreateManyInput | DeliveryAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryAttempt update
   */
  export type DeliveryAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryAttempt.
     */
    data: XOR<DeliveryAttemptUpdateInput, DeliveryAttemptUncheckedUpdateInput>
    /**
     * Choose, which DeliveryAttempt to update.
     */
    where: DeliveryAttemptWhereUniqueInput
  }

  /**
   * DeliveryAttempt updateMany
   */
  export type DeliveryAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryAttempts.
     */
    data: XOR<DeliveryAttemptUpdateManyMutationInput, DeliveryAttemptUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryAttempts to update
     */
    where?: DeliveryAttemptWhereInput
  }

  /**
   * DeliveryAttempt upsert
   */
  export type DeliveryAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryAttempt to update in case it exists.
     */
    where: DeliveryAttemptWhereUniqueInput
    /**
     * In case the DeliveryAttempt found by the `where` argument doesn't exist, create a new DeliveryAttempt with this data.
     */
    create: XOR<DeliveryAttemptCreateInput, DeliveryAttemptUncheckedCreateInput>
    /**
     * In case the DeliveryAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryAttemptUpdateInput, DeliveryAttemptUncheckedUpdateInput>
  }

  /**
   * DeliveryAttempt delete
   */
  export type DeliveryAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter which DeliveryAttempt to delete.
     */
    where: DeliveryAttemptWhereUniqueInput
  }

  /**
   * DeliveryAttempt deleteMany
   */
  export type DeliveryAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryAttempts to delete
     */
    where?: DeliveryAttemptWhereInput
  }

  /**
   * DeliveryAttempt without action
   */
  export type DeliveryAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
  }


  /**
   * Model PushDeviceToken
   */

  export type AggregatePushDeviceToken = {
    _count: PushDeviceTokenCountAggregateOutputType | null
    _min: PushDeviceTokenMinAggregateOutputType | null
    _max: PushDeviceTokenMaxAggregateOutputType | null
  }

  export type PushDeviceTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    role: string | null
    token: string | null
    platform: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PushDeviceTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    role: string | null
    token: string | null
    platform: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PushDeviceTokenCountAggregateOutputType = {
    id: number
    userId: number
    role: number
    token: number
    platform: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PushDeviceTokenMinAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    token?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PushDeviceTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    token?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PushDeviceTokenCountAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    token?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PushDeviceTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushDeviceToken to aggregate.
     */
    where?: PushDeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushDeviceTokens to fetch.
     */
    orderBy?: PushDeviceTokenOrderByWithRelationInput | PushDeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PushDeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushDeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushDeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PushDeviceTokens
    **/
    _count?: true | PushDeviceTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PushDeviceTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PushDeviceTokenMaxAggregateInputType
  }

  export type GetPushDeviceTokenAggregateType<T extends PushDeviceTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePushDeviceToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePushDeviceToken[P]>
      : GetScalarType<T[P], AggregatePushDeviceToken[P]>
  }




  export type PushDeviceTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushDeviceTokenWhereInput
    orderBy?: PushDeviceTokenOrderByWithAggregationInput | PushDeviceTokenOrderByWithAggregationInput[]
    by: PushDeviceTokenScalarFieldEnum[] | PushDeviceTokenScalarFieldEnum
    having?: PushDeviceTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PushDeviceTokenCountAggregateInputType | true
    _min?: PushDeviceTokenMinAggregateInputType
    _max?: PushDeviceTokenMaxAggregateInputType
  }

  export type PushDeviceTokenGroupByOutputType = {
    id: string
    userId: string
    role: string
    token: string
    platform: string
    createdAt: Date
    updatedAt: Date
    _count: PushDeviceTokenCountAggregateOutputType | null
    _min: PushDeviceTokenMinAggregateOutputType | null
    _max: PushDeviceTokenMaxAggregateOutputType | null
  }

  type GetPushDeviceTokenGroupByPayload<T extends PushDeviceTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PushDeviceTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PushDeviceTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PushDeviceTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PushDeviceTokenGroupByOutputType[P]>
        }
      >
    >


  export type PushDeviceTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    token?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pushDeviceToken"]>

  export type PushDeviceTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    token?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pushDeviceToken"]>

  export type PushDeviceTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    role?: boolean
    token?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PushDeviceTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PushDeviceToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      role: string
      token: string
      platform: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pushDeviceToken"]>
    composites: {}
  }

  type PushDeviceTokenGetPayload<S extends boolean | null | undefined | PushDeviceTokenDefaultArgs> = $Result.GetResult<Prisma.$PushDeviceTokenPayload, S>

  type PushDeviceTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PushDeviceTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PushDeviceTokenCountAggregateInputType | true
    }

  export interface PushDeviceTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PushDeviceToken'], meta: { name: 'PushDeviceToken' } }
    /**
     * Find zero or one PushDeviceToken that matches the filter.
     * @param {PushDeviceTokenFindUniqueArgs} args - Arguments to find a PushDeviceToken
     * @example
     * // Get one PushDeviceToken
     * const pushDeviceToken = await prisma.pushDeviceToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PushDeviceTokenFindUniqueArgs>(args: SelectSubset<T, PushDeviceTokenFindUniqueArgs<ExtArgs>>): Prisma__PushDeviceTokenClient<$Result.GetResult<Prisma.$PushDeviceTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PushDeviceToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PushDeviceTokenFindUniqueOrThrowArgs} args - Arguments to find a PushDeviceToken
     * @example
     * // Get one PushDeviceToken
     * const pushDeviceToken = await prisma.pushDeviceToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PushDeviceTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PushDeviceTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PushDeviceTokenClient<$Result.GetResult<Prisma.$PushDeviceTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PushDeviceToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushDeviceTokenFindFirstArgs} args - Arguments to find a PushDeviceToken
     * @example
     * // Get one PushDeviceToken
     * const pushDeviceToken = await prisma.pushDeviceToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PushDeviceTokenFindFirstArgs>(args?: SelectSubset<T, PushDeviceTokenFindFirstArgs<ExtArgs>>): Prisma__PushDeviceTokenClient<$Result.GetResult<Prisma.$PushDeviceTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PushDeviceToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushDeviceTokenFindFirstOrThrowArgs} args - Arguments to find a PushDeviceToken
     * @example
     * // Get one PushDeviceToken
     * const pushDeviceToken = await prisma.pushDeviceToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PushDeviceTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PushDeviceTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PushDeviceTokenClient<$Result.GetResult<Prisma.$PushDeviceTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PushDeviceTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushDeviceTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PushDeviceTokens
     * const pushDeviceTokens = await prisma.pushDeviceToken.findMany()
     * 
     * // Get first 10 PushDeviceTokens
     * const pushDeviceTokens = await prisma.pushDeviceToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pushDeviceTokenWithIdOnly = await prisma.pushDeviceToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PushDeviceTokenFindManyArgs>(args?: SelectSubset<T, PushDeviceTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushDeviceTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PushDeviceToken.
     * @param {PushDeviceTokenCreateArgs} args - Arguments to create a PushDeviceToken.
     * @example
     * // Create one PushDeviceToken
     * const PushDeviceToken = await prisma.pushDeviceToken.create({
     *   data: {
     *     // ... data to create a PushDeviceToken
     *   }
     * })
     * 
     */
    create<T extends PushDeviceTokenCreateArgs>(args: SelectSubset<T, PushDeviceTokenCreateArgs<ExtArgs>>): Prisma__PushDeviceTokenClient<$Result.GetResult<Prisma.$PushDeviceTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PushDeviceTokens.
     * @param {PushDeviceTokenCreateManyArgs} args - Arguments to create many PushDeviceTokens.
     * @example
     * // Create many PushDeviceTokens
     * const pushDeviceToken = await prisma.pushDeviceToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PushDeviceTokenCreateManyArgs>(args?: SelectSubset<T, PushDeviceTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PushDeviceTokens and returns the data saved in the database.
     * @param {PushDeviceTokenCreateManyAndReturnArgs} args - Arguments to create many PushDeviceTokens.
     * @example
     * // Create many PushDeviceTokens
     * const pushDeviceToken = await prisma.pushDeviceToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PushDeviceTokens and only return the `id`
     * const pushDeviceTokenWithIdOnly = await prisma.pushDeviceToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PushDeviceTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PushDeviceTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushDeviceTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PushDeviceToken.
     * @param {PushDeviceTokenDeleteArgs} args - Arguments to delete one PushDeviceToken.
     * @example
     * // Delete one PushDeviceToken
     * const PushDeviceToken = await prisma.pushDeviceToken.delete({
     *   where: {
     *     // ... filter to delete one PushDeviceToken
     *   }
     * })
     * 
     */
    delete<T extends PushDeviceTokenDeleteArgs>(args: SelectSubset<T, PushDeviceTokenDeleteArgs<ExtArgs>>): Prisma__PushDeviceTokenClient<$Result.GetResult<Prisma.$PushDeviceTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PushDeviceToken.
     * @param {PushDeviceTokenUpdateArgs} args - Arguments to update one PushDeviceToken.
     * @example
     * // Update one PushDeviceToken
     * const pushDeviceToken = await prisma.pushDeviceToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PushDeviceTokenUpdateArgs>(args: SelectSubset<T, PushDeviceTokenUpdateArgs<ExtArgs>>): Prisma__PushDeviceTokenClient<$Result.GetResult<Prisma.$PushDeviceTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PushDeviceTokens.
     * @param {PushDeviceTokenDeleteManyArgs} args - Arguments to filter PushDeviceTokens to delete.
     * @example
     * // Delete a few PushDeviceTokens
     * const { count } = await prisma.pushDeviceToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PushDeviceTokenDeleteManyArgs>(args?: SelectSubset<T, PushDeviceTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushDeviceTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushDeviceTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PushDeviceTokens
     * const pushDeviceToken = await prisma.pushDeviceToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PushDeviceTokenUpdateManyArgs>(args: SelectSubset<T, PushDeviceTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PushDeviceToken.
     * @param {PushDeviceTokenUpsertArgs} args - Arguments to update or create a PushDeviceToken.
     * @example
     * // Update or create a PushDeviceToken
     * const pushDeviceToken = await prisma.pushDeviceToken.upsert({
     *   create: {
     *     // ... data to create a PushDeviceToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PushDeviceToken we want to update
     *   }
     * })
     */
    upsert<T extends PushDeviceTokenUpsertArgs>(args: SelectSubset<T, PushDeviceTokenUpsertArgs<ExtArgs>>): Prisma__PushDeviceTokenClient<$Result.GetResult<Prisma.$PushDeviceTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PushDeviceTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushDeviceTokenCountArgs} args - Arguments to filter PushDeviceTokens to count.
     * @example
     * // Count the number of PushDeviceTokens
     * const count = await prisma.pushDeviceToken.count({
     *   where: {
     *     // ... the filter for the PushDeviceTokens we want to count
     *   }
     * })
    **/
    count<T extends PushDeviceTokenCountArgs>(
      args?: Subset<T, PushDeviceTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PushDeviceTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PushDeviceToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushDeviceTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PushDeviceTokenAggregateArgs>(args: Subset<T, PushDeviceTokenAggregateArgs>): Prisma.PrismaPromise<GetPushDeviceTokenAggregateType<T>>

    /**
     * Group by PushDeviceToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushDeviceTokenGroupByArgs} args - Group by arguments.
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
      T extends PushDeviceTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PushDeviceTokenGroupByArgs['orderBy'] }
        : { orderBy?: PushDeviceTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PushDeviceTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPushDeviceTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PushDeviceToken model
   */
  readonly fields: PushDeviceTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PushDeviceToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PushDeviceTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PushDeviceToken model
   */ 
  interface PushDeviceTokenFieldRefs {
    readonly id: FieldRef<"PushDeviceToken", 'String'>
    readonly userId: FieldRef<"PushDeviceToken", 'String'>
    readonly role: FieldRef<"PushDeviceToken", 'String'>
    readonly token: FieldRef<"PushDeviceToken", 'String'>
    readonly platform: FieldRef<"PushDeviceToken", 'String'>
    readonly createdAt: FieldRef<"PushDeviceToken", 'DateTime'>
    readonly updatedAt: FieldRef<"PushDeviceToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PushDeviceToken findUnique
   */
  export type PushDeviceTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushDeviceToken
     */
    select?: PushDeviceTokenSelect<ExtArgs> | null
    /**
     * Filter, which PushDeviceToken to fetch.
     */
    where: PushDeviceTokenWhereUniqueInput
  }

  /**
   * PushDeviceToken findUniqueOrThrow
   */
  export type PushDeviceTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushDeviceToken
     */
    select?: PushDeviceTokenSelect<ExtArgs> | null
    /**
     * Filter, which PushDeviceToken to fetch.
     */
    where: PushDeviceTokenWhereUniqueInput
  }

  /**
   * PushDeviceToken findFirst
   */
  export type PushDeviceTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushDeviceToken
     */
    select?: PushDeviceTokenSelect<ExtArgs> | null
    /**
     * Filter, which PushDeviceToken to fetch.
     */
    where?: PushDeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushDeviceTokens to fetch.
     */
    orderBy?: PushDeviceTokenOrderByWithRelationInput | PushDeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushDeviceTokens.
     */
    cursor?: PushDeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushDeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushDeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushDeviceTokens.
     */
    distinct?: PushDeviceTokenScalarFieldEnum | PushDeviceTokenScalarFieldEnum[]
  }

  /**
   * PushDeviceToken findFirstOrThrow
   */
  export type PushDeviceTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushDeviceToken
     */
    select?: PushDeviceTokenSelect<ExtArgs> | null
    /**
     * Filter, which PushDeviceToken to fetch.
     */
    where?: PushDeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushDeviceTokens to fetch.
     */
    orderBy?: PushDeviceTokenOrderByWithRelationInput | PushDeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushDeviceTokens.
     */
    cursor?: PushDeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushDeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushDeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushDeviceTokens.
     */
    distinct?: PushDeviceTokenScalarFieldEnum | PushDeviceTokenScalarFieldEnum[]
  }

  /**
   * PushDeviceToken findMany
   */
  export type PushDeviceTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushDeviceToken
     */
    select?: PushDeviceTokenSelect<ExtArgs> | null
    /**
     * Filter, which PushDeviceTokens to fetch.
     */
    where?: PushDeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushDeviceTokens to fetch.
     */
    orderBy?: PushDeviceTokenOrderByWithRelationInput | PushDeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PushDeviceTokens.
     */
    cursor?: PushDeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushDeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushDeviceTokens.
     */
    skip?: number
    distinct?: PushDeviceTokenScalarFieldEnum | PushDeviceTokenScalarFieldEnum[]
  }

  /**
   * PushDeviceToken create
   */
  export type PushDeviceTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushDeviceToken
     */
    select?: PushDeviceTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a PushDeviceToken.
     */
    data: XOR<PushDeviceTokenCreateInput, PushDeviceTokenUncheckedCreateInput>
  }

  /**
   * PushDeviceToken createMany
   */
  export type PushDeviceTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PushDeviceTokens.
     */
    data: PushDeviceTokenCreateManyInput | PushDeviceTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushDeviceToken createManyAndReturn
   */
  export type PushDeviceTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushDeviceToken
     */
    select?: PushDeviceTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PushDeviceTokens.
     */
    data: PushDeviceTokenCreateManyInput | PushDeviceTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushDeviceToken update
   */
  export type PushDeviceTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushDeviceToken
     */
    select?: PushDeviceTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a PushDeviceToken.
     */
    data: XOR<PushDeviceTokenUpdateInput, PushDeviceTokenUncheckedUpdateInput>
    /**
     * Choose, which PushDeviceToken to update.
     */
    where: PushDeviceTokenWhereUniqueInput
  }

  /**
   * PushDeviceToken updateMany
   */
  export type PushDeviceTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PushDeviceTokens.
     */
    data: XOR<PushDeviceTokenUpdateManyMutationInput, PushDeviceTokenUncheckedUpdateManyInput>
    /**
     * Filter which PushDeviceTokens to update
     */
    where?: PushDeviceTokenWhereInput
  }

  /**
   * PushDeviceToken upsert
   */
  export type PushDeviceTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushDeviceToken
     */
    select?: PushDeviceTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the PushDeviceToken to update in case it exists.
     */
    where: PushDeviceTokenWhereUniqueInput
    /**
     * In case the PushDeviceToken found by the `where` argument doesn't exist, create a new PushDeviceToken with this data.
     */
    create: XOR<PushDeviceTokenCreateInput, PushDeviceTokenUncheckedCreateInput>
    /**
     * In case the PushDeviceToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PushDeviceTokenUpdateInput, PushDeviceTokenUncheckedUpdateInput>
  }

  /**
   * PushDeviceToken delete
   */
  export type PushDeviceTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushDeviceToken
     */
    select?: PushDeviceTokenSelect<ExtArgs> | null
    /**
     * Filter which PushDeviceToken to delete.
     */
    where: PushDeviceTokenWhereUniqueInput
  }

  /**
   * PushDeviceToken deleteMany
   */
  export type PushDeviceTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushDeviceTokens to delete
     */
    where?: PushDeviceTokenWhereInput
  }

  /**
   * PushDeviceToken without action
   */
  export type PushDeviceTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushDeviceToken
     */
    select?: PushDeviceTokenSelect<ExtArgs> | null
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


  export const NotificationTemplateScalarFieldEnum: {
    id: 'id',
    code: 'code',
    channel: 'channel',
    templateBody: 'templateBody'
  };

  export type NotificationTemplateScalarFieldEnum = (typeof NotificationTemplateScalarFieldEnum)[keyof typeof NotificationTemplateScalarFieldEnum]


  export const NotificationJobScalarFieldEnum: {
    id: 'id',
    recipient: 'recipient',
    userId: 'userId',
    role: 'role',
    title: 'title',
    message: 'message',
    channel: 'channel',
    templateId: 'templateId',
    cityCode: 'cityCode',
    status: 'status',
    isRead: 'isRead',
    sentAt: 'sentAt',
    createdAt: 'createdAt'
  };

  export type NotificationJobScalarFieldEnum = (typeof NotificationJobScalarFieldEnum)[keyof typeof NotificationJobScalarFieldEnum]


  export const DeliveryAttemptScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    attemptNum: 'attemptNum',
    status: 'status',
    responseCode: 'responseCode',
    attemptedAt: 'attemptedAt'
  };

  export type DeliveryAttemptScalarFieldEnum = (typeof DeliveryAttemptScalarFieldEnum)[keyof typeof DeliveryAttemptScalarFieldEnum]


  export const PushDeviceTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    role: 'role',
    token: 'token',
    platform: 'platform',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PushDeviceTokenScalarFieldEnum = (typeof PushDeviceTokenScalarFieldEnum)[keyof typeof PushDeviceTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Deep Input Types
   */


  export type NotificationTemplateWhereInput = {
    AND?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    OR?: NotificationTemplateWhereInput[]
    NOT?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    id?: StringFilter<"NotificationTemplate"> | string
    code?: StringFilter<"NotificationTemplate"> | string
    channel?: StringFilter<"NotificationTemplate"> | string
    templateBody?: StringFilter<"NotificationTemplate"> | string
    jobs?: NotificationJobListRelationFilter
  }

  export type NotificationTemplateOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    channel?: SortOrder
    templateBody?: SortOrder
    jobs?: NotificationJobOrderByRelationAggregateInput
  }

  export type NotificationTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    OR?: NotificationTemplateWhereInput[]
    NOT?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    channel?: StringFilter<"NotificationTemplate"> | string
    templateBody?: StringFilter<"NotificationTemplate"> | string
    jobs?: NotificationJobListRelationFilter
  }, "id" | "code">

  export type NotificationTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    channel?: SortOrder
    templateBody?: SortOrder
    _count?: NotificationTemplateCountOrderByAggregateInput
    _max?: NotificationTemplateMaxOrderByAggregateInput
    _min?: NotificationTemplateMinOrderByAggregateInput
  }

  export type NotificationTemplateScalarWhereWithAggregatesInput = {
    AND?: NotificationTemplateScalarWhereWithAggregatesInput | NotificationTemplateScalarWhereWithAggregatesInput[]
    OR?: NotificationTemplateScalarWhereWithAggregatesInput[]
    NOT?: NotificationTemplateScalarWhereWithAggregatesInput | NotificationTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    code?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    channel?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    templateBody?: StringWithAggregatesFilter<"NotificationTemplate"> | string
  }

  export type NotificationJobWhereInput = {
    AND?: NotificationJobWhereInput | NotificationJobWhereInput[]
    OR?: NotificationJobWhereInput[]
    NOT?: NotificationJobWhereInput | NotificationJobWhereInput[]
    id?: StringFilter<"NotificationJob"> | string
    recipient?: StringFilter<"NotificationJob"> | string
    userId?: StringNullableFilter<"NotificationJob"> | string | null
    role?: StringNullableFilter<"NotificationJob"> | string | null
    title?: StringNullableFilter<"NotificationJob"> | string | null
    message?: StringNullableFilter<"NotificationJob"> | string | null
    channel?: StringFilter<"NotificationJob"> | string
    templateId?: StringFilter<"NotificationJob"> | string
    cityCode?: StringNullableFilter<"NotificationJob"> | string | null
    status?: StringFilter<"NotificationJob"> | string
    isRead?: BoolFilter<"NotificationJob"> | boolean
    sentAt?: DateTimeNullableFilter<"NotificationJob"> | Date | string | null
    createdAt?: DateTimeFilter<"NotificationJob"> | Date | string
    template?: XOR<NotificationTemplateRelationFilter, NotificationTemplateWhereInput>
    attempts?: DeliveryAttemptListRelationFilter
  }

  export type NotificationJobOrderByWithRelationInput = {
    id?: SortOrder
    recipient?: SortOrder
    userId?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    channel?: SortOrder
    templateId?: SortOrder
    cityCode?: SortOrderInput | SortOrder
    status?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    template?: NotificationTemplateOrderByWithRelationInput
    attempts?: DeliveryAttemptOrderByRelationAggregateInput
  }

  export type NotificationJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationJobWhereInput | NotificationJobWhereInput[]
    OR?: NotificationJobWhereInput[]
    NOT?: NotificationJobWhereInput | NotificationJobWhereInput[]
    recipient?: StringFilter<"NotificationJob"> | string
    userId?: StringNullableFilter<"NotificationJob"> | string | null
    role?: StringNullableFilter<"NotificationJob"> | string | null
    title?: StringNullableFilter<"NotificationJob"> | string | null
    message?: StringNullableFilter<"NotificationJob"> | string | null
    channel?: StringFilter<"NotificationJob"> | string
    templateId?: StringFilter<"NotificationJob"> | string
    cityCode?: StringNullableFilter<"NotificationJob"> | string | null
    status?: StringFilter<"NotificationJob"> | string
    isRead?: BoolFilter<"NotificationJob"> | boolean
    sentAt?: DateTimeNullableFilter<"NotificationJob"> | Date | string | null
    createdAt?: DateTimeFilter<"NotificationJob"> | Date | string
    template?: XOR<NotificationTemplateRelationFilter, NotificationTemplateWhereInput>
    attempts?: DeliveryAttemptListRelationFilter
  }, "id">

  export type NotificationJobOrderByWithAggregationInput = {
    id?: SortOrder
    recipient?: SortOrder
    userId?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    channel?: SortOrder
    templateId?: SortOrder
    cityCode?: SortOrderInput | SortOrder
    status?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationJobCountOrderByAggregateInput
    _max?: NotificationJobMaxOrderByAggregateInput
    _min?: NotificationJobMinOrderByAggregateInput
  }

  export type NotificationJobScalarWhereWithAggregatesInput = {
    AND?: NotificationJobScalarWhereWithAggregatesInput | NotificationJobScalarWhereWithAggregatesInput[]
    OR?: NotificationJobScalarWhereWithAggregatesInput[]
    NOT?: NotificationJobScalarWhereWithAggregatesInput | NotificationJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationJob"> | string
    recipient?: StringWithAggregatesFilter<"NotificationJob"> | string
    userId?: StringNullableWithAggregatesFilter<"NotificationJob"> | string | null
    role?: StringNullableWithAggregatesFilter<"NotificationJob"> | string | null
    title?: StringNullableWithAggregatesFilter<"NotificationJob"> | string | null
    message?: StringNullableWithAggregatesFilter<"NotificationJob"> | string | null
    channel?: StringWithAggregatesFilter<"NotificationJob"> | string
    templateId?: StringWithAggregatesFilter<"NotificationJob"> | string
    cityCode?: StringNullableWithAggregatesFilter<"NotificationJob"> | string | null
    status?: StringWithAggregatesFilter<"NotificationJob"> | string
    isRead?: BoolWithAggregatesFilter<"NotificationJob"> | boolean
    sentAt?: DateTimeNullableWithAggregatesFilter<"NotificationJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NotificationJob"> | Date | string
  }

  export type DeliveryAttemptWhereInput = {
    AND?: DeliveryAttemptWhereInput | DeliveryAttemptWhereInput[]
    OR?: DeliveryAttemptWhereInput[]
    NOT?: DeliveryAttemptWhereInput | DeliveryAttemptWhereInput[]
    id?: StringFilter<"DeliveryAttempt"> | string
    jobId?: StringFilter<"DeliveryAttempt"> | string
    attemptNum?: IntFilter<"DeliveryAttempt"> | number
    status?: StringFilter<"DeliveryAttempt"> | string
    responseCode?: StringNullableFilter<"DeliveryAttempt"> | string | null
    attemptedAt?: DateTimeFilter<"DeliveryAttempt"> | Date | string
    job?: XOR<NotificationJobRelationFilter, NotificationJobWhereInput>
  }

  export type DeliveryAttemptOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    attemptNum?: SortOrder
    status?: SortOrder
    responseCode?: SortOrderInput | SortOrder
    attemptedAt?: SortOrder
    job?: NotificationJobOrderByWithRelationInput
  }

  export type DeliveryAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeliveryAttemptWhereInput | DeliveryAttemptWhereInput[]
    OR?: DeliveryAttemptWhereInput[]
    NOT?: DeliveryAttemptWhereInput | DeliveryAttemptWhereInput[]
    jobId?: StringFilter<"DeliveryAttempt"> | string
    attemptNum?: IntFilter<"DeliveryAttempt"> | number
    status?: StringFilter<"DeliveryAttempt"> | string
    responseCode?: StringNullableFilter<"DeliveryAttempt"> | string | null
    attemptedAt?: DateTimeFilter<"DeliveryAttempt"> | Date | string
    job?: XOR<NotificationJobRelationFilter, NotificationJobWhereInput>
  }, "id">

  export type DeliveryAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    attemptNum?: SortOrder
    status?: SortOrder
    responseCode?: SortOrderInput | SortOrder
    attemptedAt?: SortOrder
    _count?: DeliveryAttemptCountOrderByAggregateInput
    _avg?: DeliveryAttemptAvgOrderByAggregateInput
    _max?: DeliveryAttemptMaxOrderByAggregateInput
    _min?: DeliveryAttemptMinOrderByAggregateInput
    _sum?: DeliveryAttemptSumOrderByAggregateInput
  }

  export type DeliveryAttemptScalarWhereWithAggregatesInput = {
    AND?: DeliveryAttemptScalarWhereWithAggregatesInput | DeliveryAttemptScalarWhereWithAggregatesInput[]
    OR?: DeliveryAttemptScalarWhereWithAggregatesInput[]
    NOT?: DeliveryAttemptScalarWhereWithAggregatesInput | DeliveryAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeliveryAttempt"> | string
    jobId?: StringWithAggregatesFilter<"DeliveryAttempt"> | string
    attemptNum?: IntWithAggregatesFilter<"DeliveryAttempt"> | number
    status?: StringWithAggregatesFilter<"DeliveryAttempt"> | string
    responseCode?: StringNullableWithAggregatesFilter<"DeliveryAttempt"> | string | null
    attemptedAt?: DateTimeWithAggregatesFilter<"DeliveryAttempt"> | Date | string
  }

  export type PushDeviceTokenWhereInput = {
    AND?: PushDeviceTokenWhereInput | PushDeviceTokenWhereInput[]
    OR?: PushDeviceTokenWhereInput[]
    NOT?: PushDeviceTokenWhereInput | PushDeviceTokenWhereInput[]
    id?: StringFilter<"PushDeviceToken"> | string
    userId?: StringFilter<"PushDeviceToken"> | string
    role?: StringFilter<"PushDeviceToken"> | string
    token?: StringFilter<"PushDeviceToken"> | string
    platform?: StringFilter<"PushDeviceToken"> | string
    createdAt?: DateTimeFilter<"PushDeviceToken"> | Date | string
    updatedAt?: DateTimeFilter<"PushDeviceToken"> | Date | string
  }

  export type PushDeviceTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PushDeviceTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: PushDeviceTokenWhereInput | PushDeviceTokenWhereInput[]
    OR?: PushDeviceTokenWhereInput[]
    NOT?: PushDeviceTokenWhereInput | PushDeviceTokenWhereInput[]
    userId?: StringFilter<"PushDeviceToken"> | string
    role?: StringFilter<"PushDeviceToken"> | string
    platform?: StringFilter<"PushDeviceToken"> | string
    createdAt?: DateTimeFilter<"PushDeviceToken"> | Date | string
    updatedAt?: DateTimeFilter<"PushDeviceToken"> | Date | string
  }, "id" | "token">

  export type PushDeviceTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PushDeviceTokenCountOrderByAggregateInput
    _max?: PushDeviceTokenMaxOrderByAggregateInput
    _min?: PushDeviceTokenMinOrderByAggregateInput
  }

  export type PushDeviceTokenScalarWhereWithAggregatesInput = {
    AND?: PushDeviceTokenScalarWhereWithAggregatesInput | PushDeviceTokenScalarWhereWithAggregatesInput[]
    OR?: PushDeviceTokenScalarWhereWithAggregatesInput[]
    NOT?: PushDeviceTokenScalarWhereWithAggregatesInput | PushDeviceTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PushDeviceToken"> | string
    userId?: StringWithAggregatesFilter<"PushDeviceToken"> | string
    role?: StringWithAggregatesFilter<"PushDeviceToken"> | string
    token?: StringWithAggregatesFilter<"PushDeviceToken"> | string
    platform?: StringWithAggregatesFilter<"PushDeviceToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PushDeviceToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PushDeviceToken"> | Date | string
  }

  export type NotificationTemplateCreateInput = {
    id?: string
    code: string
    channel: string
    templateBody: string
    jobs?: NotificationJobCreateNestedManyWithoutTemplateInput
  }

  export type NotificationTemplateUncheckedCreateInput = {
    id?: string
    code: string
    channel: string
    templateBody: string
    jobs?: NotificationJobUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type NotificationTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    templateBody?: StringFieldUpdateOperationsInput | string
    jobs?: NotificationJobUpdateManyWithoutTemplateNestedInput
  }

  export type NotificationTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    templateBody?: StringFieldUpdateOperationsInput | string
    jobs?: NotificationJobUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type NotificationTemplateCreateManyInput = {
    id?: string
    code: string
    channel: string
    templateBody: string
  }

  export type NotificationTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    templateBody?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    templateBody?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationJobCreateInput = {
    id?: string
    recipient: string
    userId?: string | null
    role?: string | null
    title?: string | null
    message?: string | null
    channel: string
    cityCode?: string | null
    status?: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    template: NotificationTemplateCreateNestedOneWithoutJobsInput
    attempts?: DeliveryAttemptCreateNestedManyWithoutJobInput
  }

  export type NotificationJobUncheckedCreateInput = {
    id?: string
    recipient: string
    userId?: string | null
    role?: string | null
    title?: string | null
    message?: string | null
    channel: string
    templateId: string
    cityCode?: string | null
    status?: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    attempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutJobInput
  }

  export type NotificationJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    cityCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: NotificationTemplateUpdateOneRequiredWithoutJobsNestedInput
    attempts?: DeliveryAttemptUpdateManyWithoutJobNestedInput
  }

  export type NotificationJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    cityCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: DeliveryAttemptUncheckedUpdateManyWithoutJobNestedInput
  }

  export type NotificationJobCreateManyInput = {
    id?: string
    recipient: string
    userId?: string | null
    role?: string | null
    title?: string | null
    message?: string | null
    channel: string
    templateId: string
    cityCode?: string | null
    status?: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    cityCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    cityCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryAttemptCreateInput = {
    id?: string
    attemptNum: number
    status: string
    responseCode?: string | null
    attemptedAt?: Date | string
    job: NotificationJobCreateNestedOneWithoutAttemptsInput
  }

  export type DeliveryAttemptUncheckedCreateInput = {
    id?: string
    jobId: string
    attemptNum: number
    status: string
    responseCode?: string | null
    attemptedAt?: Date | string
  }

  export type DeliveryAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptNum?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: NotificationJobUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type DeliveryAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    attemptNum?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryAttemptCreateManyInput = {
    id?: string
    jobId: string
    attemptNum: number
    status: string
    responseCode?: string | null
    attemptedAt?: Date | string
  }

  export type DeliveryAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptNum?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    attemptNum?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushDeviceTokenCreateInput = {
    id?: string
    userId: string
    role?: string
    token: string
    platform?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PushDeviceTokenUncheckedCreateInput = {
    id?: string
    userId: string
    role?: string
    token: string
    platform?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PushDeviceTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushDeviceTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushDeviceTokenCreateManyInput = {
    id?: string
    userId: string
    role?: string
    token: string
    platform?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PushDeviceTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushDeviceTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
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

  export type NotificationJobListRelationFilter = {
    every?: NotificationJobWhereInput
    some?: NotificationJobWhereInput
    none?: NotificationJobWhereInput
  }

  export type NotificationJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    channel?: SortOrder
    templateBody?: SortOrder
  }

  export type NotificationTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    channel?: SortOrder
    templateBody?: SortOrder
  }

  export type NotificationTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    channel?: SortOrder
    templateBody?: SortOrder
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

  export type NotificationTemplateRelationFilter = {
    is?: NotificationTemplateWhereInput
    isNot?: NotificationTemplateWhereInput
  }

  export type DeliveryAttemptListRelationFilter = {
    every?: DeliveryAttemptWhereInput
    some?: DeliveryAttemptWhereInput
    none?: DeliveryAttemptWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeliveryAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationJobCountOrderByAggregateInput = {
    id?: SortOrder
    recipient?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    title?: SortOrder
    message?: SortOrder
    channel?: SortOrder
    templateId?: SortOrder
    cityCode?: SortOrder
    status?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationJobMaxOrderByAggregateInput = {
    id?: SortOrder
    recipient?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    title?: SortOrder
    message?: SortOrder
    channel?: SortOrder
    templateId?: SortOrder
    cityCode?: SortOrder
    status?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationJobMinOrderByAggregateInput = {
    id?: SortOrder
    recipient?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    title?: SortOrder
    message?: SortOrder
    channel?: SortOrder
    templateId?: SortOrder
    cityCode?: SortOrder
    status?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
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

  export type NotificationJobRelationFilter = {
    is?: NotificationJobWhereInput
    isNot?: NotificationJobWhereInput
  }

  export type DeliveryAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    attemptNum?: SortOrder
    status?: SortOrder
    responseCode?: SortOrder
    attemptedAt?: SortOrder
  }

  export type DeliveryAttemptAvgOrderByAggregateInput = {
    attemptNum?: SortOrder
  }

  export type DeliveryAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    attemptNum?: SortOrder
    status?: SortOrder
    responseCode?: SortOrder
    attemptedAt?: SortOrder
  }

  export type DeliveryAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    attemptNum?: SortOrder
    status?: SortOrder
    responseCode?: SortOrder
    attemptedAt?: SortOrder
  }

  export type DeliveryAttemptSumOrderByAggregateInput = {
    attemptNum?: SortOrder
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

  export type PushDeviceTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PushDeviceTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PushDeviceTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationJobCreateNestedManyWithoutTemplateInput = {
    create?: XOR<NotificationJobCreateWithoutTemplateInput, NotificationJobUncheckedCreateWithoutTemplateInput> | NotificationJobCreateWithoutTemplateInput[] | NotificationJobUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: NotificationJobCreateOrConnectWithoutTemplateInput | NotificationJobCreateOrConnectWithoutTemplateInput[]
    createMany?: NotificationJobCreateManyTemplateInputEnvelope
    connect?: NotificationJobWhereUniqueInput | NotificationJobWhereUniqueInput[]
  }

  export type NotificationJobUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<NotificationJobCreateWithoutTemplateInput, NotificationJobUncheckedCreateWithoutTemplateInput> | NotificationJobCreateWithoutTemplateInput[] | NotificationJobUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: NotificationJobCreateOrConnectWithoutTemplateInput | NotificationJobCreateOrConnectWithoutTemplateInput[]
    createMany?: NotificationJobCreateManyTemplateInputEnvelope
    connect?: NotificationJobWhereUniqueInput | NotificationJobWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NotificationJobUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<NotificationJobCreateWithoutTemplateInput, NotificationJobUncheckedCreateWithoutTemplateInput> | NotificationJobCreateWithoutTemplateInput[] | NotificationJobUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: NotificationJobCreateOrConnectWithoutTemplateInput | NotificationJobCreateOrConnectWithoutTemplateInput[]
    upsert?: NotificationJobUpsertWithWhereUniqueWithoutTemplateInput | NotificationJobUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: NotificationJobCreateManyTemplateInputEnvelope
    set?: NotificationJobWhereUniqueInput | NotificationJobWhereUniqueInput[]
    disconnect?: NotificationJobWhereUniqueInput | NotificationJobWhereUniqueInput[]
    delete?: NotificationJobWhereUniqueInput | NotificationJobWhereUniqueInput[]
    connect?: NotificationJobWhereUniqueInput | NotificationJobWhereUniqueInput[]
    update?: NotificationJobUpdateWithWhereUniqueWithoutTemplateInput | NotificationJobUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: NotificationJobUpdateManyWithWhereWithoutTemplateInput | NotificationJobUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: NotificationJobScalarWhereInput | NotificationJobScalarWhereInput[]
  }

  export type NotificationJobUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<NotificationJobCreateWithoutTemplateInput, NotificationJobUncheckedCreateWithoutTemplateInput> | NotificationJobCreateWithoutTemplateInput[] | NotificationJobUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: NotificationJobCreateOrConnectWithoutTemplateInput | NotificationJobCreateOrConnectWithoutTemplateInput[]
    upsert?: NotificationJobUpsertWithWhereUniqueWithoutTemplateInput | NotificationJobUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: NotificationJobCreateManyTemplateInputEnvelope
    set?: NotificationJobWhereUniqueInput | NotificationJobWhereUniqueInput[]
    disconnect?: NotificationJobWhereUniqueInput | NotificationJobWhereUniqueInput[]
    delete?: NotificationJobWhereUniqueInput | NotificationJobWhereUniqueInput[]
    connect?: NotificationJobWhereUniqueInput | NotificationJobWhereUniqueInput[]
    update?: NotificationJobUpdateWithWhereUniqueWithoutTemplateInput | NotificationJobUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: NotificationJobUpdateManyWithWhereWithoutTemplateInput | NotificationJobUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: NotificationJobScalarWhereInput | NotificationJobScalarWhereInput[]
  }

  export type NotificationTemplateCreateNestedOneWithoutJobsInput = {
    create?: XOR<NotificationTemplateCreateWithoutJobsInput, NotificationTemplateUncheckedCreateWithoutJobsInput>
    connectOrCreate?: NotificationTemplateCreateOrConnectWithoutJobsInput
    connect?: NotificationTemplateWhereUniqueInput
  }

  export type DeliveryAttemptCreateNestedManyWithoutJobInput = {
    create?: XOR<DeliveryAttemptCreateWithoutJobInput, DeliveryAttemptUncheckedCreateWithoutJobInput> | DeliveryAttemptCreateWithoutJobInput[] | DeliveryAttemptUncheckedCreateWithoutJobInput[]
    connectOrCreate?: DeliveryAttemptCreateOrConnectWithoutJobInput | DeliveryAttemptCreateOrConnectWithoutJobInput[]
    createMany?: DeliveryAttemptCreateManyJobInputEnvelope
    connect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
  }

  export type DeliveryAttemptUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<DeliveryAttemptCreateWithoutJobInput, DeliveryAttemptUncheckedCreateWithoutJobInput> | DeliveryAttemptCreateWithoutJobInput[] | DeliveryAttemptUncheckedCreateWithoutJobInput[]
    connectOrCreate?: DeliveryAttemptCreateOrConnectWithoutJobInput | DeliveryAttemptCreateOrConnectWithoutJobInput[]
    createMany?: DeliveryAttemptCreateManyJobInputEnvelope
    connect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
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

  export type NotificationTemplateUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<NotificationTemplateCreateWithoutJobsInput, NotificationTemplateUncheckedCreateWithoutJobsInput>
    connectOrCreate?: NotificationTemplateCreateOrConnectWithoutJobsInput
    upsert?: NotificationTemplateUpsertWithoutJobsInput
    connect?: NotificationTemplateWhereUniqueInput
    update?: XOR<XOR<NotificationTemplateUpdateToOneWithWhereWithoutJobsInput, NotificationTemplateUpdateWithoutJobsInput>, NotificationTemplateUncheckedUpdateWithoutJobsInput>
  }

  export type DeliveryAttemptUpdateManyWithoutJobNestedInput = {
    create?: XOR<DeliveryAttemptCreateWithoutJobInput, DeliveryAttemptUncheckedCreateWithoutJobInput> | DeliveryAttemptCreateWithoutJobInput[] | DeliveryAttemptUncheckedCreateWithoutJobInput[]
    connectOrCreate?: DeliveryAttemptCreateOrConnectWithoutJobInput | DeliveryAttemptCreateOrConnectWithoutJobInput[]
    upsert?: DeliveryAttemptUpsertWithWhereUniqueWithoutJobInput | DeliveryAttemptUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: DeliveryAttemptCreateManyJobInputEnvelope
    set?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    disconnect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    delete?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    connect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    update?: DeliveryAttemptUpdateWithWhereUniqueWithoutJobInput | DeliveryAttemptUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: DeliveryAttemptUpdateManyWithWhereWithoutJobInput | DeliveryAttemptUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: DeliveryAttemptScalarWhereInput | DeliveryAttemptScalarWhereInput[]
  }

  export type DeliveryAttemptUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<DeliveryAttemptCreateWithoutJobInput, DeliveryAttemptUncheckedCreateWithoutJobInput> | DeliveryAttemptCreateWithoutJobInput[] | DeliveryAttemptUncheckedCreateWithoutJobInput[]
    connectOrCreate?: DeliveryAttemptCreateOrConnectWithoutJobInput | DeliveryAttemptCreateOrConnectWithoutJobInput[]
    upsert?: DeliveryAttemptUpsertWithWhereUniqueWithoutJobInput | DeliveryAttemptUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: DeliveryAttemptCreateManyJobInputEnvelope
    set?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    disconnect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    delete?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    connect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    update?: DeliveryAttemptUpdateWithWhereUniqueWithoutJobInput | DeliveryAttemptUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: DeliveryAttemptUpdateManyWithWhereWithoutJobInput | DeliveryAttemptUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: DeliveryAttemptScalarWhereInput | DeliveryAttemptScalarWhereInput[]
  }

  export type NotificationJobCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<NotificationJobCreateWithoutAttemptsInput, NotificationJobUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: NotificationJobCreateOrConnectWithoutAttemptsInput
    connect?: NotificationJobWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NotificationJobUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<NotificationJobCreateWithoutAttemptsInput, NotificationJobUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: NotificationJobCreateOrConnectWithoutAttemptsInput
    upsert?: NotificationJobUpsertWithoutAttemptsInput
    connect?: NotificationJobWhereUniqueInput
    update?: XOR<XOR<NotificationJobUpdateToOneWithWhereWithoutAttemptsInput, NotificationJobUpdateWithoutAttemptsInput>, NotificationJobUncheckedUpdateWithoutAttemptsInput>
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

  export type NotificationJobCreateWithoutTemplateInput = {
    id?: string
    recipient: string
    userId?: string | null
    role?: string | null
    title?: string | null
    message?: string | null
    channel: string
    cityCode?: string | null
    status?: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    attempts?: DeliveryAttemptCreateNestedManyWithoutJobInput
  }

  export type NotificationJobUncheckedCreateWithoutTemplateInput = {
    id?: string
    recipient: string
    userId?: string | null
    role?: string | null
    title?: string | null
    message?: string | null
    channel: string
    cityCode?: string | null
    status?: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    attempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutJobInput
  }

  export type NotificationJobCreateOrConnectWithoutTemplateInput = {
    where: NotificationJobWhereUniqueInput
    create: XOR<NotificationJobCreateWithoutTemplateInput, NotificationJobUncheckedCreateWithoutTemplateInput>
  }

  export type NotificationJobCreateManyTemplateInputEnvelope = {
    data: NotificationJobCreateManyTemplateInput | NotificationJobCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type NotificationJobUpsertWithWhereUniqueWithoutTemplateInput = {
    where: NotificationJobWhereUniqueInput
    update: XOR<NotificationJobUpdateWithoutTemplateInput, NotificationJobUncheckedUpdateWithoutTemplateInput>
    create: XOR<NotificationJobCreateWithoutTemplateInput, NotificationJobUncheckedCreateWithoutTemplateInput>
  }

  export type NotificationJobUpdateWithWhereUniqueWithoutTemplateInput = {
    where: NotificationJobWhereUniqueInput
    data: XOR<NotificationJobUpdateWithoutTemplateInput, NotificationJobUncheckedUpdateWithoutTemplateInput>
  }

  export type NotificationJobUpdateManyWithWhereWithoutTemplateInput = {
    where: NotificationJobScalarWhereInput
    data: XOR<NotificationJobUpdateManyMutationInput, NotificationJobUncheckedUpdateManyWithoutTemplateInput>
  }

  export type NotificationJobScalarWhereInput = {
    AND?: NotificationJobScalarWhereInput | NotificationJobScalarWhereInput[]
    OR?: NotificationJobScalarWhereInput[]
    NOT?: NotificationJobScalarWhereInput | NotificationJobScalarWhereInput[]
    id?: StringFilter<"NotificationJob"> | string
    recipient?: StringFilter<"NotificationJob"> | string
    userId?: StringNullableFilter<"NotificationJob"> | string | null
    role?: StringNullableFilter<"NotificationJob"> | string | null
    title?: StringNullableFilter<"NotificationJob"> | string | null
    message?: StringNullableFilter<"NotificationJob"> | string | null
    channel?: StringFilter<"NotificationJob"> | string
    templateId?: StringFilter<"NotificationJob"> | string
    cityCode?: StringNullableFilter<"NotificationJob"> | string | null
    status?: StringFilter<"NotificationJob"> | string
    isRead?: BoolFilter<"NotificationJob"> | boolean
    sentAt?: DateTimeNullableFilter<"NotificationJob"> | Date | string | null
    createdAt?: DateTimeFilter<"NotificationJob"> | Date | string
  }

  export type NotificationTemplateCreateWithoutJobsInput = {
    id?: string
    code: string
    channel: string
    templateBody: string
  }

  export type NotificationTemplateUncheckedCreateWithoutJobsInput = {
    id?: string
    code: string
    channel: string
    templateBody: string
  }

  export type NotificationTemplateCreateOrConnectWithoutJobsInput = {
    where: NotificationTemplateWhereUniqueInput
    create: XOR<NotificationTemplateCreateWithoutJobsInput, NotificationTemplateUncheckedCreateWithoutJobsInput>
  }

  export type DeliveryAttemptCreateWithoutJobInput = {
    id?: string
    attemptNum: number
    status: string
    responseCode?: string | null
    attemptedAt?: Date | string
  }

  export type DeliveryAttemptUncheckedCreateWithoutJobInput = {
    id?: string
    attemptNum: number
    status: string
    responseCode?: string | null
    attemptedAt?: Date | string
  }

  export type DeliveryAttemptCreateOrConnectWithoutJobInput = {
    where: DeliveryAttemptWhereUniqueInput
    create: XOR<DeliveryAttemptCreateWithoutJobInput, DeliveryAttemptUncheckedCreateWithoutJobInput>
  }

  export type DeliveryAttemptCreateManyJobInputEnvelope = {
    data: DeliveryAttemptCreateManyJobInput | DeliveryAttemptCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type NotificationTemplateUpsertWithoutJobsInput = {
    update: XOR<NotificationTemplateUpdateWithoutJobsInput, NotificationTemplateUncheckedUpdateWithoutJobsInput>
    create: XOR<NotificationTemplateCreateWithoutJobsInput, NotificationTemplateUncheckedCreateWithoutJobsInput>
    where?: NotificationTemplateWhereInput
  }

  export type NotificationTemplateUpdateToOneWithWhereWithoutJobsInput = {
    where?: NotificationTemplateWhereInput
    data: XOR<NotificationTemplateUpdateWithoutJobsInput, NotificationTemplateUncheckedUpdateWithoutJobsInput>
  }

  export type NotificationTemplateUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    templateBody?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationTemplateUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    templateBody?: StringFieldUpdateOperationsInput | string
  }

  export type DeliveryAttemptUpsertWithWhereUniqueWithoutJobInput = {
    where: DeliveryAttemptWhereUniqueInput
    update: XOR<DeliveryAttemptUpdateWithoutJobInput, DeliveryAttemptUncheckedUpdateWithoutJobInput>
    create: XOR<DeliveryAttemptCreateWithoutJobInput, DeliveryAttemptUncheckedCreateWithoutJobInput>
  }

  export type DeliveryAttemptUpdateWithWhereUniqueWithoutJobInput = {
    where: DeliveryAttemptWhereUniqueInput
    data: XOR<DeliveryAttemptUpdateWithoutJobInput, DeliveryAttemptUncheckedUpdateWithoutJobInput>
  }

  export type DeliveryAttemptUpdateManyWithWhereWithoutJobInput = {
    where: DeliveryAttemptScalarWhereInput
    data: XOR<DeliveryAttemptUpdateManyMutationInput, DeliveryAttemptUncheckedUpdateManyWithoutJobInput>
  }

  export type DeliveryAttemptScalarWhereInput = {
    AND?: DeliveryAttemptScalarWhereInput | DeliveryAttemptScalarWhereInput[]
    OR?: DeliveryAttemptScalarWhereInput[]
    NOT?: DeliveryAttemptScalarWhereInput | DeliveryAttemptScalarWhereInput[]
    id?: StringFilter<"DeliveryAttempt"> | string
    jobId?: StringFilter<"DeliveryAttempt"> | string
    attemptNum?: IntFilter<"DeliveryAttempt"> | number
    status?: StringFilter<"DeliveryAttempt"> | string
    responseCode?: StringNullableFilter<"DeliveryAttempt"> | string | null
    attemptedAt?: DateTimeFilter<"DeliveryAttempt"> | Date | string
  }

  export type NotificationJobCreateWithoutAttemptsInput = {
    id?: string
    recipient: string
    userId?: string | null
    role?: string | null
    title?: string | null
    message?: string | null
    channel: string
    cityCode?: string | null
    status?: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    template: NotificationTemplateCreateNestedOneWithoutJobsInput
  }

  export type NotificationJobUncheckedCreateWithoutAttemptsInput = {
    id?: string
    recipient: string
    userId?: string | null
    role?: string | null
    title?: string | null
    message?: string | null
    channel: string
    templateId: string
    cityCode?: string | null
    status?: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationJobCreateOrConnectWithoutAttemptsInput = {
    where: NotificationJobWhereUniqueInput
    create: XOR<NotificationJobCreateWithoutAttemptsInput, NotificationJobUncheckedCreateWithoutAttemptsInput>
  }

  export type NotificationJobUpsertWithoutAttemptsInput = {
    update: XOR<NotificationJobUpdateWithoutAttemptsInput, NotificationJobUncheckedUpdateWithoutAttemptsInput>
    create: XOR<NotificationJobCreateWithoutAttemptsInput, NotificationJobUncheckedCreateWithoutAttemptsInput>
    where?: NotificationJobWhereInput
  }

  export type NotificationJobUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: NotificationJobWhereInput
    data: XOR<NotificationJobUpdateWithoutAttemptsInput, NotificationJobUncheckedUpdateWithoutAttemptsInput>
  }

  export type NotificationJobUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    cityCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: NotificationTemplateUpdateOneRequiredWithoutJobsNestedInput
  }

  export type NotificationJobUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    cityCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationJobCreateManyTemplateInput = {
    id?: string
    recipient: string
    userId?: string | null
    role?: string | null
    title?: string | null
    message?: string | null
    channel: string
    cityCode?: string | null
    status?: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationJobUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    cityCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: DeliveryAttemptUpdateManyWithoutJobNestedInput
  }

  export type NotificationJobUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    cityCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: DeliveryAttemptUncheckedUpdateManyWithoutJobNestedInput
  }

  export type NotificationJobUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    cityCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryAttemptCreateManyJobInput = {
    id?: string
    attemptNum: number
    status: string
    responseCode?: string | null
    attemptedAt?: Date | string
  }

  export type DeliveryAttemptUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptNum?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryAttemptUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptNum?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryAttemptUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptNum?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use NotificationTemplateCountOutputTypeDefaultArgs instead
     */
    export type NotificationTemplateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationTemplateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationJobCountOutputTypeDefaultArgs instead
     */
    export type NotificationJobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationJobCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationTemplateDefaultArgs instead
     */
    export type NotificationTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationJobDefaultArgs instead
     */
    export type NotificationJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationJobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeliveryAttemptDefaultArgs instead
     */
    export type DeliveryAttemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeliveryAttemptDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PushDeviceTokenDefaultArgs instead
     */
    export type PushDeviceTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PushDeviceTokenDefaultArgs<ExtArgs>

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