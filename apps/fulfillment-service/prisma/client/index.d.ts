
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
 * Model CapacitySlot
 * 
 */
export type CapacitySlot = $Result.DefaultSelection<Prisma.$CapacitySlotPayload>
/**
 * Model SlotReservation
 * 
 */
export type SlotReservation = $Result.DefaultSelection<Prisma.$SlotReservationPayload>
/**
 * Model QueueSnapshot
 * 
 */
export type QueueSnapshot = $Result.DefaultSelection<Prisma.$QueueSnapshotPayload>
/**
 * Model PickupToken
 * 
 */
export type PickupToken = $Result.DefaultSelection<Prisma.$PickupTokenPayload>
/**
 * Model DeliveryTask
 * 
 */
export type DeliveryTask = $Result.DefaultSelection<Prisma.$DeliveryTaskPayload>
/**
 * Model OutletTokenSequence
 * 
 */
export type OutletTokenSequence = $Result.DefaultSelection<Prisma.$OutletTokenSequencePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CapacitySlots
 * const capacitySlots = await prisma.capacitySlot.findMany()
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
   * // Fetch zero or more CapacitySlots
   * const capacitySlots = await prisma.capacitySlot.findMany()
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
   * `prisma.capacitySlot`: Exposes CRUD operations for the **CapacitySlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CapacitySlots
    * const capacitySlots = await prisma.capacitySlot.findMany()
    * ```
    */
  get capacitySlot(): Prisma.CapacitySlotDelegate<ExtArgs>;

  /**
   * `prisma.slotReservation`: Exposes CRUD operations for the **SlotReservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SlotReservations
    * const slotReservations = await prisma.slotReservation.findMany()
    * ```
    */
  get slotReservation(): Prisma.SlotReservationDelegate<ExtArgs>;

  /**
   * `prisma.queueSnapshot`: Exposes CRUD operations for the **QueueSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QueueSnapshots
    * const queueSnapshots = await prisma.queueSnapshot.findMany()
    * ```
    */
  get queueSnapshot(): Prisma.QueueSnapshotDelegate<ExtArgs>;

  /**
   * `prisma.pickupToken`: Exposes CRUD operations for the **PickupToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PickupTokens
    * const pickupTokens = await prisma.pickupToken.findMany()
    * ```
    */
  get pickupToken(): Prisma.PickupTokenDelegate<ExtArgs>;

  /**
   * `prisma.deliveryTask`: Exposes CRUD operations for the **DeliveryTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryTasks
    * const deliveryTasks = await prisma.deliveryTask.findMany()
    * ```
    */
  get deliveryTask(): Prisma.DeliveryTaskDelegate<ExtArgs>;

  /**
   * `prisma.outletTokenSequence`: Exposes CRUD operations for the **OutletTokenSequence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutletTokenSequences
    * const outletTokenSequences = await prisma.outletTokenSequence.findMany()
    * ```
    */
  get outletTokenSequence(): Prisma.OutletTokenSequenceDelegate<ExtArgs>;
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
    CapacitySlot: 'CapacitySlot',
    SlotReservation: 'SlotReservation',
    QueueSnapshot: 'QueueSnapshot',
    PickupToken: 'PickupToken',
    DeliveryTask: 'DeliveryTask',
    OutletTokenSequence: 'OutletTokenSequence'
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
      modelProps: "capacitySlot" | "slotReservation" | "queueSnapshot" | "pickupToken" | "deliveryTask" | "outletTokenSequence"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CapacitySlot: {
        payload: Prisma.$CapacitySlotPayload<ExtArgs>
        fields: Prisma.CapacitySlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapacitySlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacitySlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapacitySlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacitySlotPayload>
          }
          findFirst: {
            args: Prisma.CapacitySlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacitySlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapacitySlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacitySlotPayload>
          }
          findMany: {
            args: Prisma.CapacitySlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacitySlotPayload>[]
          }
          create: {
            args: Prisma.CapacitySlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacitySlotPayload>
          }
          createMany: {
            args: Prisma.CapacitySlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CapacitySlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacitySlotPayload>[]
          }
          delete: {
            args: Prisma.CapacitySlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacitySlotPayload>
          }
          update: {
            args: Prisma.CapacitySlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacitySlotPayload>
          }
          deleteMany: {
            args: Prisma.CapacitySlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CapacitySlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CapacitySlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacitySlotPayload>
          }
          aggregate: {
            args: Prisma.CapacitySlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCapacitySlot>
          }
          groupBy: {
            args: Prisma.CapacitySlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<CapacitySlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.CapacitySlotCountArgs<ExtArgs>
            result: $Utils.Optional<CapacitySlotCountAggregateOutputType> | number
          }
        }
      }
      SlotReservation: {
        payload: Prisma.$SlotReservationPayload<ExtArgs>
        fields: Prisma.SlotReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlotReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlotReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotReservationPayload>
          }
          findFirst: {
            args: Prisma.SlotReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlotReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotReservationPayload>
          }
          findMany: {
            args: Prisma.SlotReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotReservationPayload>[]
          }
          create: {
            args: Prisma.SlotReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotReservationPayload>
          }
          createMany: {
            args: Prisma.SlotReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlotReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotReservationPayload>[]
          }
          delete: {
            args: Prisma.SlotReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotReservationPayload>
          }
          update: {
            args: Prisma.SlotReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotReservationPayload>
          }
          deleteMany: {
            args: Prisma.SlotReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlotReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SlotReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotReservationPayload>
          }
          aggregate: {
            args: Prisma.SlotReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlotReservation>
          }
          groupBy: {
            args: Prisma.SlotReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlotReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlotReservationCountArgs<ExtArgs>
            result: $Utils.Optional<SlotReservationCountAggregateOutputType> | number
          }
        }
      }
      QueueSnapshot: {
        payload: Prisma.$QueueSnapshotPayload<ExtArgs>
        fields: Prisma.QueueSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueueSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueueSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueSnapshotPayload>
          }
          findFirst: {
            args: Prisma.QueueSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueueSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueSnapshotPayload>
          }
          findMany: {
            args: Prisma.QueueSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueSnapshotPayload>[]
          }
          create: {
            args: Prisma.QueueSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueSnapshotPayload>
          }
          createMany: {
            args: Prisma.QueueSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QueueSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueSnapshotPayload>[]
          }
          delete: {
            args: Prisma.QueueSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueSnapshotPayload>
          }
          update: {
            args: Prisma.QueueSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.QueueSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueueSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QueueSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueSnapshotPayload>
          }
          aggregate: {
            args: Prisma.QueueSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQueueSnapshot>
          }
          groupBy: {
            args: Prisma.QueueSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueueSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.QueueSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<QueueSnapshotCountAggregateOutputType> | number
          }
        }
      }
      PickupToken: {
        payload: Prisma.$PickupTokenPayload<ExtArgs>
        fields: Prisma.PickupTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PickupTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PickupTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>
          }
          findFirst: {
            args: Prisma.PickupTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PickupTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>
          }
          findMany: {
            args: Prisma.PickupTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>[]
          }
          create: {
            args: Prisma.PickupTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>
          }
          createMany: {
            args: Prisma.PickupTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PickupTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>[]
          }
          delete: {
            args: Prisma.PickupTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>
          }
          update: {
            args: Prisma.PickupTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>
          }
          deleteMany: {
            args: Prisma.PickupTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PickupTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PickupTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>
          }
          aggregate: {
            args: Prisma.PickupTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePickupToken>
          }
          groupBy: {
            args: Prisma.PickupTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PickupTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PickupTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PickupTokenCountAggregateOutputType> | number
          }
        }
      }
      DeliveryTask: {
        payload: Prisma.$DeliveryTaskPayload<ExtArgs>
        fields: Prisma.DeliveryTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryTaskPayload>
          }
          findFirst: {
            args: Prisma.DeliveryTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryTaskPayload>
          }
          findMany: {
            args: Prisma.DeliveryTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryTaskPayload>[]
          }
          create: {
            args: Prisma.DeliveryTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryTaskPayload>
          }
          createMany: {
            args: Prisma.DeliveryTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryTaskPayload>[]
          }
          delete: {
            args: Prisma.DeliveryTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryTaskPayload>
          }
          update: {
            args: Prisma.DeliveryTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryTaskPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeliveryTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryTaskPayload>
          }
          aggregate: {
            args: Prisma.DeliveryTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryTask>
          }
          groupBy: {
            args: Prisma.DeliveryTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryTaskCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryTaskCountAggregateOutputType> | number
          }
        }
      }
      OutletTokenSequence: {
        payload: Prisma.$OutletTokenSequencePayload<ExtArgs>
        fields: Prisma.OutletTokenSequenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutletTokenSequenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletTokenSequencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutletTokenSequenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletTokenSequencePayload>
          }
          findFirst: {
            args: Prisma.OutletTokenSequenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletTokenSequencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutletTokenSequenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletTokenSequencePayload>
          }
          findMany: {
            args: Prisma.OutletTokenSequenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletTokenSequencePayload>[]
          }
          create: {
            args: Prisma.OutletTokenSequenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletTokenSequencePayload>
          }
          createMany: {
            args: Prisma.OutletTokenSequenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutletTokenSequenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletTokenSequencePayload>[]
          }
          delete: {
            args: Prisma.OutletTokenSequenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletTokenSequencePayload>
          }
          update: {
            args: Prisma.OutletTokenSequenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletTokenSequencePayload>
          }
          deleteMany: {
            args: Prisma.OutletTokenSequenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutletTokenSequenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutletTokenSequenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletTokenSequencePayload>
          }
          aggregate: {
            args: Prisma.OutletTokenSequenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutletTokenSequence>
          }
          groupBy: {
            args: Prisma.OutletTokenSequenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutletTokenSequenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutletTokenSequenceCountArgs<ExtArgs>
            result: $Utils.Optional<OutletTokenSequenceCountAggregateOutputType> | number
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
   * Count Type CapacitySlotCountOutputType
   */

  export type CapacitySlotCountOutputType = {
    reservations: number
  }

  export type CapacitySlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | CapacitySlotCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * CapacitySlotCountOutputType without action
   */
  export type CapacitySlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacitySlotCountOutputType
     */
    select?: CapacitySlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CapacitySlotCountOutputType without action
   */
  export type CapacitySlotCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotReservationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CapacitySlot
   */

  export type AggregateCapacitySlot = {
    _count: CapacitySlotCountAggregateOutputType | null
    _avg: CapacitySlotAvgAggregateOutputType | null
    _sum: CapacitySlotSumAggregateOutputType | null
    _min: CapacitySlotMinAggregateOutputType | null
    _max: CapacitySlotMaxAggregateOutputType | null
  }

  export type CapacitySlotAvgAggregateOutputType = {
    maxCapacity: number | null
    reservedCount: number | null
    version: number | null
  }

  export type CapacitySlotSumAggregateOutputType = {
    maxCapacity: number | null
    reservedCount: number | null
    version: number | null
  }

  export type CapacitySlotMinAggregateOutputType = {
    id: string | null
    outletId: string | null
    slotDate: string | null
    startTime: string | null
    endTime: string | null
    maxCapacity: number | null
    reservedCount: number | null
    version: number | null
    isWalkIn: boolean | null
  }

  export type CapacitySlotMaxAggregateOutputType = {
    id: string | null
    outletId: string | null
    slotDate: string | null
    startTime: string | null
    endTime: string | null
    maxCapacity: number | null
    reservedCount: number | null
    version: number | null
    isWalkIn: boolean | null
  }

  export type CapacitySlotCountAggregateOutputType = {
    id: number
    outletId: number
    slotDate: number
    startTime: number
    endTime: number
    maxCapacity: number
    reservedCount: number
    version: number
    isWalkIn: number
    _all: number
  }


  export type CapacitySlotAvgAggregateInputType = {
    maxCapacity?: true
    reservedCount?: true
    version?: true
  }

  export type CapacitySlotSumAggregateInputType = {
    maxCapacity?: true
    reservedCount?: true
    version?: true
  }

  export type CapacitySlotMinAggregateInputType = {
    id?: true
    outletId?: true
    slotDate?: true
    startTime?: true
    endTime?: true
    maxCapacity?: true
    reservedCount?: true
    version?: true
    isWalkIn?: true
  }

  export type CapacitySlotMaxAggregateInputType = {
    id?: true
    outletId?: true
    slotDate?: true
    startTime?: true
    endTime?: true
    maxCapacity?: true
    reservedCount?: true
    version?: true
    isWalkIn?: true
  }

  export type CapacitySlotCountAggregateInputType = {
    id?: true
    outletId?: true
    slotDate?: true
    startTime?: true
    endTime?: true
    maxCapacity?: true
    reservedCount?: true
    version?: true
    isWalkIn?: true
    _all?: true
  }

  export type CapacitySlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapacitySlot to aggregate.
     */
    where?: CapacitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapacitySlots to fetch.
     */
    orderBy?: CapacitySlotOrderByWithRelationInput | CapacitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapacitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapacitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapacitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CapacitySlots
    **/
    _count?: true | CapacitySlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CapacitySlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CapacitySlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapacitySlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapacitySlotMaxAggregateInputType
  }

  export type GetCapacitySlotAggregateType<T extends CapacitySlotAggregateArgs> = {
        [P in keyof T & keyof AggregateCapacitySlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapacitySlot[P]>
      : GetScalarType<T[P], AggregateCapacitySlot[P]>
  }




  export type CapacitySlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapacitySlotWhereInput
    orderBy?: CapacitySlotOrderByWithAggregationInput | CapacitySlotOrderByWithAggregationInput[]
    by: CapacitySlotScalarFieldEnum[] | CapacitySlotScalarFieldEnum
    having?: CapacitySlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapacitySlotCountAggregateInputType | true
    _avg?: CapacitySlotAvgAggregateInputType
    _sum?: CapacitySlotSumAggregateInputType
    _min?: CapacitySlotMinAggregateInputType
    _max?: CapacitySlotMaxAggregateInputType
  }

  export type CapacitySlotGroupByOutputType = {
    id: string
    outletId: string
    slotDate: string
    startTime: string
    endTime: string
    maxCapacity: number
    reservedCount: number
    version: number
    isWalkIn: boolean
    _count: CapacitySlotCountAggregateOutputType | null
    _avg: CapacitySlotAvgAggregateOutputType | null
    _sum: CapacitySlotSumAggregateOutputType | null
    _min: CapacitySlotMinAggregateOutputType | null
    _max: CapacitySlotMaxAggregateOutputType | null
  }

  type GetCapacitySlotGroupByPayload<T extends CapacitySlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapacitySlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapacitySlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapacitySlotGroupByOutputType[P]>
            : GetScalarType<T[P], CapacitySlotGroupByOutputType[P]>
        }
      >
    >


  export type CapacitySlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    slotDate?: boolean
    startTime?: boolean
    endTime?: boolean
    maxCapacity?: boolean
    reservedCount?: boolean
    version?: boolean
    isWalkIn?: boolean
    reservations?: boolean | CapacitySlot$reservationsArgs<ExtArgs>
    _count?: boolean | CapacitySlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capacitySlot"]>

  export type CapacitySlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    slotDate?: boolean
    startTime?: boolean
    endTime?: boolean
    maxCapacity?: boolean
    reservedCount?: boolean
    version?: boolean
    isWalkIn?: boolean
  }, ExtArgs["result"]["capacitySlot"]>

  export type CapacitySlotSelectScalar = {
    id?: boolean
    outletId?: boolean
    slotDate?: boolean
    startTime?: boolean
    endTime?: boolean
    maxCapacity?: boolean
    reservedCount?: boolean
    version?: boolean
    isWalkIn?: boolean
  }

  export type CapacitySlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | CapacitySlot$reservationsArgs<ExtArgs>
    _count?: boolean | CapacitySlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CapacitySlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CapacitySlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CapacitySlot"
    objects: {
      reservations: Prisma.$SlotReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      outletId: string
      slotDate: string
      startTime: string
      endTime: string
      maxCapacity: number
      reservedCount: number
      version: number
      isWalkIn: boolean
    }, ExtArgs["result"]["capacitySlot"]>
    composites: {}
  }

  type CapacitySlotGetPayload<S extends boolean | null | undefined | CapacitySlotDefaultArgs> = $Result.GetResult<Prisma.$CapacitySlotPayload, S>

  type CapacitySlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CapacitySlotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CapacitySlotCountAggregateInputType | true
    }

  export interface CapacitySlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CapacitySlot'], meta: { name: 'CapacitySlot' } }
    /**
     * Find zero or one CapacitySlot that matches the filter.
     * @param {CapacitySlotFindUniqueArgs} args - Arguments to find a CapacitySlot
     * @example
     * // Get one CapacitySlot
     * const capacitySlot = await prisma.capacitySlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CapacitySlotFindUniqueArgs>(args: SelectSubset<T, CapacitySlotFindUniqueArgs<ExtArgs>>): Prisma__CapacitySlotClient<$Result.GetResult<Prisma.$CapacitySlotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CapacitySlot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CapacitySlotFindUniqueOrThrowArgs} args - Arguments to find a CapacitySlot
     * @example
     * // Get one CapacitySlot
     * const capacitySlot = await prisma.capacitySlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CapacitySlotFindUniqueOrThrowArgs>(args: SelectSubset<T, CapacitySlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CapacitySlotClient<$Result.GetResult<Prisma.$CapacitySlotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CapacitySlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacitySlotFindFirstArgs} args - Arguments to find a CapacitySlot
     * @example
     * // Get one CapacitySlot
     * const capacitySlot = await prisma.capacitySlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CapacitySlotFindFirstArgs>(args?: SelectSubset<T, CapacitySlotFindFirstArgs<ExtArgs>>): Prisma__CapacitySlotClient<$Result.GetResult<Prisma.$CapacitySlotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CapacitySlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacitySlotFindFirstOrThrowArgs} args - Arguments to find a CapacitySlot
     * @example
     * // Get one CapacitySlot
     * const capacitySlot = await prisma.capacitySlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CapacitySlotFindFirstOrThrowArgs>(args?: SelectSubset<T, CapacitySlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__CapacitySlotClient<$Result.GetResult<Prisma.$CapacitySlotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CapacitySlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacitySlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CapacitySlots
     * const capacitySlots = await prisma.capacitySlot.findMany()
     * 
     * // Get first 10 CapacitySlots
     * const capacitySlots = await prisma.capacitySlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const capacitySlotWithIdOnly = await prisma.capacitySlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CapacitySlotFindManyArgs>(args?: SelectSubset<T, CapacitySlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapacitySlotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CapacitySlot.
     * @param {CapacitySlotCreateArgs} args - Arguments to create a CapacitySlot.
     * @example
     * // Create one CapacitySlot
     * const CapacitySlot = await prisma.capacitySlot.create({
     *   data: {
     *     // ... data to create a CapacitySlot
     *   }
     * })
     * 
     */
    create<T extends CapacitySlotCreateArgs>(args: SelectSubset<T, CapacitySlotCreateArgs<ExtArgs>>): Prisma__CapacitySlotClient<$Result.GetResult<Prisma.$CapacitySlotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CapacitySlots.
     * @param {CapacitySlotCreateManyArgs} args - Arguments to create many CapacitySlots.
     * @example
     * // Create many CapacitySlots
     * const capacitySlot = await prisma.capacitySlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CapacitySlotCreateManyArgs>(args?: SelectSubset<T, CapacitySlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CapacitySlots and returns the data saved in the database.
     * @param {CapacitySlotCreateManyAndReturnArgs} args - Arguments to create many CapacitySlots.
     * @example
     * // Create many CapacitySlots
     * const capacitySlot = await prisma.capacitySlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CapacitySlots and only return the `id`
     * const capacitySlotWithIdOnly = await prisma.capacitySlot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CapacitySlotCreateManyAndReturnArgs>(args?: SelectSubset<T, CapacitySlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapacitySlotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CapacitySlot.
     * @param {CapacitySlotDeleteArgs} args - Arguments to delete one CapacitySlot.
     * @example
     * // Delete one CapacitySlot
     * const CapacitySlot = await prisma.capacitySlot.delete({
     *   where: {
     *     // ... filter to delete one CapacitySlot
     *   }
     * })
     * 
     */
    delete<T extends CapacitySlotDeleteArgs>(args: SelectSubset<T, CapacitySlotDeleteArgs<ExtArgs>>): Prisma__CapacitySlotClient<$Result.GetResult<Prisma.$CapacitySlotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CapacitySlot.
     * @param {CapacitySlotUpdateArgs} args - Arguments to update one CapacitySlot.
     * @example
     * // Update one CapacitySlot
     * const capacitySlot = await prisma.capacitySlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CapacitySlotUpdateArgs>(args: SelectSubset<T, CapacitySlotUpdateArgs<ExtArgs>>): Prisma__CapacitySlotClient<$Result.GetResult<Prisma.$CapacitySlotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CapacitySlots.
     * @param {CapacitySlotDeleteManyArgs} args - Arguments to filter CapacitySlots to delete.
     * @example
     * // Delete a few CapacitySlots
     * const { count } = await prisma.capacitySlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CapacitySlotDeleteManyArgs>(args?: SelectSubset<T, CapacitySlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CapacitySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacitySlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CapacitySlots
     * const capacitySlot = await prisma.capacitySlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CapacitySlotUpdateManyArgs>(args: SelectSubset<T, CapacitySlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CapacitySlot.
     * @param {CapacitySlotUpsertArgs} args - Arguments to update or create a CapacitySlot.
     * @example
     * // Update or create a CapacitySlot
     * const capacitySlot = await prisma.capacitySlot.upsert({
     *   create: {
     *     // ... data to create a CapacitySlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CapacitySlot we want to update
     *   }
     * })
     */
    upsert<T extends CapacitySlotUpsertArgs>(args: SelectSubset<T, CapacitySlotUpsertArgs<ExtArgs>>): Prisma__CapacitySlotClient<$Result.GetResult<Prisma.$CapacitySlotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CapacitySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacitySlotCountArgs} args - Arguments to filter CapacitySlots to count.
     * @example
     * // Count the number of CapacitySlots
     * const count = await prisma.capacitySlot.count({
     *   where: {
     *     // ... the filter for the CapacitySlots we want to count
     *   }
     * })
    **/
    count<T extends CapacitySlotCountArgs>(
      args?: Subset<T, CapacitySlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapacitySlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CapacitySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacitySlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CapacitySlotAggregateArgs>(args: Subset<T, CapacitySlotAggregateArgs>): Prisma.PrismaPromise<GetCapacitySlotAggregateType<T>>

    /**
     * Group by CapacitySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacitySlotGroupByArgs} args - Group by arguments.
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
      T extends CapacitySlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapacitySlotGroupByArgs['orderBy'] }
        : { orderBy?: CapacitySlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CapacitySlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapacitySlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CapacitySlot model
   */
  readonly fields: CapacitySlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CapacitySlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapacitySlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends CapacitySlot$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, CapacitySlot$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotReservationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the CapacitySlot model
   */ 
  interface CapacitySlotFieldRefs {
    readonly id: FieldRef<"CapacitySlot", 'String'>
    readonly outletId: FieldRef<"CapacitySlot", 'String'>
    readonly slotDate: FieldRef<"CapacitySlot", 'String'>
    readonly startTime: FieldRef<"CapacitySlot", 'String'>
    readonly endTime: FieldRef<"CapacitySlot", 'String'>
    readonly maxCapacity: FieldRef<"CapacitySlot", 'Int'>
    readonly reservedCount: FieldRef<"CapacitySlot", 'Int'>
    readonly version: FieldRef<"CapacitySlot", 'Int'>
    readonly isWalkIn: FieldRef<"CapacitySlot", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CapacitySlot findUnique
   */
  export type CapacitySlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacitySlot
     */
    select?: CapacitySlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacitySlotInclude<ExtArgs> | null
    /**
     * Filter, which CapacitySlot to fetch.
     */
    where: CapacitySlotWhereUniqueInput
  }

  /**
   * CapacitySlot findUniqueOrThrow
   */
  export type CapacitySlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacitySlot
     */
    select?: CapacitySlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacitySlotInclude<ExtArgs> | null
    /**
     * Filter, which CapacitySlot to fetch.
     */
    where: CapacitySlotWhereUniqueInput
  }

  /**
   * CapacitySlot findFirst
   */
  export type CapacitySlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacitySlot
     */
    select?: CapacitySlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacitySlotInclude<ExtArgs> | null
    /**
     * Filter, which CapacitySlot to fetch.
     */
    where?: CapacitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapacitySlots to fetch.
     */
    orderBy?: CapacitySlotOrderByWithRelationInput | CapacitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapacitySlots.
     */
    cursor?: CapacitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapacitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapacitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapacitySlots.
     */
    distinct?: CapacitySlotScalarFieldEnum | CapacitySlotScalarFieldEnum[]
  }

  /**
   * CapacitySlot findFirstOrThrow
   */
  export type CapacitySlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacitySlot
     */
    select?: CapacitySlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacitySlotInclude<ExtArgs> | null
    /**
     * Filter, which CapacitySlot to fetch.
     */
    where?: CapacitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapacitySlots to fetch.
     */
    orderBy?: CapacitySlotOrderByWithRelationInput | CapacitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapacitySlots.
     */
    cursor?: CapacitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapacitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapacitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapacitySlots.
     */
    distinct?: CapacitySlotScalarFieldEnum | CapacitySlotScalarFieldEnum[]
  }

  /**
   * CapacitySlot findMany
   */
  export type CapacitySlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacitySlot
     */
    select?: CapacitySlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacitySlotInclude<ExtArgs> | null
    /**
     * Filter, which CapacitySlots to fetch.
     */
    where?: CapacitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapacitySlots to fetch.
     */
    orderBy?: CapacitySlotOrderByWithRelationInput | CapacitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CapacitySlots.
     */
    cursor?: CapacitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapacitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapacitySlots.
     */
    skip?: number
    distinct?: CapacitySlotScalarFieldEnum | CapacitySlotScalarFieldEnum[]
  }

  /**
   * CapacitySlot create
   */
  export type CapacitySlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacitySlot
     */
    select?: CapacitySlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacitySlotInclude<ExtArgs> | null
    /**
     * The data needed to create a CapacitySlot.
     */
    data: XOR<CapacitySlotCreateInput, CapacitySlotUncheckedCreateInput>
  }

  /**
   * CapacitySlot createMany
   */
  export type CapacitySlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CapacitySlots.
     */
    data: CapacitySlotCreateManyInput | CapacitySlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CapacitySlot createManyAndReturn
   */
  export type CapacitySlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacitySlot
     */
    select?: CapacitySlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CapacitySlots.
     */
    data: CapacitySlotCreateManyInput | CapacitySlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CapacitySlot update
   */
  export type CapacitySlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacitySlot
     */
    select?: CapacitySlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacitySlotInclude<ExtArgs> | null
    /**
     * The data needed to update a CapacitySlot.
     */
    data: XOR<CapacitySlotUpdateInput, CapacitySlotUncheckedUpdateInput>
    /**
     * Choose, which CapacitySlot to update.
     */
    where: CapacitySlotWhereUniqueInput
  }

  /**
   * CapacitySlot updateMany
   */
  export type CapacitySlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CapacitySlots.
     */
    data: XOR<CapacitySlotUpdateManyMutationInput, CapacitySlotUncheckedUpdateManyInput>
    /**
     * Filter which CapacitySlots to update
     */
    where?: CapacitySlotWhereInput
  }

  /**
   * CapacitySlot upsert
   */
  export type CapacitySlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacitySlot
     */
    select?: CapacitySlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacitySlotInclude<ExtArgs> | null
    /**
     * The filter to search for the CapacitySlot to update in case it exists.
     */
    where: CapacitySlotWhereUniqueInput
    /**
     * In case the CapacitySlot found by the `where` argument doesn't exist, create a new CapacitySlot with this data.
     */
    create: XOR<CapacitySlotCreateInput, CapacitySlotUncheckedCreateInput>
    /**
     * In case the CapacitySlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapacitySlotUpdateInput, CapacitySlotUncheckedUpdateInput>
  }

  /**
   * CapacitySlot delete
   */
  export type CapacitySlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacitySlot
     */
    select?: CapacitySlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacitySlotInclude<ExtArgs> | null
    /**
     * Filter which CapacitySlot to delete.
     */
    where: CapacitySlotWhereUniqueInput
  }

  /**
   * CapacitySlot deleteMany
   */
  export type CapacitySlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapacitySlots to delete
     */
    where?: CapacitySlotWhereInput
  }

  /**
   * CapacitySlot.reservations
   */
  export type CapacitySlot$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotReservation
     */
    select?: SlotReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotReservationInclude<ExtArgs> | null
    where?: SlotReservationWhereInput
    orderBy?: SlotReservationOrderByWithRelationInput | SlotReservationOrderByWithRelationInput[]
    cursor?: SlotReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotReservationScalarFieldEnum | SlotReservationScalarFieldEnum[]
  }

  /**
   * CapacitySlot without action
   */
  export type CapacitySlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacitySlot
     */
    select?: CapacitySlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacitySlotInclude<ExtArgs> | null
  }


  /**
   * Model SlotReservation
   */

  export type AggregateSlotReservation = {
    _count: SlotReservationCountAggregateOutputType | null
    _min: SlotReservationMinAggregateOutputType | null
    _max: SlotReservationMaxAggregateOutputType | null
  }

  export type SlotReservationMinAggregateOutputType = {
    id: string | null
    slotId: string | null
    orderId: string | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SlotReservationMaxAggregateOutputType = {
    id: string | null
    slotId: string | null
    orderId: string | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SlotReservationCountAggregateOutputType = {
    id: number
    slotId: number
    orderId: number
    status: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SlotReservationMinAggregateInputType = {
    id?: true
    slotId?: true
    orderId?: true
    status?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SlotReservationMaxAggregateInputType = {
    id?: true
    slotId?: true
    orderId?: true
    status?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SlotReservationCountAggregateInputType = {
    id?: true
    slotId?: true
    orderId?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SlotReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlotReservation to aggregate.
     */
    where?: SlotReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotReservations to fetch.
     */
    orderBy?: SlotReservationOrderByWithRelationInput | SlotReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlotReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotReservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SlotReservations
    **/
    _count?: true | SlotReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlotReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlotReservationMaxAggregateInputType
  }

  export type GetSlotReservationAggregateType<T extends SlotReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateSlotReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlotReservation[P]>
      : GetScalarType<T[P], AggregateSlotReservation[P]>
  }




  export type SlotReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotReservationWhereInput
    orderBy?: SlotReservationOrderByWithAggregationInput | SlotReservationOrderByWithAggregationInput[]
    by: SlotReservationScalarFieldEnum[] | SlotReservationScalarFieldEnum
    having?: SlotReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlotReservationCountAggregateInputType | true
    _min?: SlotReservationMinAggregateInputType
    _max?: SlotReservationMaxAggregateInputType
  }

  export type SlotReservationGroupByOutputType = {
    id: string
    slotId: string
    orderId: string
    status: string
    expiresAt: Date
    createdAt: Date
    _count: SlotReservationCountAggregateOutputType | null
    _min: SlotReservationMinAggregateOutputType | null
    _max: SlotReservationMaxAggregateOutputType | null
  }

  type GetSlotReservationGroupByPayload<T extends SlotReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlotReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlotReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlotReservationGroupByOutputType[P]>
            : GetScalarType<T[P], SlotReservationGroupByOutputType[P]>
        }
      >
    >


  export type SlotReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotId?: boolean
    orderId?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    slot?: boolean | CapacitySlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slotReservation"]>

  export type SlotReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotId?: boolean
    orderId?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    slot?: boolean | CapacitySlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slotReservation"]>

  export type SlotReservationSelectScalar = {
    id?: boolean
    slotId?: boolean
    orderId?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SlotReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slot?: boolean | CapacitySlotDefaultArgs<ExtArgs>
  }
  export type SlotReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slot?: boolean | CapacitySlotDefaultArgs<ExtArgs>
  }

  export type $SlotReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SlotReservation"
    objects: {
      slot: Prisma.$CapacitySlotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slotId: string
      orderId: string
      status: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["slotReservation"]>
    composites: {}
  }

  type SlotReservationGetPayload<S extends boolean | null | undefined | SlotReservationDefaultArgs> = $Result.GetResult<Prisma.$SlotReservationPayload, S>

  type SlotReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SlotReservationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SlotReservationCountAggregateInputType | true
    }

  export interface SlotReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SlotReservation'], meta: { name: 'SlotReservation' } }
    /**
     * Find zero or one SlotReservation that matches the filter.
     * @param {SlotReservationFindUniqueArgs} args - Arguments to find a SlotReservation
     * @example
     * // Get one SlotReservation
     * const slotReservation = await prisma.slotReservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlotReservationFindUniqueArgs>(args: SelectSubset<T, SlotReservationFindUniqueArgs<ExtArgs>>): Prisma__SlotReservationClient<$Result.GetResult<Prisma.$SlotReservationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SlotReservation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SlotReservationFindUniqueOrThrowArgs} args - Arguments to find a SlotReservation
     * @example
     * // Get one SlotReservation
     * const slotReservation = await prisma.slotReservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlotReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, SlotReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlotReservationClient<$Result.GetResult<Prisma.$SlotReservationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SlotReservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotReservationFindFirstArgs} args - Arguments to find a SlotReservation
     * @example
     * // Get one SlotReservation
     * const slotReservation = await prisma.slotReservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlotReservationFindFirstArgs>(args?: SelectSubset<T, SlotReservationFindFirstArgs<ExtArgs>>): Prisma__SlotReservationClient<$Result.GetResult<Prisma.$SlotReservationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SlotReservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotReservationFindFirstOrThrowArgs} args - Arguments to find a SlotReservation
     * @example
     * // Get one SlotReservation
     * const slotReservation = await prisma.slotReservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlotReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, SlotReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlotReservationClient<$Result.GetResult<Prisma.$SlotReservationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SlotReservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SlotReservations
     * const slotReservations = await prisma.slotReservation.findMany()
     * 
     * // Get first 10 SlotReservations
     * const slotReservations = await prisma.slotReservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slotReservationWithIdOnly = await prisma.slotReservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlotReservationFindManyArgs>(args?: SelectSubset<T, SlotReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotReservationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SlotReservation.
     * @param {SlotReservationCreateArgs} args - Arguments to create a SlotReservation.
     * @example
     * // Create one SlotReservation
     * const SlotReservation = await prisma.slotReservation.create({
     *   data: {
     *     // ... data to create a SlotReservation
     *   }
     * })
     * 
     */
    create<T extends SlotReservationCreateArgs>(args: SelectSubset<T, SlotReservationCreateArgs<ExtArgs>>): Prisma__SlotReservationClient<$Result.GetResult<Prisma.$SlotReservationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SlotReservations.
     * @param {SlotReservationCreateManyArgs} args - Arguments to create many SlotReservations.
     * @example
     * // Create many SlotReservations
     * const slotReservation = await prisma.slotReservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlotReservationCreateManyArgs>(args?: SelectSubset<T, SlotReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SlotReservations and returns the data saved in the database.
     * @param {SlotReservationCreateManyAndReturnArgs} args - Arguments to create many SlotReservations.
     * @example
     * // Create many SlotReservations
     * const slotReservation = await prisma.slotReservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SlotReservations and only return the `id`
     * const slotReservationWithIdOnly = await prisma.slotReservation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlotReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, SlotReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotReservationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SlotReservation.
     * @param {SlotReservationDeleteArgs} args - Arguments to delete one SlotReservation.
     * @example
     * // Delete one SlotReservation
     * const SlotReservation = await prisma.slotReservation.delete({
     *   where: {
     *     // ... filter to delete one SlotReservation
     *   }
     * })
     * 
     */
    delete<T extends SlotReservationDeleteArgs>(args: SelectSubset<T, SlotReservationDeleteArgs<ExtArgs>>): Prisma__SlotReservationClient<$Result.GetResult<Prisma.$SlotReservationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SlotReservation.
     * @param {SlotReservationUpdateArgs} args - Arguments to update one SlotReservation.
     * @example
     * // Update one SlotReservation
     * const slotReservation = await prisma.slotReservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlotReservationUpdateArgs>(args: SelectSubset<T, SlotReservationUpdateArgs<ExtArgs>>): Prisma__SlotReservationClient<$Result.GetResult<Prisma.$SlotReservationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SlotReservations.
     * @param {SlotReservationDeleteManyArgs} args - Arguments to filter SlotReservations to delete.
     * @example
     * // Delete a few SlotReservations
     * const { count } = await prisma.slotReservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlotReservationDeleteManyArgs>(args?: SelectSubset<T, SlotReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlotReservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SlotReservations
     * const slotReservation = await prisma.slotReservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlotReservationUpdateManyArgs>(args: SelectSubset<T, SlotReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SlotReservation.
     * @param {SlotReservationUpsertArgs} args - Arguments to update or create a SlotReservation.
     * @example
     * // Update or create a SlotReservation
     * const slotReservation = await prisma.slotReservation.upsert({
     *   create: {
     *     // ... data to create a SlotReservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SlotReservation we want to update
     *   }
     * })
     */
    upsert<T extends SlotReservationUpsertArgs>(args: SelectSubset<T, SlotReservationUpsertArgs<ExtArgs>>): Prisma__SlotReservationClient<$Result.GetResult<Prisma.$SlotReservationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SlotReservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotReservationCountArgs} args - Arguments to filter SlotReservations to count.
     * @example
     * // Count the number of SlotReservations
     * const count = await prisma.slotReservation.count({
     *   where: {
     *     // ... the filter for the SlotReservations we want to count
     *   }
     * })
    **/
    count<T extends SlotReservationCountArgs>(
      args?: Subset<T, SlotReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlotReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SlotReservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SlotReservationAggregateArgs>(args: Subset<T, SlotReservationAggregateArgs>): Prisma.PrismaPromise<GetSlotReservationAggregateType<T>>

    /**
     * Group by SlotReservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotReservationGroupByArgs} args - Group by arguments.
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
      T extends SlotReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlotReservationGroupByArgs['orderBy'] }
        : { orderBy?: SlotReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SlotReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlotReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SlotReservation model
   */
  readonly fields: SlotReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SlotReservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlotReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slot<T extends CapacitySlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CapacitySlotDefaultArgs<ExtArgs>>): Prisma__CapacitySlotClient<$Result.GetResult<Prisma.$CapacitySlotPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SlotReservation model
   */ 
  interface SlotReservationFieldRefs {
    readonly id: FieldRef<"SlotReservation", 'String'>
    readonly slotId: FieldRef<"SlotReservation", 'String'>
    readonly orderId: FieldRef<"SlotReservation", 'String'>
    readonly status: FieldRef<"SlotReservation", 'String'>
    readonly expiresAt: FieldRef<"SlotReservation", 'DateTime'>
    readonly createdAt: FieldRef<"SlotReservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SlotReservation findUnique
   */
  export type SlotReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotReservation
     */
    select?: SlotReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotReservationInclude<ExtArgs> | null
    /**
     * Filter, which SlotReservation to fetch.
     */
    where: SlotReservationWhereUniqueInput
  }

  /**
   * SlotReservation findUniqueOrThrow
   */
  export type SlotReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotReservation
     */
    select?: SlotReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotReservationInclude<ExtArgs> | null
    /**
     * Filter, which SlotReservation to fetch.
     */
    where: SlotReservationWhereUniqueInput
  }

  /**
   * SlotReservation findFirst
   */
  export type SlotReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotReservation
     */
    select?: SlotReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotReservationInclude<ExtArgs> | null
    /**
     * Filter, which SlotReservation to fetch.
     */
    where?: SlotReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotReservations to fetch.
     */
    orderBy?: SlotReservationOrderByWithRelationInput | SlotReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlotReservations.
     */
    cursor?: SlotReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotReservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlotReservations.
     */
    distinct?: SlotReservationScalarFieldEnum | SlotReservationScalarFieldEnum[]
  }

  /**
   * SlotReservation findFirstOrThrow
   */
  export type SlotReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotReservation
     */
    select?: SlotReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotReservationInclude<ExtArgs> | null
    /**
     * Filter, which SlotReservation to fetch.
     */
    where?: SlotReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotReservations to fetch.
     */
    orderBy?: SlotReservationOrderByWithRelationInput | SlotReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlotReservations.
     */
    cursor?: SlotReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotReservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlotReservations.
     */
    distinct?: SlotReservationScalarFieldEnum | SlotReservationScalarFieldEnum[]
  }

  /**
   * SlotReservation findMany
   */
  export type SlotReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotReservation
     */
    select?: SlotReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotReservationInclude<ExtArgs> | null
    /**
     * Filter, which SlotReservations to fetch.
     */
    where?: SlotReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotReservations to fetch.
     */
    orderBy?: SlotReservationOrderByWithRelationInput | SlotReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SlotReservations.
     */
    cursor?: SlotReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotReservations.
     */
    skip?: number
    distinct?: SlotReservationScalarFieldEnum | SlotReservationScalarFieldEnum[]
  }

  /**
   * SlotReservation create
   */
  export type SlotReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotReservation
     */
    select?: SlotReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a SlotReservation.
     */
    data: XOR<SlotReservationCreateInput, SlotReservationUncheckedCreateInput>
  }

  /**
   * SlotReservation createMany
   */
  export type SlotReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SlotReservations.
     */
    data: SlotReservationCreateManyInput | SlotReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlotReservation createManyAndReturn
   */
  export type SlotReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotReservation
     */
    select?: SlotReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SlotReservations.
     */
    data: SlotReservationCreateManyInput | SlotReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlotReservation update
   */
  export type SlotReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotReservation
     */
    select?: SlotReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a SlotReservation.
     */
    data: XOR<SlotReservationUpdateInput, SlotReservationUncheckedUpdateInput>
    /**
     * Choose, which SlotReservation to update.
     */
    where: SlotReservationWhereUniqueInput
  }

  /**
   * SlotReservation updateMany
   */
  export type SlotReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SlotReservations.
     */
    data: XOR<SlotReservationUpdateManyMutationInput, SlotReservationUncheckedUpdateManyInput>
    /**
     * Filter which SlotReservations to update
     */
    where?: SlotReservationWhereInput
  }

  /**
   * SlotReservation upsert
   */
  export type SlotReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotReservation
     */
    select?: SlotReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the SlotReservation to update in case it exists.
     */
    where: SlotReservationWhereUniqueInput
    /**
     * In case the SlotReservation found by the `where` argument doesn't exist, create a new SlotReservation with this data.
     */
    create: XOR<SlotReservationCreateInput, SlotReservationUncheckedCreateInput>
    /**
     * In case the SlotReservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlotReservationUpdateInput, SlotReservationUncheckedUpdateInput>
  }

  /**
   * SlotReservation delete
   */
  export type SlotReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotReservation
     */
    select?: SlotReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotReservationInclude<ExtArgs> | null
    /**
     * Filter which SlotReservation to delete.
     */
    where: SlotReservationWhereUniqueInput
  }

  /**
   * SlotReservation deleteMany
   */
  export type SlotReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlotReservations to delete
     */
    where?: SlotReservationWhereInput
  }

  /**
   * SlotReservation without action
   */
  export type SlotReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotReservation
     */
    select?: SlotReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotReservationInclude<ExtArgs> | null
  }


  /**
   * Model QueueSnapshot
   */

  export type AggregateQueueSnapshot = {
    _count: QueueSnapshotCountAggregateOutputType | null
    _avg: QueueSnapshotAvgAggregateOutputType | null
    _sum: QueueSnapshotSumAggregateOutputType | null
    _min: QueueSnapshotMinAggregateOutputType | null
    _max: QueueSnapshotMaxAggregateOutputType | null
  }

  export type QueueSnapshotAvgAggregateOutputType = {
    activeOrdersCount: number | null
    waitMinutes: number | null
  }

  export type QueueSnapshotSumAggregateOutputType = {
    activeOrdersCount: number | null
    waitMinutes: number | null
  }

  export type QueueSnapshotMinAggregateOutputType = {
    id: string | null
    outletId: string | null
    activeOrdersCount: number | null
    waitMinutes: number | null
    observedAt: Date | null
  }

  export type QueueSnapshotMaxAggregateOutputType = {
    id: string | null
    outletId: string | null
    activeOrdersCount: number | null
    waitMinutes: number | null
    observedAt: Date | null
  }

  export type QueueSnapshotCountAggregateOutputType = {
    id: number
    outletId: number
    activeOrdersCount: number
    waitMinutes: number
    observedAt: number
    _all: number
  }


  export type QueueSnapshotAvgAggregateInputType = {
    activeOrdersCount?: true
    waitMinutes?: true
  }

  export type QueueSnapshotSumAggregateInputType = {
    activeOrdersCount?: true
    waitMinutes?: true
  }

  export type QueueSnapshotMinAggregateInputType = {
    id?: true
    outletId?: true
    activeOrdersCount?: true
    waitMinutes?: true
    observedAt?: true
  }

  export type QueueSnapshotMaxAggregateInputType = {
    id?: true
    outletId?: true
    activeOrdersCount?: true
    waitMinutes?: true
    observedAt?: true
  }

  export type QueueSnapshotCountAggregateInputType = {
    id?: true
    outletId?: true
    activeOrdersCount?: true
    waitMinutes?: true
    observedAt?: true
    _all?: true
  }

  export type QueueSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueueSnapshot to aggregate.
     */
    where?: QueueSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueSnapshots to fetch.
     */
    orderBy?: QueueSnapshotOrderByWithRelationInput | QueueSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueueSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QueueSnapshots
    **/
    _count?: true | QueueSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QueueSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QueueSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueueSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueueSnapshotMaxAggregateInputType
  }

  export type GetQueueSnapshotAggregateType<T extends QueueSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateQueueSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueueSnapshot[P]>
      : GetScalarType<T[P], AggregateQueueSnapshot[P]>
  }




  export type QueueSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueueSnapshotWhereInput
    orderBy?: QueueSnapshotOrderByWithAggregationInput | QueueSnapshotOrderByWithAggregationInput[]
    by: QueueSnapshotScalarFieldEnum[] | QueueSnapshotScalarFieldEnum
    having?: QueueSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueueSnapshotCountAggregateInputType | true
    _avg?: QueueSnapshotAvgAggregateInputType
    _sum?: QueueSnapshotSumAggregateInputType
    _min?: QueueSnapshotMinAggregateInputType
    _max?: QueueSnapshotMaxAggregateInputType
  }

  export type QueueSnapshotGroupByOutputType = {
    id: string
    outletId: string
    activeOrdersCount: number
    waitMinutes: number
    observedAt: Date
    _count: QueueSnapshotCountAggregateOutputType | null
    _avg: QueueSnapshotAvgAggregateOutputType | null
    _sum: QueueSnapshotSumAggregateOutputType | null
    _min: QueueSnapshotMinAggregateOutputType | null
    _max: QueueSnapshotMaxAggregateOutputType | null
  }

  type GetQueueSnapshotGroupByPayload<T extends QueueSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueueSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueueSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueueSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], QueueSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type QueueSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    activeOrdersCount?: boolean
    waitMinutes?: boolean
    observedAt?: boolean
  }, ExtArgs["result"]["queueSnapshot"]>

  export type QueueSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    activeOrdersCount?: boolean
    waitMinutes?: boolean
    observedAt?: boolean
  }, ExtArgs["result"]["queueSnapshot"]>

  export type QueueSnapshotSelectScalar = {
    id?: boolean
    outletId?: boolean
    activeOrdersCount?: boolean
    waitMinutes?: boolean
    observedAt?: boolean
  }


  export type $QueueSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QueueSnapshot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      outletId: string
      activeOrdersCount: number
      waitMinutes: number
      observedAt: Date
    }, ExtArgs["result"]["queueSnapshot"]>
    composites: {}
  }

  type QueueSnapshotGetPayload<S extends boolean | null | undefined | QueueSnapshotDefaultArgs> = $Result.GetResult<Prisma.$QueueSnapshotPayload, S>

  type QueueSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QueueSnapshotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QueueSnapshotCountAggregateInputType | true
    }

  export interface QueueSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QueueSnapshot'], meta: { name: 'QueueSnapshot' } }
    /**
     * Find zero or one QueueSnapshot that matches the filter.
     * @param {QueueSnapshotFindUniqueArgs} args - Arguments to find a QueueSnapshot
     * @example
     * // Get one QueueSnapshot
     * const queueSnapshot = await prisma.queueSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueueSnapshotFindUniqueArgs>(args: SelectSubset<T, QueueSnapshotFindUniqueArgs<ExtArgs>>): Prisma__QueueSnapshotClient<$Result.GetResult<Prisma.$QueueSnapshotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QueueSnapshot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QueueSnapshotFindUniqueOrThrowArgs} args - Arguments to find a QueueSnapshot
     * @example
     * // Get one QueueSnapshot
     * const queueSnapshot = await prisma.queueSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueueSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, QueueSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueueSnapshotClient<$Result.GetResult<Prisma.$QueueSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QueueSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueSnapshotFindFirstArgs} args - Arguments to find a QueueSnapshot
     * @example
     * // Get one QueueSnapshot
     * const queueSnapshot = await prisma.queueSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueueSnapshotFindFirstArgs>(args?: SelectSubset<T, QueueSnapshotFindFirstArgs<ExtArgs>>): Prisma__QueueSnapshotClient<$Result.GetResult<Prisma.$QueueSnapshotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QueueSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueSnapshotFindFirstOrThrowArgs} args - Arguments to find a QueueSnapshot
     * @example
     * // Get one QueueSnapshot
     * const queueSnapshot = await prisma.queueSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueueSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, QueueSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueueSnapshotClient<$Result.GetResult<Prisma.$QueueSnapshotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QueueSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QueueSnapshots
     * const queueSnapshots = await prisma.queueSnapshot.findMany()
     * 
     * // Get first 10 QueueSnapshots
     * const queueSnapshots = await prisma.queueSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queueSnapshotWithIdOnly = await prisma.queueSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueueSnapshotFindManyArgs>(args?: SelectSubset<T, QueueSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueueSnapshotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QueueSnapshot.
     * @param {QueueSnapshotCreateArgs} args - Arguments to create a QueueSnapshot.
     * @example
     * // Create one QueueSnapshot
     * const QueueSnapshot = await prisma.queueSnapshot.create({
     *   data: {
     *     // ... data to create a QueueSnapshot
     *   }
     * })
     * 
     */
    create<T extends QueueSnapshotCreateArgs>(args: SelectSubset<T, QueueSnapshotCreateArgs<ExtArgs>>): Prisma__QueueSnapshotClient<$Result.GetResult<Prisma.$QueueSnapshotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QueueSnapshots.
     * @param {QueueSnapshotCreateManyArgs} args - Arguments to create many QueueSnapshots.
     * @example
     * // Create many QueueSnapshots
     * const queueSnapshot = await prisma.queueSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueueSnapshotCreateManyArgs>(args?: SelectSubset<T, QueueSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QueueSnapshots and returns the data saved in the database.
     * @param {QueueSnapshotCreateManyAndReturnArgs} args - Arguments to create many QueueSnapshots.
     * @example
     * // Create many QueueSnapshots
     * const queueSnapshot = await prisma.queueSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QueueSnapshots and only return the `id`
     * const queueSnapshotWithIdOnly = await prisma.queueSnapshot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QueueSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, QueueSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueueSnapshotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QueueSnapshot.
     * @param {QueueSnapshotDeleteArgs} args - Arguments to delete one QueueSnapshot.
     * @example
     * // Delete one QueueSnapshot
     * const QueueSnapshot = await prisma.queueSnapshot.delete({
     *   where: {
     *     // ... filter to delete one QueueSnapshot
     *   }
     * })
     * 
     */
    delete<T extends QueueSnapshotDeleteArgs>(args: SelectSubset<T, QueueSnapshotDeleteArgs<ExtArgs>>): Prisma__QueueSnapshotClient<$Result.GetResult<Prisma.$QueueSnapshotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QueueSnapshot.
     * @param {QueueSnapshotUpdateArgs} args - Arguments to update one QueueSnapshot.
     * @example
     * // Update one QueueSnapshot
     * const queueSnapshot = await prisma.queueSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueueSnapshotUpdateArgs>(args: SelectSubset<T, QueueSnapshotUpdateArgs<ExtArgs>>): Prisma__QueueSnapshotClient<$Result.GetResult<Prisma.$QueueSnapshotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QueueSnapshots.
     * @param {QueueSnapshotDeleteManyArgs} args - Arguments to filter QueueSnapshots to delete.
     * @example
     * // Delete a few QueueSnapshots
     * const { count } = await prisma.queueSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueueSnapshotDeleteManyArgs>(args?: SelectSubset<T, QueueSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QueueSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QueueSnapshots
     * const queueSnapshot = await prisma.queueSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueueSnapshotUpdateManyArgs>(args: SelectSubset<T, QueueSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QueueSnapshot.
     * @param {QueueSnapshotUpsertArgs} args - Arguments to update or create a QueueSnapshot.
     * @example
     * // Update or create a QueueSnapshot
     * const queueSnapshot = await prisma.queueSnapshot.upsert({
     *   create: {
     *     // ... data to create a QueueSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QueueSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends QueueSnapshotUpsertArgs>(args: SelectSubset<T, QueueSnapshotUpsertArgs<ExtArgs>>): Prisma__QueueSnapshotClient<$Result.GetResult<Prisma.$QueueSnapshotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QueueSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueSnapshotCountArgs} args - Arguments to filter QueueSnapshots to count.
     * @example
     * // Count the number of QueueSnapshots
     * const count = await prisma.queueSnapshot.count({
     *   where: {
     *     // ... the filter for the QueueSnapshots we want to count
     *   }
     * })
    **/
    count<T extends QueueSnapshotCountArgs>(
      args?: Subset<T, QueueSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueueSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QueueSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QueueSnapshotAggregateArgs>(args: Subset<T, QueueSnapshotAggregateArgs>): Prisma.PrismaPromise<GetQueueSnapshotAggregateType<T>>

    /**
     * Group by QueueSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueSnapshotGroupByArgs} args - Group by arguments.
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
      T extends QueueSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueueSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: QueueSnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QueueSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueueSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QueueSnapshot model
   */
  readonly fields: QueueSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QueueSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueueSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the QueueSnapshot model
   */ 
  interface QueueSnapshotFieldRefs {
    readonly id: FieldRef<"QueueSnapshot", 'String'>
    readonly outletId: FieldRef<"QueueSnapshot", 'String'>
    readonly activeOrdersCount: FieldRef<"QueueSnapshot", 'Int'>
    readonly waitMinutes: FieldRef<"QueueSnapshot", 'Int'>
    readonly observedAt: FieldRef<"QueueSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QueueSnapshot findUnique
   */
  export type QueueSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueSnapshot
     */
    select?: QueueSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which QueueSnapshot to fetch.
     */
    where: QueueSnapshotWhereUniqueInput
  }

  /**
   * QueueSnapshot findUniqueOrThrow
   */
  export type QueueSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueSnapshot
     */
    select?: QueueSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which QueueSnapshot to fetch.
     */
    where: QueueSnapshotWhereUniqueInput
  }

  /**
   * QueueSnapshot findFirst
   */
  export type QueueSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueSnapshot
     */
    select?: QueueSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which QueueSnapshot to fetch.
     */
    where?: QueueSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueSnapshots to fetch.
     */
    orderBy?: QueueSnapshotOrderByWithRelationInput | QueueSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueueSnapshots.
     */
    cursor?: QueueSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueueSnapshots.
     */
    distinct?: QueueSnapshotScalarFieldEnum | QueueSnapshotScalarFieldEnum[]
  }

  /**
   * QueueSnapshot findFirstOrThrow
   */
  export type QueueSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueSnapshot
     */
    select?: QueueSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which QueueSnapshot to fetch.
     */
    where?: QueueSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueSnapshots to fetch.
     */
    orderBy?: QueueSnapshotOrderByWithRelationInput | QueueSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueueSnapshots.
     */
    cursor?: QueueSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueueSnapshots.
     */
    distinct?: QueueSnapshotScalarFieldEnum | QueueSnapshotScalarFieldEnum[]
  }

  /**
   * QueueSnapshot findMany
   */
  export type QueueSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueSnapshot
     */
    select?: QueueSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which QueueSnapshots to fetch.
     */
    where?: QueueSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueSnapshots to fetch.
     */
    orderBy?: QueueSnapshotOrderByWithRelationInput | QueueSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QueueSnapshots.
     */
    cursor?: QueueSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueSnapshots.
     */
    skip?: number
    distinct?: QueueSnapshotScalarFieldEnum | QueueSnapshotScalarFieldEnum[]
  }

  /**
   * QueueSnapshot create
   */
  export type QueueSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueSnapshot
     */
    select?: QueueSnapshotSelect<ExtArgs> | null
    /**
     * The data needed to create a QueueSnapshot.
     */
    data: XOR<QueueSnapshotCreateInput, QueueSnapshotUncheckedCreateInput>
  }

  /**
   * QueueSnapshot createMany
   */
  export type QueueSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QueueSnapshots.
     */
    data: QueueSnapshotCreateManyInput | QueueSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QueueSnapshot createManyAndReturn
   */
  export type QueueSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueSnapshot
     */
    select?: QueueSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QueueSnapshots.
     */
    data: QueueSnapshotCreateManyInput | QueueSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QueueSnapshot update
   */
  export type QueueSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueSnapshot
     */
    select?: QueueSnapshotSelect<ExtArgs> | null
    /**
     * The data needed to update a QueueSnapshot.
     */
    data: XOR<QueueSnapshotUpdateInput, QueueSnapshotUncheckedUpdateInput>
    /**
     * Choose, which QueueSnapshot to update.
     */
    where: QueueSnapshotWhereUniqueInput
  }

  /**
   * QueueSnapshot updateMany
   */
  export type QueueSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QueueSnapshots.
     */
    data: XOR<QueueSnapshotUpdateManyMutationInput, QueueSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which QueueSnapshots to update
     */
    where?: QueueSnapshotWhereInput
  }

  /**
   * QueueSnapshot upsert
   */
  export type QueueSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueSnapshot
     */
    select?: QueueSnapshotSelect<ExtArgs> | null
    /**
     * The filter to search for the QueueSnapshot to update in case it exists.
     */
    where: QueueSnapshotWhereUniqueInput
    /**
     * In case the QueueSnapshot found by the `where` argument doesn't exist, create a new QueueSnapshot with this data.
     */
    create: XOR<QueueSnapshotCreateInput, QueueSnapshotUncheckedCreateInput>
    /**
     * In case the QueueSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueueSnapshotUpdateInput, QueueSnapshotUncheckedUpdateInput>
  }

  /**
   * QueueSnapshot delete
   */
  export type QueueSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueSnapshot
     */
    select?: QueueSnapshotSelect<ExtArgs> | null
    /**
     * Filter which QueueSnapshot to delete.
     */
    where: QueueSnapshotWhereUniqueInput
  }

  /**
   * QueueSnapshot deleteMany
   */
  export type QueueSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueueSnapshots to delete
     */
    where?: QueueSnapshotWhereInput
  }

  /**
   * QueueSnapshot without action
   */
  export type QueueSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueSnapshot
     */
    select?: QueueSnapshotSelect<ExtArgs> | null
  }


  /**
   * Model PickupToken
   */

  export type AggregatePickupToken = {
    _count: PickupTokenCountAggregateOutputType | null
    _min: PickupTokenMinAggregateOutputType | null
    _max: PickupTokenMaxAggregateOutputType | null
  }

  export type PickupTokenMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    outletId: string | null
    tokenNumber: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PickupTokenMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    outletId: string | null
    tokenNumber: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PickupTokenCountAggregateOutputType = {
    id: number
    orderId: number
    outletId: number
    tokenNumber: number
    status: number
    createdAt: number
    _all: number
  }


  export type PickupTokenMinAggregateInputType = {
    id?: true
    orderId?: true
    outletId?: true
    tokenNumber?: true
    status?: true
    createdAt?: true
  }

  export type PickupTokenMaxAggregateInputType = {
    id?: true
    orderId?: true
    outletId?: true
    tokenNumber?: true
    status?: true
    createdAt?: true
  }

  export type PickupTokenCountAggregateInputType = {
    id?: true
    orderId?: true
    outletId?: true
    tokenNumber?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PickupTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PickupToken to aggregate.
     */
    where?: PickupTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PickupTokens to fetch.
     */
    orderBy?: PickupTokenOrderByWithRelationInput | PickupTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PickupTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PickupTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PickupTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PickupTokens
    **/
    _count?: true | PickupTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PickupTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PickupTokenMaxAggregateInputType
  }

  export type GetPickupTokenAggregateType<T extends PickupTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePickupToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePickupToken[P]>
      : GetScalarType<T[P], AggregatePickupToken[P]>
  }




  export type PickupTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PickupTokenWhereInput
    orderBy?: PickupTokenOrderByWithAggregationInput | PickupTokenOrderByWithAggregationInput[]
    by: PickupTokenScalarFieldEnum[] | PickupTokenScalarFieldEnum
    having?: PickupTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PickupTokenCountAggregateInputType | true
    _min?: PickupTokenMinAggregateInputType
    _max?: PickupTokenMaxAggregateInputType
  }

  export type PickupTokenGroupByOutputType = {
    id: string
    orderId: string
    outletId: string
    tokenNumber: string
    status: string
    createdAt: Date
    _count: PickupTokenCountAggregateOutputType | null
    _min: PickupTokenMinAggregateOutputType | null
    _max: PickupTokenMaxAggregateOutputType | null
  }

  type GetPickupTokenGroupByPayload<T extends PickupTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PickupTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PickupTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PickupTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PickupTokenGroupByOutputType[P]>
        }
      >
    >


  export type PickupTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    outletId?: boolean
    tokenNumber?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pickupToken"]>

  export type PickupTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    outletId?: boolean
    tokenNumber?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pickupToken"]>

  export type PickupTokenSelectScalar = {
    id?: boolean
    orderId?: boolean
    outletId?: boolean
    tokenNumber?: boolean
    status?: boolean
    createdAt?: boolean
  }


  export type $PickupTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PickupToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      outletId: string
      tokenNumber: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["pickupToken"]>
    composites: {}
  }

  type PickupTokenGetPayload<S extends boolean | null | undefined | PickupTokenDefaultArgs> = $Result.GetResult<Prisma.$PickupTokenPayload, S>

  type PickupTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PickupTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PickupTokenCountAggregateInputType | true
    }

  export interface PickupTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PickupToken'], meta: { name: 'PickupToken' } }
    /**
     * Find zero or one PickupToken that matches the filter.
     * @param {PickupTokenFindUniqueArgs} args - Arguments to find a PickupToken
     * @example
     * // Get one PickupToken
     * const pickupToken = await prisma.pickupToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PickupTokenFindUniqueArgs>(args: SelectSubset<T, PickupTokenFindUniqueArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PickupToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PickupTokenFindUniqueOrThrowArgs} args - Arguments to find a PickupToken
     * @example
     * // Get one PickupToken
     * const pickupToken = await prisma.pickupToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PickupTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PickupTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PickupToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenFindFirstArgs} args - Arguments to find a PickupToken
     * @example
     * // Get one PickupToken
     * const pickupToken = await prisma.pickupToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PickupTokenFindFirstArgs>(args?: SelectSubset<T, PickupTokenFindFirstArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PickupToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenFindFirstOrThrowArgs} args - Arguments to find a PickupToken
     * @example
     * // Get one PickupToken
     * const pickupToken = await prisma.pickupToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PickupTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PickupTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PickupTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PickupTokens
     * const pickupTokens = await prisma.pickupToken.findMany()
     * 
     * // Get first 10 PickupTokens
     * const pickupTokens = await prisma.pickupToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pickupTokenWithIdOnly = await prisma.pickupToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PickupTokenFindManyArgs>(args?: SelectSubset<T, PickupTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PickupToken.
     * @param {PickupTokenCreateArgs} args - Arguments to create a PickupToken.
     * @example
     * // Create one PickupToken
     * const PickupToken = await prisma.pickupToken.create({
     *   data: {
     *     // ... data to create a PickupToken
     *   }
     * })
     * 
     */
    create<T extends PickupTokenCreateArgs>(args: SelectSubset<T, PickupTokenCreateArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PickupTokens.
     * @param {PickupTokenCreateManyArgs} args - Arguments to create many PickupTokens.
     * @example
     * // Create many PickupTokens
     * const pickupToken = await prisma.pickupToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PickupTokenCreateManyArgs>(args?: SelectSubset<T, PickupTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PickupTokens and returns the data saved in the database.
     * @param {PickupTokenCreateManyAndReturnArgs} args - Arguments to create many PickupTokens.
     * @example
     * // Create many PickupTokens
     * const pickupToken = await prisma.pickupToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PickupTokens and only return the `id`
     * const pickupTokenWithIdOnly = await prisma.pickupToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PickupTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PickupTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PickupToken.
     * @param {PickupTokenDeleteArgs} args - Arguments to delete one PickupToken.
     * @example
     * // Delete one PickupToken
     * const PickupToken = await prisma.pickupToken.delete({
     *   where: {
     *     // ... filter to delete one PickupToken
     *   }
     * })
     * 
     */
    delete<T extends PickupTokenDeleteArgs>(args: SelectSubset<T, PickupTokenDeleteArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PickupToken.
     * @param {PickupTokenUpdateArgs} args - Arguments to update one PickupToken.
     * @example
     * // Update one PickupToken
     * const pickupToken = await prisma.pickupToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PickupTokenUpdateArgs>(args: SelectSubset<T, PickupTokenUpdateArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PickupTokens.
     * @param {PickupTokenDeleteManyArgs} args - Arguments to filter PickupTokens to delete.
     * @example
     * // Delete a few PickupTokens
     * const { count } = await prisma.pickupToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PickupTokenDeleteManyArgs>(args?: SelectSubset<T, PickupTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PickupTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PickupTokens
     * const pickupToken = await prisma.pickupToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PickupTokenUpdateManyArgs>(args: SelectSubset<T, PickupTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PickupToken.
     * @param {PickupTokenUpsertArgs} args - Arguments to update or create a PickupToken.
     * @example
     * // Update or create a PickupToken
     * const pickupToken = await prisma.pickupToken.upsert({
     *   create: {
     *     // ... data to create a PickupToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PickupToken we want to update
     *   }
     * })
     */
    upsert<T extends PickupTokenUpsertArgs>(args: SelectSubset<T, PickupTokenUpsertArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PickupTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenCountArgs} args - Arguments to filter PickupTokens to count.
     * @example
     * // Count the number of PickupTokens
     * const count = await prisma.pickupToken.count({
     *   where: {
     *     // ... the filter for the PickupTokens we want to count
     *   }
     * })
    **/
    count<T extends PickupTokenCountArgs>(
      args?: Subset<T, PickupTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PickupTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PickupToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PickupTokenAggregateArgs>(args: Subset<T, PickupTokenAggregateArgs>): Prisma.PrismaPromise<GetPickupTokenAggregateType<T>>

    /**
     * Group by PickupToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenGroupByArgs} args - Group by arguments.
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
      T extends PickupTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PickupTokenGroupByArgs['orderBy'] }
        : { orderBy?: PickupTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PickupTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPickupTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PickupToken model
   */
  readonly fields: PickupTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PickupToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PickupTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PickupToken model
   */ 
  interface PickupTokenFieldRefs {
    readonly id: FieldRef<"PickupToken", 'String'>
    readonly orderId: FieldRef<"PickupToken", 'String'>
    readonly outletId: FieldRef<"PickupToken", 'String'>
    readonly tokenNumber: FieldRef<"PickupToken", 'String'>
    readonly status: FieldRef<"PickupToken", 'String'>
    readonly createdAt: FieldRef<"PickupToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PickupToken findUnique
   */
  export type PickupTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Filter, which PickupToken to fetch.
     */
    where: PickupTokenWhereUniqueInput
  }

  /**
   * PickupToken findUniqueOrThrow
   */
  export type PickupTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Filter, which PickupToken to fetch.
     */
    where: PickupTokenWhereUniqueInput
  }

  /**
   * PickupToken findFirst
   */
  export type PickupTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Filter, which PickupToken to fetch.
     */
    where?: PickupTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PickupTokens to fetch.
     */
    orderBy?: PickupTokenOrderByWithRelationInput | PickupTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PickupTokens.
     */
    cursor?: PickupTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PickupTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PickupTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PickupTokens.
     */
    distinct?: PickupTokenScalarFieldEnum | PickupTokenScalarFieldEnum[]
  }

  /**
   * PickupToken findFirstOrThrow
   */
  export type PickupTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Filter, which PickupToken to fetch.
     */
    where?: PickupTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PickupTokens to fetch.
     */
    orderBy?: PickupTokenOrderByWithRelationInput | PickupTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PickupTokens.
     */
    cursor?: PickupTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PickupTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PickupTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PickupTokens.
     */
    distinct?: PickupTokenScalarFieldEnum | PickupTokenScalarFieldEnum[]
  }

  /**
   * PickupToken findMany
   */
  export type PickupTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Filter, which PickupTokens to fetch.
     */
    where?: PickupTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PickupTokens to fetch.
     */
    orderBy?: PickupTokenOrderByWithRelationInput | PickupTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PickupTokens.
     */
    cursor?: PickupTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PickupTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PickupTokens.
     */
    skip?: number
    distinct?: PickupTokenScalarFieldEnum | PickupTokenScalarFieldEnum[]
  }

  /**
   * PickupToken create
   */
  export type PickupTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a PickupToken.
     */
    data: XOR<PickupTokenCreateInput, PickupTokenUncheckedCreateInput>
  }

  /**
   * PickupToken createMany
   */
  export type PickupTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PickupTokens.
     */
    data: PickupTokenCreateManyInput | PickupTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PickupToken createManyAndReturn
   */
  export type PickupTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PickupTokens.
     */
    data: PickupTokenCreateManyInput | PickupTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PickupToken update
   */
  export type PickupTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a PickupToken.
     */
    data: XOR<PickupTokenUpdateInput, PickupTokenUncheckedUpdateInput>
    /**
     * Choose, which PickupToken to update.
     */
    where: PickupTokenWhereUniqueInput
  }

  /**
   * PickupToken updateMany
   */
  export type PickupTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PickupTokens.
     */
    data: XOR<PickupTokenUpdateManyMutationInput, PickupTokenUncheckedUpdateManyInput>
    /**
     * Filter which PickupTokens to update
     */
    where?: PickupTokenWhereInput
  }

  /**
   * PickupToken upsert
   */
  export type PickupTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the PickupToken to update in case it exists.
     */
    where: PickupTokenWhereUniqueInput
    /**
     * In case the PickupToken found by the `where` argument doesn't exist, create a new PickupToken with this data.
     */
    create: XOR<PickupTokenCreateInput, PickupTokenUncheckedCreateInput>
    /**
     * In case the PickupToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PickupTokenUpdateInput, PickupTokenUncheckedUpdateInput>
  }

  /**
   * PickupToken delete
   */
  export type PickupTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Filter which PickupToken to delete.
     */
    where: PickupTokenWhereUniqueInput
  }

  /**
   * PickupToken deleteMany
   */
  export type PickupTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PickupTokens to delete
     */
    where?: PickupTokenWhereInput
  }

  /**
   * PickupToken without action
   */
  export type PickupTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
  }


  /**
   * Model DeliveryTask
   */

  export type AggregateDeliveryTask = {
    _count: DeliveryTaskCountAggregateOutputType | null
    _min: DeliveryTaskMinAggregateOutputType | null
    _max: DeliveryTaskMaxAggregateOutputType | null
  }

  export type DeliveryTaskMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    outletId: string | null
    cityCode: string | null
    deliveryAddress: string | null
    status: string | null
    assignedStaffId: string | null
    createdAt: Date | null
  }

  export type DeliveryTaskMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    outletId: string | null
    cityCode: string | null
    deliveryAddress: string | null
    status: string | null
    assignedStaffId: string | null
    createdAt: Date | null
  }

  export type DeliveryTaskCountAggregateOutputType = {
    id: number
    orderId: number
    outletId: number
    cityCode: number
    deliveryAddress: number
    status: number
    assignedStaffId: number
    createdAt: number
    _all: number
  }


  export type DeliveryTaskMinAggregateInputType = {
    id?: true
    orderId?: true
    outletId?: true
    cityCode?: true
    deliveryAddress?: true
    status?: true
    assignedStaffId?: true
    createdAt?: true
  }

  export type DeliveryTaskMaxAggregateInputType = {
    id?: true
    orderId?: true
    outletId?: true
    cityCode?: true
    deliveryAddress?: true
    status?: true
    assignedStaffId?: true
    createdAt?: true
  }

  export type DeliveryTaskCountAggregateInputType = {
    id?: true
    orderId?: true
    outletId?: true
    cityCode?: true
    deliveryAddress?: true
    status?: true
    assignedStaffId?: true
    createdAt?: true
    _all?: true
  }

  export type DeliveryTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryTask to aggregate.
     */
    where?: DeliveryTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryTasks to fetch.
     */
    orderBy?: DeliveryTaskOrderByWithRelationInput | DeliveryTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryTasks
    **/
    _count?: true | DeliveryTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryTaskMaxAggregateInputType
  }

  export type GetDeliveryTaskAggregateType<T extends DeliveryTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryTask[P]>
      : GetScalarType<T[P], AggregateDeliveryTask[P]>
  }




  export type DeliveryTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryTaskWhereInput
    orderBy?: DeliveryTaskOrderByWithAggregationInput | DeliveryTaskOrderByWithAggregationInput[]
    by: DeliveryTaskScalarFieldEnum[] | DeliveryTaskScalarFieldEnum
    having?: DeliveryTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryTaskCountAggregateInputType | true
    _min?: DeliveryTaskMinAggregateInputType
    _max?: DeliveryTaskMaxAggregateInputType
  }

  export type DeliveryTaskGroupByOutputType = {
    id: string
    orderId: string
    outletId: string
    cityCode: string
    deliveryAddress: string
    status: string
    assignedStaffId: string | null
    createdAt: Date
    _count: DeliveryTaskCountAggregateOutputType | null
    _min: DeliveryTaskMinAggregateOutputType | null
    _max: DeliveryTaskMaxAggregateOutputType | null
  }

  type GetDeliveryTaskGroupByPayload<T extends DeliveryTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryTaskGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryTaskGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    outletId?: boolean
    cityCode?: boolean
    deliveryAddress?: boolean
    status?: boolean
    assignedStaffId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["deliveryTask"]>

  export type DeliveryTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    outletId?: boolean
    cityCode?: boolean
    deliveryAddress?: boolean
    status?: boolean
    assignedStaffId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["deliveryTask"]>

  export type DeliveryTaskSelectScalar = {
    id?: boolean
    orderId?: boolean
    outletId?: boolean
    cityCode?: boolean
    deliveryAddress?: boolean
    status?: boolean
    assignedStaffId?: boolean
    createdAt?: boolean
  }


  export type $DeliveryTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryTask"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      outletId: string
      cityCode: string
      deliveryAddress: string
      status: string
      assignedStaffId: string | null
      createdAt: Date
    }, ExtArgs["result"]["deliveryTask"]>
    composites: {}
  }

  type DeliveryTaskGetPayload<S extends boolean | null | undefined | DeliveryTaskDefaultArgs> = $Result.GetResult<Prisma.$DeliveryTaskPayload, S>

  type DeliveryTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeliveryTaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeliveryTaskCountAggregateInputType | true
    }

  export interface DeliveryTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryTask'], meta: { name: 'DeliveryTask' } }
    /**
     * Find zero or one DeliveryTask that matches the filter.
     * @param {DeliveryTaskFindUniqueArgs} args - Arguments to find a DeliveryTask
     * @example
     * // Get one DeliveryTask
     * const deliveryTask = await prisma.deliveryTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryTaskFindUniqueArgs>(args: SelectSubset<T, DeliveryTaskFindUniqueArgs<ExtArgs>>): Prisma__DeliveryTaskClient<$Result.GetResult<Prisma.$DeliveryTaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DeliveryTask that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeliveryTaskFindUniqueOrThrowArgs} args - Arguments to find a DeliveryTask
     * @example
     * // Get one DeliveryTask
     * const deliveryTask = await prisma.deliveryTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryTaskClient<$Result.GetResult<Prisma.$DeliveryTaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DeliveryTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryTaskFindFirstArgs} args - Arguments to find a DeliveryTask
     * @example
     * // Get one DeliveryTask
     * const deliveryTask = await prisma.deliveryTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryTaskFindFirstArgs>(args?: SelectSubset<T, DeliveryTaskFindFirstArgs<ExtArgs>>): Prisma__DeliveryTaskClient<$Result.GetResult<Prisma.$DeliveryTaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DeliveryTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryTaskFindFirstOrThrowArgs} args - Arguments to find a DeliveryTask
     * @example
     * // Get one DeliveryTask
     * const deliveryTask = await prisma.deliveryTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryTaskClient<$Result.GetResult<Prisma.$DeliveryTaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DeliveryTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryTasks
     * const deliveryTasks = await prisma.deliveryTask.findMany()
     * 
     * // Get first 10 DeliveryTasks
     * const deliveryTasks = await prisma.deliveryTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryTaskWithIdOnly = await prisma.deliveryTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryTaskFindManyArgs>(args?: SelectSubset<T, DeliveryTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryTaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DeliveryTask.
     * @param {DeliveryTaskCreateArgs} args - Arguments to create a DeliveryTask.
     * @example
     * // Create one DeliveryTask
     * const DeliveryTask = await prisma.deliveryTask.create({
     *   data: {
     *     // ... data to create a DeliveryTask
     *   }
     * })
     * 
     */
    create<T extends DeliveryTaskCreateArgs>(args: SelectSubset<T, DeliveryTaskCreateArgs<ExtArgs>>): Prisma__DeliveryTaskClient<$Result.GetResult<Prisma.$DeliveryTaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DeliveryTasks.
     * @param {DeliveryTaskCreateManyArgs} args - Arguments to create many DeliveryTasks.
     * @example
     * // Create many DeliveryTasks
     * const deliveryTask = await prisma.deliveryTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryTaskCreateManyArgs>(args?: SelectSubset<T, DeliveryTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryTasks and returns the data saved in the database.
     * @param {DeliveryTaskCreateManyAndReturnArgs} args - Arguments to create many DeliveryTasks.
     * @example
     * // Create many DeliveryTasks
     * const deliveryTask = await prisma.deliveryTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryTasks and only return the `id`
     * const deliveryTaskWithIdOnly = await prisma.deliveryTask.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryTaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DeliveryTask.
     * @param {DeliveryTaskDeleteArgs} args - Arguments to delete one DeliveryTask.
     * @example
     * // Delete one DeliveryTask
     * const DeliveryTask = await prisma.deliveryTask.delete({
     *   where: {
     *     // ... filter to delete one DeliveryTask
     *   }
     * })
     * 
     */
    delete<T extends DeliveryTaskDeleteArgs>(args: SelectSubset<T, DeliveryTaskDeleteArgs<ExtArgs>>): Prisma__DeliveryTaskClient<$Result.GetResult<Prisma.$DeliveryTaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DeliveryTask.
     * @param {DeliveryTaskUpdateArgs} args - Arguments to update one DeliveryTask.
     * @example
     * // Update one DeliveryTask
     * const deliveryTask = await prisma.deliveryTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryTaskUpdateArgs>(args: SelectSubset<T, DeliveryTaskUpdateArgs<ExtArgs>>): Prisma__DeliveryTaskClient<$Result.GetResult<Prisma.$DeliveryTaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DeliveryTasks.
     * @param {DeliveryTaskDeleteManyArgs} args - Arguments to filter DeliveryTasks to delete.
     * @example
     * // Delete a few DeliveryTasks
     * const { count } = await prisma.deliveryTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryTaskDeleteManyArgs>(args?: SelectSubset<T, DeliveryTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryTasks
     * const deliveryTask = await prisma.deliveryTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryTaskUpdateManyArgs>(args: SelectSubset<T, DeliveryTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeliveryTask.
     * @param {DeliveryTaskUpsertArgs} args - Arguments to update or create a DeliveryTask.
     * @example
     * // Update or create a DeliveryTask
     * const deliveryTask = await prisma.deliveryTask.upsert({
     *   create: {
     *     // ... data to create a DeliveryTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryTask we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryTaskUpsertArgs>(args: SelectSubset<T, DeliveryTaskUpsertArgs<ExtArgs>>): Prisma__DeliveryTaskClient<$Result.GetResult<Prisma.$DeliveryTaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DeliveryTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryTaskCountArgs} args - Arguments to filter DeliveryTasks to count.
     * @example
     * // Count the number of DeliveryTasks
     * const count = await prisma.deliveryTask.count({
     *   where: {
     *     // ... the filter for the DeliveryTasks we want to count
     *   }
     * })
    **/
    count<T extends DeliveryTaskCountArgs>(
      args?: Subset<T, DeliveryTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeliveryTaskAggregateArgs>(args: Subset<T, DeliveryTaskAggregateArgs>): Prisma.PrismaPromise<GetDeliveryTaskAggregateType<T>>

    /**
     * Group by DeliveryTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryTaskGroupByArgs} args - Group by arguments.
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
      T extends DeliveryTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryTaskGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeliveryTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryTask model
   */
  readonly fields: DeliveryTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DeliveryTask model
   */ 
  interface DeliveryTaskFieldRefs {
    readonly id: FieldRef<"DeliveryTask", 'String'>
    readonly orderId: FieldRef<"DeliveryTask", 'String'>
    readonly outletId: FieldRef<"DeliveryTask", 'String'>
    readonly cityCode: FieldRef<"DeliveryTask", 'String'>
    readonly deliveryAddress: FieldRef<"DeliveryTask", 'String'>
    readonly status: FieldRef<"DeliveryTask", 'String'>
    readonly assignedStaffId: FieldRef<"DeliveryTask", 'String'>
    readonly createdAt: FieldRef<"DeliveryTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryTask findUnique
   */
  export type DeliveryTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryTask
     */
    select?: DeliveryTaskSelect<ExtArgs> | null
    /**
     * Filter, which DeliveryTask to fetch.
     */
    where: DeliveryTaskWhereUniqueInput
  }

  /**
   * DeliveryTask findUniqueOrThrow
   */
  export type DeliveryTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryTask
     */
    select?: DeliveryTaskSelect<ExtArgs> | null
    /**
     * Filter, which DeliveryTask to fetch.
     */
    where: DeliveryTaskWhereUniqueInput
  }

  /**
   * DeliveryTask findFirst
   */
  export type DeliveryTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryTask
     */
    select?: DeliveryTaskSelect<ExtArgs> | null
    /**
     * Filter, which DeliveryTask to fetch.
     */
    where?: DeliveryTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryTasks to fetch.
     */
    orderBy?: DeliveryTaskOrderByWithRelationInput | DeliveryTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryTasks.
     */
    cursor?: DeliveryTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryTasks.
     */
    distinct?: DeliveryTaskScalarFieldEnum | DeliveryTaskScalarFieldEnum[]
  }

  /**
   * DeliveryTask findFirstOrThrow
   */
  export type DeliveryTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryTask
     */
    select?: DeliveryTaskSelect<ExtArgs> | null
    /**
     * Filter, which DeliveryTask to fetch.
     */
    where?: DeliveryTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryTasks to fetch.
     */
    orderBy?: DeliveryTaskOrderByWithRelationInput | DeliveryTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryTasks.
     */
    cursor?: DeliveryTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryTasks.
     */
    distinct?: DeliveryTaskScalarFieldEnum | DeliveryTaskScalarFieldEnum[]
  }

  /**
   * DeliveryTask findMany
   */
  export type DeliveryTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryTask
     */
    select?: DeliveryTaskSelect<ExtArgs> | null
    /**
     * Filter, which DeliveryTasks to fetch.
     */
    where?: DeliveryTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryTasks to fetch.
     */
    orderBy?: DeliveryTaskOrderByWithRelationInput | DeliveryTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryTasks.
     */
    cursor?: DeliveryTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryTasks.
     */
    skip?: number
    distinct?: DeliveryTaskScalarFieldEnum | DeliveryTaskScalarFieldEnum[]
  }

  /**
   * DeliveryTask create
   */
  export type DeliveryTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryTask
     */
    select?: DeliveryTaskSelect<ExtArgs> | null
    /**
     * The data needed to create a DeliveryTask.
     */
    data: XOR<DeliveryTaskCreateInput, DeliveryTaskUncheckedCreateInput>
  }

  /**
   * DeliveryTask createMany
   */
  export type DeliveryTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryTasks.
     */
    data: DeliveryTaskCreateManyInput | DeliveryTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryTask createManyAndReturn
   */
  export type DeliveryTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryTask
     */
    select?: DeliveryTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DeliveryTasks.
     */
    data: DeliveryTaskCreateManyInput | DeliveryTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryTask update
   */
  export type DeliveryTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryTask
     */
    select?: DeliveryTaskSelect<ExtArgs> | null
    /**
     * The data needed to update a DeliveryTask.
     */
    data: XOR<DeliveryTaskUpdateInput, DeliveryTaskUncheckedUpdateInput>
    /**
     * Choose, which DeliveryTask to update.
     */
    where: DeliveryTaskWhereUniqueInput
  }

  /**
   * DeliveryTask updateMany
   */
  export type DeliveryTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryTasks.
     */
    data: XOR<DeliveryTaskUpdateManyMutationInput, DeliveryTaskUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryTasks to update
     */
    where?: DeliveryTaskWhereInput
  }

  /**
   * DeliveryTask upsert
   */
  export type DeliveryTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryTask
     */
    select?: DeliveryTaskSelect<ExtArgs> | null
    /**
     * The filter to search for the DeliveryTask to update in case it exists.
     */
    where: DeliveryTaskWhereUniqueInput
    /**
     * In case the DeliveryTask found by the `where` argument doesn't exist, create a new DeliveryTask with this data.
     */
    create: XOR<DeliveryTaskCreateInput, DeliveryTaskUncheckedCreateInput>
    /**
     * In case the DeliveryTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryTaskUpdateInput, DeliveryTaskUncheckedUpdateInput>
  }

  /**
   * DeliveryTask delete
   */
  export type DeliveryTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryTask
     */
    select?: DeliveryTaskSelect<ExtArgs> | null
    /**
     * Filter which DeliveryTask to delete.
     */
    where: DeliveryTaskWhereUniqueInput
  }

  /**
   * DeliveryTask deleteMany
   */
  export type DeliveryTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryTasks to delete
     */
    where?: DeliveryTaskWhereInput
  }

  /**
   * DeliveryTask without action
   */
  export type DeliveryTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryTask
     */
    select?: DeliveryTaskSelect<ExtArgs> | null
  }


  /**
   * Model OutletTokenSequence
   */

  export type AggregateOutletTokenSequence = {
    _count: OutletTokenSequenceCountAggregateOutputType | null
    _avg: OutletTokenSequenceAvgAggregateOutputType | null
    _sum: OutletTokenSequenceSumAggregateOutputType | null
    _min: OutletTokenSequenceMinAggregateOutputType | null
    _max: OutletTokenSequenceMaxAggregateOutputType | null
  }

  export type OutletTokenSequenceAvgAggregateOutputType = {
    lastSequence: number | null
  }

  export type OutletTokenSequenceSumAggregateOutputType = {
    lastSequence: number | null
  }

  export type OutletTokenSequenceMinAggregateOutputType = {
    id: string | null
    outletId: string | null
    seqDate: string | null
    lastSequence: number | null
    updatedAt: Date | null
  }

  export type OutletTokenSequenceMaxAggregateOutputType = {
    id: string | null
    outletId: string | null
    seqDate: string | null
    lastSequence: number | null
    updatedAt: Date | null
  }

  export type OutletTokenSequenceCountAggregateOutputType = {
    id: number
    outletId: number
    seqDate: number
    lastSequence: number
    updatedAt: number
    _all: number
  }


  export type OutletTokenSequenceAvgAggregateInputType = {
    lastSequence?: true
  }

  export type OutletTokenSequenceSumAggregateInputType = {
    lastSequence?: true
  }

  export type OutletTokenSequenceMinAggregateInputType = {
    id?: true
    outletId?: true
    seqDate?: true
    lastSequence?: true
    updatedAt?: true
  }

  export type OutletTokenSequenceMaxAggregateInputType = {
    id?: true
    outletId?: true
    seqDate?: true
    lastSequence?: true
    updatedAt?: true
  }

  export type OutletTokenSequenceCountAggregateInputType = {
    id?: true
    outletId?: true
    seqDate?: true
    lastSequence?: true
    updatedAt?: true
    _all?: true
  }

  export type OutletTokenSequenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutletTokenSequence to aggregate.
     */
    where?: OutletTokenSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletTokenSequences to fetch.
     */
    orderBy?: OutletTokenSequenceOrderByWithRelationInput | OutletTokenSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutletTokenSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletTokenSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletTokenSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutletTokenSequences
    **/
    _count?: true | OutletTokenSequenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutletTokenSequenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutletTokenSequenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutletTokenSequenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutletTokenSequenceMaxAggregateInputType
  }

  export type GetOutletTokenSequenceAggregateType<T extends OutletTokenSequenceAggregateArgs> = {
        [P in keyof T & keyof AggregateOutletTokenSequence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutletTokenSequence[P]>
      : GetScalarType<T[P], AggregateOutletTokenSequence[P]>
  }




  export type OutletTokenSequenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletTokenSequenceWhereInput
    orderBy?: OutletTokenSequenceOrderByWithAggregationInput | OutletTokenSequenceOrderByWithAggregationInput[]
    by: OutletTokenSequenceScalarFieldEnum[] | OutletTokenSequenceScalarFieldEnum
    having?: OutletTokenSequenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutletTokenSequenceCountAggregateInputType | true
    _avg?: OutletTokenSequenceAvgAggregateInputType
    _sum?: OutletTokenSequenceSumAggregateInputType
    _min?: OutletTokenSequenceMinAggregateInputType
    _max?: OutletTokenSequenceMaxAggregateInputType
  }

  export type OutletTokenSequenceGroupByOutputType = {
    id: string
    outletId: string
    seqDate: string
    lastSequence: number
    updatedAt: Date
    _count: OutletTokenSequenceCountAggregateOutputType | null
    _avg: OutletTokenSequenceAvgAggregateOutputType | null
    _sum: OutletTokenSequenceSumAggregateOutputType | null
    _min: OutletTokenSequenceMinAggregateOutputType | null
    _max: OutletTokenSequenceMaxAggregateOutputType | null
  }

  type GetOutletTokenSequenceGroupByPayload<T extends OutletTokenSequenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutletTokenSequenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutletTokenSequenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutletTokenSequenceGroupByOutputType[P]>
            : GetScalarType<T[P], OutletTokenSequenceGroupByOutputType[P]>
        }
      >
    >


  export type OutletTokenSequenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    seqDate?: boolean
    lastSequence?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["outletTokenSequence"]>

  export type OutletTokenSequenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    seqDate?: boolean
    lastSequence?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["outletTokenSequence"]>

  export type OutletTokenSequenceSelectScalar = {
    id?: boolean
    outletId?: boolean
    seqDate?: boolean
    lastSequence?: boolean
    updatedAt?: boolean
  }


  export type $OutletTokenSequencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutletTokenSequence"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      outletId: string
      seqDate: string
      lastSequence: number
      updatedAt: Date
    }, ExtArgs["result"]["outletTokenSequence"]>
    composites: {}
  }

  type OutletTokenSequenceGetPayload<S extends boolean | null | undefined | OutletTokenSequenceDefaultArgs> = $Result.GetResult<Prisma.$OutletTokenSequencePayload, S>

  type OutletTokenSequenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OutletTokenSequenceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OutletTokenSequenceCountAggregateInputType | true
    }

  export interface OutletTokenSequenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutletTokenSequence'], meta: { name: 'OutletTokenSequence' } }
    /**
     * Find zero or one OutletTokenSequence that matches the filter.
     * @param {OutletTokenSequenceFindUniqueArgs} args - Arguments to find a OutletTokenSequence
     * @example
     * // Get one OutletTokenSequence
     * const outletTokenSequence = await prisma.outletTokenSequence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutletTokenSequenceFindUniqueArgs>(args: SelectSubset<T, OutletTokenSequenceFindUniqueArgs<ExtArgs>>): Prisma__OutletTokenSequenceClient<$Result.GetResult<Prisma.$OutletTokenSequencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OutletTokenSequence that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OutletTokenSequenceFindUniqueOrThrowArgs} args - Arguments to find a OutletTokenSequence
     * @example
     * // Get one OutletTokenSequence
     * const outletTokenSequence = await prisma.outletTokenSequence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutletTokenSequenceFindUniqueOrThrowArgs>(args: SelectSubset<T, OutletTokenSequenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutletTokenSequenceClient<$Result.GetResult<Prisma.$OutletTokenSequencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OutletTokenSequence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletTokenSequenceFindFirstArgs} args - Arguments to find a OutletTokenSequence
     * @example
     * // Get one OutletTokenSequence
     * const outletTokenSequence = await prisma.outletTokenSequence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutletTokenSequenceFindFirstArgs>(args?: SelectSubset<T, OutletTokenSequenceFindFirstArgs<ExtArgs>>): Prisma__OutletTokenSequenceClient<$Result.GetResult<Prisma.$OutletTokenSequencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OutletTokenSequence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletTokenSequenceFindFirstOrThrowArgs} args - Arguments to find a OutletTokenSequence
     * @example
     * // Get one OutletTokenSequence
     * const outletTokenSequence = await prisma.outletTokenSequence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutletTokenSequenceFindFirstOrThrowArgs>(args?: SelectSubset<T, OutletTokenSequenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutletTokenSequenceClient<$Result.GetResult<Prisma.$OutletTokenSequencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OutletTokenSequences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletTokenSequenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutletTokenSequences
     * const outletTokenSequences = await prisma.outletTokenSequence.findMany()
     * 
     * // Get first 10 OutletTokenSequences
     * const outletTokenSequences = await prisma.outletTokenSequence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outletTokenSequenceWithIdOnly = await prisma.outletTokenSequence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutletTokenSequenceFindManyArgs>(args?: SelectSubset<T, OutletTokenSequenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletTokenSequencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OutletTokenSequence.
     * @param {OutletTokenSequenceCreateArgs} args - Arguments to create a OutletTokenSequence.
     * @example
     * // Create one OutletTokenSequence
     * const OutletTokenSequence = await prisma.outletTokenSequence.create({
     *   data: {
     *     // ... data to create a OutletTokenSequence
     *   }
     * })
     * 
     */
    create<T extends OutletTokenSequenceCreateArgs>(args: SelectSubset<T, OutletTokenSequenceCreateArgs<ExtArgs>>): Prisma__OutletTokenSequenceClient<$Result.GetResult<Prisma.$OutletTokenSequencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OutletTokenSequences.
     * @param {OutletTokenSequenceCreateManyArgs} args - Arguments to create many OutletTokenSequences.
     * @example
     * // Create many OutletTokenSequences
     * const outletTokenSequence = await prisma.outletTokenSequence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutletTokenSequenceCreateManyArgs>(args?: SelectSubset<T, OutletTokenSequenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutletTokenSequences and returns the data saved in the database.
     * @param {OutletTokenSequenceCreateManyAndReturnArgs} args - Arguments to create many OutletTokenSequences.
     * @example
     * // Create many OutletTokenSequences
     * const outletTokenSequence = await prisma.outletTokenSequence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutletTokenSequences and only return the `id`
     * const outletTokenSequenceWithIdOnly = await prisma.outletTokenSequence.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutletTokenSequenceCreateManyAndReturnArgs>(args?: SelectSubset<T, OutletTokenSequenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletTokenSequencePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OutletTokenSequence.
     * @param {OutletTokenSequenceDeleteArgs} args - Arguments to delete one OutletTokenSequence.
     * @example
     * // Delete one OutletTokenSequence
     * const OutletTokenSequence = await prisma.outletTokenSequence.delete({
     *   where: {
     *     // ... filter to delete one OutletTokenSequence
     *   }
     * })
     * 
     */
    delete<T extends OutletTokenSequenceDeleteArgs>(args: SelectSubset<T, OutletTokenSequenceDeleteArgs<ExtArgs>>): Prisma__OutletTokenSequenceClient<$Result.GetResult<Prisma.$OutletTokenSequencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OutletTokenSequence.
     * @param {OutletTokenSequenceUpdateArgs} args - Arguments to update one OutletTokenSequence.
     * @example
     * // Update one OutletTokenSequence
     * const outletTokenSequence = await prisma.outletTokenSequence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutletTokenSequenceUpdateArgs>(args: SelectSubset<T, OutletTokenSequenceUpdateArgs<ExtArgs>>): Prisma__OutletTokenSequenceClient<$Result.GetResult<Prisma.$OutletTokenSequencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OutletTokenSequences.
     * @param {OutletTokenSequenceDeleteManyArgs} args - Arguments to filter OutletTokenSequences to delete.
     * @example
     * // Delete a few OutletTokenSequences
     * const { count } = await prisma.outletTokenSequence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutletTokenSequenceDeleteManyArgs>(args?: SelectSubset<T, OutletTokenSequenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutletTokenSequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletTokenSequenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutletTokenSequences
     * const outletTokenSequence = await prisma.outletTokenSequence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutletTokenSequenceUpdateManyArgs>(args: SelectSubset<T, OutletTokenSequenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OutletTokenSequence.
     * @param {OutletTokenSequenceUpsertArgs} args - Arguments to update or create a OutletTokenSequence.
     * @example
     * // Update or create a OutletTokenSequence
     * const outletTokenSequence = await prisma.outletTokenSequence.upsert({
     *   create: {
     *     // ... data to create a OutletTokenSequence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutletTokenSequence we want to update
     *   }
     * })
     */
    upsert<T extends OutletTokenSequenceUpsertArgs>(args: SelectSubset<T, OutletTokenSequenceUpsertArgs<ExtArgs>>): Prisma__OutletTokenSequenceClient<$Result.GetResult<Prisma.$OutletTokenSequencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OutletTokenSequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletTokenSequenceCountArgs} args - Arguments to filter OutletTokenSequences to count.
     * @example
     * // Count the number of OutletTokenSequences
     * const count = await prisma.outletTokenSequence.count({
     *   where: {
     *     // ... the filter for the OutletTokenSequences we want to count
     *   }
     * })
    **/
    count<T extends OutletTokenSequenceCountArgs>(
      args?: Subset<T, OutletTokenSequenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutletTokenSequenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutletTokenSequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletTokenSequenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutletTokenSequenceAggregateArgs>(args: Subset<T, OutletTokenSequenceAggregateArgs>): Prisma.PrismaPromise<GetOutletTokenSequenceAggregateType<T>>

    /**
     * Group by OutletTokenSequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletTokenSequenceGroupByArgs} args - Group by arguments.
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
      T extends OutletTokenSequenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutletTokenSequenceGroupByArgs['orderBy'] }
        : { orderBy?: OutletTokenSequenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutletTokenSequenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutletTokenSequenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutletTokenSequence model
   */
  readonly fields: OutletTokenSequenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutletTokenSequence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutletTokenSequenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OutletTokenSequence model
   */ 
  interface OutletTokenSequenceFieldRefs {
    readonly id: FieldRef<"OutletTokenSequence", 'String'>
    readonly outletId: FieldRef<"OutletTokenSequence", 'String'>
    readonly seqDate: FieldRef<"OutletTokenSequence", 'String'>
    readonly lastSequence: FieldRef<"OutletTokenSequence", 'Int'>
    readonly updatedAt: FieldRef<"OutletTokenSequence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OutletTokenSequence findUnique
   */
  export type OutletTokenSequenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletTokenSequence
     */
    select?: OutletTokenSequenceSelect<ExtArgs> | null
    /**
     * Filter, which OutletTokenSequence to fetch.
     */
    where: OutletTokenSequenceWhereUniqueInput
  }

  /**
   * OutletTokenSequence findUniqueOrThrow
   */
  export type OutletTokenSequenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletTokenSequence
     */
    select?: OutletTokenSequenceSelect<ExtArgs> | null
    /**
     * Filter, which OutletTokenSequence to fetch.
     */
    where: OutletTokenSequenceWhereUniqueInput
  }

  /**
   * OutletTokenSequence findFirst
   */
  export type OutletTokenSequenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletTokenSequence
     */
    select?: OutletTokenSequenceSelect<ExtArgs> | null
    /**
     * Filter, which OutletTokenSequence to fetch.
     */
    where?: OutletTokenSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletTokenSequences to fetch.
     */
    orderBy?: OutletTokenSequenceOrderByWithRelationInput | OutletTokenSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutletTokenSequences.
     */
    cursor?: OutletTokenSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletTokenSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletTokenSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutletTokenSequences.
     */
    distinct?: OutletTokenSequenceScalarFieldEnum | OutletTokenSequenceScalarFieldEnum[]
  }

  /**
   * OutletTokenSequence findFirstOrThrow
   */
  export type OutletTokenSequenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletTokenSequence
     */
    select?: OutletTokenSequenceSelect<ExtArgs> | null
    /**
     * Filter, which OutletTokenSequence to fetch.
     */
    where?: OutletTokenSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletTokenSequences to fetch.
     */
    orderBy?: OutletTokenSequenceOrderByWithRelationInput | OutletTokenSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutletTokenSequences.
     */
    cursor?: OutletTokenSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletTokenSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletTokenSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutletTokenSequences.
     */
    distinct?: OutletTokenSequenceScalarFieldEnum | OutletTokenSequenceScalarFieldEnum[]
  }

  /**
   * OutletTokenSequence findMany
   */
  export type OutletTokenSequenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletTokenSequence
     */
    select?: OutletTokenSequenceSelect<ExtArgs> | null
    /**
     * Filter, which OutletTokenSequences to fetch.
     */
    where?: OutletTokenSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletTokenSequences to fetch.
     */
    orderBy?: OutletTokenSequenceOrderByWithRelationInput | OutletTokenSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutletTokenSequences.
     */
    cursor?: OutletTokenSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletTokenSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletTokenSequences.
     */
    skip?: number
    distinct?: OutletTokenSequenceScalarFieldEnum | OutletTokenSequenceScalarFieldEnum[]
  }

  /**
   * OutletTokenSequence create
   */
  export type OutletTokenSequenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletTokenSequence
     */
    select?: OutletTokenSequenceSelect<ExtArgs> | null
    /**
     * The data needed to create a OutletTokenSequence.
     */
    data: XOR<OutletTokenSequenceCreateInput, OutletTokenSequenceUncheckedCreateInput>
  }

  /**
   * OutletTokenSequence createMany
   */
  export type OutletTokenSequenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutletTokenSequences.
     */
    data: OutletTokenSequenceCreateManyInput | OutletTokenSequenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutletTokenSequence createManyAndReturn
   */
  export type OutletTokenSequenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletTokenSequence
     */
    select?: OutletTokenSequenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OutletTokenSequences.
     */
    data: OutletTokenSequenceCreateManyInput | OutletTokenSequenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutletTokenSequence update
   */
  export type OutletTokenSequenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletTokenSequence
     */
    select?: OutletTokenSequenceSelect<ExtArgs> | null
    /**
     * The data needed to update a OutletTokenSequence.
     */
    data: XOR<OutletTokenSequenceUpdateInput, OutletTokenSequenceUncheckedUpdateInput>
    /**
     * Choose, which OutletTokenSequence to update.
     */
    where: OutletTokenSequenceWhereUniqueInput
  }

  /**
   * OutletTokenSequence updateMany
   */
  export type OutletTokenSequenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutletTokenSequences.
     */
    data: XOR<OutletTokenSequenceUpdateManyMutationInput, OutletTokenSequenceUncheckedUpdateManyInput>
    /**
     * Filter which OutletTokenSequences to update
     */
    where?: OutletTokenSequenceWhereInput
  }

  /**
   * OutletTokenSequence upsert
   */
  export type OutletTokenSequenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletTokenSequence
     */
    select?: OutletTokenSequenceSelect<ExtArgs> | null
    /**
     * The filter to search for the OutletTokenSequence to update in case it exists.
     */
    where: OutletTokenSequenceWhereUniqueInput
    /**
     * In case the OutletTokenSequence found by the `where` argument doesn't exist, create a new OutletTokenSequence with this data.
     */
    create: XOR<OutletTokenSequenceCreateInput, OutletTokenSequenceUncheckedCreateInput>
    /**
     * In case the OutletTokenSequence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutletTokenSequenceUpdateInput, OutletTokenSequenceUncheckedUpdateInput>
  }

  /**
   * OutletTokenSequence delete
   */
  export type OutletTokenSequenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletTokenSequence
     */
    select?: OutletTokenSequenceSelect<ExtArgs> | null
    /**
     * Filter which OutletTokenSequence to delete.
     */
    where: OutletTokenSequenceWhereUniqueInput
  }

  /**
   * OutletTokenSequence deleteMany
   */
  export type OutletTokenSequenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutletTokenSequences to delete
     */
    where?: OutletTokenSequenceWhereInput
  }

  /**
   * OutletTokenSequence without action
   */
  export type OutletTokenSequenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletTokenSequence
     */
    select?: OutletTokenSequenceSelect<ExtArgs> | null
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


  export const CapacitySlotScalarFieldEnum: {
    id: 'id',
    outletId: 'outletId',
    slotDate: 'slotDate',
    startTime: 'startTime',
    endTime: 'endTime',
    maxCapacity: 'maxCapacity',
    reservedCount: 'reservedCount',
    version: 'version',
    isWalkIn: 'isWalkIn'
  };

  export type CapacitySlotScalarFieldEnum = (typeof CapacitySlotScalarFieldEnum)[keyof typeof CapacitySlotScalarFieldEnum]


  export const SlotReservationScalarFieldEnum: {
    id: 'id',
    slotId: 'slotId',
    orderId: 'orderId',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SlotReservationScalarFieldEnum = (typeof SlotReservationScalarFieldEnum)[keyof typeof SlotReservationScalarFieldEnum]


  export const QueueSnapshotScalarFieldEnum: {
    id: 'id',
    outletId: 'outletId',
    activeOrdersCount: 'activeOrdersCount',
    waitMinutes: 'waitMinutes',
    observedAt: 'observedAt'
  };

  export type QueueSnapshotScalarFieldEnum = (typeof QueueSnapshotScalarFieldEnum)[keyof typeof QueueSnapshotScalarFieldEnum]


  export const PickupTokenScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    outletId: 'outletId',
    tokenNumber: 'tokenNumber',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PickupTokenScalarFieldEnum = (typeof PickupTokenScalarFieldEnum)[keyof typeof PickupTokenScalarFieldEnum]


  export const DeliveryTaskScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    outletId: 'outletId',
    cityCode: 'cityCode',
    deliveryAddress: 'deliveryAddress',
    status: 'status',
    assignedStaffId: 'assignedStaffId',
    createdAt: 'createdAt'
  };

  export type DeliveryTaskScalarFieldEnum = (typeof DeliveryTaskScalarFieldEnum)[keyof typeof DeliveryTaskScalarFieldEnum]


  export const OutletTokenSequenceScalarFieldEnum: {
    id: 'id',
    outletId: 'outletId',
    seqDate: 'seqDate',
    lastSequence: 'lastSequence',
    updatedAt: 'updatedAt'
  };

  export type OutletTokenSequenceScalarFieldEnum = (typeof OutletTokenSequenceScalarFieldEnum)[keyof typeof OutletTokenSequenceScalarFieldEnum]


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
   * Deep Input Types
   */


  export type CapacitySlotWhereInput = {
    AND?: CapacitySlotWhereInput | CapacitySlotWhereInput[]
    OR?: CapacitySlotWhereInput[]
    NOT?: CapacitySlotWhereInput | CapacitySlotWhereInput[]
    id?: StringFilter<"CapacitySlot"> | string
    outletId?: StringFilter<"CapacitySlot"> | string
    slotDate?: StringFilter<"CapacitySlot"> | string
    startTime?: StringFilter<"CapacitySlot"> | string
    endTime?: StringFilter<"CapacitySlot"> | string
    maxCapacity?: IntFilter<"CapacitySlot"> | number
    reservedCount?: IntFilter<"CapacitySlot"> | number
    version?: IntFilter<"CapacitySlot"> | number
    isWalkIn?: BoolFilter<"CapacitySlot"> | boolean
    reservations?: SlotReservationListRelationFilter
  }

  export type CapacitySlotOrderByWithRelationInput = {
    id?: SortOrder
    outletId?: SortOrder
    slotDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    maxCapacity?: SortOrder
    reservedCount?: SortOrder
    version?: SortOrder
    isWalkIn?: SortOrder
    reservations?: SlotReservationOrderByRelationAggregateInput
  }

  export type CapacitySlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    outletId_slotDate_startTime?: CapacitySlotOutletIdSlotDateStartTimeCompoundUniqueInput
    AND?: CapacitySlotWhereInput | CapacitySlotWhereInput[]
    OR?: CapacitySlotWhereInput[]
    NOT?: CapacitySlotWhereInput | CapacitySlotWhereInput[]
    outletId?: StringFilter<"CapacitySlot"> | string
    slotDate?: StringFilter<"CapacitySlot"> | string
    startTime?: StringFilter<"CapacitySlot"> | string
    endTime?: StringFilter<"CapacitySlot"> | string
    maxCapacity?: IntFilter<"CapacitySlot"> | number
    reservedCount?: IntFilter<"CapacitySlot"> | number
    version?: IntFilter<"CapacitySlot"> | number
    isWalkIn?: BoolFilter<"CapacitySlot"> | boolean
    reservations?: SlotReservationListRelationFilter
  }, "id" | "outletId_slotDate_startTime">

  export type CapacitySlotOrderByWithAggregationInput = {
    id?: SortOrder
    outletId?: SortOrder
    slotDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    maxCapacity?: SortOrder
    reservedCount?: SortOrder
    version?: SortOrder
    isWalkIn?: SortOrder
    _count?: CapacitySlotCountOrderByAggregateInput
    _avg?: CapacitySlotAvgOrderByAggregateInput
    _max?: CapacitySlotMaxOrderByAggregateInput
    _min?: CapacitySlotMinOrderByAggregateInput
    _sum?: CapacitySlotSumOrderByAggregateInput
  }

  export type CapacitySlotScalarWhereWithAggregatesInput = {
    AND?: CapacitySlotScalarWhereWithAggregatesInput | CapacitySlotScalarWhereWithAggregatesInput[]
    OR?: CapacitySlotScalarWhereWithAggregatesInput[]
    NOT?: CapacitySlotScalarWhereWithAggregatesInput | CapacitySlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CapacitySlot"> | string
    outletId?: StringWithAggregatesFilter<"CapacitySlot"> | string
    slotDate?: StringWithAggregatesFilter<"CapacitySlot"> | string
    startTime?: StringWithAggregatesFilter<"CapacitySlot"> | string
    endTime?: StringWithAggregatesFilter<"CapacitySlot"> | string
    maxCapacity?: IntWithAggregatesFilter<"CapacitySlot"> | number
    reservedCount?: IntWithAggregatesFilter<"CapacitySlot"> | number
    version?: IntWithAggregatesFilter<"CapacitySlot"> | number
    isWalkIn?: BoolWithAggregatesFilter<"CapacitySlot"> | boolean
  }

  export type SlotReservationWhereInput = {
    AND?: SlotReservationWhereInput | SlotReservationWhereInput[]
    OR?: SlotReservationWhereInput[]
    NOT?: SlotReservationWhereInput | SlotReservationWhereInput[]
    id?: StringFilter<"SlotReservation"> | string
    slotId?: StringFilter<"SlotReservation"> | string
    orderId?: StringFilter<"SlotReservation"> | string
    status?: StringFilter<"SlotReservation"> | string
    expiresAt?: DateTimeFilter<"SlotReservation"> | Date | string
    createdAt?: DateTimeFilter<"SlotReservation"> | Date | string
    slot?: XOR<CapacitySlotRelationFilter, CapacitySlotWhereInput>
  }

  export type SlotReservationOrderByWithRelationInput = {
    id?: SortOrder
    slotId?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    slot?: CapacitySlotOrderByWithRelationInput
  }

  export type SlotReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: SlotReservationWhereInput | SlotReservationWhereInput[]
    OR?: SlotReservationWhereInput[]
    NOT?: SlotReservationWhereInput | SlotReservationWhereInput[]
    slotId?: StringFilter<"SlotReservation"> | string
    status?: StringFilter<"SlotReservation"> | string
    expiresAt?: DateTimeFilter<"SlotReservation"> | Date | string
    createdAt?: DateTimeFilter<"SlotReservation"> | Date | string
    slot?: XOR<CapacitySlotRelationFilter, CapacitySlotWhereInput>
  }, "id" | "orderId">

  export type SlotReservationOrderByWithAggregationInput = {
    id?: SortOrder
    slotId?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SlotReservationCountOrderByAggregateInput
    _max?: SlotReservationMaxOrderByAggregateInput
    _min?: SlotReservationMinOrderByAggregateInput
  }

  export type SlotReservationScalarWhereWithAggregatesInput = {
    AND?: SlotReservationScalarWhereWithAggregatesInput | SlotReservationScalarWhereWithAggregatesInput[]
    OR?: SlotReservationScalarWhereWithAggregatesInput[]
    NOT?: SlotReservationScalarWhereWithAggregatesInput | SlotReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SlotReservation"> | string
    slotId?: StringWithAggregatesFilter<"SlotReservation"> | string
    orderId?: StringWithAggregatesFilter<"SlotReservation"> | string
    status?: StringWithAggregatesFilter<"SlotReservation"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"SlotReservation"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SlotReservation"> | Date | string
  }

  export type QueueSnapshotWhereInput = {
    AND?: QueueSnapshotWhereInput | QueueSnapshotWhereInput[]
    OR?: QueueSnapshotWhereInput[]
    NOT?: QueueSnapshotWhereInput | QueueSnapshotWhereInput[]
    id?: StringFilter<"QueueSnapshot"> | string
    outletId?: StringFilter<"QueueSnapshot"> | string
    activeOrdersCount?: IntFilter<"QueueSnapshot"> | number
    waitMinutes?: IntFilter<"QueueSnapshot"> | number
    observedAt?: DateTimeFilter<"QueueSnapshot"> | Date | string
  }

  export type QueueSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    outletId?: SortOrder
    activeOrdersCount?: SortOrder
    waitMinutes?: SortOrder
    observedAt?: SortOrder
  }

  export type QueueSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QueueSnapshotWhereInput | QueueSnapshotWhereInput[]
    OR?: QueueSnapshotWhereInput[]
    NOT?: QueueSnapshotWhereInput | QueueSnapshotWhereInput[]
    outletId?: StringFilter<"QueueSnapshot"> | string
    activeOrdersCount?: IntFilter<"QueueSnapshot"> | number
    waitMinutes?: IntFilter<"QueueSnapshot"> | number
    observedAt?: DateTimeFilter<"QueueSnapshot"> | Date | string
  }, "id">

  export type QueueSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    outletId?: SortOrder
    activeOrdersCount?: SortOrder
    waitMinutes?: SortOrder
    observedAt?: SortOrder
    _count?: QueueSnapshotCountOrderByAggregateInput
    _avg?: QueueSnapshotAvgOrderByAggregateInput
    _max?: QueueSnapshotMaxOrderByAggregateInput
    _min?: QueueSnapshotMinOrderByAggregateInput
    _sum?: QueueSnapshotSumOrderByAggregateInput
  }

  export type QueueSnapshotScalarWhereWithAggregatesInput = {
    AND?: QueueSnapshotScalarWhereWithAggregatesInput | QueueSnapshotScalarWhereWithAggregatesInput[]
    OR?: QueueSnapshotScalarWhereWithAggregatesInput[]
    NOT?: QueueSnapshotScalarWhereWithAggregatesInput | QueueSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QueueSnapshot"> | string
    outletId?: StringWithAggregatesFilter<"QueueSnapshot"> | string
    activeOrdersCount?: IntWithAggregatesFilter<"QueueSnapshot"> | number
    waitMinutes?: IntWithAggregatesFilter<"QueueSnapshot"> | number
    observedAt?: DateTimeWithAggregatesFilter<"QueueSnapshot"> | Date | string
  }

  export type PickupTokenWhereInput = {
    AND?: PickupTokenWhereInput | PickupTokenWhereInput[]
    OR?: PickupTokenWhereInput[]
    NOT?: PickupTokenWhereInput | PickupTokenWhereInput[]
    id?: StringFilter<"PickupToken"> | string
    orderId?: StringFilter<"PickupToken"> | string
    outletId?: StringFilter<"PickupToken"> | string
    tokenNumber?: StringFilter<"PickupToken"> | string
    status?: StringFilter<"PickupToken"> | string
    createdAt?: DateTimeFilter<"PickupToken"> | Date | string
  }

  export type PickupTokenOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    outletId?: SortOrder
    tokenNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PickupTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: PickupTokenWhereInput | PickupTokenWhereInput[]
    OR?: PickupTokenWhereInput[]
    NOT?: PickupTokenWhereInput | PickupTokenWhereInput[]
    outletId?: StringFilter<"PickupToken"> | string
    tokenNumber?: StringFilter<"PickupToken"> | string
    status?: StringFilter<"PickupToken"> | string
    createdAt?: DateTimeFilter<"PickupToken"> | Date | string
  }, "id" | "orderId">

  export type PickupTokenOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    outletId?: SortOrder
    tokenNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PickupTokenCountOrderByAggregateInput
    _max?: PickupTokenMaxOrderByAggregateInput
    _min?: PickupTokenMinOrderByAggregateInput
  }

  export type PickupTokenScalarWhereWithAggregatesInput = {
    AND?: PickupTokenScalarWhereWithAggregatesInput | PickupTokenScalarWhereWithAggregatesInput[]
    OR?: PickupTokenScalarWhereWithAggregatesInput[]
    NOT?: PickupTokenScalarWhereWithAggregatesInput | PickupTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PickupToken"> | string
    orderId?: StringWithAggregatesFilter<"PickupToken"> | string
    outletId?: StringWithAggregatesFilter<"PickupToken"> | string
    tokenNumber?: StringWithAggregatesFilter<"PickupToken"> | string
    status?: StringWithAggregatesFilter<"PickupToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PickupToken"> | Date | string
  }

  export type DeliveryTaskWhereInput = {
    AND?: DeliveryTaskWhereInput | DeliveryTaskWhereInput[]
    OR?: DeliveryTaskWhereInput[]
    NOT?: DeliveryTaskWhereInput | DeliveryTaskWhereInput[]
    id?: StringFilter<"DeliveryTask"> | string
    orderId?: StringFilter<"DeliveryTask"> | string
    outletId?: StringFilter<"DeliveryTask"> | string
    cityCode?: StringFilter<"DeliveryTask"> | string
    deliveryAddress?: StringFilter<"DeliveryTask"> | string
    status?: StringFilter<"DeliveryTask"> | string
    assignedStaffId?: StringNullableFilter<"DeliveryTask"> | string | null
    createdAt?: DateTimeFilter<"DeliveryTask"> | Date | string
  }

  export type DeliveryTaskOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    outletId?: SortOrder
    cityCode?: SortOrder
    deliveryAddress?: SortOrder
    status?: SortOrder
    assignedStaffId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type DeliveryTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: DeliveryTaskWhereInput | DeliveryTaskWhereInput[]
    OR?: DeliveryTaskWhereInput[]
    NOT?: DeliveryTaskWhereInput | DeliveryTaskWhereInput[]
    outletId?: StringFilter<"DeliveryTask"> | string
    cityCode?: StringFilter<"DeliveryTask"> | string
    deliveryAddress?: StringFilter<"DeliveryTask"> | string
    status?: StringFilter<"DeliveryTask"> | string
    assignedStaffId?: StringNullableFilter<"DeliveryTask"> | string | null
    createdAt?: DateTimeFilter<"DeliveryTask"> | Date | string
  }, "id" | "orderId">

  export type DeliveryTaskOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    outletId?: SortOrder
    cityCode?: SortOrder
    deliveryAddress?: SortOrder
    status?: SortOrder
    assignedStaffId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DeliveryTaskCountOrderByAggregateInput
    _max?: DeliveryTaskMaxOrderByAggregateInput
    _min?: DeliveryTaskMinOrderByAggregateInput
  }

  export type DeliveryTaskScalarWhereWithAggregatesInput = {
    AND?: DeliveryTaskScalarWhereWithAggregatesInput | DeliveryTaskScalarWhereWithAggregatesInput[]
    OR?: DeliveryTaskScalarWhereWithAggregatesInput[]
    NOT?: DeliveryTaskScalarWhereWithAggregatesInput | DeliveryTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeliveryTask"> | string
    orderId?: StringWithAggregatesFilter<"DeliveryTask"> | string
    outletId?: StringWithAggregatesFilter<"DeliveryTask"> | string
    cityCode?: StringWithAggregatesFilter<"DeliveryTask"> | string
    deliveryAddress?: StringWithAggregatesFilter<"DeliveryTask"> | string
    status?: StringWithAggregatesFilter<"DeliveryTask"> | string
    assignedStaffId?: StringNullableWithAggregatesFilter<"DeliveryTask"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DeliveryTask"> | Date | string
  }

  export type OutletTokenSequenceWhereInput = {
    AND?: OutletTokenSequenceWhereInput | OutletTokenSequenceWhereInput[]
    OR?: OutletTokenSequenceWhereInput[]
    NOT?: OutletTokenSequenceWhereInput | OutletTokenSequenceWhereInput[]
    id?: StringFilter<"OutletTokenSequence"> | string
    outletId?: StringFilter<"OutletTokenSequence"> | string
    seqDate?: StringFilter<"OutletTokenSequence"> | string
    lastSequence?: IntFilter<"OutletTokenSequence"> | number
    updatedAt?: DateTimeFilter<"OutletTokenSequence"> | Date | string
  }

  export type OutletTokenSequenceOrderByWithRelationInput = {
    id?: SortOrder
    outletId?: SortOrder
    seqDate?: SortOrder
    lastSequence?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutletTokenSequenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    outletId_seqDate?: OutletTokenSequenceOutletIdSeqDateCompoundUniqueInput
    AND?: OutletTokenSequenceWhereInput | OutletTokenSequenceWhereInput[]
    OR?: OutletTokenSequenceWhereInput[]
    NOT?: OutletTokenSequenceWhereInput | OutletTokenSequenceWhereInput[]
    outletId?: StringFilter<"OutletTokenSequence"> | string
    seqDate?: StringFilter<"OutletTokenSequence"> | string
    lastSequence?: IntFilter<"OutletTokenSequence"> | number
    updatedAt?: DateTimeFilter<"OutletTokenSequence"> | Date | string
  }, "id" | "outletId_seqDate">

  export type OutletTokenSequenceOrderByWithAggregationInput = {
    id?: SortOrder
    outletId?: SortOrder
    seqDate?: SortOrder
    lastSequence?: SortOrder
    updatedAt?: SortOrder
    _count?: OutletTokenSequenceCountOrderByAggregateInput
    _avg?: OutletTokenSequenceAvgOrderByAggregateInput
    _max?: OutletTokenSequenceMaxOrderByAggregateInput
    _min?: OutletTokenSequenceMinOrderByAggregateInput
    _sum?: OutletTokenSequenceSumOrderByAggregateInput
  }

  export type OutletTokenSequenceScalarWhereWithAggregatesInput = {
    AND?: OutletTokenSequenceScalarWhereWithAggregatesInput | OutletTokenSequenceScalarWhereWithAggregatesInput[]
    OR?: OutletTokenSequenceScalarWhereWithAggregatesInput[]
    NOT?: OutletTokenSequenceScalarWhereWithAggregatesInput | OutletTokenSequenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutletTokenSequence"> | string
    outletId?: StringWithAggregatesFilter<"OutletTokenSequence"> | string
    seqDate?: StringWithAggregatesFilter<"OutletTokenSequence"> | string
    lastSequence?: IntWithAggregatesFilter<"OutletTokenSequence"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"OutletTokenSequence"> | Date | string
  }

  export type CapacitySlotCreateInput = {
    id?: string
    outletId: string
    slotDate: string
    startTime: string
    endTime: string
    maxCapacity?: number
    reservedCount?: number
    version?: number
    isWalkIn?: boolean
    reservations?: SlotReservationCreateNestedManyWithoutSlotInput
  }

  export type CapacitySlotUncheckedCreateInput = {
    id?: string
    outletId: string
    slotDate: string
    startTime: string
    endTime: string
    maxCapacity?: number
    reservedCount?: number
    version?: number
    isWalkIn?: boolean
    reservations?: SlotReservationUncheckedCreateNestedManyWithoutSlotInput
  }

  export type CapacitySlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    slotDate?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    reservedCount?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isWalkIn?: BoolFieldUpdateOperationsInput | boolean
    reservations?: SlotReservationUpdateManyWithoutSlotNestedInput
  }

  export type CapacitySlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    slotDate?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    reservedCount?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isWalkIn?: BoolFieldUpdateOperationsInput | boolean
    reservations?: SlotReservationUncheckedUpdateManyWithoutSlotNestedInput
  }

  export type CapacitySlotCreateManyInput = {
    id?: string
    outletId: string
    slotDate: string
    startTime: string
    endTime: string
    maxCapacity?: number
    reservedCount?: number
    version?: number
    isWalkIn?: boolean
  }

  export type CapacitySlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    slotDate?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    reservedCount?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isWalkIn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CapacitySlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    slotDate?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    reservedCount?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isWalkIn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SlotReservationCreateInput = {
    id?: string
    orderId: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    slot: CapacitySlotCreateNestedOneWithoutReservationsInput
  }

  export type SlotReservationUncheckedCreateInput = {
    id?: string
    slotId: string
    orderId: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SlotReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: CapacitySlotUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type SlotReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotReservationCreateManyInput = {
    id?: string
    slotId: string
    orderId: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SlotReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueueSnapshotCreateInput = {
    id?: string
    outletId: string
    activeOrdersCount: number
    waitMinutes: number
    observedAt?: Date | string
  }

  export type QueueSnapshotUncheckedCreateInput = {
    id?: string
    outletId: string
    activeOrdersCount: number
    waitMinutes: number
    observedAt?: Date | string
  }

  export type QueueSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    activeOrdersCount?: IntFieldUpdateOperationsInput | number
    waitMinutes?: IntFieldUpdateOperationsInput | number
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueueSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    activeOrdersCount?: IntFieldUpdateOperationsInput | number
    waitMinutes?: IntFieldUpdateOperationsInput | number
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueueSnapshotCreateManyInput = {
    id?: string
    outletId: string
    activeOrdersCount: number
    waitMinutes: number
    observedAt?: Date | string
  }

  export type QueueSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    activeOrdersCount?: IntFieldUpdateOperationsInput | number
    waitMinutes?: IntFieldUpdateOperationsInput | number
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueueSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    activeOrdersCount?: IntFieldUpdateOperationsInput | number
    waitMinutes?: IntFieldUpdateOperationsInput | number
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickupTokenCreateInput = {
    id?: string
    orderId: string
    outletId: string
    tokenNumber: string
    status?: string
    createdAt?: Date | string
  }

  export type PickupTokenUncheckedCreateInput = {
    id?: string
    orderId: string
    outletId: string
    tokenNumber: string
    status?: string
    createdAt?: Date | string
  }

  export type PickupTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    tokenNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickupTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    tokenNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickupTokenCreateManyInput = {
    id?: string
    orderId: string
    outletId: string
    tokenNumber: string
    status?: string
    createdAt?: Date | string
  }

  export type PickupTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    tokenNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickupTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    tokenNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryTaskCreateInput = {
    id?: string
    orderId: string
    outletId: string
    cityCode?: string
    deliveryAddress: string
    status?: string
    assignedStaffId?: string | null
    createdAt?: Date | string
  }

  export type DeliveryTaskUncheckedCreateInput = {
    id?: string
    orderId: string
    outletId: string
    cityCode?: string
    deliveryAddress: string
    status?: string
    assignedStaffId?: string | null
    createdAt?: Date | string
  }

  export type DeliveryTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryTaskCreateManyInput = {
    id?: string
    orderId: string
    outletId: string
    cityCode?: string
    deliveryAddress: string
    status?: string
    assignedStaffId?: string | null
    createdAt?: Date | string
  }

  export type DeliveryTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletTokenSequenceCreateInput = {
    id?: string
    outletId: string
    seqDate: string
    lastSequence?: number
    updatedAt?: Date | string
  }

  export type OutletTokenSequenceUncheckedCreateInput = {
    id?: string
    outletId: string
    seqDate: string
    lastSequence?: number
    updatedAt?: Date | string
  }

  export type OutletTokenSequenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    seqDate?: StringFieldUpdateOperationsInput | string
    lastSequence?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletTokenSequenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    seqDate?: StringFieldUpdateOperationsInput | string
    lastSequence?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletTokenSequenceCreateManyInput = {
    id?: string
    outletId: string
    seqDate: string
    lastSequence?: number
    updatedAt?: Date | string
  }

  export type OutletTokenSequenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    seqDate?: StringFieldUpdateOperationsInput | string
    lastSequence?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletTokenSequenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    seqDate?: StringFieldUpdateOperationsInput | string
    lastSequence?: IntFieldUpdateOperationsInput | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SlotReservationListRelationFilter = {
    every?: SlotReservationWhereInput
    some?: SlotReservationWhereInput
    none?: SlotReservationWhereInput
  }

  export type SlotReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CapacitySlotOutletIdSlotDateStartTimeCompoundUniqueInput = {
    outletId: string
    slotDate: string
    startTime: string
  }

  export type CapacitySlotCountOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    slotDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    maxCapacity?: SortOrder
    reservedCount?: SortOrder
    version?: SortOrder
    isWalkIn?: SortOrder
  }

  export type CapacitySlotAvgOrderByAggregateInput = {
    maxCapacity?: SortOrder
    reservedCount?: SortOrder
    version?: SortOrder
  }

  export type CapacitySlotMaxOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    slotDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    maxCapacity?: SortOrder
    reservedCount?: SortOrder
    version?: SortOrder
    isWalkIn?: SortOrder
  }

  export type CapacitySlotMinOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    slotDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    maxCapacity?: SortOrder
    reservedCount?: SortOrder
    version?: SortOrder
    isWalkIn?: SortOrder
  }

  export type CapacitySlotSumOrderByAggregateInput = {
    maxCapacity?: SortOrder
    reservedCount?: SortOrder
    version?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CapacitySlotRelationFilter = {
    is?: CapacitySlotWhereInput
    isNot?: CapacitySlotWhereInput
  }

  export type SlotReservationCountOrderByAggregateInput = {
    id?: SortOrder
    slotId?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SlotReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    slotId?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SlotReservationMinOrderByAggregateInput = {
    id?: SortOrder
    slotId?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
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

  export type QueueSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    activeOrdersCount?: SortOrder
    waitMinutes?: SortOrder
    observedAt?: SortOrder
  }

  export type QueueSnapshotAvgOrderByAggregateInput = {
    activeOrdersCount?: SortOrder
    waitMinutes?: SortOrder
  }

  export type QueueSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    activeOrdersCount?: SortOrder
    waitMinutes?: SortOrder
    observedAt?: SortOrder
  }

  export type QueueSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    activeOrdersCount?: SortOrder
    waitMinutes?: SortOrder
    observedAt?: SortOrder
  }

  export type QueueSnapshotSumOrderByAggregateInput = {
    activeOrdersCount?: SortOrder
    waitMinutes?: SortOrder
  }

  export type PickupTokenCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    outletId?: SortOrder
    tokenNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PickupTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    outletId?: SortOrder
    tokenNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PickupTokenMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    outletId?: SortOrder
    tokenNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeliveryTaskCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    outletId?: SortOrder
    cityCode?: SortOrder
    deliveryAddress?: SortOrder
    status?: SortOrder
    assignedStaffId?: SortOrder
    createdAt?: SortOrder
  }

  export type DeliveryTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    outletId?: SortOrder
    cityCode?: SortOrder
    deliveryAddress?: SortOrder
    status?: SortOrder
    assignedStaffId?: SortOrder
    createdAt?: SortOrder
  }

  export type DeliveryTaskMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    outletId?: SortOrder
    cityCode?: SortOrder
    deliveryAddress?: SortOrder
    status?: SortOrder
    assignedStaffId?: SortOrder
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

  export type OutletTokenSequenceOutletIdSeqDateCompoundUniqueInput = {
    outletId: string
    seqDate: string
  }

  export type OutletTokenSequenceCountOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    seqDate?: SortOrder
    lastSequence?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutletTokenSequenceAvgOrderByAggregateInput = {
    lastSequence?: SortOrder
  }

  export type OutletTokenSequenceMaxOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    seqDate?: SortOrder
    lastSequence?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutletTokenSequenceMinOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    seqDate?: SortOrder
    lastSequence?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutletTokenSequenceSumOrderByAggregateInput = {
    lastSequence?: SortOrder
  }

  export type SlotReservationCreateNestedManyWithoutSlotInput = {
    create?: XOR<SlotReservationCreateWithoutSlotInput, SlotReservationUncheckedCreateWithoutSlotInput> | SlotReservationCreateWithoutSlotInput[] | SlotReservationUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: SlotReservationCreateOrConnectWithoutSlotInput | SlotReservationCreateOrConnectWithoutSlotInput[]
    createMany?: SlotReservationCreateManySlotInputEnvelope
    connect?: SlotReservationWhereUniqueInput | SlotReservationWhereUniqueInput[]
  }

  export type SlotReservationUncheckedCreateNestedManyWithoutSlotInput = {
    create?: XOR<SlotReservationCreateWithoutSlotInput, SlotReservationUncheckedCreateWithoutSlotInput> | SlotReservationCreateWithoutSlotInput[] | SlotReservationUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: SlotReservationCreateOrConnectWithoutSlotInput | SlotReservationCreateOrConnectWithoutSlotInput[]
    createMany?: SlotReservationCreateManySlotInputEnvelope
    connect?: SlotReservationWhereUniqueInput | SlotReservationWhereUniqueInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SlotReservationUpdateManyWithoutSlotNestedInput = {
    create?: XOR<SlotReservationCreateWithoutSlotInput, SlotReservationUncheckedCreateWithoutSlotInput> | SlotReservationCreateWithoutSlotInput[] | SlotReservationUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: SlotReservationCreateOrConnectWithoutSlotInput | SlotReservationCreateOrConnectWithoutSlotInput[]
    upsert?: SlotReservationUpsertWithWhereUniqueWithoutSlotInput | SlotReservationUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: SlotReservationCreateManySlotInputEnvelope
    set?: SlotReservationWhereUniqueInput | SlotReservationWhereUniqueInput[]
    disconnect?: SlotReservationWhereUniqueInput | SlotReservationWhereUniqueInput[]
    delete?: SlotReservationWhereUniqueInput | SlotReservationWhereUniqueInput[]
    connect?: SlotReservationWhereUniqueInput | SlotReservationWhereUniqueInput[]
    update?: SlotReservationUpdateWithWhereUniqueWithoutSlotInput | SlotReservationUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: SlotReservationUpdateManyWithWhereWithoutSlotInput | SlotReservationUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: SlotReservationScalarWhereInput | SlotReservationScalarWhereInput[]
  }

  export type SlotReservationUncheckedUpdateManyWithoutSlotNestedInput = {
    create?: XOR<SlotReservationCreateWithoutSlotInput, SlotReservationUncheckedCreateWithoutSlotInput> | SlotReservationCreateWithoutSlotInput[] | SlotReservationUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: SlotReservationCreateOrConnectWithoutSlotInput | SlotReservationCreateOrConnectWithoutSlotInput[]
    upsert?: SlotReservationUpsertWithWhereUniqueWithoutSlotInput | SlotReservationUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: SlotReservationCreateManySlotInputEnvelope
    set?: SlotReservationWhereUniqueInput | SlotReservationWhereUniqueInput[]
    disconnect?: SlotReservationWhereUniqueInput | SlotReservationWhereUniqueInput[]
    delete?: SlotReservationWhereUniqueInput | SlotReservationWhereUniqueInput[]
    connect?: SlotReservationWhereUniqueInput | SlotReservationWhereUniqueInput[]
    update?: SlotReservationUpdateWithWhereUniqueWithoutSlotInput | SlotReservationUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: SlotReservationUpdateManyWithWhereWithoutSlotInput | SlotReservationUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: SlotReservationScalarWhereInput | SlotReservationScalarWhereInput[]
  }

  export type CapacitySlotCreateNestedOneWithoutReservationsInput = {
    create?: XOR<CapacitySlotCreateWithoutReservationsInput, CapacitySlotUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: CapacitySlotCreateOrConnectWithoutReservationsInput
    connect?: CapacitySlotWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CapacitySlotUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<CapacitySlotCreateWithoutReservationsInput, CapacitySlotUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: CapacitySlotCreateOrConnectWithoutReservationsInput
    upsert?: CapacitySlotUpsertWithoutReservationsInput
    connect?: CapacitySlotWhereUniqueInput
    update?: XOR<XOR<CapacitySlotUpdateToOneWithWhereWithoutReservationsInput, CapacitySlotUpdateWithoutReservationsInput>, CapacitySlotUncheckedUpdateWithoutReservationsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SlotReservationCreateWithoutSlotInput = {
    id?: string
    orderId: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SlotReservationUncheckedCreateWithoutSlotInput = {
    id?: string
    orderId: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SlotReservationCreateOrConnectWithoutSlotInput = {
    where: SlotReservationWhereUniqueInput
    create: XOR<SlotReservationCreateWithoutSlotInput, SlotReservationUncheckedCreateWithoutSlotInput>
  }

  export type SlotReservationCreateManySlotInputEnvelope = {
    data: SlotReservationCreateManySlotInput | SlotReservationCreateManySlotInput[]
    skipDuplicates?: boolean
  }

  export type SlotReservationUpsertWithWhereUniqueWithoutSlotInput = {
    where: SlotReservationWhereUniqueInput
    update: XOR<SlotReservationUpdateWithoutSlotInput, SlotReservationUncheckedUpdateWithoutSlotInput>
    create: XOR<SlotReservationCreateWithoutSlotInput, SlotReservationUncheckedCreateWithoutSlotInput>
  }

  export type SlotReservationUpdateWithWhereUniqueWithoutSlotInput = {
    where: SlotReservationWhereUniqueInput
    data: XOR<SlotReservationUpdateWithoutSlotInput, SlotReservationUncheckedUpdateWithoutSlotInput>
  }

  export type SlotReservationUpdateManyWithWhereWithoutSlotInput = {
    where: SlotReservationScalarWhereInput
    data: XOR<SlotReservationUpdateManyMutationInput, SlotReservationUncheckedUpdateManyWithoutSlotInput>
  }

  export type SlotReservationScalarWhereInput = {
    AND?: SlotReservationScalarWhereInput | SlotReservationScalarWhereInput[]
    OR?: SlotReservationScalarWhereInput[]
    NOT?: SlotReservationScalarWhereInput | SlotReservationScalarWhereInput[]
    id?: StringFilter<"SlotReservation"> | string
    slotId?: StringFilter<"SlotReservation"> | string
    orderId?: StringFilter<"SlotReservation"> | string
    status?: StringFilter<"SlotReservation"> | string
    expiresAt?: DateTimeFilter<"SlotReservation"> | Date | string
    createdAt?: DateTimeFilter<"SlotReservation"> | Date | string
  }

  export type CapacitySlotCreateWithoutReservationsInput = {
    id?: string
    outletId: string
    slotDate: string
    startTime: string
    endTime: string
    maxCapacity?: number
    reservedCount?: number
    version?: number
    isWalkIn?: boolean
  }

  export type CapacitySlotUncheckedCreateWithoutReservationsInput = {
    id?: string
    outletId: string
    slotDate: string
    startTime: string
    endTime: string
    maxCapacity?: number
    reservedCount?: number
    version?: number
    isWalkIn?: boolean
  }

  export type CapacitySlotCreateOrConnectWithoutReservationsInput = {
    where: CapacitySlotWhereUniqueInput
    create: XOR<CapacitySlotCreateWithoutReservationsInput, CapacitySlotUncheckedCreateWithoutReservationsInput>
  }

  export type CapacitySlotUpsertWithoutReservationsInput = {
    update: XOR<CapacitySlotUpdateWithoutReservationsInput, CapacitySlotUncheckedUpdateWithoutReservationsInput>
    create: XOR<CapacitySlotCreateWithoutReservationsInput, CapacitySlotUncheckedCreateWithoutReservationsInput>
    where?: CapacitySlotWhereInput
  }

  export type CapacitySlotUpdateToOneWithWhereWithoutReservationsInput = {
    where?: CapacitySlotWhereInput
    data: XOR<CapacitySlotUpdateWithoutReservationsInput, CapacitySlotUncheckedUpdateWithoutReservationsInput>
  }

  export type CapacitySlotUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    slotDate?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    reservedCount?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isWalkIn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CapacitySlotUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    slotDate?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    reservedCount?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isWalkIn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SlotReservationCreateManySlotInput = {
    id?: string
    orderId: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SlotReservationUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotReservationUncheckedUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotReservationUncheckedUpdateManyWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CapacitySlotCountOutputTypeDefaultArgs instead
     */
    export type CapacitySlotCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CapacitySlotCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CapacitySlotDefaultArgs instead
     */
    export type CapacitySlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CapacitySlotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SlotReservationDefaultArgs instead
     */
    export type SlotReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SlotReservationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QueueSnapshotDefaultArgs instead
     */
    export type QueueSnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QueueSnapshotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PickupTokenDefaultArgs instead
     */
    export type PickupTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PickupTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeliveryTaskDefaultArgs instead
     */
    export type DeliveryTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeliveryTaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OutletTokenSequenceDefaultArgs instead
     */
    export type OutletTokenSequenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutletTokenSequenceDefaultArgs<ExtArgs>

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