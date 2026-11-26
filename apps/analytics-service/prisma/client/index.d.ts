
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
 * Model DailyMetric
 * 
 */
export type DailyMetric = $Result.DefaultSelection<Prisma.$DailyMetricPayload>
/**
 * Model PlatformReportingFact
 * 
 */
export type PlatformReportingFact = $Result.DefaultSelection<Prisma.$PlatformReportingFactPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DailyMetrics
 * const dailyMetrics = await prisma.dailyMetric.findMany()
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
   * // Fetch zero or more DailyMetrics
   * const dailyMetrics = await prisma.dailyMetric.findMany()
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
   * `prisma.dailyMetric`: Exposes CRUD operations for the **DailyMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyMetrics
    * const dailyMetrics = await prisma.dailyMetric.findMany()
    * ```
    */
  get dailyMetric(): Prisma.DailyMetricDelegate<ExtArgs>;

  /**
   * `prisma.platformReportingFact`: Exposes CRUD operations for the **PlatformReportingFact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlatformReportingFacts
    * const platformReportingFacts = await prisma.platformReportingFact.findMany()
    * ```
    */
  get platformReportingFact(): Prisma.PlatformReportingFactDelegate<ExtArgs>;
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
    DailyMetric: 'DailyMetric',
    PlatformReportingFact: 'PlatformReportingFact'
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
      modelProps: "dailyMetric" | "platformReportingFact"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DailyMetric: {
        payload: Prisma.$DailyMetricPayload<ExtArgs>
        fields: Prisma.DailyMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>
          }
          findFirst: {
            args: Prisma.DailyMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>
          }
          findMany: {
            args: Prisma.DailyMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>[]
          }
          create: {
            args: Prisma.DailyMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>
          }
          createMany: {
            args: Prisma.DailyMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyMetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>[]
          }
          delete: {
            args: Prisma.DailyMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>
          }
          update: {
            args: Prisma.DailyMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>
          }
          deleteMany: {
            args: Prisma.DailyMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>
          }
          aggregate: {
            args: Prisma.DailyMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyMetric>
          }
          groupBy: {
            args: Prisma.DailyMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyMetricCountArgs<ExtArgs>
            result: $Utils.Optional<DailyMetricCountAggregateOutputType> | number
          }
        }
      }
      PlatformReportingFact: {
        payload: Prisma.$PlatformReportingFactPayload<ExtArgs>
        fields: Prisma.PlatformReportingFactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformReportingFactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformReportingFactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformReportingFactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformReportingFactPayload>
          }
          findFirst: {
            args: Prisma.PlatformReportingFactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformReportingFactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformReportingFactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformReportingFactPayload>
          }
          findMany: {
            args: Prisma.PlatformReportingFactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformReportingFactPayload>[]
          }
          create: {
            args: Prisma.PlatformReportingFactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformReportingFactPayload>
          }
          createMany: {
            args: Prisma.PlatformReportingFactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformReportingFactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformReportingFactPayload>[]
          }
          delete: {
            args: Prisma.PlatformReportingFactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformReportingFactPayload>
          }
          update: {
            args: Prisma.PlatformReportingFactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformReportingFactPayload>
          }
          deleteMany: {
            args: Prisma.PlatformReportingFactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformReportingFactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlatformReportingFactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformReportingFactPayload>
          }
          aggregate: {
            args: Prisma.PlatformReportingFactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatformReportingFact>
          }
          groupBy: {
            args: Prisma.PlatformReportingFactGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformReportingFactGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformReportingFactCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformReportingFactCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model DailyMetric
   */

  export type AggregateDailyMetric = {
    _count: DailyMetricCountAggregateOutputType | null
    _avg: DailyMetricAvgAggregateOutputType | null
    _sum: DailyMetricSumAggregateOutputType | null
    _min: DailyMetricMinAggregateOutputType | null
    _max: DailyMetricMaxAggregateOutputType | null
  }

  export type DailyMetricAvgAggregateOutputType = {
    totalOrders: number | null
    totalSalesPaise: number | null
    avgPrepTimeMinutes: number | null
  }

  export type DailyMetricSumAggregateOutputType = {
    totalOrders: number | null
    totalSalesPaise: bigint | null
    avgPrepTimeMinutes: number | null
  }

  export type DailyMetricMinAggregateOutputType = {
    id: string | null
    metricDate: string | null
    tenantId: string | null
    outletId: string | null
    cityCode: string | null
    totalOrders: number | null
    totalSalesPaise: bigint | null
    avgPrepTimeMinutes: number | null
    updatedAt: Date | null
  }

  export type DailyMetricMaxAggregateOutputType = {
    id: string | null
    metricDate: string | null
    tenantId: string | null
    outletId: string | null
    cityCode: string | null
    totalOrders: number | null
    totalSalesPaise: bigint | null
    avgPrepTimeMinutes: number | null
    updatedAt: Date | null
  }

  export type DailyMetricCountAggregateOutputType = {
    id: number
    metricDate: number
    tenantId: number
    outletId: number
    cityCode: number
    totalOrders: number
    totalSalesPaise: number
    avgPrepTimeMinutes: number
    updatedAt: number
    _all: number
  }


  export type DailyMetricAvgAggregateInputType = {
    totalOrders?: true
    totalSalesPaise?: true
    avgPrepTimeMinutes?: true
  }

  export type DailyMetricSumAggregateInputType = {
    totalOrders?: true
    totalSalesPaise?: true
    avgPrepTimeMinutes?: true
  }

  export type DailyMetricMinAggregateInputType = {
    id?: true
    metricDate?: true
    tenantId?: true
    outletId?: true
    cityCode?: true
    totalOrders?: true
    totalSalesPaise?: true
    avgPrepTimeMinutes?: true
    updatedAt?: true
  }

  export type DailyMetricMaxAggregateInputType = {
    id?: true
    metricDate?: true
    tenantId?: true
    outletId?: true
    cityCode?: true
    totalOrders?: true
    totalSalesPaise?: true
    avgPrepTimeMinutes?: true
    updatedAt?: true
  }

  export type DailyMetricCountAggregateInputType = {
    id?: true
    metricDate?: true
    tenantId?: true
    outletId?: true
    cityCode?: true
    totalOrders?: true
    totalSalesPaise?: true
    avgPrepTimeMinutes?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyMetric to aggregate.
     */
    where?: DailyMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMetrics to fetch.
     */
    orderBy?: DailyMetricOrderByWithRelationInput | DailyMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyMetrics
    **/
    _count?: true | DailyMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyMetricMaxAggregateInputType
  }

  export type GetDailyMetricAggregateType<T extends DailyMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyMetric[P]>
      : GetScalarType<T[P], AggregateDailyMetric[P]>
  }




  export type DailyMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyMetricWhereInput
    orderBy?: DailyMetricOrderByWithAggregationInput | DailyMetricOrderByWithAggregationInput[]
    by: DailyMetricScalarFieldEnum[] | DailyMetricScalarFieldEnum
    having?: DailyMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyMetricCountAggregateInputType | true
    _avg?: DailyMetricAvgAggregateInputType
    _sum?: DailyMetricSumAggregateInputType
    _min?: DailyMetricMinAggregateInputType
    _max?: DailyMetricMaxAggregateInputType
  }

  export type DailyMetricGroupByOutputType = {
    id: string
    metricDate: string
    tenantId: string | null
    outletId: string
    cityCode: string
    totalOrders: number
    totalSalesPaise: bigint
    avgPrepTimeMinutes: number
    updatedAt: Date
    _count: DailyMetricCountAggregateOutputType | null
    _avg: DailyMetricAvgAggregateOutputType | null
    _sum: DailyMetricSumAggregateOutputType | null
    _min: DailyMetricMinAggregateOutputType | null
    _max: DailyMetricMaxAggregateOutputType | null
  }

  type GetDailyMetricGroupByPayload<T extends DailyMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyMetricGroupByOutputType[P]>
            : GetScalarType<T[P], DailyMetricGroupByOutputType[P]>
        }
      >
    >


  export type DailyMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metricDate?: boolean
    tenantId?: boolean
    outletId?: boolean
    cityCode?: boolean
    totalOrders?: boolean
    totalSalesPaise?: boolean
    avgPrepTimeMinutes?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dailyMetric"]>

  export type DailyMetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metricDate?: boolean
    tenantId?: boolean
    outletId?: boolean
    cityCode?: boolean
    totalOrders?: boolean
    totalSalesPaise?: boolean
    avgPrepTimeMinutes?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dailyMetric"]>

  export type DailyMetricSelectScalar = {
    id?: boolean
    metricDate?: boolean
    tenantId?: boolean
    outletId?: boolean
    cityCode?: boolean
    totalOrders?: boolean
    totalSalesPaise?: boolean
    avgPrepTimeMinutes?: boolean
    updatedAt?: boolean
  }


  export type $DailyMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyMetric"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      metricDate: string
      tenantId: string | null
      outletId: string
      cityCode: string
      totalOrders: number
      totalSalesPaise: bigint
      avgPrepTimeMinutes: number
      updatedAt: Date
    }, ExtArgs["result"]["dailyMetric"]>
    composites: {}
  }

  type DailyMetricGetPayload<S extends boolean | null | undefined | DailyMetricDefaultArgs> = $Result.GetResult<Prisma.$DailyMetricPayload, S>

  type DailyMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyMetricFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyMetricCountAggregateInputType | true
    }

  export interface DailyMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyMetric'], meta: { name: 'DailyMetric' } }
    /**
     * Find zero or one DailyMetric that matches the filter.
     * @param {DailyMetricFindUniqueArgs} args - Arguments to find a DailyMetric
     * @example
     * // Get one DailyMetric
     * const dailyMetric = await prisma.dailyMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyMetricFindUniqueArgs>(args: SelectSubset<T, DailyMetricFindUniqueArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailyMetric that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyMetricFindUniqueOrThrowArgs} args - Arguments to find a DailyMetric
     * @example
     * // Get one DailyMetric
     * const dailyMetric = await prisma.dailyMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailyMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricFindFirstArgs} args - Arguments to find a DailyMetric
     * @example
     * // Get one DailyMetric
     * const dailyMetric = await prisma.dailyMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyMetricFindFirstArgs>(args?: SelectSubset<T, DailyMetricFindFirstArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailyMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricFindFirstOrThrowArgs} args - Arguments to find a DailyMetric
     * @example
     * // Get one DailyMetric
     * const dailyMetric = await prisma.dailyMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailyMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyMetrics
     * const dailyMetrics = await prisma.dailyMetric.findMany()
     * 
     * // Get first 10 DailyMetrics
     * const dailyMetrics = await prisma.dailyMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyMetricWithIdOnly = await prisma.dailyMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyMetricFindManyArgs>(args?: SelectSubset<T, DailyMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailyMetric.
     * @param {DailyMetricCreateArgs} args - Arguments to create a DailyMetric.
     * @example
     * // Create one DailyMetric
     * const DailyMetric = await prisma.dailyMetric.create({
     *   data: {
     *     // ... data to create a DailyMetric
     *   }
     * })
     * 
     */
    create<T extends DailyMetricCreateArgs>(args: SelectSubset<T, DailyMetricCreateArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailyMetrics.
     * @param {DailyMetricCreateManyArgs} args - Arguments to create many DailyMetrics.
     * @example
     * // Create many DailyMetrics
     * const dailyMetric = await prisma.dailyMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyMetricCreateManyArgs>(args?: SelectSubset<T, DailyMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyMetrics and returns the data saved in the database.
     * @param {DailyMetricCreateManyAndReturnArgs} args - Arguments to create many DailyMetrics.
     * @example
     * // Create many DailyMetrics
     * const dailyMetric = await prisma.dailyMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyMetrics and only return the `id`
     * const dailyMetricWithIdOnly = await prisma.dailyMetric.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyMetricCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailyMetric.
     * @param {DailyMetricDeleteArgs} args - Arguments to delete one DailyMetric.
     * @example
     * // Delete one DailyMetric
     * const DailyMetric = await prisma.dailyMetric.delete({
     *   where: {
     *     // ... filter to delete one DailyMetric
     *   }
     * })
     * 
     */
    delete<T extends DailyMetricDeleteArgs>(args: SelectSubset<T, DailyMetricDeleteArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailyMetric.
     * @param {DailyMetricUpdateArgs} args - Arguments to update one DailyMetric.
     * @example
     * // Update one DailyMetric
     * const dailyMetric = await prisma.dailyMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyMetricUpdateArgs>(args: SelectSubset<T, DailyMetricUpdateArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailyMetrics.
     * @param {DailyMetricDeleteManyArgs} args - Arguments to filter DailyMetrics to delete.
     * @example
     * // Delete a few DailyMetrics
     * const { count } = await prisma.dailyMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyMetricDeleteManyArgs>(args?: SelectSubset<T, DailyMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyMetrics
     * const dailyMetric = await prisma.dailyMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyMetricUpdateManyArgs>(args: SelectSubset<T, DailyMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyMetric.
     * @param {DailyMetricUpsertArgs} args - Arguments to update or create a DailyMetric.
     * @example
     * // Update or create a DailyMetric
     * const dailyMetric = await prisma.dailyMetric.upsert({
     *   create: {
     *     // ... data to create a DailyMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyMetric we want to update
     *   }
     * })
     */
    upsert<T extends DailyMetricUpsertArgs>(args: SelectSubset<T, DailyMetricUpsertArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailyMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricCountArgs} args - Arguments to filter DailyMetrics to count.
     * @example
     * // Count the number of DailyMetrics
     * const count = await prisma.dailyMetric.count({
     *   where: {
     *     // ... the filter for the DailyMetrics we want to count
     *   }
     * })
    **/
    count<T extends DailyMetricCountArgs>(
      args?: Subset<T, DailyMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyMetricAggregateArgs>(args: Subset<T, DailyMetricAggregateArgs>): Prisma.PrismaPromise<GetDailyMetricAggregateType<T>>

    /**
     * Group by DailyMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricGroupByArgs} args - Group by arguments.
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
      T extends DailyMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyMetricGroupByArgs['orderBy'] }
        : { orderBy?: DailyMetricGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyMetric model
   */
  readonly fields: DailyMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DailyMetric model
   */ 
  interface DailyMetricFieldRefs {
    readonly id: FieldRef<"DailyMetric", 'String'>
    readonly metricDate: FieldRef<"DailyMetric", 'String'>
    readonly tenantId: FieldRef<"DailyMetric", 'String'>
    readonly outletId: FieldRef<"DailyMetric", 'String'>
    readonly cityCode: FieldRef<"DailyMetric", 'String'>
    readonly totalOrders: FieldRef<"DailyMetric", 'Int'>
    readonly totalSalesPaise: FieldRef<"DailyMetric", 'BigInt'>
    readonly avgPrepTimeMinutes: FieldRef<"DailyMetric", 'Float'>
    readonly updatedAt: FieldRef<"DailyMetric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyMetric findUnique
   */
  export type DailyMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Filter, which DailyMetric to fetch.
     */
    where: DailyMetricWhereUniqueInput
  }

  /**
   * DailyMetric findUniqueOrThrow
   */
  export type DailyMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Filter, which DailyMetric to fetch.
     */
    where: DailyMetricWhereUniqueInput
  }

  /**
   * DailyMetric findFirst
   */
  export type DailyMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Filter, which DailyMetric to fetch.
     */
    where?: DailyMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMetrics to fetch.
     */
    orderBy?: DailyMetricOrderByWithRelationInput | DailyMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyMetrics.
     */
    cursor?: DailyMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyMetrics.
     */
    distinct?: DailyMetricScalarFieldEnum | DailyMetricScalarFieldEnum[]
  }

  /**
   * DailyMetric findFirstOrThrow
   */
  export type DailyMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Filter, which DailyMetric to fetch.
     */
    where?: DailyMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMetrics to fetch.
     */
    orderBy?: DailyMetricOrderByWithRelationInput | DailyMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyMetrics.
     */
    cursor?: DailyMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyMetrics.
     */
    distinct?: DailyMetricScalarFieldEnum | DailyMetricScalarFieldEnum[]
  }

  /**
   * DailyMetric findMany
   */
  export type DailyMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Filter, which DailyMetrics to fetch.
     */
    where?: DailyMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMetrics to fetch.
     */
    orderBy?: DailyMetricOrderByWithRelationInput | DailyMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyMetrics.
     */
    cursor?: DailyMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMetrics.
     */
    skip?: number
    distinct?: DailyMetricScalarFieldEnum | DailyMetricScalarFieldEnum[]
  }

  /**
   * DailyMetric create
   */
  export type DailyMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * The data needed to create a DailyMetric.
     */
    data: XOR<DailyMetricCreateInput, DailyMetricUncheckedCreateInput>
  }

  /**
   * DailyMetric createMany
   */
  export type DailyMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyMetrics.
     */
    data: DailyMetricCreateManyInput | DailyMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyMetric createManyAndReturn
   */
  export type DailyMetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyMetrics.
     */
    data: DailyMetricCreateManyInput | DailyMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyMetric update
   */
  export type DailyMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * The data needed to update a DailyMetric.
     */
    data: XOR<DailyMetricUpdateInput, DailyMetricUncheckedUpdateInput>
    /**
     * Choose, which DailyMetric to update.
     */
    where: DailyMetricWhereUniqueInput
  }

  /**
   * DailyMetric updateMany
   */
  export type DailyMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyMetrics.
     */
    data: XOR<DailyMetricUpdateManyMutationInput, DailyMetricUncheckedUpdateManyInput>
    /**
     * Filter which DailyMetrics to update
     */
    where?: DailyMetricWhereInput
  }

  /**
   * DailyMetric upsert
   */
  export type DailyMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * The filter to search for the DailyMetric to update in case it exists.
     */
    where: DailyMetricWhereUniqueInput
    /**
     * In case the DailyMetric found by the `where` argument doesn't exist, create a new DailyMetric with this data.
     */
    create: XOR<DailyMetricCreateInput, DailyMetricUncheckedCreateInput>
    /**
     * In case the DailyMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyMetricUpdateInput, DailyMetricUncheckedUpdateInput>
  }

  /**
   * DailyMetric delete
   */
  export type DailyMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Filter which DailyMetric to delete.
     */
    where: DailyMetricWhereUniqueInput
  }

  /**
   * DailyMetric deleteMany
   */
  export type DailyMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyMetrics to delete
     */
    where?: DailyMetricWhereInput
  }

  /**
   * DailyMetric without action
   */
  export type DailyMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
  }


  /**
   * Model PlatformReportingFact
   */

  export type AggregatePlatformReportingFact = {
    _count: PlatformReportingFactCountAggregateOutputType | null
    _avg: PlatformReportingFactAvgAggregateOutputType | null
    _sum: PlatformReportingFactSumAggregateOutputType | null
    _min: PlatformReportingFactMinAggregateOutputType | null
    _max: PlatformReportingFactMaxAggregateOutputType | null
  }

  export type PlatformReportingFactAvgAggregateOutputType = {
    totalGmvPaise: number | null
    activeMerchantsCount: number | null
    activeCustomersCount: number | null
    totalOrdersFulfilled: number | null
  }

  export type PlatformReportingFactSumAggregateOutputType = {
    totalGmvPaise: bigint | null
    activeMerchantsCount: number | null
    activeCustomersCount: number | null
    totalOrdersFulfilled: number | null
  }

  export type PlatformReportingFactMinAggregateOutputType = {
    id: string | null
    factDate: string | null
    cityCode: string | null
    totalGmvPaise: bigint | null
    activeMerchantsCount: number | null
    activeCustomersCount: number | null
    totalOrdersFulfilled: number | null
  }

  export type PlatformReportingFactMaxAggregateOutputType = {
    id: string | null
    factDate: string | null
    cityCode: string | null
    totalGmvPaise: bigint | null
    activeMerchantsCount: number | null
    activeCustomersCount: number | null
    totalOrdersFulfilled: number | null
  }

  export type PlatformReportingFactCountAggregateOutputType = {
    id: number
    factDate: number
    cityCode: number
    totalGmvPaise: number
    activeMerchantsCount: number
    activeCustomersCount: number
    totalOrdersFulfilled: number
    _all: number
  }


  export type PlatformReportingFactAvgAggregateInputType = {
    totalGmvPaise?: true
    activeMerchantsCount?: true
    activeCustomersCount?: true
    totalOrdersFulfilled?: true
  }

  export type PlatformReportingFactSumAggregateInputType = {
    totalGmvPaise?: true
    activeMerchantsCount?: true
    activeCustomersCount?: true
    totalOrdersFulfilled?: true
  }

  export type PlatformReportingFactMinAggregateInputType = {
    id?: true
    factDate?: true
    cityCode?: true
    totalGmvPaise?: true
    activeMerchantsCount?: true
    activeCustomersCount?: true
    totalOrdersFulfilled?: true
  }

  export type PlatformReportingFactMaxAggregateInputType = {
    id?: true
    factDate?: true
    cityCode?: true
    totalGmvPaise?: true
    activeMerchantsCount?: true
    activeCustomersCount?: true
    totalOrdersFulfilled?: true
  }

  export type PlatformReportingFactCountAggregateInputType = {
    id?: true
    factDate?: true
    cityCode?: true
    totalGmvPaise?: true
    activeMerchantsCount?: true
    activeCustomersCount?: true
    totalOrdersFulfilled?: true
    _all?: true
  }

  export type PlatformReportingFactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformReportingFact to aggregate.
     */
    where?: PlatformReportingFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformReportingFacts to fetch.
     */
    orderBy?: PlatformReportingFactOrderByWithRelationInput | PlatformReportingFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformReportingFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformReportingFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformReportingFacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlatformReportingFacts
    **/
    _count?: true | PlatformReportingFactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatformReportingFactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatformReportingFactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformReportingFactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformReportingFactMaxAggregateInputType
  }

  export type GetPlatformReportingFactAggregateType<T extends PlatformReportingFactAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatformReportingFact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatformReportingFact[P]>
      : GetScalarType<T[P], AggregatePlatformReportingFact[P]>
  }




  export type PlatformReportingFactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformReportingFactWhereInput
    orderBy?: PlatformReportingFactOrderByWithAggregationInput | PlatformReportingFactOrderByWithAggregationInput[]
    by: PlatformReportingFactScalarFieldEnum[] | PlatformReportingFactScalarFieldEnum
    having?: PlatformReportingFactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformReportingFactCountAggregateInputType | true
    _avg?: PlatformReportingFactAvgAggregateInputType
    _sum?: PlatformReportingFactSumAggregateInputType
    _min?: PlatformReportingFactMinAggregateInputType
    _max?: PlatformReportingFactMaxAggregateInputType
  }

  export type PlatformReportingFactGroupByOutputType = {
    id: string
    factDate: string
    cityCode: string
    totalGmvPaise: bigint
    activeMerchantsCount: number
    activeCustomersCount: number
    totalOrdersFulfilled: number
    _count: PlatformReportingFactCountAggregateOutputType | null
    _avg: PlatformReportingFactAvgAggregateOutputType | null
    _sum: PlatformReportingFactSumAggregateOutputType | null
    _min: PlatformReportingFactMinAggregateOutputType | null
    _max: PlatformReportingFactMaxAggregateOutputType | null
  }

  type GetPlatformReportingFactGroupByPayload<T extends PlatformReportingFactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformReportingFactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformReportingFactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformReportingFactGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformReportingFactGroupByOutputType[P]>
        }
      >
    >


  export type PlatformReportingFactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factDate?: boolean
    cityCode?: boolean
    totalGmvPaise?: boolean
    activeMerchantsCount?: boolean
    activeCustomersCount?: boolean
    totalOrdersFulfilled?: boolean
  }, ExtArgs["result"]["platformReportingFact"]>

  export type PlatformReportingFactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factDate?: boolean
    cityCode?: boolean
    totalGmvPaise?: boolean
    activeMerchantsCount?: boolean
    activeCustomersCount?: boolean
    totalOrdersFulfilled?: boolean
  }, ExtArgs["result"]["platformReportingFact"]>

  export type PlatformReportingFactSelectScalar = {
    id?: boolean
    factDate?: boolean
    cityCode?: boolean
    totalGmvPaise?: boolean
    activeMerchantsCount?: boolean
    activeCustomersCount?: boolean
    totalOrdersFulfilled?: boolean
  }


  export type $PlatformReportingFactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlatformReportingFact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      factDate: string
      cityCode: string
      totalGmvPaise: bigint
      activeMerchantsCount: number
      activeCustomersCount: number
      totalOrdersFulfilled: number
    }, ExtArgs["result"]["platformReportingFact"]>
    composites: {}
  }

  type PlatformReportingFactGetPayload<S extends boolean | null | undefined | PlatformReportingFactDefaultArgs> = $Result.GetResult<Prisma.$PlatformReportingFactPayload, S>

  type PlatformReportingFactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlatformReportingFactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlatformReportingFactCountAggregateInputType | true
    }

  export interface PlatformReportingFactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlatformReportingFact'], meta: { name: 'PlatformReportingFact' } }
    /**
     * Find zero or one PlatformReportingFact that matches the filter.
     * @param {PlatformReportingFactFindUniqueArgs} args - Arguments to find a PlatformReportingFact
     * @example
     * // Get one PlatformReportingFact
     * const platformReportingFact = await prisma.platformReportingFact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformReportingFactFindUniqueArgs>(args: SelectSubset<T, PlatformReportingFactFindUniqueArgs<ExtArgs>>): Prisma__PlatformReportingFactClient<$Result.GetResult<Prisma.$PlatformReportingFactPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PlatformReportingFact that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlatformReportingFactFindUniqueOrThrowArgs} args - Arguments to find a PlatformReportingFact
     * @example
     * // Get one PlatformReportingFact
     * const platformReportingFact = await prisma.platformReportingFact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformReportingFactFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformReportingFactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformReportingFactClient<$Result.GetResult<Prisma.$PlatformReportingFactPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PlatformReportingFact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformReportingFactFindFirstArgs} args - Arguments to find a PlatformReportingFact
     * @example
     * // Get one PlatformReportingFact
     * const platformReportingFact = await prisma.platformReportingFact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformReportingFactFindFirstArgs>(args?: SelectSubset<T, PlatformReportingFactFindFirstArgs<ExtArgs>>): Prisma__PlatformReportingFactClient<$Result.GetResult<Prisma.$PlatformReportingFactPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PlatformReportingFact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformReportingFactFindFirstOrThrowArgs} args - Arguments to find a PlatformReportingFact
     * @example
     * // Get one PlatformReportingFact
     * const platformReportingFact = await prisma.platformReportingFact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformReportingFactFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformReportingFactFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformReportingFactClient<$Result.GetResult<Prisma.$PlatformReportingFactPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PlatformReportingFacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformReportingFactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlatformReportingFacts
     * const platformReportingFacts = await prisma.platformReportingFact.findMany()
     * 
     * // Get first 10 PlatformReportingFacts
     * const platformReportingFacts = await prisma.platformReportingFact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformReportingFactWithIdOnly = await prisma.platformReportingFact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformReportingFactFindManyArgs>(args?: SelectSubset<T, PlatformReportingFactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformReportingFactPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PlatformReportingFact.
     * @param {PlatformReportingFactCreateArgs} args - Arguments to create a PlatformReportingFact.
     * @example
     * // Create one PlatformReportingFact
     * const PlatformReportingFact = await prisma.platformReportingFact.create({
     *   data: {
     *     // ... data to create a PlatformReportingFact
     *   }
     * })
     * 
     */
    create<T extends PlatformReportingFactCreateArgs>(args: SelectSubset<T, PlatformReportingFactCreateArgs<ExtArgs>>): Prisma__PlatformReportingFactClient<$Result.GetResult<Prisma.$PlatformReportingFactPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PlatformReportingFacts.
     * @param {PlatformReportingFactCreateManyArgs} args - Arguments to create many PlatformReportingFacts.
     * @example
     * // Create many PlatformReportingFacts
     * const platformReportingFact = await prisma.platformReportingFact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformReportingFactCreateManyArgs>(args?: SelectSubset<T, PlatformReportingFactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlatformReportingFacts and returns the data saved in the database.
     * @param {PlatformReportingFactCreateManyAndReturnArgs} args - Arguments to create many PlatformReportingFacts.
     * @example
     * // Create many PlatformReportingFacts
     * const platformReportingFact = await prisma.platformReportingFact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlatformReportingFacts and only return the `id`
     * const platformReportingFactWithIdOnly = await prisma.platformReportingFact.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformReportingFactCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformReportingFactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformReportingFactPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PlatformReportingFact.
     * @param {PlatformReportingFactDeleteArgs} args - Arguments to delete one PlatformReportingFact.
     * @example
     * // Delete one PlatformReportingFact
     * const PlatformReportingFact = await prisma.platformReportingFact.delete({
     *   where: {
     *     // ... filter to delete one PlatformReportingFact
     *   }
     * })
     * 
     */
    delete<T extends PlatformReportingFactDeleteArgs>(args: SelectSubset<T, PlatformReportingFactDeleteArgs<ExtArgs>>): Prisma__PlatformReportingFactClient<$Result.GetResult<Prisma.$PlatformReportingFactPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PlatformReportingFact.
     * @param {PlatformReportingFactUpdateArgs} args - Arguments to update one PlatformReportingFact.
     * @example
     * // Update one PlatformReportingFact
     * const platformReportingFact = await prisma.platformReportingFact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformReportingFactUpdateArgs>(args: SelectSubset<T, PlatformReportingFactUpdateArgs<ExtArgs>>): Prisma__PlatformReportingFactClient<$Result.GetResult<Prisma.$PlatformReportingFactPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PlatformReportingFacts.
     * @param {PlatformReportingFactDeleteManyArgs} args - Arguments to filter PlatformReportingFacts to delete.
     * @example
     * // Delete a few PlatformReportingFacts
     * const { count } = await prisma.platformReportingFact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformReportingFactDeleteManyArgs>(args?: SelectSubset<T, PlatformReportingFactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformReportingFacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformReportingFactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlatformReportingFacts
     * const platformReportingFact = await prisma.platformReportingFact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformReportingFactUpdateManyArgs>(args: SelectSubset<T, PlatformReportingFactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlatformReportingFact.
     * @param {PlatformReportingFactUpsertArgs} args - Arguments to update or create a PlatformReportingFact.
     * @example
     * // Update or create a PlatformReportingFact
     * const platformReportingFact = await prisma.platformReportingFact.upsert({
     *   create: {
     *     // ... data to create a PlatformReportingFact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlatformReportingFact we want to update
     *   }
     * })
     */
    upsert<T extends PlatformReportingFactUpsertArgs>(args: SelectSubset<T, PlatformReportingFactUpsertArgs<ExtArgs>>): Prisma__PlatformReportingFactClient<$Result.GetResult<Prisma.$PlatformReportingFactPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PlatformReportingFacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformReportingFactCountArgs} args - Arguments to filter PlatformReportingFacts to count.
     * @example
     * // Count the number of PlatformReportingFacts
     * const count = await prisma.platformReportingFact.count({
     *   where: {
     *     // ... the filter for the PlatformReportingFacts we want to count
     *   }
     * })
    **/
    count<T extends PlatformReportingFactCountArgs>(
      args?: Subset<T, PlatformReportingFactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformReportingFactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlatformReportingFact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformReportingFactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlatformReportingFactAggregateArgs>(args: Subset<T, PlatformReportingFactAggregateArgs>): Prisma.PrismaPromise<GetPlatformReportingFactAggregateType<T>>

    /**
     * Group by PlatformReportingFact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformReportingFactGroupByArgs} args - Group by arguments.
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
      T extends PlatformReportingFactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformReportingFactGroupByArgs['orderBy'] }
        : { orderBy?: PlatformReportingFactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlatformReportingFactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformReportingFactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlatformReportingFact model
   */
  readonly fields: PlatformReportingFactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlatformReportingFact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformReportingFactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PlatformReportingFact model
   */ 
  interface PlatformReportingFactFieldRefs {
    readonly id: FieldRef<"PlatformReportingFact", 'String'>
    readonly factDate: FieldRef<"PlatformReportingFact", 'String'>
    readonly cityCode: FieldRef<"PlatformReportingFact", 'String'>
    readonly totalGmvPaise: FieldRef<"PlatformReportingFact", 'BigInt'>
    readonly activeMerchantsCount: FieldRef<"PlatformReportingFact", 'Int'>
    readonly activeCustomersCount: FieldRef<"PlatformReportingFact", 'Int'>
    readonly totalOrdersFulfilled: FieldRef<"PlatformReportingFact", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlatformReportingFact findUnique
   */
  export type PlatformReportingFactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformReportingFact
     */
    select?: PlatformReportingFactSelect<ExtArgs> | null
    /**
     * Filter, which PlatformReportingFact to fetch.
     */
    where: PlatformReportingFactWhereUniqueInput
  }

  /**
   * PlatformReportingFact findUniqueOrThrow
   */
  export type PlatformReportingFactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformReportingFact
     */
    select?: PlatformReportingFactSelect<ExtArgs> | null
    /**
     * Filter, which PlatformReportingFact to fetch.
     */
    where: PlatformReportingFactWhereUniqueInput
  }

  /**
   * PlatformReportingFact findFirst
   */
  export type PlatformReportingFactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformReportingFact
     */
    select?: PlatformReportingFactSelect<ExtArgs> | null
    /**
     * Filter, which PlatformReportingFact to fetch.
     */
    where?: PlatformReportingFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformReportingFacts to fetch.
     */
    orderBy?: PlatformReportingFactOrderByWithRelationInput | PlatformReportingFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformReportingFacts.
     */
    cursor?: PlatformReportingFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformReportingFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformReportingFacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformReportingFacts.
     */
    distinct?: PlatformReportingFactScalarFieldEnum | PlatformReportingFactScalarFieldEnum[]
  }

  /**
   * PlatformReportingFact findFirstOrThrow
   */
  export type PlatformReportingFactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformReportingFact
     */
    select?: PlatformReportingFactSelect<ExtArgs> | null
    /**
     * Filter, which PlatformReportingFact to fetch.
     */
    where?: PlatformReportingFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformReportingFacts to fetch.
     */
    orderBy?: PlatformReportingFactOrderByWithRelationInput | PlatformReportingFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformReportingFacts.
     */
    cursor?: PlatformReportingFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformReportingFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformReportingFacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformReportingFacts.
     */
    distinct?: PlatformReportingFactScalarFieldEnum | PlatformReportingFactScalarFieldEnum[]
  }

  /**
   * PlatformReportingFact findMany
   */
  export type PlatformReportingFactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformReportingFact
     */
    select?: PlatformReportingFactSelect<ExtArgs> | null
    /**
     * Filter, which PlatformReportingFacts to fetch.
     */
    where?: PlatformReportingFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformReportingFacts to fetch.
     */
    orderBy?: PlatformReportingFactOrderByWithRelationInput | PlatformReportingFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlatformReportingFacts.
     */
    cursor?: PlatformReportingFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformReportingFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformReportingFacts.
     */
    skip?: number
    distinct?: PlatformReportingFactScalarFieldEnum | PlatformReportingFactScalarFieldEnum[]
  }

  /**
   * PlatformReportingFact create
   */
  export type PlatformReportingFactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformReportingFact
     */
    select?: PlatformReportingFactSelect<ExtArgs> | null
    /**
     * The data needed to create a PlatformReportingFact.
     */
    data: XOR<PlatformReportingFactCreateInput, PlatformReportingFactUncheckedCreateInput>
  }

  /**
   * PlatformReportingFact createMany
   */
  export type PlatformReportingFactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlatformReportingFacts.
     */
    data: PlatformReportingFactCreateManyInput | PlatformReportingFactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformReportingFact createManyAndReturn
   */
  export type PlatformReportingFactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformReportingFact
     */
    select?: PlatformReportingFactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PlatformReportingFacts.
     */
    data: PlatformReportingFactCreateManyInput | PlatformReportingFactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformReportingFact update
   */
  export type PlatformReportingFactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformReportingFact
     */
    select?: PlatformReportingFactSelect<ExtArgs> | null
    /**
     * The data needed to update a PlatformReportingFact.
     */
    data: XOR<PlatformReportingFactUpdateInput, PlatformReportingFactUncheckedUpdateInput>
    /**
     * Choose, which PlatformReportingFact to update.
     */
    where: PlatformReportingFactWhereUniqueInput
  }

  /**
   * PlatformReportingFact updateMany
   */
  export type PlatformReportingFactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlatformReportingFacts.
     */
    data: XOR<PlatformReportingFactUpdateManyMutationInput, PlatformReportingFactUncheckedUpdateManyInput>
    /**
     * Filter which PlatformReportingFacts to update
     */
    where?: PlatformReportingFactWhereInput
  }

  /**
   * PlatformReportingFact upsert
   */
  export type PlatformReportingFactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformReportingFact
     */
    select?: PlatformReportingFactSelect<ExtArgs> | null
    /**
     * The filter to search for the PlatformReportingFact to update in case it exists.
     */
    where: PlatformReportingFactWhereUniqueInput
    /**
     * In case the PlatformReportingFact found by the `where` argument doesn't exist, create a new PlatformReportingFact with this data.
     */
    create: XOR<PlatformReportingFactCreateInput, PlatformReportingFactUncheckedCreateInput>
    /**
     * In case the PlatformReportingFact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformReportingFactUpdateInput, PlatformReportingFactUncheckedUpdateInput>
  }

  /**
   * PlatformReportingFact delete
   */
  export type PlatformReportingFactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformReportingFact
     */
    select?: PlatformReportingFactSelect<ExtArgs> | null
    /**
     * Filter which PlatformReportingFact to delete.
     */
    where: PlatformReportingFactWhereUniqueInput
  }

  /**
   * PlatformReportingFact deleteMany
   */
  export type PlatformReportingFactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformReportingFacts to delete
     */
    where?: PlatformReportingFactWhereInput
  }

  /**
   * PlatformReportingFact without action
   */
  export type PlatformReportingFactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformReportingFact
     */
    select?: PlatformReportingFactSelect<ExtArgs> | null
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


  export const DailyMetricScalarFieldEnum: {
    id: 'id',
    metricDate: 'metricDate',
    tenantId: 'tenantId',
    outletId: 'outletId',
    cityCode: 'cityCode',
    totalOrders: 'totalOrders',
    totalSalesPaise: 'totalSalesPaise',
    avgPrepTimeMinutes: 'avgPrepTimeMinutes',
    updatedAt: 'updatedAt'
  };

  export type DailyMetricScalarFieldEnum = (typeof DailyMetricScalarFieldEnum)[keyof typeof DailyMetricScalarFieldEnum]


  export const PlatformReportingFactScalarFieldEnum: {
    id: 'id',
    factDate: 'factDate',
    cityCode: 'cityCode',
    totalGmvPaise: 'totalGmvPaise',
    activeMerchantsCount: 'activeMerchantsCount',
    activeCustomersCount: 'activeCustomersCount',
    totalOrdersFulfilled: 'totalOrdersFulfilled'
  };

  export type PlatformReportingFactScalarFieldEnum = (typeof PlatformReportingFactScalarFieldEnum)[keyof typeof PlatformReportingFactScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type DailyMetricWhereInput = {
    AND?: DailyMetricWhereInput | DailyMetricWhereInput[]
    OR?: DailyMetricWhereInput[]
    NOT?: DailyMetricWhereInput | DailyMetricWhereInput[]
    id?: StringFilter<"DailyMetric"> | string
    metricDate?: StringFilter<"DailyMetric"> | string
    tenantId?: StringNullableFilter<"DailyMetric"> | string | null
    outletId?: StringFilter<"DailyMetric"> | string
    cityCode?: StringFilter<"DailyMetric"> | string
    totalOrders?: IntFilter<"DailyMetric"> | number
    totalSalesPaise?: BigIntFilter<"DailyMetric"> | bigint | number
    avgPrepTimeMinutes?: FloatFilter<"DailyMetric"> | number
    updatedAt?: DateTimeFilter<"DailyMetric"> | Date | string
  }

  export type DailyMetricOrderByWithRelationInput = {
    id?: SortOrder
    metricDate?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    outletId?: SortOrder
    cityCode?: SortOrder
    totalOrders?: SortOrder
    totalSalesPaise?: SortOrder
    avgPrepTimeMinutes?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    metricDate_outletId?: DailyMetricMetricDateOutletIdCompoundUniqueInput
    AND?: DailyMetricWhereInput | DailyMetricWhereInput[]
    OR?: DailyMetricWhereInput[]
    NOT?: DailyMetricWhereInput | DailyMetricWhereInput[]
    metricDate?: StringFilter<"DailyMetric"> | string
    tenantId?: StringNullableFilter<"DailyMetric"> | string | null
    outletId?: StringFilter<"DailyMetric"> | string
    cityCode?: StringFilter<"DailyMetric"> | string
    totalOrders?: IntFilter<"DailyMetric"> | number
    totalSalesPaise?: BigIntFilter<"DailyMetric"> | bigint | number
    avgPrepTimeMinutes?: FloatFilter<"DailyMetric"> | number
    updatedAt?: DateTimeFilter<"DailyMetric"> | Date | string
  }, "id" | "metricDate_outletId">

  export type DailyMetricOrderByWithAggregationInput = {
    id?: SortOrder
    metricDate?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    outletId?: SortOrder
    cityCode?: SortOrder
    totalOrders?: SortOrder
    totalSalesPaise?: SortOrder
    avgPrepTimeMinutes?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyMetricCountOrderByAggregateInput
    _avg?: DailyMetricAvgOrderByAggregateInput
    _max?: DailyMetricMaxOrderByAggregateInput
    _min?: DailyMetricMinOrderByAggregateInput
    _sum?: DailyMetricSumOrderByAggregateInput
  }

  export type DailyMetricScalarWhereWithAggregatesInput = {
    AND?: DailyMetricScalarWhereWithAggregatesInput | DailyMetricScalarWhereWithAggregatesInput[]
    OR?: DailyMetricScalarWhereWithAggregatesInput[]
    NOT?: DailyMetricScalarWhereWithAggregatesInput | DailyMetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyMetric"> | string
    metricDate?: StringWithAggregatesFilter<"DailyMetric"> | string
    tenantId?: StringNullableWithAggregatesFilter<"DailyMetric"> | string | null
    outletId?: StringWithAggregatesFilter<"DailyMetric"> | string
    cityCode?: StringWithAggregatesFilter<"DailyMetric"> | string
    totalOrders?: IntWithAggregatesFilter<"DailyMetric"> | number
    totalSalesPaise?: BigIntWithAggregatesFilter<"DailyMetric"> | bigint | number
    avgPrepTimeMinutes?: FloatWithAggregatesFilter<"DailyMetric"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"DailyMetric"> | Date | string
  }

  export type PlatformReportingFactWhereInput = {
    AND?: PlatformReportingFactWhereInput | PlatformReportingFactWhereInput[]
    OR?: PlatformReportingFactWhereInput[]
    NOT?: PlatformReportingFactWhereInput | PlatformReportingFactWhereInput[]
    id?: StringFilter<"PlatformReportingFact"> | string
    factDate?: StringFilter<"PlatformReportingFact"> | string
    cityCode?: StringFilter<"PlatformReportingFact"> | string
    totalGmvPaise?: BigIntFilter<"PlatformReportingFact"> | bigint | number
    activeMerchantsCount?: IntFilter<"PlatformReportingFact"> | number
    activeCustomersCount?: IntFilter<"PlatformReportingFact"> | number
    totalOrdersFulfilled?: IntFilter<"PlatformReportingFact"> | number
  }

  export type PlatformReportingFactOrderByWithRelationInput = {
    id?: SortOrder
    factDate?: SortOrder
    cityCode?: SortOrder
    totalGmvPaise?: SortOrder
    activeMerchantsCount?: SortOrder
    activeCustomersCount?: SortOrder
    totalOrdersFulfilled?: SortOrder
  }

  export type PlatformReportingFactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    factDate_cityCode?: PlatformReportingFactFactDateCityCodeCompoundUniqueInput
    AND?: PlatformReportingFactWhereInput | PlatformReportingFactWhereInput[]
    OR?: PlatformReportingFactWhereInput[]
    NOT?: PlatformReportingFactWhereInput | PlatformReportingFactWhereInput[]
    factDate?: StringFilter<"PlatformReportingFact"> | string
    cityCode?: StringFilter<"PlatformReportingFact"> | string
    totalGmvPaise?: BigIntFilter<"PlatformReportingFact"> | bigint | number
    activeMerchantsCount?: IntFilter<"PlatformReportingFact"> | number
    activeCustomersCount?: IntFilter<"PlatformReportingFact"> | number
    totalOrdersFulfilled?: IntFilter<"PlatformReportingFact"> | number
  }, "id" | "factDate_cityCode">

  export type PlatformReportingFactOrderByWithAggregationInput = {
    id?: SortOrder
    factDate?: SortOrder
    cityCode?: SortOrder
    totalGmvPaise?: SortOrder
    activeMerchantsCount?: SortOrder
    activeCustomersCount?: SortOrder
    totalOrdersFulfilled?: SortOrder
    _count?: PlatformReportingFactCountOrderByAggregateInput
    _avg?: PlatformReportingFactAvgOrderByAggregateInput
    _max?: PlatformReportingFactMaxOrderByAggregateInput
    _min?: PlatformReportingFactMinOrderByAggregateInput
    _sum?: PlatformReportingFactSumOrderByAggregateInput
  }

  export type PlatformReportingFactScalarWhereWithAggregatesInput = {
    AND?: PlatformReportingFactScalarWhereWithAggregatesInput | PlatformReportingFactScalarWhereWithAggregatesInput[]
    OR?: PlatformReportingFactScalarWhereWithAggregatesInput[]
    NOT?: PlatformReportingFactScalarWhereWithAggregatesInput | PlatformReportingFactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlatformReportingFact"> | string
    factDate?: StringWithAggregatesFilter<"PlatformReportingFact"> | string
    cityCode?: StringWithAggregatesFilter<"PlatformReportingFact"> | string
    totalGmvPaise?: BigIntWithAggregatesFilter<"PlatformReportingFact"> | bigint | number
    activeMerchantsCount?: IntWithAggregatesFilter<"PlatformReportingFact"> | number
    activeCustomersCount?: IntWithAggregatesFilter<"PlatformReportingFact"> | number
    totalOrdersFulfilled?: IntWithAggregatesFilter<"PlatformReportingFact"> | number
  }

  export type DailyMetricCreateInput = {
    id?: string
    metricDate: string
    tenantId?: string | null
    outletId: string
    cityCode?: string
    totalOrders?: number
    totalSalesPaise?: bigint | number
    avgPrepTimeMinutes?: number
    updatedAt?: Date | string
  }

  export type DailyMetricUncheckedCreateInput = {
    id?: string
    metricDate: string
    tenantId?: string | null
    outletId: string
    cityCode?: string
    totalOrders?: number
    totalSalesPaise?: bigint | number
    avgPrepTimeMinutes?: number
    updatedAt?: Date | string
  }

  export type DailyMetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricDate?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalSalesPaise?: BigIntFieldUpdateOperationsInput | bigint | number
    avgPrepTimeMinutes?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyMetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricDate?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalSalesPaise?: BigIntFieldUpdateOperationsInput | bigint | number
    avgPrepTimeMinutes?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyMetricCreateManyInput = {
    id?: string
    metricDate: string
    tenantId?: string | null
    outletId: string
    cityCode?: string
    totalOrders?: number
    totalSalesPaise?: bigint | number
    avgPrepTimeMinutes?: number
    updatedAt?: Date | string
  }

  export type DailyMetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricDate?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalSalesPaise?: BigIntFieldUpdateOperationsInput | bigint | number
    avgPrepTimeMinutes?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyMetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricDate?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalSalesPaise?: BigIntFieldUpdateOperationsInput | bigint | number
    avgPrepTimeMinutes?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformReportingFactCreateInput = {
    id?: string
    factDate: string
    cityCode?: string
    totalGmvPaise?: bigint | number
    activeMerchantsCount?: number
    activeCustomersCount?: number
    totalOrdersFulfilled?: number
  }

  export type PlatformReportingFactUncheckedCreateInput = {
    id?: string
    factDate: string
    cityCode?: string
    totalGmvPaise?: bigint | number
    activeMerchantsCount?: number
    activeCustomersCount?: number
    totalOrdersFulfilled?: number
  }

  export type PlatformReportingFactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    factDate?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    totalGmvPaise?: BigIntFieldUpdateOperationsInput | bigint | number
    activeMerchantsCount?: IntFieldUpdateOperationsInput | number
    activeCustomersCount?: IntFieldUpdateOperationsInput | number
    totalOrdersFulfilled?: IntFieldUpdateOperationsInput | number
  }

  export type PlatformReportingFactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    factDate?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    totalGmvPaise?: BigIntFieldUpdateOperationsInput | bigint | number
    activeMerchantsCount?: IntFieldUpdateOperationsInput | number
    activeCustomersCount?: IntFieldUpdateOperationsInput | number
    totalOrdersFulfilled?: IntFieldUpdateOperationsInput | number
  }

  export type PlatformReportingFactCreateManyInput = {
    id?: string
    factDate: string
    cityCode?: string
    totalGmvPaise?: bigint | number
    activeMerchantsCount?: number
    activeCustomersCount?: number
    totalOrdersFulfilled?: number
  }

  export type PlatformReportingFactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    factDate?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    totalGmvPaise?: BigIntFieldUpdateOperationsInput | bigint | number
    activeMerchantsCount?: IntFieldUpdateOperationsInput | number
    activeCustomersCount?: IntFieldUpdateOperationsInput | number
    totalOrdersFulfilled?: IntFieldUpdateOperationsInput | number
  }

  export type PlatformReportingFactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    factDate?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    totalGmvPaise?: BigIntFieldUpdateOperationsInput | bigint | number
    activeMerchantsCount?: IntFieldUpdateOperationsInput | number
    activeCustomersCount?: IntFieldUpdateOperationsInput | number
    totalOrdersFulfilled?: IntFieldUpdateOperationsInput | number
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DailyMetricMetricDateOutletIdCompoundUniqueInput = {
    metricDate: string
    outletId: string
  }

  export type DailyMetricCountOrderByAggregateInput = {
    id?: SortOrder
    metricDate?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    cityCode?: SortOrder
    totalOrders?: SortOrder
    totalSalesPaise?: SortOrder
    avgPrepTimeMinutes?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyMetricAvgOrderByAggregateInput = {
    totalOrders?: SortOrder
    totalSalesPaise?: SortOrder
    avgPrepTimeMinutes?: SortOrder
  }

  export type DailyMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    metricDate?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    cityCode?: SortOrder
    totalOrders?: SortOrder
    totalSalesPaise?: SortOrder
    avgPrepTimeMinutes?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyMetricMinOrderByAggregateInput = {
    id?: SortOrder
    metricDate?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    cityCode?: SortOrder
    totalOrders?: SortOrder
    totalSalesPaise?: SortOrder
    avgPrepTimeMinutes?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyMetricSumOrderByAggregateInput = {
    totalOrders?: SortOrder
    totalSalesPaise?: SortOrder
    avgPrepTimeMinutes?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type PlatformReportingFactFactDateCityCodeCompoundUniqueInput = {
    factDate: string
    cityCode: string
  }

  export type PlatformReportingFactCountOrderByAggregateInput = {
    id?: SortOrder
    factDate?: SortOrder
    cityCode?: SortOrder
    totalGmvPaise?: SortOrder
    activeMerchantsCount?: SortOrder
    activeCustomersCount?: SortOrder
    totalOrdersFulfilled?: SortOrder
  }

  export type PlatformReportingFactAvgOrderByAggregateInput = {
    totalGmvPaise?: SortOrder
    activeMerchantsCount?: SortOrder
    activeCustomersCount?: SortOrder
    totalOrdersFulfilled?: SortOrder
  }

  export type PlatformReportingFactMaxOrderByAggregateInput = {
    id?: SortOrder
    factDate?: SortOrder
    cityCode?: SortOrder
    totalGmvPaise?: SortOrder
    activeMerchantsCount?: SortOrder
    activeCustomersCount?: SortOrder
    totalOrdersFulfilled?: SortOrder
  }

  export type PlatformReportingFactMinOrderByAggregateInput = {
    id?: SortOrder
    factDate?: SortOrder
    cityCode?: SortOrder
    totalGmvPaise?: SortOrder
    activeMerchantsCount?: SortOrder
    activeCustomersCount?: SortOrder
    totalOrdersFulfilled?: SortOrder
  }

  export type PlatformReportingFactSumOrderByAggregateInput = {
    totalGmvPaise?: SortOrder
    activeMerchantsCount?: SortOrder
    activeCustomersCount?: SortOrder
    totalOrdersFulfilled?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DailyMetricDefaultArgs instead
     */
    export type DailyMetricArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyMetricDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlatformReportingFactDefaultArgs instead
     */
    export type PlatformReportingFactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlatformReportingFactDefaultArgs<ExtArgs>

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