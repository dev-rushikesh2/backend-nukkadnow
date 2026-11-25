
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
 * Model OutletSearchDocument
 * 
 */
export type OutletSearchDocument = $Result.DefaultSelection<Prisma.$OutletSearchDocumentPayload>
/**
 * Model AvailabilityProjection
 * 
 */
export type AvailabilityProjection = $Result.DefaultSelection<Prisma.$AvailabilityProjectionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more OutletSearchDocuments
 * const outletSearchDocuments = await prisma.outletSearchDocument.findMany()
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
   * // Fetch zero or more OutletSearchDocuments
   * const outletSearchDocuments = await prisma.outletSearchDocument.findMany()
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
   * `prisma.outletSearchDocument`: Exposes CRUD operations for the **OutletSearchDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutletSearchDocuments
    * const outletSearchDocuments = await prisma.outletSearchDocument.findMany()
    * ```
    */
  get outletSearchDocument(): Prisma.OutletSearchDocumentDelegate<ExtArgs>;

  /**
   * `prisma.availabilityProjection`: Exposes CRUD operations for the **AvailabilityProjection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilityProjections
    * const availabilityProjections = await prisma.availabilityProjection.findMany()
    * ```
    */
  get availabilityProjection(): Prisma.AvailabilityProjectionDelegate<ExtArgs>;
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
    OutletSearchDocument: 'OutletSearchDocument',
    AvailabilityProjection: 'AvailabilityProjection'
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
      modelProps: "outletSearchDocument" | "availabilityProjection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      OutletSearchDocument: {
        payload: Prisma.$OutletSearchDocumentPayload<ExtArgs>
        fields: Prisma.OutletSearchDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutletSearchDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletSearchDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutletSearchDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletSearchDocumentPayload>
          }
          findFirst: {
            args: Prisma.OutletSearchDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletSearchDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutletSearchDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletSearchDocumentPayload>
          }
          findMany: {
            args: Prisma.OutletSearchDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletSearchDocumentPayload>[]
          }
          create: {
            args: Prisma.OutletSearchDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletSearchDocumentPayload>
          }
          createMany: {
            args: Prisma.OutletSearchDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutletSearchDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletSearchDocumentPayload>[]
          }
          delete: {
            args: Prisma.OutletSearchDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletSearchDocumentPayload>
          }
          update: {
            args: Prisma.OutletSearchDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletSearchDocumentPayload>
          }
          deleteMany: {
            args: Prisma.OutletSearchDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutletSearchDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutletSearchDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletSearchDocumentPayload>
          }
          aggregate: {
            args: Prisma.OutletSearchDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutletSearchDocument>
          }
          groupBy: {
            args: Prisma.OutletSearchDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutletSearchDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutletSearchDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<OutletSearchDocumentCountAggregateOutputType> | number
          }
        }
      }
      AvailabilityProjection: {
        payload: Prisma.$AvailabilityProjectionPayload<ExtArgs>
        fields: Prisma.AvailabilityProjectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityProjectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityProjectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityProjectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityProjectionPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityProjectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityProjectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityProjectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityProjectionPayload>
          }
          findMany: {
            args: Prisma.AvailabilityProjectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityProjectionPayload>[]
          }
          create: {
            args: Prisma.AvailabilityProjectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityProjectionPayload>
          }
          createMany: {
            args: Prisma.AvailabilityProjectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityProjectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityProjectionPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityProjectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityProjectionPayload>
          }
          update: {
            args: Prisma.AvailabilityProjectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityProjectionPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityProjectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityProjectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvailabilityProjectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityProjectionPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityProjectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilityProjection>
          }
          groupBy: {
            args: Prisma.AvailabilityProjectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityProjectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityProjectionCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityProjectionCountAggregateOutputType> | number
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
   * Model OutletSearchDocument
   */

  export type AggregateOutletSearchDocument = {
    _count: OutletSearchDocumentCountAggregateOutputType | null
    _avg: OutletSearchDocumentAvgAggregateOutputType | null
    _sum: OutletSearchDocumentSumAggregateOutputType | null
    _min: OutletSearchDocumentMinAggregateOutputType | null
    _max: OutletSearchDocumentMaxAggregateOutputType | null
  }

  export type OutletSearchDocumentAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    rating: number | null
    queueEstimateMinutes: number | null
  }

  export type OutletSearchDocumentSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    rating: number | null
    queueEstimateMinutes: number | null
  }

  export type OutletSearchDocumentMinAggregateOutputType = {
    id: string | null
    outletId: string | null
    merchantName: string | null
    locality: string | null
    city: string | null
    cityCode: string | null
    latitude: number | null
    longitude: number | null
    rating: number | null
    isCurrentlyOpen: boolean | null
    queueEstimateMinutes: number | null
    updatedAt: Date | null
  }

  export type OutletSearchDocumentMaxAggregateOutputType = {
    id: string | null
    outletId: string | null
    merchantName: string | null
    locality: string | null
    city: string | null
    cityCode: string | null
    latitude: number | null
    longitude: number | null
    rating: number | null
    isCurrentlyOpen: boolean | null
    queueEstimateMinutes: number | null
    updatedAt: Date | null
  }

  export type OutletSearchDocumentCountAggregateOutputType = {
    id: number
    outletId: number
    merchantName: number
    locality: number
    city: number
    cityCode: number
    latitude: number
    longitude: number
    rating: number
    categoryTags: number
    isCurrentlyOpen: number
    queueEstimateMinutes: number
    updatedAt: number
    _all: number
  }


  export type OutletSearchDocumentAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    rating?: true
    queueEstimateMinutes?: true
  }

  export type OutletSearchDocumentSumAggregateInputType = {
    latitude?: true
    longitude?: true
    rating?: true
    queueEstimateMinutes?: true
  }

  export type OutletSearchDocumentMinAggregateInputType = {
    id?: true
    outletId?: true
    merchantName?: true
    locality?: true
    city?: true
    cityCode?: true
    latitude?: true
    longitude?: true
    rating?: true
    isCurrentlyOpen?: true
    queueEstimateMinutes?: true
    updatedAt?: true
  }

  export type OutletSearchDocumentMaxAggregateInputType = {
    id?: true
    outletId?: true
    merchantName?: true
    locality?: true
    city?: true
    cityCode?: true
    latitude?: true
    longitude?: true
    rating?: true
    isCurrentlyOpen?: true
    queueEstimateMinutes?: true
    updatedAt?: true
  }

  export type OutletSearchDocumentCountAggregateInputType = {
    id?: true
    outletId?: true
    merchantName?: true
    locality?: true
    city?: true
    cityCode?: true
    latitude?: true
    longitude?: true
    rating?: true
    categoryTags?: true
    isCurrentlyOpen?: true
    queueEstimateMinutes?: true
    updatedAt?: true
    _all?: true
  }

  export type OutletSearchDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutletSearchDocument to aggregate.
     */
    where?: OutletSearchDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletSearchDocuments to fetch.
     */
    orderBy?: OutletSearchDocumentOrderByWithRelationInput | OutletSearchDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutletSearchDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletSearchDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletSearchDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutletSearchDocuments
    **/
    _count?: true | OutletSearchDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutletSearchDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutletSearchDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutletSearchDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutletSearchDocumentMaxAggregateInputType
  }

  export type GetOutletSearchDocumentAggregateType<T extends OutletSearchDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateOutletSearchDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutletSearchDocument[P]>
      : GetScalarType<T[P], AggregateOutletSearchDocument[P]>
  }




  export type OutletSearchDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletSearchDocumentWhereInput
    orderBy?: OutletSearchDocumentOrderByWithAggregationInput | OutletSearchDocumentOrderByWithAggregationInput[]
    by: OutletSearchDocumentScalarFieldEnum[] | OutletSearchDocumentScalarFieldEnum
    having?: OutletSearchDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutletSearchDocumentCountAggregateInputType | true
    _avg?: OutletSearchDocumentAvgAggregateInputType
    _sum?: OutletSearchDocumentSumAggregateInputType
    _min?: OutletSearchDocumentMinAggregateInputType
    _max?: OutletSearchDocumentMaxAggregateInputType
  }

  export type OutletSearchDocumentGroupByOutputType = {
    id: string
    outletId: string
    merchantName: string
    locality: string
    city: string
    cityCode: string
    latitude: number
    longitude: number
    rating: number
    categoryTags: string[]
    isCurrentlyOpen: boolean
    queueEstimateMinutes: number
    updatedAt: Date
    _count: OutletSearchDocumentCountAggregateOutputType | null
    _avg: OutletSearchDocumentAvgAggregateOutputType | null
    _sum: OutletSearchDocumentSumAggregateOutputType | null
    _min: OutletSearchDocumentMinAggregateOutputType | null
    _max: OutletSearchDocumentMaxAggregateOutputType | null
  }

  type GetOutletSearchDocumentGroupByPayload<T extends OutletSearchDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutletSearchDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutletSearchDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutletSearchDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], OutletSearchDocumentGroupByOutputType[P]>
        }
      >
    >


  export type OutletSearchDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    merchantName?: boolean
    locality?: boolean
    city?: boolean
    cityCode?: boolean
    latitude?: boolean
    longitude?: boolean
    rating?: boolean
    categoryTags?: boolean
    isCurrentlyOpen?: boolean
    queueEstimateMinutes?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["outletSearchDocument"]>

  export type OutletSearchDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    merchantName?: boolean
    locality?: boolean
    city?: boolean
    cityCode?: boolean
    latitude?: boolean
    longitude?: boolean
    rating?: boolean
    categoryTags?: boolean
    isCurrentlyOpen?: boolean
    queueEstimateMinutes?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["outletSearchDocument"]>

  export type OutletSearchDocumentSelectScalar = {
    id?: boolean
    outletId?: boolean
    merchantName?: boolean
    locality?: boolean
    city?: boolean
    cityCode?: boolean
    latitude?: boolean
    longitude?: boolean
    rating?: boolean
    categoryTags?: boolean
    isCurrentlyOpen?: boolean
    queueEstimateMinutes?: boolean
    updatedAt?: boolean
  }


  export type $OutletSearchDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutletSearchDocument"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      outletId: string
      merchantName: string
      locality: string
      city: string
      cityCode: string
      latitude: number
      longitude: number
      rating: number
      categoryTags: string[]
      isCurrentlyOpen: boolean
      queueEstimateMinutes: number
      updatedAt: Date
    }, ExtArgs["result"]["outletSearchDocument"]>
    composites: {}
  }

  type OutletSearchDocumentGetPayload<S extends boolean | null | undefined | OutletSearchDocumentDefaultArgs> = $Result.GetResult<Prisma.$OutletSearchDocumentPayload, S>

  type OutletSearchDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OutletSearchDocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OutletSearchDocumentCountAggregateInputType | true
    }

  export interface OutletSearchDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutletSearchDocument'], meta: { name: 'OutletSearchDocument' } }
    /**
     * Find zero or one OutletSearchDocument that matches the filter.
     * @param {OutletSearchDocumentFindUniqueArgs} args - Arguments to find a OutletSearchDocument
     * @example
     * // Get one OutletSearchDocument
     * const outletSearchDocument = await prisma.outletSearchDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutletSearchDocumentFindUniqueArgs>(args: SelectSubset<T, OutletSearchDocumentFindUniqueArgs<ExtArgs>>): Prisma__OutletSearchDocumentClient<$Result.GetResult<Prisma.$OutletSearchDocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OutletSearchDocument that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OutletSearchDocumentFindUniqueOrThrowArgs} args - Arguments to find a OutletSearchDocument
     * @example
     * // Get one OutletSearchDocument
     * const outletSearchDocument = await prisma.outletSearchDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutletSearchDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, OutletSearchDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutletSearchDocumentClient<$Result.GetResult<Prisma.$OutletSearchDocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OutletSearchDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletSearchDocumentFindFirstArgs} args - Arguments to find a OutletSearchDocument
     * @example
     * // Get one OutletSearchDocument
     * const outletSearchDocument = await prisma.outletSearchDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutletSearchDocumentFindFirstArgs>(args?: SelectSubset<T, OutletSearchDocumentFindFirstArgs<ExtArgs>>): Prisma__OutletSearchDocumentClient<$Result.GetResult<Prisma.$OutletSearchDocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OutletSearchDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletSearchDocumentFindFirstOrThrowArgs} args - Arguments to find a OutletSearchDocument
     * @example
     * // Get one OutletSearchDocument
     * const outletSearchDocument = await prisma.outletSearchDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutletSearchDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, OutletSearchDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutletSearchDocumentClient<$Result.GetResult<Prisma.$OutletSearchDocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OutletSearchDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletSearchDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutletSearchDocuments
     * const outletSearchDocuments = await prisma.outletSearchDocument.findMany()
     * 
     * // Get first 10 OutletSearchDocuments
     * const outletSearchDocuments = await prisma.outletSearchDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outletSearchDocumentWithIdOnly = await prisma.outletSearchDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutletSearchDocumentFindManyArgs>(args?: SelectSubset<T, OutletSearchDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletSearchDocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OutletSearchDocument.
     * @param {OutletSearchDocumentCreateArgs} args - Arguments to create a OutletSearchDocument.
     * @example
     * // Create one OutletSearchDocument
     * const OutletSearchDocument = await prisma.outletSearchDocument.create({
     *   data: {
     *     // ... data to create a OutletSearchDocument
     *   }
     * })
     * 
     */
    create<T extends OutletSearchDocumentCreateArgs>(args: SelectSubset<T, OutletSearchDocumentCreateArgs<ExtArgs>>): Prisma__OutletSearchDocumentClient<$Result.GetResult<Prisma.$OutletSearchDocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OutletSearchDocuments.
     * @param {OutletSearchDocumentCreateManyArgs} args - Arguments to create many OutletSearchDocuments.
     * @example
     * // Create many OutletSearchDocuments
     * const outletSearchDocument = await prisma.outletSearchDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutletSearchDocumentCreateManyArgs>(args?: SelectSubset<T, OutletSearchDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutletSearchDocuments and returns the data saved in the database.
     * @param {OutletSearchDocumentCreateManyAndReturnArgs} args - Arguments to create many OutletSearchDocuments.
     * @example
     * // Create many OutletSearchDocuments
     * const outletSearchDocument = await prisma.outletSearchDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutletSearchDocuments and only return the `id`
     * const outletSearchDocumentWithIdOnly = await prisma.outletSearchDocument.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutletSearchDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, OutletSearchDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletSearchDocumentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OutletSearchDocument.
     * @param {OutletSearchDocumentDeleteArgs} args - Arguments to delete one OutletSearchDocument.
     * @example
     * // Delete one OutletSearchDocument
     * const OutletSearchDocument = await prisma.outletSearchDocument.delete({
     *   where: {
     *     // ... filter to delete one OutletSearchDocument
     *   }
     * })
     * 
     */
    delete<T extends OutletSearchDocumentDeleteArgs>(args: SelectSubset<T, OutletSearchDocumentDeleteArgs<ExtArgs>>): Prisma__OutletSearchDocumentClient<$Result.GetResult<Prisma.$OutletSearchDocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OutletSearchDocument.
     * @param {OutletSearchDocumentUpdateArgs} args - Arguments to update one OutletSearchDocument.
     * @example
     * // Update one OutletSearchDocument
     * const outletSearchDocument = await prisma.outletSearchDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutletSearchDocumentUpdateArgs>(args: SelectSubset<T, OutletSearchDocumentUpdateArgs<ExtArgs>>): Prisma__OutletSearchDocumentClient<$Result.GetResult<Prisma.$OutletSearchDocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OutletSearchDocuments.
     * @param {OutletSearchDocumentDeleteManyArgs} args - Arguments to filter OutletSearchDocuments to delete.
     * @example
     * // Delete a few OutletSearchDocuments
     * const { count } = await prisma.outletSearchDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutletSearchDocumentDeleteManyArgs>(args?: SelectSubset<T, OutletSearchDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutletSearchDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletSearchDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutletSearchDocuments
     * const outletSearchDocument = await prisma.outletSearchDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutletSearchDocumentUpdateManyArgs>(args: SelectSubset<T, OutletSearchDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OutletSearchDocument.
     * @param {OutletSearchDocumentUpsertArgs} args - Arguments to update or create a OutletSearchDocument.
     * @example
     * // Update or create a OutletSearchDocument
     * const outletSearchDocument = await prisma.outletSearchDocument.upsert({
     *   create: {
     *     // ... data to create a OutletSearchDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutletSearchDocument we want to update
     *   }
     * })
     */
    upsert<T extends OutletSearchDocumentUpsertArgs>(args: SelectSubset<T, OutletSearchDocumentUpsertArgs<ExtArgs>>): Prisma__OutletSearchDocumentClient<$Result.GetResult<Prisma.$OutletSearchDocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OutletSearchDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletSearchDocumentCountArgs} args - Arguments to filter OutletSearchDocuments to count.
     * @example
     * // Count the number of OutletSearchDocuments
     * const count = await prisma.outletSearchDocument.count({
     *   where: {
     *     // ... the filter for the OutletSearchDocuments we want to count
     *   }
     * })
    **/
    count<T extends OutletSearchDocumentCountArgs>(
      args?: Subset<T, OutletSearchDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutletSearchDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutletSearchDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletSearchDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutletSearchDocumentAggregateArgs>(args: Subset<T, OutletSearchDocumentAggregateArgs>): Prisma.PrismaPromise<GetOutletSearchDocumentAggregateType<T>>

    /**
     * Group by OutletSearchDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletSearchDocumentGroupByArgs} args - Group by arguments.
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
      T extends OutletSearchDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutletSearchDocumentGroupByArgs['orderBy'] }
        : { orderBy?: OutletSearchDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutletSearchDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutletSearchDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutletSearchDocument model
   */
  readonly fields: OutletSearchDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutletSearchDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutletSearchDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OutletSearchDocument model
   */ 
  interface OutletSearchDocumentFieldRefs {
    readonly id: FieldRef<"OutletSearchDocument", 'String'>
    readonly outletId: FieldRef<"OutletSearchDocument", 'String'>
    readonly merchantName: FieldRef<"OutletSearchDocument", 'String'>
    readonly locality: FieldRef<"OutletSearchDocument", 'String'>
    readonly city: FieldRef<"OutletSearchDocument", 'String'>
    readonly cityCode: FieldRef<"OutletSearchDocument", 'String'>
    readonly latitude: FieldRef<"OutletSearchDocument", 'Float'>
    readonly longitude: FieldRef<"OutletSearchDocument", 'Float'>
    readonly rating: FieldRef<"OutletSearchDocument", 'Float'>
    readonly categoryTags: FieldRef<"OutletSearchDocument", 'String[]'>
    readonly isCurrentlyOpen: FieldRef<"OutletSearchDocument", 'Boolean'>
    readonly queueEstimateMinutes: FieldRef<"OutletSearchDocument", 'Int'>
    readonly updatedAt: FieldRef<"OutletSearchDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OutletSearchDocument findUnique
   */
  export type OutletSearchDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletSearchDocument
     */
    select?: OutletSearchDocumentSelect<ExtArgs> | null
    /**
     * Filter, which OutletSearchDocument to fetch.
     */
    where: OutletSearchDocumentWhereUniqueInput
  }

  /**
   * OutletSearchDocument findUniqueOrThrow
   */
  export type OutletSearchDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletSearchDocument
     */
    select?: OutletSearchDocumentSelect<ExtArgs> | null
    /**
     * Filter, which OutletSearchDocument to fetch.
     */
    where: OutletSearchDocumentWhereUniqueInput
  }

  /**
   * OutletSearchDocument findFirst
   */
  export type OutletSearchDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletSearchDocument
     */
    select?: OutletSearchDocumentSelect<ExtArgs> | null
    /**
     * Filter, which OutletSearchDocument to fetch.
     */
    where?: OutletSearchDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletSearchDocuments to fetch.
     */
    orderBy?: OutletSearchDocumentOrderByWithRelationInput | OutletSearchDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutletSearchDocuments.
     */
    cursor?: OutletSearchDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletSearchDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletSearchDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutletSearchDocuments.
     */
    distinct?: OutletSearchDocumentScalarFieldEnum | OutletSearchDocumentScalarFieldEnum[]
  }

  /**
   * OutletSearchDocument findFirstOrThrow
   */
  export type OutletSearchDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletSearchDocument
     */
    select?: OutletSearchDocumentSelect<ExtArgs> | null
    /**
     * Filter, which OutletSearchDocument to fetch.
     */
    where?: OutletSearchDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletSearchDocuments to fetch.
     */
    orderBy?: OutletSearchDocumentOrderByWithRelationInput | OutletSearchDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutletSearchDocuments.
     */
    cursor?: OutletSearchDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletSearchDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletSearchDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutletSearchDocuments.
     */
    distinct?: OutletSearchDocumentScalarFieldEnum | OutletSearchDocumentScalarFieldEnum[]
  }

  /**
   * OutletSearchDocument findMany
   */
  export type OutletSearchDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletSearchDocument
     */
    select?: OutletSearchDocumentSelect<ExtArgs> | null
    /**
     * Filter, which OutletSearchDocuments to fetch.
     */
    where?: OutletSearchDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletSearchDocuments to fetch.
     */
    orderBy?: OutletSearchDocumentOrderByWithRelationInput | OutletSearchDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutletSearchDocuments.
     */
    cursor?: OutletSearchDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletSearchDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletSearchDocuments.
     */
    skip?: number
    distinct?: OutletSearchDocumentScalarFieldEnum | OutletSearchDocumentScalarFieldEnum[]
  }

  /**
   * OutletSearchDocument create
   */
  export type OutletSearchDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletSearchDocument
     */
    select?: OutletSearchDocumentSelect<ExtArgs> | null
    /**
     * The data needed to create a OutletSearchDocument.
     */
    data: XOR<OutletSearchDocumentCreateInput, OutletSearchDocumentUncheckedCreateInput>
  }

  /**
   * OutletSearchDocument createMany
   */
  export type OutletSearchDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutletSearchDocuments.
     */
    data: OutletSearchDocumentCreateManyInput | OutletSearchDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutletSearchDocument createManyAndReturn
   */
  export type OutletSearchDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletSearchDocument
     */
    select?: OutletSearchDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OutletSearchDocuments.
     */
    data: OutletSearchDocumentCreateManyInput | OutletSearchDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutletSearchDocument update
   */
  export type OutletSearchDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletSearchDocument
     */
    select?: OutletSearchDocumentSelect<ExtArgs> | null
    /**
     * The data needed to update a OutletSearchDocument.
     */
    data: XOR<OutletSearchDocumentUpdateInput, OutletSearchDocumentUncheckedUpdateInput>
    /**
     * Choose, which OutletSearchDocument to update.
     */
    where: OutletSearchDocumentWhereUniqueInput
  }

  /**
   * OutletSearchDocument updateMany
   */
  export type OutletSearchDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutletSearchDocuments.
     */
    data: XOR<OutletSearchDocumentUpdateManyMutationInput, OutletSearchDocumentUncheckedUpdateManyInput>
    /**
     * Filter which OutletSearchDocuments to update
     */
    where?: OutletSearchDocumentWhereInput
  }

  /**
   * OutletSearchDocument upsert
   */
  export type OutletSearchDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletSearchDocument
     */
    select?: OutletSearchDocumentSelect<ExtArgs> | null
    /**
     * The filter to search for the OutletSearchDocument to update in case it exists.
     */
    where: OutletSearchDocumentWhereUniqueInput
    /**
     * In case the OutletSearchDocument found by the `where` argument doesn't exist, create a new OutletSearchDocument with this data.
     */
    create: XOR<OutletSearchDocumentCreateInput, OutletSearchDocumentUncheckedCreateInput>
    /**
     * In case the OutletSearchDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutletSearchDocumentUpdateInput, OutletSearchDocumentUncheckedUpdateInput>
  }

  /**
   * OutletSearchDocument delete
   */
  export type OutletSearchDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletSearchDocument
     */
    select?: OutletSearchDocumentSelect<ExtArgs> | null
    /**
     * Filter which OutletSearchDocument to delete.
     */
    where: OutletSearchDocumentWhereUniqueInput
  }

  /**
   * OutletSearchDocument deleteMany
   */
  export type OutletSearchDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutletSearchDocuments to delete
     */
    where?: OutletSearchDocumentWhereInput
  }

  /**
   * OutletSearchDocument without action
   */
  export type OutletSearchDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletSearchDocument
     */
    select?: OutletSearchDocumentSelect<ExtArgs> | null
  }


  /**
   * Model AvailabilityProjection
   */

  export type AggregateAvailabilityProjection = {
    _count: AvailabilityProjectionCountAggregateOutputType | null
    _min: AvailabilityProjectionMinAggregateOutputType | null
    _max: AvailabilityProjectionMaxAggregateOutputType | null
  }

  export type AvailabilityProjectionMinAggregateOutputType = {
    id: string | null
    outletId: string | null
    hasActiveStock: boolean | null
    nextSlotTime: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityProjectionMaxAggregateOutputType = {
    id: string | null
    outletId: string | null
    hasActiveStock: boolean | null
    nextSlotTime: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityProjectionCountAggregateOutputType = {
    id: number
    outletId: number
    hasActiveStock: number
    nextSlotTime: number
    updatedAt: number
    _all: number
  }


  export type AvailabilityProjectionMinAggregateInputType = {
    id?: true
    outletId?: true
    hasActiveStock?: true
    nextSlotTime?: true
    updatedAt?: true
  }

  export type AvailabilityProjectionMaxAggregateInputType = {
    id?: true
    outletId?: true
    hasActiveStock?: true
    nextSlotTime?: true
    updatedAt?: true
  }

  export type AvailabilityProjectionCountAggregateInputType = {
    id?: true
    outletId?: true
    hasActiveStock?: true
    nextSlotTime?: true
    updatedAt?: true
    _all?: true
  }

  export type AvailabilityProjectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityProjection to aggregate.
     */
    where?: AvailabilityProjectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityProjections to fetch.
     */
    orderBy?: AvailabilityProjectionOrderByWithRelationInput | AvailabilityProjectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityProjectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityProjections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityProjections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilityProjections
    **/
    _count?: true | AvailabilityProjectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityProjectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityProjectionMaxAggregateInputType
  }

  export type GetAvailabilityProjectionAggregateType<T extends AvailabilityProjectionAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilityProjection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilityProjection[P]>
      : GetScalarType<T[P], AggregateAvailabilityProjection[P]>
  }




  export type AvailabilityProjectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityProjectionWhereInput
    orderBy?: AvailabilityProjectionOrderByWithAggregationInput | AvailabilityProjectionOrderByWithAggregationInput[]
    by: AvailabilityProjectionScalarFieldEnum[] | AvailabilityProjectionScalarFieldEnum
    having?: AvailabilityProjectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityProjectionCountAggregateInputType | true
    _min?: AvailabilityProjectionMinAggregateInputType
    _max?: AvailabilityProjectionMaxAggregateInputType
  }

  export type AvailabilityProjectionGroupByOutputType = {
    id: string
    outletId: string
    hasActiveStock: boolean
    nextSlotTime: Date | null
    updatedAt: Date
    _count: AvailabilityProjectionCountAggregateOutputType | null
    _min: AvailabilityProjectionMinAggregateOutputType | null
    _max: AvailabilityProjectionMaxAggregateOutputType | null
  }

  type GetAvailabilityProjectionGroupByPayload<T extends AvailabilityProjectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityProjectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityProjectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityProjectionGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityProjectionGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilityProjectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    hasActiveStock?: boolean
    nextSlotTime?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["availabilityProjection"]>

  export type AvailabilityProjectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    hasActiveStock?: boolean
    nextSlotTime?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["availabilityProjection"]>

  export type AvailabilityProjectionSelectScalar = {
    id?: boolean
    outletId?: boolean
    hasActiveStock?: boolean
    nextSlotTime?: boolean
    updatedAt?: boolean
  }


  export type $AvailabilityProjectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilityProjection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      outletId: string
      hasActiveStock: boolean
      nextSlotTime: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["availabilityProjection"]>
    composites: {}
  }

  type AvailabilityProjectionGetPayload<S extends boolean | null | undefined | AvailabilityProjectionDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityProjectionPayload, S>

  type AvailabilityProjectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvailabilityProjectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvailabilityProjectionCountAggregateInputType | true
    }

  export interface AvailabilityProjectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilityProjection'], meta: { name: 'AvailabilityProjection' } }
    /**
     * Find zero or one AvailabilityProjection that matches the filter.
     * @param {AvailabilityProjectionFindUniqueArgs} args - Arguments to find a AvailabilityProjection
     * @example
     * // Get one AvailabilityProjection
     * const availabilityProjection = await prisma.availabilityProjection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityProjectionFindUniqueArgs>(args: SelectSubset<T, AvailabilityProjectionFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityProjectionClient<$Result.GetResult<Prisma.$AvailabilityProjectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AvailabilityProjection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AvailabilityProjectionFindUniqueOrThrowArgs} args - Arguments to find a AvailabilityProjection
     * @example
     * // Get one AvailabilityProjection
     * const availabilityProjection = await prisma.availabilityProjection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityProjectionFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityProjectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityProjectionClient<$Result.GetResult<Prisma.$AvailabilityProjectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AvailabilityProjection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityProjectionFindFirstArgs} args - Arguments to find a AvailabilityProjection
     * @example
     * // Get one AvailabilityProjection
     * const availabilityProjection = await prisma.availabilityProjection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityProjectionFindFirstArgs>(args?: SelectSubset<T, AvailabilityProjectionFindFirstArgs<ExtArgs>>): Prisma__AvailabilityProjectionClient<$Result.GetResult<Prisma.$AvailabilityProjectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AvailabilityProjection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityProjectionFindFirstOrThrowArgs} args - Arguments to find a AvailabilityProjection
     * @example
     * // Get one AvailabilityProjection
     * const availabilityProjection = await prisma.availabilityProjection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityProjectionFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityProjectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityProjectionClient<$Result.GetResult<Prisma.$AvailabilityProjectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AvailabilityProjections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityProjectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilityProjections
     * const availabilityProjections = await prisma.availabilityProjection.findMany()
     * 
     * // Get first 10 AvailabilityProjections
     * const availabilityProjections = await prisma.availabilityProjection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityProjectionWithIdOnly = await prisma.availabilityProjection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityProjectionFindManyArgs>(args?: SelectSubset<T, AvailabilityProjectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityProjectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AvailabilityProjection.
     * @param {AvailabilityProjectionCreateArgs} args - Arguments to create a AvailabilityProjection.
     * @example
     * // Create one AvailabilityProjection
     * const AvailabilityProjection = await prisma.availabilityProjection.create({
     *   data: {
     *     // ... data to create a AvailabilityProjection
     *   }
     * })
     * 
     */
    create<T extends AvailabilityProjectionCreateArgs>(args: SelectSubset<T, AvailabilityProjectionCreateArgs<ExtArgs>>): Prisma__AvailabilityProjectionClient<$Result.GetResult<Prisma.$AvailabilityProjectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AvailabilityProjections.
     * @param {AvailabilityProjectionCreateManyArgs} args - Arguments to create many AvailabilityProjections.
     * @example
     * // Create many AvailabilityProjections
     * const availabilityProjection = await prisma.availabilityProjection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityProjectionCreateManyArgs>(args?: SelectSubset<T, AvailabilityProjectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilityProjections and returns the data saved in the database.
     * @param {AvailabilityProjectionCreateManyAndReturnArgs} args - Arguments to create many AvailabilityProjections.
     * @example
     * // Create many AvailabilityProjections
     * const availabilityProjection = await prisma.availabilityProjection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilityProjections and only return the `id`
     * const availabilityProjectionWithIdOnly = await prisma.availabilityProjection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityProjectionCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityProjectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityProjectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AvailabilityProjection.
     * @param {AvailabilityProjectionDeleteArgs} args - Arguments to delete one AvailabilityProjection.
     * @example
     * // Delete one AvailabilityProjection
     * const AvailabilityProjection = await prisma.availabilityProjection.delete({
     *   where: {
     *     // ... filter to delete one AvailabilityProjection
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityProjectionDeleteArgs>(args: SelectSubset<T, AvailabilityProjectionDeleteArgs<ExtArgs>>): Prisma__AvailabilityProjectionClient<$Result.GetResult<Prisma.$AvailabilityProjectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AvailabilityProjection.
     * @param {AvailabilityProjectionUpdateArgs} args - Arguments to update one AvailabilityProjection.
     * @example
     * // Update one AvailabilityProjection
     * const availabilityProjection = await prisma.availabilityProjection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityProjectionUpdateArgs>(args: SelectSubset<T, AvailabilityProjectionUpdateArgs<ExtArgs>>): Prisma__AvailabilityProjectionClient<$Result.GetResult<Prisma.$AvailabilityProjectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AvailabilityProjections.
     * @param {AvailabilityProjectionDeleteManyArgs} args - Arguments to filter AvailabilityProjections to delete.
     * @example
     * // Delete a few AvailabilityProjections
     * const { count } = await prisma.availabilityProjection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityProjectionDeleteManyArgs>(args?: SelectSubset<T, AvailabilityProjectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilityProjections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityProjectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilityProjections
     * const availabilityProjection = await prisma.availabilityProjection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityProjectionUpdateManyArgs>(args: SelectSubset<T, AvailabilityProjectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AvailabilityProjection.
     * @param {AvailabilityProjectionUpsertArgs} args - Arguments to update or create a AvailabilityProjection.
     * @example
     * // Update or create a AvailabilityProjection
     * const availabilityProjection = await prisma.availabilityProjection.upsert({
     *   create: {
     *     // ... data to create a AvailabilityProjection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilityProjection we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityProjectionUpsertArgs>(args: SelectSubset<T, AvailabilityProjectionUpsertArgs<ExtArgs>>): Prisma__AvailabilityProjectionClient<$Result.GetResult<Prisma.$AvailabilityProjectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AvailabilityProjections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityProjectionCountArgs} args - Arguments to filter AvailabilityProjections to count.
     * @example
     * // Count the number of AvailabilityProjections
     * const count = await prisma.availabilityProjection.count({
     *   where: {
     *     // ... the filter for the AvailabilityProjections we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityProjectionCountArgs>(
      args?: Subset<T, AvailabilityProjectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityProjectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilityProjection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityProjectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityProjectionAggregateArgs>(args: Subset<T, AvailabilityProjectionAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityProjectionAggregateType<T>>

    /**
     * Group by AvailabilityProjection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityProjectionGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityProjectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityProjectionGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityProjectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityProjectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityProjectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilityProjection model
   */
  readonly fields: AvailabilityProjectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilityProjection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityProjectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AvailabilityProjection model
   */ 
  interface AvailabilityProjectionFieldRefs {
    readonly id: FieldRef<"AvailabilityProjection", 'String'>
    readonly outletId: FieldRef<"AvailabilityProjection", 'String'>
    readonly hasActiveStock: FieldRef<"AvailabilityProjection", 'Boolean'>
    readonly nextSlotTime: FieldRef<"AvailabilityProjection", 'DateTime'>
    readonly updatedAt: FieldRef<"AvailabilityProjection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilityProjection findUnique
   */
  export type AvailabilityProjectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityProjection
     */
    select?: AvailabilityProjectionSelect<ExtArgs> | null
    /**
     * Filter, which AvailabilityProjection to fetch.
     */
    where: AvailabilityProjectionWhereUniqueInput
  }

  /**
   * AvailabilityProjection findUniqueOrThrow
   */
  export type AvailabilityProjectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityProjection
     */
    select?: AvailabilityProjectionSelect<ExtArgs> | null
    /**
     * Filter, which AvailabilityProjection to fetch.
     */
    where: AvailabilityProjectionWhereUniqueInput
  }

  /**
   * AvailabilityProjection findFirst
   */
  export type AvailabilityProjectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityProjection
     */
    select?: AvailabilityProjectionSelect<ExtArgs> | null
    /**
     * Filter, which AvailabilityProjection to fetch.
     */
    where?: AvailabilityProjectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityProjections to fetch.
     */
    orderBy?: AvailabilityProjectionOrderByWithRelationInput | AvailabilityProjectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityProjections.
     */
    cursor?: AvailabilityProjectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityProjections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityProjections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityProjections.
     */
    distinct?: AvailabilityProjectionScalarFieldEnum | AvailabilityProjectionScalarFieldEnum[]
  }

  /**
   * AvailabilityProjection findFirstOrThrow
   */
  export type AvailabilityProjectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityProjection
     */
    select?: AvailabilityProjectionSelect<ExtArgs> | null
    /**
     * Filter, which AvailabilityProjection to fetch.
     */
    where?: AvailabilityProjectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityProjections to fetch.
     */
    orderBy?: AvailabilityProjectionOrderByWithRelationInput | AvailabilityProjectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityProjections.
     */
    cursor?: AvailabilityProjectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityProjections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityProjections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityProjections.
     */
    distinct?: AvailabilityProjectionScalarFieldEnum | AvailabilityProjectionScalarFieldEnum[]
  }

  /**
   * AvailabilityProjection findMany
   */
  export type AvailabilityProjectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityProjection
     */
    select?: AvailabilityProjectionSelect<ExtArgs> | null
    /**
     * Filter, which AvailabilityProjections to fetch.
     */
    where?: AvailabilityProjectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityProjections to fetch.
     */
    orderBy?: AvailabilityProjectionOrderByWithRelationInput | AvailabilityProjectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilityProjections.
     */
    cursor?: AvailabilityProjectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityProjections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityProjections.
     */
    skip?: number
    distinct?: AvailabilityProjectionScalarFieldEnum | AvailabilityProjectionScalarFieldEnum[]
  }

  /**
   * AvailabilityProjection create
   */
  export type AvailabilityProjectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityProjection
     */
    select?: AvailabilityProjectionSelect<ExtArgs> | null
    /**
     * The data needed to create a AvailabilityProjection.
     */
    data: XOR<AvailabilityProjectionCreateInput, AvailabilityProjectionUncheckedCreateInput>
  }

  /**
   * AvailabilityProjection createMany
   */
  export type AvailabilityProjectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilityProjections.
     */
    data: AvailabilityProjectionCreateManyInput | AvailabilityProjectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailabilityProjection createManyAndReturn
   */
  export type AvailabilityProjectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityProjection
     */
    select?: AvailabilityProjectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AvailabilityProjections.
     */
    data: AvailabilityProjectionCreateManyInput | AvailabilityProjectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailabilityProjection update
   */
  export type AvailabilityProjectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityProjection
     */
    select?: AvailabilityProjectionSelect<ExtArgs> | null
    /**
     * The data needed to update a AvailabilityProjection.
     */
    data: XOR<AvailabilityProjectionUpdateInput, AvailabilityProjectionUncheckedUpdateInput>
    /**
     * Choose, which AvailabilityProjection to update.
     */
    where: AvailabilityProjectionWhereUniqueInput
  }

  /**
   * AvailabilityProjection updateMany
   */
  export type AvailabilityProjectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilityProjections.
     */
    data: XOR<AvailabilityProjectionUpdateManyMutationInput, AvailabilityProjectionUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilityProjections to update
     */
    where?: AvailabilityProjectionWhereInput
  }

  /**
   * AvailabilityProjection upsert
   */
  export type AvailabilityProjectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityProjection
     */
    select?: AvailabilityProjectionSelect<ExtArgs> | null
    /**
     * The filter to search for the AvailabilityProjection to update in case it exists.
     */
    where: AvailabilityProjectionWhereUniqueInput
    /**
     * In case the AvailabilityProjection found by the `where` argument doesn't exist, create a new AvailabilityProjection with this data.
     */
    create: XOR<AvailabilityProjectionCreateInput, AvailabilityProjectionUncheckedCreateInput>
    /**
     * In case the AvailabilityProjection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityProjectionUpdateInput, AvailabilityProjectionUncheckedUpdateInput>
  }

  /**
   * AvailabilityProjection delete
   */
  export type AvailabilityProjectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityProjection
     */
    select?: AvailabilityProjectionSelect<ExtArgs> | null
    /**
     * Filter which AvailabilityProjection to delete.
     */
    where: AvailabilityProjectionWhereUniqueInput
  }

  /**
   * AvailabilityProjection deleteMany
   */
  export type AvailabilityProjectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityProjections to delete
     */
    where?: AvailabilityProjectionWhereInput
  }

  /**
   * AvailabilityProjection without action
   */
  export type AvailabilityProjectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityProjection
     */
    select?: AvailabilityProjectionSelect<ExtArgs> | null
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


  export const OutletSearchDocumentScalarFieldEnum: {
    id: 'id',
    outletId: 'outletId',
    merchantName: 'merchantName',
    locality: 'locality',
    city: 'city',
    cityCode: 'cityCode',
    latitude: 'latitude',
    longitude: 'longitude',
    rating: 'rating',
    categoryTags: 'categoryTags',
    isCurrentlyOpen: 'isCurrentlyOpen',
    queueEstimateMinutes: 'queueEstimateMinutes',
    updatedAt: 'updatedAt'
  };

  export type OutletSearchDocumentScalarFieldEnum = (typeof OutletSearchDocumentScalarFieldEnum)[keyof typeof OutletSearchDocumentScalarFieldEnum]


  export const AvailabilityProjectionScalarFieldEnum: {
    id: 'id',
    outletId: 'outletId',
    hasActiveStock: 'hasActiveStock',
    nextSlotTime: 'nextSlotTime',
    updatedAt: 'updatedAt'
  };

  export type AvailabilityProjectionScalarFieldEnum = (typeof AvailabilityProjectionScalarFieldEnum)[keyof typeof AvailabilityProjectionScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type OutletSearchDocumentWhereInput = {
    AND?: OutletSearchDocumentWhereInput | OutletSearchDocumentWhereInput[]
    OR?: OutletSearchDocumentWhereInput[]
    NOT?: OutletSearchDocumentWhereInput | OutletSearchDocumentWhereInput[]
    id?: StringFilter<"OutletSearchDocument"> | string
    outletId?: StringFilter<"OutletSearchDocument"> | string
    merchantName?: StringFilter<"OutletSearchDocument"> | string
    locality?: StringFilter<"OutletSearchDocument"> | string
    city?: StringFilter<"OutletSearchDocument"> | string
    cityCode?: StringFilter<"OutletSearchDocument"> | string
    latitude?: FloatFilter<"OutletSearchDocument"> | number
    longitude?: FloatFilter<"OutletSearchDocument"> | number
    rating?: FloatFilter<"OutletSearchDocument"> | number
    categoryTags?: StringNullableListFilter<"OutletSearchDocument">
    isCurrentlyOpen?: BoolFilter<"OutletSearchDocument"> | boolean
    queueEstimateMinutes?: IntFilter<"OutletSearchDocument"> | number
    updatedAt?: DateTimeFilter<"OutletSearchDocument"> | Date | string
  }

  export type OutletSearchDocumentOrderByWithRelationInput = {
    id?: SortOrder
    outletId?: SortOrder
    merchantName?: SortOrder
    locality?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    categoryTags?: SortOrder
    isCurrentlyOpen?: SortOrder
    queueEstimateMinutes?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutletSearchDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    outletId?: string
    AND?: OutletSearchDocumentWhereInput | OutletSearchDocumentWhereInput[]
    OR?: OutletSearchDocumentWhereInput[]
    NOT?: OutletSearchDocumentWhereInput | OutletSearchDocumentWhereInput[]
    merchantName?: StringFilter<"OutletSearchDocument"> | string
    locality?: StringFilter<"OutletSearchDocument"> | string
    city?: StringFilter<"OutletSearchDocument"> | string
    cityCode?: StringFilter<"OutletSearchDocument"> | string
    latitude?: FloatFilter<"OutletSearchDocument"> | number
    longitude?: FloatFilter<"OutletSearchDocument"> | number
    rating?: FloatFilter<"OutletSearchDocument"> | number
    categoryTags?: StringNullableListFilter<"OutletSearchDocument">
    isCurrentlyOpen?: BoolFilter<"OutletSearchDocument"> | boolean
    queueEstimateMinutes?: IntFilter<"OutletSearchDocument"> | number
    updatedAt?: DateTimeFilter<"OutletSearchDocument"> | Date | string
  }, "id" | "outletId">

  export type OutletSearchDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    outletId?: SortOrder
    merchantName?: SortOrder
    locality?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    categoryTags?: SortOrder
    isCurrentlyOpen?: SortOrder
    queueEstimateMinutes?: SortOrder
    updatedAt?: SortOrder
    _count?: OutletSearchDocumentCountOrderByAggregateInput
    _avg?: OutletSearchDocumentAvgOrderByAggregateInput
    _max?: OutletSearchDocumentMaxOrderByAggregateInput
    _min?: OutletSearchDocumentMinOrderByAggregateInput
    _sum?: OutletSearchDocumentSumOrderByAggregateInput
  }

  export type OutletSearchDocumentScalarWhereWithAggregatesInput = {
    AND?: OutletSearchDocumentScalarWhereWithAggregatesInput | OutletSearchDocumentScalarWhereWithAggregatesInput[]
    OR?: OutletSearchDocumentScalarWhereWithAggregatesInput[]
    NOT?: OutletSearchDocumentScalarWhereWithAggregatesInput | OutletSearchDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutletSearchDocument"> | string
    outletId?: StringWithAggregatesFilter<"OutletSearchDocument"> | string
    merchantName?: StringWithAggregatesFilter<"OutletSearchDocument"> | string
    locality?: StringWithAggregatesFilter<"OutletSearchDocument"> | string
    city?: StringWithAggregatesFilter<"OutletSearchDocument"> | string
    cityCode?: StringWithAggregatesFilter<"OutletSearchDocument"> | string
    latitude?: FloatWithAggregatesFilter<"OutletSearchDocument"> | number
    longitude?: FloatWithAggregatesFilter<"OutletSearchDocument"> | number
    rating?: FloatWithAggregatesFilter<"OutletSearchDocument"> | number
    categoryTags?: StringNullableListFilter<"OutletSearchDocument">
    isCurrentlyOpen?: BoolWithAggregatesFilter<"OutletSearchDocument"> | boolean
    queueEstimateMinutes?: IntWithAggregatesFilter<"OutletSearchDocument"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"OutletSearchDocument"> | Date | string
  }

  export type AvailabilityProjectionWhereInput = {
    AND?: AvailabilityProjectionWhereInput | AvailabilityProjectionWhereInput[]
    OR?: AvailabilityProjectionWhereInput[]
    NOT?: AvailabilityProjectionWhereInput | AvailabilityProjectionWhereInput[]
    id?: StringFilter<"AvailabilityProjection"> | string
    outletId?: StringFilter<"AvailabilityProjection"> | string
    hasActiveStock?: BoolFilter<"AvailabilityProjection"> | boolean
    nextSlotTime?: DateTimeNullableFilter<"AvailabilityProjection"> | Date | string | null
    updatedAt?: DateTimeFilter<"AvailabilityProjection"> | Date | string
  }

  export type AvailabilityProjectionOrderByWithRelationInput = {
    id?: SortOrder
    outletId?: SortOrder
    hasActiveStock?: SortOrder
    nextSlotTime?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityProjectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    outletId?: string
    AND?: AvailabilityProjectionWhereInput | AvailabilityProjectionWhereInput[]
    OR?: AvailabilityProjectionWhereInput[]
    NOT?: AvailabilityProjectionWhereInput | AvailabilityProjectionWhereInput[]
    hasActiveStock?: BoolFilter<"AvailabilityProjection"> | boolean
    nextSlotTime?: DateTimeNullableFilter<"AvailabilityProjection"> | Date | string | null
    updatedAt?: DateTimeFilter<"AvailabilityProjection"> | Date | string
  }, "id" | "outletId">

  export type AvailabilityProjectionOrderByWithAggregationInput = {
    id?: SortOrder
    outletId?: SortOrder
    hasActiveStock?: SortOrder
    nextSlotTime?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: AvailabilityProjectionCountOrderByAggregateInput
    _max?: AvailabilityProjectionMaxOrderByAggregateInput
    _min?: AvailabilityProjectionMinOrderByAggregateInput
  }

  export type AvailabilityProjectionScalarWhereWithAggregatesInput = {
    AND?: AvailabilityProjectionScalarWhereWithAggregatesInput | AvailabilityProjectionScalarWhereWithAggregatesInput[]
    OR?: AvailabilityProjectionScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityProjectionScalarWhereWithAggregatesInput | AvailabilityProjectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailabilityProjection"> | string
    outletId?: StringWithAggregatesFilter<"AvailabilityProjection"> | string
    hasActiveStock?: BoolWithAggregatesFilter<"AvailabilityProjection"> | boolean
    nextSlotTime?: DateTimeNullableWithAggregatesFilter<"AvailabilityProjection"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"AvailabilityProjection"> | Date | string
  }

  export type OutletSearchDocumentCreateInput = {
    id?: string
    outletId: string
    merchantName: string
    locality: string
    city?: string
    cityCode?: string
    latitude: number
    longitude: number
    rating?: number
    categoryTags?: OutletSearchDocumentCreatecategoryTagsInput | string[]
    isCurrentlyOpen?: boolean
    queueEstimateMinutes?: number
    updatedAt?: Date | string
  }

  export type OutletSearchDocumentUncheckedCreateInput = {
    id?: string
    outletId: string
    merchantName: string
    locality: string
    city?: string
    cityCode?: string
    latitude: number
    longitude: number
    rating?: number
    categoryTags?: OutletSearchDocumentCreatecategoryTagsInput | string[]
    isCurrentlyOpen?: boolean
    queueEstimateMinutes?: number
    updatedAt?: Date | string
  }

  export type OutletSearchDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    merchantName?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    categoryTags?: OutletSearchDocumentUpdatecategoryTagsInput | string[]
    isCurrentlyOpen?: BoolFieldUpdateOperationsInput | boolean
    queueEstimateMinutes?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletSearchDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    merchantName?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    categoryTags?: OutletSearchDocumentUpdatecategoryTagsInput | string[]
    isCurrentlyOpen?: BoolFieldUpdateOperationsInput | boolean
    queueEstimateMinutes?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletSearchDocumentCreateManyInput = {
    id?: string
    outletId: string
    merchantName: string
    locality: string
    city?: string
    cityCode?: string
    latitude: number
    longitude: number
    rating?: number
    categoryTags?: OutletSearchDocumentCreatecategoryTagsInput | string[]
    isCurrentlyOpen?: boolean
    queueEstimateMinutes?: number
    updatedAt?: Date | string
  }

  export type OutletSearchDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    merchantName?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    categoryTags?: OutletSearchDocumentUpdatecategoryTagsInput | string[]
    isCurrentlyOpen?: BoolFieldUpdateOperationsInput | boolean
    queueEstimateMinutes?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletSearchDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    merchantName?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    categoryTags?: OutletSearchDocumentUpdatecategoryTagsInput | string[]
    isCurrentlyOpen?: BoolFieldUpdateOperationsInput | boolean
    queueEstimateMinutes?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityProjectionCreateInput = {
    id?: string
    outletId: string
    hasActiveStock?: boolean
    nextSlotTime?: Date | string | null
    updatedAt?: Date | string
  }

  export type AvailabilityProjectionUncheckedCreateInput = {
    id?: string
    outletId: string
    hasActiveStock?: boolean
    nextSlotTime?: Date | string | null
    updatedAt?: Date | string
  }

  export type AvailabilityProjectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    hasActiveStock?: BoolFieldUpdateOperationsInput | boolean
    nextSlotTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityProjectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    hasActiveStock?: BoolFieldUpdateOperationsInput | boolean
    nextSlotTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityProjectionCreateManyInput = {
    id?: string
    outletId: string
    hasActiveStock?: boolean
    nextSlotTime?: Date | string | null
    updatedAt?: Date | string
  }

  export type AvailabilityProjectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    hasActiveStock?: BoolFieldUpdateOperationsInput | boolean
    nextSlotTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityProjectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    hasActiveStock?: BoolFieldUpdateOperationsInput | boolean
    nextSlotTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type OutletSearchDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    merchantName?: SortOrder
    locality?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    categoryTags?: SortOrder
    isCurrentlyOpen?: SortOrder
    queueEstimateMinutes?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutletSearchDocumentAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    queueEstimateMinutes?: SortOrder
  }

  export type OutletSearchDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    merchantName?: SortOrder
    locality?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    isCurrentlyOpen?: SortOrder
    queueEstimateMinutes?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutletSearchDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    merchantName?: SortOrder
    locality?: SortOrder
    city?: SortOrder
    cityCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    isCurrentlyOpen?: SortOrder
    queueEstimateMinutes?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutletSearchDocumentSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    queueEstimateMinutes?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AvailabilityProjectionCountOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    hasActiveStock?: SortOrder
    nextSlotTime?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityProjectionMaxOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    hasActiveStock?: SortOrder
    nextSlotTime?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityProjectionMinOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    hasActiveStock?: SortOrder
    nextSlotTime?: SortOrder
    updatedAt?: SortOrder
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

  export type OutletSearchDocumentCreatecategoryTagsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OutletSearchDocumentUpdatecategoryTagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OutletSearchDocumentDefaultArgs instead
     */
    export type OutletSearchDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutletSearchDocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvailabilityProjectionDefaultArgs instead
     */
    export type AvailabilityProjectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvailabilityProjectionDefaultArgs<ExtArgs>

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