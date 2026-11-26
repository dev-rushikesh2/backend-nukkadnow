
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
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model StockBalance
 * 
 */
export type StockBalance = $Result.DefaultSelection<Prisma.$StockBalancePayload>
/**
 * Model StockMovement
 * 
 */
export type StockMovement = $Result.DefaultSelection<Prisma.$StockMovementPayload>
/**
 * Model StockReservation
 * 
 */
export type StockReservation = $Result.DefaultSelection<Prisma.$StockReservationPayload>
/**
 * Model AdminPriceCapRule
 * 
 */
export type AdminPriceCapRule = $Result.DefaultSelection<Prisma.$AdminPriceCapRulePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
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
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs>;

  /**
   * `prisma.stockBalance`: Exposes CRUD operations for the **StockBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockBalances
    * const stockBalances = await prisma.stockBalance.findMany()
    * ```
    */
  get stockBalance(): Prisma.StockBalanceDelegate<ExtArgs>;

  /**
   * `prisma.stockMovement`: Exposes CRUD operations for the **StockMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockMovements
    * const stockMovements = await prisma.stockMovement.findMany()
    * ```
    */
  get stockMovement(): Prisma.StockMovementDelegate<ExtArgs>;

  /**
   * `prisma.stockReservation`: Exposes CRUD operations for the **StockReservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockReservations
    * const stockReservations = await prisma.stockReservation.findMany()
    * ```
    */
  get stockReservation(): Prisma.StockReservationDelegate<ExtArgs>;

  /**
   * `prisma.adminPriceCapRule`: Exposes CRUD operations for the **AdminPriceCapRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminPriceCapRules
    * const adminPriceCapRules = await prisma.adminPriceCapRule.findMany()
    * ```
    */
  get adminPriceCapRule(): Prisma.AdminPriceCapRuleDelegate<ExtArgs>;
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
    Product: 'Product',
    ProductVariant: 'ProductVariant',
    StockBalance: 'StockBalance',
    StockMovement: 'StockMovement',
    StockReservation: 'StockReservation',
    AdminPriceCapRule: 'AdminPriceCapRule'
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
      modelProps: "product" | "productVariant" | "stockBalance" | "stockMovement" | "stockReservation" | "adminPriceCapRule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      StockBalance: {
        payload: Prisma.$StockBalancePayload<ExtArgs>
        fields: Prisma.StockBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBalancePayload>
          }
          findFirst: {
            args: Prisma.StockBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBalancePayload>
          }
          findMany: {
            args: Prisma.StockBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBalancePayload>[]
          }
          create: {
            args: Prisma.StockBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBalancePayload>
          }
          createMany: {
            args: Prisma.StockBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBalancePayload>[]
          }
          delete: {
            args: Prisma.StockBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBalancePayload>
          }
          update: {
            args: Prisma.StockBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBalancePayload>
          }
          deleteMany: {
            args: Prisma.StockBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBalancePayload>
          }
          aggregate: {
            args: Prisma.StockBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockBalance>
          }
          groupBy: {
            args: Prisma.StockBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<StockBalanceCountAggregateOutputType> | number
          }
        }
      }
      StockMovement: {
        payload: Prisma.$StockMovementPayload<ExtArgs>
        fields: Prisma.StockMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findFirst: {
            args: Prisma.StockMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findMany: {
            args: Prisma.StockMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          create: {
            args: Prisma.StockMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          createMany: {
            args: Prisma.StockMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          delete: {
            args: Prisma.StockMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          update: {
            args: Prisma.StockMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          deleteMany: {
            args: Prisma.StockMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          aggregate: {
            args: Prisma.StockMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockMovement>
          }
          groupBy: {
            args: Prisma.StockMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockMovementCountArgs<ExtArgs>
            result: $Utils.Optional<StockMovementCountAggregateOutputType> | number
          }
        }
      }
      StockReservation: {
        payload: Prisma.$StockReservationPayload<ExtArgs>
        fields: Prisma.StockReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockReservationPayload>
          }
          findFirst: {
            args: Prisma.StockReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockReservationPayload>
          }
          findMany: {
            args: Prisma.StockReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockReservationPayload>[]
          }
          create: {
            args: Prisma.StockReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockReservationPayload>
          }
          createMany: {
            args: Prisma.StockReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockReservationPayload>[]
          }
          delete: {
            args: Prisma.StockReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockReservationPayload>
          }
          update: {
            args: Prisma.StockReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockReservationPayload>
          }
          deleteMany: {
            args: Prisma.StockReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockReservationPayload>
          }
          aggregate: {
            args: Prisma.StockReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockReservation>
          }
          groupBy: {
            args: Prisma.StockReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockReservationCountArgs<ExtArgs>
            result: $Utils.Optional<StockReservationCountAggregateOutputType> | number
          }
        }
      }
      AdminPriceCapRule: {
        payload: Prisma.$AdminPriceCapRulePayload<ExtArgs>
        fields: Prisma.AdminPriceCapRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminPriceCapRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPriceCapRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminPriceCapRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPriceCapRulePayload>
          }
          findFirst: {
            args: Prisma.AdminPriceCapRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPriceCapRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminPriceCapRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPriceCapRulePayload>
          }
          findMany: {
            args: Prisma.AdminPriceCapRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPriceCapRulePayload>[]
          }
          create: {
            args: Prisma.AdminPriceCapRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPriceCapRulePayload>
          }
          createMany: {
            args: Prisma.AdminPriceCapRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminPriceCapRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPriceCapRulePayload>[]
          }
          delete: {
            args: Prisma.AdminPriceCapRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPriceCapRulePayload>
          }
          update: {
            args: Prisma.AdminPriceCapRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPriceCapRulePayload>
          }
          deleteMany: {
            args: Prisma.AdminPriceCapRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminPriceCapRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminPriceCapRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPriceCapRulePayload>
          }
          aggregate: {
            args: Prisma.AdminPriceCapRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminPriceCapRule>
          }
          groupBy: {
            args: Prisma.AdminPriceCapRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminPriceCapRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminPriceCapRuleCountArgs<ExtArgs>
            result: $Utils.Optional<AdminPriceCapRuleCountAggregateOutputType> | number
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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    variants: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
  }


  /**
   * Count Type ProductVariantCountOutputType
   */

  export type ProductVariantCountOutputType = {
    stockReservations: number
    stockMovements: number
  }

  export type ProductVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockReservations?: boolean | ProductVariantCountOutputTypeCountStockReservationsArgs
    stockMovements?: boolean | ProductVariantCountOutputTypeCountStockMovementsArgs
  }

  // Custom InputTypes
  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantCountOutputType
     */
    select?: ProductVariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountStockReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockReservationWhereInput
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountStockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    outletId: string | null
    name: string | null
    description: string | null
    category: string | null
    subCategory: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    outletId: string | null
    name: string | null
    description: string | null
    category: string | null
    subCategory: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    tenantId: number
    outletId: number
    name: number
    description: number
    category: number
    subCategory: number
    isAvailable: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    tenantId?: true
    outletId?: true
    name?: true
    description?: true
    category?: true
    subCategory?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    tenantId?: true
    outletId?: true
    name?: true
    description?: true
    category?: true
    subCategory?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    tenantId?: true
    outletId?: true
    name?: true
    description?: true
    category?: true
    subCategory?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    tenantId: string
    outletId: string
    name: string
    description: string | null
    category: string
    subCategory: string | null
    isAvailable: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    outletId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    subCategory?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    outletId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    subCategory?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    tenantId?: boolean
    outletId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    subCategory?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      variants: Prisma.$ProductVariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      outletId: string
      name: string
      description: string | null
      category: string
      subCategory: string | null
      isAvailable: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variants<T extends Product$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly tenantId: FieldRef<"Product", 'String'>
    readonly outletId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly subCategory: FieldRef<"Product", 'String'>
    readonly isAvailable: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.variants
   */
  export type Product$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    cursor?: ProductVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantAvgAggregateOutputType = {
    pricePaise: number | null
    compareAtPricePaise: number | null
    leadTimeMinutes: number | null
  }

  export type ProductVariantSumAggregateOutputType = {
    pricePaise: number | null
    compareAtPricePaise: number | null
    leadTimeMinutes: number | null
  }

  export type ProductVariantMinAggregateOutputType = {
    id: string | null
    productId: string | null
    tenantId: string | null
    outletId: string | null
    name: string | null
    sku: string | null
    barcode: string | null
    pricePaise: number | null
    compareAtPricePaise: number | null
    isPreorder: boolean | null
    leadTimeMinutes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    tenantId: string | null
    outletId: string | null
    name: string | null
    sku: string | null
    barcode: string | null
    pricePaise: number | null
    compareAtPricePaise: number | null
    isPreorder: boolean | null
    leadTimeMinutes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantCountAggregateOutputType = {
    id: number
    productId: number
    tenantId: number
    outletId: number
    name: number
    sku: number
    barcode: number
    pricePaise: number
    compareAtPricePaise: number
    isPreorder: number
    leadTimeMinutes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductVariantAvgAggregateInputType = {
    pricePaise?: true
    compareAtPricePaise?: true
    leadTimeMinutes?: true
  }

  export type ProductVariantSumAggregateInputType = {
    pricePaise?: true
    compareAtPricePaise?: true
    leadTimeMinutes?: true
  }

  export type ProductVariantMinAggregateInputType = {
    id?: true
    productId?: true
    tenantId?: true
    outletId?: true
    name?: true
    sku?: true
    barcode?: true
    pricePaise?: true
    compareAtPricePaise?: true
    isPreorder?: true
    leadTimeMinutes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    id?: true
    productId?: true
    tenantId?: true
    outletId?: true
    name?: true
    sku?: true
    barcode?: true
    pricePaise?: true
    compareAtPricePaise?: true
    isPreorder?: true
    leadTimeMinutes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantCountAggregateInputType = {
    id?: true
    productId?: true
    tenantId?: true
    outletId?: true
    name?: true
    sku?: true
    barcode?: true
    pricePaise?: true
    compareAtPricePaise?: true
    isPreorder?: true
    leadTimeMinutes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _avg?: ProductVariantAvgAggregateInputType
    _sum?: ProductVariantSumAggregateInputType
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    id: string
    productId: string
    tenantId: string | null
    outletId: string | null
    name: string
    sku: string | null
    barcode: string | null
    pricePaise: number
    compareAtPricePaise: number | null
    isPreorder: boolean
    leadTimeMinutes: number
    createdAt: Date
    updatedAt: Date
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    tenantId?: boolean
    outletId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    pricePaise?: boolean
    compareAtPricePaise?: boolean
    isPreorder?: boolean
    leadTimeMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    stockBalance?: boolean | ProductVariant$stockBalanceArgs<ExtArgs>
    stockReservations?: boolean | ProductVariant$stockReservationsArgs<ExtArgs>
    stockMovements?: boolean | ProductVariant$stockMovementsArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    tenantId?: boolean
    outletId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    pricePaise?: boolean
    compareAtPricePaise?: boolean
    isPreorder?: boolean
    leadTimeMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectScalar = {
    id?: boolean
    productId?: boolean
    tenantId?: boolean
    outletId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    pricePaise?: boolean
    compareAtPricePaise?: boolean
    isPreorder?: boolean
    leadTimeMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    stockBalance?: boolean | ProductVariant$stockBalanceArgs<ExtArgs>
    stockReservations?: boolean | ProductVariant$stockReservationsArgs<ExtArgs>
    stockMovements?: boolean | ProductVariant$stockMovementsArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      stockBalance: Prisma.$StockBalancePayload<ExtArgs> | null
      stockReservations: Prisma.$StockReservationPayload<ExtArgs>[]
      stockMovements: Prisma.$StockMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      tenantId: string | null
      outletId: string | null
      name: string
      sku: string | null
      barcode: string | null
      pricePaise: number
      compareAtPricePaise: number | null
      isPreorder: boolean
      leadTimeMinutes: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }

  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantFindUniqueArgs>(args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductVariant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantFindFirstArgs>(args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantFindManyArgs>(args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
     */
    create<T extends ProductVariantCreateArgs>(args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantCreateManyArgs>(args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariants and returns the data saved in the database.
     * @param {ProductVariantCreateManyAndReturnArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantDeleteArgs>(args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantUpdateArgs>(args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantUpdateManyArgs>(args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantUpsertArgs>(args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
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
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    stockBalance<T extends ProductVariant$stockBalanceArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$stockBalanceArgs<ExtArgs>>): Prisma__StockBalanceClient<$Result.GetResult<Prisma.$StockBalancePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    stockReservations<T extends ProductVariant$stockReservationsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$stockReservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockReservationPayload<ExtArgs>, T, "findMany"> | Null>
    stockMovements<T extends ProductVariant$stockMovementsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$stockMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ProductVariant model
   */ 
  interface ProductVariantFieldRefs {
    readonly id: FieldRef<"ProductVariant", 'String'>
    readonly productId: FieldRef<"ProductVariant", 'String'>
    readonly tenantId: FieldRef<"ProductVariant", 'String'>
    readonly outletId: FieldRef<"ProductVariant", 'String'>
    readonly name: FieldRef<"ProductVariant", 'String'>
    readonly sku: FieldRef<"ProductVariant", 'String'>
    readonly barcode: FieldRef<"ProductVariant", 'String'>
    readonly pricePaise: FieldRef<"ProductVariant", 'Int'>
    readonly compareAtPricePaise: FieldRef<"ProductVariant", 'Int'>
    readonly isPreorder: FieldRef<"ProductVariant", 'Boolean'>
    readonly leadTimeMinutes: FieldRef<"ProductVariant", 'Int'>
    readonly createdAt: FieldRef<"ProductVariant", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductVariant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }

  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariant createManyAndReturn
   */
  export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
  }

  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }

  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
  }

  /**
   * ProductVariant.stockBalance
   */
  export type ProductVariant$stockBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBalance
     */
    select?: StockBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBalanceInclude<ExtArgs> | null
    where?: StockBalanceWhereInput
  }

  /**
   * ProductVariant.stockReservations
   */
  export type ProductVariant$stockReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockReservation
     */
    select?: StockReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockReservationInclude<ExtArgs> | null
    where?: StockReservationWhereInput
    orderBy?: StockReservationOrderByWithRelationInput | StockReservationOrderByWithRelationInput[]
    cursor?: StockReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockReservationScalarFieldEnum | StockReservationScalarFieldEnum[]
  }

  /**
   * ProductVariant.stockMovements
   */
  export type ProductVariant$stockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
  }


  /**
   * Model StockBalance
   */

  export type AggregateStockBalance = {
    _count: StockBalanceCountAggregateOutputType | null
    _avg: StockBalanceAvgAggregateOutputType | null
    _sum: StockBalanceSumAggregateOutputType | null
    _min: StockBalanceMinAggregateOutputType | null
    _max: StockBalanceMaxAggregateOutputType | null
  }

  export type StockBalanceAvgAggregateOutputType = {
    onHandQuantity: number | null
    reservedQuantity: number | null
    safetyStock: number | null
    version: number | null
  }

  export type StockBalanceSumAggregateOutputType = {
    onHandQuantity: number | null
    reservedQuantity: number | null
    safetyStock: number | null
    version: number | null
  }

  export type StockBalanceMinAggregateOutputType = {
    id: string | null
    variantId: string | null
    tenantId: string | null
    outletId: string | null
    onHandQuantity: number | null
    reservedQuantity: number | null
    safetyStock: number | null
    version: number | null
    updatedAt: Date | null
  }

  export type StockBalanceMaxAggregateOutputType = {
    id: string | null
    variantId: string | null
    tenantId: string | null
    outletId: string | null
    onHandQuantity: number | null
    reservedQuantity: number | null
    safetyStock: number | null
    version: number | null
    updatedAt: Date | null
  }

  export type StockBalanceCountAggregateOutputType = {
    id: number
    variantId: number
    tenantId: number
    outletId: number
    onHandQuantity: number
    reservedQuantity: number
    safetyStock: number
    version: number
    updatedAt: number
    _all: number
  }


  export type StockBalanceAvgAggregateInputType = {
    onHandQuantity?: true
    reservedQuantity?: true
    safetyStock?: true
    version?: true
  }

  export type StockBalanceSumAggregateInputType = {
    onHandQuantity?: true
    reservedQuantity?: true
    safetyStock?: true
    version?: true
  }

  export type StockBalanceMinAggregateInputType = {
    id?: true
    variantId?: true
    tenantId?: true
    outletId?: true
    onHandQuantity?: true
    reservedQuantity?: true
    safetyStock?: true
    version?: true
    updatedAt?: true
  }

  export type StockBalanceMaxAggregateInputType = {
    id?: true
    variantId?: true
    tenantId?: true
    outletId?: true
    onHandQuantity?: true
    reservedQuantity?: true
    safetyStock?: true
    version?: true
    updatedAt?: true
  }

  export type StockBalanceCountAggregateInputType = {
    id?: true
    variantId?: true
    tenantId?: true
    outletId?: true
    onHandQuantity?: true
    reservedQuantity?: true
    safetyStock?: true
    version?: true
    updatedAt?: true
    _all?: true
  }

  export type StockBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockBalance to aggregate.
     */
    where?: StockBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockBalances to fetch.
     */
    orderBy?: StockBalanceOrderByWithRelationInput | StockBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockBalances
    **/
    _count?: true | StockBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockBalanceMaxAggregateInputType
  }

  export type GetStockBalanceAggregateType<T extends StockBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateStockBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockBalance[P]>
      : GetScalarType<T[P], AggregateStockBalance[P]>
  }




  export type StockBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockBalanceWhereInput
    orderBy?: StockBalanceOrderByWithAggregationInput | StockBalanceOrderByWithAggregationInput[]
    by: StockBalanceScalarFieldEnum[] | StockBalanceScalarFieldEnum
    having?: StockBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockBalanceCountAggregateInputType | true
    _avg?: StockBalanceAvgAggregateInputType
    _sum?: StockBalanceSumAggregateInputType
    _min?: StockBalanceMinAggregateInputType
    _max?: StockBalanceMaxAggregateInputType
  }

  export type StockBalanceGroupByOutputType = {
    id: string
    variantId: string
    tenantId: string
    outletId: string
    onHandQuantity: number
    reservedQuantity: number
    safetyStock: number
    version: number
    updatedAt: Date
    _count: StockBalanceCountAggregateOutputType | null
    _avg: StockBalanceAvgAggregateOutputType | null
    _sum: StockBalanceSumAggregateOutputType | null
    _min: StockBalanceMinAggregateOutputType | null
    _max: StockBalanceMaxAggregateOutputType | null
  }

  type GetStockBalanceGroupByPayload<T extends StockBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], StockBalanceGroupByOutputType[P]>
        }
      >
    >


  export type StockBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    tenantId?: boolean
    outletId?: boolean
    onHandQuantity?: boolean
    reservedQuantity?: boolean
    safetyStock?: boolean
    version?: boolean
    updatedAt?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockBalance"]>

  export type StockBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    tenantId?: boolean
    outletId?: boolean
    onHandQuantity?: boolean
    reservedQuantity?: boolean
    safetyStock?: boolean
    version?: boolean
    updatedAt?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockBalance"]>

  export type StockBalanceSelectScalar = {
    id?: boolean
    variantId?: boolean
    tenantId?: boolean
    outletId?: boolean
    onHandQuantity?: boolean
    reservedQuantity?: boolean
    safetyStock?: boolean
    version?: boolean
    updatedAt?: boolean
  }

  export type StockBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type StockBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }

  export type $StockBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockBalance"
    objects: {
      variant: Prisma.$ProductVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      variantId: string
      tenantId: string
      outletId: string
      onHandQuantity: number
      reservedQuantity: number
      safetyStock: number
      version: number
      updatedAt: Date
    }, ExtArgs["result"]["stockBalance"]>
    composites: {}
  }

  type StockBalanceGetPayload<S extends boolean | null | undefined | StockBalanceDefaultArgs> = $Result.GetResult<Prisma.$StockBalancePayload, S>

  type StockBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockBalanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockBalanceCountAggregateInputType | true
    }

  export interface StockBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockBalance'], meta: { name: 'StockBalance' } }
    /**
     * Find zero or one StockBalance that matches the filter.
     * @param {StockBalanceFindUniqueArgs} args - Arguments to find a StockBalance
     * @example
     * // Get one StockBalance
     * const stockBalance = await prisma.stockBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockBalanceFindUniqueArgs>(args: SelectSubset<T, StockBalanceFindUniqueArgs<ExtArgs>>): Prisma__StockBalanceClient<$Result.GetResult<Prisma.$StockBalancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockBalance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockBalanceFindUniqueOrThrowArgs} args - Arguments to find a StockBalance
     * @example
     * // Get one StockBalance
     * const stockBalance = await prisma.stockBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, StockBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockBalanceClient<$Result.GetResult<Prisma.$StockBalancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBalanceFindFirstArgs} args - Arguments to find a StockBalance
     * @example
     * // Get one StockBalance
     * const stockBalance = await prisma.stockBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockBalanceFindFirstArgs>(args?: SelectSubset<T, StockBalanceFindFirstArgs<ExtArgs>>): Prisma__StockBalanceClient<$Result.GetResult<Prisma.$StockBalancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBalanceFindFirstOrThrowArgs} args - Arguments to find a StockBalance
     * @example
     * // Get one StockBalance
     * const stockBalance = await prisma.stockBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, StockBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockBalanceClient<$Result.GetResult<Prisma.$StockBalancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockBalances
     * const stockBalances = await prisma.stockBalance.findMany()
     * 
     * // Get first 10 StockBalances
     * const stockBalances = await prisma.stockBalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockBalanceWithIdOnly = await prisma.stockBalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockBalanceFindManyArgs>(args?: SelectSubset<T, StockBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockBalancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockBalance.
     * @param {StockBalanceCreateArgs} args - Arguments to create a StockBalance.
     * @example
     * // Create one StockBalance
     * const StockBalance = await prisma.stockBalance.create({
     *   data: {
     *     // ... data to create a StockBalance
     *   }
     * })
     * 
     */
    create<T extends StockBalanceCreateArgs>(args: SelectSubset<T, StockBalanceCreateArgs<ExtArgs>>): Prisma__StockBalanceClient<$Result.GetResult<Prisma.$StockBalancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockBalances.
     * @param {StockBalanceCreateManyArgs} args - Arguments to create many StockBalances.
     * @example
     * // Create many StockBalances
     * const stockBalance = await prisma.stockBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockBalanceCreateManyArgs>(args?: SelectSubset<T, StockBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockBalances and returns the data saved in the database.
     * @param {StockBalanceCreateManyAndReturnArgs} args - Arguments to create many StockBalances.
     * @example
     * // Create many StockBalances
     * const stockBalance = await prisma.stockBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockBalances and only return the `id`
     * const stockBalanceWithIdOnly = await prisma.stockBalance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, StockBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockBalancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockBalance.
     * @param {StockBalanceDeleteArgs} args - Arguments to delete one StockBalance.
     * @example
     * // Delete one StockBalance
     * const StockBalance = await prisma.stockBalance.delete({
     *   where: {
     *     // ... filter to delete one StockBalance
     *   }
     * })
     * 
     */
    delete<T extends StockBalanceDeleteArgs>(args: SelectSubset<T, StockBalanceDeleteArgs<ExtArgs>>): Prisma__StockBalanceClient<$Result.GetResult<Prisma.$StockBalancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockBalance.
     * @param {StockBalanceUpdateArgs} args - Arguments to update one StockBalance.
     * @example
     * // Update one StockBalance
     * const stockBalance = await prisma.stockBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockBalanceUpdateArgs>(args: SelectSubset<T, StockBalanceUpdateArgs<ExtArgs>>): Prisma__StockBalanceClient<$Result.GetResult<Prisma.$StockBalancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockBalances.
     * @param {StockBalanceDeleteManyArgs} args - Arguments to filter StockBalances to delete.
     * @example
     * // Delete a few StockBalances
     * const { count } = await prisma.stockBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockBalanceDeleteManyArgs>(args?: SelectSubset<T, StockBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockBalances
     * const stockBalance = await prisma.stockBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockBalanceUpdateManyArgs>(args: SelectSubset<T, StockBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockBalance.
     * @param {StockBalanceUpsertArgs} args - Arguments to update or create a StockBalance.
     * @example
     * // Update or create a StockBalance
     * const stockBalance = await prisma.stockBalance.upsert({
     *   create: {
     *     // ... data to create a StockBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockBalance we want to update
     *   }
     * })
     */
    upsert<T extends StockBalanceUpsertArgs>(args: SelectSubset<T, StockBalanceUpsertArgs<ExtArgs>>): Prisma__StockBalanceClient<$Result.GetResult<Prisma.$StockBalancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBalanceCountArgs} args - Arguments to filter StockBalances to count.
     * @example
     * // Count the number of StockBalances
     * const count = await prisma.stockBalance.count({
     *   where: {
     *     // ... the filter for the StockBalances we want to count
     *   }
     * })
    **/
    count<T extends StockBalanceCountArgs>(
      args?: Subset<T, StockBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockBalanceAggregateArgs>(args: Subset<T, StockBalanceAggregateArgs>): Prisma.PrismaPromise<GetStockBalanceAggregateType<T>>

    /**
     * Group by StockBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBalanceGroupByArgs} args - Group by arguments.
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
      T extends StockBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockBalanceGroupByArgs['orderBy'] }
        : { orderBy?: StockBalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockBalance model
   */
  readonly fields: StockBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the StockBalance model
   */ 
  interface StockBalanceFieldRefs {
    readonly id: FieldRef<"StockBalance", 'String'>
    readonly variantId: FieldRef<"StockBalance", 'String'>
    readonly tenantId: FieldRef<"StockBalance", 'String'>
    readonly outletId: FieldRef<"StockBalance", 'String'>
    readonly onHandQuantity: FieldRef<"StockBalance", 'Int'>
    readonly reservedQuantity: FieldRef<"StockBalance", 'Int'>
    readonly safetyStock: FieldRef<"StockBalance", 'Int'>
    readonly version: FieldRef<"StockBalance", 'Int'>
    readonly updatedAt: FieldRef<"StockBalance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockBalance findUnique
   */
  export type StockBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBalance
     */
    select?: StockBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBalanceInclude<ExtArgs> | null
    /**
     * Filter, which StockBalance to fetch.
     */
    where: StockBalanceWhereUniqueInput
  }

  /**
   * StockBalance findUniqueOrThrow
   */
  export type StockBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBalance
     */
    select?: StockBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBalanceInclude<ExtArgs> | null
    /**
     * Filter, which StockBalance to fetch.
     */
    where: StockBalanceWhereUniqueInput
  }

  /**
   * StockBalance findFirst
   */
  export type StockBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBalance
     */
    select?: StockBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBalanceInclude<ExtArgs> | null
    /**
     * Filter, which StockBalance to fetch.
     */
    where?: StockBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockBalances to fetch.
     */
    orderBy?: StockBalanceOrderByWithRelationInput | StockBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockBalances.
     */
    cursor?: StockBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockBalances.
     */
    distinct?: StockBalanceScalarFieldEnum | StockBalanceScalarFieldEnum[]
  }

  /**
   * StockBalance findFirstOrThrow
   */
  export type StockBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBalance
     */
    select?: StockBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBalanceInclude<ExtArgs> | null
    /**
     * Filter, which StockBalance to fetch.
     */
    where?: StockBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockBalances to fetch.
     */
    orderBy?: StockBalanceOrderByWithRelationInput | StockBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockBalances.
     */
    cursor?: StockBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockBalances.
     */
    distinct?: StockBalanceScalarFieldEnum | StockBalanceScalarFieldEnum[]
  }

  /**
   * StockBalance findMany
   */
  export type StockBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBalance
     */
    select?: StockBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBalanceInclude<ExtArgs> | null
    /**
     * Filter, which StockBalances to fetch.
     */
    where?: StockBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockBalances to fetch.
     */
    orderBy?: StockBalanceOrderByWithRelationInput | StockBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockBalances.
     */
    cursor?: StockBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockBalances.
     */
    skip?: number
    distinct?: StockBalanceScalarFieldEnum | StockBalanceScalarFieldEnum[]
  }

  /**
   * StockBalance create
   */
  export type StockBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBalance
     */
    select?: StockBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a StockBalance.
     */
    data: XOR<StockBalanceCreateInput, StockBalanceUncheckedCreateInput>
  }

  /**
   * StockBalance createMany
   */
  export type StockBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockBalances.
     */
    data: StockBalanceCreateManyInput | StockBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockBalance createManyAndReturn
   */
  export type StockBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBalance
     */
    select?: StockBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockBalances.
     */
    data: StockBalanceCreateManyInput | StockBalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockBalance update
   */
  export type StockBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBalance
     */
    select?: StockBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a StockBalance.
     */
    data: XOR<StockBalanceUpdateInput, StockBalanceUncheckedUpdateInput>
    /**
     * Choose, which StockBalance to update.
     */
    where: StockBalanceWhereUniqueInput
  }

  /**
   * StockBalance updateMany
   */
  export type StockBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockBalances.
     */
    data: XOR<StockBalanceUpdateManyMutationInput, StockBalanceUncheckedUpdateManyInput>
    /**
     * Filter which StockBalances to update
     */
    where?: StockBalanceWhereInput
  }

  /**
   * StockBalance upsert
   */
  export type StockBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBalance
     */
    select?: StockBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the StockBalance to update in case it exists.
     */
    where: StockBalanceWhereUniqueInput
    /**
     * In case the StockBalance found by the `where` argument doesn't exist, create a new StockBalance with this data.
     */
    create: XOR<StockBalanceCreateInput, StockBalanceUncheckedCreateInput>
    /**
     * In case the StockBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockBalanceUpdateInput, StockBalanceUncheckedUpdateInput>
  }

  /**
   * StockBalance delete
   */
  export type StockBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBalance
     */
    select?: StockBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBalanceInclude<ExtArgs> | null
    /**
     * Filter which StockBalance to delete.
     */
    where: StockBalanceWhereUniqueInput
  }

  /**
   * StockBalance deleteMany
   */
  export type StockBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockBalances to delete
     */
    where?: StockBalanceWhereInput
  }

  /**
   * StockBalance without action
   */
  export type StockBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBalance
     */
    select?: StockBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBalanceInclude<ExtArgs> | null
  }


  /**
   * Model StockMovement
   */

  export type AggregateStockMovement = {
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  export type StockMovementAvgAggregateOutputType = {
    quantityChange: number | null
    balanceAfter: number | null
  }

  export type StockMovementSumAggregateOutputType = {
    quantityChange: number | null
    balanceAfter: number | null
  }

  export type StockMovementMinAggregateOutputType = {
    id: string | null
    variantId: string | null
    tenantId: string | null
    outletId: string | null
    quantityChange: number | null
    balanceAfter: number | null
    reason: string | null
    actorId: string | null
    referenceId: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type StockMovementMaxAggregateOutputType = {
    id: string | null
    variantId: string | null
    tenantId: string | null
    outletId: string | null
    quantityChange: number | null
    balanceAfter: number | null
    reason: string | null
    actorId: string | null
    referenceId: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type StockMovementCountAggregateOutputType = {
    id: number
    variantId: number
    tenantId: number
    outletId: number
    quantityChange: number
    balanceAfter: number
    reason: number
    actorId: number
    referenceId: number
    notes: number
    createdAt: number
    _all: number
  }


  export type StockMovementAvgAggregateInputType = {
    quantityChange?: true
    balanceAfter?: true
  }

  export type StockMovementSumAggregateInputType = {
    quantityChange?: true
    balanceAfter?: true
  }

  export type StockMovementMinAggregateInputType = {
    id?: true
    variantId?: true
    tenantId?: true
    outletId?: true
    quantityChange?: true
    balanceAfter?: true
    reason?: true
    actorId?: true
    referenceId?: true
    notes?: true
    createdAt?: true
  }

  export type StockMovementMaxAggregateInputType = {
    id?: true
    variantId?: true
    tenantId?: true
    outletId?: true
    quantityChange?: true
    balanceAfter?: true
    reason?: true
    actorId?: true
    referenceId?: true
    notes?: true
    createdAt?: true
  }

  export type StockMovementCountAggregateInputType = {
    id?: true
    variantId?: true
    tenantId?: true
    outletId?: true
    quantityChange?: true
    balanceAfter?: true
    reason?: true
    actorId?: true
    referenceId?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type StockMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovement to aggregate.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockMovements
    **/
    _count?: true | StockMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMovementMaxAggregateInputType
  }

  export type GetStockMovementAggregateType<T extends StockMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateStockMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockMovement[P]>
      : GetScalarType<T[P], AggregateStockMovement[P]>
  }




  export type StockMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithAggregationInput | StockMovementOrderByWithAggregationInput[]
    by: StockMovementScalarFieldEnum[] | StockMovementScalarFieldEnum
    having?: StockMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockMovementCountAggregateInputType | true
    _avg?: StockMovementAvgAggregateInputType
    _sum?: StockMovementSumAggregateInputType
    _min?: StockMovementMinAggregateInputType
    _max?: StockMovementMaxAggregateInputType
  }

  export type StockMovementGroupByOutputType = {
    id: string
    variantId: string
    tenantId: string
    outletId: string
    quantityChange: number
    balanceAfter: number
    reason: string
    actorId: string
    referenceId: string | null
    notes: string | null
    createdAt: Date
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  type GetStockMovementGroupByPayload<T extends StockMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
            : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
        }
      >
    >


  export type StockMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    tenantId?: boolean
    outletId?: boolean
    quantityChange?: boolean
    balanceAfter?: boolean
    reason?: boolean
    actorId?: boolean
    referenceId?: boolean
    notes?: boolean
    createdAt?: boolean
    variant?: boolean | StockMovement$variantArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    tenantId?: boolean
    outletId?: boolean
    quantityChange?: boolean
    balanceAfter?: boolean
    reason?: boolean
    actorId?: boolean
    referenceId?: boolean
    notes?: boolean
    createdAt?: boolean
    variant?: boolean | StockMovement$variantArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectScalar = {
    id?: boolean
    variantId?: boolean
    tenantId?: boolean
    outletId?: boolean
    quantityChange?: boolean
    balanceAfter?: boolean
    reason?: boolean
    actorId?: boolean
    referenceId?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type StockMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | StockMovement$variantArgs<ExtArgs>
  }
  export type StockMovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | StockMovement$variantArgs<ExtArgs>
  }

  export type $StockMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockMovement"
    objects: {
      variant: Prisma.$ProductVariantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      variantId: string
      tenantId: string
      outletId: string
      quantityChange: number
      balanceAfter: number
      reason: string
      actorId: string
      referenceId: string | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["stockMovement"]>
    composites: {}
  }

  type StockMovementGetPayload<S extends boolean | null | undefined | StockMovementDefaultArgs> = $Result.GetResult<Prisma.$StockMovementPayload, S>

  type StockMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockMovementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockMovementCountAggregateInputType | true
    }

  export interface StockMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockMovement'], meta: { name: 'StockMovement' } }
    /**
     * Find zero or one StockMovement that matches the filter.
     * @param {StockMovementFindUniqueArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockMovementFindUniqueArgs>(args: SelectSubset<T, StockMovementFindUniqueArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockMovement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockMovementFindUniqueOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, StockMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockMovementFindFirstArgs>(args?: SelectSubset<T, StockMovementFindFirstArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, StockMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockMovements
     * const stockMovements = await prisma.stockMovement.findMany()
     * 
     * // Get first 10 StockMovements
     * const stockMovements = await prisma.stockMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockMovementFindManyArgs>(args?: SelectSubset<T, StockMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockMovement.
     * @param {StockMovementCreateArgs} args - Arguments to create a StockMovement.
     * @example
     * // Create one StockMovement
     * const StockMovement = await prisma.stockMovement.create({
     *   data: {
     *     // ... data to create a StockMovement
     *   }
     * })
     * 
     */
    create<T extends StockMovementCreateArgs>(args: SelectSubset<T, StockMovementCreateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockMovements.
     * @param {StockMovementCreateManyArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockMovementCreateManyArgs>(args?: SelectSubset<T, StockMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockMovements and returns the data saved in the database.
     * @param {StockMovementCreateManyAndReturnArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, StockMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockMovement.
     * @param {StockMovementDeleteArgs} args - Arguments to delete one StockMovement.
     * @example
     * // Delete one StockMovement
     * const StockMovement = await prisma.stockMovement.delete({
     *   where: {
     *     // ... filter to delete one StockMovement
     *   }
     * })
     * 
     */
    delete<T extends StockMovementDeleteArgs>(args: SelectSubset<T, StockMovementDeleteArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockMovement.
     * @param {StockMovementUpdateArgs} args - Arguments to update one StockMovement.
     * @example
     * // Update one StockMovement
     * const stockMovement = await prisma.stockMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockMovementUpdateArgs>(args: SelectSubset<T, StockMovementUpdateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockMovements.
     * @param {StockMovementDeleteManyArgs} args - Arguments to filter StockMovements to delete.
     * @example
     * // Delete a few StockMovements
     * const { count } = await prisma.stockMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockMovementDeleteManyArgs>(args?: SelectSubset<T, StockMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockMovementUpdateManyArgs>(args: SelectSubset<T, StockMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockMovement.
     * @param {StockMovementUpsertArgs} args - Arguments to update or create a StockMovement.
     * @example
     * // Update or create a StockMovement
     * const stockMovement = await prisma.stockMovement.upsert({
     *   create: {
     *     // ... data to create a StockMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockMovement we want to update
     *   }
     * })
     */
    upsert<T extends StockMovementUpsertArgs>(args: SelectSubset<T, StockMovementUpsertArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementCountArgs} args - Arguments to filter StockMovements to count.
     * @example
     * // Count the number of StockMovements
     * const count = await prisma.stockMovement.count({
     *   where: {
     *     // ... the filter for the StockMovements we want to count
     *   }
     * })
    **/
    count<T extends StockMovementCountArgs>(
      args?: Subset<T, StockMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockMovementAggregateArgs>(args: Subset<T, StockMovementAggregateArgs>): Prisma.PrismaPromise<GetStockMovementAggregateType<T>>

    /**
     * Group by StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementGroupByArgs} args - Group by arguments.
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
      T extends StockMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockMovementGroupByArgs['orderBy'] }
        : { orderBy?: StockMovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockMovement model
   */
  readonly fields: StockMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends StockMovement$variantArgs<ExtArgs> = {}>(args?: Subset<T, StockMovement$variantArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the StockMovement model
   */ 
  interface StockMovementFieldRefs {
    readonly id: FieldRef<"StockMovement", 'String'>
    readonly variantId: FieldRef<"StockMovement", 'String'>
    readonly tenantId: FieldRef<"StockMovement", 'String'>
    readonly outletId: FieldRef<"StockMovement", 'String'>
    readonly quantityChange: FieldRef<"StockMovement", 'Int'>
    readonly balanceAfter: FieldRef<"StockMovement", 'Int'>
    readonly reason: FieldRef<"StockMovement", 'String'>
    readonly actorId: FieldRef<"StockMovement", 'String'>
    readonly referenceId: FieldRef<"StockMovement", 'String'>
    readonly notes: FieldRef<"StockMovement", 'String'>
    readonly createdAt: FieldRef<"StockMovement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockMovement findUnique
   */
  export type StockMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findUniqueOrThrow
   */
  export type StockMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findFirst
   */
  export type StockMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findFirstOrThrow
   */
  export type StockMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findMany
   */
  export type StockMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovements to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement create
   */
  export type StockMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a StockMovement.
     */
    data: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
  }

  /**
   * StockMovement createMany
   */
  export type StockMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockMovement createManyAndReturn
   */
  export type StockMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockMovement update
   */
  export type StockMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a StockMovement.
     */
    data: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
    /**
     * Choose, which StockMovement to update.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement updateMany
   */
  export type StockMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
  }

  /**
   * StockMovement upsert
   */
  export type StockMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the StockMovement to update in case it exists.
     */
    where: StockMovementWhereUniqueInput
    /**
     * In case the StockMovement found by the `where` argument doesn't exist, create a new StockMovement with this data.
     */
    create: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
    /**
     * In case the StockMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
  }

  /**
   * StockMovement delete
   */
  export type StockMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter which StockMovement to delete.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement deleteMany
   */
  export type StockMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovements to delete
     */
    where?: StockMovementWhereInput
  }

  /**
   * StockMovement.variant
   */
  export type StockMovement$variantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
  }

  /**
   * StockMovement without action
   */
  export type StockMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
  }


  /**
   * Model StockReservation
   */

  export type AggregateStockReservation = {
    _count: StockReservationCountAggregateOutputType | null
    _avg: StockReservationAvgAggregateOutputType | null
    _sum: StockReservationSumAggregateOutputType | null
    _min: StockReservationMinAggregateOutputType | null
    _max: StockReservationMaxAggregateOutputType | null
  }

  export type StockReservationAvgAggregateOutputType = {
    quantity: number | null
  }

  export type StockReservationSumAggregateOutputType = {
    quantity: number | null
  }

  export type StockReservationMinAggregateOutputType = {
    id: string | null
    variantId: string | null
    tenantId: string | null
    outletId: string | null
    quantity: number | null
    orderId: string | null
    expiresAt: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type StockReservationMaxAggregateOutputType = {
    id: string | null
    variantId: string | null
    tenantId: string | null
    outletId: string | null
    quantity: number | null
    orderId: string | null
    expiresAt: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type StockReservationCountAggregateOutputType = {
    id: number
    variantId: number
    tenantId: number
    outletId: number
    quantity: number
    orderId: number
    expiresAt: number
    status: number
    createdAt: number
    _all: number
  }


  export type StockReservationAvgAggregateInputType = {
    quantity?: true
  }

  export type StockReservationSumAggregateInputType = {
    quantity?: true
  }

  export type StockReservationMinAggregateInputType = {
    id?: true
    variantId?: true
    tenantId?: true
    outletId?: true
    quantity?: true
    orderId?: true
    expiresAt?: true
    status?: true
    createdAt?: true
  }

  export type StockReservationMaxAggregateInputType = {
    id?: true
    variantId?: true
    tenantId?: true
    outletId?: true
    quantity?: true
    orderId?: true
    expiresAt?: true
    status?: true
    createdAt?: true
  }

  export type StockReservationCountAggregateInputType = {
    id?: true
    variantId?: true
    tenantId?: true
    outletId?: true
    quantity?: true
    orderId?: true
    expiresAt?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type StockReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockReservation to aggregate.
     */
    where?: StockReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockReservations to fetch.
     */
    orderBy?: StockReservationOrderByWithRelationInput | StockReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockReservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockReservations
    **/
    _count?: true | StockReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockReservationMaxAggregateInputType
  }

  export type GetStockReservationAggregateType<T extends StockReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateStockReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockReservation[P]>
      : GetScalarType<T[P], AggregateStockReservation[P]>
  }




  export type StockReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockReservationWhereInput
    orderBy?: StockReservationOrderByWithAggregationInput | StockReservationOrderByWithAggregationInput[]
    by: StockReservationScalarFieldEnum[] | StockReservationScalarFieldEnum
    having?: StockReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockReservationCountAggregateInputType | true
    _avg?: StockReservationAvgAggregateInputType
    _sum?: StockReservationSumAggregateInputType
    _min?: StockReservationMinAggregateInputType
    _max?: StockReservationMaxAggregateInputType
  }

  export type StockReservationGroupByOutputType = {
    id: string
    variantId: string
    tenantId: string
    outletId: string
    quantity: number
    orderId: string
    expiresAt: Date
    status: string
    createdAt: Date
    _count: StockReservationCountAggregateOutputType | null
    _avg: StockReservationAvgAggregateOutputType | null
    _sum: StockReservationSumAggregateOutputType | null
    _min: StockReservationMinAggregateOutputType | null
    _max: StockReservationMaxAggregateOutputType | null
  }

  type GetStockReservationGroupByPayload<T extends StockReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockReservationGroupByOutputType[P]>
            : GetScalarType<T[P], StockReservationGroupByOutputType[P]>
        }
      >
    >


  export type StockReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    tenantId?: boolean
    outletId?: boolean
    quantity?: boolean
    orderId?: boolean
    expiresAt?: boolean
    status?: boolean
    createdAt?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockReservation"]>

  export type StockReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    tenantId?: boolean
    outletId?: boolean
    quantity?: boolean
    orderId?: boolean
    expiresAt?: boolean
    status?: boolean
    createdAt?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockReservation"]>

  export type StockReservationSelectScalar = {
    id?: boolean
    variantId?: boolean
    tenantId?: boolean
    outletId?: boolean
    quantity?: boolean
    orderId?: boolean
    expiresAt?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type StockReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type StockReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }

  export type $StockReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockReservation"
    objects: {
      variant: Prisma.$ProductVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      variantId: string
      tenantId: string
      outletId: string
      quantity: number
      orderId: string
      expiresAt: Date
      status: string
      createdAt: Date
    }, ExtArgs["result"]["stockReservation"]>
    composites: {}
  }

  type StockReservationGetPayload<S extends boolean | null | undefined | StockReservationDefaultArgs> = $Result.GetResult<Prisma.$StockReservationPayload, S>

  type StockReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockReservationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockReservationCountAggregateInputType | true
    }

  export interface StockReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockReservation'], meta: { name: 'StockReservation' } }
    /**
     * Find zero or one StockReservation that matches the filter.
     * @param {StockReservationFindUniqueArgs} args - Arguments to find a StockReservation
     * @example
     * // Get one StockReservation
     * const stockReservation = await prisma.stockReservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockReservationFindUniqueArgs>(args: SelectSubset<T, StockReservationFindUniqueArgs<ExtArgs>>): Prisma__StockReservationClient<$Result.GetResult<Prisma.$StockReservationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockReservation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockReservationFindUniqueOrThrowArgs} args - Arguments to find a StockReservation
     * @example
     * // Get one StockReservation
     * const stockReservation = await prisma.stockReservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, StockReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockReservationClient<$Result.GetResult<Prisma.$StockReservationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockReservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockReservationFindFirstArgs} args - Arguments to find a StockReservation
     * @example
     * // Get one StockReservation
     * const stockReservation = await prisma.stockReservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockReservationFindFirstArgs>(args?: SelectSubset<T, StockReservationFindFirstArgs<ExtArgs>>): Prisma__StockReservationClient<$Result.GetResult<Prisma.$StockReservationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockReservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockReservationFindFirstOrThrowArgs} args - Arguments to find a StockReservation
     * @example
     * // Get one StockReservation
     * const stockReservation = await prisma.stockReservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, StockReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockReservationClient<$Result.GetResult<Prisma.$StockReservationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockReservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockReservations
     * const stockReservations = await prisma.stockReservation.findMany()
     * 
     * // Get first 10 StockReservations
     * const stockReservations = await prisma.stockReservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockReservationWithIdOnly = await prisma.stockReservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockReservationFindManyArgs>(args?: SelectSubset<T, StockReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockReservationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockReservation.
     * @param {StockReservationCreateArgs} args - Arguments to create a StockReservation.
     * @example
     * // Create one StockReservation
     * const StockReservation = await prisma.stockReservation.create({
     *   data: {
     *     // ... data to create a StockReservation
     *   }
     * })
     * 
     */
    create<T extends StockReservationCreateArgs>(args: SelectSubset<T, StockReservationCreateArgs<ExtArgs>>): Prisma__StockReservationClient<$Result.GetResult<Prisma.$StockReservationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockReservations.
     * @param {StockReservationCreateManyArgs} args - Arguments to create many StockReservations.
     * @example
     * // Create many StockReservations
     * const stockReservation = await prisma.stockReservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockReservationCreateManyArgs>(args?: SelectSubset<T, StockReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockReservations and returns the data saved in the database.
     * @param {StockReservationCreateManyAndReturnArgs} args - Arguments to create many StockReservations.
     * @example
     * // Create many StockReservations
     * const stockReservation = await prisma.stockReservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockReservations and only return the `id`
     * const stockReservationWithIdOnly = await prisma.stockReservation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, StockReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockReservationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockReservation.
     * @param {StockReservationDeleteArgs} args - Arguments to delete one StockReservation.
     * @example
     * // Delete one StockReservation
     * const StockReservation = await prisma.stockReservation.delete({
     *   where: {
     *     // ... filter to delete one StockReservation
     *   }
     * })
     * 
     */
    delete<T extends StockReservationDeleteArgs>(args: SelectSubset<T, StockReservationDeleteArgs<ExtArgs>>): Prisma__StockReservationClient<$Result.GetResult<Prisma.$StockReservationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockReservation.
     * @param {StockReservationUpdateArgs} args - Arguments to update one StockReservation.
     * @example
     * // Update one StockReservation
     * const stockReservation = await prisma.stockReservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockReservationUpdateArgs>(args: SelectSubset<T, StockReservationUpdateArgs<ExtArgs>>): Prisma__StockReservationClient<$Result.GetResult<Prisma.$StockReservationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockReservations.
     * @param {StockReservationDeleteManyArgs} args - Arguments to filter StockReservations to delete.
     * @example
     * // Delete a few StockReservations
     * const { count } = await prisma.stockReservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockReservationDeleteManyArgs>(args?: SelectSubset<T, StockReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockReservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockReservations
     * const stockReservation = await prisma.stockReservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockReservationUpdateManyArgs>(args: SelectSubset<T, StockReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockReservation.
     * @param {StockReservationUpsertArgs} args - Arguments to update or create a StockReservation.
     * @example
     * // Update or create a StockReservation
     * const stockReservation = await prisma.stockReservation.upsert({
     *   create: {
     *     // ... data to create a StockReservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockReservation we want to update
     *   }
     * })
     */
    upsert<T extends StockReservationUpsertArgs>(args: SelectSubset<T, StockReservationUpsertArgs<ExtArgs>>): Prisma__StockReservationClient<$Result.GetResult<Prisma.$StockReservationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockReservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockReservationCountArgs} args - Arguments to filter StockReservations to count.
     * @example
     * // Count the number of StockReservations
     * const count = await prisma.stockReservation.count({
     *   where: {
     *     // ... the filter for the StockReservations we want to count
     *   }
     * })
    **/
    count<T extends StockReservationCountArgs>(
      args?: Subset<T, StockReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockReservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockReservationAggregateArgs>(args: Subset<T, StockReservationAggregateArgs>): Prisma.PrismaPromise<GetStockReservationAggregateType<T>>

    /**
     * Group by StockReservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockReservationGroupByArgs} args - Group by arguments.
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
      T extends StockReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockReservationGroupByArgs['orderBy'] }
        : { orderBy?: StockReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockReservation model
   */
  readonly fields: StockReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockReservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the StockReservation model
   */ 
  interface StockReservationFieldRefs {
    readonly id: FieldRef<"StockReservation", 'String'>
    readonly variantId: FieldRef<"StockReservation", 'String'>
    readonly tenantId: FieldRef<"StockReservation", 'String'>
    readonly outletId: FieldRef<"StockReservation", 'String'>
    readonly quantity: FieldRef<"StockReservation", 'Int'>
    readonly orderId: FieldRef<"StockReservation", 'String'>
    readonly expiresAt: FieldRef<"StockReservation", 'DateTime'>
    readonly status: FieldRef<"StockReservation", 'String'>
    readonly createdAt: FieldRef<"StockReservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockReservation findUnique
   */
  export type StockReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockReservation
     */
    select?: StockReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockReservationInclude<ExtArgs> | null
    /**
     * Filter, which StockReservation to fetch.
     */
    where: StockReservationWhereUniqueInput
  }

  /**
   * StockReservation findUniqueOrThrow
   */
  export type StockReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockReservation
     */
    select?: StockReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockReservationInclude<ExtArgs> | null
    /**
     * Filter, which StockReservation to fetch.
     */
    where: StockReservationWhereUniqueInput
  }

  /**
   * StockReservation findFirst
   */
  export type StockReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockReservation
     */
    select?: StockReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockReservationInclude<ExtArgs> | null
    /**
     * Filter, which StockReservation to fetch.
     */
    where?: StockReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockReservations to fetch.
     */
    orderBy?: StockReservationOrderByWithRelationInput | StockReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockReservations.
     */
    cursor?: StockReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockReservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockReservations.
     */
    distinct?: StockReservationScalarFieldEnum | StockReservationScalarFieldEnum[]
  }

  /**
   * StockReservation findFirstOrThrow
   */
  export type StockReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockReservation
     */
    select?: StockReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockReservationInclude<ExtArgs> | null
    /**
     * Filter, which StockReservation to fetch.
     */
    where?: StockReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockReservations to fetch.
     */
    orderBy?: StockReservationOrderByWithRelationInput | StockReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockReservations.
     */
    cursor?: StockReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockReservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockReservations.
     */
    distinct?: StockReservationScalarFieldEnum | StockReservationScalarFieldEnum[]
  }

  /**
   * StockReservation findMany
   */
  export type StockReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockReservation
     */
    select?: StockReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockReservationInclude<ExtArgs> | null
    /**
     * Filter, which StockReservations to fetch.
     */
    where?: StockReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockReservations to fetch.
     */
    orderBy?: StockReservationOrderByWithRelationInput | StockReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockReservations.
     */
    cursor?: StockReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockReservations.
     */
    skip?: number
    distinct?: StockReservationScalarFieldEnum | StockReservationScalarFieldEnum[]
  }

  /**
   * StockReservation create
   */
  export type StockReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockReservation
     */
    select?: StockReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a StockReservation.
     */
    data: XOR<StockReservationCreateInput, StockReservationUncheckedCreateInput>
  }

  /**
   * StockReservation createMany
   */
  export type StockReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockReservations.
     */
    data: StockReservationCreateManyInput | StockReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockReservation createManyAndReturn
   */
  export type StockReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockReservation
     */
    select?: StockReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockReservations.
     */
    data: StockReservationCreateManyInput | StockReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockReservation update
   */
  export type StockReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockReservation
     */
    select?: StockReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a StockReservation.
     */
    data: XOR<StockReservationUpdateInput, StockReservationUncheckedUpdateInput>
    /**
     * Choose, which StockReservation to update.
     */
    where: StockReservationWhereUniqueInput
  }

  /**
   * StockReservation updateMany
   */
  export type StockReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockReservations.
     */
    data: XOR<StockReservationUpdateManyMutationInput, StockReservationUncheckedUpdateManyInput>
    /**
     * Filter which StockReservations to update
     */
    where?: StockReservationWhereInput
  }

  /**
   * StockReservation upsert
   */
  export type StockReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockReservation
     */
    select?: StockReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the StockReservation to update in case it exists.
     */
    where: StockReservationWhereUniqueInput
    /**
     * In case the StockReservation found by the `where` argument doesn't exist, create a new StockReservation with this data.
     */
    create: XOR<StockReservationCreateInput, StockReservationUncheckedCreateInput>
    /**
     * In case the StockReservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockReservationUpdateInput, StockReservationUncheckedUpdateInput>
  }

  /**
   * StockReservation delete
   */
  export type StockReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockReservation
     */
    select?: StockReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockReservationInclude<ExtArgs> | null
    /**
     * Filter which StockReservation to delete.
     */
    where: StockReservationWhereUniqueInput
  }

  /**
   * StockReservation deleteMany
   */
  export type StockReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockReservations to delete
     */
    where?: StockReservationWhereInput
  }

  /**
   * StockReservation without action
   */
  export type StockReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockReservation
     */
    select?: StockReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockReservationInclude<ExtArgs> | null
  }


  /**
   * Model AdminPriceCapRule
   */

  export type AggregateAdminPriceCapRule = {
    _count: AdminPriceCapRuleCountAggregateOutputType | null
    _avg: AdminPriceCapRuleAvgAggregateOutputType | null
    _sum: AdminPriceCapRuleSumAggregateOutputType | null
    _min: AdminPriceCapRuleMinAggregateOutputType | null
    _max: AdminPriceCapRuleMaxAggregateOutputType | null
  }

  export type AdminPriceCapRuleAvgAggregateOutputType = {
    maxPricePaise: number | null
  }

  export type AdminPriceCapRuleSumAggregateOutputType = {
    maxPricePaise: number | null
  }

  export type AdminPriceCapRuleMinAggregateOutputType = {
    id: string | null
    scope: string | null
    targetKey: string | null
    maxPricePaise: number | null
    enforceMrpCap: boolean | null
    reason: string | null
    isActive: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminPriceCapRuleMaxAggregateOutputType = {
    id: string | null
    scope: string | null
    targetKey: string | null
    maxPricePaise: number | null
    enforceMrpCap: boolean | null
    reason: string | null
    isActive: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminPriceCapRuleCountAggregateOutputType = {
    id: number
    scope: number
    targetKey: number
    maxPricePaise: number
    enforceMrpCap: number
    reason: number
    isActive: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminPriceCapRuleAvgAggregateInputType = {
    maxPricePaise?: true
  }

  export type AdminPriceCapRuleSumAggregateInputType = {
    maxPricePaise?: true
  }

  export type AdminPriceCapRuleMinAggregateInputType = {
    id?: true
    scope?: true
    targetKey?: true
    maxPricePaise?: true
    enforceMrpCap?: true
    reason?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminPriceCapRuleMaxAggregateInputType = {
    id?: true
    scope?: true
    targetKey?: true
    maxPricePaise?: true
    enforceMrpCap?: true
    reason?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminPriceCapRuleCountAggregateInputType = {
    id?: true
    scope?: true
    targetKey?: true
    maxPricePaise?: true
    enforceMrpCap?: true
    reason?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminPriceCapRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminPriceCapRule to aggregate.
     */
    where?: AdminPriceCapRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminPriceCapRules to fetch.
     */
    orderBy?: AdminPriceCapRuleOrderByWithRelationInput | AdminPriceCapRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminPriceCapRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminPriceCapRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminPriceCapRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminPriceCapRules
    **/
    _count?: true | AdminPriceCapRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminPriceCapRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminPriceCapRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminPriceCapRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminPriceCapRuleMaxAggregateInputType
  }

  export type GetAdminPriceCapRuleAggregateType<T extends AdminPriceCapRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminPriceCapRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminPriceCapRule[P]>
      : GetScalarType<T[P], AggregateAdminPriceCapRule[P]>
  }




  export type AdminPriceCapRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminPriceCapRuleWhereInput
    orderBy?: AdminPriceCapRuleOrderByWithAggregationInput | AdminPriceCapRuleOrderByWithAggregationInput[]
    by: AdminPriceCapRuleScalarFieldEnum[] | AdminPriceCapRuleScalarFieldEnum
    having?: AdminPriceCapRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminPriceCapRuleCountAggregateInputType | true
    _avg?: AdminPriceCapRuleAvgAggregateInputType
    _sum?: AdminPriceCapRuleSumAggregateInputType
    _min?: AdminPriceCapRuleMinAggregateInputType
    _max?: AdminPriceCapRuleMaxAggregateInputType
  }

  export type AdminPriceCapRuleGroupByOutputType = {
    id: string
    scope: string
    targetKey: string
    maxPricePaise: number
    enforceMrpCap: boolean
    reason: string
    isActive: boolean
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: AdminPriceCapRuleCountAggregateOutputType | null
    _avg: AdminPriceCapRuleAvgAggregateOutputType | null
    _sum: AdminPriceCapRuleSumAggregateOutputType | null
    _min: AdminPriceCapRuleMinAggregateOutputType | null
    _max: AdminPriceCapRuleMaxAggregateOutputType | null
  }

  type GetAdminPriceCapRuleGroupByPayload<T extends AdminPriceCapRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminPriceCapRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminPriceCapRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminPriceCapRuleGroupByOutputType[P]>
            : GetScalarType<T[P], AdminPriceCapRuleGroupByOutputType[P]>
        }
      >
    >


  export type AdminPriceCapRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    targetKey?: boolean
    maxPricePaise?: boolean
    enforceMrpCap?: boolean
    reason?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminPriceCapRule"]>

  export type AdminPriceCapRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    targetKey?: boolean
    maxPricePaise?: boolean
    enforceMrpCap?: boolean
    reason?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminPriceCapRule"]>

  export type AdminPriceCapRuleSelectScalar = {
    id?: boolean
    scope?: boolean
    targetKey?: boolean
    maxPricePaise?: boolean
    enforceMrpCap?: boolean
    reason?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdminPriceCapRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminPriceCapRule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scope: string
      targetKey: string
      maxPricePaise: number
      enforceMrpCap: boolean
      reason: string
      isActive: boolean
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminPriceCapRule"]>
    composites: {}
  }

  type AdminPriceCapRuleGetPayload<S extends boolean | null | undefined | AdminPriceCapRuleDefaultArgs> = $Result.GetResult<Prisma.$AdminPriceCapRulePayload, S>

  type AdminPriceCapRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminPriceCapRuleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminPriceCapRuleCountAggregateInputType | true
    }

  export interface AdminPriceCapRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminPriceCapRule'], meta: { name: 'AdminPriceCapRule' } }
    /**
     * Find zero or one AdminPriceCapRule that matches the filter.
     * @param {AdminPriceCapRuleFindUniqueArgs} args - Arguments to find a AdminPriceCapRule
     * @example
     * // Get one AdminPriceCapRule
     * const adminPriceCapRule = await prisma.adminPriceCapRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminPriceCapRuleFindUniqueArgs>(args: SelectSubset<T, AdminPriceCapRuleFindUniqueArgs<ExtArgs>>): Prisma__AdminPriceCapRuleClient<$Result.GetResult<Prisma.$AdminPriceCapRulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminPriceCapRule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminPriceCapRuleFindUniqueOrThrowArgs} args - Arguments to find a AdminPriceCapRule
     * @example
     * // Get one AdminPriceCapRule
     * const adminPriceCapRule = await prisma.adminPriceCapRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminPriceCapRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminPriceCapRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminPriceCapRuleClient<$Result.GetResult<Prisma.$AdminPriceCapRulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminPriceCapRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPriceCapRuleFindFirstArgs} args - Arguments to find a AdminPriceCapRule
     * @example
     * // Get one AdminPriceCapRule
     * const adminPriceCapRule = await prisma.adminPriceCapRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminPriceCapRuleFindFirstArgs>(args?: SelectSubset<T, AdminPriceCapRuleFindFirstArgs<ExtArgs>>): Prisma__AdminPriceCapRuleClient<$Result.GetResult<Prisma.$AdminPriceCapRulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminPriceCapRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPriceCapRuleFindFirstOrThrowArgs} args - Arguments to find a AdminPriceCapRule
     * @example
     * // Get one AdminPriceCapRule
     * const adminPriceCapRule = await prisma.adminPriceCapRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminPriceCapRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminPriceCapRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminPriceCapRuleClient<$Result.GetResult<Prisma.$AdminPriceCapRulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminPriceCapRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPriceCapRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminPriceCapRules
     * const adminPriceCapRules = await prisma.adminPriceCapRule.findMany()
     * 
     * // Get first 10 AdminPriceCapRules
     * const adminPriceCapRules = await prisma.adminPriceCapRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminPriceCapRuleWithIdOnly = await prisma.adminPriceCapRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminPriceCapRuleFindManyArgs>(args?: SelectSubset<T, AdminPriceCapRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPriceCapRulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminPriceCapRule.
     * @param {AdminPriceCapRuleCreateArgs} args - Arguments to create a AdminPriceCapRule.
     * @example
     * // Create one AdminPriceCapRule
     * const AdminPriceCapRule = await prisma.adminPriceCapRule.create({
     *   data: {
     *     // ... data to create a AdminPriceCapRule
     *   }
     * })
     * 
     */
    create<T extends AdminPriceCapRuleCreateArgs>(args: SelectSubset<T, AdminPriceCapRuleCreateArgs<ExtArgs>>): Prisma__AdminPriceCapRuleClient<$Result.GetResult<Prisma.$AdminPriceCapRulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminPriceCapRules.
     * @param {AdminPriceCapRuleCreateManyArgs} args - Arguments to create many AdminPriceCapRules.
     * @example
     * // Create many AdminPriceCapRules
     * const adminPriceCapRule = await prisma.adminPriceCapRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminPriceCapRuleCreateManyArgs>(args?: SelectSubset<T, AdminPriceCapRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminPriceCapRules and returns the data saved in the database.
     * @param {AdminPriceCapRuleCreateManyAndReturnArgs} args - Arguments to create many AdminPriceCapRules.
     * @example
     * // Create many AdminPriceCapRules
     * const adminPriceCapRule = await prisma.adminPriceCapRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminPriceCapRules and only return the `id`
     * const adminPriceCapRuleWithIdOnly = await prisma.adminPriceCapRule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminPriceCapRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminPriceCapRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPriceCapRulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminPriceCapRule.
     * @param {AdminPriceCapRuleDeleteArgs} args - Arguments to delete one AdminPriceCapRule.
     * @example
     * // Delete one AdminPriceCapRule
     * const AdminPriceCapRule = await prisma.adminPriceCapRule.delete({
     *   where: {
     *     // ... filter to delete one AdminPriceCapRule
     *   }
     * })
     * 
     */
    delete<T extends AdminPriceCapRuleDeleteArgs>(args: SelectSubset<T, AdminPriceCapRuleDeleteArgs<ExtArgs>>): Prisma__AdminPriceCapRuleClient<$Result.GetResult<Prisma.$AdminPriceCapRulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminPriceCapRule.
     * @param {AdminPriceCapRuleUpdateArgs} args - Arguments to update one AdminPriceCapRule.
     * @example
     * // Update one AdminPriceCapRule
     * const adminPriceCapRule = await prisma.adminPriceCapRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminPriceCapRuleUpdateArgs>(args: SelectSubset<T, AdminPriceCapRuleUpdateArgs<ExtArgs>>): Prisma__AdminPriceCapRuleClient<$Result.GetResult<Prisma.$AdminPriceCapRulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminPriceCapRules.
     * @param {AdminPriceCapRuleDeleteManyArgs} args - Arguments to filter AdminPriceCapRules to delete.
     * @example
     * // Delete a few AdminPriceCapRules
     * const { count } = await prisma.adminPriceCapRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminPriceCapRuleDeleteManyArgs>(args?: SelectSubset<T, AdminPriceCapRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminPriceCapRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPriceCapRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminPriceCapRules
     * const adminPriceCapRule = await prisma.adminPriceCapRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminPriceCapRuleUpdateManyArgs>(args: SelectSubset<T, AdminPriceCapRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminPriceCapRule.
     * @param {AdminPriceCapRuleUpsertArgs} args - Arguments to update or create a AdminPriceCapRule.
     * @example
     * // Update or create a AdminPriceCapRule
     * const adminPriceCapRule = await prisma.adminPriceCapRule.upsert({
     *   create: {
     *     // ... data to create a AdminPriceCapRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminPriceCapRule we want to update
     *   }
     * })
     */
    upsert<T extends AdminPriceCapRuleUpsertArgs>(args: SelectSubset<T, AdminPriceCapRuleUpsertArgs<ExtArgs>>): Prisma__AdminPriceCapRuleClient<$Result.GetResult<Prisma.$AdminPriceCapRulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminPriceCapRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPriceCapRuleCountArgs} args - Arguments to filter AdminPriceCapRules to count.
     * @example
     * // Count the number of AdminPriceCapRules
     * const count = await prisma.adminPriceCapRule.count({
     *   where: {
     *     // ... the filter for the AdminPriceCapRules we want to count
     *   }
     * })
    **/
    count<T extends AdminPriceCapRuleCountArgs>(
      args?: Subset<T, AdminPriceCapRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminPriceCapRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminPriceCapRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPriceCapRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminPriceCapRuleAggregateArgs>(args: Subset<T, AdminPriceCapRuleAggregateArgs>): Prisma.PrismaPromise<GetAdminPriceCapRuleAggregateType<T>>

    /**
     * Group by AdminPriceCapRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPriceCapRuleGroupByArgs} args - Group by arguments.
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
      T extends AdminPriceCapRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminPriceCapRuleGroupByArgs['orderBy'] }
        : { orderBy?: AdminPriceCapRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminPriceCapRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminPriceCapRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminPriceCapRule model
   */
  readonly fields: AdminPriceCapRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminPriceCapRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminPriceCapRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AdminPriceCapRule model
   */ 
  interface AdminPriceCapRuleFieldRefs {
    readonly id: FieldRef<"AdminPriceCapRule", 'String'>
    readonly scope: FieldRef<"AdminPriceCapRule", 'String'>
    readonly targetKey: FieldRef<"AdminPriceCapRule", 'String'>
    readonly maxPricePaise: FieldRef<"AdminPriceCapRule", 'Int'>
    readonly enforceMrpCap: FieldRef<"AdminPriceCapRule", 'Boolean'>
    readonly reason: FieldRef<"AdminPriceCapRule", 'String'>
    readonly isActive: FieldRef<"AdminPriceCapRule", 'Boolean'>
    readonly createdBy: FieldRef<"AdminPriceCapRule", 'String'>
    readonly createdAt: FieldRef<"AdminPriceCapRule", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminPriceCapRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminPriceCapRule findUnique
   */
  export type AdminPriceCapRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPriceCapRule
     */
    select?: AdminPriceCapRuleSelect<ExtArgs> | null
    /**
     * Filter, which AdminPriceCapRule to fetch.
     */
    where: AdminPriceCapRuleWhereUniqueInput
  }

  /**
   * AdminPriceCapRule findUniqueOrThrow
   */
  export type AdminPriceCapRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPriceCapRule
     */
    select?: AdminPriceCapRuleSelect<ExtArgs> | null
    /**
     * Filter, which AdminPriceCapRule to fetch.
     */
    where: AdminPriceCapRuleWhereUniqueInput
  }

  /**
   * AdminPriceCapRule findFirst
   */
  export type AdminPriceCapRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPriceCapRule
     */
    select?: AdminPriceCapRuleSelect<ExtArgs> | null
    /**
     * Filter, which AdminPriceCapRule to fetch.
     */
    where?: AdminPriceCapRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminPriceCapRules to fetch.
     */
    orderBy?: AdminPriceCapRuleOrderByWithRelationInput | AdminPriceCapRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminPriceCapRules.
     */
    cursor?: AdminPriceCapRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminPriceCapRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminPriceCapRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminPriceCapRules.
     */
    distinct?: AdminPriceCapRuleScalarFieldEnum | AdminPriceCapRuleScalarFieldEnum[]
  }

  /**
   * AdminPriceCapRule findFirstOrThrow
   */
  export type AdminPriceCapRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPriceCapRule
     */
    select?: AdminPriceCapRuleSelect<ExtArgs> | null
    /**
     * Filter, which AdminPriceCapRule to fetch.
     */
    where?: AdminPriceCapRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminPriceCapRules to fetch.
     */
    orderBy?: AdminPriceCapRuleOrderByWithRelationInput | AdminPriceCapRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminPriceCapRules.
     */
    cursor?: AdminPriceCapRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminPriceCapRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminPriceCapRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminPriceCapRules.
     */
    distinct?: AdminPriceCapRuleScalarFieldEnum | AdminPriceCapRuleScalarFieldEnum[]
  }

  /**
   * AdminPriceCapRule findMany
   */
  export type AdminPriceCapRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPriceCapRule
     */
    select?: AdminPriceCapRuleSelect<ExtArgs> | null
    /**
     * Filter, which AdminPriceCapRules to fetch.
     */
    where?: AdminPriceCapRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminPriceCapRules to fetch.
     */
    orderBy?: AdminPriceCapRuleOrderByWithRelationInput | AdminPriceCapRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminPriceCapRules.
     */
    cursor?: AdminPriceCapRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminPriceCapRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminPriceCapRules.
     */
    skip?: number
    distinct?: AdminPriceCapRuleScalarFieldEnum | AdminPriceCapRuleScalarFieldEnum[]
  }

  /**
   * AdminPriceCapRule create
   */
  export type AdminPriceCapRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPriceCapRule
     */
    select?: AdminPriceCapRuleSelect<ExtArgs> | null
    /**
     * The data needed to create a AdminPriceCapRule.
     */
    data: XOR<AdminPriceCapRuleCreateInput, AdminPriceCapRuleUncheckedCreateInput>
  }

  /**
   * AdminPriceCapRule createMany
   */
  export type AdminPriceCapRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminPriceCapRules.
     */
    data: AdminPriceCapRuleCreateManyInput | AdminPriceCapRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminPriceCapRule createManyAndReturn
   */
  export type AdminPriceCapRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPriceCapRule
     */
    select?: AdminPriceCapRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminPriceCapRules.
     */
    data: AdminPriceCapRuleCreateManyInput | AdminPriceCapRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminPriceCapRule update
   */
  export type AdminPriceCapRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPriceCapRule
     */
    select?: AdminPriceCapRuleSelect<ExtArgs> | null
    /**
     * The data needed to update a AdminPriceCapRule.
     */
    data: XOR<AdminPriceCapRuleUpdateInput, AdminPriceCapRuleUncheckedUpdateInput>
    /**
     * Choose, which AdminPriceCapRule to update.
     */
    where: AdminPriceCapRuleWhereUniqueInput
  }

  /**
   * AdminPriceCapRule updateMany
   */
  export type AdminPriceCapRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminPriceCapRules.
     */
    data: XOR<AdminPriceCapRuleUpdateManyMutationInput, AdminPriceCapRuleUncheckedUpdateManyInput>
    /**
     * Filter which AdminPriceCapRules to update
     */
    where?: AdminPriceCapRuleWhereInput
  }

  /**
   * AdminPriceCapRule upsert
   */
  export type AdminPriceCapRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPriceCapRule
     */
    select?: AdminPriceCapRuleSelect<ExtArgs> | null
    /**
     * The filter to search for the AdminPriceCapRule to update in case it exists.
     */
    where: AdminPriceCapRuleWhereUniqueInput
    /**
     * In case the AdminPriceCapRule found by the `where` argument doesn't exist, create a new AdminPriceCapRule with this data.
     */
    create: XOR<AdminPriceCapRuleCreateInput, AdminPriceCapRuleUncheckedCreateInput>
    /**
     * In case the AdminPriceCapRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminPriceCapRuleUpdateInput, AdminPriceCapRuleUncheckedUpdateInput>
  }

  /**
   * AdminPriceCapRule delete
   */
  export type AdminPriceCapRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPriceCapRule
     */
    select?: AdminPriceCapRuleSelect<ExtArgs> | null
    /**
     * Filter which AdminPriceCapRule to delete.
     */
    where: AdminPriceCapRuleWhereUniqueInput
  }

  /**
   * AdminPriceCapRule deleteMany
   */
  export type AdminPriceCapRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminPriceCapRules to delete
     */
    where?: AdminPriceCapRuleWhereInput
  }

  /**
   * AdminPriceCapRule without action
   */
  export type AdminPriceCapRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPriceCapRule
     */
    select?: AdminPriceCapRuleSelect<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    outletId: 'outletId',
    name: 'name',
    description: 'description',
    category: 'category',
    subCategory: 'subCategory',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    tenantId: 'tenantId',
    outletId: 'outletId',
    name: 'name',
    sku: 'sku',
    barcode: 'barcode',
    pricePaise: 'pricePaise',
    compareAtPricePaise: 'compareAtPricePaise',
    isPreorder: 'isPreorder',
    leadTimeMinutes: 'leadTimeMinutes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const StockBalanceScalarFieldEnum: {
    id: 'id',
    variantId: 'variantId',
    tenantId: 'tenantId',
    outletId: 'outletId',
    onHandQuantity: 'onHandQuantity',
    reservedQuantity: 'reservedQuantity',
    safetyStock: 'safetyStock',
    version: 'version',
    updatedAt: 'updatedAt'
  };

  export type StockBalanceScalarFieldEnum = (typeof StockBalanceScalarFieldEnum)[keyof typeof StockBalanceScalarFieldEnum]


  export const StockMovementScalarFieldEnum: {
    id: 'id',
    variantId: 'variantId',
    tenantId: 'tenantId',
    outletId: 'outletId',
    quantityChange: 'quantityChange',
    balanceAfter: 'balanceAfter',
    reason: 'reason',
    actorId: 'actorId',
    referenceId: 'referenceId',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type StockMovementScalarFieldEnum = (typeof StockMovementScalarFieldEnum)[keyof typeof StockMovementScalarFieldEnum]


  export const StockReservationScalarFieldEnum: {
    id: 'id',
    variantId: 'variantId',
    tenantId: 'tenantId',
    outletId: 'outletId',
    quantity: 'quantity',
    orderId: 'orderId',
    expiresAt: 'expiresAt',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type StockReservationScalarFieldEnum = (typeof StockReservationScalarFieldEnum)[keyof typeof StockReservationScalarFieldEnum]


  export const AdminPriceCapRuleScalarFieldEnum: {
    id: 'id',
    scope: 'scope',
    targetKey: 'targetKey',
    maxPricePaise: 'maxPricePaise',
    enforceMrpCap: 'enforceMrpCap',
    reason: 'reason',
    isActive: 'isActive',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminPriceCapRuleScalarFieldEnum = (typeof AdminPriceCapRuleScalarFieldEnum)[keyof typeof AdminPriceCapRuleScalarFieldEnum]


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


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    tenantId?: StringFilter<"Product"> | string
    outletId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    subCategory?: StringNullableFilter<"Product"> | string | null
    isAvailable?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    variants?: ProductVariantListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    subCategory?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    variants?: ProductVariantOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    tenantId?: StringFilter<"Product"> | string
    outletId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    subCategory?: StringNullableFilter<"Product"> | string | null
    isAvailable?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    variants?: ProductVariantListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    subCategory?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    tenantId?: StringWithAggregatesFilter<"Product"> | string
    outletId?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    category?: StringWithAggregatesFilter<"Product"> | string
    subCategory?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isAvailable?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    id?: StringFilter<"ProductVariant"> | string
    productId?: StringFilter<"ProductVariant"> | string
    tenantId?: StringNullableFilter<"ProductVariant"> | string | null
    outletId?: StringNullableFilter<"ProductVariant"> | string | null
    name?: StringFilter<"ProductVariant"> | string
    sku?: StringNullableFilter<"ProductVariant"> | string | null
    barcode?: StringNullableFilter<"ProductVariant"> | string | null
    pricePaise?: IntFilter<"ProductVariant"> | number
    compareAtPricePaise?: IntNullableFilter<"ProductVariant"> | number | null
    isPreorder?: BoolFilter<"ProductVariant"> | boolean
    leadTimeMinutes?: IntFilter<"ProductVariant"> | number
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    stockBalance?: XOR<StockBalanceNullableRelationFilter, StockBalanceWhereInput> | null
    stockReservations?: StockReservationListRelationFilter
    stockMovements?: StockMovementListRelationFilter
  }

  export type ProductVariantOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    outletId?: SortOrderInput | SortOrder
    name?: SortOrder
    sku?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    pricePaise?: SortOrder
    compareAtPricePaise?: SortOrderInput | SortOrder
    isPreorder?: SortOrder
    leadTimeMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    stockBalance?: StockBalanceOrderByWithRelationInput
    stockReservations?: StockReservationOrderByRelationAggregateInput
    stockMovements?: StockMovementOrderByRelationAggregateInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    productId?: StringFilter<"ProductVariant"> | string
    tenantId?: StringNullableFilter<"ProductVariant"> | string | null
    outletId?: StringNullableFilter<"ProductVariant"> | string | null
    name?: StringFilter<"ProductVariant"> | string
    sku?: StringNullableFilter<"ProductVariant"> | string | null
    barcode?: StringNullableFilter<"ProductVariant"> | string | null
    pricePaise?: IntFilter<"ProductVariant"> | number
    compareAtPricePaise?: IntNullableFilter<"ProductVariant"> | number | null
    isPreorder?: BoolFilter<"ProductVariant"> | boolean
    leadTimeMinutes?: IntFilter<"ProductVariant"> | number
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    stockBalance?: XOR<StockBalanceNullableRelationFilter, StockBalanceWhereInput> | null
    stockReservations?: StockReservationListRelationFilter
    stockMovements?: StockMovementListRelationFilter
  }, "id">

  export type ProductVariantOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    outletId?: SortOrderInput | SortOrder
    name?: SortOrder
    sku?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    pricePaise?: SortOrder
    compareAtPricePaise?: SortOrderInput | SortOrder
    isPreorder?: SortOrder
    leadTimeMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _avg?: ProductVariantAvgOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
    _sum?: ProductVariantSumOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductVariant"> | string
    productId?: StringWithAggregatesFilter<"ProductVariant"> | string
    tenantId?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    outletId?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    name?: StringWithAggregatesFilter<"ProductVariant"> | string
    sku?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    barcode?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    pricePaise?: IntWithAggregatesFilter<"ProductVariant"> | number
    compareAtPricePaise?: IntNullableWithAggregatesFilter<"ProductVariant"> | number | null
    isPreorder?: BoolWithAggregatesFilter<"ProductVariant"> | boolean
    leadTimeMinutes?: IntWithAggregatesFilter<"ProductVariant"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
  }

  export type StockBalanceWhereInput = {
    AND?: StockBalanceWhereInput | StockBalanceWhereInput[]
    OR?: StockBalanceWhereInput[]
    NOT?: StockBalanceWhereInput | StockBalanceWhereInput[]
    id?: StringFilter<"StockBalance"> | string
    variantId?: StringFilter<"StockBalance"> | string
    tenantId?: StringFilter<"StockBalance"> | string
    outletId?: StringFilter<"StockBalance"> | string
    onHandQuantity?: IntFilter<"StockBalance"> | number
    reservedQuantity?: IntFilter<"StockBalance"> | number
    safetyStock?: IntFilter<"StockBalance"> | number
    version?: IntFilter<"StockBalance"> | number
    updatedAt?: DateTimeFilter<"StockBalance"> | Date | string
    variant?: XOR<ProductVariantRelationFilter, ProductVariantWhereInput>
  }

  export type StockBalanceOrderByWithRelationInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    onHandQuantity?: SortOrder
    reservedQuantity?: SortOrder
    safetyStock?: SortOrder
    version?: SortOrder
    updatedAt?: SortOrder
    variant?: ProductVariantOrderByWithRelationInput
  }

  export type StockBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    variantId?: string
    AND?: StockBalanceWhereInput | StockBalanceWhereInput[]
    OR?: StockBalanceWhereInput[]
    NOT?: StockBalanceWhereInput | StockBalanceWhereInput[]
    tenantId?: StringFilter<"StockBalance"> | string
    outletId?: StringFilter<"StockBalance"> | string
    onHandQuantity?: IntFilter<"StockBalance"> | number
    reservedQuantity?: IntFilter<"StockBalance"> | number
    safetyStock?: IntFilter<"StockBalance"> | number
    version?: IntFilter<"StockBalance"> | number
    updatedAt?: DateTimeFilter<"StockBalance"> | Date | string
    variant?: XOR<ProductVariantRelationFilter, ProductVariantWhereInput>
  }, "id" | "variantId">

  export type StockBalanceOrderByWithAggregationInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    onHandQuantity?: SortOrder
    reservedQuantity?: SortOrder
    safetyStock?: SortOrder
    version?: SortOrder
    updatedAt?: SortOrder
    _count?: StockBalanceCountOrderByAggregateInput
    _avg?: StockBalanceAvgOrderByAggregateInput
    _max?: StockBalanceMaxOrderByAggregateInput
    _min?: StockBalanceMinOrderByAggregateInput
    _sum?: StockBalanceSumOrderByAggregateInput
  }

  export type StockBalanceScalarWhereWithAggregatesInput = {
    AND?: StockBalanceScalarWhereWithAggregatesInput | StockBalanceScalarWhereWithAggregatesInput[]
    OR?: StockBalanceScalarWhereWithAggregatesInput[]
    NOT?: StockBalanceScalarWhereWithAggregatesInput | StockBalanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockBalance"> | string
    variantId?: StringWithAggregatesFilter<"StockBalance"> | string
    tenantId?: StringWithAggregatesFilter<"StockBalance"> | string
    outletId?: StringWithAggregatesFilter<"StockBalance"> | string
    onHandQuantity?: IntWithAggregatesFilter<"StockBalance"> | number
    reservedQuantity?: IntWithAggregatesFilter<"StockBalance"> | number
    safetyStock?: IntWithAggregatesFilter<"StockBalance"> | number
    version?: IntWithAggregatesFilter<"StockBalance"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"StockBalance"> | Date | string
  }

  export type StockMovementWhereInput = {
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    variantId?: StringFilter<"StockMovement"> | string
    tenantId?: StringFilter<"StockMovement"> | string
    outletId?: StringFilter<"StockMovement"> | string
    quantityChange?: IntFilter<"StockMovement"> | number
    balanceAfter?: IntFilter<"StockMovement"> | number
    reason?: StringFilter<"StockMovement"> | string
    actorId?: StringFilter<"StockMovement"> | string
    referenceId?: StringNullableFilter<"StockMovement"> | string | null
    notes?: StringNullableFilter<"StockMovement"> | string | null
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    variant?: XOR<ProductVariantNullableRelationFilter, ProductVariantWhereInput> | null
  }

  export type StockMovementOrderByWithRelationInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    quantityChange?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrder
    actorId?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    variant?: ProductVariantOrderByWithRelationInput
  }

  export type StockMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    variantId?: StringFilter<"StockMovement"> | string
    tenantId?: StringFilter<"StockMovement"> | string
    outletId?: StringFilter<"StockMovement"> | string
    quantityChange?: IntFilter<"StockMovement"> | number
    balanceAfter?: IntFilter<"StockMovement"> | number
    reason?: StringFilter<"StockMovement"> | string
    actorId?: StringFilter<"StockMovement"> | string
    referenceId?: StringNullableFilter<"StockMovement"> | string | null
    notes?: StringNullableFilter<"StockMovement"> | string | null
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    variant?: XOR<ProductVariantNullableRelationFilter, ProductVariantWhereInput> | null
  }, "id">

  export type StockMovementOrderByWithAggregationInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    quantityChange?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrder
    actorId?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StockMovementCountOrderByAggregateInput
    _avg?: StockMovementAvgOrderByAggregateInput
    _max?: StockMovementMaxOrderByAggregateInput
    _min?: StockMovementMinOrderByAggregateInput
    _sum?: StockMovementSumOrderByAggregateInput
  }

  export type StockMovementScalarWhereWithAggregatesInput = {
    AND?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    OR?: StockMovementScalarWhereWithAggregatesInput[]
    NOT?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockMovement"> | string
    variantId?: StringWithAggregatesFilter<"StockMovement"> | string
    tenantId?: StringWithAggregatesFilter<"StockMovement"> | string
    outletId?: StringWithAggregatesFilter<"StockMovement"> | string
    quantityChange?: IntWithAggregatesFilter<"StockMovement"> | number
    balanceAfter?: IntWithAggregatesFilter<"StockMovement"> | number
    reason?: StringWithAggregatesFilter<"StockMovement"> | string
    actorId?: StringWithAggregatesFilter<"StockMovement"> | string
    referenceId?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    notes?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StockMovement"> | Date | string
  }

  export type StockReservationWhereInput = {
    AND?: StockReservationWhereInput | StockReservationWhereInput[]
    OR?: StockReservationWhereInput[]
    NOT?: StockReservationWhereInput | StockReservationWhereInput[]
    id?: StringFilter<"StockReservation"> | string
    variantId?: StringFilter<"StockReservation"> | string
    tenantId?: StringFilter<"StockReservation"> | string
    outletId?: StringFilter<"StockReservation"> | string
    quantity?: IntFilter<"StockReservation"> | number
    orderId?: StringFilter<"StockReservation"> | string
    expiresAt?: DateTimeFilter<"StockReservation"> | Date | string
    status?: StringFilter<"StockReservation"> | string
    createdAt?: DateTimeFilter<"StockReservation"> | Date | string
    variant?: XOR<ProductVariantRelationFilter, ProductVariantWhereInput>
  }

  export type StockReservationOrderByWithRelationInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    variant?: ProductVariantOrderByWithRelationInput
  }

  export type StockReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockReservationWhereInput | StockReservationWhereInput[]
    OR?: StockReservationWhereInput[]
    NOT?: StockReservationWhereInput | StockReservationWhereInput[]
    variantId?: StringFilter<"StockReservation"> | string
    tenantId?: StringFilter<"StockReservation"> | string
    outletId?: StringFilter<"StockReservation"> | string
    quantity?: IntFilter<"StockReservation"> | number
    orderId?: StringFilter<"StockReservation"> | string
    expiresAt?: DateTimeFilter<"StockReservation"> | Date | string
    status?: StringFilter<"StockReservation"> | string
    createdAt?: DateTimeFilter<"StockReservation"> | Date | string
    variant?: XOR<ProductVariantRelationFilter, ProductVariantWhereInput>
  }, "id">

  export type StockReservationOrderByWithAggregationInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: StockReservationCountOrderByAggregateInput
    _avg?: StockReservationAvgOrderByAggregateInput
    _max?: StockReservationMaxOrderByAggregateInput
    _min?: StockReservationMinOrderByAggregateInput
    _sum?: StockReservationSumOrderByAggregateInput
  }

  export type StockReservationScalarWhereWithAggregatesInput = {
    AND?: StockReservationScalarWhereWithAggregatesInput | StockReservationScalarWhereWithAggregatesInput[]
    OR?: StockReservationScalarWhereWithAggregatesInput[]
    NOT?: StockReservationScalarWhereWithAggregatesInput | StockReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockReservation"> | string
    variantId?: StringWithAggregatesFilter<"StockReservation"> | string
    tenantId?: StringWithAggregatesFilter<"StockReservation"> | string
    outletId?: StringWithAggregatesFilter<"StockReservation"> | string
    quantity?: IntWithAggregatesFilter<"StockReservation"> | number
    orderId?: StringWithAggregatesFilter<"StockReservation"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"StockReservation"> | Date | string
    status?: StringWithAggregatesFilter<"StockReservation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StockReservation"> | Date | string
  }

  export type AdminPriceCapRuleWhereInput = {
    AND?: AdminPriceCapRuleWhereInput | AdminPriceCapRuleWhereInput[]
    OR?: AdminPriceCapRuleWhereInput[]
    NOT?: AdminPriceCapRuleWhereInput | AdminPriceCapRuleWhereInput[]
    id?: StringFilter<"AdminPriceCapRule"> | string
    scope?: StringFilter<"AdminPriceCapRule"> | string
    targetKey?: StringFilter<"AdminPriceCapRule"> | string
    maxPricePaise?: IntFilter<"AdminPriceCapRule"> | number
    enforceMrpCap?: BoolFilter<"AdminPriceCapRule"> | boolean
    reason?: StringFilter<"AdminPriceCapRule"> | string
    isActive?: BoolFilter<"AdminPriceCapRule"> | boolean
    createdBy?: StringFilter<"AdminPriceCapRule"> | string
    createdAt?: DateTimeFilter<"AdminPriceCapRule"> | Date | string
    updatedAt?: DateTimeFilter<"AdminPriceCapRule"> | Date | string
  }

  export type AdminPriceCapRuleOrderByWithRelationInput = {
    id?: SortOrder
    scope?: SortOrder
    targetKey?: SortOrder
    maxPricePaise?: SortOrder
    enforceMrpCap?: SortOrder
    reason?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminPriceCapRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminPriceCapRuleWhereInput | AdminPriceCapRuleWhereInput[]
    OR?: AdminPriceCapRuleWhereInput[]
    NOT?: AdminPriceCapRuleWhereInput | AdminPriceCapRuleWhereInput[]
    scope?: StringFilter<"AdminPriceCapRule"> | string
    targetKey?: StringFilter<"AdminPriceCapRule"> | string
    maxPricePaise?: IntFilter<"AdminPriceCapRule"> | number
    enforceMrpCap?: BoolFilter<"AdminPriceCapRule"> | boolean
    reason?: StringFilter<"AdminPriceCapRule"> | string
    isActive?: BoolFilter<"AdminPriceCapRule"> | boolean
    createdBy?: StringFilter<"AdminPriceCapRule"> | string
    createdAt?: DateTimeFilter<"AdminPriceCapRule"> | Date | string
    updatedAt?: DateTimeFilter<"AdminPriceCapRule"> | Date | string
  }, "id">

  export type AdminPriceCapRuleOrderByWithAggregationInput = {
    id?: SortOrder
    scope?: SortOrder
    targetKey?: SortOrder
    maxPricePaise?: SortOrder
    enforceMrpCap?: SortOrder
    reason?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminPriceCapRuleCountOrderByAggregateInput
    _avg?: AdminPriceCapRuleAvgOrderByAggregateInput
    _max?: AdminPriceCapRuleMaxOrderByAggregateInput
    _min?: AdminPriceCapRuleMinOrderByAggregateInput
    _sum?: AdminPriceCapRuleSumOrderByAggregateInput
  }

  export type AdminPriceCapRuleScalarWhereWithAggregatesInput = {
    AND?: AdminPriceCapRuleScalarWhereWithAggregatesInput | AdminPriceCapRuleScalarWhereWithAggregatesInput[]
    OR?: AdminPriceCapRuleScalarWhereWithAggregatesInput[]
    NOT?: AdminPriceCapRuleScalarWhereWithAggregatesInput | AdminPriceCapRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminPriceCapRule"> | string
    scope?: StringWithAggregatesFilter<"AdminPriceCapRule"> | string
    targetKey?: StringWithAggregatesFilter<"AdminPriceCapRule"> | string
    maxPricePaise?: IntWithAggregatesFilter<"AdminPriceCapRule"> | number
    enforceMrpCap?: BoolWithAggregatesFilter<"AdminPriceCapRule"> | boolean
    reason?: StringWithAggregatesFilter<"AdminPriceCapRule"> | string
    isActive?: BoolWithAggregatesFilter<"AdminPriceCapRule"> | boolean
    createdBy?: StringWithAggregatesFilter<"AdminPriceCapRule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminPriceCapRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminPriceCapRule"> | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    tenantId: string
    outletId: string
    name: string
    description?: string | null
    category: string
    subCategory?: string | null
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    tenantId: string
    outletId: string
    name: string
    description?: string | null
    category: string
    subCategory?: string | null
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    tenantId: string
    outletId: string
    name: string
    description?: string | null
    category: string
    subCategory?: string | null
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantCreateInput = {
    id?: string
    tenantId?: string | null
    outletId?: string | null
    name: string
    sku?: string | null
    barcode?: string | null
    pricePaise: number
    compareAtPricePaise?: number | null
    isPreorder?: boolean
    leadTimeMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    stockBalance?: StockBalanceCreateNestedOneWithoutVariantInput
    stockReservations?: StockReservationCreateNestedManyWithoutVariantInput
    stockMovements?: StockMovementCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateInput = {
    id?: string
    productId: string
    tenantId?: string | null
    outletId?: string | null
    name: string
    sku?: string | null
    barcode?: string | null
    pricePaise: number
    compareAtPricePaise?: number | null
    isPreorder?: boolean
    leadTimeMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stockBalance?: StockBalanceUncheckedCreateNestedOneWithoutVariantInput
    stockReservations?: StockReservationUncheckedCreateNestedManyWithoutVariantInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    pricePaise?: IntFieldUpdateOperationsInput | number
    compareAtPricePaise?: NullableIntFieldUpdateOperationsInput | number | null
    isPreorder?: BoolFieldUpdateOperationsInput | boolean
    leadTimeMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    stockBalance?: StockBalanceUpdateOneWithoutVariantNestedInput
    stockReservations?: StockReservationUpdateManyWithoutVariantNestedInput
    stockMovements?: StockMovementUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    pricePaise?: IntFieldUpdateOperationsInput | number
    compareAtPricePaise?: NullableIntFieldUpdateOperationsInput | number | null
    isPreorder?: BoolFieldUpdateOperationsInput | boolean
    leadTimeMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBalance?: StockBalanceUncheckedUpdateOneWithoutVariantNestedInput
    stockReservations?: StockReservationUncheckedUpdateManyWithoutVariantNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantCreateManyInput = {
    id?: string
    productId: string
    tenantId?: string | null
    outletId?: string | null
    name: string
    sku?: string | null
    barcode?: string | null
    pricePaise: number
    compareAtPricePaise?: number | null
    isPreorder?: boolean
    leadTimeMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    pricePaise?: IntFieldUpdateOperationsInput | number
    compareAtPricePaise?: NullableIntFieldUpdateOperationsInput | number | null
    isPreorder?: BoolFieldUpdateOperationsInput | boolean
    leadTimeMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    pricePaise?: IntFieldUpdateOperationsInput | number
    compareAtPricePaise?: NullableIntFieldUpdateOperationsInput | number | null
    isPreorder?: BoolFieldUpdateOperationsInput | boolean
    leadTimeMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockBalanceCreateInput = {
    id?: string
    tenantId: string
    outletId: string
    onHandQuantity?: number
    reservedQuantity?: number
    safetyStock?: number
    version?: number
    updatedAt?: Date | string
    variant: ProductVariantCreateNestedOneWithoutStockBalanceInput
  }

  export type StockBalanceUncheckedCreateInput = {
    id?: string
    variantId: string
    tenantId: string
    outletId: string
    onHandQuantity?: number
    reservedQuantity?: number
    safetyStock?: number
    version?: number
    updatedAt?: Date | string
  }

  export type StockBalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    onHandQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    safetyStock?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: ProductVariantUpdateOneRequiredWithoutStockBalanceNestedInput
  }

  export type StockBalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    onHandQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    safetyStock?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockBalanceCreateManyInput = {
    id?: string
    variantId: string
    tenantId: string
    outletId: string
    onHandQuantity?: number
    reservedQuantity?: number
    safetyStock?: number
    version?: number
    updatedAt?: Date | string
  }

  export type StockBalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    onHandQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    safetyStock?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockBalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    onHandQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    safetyStock?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateInput = {
    id?: string
    tenantId: string
    outletId: string
    quantityChange: number
    balanceAfter?: number
    reason: string
    actorId?: string
    referenceId?: string | null
    notes?: string | null
    createdAt?: Date | string
    variant?: ProductVariantCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateInput = {
    id?: string
    variantId: string
    tenantId: string
    outletId: string
    quantityChange: number
    balanceAfter?: number
    reason: string
    actorId?: string
    referenceId?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type StockMovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantityChange?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: ProductVariantUpdateOneWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantityChange?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateManyInput = {
    id?: string
    variantId: string
    tenantId: string
    outletId: string
    quantityChange: number
    balanceAfter?: number
    reason: string
    actorId?: string
    referenceId?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type StockMovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantityChange?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantityChange?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockReservationCreateInput = {
    id?: string
    tenantId: string
    outletId: string
    quantity: number
    orderId: string
    expiresAt: Date | string
    status?: string
    createdAt?: Date | string
    variant: ProductVariantCreateNestedOneWithoutStockReservationsInput
  }

  export type StockReservationUncheckedCreateInput = {
    id?: string
    variantId: string
    tenantId: string
    outletId: string
    quantity: number
    orderId: string
    expiresAt: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type StockReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: ProductVariantUpdateOneRequiredWithoutStockReservationsNestedInput
  }

  export type StockReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockReservationCreateManyInput = {
    id?: string
    variantId: string
    tenantId: string
    outletId: string
    quantity: number
    orderId: string
    expiresAt: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type StockReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminPriceCapRuleCreateInput = {
    id?: string
    scope?: string
    targetKey: string
    maxPricePaise: number
    enforceMrpCap?: boolean
    reason: string
    isActive?: boolean
    createdBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminPriceCapRuleUncheckedCreateInput = {
    id?: string
    scope?: string
    targetKey: string
    maxPricePaise: number
    enforceMrpCap?: boolean
    reason: string
    isActive?: boolean
    createdBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminPriceCapRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    targetKey?: StringFieldUpdateOperationsInput | string
    maxPricePaise?: IntFieldUpdateOperationsInput | number
    enforceMrpCap?: BoolFieldUpdateOperationsInput | boolean
    reason?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminPriceCapRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    targetKey?: StringFieldUpdateOperationsInput | string
    maxPricePaise?: IntFieldUpdateOperationsInput | number
    enforceMrpCap?: BoolFieldUpdateOperationsInput | boolean
    reason?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminPriceCapRuleCreateManyInput = {
    id?: string
    scope?: string
    targetKey: string
    maxPricePaise: number
    enforceMrpCap?: boolean
    reason: string
    isActive?: boolean
    createdBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminPriceCapRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    targetKey?: StringFieldUpdateOperationsInput | string
    maxPricePaise?: IntFieldUpdateOperationsInput | number
    enforceMrpCap?: BoolFieldUpdateOperationsInput | boolean
    reason?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminPriceCapRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    targetKey?: StringFieldUpdateOperationsInput | string
    maxPricePaise?: IntFieldUpdateOperationsInput | number
    enforceMrpCap?: BoolFieldUpdateOperationsInput | boolean
    reason?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
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

  export type ProductVariantListRelationFilter = {
    every?: ProductVariantWhereInput
    some?: ProductVariantWhereInput
    none?: ProductVariantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    isAvailable?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type StockBalanceNullableRelationFilter = {
    is?: StockBalanceWhereInput | null
    isNot?: StockBalanceWhereInput | null
  }

  export type StockReservationListRelationFilter = {
    every?: StockReservationWhereInput
    some?: StockReservationWhereInput
    none?: StockReservationWhereInput
  }

  export type StockMovementListRelationFilter = {
    every?: StockMovementWhereInput
    some?: StockMovementWhereInput
    none?: StockMovementWhereInput
  }

  export type StockReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockMovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    pricePaise?: SortOrder
    compareAtPricePaise?: SortOrder
    isPreorder?: SortOrder
    leadTimeMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantAvgOrderByAggregateInput = {
    pricePaise?: SortOrder
    compareAtPricePaise?: SortOrder
    leadTimeMinutes?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    pricePaise?: SortOrder
    compareAtPricePaise?: SortOrder
    isPreorder?: SortOrder
    leadTimeMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    pricePaise?: SortOrder
    compareAtPricePaise?: SortOrder
    isPreorder?: SortOrder
    leadTimeMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantSumOrderByAggregateInput = {
    pricePaise?: SortOrder
    compareAtPricePaise?: SortOrder
    leadTimeMinutes?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductVariantRelationFilter = {
    is?: ProductVariantWhereInput
    isNot?: ProductVariantWhereInput
  }

  export type StockBalanceCountOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    onHandQuantity?: SortOrder
    reservedQuantity?: SortOrder
    safetyStock?: SortOrder
    version?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockBalanceAvgOrderByAggregateInput = {
    onHandQuantity?: SortOrder
    reservedQuantity?: SortOrder
    safetyStock?: SortOrder
    version?: SortOrder
  }

  export type StockBalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    onHandQuantity?: SortOrder
    reservedQuantity?: SortOrder
    safetyStock?: SortOrder
    version?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockBalanceMinOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    onHandQuantity?: SortOrder
    reservedQuantity?: SortOrder
    safetyStock?: SortOrder
    version?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockBalanceSumOrderByAggregateInput = {
    onHandQuantity?: SortOrder
    reservedQuantity?: SortOrder
    safetyStock?: SortOrder
    version?: SortOrder
  }

  export type ProductVariantNullableRelationFilter = {
    is?: ProductVariantWhereInput | null
    isNot?: ProductVariantWhereInput | null
  }

  export type StockMovementCountOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    quantityChange?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrder
    actorId?: SortOrder
    referenceId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMovementAvgOrderByAggregateInput = {
    quantityChange?: SortOrder
    balanceAfter?: SortOrder
  }

  export type StockMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    quantityChange?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrder
    actorId?: SortOrder
    referenceId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMovementMinOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    quantityChange?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrder
    actorId?: SortOrder
    referenceId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMovementSumOrderByAggregateInput = {
    quantityChange?: SortOrder
    balanceAfter?: SortOrder
  }

  export type StockReservationCountOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StockReservationAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StockReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StockReservationMinOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    tenantId?: SortOrder
    outletId?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StockReservationSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type AdminPriceCapRuleCountOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    targetKey?: SortOrder
    maxPricePaise?: SortOrder
    enforceMrpCap?: SortOrder
    reason?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminPriceCapRuleAvgOrderByAggregateInput = {
    maxPricePaise?: SortOrder
  }

  export type AdminPriceCapRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    targetKey?: SortOrder
    maxPricePaise?: SortOrder
    enforceMrpCap?: SortOrder
    reason?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminPriceCapRuleMinOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    targetKey?: SortOrder
    maxPricePaise?: SortOrder
    enforceMrpCap?: SortOrder
    reason?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminPriceCapRuleSumOrderByAggregateInput = {
    maxPricePaise?: SortOrder
  }

  export type ProductVariantCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type ProductVariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductVariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    connect?: ProductWhereUniqueInput
  }

  export type StockBalanceCreateNestedOneWithoutVariantInput = {
    create?: XOR<StockBalanceCreateWithoutVariantInput, StockBalanceUncheckedCreateWithoutVariantInput>
    connectOrCreate?: StockBalanceCreateOrConnectWithoutVariantInput
    connect?: StockBalanceWhereUniqueInput
  }

  export type StockReservationCreateNestedManyWithoutVariantInput = {
    create?: XOR<StockReservationCreateWithoutVariantInput, StockReservationUncheckedCreateWithoutVariantInput> | StockReservationCreateWithoutVariantInput[] | StockReservationUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: StockReservationCreateOrConnectWithoutVariantInput | StockReservationCreateOrConnectWithoutVariantInput[]
    createMany?: StockReservationCreateManyVariantInputEnvelope
    connect?: StockReservationWhereUniqueInput | StockReservationWhereUniqueInput[]
  }

  export type StockMovementCreateNestedManyWithoutVariantInput = {
    create?: XOR<StockMovementCreateWithoutVariantInput, StockMovementUncheckedCreateWithoutVariantInput> | StockMovementCreateWithoutVariantInput[] | StockMovementUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutVariantInput | StockMovementCreateOrConnectWithoutVariantInput[]
    createMany?: StockMovementCreateManyVariantInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type StockBalanceUncheckedCreateNestedOneWithoutVariantInput = {
    create?: XOR<StockBalanceCreateWithoutVariantInput, StockBalanceUncheckedCreateWithoutVariantInput>
    connectOrCreate?: StockBalanceCreateOrConnectWithoutVariantInput
    connect?: StockBalanceWhereUniqueInput
  }

  export type StockReservationUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<StockReservationCreateWithoutVariantInput, StockReservationUncheckedCreateWithoutVariantInput> | StockReservationCreateWithoutVariantInput[] | StockReservationUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: StockReservationCreateOrConnectWithoutVariantInput | StockReservationCreateOrConnectWithoutVariantInput[]
    createMany?: StockReservationCreateManyVariantInputEnvelope
    connect?: StockReservationWhereUniqueInput | StockReservationWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<StockMovementCreateWithoutVariantInput, StockMovementUncheckedCreateWithoutVariantInput> | StockMovementCreateWithoutVariantInput[] | StockMovementUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutVariantInput | StockMovementCreateOrConnectWithoutVariantInput[]
    createMany?: StockMovementCreateManyVariantInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    upsert?: ProductUpsertWithoutVariantsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantsInput, ProductUpdateWithoutVariantsInput>, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type StockBalanceUpdateOneWithoutVariantNestedInput = {
    create?: XOR<StockBalanceCreateWithoutVariantInput, StockBalanceUncheckedCreateWithoutVariantInput>
    connectOrCreate?: StockBalanceCreateOrConnectWithoutVariantInput
    upsert?: StockBalanceUpsertWithoutVariantInput
    disconnect?: StockBalanceWhereInput | boolean
    delete?: StockBalanceWhereInput | boolean
    connect?: StockBalanceWhereUniqueInput
    update?: XOR<XOR<StockBalanceUpdateToOneWithWhereWithoutVariantInput, StockBalanceUpdateWithoutVariantInput>, StockBalanceUncheckedUpdateWithoutVariantInput>
  }

  export type StockReservationUpdateManyWithoutVariantNestedInput = {
    create?: XOR<StockReservationCreateWithoutVariantInput, StockReservationUncheckedCreateWithoutVariantInput> | StockReservationCreateWithoutVariantInput[] | StockReservationUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: StockReservationCreateOrConnectWithoutVariantInput | StockReservationCreateOrConnectWithoutVariantInput[]
    upsert?: StockReservationUpsertWithWhereUniqueWithoutVariantInput | StockReservationUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: StockReservationCreateManyVariantInputEnvelope
    set?: StockReservationWhereUniqueInput | StockReservationWhereUniqueInput[]
    disconnect?: StockReservationWhereUniqueInput | StockReservationWhereUniqueInput[]
    delete?: StockReservationWhereUniqueInput | StockReservationWhereUniqueInput[]
    connect?: StockReservationWhereUniqueInput | StockReservationWhereUniqueInput[]
    update?: StockReservationUpdateWithWhereUniqueWithoutVariantInput | StockReservationUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: StockReservationUpdateManyWithWhereWithoutVariantInput | StockReservationUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: StockReservationScalarWhereInput | StockReservationScalarWhereInput[]
  }

  export type StockMovementUpdateManyWithoutVariantNestedInput = {
    create?: XOR<StockMovementCreateWithoutVariantInput, StockMovementUncheckedCreateWithoutVariantInput> | StockMovementCreateWithoutVariantInput[] | StockMovementUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutVariantInput | StockMovementCreateOrConnectWithoutVariantInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutVariantInput | StockMovementUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: StockMovementCreateManyVariantInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutVariantInput | StockMovementUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutVariantInput | StockMovementUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type StockBalanceUncheckedUpdateOneWithoutVariantNestedInput = {
    create?: XOR<StockBalanceCreateWithoutVariantInput, StockBalanceUncheckedCreateWithoutVariantInput>
    connectOrCreate?: StockBalanceCreateOrConnectWithoutVariantInput
    upsert?: StockBalanceUpsertWithoutVariantInput
    disconnect?: StockBalanceWhereInput | boolean
    delete?: StockBalanceWhereInput | boolean
    connect?: StockBalanceWhereUniqueInput
    update?: XOR<XOR<StockBalanceUpdateToOneWithWhereWithoutVariantInput, StockBalanceUpdateWithoutVariantInput>, StockBalanceUncheckedUpdateWithoutVariantInput>
  }

  export type StockReservationUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<StockReservationCreateWithoutVariantInput, StockReservationUncheckedCreateWithoutVariantInput> | StockReservationCreateWithoutVariantInput[] | StockReservationUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: StockReservationCreateOrConnectWithoutVariantInput | StockReservationCreateOrConnectWithoutVariantInput[]
    upsert?: StockReservationUpsertWithWhereUniqueWithoutVariantInput | StockReservationUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: StockReservationCreateManyVariantInputEnvelope
    set?: StockReservationWhereUniqueInput | StockReservationWhereUniqueInput[]
    disconnect?: StockReservationWhereUniqueInput | StockReservationWhereUniqueInput[]
    delete?: StockReservationWhereUniqueInput | StockReservationWhereUniqueInput[]
    connect?: StockReservationWhereUniqueInput | StockReservationWhereUniqueInput[]
    update?: StockReservationUpdateWithWhereUniqueWithoutVariantInput | StockReservationUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: StockReservationUpdateManyWithWhereWithoutVariantInput | StockReservationUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: StockReservationScalarWhereInput | StockReservationScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<StockMovementCreateWithoutVariantInput, StockMovementUncheckedCreateWithoutVariantInput> | StockMovementCreateWithoutVariantInput[] | StockMovementUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutVariantInput | StockMovementCreateOrConnectWithoutVariantInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutVariantInput | StockMovementUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: StockMovementCreateManyVariantInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutVariantInput | StockMovementUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutVariantInput | StockMovementUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type ProductVariantCreateNestedOneWithoutStockBalanceInput = {
    create?: XOR<ProductVariantCreateWithoutStockBalanceInput, ProductVariantUncheckedCreateWithoutStockBalanceInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutStockBalanceInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type ProductVariantUpdateOneRequiredWithoutStockBalanceNestedInput = {
    create?: XOR<ProductVariantCreateWithoutStockBalanceInput, ProductVariantUncheckedCreateWithoutStockBalanceInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutStockBalanceInput
    upsert?: ProductVariantUpsertWithoutStockBalanceInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutStockBalanceInput, ProductVariantUpdateWithoutStockBalanceInput>, ProductVariantUncheckedUpdateWithoutStockBalanceInput>
  }

  export type ProductVariantCreateNestedOneWithoutStockMovementsInput = {
    create?: XOR<ProductVariantCreateWithoutStockMovementsInput, ProductVariantUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutStockMovementsInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type ProductVariantUpdateOneWithoutStockMovementsNestedInput = {
    create?: XOR<ProductVariantCreateWithoutStockMovementsInput, ProductVariantUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutStockMovementsInput
    upsert?: ProductVariantUpsertWithoutStockMovementsInput
    disconnect?: ProductVariantWhereInput | boolean
    delete?: ProductVariantWhereInput | boolean
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutStockMovementsInput, ProductVariantUpdateWithoutStockMovementsInput>, ProductVariantUncheckedUpdateWithoutStockMovementsInput>
  }

  export type ProductVariantCreateNestedOneWithoutStockReservationsInput = {
    create?: XOR<ProductVariantCreateWithoutStockReservationsInput, ProductVariantUncheckedCreateWithoutStockReservationsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutStockReservationsInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type ProductVariantUpdateOneRequiredWithoutStockReservationsNestedInput = {
    create?: XOR<ProductVariantCreateWithoutStockReservationsInput, ProductVariantUncheckedCreateWithoutStockReservationsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutStockReservationsInput
    upsert?: ProductVariantUpsertWithoutStockReservationsInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutStockReservationsInput, ProductVariantUpdateWithoutStockReservationsInput>, ProductVariantUncheckedUpdateWithoutStockReservationsInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type ProductVariantCreateWithoutProductInput = {
    id?: string
    tenantId?: string | null
    outletId?: string | null
    name: string
    sku?: string | null
    barcode?: string | null
    pricePaise: number
    compareAtPricePaise?: number | null
    isPreorder?: boolean
    leadTimeMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stockBalance?: StockBalanceCreateNestedOneWithoutVariantInput
    stockReservations?: StockReservationCreateNestedManyWithoutVariantInput
    stockMovements?: StockMovementCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutProductInput = {
    id?: string
    tenantId?: string | null
    outletId?: string | null
    name: string
    sku?: string | null
    barcode?: string | null
    pricePaise: number
    compareAtPricePaise?: number | null
    isPreorder?: boolean
    leadTimeMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stockBalance?: StockBalanceUncheckedCreateNestedOneWithoutVariantInput
    stockReservations?: StockReservationUncheckedCreateNestedManyWithoutVariantInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantCreateManyProductInputEnvelope = {
    data: ProductVariantCreateManyProductInput | ProductVariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductVariantUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    update: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    data: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariantScalarWhereInput
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariantScalarWhereInput = {
    AND?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    OR?: ProductVariantScalarWhereInput[]
    NOT?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    id?: StringFilter<"ProductVariant"> | string
    productId?: StringFilter<"ProductVariant"> | string
    tenantId?: StringNullableFilter<"ProductVariant"> | string | null
    outletId?: StringNullableFilter<"ProductVariant"> | string | null
    name?: StringFilter<"ProductVariant"> | string
    sku?: StringNullableFilter<"ProductVariant"> | string | null
    barcode?: StringNullableFilter<"ProductVariant"> | string | null
    pricePaise?: IntFilter<"ProductVariant"> | number
    compareAtPricePaise?: IntNullableFilter<"ProductVariant"> | number | null
    isPreorder?: BoolFilter<"ProductVariant"> | boolean
    leadTimeMinutes?: IntFilter<"ProductVariant"> | number
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
  }

  export type ProductCreateWithoutVariantsInput = {
    id?: string
    tenantId: string
    outletId: string
    name: string
    description?: string | null
    category: string
    subCategory?: string | null
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutVariantsInput = {
    id?: string
    tenantId: string
    outletId: string
    name: string
    description?: string | null
    category: string
    subCategory?: string | null
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutVariantsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
  }

  export type StockBalanceCreateWithoutVariantInput = {
    id?: string
    tenantId: string
    outletId: string
    onHandQuantity?: number
    reservedQuantity?: number
    safetyStock?: number
    version?: number
    updatedAt?: Date | string
  }

  export type StockBalanceUncheckedCreateWithoutVariantInput = {
    id?: string
    tenantId: string
    outletId: string
    onHandQuantity?: number
    reservedQuantity?: number
    safetyStock?: number
    version?: number
    updatedAt?: Date | string
  }

  export type StockBalanceCreateOrConnectWithoutVariantInput = {
    where: StockBalanceWhereUniqueInput
    create: XOR<StockBalanceCreateWithoutVariantInput, StockBalanceUncheckedCreateWithoutVariantInput>
  }

  export type StockReservationCreateWithoutVariantInput = {
    id?: string
    tenantId: string
    outletId: string
    quantity: number
    orderId: string
    expiresAt: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type StockReservationUncheckedCreateWithoutVariantInput = {
    id?: string
    tenantId: string
    outletId: string
    quantity: number
    orderId: string
    expiresAt: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type StockReservationCreateOrConnectWithoutVariantInput = {
    where: StockReservationWhereUniqueInput
    create: XOR<StockReservationCreateWithoutVariantInput, StockReservationUncheckedCreateWithoutVariantInput>
  }

  export type StockReservationCreateManyVariantInputEnvelope = {
    data: StockReservationCreateManyVariantInput | StockReservationCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type StockMovementCreateWithoutVariantInput = {
    id?: string
    tenantId: string
    outletId: string
    quantityChange: number
    balanceAfter?: number
    reason: string
    actorId?: string
    referenceId?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type StockMovementUncheckedCreateWithoutVariantInput = {
    id?: string
    tenantId: string
    outletId: string
    quantityChange: number
    balanceAfter?: number
    reason: string
    actorId?: string
    referenceId?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutVariantInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutVariantInput, StockMovementUncheckedCreateWithoutVariantInput>
  }

  export type StockMovementCreateManyVariantInputEnvelope = {
    data: StockMovementCreateManyVariantInput | StockMovementCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutVariantsInput = {
    update: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockBalanceUpsertWithoutVariantInput = {
    update: XOR<StockBalanceUpdateWithoutVariantInput, StockBalanceUncheckedUpdateWithoutVariantInput>
    create: XOR<StockBalanceCreateWithoutVariantInput, StockBalanceUncheckedCreateWithoutVariantInput>
    where?: StockBalanceWhereInput
  }

  export type StockBalanceUpdateToOneWithWhereWithoutVariantInput = {
    where?: StockBalanceWhereInput
    data: XOR<StockBalanceUpdateWithoutVariantInput, StockBalanceUncheckedUpdateWithoutVariantInput>
  }

  export type StockBalanceUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    onHandQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    safetyStock?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockBalanceUncheckedUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    onHandQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    safetyStock?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockReservationUpsertWithWhereUniqueWithoutVariantInput = {
    where: StockReservationWhereUniqueInput
    update: XOR<StockReservationUpdateWithoutVariantInput, StockReservationUncheckedUpdateWithoutVariantInput>
    create: XOR<StockReservationCreateWithoutVariantInput, StockReservationUncheckedCreateWithoutVariantInput>
  }

  export type StockReservationUpdateWithWhereUniqueWithoutVariantInput = {
    where: StockReservationWhereUniqueInput
    data: XOR<StockReservationUpdateWithoutVariantInput, StockReservationUncheckedUpdateWithoutVariantInput>
  }

  export type StockReservationUpdateManyWithWhereWithoutVariantInput = {
    where: StockReservationScalarWhereInput
    data: XOR<StockReservationUpdateManyMutationInput, StockReservationUncheckedUpdateManyWithoutVariantInput>
  }

  export type StockReservationScalarWhereInput = {
    AND?: StockReservationScalarWhereInput | StockReservationScalarWhereInput[]
    OR?: StockReservationScalarWhereInput[]
    NOT?: StockReservationScalarWhereInput | StockReservationScalarWhereInput[]
    id?: StringFilter<"StockReservation"> | string
    variantId?: StringFilter<"StockReservation"> | string
    tenantId?: StringFilter<"StockReservation"> | string
    outletId?: StringFilter<"StockReservation"> | string
    quantity?: IntFilter<"StockReservation"> | number
    orderId?: StringFilter<"StockReservation"> | string
    expiresAt?: DateTimeFilter<"StockReservation"> | Date | string
    status?: StringFilter<"StockReservation"> | string
    createdAt?: DateTimeFilter<"StockReservation"> | Date | string
  }

  export type StockMovementUpsertWithWhereUniqueWithoutVariantInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutVariantInput, StockMovementUncheckedUpdateWithoutVariantInput>
    create: XOR<StockMovementCreateWithoutVariantInput, StockMovementUncheckedCreateWithoutVariantInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutVariantInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutVariantInput, StockMovementUncheckedUpdateWithoutVariantInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutVariantInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutVariantInput>
  }

  export type StockMovementScalarWhereInput = {
    AND?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    OR?: StockMovementScalarWhereInput[]
    NOT?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    variantId?: StringFilter<"StockMovement"> | string
    tenantId?: StringFilter<"StockMovement"> | string
    outletId?: StringFilter<"StockMovement"> | string
    quantityChange?: IntFilter<"StockMovement"> | number
    balanceAfter?: IntFilter<"StockMovement"> | number
    reason?: StringFilter<"StockMovement"> | string
    actorId?: StringFilter<"StockMovement"> | string
    referenceId?: StringNullableFilter<"StockMovement"> | string | null
    notes?: StringNullableFilter<"StockMovement"> | string | null
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
  }

  export type ProductVariantCreateWithoutStockBalanceInput = {
    id?: string
    tenantId?: string | null
    outletId?: string | null
    name: string
    sku?: string | null
    barcode?: string | null
    pricePaise: number
    compareAtPricePaise?: number | null
    isPreorder?: boolean
    leadTimeMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    stockReservations?: StockReservationCreateNestedManyWithoutVariantInput
    stockMovements?: StockMovementCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutStockBalanceInput = {
    id?: string
    productId: string
    tenantId?: string | null
    outletId?: string | null
    name: string
    sku?: string | null
    barcode?: string | null
    pricePaise: number
    compareAtPricePaise?: number | null
    isPreorder?: boolean
    leadTimeMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stockReservations?: StockReservationUncheckedCreateNestedManyWithoutVariantInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutStockBalanceInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutStockBalanceInput, ProductVariantUncheckedCreateWithoutStockBalanceInput>
  }

  export type ProductVariantUpsertWithoutStockBalanceInput = {
    update: XOR<ProductVariantUpdateWithoutStockBalanceInput, ProductVariantUncheckedUpdateWithoutStockBalanceInput>
    create: XOR<ProductVariantCreateWithoutStockBalanceInput, ProductVariantUncheckedCreateWithoutStockBalanceInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutStockBalanceInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutStockBalanceInput, ProductVariantUncheckedUpdateWithoutStockBalanceInput>
  }

  export type ProductVariantUpdateWithoutStockBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    pricePaise?: IntFieldUpdateOperationsInput | number
    compareAtPricePaise?: NullableIntFieldUpdateOperationsInput | number | null
    isPreorder?: BoolFieldUpdateOperationsInput | boolean
    leadTimeMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    stockReservations?: StockReservationUpdateManyWithoutVariantNestedInput
    stockMovements?: StockMovementUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutStockBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    pricePaise?: IntFieldUpdateOperationsInput | number
    compareAtPricePaise?: NullableIntFieldUpdateOperationsInput | number | null
    isPreorder?: BoolFieldUpdateOperationsInput | boolean
    leadTimeMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockReservations?: StockReservationUncheckedUpdateManyWithoutVariantNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantCreateWithoutStockMovementsInput = {
    id?: string
    tenantId?: string | null
    outletId?: string | null
    name: string
    sku?: string | null
    barcode?: string | null
    pricePaise: number
    compareAtPricePaise?: number | null
    isPreorder?: boolean
    leadTimeMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    stockBalance?: StockBalanceCreateNestedOneWithoutVariantInput
    stockReservations?: StockReservationCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutStockMovementsInput = {
    id?: string
    productId: string
    tenantId?: string | null
    outletId?: string | null
    name: string
    sku?: string | null
    barcode?: string | null
    pricePaise: number
    compareAtPricePaise?: number | null
    isPreorder?: boolean
    leadTimeMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stockBalance?: StockBalanceUncheckedCreateNestedOneWithoutVariantInput
    stockReservations?: StockReservationUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutStockMovementsInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutStockMovementsInput, ProductVariantUncheckedCreateWithoutStockMovementsInput>
  }

  export type ProductVariantUpsertWithoutStockMovementsInput = {
    update: XOR<ProductVariantUpdateWithoutStockMovementsInput, ProductVariantUncheckedUpdateWithoutStockMovementsInput>
    create: XOR<ProductVariantCreateWithoutStockMovementsInput, ProductVariantUncheckedCreateWithoutStockMovementsInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutStockMovementsInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutStockMovementsInput, ProductVariantUncheckedUpdateWithoutStockMovementsInput>
  }

  export type ProductVariantUpdateWithoutStockMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    pricePaise?: IntFieldUpdateOperationsInput | number
    compareAtPricePaise?: NullableIntFieldUpdateOperationsInput | number | null
    isPreorder?: BoolFieldUpdateOperationsInput | boolean
    leadTimeMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    stockBalance?: StockBalanceUpdateOneWithoutVariantNestedInput
    stockReservations?: StockReservationUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutStockMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    pricePaise?: IntFieldUpdateOperationsInput | number
    compareAtPricePaise?: NullableIntFieldUpdateOperationsInput | number | null
    isPreorder?: BoolFieldUpdateOperationsInput | boolean
    leadTimeMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBalance?: StockBalanceUncheckedUpdateOneWithoutVariantNestedInput
    stockReservations?: StockReservationUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantCreateWithoutStockReservationsInput = {
    id?: string
    tenantId?: string | null
    outletId?: string | null
    name: string
    sku?: string | null
    barcode?: string | null
    pricePaise: number
    compareAtPricePaise?: number | null
    isPreorder?: boolean
    leadTimeMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    stockBalance?: StockBalanceCreateNestedOneWithoutVariantInput
    stockMovements?: StockMovementCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutStockReservationsInput = {
    id?: string
    productId: string
    tenantId?: string | null
    outletId?: string | null
    name: string
    sku?: string | null
    barcode?: string | null
    pricePaise: number
    compareAtPricePaise?: number | null
    isPreorder?: boolean
    leadTimeMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stockBalance?: StockBalanceUncheckedCreateNestedOneWithoutVariantInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutStockReservationsInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutStockReservationsInput, ProductVariantUncheckedCreateWithoutStockReservationsInput>
  }

  export type ProductVariantUpsertWithoutStockReservationsInput = {
    update: XOR<ProductVariantUpdateWithoutStockReservationsInput, ProductVariantUncheckedUpdateWithoutStockReservationsInput>
    create: XOR<ProductVariantCreateWithoutStockReservationsInput, ProductVariantUncheckedCreateWithoutStockReservationsInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutStockReservationsInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutStockReservationsInput, ProductVariantUncheckedUpdateWithoutStockReservationsInput>
  }

  export type ProductVariantUpdateWithoutStockReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    pricePaise?: IntFieldUpdateOperationsInput | number
    compareAtPricePaise?: NullableIntFieldUpdateOperationsInput | number | null
    isPreorder?: BoolFieldUpdateOperationsInput | boolean
    leadTimeMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    stockBalance?: StockBalanceUpdateOneWithoutVariantNestedInput
    stockMovements?: StockMovementUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutStockReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    pricePaise?: IntFieldUpdateOperationsInput | number
    compareAtPricePaise?: NullableIntFieldUpdateOperationsInput | number | null
    isPreorder?: BoolFieldUpdateOperationsInput | boolean
    leadTimeMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBalance?: StockBalanceUncheckedUpdateOneWithoutVariantNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantCreateManyProductInput = {
    id?: string
    tenantId?: string | null
    outletId?: string | null
    name: string
    sku?: string | null
    barcode?: string | null
    pricePaise: number
    compareAtPricePaise?: number | null
    isPreorder?: boolean
    leadTimeMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    pricePaise?: IntFieldUpdateOperationsInput | number
    compareAtPricePaise?: NullableIntFieldUpdateOperationsInput | number | null
    isPreorder?: BoolFieldUpdateOperationsInput | boolean
    leadTimeMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBalance?: StockBalanceUpdateOneWithoutVariantNestedInput
    stockReservations?: StockReservationUpdateManyWithoutVariantNestedInput
    stockMovements?: StockMovementUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    pricePaise?: IntFieldUpdateOperationsInput | number
    compareAtPricePaise?: NullableIntFieldUpdateOperationsInput | number | null
    isPreorder?: BoolFieldUpdateOperationsInput | boolean
    leadTimeMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBalance?: StockBalanceUncheckedUpdateOneWithoutVariantNestedInput
    stockReservations?: StockReservationUncheckedUpdateManyWithoutVariantNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    pricePaise?: IntFieldUpdateOperationsInput | number
    compareAtPricePaise?: NullableIntFieldUpdateOperationsInput | number | null
    isPreorder?: BoolFieldUpdateOperationsInput | boolean
    leadTimeMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockReservationCreateManyVariantInput = {
    id?: string
    tenantId: string
    outletId: string
    quantity: number
    orderId: string
    expiresAt: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type StockMovementCreateManyVariantInput = {
    id?: string
    tenantId: string
    outletId: string
    quantityChange: number
    balanceAfter?: number
    reason: string
    actorId?: string
    referenceId?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type StockReservationUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockReservationUncheckedUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockReservationUncheckedUpdateManyWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantityChange?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantityChange?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    quantityChange?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVariantCountOutputTypeDefaultArgs instead
     */
    export type ProductVariantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVariantDefaultArgs instead
     */
    export type ProductVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVariantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockBalanceDefaultArgs instead
     */
    export type StockBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockBalanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockMovementDefaultArgs instead
     */
    export type StockMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockMovementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockReservationDefaultArgs instead
     */
    export type StockReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockReservationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminPriceCapRuleDefaultArgs instead
     */
    export type AdminPriceCapRuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminPriceCapRuleDefaultArgs<ExtArgs>

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