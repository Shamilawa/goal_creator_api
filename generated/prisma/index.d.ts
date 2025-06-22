
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
 * Model Vision
 * 
 */
export type Vision = $Result.DefaultSelection<Prisma.$VisionPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Milestone
 * 
 */
export type Milestone = $Result.DefaultSelection<Prisma.$MilestonePayload>
/**
 * Model ActionStep
 * 
 */
export type ActionStep = $Result.DefaultSelection<Prisma.$ActionStepPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  NOT_STARTED: 'NOT_STARTED',
  CANCELLED: 'CANCELLED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Type: {
  VISION: 'VISION',
  GOAL: 'GOAL',
  MILESTONE: 'MILESTONE',
  ACTION_STEP: 'ACTION_STEP'
};

export type Type = (typeof Type)[keyof typeof Type]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Visions
 * const visions = await prisma.vision.findMany()
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
   * // Fetch zero or more Visions
   * const visions = await prisma.vision.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.vision`: Exposes CRUD operations for the **Vision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visions
    * const visions = await prisma.vision.findMany()
    * ```
    */
  get vision(): Prisma.VisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.milestone`: Exposes CRUD operations for the **Milestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestone.findMany()
    * ```
    */
  get milestone(): Prisma.MilestoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actionStep`: Exposes CRUD operations for the **ActionStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionSteps
    * const actionSteps = await prisma.actionStep.findMany()
    * ```
    */
  get actionStep(): Prisma.ActionStepDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Vision: 'Vision',
    Goal: 'Goal',
    Milestone: 'Milestone',
    ActionStep: 'ActionStep'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "vision" | "goal" | "milestone" | "actionStep"
      txIsolationLevel: never
    }
    model: {
      Vision: {
        payload: Prisma.$VisionPayload<ExtArgs>
        fields: Prisma.VisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>
          }
          findFirst: {
            args: Prisma.VisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>
          }
          findMany: {
            args: Prisma.VisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>[]
          }
          create: {
            args: Prisma.VisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>
          }
          createMany: {
            args: Prisma.VisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>
          }
          update: {
            args: Prisma.VisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>
          }
          deleteMany: {
            args: Prisma.VisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>
          }
          aggregate: {
            args: Prisma.VisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVision>
          }
          groupBy: {
            args: Prisma.VisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VisionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VisionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VisionCountArgs<ExtArgs>
            result: $Utils.Optional<VisionCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GoalFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GoalAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Milestone: {
        payload: Prisma.$MilestonePayload<ExtArgs>
        fields: Prisma.MilestoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilestoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilestoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findFirst: {
            args: Prisma.MilestoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilestoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findMany: {
            args: Prisma.MilestoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          create: {
            args: Prisma.MilestoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          createMany: {
            args: Prisma.MilestoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MilestoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          update: {
            args: Prisma.MilestoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          deleteMany: {
            args: Prisma.MilestoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MilestoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MilestoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          aggregate: {
            args: Prisma.MilestoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilestone>
          }
          groupBy: {
            args: Prisma.MilestoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilestoneGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MilestoneFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MilestoneAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MilestoneCountArgs<ExtArgs>
            result: $Utils.Optional<MilestoneCountAggregateOutputType> | number
          }
        }
      }
      ActionStep: {
        payload: Prisma.$ActionStepPayload<ExtArgs>
        fields: Prisma.ActionStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>
          }
          findFirst: {
            args: Prisma.ActionStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>
          }
          findMany: {
            args: Prisma.ActionStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>[]
          }
          create: {
            args: Prisma.ActionStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>
          }
          createMany: {
            args: Prisma.ActionStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActionStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>
          }
          update: {
            args: Prisma.ActionStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>
          }
          deleteMany: {
            args: Prisma.ActionStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActionStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>
          }
          aggregate: {
            args: Prisma.ActionStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionStep>
          }
          groupBy: {
            args: Prisma.ActionStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionStepGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ActionStepFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ActionStepAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ActionStepCountArgs<ExtArgs>
            result: $Utils.Optional<ActionStepCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    vision?: VisionOmit
    goal?: GoalOmit
    milestone?: MilestoneOmit
    actionStep?: ActionStepOmit
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
    | 'updateManyAndReturn'
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
   * Count Type VisionCountOutputType
   */

  export type VisionCountOutputType = {
    goals: number
  }

  export type VisionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | VisionCountOutputTypeCountGoalsArgs
  }

  // Custom InputTypes
  /**
   * VisionCountOutputType without action
   */
  export type VisionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisionCountOutputType
     */
    select?: VisionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisionCountOutputType without action
   */
  export type VisionCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }


  /**
   * Count Type GoalCountOutputType
   */

  export type GoalCountOutputType = {
    milestones: number
  }

  export type GoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestones?: boolean | GoalCountOutputTypeCountMilestonesArgs
  }

  // Custom InputTypes
  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCountOutputType
     */
    select?: GoalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
  }


  /**
   * Count Type MilestoneCountOutputType
   */

  export type MilestoneCountOutputType = {
    actionSteps: number
  }

  export type MilestoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actionSteps?: boolean | MilestoneCountOutputTypeCountActionStepsArgs
  }

  // Custom InputTypes
  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneCountOutputType
     */
    select?: MilestoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeCountActionStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionStepWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vision
   */

  export type AggregateVision = {
    _count: VisionCountAggregateOutputType | null
    _min: VisionMinAggregateOutputType | null
    _max: VisionMaxAggregateOutputType | null
  }

  export type VisionMinAggregateOutputType = {
    id: string | null
    visionTitle: string | null
    visionDescription: string | null
    status: $Enums.Status | null
    type: $Enums.Type | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisionMaxAggregateOutputType = {
    id: string | null
    visionTitle: string | null
    visionDescription: string | null
    status: $Enums.Status | null
    type: $Enums.Type | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisionCountAggregateOutputType = {
    id: number
    visionTitle: number
    visionDescription: number
    status: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisionMinAggregateInputType = {
    id?: true
    visionTitle?: true
    visionDescription?: true
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisionMaxAggregateInputType = {
    id?: true
    visionTitle?: true
    visionDescription?: true
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisionCountAggregateInputType = {
    id?: true
    visionTitle?: true
    visionDescription?: true
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vision to aggregate.
     */
    where?: VisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visions to fetch.
     */
    orderBy?: VisionOrderByWithRelationInput | VisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visions
    **/
    _count?: true | VisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisionMaxAggregateInputType
  }

  export type GetVisionAggregateType<T extends VisionAggregateArgs> = {
        [P in keyof T & keyof AggregateVision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVision[P]>
      : GetScalarType<T[P], AggregateVision[P]>
  }




  export type VisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisionWhereInput
    orderBy?: VisionOrderByWithAggregationInput | VisionOrderByWithAggregationInput[]
    by: VisionScalarFieldEnum[] | VisionScalarFieldEnum
    having?: VisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisionCountAggregateInputType | true
    _min?: VisionMinAggregateInputType
    _max?: VisionMaxAggregateInputType
  }

  export type VisionGroupByOutputType = {
    id: string
    visionTitle: string
    visionDescription: string
    status: $Enums.Status
    type: $Enums.Type
    createdAt: Date
    updatedAt: Date
    _count: VisionCountAggregateOutputType | null
    _min: VisionMinAggregateOutputType | null
    _max: VisionMaxAggregateOutputType | null
  }

  type GetVisionGroupByPayload<T extends VisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisionGroupByOutputType[P]>
            : GetScalarType<T[P], VisionGroupByOutputType[P]>
        }
      >
    >


  export type VisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visionTitle?: boolean
    visionDescription?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    goals?: boolean | Vision$goalsArgs<ExtArgs>
    _count?: boolean | VisionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vision"]>



  export type VisionSelectScalar = {
    id?: boolean
    visionTitle?: boolean
    visionDescription?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visionTitle" | "visionDescription" | "status" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["vision"]>
  export type VisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | Vision$goalsArgs<ExtArgs>
    _count?: boolean | VisionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vision"
    objects: {
      goals: Prisma.$GoalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      visionTitle: string
      visionDescription: string
      status: $Enums.Status
      type: $Enums.Type
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vision"]>
    composites: {}
  }

  type VisionGetPayload<S extends boolean | null | undefined | VisionDefaultArgs> = $Result.GetResult<Prisma.$VisionPayload, S>

  type VisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisionCountAggregateInputType | true
    }

  export interface VisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vision'], meta: { name: 'Vision' } }
    /**
     * Find zero or one Vision that matches the filter.
     * @param {VisionFindUniqueArgs} args - Arguments to find a Vision
     * @example
     * // Get one Vision
     * const vision = await prisma.vision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisionFindUniqueArgs>(args: SelectSubset<T, VisionFindUniqueArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vision that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisionFindUniqueOrThrowArgs} args - Arguments to find a Vision
     * @example
     * // Get one Vision
     * const vision = await prisma.vision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisionFindUniqueOrThrowArgs>(args: SelectSubset<T, VisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionFindFirstArgs} args - Arguments to find a Vision
     * @example
     * // Get one Vision
     * const vision = await prisma.vision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisionFindFirstArgs>(args?: SelectSubset<T, VisionFindFirstArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionFindFirstOrThrowArgs} args - Arguments to find a Vision
     * @example
     * // Get one Vision
     * const vision = await prisma.vision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisionFindFirstOrThrowArgs>(args?: SelectSubset<T, VisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visions
     * const visions = await prisma.vision.findMany()
     * 
     * // Get first 10 Visions
     * const visions = await prisma.vision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visionWithIdOnly = await prisma.vision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisionFindManyArgs>(args?: SelectSubset<T, VisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vision.
     * @param {VisionCreateArgs} args - Arguments to create a Vision.
     * @example
     * // Create one Vision
     * const Vision = await prisma.vision.create({
     *   data: {
     *     // ... data to create a Vision
     *   }
     * })
     * 
     */
    create<T extends VisionCreateArgs>(args: SelectSubset<T, VisionCreateArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visions.
     * @param {VisionCreateManyArgs} args - Arguments to create many Visions.
     * @example
     * // Create many Visions
     * const vision = await prisma.vision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisionCreateManyArgs>(args?: SelectSubset<T, VisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vision.
     * @param {VisionDeleteArgs} args - Arguments to delete one Vision.
     * @example
     * // Delete one Vision
     * const Vision = await prisma.vision.delete({
     *   where: {
     *     // ... filter to delete one Vision
     *   }
     * })
     * 
     */
    delete<T extends VisionDeleteArgs>(args: SelectSubset<T, VisionDeleteArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vision.
     * @param {VisionUpdateArgs} args - Arguments to update one Vision.
     * @example
     * // Update one Vision
     * const vision = await prisma.vision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisionUpdateArgs>(args: SelectSubset<T, VisionUpdateArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visions.
     * @param {VisionDeleteManyArgs} args - Arguments to filter Visions to delete.
     * @example
     * // Delete a few Visions
     * const { count } = await prisma.vision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisionDeleteManyArgs>(args?: SelectSubset<T, VisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visions
     * const vision = await prisma.vision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisionUpdateManyArgs>(args: SelectSubset<T, VisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vision.
     * @param {VisionUpsertArgs} args - Arguments to update or create a Vision.
     * @example
     * // Update or create a Vision
     * const vision = await prisma.vision.upsert({
     *   create: {
     *     // ... data to create a Vision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vision we want to update
     *   }
     * })
     */
    upsert<T extends VisionUpsertArgs>(args: SelectSubset<T, VisionUpsertArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visions that matches the filter.
     * @param {VisionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vision = await prisma.vision.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VisionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Vision.
     * @param {VisionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vision = await prisma.vision.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VisionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Visions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionCountArgs} args - Arguments to filter Visions to count.
     * @example
     * // Count the number of Visions
     * const count = await prisma.vision.count({
     *   where: {
     *     // ... the filter for the Visions we want to count
     *   }
     * })
    **/
    count<T extends VisionCountArgs>(
      args?: Subset<T, VisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisionAggregateArgs>(args: Subset<T, VisionAggregateArgs>): Prisma.PrismaPromise<GetVisionAggregateType<T>>

    /**
     * Group by Vision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionGroupByArgs} args - Group by arguments.
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
      T extends VisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisionGroupByArgs['orderBy'] }
        : { orderBy?: VisionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vision model
   */
  readonly fields: VisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goals<T extends Vision$goalsArgs<ExtArgs> = {}>(args?: Subset<T, Vision$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vision model
   */
  interface VisionFieldRefs {
    readonly id: FieldRef<"Vision", 'String'>
    readonly visionTitle: FieldRef<"Vision", 'String'>
    readonly visionDescription: FieldRef<"Vision", 'String'>
    readonly status: FieldRef<"Vision", 'Status'>
    readonly type: FieldRef<"Vision", 'Type'>
    readonly createdAt: FieldRef<"Vision", 'DateTime'>
    readonly updatedAt: FieldRef<"Vision", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vision findUnique
   */
  export type VisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisionInclude<ExtArgs> | null
    /**
     * Filter, which Vision to fetch.
     */
    where: VisionWhereUniqueInput
  }

  /**
   * Vision findUniqueOrThrow
   */
  export type VisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisionInclude<ExtArgs> | null
    /**
     * Filter, which Vision to fetch.
     */
    where: VisionWhereUniqueInput
  }

  /**
   * Vision findFirst
   */
  export type VisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisionInclude<ExtArgs> | null
    /**
     * Filter, which Vision to fetch.
     */
    where?: VisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visions to fetch.
     */
    orderBy?: VisionOrderByWithRelationInput | VisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visions.
     */
    cursor?: VisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visions.
     */
    distinct?: VisionScalarFieldEnum | VisionScalarFieldEnum[]
  }

  /**
   * Vision findFirstOrThrow
   */
  export type VisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisionInclude<ExtArgs> | null
    /**
     * Filter, which Vision to fetch.
     */
    where?: VisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visions to fetch.
     */
    orderBy?: VisionOrderByWithRelationInput | VisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visions.
     */
    cursor?: VisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visions.
     */
    distinct?: VisionScalarFieldEnum | VisionScalarFieldEnum[]
  }

  /**
   * Vision findMany
   */
  export type VisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisionInclude<ExtArgs> | null
    /**
     * Filter, which Visions to fetch.
     */
    where?: VisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visions to fetch.
     */
    orderBy?: VisionOrderByWithRelationInput | VisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visions.
     */
    cursor?: VisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visions.
     */
    skip?: number
    distinct?: VisionScalarFieldEnum | VisionScalarFieldEnum[]
  }

  /**
   * Vision create
   */
  export type VisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Vision.
     */
    data: XOR<VisionCreateInput, VisionUncheckedCreateInput>
  }

  /**
   * Vision createMany
   */
  export type VisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visions.
     */
    data: VisionCreateManyInput | VisionCreateManyInput[]
  }

  /**
   * Vision update
   */
  export type VisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Vision.
     */
    data: XOR<VisionUpdateInput, VisionUncheckedUpdateInput>
    /**
     * Choose, which Vision to update.
     */
    where: VisionWhereUniqueInput
  }

  /**
   * Vision updateMany
   */
  export type VisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visions.
     */
    data: XOR<VisionUpdateManyMutationInput, VisionUncheckedUpdateManyInput>
    /**
     * Filter which Visions to update
     */
    where?: VisionWhereInput
    /**
     * Limit how many Visions to update.
     */
    limit?: number
  }

  /**
   * Vision upsert
   */
  export type VisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Vision to update in case it exists.
     */
    where: VisionWhereUniqueInput
    /**
     * In case the Vision found by the `where` argument doesn't exist, create a new Vision with this data.
     */
    create: XOR<VisionCreateInput, VisionUncheckedCreateInput>
    /**
     * In case the Vision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisionUpdateInput, VisionUncheckedUpdateInput>
  }

  /**
   * Vision delete
   */
  export type VisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisionInclude<ExtArgs> | null
    /**
     * Filter which Vision to delete.
     */
    where: VisionWhereUniqueInput
  }

  /**
   * Vision deleteMany
   */
  export type VisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visions to delete
     */
    where?: VisionWhereInput
    /**
     * Limit how many Visions to delete.
     */
    limit?: number
  }

  /**
   * Vision findRaw
   */
  export type VisionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vision aggregateRaw
   */
  export type VisionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vision.goals
   */
  export type Vision$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Vision without action
   */
  export type VisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisionInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    type: $Enums.Type | null
    goalTitle: string | null
    deadline: Date | null
    outcome: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    visionId: string | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    type: $Enums.Type | null
    goalTitle: string | null
    deadline: Date | null
    outcome: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    visionId: string | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    type: number
    goalTitle: number
    deadline: number
    outcome: number
    status: number
    createdAt: number
    updatedAt: number
    visionId: number
    _all: number
  }


  export type GoalMinAggregateInputType = {
    id?: true
    type?: true
    goalTitle?: true
    deadline?: true
    outcome?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    visionId?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    type?: true
    goalTitle?: true
    deadline?: true
    outcome?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    visionId?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    type?: true
    goalTitle?: true
    deadline?: true
    outcome?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    visionId?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    type: $Enums.Type
    goalTitle: string
    deadline: Date
    outcome: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    visionId: string
    _count: GoalCountAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    goalTitle?: boolean
    deadline?: boolean
    outcome?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visionId?: boolean
    vision?: boolean | VisionDefaultArgs<ExtArgs>
    milestones?: boolean | Goal$milestonesArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>



  export type GoalSelectScalar = {
    id?: boolean
    type?: boolean
    goalTitle?: boolean
    deadline?: boolean
    outcome?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visionId?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "goalTitle" | "deadline" | "outcome" | "status" | "createdAt" | "updatedAt" | "visionId", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vision?: boolean | VisionDefaultArgs<ExtArgs>
    milestones?: boolean | Goal$milestonesArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      vision: Prisma.$VisionPayload<ExtArgs>
      milestones: Prisma.$MilestonePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.Type
      goalTitle: string
      deadline: Date
      outcome: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
      visionId: string
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * @param {GoalFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const goal = await prisma.goal.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GoalFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Goal.
     * @param {GoalAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const goal = await prisma.goal.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GoalAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vision<T extends VisionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisionDefaultArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    milestones<T extends Goal$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, Goal$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly type: FieldRef<"Goal", 'Type'>
    readonly goalTitle: FieldRef<"Goal", 'String'>
    readonly deadline: FieldRef<"Goal", 'DateTime'>
    readonly outcome: FieldRef<"Goal", 'String'>
    readonly status: FieldRef<"Goal", 'Status'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
    readonly visionId: FieldRef<"Goal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal findRaw
   */
  export type GoalFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Goal aggregateRaw
   */
  export type GoalAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Goal.milestones
   */
  export type Goal$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    cursor?: MilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Milestone
   */

  export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  export type MilestoneMinAggregateOutputType = {
    id: string | null
    type: $Enums.Type | null
    milestoneName: string | null
    milestoneDeadline: Date | null
    milestoneOutcome: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    goalId: string | null
  }

  export type MilestoneMaxAggregateOutputType = {
    id: string | null
    type: $Enums.Type | null
    milestoneName: string | null
    milestoneDeadline: Date | null
    milestoneOutcome: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    goalId: string | null
  }

  export type MilestoneCountAggregateOutputType = {
    id: number
    type: number
    milestoneName: number
    milestoneDeadline: number
    milestoneOutcome: number
    status: number
    createdAt: number
    updatedAt: number
    goalId: number
    _all: number
  }


  export type MilestoneMinAggregateInputType = {
    id?: true
    type?: true
    milestoneName?: true
    milestoneDeadline?: true
    milestoneOutcome?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    goalId?: true
  }

  export type MilestoneMaxAggregateInputType = {
    id?: true
    type?: true
    milestoneName?: true
    milestoneDeadline?: true
    milestoneOutcome?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    goalId?: true
  }

  export type MilestoneCountAggregateInputType = {
    id?: true
    type?: true
    milestoneName?: true
    milestoneDeadline?: true
    milestoneOutcome?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    goalId?: true
    _all?: true
  }

  export type MilestoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestone to aggregate.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Milestones
    **/
    _count?: true | MilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneMaxAggregateInputType
  }

  export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestone[P]>
      : GetScalarType<T[P], AggregateMilestone[P]>
  }




  export type MilestoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithAggregationInput | MilestoneOrderByWithAggregationInput[]
    by: MilestoneScalarFieldEnum[] | MilestoneScalarFieldEnum
    having?: MilestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneCountAggregateInputType | true
    _min?: MilestoneMinAggregateInputType
    _max?: MilestoneMaxAggregateInputType
  }

  export type MilestoneGroupByOutputType = {
    id: string
    type: $Enums.Type
    milestoneName: string
    milestoneDeadline: Date
    milestoneOutcome: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    goalId: string
    _count: MilestoneCountAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  type GetMilestoneGroupByPayload<T extends MilestoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    milestoneName?: boolean
    milestoneDeadline?: boolean
    milestoneOutcome?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    goalId?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    actionSteps?: boolean | Milestone$actionStepsArgs<ExtArgs>
    _count?: boolean | MilestoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>



  export type MilestoneSelectScalar = {
    id?: boolean
    type?: boolean
    milestoneName?: boolean
    milestoneDeadline?: boolean
    milestoneOutcome?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    goalId?: boolean
  }

  export type MilestoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "milestoneName" | "milestoneDeadline" | "milestoneOutcome" | "status" | "createdAt" | "updatedAt" | "goalId", ExtArgs["result"]["milestone"]>
  export type MilestoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    actionSteps?: boolean | Milestone$actionStepsArgs<ExtArgs>
    _count?: boolean | MilestoneCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MilestonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Milestone"
    objects: {
      goal: Prisma.$GoalPayload<ExtArgs>
      actionSteps: Prisma.$ActionStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.Type
      milestoneName: string
      milestoneDeadline: Date
      milestoneOutcome: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
      goalId: string
    }, ExtArgs["result"]["milestone"]>
    composites: {}
  }

  type MilestoneGetPayload<S extends boolean | null | undefined | MilestoneDefaultArgs> = $Result.GetResult<Prisma.$MilestonePayload, S>

  type MilestoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MilestoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MilestoneCountAggregateInputType | true
    }

  export interface MilestoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Milestone'], meta: { name: 'Milestone' } }
    /**
     * Find zero or one Milestone that matches the filter.
     * @param {MilestoneFindUniqueArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilestoneFindUniqueArgs>(args: SelectSubset<T, MilestoneFindUniqueArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Milestone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MilestoneFindUniqueOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilestoneFindUniqueOrThrowArgs>(args: SelectSubset<T, MilestoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilestoneFindFirstArgs>(args?: SelectSubset<T, MilestoneFindFirstArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilestoneFindFirstOrThrowArgs>(args?: SelectSubset<T, MilestoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestone.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneWithIdOnly = await prisma.milestone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MilestoneFindManyArgs>(args?: SelectSubset<T, MilestoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Milestone.
     * @param {MilestoneCreateArgs} args - Arguments to create a Milestone.
     * @example
     * // Create one Milestone
     * const Milestone = await prisma.milestone.create({
     *   data: {
     *     // ... data to create a Milestone
     *   }
     * })
     * 
     */
    create<T extends MilestoneCreateArgs>(args: SelectSubset<T, MilestoneCreateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Milestones.
     * @param {MilestoneCreateManyArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MilestoneCreateManyArgs>(args?: SelectSubset<T, MilestoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Milestone.
     * @param {MilestoneDeleteArgs} args - Arguments to delete one Milestone.
     * @example
     * // Delete one Milestone
     * const Milestone = await prisma.milestone.delete({
     *   where: {
     *     // ... filter to delete one Milestone
     *   }
     * })
     * 
     */
    delete<T extends MilestoneDeleteArgs>(args: SelectSubset<T, MilestoneDeleteArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Milestone.
     * @param {MilestoneUpdateArgs} args - Arguments to update one Milestone.
     * @example
     * // Update one Milestone
     * const milestone = await prisma.milestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MilestoneUpdateArgs>(args: SelectSubset<T, MilestoneUpdateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Milestones.
     * @param {MilestoneDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MilestoneDeleteManyArgs>(args?: SelectSubset<T, MilestoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MilestoneUpdateManyArgs>(args: SelectSubset<T, MilestoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Milestone.
     * @param {MilestoneUpsertArgs} args - Arguments to update or create a Milestone.
     * @example
     * // Update or create a Milestone
     * const milestone = await prisma.milestone.upsert({
     *   create: {
     *     // ... data to create a Milestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestone we want to update
     *   }
     * })
     */
    upsert<T extends MilestoneUpsertArgs>(args: SelectSubset<T, MilestoneUpsertArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Milestones that matches the filter.
     * @param {MilestoneFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const milestone = await prisma.milestone.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MilestoneFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Milestone.
     * @param {MilestoneAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const milestone = await prisma.milestone.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MilestoneAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestone.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends MilestoneCountArgs>(
      args?: Subset<T, MilestoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MilestoneAggregateArgs>(args: Subset<T, MilestoneAggregateArgs>): Prisma.PrismaPromise<GetMilestoneAggregateType<T>>

    /**
     * Group by Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneGroupByArgs} args - Group by arguments.
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
      T extends MilestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Milestone model
   */
  readonly fields: MilestoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Milestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilestoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goal<T extends GoalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GoalDefaultArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actionSteps<T extends Milestone$actionStepsArgs<ExtArgs> = {}>(args?: Subset<T, Milestone$actionStepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Milestone model
   */
  interface MilestoneFieldRefs {
    readonly id: FieldRef<"Milestone", 'String'>
    readonly type: FieldRef<"Milestone", 'Type'>
    readonly milestoneName: FieldRef<"Milestone", 'String'>
    readonly milestoneDeadline: FieldRef<"Milestone", 'DateTime'>
    readonly milestoneOutcome: FieldRef<"Milestone", 'String'>
    readonly status: FieldRef<"Milestone", 'Status'>
    readonly createdAt: FieldRef<"Milestone", 'DateTime'>
    readonly updatedAt: FieldRef<"Milestone", 'DateTime'>
    readonly goalId: FieldRef<"Milestone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Milestone findUnique
   */
  export type MilestoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findUniqueOrThrow
   */
  export type MilestoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findFirst
   */
  export type MilestoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findFirstOrThrow
   */
  export type MilestoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findMany
   */
  export type MilestoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestones to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone create
   */
  export type MilestoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Milestone.
     */
    data: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
  }

  /**
   * Milestone createMany
   */
  export type MilestoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
  }

  /**
   * Milestone update
   */
  export type MilestoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Milestone.
     */
    data: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
    /**
     * Choose, which Milestone to update.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone updateMany
   */
  export type MilestoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
  }

  /**
   * Milestone upsert
   */
  export type MilestoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Milestone to update in case it exists.
     */
    where: MilestoneWhereUniqueInput
    /**
     * In case the Milestone found by the `where` argument doesn't exist, create a new Milestone with this data.
     */
    create: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
    /**
     * In case the Milestone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
  }

  /**
   * Milestone delete
   */
  export type MilestoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter which Milestone to delete.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone deleteMany
   */
  export type MilestoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestones to delete
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to delete.
     */
    limit?: number
  }

  /**
   * Milestone findRaw
   */
  export type MilestoneFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Milestone aggregateRaw
   */
  export type MilestoneAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Milestone.actionSteps
   */
  export type Milestone$actionStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    where?: ActionStepWhereInput
    orderBy?: ActionStepOrderByWithRelationInput | ActionStepOrderByWithRelationInput[]
    cursor?: ActionStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionStepScalarFieldEnum | ActionStepScalarFieldEnum[]
  }

  /**
   * Milestone without action
   */
  export type MilestoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
  }


  /**
   * Model ActionStep
   */

  export type AggregateActionStep = {
    _count: ActionStepCountAggregateOutputType | null
    _min: ActionStepMinAggregateOutputType | null
    _max: ActionStepMaxAggregateOutputType | null
  }

  export type ActionStepMinAggregateOutputType = {
    id: string | null
    type: $Enums.Type | null
    actionName: string | null
    actionDeadline: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    milestoneId: string | null
  }

  export type ActionStepMaxAggregateOutputType = {
    id: string | null
    type: $Enums.Type | null
    actionName: string | null
    actionDeadline: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    milestoneId: string | null
  }

  export type ActionStepCountAggregateOutputType = {
    id: number
    type: number
    actionName: number
    actionDeadline: number
    status: number
    createdAt: number
    updatedAt: number
    milestoneId: number
    _all: number
  }


  export type ActionStepMinAggregateInputType = {
    id?: true
    type?: true
    actionName?: true
    actionDeadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    milestoneId?: true
  }

  export type ActionStepMaxAggregateInputType = {
    id?: true
    type?: true
    actionName?: true
    actionDeadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    milestoneId?: true
  }

  export type ActionStepCountAggregateInputType = {
    id?: true
    type?: true
    actionName?: true
    actionDeadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    milestoneId?: true
    _all?: true
  }

  export type ActionStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionStep to aggregate.
     */
    where?: ActionStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionSteps to fetch.
     */
    orderBy?: ActionStepOrderByWithRelationInput | ActionStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionSteps
    **/
    _count?: true | ActionStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionStepMaxAggregateInputType
  }

  export type GetActionStepAggregateType<T extends ActionStepAggregateArgs> = {
        [P in keyof T & keyof AggregateActionStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionStep[P]>
      : GetScalarType<T[P], AggregateActionStep[P]>
  }




  export type ActionStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionStepWhereInput
    orderBy?: ActionStepOrderByWithAggregationInput | ActionStepOrderByWithAggregationInput[]
    by: ActionStepScalarFieldEnum[] | ActionStepScalarFieldEnum
    having?: ActionStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionStepCountAggregateInputType | true
    _min?: ActionStepMinAggregateInputType
    _max?: ActionStepMaxAggregateInputType
  }

  export type ActionStepGroupByOutputType = {
    id: string
    type: $Enums.Type
    actionName: string
    actionDeadline: Date
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    milestoneId: string
    _count: ActionStepCountAggregateOutputType | null
    _min: ActionStepMinAggregateOutputType | null
    _max: ActionStepMaxAggregateOutputType | null
  }

  type GetActionStepGroupByPayload<T extends ActionStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionStepGroupByOutputType[P]>
            : GetScalarType<T[P], ActionStepGroupByOutputType[P]>
        }
      >
    >


  export type ActionStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    actionName?: boolean
    actionDeadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    milestoneId?: boolean
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionStep"]>



  export type ActionStepSelectScalar = {
    id?: boolean
    type?: boolean
    actionName?: boolean
    actionDeadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    milestoneId?: boolean
  }

  export type ActionStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "actionName" | "actionDeadline" | "status" | "createdAt" | "updatedAt" | "milestoneId", ExtArgs["result"]["actionStep"]>
  export type ActionStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }

  export type $ActionStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionStep"
    objects: {
      milestone: Prisma.$MilestonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.Type
      actionName: string
      actionDeadline: Date
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
      milestoneId: string
    }, ExtArgs["result"]["actionStep"]>
    composites: {}
  }

  type ActionStepGetPayload<S extends boolean | null | undefined | ActionStepDefaultArgs> = $Result.GetResult<Prisma.$ActionStepPayload, S>

  type ActionStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionStepCountAggregateInputType | true
    }

  export interface ActionStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionStep'], meta: { name: 'ActionStep' } }
    /**
     * Find zero or one ActionStep that matches the filter.
     * @param {ActionStepFindUniqueArgs} args - Arguments to find a ActionStep
     * @example
     * // Get one ActionStep
     * const actionStep = await prisma.actionStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionStepFindUniqueArgs>(args: SelectSubset<T, ActionStepFindUniqueArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActionStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionStepFindUniqueOrThrowArgs} args - Arguments to find a ActionStep
     * @example
     * // Get one ActionStep
     * const actionStep = await prisma.actionStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionStepFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepFindFirstArgs} args - Arguments to find a ActionStep
     * @example
     * // Get one ActionStep
     * const actionStep = await prisma.actionStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionStepFindFirstArgs>(args?: SelectSubset<T, ActionStepFindFirstArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepFindFirstOrThrowArgs} args - Arguments to find a ActionStep
     * @example
     * // Get one ActionStep
     * const actionStep = await prisma.actionStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionStepFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActionSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionSteps
     * const actionSteps = await prisma.actionStep.findMany()
     * 
     * // Get first 10 ActionSteps
     * const actionSteps = await prisma.actionStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionStepWithIdOnly = await prisma.actionStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionStepFindManyArgs>(args?: SelectSubset<T, ActionStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActionStep.
     * @param {ActionStepCreateArgs} args - Arguments to create a ActionStep.
     * @example
     * // Create one ActionStep
     * const ActionStep = await prisma.actionStep.create({
     *   data: {
     *     // ... data to create a ActionStep
     *   }
     * })
     * 
     */
    create<T extends ActionStepCreateArgs>(args: SelectSubset<T, ActionStepCreateArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActionSteps.
     * @param {ActionStepCreateManyArgs} args - Arguments to create many ActionSteps.
     * @example
     * // Create many ActionSteps
     * const actionStep = await prisma.actionStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionStepCreateManyArgs>(args?: SelectSubset<T, ActionStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ActionStep.
     * @param {ActionStepDeleteArgs} args - Arguments to delete one ActionStep.
     * @example
     * // Delete one ActionStep
     * const ActionStep = await prisma.actionStep.delete({
     *   where: {
     *     // ... filter to delete one ActionStep
     *   }
     * })
     * 
     */
    delete<T extends ActionStepDeleteArgs>(args: SelectSubset<T, ActionStepDeleteArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActionStep.
     * @param {ActionStepUpdateArgs} args - Arguments to update one ActionStep.
     * @example
     * // Update one ActionStep
     * const actionStep = await prisma.actionStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionStepUpdateArgs>(args: SelectSubset<T, ActionStepUpdateArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActionSteps.
     * @param {ActionStepDeleteManyArgs} args - Arguments to filter ActionSteps to delete.
     * @example
     * // Delete a few ActionSteps
     * const { count } = await prisma.actionStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionStepDeleteManyArgs>(args?: SelectSubset<T, ActionStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionSteps
     * const actionStep = await prisma.actionStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionStepUpdateManyArgs>(args: SelectSubset<T, ActionStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActionStep.
     * @param {ActionStepUpsertArgs} args - Arguments to update or create a ActionStep.
     * @example
     * // Update or create a ActionStep
     * const actionStep = await prisma.actionStep.upsert({
     *   create: {
     *     // ... data to create a ActionStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionStep we want to update
     *   }
     * })
     */
    upsert<T extends ActionStepUpsertArgs>(args: SelectSubset<T, ActionStepUpsertArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActionSteps that matches the filter.
     * @param {ActionStepFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const actionStep = await prisma.actionStep.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ActionStepFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ActionStep.
     * @param {ActionStepAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const actionStep = await prisma.actionStep.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ActionStepAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ActionSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepCountArgs} args - Arguments to filter ActionSteps to count.
     * @example
     * // Count the number of ActionSteps
     * const count = await prisma.actionStep.count({
     *   where: {
     *     // ... the filter for the ActionSteps we want to count
     *   }
     * })
    **/
    count<T extends ActionStepCountArgs>(
      args?: Subset<T, ActionStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionStepAggregateArgs>(args: Subset<T, ActionStepAggregateArgs>): Prisma.PrismaPromise<GetActionStepAggregateType<T>>

    /**
     * Group by ActionStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepGroupByArgs} args - Group by arguments.
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
      T extends ActionStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionStepGroupByArgs['orderBy'] }
        : { orderBy?: ActionStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActionStep model
   */
  readonly fields: ActionStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    milestone<T extends MilestoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MilestoneDefaultArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActionStep model
   */
  interface ActionStepFieldRefs {
    readonly id: FieldRef<"ActionStep", 'String'>
    readonly type: FieldRef<"ActionStep", 'Type'>
    readonly actionName: FieldRef<"ActionStep", 'String'>
    readonly actionDeadline: FieldRef<"ActionStep", 'DateTime'>
    readonly status: FieldRef<"ActionStep", 'Status'>
    readonly createdAt: FieldRef<"ActionStep", 'DateTime'>
    readonly updatedAt: FieldRef<"ActionStep", 'DateTime'>
    readonly milestoneId: FieldRef<"ActionStep", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActionStep findUnique
   */
  export type ActionStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * Filter, which ActionStep to fetch.
     */
    where: ActionStepWhereUniqueInput
  }

  /**
   * ActionStep findUniqueOrThrow
   */
  export type ActionStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * Filter, which ActionStep to fetch.
     */
    where: ActionStepWhereUniqueInput
  }

  /**
   * ActionStep findFirst
   */
  export type ActionStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * Filter, which ActionStep to fetch.
     */
    where?: ActionStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionSteps to fetch.
     */
    orderBy?: ActionStepOrderByWithRelationInput | ActionStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionSteps.
     */
    cursor?: ActionStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionSteps.
     */
    distinct?: ActionStepScalarFieldEnum | ActionStepScalarFieldEnum[]
  }

  /**
   * ActionStep findFirstOrThrow
   */
  export type ActionStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * Filter, which ActionStep to fetch.
     */
    where?: ActionStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionSteps to fetch.
     */
    orderBy?: ActionStepOrderByWithRelationInput | ActionStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionSteps.
     */
    cursor?: ActionStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionSteps.
     */
    distinct?: ActionStepScalarFieldEnum | ActionStepScalarFieldEnum[]
  }

  /**
   * ActionStep findMany
   */
  export type ActionStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * Filter, which ActionSteps to fetch.
     */
    where?: ActionStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionSteps to fetch.
     */
    orderBy?: ActionStepOrderByWithRelationInput | ActionStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionSteps.
     */
    cursor?: ActionStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionSteps.
     */
    skip?: number
    distinct?: ActionStepScalarFieldEnum | ActionStepScalarFieldEnum[]
  }

  /**
   * ActionStep create
   */
  export type ActionStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * The data needed to create a ActionStep.
     */
    data: XOR<ActionStepCreateInput, ActionStepUncheckedCreateInput>
  }

  /**
   * ActionStep createMany
   */
  export type ActionStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionSteps.
     */
    data: ActionStepCreateManyInput | ActionStepCreateManyInput[]
  }

  /**
   * ActionStep update
   */
  export type ActionStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * The data needed to update a ActionStep.
     */
    data: XOR<ActionStepUpdateInput, ActionStepUncheckedUpdateInput>
    /**
     * Choose, which ActionStep to update.
     */
    where: ActionStepWhereUniqueInput
  }

  /**
   * ActionStep updateMany
   */
  export type ActionStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionSteps.
     */
    data: XOR<ActionStepUpdateManyMutationInput, ActionStepUncheckedUpdateManyInput>
    /**
     * Filter which ActionSteps to update
     */
    where?: ActionStepWhereInput
    /**
     * Limit how many ActionSteps to update.
     */
    limit?: number
  }

  /**
   * ActionStep upsert
   */
  export type ActionStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * The filter to search for the ActionStep to update in case it exists.
     */
    where: ActionStepWhereUniqueInput
    /**
     * In case the ActionStep found by the `where` argument doesn't exist, create a new ActionStep with this data.
     */
    create: XOR<ActionStepCreateInput, ActionStepUncheckedCreateInput>
    /**
     * In case the ActionStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionStepUpdateInput, ActionStepUncheckedUpdateInput>
  }

  /**
   * ActionStep delete
   */
  export type ActionStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * Filter which ActionStep to delete.
     */
    where: ActionStepWhereUniqueInput
  }

  /**
   * ActionStep deleteMany
   */
  export type ActionStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionSteps to delete
     */
    where?: ActionStepWhereInput
    /**
     * Limit how many ActionSteps to delete.
     */
    limit?: number
  }

  /**
   * ActionStep findRaw
   */
  export type ActionStepFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ActionStep aggregateRaw
   */
  export type ActionStepAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ActionStep without action
   */
  export type ActionStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const VisionScalarFieldEnum: {
    id: 'id',
    visionTitle: 'visionTitle',
    visionDescription: 'visionDescription',
    status: 'status',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisionScalarFieldEnum = (typeof VisionScalarFieldEnum)[keyof typeof VisionScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    type: 'type',
    goalTitle: 'goalTitle',
    deadline: 'deadline',
    outcome: 'outcome',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    visionId: 'visionId'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const MilestoneScalarFieldEnum: {
    id: 'id',
    type: 'type',
    milestoneName: 'milestoneName',
    milestoneDeadline: 'milestoneDeadline',
    milestoneOutcome: 'milestoneOutcome',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    goalId: 'goalId'
  };

  export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum]


  export const ActionStepScalarFieldEnum: {
    id: 'id',
    type: 'type',
    actionName: 'actionName',
    actionDeadline: 'actionDeadline',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    milestoneId: 'milestoneId'
  };

  export type ActionStepScalarFieldEnum = (typeof ActionStepScalarFieldEnum)[keyof typeof ActionStepScalarFieldEnum]


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
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


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
   * Deep Input Types
   */


  export type VisionWhereInput = {
    AND?: VisionWhereInput | VisionWhereInput[]
    OR?: VisionWhereInput[]
    NOT?: VisionWhereInput | VisionWhereInput[]
    id?: StringFilter<"Vision"> | string
    visionTitle?: StringFilter<"Vision"> | string
    visionDescription?: StringFilter<"Vision"> | string
    status?: EnumStatusFilter<"Vision"> | $Enums.Status
    type?: EnumTypeFilter<"Vision"> | $Enums.Type
    createdAt?: DateTimeFilter<"Vision"> | Date | string
    updatedAt?: DateTimeFilter<"Vision"> | Date | string
    goals?: GoalListRelationFilter
  }

  export type VisionOrderByWithRelationInput = {
    id?: SortOrder
    visionTitle?: SortOrder
    visionDescription?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    goals?: GoalOrderByRelationAggregateInput
  }

  export type VisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VisionWhereInput | VisionWhereInput[]
    OR?: VisionWhereInput[]
    NOT?: VisionWhereInput | VisionWhereInput[]
    visionTitle?: StringFilter<"Vision"> | string
    visionDescription?: StringFilter<"Vision"> | string
    status?: EnumStatusFilter<"Vision"> | $Enums.Status
    type?: EnumTypeFilter<"Vision"> | $Enums.Type
    createdAt?: DateTimeFilter<"Vision"> | Date | string
    updatedAt?: DateTimeFilter<"Vision"> | Date | string
    goals?: GoalListRelationFilter
  }, "id">

  export type VisionOrderByWithAggregationInput = {
    id?: SortOrder
    visionTitle?: SortOrder
    visionDescription?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisionCountOrderByAggregateInput
    _max?: VisionMaxOrderByAggregateInput
    _min?: VisionMinOrderByAggregateInput
  }

  export type VisionScalarWhereWithAggregatesInput = {
    AND?: VisionScalarWhereWithAggregatesInput | VisionScalarWhereWithAggregatesInput[]
    OR?: VisionScalarWhereWithAggregatesInput[]
    NOT?: VisionScalarWhereWithAggregatesInput | VisionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vision"> | string
    visionTitle?: StringWithAggregatesFilter<"Vision"> | string
    visionDescription?: StringWithAggregatesFilter<"Vision"> | string
    status?: EnumStatusWithAggregatesFilter<"Vision"> | $Enums.Status
    type?: EnumTypeWithAggregatesFilter<"Vision"> | $Enums.Type
    createdAt?: DateTimeWithAggregatesFilter<"Vision"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vision"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    type?: EnumTypeFilter<"Goal"> | $Enums.Type
    goalTitle?: StringFilter<"Goal"> | string
    deadline?: DateTimeFilter<"Goal"> | Date | string
    outcome?: StringFilter<"Goal"> | string
    status?: EnumStatusFilter<"Goal"> | $Enums.Status
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    visionId?: StringFilter<"Goal"> | string
    vision?: XOR<VisionScalarRelationFilter, VisionWhereInput>
    milestones?: MilestoneListRelationFilter
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    goalTitle?: SortOrder
    deadline?: SortOrder
    outcome?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    visionId?: SortOrder
    vision?: VisionOrderByWithRelationInput
    milestones?: MilestoneOrderByRelationAggregateInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    type?: EnumTypeFilter<"Goal"> | $Enums.Type
    goalTitle?: StringFilter<"Goal"> | string
    deadline?: DateTimeFilter<"Goal"> | Date | string
    outcome?: StringFilter<"Goal"> | string
    status?: EnumStatusFilter<"Goal"> | $Enums.Status
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    visionId?: StringFilter<"Goal"> | string
    vision?: XOR<VisionScalarRelationFilter, VisionWhereInput>
    milestones?: MilestoneListRelationFilter
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    goalTitle?: SortOrder
    deadline?: SortOrder
    outcome?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    visionId?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    type?: EnumTypeWithAggregatesFilter<"Goal"> | $Enums.Type
    goalTitle?: StringWithAggregatesFilter<"Goal"> | string
    deadline?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    outcome?: StringWithAggregatesFilter<"Goal"> | string
    status?: EnumStatusWithAggregatesFilter<"Goal"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    visionId?: StringWithAggregatesFilter<"Goal"> | string
  }

  export type MilestoneWhereInput = {
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    id?: StringFilter<"Milestone"> | string
    type?: EnumTypeFilter<"Milestone"> | $Enums.Type
    milestoneName?: StringFilter<"Milestone"> | string
    milestoneDeadline?: DateTimeFilter<"Milestone"> | Date | string
    milestoneOutcome?: StringFilter<"Milestone"> | string
    status?: EnumStatusFilter<"Milestone"> | $Enums.Status
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    goalId?: StringFilter<"Milestone"> | string
    goal?: XOR<GoalScalarRelationFilter, GoalWhereInput>
    actionSteps?: ActionStepListRelationFilter
  }

  export type MilestoneOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    milestoneName?: SortOrder
    milestoneDeadline?: SortOrder
    milestoneOutcome?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    goalId?: SortOrder
    goal?: GoalOrderByWithRelationInput
    actionSteps?: ActionStepOrderByRelationAggregateInput
  }

  export type MilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    type?: EnumTypeFilter<"Milestone"> | $Enums.Type
    milestoneName?: StringFilter<"Milestone"> | string
    milestoneDeadline?: DateTimeFilter<"Milestone"> | Date | string
    milestoneOutcome?: StringFilter<"Milestone"> | string
    status?: EnumStatusFilter<"Milestone"> | $Enums.Status
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    goalId?: StringFilter<"Milestone"> | string
    goal?: XOR<GoalScalarRelationFilter, GoalWhereInput>
    actionSteps?: ActionStepListRelationFilter
  }, "id">

  export type MilestoneOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    milestoneName?: SortOrder
    milestoneDeadline?: SortOrder
    milestoneOutcome?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    goalId?: SortOrder
    _count?: MilestoneCountOrderByAggregateInput
    _max?: MilestoneMaxOrderByAggregateInput
    _min?: MilestoneMinOrderByAggregateInput
  }

  export type MilestoneScalarWhereWithAggregatesInput = {
    AND?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    OR?: MilestoneScalarWhereWithAggregatesInput[]
    NOT?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Milestone"> | string
    type?: EnumTypeWithAggregatesFilter<"Milestone"> | $Enums.Type
    milestoneName?: StringWithAggregatesFilter<"Milestone"> | string
    milestoneDeadline?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    milestoneOutcome?: StringWithAggregatesFilter<"Milestone"> | string
    status?: EnumStatusWithAggregatesFilter<"Milestone"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    goalId?: StringWithAggregatesFilter<"Milestone"> | string
  }

  export type ActionStepWhereInput = {
    AND?: ActionStepWhereInput | ActionStepWhereInput[]
    OR?: ActionStepWhereInput[]
    NOT?: ActionStepWhereInput | ActionStepWhereInput[]
    id?: StringFilter<"ActionStep"> | string
    type?: EnumTypeFilter<"ActionStep"> | $Enums.Type
    actionName?: StringFilter<"ActionStep"> | string
    actionDeadline?: DateTimeFilter<"ActionStep"> | Date | string
    status?: EnumStatusFilter<"ActionStep"> | $Enums.Status
    createdAt?: DateTimeFilter<"ActionStep"> | Date | string
    updatedAt?: DateTimeFilter<"ActionStep"> | Date | string
    milestoneId?: StringFilter<"ActionStep"> | string
    milestone?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
  }

  export type ActionStepOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    actionName?: SortOrder
    actionDeadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    milestoneId?: SortOrder
    milestone?: MilestoneOrderByWithRelationInput
  }

  export type ActionStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionStepWhereInput | ActionStepWhereInput[]
    OR?: ActionStepWhereInput[]
    NOT?: ActionStepWhereInput | ActionStepWhereInput[]
    type?: EnumTypeFilter<"ActionStep"> | $Enums.Type
    actionName?: StringFilter<"ActionStep"> | string
    actionDeadline?: DateTimeFilter<"ActionStep"> | Date | string
    status?: EnumStatusFilter<"ActionStep"> | $Enums.Status
    createdAt?: DateTimeFilter<"ActionStep"> | Date | string
    updatedAt?: DateTimeFilter<"ActionStep"> | Date | string
    milestoneId?: StringFilter<"ActionStep"> | string
    milestone?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
  }, "id">

  export type ActionStepOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    actionName?: SortOrder
    actionDeadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    milestoneId?: SortOrder
    _count?: ActionStepCountOrderByAggregateInput
    _max?: ActionStepMaxOrderByAggregateInput
    _min?: ActionStepMinOrderByAggregateInput
  }

  export type ActionStepScalarWhereWithAggregatesInput = {
    AND?: ActionStepScalarWhereWithAggregatesInput | ActionStepScalarWhereWithAggregatesInput[]
    OR?: ActionStepScalarWhereWithAggregatesInput[]
    NOT?: ActionStepScalarWhereWithAggregatesInput | ActionStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActionStep"> | string
    type?: EnumTypeWithAggregatesFilter<"ActionStep"> | $Enums.Type
    actionName?: StringWithAggregatesFilter<"ActionStep"> | string
    actionDeadline?: DateTimeWithAggregatesFilter<"ActionStep"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"ActionStep"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"ActionStep"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ActionStep"> | Date | string
    milestoneId?: StringWithAggregatesFilter<"ActionStep"> | string
  }

  export type VisionCreateInput = {
    id?: string
    visionTitle: string
    visionDescription: string
    status?: $Enums.Status
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutVisionInput
  }

  export type VisionUncheckedCreateInput = {
    id?: string
    visionTitle: string
    visionDescription: string
    status?: $Enums.Status
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutVisionInput
  }

  export type VisionUpdateInput = {
    visionTitle?: StringFieldUpdateOperationsInput | string
    visionDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutVisionNestedInput
  }

  export type VisionUncheckedUpdateInput = {
    visionTitle?: StringFieldUpdateOperationsInput | string
    visionDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutVisionNestedInput
  }

  export type VisionCreateManyInput = {
    id?: string
    visionTitle: string
    visionDescription: string
    status?: $Enums.Status
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisionUpdateManyMutationInput = {
    visionTitle?: StringFieldUpdateOperationsInput | string
    visionDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisionUncheckedUpdateManyInput = {
    visionTitle?: StringFieldUpdateOperationsInput | string
    visionDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    type: $Enums.Type
    goalTitle: string
    deadline: Date | string
    outcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    vision: VisionCreateNestedOneWithoutGoalsInput
    milestones?: MilestoneCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    type: $Enums.Type
    goalTitle: string
    deadline: Date | string
    outcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    visionId: string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalUpdateInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    goalTitle?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vision?: VisionUpdateOneRequiredWithoutGoalsNestedInput
    milestones?: MilestoneUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    goalTitle?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visionId?: StringFieldUpdateOperationsInput | string
    milestones?: MilestoneUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalCreateManyInput = {
    id?: string
    type: $Enums.Type
    goalTitle: string
    deadline: Date | string
    outcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    visionId: string
  }

  export type GoalUpdateManyMutationInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    goalTitle?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    goalTitle?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visionId?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneCreateInput = {
    id?: string
    type: $Enums.Type
    milestoneName: string
    milestoneDeadline: Date | string
    milestoneOutcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    goal: GoalCreateNestedOneWithoutMilestonesInput
    actionSteps?: ActionStepCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateInput = {
    id?: string
    type: $Enums.Type
    milestoneName: string
    milestoneDeadline: Date | string
    milestoneOutcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    goalId: string
    actionSteps?: ActionStepUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUpdateInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    milestoneName?: StringFieldUpdateOperationsInput | string
    milestoneDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    milestoneOutcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneRequiredWithoutMilestonesNestedInput
    actionSteps?: ActionStepUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    milestoneName?: StringFieldUpdateOperationsInput | string
    milestoneDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    milestoneOutcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalId?: StringFieldUpdateOperationsInput | string
    actionSteps?: ActionStepUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneCreateManyInput = {
    id?: string
    type: $Enums.Type
    milestoneName: string
    milestoneDeadline: Date | string
    milestoneOutcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    goalId: string
  }

  export type MilestoneUpdateManyMutationInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    milestoneName?: StringFieldUpdateOperationsInput | string
    milestoneDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    milestoneOutcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateManyInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    milestoneName?: StringFieldUpdateOperationsInput | string
    milestoneDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    milestoneOutcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionStepCreateInput = {
    id?: string
    type: $Enums.Type
    actionName: string
    actionDeadline: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    milestone: MilestoneCreateNestedOneWithoutActionStepsInput
  }

  export type ActionStepUncheckedCreateInput = {
    id?: string
    type: $Enums.Type
    actionName: string
    actionDeadline: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    milestoneId: string
  }

  export type ActionStepUpdateInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    actionName?: StringFieldUpdateOperationsInput | string
    actionDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestone?: MilestoneUpdateOneRequiredWithoutActionStepsNestedInput
  }

  export type ActionStepUncheckedUpdateInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    actionName?: StringFieldUpdateOperationsInput | string
    actionDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestoneId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionStepCreateManyInput = {
    id?: string
    type: $Enums.Type
    actionName: string
    actionDeadline: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    milestoneId: string
  }

  export type ActionStepUpdateManyMutationInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    actionName?: StringFieldUpdateOperationsInput | string
    actionDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionStepUncheckedUpdateManyInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    actionName?: StringFieldUpdateOperationsInput | string
    actionDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestoneId?: StringFieldUpdateOperationsInput | string
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
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

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisionCountOrderByAggregateInput = {
    id?: SortOrder
    visionTitle?: SortOrder
    visionDescription?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisionMaxOrderByAggregateInput = {
    id?: SortOrder
    visionTitle?: SortOrder
    visionDescription?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisionMinOrderByAggregateInput = {
    id?: SortOrder
    visionTitle?: SortOrder
    visionDescription?: SortOrder
    status?: SortOrder
    type?: SortOrder
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
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

  export type VisionScalarRelationFilter = {
    is?: VisionWhereInput
    isNot?: VisionWhereInput
  }

  export type MilestoneListRelationFilter = {
    every?: MilestoneWhereInput
    some?: MilestoneWhereInput
    none?: MilestoneWhereInput
  }

  export type MilestoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    goalTitle?: SortOrder
    deadline?: SortOrder
    outcome?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    visionId?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    goalTitle?: SortOrder
    deadline?: SortOrder
    outcome?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    visionId?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    goalTitle?: SortOrder
    deadline?: SortOrder
    outcome?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    visionId?: SortOrder
  }

  export type GoalScalarRelationFilter = {
    is?: GoalWhereInput
    isNot?: GoalWhereInput
  }

  export type ActionStepListRelationFilter = {
    every?: ActionStepWhereInput
    some?: ActionStepWhereInput
    none?: ActionStepWhereInput
  }

  export type ActionStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MilestoneCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    milestoneName?: SortOrder
    milestoneDeadline?: SortOrder
    milestoneOutcome?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    goalId?: SortOrder
  }

  export type MilestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    milestoneName?: SortOrder
    milestoneDeadline?: SortOrder
    milestoneOutcome?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    goalId?: SortOrder
  }

  export type MilestoneMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    milestoneName?: SortOrder
    milestoneDeadline?: SortOrder
    milestoneOutcome?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    goalId?: SortOrder
  }

  export type MilestoneScalarRelationFilter = {
    is?: MilestoneWhereInput
    isNot?: MilestoneWhereInput
  }

  export type ActionStepCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    actionName?: SortOrder
    actionDeadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    milestoneId?: SortOrder
  }

  export type ActionStepMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    actionName?: SortOrder
    actionDeadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    milestoneId?: SortOrder
  }

  export type ActionStepMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    actionName?: SortOrder
    actionDeadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    milestoneId?: SortOrder
  }

  export type GoalCreateNestedManyWithoutVisionInput = {
    create?: XOR<GoalCreateWithoutVisionInput, GoalUncheckedCreateWithoutVisionInput> | GoalCreateWithoutVisionInput[] | GoalUncheckedCreateWithoutVisionInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutVisionInput | GoalCreateOrConnectWithoutVisionInput[]
    createMany?: GoalCreateManyVisionInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutVisionInput = {
    create?: XOR<GoalCreateWithoutVisionInput, GoalUncheckedCreateWithoutVisionInput> | GoalCreateWithoutVisionInput[] | GoalUncheckedCreateWithoutVisionInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutVisionInput | GoalCreateOrConnectWithoutVisionInput[]
    createMany?: GoalCreateManyVisionInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GoalUpdateManyWithoutVisionNestedInput = {
    create?: XOR<GoalCreateWithoutVisionInput, GoalUncheckedCreateWithoutVisionInput> | GoalCreateWithoutVisionInput[] | GoalUncheckedCreateWithoutVisionInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutVisionInput | GoalCreateOrConnectWithoutVisionInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutVisionInput | GoalUpsertWithWhereUniqueWithoutVisionInput[]
    createMany?: GoalCreateManyVisionInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutVisionInput | GoalUpdateWithWhereUniqueWithoutVisionInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutVisionInput | GoalUpdateManyWithWhereWithoutVisionInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutVisionNestedInput = {
    create?: XOR<GoalCreateWithoutVisionInput, GoalUncheckedCreateWithoutVisionInput> | GoalCreateWithoutVisionInput[] | GoalUncheckedCreateWithoutVisionInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutVisionInput | GoalCreateOrConnectWithoutVisionInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutVisionInput | GoalUpsertWithWhereUniqueWithoutVisionInput[]
    createMany?: GoalCreateManyVisionInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutVisionInput | GoalUpdateWithWhereUniqueWithoutVisionInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutVisionInput | GoalUpdateManyWithWhereWithoutVisionInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type VisionCreateNestedOneWithoutGoalsInput = {
    create?: XOR<VisionCreateWithoutGoalsInput, VisionUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: VisionCreateOrConnectWithoutGoalsInput
    connect?: VisionWhereUniqueInput
  }

  export type MilestoneCreateNestedManyWithoutGoalInput = {
    create?: XOR<MilestoneCreateWithoutGoalInput, MilestoneUncheckedCreateWithoutGoalInput> | MilestoneCreateWithoutGoalInput[] | MilestoneUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutGoalInput | MilestoneCreateOrConnectWithoutGoalInput[]
    createMany?: MilestoneCreateManyGoalInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type MilestoneUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<MilestoneCreateWithoutGoalInput, MilestoneUncheckedCreateWithoutGoalInput> | MilestoneCreateWithoutGoalInput[] | MilestoneUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutGoalInput | MilestoneCreateOrConnectWithoutGoalInput[]
    createMany?: MilestoneCreateManyGoalInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type VisionUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<VisionCreateWithoutGoalsInput, VisionUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: VisionCreateOrConnectWithoutGoalsInput
    upsert?: VisionUpsertWithoutGoalsInput
    connect?: VisionWhereUniqueInput
    update?: XOR<XOR<VisionUpdateToOneWithWhereWithoutGoalsInput, VisionUpdateWithoutGoalsInput>, VisionUncheckedUpdateWithoutGoalsInput>
  }

  export type MilestoneUpdateManyWithoutGoalNestedInput = {
    create?: XOR<MilestoneCreateWithoutGoalInput, MilestoneUncheckedCreateWithoutGoalInput> | MilestoneCreateWithoutGoalInput[] | MilestoneUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutGoalInput | MilestoneCreateOrConnectWithoutGoalInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutGoalInput | MilestoneUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: MilestoneCreateManyGoalInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutGoalInput | MilestoneUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutGoalInput | MilestoneUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type MilestoneUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<MilestoneCreateWithoutGoalInput, MilestoneUncheckedCreateWithoutGoalInput> | MilestoneCreateWithoutGoalInput[] | MilestoneUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutGoalInput | MilestoneCreateOrConnectWithoutGoalInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutGoalInput | MilestoneUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: MilestoneCreateManyGoalInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutGoalInput | MilestoneUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutGoalInput | MilestoneUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type GoalCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<GoalCreateWithoutMilestonesInput, GoalUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: GoalCreateOrConnectWithoutMilestonesInput
    connect?: GoalWhereUniqueInput
  }

  export type ActionStepCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<ActionStepCreateWithoutMilestoneInput, ActionStepUncheckedCreateWithoutMilestoneInput> | ActionStepCreateWithoutMilestoneInput[] | ActionStepUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: ActionStepCreateOrConnectWithoutMilestoneInput | ActionStepCreateOrConnectWithoutMilestoneInput[]
    createMany?: ActionStepCreateManyMilestoneInputEnvelope
    connect?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
  }

  export type ActionStepUncheckedCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<ActionStepCreateWithoutMilestoneInput, ActionStepUncheckedCreateWithoutMilestoneInput> | ActionStepCreateWithoutMilestoneInput[] | ActionStepUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: ActionStepCreateOrConnectWithoutMilestoneInput | ActionStepCreateOrConnectWithoutMilestoneInput[]
    createMany?: ActionStepCreateManyMilestoneInputEnvelope
    connect?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
  }

  export type GoalUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: XOR<GoalCreateWithoutMilestonesInput, GoalUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: GoalCreateOrConnectWithoutMilestonesInput
    upsert?: GoalUpsertWithoutMilestonesInput
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutMilestonesInput, GoalUpdateWithoutMilestonesInput>, GoalUncheckedUpdateWithoutMilestonesInput>
  }

  export type ActionStepUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<ActionStepCreateWithoutMilestoneInput, ActionStepUncheckedCreateWithoutMilestoneInput> | ActionStepCreateWithoutMilestoneInput[] | ActionStepUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: ActionStepCreateOrConnectWithoutMilestoneInput | ActionStepCreateOrConnectWithoutMilestoneInput[]
    upsert?: ActionStepUpsertWithWhereUniqueWithoutMilestoneInput | ActionStepUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: ActionStepCreateManyMilestoneInputEnvelope
    set?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    disconnect?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    delete?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    connect?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    update?: ActionStepUpdateWithWhereUniqueWithoutMilestoneInput | ActionStepUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: ActionStepUpdateManyWithWhereWithoutMilestoneInput | ActionStepUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: ActionStepScalarWhereInput | ActionStepScalarWhereInput[]
  }

  export type ActionStepUncheckedUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<ActionStepCreateWithoutMilestoneInput, ActionStepUncheckedCreateWithoutMilestoneInput> | ActionStepCreateWithoutMilestoneInput[] | ActionStepUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: ActionStepCreateOrConnectWithoutMilestoneInput | ActionStepCreateOrConnectWithoutMilestoneInput[]
    upsert?: ActionStepUpsertWithWhereUniqueWithoutMilestoneInput | ActionStepUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: ActionStepCreateManyMilestoneInputEnvelope
    set?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    disconnect?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    delete?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    connect?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    update?: ActionStepUpdateWithWhereUniqueWithoutMilestoneInput | ActionStepUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: ActionStepUpdateManyWithWhereWithoutMilestoneInput | ActionStepUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: ActionStepScalarWhereInput | ActionStepScalarWhereInput[]
  }

  export type MilestoneCreateNestedOneWithoutActionStepsInput = {
    create?: XOR<MilestoneCreateWithoutActionStepsInput, MilestoneUncheckedCreateWithoutActionStepsInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutActionStepsInput
    connect?: MilestoneWhereUniqueInput
  }

  export type MilestoneUpdateOneRequiredWithoutActionStepsNestedInput = {
    create?: XOR<MilestoneCreateWithoutActionStepsInput, MilestoneUncheckedCreateWithoutActionStepsInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutActionStepsInput
    upsert?: MilestoneUpsertWithoutActionStepsInput
    connect?: MilestoneWhereUniqueInput
    update?: XOR<XOR<MilestoneUpdateToOneWithWhereWithoutActionStepsInput, MilestoneUpdateWithoutActionStepsInput>, MilestoneUncheckedUpdateWithoutActionStepsInput>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
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

  export type GoalCreateWithoutVisionInput = {
    id?: string
    type: $Enums.Type
    goalTitle: string
    deadline: Date | string
    outcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutVisionInput = {
    id?: string
    type: $Enums.Type
    goalTitle: string
    deadline: Date | string
    outcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutVisionInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutVisionInput, GoalUncheckedCreateWithoutVisionInput>
  }

  export type GoalCreateManyVisionInputEnvelope = {
    data: GoalCreateManyVisionInput | GoalCreateManyVisionInput[]
  }

  export type GoalUpsertWithWhereUniqueWithoutVisionInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutVisionInput, GoalUncheckedUpdateWithoutVisionInput>
    create: XOR<GoalCreateWithoutVisionInput, GoalUncheckedCreateWithoutVisionInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutVisionInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutVisionInput, GoalUncheckedUpdateWithoutVisionInput>
  }

  export type GoalUpdateManyWithWhereWithoutVisionInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutVisionInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    type?: EnumTypeFilter<"Goal"> | $Enums.Type
    goalTitle?: StringFilter<"Goal"> | string
    deadline?: DateTimeFilter<"Goal"> | Date | string
    outcome?: StringFilter<"Goal"> | string
    status?: EnumStatusFilter<"Goal"> | $Enums.Status
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    visionId?: StringFilter<"Goal"> | string
  }

  export type VisionCreateWithoutGoalsInput = {
    id?: string
    visionTitle: string
    visionDescription: string
    status?: $Enums.Status
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisionUncheckedCreateWithoutGoalsInput = {
    id?: string
    visionTitle: string
    visionDescription: string
    status?: $Enums.Status
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisionCreateOrConnectWithoutGoalsInput = {
    where: VisionWhereUniqueInput
    create: XOR<VisionCreateWithoutGoalsInput, VisionUncheckedCreateWithoutGoalsInput>
  }

  export type MilestoneCreateWithoutGoalInput = {
    id?: string
    type: $Enums.Type
    milestoneName: string
    milestoneDeadline: Date | string
    milestoneOutcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    actionSteps?: ActionStepCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateWithoutGoalInput = {
    id?: string
    type: $Enums.Type
    milestoneName: string
    milestoneDeadline: Date | string
    milestoneOutcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    actionSteps?: ActionStepUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneCreateOrConnectWithoutGoalInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutGoalInput, MilestoneUncheckedCreateWithoutGoalInput>
  }

  export type MilestoneCreateManyGoalInputEnvelope = {
    data: MilestoneCreateManyGoalInput | MilestoneCreateManyGoalInput[]
  }

  export type VisionUpsertWithoutGoalsInput = {
    update: XOR<VisionUpdateWithoutGoalsInput, VisionUncheckedUpdateWithoutGoalsInput>
    create: XOR<VisionCreateWithoutGoalsInput, VisionUncheckedCreateWithoutGoalsInput>
    where?: VisionWhereInput
  }

  export type VisionUpdateToOneWithWhereWithoutGoalsInput = {
    where?: VisionWhereInput
    data: XOR<VisionUpdateWithoutGoalsInput, VisionUncheckedUpdateWithoutGoalsInput>
  }

  export type VisionUpdateWithoutGoalsInput = {
    visionTitle?: StringFieldUpdateOperationsInput | string
    visionDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisionUncheckedUpdateWithoutGoalsInput = {
    visionTitle?: StringFieldUpdateOperationsInput | string
    visionDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUpsertWithWhereUniqueWithoutGoalInput = {
    where: MilestoneWhereUniqueInput
    update: XOR<MilestoneUpdateWithoutGoalInput, MilestoneUncheckedUpdateWithoutGoalInput>
    create: XOR<MilestoneCreateWithoutGoalInput, MilestoneUncheckedCreateWithoutGoalInput>
  }

  export type MilestoneUpdateWithWhereUniqueWithoutGoalInput = {
    where: MilestoneWhereUniqueInput
    data: XOR<MilestoneUpdateWithoutGoalInput, MilestoneUncheckedUpdateWithoutGoalInput>
  }

  export type MilestoneUpdateManyWithWhereWithoutGoalInput = {
    where: MilestoneScalarWhereInput
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyWithoutGoalInput>
  }

  export type MilestoneScalarWhereInput = {
    AND?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    OR?: MilestoneScalarWhereInput[]
    NOT?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    id?: StringFilter<"Milestone"> | string
    type?: EnumTypeFilter<"Milestone"> | $Enums.Type
    milestoneName?: StringFilter<"Milestone"> | string
    milestoneDeadline?: DateTimeFilter<"Milestone"> | Date | string
    milestoneOutcome?: StringFilter<"Milestone"> | string
    status?: EnumStatusFilter<"Milestone"> | $Enums.Status
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    goalId?: StringFilter<"Milestone"> | string
  }

  export type GoalCreateWithoutMilestonesInput = {
    id?: string
    type: $Enums.Type
    goalTitle: string
    deadline: Date | string
    outcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    vision: VisionCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateWithoutMilestonesInput = {
    id?: string
    type: $Enums.Type
    goalTitle: string
    deadline: Date | string
    outcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    visionId: string
  }

  export type GoalCreateOrConnectWithoutMilestonesInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutMilestonesInput, GoalUncheckedCreateWithoutMilestonesInput>
  }

  export type ActionStepCreateWithoutMilestoneInput = {
    id?: string
    type: $Enums.Type
    actionName: string
    actionDeadline: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActionStepUncheckedCreateWithoutMilestoneInput = {
    id?: string
    type: $Enums.Type
    actionName: string
    actionDeadline: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActionStepCreateOrConnectWithoutMilestoneInput = {
    where: ActionStepWhereUniqueInput
    create: XOR<ActionStepCreateWithoutMilestoneInput, ActionStepUncheckedCreateWithoutMilestoneInput>
  }

  export type ActionStepCreateManyMilestoneInputEnvelope = {
    data: ActionStepCreateManyMilestoneInput | ActionStepCreateManyMilestoneInput[]
  }

  export type GoalUpsertWithoutMilestonesInput = {
    update: XOR<GoalUpdateWithoutMilestonesInput, GoalUncheckedUpdateWithoutMilestonesInput>
    create: XOR<GoalCreateWithoutMilestonesInput, GoalUncheckedCreateWithoutMilestonesInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutMilestonesInput, GoalUncheckedUpdateWithoutMilestonesInput>
  }

  export type GoalUpdateWithoutMilestonesInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    goalTitle?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vision?: VisionUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateWithoutMilestonesInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    goalTitle?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visionId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionStepUpsertWithWhereUniqueWithoutMilestoneInput = {
    where: ActionStepWhereUniqueInput
    update: XOR<ActionStepUpdateWithoutMilestoneInput, ActionStepUncheckedUpdateWithoutMilestoneInput>
    create: XOR<ActionStepCreateWithoutMilestoneInput, ActionStepUncheckedCreateWithoutMilestoneInput>
  }

  export type ActionStepUpdateWithWhereUniqueWithoutMilestoneInput = {
    where: ActionStepWhereUniqueInput
    data: XOR<ActionStepUpdateWithoutMilestoneInput, ActionStepUncheckedUpdateWithoutMilestoneInput>
  }

  export type ActionStepUpdateManyWithWhereWithoutMilestoneInput = {
    where: ActionStepScalarWhereInput
    data: XOR<ActionStepUpdateManyMutationInput, ActionStepUncheckedUpdateManyWithoutMilestoneInput>
  }

  export type ActionStepScalarWhereInput = {
    AND?: ActionStepScalarWhereInput | ActionStepScalarWhereInput[]
    OR?: ActionStepScalarWhereInput[]
    NOT?: ActionStepScalarWhereInput | ActionStepScalarWhereInput[]
    id?: StringFilter<"ActionStep"> | string
    type?: EnumTypeFilter<"ActionStep"> | $Enums.Type
    actionName?: StringFilter<"ActionStep"> | string
    actionDeadline?: DateTimeFilter<"ActionStep"> | Date | string
    status?: EnumStatusFilter<"ActionStep"> | $Enums.Status
    createdAt?: DateTimeFilter<"ActionStep"> | Date | string
    updatedAt?: DateTimeFilter<"ActionStep"> | Date | string
    milestoneId?: StringFilter<"ActionStep"> | string
  }

  export type MilestoneCreateWithoutActionStepsInput = {
    id?: string
    type: $Enums.Type
    milestoneName: string
    milestoneDeadline: Date | string
    milestoneOutcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    goal: GoalCreateNestedOneWithoutMilestonesInput
  }

  export type MilestoneUncheckedCreateWithoutActionStepsInput = {
    id?: string
    type: $Enums.Type
    milestoneName: string
    milestoneDeadline: Date | string
    milestoneOutcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    goalId: string
  }

  export type MilestoneCreateOrConnectWithoutActionStepsInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutActionStepsInput, MilestoneUncheckedCreateWithoutActionStepsInput>
  }

  export type MilestoneUpsertWithoutActionStepsInput = {
    update: XOR<MilestoneUpdateWithoutActionStepsInput, MilestoneUncheckedUpdateWithoutActionStepsInput>
    create: XOR<MilestoneCreateWithoutActionStepsInput, MilestoneUncheckedCreateWithoutActionStepsInput>
    where?: MilestoneWhereInput
  }

  export type MilestoneUpdateToOneWithWhereWithoutActionStepsInput = {
    where?: MilestoneWhereInput
    data: XOR<MilestoneUpdateWithoutActionStepsInput, MilestoneUncheckedUpdateWithoutActionStepsInput>
  }

  export type MilestoneUpdateWithoutActionStepsInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    milestoneName?: StringFieldUpdateOperationsInput | string
    milestoneDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    milestoneOutcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneRequiredWithoutMilestonesNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutActionStepsInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    milestoneName?: StringFieldUpdateOperationsInput | string
    milestoneDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    milestoneOutcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalId?: StringFieldUpdateOperationsInput | string
  }

  export type GoalCreateManyVisionInput = {
    id?: string
    type: $Enums.Type
    goalTitle: string
    deadline: Date | string
    outcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateWithoutVisionInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    goalTitle?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutVisionInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    goalTitle?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateManyWithoutVisionInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    goalTitle?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneCreateManyGoalInput = {
    id?: string
    type: $Enums.Type
    milestoneName: string
    milestoneDeadline: Date | string
    milestoneOutcome: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneUpdateWithoutGoalInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    milestoneName?: StringFieldUpdateOperationsInput | string
    milestoneDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    milestoneOutcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionSteps?: ActionStepUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutGoalInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    milestoneName?: StringFieldUpdateOperationsInput | string
    milestoneDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    milestoneOutcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionSteps?: ActionStepUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateManyWithoutGoalInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    milestoneName?: StringFieldUpdateOperationsInput | string
    milestoneDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    milestoneOutcome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionStepCreateManyMilestoneInput = {
    id?: string
    type: $Enums.Type
    actionName: string
    actionDeadline: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActionStepUpdateWithoutMilestoneInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    actionName?: StringFieldUpdateOperationsInput | string
    actionDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionStepUncheckedUpdateWithoutMilestoneInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    actionName?: StringFieldUpdateOperationsInput | string
    actionDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionStepUncheckedUpdateManyWithoutMilestoneInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    actionName?: StringFieldUpdateOperationsInput | string
    actionDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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