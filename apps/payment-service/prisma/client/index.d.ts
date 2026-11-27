
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
 * Model PaymentIntent
 * 
 */
export type PaymentIntent = $Result.DefaultSelection<Prisma.$PaymentIntentPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Refund
 * 
 */
export type Refund = $Result.DefaultSelection<Prisma.$RefundPayload>
/**
 * Model WebhookInbox
 * 
 */
export type WebhookInbox = $Result.DefaultSelection<Prisma.$WebhookInboxPayload>
/**
 * Model ReconciliationRecord
 * 
 */
export type ReconciliationRecord = $Result.DefaultSelection<Prisma.$ReconciliationRecordPayload>
/**
 * Model PayoutSettlement
 * 
 */
export type PayoutSettlement = $Result.DefaultSelection<Prisma.$PayoutSettlementPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PaymentIntents
 * const paymentIntents = await prisma.paymentIntent.findMany()
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
   * // Fetch zero or more PaymentIntents
   * const paymentIntents = await prisma.paymentIntent.findMany()
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
   * `prisma.paymentIntent`: Exposes CRUD operations for the **PaymentIntent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentIntents
    * const paymentIntents = await prisma.paymentIntent.findMany()
    * ```
    */
  get paymentIntent(): Prisma.PaymentIntentDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.refund`: Exposes CRUD operations for the **Refund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refunds
    * const refunds = await prisma.refund.findMany()
    * ```
    */
  get refund(): Prisma.RefundDelegate<ExtArgs>;

  /**
   * `prisma.webhookInbox`: Exposes CRUD operations for the **WebhookInbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookInboxes
    * const webhookInboxes = await prisma.webhookInbox.findMany()
    * ```
    */
  get webhookInbox(): Prisma.WebhookInboxDelegate<ExtArgs>;

  /**
   * `prisma.reconciliationRecord`: Exposes CRUD operations for the **ReconciliationRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReconciliationRecords
    * const reconciliationRecords = await prisma.reconciliationRecord.findMany()
    * ```
    */
  get reconciliationRecord(): Prisma.ReconciliationRecordDelegate<ExtArgs>;

  /**
   * `prisma.payoutSettlement`: Exposes CRUD operations for the **PayoutSettlement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayoutSettlements
    * const payoutSettlements = await prisma.payoutSettlement.findMany()
    * ```
    */
  get payoutSettlement(): Prisma.PayoutSettlementDelegate<ExtArgs>;
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
    PaymentIntent: 'PaymentIntent',
    Payment: 'Payment',
    Refund: 'Refund',
    WebhookInbox: 'WebhookInbox',
    ReconciliationRecord: 'ReconciliationRecord',
    PayoutSettlement: 'PayoutSettlement'
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
      modelProps: "paymentIntent" | "payment" | "refund" | "webhookInbox" | "reconciliationRecord" | "payoutSettlement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PaymentIntent: {
        payload: Prisma.$PaymentIntentPayload<ExtArgs>
        fields: Prisma.PaymentIntentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentIntentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentIntentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>
          }
          findFirst: {
            args: Prisma.PaymentIntentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentIntentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>
          }
          findMany: {
            args: Prisma.PaymentIntentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>[]
          }
          create: {
            args: Prisma.PaymentIntentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>
          }
          createMany: {
            args: Prisma.PaymentIntentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentIntentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>[]
          }
          delete: {
            args: Prisma.PaymentIntentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>
          }
          update: {
            args: Prisma.PaymentIntentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentIntentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentIntentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentIntentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>
          }
          aggregate: {
            args: Prisma.PaymentIntentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentIntent>
          }
          groupBy: {
            args: Prisma.PaymentIntentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentIntentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentIntentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentIntentCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Refund: {
        payload: Prisma.$RefundPayload<ExtArgs>
        fields: Prisma.RefundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          findFirst: {
            args: Prisma.RefundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          findMany: {
            args: Prisma.RefundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          create: {
            args: Prisma.RefundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          createMany: {
            args: Prisma.RefundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          delete: {
            args: Prisma.RefundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          update: {
            args: Prisma.RefundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          deleteMany: {
            args: Prisma.RefundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          aggregate: {
            args: Prisma.RefundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefund>
          }
          groupBy: {
            args: Prisma.RefundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefundCountArgs<ExtArgs>
            result: $Utils.Optional<RefundCountAggregateOutputType> | number
          }
        }
      }
      WebhookInbox: {
        payload: Prisma.$WebhookInboxPayload<ExtArgs>
        fields: Prisma.WebhookInboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookInboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookInboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookInboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookInboxPayload>
          }
          findFirst: {
            args: Prisma.WebhookInboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookInboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookInboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookInboxPayload>
          }
          findMany: {
            args: Prisma.WebhookInboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookInboxPayload>[]
          }
          create: {
            args: Prisma.WebhookInboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookInboxPayload>
          }
          createMany: {
            args: Prisma.WebhookInboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookInboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookInboxPayload>[]
          }
          delete: {
            args: Prisma.WebhookInboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookInboxPayload>
          }
          update: {
            args: Prisma.WebhookInboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookInboxPayload>
          }
          deleteMany: {
            args: Prisma.WebhookInboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookInboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WebhookInboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookInboxPayload>
          }
          aggregate: {
            args: Prisma.WebhookInboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookInbox>
          }
          groupBy: {
            args: Prisma.WebhookInboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookInboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookInboxCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookInboxCountAggregateOutputType> | number
          }
        }
      }
      ReconciliationRecord: {
        payload: Prisma.$ReconciliationRecordPayload<ExtArgs>
        fields: Prisma.ReconciliationRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReconciliationRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReconciliationRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationRecordPayload>
          }
          findFirst: {
            args: Prisma.ReconciliationRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReconciliationRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationRecordPayload>
          }
          findMany: {
            args: Prisma.ReconciliationRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationRecordPayload>[]
          }
          create: {
            args: Prisma.ReconciliationRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationRecordPayload>
          }
          createMany: {
            args: Prisma.ReconciliationRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReconciliationRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationRecordPayload>[]
          }
          delete: {
            args: Prisma.ReconciliationRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationRecordPayload>
          }
          update: {
            args: Prisma.ReconciliationRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationRecordPayload>
          }
          deleteMany: {
            args: Prisma.ReconciliationRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReconciliationRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReconciliationRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationRecordPayload>
          }
          aggregate: {
            args: Prisma.ReconciliationRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReconciliationRecord>
          }
          groupBy: {
            args: Prisma.ReconciliationRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReconciliationRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReconciliationRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ReconciliationRecordCountAggregateOutputType> | number
          }
        }
      }
      PayoutSettlement: {
        payload: Prisma.$PayoutSettlementPayload<ExtArgs>
        fields: Prisma.PayoutSettlementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayoutSettlementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettlementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayoutSettlementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettlementPayload>
          }
          findFirst: {
            args: Prisma.PayoutSettlementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettlementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayoutSettlementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettlementPayload>
          }
          findMany: {
            args: Prisma.PayoutSettlementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettlementPayload>[]
          }
          create: {
            args: Prisma.PayoutSettlementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettlementPayload>
          }
          createMany: {
            args: Prisma.PayoutSettlementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayoutSettlementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettlementPayload>[]
          }
          delete: {
            args: Prisma.PayoutSettlementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettlementPayload>
          }
          update: {
            args: Prisma.PayoutSettlementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettlementPayload>
          }
          deleteMany: {
            args: Prisma.PayoutSettlementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayoutSettlementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayoutSettlementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettlementPayload>
          }
          aggregate: {
            args: Prisma.PayoutSettlementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayoutSettlement>
          }
          groupBy: {
            args: Prisma.PayoutSettlementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayoutSettlementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayoutSettlementCountArgs<ExtArgs>
            result: $Utils.Optional<PayoutSettlementCountAggregateOutputType> | number
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
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    refunds: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refunds?: boolean | PaymentCountOutputTypeCountRefundsArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountRefundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PaymentIntent
   */

  export type AggregatePaymentIntent = {
    _count: PaymentIntentCountAggregateOutputType | null
    _avg: PaymentIntentAvgAggregateOutputType | null
    _sum: PaymentIntentSumAggregateOutputType | null
    _min: PaymentIntentMinAggregateOutputType | null
    _max: PaymentIntentMaxAggregateOutputType | null
  }

  export type PaymentIntentAvgAggregateOutputType = {
    amountPaise: number | null
  }

  export type PaymentIntentSumAggregateOutputType = {
    amountPaise: number | null
  }

  export type PaymentIntentMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    tenantId: string | null
    cityCode: string | null
    amountPaise: number | null
    currency: string | null
    status: string | null
    provider: string | null
    pspReference: string | null
    createdAt: Date | null
  }

  export type PaymentIntentMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    tenantId: string | null
    cityCode: string | null
    amountPaise: number | null
    currency: string | null
    status: string | null
    provider: string | null
    pspReference: string | null
    createdAt: Date | null
  }

  export type PaymentIntentCountAggregateOutputType = {
    id: number
    orderId: number
    tenantId: number
    cityCode: number
    amountPaise: number
    currency: number
    status: number
    provider: number
    pspReference: number
    createdAt: number
    _all: number
  }


  export type PaymentIntentAvgAggregateInputType = {
    amountPaise?: true
  }

  export type PaymentIntentSumAggregateInputType = {
    amountPaise?: true
  }

  export type PaymentIntentMinAggregateInputType = {
    id?: true
    orderId?: true
    tenantId?: true
    cityCode?: true
    amountPaise?: true
    currency?: true
    status?: true
    provider?: true
    pspReference?: true
    createdAt?: true
  }

  export type PaymentIntentMaxAggregateInputType = {
    id?: true
    orderId?: true
    tenantId?: true
    cityCode?: true
    amountPaise?: true
    currency?: true
    status?: true
    provider?: true
    pspReference?: true
    createdAt?: true
  }

  export type PaymentIntentCountAggregateInputType = {
    id?: true
    orderId?: true
    tenantId?: true
    cityCode?: true
    amountPaise?: true
    currency?: true
    status?: true
    provider?: true
    pspReference?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentIntentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentIntent to aggregate.
     */
    where?: PaymentIntentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentIntents to fetch.
     */
    orderBy?: PaymentIntentOrderByWithRelationInput | PaymentIntentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentIntentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentIntents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentIntents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentIntents
    **/
    _count?: true | PaymentIntentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentIntentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentIntentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentIntentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentIntentMaxAggregateInputType
  }

  export type GetPaymentIntentAggregateType<T extends PaymentIntentAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentIntent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentIntent[P]>
      : GetScalarType<T[P], AggregatePaymentIntent[P]>
  }




  export type PaymentIntentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentIntentWhereInput
    orderBy?: PaymentIntentOrderByWithAggregationInput | PaymentIntentOrderByWithAggregationInput[]
    by: PaymentIntentScalarFieldEnum[] | PaymentIntentScalarFieldEnum
    having?: PaymentIntentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentIntentCountAggregateInputType | true
    _avg?: PaymentIntentAvgAggregateInputType
    _sum?: PaymentIntentSumAggregateInputType
    _min?: PaymentIntentMinAggregateInputType
    _max?: PaymentIntentMaxAggregateInputType
  }

  export type PaymentIntentGroupByOutputType = {
    id: string
    orderId: string
    tenantId: string
    cityCode: string
    amountPaise: number
    currency: string
    status: string
    provider: string
    pspReference: string | null
    createdAt: Date
    _count: PaymentIntentCountAggregateOutputType | null
    _avg: PaymentIntentAvgAggregateOutputType | null
    _sum: PaymentIntentSumAggregateOutputType | null
    _min: PaymentIntentMinAggregateOutputType | null
    _max: PaymentIntentMaxAggregateOutputType | null
  }

  type GetPaymentIntentGroupByPayload<T extends PaymentIntentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentIntentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentIntentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentIntentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentIntentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentIntentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    tenantId?: boolean
    cityCode?: boolean
    amountPaise?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    pspReference?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentIntent$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["paymentIntent"]>

  export type PaymentIntentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    tenantId?: boolean
    cityCode?: boolean
    amountPaise?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    pspReference?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["paymentIntent"]>

  export type PaymentIntentSelectScalar = {
    id?: boolean
    orderId?: boolean
    tenantId?: boolean
    cityCode?: boolean
    amountPaise?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    pspReference?: boolean
    createdAt?: boolean
  }

  export type PaymentIntentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentIntent$paymentArgs<ExtArgs>
  }
  export type PaymentIntentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PaymentIntentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentIntent"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      tenantId: string
      cityCode: string
      amountPaise: number
      currency: string
      status: string
      provider: string
      pspReference: string | null
      createdAt: Date
    }, ExtArgs["result"]["paymentIntent"]>
    composites: {}
  }

  type PaymentIntentGetPayload<S extends boolean | null | undefined | PaymentIntentDefaultArgs> = $Result.GetResult<Prisma.$PaymentIntentPayload, S>

  type PaymentIntentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentIntentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentIntentCountAggregateInputType | true
    }

  export interface PaymentIntentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentIntent'], meta: { name: 'PaymentIntent' } }
    /**
     * Find zero or one PaymentIntent that matches the filter.
     * @param {PaymentIntentFindUniqueArgs} args - Arguments to find a PaymentIntent
     * @example
     * // Get one PaymentIntent
     * const paymentIntent = await prisma.paymentIntent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentIntentFindUniqueArgs>(args: SelectSubset<T, PaymentIntentFindUniqueArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentIntent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentIntentFindUniqueOrThrowArgs} args - Arguments to find a PaymentIntent
     * @example
     * // Get one PaymentIntent
     * const paymentIntent = await prisma.paymentIntent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentIntentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentIntentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentIntent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentFindFirstArgs} args - Arguments to find a PaymentIntent
     * @example
     * // Get one PaymentIntent
     * const paymentIntent = await prisma.paymentIntent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentIntentFindFirstArgs>(args?: SelectSubset<T, PaymentIntentFindFirstArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentIntent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentFindFirstOrThrowArgs} args - Arguments to find a PaymentIntent
     * @example
     * // Get one PaymentIntent
     * const paymentIntent = await prisma.paymentIntent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentIntentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentIntentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentIntents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentIntents
     * const paymentIntents = await prisma.paymentIntent.findMany()
     * 
     * // Get first 10 PaymentIntents
     * const paymentIntents = await prisma.paymentIntent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentIntentWithIdOnly = await prisma.paymentIntent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentIntentFindManyArgs>(args?: SelectSubset<T, PaymentIntentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentIntent.
     * @param {PaymentIntentCreateArgs} args - Arguments to create a PaymentIntent.
     * @example
     * // Create one PaymentIntent
     * const PaymentIntent = await prisma.paymentIntent.create({
     *   data: {
     *     // ... data to create a PaymentIntent
     *   }
     * })
     * 
     */
    create<T extends PaymentIntentCreateArgs>(args: SelectSubset<T, PaymentIntentCreateArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentIntents.
     * @param {PaymentIntentCreateManyArgs} args - Arguments to create many PaymentIntents.
     * @example
     * // Create many PaymentIntents
     * const paymentIntent = await prisma.paymentIntent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentIntentCreateManyArgs>(args?: SelectSubset<T, PaymentIntentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentIntents and returns the data saved in the database.
     * @param {PaymentIntentCreateManyAndReturnArgs} args - Arguments to create many PaymentIntents.
     * @example
     * // Create many PaymentIntents
     * const paymentIntent = await prisma.paymentIntent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentIntents and only return the `id`
     * const paymentIntentWithIdOnly = await prisma.paymentIntent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentIntentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentIntentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaymentIntent.
     * @param {PaymentIntentDeleteArgs} args - Arguments to delete one PaymentIntent.
     * @example
     * // Delete one PaymentIntent
     * const PaymentIntent = await prisma.paymentIntent.delete({
     *   where: {
     *     // ... filter to delete one PaymentIntent
     *   }
     * })
     * 
     */
    delete<T extends PaymentIntentDeleteArgs>(args: SelectSubset<T, PaymentIntentDeleteArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentIntent.
     * @param {PaymentIntentUpdateArgs} args - Arguments to update one PaymentIntent.
     * @example
     * // Update one PaymentIntent
     * const paymentIntent = await prisma.paymentIntent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentIntentUpdateArgs>(args: SelectSubset<T, PaymentIntentUpdateArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentIntents.
     * @param {PaymentIntentDeleteManyArgs} args - Arguments to filter PaymentIntents to delete.
     * @example
     * // Delete a few PaymentIntents
     * const { count } = await prisma.paymentIntent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentIntentDeleteManyArgs>(args?: SelectSubset<T, PaymentIntentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentIntents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentIntents
     * const paymentIntent = await prisma.paymentIntent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentIntentUpdateManyArgs>(args: SelectSubset<T, PaymentIntentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentIntent.
     * @param {PaymentIntentUpsertArgs} args - Arguments to update or create a PaymentIntent.
     * @example
     * // Update or create a PaymentIntent
     * const paymentIntent = await prisma.paymentIntent.upsert({
     *   create: {
     *     // ... data to create a PaymentIntent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentIntent we want to update
     *   }
     * })
     */
    upsert<T extends PaymentIntentUpsertArgs>(args: SelectSubset<T, PaymentIntentUpsertArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentIntents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentCountArgs} args - Arguments to filter PaymentIntents to count.
     * @example
     * // Count the number of PaymentIntents
     * const count = await prisma.paymentIntent.count({
     *   where: {
     *     // ... the filter for the PaymentIntents we want to count
     *   }
     * })
    **/
    count<T extends PaymentIntentCountArgs>(
      args?: Subset<T, PaymentIntentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentIntentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentIntent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentIntentAggregateArgs>(args: Subset<T, PaymentIntentAggregateArgs>): Prisma.PrismaPromise<GetPaymentIntentAggregateType<T>>

    /**
     * Group by PaymentIntent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentGroupByArgs} args - Group by arguments.
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
      T extends PaymentIntentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentIntentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentIntentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentIntentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentIntentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentIntent model
   */
  readonly fields: PaymentIntentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentIntent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentIntentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentIntent$paymentArgs<ExtArgs> = {}>(args?: Subset<T, PaymentIntent$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the PaymentIntent model
   */ 
  interface PaymentIntentFieldRefs {
    readonly id: FieldRef<"PaymentIntent", 'String'>
    readonly orderId: FieldRef<"PaymentIntent", 'String'>
    readonly tenantId: FieldRef<"PaymentIntent", 'String'>
    readonly cityCode: FieldRef<"PaymentIntent", 'String'>
    readonly amountPaise: FieldRef<"PaymentIntent", 'Int'>
    readonly currency: FieldRef<"PaymentIntent", 'String'>
    readonly status: FieldRef<"PaymentIntent", 'String'>
    readonly provider: FieldRef<"PaymentIntent", 'String'>
    readonly pspReference: FieldRef<"PaymentIntent", 'String'>
    readonly createdAt: FieldRef<"PaymentIntent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentIntent findUnique
   */
  export type PaymentIntentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentIntent to fetch.
     */
    where: PaymentIntentWhereUniqueInput
  }

  /**
   * PaymentIntent findUniqueOrThrow
   */
  export type PaymentIntentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentIntent to fetch.
     */
    where: PaymentIntentWhereUniqueInput
  }

  /**
   * PaymentIntent findFirst
   */
  export type PaymentIntentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentIntent to fetch.
     */
    where?: PaymentIntentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentIntents to fetch.
     */
    orderBy?: PaymentIntentOrderByWithRelationInput | PaymentIntentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentIntents.
     */
    cursor?: PaymentIntentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentIntents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentIntents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentIntents.
     */
    distinct?: PaymentIntentScalarFieldEnum | PaymentIntentScalarFieldEnum[]
  }

  /**
   * PaymentIntent findFirstOrThrow
   */
  export type PaymentIntentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentIntent to fetch.
     */
    where?: PaymentIntentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentIntents to fetch.
     */
    orderBy?: PaymentIntentOrderByWithRelationInput | PaymentIntentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentIntents.
     */
    cursor?: PaymentIntentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentIntents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentIntents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentIntents.
     */
    distinct?: PaymentIntentScalarFieldEnum | PaymentIntentScalarFieldEnum[]
  }

  /**
   * PaymentIntent findMany
   */
  export type PaymentIntentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentIntents to fetch.
     */
    where?: PaymentIntentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentIntents to fetch.
     */
    orderBy?: PaymentIntentOrderByWithRelationInput | PaymentIntentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentIntents.
     */
    cursor?: PaymentIntentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentIntents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentIntents.
     */
    skip?: number
    distinct?: PaymentIntentScalarFieldEnum | PaymentIntentScalarFieldEnum[]
  }

  /**
   * PaymentIntent create
   */
  export type PaymentIntentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentIntent.
     */
    data: XOR<PaymentIntentCreateInput, PaymentIntentUncheckedCreateInput>
  }

  /**
   * PaymentIntent createMany
   */
  export type PaymentIntentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentIntents.
     */
    data: PaymentIntentCreateManyInput | PaymentIntentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentIntent createManyAndReturn
   */
  export type PaymentIntentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PaymentIntents.
     */
    data: PaymentIntentCreateManyInput | PaymentIntentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentIntent update
   */
  export type PaymentIntentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentIntent.
     */
    data: XOR<PaymentIntentUpdateInput, PaymentIntentUncheckedUpdateInput>
    /**
     * Choose, which PaymentIntent to update.
     */
    where: PaymentIntentWhereUniqueInput
  }

  /**
   * PaymentIntent updateMany
   */
  export type PaymentIntentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentIntents.
     */
    data: XOR<PaymentIntentUpdateManyMutationInput, PaymentIntentUncheckedUpdateManyInput>
    /**
     * Filter which PaymentIntents to update
     */
    where?: PaymentIntentWhereInput
  }

  /**
   * PaymentIntent upsert
   */
  export type PaymentIntentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentIntent to update in case it exists.
     */
    where: PaymentIntentWhereUniqueInput
    /**
     * In case the PaymentIntent found by the `where` argument doesn't exist, create a new PaymentIntent with this data.
     */
    create: XOR<PaymentIntentCreateInput, PaymentIntentUncheckedCreateInput>
    /**
     * In case the PaymentIntent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentIntentUpdateInput, PaymentIntentUncheckedUpdateInput>
  }

  /**
   * PaymentIntent delete
   */
  export type PaymentIntentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * Filter which PaymentIntent to delete.
     */
    where: PaymentIntentWhereUniqueInput
  }

  /**
   * PaymentIntent deleteMany
   */
  export type PaymentIntentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentIntents to delete
     */
    where?: PaymentIntentWhereInput
  }

  /**
   * PaymentIntent.payment
   */
  export type PaymentIntent$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * PaymentIntent without action
   */
  export type PaymentIntentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amountPaise: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amountPaise: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    intentId: string | null
    orderId: string | null
    cityCode: string | null
    amountPaise: number | null
    pspPaymentId: string | null
    pspSignature: string | null
    status: string | null
    verifiedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    intentId: string | null
    orderId: string | null
    cityCode: string | null
    amountPaise: number | null
    pspPaymentId: string | null
    pspSignature: string | null
    status: string | null
    verifiedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    intentId: number
    orderId: number
    cityCode: number
    amountPaise: number
    pspPaymentId: number
    pspSignature: number
    status: number
    verifiedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amountPaise?: true
  }

  export type PaymentSumAggregateInputType = {
    amountPaise?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    intentId?: true
    orderId?: true
    cityCode?: true
    amountPaise?: true
    pspPaymentId?: true
    pspSignature?: true
    status?: true
    verifiedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    intentId?: true
    orderId?: true
    cityCode?: true
    amountPaise?: true
    pspPaymentId?: true
    pspSignature?: true
    status?: true
    verifiedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    intentId?: true
    orderId?: true
    cityCode?: true
    amountPaise?: true
    pspPaymentId?: true
    pspSignature?: true
    status?: true
    verifiedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    intentId: string
    orderId: string
    cityCode: string
    amountPaise: number
    pspPaymentId: string
    pspSignature: string | null
    status: string
    verifiedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intentId?: boolean
    orderId?: boolean
    cityCode?: boolean
    amountPaise?: boolean
    pspPaymentId?: boolean
    pspSignature?: boolean
    status?: boolean
    verifiedAt?: boolean
    intent?: boolean | PaymentIntentDefaultArgs<ExtArgs>
    refunds?: boolean | Payment$refundsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intentId?: boolean
    orderId?: boolean
    cityCode?: boolean
    amountPaise?: boolean
    pspPaymentId?: boolean
    pspSignature?: boolean
    status?: boolean
    verifiedAt?: boolean
    intent?: boolean | PaymentIntentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    intentId?: boolean
    orderId?: boolean
    cityCode?: boolean
    amountPaise?: boolean
    pspPaymentId?: boolean
    pspSignature?: boolean
    status?: boolean
    verifiedAt?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intent?: boolean | PaymentIntentDefaultArgs<ExtArgs>
    refunds?: boolean | Payment$refundsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intent?: boolean | PaymentIntentDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      intent: Prisma.$PaymentIntentPayload<ExtArgs>
      refunds: Prisma.$RefundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      intentId: string
      orderId: string
      cityCode: string
      amountPaise: number
      pspPaymentId: string
      pspSignature: string | null
      status: string
      verifiedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    intent<T extends PaymentIntentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentIntentDefaultArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    refunds<T extends Payment$refundsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$refundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly intentId: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly cityCode: FieldRef<"Payment", 'String'>
    readonly amountPaise: FieldRef<"Payment", 'Int'>
    readonly pspPaymentId: FieldRef<"Payment", 'String'>
    readonly pspSignature: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly verifiedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment.refunds
   */
  export type Payment$refundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    where?: RefundWhereInput
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    cursor?: RefundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Refund
   */

  export type AggregateRefund = {
    _count: RefundCountAggregateOutputType | null
    _avg: RefundAvgAggregateOutputType | null
    _sum: RefundSumAggregateOutputType | null
    _min: RefundMinAggregateOutputType | null
    _max: RefundMaxAggregateOutputType | null
  }

  export type RefundAvgAggregateOutputType = {
    amountPaise: number | null
  }

  export type RefundSumAggregateOutputType = {
    amountPaise: number | null
  }

  export type RefundMinAggregateOutputType = {
    id: string | null
    paymentId: string | null
    orderId: string | null
    cityCode: string | null
    amountPaise: number | null
    reason: string | null
    status: string | null
    pspRefundId: string | null
    createdAt: Date | null
  }

  export type RefundMaxAggregateOutputType = {
    id: string | null
    paymentId: string | null
    orderId: string | null
    cityCode: string | null
    amountPaise: number | null
    reason: string | null
    status: string | null
    pspRefundId: string | null
    createdAt: Date | null
  }

  export type RefundCountAggregateOutputType = {
    id: number
    paymentId: number
    orderId: number
    cityCode: number
    amountPaise: number
    reason: number
    status: number
    pspRefundId: number
    createdAt: number
    _all: number
  }


  export type RefundAvgAggregateInputType = {
    amountPaise?: true
  }

  export type RefundSumAggregateInputType = {
    amountPaise?: true
  }

  export type RefundMinAggregateInputType = {
    id?: true
    paymentId?: true
    orderId?: true
    cityCode?: true
    amountPaise?: true
    reason?: true
    status?: true
    pspRefundId?: true
    createdAt?: true
  }

  export type RefundMaxAggregateInputType = {
    id?: true
    paymentId?: true
    orderId?: true
    cityCode?: true
    amountPaise?: true
    reason?: true
    status?: true
    pspRefundId?: true
    createdAt?: true
  }

  export type RefundCountAggregateInputType = {
    id?: true
    paymentId?: true
    orderId?: true
    cityCode?: true
    amountPaise?: true
    reason?: true
    status?: true
    pspRefundId?: true
    createdAt?: true
    _all?: true
  }

  export type RefundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refund to aggregate.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Refunds
    **/
    _count?: true | RefundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefundMaxAggregateInputType
  }

  export type GetRefundAggregateType<T extends RefundAggregateArgs> = {
        [P in keyof T & keyof AggregateRefund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefund[P]>
      : GetScalarType<T[P], AggregateRefund[P]>
  }




  export type RefundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundWhereInput
    orderBy?: RefundOrderByWithAggregationInput | RefundOrderByWithAggregationInput[]
    by: RefundScalarFieldEnum[] | RefundScalarFieldEnum
    having?: RefundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefundCountAggregateInputType | true
    _avg?: RefundAvgAggregateInputType
    _sum?: RefundSumAggregateInputType
    _min?: RefundMinAggregateInputType
    _max?: RefundMaxAggregateInputType
  }

  export type RefundGroupByOutputType = {
    id: string
    paymentId: string
    orderId: string
    cityCode: string
    amountPaise: number
    reason: string
    status: string
    pspRefundId: string | null
    createdAt: Date
    _count: RefundCountAggregateOutputType | null
    _avg: RefundAvgAggregateOutputType | null
    _sum: RefundSumAggregateOutputType | null
    _min: RefundMinAggregateOutputType | null
    _max: RefundMaxAggregateOutputType | null
  }

  type GetRefundGroupByPayload<T extends RefundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefundGroupByOutputType[P]>
            : GetScalarType<T[P], RefundGroupByOutputType[P]>
        }
      >
    >


  export type RefundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    orderId?: boolean
    cityCode?: boolean
    amountPaise?: boolean
    reason?: boolean
    status?: boolean
    pspRefundId?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    orderId?: boolean
    cityCode?: boolean
    amountPaise?: boolean
    reason?: boolean
    status?: boolean
    pspRefundId?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectScalar = {
    id?: boolean
    paymentId?: boolean
    orderId?: boolean
    cityCode?: boolean
    amountPaise?: boolean
    reason?: boolean
    status?: boolean
    pspRefundId?: boolean
    createdAt?: boolean
  }

  export type RefundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type RefundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }

  export type $RefundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Refund"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentId: string
      orderId: string
      cityCode: string
      amountPaise: number
      reason: string
      status: string
      pspRefundId: string | null
      createdAt: Date
    }, ExtArgs["result"]["refund"]>
    composites: {}
  }

  type RefundGetPayload<S extends boolean | null | undefined | RefundDefaultArgs> = $Result.GetResult<Prisma.$RefundPayload, S>

  type RefundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RefundFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RefundCountAggregateInputType | true
    }

  export interface RefundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Refund'], meta: { name: 'Refund' } }
    /**
     * Find zero or one Refund that matches the filter.
     * @param {RefundFindUniqueArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefundFindUniqueArgs>(args: SelectSubset<T, RefundFindUniqueArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Refund that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RefundFindUniqueOrThrowArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefundFindUniqueOrThrowArgs>(args: SelectSubset<T, RefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Refund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindFirstArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefundFindFirstArgs>(args?: SelectSubset<T, RefundFindFirstArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Refund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindFirstOrThrowArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefundFindFirstOrThrowArgs>(args?: SelectSubset<T, RefundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Refunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refunds
     * const refunds = await prisma.refund.findMany()
     * 
     * // Get first 10 Refunds
     * const refunds = await prisma.refund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refundWithIdOnly = await prisma.refund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefundFindManyArgs>(args?: SelectSubset<T, RefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Refund.
     * @param {RefundCreateArgs} args - Arguments to create a Refund.
     * @example
     * // Create one Refund
     * const Refund = await prisma.refund.create({
     *   data: {
     *     // ... data to create a Refund
     *   }
     * })
     * 
     */
    create<T extends RefundCreateArgs>(args: SelectSubset<T, RefundCreateArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Refunds.
     * @param {RefundCreateManyArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refund = await prisma.refund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefundCreateManyArgs>(args?: SelectSubset<T, RefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Refunds and returns the data saved in the database.
     * @param {RefundCreateManyAndReturnArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refund = await prisma.refund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Refunds and only return the `id`
     * const refundWithIdOnly = await prisma.refund.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefundCreateManyAndReturnArgs>(args?: SelectSubset<T, RefundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Refund.
     * @param {RefundDeleteArgs} args - Arguments to delete one Refund.
     * @example
     * // Delete one Refund
     * const Refund = await prisma.refund.delete({
     *   where: {
     *     // ... filter to delete one Refund
     *   }
     * })
     * 
     */
    delete<T extends RefundDeleteArgs>(args: SelectSubset<T, RefundDeleteArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Refund.
     * @param {RefundUpdateArgs} args - Arguments to update one Refund.
     * @example
     * // Update one Refund
     * const refund = await prisma.refund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefundUpdateArgs>(args: SelectSubset<T, RefundUpdateArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Refunds.
     * @param {RefundDeleteManyArgs} args - Arguments to filter Refunds to delete.
     * @example
     * // Delete a few Refunds
     * const { count } = await prisma.refund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefundDeleteManyArgs>(args?: SelectSubset<T, RefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refunds
     * const refund = await prisma.refund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefundUpdateManyArgs>(args: SelectSubset<T, RefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Refund.
     * @param {RefundUpsertArgs} args - Arguments to update or create a Refund.
     * @example
     * // Update or create a Refund
     * const refund = await prisma.refund.upsert({
     *   create: {
     *     // ... data to create a Refund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refund we want to update
     *   }
     * })
     */
    upsert<T extends RefundUpsertArgs>(args: SelectSubset<T, RefundUpsertArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundCountArgs} args - Arguments to filter Refunds to count.
     * @example
     * // Count the number of Refunds
     * const count = await prisma.refund.count({
     *   where: {
     *     // ... the filter for the Refunds we want to count
     *   }
     * })
    **/
    count<T extends RefundCountArgs>(
      args?: Subset<T, RefundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefundAggregateArgs>(args: Subset<T, RefundAggregateArgs>): Prisma.PrismaPromise<GetRefundAggregateType<T>>

    /**
     * Group by Refund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundGroupByArgs} args - Group by arguments.
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
      T extends RefundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefundGroupByArgs['orderBy'] }
        : { orderBy?: RefundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Refund model
   */
  readonly fields: RefundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Refund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Refund model
   */ 
  interface RefundFieldRefs {
    readonly id: FieldRef<"Refund", 'String'>
    readonly paymentId: FieldRef<"Refund", 'String'>
    readonly orderId: FieldRef<"Refund", 'String'>
    readonly cityCode: FieldRef<"Refund", 'String'>
    readonly amountPaise: FieldRef<"Refund", 'Int'>
    readonly reason: FieldRef<"Refund", 'String'>
    readonly status: FieldRef<"Refund", 'String'>
    readonly pspRefundId: FieldRef<"Refund", 'String'>
    readonly createdAt: FieldRef<"Refund", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Refund findUnique
   */
  export type RefundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund findUniqueOrThrow
   */
  export type RefundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund findFirst
   */
  export type RefundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund findFirstOrThrow
   */
  export type RefundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund findMany
   */
  export type RefundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refunds to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund create
   */
  export type RefundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The data needed to create a Refund.
     */
    data: XOR<RefundCreateInput, RefundUncheckedCreateInput>
  }

  /**
   * Refund createMany
   */
  export type RefundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Refunds.
     */
    data: RefundCreateManyInput | RefundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Refund createManyAndReturn
   */
  export type RefundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Refunds.
     */
    data: RefundCreateManyInput | RefundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Refund update
   */
  export type RefundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The data needed to update a Refund.
     */
    data: XOR<RefundUpdateInput, RefundUncheckedUpdateInput>
    /**
     * Choose, which Refund to update.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund updateMany
   */
  export type RefundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Refunds.
     */
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyInput>
    /**
     * Filter which Refunds to update
     */
    where?: RefundWhereInput
  }

  /**
   * Refund upsert
   */
  export type RefundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The filter to search for the Refund to update in case it exists.
     */
    where: RefundWhereUniqueInput
    /**
     * In case the Refund found by the `where` argument doesn't exist, create a new Refund with this data.
     */
    create: XOR<RefundCreateInput, RefundUncheckedCreateInput>
    /**
     * In case the Refund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefundUpdateInput, RefundUncheckedUpdateInput>
  }

  /**
   * Refund delete
   */
  export type RefundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter which Refund to delete.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund deleteMany
   */
  export type RefundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refunds to delete
     */
    where?: RefundWhereInput
  }

  /**
   * Refund without action
   */
  export type RefundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
  }


  /**
   * Model WebhookInbox
   */

  export type AggregateWebhookInbox = {
    _count: WebhookInboxCountAggregateOutputType | null
    _min: WebhookInboxMinAggregateOutputType | null
    _max: WebhookInboxMaxAggregateOutputType | null
  }

  export type WebhookInboxMinAggregateOutputType = {
    id: string | null
    provider: string | null
    eventId: string | null
    isProcessed: boolean | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type WebhookInboxMaxAggregateOutputType = {
    id: string | null
    provider: string | null
    eventId: string | null
    isProcessed: boolean | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type WebhookInboxCountAggregateOutputType = {
    id: number
    provider: number
    eventId: number
    payload: number
    isProcessed: number
    processedAt: number
    createdAt: number
    _all: number
  }


  export type WebhookInboxMinAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    isProcessed?: true
    processedAt?: true
    createdAt?: true
  }

  export type WebhookInboxMaxAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    isProcessed?: true
    processedAt?: true
    createdAt?: true
  }

  export type WebhookInboxCountAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    payload?: true
    isProcessed?: true
    processedAt?: true
    createdAt?: true
    _all?: true
  }

  export type WebhookInboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookInbox to aggregate.
     */
    where?: WebhookInboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookInboxes to fetch.
     */
    orderBy?: WebhookInboxOrderByWithRelationInput | WebhookInboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookInboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookInboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookInboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookInboxes
    **/
    _count?: true | WebhookInboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookInboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookInboxMaxAggregateInputType
  }

  export type GetWebhookInboxAggregateType<T extends WebhookInboxAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookInbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookInbox[P]>
      : GetScalarType<T[P], AggregateWebhookInbox[P]>
  }




  export type WebhookInboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookInboxWhereInput
    orderBy?: WebhookInboxOrderByWithAggregationInput | WebhookInboxOrderByWithAggregationInput[]
    by: WebhookInboxScalarFieldEnum[] | WebhookInboxScalarFieldEnum
    having?: WebhookInboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookInboxCountAggregateInputType | true
    _min?: WebhookInboxMinAggregateInputType
    _max?: WebhookInboxMaxAggregateInputType
  }

  export type WebhookInboxGroupByOutputType = {
    id: string
    provider: string
    eventId: string
    payload: JsonValue
    isProcessed: boolean
    processedAt: Date | null
    createdAt: Date
    _count: WebhookInboxCountAggregateOutputType | null
    _min: WebhookInboxMinAggregateOutputType | null
    _max: WebhookInboxMaxAggregateOutputType | null
  }

  type GetWebhookInboxGroupByPayload<T extends WebhookInboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookInboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookInboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookInboxGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookInboxGroupByOutputType[P]>
        }
      >
    >


  export type WebhookInboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    payload?: boolean
    isProcessed?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["webhookInbox"]>

  export type WebhookInboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    payload?: boolean
    isProcessed?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["webhookInbox"]>

  export type WebhookInboxSelectScalar = {
    id?: boolean
    provider?: boolean
    eventId?: boolean
    payload?: boolean
    isProcessed?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }


  export type $WebhookInboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookInbox"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: string
      eventId: string
      payload: Prisma.JsonValue
      isProcessed: boolean
      processedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["webhookInbox"]>
    composites: {}
  }

  type WebhookInboxGetPayload<S extends boolean | null | undefined | WebhookInboxDefaultArgs> = $Result.GetResult<Prisma.$WebhookInboxPayload, S>

  type WebhookInboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WebhookInboxFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WebhookInboxCountAggregateInputType | true
    }

  export interface WebhookInboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookInbox'], meta: { name: 'WebhookInbox' } }
    /**
     * Find zero or one WebhookInbox that matches the filter.
     * @param {WebhookInboxFindUniqueArgs} args - Arguments to find a WebhookInbox
     * @example
     * // Get one WebhookInbox
     * const webhookInbox = await prisma.webhookInbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookInboxFindUniqueArgs>(args: SelectSubset<T, WebhookInboxFindUniqueArgs<ExtArgs>>): Prisma__WebhookInboxClient<$Result.GetResult<Prisma.$WebhookInboxPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WebhookInbox that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WebhookInboxFindUniqueOrThrowArgs} args - Arguments to find a WebhookInbox
     * @example
     * // Get one WebhookInbox
     * const webhookInbox = await prisma.webhookInbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookInboxFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookInboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookInboxClient<$Result.GetResult<Prisma.$WebhookInboxPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WebhookInbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookInboxFindFirstArgs} args - Arguments to find a WebhookInbox
     * @example
     * // Get one WebhookInbox
     * const webhookInbox = await prisma.webhookInbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookInboxFindFirstArgs>(args?: SelectSubset<T, WebhookInboxFindFirstArgs<ExtArgs>>): Prisma__WebhookInboxClient<$Result.GetResult<Prisma.$WebhookInboxPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WebhookInbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookInboxFindFirstOrThrowArgs} args - Arguments to find a WebhookInbox
     * @example
     * // Get one WebhookInbox
     * const webhookInbox = await prisma.webhookInbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookInboxFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookInboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookInboxClient<$Result.GetResult<Prisma.$WebhookInboxPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WebhookInboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookInboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookInboxes
     * const webhookInboxes = await prisma.webhookInbox.findMany()
     * 
     * // Get first 10 WebhookInboxes
     * const webhookInboxes = await prisma.webhookInbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookInboxWithIdOnly = await prisma.webhookInbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookInboxFindManyArgs>(args?: SelectSubset<T, WebhookInboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookInboxPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WebhookInbox.
     * @param {WebhookInboxCreateArgs} args - Arguments to create a WebhookInbox.
     * @example
     * // Create one WebhookInbox
     * const WebhookInbox = await prisma.webhookInbox.create({
     *   data: {
     *     // ... data to create a WebhookInbox
     *   }
     * })
     * 
     */
    create<T extends WebhookInboxCreateArgs>(args: SelectSubset<T, WebhookInboxCreateArgs<ExtArgs>>): Prisma__WebhookInboxClient<$Result.GetResult<Prisma.$WebhookInboxPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WebhookInboxes.
     * @param {WebhookInboxCreateManyArgs} args - Arguments to create many WebhookInboxes.
     * @example
     * // Create many WebhookInboxes
     * const webhookInbox = await prisma.webhookInbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookInboxCreateManyArgs>(args?: SelectSubset<T, WebhookInboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookInboxes and returns the data saved in the database.
     * @param {WebhookInboxCreateManyAndReturnArgs} args - Arguments to create many WebhookInboxes.
     * @example
     * // Create many WebhookInboxes
     * const webhookInbox = await prisma.webhookInbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookInboxes and only return the `id`
     * const webhookInboxWithIdOnly = await prisma.webhookInbox.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookInboxCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookInboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookInboxPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WebhookInbox.
     * @param {WebhookInboxDeleteArgs} args - Arguments to delete one WebhookInbox.
     * @example
     * // Delete one WebhookInbox
     * const WebhookInbox = await prisma.webhookInbox.delete({
     *   where: {
     *     // ... filter to delete one WebhookInbox
     *   }
     * })
     * 
     */
    delete<T extends WebhookInboxDeleteArgs>(args: SelectSubset<T, WebhookInboxDeleteArgs<ExtArgs>>): Prisma__WebhookInboxClient<$Result.GetResult<Prisma.$WebhookInboxPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WebhookInbox.
     * @param {WebhookInboxUpdateArgs} args - Arguments to update one WebhookInbox.
     * @example
     * // Update one WebhookInbox
     * const webhookInbox = await prisma.webhookInbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookInboxUpdateArgs>(args: SelectSubset<T, WebhookInboxUpdateArgs<ExtArgs>>): Prisma__WebhookInboxClient<$Result.GetResult<Prisma.$WebhookInboxPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WebhookInboxes.
     * @param {WebhookInboxDeleteManyArgs} args - Arguments to filter WebhookInboxes to delete.
     * @example
     * // Delete a few WebhookInboxes
     * const { count } = await prisma.webhookInbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookInboxDeleteManyArgs>(args?: SelectSubset<T, WebhookInboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookInboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookInboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookInboxes
     * const webhookInbox = await prisma.webhookInbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookInboxUpdateManyArgs>(args: SelectSubset<T, WebhookInboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WebhookInbox.
     * @param {WebhookInboxUpsertArgs} args - Arguments to update or create a WebhookInbox.
     * @example
     * // Update or create a WebhookInbox
     * const webhookInbox = await prisma.webhookInbox.upsert({
     *   create: {
     *     // ... data to create a WebhookInbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookInbox we want to update
     *   }
     * })
     */
    upsert<T extends WebhookInboxUpsertArgs>(args: SelectSubset<T, WebhookInboxUpsertArgs<ExtArgs>>): Prisma__WebhookInboxClient<$Result.GetResult<Prisma.$WebhookInboxPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WebhookInboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookInboxCountArgs} args - Arguments to filter WebhookInboxes to count.
     * @example
     * // Count the number of WebhookInboxes
     * const count = await prisma.webhookInbox.count({
     *   where: {
     *     // ... the filter for the WebhookInboxes we want to count
     *   }
     * })
    **/
    count<T extends WebhookInboxCountArgs>(
      args?: Subset<T, WebhookInboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookInboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookInbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookInboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebhookInboxAggregateArgs>(args: Subset<T, WebhookInboxAggregateArgs>): Prisma.PrismaPromise<GetWebhookInboxAggregateType<T>>

    /**
     * Group by WebhookInbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookInboxGroupByArgs} args - Group by arguments.
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
      T extends WebhookInboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookInboxGroupByArgs['orderBy'] }
        : { orderBy?: WebhookInboxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebhookInboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookInboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookInbox model
   */
  readonly fields: WebhookInboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookInbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookInboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WebhookInbox model
   */ 
  interface WebhookInboxFieldRefs {
    readonly id: FieldRef<"WebhookInbox", 'String'>
    readonly provider: FieldRef<"WebhookInbox", 'String'>
    readonly eventId: FieldRef<"WebhookInbox", 'String'>
    readonly payload: FieldRef<"WebhookInbox", 'Json'>
    readonly isProcessed: FieldRef<"WebhookInbox", 'Boolean'>
    readonly processedAt: FieldRef<"WebhookInbox", 'DateTime'>
    readonly createdAt: FieldRef<"WebhookInbox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookInbox findUnique
   */
  export type WebhookInboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookInbox
     */
    select?: WebhookInboxSelect<ExtArgs> | null
    /**
     * Filter, which WebhookInbox to fetch.
     */
    where: WebhookInboxWhereUniqueInput
  }

  /**
   * WebhookInbox findUniqueOrThrow
   */
  export type WebhookInboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookInbox
     */
    select?: WebhookInboxSelect<ExtArgs> | null
    /**
     * Filter, which WebhookInbox to fetch.
     */
    where: WebhookInboxWhereUniqueInput
  }

  /**
   * WebhookInbox findFirst
   */
  export type WebhookInboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookInbox
     */
    select?: WebhookInboxSelect<ExtArgs> | null
    /**
     * Filter, which WebhookInbox to fetch.
     */
    where?: WebhookInboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookInboxes to fetch.
     */
    orderBy?: WebhookInboxOrderByWithRelationInput | WebhookInboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookInboxes.
     */
    cursor?: WebhookInboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookInboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookInboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookInboxes.
     */
    distinct?: WebhookInboxScalarFieldEnum | WebhookInboxScalarFieldEnum[]
  }

  /**
   * WebhookInbox findFirstOrThrow
   */
  export type WebhookInboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookInbox
     */
    select?: WebhookInboxSelect<ExtArgs> | null
    /**
     * Filter, which WebhookInbox to fetch.
     */
    where?: WebhookInboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookInboxes to fetch.
     */
    orderBy?: WebhookInboxOrderByWithRelationInput | WebhookInboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookInboxes.
     */
    cursor?: WebhookInboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookInboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookInboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookInboxes.
     */
    distinct?: WebhookInboxScalarFieldEnum | WebhookInboxScalarFieldEnum[]
  }

  /**
   * WebhookInbox findMany
   */
  export type WebhookInboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookInbox
     */
    select?: WebhookInboxSelect<ExtArgs> | null
    /**
     * Filter, which WebhookInboxes to fetch.
     */
    where?: WebhookInboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookInboxes to fetch.
     */
    orderBy?: WebhookInboxOrderByWithRelationInput | WebhookInboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookInboxes.
     */
    cursor?: WebhookInboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookInboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookInboxes.
     */
    skip?: number
    distinct?: WebhookInboxScalarFieldEnum | WebhookInboxScalarFieldEnum[]
  }

  /**
   * WebhookInbox create
   */
  export type WebhookInboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookInbox
     */
    select?: WebhookInboxSelect<ExtArgs> | null
    /**
     * The data needed to create a WebhookInbox.
     */
    data: XOR<WebhookInboxCreateInput, WebhookInboxUncheckedCreateInput>
  }

  /**
   * WebhookInbox createMany
   */
  export type WebhookInboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookInboxes.
     */
    data: WebhookInboxCreateManyInput | WebhookInboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookInbox createManyAndReturn
   */
  export type WebhookInboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookInbox
     */
    select?: WebhookInboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WebhookInboxes.
     */
    data: WebhookInboxCreateManyInput | WebhookInboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookInbox update
   */
  export type WebhookInboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookInbox
     */
    select?: WebhookInboxSelect<ExtArgs> | null
    /**
     * The data needed to update a WebhookInbox.
     */
    data: XOR<WebhookInboxUpdateInput, WebhookInboxUncheckedUpdateInput>
    /**
     * Choose, which WebhookInbox to update.
     */
    where: WebhookInboxWhereUniqueInput
  }

  /**
   * WebhookInbox updateMany
   */
  export type WebhookInboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookInboxes.
     */
    data: XOR<WebhookInboxUpdateManyMutationInput, WebhookInboxUncheckedUpdateManyInput>
    /**
     * Filter which WebhookInboxes to update
     */
    where?: WebhookInboxWhereInput
  }

  /**
   * WebhookInbox upsert
   */
  export type WebhookInboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookInbox
     */
    select?: WebhookInboxSelect<ExtArgs> | null
    /**
     * The filter to search for the WebhookInbox to update in case it exists.
     */
    where: WebhookInboxWhereUniqueInput
    /**
     * In case the WebhookInbox found by the `where` argument doesn't exist, create a new WebhookInbox with this data.
     */
    create: XOR<WebhookInboxCreateInput, WebhookInboxUncheckedCreateInput>
    /**
     * In case the WebhookInbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookInboxUpdateInput, WebhookInboxUncheckedUpdateInput>
  }

  /**
   * WebhookInbox delete
   */
  export type WebhookInboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookInbox
     */
    select?: WebhookInboxSelect<ExtArgs> | null
    /**
     * Filter which WebhookInbox to delete.
     */
    where: WebhookInboxWhereUniqueInput
  }

  /**
   * WebhookInbox deleteMany
   */
  export type WebhookInboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookInboxes to delete
     */
    where?: WebhookInboxWhereInput
  }

  /**
   * WebhookInbox without action
   */
  export type WebhookInboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookInbox
     */
    select?: WebhookInboxSelect<ExtArgs> | null
  }


  /**
   * Model ReconciliationRecord
   */

  export type AggregateReconciliationRecord = {
    _count: ReconciliationRecordCountAggregateOutputType | null
    _avg: ReconciliationRecordAvgAggregateOutputType | null
    _sum: ReconciliationRecordSumAggregateOutputType | null
    _min: ReconciliationRecordMinAggregateOutputType | null
    _max: ReconciliationRecordMaxAggregateOutputType | null
  }

  export type ReconciliationRecordAvgAggregateOutputType = {
    internalAmountPaise: number | null
    pspAmountPaise: number | null
  }

  export type ReconciliationRecordSumAggregateOutputType = {
    internalAmountPaise: number | null
    pspAmountPaise: number | null
  }

  export type ReconciliationRecordMinAggregateOutputType = {
    id: string | null
    paymentId: string | null
    internalAmountPaise: number | null
    pspAmountPaise: number | null
    status: string | null
    notes: string | null
    reconciledAt: Date | null
  }

  export type ReconciliationRecordMaxAggregateOutputType = {
    id: string | null
    paymentId: string | null
    internalAmountPaise: number | null
    pspAmountPaise: number | null
    status: string | null
    notes: string | null
    reconciledAt: Date | null
  }

  export type ReconciliationRecordCountAggregateOutputType = {
    id: number
    paymentId: number
    internalAmountPaise: number
    pspAmountPaise: number
    status: number
    notes: number
    reconciledAt: number
    _all: number
  }


  export type ReconciliationRecordAvgAggregateInputType = {
    internalAmountPaise?: true
    pspAmountPaise?: true
  }

  export type ReconciliationRecordSumAggregateInputType = {
    internalAmountPaise?: true
    pspAmountPaise?: true
  }

  export type ReconciliationRecordMinAggregateInputType = {
    id?: true
    paymentId?: true
    internalAmountPaise?: true
    pspAmountPaise?: true
    status?: true
    notes?: true
    reconciledAt?: true
  }

  export type ReconciliationRecordMaxAggregateInputType = {
    id?: true
    paymentId?: true
    internalAmountPaise?: true
    pspAmountPaise?: true
    status?: true
    notes?: true
    reconciledAt?: true
  }

  export type ReconciliationRecordCountAggregateInputType = {
    id?: true
    paymentId?: true
    internalAmountPaise?: true
    pspAmountPaise?: true
    status?: true
    notes?: true
    reconciledAt?: true
    _all?: true
  }

  export type ReconciliationRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReconciliationRecord to aggregate.
     */
    where?: ReconciliationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReconciliationRecords to fetch.
     */
    orderBy?: ReconciliationRecordOrderByWithRelationInput | ReconciliationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReconciliationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReconciliationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReconciliationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReconciliationRecords
    **/
    _count?: true | ReconciliationRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReconciliationRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReconciliationRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReconciliationRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReconciliationRecordMaxAggregateInputType
  }

  export type GetReconciliationRecordAggregateType<T extends ReconciliationRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateReconciliationRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReconciliationRecord[P]>
      : GetScalarType<T[P], AggregateReconciliationRecord[P]>
  }




  export type ReconciliationRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReconciliationRecordWhereInput
    orderBy?: ReconciliationRecordOrderByWithAggregationInput | ReconciliationRecordOrderByWithAggregationInput[]
    by: ReconciliationRecordScalarFieldEnum[] | ReconciliationRecordScalarFieldEnum
    having?: ReconciliationRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReconciliationRecordCountAggregateInputType | true
    _avg?: ReconciliationRecordAvgAggregateInputType
    _sum?: ReconciliationRecordSumAggregateInputType
    _min?: ReconciliationRecordMinAggregateInputType
    _max?: ReconciliationRecordMaxAggregateInputType
  }

  export type ReconciliationRecordGroupByOutputType = {
    id: string
    paymentId: string
    internalAmountPaise: number
    pspAmountPaise: number
    status: string
    notes: string | null
    reconciledAt: Date
    _count: ReconciliationRecordCountAggregateOutputType | null
    _avg: ReconciliationRecordAvgAggregateOutputType | null
    _sum: ReconciliationRecordSumAggregateOutputType | null
    _min: ReconciliationRecordMinAggregateOutputType | null
    _max: ReconciliationRecordMaxAggregateOutputType | null
  }

  type GetReconciliationRecordGroupByPayload<T extends ReconciliationRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReconciliationRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReconciliationRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReconciliationRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ReconciliationRecordGroupByOutputType[P]>
        }
      >
    >


  export type ReconciliationRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    internalAmountPaise?: boolean
    pspAmountPaise?: boolean
    status?: boolean
    notes?: boolean
    reconciledAt?: boolean
  }, ExtArgs["result"]["reconciliationRecord"]>

  export type ReconciliationRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    internalAmountPaise?: boolean
    pspAmountPaise?: boolean
    status?: boolean
    notes?: boolean
    reconciledAt?: boolean
  }, ExtArgs["result"]["reconciliationRecord"]>

  export type ReconciliationRecordSelectScalar = {
    id?: boolean
    paymentId?: boolean
    internalAmountPaise?: boolean
    pspAmountPaise?: boolean
    status?: boolean
    notes?: boolean
    reconciledAt?: boolean
  }


  export type $ReconciliationRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReconciliationRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentId: string
      internalAmountPaise: number
      pspAmountPaise: number
      status: string
      notes: string | null
      reconciledAt: Date
    }, ExtArgs["result"]["reconciliationRecord"]>
    composites: {}
  }

  type ReconciliationRecordGetPayload<S extends boolean | null | undefined | ReconciliationRecordDefaultArgs> = $Result.GetResult<Prisma.$ReconciliationRecordPayload, S>

  type ReconciliationRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReconciliationRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReconciliationRecordCountAggregateInputType | true
    }

  export interface ReconciliationRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReconciliationRecord'], meta: { name: 'ReconciliationRecord' } }
    /**
     * Find zero or one ReconciliationRecord that matches the filter.
     * @param {ReconciliationRecordFindUniqueArgs} args - Arguments to find a ReconciliationRecord
     * @example
     * // Get one ReconciliationRecord
     * const reconciliationRecord = await prisma.reconciliationRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReconciliationRecordFindUniqueArgs>(args: SelectSubset<T, ReconciliationRecordFindUniqueArgs<ExtArgs>>): Prisma__ReconciliationRecordClient<$Result.GetResult<Prisma.$ReconciliationRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReconciliationRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReconciliationRecordFindUniqueOrThrowArgs} args - Arguments to find a ReconciliationRecord
     * @example
     * // Get one ReconciliationRecord
     * const reconciliationRecord = await prisma.reconciliationRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReconciliationRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ReconciliationRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReconciliationRecordClient<$Result.GetResult<Prisma.$ReconciliationRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReconciliationRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationRecordFindFirstArgs} args - Arguments to find a ReconciliationRecord
     * @example
     * // Get one ReconciliationRecord
     * const reconciliationRecord = await prisma.reconciliationRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReconciliationRecordFindFirstArgs>(args?: SelectSubset<T, ReconciliationRecordFindFirstArgs<ExtArgs>>): Prisma__ReconciliationRecordClient<$Result.GetResult<Prisma.$ReconciliationRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReconciliationRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationRecordFindFirstOrThrowArgs} args - Arguments to find a ReconciliationRecord
     * @example
     * // Get one ReconciliationRecord
     * const reconciliationRecord = await prisma.reconciliationRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReconciliationRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ReconciliationRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReconciliationRecordClient<$Result.GetResult<Prisma.$ReconciliationRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReconciliationRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReconciliationRecords
     * const reconciliationRecords = await prisma.reconciliationRecord.findMany()
     * 
     * // Get first 10 ReconciliationRecords
     * const reconciliationRecords = await prisma.reconciliationRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reconciliationRecordWithIdOnly = await prisma.reconciliationRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReconciliationRecordFindManyArgs>(args?: SelectSubset<T, ReconciliationRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReconciliationRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReconciliationRecord.
     * @param {ReconciliationRecordCreateArgs} args - Arguments to create a ReconciliationRecord.
     * @example
     * // Create one ReconciliationRecord
     * const ReconciliationRecord = await prisma.reconciliationRecord.create({
     *   data: {
     *     // ... data to create a ReconciliationRecord
     *   }
     * })
     * 
     */
    create<T extends ReconciliationRecordCreateArgs>(args: SelectSubset<T, ReconciliationRecordCreateArgs<ExtArgs>>): Prisma__ReconciliationRecordClient<$Result.GetResult<Prisma.$ReconciliationRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReconciliationRecords.
     * @param {ReconciliationRecordCreateManyArgs} args - Arguments to create many ReconciliationRecords.
     * @example
     * // Create many ReconciliationRecords
     * const reconciliationRecord = await prisma.reconciliationRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReconciliationRecordCreateManyArgs>(args?: SelectSubset<T, ReconciliationRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReconciliationRecords and returns the data saved in the database.
     * @param {ReconciliationRecordCreateManyAndReturnArgs} args - Arguments to create many ReconciliationRecords.
     * @example
     * // Create many ReconciliationRecords
     * const reconciliationRecord = await prisma.reconciliationRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReconciliationRecords and only return the `id`
     * const reconciliationRecordWithIdOnly = await prisma.reconciliationRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReconciliationRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ReconciliationRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReconciliationRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReconciliationRecord.
     * @param {ReconciliationRecordDeleteArgs} args - Arguments to delete one ReconciliationRecord.
     * @example
     * // Delete one ReconciliationRecord
     * const ReconciliationRecord = await prisma.reconciliationRecord.delete({
     *   where: {
     *     // ... filter to delete one ReconciliationRecord
     *   }
     * })
     * 
     */
    delete<T extends ReconciliationRecordDeleteArgs>(args: SelectSubset<T, ReconciliationRecordDeleteArgs<ExtArgs>>): Prisma__ReconciliationRecordClient<$Result.GetResult<Prisma.$ReconciliationRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReconciliationRecord.
     * @param {ReconciliationRecordUpdateArgs} args - Arguments to update one ReconciliationRecord.
     * @example
     * // Update one ReconciliationRecord
     * const reconciliationRecord = await prisma.reconciliationRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReconciliationRecordUpdateArgs>(args: SelectSubset<T, ReconciliationRecordUpdateArgs<ExtArgs>>): Prisma__ReconciliationRecordClient<$Result.GetResult<Prisma.$ReconciliationRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReconciliationRecords.
     * @param {ReconciliationRecordDeleteManyArgs} args - Arguments to filter ReconciliationRecords to delete.
     * @example
     * // Delete a few ReconciliationRecords
     * const { count } = await prisma.reconciliationRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReconciliationRecordDeleteManyArgs>(args?: SelectSubset<T, ReconciliationRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReconciliationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReconciliationRecords
     * const reconciliationRecord = await prisma.reconciliationRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReconciliationRecordUpdateManyArgs>(args: SelectSubset<T, ReconciliationRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReconciliationRecord.
     * @param {ReconciliationRecordUpsertArgs} args - Arguments to update or create a ReconciliationRecord.
     * @example
     * // Update or create a ReconciliationRecord
     * const reconciliationRecord = await prisma.reconciliationRecord.upsert({
     *   create: {
     *     // ... data to create a ReconciliationRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReconciliationRecord we want to update
     *   }
     * })
     */
    upsert<T extends ReconciliationRecordUpsertArgs>(args: SelectSubset<T, ReconciliationRecordUpsertArgs<ExtArgs>>): Prisma__ReconciliationRecordClient<$Result.GetResult<Prisma.$ReconciliationRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReconciliationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationRecordCountArgs} args - Arguments to filter ReconciliationRecords to count.
     * @example
     * // Count the number of ReconciliationRecords
     * const count = await prisma.reconciliationRecord.count({
     *   where: {
     *     // ... the filter for the ReconciliationRecords we want to count
     *   }
     * })
    **/
    count<T extends ReconciliationRecordCountArgs>(
      args?: Subset<T, ReconciliationRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReconciliationRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReconciliationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReconciliationRecordAggregateArgs>(args: Subset<T, ReconciliationRecordAggregateArgs>): Prisma.PrismaPromise<GetReconciliationRecordAggregateType<T>>

    /**
     * Group by ReconciliationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationRecordGroupByArgs} args - Group by arguments.
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
      T extends ReconciliationRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReconciliationRecordGroupByArgs['orderBy'] }
        : { orderBy?: ReconciliationRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReconciliationRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReconciliationRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReconciliationRecord model
   */
  readonly fields: ReconciliationRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReconciliationRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReconciliationRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ReconciliationRecord model
   */ 
  interface ReconciliationRecordFieldRefs {
    readonly id: FieldRef<"ReconciliationRecord", 'String'>
    readonly paymentId: FieldRef<"ReconciliationRecord", 'String'>
    readonly internalAmountPaise: FieldRef<"ReconciliationRecord", 'Int'>
    readonly pspAmountPaise: FieldRef<"ReconciliationRecord", 'Int'>
    readonly status: FieldRef<"ReconciliationRecord", 'String'>
    readonly notes: FieldRef<"ReconciliationRecord", 'String'>
    readonly reconciledAt: FieldRef<"ReconciliationRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReconciliationRecord findUnique
   */
  export type ReconciliationRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationRecord
     */
    select?: ReconciliationRecordSelect<ExtArgs> | null
    /**
     * Filter, which ReconciliationRecord to fetch.
     */
    where: ReconciliationRecordWhereUniqueInput
  }

  /**
   * ReconciliationRecord findUniqueOrThrow
   */
  export type ReconciliationRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationRecord
     */
    select?: ReconciliationRecordSelect<ExtArgs> | null
    /**
     * Filter, which ReconciliationRecord to fetch.
     */
    where: ReconciliationRecordWhereUniqueInput
  }

  /**
   * ReconciliationRecord findFirst
   */
  export type ReconciliationRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationRecord
     */
    select?: ReconciliationRecordSelect<ExtArgs> | null
    /**
     * Filter, which ReconciliationRecord to fetch.
     */
    where?: ReconciliationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReconciliationRecords to fetch.
     */
    orderBy?: ReconciliationRecordOrderByWithRelationInput | ReconciliationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReconciliationRecords.
     */
    cursor?: ReconciliationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReconciliationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReconciliationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReconciliationRecords.
     */
    distinct?: ReconciliationRecordScalarFieldEnum | ReconciliationRecordScalarFieldEnum[]
  }

  /**
   * ReconciliationRecord findFirstOrThrow
   */
  export type ReconciliationRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationRecord
     */
    select?: ReconciliationRecordSelect<ExtArgs> | null
    /**
     * Filter, which ReconciliationRecord to fetch.
     */
    where?: ReconciliationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReconciliationRecords to fetch.
     */
    orderBy?: ReconciliationRecordOrderByWithRelationInput | ReconciliationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReconciliationRecords.
     */
    cursor?: ReconciliationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReconciliationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReconciliationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReconciliationRecords.
     */
    distinct?: ReconciliationRecordScalarFieldEnum | ReconciliationRecordScalarFieldEnum[]
  }

  /**
   * ReconciliationRecord findMany
   */
  export type ReconciliationRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationRecord
     */
    select?: ReconciliationRecordSelect<ExtArgs> | null
    /**
     * Filter, which ReconciliationRecords to fetch.
     */
    where?: ReconciliationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReconciliationRecords to fetch.
     */
    orderBy?: ReconciliationRecordOrderByWithRelationInput | ReconciliationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReconciliationRecords.
     */
    cursor?: ReconciliationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReconciliationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReconciliationRecords.
     */
    skip?: number
    distinct?: ReconciliationRecordScalarFieldEnum | ReconciliationRecordScalarFieldEnum[]
  }

  /**
   * ReconciliationRecord create
   */
  export type ReconciliationRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationRecord
     */
    select?: ReconciliationRecordSelect<ExtArgs> | null
    /**
     * The data needed to create a ReconciliationRecord.
     */
    data: XOR<ReconciliationRecordCreateInput, ReconciliationRecordUncheckedCreateInput>
  }

  /**
   * ReconciliationRecord createMany
   */
  export type ReconciliationRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReconciliationRecords.
     */
    data: ReconciliationRecordCreateManyInput | ReconciliationRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReconciliationRecord createManyAndReturn
   */
  export type ReconciliationRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationRecord
     */
    select?: ReconciliationRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReconciliationRecords.
     */
    data: ReconciliationRecordCreateManyInput | ReconciliationRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReconciliationRecord update
   */
  export type ReconciliationRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationRecord
     */
    select?: ReconciliationRecordSelect<ExtArgs> | null
    /**
     * The data needed to update a ReconciliationRecord.
     */
    data: XOR<ReconciliationRecordUpdateInput, ReconciliationRecordUncheckedUpdateInput>
    /**
     * Choose, which ReconciliationRecord to update.
     */
    where: ReconciliationRecordWhereUniqueInput
  }

  /**
   * ReconciliationRecord updateMany
   */
  export type ReconciliationRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReconciliationRecords.
     */
    data: XOR<ReconciliationRecordUpdateManyMutationInput, ReconciliationRecordUncheckedUpdateManyInput>
    /**
     * Filter which ReconciliationRecords to update
     */
    where?: ReconciliationRecordWhereInput
  }

  /**
   * ReconciliationRecord upsert
   */
  export type ReconciliationRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationRecord
     */
    select?: ReconciliationRecordSelect<ExtArgs> | null
    /**
     * The filter to search for the ReconciliationRecord to update in case it exists.
     */
    where: ReconciliationRecordWhereUniqueInput
    /**
     * In case the ReconciliationRecord found by the `where` argument doesn't exist, create a new ReconciliationRecord with this data.
     */
    create: XOR<ReconciliationRecordCreateInput, ReconciliationRecordUncheckedCreateInput>
    /**
     * In case the ReconciliationRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReconciliationRecordUpdateInput, ReconciliationRecordUncheckedUpdateInput>
  }

  /**
   * ReconciliationRecord delete
   */
  export type ReconciliationRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationRecord
     */
    select?: ReconciliationRecordSelect<ExtArgs> | null
    /**
     * Filter which ReconciliationRecord to delete.
     */
    where: ReconciliationRecordWhereUniqueInput
  }

  /**
   * ReconciliationRecord deleteMany
   */
  export type ReconciliationRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReconciliationRecords to delete
     */
    where?: ReconciliationRecordWhereInput
  }

  /**
   * ReconciliationRecord without action
   */
  export type ReconciliationRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationRecord
     */
    select?: ReconciliationRecordSelect<ExtArgs> | null
  }


  /**
   * Model PayoutSettlement
   */

  export type AggregatePayoutSettlement = {
    _count: PayoutSettlementCountAggregateOutputType | null
    _avg: PayoutSettlementAvgAggregateOutputType | null
    _sum: PayoutSettlementSumAggregateOutputType | null
    _min: PayoutSettlementMinAggregateOutputType | null
    _max: PayoutSettlementMaxAggregateOutputType | null
  }

  export type PayoutSettlementAvgAggregateOutputType = {
    grossAmountPaise: number | null
    refundedPaise: number | null
    netAmountPaise: number | null
  }

  export type PayoutSettlementSumAggregateOutputType = {
    grossAmountPaise: number | null
    refundedPaise: number | null
    netAmountPaise: number | null
  }

  export type PayoutSettlementMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    cityCode: string | null
    grossAmountPaise: number | null
    refundedPaise: number | null
    netAmountPaise: number | null
    status: string | null
    releasedAt: Date | null
    releasedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayoutSettlementMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    cityCode: string | null
    grossAmountPaise: number | null
    refundedPaise: number | null
    netAmountPaise: number | null
    status: string | null
    releasedAt: Date | null
    releasedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayoutSettlementCountAggregateOutputType = {
    id: number
    merchantId: number
    cityCode: number
    grossAmountPaise: number
    refundedPaise: number
    netAmountPaise: number
    status: number
    releasedAt: number
    releasedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayoutSettlementAvgAggregateInputType = {
    grossAmountPaise?: true
    refundedPaise?: true
    netAmountPaise?: true
  }

  export type PayoutSettlementSumAggregateInputType = {
    grossAmountPaise?: true
    refundedPaise?: true
    netAmountPaise?: true
  }

  export type PayoutSettlementMinAggregateInputType = {
    id?: true
    merchantId?: true
    cityCode?: true
    grossAmountPaise?: true
    refundedPaise?: true
    netAmountPaise?: true
    status?: true
    releasedAt?: true
    releasedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayoutSettlementMaxAggregateInputType = {
    id?: true
    merchantId?: true
    cityCode?: true
    grossAmountPaise?: true
    refundedPaise?: true
    netAmountPaise?: true
    status?: true
    releasedAt?: true
    releasedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayoutSettlementCountAggregateInputType = {
    id?: true
    merchantId?: true
    cityCode?: true
    grossAmountPaise?: true
    refundedPaise?: true
    netAmountPaise?: true
    status?: true
    releasedAt?: true
    releasedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayoutSettlementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayoutSettlement to aggregate.
     */
    where?: PayoutSettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutSettlements to fetch.
     */
    orderBy?: PayoutSettlementOrderByWithRelationInput | PayoutSettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayoutSettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutSettlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutSettlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayoutSettlements
    **/
    _count?: true | PayoutSettlementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayoutSettlementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayoutSettlementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayoutSettlementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayoutSettlementMaxAggregateInputType
  }

  export type GetPayoutSettlementAggregateType<T extends PayoutSettlementAggregateArgs> = {
        [P in keyof T & keyof AggregatePayoutSettlement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayoutSettlement[P]>
      : GetScalarType<T[P], AggregatePayoutSettlement[P]>
  }




  export type PayoutSettlementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutSettlementWhereInput
    orderBy?: PayoutSettlementOrderByWithAggregationInput | PayoutSettlementOrderByWithAggregationInput[]
    by: PayoutSettlementScalarFieldEnum[] | PayoutSettlementScalarFieldEnum
    having?: PayoutSettlementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayoutSettlementCountAggregateInputType | true
    _avg?: PayoutSettlementAvgAggregateInputType
    _sum?: PayoutSettlementSumAggregateInputType
    _min?: PayoutSettlementMinAggregateInputType
    _max?: PayoutSettlementMaxAggregateInputType
  }

  export type PayoutSettlementGroupByOutputType = {
    id: string
    merchantId: string
    cityCode: string
    grossAmountPaise: number
    refundedPaise: number
    netAmountPaise: number
    status: string
    releasedAt: Date | null
    releasedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: PayoutSettlementCountAggregateOutputType | null
    _avg: PayoutSettlementAvgAggregateOutputType | null
    _sum: PayoutSettlementSumAggregateOutputType | null
    _min: PayoutSettlementMinAggregateOutputType | null
    _max: PayoutSettlementMaxAggregateOutputType | null
  }

  type GetPayoutSettlementGroupByPayload<T extends PayoutSettlementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayoutSettlementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayoutSettlementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayoutSettlementGroupByOutputType[P]>
            : GetScalarType<T[P], PayoutSettlementGroupByOutputType[P]>
        }
      >
    >


  export type PayoutSettlementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    cityCode?: boolean
    grossAmountPaise?: boolean
    refundedPaise?: boolean
    netAmountPaise?: boolean
    status?: boolean
    releasedAt?: boolean
    releasedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payoutSettlement"]>

  export type PayoutSettlementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    cityCode?: boolean
    grossAmountPaise?: boolean
    refundedPaise?: boolean
    netAmountPaise?: boolean
    status?: boolean
    releasedAt?: boolean
    releasedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payoutSettlement"]>

  export type PayoutSettlementSelectScalar = {
    id?: boolean
    merchantId?: boolean
    cityCode?: boolean
    grossAmountPaise?: boolean
    refundedPaise?: boolean
    netAmountPaise?: boolean
    status?: boolean
    releasedAt?: boolean
    releasedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PayoutSettlementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayoutSettlement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      cityCode: string
      grossAmountPaise: number
      refundedPaise: number
      netAmountPaise: number
      status: string
      releasedAt: Date | null
      releasedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payoutSettlement"]>
    composites: {}
  }

  type PayoutSettlementGetPayload<S extends boolean | null | undefined | PayoutSettlementDefaultArgs> = $Result.GetResult<Prisma.$PayoutSettlementPayload, S>

  type PayoutSettlementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PayoutSettlementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PayoutSettlementCountAggregateInputType | true
    }

  export interface PayoutSettlementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayoutSettlement'], meta: { name: 'PayoutSettlement' } }
    /**
     * Find zero or one PayoutSettlement that matches the filter.
     * @param {PayoutSettlementFindUniqueArgs} args - Arguments to find a PayoutSettlement
     * @example
     * // Get one PayoutSettlement
     * const payoutSettlement = await prisma.payoutSettlement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayoutSettlementFindUniqueArgs>(args: SelectSubset<T, PayoutSettlementFindUniqueArgs<ExtArgs>>): Prisma__PayoutSettlementClient<$Result.GetResult<Prisma.$PayoutSettlementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PayoutSettlement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PayoutSettlementFindUniqueOrThrowArgs} args - Arguments to find a PayoutSettlement
     * @example
     * // Get one PayoutSettlement
     * const payoutSettlement = await prisma.payoutSettlement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayoutSettlementFindUniqueOrThrowArgs>(args: SelectSubset<T, PayoutSettlementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayoutSettlementClient<$Result.GetResult<Prisma.$PayoutSettlementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PayoutSettlement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettlementFindFirstArgs} args - Arguments to find a PayoutSettlement
     * @example
     * // Get one PayoutSettlement
     * const payoutSettlement = await prisma.payoutSettlement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayoutSettlementFindFirstArgs>(args?: SelectSubset<T, PayoutSettlementFindFirstArgs<ExtArgs>>): Prisma__PayoutSettlementClient<$Result.GetResult<Prisma.$PayoutSettlementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PayoutSettlement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettlementFindFirstOrThrowArgs} args - Arguments to find a PayoutSettlement
     * @example
     * // Get one PayoutSettlement
     * const payoutSettlement = await prisma.payoutSettlement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayoutSettlementFindFirstOrThrowArgs>(args?: SelectSubset<T, PayoutSettlementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayoutSettlementClient<$Result.GetResult<Prisma.$PayoutSettlementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PayoutSettlements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettlementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayoutSettlements
     * const payoutSettlements = await prisma.payoutSettlement.findMany()
     * 
     * // Get first 10 PayoutSettlements
     * const payoutSettlements = await prisma.payoutSettlement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payoutSettlementWithIdOnly = await prisma.payoutSettlement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayoutSettlementFindManyArgs>(args?: SelectSubset<T, PayoutSettlementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutSettlementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PayoutSettlement.
     * @param {PayoutSettlementCreateArgs} args - Arguments to create a PayoutSettlement.
     * @example
     * // Create one PayoutSettlement
     * const PayoutSettlement = await prisma.payoutSettlement.create({
     *   data: {
     *     // ... data to create a PayoutSettlement
     *   }
     * })
     * 
     */
    create<T extends PayoutSettlementCreateArgs>(args: SelectSubset<T, PayoutSettlementCreateArgs<ExtArgs>>): Prisma__PayoutSettlementClient<$Result.GetResult<Prisma.$PayoutSettlementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PayoutSettlements.
     * @param {PayoutSettlementCreateManyArgs} args - Arguments to create many PayoutSettlements.
     * @example
     * // Create many PayoutSettlements
     * const payoutSettlement = await prisma.payoutSettlement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayoutSettlementCreateManyArgs>(args?: SelectSubset<T, PayoutSettlementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayoutSettlements and returns the data saved in the database.
     * @param {PayoutSettlementCreateManyAndReturnArgs} args - Arguments to create many PayoutSettlements.
     * @example
     * // Create many PayoutSettlements
     * const payoutSettlement = await prisma.payoutSettlement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayoutSettlements and only return the `id`
     * const payoutSettlementWithIdOnly = await prisma.payoutSettlement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayoutSettlementCreateManyAndReturnArgs>(args?: SelectSubset<T, PayoutSettlementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutSettlementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PayoutSettlement.
     * @param {PayoutSettlementDeleteArgs} args - Arguments to delete one PayoutSettlement.
     * @example
     * // Delete one PayoutSettlement
     * const PayoutSettlement = await prisma.payoutSettlement.delete({
     *   where: {
     *     // ... filter to delete one PayoutSettlement
     *   }
     * })
     * 
     */
    delete<T extends PayoutSettlementDeleteArgs>(args: SelectSubset<T, PayoutSettlementDeleteArgs<ExtArgs>>): Prisma__PayoutSettlementClient<$Result.GetResult<Prisma.$PayoutSettlementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PayoutSettlement.
     * @param {PayoutSettlementUpdateArgs} args - Arguments to update one PayoutSettlement.
     * @example
     * // Update one PayoutSettlement
     * const payoutSettlement = await prisma.payoutSettlement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayoutSettlementUpdateArgs>(args: SelectSubset<T, PayoutSettlementUpdateArgs<ExtArgs>>): Prisma__PayoutSettlementClient<$Result.GetResult<Prisma.$PayoutSettlementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PayoutSettlements.
     * @param {PayoutSettlementDeleteManyArgs} args - Arguments to filter PayoutSettlements to delete.
     * @example
     * // Delete a few PayoutSettlements
     * const { count } = await prisma.payoutSettlement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayoutSettlementDeleteManyArgs>(args?: SelectSubset<T, PayoutSettlementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayoutSettlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettlementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayoutSettlements
     * const payoutSettlement = await prisma.payoutSettlement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayoutSettlementUpdateManyArgs>(args: SelectSubset<T, PayoutSettlementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PayoutSettlement.
     * @param {PayoutSettlementUpsertArgs} args - Arguments to update or create a PayoutSettlement.
     * @example
     * // Update or create a PayoutSettlement
     * const payoutSettlement = await prisma.payoutSettlement.upsert({
     *   create: {
     *     // ... data to create a PayoutSettlement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayoutSettlement we want to update
     *   }
     * })
     */
    upsert<T extends PayoutSettlementUpsertArgs>(args: SelectSubset<T, PayoutSettlementUpsertArgs<ExtArgs>>): Prisma__PayoutSettlementClient<$Result.GetResult<Prisma.$PayoutSettlementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PayoutSettlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettlementCountArgs} args - Arguments to filter PayoutSettlements to count.
     * @example
     * // Count the number of PayoutSettlements
     * const count = await prisma.payoutSettlement.count({
     *   where: {
     *     // ... the filter for the PayoutSettlements we want to count
     *   }
     * })
    **/
    count<T extends PayoutSettlementCountArgs>(
      args?: Subset<T, PayoutSettlementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayoutSettlementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayoutSettlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettlementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayoutSettlementAggregateArgs>(args: Subset<T, PayoutSettlementAggregateArgs>): Prisma.PrismaPromise<GetPayoutSettlementAggregateType<T>>

    /**
     * Group by PayoutSettlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettlementGroupByArgs} args - Group by arguments.
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
      T extends PayoutSettlementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayoutSettlementGroupByArgs['orderBy'] }
        : { orderBy?: PayoutSettlementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayoutSettlementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutSettlementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayoutSettlement model
   */
  readonly fields: PayoutSettlementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayoutSettlement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayoutSettlementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PayoutSettlement model
   */ 
  interface PayoutSettlementFieldRefs {
    readonly id: FieldRef<"PayoutSettlement", 'String'>
    readonly merchantId: FieldRef<"PayoutSettlement", 'String'>
    readonly cityCode: FieldRef<"PayoutSettlement", 'String'>
    readonly grossAmountPaise: FieldRef<"PayoutSettlement", 'Int'>
    readonly refundedPaise: FieldRef<"PayoutSettlement", 'Int'>
    readonly netAmountPaise: FieldRef<"PayoutSettlement", 'Int'>
    readonly status: FieldRef<"PayoutSettlement", 'String'>
    readonly releasedAt: FieldRef<"PayoutSettlement", 'DateTime'>
    readonly releasedBy: FieldRef<"PayoutSettlement", 'String'>
    readonly createdAt: FieldRef<"PayoutSettlement", 'DateTime'>
    readonly updatedAt: FieldRef<"PayoutSettlement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayoutSettlement findUnique
   */
  export type PayoutSettlementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettlement
     */
    select?: PayoutSettlementSelect<ExtArgs> | null
    /**
     * Filter, which PayoutSettlement to fetch.
     */
    where: PayoutSettlementWhereUniqueInput
  }

  /**
   * PayoutSettlement findUniqueOrThrow
   */
  export type PayoutSettlementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettlement
     */
    select?: PayoutSettlementSelect<ExtArgs> | null
    /**
     * Filter, which PayoutSettlement to fetch.
     */
    where: PayoutSettlementWhereUniqueInput
  }

  /**
   * PayoutSettlement findFirst
   */
  export type PayoutSettlementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettlement
     */
    select?: PayoutSettlementSelect<ExtArgs> | null
    /**
     * Filter, which PayoutSettlement to fetch.
     */
    where?: PayoutSettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutSettlements to fetch.
     */
    orderBy?: PayoutSettlementOrderByWithRelationInput | PayoutSettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayoutSettlements.
     */
    cursor?: PayoutSettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutSettlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutSettlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayoutSettlements.
     */
    distinct?: PayoutSettlementScalarFieldEnum | PayoutSettlementScalarFieldEnum[]
  }

  /**
   * PayoutSettlement findFirstOrThrow
   */
  export type PayoutSettlementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettlement
     */
    select?: PayoutSettlementSelect<ExtArgs> | null
    /**
     * Filter, which PayoutSettlement to fetch.
     */
    where?: PayoutSettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutSettlements to fetch.
     */
    orderBy?: PayoutSettlementOrderByWithRelationInput | PayoutSettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayoutSettlements.
     */
    cursor?: PayoutSettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutSettlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutSettlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayoutSettlements.
     */
    distinct?: PayoutSettlementScalarFieldEnum | PayoutSettlementScalarFieldEnum[]
  }

  /**
   * PayoutSettlement findMany
   */
  export type PayoutSettlementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettlement
     */
    select?: PayoutSettlementSelect<ExtArgs> | null
    /**
     * Filter, which PayoutSettlements to fetch.
     */
    where?: PayoutSettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutSettlements to fetch.
     */
    orderBy?: PayoutSettlementOrderByWithRelationInput | PayoutSettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayoutSettlements.
     */
    cursor?: PayoutSettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutSettlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutSettlements.
     */
    skip?: number
    distinct?: PayoutSettlementScalarFieldEnum | PayoutSettlementScalarFieldEnum[]
  }

  /**
   * PayoutSettlement create
   */
  export type PayoutSettlementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettlement
     */
    select?: PayoutSettlementSelect<ExtArgs> | null
    /**
     * The data needed to create a PayoutSettlement.
     */
    data: XOR<PayoutSettlementCreateInput, PayoutSettlementUncheckedCreateInput>
  }

  /**
   * PayoutSettlement createMany
   */
  export type PayoutSettlementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayoutSettlements.
     */
    data: PayoutSettlementCreateManyInput | PayoutSettlementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayoutSettlement createManyAndReturn
   */
  export type PayoutSettlementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettlement
     */
    select?: PayoutSettlementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PayoutSettlements.
     */
    data: PayoutSettlementCreateManyInput | PayoutSettlementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayoutSettlement update
   */
  export type PayoutSettlementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettlement
     */
    select?: PayoutSettlementSelect<ExtArgs> | null
    /**
     * The data needed to update a PayoutSettlement.
     */
    data: XOR<PayoutSettlementUpdateInput, PayoutSettlementUncheckedUpdateInput>
    /**
     * Choose, which PayoutSettlement to update.
     */
    where: PayoutSettlementWhereUniqueInput
  }

  /**
   * PayoutSettlement updateMany
   */
  export type PayoutSettlementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayoutSettlements.
     */
    data: XOR<PayoutSettlementUpdateManyMutationInput, PayoutSettlementUncheckedUpdateManyInput>
    /**
     * Filter which PayoutSettlements to update
     */
    where?: PayoutSettlementWhereInput
  }

  /**
   * PayoutSettlement upsert
   */
  export type PayoutSettlementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettlement
     */
    select?: PayoutSettlementSelect<ExtArgs> | null
    /**
     * The filter to search for the PayoutSettlement to update in case it exists.
     */
    where: PayoutSettlementWhereUniqueInput
    /**
     * In case the PayoutSettlement found by the `where` argument doesn't exist, create a new PayoutSettlement with this data.
     */
    create: XOR<PayoutSettlementCreateInput, PayoutSettlementUncheckedCreateInput>
    /**
     * In case the PayoutSettlement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayoutSettlementUpdateInput, PayoutSettlementUncheckedUpdateInput>
  }

  /**
   * PayoutSettlement delete
   */
  export type PayoutSettlementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettlement
     */
    select?: PayoutSettlementSelect<ExtArgs> | null
    /**
     * Filter which PayoutSettlement to delete.
     */
    where: PayoutSettlementWhereUniqueInput
  }

  /**
   * PayoutSettlement deleteMany
   */
  export type PayoutSettlementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayoutSettlements to delete
     */
    where?: PayoutSettlementWhereInput
  }

  /**
   * PayoutSettlement without action
   */
  export type PayoutSettlementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettlement
     */
    select?: PayoutSettlementSelect<ExtArgs> | null
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


  export const PaymentIntentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    tenantId: 'tenantId',
    cityCode: 'cityCode',
    amountPaise: 'amountPaise',
    currency: 'currency',
    status: 'status',
    provider: 'provider',
    pspReference: 'pspReference',
    createdAt: 'createdAt'
  };

  export type PaymentIntentScalarFieldEnum = (typeof PaymentIntentScalarFieldEnum)[keyof typeof PaymentIntentScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    intentId: 'intentId',
    orderId: 'orderId',
    cityCode: 'cityCode',
    amountPaise: 'amountPaise',
    pspPaymentId: 'pspPaymentId',
    pspSignature: 'pspSignature',
    status: 'status',
    verifiedAt: 'verifiedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const RefundScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    orderId: 'orderId',
    cityCode: 'cityCode',
    amountPaise: 'amountPaise',
    reason: 'reason',
    status: 'status',
    pspRefundId: 'pspRefundId',
    createdAt: 'createdAt'
  };

  export type RefundScalarFieldEnum = (typeof RefundScalarFieldEnum)[keyof typeof RefundScalarFieldEnum]


  export const WebhookInboxScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    eventId: 'eventId',
    payload: 'payload',
    isProcessed: 'isProcessed',
    processedAt: 'processedAt',
    createdAt: 'createdAt'
  };

  export type WebhookInboxScalarFieldEnum = (typeof WebhookInboxScalarFieldEnum)[keyof typeof WebhookInboxScalarFieldEnum]


  export const ReconciliationRecordScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    internalAmountPaise: 'internalAmountPaise',
    pspAmountPaise: 'pspAmountPaise',
    status: 'status',
    notes: 'notes',
    reconciledAt: 'reconciledAt'
  };

  export type ReconciliationRecordScalarFieldEnum = (typeof ReconciliationRecordScalarFieldEnum)[keyof typeof ReconciliationRecordScalarFieldEnum]


  export const PayoutSettlementScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    cityCode: 'cityCode',
    grossAmountPaise: 'grossAmountPaise',
    refundedPaise: 'refundedPaise',
    netAmountPaise: 'netAmountPaise',
    status: 'status',
    releasedAt: 'releasedAt',
    releasedBy: 'releasedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayoutSettlementScalarFieldEnum = (typeof PayoutSettlementScalarFieldEnum)[keyof typeof PayoutSettlementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type PaymentIntentWhereInput = {
    AND?: PaymentIntentWhereInput | PaymentIntentWhereInput[]
    OR?: PaymentIntentWhereInput[]
    NOT?: PaymentIntentWhereInput | PaymentIntentWhereInput[]
    id?: StringFilter<"PaymentIntent"> | string
    orderId?: StringFilter<"PaymentIntent"> | string
    tenantId?: StringFilter<"PaymentIntent"> | string
    cityCode?: StringFilter<"PaymentIntent"> | string
    amountPaise?: IntFilter<"PaymentIntent"> | number
    currency?: StringFilter<"PaymentIntent"> | string
    status?: StringFilter<"PaymentIntent"> | string
    provider?: StringFilter<"PaymentIntent"> | string
    pspReference?: StringNullableFilter<"PaymentIntent"> | string | null
    createdAt?: DateTimeFilter<"PaymentIntent"> | Date | string
    payment?: XOR<PaymentNullableRelationFilter, PaymentWhereInput> | null
  }

  export type PaymentIntentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    tenantId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    pspReference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    payment?: PaymentOrderByWithRelationInput
  }

  export type PaymentIntentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: PaymentIntentWhereInput | PaymentIntentWhereInput[]
    OR?: PaymentIntentWhereInput[]
    NOT?: PaymentIntentWhereInput | PaymentIntentWhereInput[]
    tenantId?: StringFilter<"PaymentIntent"> | string
    cityCode?: StringFilter<"PaymentIntent"> | string
    amountPaise?: IntFilter<"PaymentIntent"> | number
    currency?: StringFilter<"PaymentIntent"> | string
    status?: StringFilter<"PaymentIntent"> | string
    provider?: StringFilter<"PaymentIntent"> | string
    pspReference?: StringNullableFilter<"PaymentIntent"> | string | null
    createdAt?: DateTimeFilter<"PaymentIntent"> | Date | string
    payment?: XOR<PaymentNullableRelationFilter, PaymentWhereInput> | null
  }, "id" | "orderId">

  export type PaymentIntentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    tenantId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    pspReference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentIntentCountOrderByAggregateInput
    _avg?: PaymentIntentAvgOrderByAggregateInput
    _max?: PaymentIntentMaxOrderByAggregateInput
    _min?: PaymentIntentMinOrderByAggregateInput
    _sum?: PaymentIntentSumOrderByAggregateInput
  }

  export type PaymentIntentScalarWhereWithAggregatesInput = {
    AND?: PaymentIntentScalarWhereWithAggregatesInput | PaymentIntentScalarWhereWithAggregatesInput[]
    OR?: PaymentIntentScalarWhereWithAggregatesInput[]
    NOT?: PaymentIntentScalarWhereWithAggregatesInput | PaymentIntentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentIntent"> | string
    orderId?: StringWithAggregatesFilter<"PaymentIntent"> | string
    tenantId?: StringWithAggregatesFilter<"PaymentIntent"> | string
    cityCode?: StringWithAggregatesFilter<"PaymentIntent"> | string
    amountPaise?: IntWithAggregatesFilter<"PaymentIntent"> | number
    currency?: StringWithAggregatesFilter<"PaymentIntent"> | string
    status?: StringWithAggregatesFilter<"PaymentIntent"> | string
    provider?: StringWithAggregatesFilter<"PaymentIntent"> | string
    pspReference?: StringNullableWithAggregatesFilter<"PaymentIntent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentIntent"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    intentId?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    cityCode?: StringFilter<"Payment"> | string
    amountPaise?: IntFilter<"Payment"> | number
    pspPaymentId?: StringFilter<"Payment"> | string
    pspSignature?: StringNullableFilter<"Payment"> | string | null
    status?: StringFilter<"Payment"> | string
    verifiedAt?: DateTimeFilter<"Payment"> | Date | string
    intent?: XOR<PaymentIntentRelationFilter, PaymentIntentWhereInput>
    refunds?: RefundListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    intentId?: SortOrder
    orderId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    pspPaymentId?: SortOrder
    pspSignature?: SortOrderInput | SortOrder
    status?: SortOrder
    verifiedAt?: SortOrder
    intent?: PaymentIntentOrderByWithRelationInput
    refunds?: RefundOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    intentId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    orderId?: StringFilter<"Payment"> | string
    cityCode?: StringFilter<"Payment"> | string
    amountPaise?: IntFilter<"Payment"> | number
    pspPaymentId?: StringFilter<"Payment"> | string
    pspSignature?: StringNullableFilter<"Payment"> | string | null
    status?: StringFilter<"Payment"> | string
    verifiedAt?: DateTimeFilter<"Payment"> | Date | string
    intent?: XOR<PaymentIntentRelationFilter, PaymentIntentWhereInput>
    refunds?: RefundListRelationFilter
  }, "id" | "intentId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    intentId?: SortOrder
    orderId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    pspPaymentId?: SortOrder
    pspSignature?: SortOrderInput | SortOrder
    status?: SortOrder
    verifiedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    intentId?: StringWithAggregatesFilter<"Payment"> | string
    orderId?: StringWithAggregatesFilter<"Payment"> | string
    cityCode?: StringWithAggregatesFilter<"Payment"> | string
    amountPaise?: IntWithAggregatesFilter<"Payment"> | number
    pspPaymentId?: StringWithAggregatesFilter<"Payment"> | string
    pspSignature?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: StringWithAggregatesFilter<"Payment"> | string
    verifiedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type RefundWhereInput = {
    AND?: RefundWhereInput | RefundWhereInput[]
    OR?: RefundWhereInput[]
    NOT?: RefundWhereInput | RefundWhereInput[]
    id?: StringFilter<"Refund"> | string
    paymentId?: StringFilter<"Refund"> | string
    orderId?: StringFilter<"Refund"> | string
    cityCode?: StringFilter<"Refund"> | string
    amountPaise?: IntFilter<"Refund"> | number
    reason?: StringFilter<"Refund"> | string
    status?: StringFilter<"Refund"> | string
    pspRefundId?: StringNullableFilter<"Refund"> | string | null
    createdAt?: DateTimeFilter<"Refund"> | Date | string
    payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }

  export type RefundOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    orderId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    pspRefundId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    payment?: PaymentOrderByWithRelationInput
  }

  export type RefundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefundWhereInput | RefundWhereInput[]
    OR?: RefundWhereInput[]
    NOT?: RefundWhereInput | RefundWhereInput[]
    paymentId?: StringFilter<"Refund"> | string
    orderId?: StringFilter<"Refund"> | string
    cityCode?: StringFilter<"Refund"> | string
    amountPaise?: IntFilter<"Refund"> | number
    reason?: StringFilter<"Refund"> | string
    status?: StringFilter<"Refund"> | string
    pspRefundId?: StringNullableFilter<"Refund"> | string | null
    createdAt?: DateTimeFilter<"Refund"> | Date | string
    payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }, "id">

  export type RefundOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    orderId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    pspRefundId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RefundCountOrderByAggregateInput
    _avg?: RefundAvgOrderByAggregateInput
    _max?: RefundMaxOrderByAggregateInput
    _min?: RefundMinOrderByAggregateInput
    _sum?: RefundSumOrderByAggregateInput
  }

  export type RefundScalarWhereWithAggregatesInput = {
    AND?: RefundScalarWhereWithAggregatesInput | RefundScalarWhereWithAggregatesInput[]
    OR?: RefundScalarWhereWithAggregatesInput[]
    NOT?: RefundScalarWhereWithAggregatesInput | RefundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Refund"> | string
    paymentId?: StringWithAggregatesFilter<"Refund"> | string
    orderId?: StringWithAggregatesFilter<"Refund"> | string
    cityCode?: StringWithAggregatesFilter<"Refund"> | string
    amountPaise?: IntWithAggregatesFilter<"Refund"> | number
    reason?: StringWithAggregatesFilter<"Refund"> | string
    status?: StringWithAggregatesFilter<"Refund"> | string
    pspRefundId?: StringNullableWithAggregatesFilter<"Refund"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Refund"> | Date | string
  }

  export type WebhookInboxWhereInput = {
    AND?: WebhookInboxWhereInput | WebhookInboxWhereInput[]
    OR?: WebhookInboxWhereInput[]
    NOT?: WebhookInboxWhereInput | WebhookInboxWhereInput[]
    id?: StringFilter<"WebhookInbox"> | string
    provider?: StringFilter<"WebhookInbox"> | string
    eventId?: StringFilter<"WebhookInbox"> | string
    payload?: JsonFilter<"WebhookInbox">
    isProcessed?: BoolFilter<"WebhookInbox"> | boolean
    processedAt?: DateTimeNullableFilter<"WebhookInbox"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookInbox"> | Date | string
  }

  export type WebhookInboxOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    payload?: SortOrder
    isProcessed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type WebhookInboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    AND?: WebhookInboxWhereInput | WebhookInboxWhereInput[]
    OR?: WebhookInboxWhereInput[]
    NOT?: WebhookInboxWhereInput | WebhookInboxWhereInput[]
    provider?: StringFilter<"WebhookInbox"> | string
    payload?: JsonFilter<"WebhookInbox">
    isProcessed?: BoolFilter<"WebhookInbox"> | boolean
    processedAt?: DateTimeNullableFilter<"WebhookInbox"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookInbox"> | Date | string
  }, "id" | "eventId">

  export type WebhookInboxOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    payload?: SortOrder
    isProcessed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WebhookInboxCountOrderByAggregateInput
    _max?: WebhookInboxMaxOrderByAggregateInput
    _min?: WebhookInboxMinOrderByAggregateInput
  }

  export type WebhookInboxScalarWhereWithAggregatesInput = {
    AND?: WebhookInboxScalarWhereWithAggregatesInput | WebhookInboxScalarWhereWithAggregatesInput[]
    OR?: WebhookInboxScalarWhereWithAggregatesInput[]
    NOT?: WebhookInboxScalarWhereWithAggregatesInput | WebhookInboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookInbox"> | string
    provider?: StringWithAggregatesFilter<"WebhookInbox"> | string
    eventId?: StringWithAggregatesFilter<"WebhookInbox"> | string
    payload?: JsonWithAggregatesFilter<"WebhookInbox">
    isProcessed?: BoolWithAggregatesFilter<"WebhookInbox"> | boolean
    processedAt?: DateTimeNullableWithAggregatesFilter<"WebhookInbox"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WebhookInbox"> | Date | string
  }

  export type ReconciliationRecordWhereInput = {
    AND?: ReconciliationRecordWhereInput | ReconciliationRecordWhereInput[]
    OR?: ReconciliationRecordWhereInput[]
    NOT?: ReconciliationRecordWhereInput | ReconciliationRecordWhereInput[]
    id?: StringFilter<"ReconciliationRecord"> | string
    paymentId?: StringFilter<"ReconciliationRecord"> | string
    internalAmountPaise?: IntFilter<"ReconciliationRecord"> | number
    pspAmountPaise?: IntFilter<"ReconciliationRecord"> | number
    status?: StringFilter<"ReconciliationRecord"> | string
    notes?: StringNullableFilter<"ReconciliationRecord"> | string | null
    reconciledAt?: DateTimeFilter<"ReconciliationRecord"> | Date | string
  }

  export type ReconciliationRecordOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    internalAmountPaise?: SortOrder
    pspAmountPaise?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    reconciledAt?: SortOrder
  }

  export type ReconciliationRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReconciliationRecordWhereInput | ReconciliationRecordWhereInput[]
    OR?: ReconciliationRecordWhereInput[]
    NOT?: ReconciliationRecordWhereInput | ReconciliationRecordWhereInput[]
    paymentId?: StringFilter<"ReconciliationRecord"> | string
    internalAmountPaise?: IntFilter<"ReconciliationRecord"> | number
    pspAmountPaise?: IntFilter<"ReconciliationRecord"> | number
    status?: StringFilter<"ReconciliationRecord"> | string
    notes?: StringNullableFilter<"ReconciliationRecord"> | string | null
    reconciledAt?: DateTimeFilter<"ReconciliationRecord"> | Date | string
  }, "id">

  export type ReconciliationRecordOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    internalAmountPaise?: SortOrder
    pspAmountPaise?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    reconciledAt?: SortOrder
    _count?: ReconciliationRecordCountOrderByAggregateInput
    _avg?: ReconciliationRecordAvgOrderByAggregateInput
    _max?: ReconciliationRecordMaxOrderByAggregateInput
    _min?: ReconciliationRecordMinOrderByAggregateInput
    _sum?: ReconciliationRecordSumOrderByAggregateInput
  }

  export type ReconciliationRecordScalarWhereWithAggregatesInput = {
    AND?: ReconciliationRecordScalarWhereWithAggregatesInput | ReconciliationRecordScalarWhereWithAggregatesInput[]
    OR?: ReconciliationRecordScalarWhereWithAggregatesInput[]
    NOT?: ReconciliationRecordScalarWhereWithAggregatesInput | ReconciliationRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReconciliationRecord"> | string
    paymentId?: StringWithAggregatesFilter<"ReconciliationRecord"> | string
    internalAmountPaise?: IntWithAggregatesFilter<"ReconciliationRecord"> | number
    pspAmountPaise?: IntWithAggregatesFilter<"ReconciliationRecord"> | number
    status?: StringWithAggregatesFilter<"ReconciliationRecord"> | string
    notes?: StringNullableWithAggregatesFilter<"ReconciliationRecord"> | string | null
    reconciledAt?: DateTimeWithAggregatesFilter<"ReconciliationRecord"> | Date | string
  }

  export type PayoutSettlementWhereInput = {
    AND?: PayoutSettlementWhereInput | PayoutSettlementWhereInput[]
    OR?: PayoutSettlementWhereInput[]
    NOT?: PayoutSettlementWhereInput | PayoutSettlementWhereInput[]
    id?: StringFilter<"PayoutSettlement"> | string
    merchantId?: StringFilter<"PayoutSettlement"> | string
    cityCode?: StringFilter<"PayoutSettlement"> | string
    grossAmountPaise?: IntFilter<"PayoutSettlement"> | number
    refundedPaise?: IntFilter<"PayoutSettlement"> | number
    netAmountPaise?: IntFilter<"PayoutSettlement"> | number
    status?: StringFilter<"PayoutSettlement"> | string
    releasedAt?: DateTimeNullableFilter<"PayoutSettlement"> | Date | string | null
    releasedBy?: StringNullableFilter<"PayoutSettlement"> | string | null
    createdAt?: DateTimeFilter<"PayoutSettlement"> | Date | string
    updatedAt?: DateTimeFilter<"PayoutSettlement"> | Date | string
  }

  export type PayoutSettlementOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    cityCode?: SortOrder
    grossAmountPaise?: SortOrder
    refundedPaise?: SortOrder
    netAmountPaise?: SortOrder
    status?: SortOrder
    releasedAt?: SortOrderInput | SortOrder
    releasedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutSettlementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    merchantId?: string
    AND?: PayoutSettlementWhereInput | PayoutSettlementWhereInput[]
    OR?: PayoutSettlementWhereInput[]
    NOT?: PayoutSettlementWhereInput | PayoutSettlementWhereInput[]
    cityCode?: StringFilter<"PayoutSettlement"> | string
    grossAmountPaise?: IntFilter<"PayoutSettlement"> | number
    refundedPaise?: IntFilter<"PayoutSettlement"> | number
    netAmountPaise?: IntFilter<"PayoutSettlement"> | number
    status?: StringFilter<"PayoutSettlement"> | string
    releasedAt?: DateTimeNullableFilter<"PayoutSettlement"> | Date | string | null
    releasedBy?: StringNullableFilter<"PayoutSettlement"> | string | null
    createdAt?: DateTimeFilter<"PayoutSettlement"> | Date | string
    updatedAt?: DateTimeFilter<"PayoutSettlement"> | Date | string
  }, "id" | "merchantId">

  export type PayoutSettlementOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    cityCode?: SortOrder
    grossAmountPaise?: SortOrder
    refundedPaise?: SortOrder
    netAmountPaise?: SortOrder
    status?: SortOrder
    releasedAt?: SortOrderInput | SortOrder
    releasedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayoutSettlementCountOrderByAggregateInput
    _avg?: PayoutSettlementAvgOrderByAggregateInput
    _max?: PayoutSettlementMaxOrderByAggregateInput
    _min?: PayoutSettlementMinOrderByAggregateInput
    _sum?: PayoutSettlementSumOrderByAggregateInput
  }

  export type PayoutSettlementScalarWhereWithAggregatesInput = {
    AND?: PayoutSettlementScalarWhereWithAggregatesInput | PayoutSettlementScalarWhereWithAggregatesInput[]
    OR?: PayoutSettlementScalarWhereWithAggregatesInput[]
    NOT?: PayoutSettlementScalarWhereWithAggregatesInput | PayoutSettlementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayoutSettlement"> | string
    merchantId?: StringWithAggregatesFilter<"PayoutSettlement"> | string
    cityCode?: StringWithAggregatesFilter<"PayoutSettlement"> | string
    grossAmountPaise?: IntWithAggregatesFilter<"PayoutSettlement"> | number
    refundedPaise?: IntWithAggregatesFilter<"PayoutSettlement"> | number
    netAmountPaise?: IntWithAggregatesFilter<"PayoutSettlement"> | number
    status?: StringWithAggregatesFilter<"PayoutSettlement"> | string
    releasedAt?: DateTimeNullableWithAggregatesFilter<"PayoutSettlement"> | Date | string | null
    releasedBy?: StringNullableWithAggregatesFilter<"PayoutSettlement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PayoutSettlement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayoutSettlement"> | Date | string
  }

  export type PaymentIntentCreateInput = {
    id?: string
    orderId: string
    tenantId: string
    cityCode?: string
    amountPaise: number
    currency?: string
    status?: string
    provider: string
    pspReference?: string | null
    createdAt?: Date | string
    payment?: PaymentCreateNestedOneWithoutIntentInput
  }

  export type PaymentIntentUncheckedCreateInput = {
    id?: string
    orderId: string
    tenantId: string
    cityCode?: string
    amountPaise: number
    currency?: string
    status?: string
    provider: string
    pspReference?: string | null
    createdAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutIntentInput
  }

  export type PaymentIntentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    pspReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneWithoutIntentNestedInput
  }

  export type PaymentIntentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    pspReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutIntentNestedInput
  }

  export type PaymentIntentCreateManyInput = {
    id?: string
    orderId: string
    tenantId: string
    cityCode?: string
    amountPaise: number
    currency?: string
    status?: string
    provider: string
    pspReference?: string | null
    createdAt?: Date | string
  }

  export type PaymentIntentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    pspReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentIntentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    pspReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    orderId: string
    cityCode?: string
    amountPaise: number
    pspPaymentId: string
    pspSignature?: string | null
    status?: string
    verifiedAt?: Date | string
    intent: PaymentIntentCreateNestedOneWithoutPaymentInput
    refunds?: RefundCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    intentId: string
    orderId: string
    cityCode?: string
    amountPaise: number
    pspPaymentId: string
    pspSignature?: string | null
    status?: string
    verifiedAt?: Date | string
    refunds?: RefundUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    pspPaymentId?: StringFieldUpdateOperationsInput | string
    pspSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intent?: PaymentIntentUpdateOneRequiredWithoutPaymentNestedInput
    refunds?: RefundUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    intentId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    pspPaymentId?: StringFieldUpdateOperationsInput | string
    pspSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refunds?: RefundUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    intentId: string
    orderId: string
    cityCode?: string
    amountPaise: number
    pspPaymentId: string
    pspSignature?: string | null
    status?: string
    verifiedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    pspPaymentId?: StringFieldUpdateOperationsInput | string
    pspSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    intentId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    pspPaymentId?: StringFieldUpdateOperationsInput | string
    pspSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundCreateInput = {
    id?: string
    orderId: string
    cityCode?: string
    amountPaise: number
    reason: string
    status?: string
    pspRefundId?: string | null
    createdAt?: Date | string
    payment: PaymentCreateNestedOneWithoutRefundsInput
  }

  export type RefundUncheckedCreateInput = {
    id?: string
    paymentId: string
    orderId: string
    cityCode?: string
    amountPaise: number
    reason: string
    status?: string
    pspRefundId?: string | null
    createdAt?: Date | string
  }

  export type RefundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pspRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutRefundsNestedInput
  }

  export type RefundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pspRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundCreateManyInput = {
    id?: string
    paymentId: string
    orderId: string
    cityCode?: string
    amountPaise: number
    reason: string
    status?: string
    pspRefundId?: string | null
    createdAt?: Date | string
  }

  export type RefundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pspRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pspRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookInboxCreateInput = {
    id?: string
    provider: string
    eventId: string
    payload: JsonNullValueInput | InputJsonValue
    isProcessed?: boolean
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookInboxUncheckedCreateInput = {
    id?: string
    provider: string
    eventId: string
    payload: JsonNullValueInput | InputJsonValue
    isProcessed?: boolean
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookInboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookInboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookInboxCreateManyInput = {
    id?: string
    provider: string
    eventId: string
    payload: JsonNullValueInput | InputJsonValue
    isProcessed?: boolean
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookInboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookInboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReconciliationRecordCreateInput = {
    id?: string
    paymentId: string
    internalAmountPaise: number
    pspAmountPaise: number
    status: string
    notes?: string | null
    reconciledAt?: Date | string
  }

  export type ReconciliationRecordUncheckedCreateInput = {
    id?: string
    paymentId: string
    internalAmountPaise: number
    pspAmountPaise: number
    status: string
    notes?: string | null
    reconciledAt?: Date | string
  }

  export type ReconciliationRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    internalAmountPaise?: IntFieldUpdateOperationsInput | number
    pspAmountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reconciledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReconciliationRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    internalAmountPaise?: IntFieldUpdateOperationsInput | number
    pspAmountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reconciledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReconciliationRecordCreateManyInput = {
    id?: string
    paymentId: string
    internalAmountPaise: number
    pspAmountPaise: number
    status: string
    notes?: string | null
    reconciledAt?: Date | string
  }

  export type ReconciliationRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    internalAmountPaise?: IntFieldUpdateOperationsInput | number
    pspAmountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reconciledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReconciliationRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    internalAmountPaise?: IntFieldUpdateOperationsInput | number
    pspAmountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reconciledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutSettlementCreateInput = {
    id?: string
    merchantId: string
    cityCode?: string
    grossAmountPaise?: number
    refundedPaise?: number
    netAmountPaise?: number
    status?: string
    releasedAt?: Date | string | null
    releasedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutSettlementUncheckedCreateInput = {
    id?: string
    merchantId: string
    cityCode?: string
    grossAmountPaise?: number
    refundedPaise?: number
    netAmountPaise?: number
    status?: string
    releasedAt?: Date | string | null
    releasedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutSettlementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    grossAmountPaise?: IntFieldUpdateOperationsInput | number
    refundedPaise?: IntFieldUpdateOperationsInput | number
    netAmountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutSettlementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    grossAmountPaise?: IntFieldUpdateOperationsInput | number
    refundedPaise?: IntFieldUpdateOperationsInput | number
    netAmountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutSettlementCreateManyInput = {
    id?: string
    merchantId: string
    cityCode?: string
    grossAmountPaise?: number
    refundedPaise?: number
    netAmountPaise?: number
    status?: string
    releasedAt?: Date | string | null
    releasedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutSettlementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    grossAmountPaise?: IntFieldUpdateOperationsInput | number
    refundedPaise?: IntFieldUpdateOperationsInput | number
    netAmountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutSettlementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    grossAmountPaise?: IntFieldUpdateOperationsInput | number
    refundedPaise?: IntFieldUpdateOperationsInput | number
    netAmountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedBy?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type PaymentNullableRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentIntentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    tenantId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    pspReference?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentIntentAvgOrderByAggregateInput = {
    amountPaise?: SortOrder
  }

  export type PaymentIntentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    tenantId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    pspReference?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentIntentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    tenantId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    pspReference?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentIntentSumOrderByAggregateInput = {
    amountPaise?: SortOrder
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

  export type PaymentIntentRelationFilter = {
    is?: PaymentIntentWhereInput
    isNot?: PaymentIntentWhereInput
  }

  export type RefundListRelationFilter = {
    every?: RefundWhereInput
    some?: RefundWhereInput
    none?: RefundWhereInput
  }

  export type RefundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    intentId?: SortOrder
    orderId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    pspPaymentId?: SortOrder
    pspSignature?: SortOrder
    status?: SortOrder
    verifiedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amountPaise?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    intentId?: SortOrder
    orderId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    pspPaymentId?: SortOrder
    pspSignature?: SortOrder
    status?: SortOrder
    verifiedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    intentId?: SortOrder
    orderId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    pspPaymentId?: SortOrder
    pspSignature?: SortOrder
    status?: SortOrder
    verifiedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amountPaise?: SortOrder
  }

  export type PaymentRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type RefundCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    orderId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    pspRefundId?: SortOrder
    createdAt?: SortOrder
  }

  export type RefundAvgOrderByAggregateInput = {
    amountPaise?: SortOrder
  }

  export type RefundMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    orderId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    pspRefundId?: SortOrder
    createdAt?: SortOrder
  }

  export type RefundMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    orderId?: SortOrder
    cityCode?: SortOrder
    amountPaise?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    pspRefundId?: SortOrder
    createdAt?: SortOrder
  }

  export type RefundSumOrderByAggregateInput = {
    amountPaise?: SortOrder
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

  export type WebhookInboxCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    payload?: SortOrder
    isProcessed?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookInboxMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    isProcessed?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookInboxMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    isProcessed?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
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

  export type ReconciliationRecordCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    internalAmountPaise?: SortOrder
    pspAmountPaise?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    reconciledAt?: SortOrder
  }

  export type ReconciliationRecordAvgOrderByAggregateInput = {
    internalAmountPaise?: SortOrder
    pspAmountPaise?: SortOrder
  }

  export type ReconciliationRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    internalAmountPaise?: SortOrder
    pspAmountPaise?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    reconciledAt?: SortOrder
  }

  export type ReconciliationRecordMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    internalAmountPaise?: SortOrder
    pspAmountPaise?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    reconciledAt?: SortOrder
  }

  export type ReconciliationRecordSumOrderByAggregateInput = {
    internalAmountPaise?: SortOrder
    pspAmountPaise?: SortOrder
  }

  export type PayoutSettlementCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    cityCode?: SortOrder
    grossAmountPaise?: SortOrder
    refundedPaise?: SortOrder
    netAmountPaise?: SortOrder
    status?: SortOrder
    releasedAt?: SortOrder
    releasedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutSettlementAvgOrderByAggregateInput = {
    grossAmountPaise?: SortOrder
    refundedPaise?: SortOrder
    netAmountPaise?: SortOrder
  }

  export type PayoutSettlementMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    cityCode?: SortOrder
    grossAmountPaise?: SortOrder
    refundedPaise?: SortOrder
    netAmountPaise?: SortOrder
    status?: SortOrder
    releasedAt?: SortOrder
    releasedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutSettlementMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    cityCode?: SortOrder
    grossAmountPaise?: SortOrder
    refundedPaise?: SortOrder
    netAmountPaise?: SortOrder
    status?: SortOrder
    releasedAt?: SortOrder
    releasedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutSettlementSumOrderByAggregateInput = {
    grossAmountPaise?: SortOrder
    refundedPaise?: SortOrder
    netAmountPaise?: SortOrder
  }

  export type PaymentCreateNestedOneWithoutIntentInput = {
    create?: XOR<PaymentCreateWithoutIntentInput, PaymentUncheckedCreateWithoutIntentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutIntentInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutIntentInput = {
    create?: XOR<PaymentCreateWithoutIntentInput, PaymentUncheckedCreateWithoutIntentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutIntentInput
    connect?: PaymentWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PaymentUpdateOneWithoutIntentNestedInput = {
    create?: XOR<PaymentCreateWithoutIntentInput, PaymentUncheckedCreateWithoutIntentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutIntentInput
    upsert?: PaymentUpsertWithoutIntentInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutIntentInput, PaymentUpdateWithoutIntentInput>, PaymentUncheckedUpdateWithoutIntentInput>
  }

  export type PaymentUncheckedUpdateOneWithoutIntentNestedInput = {
    create?: XOR<PaymentCreateWithoutIntentInput, PaymentUncheckedCreateWithoutIntentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutIntentInput
    upsert?: PaymentUpsertWithoutIntentInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutIntentInput, PaymentUpdateWithoutIntentInput>, PaymentUncheckedUpdateWithoutIntentInput>
  }

  export type PaymentIntentCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PaymentIntentCreateWithoutPaymentInput, PaymentIntentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentIntentCreateOrConnectWithoutPaymentInput
    connect?: PaymentIntentWhereUniqueInput
  }

  export type RefundCreateNestedManyWithoutPaymentInput = {
    create?: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput> | RefundCreateWithoutPaymentInput[] | RefundUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutPaymentInput | RefundCreateOrConnectWithoutPaymentInput[]
    createMany?: RefundCreateManyPaymentInputEnvelope
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
  }

  export type RefundUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput> | RefundCreateWithoutPaymentInput[] | RefundUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutPaymentInput | RefundCreateOrConnectWithoutPaymentInput[]
    createMany?: RefundCreateManyPaymentInputEnvelope
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
  }

  export type PaymentIntentUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<PaymentIntentCreateWithoutPaymentInput, PaymentIntentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentIntentCreateOrConnectWithoutPaymentInput
    upsert?: PaymentIntentUpsertWithoutPaymentInput
    connect?: PaymentIntentWhereUniqueInput
    update?: XOR<XOR<PaymentIntentUpdateToOneWithWhereWithoutPaymentInput, PaymentIntentUpdateWithoutPaymentInput>, PaymentIntentUncheckedUpdateWithoutPaymentInput>
  }

  export type RefundUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput> | RefundCreateWithoutPaymentInput[] | RefundUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutPaymentInput | RefundCreateOrConnectWithoutPaymentInput[]
    upsert?: RefundUpsertWithWhereUniqueWithoutPaymentInput | RefundUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: RefundCreateManyPaymentInputEnvelope
    set?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    disconnect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    delete?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    update?: RefundUpdateWithWhereUniqueWithoutPaymentInput | RefundUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: RefundUpdateManyWithWhereWithoutPaymentInput | RefundUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: RefundScalarWhereInput | RefundScalarWhereInput[]
  }

  export type RefundUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput> | RefundCreateWithoutPaymentInput[] | RefundUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutPaymentInput | RefundCreateOrConnectWithoutPaymentInput[]
    upsert?: RefundUpsertWithWhereUniqueWithoutPaymentInput | RefundUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: RefundCreateManyPaymentInputEnvelope
    set?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    disconnect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    delete?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    update?: RefundUpdateWithWhereUniqueWithoutPaymentInput | RefundUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: RefundUpdateManyWithWhereWithoutPaymentInput | RefundUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: RefundScalarWhereInput | RefundScalarWhereInput[]
  }

  export type PaymentCreateNestedOneWithoutRefundsInput = {
    create?: XOR<PaymentCreateWithoutRefundsInput, PaymentUncheckedCreateWithoutRefundsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRefundsInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutRefundsNestedInput = {
    create?: XOR<PaymentCreateWithoutRefundsInput, PaymentUncheckedCreateWithoutRefundsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRefundsInput
    upsert?: PaymentUpsertWithoutRefundsInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutRefundsInput, PaymentUpdateWithoutRefundsInput>, PaymentUncheckedUpdateWithoutRefundsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type PaymentCreateWithoutIntentInput = {
    id?: string
    orderId: string
    cityCode?: string
    amountPaise: number
    pspPaymentId: string
    pspSignature?: string | null
    status?: string
    verifiedAt?: Date | string
    refunds?: RefundCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutIntentInput = {
    id?: string
    orderId: string
    cityCode?: string
    amountPaise: number
    pspPaymentId: string
    pspSignature?: string | null
    status?: string
    verifiedAt?: Date | string
    refunds?: RefundUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutIntentInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutIntentInput, PaymentUncheckedCreateWithoutIntentInput>
  }

  export type PaymentUpsertWithoutIntentInput = {
    update: XOR<PaymentUpdateWithoutIntentInput, PaymentUncheckedUpdateWithoutIntentInput>
    create: XOR<PaymentCreateWithoutIntentInput, PaymentUncheckedCreateWithoutIntentInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutIntentInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutIntentInput, PaymentUncheckedUpdateWithoutIntentInput>
  }

  export type PaymentUpdateWithoutIntentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    pspPaymentId?: StringFieldUpdateOperationsInput | string
    pspSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refunds?: RefundUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutIntentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    pspPaymentId?: StringFieldUpdateOperationsInput | string
    pspSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refunds?: RefundUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentIntentCreateWithoutPaymentInput = {
    id?: string
    orderId: string
    tenantId: string
    cityCode?: string
    amountPaise: number
    currency?: string
    status?: string
    provider: string
    pspReference?: string | null
    createdAt?: Date | string
  }

  export type PaymentIntentUncheckedCreateWithoutPaymentInput = {
    id?: string
    orderId: string
    tenantId: string
    cityCode?: string
    amountPaise: number
    currency?: string
    status?: string
    provider: string
    pspReference?: string | null
    createdAt?: Date | string
  }

  export type PaymentIntentCreateOrConnectWithoutPaymentInput = {
    where: PaymentIntentWhereUniqueInput
    create: XOR<PaymentIntentCreateWithoutPaymentInput, PaymentIntentUncheckedCreateWithoutPaymentInput>
  }

  export type RefundCreateWithoutPaymentInput = {
    id?: string
    orderId: string
    cityCode?: string
    amountPaise: number
    reason: string
    status?: string
    pspRefundId?: string | null
    createdAt?: Date | string
  }

  export type RefundUncheckedCreateWithoutPaymentInput = {
    id?: string
    orderId: string
    cityCode?: string
    amountPaise: number
    reason: string
    status?: string
    pspRefundId?: string | null
    createdAt?: Date | string
  }

  export type RefundCreateOrConnectWithoutPaymentInput = {
    where: RefundWhereUniqueInput
    create: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput>
  }

  export type RefundCreateManyPaymentInputEnvelope = {
    data: RefundCreateManyPaymentInput | RefundCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type PaymentIntentUpsertWithoutPaymentInput = {
    update: XOR<PaymentIntentUpdateWithoutPaymentInput, PaymentIntentUncheckedUpdateWithoutPaymentInput>
    create: XOR<PaymentIntentCreateWithoutPaymentInput, PaymentIntentUncheckedCreateWithoutPaymentInput>
    where?: PaymentIntentWhereInput
  }

  export type PaymentIntentUpdateToOneWithWhereWithoutPaymentInput = {
    where?: PaymentIntentWhereInput
    data: XOR<PaymentIntentUpdateWithoutPaymentInput, PaymentIntentUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentIntentUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    pspReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentIntentUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    pspReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundUpsertWithWhereUniqueWithoutPaymentInput = {
    where: RefundWhereUniqueInput
    update: XOR<RefundUpdateWithoutPaymentInput, RefundUncheckedUpdateWithoutPaymentInput>
    create: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput>
  }

  export type RefundUpdateWithWhereUniqueWithoutPaymentInput = {
    where: RefundWhereUniqueInput
    data: XOR<RefundUpdateWithoutPaymentInput, RefundUncheckedUpdateWithoutPaymentInput>
  }

  export type RefundUpdateManyWithWhereWithoutPaymentInput = {
    where: RefundScalarWhereInput
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyWithoutPaymentInput>
  }

  export type RefundScalarWhereInput = {
    AND?: RefundScalarWhereInput | RefundScalarWhereInput[]
    OR?: RefundScalarWhereInput[]
    NOT?: RefundScalarWhereInput | RefundScalarWhereInput[]
    id?: StringFilter<"Refund"> | string
    paymentId?: StringFilter<"Refund"> | string
    orderId?: StringFilter<"Refund"> | string
    cityCode?: StringFilter<"Refund"> | string
    amountPaise?: IntFilter<"Refund"> | number
    reason?: StringFilter<"Refund"> | string
    status?: StringFilter<"Refund"> | string
    pspRefundId?: StringNullableFilter<"Refund"> | string | null
    createdAt?: DateTimeFilter<"Refund"> | Date | string
  }

  export type PaymentCreateWithoutRefundsInput = {
    id?: string
    orderId: string
    cityCode?: string
    amountPaise: number
    pspPaymentId: string
    pspSignature?: string | null
    status?: string
    verifiedAt?: Date | string
    intent: PaymentIntentCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutRefundsInput = {
    id?: string
    intentId: string
    orderId: string
    cityCode?: string
    amountPaise: number
    pspPaymentId: string
    pspSignature?: string | null
    status?: string
    verifiedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutRefundsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutRefundsInput, PaymentUncheckedCreateWithoutRefundsInput>
  }

  export type PaymentUpsertWithoutRefundsInput = {
    update: XOR<PaymentUpdateWithoutRefundsInput, PaymentUncheckedUpdateWithoutRefundsInput>
    create: XOR<PaymentCreateWithoutRefundsInput, PaymentUncheckedCreateWithoutRefundsInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutRefundsInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutRefundsInput, PaymentUncheckedUpdateWithoutRefundsInput>
  }

  export type PaymentUpdateWithoutRefundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    pspPaymentId?: StringFieldUpdateOperationsInput | string
    pspSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intent?: PaymentIntentUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutRefundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    intentId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    pspPaymentId?: StringFieldUpdateOperationsInput | string
    pspSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundCreateManyPaymentInput = {
    id?: string
    orderId: string
    cityCode?: string
    amountPaise: number
    reason: string
    status?: string
    pspRefundId?: string | null
    createdAt?: Date | string
  }

  export type RefundUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pspRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pspRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pspRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PaymentCountOutputTypeDefaultArgs instead
     */
    export type PaymentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentIntentDefaultArgs instead
     */
    export type PaymentIntentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentIntentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RefundDefaultArgs instead
     */
    export type RefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RefundDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WebhookInboxDefaultArgs instead
     */
    export type WebhookInboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WebhookInboxDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReconciliationRecordDefaultArgs instead
     */
    export type ReconciliationRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReconciliationRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PayoutSettlementDefaultArgs instead
     */
    export type PayoutSettlementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PayoutSettlementDefaultArgs<ExtArgs>

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