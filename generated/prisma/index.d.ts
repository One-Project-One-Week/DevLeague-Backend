
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
 * Model Participant
 * 
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Hackathon
 * 
 */
export type Hackathon = $Result.DefaultSelection<Prisma.$HackathonPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Register
 * 
 */
export type Register = $Result.DefaultSelection<Prisma.$RegisterPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hackathon`: Exposes CRUD operations for the **Hackathon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hackathons
    * const hackathons = await prisma.hackathon.findMany()
    * ```
    */
  get hackathon(): Prisma.HackathonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.register`: Exposes CRUD operations for the **Register** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registers
    * const registers = await prisma.register.findMany()
    * ```
    */
  get register(): Prisma.RegisterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Participant: 'Participant',
    Team: 'Team',
    Hackathon: 'Hackathon',
    Admin: 'Admin',
    Register: 'Register',
    Submission: 'Submission'
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
      modelProps: "user" | "participant" | "team" | "hackathon" | "admin" | "register" | "submission"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Participant: {
        payload: Prisma.$ParticipantPayload<ExtArgs>
        fields: Prisma.ParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findFirst: {
            args: Prisma.ParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findMany: {
            args: Prisma.ParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          create: {
            args: Prisma.ParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          createMany: {
            args: Prisma.ParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          delete: {
            args: Prisma.ParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          update: {
            args: Prisma.ParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.ParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Hackathon: {
        payload: Prisma.$HackathonPayload<ExtArgs>
        fields: Prisma.HackathonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HackathonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HackathonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>
          }
          findFirst: {
            args: Prisma.HackathonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HackathonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>
          }
          findMany: {
            args: Prisma.HackathonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>[]
          }
          create: {
            args: Prisma.HackathonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>
          }
          createMany: {
            args: Prisma.HackathonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HackathonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>[]
          }
          delete: {
            args: Prisma.HackathonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>
          }
          update: {
            args: Prisma.HackathonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>
          }
          deleteMany: {
            args: Prisma.HackathonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HackathonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HackathonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>[]
          }
          upsert: {
            args: Prisma.HackathonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>
          }
          aggregate: {
            args: Prisma.HackathonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHackathon>
          }
          groupBy: {
            args: Prisma.HackathonGroupByArgs<ExtArgs>
            result: $Utils.Optional<HackathonGroupByOutputType>[]
          }
          count: {
            args: Prisma.HackathonCountArgs<ExtArgs>
            result: $Utils.Optional<HackathonCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Register: {
        payload: Prisma.$RegisterPayload<ExtArgs>
        fields: Prisma.RegisterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegisterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegisterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          findFirst: {
            args: Prisma.RegisterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegisterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          findMany: {
            args: Prisma.RegisterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>[]
          }
          create: {
            args: Prisma.RegisterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          createMany: {
            args: Prisma.RegisterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegisterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>[]
          }
          delete: {
            args: Prisma.RegisterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          update: {
            args: Prisma.RegisterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          deleteMany: {
            args: Prisma.RegisterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegisterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegisterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>[]
          }
          upsert: {
            args: Prisma.RegisterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          aggregate: {
            args: Prisma.RegisterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegister>
          }
          groupBy: {
            args: Prisma.RegisterGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegisterGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegisterCountArgs<ExtArgs>
            result: $Utils.Optional<RegisterCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
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
    user?: UserOmit
    participant?: ParticipantOmit
    team?: TeamOmit
    hackathon?: HackathonOmit
    admin?: AdminOmit
    register?: RegisterOmit
    submission?: SubmissionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Hackathon: number
    Register: number
    Submission: number
    Participant: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hackathon?: boolean | UserCountOutputTypeCountHackathonArgs
    Register?: boolean | UserCountOutputTypeCountRegisterArgs
    Submission?: boolean | UserCountOutputTypeCountSubmissionArgs
    Participant?: boolean | UserCountOutputTypeCountParticipantArgs
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
  export type UserCountOutputTypeCountHackathonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HackathonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    User: number
    Register: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | TeamCountOutputTypeCountUserArgs
    Register?: boolean | TeamCountOutputTypeCountRegisterArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountRegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisterWhereInput
  }


  /**
   * Count Type HackathonCountOutputType
   */

  export type HackathonCountOutputType = {
    Register: number
    Submission: number
  }

  export type HackathonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Register?: boolean | HackathonCountOutputTypeCountRegisterArgs
    Submission?: boolean | HackathonCountOutputTypeCountSubmissionArgs
  }

  // Custom InputTypes
  /**
   * HackathonCountOutputType without action
   */
  export type HackathonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonCountOutputType
     */
    select?: HackathonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HackathonCountOutputType without action
   */
  export type HackathonCountOutputTypeCountRegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisterWhereInput
  }

  /**
   * HackathonCountOutputType without action
   */
  export type HackathonCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    hackathons: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hackathons?: boolean | AdminCountOutputTypeCountHackathonsArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountHackathonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HackathonWhereInput
  }


  /**
   * Count Type RegisterCountOutputType
   */

  export type RegisterCountOutputType = {
    Submission: number
    Participant: number
  }

  export type RegisterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Submission?: boolean | RegisterCountOutputTypeCountSubmissionArgs
    Participant?: boolean | RegisterCountOutputTypeCountParticipantArgs
  }

  // Custom InputTypes
  /**
   * RegisterCountOutputType without action
   */
  export type RegisterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisterCountOutputType
     */
    select?: RegisterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegisterCountOutputType without action
   */
  export type RegisterCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * RegisterCountOutputType without action
   */
  export type RegisterCountOutputTypeCountParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    points: number | null
  }

  export type UserSumAggregateOutputType = {
    points: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    fullName: string | null
    email: string | null
    password: string | null
    date_of_birth: Date | null
    phone_number: string | null
    position: string | null
    points: number | null
    team_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    fullName: string | null
    email: string | null
    password: string | null
    date_of_birth: Date | null
    phone_number: string | null
    position: string | null
    points: number | null
    team_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    fullName: number
    email: number
    password: number
    date_of_birth: number
    phone_number: number
    position: number
    points: number
    team_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    points?: true
  }

  export type UserSumAggregateInputType = {
    points?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    password?: true
    date_of_birth?: true
    phone_number?: true
    position?: true
    points?: true
    team_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    password?: true
    date_of_birth?: true
    phone_number?: true
    position?: true
    points?: true
    team_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    password?: true
    date_of_birth?: true
    phone_number?: true
    position?: true
    points?: true
    team_id?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date
    phone_number: string
    position: string
    points: number
    team_id: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    username?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    date_of_birth?: boolean
    phone_number?: boolean
    position?: boolean
    points?: boolean
    team_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    Hackathon?: boolean | User$HackathonArgs<ExtArgs>
    Register?: boolean | User$RegisterArgs<ExtArgs>
    Submission?: boolean | User$SubmissionArgs<ExtArgs>
    Participant?: boolean | User$ParticipantArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    date_of_birth?: boolean
    phone_number?: boolean
    position?: boolean
    points?: boolean
    team_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    date_of_birth?: boolean
    phone_number?: boolean
    position?: boolean
    points?: boolean
    team_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    date_of_birth?: boolean
    phone_number?: boolean
    position?: boolean
    points?: boolean
    team_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "fullName" | "email" | "password" | "date_of_birth" | "phone_number" | "position" | "points" | "team_id" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    Hackathon?: boolean | User$HackathonArgs<ExtArgs>
    Register?: boolean | User$RegisterArgs<ExtArgs>
    Submission?: boolean | User$SubmissionArgs<ExtArgs>
    Participant?: boolean | User$ParticipantArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      Hackathon: Prisma.$HackathonPayload<ExtArgs>[]
      Register: Prisma.$RegisterPayload<ExtArgs>[]
      Submission: Prisma.$SubmissionPayload<ExtArgs>[]
      Participant: Prisma.$ParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      fullName: string
      email: string
      password: string
      date_of_birth: Date
      phone_number: string
      position: string
      points: number
      team_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Hackathon<T extends User$HackathonArgs<ExtArgs> = {}>(args?: Subset<T, User$HackathonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Register<T extends User$RegisterArgs<ExtArgs> = {}>(args?: Subset<T, User$RegisterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Submission<T extends User$SubmissionArgs<ExtArgs> = {}>(args?: Subset<T, User$SubmissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Participant<T extends User$ParticipantArgs<ExtArgs> = {}>(args?: Subset<T, User$ParticipantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly date_of_birth: FieldRef<"User", 'DateTime'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly position: FieldRef<"User", 'String'>
    readonly points: FieldRef<"User", 'Int'>
    readonly team_id: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Hackathon
   */
  export type User$HackathonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonInclude<ExtArgs> | null
    where?: HackathonWhereInput
    orderBy?: HackathonOrderByWithRelationInput | HackathonOrderByWithRelationInput[]
    cursor?: HackathonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HackathonScalarFieldEnum | HackathonScalarFieldEnum[]
  }

  /**
   * User.Register
   */
  export type User$RegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    where?: RegisterWhereInput
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    cursor?: RegisterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * User.Submission
   */
  export type User$SubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.Participant
   */
  export type User$ParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    cursor?: ParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: string | null
    participant_id: string | null
    register_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: string | null
    participant_id: string | null
    register_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    participant_id: number
    register_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParticipantMinAggregateInputType = {
    id?: true
    participant_id?: true
    register_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    participant_id?: true
    register_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    participant_id?: true
    register_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithAggregationInput | ParticipantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    id: string
    participant_id: string
    register_id: string
    createdAt: Date
    updatedAt: Date
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant_id?: boolean
    register_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participant?: boolean | UserDefaultArgs<ExtArgs>
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant_id?: boolean
    register_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participant?: boolean | UserDefaultArgs<ExtArgs>
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant_id?: boolean
    register_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participant?: boolean | UserDefaultArgs<ExtArgs>
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectScalar = {
    id?: boolean
    participant_id?: boolean
    register_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participant_id" | "register_id" | "createdAt" | "updatedAt", ExtArgs["result"]["participant"]>
  export type ParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | UserDefaultArgs<ExtArgs>
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | UserDefaultArgs<ExtArgs>
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | UserDefaultArgs<ExtArgs>
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }

  export type $ParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participant"
    objects: {
      participant: Prisma.$UserPayload<ExtArgs>
      register: Prisma.$RegisterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      participant_id: string
      register_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPayload, S>

  type ParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface ParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participant'], meta: { name: 'Participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantFindUniqueArgs>(args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantFindFirstArgs>(args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantFindManyArgs>(args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends ParticipantCreateArgs>(args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantCreateManyArgs>(args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends ParticipantDeleteArgs>(args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantUpdateArgs>(args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantUpdateManyArgs>(args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantUpsertArgs>(args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
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
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participant model
   */
  readonly fields: ParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    register<T extends RegisterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegisterDefaultArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Participant model
   */
  interface ParticipantFieldRefs {
    readonly id: FieldRef<"Participant", 'String'>
    readonly participant_id: FieldRef<"Participant", 'String'>
    readonly register_id: FieldRef<"Participant", 'String'>
    readonly createdAt: FieldRef<"Participant", 'DateTime'>
    readonly updatedAt: FieldRef<"Participant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participant findUnique
   */
  export type ParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findFirst
   */
  export type ParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant create
   */
  export type ParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a Participant.
     */
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }

  /**
   * Participant createMany
   */
  export type ParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participant createManyAndReturn
   */
  export type ParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant update
   */
  export type ParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a Participant.
     */
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant updateManyAndReturn
   */
  export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }

  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter which Participant to delete.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participant without action
   */
  export type ParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    leader_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    leader_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    leader_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    leader_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    leader_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    leader_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    leader_id: string
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    leader_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | Team$UserArgs<ExtArgs>
    Register?: boolean | Team$RegisterArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    leader_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    leader_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    leader_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "leader_id" | "createdAt" | "updatedAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Team$UserArgs<ExtArgs>
    Register?: boolean | Team$RegisterArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
      Register: Prisma.$RegisterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      leader_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Team$UserArgs<ExtArgs> = {}>(args?: Subset<T, Team$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Register<T extends Team$RegisterArgs<ExtArgs> = {}>(args?: Subset<T, Team$RegisterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly leader_id: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.User
   */
  export type Team$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Team.Register
   */
  export type Team$RegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    where?: RegisterWhereInput
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    cursor?: RegisterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Hackathon
   */

  export type AggregateHackathon = {
    _count: HackathonCountAggregateOutputType | null
    _avg: HackathonAvgAggregateOutputType | null
    _sum: HackathonSumAggregateOutputType | null
    _min: HackathonMinAggregateOutputType | null
    _max: HackathonMaxAggregateOutputType | null
  }

  export type HackathonAvgAggregateOutputType = {
    max_teams: number | null
    max_participants: number | null
    min_participants: number | null
    prize_pool: number | null
  }

  export type HackathonSumAggregateOutputType = {
    max_teams: number | null
    max_participants: number | null
    min_participants: number | null
    prize_pool: number | null
  }

  export type HackathonMinAggregateOutputType = {
    id: string | null
    name: string | null
    max_teams: number | null
    max_participants: number | null
    min_participants: number | null
    prize: string | null
    prize_pool: number | null
    overview: string | null
    cover_image: string | null
    profile_image: string | null
    webinar_time: Date | null
    webinar_link: string | null
    presentation_link: string | null
    presentation_time: Date | null
    result_time: Date | null
    points_for_first_place: string | null
    points_for_second_place: string | null
    points_for_third_place: string | null
    admin_id: string | null
    start_date: Date | null
    end_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: string | null
  }

  export type HackathonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    max_teams: number | null
    max_participants: number | null
    min_participants: number | null
    prize: string | null
    prize_pool: number | null
    overview: string | null
    cover_image: string | null
    profile_image: string | null
    webinar_time: Date | null
    webinar_link: string | null
    presentation_link: string | null
    presentation_time: Date | null
    result_time: Date | null
    points_for_first_place: string | null
    points_for_second_place: string | null
    points_for_third_place: string | null
    admin_id: string | null
    start_date: Date | null
    end_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: string | null
  }

  export type HackathonCountAggregateOutputType = {
    id: number
    name: number
    max_teams: number
    max_participants: number
    min_participants: number
    prize: number
    prize_pool: number
    overview: number
    cover_image: number
    profile_image: number
    webinar_time: number
    webinar_link: number
    presentation_link: number
    presentation_time: number
    result_time: number
    points_for_first_place: number
    points_for_second_place: number
    points_for_third_place: number
    admin_id: number
    start_date: number
    end_date: number
    createdAt: number
    updatedAt: number
    adminId: number
    _all: number
  }


  export type HackathonAvgAggregateInputType = {
    max_teams?: true
    max_participants?: true
    min_participants?: true
    prize_pool?: true
  }

  export type HackathonSumAggregateInputType = {
    max_teams?: true
    max_participants?: true
    min_participants?: true
    prize_pool?: true
  }

  export type HackathonMinAggregateInputType = {
    id?: true
    name?: true
    max_teams?: true
    max_participants?: true
    min_participants?: true
    prize?: true
    prize_pool?: true
    overview?: true
    cover_image?: true
    profile_image?: true
    webinar_time?: true
    webinar_link?: true
    presentation_link?: true
    presentation_time?: true
    result_time?: true
    points_for_first_place?: true
    points_for_second_place?: true
    points_for_third_place?: true
    admin_id?: true
    start_date?: true
    end_date?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
  }

  export type HackathonMaxAggregateInputType = {
    id?: true
    name?: true
    max_teams?: true
    max_participants?: true
    min_participants?: true
    prize?: true
    prize_pool?: true
    overview?: true
    cover_image?: true
    profile_image?: true
    webinar_time?: true
    webinar_link?: true
    presentation_link?: true
    presentation_time?: true
    result_time?: true
    points_for_first_place?: true
    points_for_second_place?: true
    points_for_third_place?: true
    admin_id?: true
    start_date?: true
    end_date?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
  }

  export type HackathonCountAggregateInputType = {
    id?: true
    name?: true
    max_teams?: true
    max_participants?: true
    min_participants?: true
    prize?: true
    prize_pool?: true
    overview?: true
    cover_image?: true
    profile_image?: true
    webinar_time?: true
    webinar_link?: true
    presentation_link?: true
    presentation_time?: true
    result_time?: true
    points_for_first_place?: true
    points_for_second_place?: true
    points_for_third_place?: true
    admin_id?: true
    start_date?: true
    end_date?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
    _all?: true
  }

  export type HackathonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hackathon to aggregate.
     */
    where?: HackathonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hackathons to fetch.
     */
    orderBy?: HackathonOrderByWithRelationInput | HackathonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HackathonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hackathons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hackathons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hackathons
    **/
    _count?: true | HackathonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HackathonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HackathonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HackathonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HackathonMaxAggregateInputType
  }

  export type GetHackathonAggregateType<T extends HackathonAggregateArgs> = {
        [P in keyof T & keyof AggregateHackathon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHackathon[P]>
      : GetScalarType<T[P], AggregateHackathon[P]>
  }




  export type HackathonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HackathonWhereInput
    orderBy?: HackathonOrderByWithAggregationInput | HackathonOrderByWithAggregationInput[]
    by: HackathonScalarFieldEnum[] | HackathonScalarFieldEnum
    having?: HackathonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HackathonCountAggregateInputType | true
    _avg?: HackathonAvgAggregateInputType
    _sum?: HackathonSumAggregateInputType
    _min?: HackathonMinAggregateInputType
    _max?: HackathonMaxAggregateInputType
  }

  export type HackathonGroupByOutputType = {
    id: string
    name: string
    max_teams: number
    max_participants: number
    min_participants: number
    prize: string
    prize_pool: number | null
    overview: string
    cover_image: string
    profile_image: string
    webinar_time: Date
    webinar_link: string
    presentation_link: string
    presentation_time: Date
    result_time: Date
    points_for_first_place: string
    points_for_second_place: string
    points_for_third_place: string
    admin_id: string
    start_date: Date
    end_date: Date
    createdAt: Date
    updatedAt: Date
    adminId: string | null
    _count: HackathonCountAggregateOutputType | null
    _avg: HackathonAvgAggregateOutputType | null
    _sum: HackathonSumAggregateOutputType | null
    _min: HackathonMinAggregateOutputType | null
    _max: HackathonMaxAggregateOutputType | null
  }

  type GetHackathonGroupByPayload<T extends HackathonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HackathonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HackathonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HackathonGroupByOutputType[P]>
            : GetScalarType<T[P], HackathonGroupByOutputType[P]>
        }
      >
    >


  export type HackathonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    max_teams?: boolean
    max_participants?: boolean
    min_participants?: boolean
    prize?: boolean
    prize_pool?: boolean
    overview?: boolean
    cover_image?: boolean
    profile_image?: boolean
    webinar_time?: boolean
    webinar_link?: boolean
    presentation_link?: boolean
    presentation_time?: boolean
    result_time?: boolean
    points_for_first_place?: boolean
    points_for_second_place?: boolean
    points_for_third_place?: boolean
    admin_id?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    Admin?: boolean | Hackathon$AdminArgs<ExtArgs>
    Register?: boolean | Hackathon$RegisterArgs<ExtArgs>
    Submission?: boolean | Hackathon$SubmissionArgs<ExtArgs>
    _count?: boolean | HackathonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hackathon"]>

  export type HackathonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    max_teams?: boolean
    max_participants?: boolean
    min_participants?: boolean
    prize?: boolean
    prize_pool?: boolean
    overview?: boolean
    cover_image?: boolean
    profile_image?: boolean
    webinar_time?: boolean
    webinar_link?: boolean
    presentation_link?: boolean
    presentation_time?: boolean
    result_time?: boolean
    points_for_first_place?: boolean
    points_for_second_place?: boolean
    points_for_third_place?: boolean
    admin_id?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    Admin?: boolean | Hackathon$AdminArgs<ExtArgs>
  }, ExtArgs["result"]["hackathon"]>

  export type HackathonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    max_teams?: boolean
    max_participants?: boolean
    min_participants?: boolean
    prize?: boolean
    prize_pool?: boolean
    overview?: boolean
    cover_image?: boolean
    profile_image?: boolean
    webinar_time?: boolean
    webinar_link?: boolean
    presentation_link?: boolean
    presentation_time?: boolean
    result_time?: boolean
    points_for_first_place?: boolean
    points_for_second_place?: boolean
    points_for_third_place?: boolean
    admin_id?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    Admin?: boolean | Hackathon$AdminArgs<ExtArgs>
  }, ExtArgs["result"]["hackathon"]>

  export type HackathonSelectScalar = {
    id?: boolean
    name?: boolean
    max_teams?: boolean
    max_participants?: boolean
    min_participants?: boolean
    prize?: boolean
    prize_pool?: boolean
    overview?: boolean
    cover_image?: boolean
    profile_image?: boolean
    webinar_time?: boolean
    webinar_link?: boolean
    presentation_link?: boolean
    presentation_time?: boolean
    result_time?: boolean
    points_for_first_place?: boolean
    points_for_second_place?: boolean
    points_for_third_place?: boolean
    admin_id?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
  }

  export type HackathonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "max_teams" | "max_participants" | "min_participants" | "prize" | "prize_pool" | "overview" | "cover_image" | "profile_image" | "webinar_time" | "webinar_link" | "presentation_link" | "presentation_time" | "result_time" | "points_for_first_place" | "points_for_second_place" | "points_for_third_place" | "admin_id" | "start_date" | "end_date" | "createdAt" | "updatedAt" | "adminId", ExtArgs["result"]["hackathon"]>
  export type HackathonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    Admin?: boolean | Hackathon$AdminArgs<ExtArgs>
    Register?: boolean | Hackathon$RegisterArgs<ExtArgs>
    Submission?: boolean | Hackathon$SubmissionArgs<ExtArgs>
    _count?: boolean | HackathonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HackathonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    Admin?: boolean | Hackathon$AdminArgs<ExtArgs>
  }
  export type HackathonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    Admin?: boolean | Hackathon$AdminArgs<ExtArgs>
  }

  export type $HackathonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hackathon"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      Admin: Prisma.$AdminPayload<ExtArgs> | null
      Register: Prisma.$RegisterPayload<ExtArgs>[]
      Submission: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      max_teams: number
      max_participants: number
      min_participants: number
      prize: string
      prize_pool: number | null
      overview: string
      cover_image: string
      profile_image: string
      webinar_time: Date
      webinar_link: string
      presentation_link: string
      presentation_time: Date
      result_time: Date
      points_for_first_place: string
      points_for_second_place: string
      points_for_third_place: string
      admin_id: string
      start_date: Date
      end_date: Date
      createdAt: Date
      updatedAt: Date
      adminId: string | null
    }, ExtArgs["result"]["hackathon"]>
    composites: {}
  }

  type HackathonGetPayload<S extends boolean | null | undefined | HackathonDefaultArgs> = $Result.GetResult<Prisma.$HackathonPayload, S>

  type HackathonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HackathonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HackathonCountAggregateInputType | true
    }

  export interface HackathonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hackathon'], meta: { name: 'Hackathon' } }
    /**
     * Find zero or one Hackathon that matches the filter.
     * @param {HackathonFindUniqueArgs} args - Arguments to find a Hackathon
     * @example
     * // Get one Hackathon
     * const hackathon = await prisma.hackathon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HackathonFindUniqueArgs>(args: SelectSubset<T, HackathonFindUniqueArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hackathon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HackathonFindUniqueOrThrowArgs} args - Arguments to find a Hackathon
     * @example
     * // Get one Hackathon
     * const hackathon = await prisma.hackathon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HackathonFindUniqueOrThrowArgs>(args: SelectSubset<T, HackathonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hackathon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonFindFirstArgs} args - Arguments to find a Hackathon
     * @example
     * // Get one Hackathon
     * const hackathon = await prisma.hackathon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HackathonFindFirstArgs>(args?: SelectSubset<T, HackathonFindFirstArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hackathon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonFindFirstOrThrowArgs} args - Arguments to find a Hackathon
     * @example
     * // Get one Hackathon
     * const hackathon = await prisma.hackathon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HackathonFindFirstOrThrowArgs>(args?: SelectSubset<T, HackathonFindFirstOrThrowArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hackathons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hackathons
     * const hackathons = await prisma.hackathon.findMany()
     * 
     * // Get first 10 Hackathons
     * const hackathons = await prisma.hackathon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hackathonWithIdOnly = await prisma.hackathon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HackathonFindManyArgs>(args?: SelectSubset<T, HackathonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hackathon.
     * @param {HackathonCreateArgs} args - Arguments to create a Hackathon.
     * @example
     * // Create one Hackathon
     * const Hackathon = await prisma.hackathon.create({
     *   data: {
     *     // ... data to create a Hackathon
     *   }
     * })
     * 
     */
    create<T extends HackathonCreateArgs>(args: SelectSubset<T, HackathonCreateArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hackathons.
     * @param {HackathonCreateManyArgs} args - Arguments to create many Hackathons.
     * @example
     * // Create many Hackathons
     * const hackathon = await prisma.hackathon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HackathonCreateManyArgs>(args?: SelectSubset<T, HackathonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hackathons and returns the data saved in the database.
     * @param {HackathonCreateManyAndReturnArgs} args - Arguments to create many Hackathons.
     * @example
     * // Create many Hackathons
     * const hackathon = await prisma.hackathon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hackathons and only return the `id`
     * const hackathonWithIdOnly = await prisma.hackathon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HackathonCreateManyAndReturnArgs>(args?: SelectSubset<T, HackathonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hackathon.
     * @param {HackathonDeleteArgs} args - Arguments to delete one Hackathon.
     * @example
     * // Delete one Hackathon
     * const Hackathon = await prisma.hackathon.delete({
     *   where: {
     *     // ... filter to delete one Hackathon
     *   }
     * })
     * 
     */
    delete<T extends HackathonDeleteArgs>(args: SelectSubset<T, HackathonDeleteArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hackathon.
     * @param {HackathonUpdateArgs} args - Arguments to update one Hackathon.
     * @example
     * // Update one Hackathon
     * const hackathon = await prisma.hackathon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HackathonUpdateArgs>(args: SelectSubset<T, HackathonUpdateArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hackathons.
     * @param {HackathonDeleteManyArgs} args - Arguments to filter Hackathons to delete.
     * @example
     * // Delete a few Hackathons
     * const { count } = await prisma.hackathon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HackathonDeleteManyArgs>(args?: SelectSubset<T, HackathonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hackathons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hackathons
     * const hackathon = await prisma.hackathon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HackathonUpdateManyArgs>(args: SelectSubset<T, HackathonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hackathons and returns the data updated in the database.
     * @param {HackathonUpdateManyAndReturnArgs} args - Arguments to update many Hackathons.
     * @example
     * // Update many Hackathons
     * const hackathon = await prisma.hackathon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hackathons and only return the `id`
     * const hackathonWithIdOnly = await prisma.hackathon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HackathonUpdateManyAndReturnArgs>(args: SelectSubset<T, HackathonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hackathon.
     * @param {HackathonUpsertArgs} args - Arguments to update or create a Hackathon.
     * @example
     * // Update or create a Hackathon
     * const hackathon = await prisma.hackathon.upsert({
     *   create: {
     *     // ... data to create a Hackathon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hackathon we want to update
     *   }
     * })
     */
    upsert<T extends HackathonUpsertArgs>(args: SelectSubset<T, HackathonUpsertArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hackathons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonCountArgs} args - Arguments to filter Hackathons to count.
     * @example
     * // Count the number of Hackathons
     * const count = await prisma.hackathon.count({
     *   where: {
     *     // ... the filter for the Hackathons we want to count
     *   }
     * })
    **/
    count<T extends HackathonCountArgs>(
      args?: Subset<T, HackathonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HackathonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hackathon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HackathonAggregateArgs>(args: Subset<T, HackathonAggregateArgs>): Prisma.PrismaPromise<GetHackathonAggregateType<T>>

    /**
     * Group by Hackathon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonGroupByArgs} args - Group by arguments.
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
      T extends HackathonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HackathonGroupByArgs['orderBy'] }
        : { orderBy?: HackathonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HackathonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHackathonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hackathon model
   */
  readonly fields: HackathonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hackathon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HackathonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Admin<T extends Hackathon$AdminArgs<ExtArgs> = {}>(args?: Subset<T, Hackathon$AdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Register<T extends Hackathon$RegisterArgs<ExtArgs> = {}>(args?: Subset<T, Hackathon$RegisterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Submission<T extends Hackathon$SubmissionArgs<ExtArgs> = {}>(args?: Subset<T, Hackathon$SubmissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hackathon model
   */
  interface HackathonFieldRefs {
    readonly id: FieldRef<"Hackathon", 'String'>
    readonly name: FieldRef<"Hackathon", 'String'>
    readonly max_teams: FieldRef<"Hackathon", 'Int'>
    readonly max_participants: FieldRef<"Hackathon", 'Int'>
    readonly min_participants: FieldRef<"Hackathon", 'Int'>
    readonly prize: FieldRef<"Hackathon", 'String'>
    readonly prize_pool: FieldRef<"Hackathon", 'Int'>
    readonly overview: FieldRef<"Hackathon", 'String'>
    readonly cover_image: FieldRef<"Hackathon", 'String'>
    readonly profile_image: FieldRef<"Hackathon", 'String'>
    readonly webinar_time: FieldRef<"Hackathon", 'DateTime'>
    readonly webinar_link: FieldRef<"Hackathon", 'String'>
    readonly presentation_link: FieldRef<"Hackathon", 'String'>
    readonly presentation_time: FieldRef<"Hackathon", 'DateTime'>
    readonly result_time: FieldRef<"Hackathon", 'DateTime'>
    readonly points_for_first_place: FieldRef<"Hackathon", 'String'>
    readonly points_for_second_place: FieldRef<"Hackathon", 'String'>
    readonly points_for_third_place: FieldRef<"Hackathon", 'String'>
    readonly admin_id: FieldRef<"Hackathon", 'String'>
    readonly start_date: FieldRef<"Hackathon", 'DateTime'>
    readonly end_date: FieldRef<"Hackathon", 'DateTime'>
    readonly createdAt: FieldRef<"Hackathon", 'DateTime'>
    readonly updatedAt: FieldRef<"Hackathon", 'DateTime'>
    readonly adminId: FieldRef<"Hackathon", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hackathon findUnique
   */
  export type HackathonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * Filter, which Hackathon to fetch.
     */
    where: HackathonWhereUniqueInput
  }

  /**
   * Hackathon findUniqueOrThrow
   */
  export type HackathonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * Filter, which Hackathon to fetch.
     */
    where: HackathonWhereUniqueInput
  }

  /**
   * Hackathon findFirst
   */
  export type HackathonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * Filter, which Hackathon to fetch.
     */
    where?: HackathonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hackathons to fetch.
     */
    orderBy?: HackathonOrderByWithRelationInput | HackathonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hackathons.
     */
    cursor?: HackathonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hackathons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hackathons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hackathons.
     */
    distinct?: HackathonScalarFieldEnum | HackathonScalarFieldEnum[]
  }

  /**
   * Hackathon findFirstOrThrow
   */
  export type HackathonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * Filter, which Hackathon to fetch.
     */
    where?: HackathonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hackathons to fetch.
     */
    orderBy?: HackathonOrderByWithRelationInput | HackathonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hackathons.
     */
    cursor?: HackathonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hackathons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hackathons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hackathons.
     */
    distinct?: HackathonScalarFieldEnum | HackathonScalarFieldEnum[]
  }

  /**
   * Hackathon findMany
   */
  export type HackathonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * Filter, which Hackathons to fetch.
     */
    where?: HackathonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hackathons to fetch.
     */
    orderBy?: HackathonOrderByWithRelationInput | HackathonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hackathons.
     */
    cursor?: HackathonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hackathons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hackathons.
     */
    skip?: number
    distinct?: HackathonScalarFieldEnum | HackathonScalarFieldEnum[]
  }

  /**
   * Hackathon create
   */
  export type HackathonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * The data needed to create a Hackathon.
     */
    data: XOR<HackathonCreateInput, HackathonUncheckedCreateInput>
  }

  /**
   * Hackathon createMany
   */
  export type HackathonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hackathons.
     */
    data: HackathonCreateManyInput | HackathonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hackathon createManyAndReturn
   */
  export type HackathonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * The data used to create many Hackathons.
     */
    data: HackathonCreateManyInput | HackathonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hackathon update
   */
  export type HackathonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * The data needed to update a Hackathon.
     */
    data: XOR<HackathonUpdateInput, HackathonUncheckedUpdateInput>
    /**
     * Choose, which Hackathon to update.
     */
    where: HackathonWhereUniqueInput
  }

  /**
   * Hackathon updateMany
   */
  export type HackathonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hackathons.
     */
    data: XOR<HackathonUpdateManyMutationInput, HackathonUncheckedUpdateManyInput>
    /**
     * Filter which Hackathons to update
     */
    where?: HackathonWhereInput
    /**
     * Limit how many Hackathons to update.
     */
    limit?: number
  }

  /**
   * Hackathon updateManyAndReturn
   */
  export type HackathonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * The data used to update Hackathons.
     */
    data: XOR<HackathonUpdateManyMutationInput, HackathonUncheckedUpdateManyInput>
    /**
     * Filter which Hackathons to update
     */
    where?: HackathonWhereInput
    /**
     * Limit how many Hackathons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hackathon upsert
   */
  export type HackathonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * The filter to search for the Hackathon to update in case it exists.
     */
    where: HackathonWhereUniqueInput
    /**
     * In case the Hackathon found by the `where` argument doesn't exist, create a new Hackathon with this data.
     */
    create: XOR<HackathonCreateInput, HackathonUncheckedCreateInput>
    /**
     * In case the Hackathon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HackathonUpdateInput, HackathonUncheckedUpdateInput>
  }

  /**
   * Hackathon delete
   */
  export type HackathonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * Filter which Hackathon to delete.
     */
    where: HackathonWhereUniqueInput
  }

  /**
   * Hackathon deleteMany
   */
  export type HackathonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hackathons to delete
     */
    where?: HackathonWhereInput
    /**
     * Limit how many Hackathons to delete.
     */
    limit?: number
  }

  /**
   * Hackathon.Admin
   */
  export type Hackathon$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Hackathon.Register
   */
  export type Hackathon$RegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    where?: RegisterWhereInput
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    cursor?: RegisterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * Hackathon.Submission
   */
  export type Hackathon$SubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Hackathon without action
   */
  export type HackathonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    full_name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hackathons?: boolean | Admin$hackathonsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hackathons?: boolean | Admin$hackathonsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      hackathons: Prisma.$HackathonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hackathons<T extends Admin$hackathonsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$hackathonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly full_name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.hackathons
   */
  export type Admin$hackathonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hackathon
     */
    omit?: HackathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HackathonInclude<ExtArgs> | null
    where?: HackathonWhereInput
    orderBy?: HackathonOrderByWithRelationInput | HackathonOrderByWithRelationInput[]
    cursor?: HackathonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HackathonScalarFieldEnum | HackathonScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Register
   */

  export type AggregateRegister = {
    _count: RegisterCountAggregateOutputType | null
    _min: RegisterMinAggregateOutputType | null
    _max: RegisterMaxAggregateOutputType | null
  }

  export type RegisterMinAggregateOutputType = {
    id: string | null
    team_id: string | null
    user_id: string | null
    hackathon_id: string | null
  }

  export type RegisterMaxAggregateOutputType = {
    id: string | null
    team_id: string | null
    user_id: string | null
    hackathon_id: string | null
  }

  export type RegisterCountAggregateOutputType = {
    id: number
    team_id: number
    user_id: number
    hackathon_id: number
    _all: number
  }


  export type RegisterMinAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
    hackathon_id?: true
  }

  export type RegisterMaxAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
    hackathon_id?: true
  }

  export type RegisterCountAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
    hackathon_id?: true
    _all?: true
  }

  export type RegisterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Register to aggregate.
     */
    where?: RegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registers to fetch.
     */
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registers
    **/
    _count?: true | RegisterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegisterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegisterMaxAggregateInputType
  }

  export type GetRegisterAggregateType<T extends RegisterAggregateArgs> = {
        [P in keyof T & keyof AggregateRegister]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegister[P]>
      : GetScalarType<T[P], AggregateRegister[P]>
  }




  export type RegisterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisterWhereInput
    orderBy?: RegisterOrderByWithAggregationInput | RegisterOrderByWithAggregationInput[]
    by: RegisterScalarFieldEnum[] | RegisterScalarFieldEnum
    having?: RegisterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegisterCountAggregateInputType | true
    _min?: RegisterMinAggregateInputType
    _max?: RegisterMaxAggregateInputType
  }

  export type RegisterGroupByOutputType = {
    id: string
    team_id: string
    user_id: string
    hackathon_id: string
    _count: RegisterCountAggregateOutputType | null
    _min: RegisterMinAggregateOutputType | null
    _max: RegisterMaxAggregateOutputType | null
  }

  type GetRegisterGroupByPayload<T extends RegisterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegisterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegisterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegisterGroupByOutputType[P]>
            : GetScalarType<T[P], RegisterGroupByOutputType[P]>
        }
      >
    >


  export type RegisterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    hackathon_id?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    Submission?: boolean | Register$SubmissionArgs<ExtArgs>
    Participant?: boolean | Register$ParticipantArgs<ExtArgs>
    _count?: boolean | RegisterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["register"]>

  export type RegisterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    hackathon_id?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["register"]>

  export type RegisterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    hackathon_id?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["register"]>

  export type RegisterSelectScalar = {
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    hackathon_id?: boolean
  }

  export type RegisterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "team_id" | "user_id" | "hackathon_id", ExtArgs["result"]["register"]>
  export type RegisterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    Submission?: boolean | Register$SubmissionArgs<ExtArgs>
    Participant?: boolean | Register$ParticipantArgs<ExtArgs>
    _count?: boolean | RegisterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegisterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
  }
  export type RegisterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
  }

  export type $RegisterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Register"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      hackathon: Prisma.$HackathonPayload<ExtArgs>
      Submission: Prisma.$SubmissionPayload<ExtArgs>[]
      Participant: Prisma.$ParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      team_id: string
      user_id: string
      hackathon_id: string
    }, ExtArgs["result"]["register"]>
    composites: {}
  }

  type RegisterGetPayload<S extends boolean | null | undefined | RegisterDefaultArgs> = $Result.GetResult<Prisma.$RegisterPayload, S>

  type RegisterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegisterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegisterCountAggregateInputType | true
    }

  export interface RegisterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Register'], meta: { name: 'Register' } }
    /**
     * Find zero or one Register that matches the filter.
     * @param {RegisterFindUniqueArgs} args - Arguments to find a Register
     * @example
     * // Get one Register
     * const register = await prisma.register.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegisterFindUniqueArgs>(args: SelectSubset<T, RegisterFindUniqueArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Register that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegisterFindUniqueOrThrowArgs} args - Arguments to find a Register
     * @example
     * // Get one Register
     * const register = await prisma.register.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegisterFindUniqueOrThrowArgs>(args: SelectSubset<T, RegisterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Register that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFindFirstArgs} args - Arguments to find a Register
     * @example
     * // Get one Register
     * const register = await prisma.register.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegisterFindFirstArgs>(args?: SelectSubset<T, RegisterFindFirstArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Register that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFindFirstOrThrowArgs} args - Arguments to find a Register
     * @example
     * // Get one Register
     * const register = await prisma.register.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegisterFindFirstOrThrowArgs>(args?: SelectSubset<T, RegisterFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registers
     * const registers = await prisma.register.findMany()
     * 
     * // Get first 10 Registers
     * const registers = await prisma.register.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registerWithIdOnly = await prisma.register.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegisterFindManyArgs>(args?: SelectSubset<T, RegisterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Register.
     * @param {RegisterCreateArgs} args - Arguments to create a Register.
     * @example
     * // Create one Register
     * const Register = await prisma.register.create({
     *   data: {
     *     // ... data to create a Register
     *   }
     * })
     * 
     */
    create<T extends RegisterCreateArgs>(args: SelectSubset<T, RegisterCreateArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registers.
     * @param {RegisterCreateManyArgs} args - Arguments to create many Registers.
     * @example
     * // Create many Registers
     * const register = await prisma.register.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegisterCreateManyArgs>(args?: SelectSubset<T, RegisterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registers and returns the data saved in the database.
     * @param {RegisterCreateManyAndReturnArgs} args - Arguments to create many Registers.
     * @example
     * // Create many Registers
     * const register = await prisma.register.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registers and only return the `id`
     * const registerWithIdOnly = await prisma.register.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegisterCreateManyAndReturnArgs>(args?: SelectSubset<T, RegisterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Register.
     * @param {RegisterDeleteArgs} args - Arguments to delete one Register.
     * @example
     * // Delete one Register
     * const Register = await prisma.register.delete({
     *   where: {
     *     // ... filter to delete one Register
     *   }
     * })
     * 
     */
    delete<T extends RegisterDeleteArgs>(args: SelectSubset<T, RegisterDeleteArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Register.
     * @param {RegisterUpdateArgs} args - Arguments to update one Register.
     * @example
     * // Update one Register
     * const register = await prisma.register.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegisterUpdateArgs>(args: SelectSubset<T, RegisterUpdateArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registers.
     * @param {RegisterDeleteManyArgs} args - Arguments to filter Registers to delete.
     * @example
     * // Delete a few Registers
     * const { count } = await prisma.register.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegisterDeleteManyArgs>(args?: SelectSubset<T, RegisterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registers
     * const register = await prisma.register.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegisterUpdateManyArgs>(args: SelectSubset<T, RegisterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registers and returns the data updated in the database.
     * @param {RegisterUpdateManyAndReturnArgs} args - Arguments to update many Registers.
     * @example
     * // Update many Registers
     * const register = await prisma.register.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registers and only return the `id`
     * const registerWithIdOnly = await prisma.register.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegisterUpdateManyAndReturnArgs>(args: SelectSubset<T, RegisterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Register.
     * @param {RegisterUpsertArgs} args - Arguments to update or create a Register.
     * @example
     * // Update or create a Register
     * const register = await prisma.register.upsert({
     *   create: {
     *     // ... data to create a Register
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Register we want to update
     *   }
     * })
     */
    upsert<T extends RegisterUpsertArgs>(args: SelectSubset<T, RegisterUpsertArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterCountArgs} args - Arguments to filter Registers to count.
     * @example
     * // Count the number of Registers
     * const count = await prisma.register.count({
     *   where: {
     *     // ... the filter for the Registers we want to count
     *   }
     * })
    **/
    count<T extends RegisterCountArgs>(
      args?: Subset<T, RegisterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegisterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Register.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegisterAggregateArgs>(args: Subset<T, RegisterAggregateArgs>): Prisma.PrismaPromise<GetRegisterAggregateType<T>>

    /**
     * Group by Register.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterGroupByArgs} args - Group by arguments.
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
      T extends RegisterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegisterGroupByArgs['orderBy'] }
        : { orderBy?: RegisterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegisterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegisterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Register model
   */
  readonly fields: RegisterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Register.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegisterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hackathon<T extends HackathonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HackathonDefaultArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Submission<T extends Register$SubmissionArgs<ExtArgs> = {}>(args?: Subset<T, Register$SubmissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Participant<T extends Register$ParticipantArgs<ExtArgs> = {}>(args?: Subset<T, Register$ParticipantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Register model
   */
  interface RegisterFieldRefs {
    readonly id: FieldRef<"Register", 'String'>
    readonly team_id: FieldRef<"Register", 'String'>
    readonly user_id: FieldRef<"Register", 'String'>
    readonly hackathon_id: FieldRef<"Register", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Register findUnique
   */
  export type RegisterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Register to fetch.
     */
    where: RegisterWhereUniqueInput
  }

  /**
   * Register findUniqueOrThrow
   */
  export type RegisterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Register to fetch.
     */
    where: RegisterWhereUniqueInput
  }

  /**
   * Register findFirst
   */
  export type RegisterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Register to fetch.
     */
    where?: RegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registers to fetch.
     */
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registers.
     */
    cursor?: RegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registers.
     */
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * Register findFirstOrThrow
   */
  export type RegisterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Register to fetch.
     */
    where?: RegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registers to fetch.
     */
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registers.
     */
    cursor?: RegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registers.
     */
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * Register findMany
   */
  export type RegisterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Registers to fetch.
     */
    where?: RegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registers to fetch.
     */
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registers.
     */
    cursor?: RegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registers.
     */
    skip?: number
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * Register create
   */
  export type RegisterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * The data needed to create a Register.
     */
    data: XOR<RegisterCreateInput, RegisterUncheckedCreateInput>
  }

  /**
   * Register createMany
   */
  export type RegisterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registers.
     */
    data: RegisterCreateManyInput | RegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Register createManyAndReturn
   */
  export type RegisterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * The data used to create many Registers.
     */
    data: RegisterCreateManyInput | RegisterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Register update
   */
  export type RegisterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * The data needed to update a Register.
     */
    data: XOR<RegisterUpdateInput, RegisterUncheckedUpdateInput>
    /**
     * Choose, which Register to update.
     */
    where: RegisterWhereUniqueInput
  }

  /**
   * Register updateMany
   */
  export type RegisterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registers.
     */
    data: XOR<RegisterUpdateManyMutationInput, RegisterUncheckedUpdateManyInput>
    /**
     * Filter which Registers to update
     */
    where?: RegisterWhereInput
    /**
     * Limit how many Registers to update.
     */
    limit?: number
  }

  /**
   * Register updateManyAndReturn
   */
  export type RegisterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * The data used to update Registers.
     */
    data: XOR<RegisterUpdateManyMutationInput, RegisterUncheckedUpdateManyInput>
    /**
     * Filter which Registers to update
     */
    where?: RegisterWhereInput
    /**
     * Limit how many Registers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Register upsert
   */
  export type RegisterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * The filter to search for the Register to update in case it exists.
     */
    where: RegisterWhereUniqueInput
    /**
     * In case the Register found by the `where` argument doesn't exist, create a new Register with this data.
     */
    create: XOR<RegisterCreateInput, RegisterUncheckedCreateInput>
    /**
     * In case the Register was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegisterUpdateInput, RegisterUncheckedUpdateInput>
  }

  /**
   * Register delete
   */
  export type RegisterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter which Register to delete.
     */
    where: RegisterWhereUniqueInput
  }

  /**
   * Register deleteMany
   */
  export type RegisterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registers to delete
     */
    where?: RegisterWhereInput
    /**
     * Limit how many Registers to delete.
     */
    limit?: number
  }

  /**
   * Register.Submission
   */
  export type Register$SubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Register.Participant
   */
  export type Register$ParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    cursor?: ParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Register without action
   */
  export type RegisterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    repo_link: string | null
    placement: string | null
    hackathon_id: string | null
    register_id: string | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    repo_link: string | null
    placement: string | null
    hackathon_id: string | null
    register_id: string | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    user_id: number
    repo_link: number
    placement: number
    hackathon_id: number
    register_id: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    user_id?: true
    repo_link?: true
    placement?: true
    hackathon_id?: true
    register_id?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    user_id?: true
    repo_link?: true
    placement?: true
    hackathon_id?: true
    register_id?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    user_id?: true
    repo_link?: true
    placement?: true
    hackathon_id?: true
    register_id?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    user_id: string
    repo_link: string
    placement: string
    hackathon_id: string
    register_id: string
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    repo_link?: boolean
    placement?: boolean
    hackathon_id?: boolean
    register_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    repo_link?: boolean
    placement?: boolean
    hackathon_id?: boolean
    register_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    repo_link?: boolean
    placement?: boolean
    hackathon_id?: boolean
    register_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    user_id?: boolean
    repo_link?: boolean
    placement?: boolean
    hackathon_id?: boolean
    register_id?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "repo_link" | "placement" | "hackathon_id" | "register_id", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      hackathon: Prisma.$HackathonPayload<ExtArgs>
      register: Prisma.$RegisterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      repo_link: string
      placement: string
      hackathon_id: string
      register_id: string
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hackathon<T extends HackathonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HackathonDefaultArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    register<T extends RegisterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegisterDefaultArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly user_id: FieldRef<"Submission", 'String'>
    readonly repo_link: FieldRef<"Submission", 'String'>
    readonly placement: FieldRef<"Submission", 'String'>
    readonly hackathon_id: FieldRef<"Submission", 'String'>
    readonly register_id: FieldRef<"Submission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
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
    username: 'username',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    date_of_birth: 'date_of_birth',
    phone_number: 'phone_number',
    position: 'position',
    points: 'points',
    team_id: 'team_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    participant_id: 'participant_id',
    register_id: 'register_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    leader_id: 'leader_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const HackathonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    max_teams: 'max_teams',
    max_participants: 'max_participants',
    min_participants: 'min_participants',
    prize: 'prize',
    prize_pool: 'prize_pool',
    overview: 'overview',
    cover_image: 'cover_image',
    profile_image: 'profile_image',
    webinar_time: 'webinar_time',
    webinar_link: 'webinar_link',
    presentation_link: 'presentation_link',
    presentation_time: 'presentation_time',
    result_time: 'result_time',
    points_for_first_place: 'points_for_first_place',
    points_for_second_place: 'points_for_second_place',
    points_for_third_place: 'points_for_third_place',
    admin_id: 'admin_id',
    start_date: 'start_date',
    end_date: 'end_date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    adminId: 'adminId'
  };

  export type HackathonScalarFieldEnum = (typeof HackathonScalarFieldEnum)[keyof typeof HackathonScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const RegisterScalarFieldEnum: {
    id: 'id',
    team_id: 'team_id',
    user_id: 'user_id',
    hackathon_id: 'hackathon_id'
  };

  export type RegisterScalarFieldEnum = (typeof RegisterScalarFieldEnum)[keyof typeof RegisterScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    repo_link: 'repo_link',
    placement: 'placement',
    hackathon_id: 'hackathon_id',
    register_id: 'register_id'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    date_of_birth?: DateTimeFilter<"User"> | Date | string
    phone_number?: StringFilter<"User"> | string
    position?: StringFilter<"User"> | string
    points?: IntFilter<"User"> | number
    team_id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    Hackathon?: HackathonListRelationFilter
    Register?: RegisterListRelationFilter
    Submission?: SubmissionListRelationFilter
    Participant?: ParticipantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_of_birth?: SortOrder
    phone_number?: SortOrder
    position?: SortOrder
    points?: SortOrder
    team_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    Hackathon?: HackathonOrderByRelationAggregateInput
    Register?: RegisterOrderByRelationAggregateInput
    Submission?: SubmissionOrderByRelationAggregateInput
    Participant?: ParticipantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    date_of_birth?: DateTimeFilter<"User"> | Date | string
    phone_number?: StringFilter<"User"> | string
    position?: StringFilter<"User"> | string
    points?: IntFilter<"User"> | number
    team_id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    Hackathon?: HackathonListRelationFilter
    Register?: RegisterListRelationFilter
    Submission?: SubmissionListRelationFilter
    Participant?: ParticipantListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_of_birth?: SortOrder
    phone_number?: SortOrder
    position?: SortOrder
    points?: SortOrder
    team_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    date_of_birth?: DateTimeWithAggregatesFilter<"User"> | Date | string
    phone_number?: StringWithAggregatesFilter<"User"> | string
    position?: StringWithAggregatesFilter<"User"> | string
    points?: IntWithAggregatesFilter<"User"> | number
    team_id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ParticipantWhereInput = {
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    id?: StringFilter<"Participant"> | string
    participant_id?: StringFilter<"Participant"> | string
    register_id?: StringFilter<"Participant"> | string
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeFilter<"Participant"> | Date | string
    participant?: XOR<UserScalarRelationFilter, UserWhereInput>
    register?: XOR<RegisterScalarRelationFilter, RegisterWhereInput>
  }

  export type ParticipantOrderByWithRelationInput = {
    id?: SortOrder
    participant_id?: SortOrder
    register_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participant?: UserOrderByWithRelationInput
    register?: RegisterOrderByWithRelationInput
  }

  export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    participant_id?: StringFilter<"Participant"> | string
    register_id?: StringFilter<"Participant"> | string
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeFilter<"Participant"> | Date | string
    participant?: XOR<UserScalarRelationFilter, UserWhereInput>
    register?: XOR<RegisterScalarRelationFilter, RegisterWhereInput>
  }, "id">

  export type ParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    participant_id?: SortOrder
    register_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    OR?: ParticipantScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participant"> | string
    participant_id?: StringWithAggregatesFilter<"Participant"> | string
    register_id?: StringWithAggregatesFilter<"Participant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    leader_id?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    User?: UserListRelationFilter
    Register?: RegisterListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    leader_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByRelationAggregateInput
    Register?: RegisterOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    leader_id?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    User?: UserListRelationFilter
    Register?: RegisterListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    leader_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    leader_id?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type HackathonWhereInput = {
    AND?: HackathonWhereInput | HackathonWhereInput[]
    OR?: HackathonWhereInput[]
    NOT?: HackathonWhereInput | HackathonWhereInput[]
    id?: StringFilter<"Hackathon"> | string
    name?: StringFilter<"Hackathon"> | string
    max_teams?: IntFilter<"Hackathon"> | number
    max_participants?: IntFilter<"Hackathon"> | number
    min_participants?: IntFilter<"Hackathon"> | number
    prize?: StringFilter<"Hackathon"> | string
    prize_pool?: IntNullableFilter<"Hackathon"> | number | null
    overview?: StringFilter<"Hackathon"> | string
    cover_image?: StringFilter<"Hackathon"> | string
    profile_image?: StringFilter<"Hackathon"> | string
    webinar_time?: DateTimeFilter<"Hackathon"> | Date | string
    webinar_link?: StringFilter<"Hackathon"> | string
    presentation_link?: StringFilter<"Hackathon"> | string
    presentation_time?: DateTimeFilter<"Hackathon"> | Date | string
    result_time?: DateTimeFilter<"Hackathon"> | Date | string
    points_for_first_place?: StringFilter<"Hackathon"> | string
    points_for_second_place?: StringFilter<"Hackathon"> | string
    points_for_third_place?: StringFilter<"Hackathon"> | string
    admin_id?: StringFilter<"Hackathon"> | string
    start_date?: DateTimeFilter<"Hackathon"> | Date | string
    end_date?: DateTimeFilter<"Hackathon"> | Date | string
    createdAt?: DateTimeFilter<"Hackathon"> | Date | string
    updatedAt?: DateTimeFilter<"Hackathon"> | Date | string
    adminId?: StringNullableFilter<"Hackathon"> | string | null
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    Register?: RegisterListRelationFilter
    Submission?: SubmissionListRelationFilter
  }

  export type HackathonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    max_teams?: SortOrder
    max_participants?: SortOrder
    min_participants?: SortOrder
    prize?: SortOrder
    prize_pool?: SortOrderInput | SortOrder
    overview?: SortOrder
    cover_image?: SortOrder
    profile_image?: SortOrder
    webinar_time?: SortOrder
    webinar_link?: SortOrder
    presentation_link?: SortOrder
    presentation_time?: SortOrder
    result_time?: SortOrder
    points_for_first_place?: SortOrder
    points_for_second_place?: SortOrder
    points_for_third_place?: SortOrder
    admin_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrderInput | SortOrder
    admin?: UserOrderByWithRelationInput
    Admin?: AdminOrderByWithRelationInput
    Register?: RegisterOrderByRelationAggregateInput
    Submission?: SubmissionOrderByRelationAggregateInput
  }

  export type HackathonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HackathonWhereInput | HackathonWhereInput[]
    OR?: HackathonWhereInput[]
    NOT?: HackathonWhereInput | HackathonWhereInput[]
    name?: StringFilter<"Hackathon"> | string
    max_teams?: IntFilter<"Hackathon"> | number
    max_participants?: IntFilter<"Hackathon"> | number
    min_participants?: IntFilter<"Hackathon"> | number
    prize?: StringFilter<"Hackathon"> | string
    prize_pool?: IntNullableFilter<"Hackathon"> | number | null
    overview?: StringFilter<"Hackathon"> | string
    cover_image?: StringFilter<"Hackathon"> | string
    profile_image?: StringFilter<"Hackathon"> | string
    webinar_time?: DateTimeFilter<"Hackathon"> | Date | string
    webinar_link?: StringFilter<"Hackathon"> | string
    presentation_link?: StringFilter<"Hackathon"> | string
    presentation_time?: DateTimeFilter<"Hackathon"> | Date | string
    result_time?: DateTimeFilter<"Hackathon"> | Date | string
    points_for_first_place?: StringFilter<"Hackathon"> | string
    points_for_second_place?: StringFilter<"Hackathon"> | string
    points_for_third_place?: StringFilter<"Hackathon"> | string
    admin_id?: StringFilter<"Hackathon"> | string
    start_date?: DateTimeFilter<"Hackathon"> | Date | string
    end_date?: DateTimeFilter<"Hackathon"> | Date | string
    createdAt?: DateTimeFilter<"Hackathon"> | Date | string
    updatedAt?: DateTimeFilter<"Hackathon"> | Date | string
    adminId?: StringNullableFilter<"Hackathon"> | string | null
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    Register?: RegisterListRelationFilter
    Submission?: SubmissionListRelationFilter
  }, "id">

  export type HackathonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    max_teams?: SortOrder
    max_participants?: SortOrder
    min_participants?: SortOrder
    prize?: SortOrder
    prize_pool?: SortOrderInput | SortOrder
    overview?: SortOrder
    cover_image?: SortOrder
    profile_image?: SortOrder
    webinar_time?: SortOrder
    webinar_link?: SortOrder
    presentation_link?: SortOrder
    presentation_time?: SortOrder
    result_time?: SortOrder
    points_for_first_place?: SortOrder
    points_for_second_place?: SortOrder
    points_for_third_place?: SortOrder
    admin_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrderInput | SortOrder
    _count?: HackathonCountOrderByAggregateInput
    _avg?: HackathonAvgOrderByAggregateInput
    _max?: HackathonMaxOrderByAggregateInput
    _min?: HackathonMinOrderByAggregateInput
    _sum?: HackathonSumOrderByAggregateInput
  }

  export type HackathonScalarWhereWithAggregatesInput = {
    AND?: HackathonScalarWhereWithAggregatesInput | HackathonScalarWhereWithAggregatesInput[]
    OR?: HackathonScalarWhereWithAggregatesInput[]
    NOT?: HackathonScalarWhereWithAggregatesInput | HackathonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hackathon"> | string
    name?: StringWithAggregatesFilter<"Hackathon"> | string
    max_teams?: IntWithAggregatesFilter<"Hackathon"> | number
    max_participants?: IntWithAggregatesFilter<"Hackathon"> | number
    min_participants?: IntWithAggregatesFilter<"Hackathon"> | number
    prize?: StringWithAggregatesFilter<"Hackathon"> | string
    prize_pool?: IntNullableWithAggregatesFilter<"Hackathon"> | number | null
    overview?: StringWithAggregatesFilter<"Hackathon"> | string
    cover_image?: StringWithAggregatesFilter<"Hackathon"> | string
    profile_image?: StringWithAggregatesFilter<"Hackathon"> | string
    webinar_time?: DateTimeWithAggregatesFilter<"Hackathon"> | Date | string
    webinar_link?: StringWithAggregatesFilter<"Hackathon"> | string
    presentation_link?: StringWithAggregatesFilter<"Hackathon"> | string
    presentation_time?: DateTimeWithAggregatesFilter<"Hackathon"> | Date | string
    result_time?: DateTimeWithAggregatesFilter<"Hackathon"> | Date | string
    points_for_first_place?: StringWithAggregatesFilter<"Hackathon"> | string
    points_for_second_place?: StringWithAggregatesFilter<"Hackathon"> | string
    points_for_third_place?: StringWithAggregatesFilter<"Hackathon"> | string
    admin_id?: StringWithAggregatesFilter<"Hackathon"> | string
    start_date?: DateTimeWithAggregatesFilter<"Hackathon"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Hackathon"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Hackathon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hackathon"> | Date | string
    adminId?: StringNullableWithAggregatesFilter<"Hackathon"> | string | null
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    full_name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    hackathons?: HackathonListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hackathons?: HackathonOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    full_name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    hackathons?: HackathonListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    full_name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type RegisterWhereInput = {
    AND?: RegisterWhereInput | RegisterWhereInput[]
    OR?: RegisterWhereInput[]
    NOT?: RegisterWhereInput | RegisterWhereInput[]
    id?: StringFilter<"Register"> | string
    team_id?: StringFilter<"Register"> | string
    user_id?: StringFilter<"Register"> | string
    hackathon_id?: StringFilter<"Register"> | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hackathon?: XOR<HackathonScalarRelationFilter, HackathonWhereInput>
    Submission?: SubmissionListRelationFilter
    Participant?: ParticipantListRelationFilter
  }

  export type RegisterOrderByWithRelationInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    hackathon_id?: SortOrder
    team?: TeamOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    hackathon?: HackathonOrderByWithRelationInput
    Submission?: SubmissionOrderByRelationAggregateInput
    Participant?: ParticipantOrderByRelationAggregateInput
  }

  export type RegisterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegisterWhereInput | RegisterWhereInput[]
    OR?: RegisterWhereInput[]
    NOT?: RegisterWhereInput | RegisterWhereInput[]
    team_id?: StringFilter<"Register"> | string
    user_id?: StringFilter<"Register"> | string
    hackathon_id?: StringFilter<"Register"> | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hackathon?: XOR<HackathonScalarRelationFilter, HackathonWhereInput>
    Submission?: SubmissionListRelationFilter
    Participant?: ParticipantListRelationFilter
  }, "id">

  export type RegisterOrderByWithAggregationInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    hackathon_id?: SortOrder
    _count?: RegisterCountOrderByAggregateInput
    _max?: RegisterMaxOrderByAggregateInput
    _min?: RegisterMinOrderByAggregateInput
  }

  export type RegisterScalarWhereWithAggregatesInput = {
    AND?: RegisterScalarWhereWithAggregatesInput | RegisterScalarWhereWithAggregatesInput[]
    OR?: RegisterScalarWhereWithAggregatesInput[]
    NOT?: RegisterScalarWhereWithAggregatesInput | RegisterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Register"> | string
    team_id?: StringWithAggregatesFilter<"Register"> | string
    user_id?: StringWithAggregatesFilter<"Register"> | string
    hackathon_id?: StringWithAggregatesFilter<"Register"> | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    user_id?: StringFilter<"Submission"> | string
    repo_link?: StringFilter<"Submission"> | string
    placement?: StringFilter<"Submission"> | string
    hackathon_id?: StringFilter<"Submission"> | string
    register_id?: StringFilter<"Submission"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hackathon?: XOR<HackathonScalarRelationFilter, HackathonWhereInput>
    register?: XOR<RegisterScalarRelationFilter, RegisterWhereInput>
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_link?: SortOrder
    placement?: SortOrder
    hackathon_id?: SortOrder
    register_id?: SortOrder
    user?: UserOrderByWithRelationInput
    hackathon?: HackathonOrderByWithRelationInput
    register?: RegisterOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    user_id?: StringFilter<"Submission"> | string
    repo_link?: StringFilter<"Submission"> | string
    placement?: StringFilter<"Submission"> | string
    hackathon_id?: StringFilter<"Submission"> | string
    register_id?: StringFilter<"Submission"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hackathon?: XOR<HackathonScalarRelationFilter, HackathonWhereInput>
    register?: XOR<RegisterScalarRelationFilter, RegisterWhereInput>
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_link?: SortOrder
    placement?: SortOrder
    hackathon_id?: SortOrder
    register_id?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    user_id?: StringWithAggregatesFilter<"Submission"> | string
    repo_link?: StringWithAggregatesFilter<"Submission"> | string
    placement?: StringWithAggregatesFilter<"Submission"> | string
    hackathon_id?: StringWithAggregatesFilter<"Submission"> | string
    register_id?: StringWithAggregatesFilter<"Submission"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutUserInput
    Hackathon?: HackathonCreateNestedManyWithoutAdminInput
    Register?: RegisterCreateNestedManyWithoutUserInput
    Submission?: SubmissionCreateNestedManyWithoutUserInput
    Participant?: ParticipantCreateNestedManyWithoutParticipantInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    team_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Hackathon?: HackathonUncheckedCreateNestedManyWithoutAdminInput
    Register?: RegisterUncheckedCreateNestedManyWithoutUserInput
    Submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    Participant?: ParticipantUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutUserNestedInput
    Hackathon?: HackathonUpdateManyWithoutAdminNestedInput
    Register?: RegisterUpdateManyWithoutUserNestedInput
    Submission?: SubmissionUpdateManyWithoutUserNestedInput
    Participant?: ParticipantUpdateManyWithoutParticipantNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    team_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Hackathon?: HackathonUncheckedUpdateManyWithoutAdminNestedInput
    Register?: RegisterUncheckedUpdateManyWithoutUserNestedInput
    Submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    Participant?: ParticipantUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    team_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    team_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participant: UserCreateNestedOneWithoutParticipantInput
    register: RegisterCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateInput = {
    id?: string
    participant_id: string
    register_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: UserUpdateOneRequiredWithoutParticipantNestedInput
    register?: RegisterUpdateOneRequiredWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant_id?: StringFieldUpdateOperationsInput | string
    register_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantCreateManyInput = {
    id?: string
    participant_id: string
    register_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant_id?: StringFieldUpdateOperationsInput | string
    register_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    leader_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedManyWithoutTeamInput
    Register?: RegisterCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    leader_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutTeamInput
    Register?: RegisterUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leader_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutTeamNestedInput
    Register?: RegisterUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leader_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutTeamNestedInput
    Register?: RegisterUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    leader_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leader_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leader_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HackathonCreateInput = {
    id?: string
    name: string
    max_teams: number
    max_participants: number
    min_participants: number
    prize: string
    prize_pool?: number | null
    overview: string
    cover_image: string
    profile_image: string
    webinar_time: Date | string
    webinar_link: string
    presentation_link: string
    presentation_time: Date | string
    result_time: Date | string
    points_for_first_place: string
    points_for_second_place: string
    points_for_third_place: string
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutHackathonInput
    Admin?: AdminCreateNestedOneWithoutHackathonsInput
    Register?: RegisterCreateNestedManyWithoutHackathonInput
    Submission?: SubmissionCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUncheckedCreateInput = {
    id?: string
    name: string
    max_teams: number
    max_participants: number
    min_participants: number
    prize: string
    prize_pool?: number | null
    overview: string
    cover_image: string
    profile_image: string
    webinar_time: Date | string
    webinar_link: string
    presentation_link: string
    presentation_time: Date | string
    result_time: Date | string
    points_for_first_place: string
    points_for_second_place: string
    points_for_third_place: string
    admin_id: string
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
    Register?: RegisterUncheckedCreateNestedManyWithoutHackathonInput
    Submission?: SubmissionUncheckedCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutHackathonNestedInput
    Admin?: AdminUpdateOneWithoutHackathonsNestedInput
    Register?: RegisterUpdateManyWithoutHackathonNestedInput
    Submission?: SubmissionUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    Register?: RegisterUncheckedUpdateManyWithoutHackathonNestedInput
    Submission?: SubmissionUncheckedUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonCreateManyInput = {
    id?: string
    name: string
    max_teams: number
    max_participants: number
    min_participants: number
    prize: string
    prize_pool?: number | null
    overview: string
    cover_image: string
    profile_image: string
    webinar_time: Date | string
    webinar_link: string
    presentation_link: string
    presentation_time: Date | string
    result_time: Date | string
    points_for_first_place: string
    points_for_second_place: string
    points_for_third_place: string
    admin_id: string
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
  }

  export type HackathonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HackathonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminCreateInput = {
    id?: string
    full_name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hackathons?: HackathonCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    full_name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hackathons?: HackathonUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hackathons?: HackathonUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hackathons?: HackathonUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    full_name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegisterCreateInput = {
    id?: string
    team: TeamCreateNestedOneWithoutRegisterInput
    user: UserCreateNestedOneWithoutRegisterInput
    hackathon: HackathonCreateNestedOneWithoutRegisterInput
    Submission?: SubmissionCreateNestedManyWithoutRegisterInput
    Participant?: ParticipantCreateNestedManyWithoutRegisterInput
  }

  export type RegisterUncheckedCreateInput = {
    id?: string
    team_id: string
    user_id: string
    hackathon_id: string
    Submission?: SubmissionUncheckedCreateNestedManyWithoutRegisterInput
    Participant?: ParticipantUncheckedCreateNestedManyWithoutRegisterInput
  }

  export type RegisterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutRegisterNestedInput
    user?: UserUpdateOneRequiredWithoutRegisterNestedInput
    hackathon?: HackathonUpdateOneRequiredWithoutRegisterNestedInput
    Submission?: SubmissionUpdateManyWithoutRegisterNestedInput
    Participant?: ParticipantUpdateManyWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
    Submission?: SubmissionUncheckedUpdateManyWithoutRegisterNestedInput
    Participant?: ParticipantUncheckedUpdateManyWithoutRegisterNestedInput
  }

  export type RegisterCreateManyInput = {
    id?: string
    team_id: string
    user_id: string
    hackathon_id: string
  }

  export type RegisterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type RegisterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateInput = {
    id?: string
    repo_link: string
    placement: string
    user: UserCreateNestedOneWithoutSubmissionInput
    hackathon: HackathonCreateNestedOneWithoutSubmissionInput
    register: RegisterCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    user_id: string
    repo_link: string
    placement: string
    hackathon_id: string
    register_id: string
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_link?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    hackathon?: HackathonUpdateOneRequiredWithoutSubmissionNestedInput
    register?: RegisterUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    repo_link?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
    register_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateManyInput = {
    id?: string
    user_id: string
    repo_link: string
    placement: string
    hackathon_id: string
    register_id: string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_link?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    repo_link?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
    register_id?: StringFieldUpdateOperationsInput | string
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

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type HackathonListRelationFilter = {
    every?: HackathonWhereInput
    some?: HackathonWhereInput
    none?: HackathonWhereInput
  }

  export type RegisterListRelationFilter = {
    every?: RegisterWhereInput
    some?: RegisterWhereInput
    none?: RegisterWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type ParticipantListRelationFilter = {
    every?: ParticipantWhereInput
    some?: ParticipantWhereInput
    none?: ParticipantWhereInput
  }

  export type HackathonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegisterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_of_birth?: SortOrder
    phone_number?: SortOrder
    position?: SortOrder
    points?: SortOrder
    team_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_of_birth?: SortOrder
    phone_number?: SortOrder
    position?: SortOrder
    points?: SortOrder
    team_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_of_birth?: SortOrder
    phone_number?: SortOrder
    position?: SortOrder
    points?: SortOrder
    team_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    points?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RegisterScalarRelationFilter = {
    is?: RegisterWhereInput
    isNot?: RegisterWhereInput
  }

  export type ParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    participant_id?: SortOrder
    register_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    participant_id?: SortOrder
    register_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    participant_id?: SortOrder
    register_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    leader_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    leader_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    leader_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HackathonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    max_teams?: SortOrder
    max_participants?: SortOrder
    min_participants?: SortOrder
    prize?: SortOrder
    prize_pool?: SortOrder
    overview?: SortOrder
    cover_image?: SortOrder
    profile_image?: SortOrder
    webinar_time?: SortOrder
    webinar_link?: SortOrder
    presentation_link?: SortOrder
    presentation_time?: SortOrder
    result_time?: SortOrder
    points_for_first_place?: SortOrder
    points_for_second_place?: SortOrder
    points_for_third_place?: SortOrder
    admin_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
  }

  export type HackathonAvgOrderByAggregateInput = {
    max_teams?: SortOrder
    max_participants?: SortOrder
    min_participants?: SortOrder
    prize_pool?: SortOrder
  }

  export type HackathonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    max_teams?: SortOrder
    max_participants?: SortOrder
    min_participants?: SortOrder
    prize?: SortOrder
    prize_pool?: SortOrder
    overview?: SortOrder
    cover_image?: SortOrder
    profile_image?: SortOrder
    webinar_time?: SortOrder
    webinar_link?: SortOrder
    presentation_link?: SortOrder
    presentation_time?: SortOrder
    result_time?: SortOrder
    points_for_first_place?: SortOrder
    points_for_second_place?: SortOrder
    points_for_third_place?: SortOrder
    admin_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
  }

  export type HackathonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    max_teams?: SortOrder
    max_participants?: SortOrder
    min_participants?: SortOrder
    prize?: SortOrder
    prize_pool?: SortOrder
    overview?: SortOrder
    cover_image?: SortOrder
    profile_image?: SortOrder
    webinar_time?: SortOrder
    webinar_link?: SortOrder
    presentation_link?: SortOrder
    presentation_time?: SortOrder
    result_time?: SortOrder
    points_for_first_place?: SortOrder
    points_for_second_place?: SortOrder
    points_for_third_place?: SortOrder
    admin_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
  }

  export type HackathonSumOrderByAggregateInput = {
    max_teams?: SortOrder
    max_participants?: SortOrder
    min_participants?: SortOrder
    prize_pool?: SortOrder
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

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HackathonScalarRelationFilter = {
    is?: HackathonWhereInput
    isNot?: HackathonWhereInput
  }

  export type RegisterCountOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    hackathon_id?: SortOrder
  }

  export type RegisterMaxOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    hackathon_id?: SortOrder
  }

  export type RegisterMinOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    hackathon_id?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_link?: SortOrder
    placement?: SortOrder
    hackathon_id?: SortOrder
    register_id?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_link?: SortOrder
    placement?: SortOrder
    hackathon_id?: SortOrder
    register_id?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    repo_link?: SortOrder
    placement?: SortOrder
    hackathon_id?: SortOrder
    register_id?: SortOrder
  }

  export type TeamCreateNestedOneWithoutUserInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput
    connect?: TeamWhereUniqueInput
  }

  export type HackathonCreateNestedManyWithoutAdminInput = {
    create?: XOR<HackathonCreateWithoutAdminInput, HackathonUncheckedCreateWithoutAdminInput> | HackathonCreateWithoutAdminInput[] | HackathonUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HackathonCreateOrConnectWithoutAdminInput | HackathonCreateOrConnectWithoutAdminInput[]
    createMany?: HackathonCreateManyAdminInputEnvelope
    connect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
  }

  export type RegisterCreateNestedManyWithoutUserInput = {
    create?: XOR<RegisterCreateWithoutUserInput, RegisterUncheckedCreateWithoutUserInput> | RegisterCreateWithoutUserInput[] | RegisterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutUserInput | RegisterCreateOrConnectWithoutUserInput[]
    createMany?: RegisterCreateManyUserInputEnvelope
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ParticipantCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ParticipantCreateWithoutParticipantInput, ParticipantUncheckedCreateWithoutParticipantInput> | ParticipantCreateWithoutParticipantInput[] | ParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutParticipantInput | ParticipantCreateOrConnectWithoutParticipantInput[]
    createMany?: ParticipantCreateManyParticipantInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type HackathonUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<HackathonCreateWithoutAdminInput, HackathonUncheckedCreateWithoutAdminInput> | HackathonCreateWithoutAdminInput[] | HackathonUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HackathonCreateOrConnectWithoutAdminInput | HackathonCreateOrConnectWithoutAdminInput[]
    createMany?: HackathonCreateManyAdminInputEnvelope
    connect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
  }

  export type RegisterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RegisterCreateWithoutUserInput, RegisterUncheckedCreateWithoutUserInput> | RegisterCreateWithoutUserInput[] | RegisterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutUserInput | RegisterCreateOrConnectWithoutUserInput[]
    createMany?: RegisterCreateManyUserInputEnvelope
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ParticipantUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ParticipantCreateWithoutParticipantInput, ParticipantUncheckedCreateWithoutParticipantInput> | ParticipantCreateWithoutParticipantInput[] | ParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutParticipantInput | ParticipantCreateOrConnectWithoutParticipantInput[]
    createMany?: ParticipantCreateManyParticipantInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeamUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput
    upsert?: TeamUpsertWithoutUserInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutUserInput, TeamUpdateWithoutUserInput>, TeamUncheckedUpdateWithoutUserInput>
  }

  export type HackathonUpdateManyWithoutAdminNestedInput = {
    create?: XOR<HackathonCreateWithoutAdminInput, HackathonUncheckedCreateWithoutAdminInput> | HackathonCreateWithoutAdminInput[] | HackathonUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HackathonCreateOrConnectWithoutAdminInput | HackathonCreateOrConnectWithoutAdminInput[]
    upsert?: HackathonUpsertWithWhereUniqueWithoutAdminInput | HackathonUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: HackathonCreateManyAdminInputEnvelope
    set?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    disconnect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    delete?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    connect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    update?: HackathonUpdateWithWhereUniqueWithoutAdminInput | HackathonUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: HackathonUpdateManyWithWhereWithoutAdminInput | HackathonUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: HackathonScalarWhereInput | HackathonScalarWhereInput[]
  }

  export type RegisterUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegisterCreateWithoutUserInput, RegisterUncheckedCreateWithoutUserInput> | RegisterCreateWithoutUserInput[] | RegisterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutUserInput | RegisterCreateOrConnectWithoutUserInput[]
    upsert?: RegisterUpsertWithWhereUniqueWithoutUserInput | RegisterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegisterCreateManyUserInputEnvelope
    set?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    disconnect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    delete?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    update?: RegisterUpdateWithWhereUniqueWithoutUserInput | RegisterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegisterUpdateManyWithWhereWithoutUserInput | RegisterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ParticipantUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ParticipantCreateWithoutParticipantInput, ParticipantUncheckedCreateWithoutParticipantInput> | ParticipantCreateWithoutParticipantInput[] | ParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutParticipantInput | ParticipantCreateOrConnectWithoutParticipantInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutParticipantInput | ParticipantUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ParticipantCreateManyParticipantInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutParticipantInput | ParticipantUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutParticipantInput | ParticipantUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type HackathonUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<HackathonCreateWithoutAdminInput, HackathonUncheckedCreateWithoutAdminInput> | HackathonCreateWithoutAdminInput[] | HackathonUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HackathonCreateOrConnectWithoutAdminInput | HackathonCreateOrConnectWithoutAdminInput[]
    upsert?: HackathonUpsertWithWhereUniqueWithoutAdminInput | HackathonUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: HackathonCreateManyAdminInputEnvelope
    set?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    disconnect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    delete?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    connect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    update?: HackathonUpdateWithWhereUniqueWithoutAdminInput | HackathonUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: HackathonUpdateManyWithWhereWithoutAdminInput | HackathonUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: HackathonScalarWhereInput | HackathonScalarWhereInput[]
  }

  export type RegisterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegisterCreateWithoutUserInput, RegisterUncheckedCreateWithoutUserInput> | RegisterCreateWithoutUserInput[] | RegisterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutUserInput | RegisterCreateOrConnectWithoutUserInput[]
    upsert?: RegisterUpsertWithWhereUniqueWithoutUserInput | RegisterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegisterCreateManyUserInputEnvelope
    set?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    disconnect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    delete?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    update?: RegisterUpdateWithWhereUniqueWithoutUserInput | RegisterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegisterUpdateManyWithWhereWithoutUserInput | RegisterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ParticipantUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ParticipantCreateWithoutParticipantInput, ParticipantUncheckedCreateWithoutParticipantInput> | ParticipantCreateWithoutParticipantInput[] | ParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutParticipantInput | ParticipantCreateOrConnectWithoutParticipantInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutParticipantInput | ParticipantUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ParticipantCreateManyParticipantInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutParticipantInput | ParticipantUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutParticipantInput | ParticipantUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutParticipantInput = {
    create?: XOR<UserCreateWithoutParticipantInput, UserUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantInput
    connect?: UserWhereUniqueInput
  }

  export type RegisterCreateNestedOneWithoutParticipantInput = {
    create?: XOR<RegisterCreateWithoutParticipantInput, RegisterUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: RegisterCreateOrConnectWithoutParticipantInput
    connect?: RegisterWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutParticipantNestedInput = {
    create?: XOR<UserCreateWithoutParticipantInput, UserUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantInput
    upsert?: UserUpsertWithoutParticipantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipantInput, UserUpdateWithoutParticipantInput>, UserUncheckedUpdateWithoutParticipantInput>
  }

  export type RegisterUpdateOneRequiredWithoutParticipantNestedInput = {
    create?: XOR<RegisterCreateWithoutParticipantInput, RegisterUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: RegisterCreateOrConnectWithoutParticipantInput
    upsert?: RegisterUpsertWithoutParticipantInput
    connect?: RegisterWhereUniqueInput
    update?: XOR<XOR<RegisterUpdateToOneWithWhereWithoutParticipantInput, RegisterUpdateWithoutParticipantInput>, RegisterUncheckedUpdateWithoutParticipantInput>
  }

  export type UserCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RegisterCreateNestedManyWithoutTeamInput = {
    create?: XOR<RegisterCreateWithoutTeamInput, RegisterUncheckedCreateWithoutTeamInput> | RegisterCreateWithoutTeamInput[] | RegisterUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutTeamInput | RegisterCreateOrConnectWithoutTeamInput[]
    createMany?: RegisterCreateManyTeamInputEnvelope
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RegisterUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<RegisterCreateWithoutTeamInput, RegisterUncheckedCreateWithoutTeamInput> | RegisterCreateWithoutTeamInput[] | RegisterUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutTeamInput | RegisterCreateOrConnectWithoutTeamInput[]
    createMany?: RegisterCreateManyTeamInputEnvelope
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RegisterUpdateManyWithoutTeamNestedInput = {
    create?: XOR<RegisterCreateWithoutTeamInput, RegisterUncheckedCreateWithoutTeamInput> | RegisterCreateWithoutTeamInput[] | RegisterUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutTeamInput | RegisterCreateOrConnectWithoutTeamInput[]
    upsert?: RegisterUpsertWithWhereUniqueWithoutTeamInput | RegisterUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: RegisterCreateManyTeamInputEnvelope
    set?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    disconnect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    delete?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    update?: RegisterUpdateWithWhereUniqueWithoutTeamInput | RegisterUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: RegisterUpdateManyWithWhereWithoutTeamInput | RegisterUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RegisterUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<RegisterCreateWithoutTeamInput, RegisterUncheckedCreateWithoutTeamInput> | RegisterCreateWithoutTeamInput[] | RegisterUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutTeamInput | RegisterCreateOrConnectWithoutTeamInput[]
    upsert?: RegisterUpsertWithWhereUniqueWithoutTeamInput | RegisterUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: RegisterCreateManyTeamInputEnvelope
    set?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    disconnect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    delete?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    update?: RegisterUpdateWithWhereUniqueWithoutTeamInput | RegisterUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: RegisterUpdateManyWithWhereWithoutTeamInput | RegisterUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHackathonInput = {
    create?: XOR<UserCreateWithoutHackathonInput, UserUncheckedCreateWithoutHackathonInput>
    connectOrCreate?: UserCreateOrConnectWithoutHackathonInput
    connect?: UserWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutHackathonsInput = {
    create?: XOR<AdminCreateWithoutHackathonsInput, AdminUncheckedCreateWithoutHackathonsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutHackathonsInput
    connect?: AdminWhereUniqueInput
  }

  export type RegisterCreateNestedManyWithoutHackathonInput = {
    create?: XOR<RegisterCreateWithoutHackathonInput, RegisterUncheckedCreateWithoutHackathonInput> | RegisterCreateWithoutHackathonInput[] | RegisterUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutHackathonInput | RegisterCreateOrConnectWithoutHackathonInput[]
    createMany?: RegisterCreateManyHackathonInputEnvelope
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutHackathonInput = {
    create?: XOR<SubmissionCreateWithoutHackathonInput, SubmissionUncheckedCreateWithoutHackathonInput> | SubmissionCreateWithoutHackathonInput[] | SubmissionUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutHackathonInput | SubmissionCreateOrConnectWithoutHackathonInput[]
    createMany?: SubmissionCreateManyHackathonInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type RegisterUncheckedCreateNestedManyWithoutHackathonInput = {
    create?: XOR<RegisterCreateWithoutHackathonInput, RegisterUncheckedCreateWithoutHackathonInput> | RegisterCreateWithoutHackathonInput[] | RegisterUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutHackathonInput | RegisterCreateOrConnectWithoutHackathonInput[]
    createMany?: RegisterCreateManyHackathonInputEnvelope
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutHackathonInput = {
    create?: XOR<SubmissionCreateWithoutHackathonInput, SubmissionUncheckedCreateWithoutHackathonInput> | SubmissionCreateWithoutHackathonInput[] | SubmissionUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutHackathonInput | SubmissionCreateOrConnectWithoutHackathonInput[]
    createMany?: SubmissionCreateManyHackathonInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutHackathonNestedInput = {
    create?: XOR<UserCreateWithoutHackathonInput, UserUncheckedCreateWithoutHackathonInput>
    connectOrCreate?: UserCreateOrConnectWithoutHackathonInput
    upsert?: UserUpsertWithoutHackathonInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHackathonInput, UserUpdateWithoutHackathonInput>, UserUncheckedUpdateWithoutHackathonInput>
  }

  export type AdminUpdateOneWithoutHackathonsNestedInput = {
    create?: XOR<AdminCreateWithoutHackathonsInput, AdminUncheckedCreateWithoutHackathonsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutHackathonsInput
    upsert?: AdminUpsertWithoutHackathonsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutHackathonsInput, AdminUpdateWithoutHackathonsInput>, AdminUncheckedUpdateWithoutHackathonsInput>
  }

  export type RegisterUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<RegisterCreateWithoutHackathonInput, RegisterUncheckedCreateWithoutHackathonInput> | RegisterCreateWithoutHackathonInput[] | RegisterUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutHackathonInput | RegisterCreateOrConnectWithoutHackathonInput[]
    upsert?: RegisterUpsertWithWhereUniqueWithoutHackathonInput | RegisterUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: RegisterCreateManyHackathonInputEnvelope
    set?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    disconnect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    delete?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    update?: RegisterUpdateWithWhereUniqueWithoutHackathonInput | RegisterUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: RegisterUpdateManyWithWhereWithoutHackathonInput | RegisterUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<SubmissionCreateWithoutHackathonInput, SubmissionUncheckedCreateWithoutHackathonInput> | SubmissionCreateWithoutHackathonInput[] | SubmissionUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutHackathonInput | SubmissionCreateOrConnectWithoutHackathonInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutHackathonInput | SubmissionUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: SubmissionCreateManyHackathonInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutHackathonInput | SubmissionUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutHackathonInput | SubmissionUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RegisterUncheckedUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<RegisterCreateWithoutHackathonInput, RegisterUncheckedCreateWithoutHackathonInput> | RegisterCreateWithoutHackathonInput[] | RegisterUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutHackathonInput | RegisterCreateOrConnectWithoutHackathonInput[]
    upsert?: RegisterUpsertWithWhereUniqueWithoutHackathonInput | RegisterUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: RegisterCreateManyHackathonInputEnvelope
    set?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    disconnect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    delete?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    update?: RegisterUpdateWithWhereUniqueWithoutHackathonInput | RegisterUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: RegisterUpdateManyWithWhereWithoutHackathonInput | RegisterUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<SubmissionCreateWithoutHackathonInput, SubmissionUncheckedCreateWithoutHackathonInput> | SubmissionCreateWithoutHackathonInput[] | SubmissionUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutHackathonInput | SubmissionCreateOrConnectWithoutHackathonInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutHackathonInput | SubmissionUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: SubmissionCreateManyHackathonInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutHackathonInput | SubmissionUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutHackathonInput | SubmissionUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type HackathonCreateNestedManyWithoutAdminInput = {
    create?: XOR<HackathonCreateWithoutAdminInput, HackathonUncheckedCreateWithoutAdminInput> | HackathonCreateWithoutAdminInput[] | HackathonUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HackathonCreateOrConnectWithoutAdminInput | HackathonCreateOrConnectWithoutAdminInput[]
    createMany?: HackathonCreateManyAdminInputEnvelope
    connect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
  }

  export type HackathonUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<HackathonCreateWithoutAdminInput, HackathonUncheckedCreateWithoutAdminInput> | HackathonCreateWithoutAdminInput[] | HackathonUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HackathonCreateOrConnectWithoutAdminInput | HackathonCreateOrConnectWithoutAdminInput[]
    createMany?: HackathonCreateManyAdminInputEnvelope
    connect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
  }

  export type HackathonUpdateManyWithoutAdminNestedInput = {
    create?: XOR<HackathonCreateWithoutAdminInput, HackathonUncheckedCreateWithoutAdminInput> | HackathonCreateWithoutAdminInput[] | HackathonUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HackathonCreateOrConnectWithoutAdminInput | HackathonCreateOrConnectWithoutAdminInput[]
    upsert?: HackathonUpsertWithWhereUniqueWithoutAdminInput | HackathonUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: HackathonCreateManyAdminInputEnvelope
    set?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    disconnect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    delete?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    connect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    update?: HackathonUpdateWithWhereUniqueWithoutAdminInput | HackathonUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: HackathonUpdateManyWithWhereWithoutAdminInput | HackathonUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: HackathonScalarWhereInput | HackathonScalarWhereInput[]
  }

  export type HackathonUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<HackathonCreateWithoutAdminInput, HackathonUncheckedCreateWithoutAdminInput> | HackathonCreateWithoutAdminInput[] | HackathonUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HackathonCreateOrConnectWithoutAdminInput | HackathonCreateOrConnectWithoutAdminInput[]
    upsert?: HackathonUpsertWithWhereUniqueWithoutAdminInput | HackathonUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: HackathonCreateManyAdminInputEnvelope
    set?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    disconnect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    delete?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    connect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    update?: HackathonUpdateWithWhereUniqueWithoutAdminInput | HackathonUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: HackathonUpdateManyWithWhereWithoutAdminInput | HackathonUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: HackathonScalarWhereInput | HackathonScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutRegisterInput = {
    create?: XOR<TeamCreateWithoutRegisterInput, TeamUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: TeamCreateOrConnectWithoutRegisterInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRegisterInput = {
    create?: XOR<UserCreateWithoutRegisterInput, UserUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegisterInput
    connect?: UserWhereUniqueInput
  }

  export type HackathonCreateNestedOneWithoutRegisterInput = {
    create?: XOR<HackathonCreateWithoutRegisterInput, HackathonUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutRegisterInput
    connect?: HackathonWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutRegisterInput = {
    create?: XOR<SubmissionCreateWithoutRegisterInput, SubmissionUncheckedCreateWithoutRegisterInput> | SubmissionCreateWithoutRegisterInput[] | SubmissionUncheckedCreateWithoutRegisterInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutRegisterInput | SubmissionCreateOrConnectWithoutRegisterInput[]
    createMany?: SubmissionCreateManyRegisterInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ParticipantCreateNestedManyWithoutRegisterInput = {
    create?: XOR<ParticipantCreateWithoutRegisterInput, ParticipantUncheckedCreateWithoutRegisterInput> | ParticipantCreateWithoutRegisterInput[] | ParticipantUncheckedCreateWithoutRegisterInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutRegisterInput | ParticipantCreateOrConnectWithoutRegisterInput[]
    createMany?: ParticipantCreateManyRegisterInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutRegisterInput = {
    create?: XOR<SubmissionCreateWithoutRegisterInput, SubmissionUncheckedCreateWithoutRegisterInput> | SubmissionCreateWithoutRegisterInput[] | SubmissionUncheckedCreateWithoutRegisterInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutRegisterInput | SubmissionCreateOrConnectWithoutRegisterInput[]
    createMany?: SubmissionCreateManyRegisterInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ParticipantUncheckedCreateNestedManyWithoutRegisterInput = {
    create?: XOR<ParticipantCreateWithoutRegisterInput, ParticipantUncheckedCreateWithoutRegisterInput> | ParticipantCreateWithoutRegisterInput[] | ParticipantUncheckedCreateWithoutRegisterInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutRegisterInput | ParticipantCreateOrConnectWithoutRegisterInput[]
    createMany?: ParticipantCreateManyRegisterInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type TeamUpdateOneRequiredWithoutRegisterNestedInput = {
    create?: XOR<TeamCreateWithoutRegisterInput, TeamUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: TeamCreateOrConnectWithoutRegisterInput
    upsert?: TeamUpsertWithoutRegisterInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutRegisterInput, TeamUpdateWithoutRegisterInput>, TeamUncheckedUpdateWithoutRegisterInput>
  }

  export type UserUpdateOneRequiredWithoutRegisterNestedInput = {
    create?: XOR<UserCreateWithoutRegisterInput, UserUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegisterInput
    upsert?: UserUpsertWithoutRegisterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegisterInput, UserUpdateWithoutRegisterInput>, UserUncheckedUpdateWithoutRegisterInput>
  }

  export type HackathonUpdateOneRequiredWithoutRegisterNestedInput = {
    create?: XOR<HackathonCreateWithoutRegisterInput, HackathonUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutRegisterInput
    upsert?: HackathonUpsertWithoutRegisterInput
    connect?: HackathonWhereUniqueInput
    update?: XOR<XOR<HackathonUpdateToOneWithWhereWithoutRegisterInput, HackathonUpdateWithoutRegisterInput>, HackathonUncheckedUpdateWithoutRegisterInput>
  }

  export type SubmissionUpdateManyWithoutRegisterNestedInput = {
    create?: XOR<SubmissionCreateWithoutRegisterInput, SubmissionUncheckedCreateWithoutRegisterInput> | SubmissionCreateWithoutRegisterInput[] | SubmissionUncheckedCreateWithoutRegisterInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutRegisterInput | SubmissionCreateOrConnectWithoutRegisterInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutRegisterInput | SubmissionUpsertWithWhereUniqueWithoutRegisterInput[]
    createMany?: SubmissionCreateManyRegisterInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutRegisterInput | SubmissionUpdateWithWhereUniqueWithoutRegisterInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutRegisterInput | SubmissionUpdateManyWithWhereWithoutRegisterInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ParticipantUpdateManyWithoutRegisterNestedInput = {
    create?: XOR<ParticipantCreateWithoutRegisterInput, ParticipantUncheckedCreateWithoutRegisterInput> | ParticipantCreateWithoutRegisterInput[] | ParticipantUncheckedCreateWithoutRegisterInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutRegisterInput | ParticipantCreateOrConnectWithoutRegisterInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutRegisterInput | ParticipantUpsertWithWhereUniqueWithoutRegisterInput[]
    createMany?: ParticipantCreateManyRegisterInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutRegisterInput | ParticipantUpdateWithWhereUniqueWithoutRegisterInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutRegisterInput | ParticipantUpdateManyWithWhereWithoutRegisterInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutRegisterNestedInput = {
    create?: XOR<SubmissionCreateWithoutRegisterInput, SubmissionUncheckedCreateWithoutRegisterInput> | SubmissionCreateWithoutRegisterInput[] | SubmissionUncheckedCreateWithoutRegisterInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutRegisterInput | SubmissionCreateOrConnectWithoutRegisterInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutRegisterInput | SubmissionUpsertWithWhereUniqueWithoutRegisterInput[]
    createMany?: SubmissionCreateManyRegisterInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutRegisterInput | SubmissionUpdateWithWhereUniqueWithoutRegisterInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutRegisterInput | SubmissionUpdateManyWithWhereWithoutRegisterInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ParticipantUncheckedUpdateManyWithoutRegisterNestedInput = {
    create?: XOR<ParticipantCreateWithoutRegisterInput, ParticipantUncheckedCreateWithoutRegisterInput> | ParticipantCreateWithoutRegisterInput[] | ParticipantUncheckedCreateWithoutRegisterInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutRegisterInput | ParticipantCreateOrConnectWithoutRegisterInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutRegisterInput | ParticipantUpsertWithWhereUniqueWithoutRegisterInput[]
    createMany?: ParticipantCreateManyRegisterInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutRegisterInput | ParticipantUpdateWithWhereUniqueWithoutRegisterInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutRegisterInput | ParticipantUpdateManyWithWhereWithoutRegisterInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput
    connect?: UserWhereUniqueInput
  }

  export type HackathonCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<HackathonCreateWithoutSubmissionInput, HackathonUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutSubmissionInput
    connect?: HackathonWhereUniqueInput
  }

  export type RegisterCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<RegisterCreateWithoutSubmissionInput, RegisterUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: RegisterCreateOrConnectWithoutSubmissionInput
    connect?: RegisterWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput
    upsert?: UserUpsertWithoutSubmissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionInput, UserUpdateWithoutSubmissionInput>, UserUncheckedUpdateWithoutSubmissionInput>
  }

  export type HackathonUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<HackathonCreateWithoutSubmissionInput, HackathonUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutSubmissionInput
    upsert?: HackathonUpsertWithoutSubmissionInput
    connect?: HackathonWhereUniqueInput
    update?: XOR<XOR<HackathonUpdateToOneWithWhereWithoutSubmissionInput, HackathonUpdateWithoutSubmissionInput>, HackathonUncheckedUpdateWithoutSubmissionInput>
  }

  export type RegisterUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<RegisterCreateWithoutSubmissionInput, RegisterUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: RegisterCreateOrConnectWithoutSubmissionInput
    upsert?: RegisterUpsertWithoutSubmissionInput
    connect?: RegisterWhereUniqueInput
    update?: XOR<XOR<RegisterUpdateToOneWithWhereWithoutSubmissionInput, RegisterUpdateWithoutSubmissionInput>, RegisterUncheckedUpdateWithoutSubmissionInput>
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

  export type TeamCreateWithoutUserInput = {
    id?: string
    name: string
    leader_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Register?: RegisterCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    leader_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Register?: RegisterUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutUserInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
  }

  export type HackathonCreateWithoutAdminInput = {
    id?: string
    name: string
    max_teams: number
    max_participants: number
    min_participants: number
    prize: string
    prize_pool?: number | null
    overview: string
    cover_image: string
    profile_image: string
    webinar_time: Date | string
    webinar_link: string
    presentation_link: string
    presentation_time: Date | string
    result_time: Date | string
    points_for_first_place: string
    points_for_second_place: string
    points_for_third_place: string
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Admin?: AdminCreateNestedOneWithoutHackathonsInput
    Register?: RegisterCreateNestedManyWithoutHackathonInput
    Submission?: SubmissionCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    max_teams: number
    max_participants: number
    min_participants: number
    prize: string
    prize_pool?: number | null
    overview: string
    cover_image: string
    profile_image: string
    webinar_time: Date | string
    webinar_link: string
    presentation_link: string
    presentation_time: Date | string
    result_time: Date | string
    points_for_first_place: string
    points_for_second_place: string
    points_for_third_place: string
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
    Register?: RegisterUncheckedCreateNestedManyWithoutHackathonInput
    Submission?: SubmissionUncheckedCreateNestedManyWithoutHackathonInput
  }

  export type HackathonCreateOrConnectWithoutAdminInput = {
    where: HackathonWhereUniqueInput
    create: XOR<HackathonCreateWithoutAdminInput, HackathonUncheckedCreateWithoutAdminInput>
  }

  export type HackathonCreateManyAdminInputEnvelope = {
    data: HackathonCreateManyAdminInput | HackathonCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type RegisterCreateWithoutUserInput = {
    id?: string
    team: TeamCreateNestedOneWithoutRegisterInput
    hackathon: HackathonCreateNestedOneWithoutRegisterInput
    Submission?: SubmissionCreateNestedManyWithoutRegisterInput
    Participant?: ParticipantCreateNestedManyWithoutRegisterInput
  }

  export type RegisterUncheckedCreateWithoutUserInput = {
    id?: string
    team_id: string
    hackathon_id: string
    Submission?: SubmissionUncheckedCreateNestedManyWithoutRegisterInput
    Participant?: ParticipantUncheckedCreateNestedManyWithoutRegisterInput
  }

  export type RegisterCreateOrConnectWithoutUserInput = {
    where: RegisterWhereUniqueInput
    create: XOR<RegisterCreateWithoutUserInput, RegisterUncheckedCreateWithoutUserInput>
  }

  export type RegisterCreateManyUserInputEnvelope = {
    data: RegisterCreateManyUserInput | RegisterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    repo_link: string
    placement: string
    hackathon: HackathonCreateNestedOneWithoutSubmissionInput
    register: RegisterCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    repo_link: string
    placement: string
    hackathon_id: string
    register_id: string
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantCreateWithoutParticipantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    register: RegisterCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutParticipantInput = {
    id?: string
    register_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantCreateOrConnectWithoutParticipantInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutParticipantInput, ParticipantUncheckedCreateWithoutParticipantInput>
  }

  export type ParticipantCreateManyParticipantInputEnvelope = {
    data: ParticipantCreateManyParticipantInput | ParticipantCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutUserInput = {
    update: XOR<TeamUpdateWithoutUserInput, TeamUncheckedUpdateWithoutUserInput>
    create: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutUserInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutUserInput, TeamUncheckedUpdateWithoutUserInput>
  }

  export type TeamUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leader_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Register?: RegisterUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leader_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Register?: RegisterUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type HackathonUpsertWithWhereUniqueWithoutAdminInput = {
    where: HackathonWhereUniqueInput
    update: XOR<HackathonUpdateWithoutAdminInput, HackathonUncheckedUpdateWithoutAdminInput>
    create: XOR<HackathonCreateWithoutAdminInput, HackathonUncheckedCreateWithoutAdminInput>
  }

  export type HackathonUpdateWithWhereUniqueWithoutAdminInput = {
    where: HackathonWhereUniqueInput
    data: XOR<HackathonUpdateWithoutAdminInput, HackathonUncheckedUpdateWithoutAdminInput>
  }

  export type HackathonUpdateManyWithWhereWithoutAdminInput = {
    where: HackathonScalarWhereInput
    data: XOR<HackathonUpdateManyMutationInput, HackathonUncheckedUpdateManyWithoutAdminInput>
  }

  export type HackathonScalarWhereInput = {
    AND?: HackathonScalarWhereInput | HackathonScalarWhereInput[]
    OR?: HackathonScalarWhereInput[]
    NOT?: HackathonScalarWhereInput | HackathonScalarWhereInput[]
    id?: StringFilter<"Hackathon"> | string
    name?: StringFilter<"Hackathon"> | string
    max_teams?: IntFilter<"Hackathon"> | number
    max_participants?: IntFilter<"Hackathon"> | number
    min_participants?: IntFilter<"Hackathon"> | number
    prize?: StringFilter<"Hackathon"> | string
    prize_pool?: IntNullableFilter<"Hackathon"> | number | null
    overview?: StringFilter<"Hackathon"> | string
    cover_image?: StringFilter<"Hackathon"> | string
    profile_image?: StringFilter<"Hackathon"> | string
    webinar_time?: DateTimeFilter<"Hackathon"> | Date | string
    webinar_link?: StringFilter<"Hackathon"> | string
    presentation_link?: StringFilter<"Hackathon"> | string
    presentation_time?: DateTimeFilter<"Hackathon"> | Date | string
    result_time?: DateTimeFilter<"Hackathon"> | Date | string
    points_for_first_place?: StringFilter<"Hackathon"> | string
    points_for_second_place?: StringFilter<"Hackathon"> | string
    points_for_third_place?: StringFilter<"Hackathon"> | string
    admin_id?: StringFilter<"Hackathon"> | string
    start_date?: DateTimeFilter<"Hackathon"> | Date | string
    end_date?: DateTimeFilter<"Hackathon"> | Date | string
    createdAt?: DateTimeFilter<"Hackathon"> | Date | string
    updatedAt?: DateTimeFilter<"Hackathon"> | Date | string
    adminId?: StringNullableFilter<"Hackathon"> | string | null
  }

  export type RegisterUpsertWithWhereUniqueWithoutUserInput = {
    where: RegisterWhereUniqueInput
    update: XOR<RegisterUpdateWithoutUserInput, RegisterUncheckedUpdateWithoutUserInput>
    create: XOR<RegisterCreateWithoutUserInput, RegisterUncheckedCreateWithoutUserInput>
  }

  export type RegisterUpdateWithWhereUniqueWithoutUserInput = {
    where: RegisterWhereUniqueInput
    data: XOR<RegisterUpdateWithoutUserInput, RegisterUncheckedUpdateWithoutUserInput>
  }

  export type RegisterUpdateManyWithWhereWithoutUserInput = {
    where: RegisterScalarWhereInput
    data: XOR<RegisterUpdateManyMutationInput, RegisterUncheckedUpdateManyWithoutUserInput>
  }

  export type RegisterScalarWhereInput = {
    AND?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
    OR?: RegisterScalarWhereInput[]
    NOT?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
    id?: StringFilter<"Register"> | string
    team_id?: StringFilter<"Register"> | string
    user_id?: StringFilter<"Register"> | string
    hackathon_id?: StringFilter<"Register"> | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    user_id?: StringFilter<"Submission"> | string
    repo_link?: StringFilter<"Submission"> | string
    placement?: StringFilter<"Submission"> | string
    hackathon_id?: StringFilter<"Submission"> | string
    register_id?: StringFilter<"Submission"> | string
  }

  export type ParticipantUpsertWithWhereUniqueWithoutParticipantInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutParticipantInput, ParticipantUncheckedUpdateWithoutParticipantInput>
    create: XOR<ParticipantCreateWithoutParticipantInput, ParticipantUncheckedCreateWithoutParticipantInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutParticipantInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutParticipantInput, ParticipantUncheckedUpdateWithoutParticipantInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutParticipantInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutParticipantInput>
  }

  export type ParticipantScalarWhereInput = {
    AND?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    OR?: ParticipantScalarWhereInput[]
    NOT?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    id?: StringFilter<"Participant"> | string
    participant_id?: StringFilter<"Participant"> | string
    register_id?: StringFilter<"Participant"> | string
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeFilter<"Participant"> | Date | string
  }

  export type UserCreateWithoutParticipantInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutUserInput
    Hackathon?: HackathonCreateNestedManyWithoutAdminInput
    Register?: RegisterCreateNestedManyWithoutUserInput
    Submission?: SubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipantInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    team_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Hackathon?: HackathonUncheckedCreateNestedManyWithoutAdminInput
    Register?: RegisterUncheckedCreateNestedManyWithoutUserInput
    Submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipantInput, UserUncheckedCreateWithoutParticipantInput>
  }

  export type RegisterCreateWithoutParticipantInput = {
    id?: string
    team: TeamCreateNestedOneWithoutRegisterInput
    user: UserCreateNestedOneWithoutRegisterInput
    hackathon: HackathonCreateNestedOneWithoutRegisterInput
    Submission?: SubmissionCreateNestedManyWithoutRegisterInput
  }

  export type RegisterUncheckedCreateWithoutParticipantInput = {
    id?: string
    team_id: string
    user_id: string
    hackathon_id: string
    Submission?: SubmissionUncheckedCreateNestedManyWithoutRegisterInput
  }

  export type RegisterCreateOrConnectWithoutParticipantInput = {
    where: RegisterWhereUniqueInput
    create: XOR<RegisterCreateWithoutParticipantInput, RegisterUncheckedCreateWithoutParticipantInput>
  }

  export type UserUpsertWithoutParticipantInput = {
    update: XOR<UserUpdateWithoutParticipantInput, UserUncheckedUpdateWithoutParticipantInput>
    create: XOR<UserCreateWithoutParticipantInput, UserUncheckedCreateWithoutParticipantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipantInput, UserUncheckedUpdateWithoutParticipantInput>
  }

  export type UserUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutUserNestedInput
    Hackathon?: HackathonUpdateManyWithoutAdminNestedInput
    Register?: RegisterUpdateManyWithoutUserNestedInput
    Submission?: SubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    team_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Hackathon?: HackathonUncheckedUpdateManyWithoutAdminNestedInput
    Register?: RegisterUncheckedUpdateManyWithoutUserNestedInput
    Submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RegisterUpsertWithoutParticipantInput = {
    update: XOR<RegisterUpdateWithoutParticipantInput, RegisterUncheckedUpdateWithoutParticipantInput>
    create: XOR<RegisterCreateWithoutParticipantInput, RegisterUncheckedCreateWithoutParticipantInput>
    where?: RegisterWhereInput
  }

  export type RegisterUpdateToOneWithWhereWithoutParticipantInput = {
    where?: RegisterWhereInput
    data: XOR<RegisterUpdateWithoutParticipantInput, RegisterUncheckedUpdateWithoutParticipantInput>
  }

  export type RegisterUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutRegisterNestedInput
    user?: UserUpdateOneRequiredWithoutRegisterNestedInput
    hackathon?: HackathonUpdateOneRequiredWithoutRegisterNestedInput
    Submission?: SubmissionUpdateManyWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
    Submission?: SubmissionUncheckedUpdateManyWithoutRegisterNestedInput
  }

  export type UserCreateWithoutTeamInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Hackathon?: HackathonCreateNestedManyWithoutAdminInput
    Register?: RegisterCreateNestedManyWithoutUserInput
    Submission?: SubmissionCreateNestedManyWithoutUserInput
    Participant?: ParticipantCreateNestedManyWithoutParticipantInput
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Hackathon?: HackathonUncheckedCreateNestedManyWithoutAdminInput
    Register?: RegisterUncheckedCreateNestedManyWithoutUserInput
    Submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    Participant?: ParticipantUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserCreateManyTeamInputEnvelope = {
    data: UserCreateManyTeamInput | UserCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type RegisterCreateWithoutTeamInput = {
    id?: string
    user: UserCreateNestedOneWithoutRegisterInput
    hackathon: HackathonCreateNestedOneWithoutRegisterInput
    Submission?: SubmissionCreateNestedManyWithoutRegisterInput
    Participant?: ParticipantCreateNestedManyWithoutRegisterInput
  }

  export type RegisterUncheckedCreateWithoutTeamInput = {
    id?: string
    user_id: string
    hackathon_id: string
    Submission?: SubmissionUncheckedCreateNestedManyWithoutRegisterInput
    Participant?: ParticipantUncheckedCreateNestedManyWithoutRegisterInput
  }

  export type RegisterCreateOrConnectWithoutTeamInput = {
    where: RegisterWhereUniqueInput
    create: XOR<RegisterCreateWithoutTeamInput, RegisterUncheckedCreateWithoutTeamInput>
  }

  export type RegisterCreateManyTeamInputEnvelope = {
    data: RegisterCreateManyTeamInput | RegisterCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    date_of_birth?: DateTimeFilter<"User"> | Date | string
    phone_number?: StringFilter<"User"> | string
    position?: StringFilter<"User"> | string
    points?: IntFilter<"User"> | number
    team_id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type RegisterUpsertWithWhereUniqueWithoutTeamInput = {
    where: RegisterWhereUniqueInput
    update: XOR<RegisterUpdateWithoutTeamInput, RegisterUncheckedUpdateWithoutTeamInput>
    create: XOR<RegisterCreateWithoutTeamInput, RegisterUncheckedCreateWithoutTeamInput>
  }

  export type RegisterUpdateWithWhereUniqueWithoutTeamInput = {
    where: RegisterWhereUniqueInput
    data: XOR<RegisterUpdateWithoutTeamInput, RegisterUncheckedUpdateWithoutTeamInput>
  }

  export type RegisterUpdateManyWithWhereWithoutTeamInput = {
    where: RegisterScalarWhereInput
    data: XOR<RegisterUpdateManyMutationInput, RegisterUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserCreateWithoutHackathonInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutUserInput
    Register?: RegisterCreateNestedManyWithoutUserInput
    Submission?: SubmissionCreateNestedManyWithoutUserInput
    Participant?: ParticipantCreateNestedManyWithoutParticipantInput
  }

  export type UserUncheckedCreateWithoutHackathonInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    team_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Register?: RegisterUncheckedCreateNestedManyWithoutUserInput
    Submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    Participant?: ParticipantUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type UserCreateOrConnectWithoutHackathonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHackathonInput, UserUncheckedCreateWithoutHackathonInput>
  }

  export type AdminCreateWithoutHackathonsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutHackathonsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutHackathonsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutHackathonsInput, AdminUncheckedCreateWithoutHackathonsInput>
  }

  export type RegisterCreateWithoutHackathonInput = {
    id?: string
    team: TeamCreateNestedOneWithoutRegisterInput
    user: UserCreateNestedOneWithoutRegisterInput
    Submission?: SubmissionCreateNestedManyWithoutRegisterInput
    Participant?: ParticipantCreateNestedManyWithoutRegisterInput
  }

  export type RegisterUncheckedCreateWithoutHackathonInput = {
    id?: string
    team_id: string
    user_id: string
    Submission?: SubmissionUncheckedCreateNestedManyWithoutRegisterInput
    Participant?: ParticipantUncheckedCreateNestedManyWithoutRegisterInput
  }

  export type RegisterCreateOrConnectWithoutHackathonInput = {
    where: RegisterWhereUniqueInput
    create: XOR<RegisterCreateWithoutHackathonInput, RegisterUncheckedCreateWithoutHackathonInput>
  }

  export type RegisterCreateManyHackathonInputEnvelope = {
    data: RegisterCreateManyHackathonInput | RegisterCreateManyHackathonInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutHackathonInput = {
    id?: string
    repo_link: string
    placement: string
    user: UserCreateNestedOneWithoutSubmissionInput
    register: RegisterCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutHackathonInput = {
    id?: string
    user_id: string
    repo_link: string
    placement: string
    register_id: string
  }

  export type SubmissionCreateOrConnectWithoutHackathonInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutHackathonInput, SubmissionUncheckedCreateWithoutHackathonInput>
  }

  export type SubmissionCreateManyHackathonInputEnvelope = {
    data: SubmissionCreateManyHackathonInput | SubmissionCreateManyHackathonInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHackathonInput = {
    update: XOR<UserUpdateWithoutHackathonInput, UserUncheckedUpdateWithoutHackathonInput>
    create: XOR<UserCreateWithoutHackathonInput, UserUncheckedCreateWithoutHackathonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHackathonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHackathonInput, UserUncheckedUpdateWithoutHackathonInput>
  }

  export type UserUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutUserNestedInput
    Register?: RegisterUpdateManyWithoutUserNestedInput
    Submission?: SubmissionUpdateManyWithoutUserNestedInput
    Participant?: ParticipantUpdateManyWithoutParticipantNestedInput
  }

  export type UserUncheckedUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    team_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Register?: RegisterUncheckedUpdateManyWithoutUserNestedInput
    Submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    Participant?: ParticipantUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type AdminUpsertWithoutHackathonsInput = {
    update: XOR<AdminUpdateWithoutHackathonsInput, AdminUncheckedUpdateWithoutHackathonsInput>
    create: XOR<AdminCreateWithoutHackathonsInput, AdminUncheckedCreateWithoutHackathonsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutHackathonsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutHackathonsInput, AdminUncheckedUpdateWithoutHackathonsInput>
  }

  export type AdminUpdateWithoutHackathonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutHackathonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegisterUpsertWithWhereUniqueWithoutHackathonInput = {
    where: RegisterWhereUniqueInput
    update: XOR<RegisterUpdateWithoutHackathonInput, RegisterUncheckedUpdateWithoutHackathonInput>
    create: XOR<RegisterCreateWithoutHackathonInput, RegisterUncheckedCreateWithoutHackathonInput>
  }

  export type RegisterUpdateWithWhereUniqueWithoutHackathonInput = {
    where: RegisterWhereUniqueInput
    data: XOR<RegisterUpdateWithoutHackathonInput, RegisterUncheckedUpdateWithoutHackathonInput>
  }

  export type RegisterUpdateManyWithWhereWithoutHackathonInput = {
    where: RegisterScalarWhereInput
    data: XOR<RegisterUpdateManyMutationInput, RegisterUncheckedUpdateManyWithoutHackathonInput>
  }

  export type SubmissionUpsertWithWhereUniqueWithoutHackathonInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutHackathonInput, SubmissionUncheckedUpdateWithoutHackathonInput>
    create: XOR<SubmissionCreateWithoutHackathonInput, SubmissionUncheckedCreateWithoutHackathonInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutHackathonInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutHackathonInput, SubmissionUncheckedUpdateWithoutHackathonInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutHackathonInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutHackathonInput>
  }

  export type HackathonCreateWithoutAdminInput = {
    id?: string
    name: string
    max_teams: number
    max_participants: number
    min_participants: number
    prize: string
    prize_pool?: number | null
    overview: string
    cover_image: string
    profile_image: string
    webinar_time: Date | string
    webinar_link: string
    presentation_link: string
    presentation_time: Date | string
    result_time: Date | string
    points_for_first_place: string
    points_for_second_place: string
    points_for_third_place: string
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutHackathonInput
    Register?: RegisterCreateNestedManyWithoutHackathonInput
    Submission?: SubmissionCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    max_teams: number
    max_participants: number
    min_participants: number
    prize: string
    prize_pool?: number | null
    overview: string
    cover_image: string
    profile_image: string
    webinar_time: Date | string
    webinar_link: string
    presentation_link: string
    presentation_time: Date | string
    result_time: Date | string
    points_for_first_place: string
    points_for_second_place: string
    points_for_third_place: string
    admin_id: string
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Register?: RegisterUncheckedCreateNestedManyWithoutHackathonInput
    Submission?: SubmissionUncheckedCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUpsertWithWhereUniqueWithoutAdminInput = {
    where: HackathonWhereUniqueInput
    update: XOR<HackathonUpdateWithoutAdminInput, HackathonUncheckedUpdateWithoutAdminInput>
    create: XOR<HackathonCreateWithoutAdminInput, HackathonUncheckedCreateWithoutAdminInput>
  }

  export type HackathonUpdateWithWhereUniqueWithoutAdminInput = {
    where: HackathonWhereUniqueInput
    data: XOR<HackathonUpdateWithoutAdminInput, HackathonUncheckedUpdateWithoutAdminInput>
  }

  export type HackathonUpdateManyWithWhereWithoutAdminInput = {
    where: HackathonScalarWhereInput
    data: XOR<HackathonUpdateManyMutationInput, HackathonUncheckedUpdateManyWithoutAdminInput>
  }

  export type TeamCreateWithoutRegisterInput = {
    id?: string
    name: string
    leader_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutRegisterInput = {
    id?: string
    name: string
    leader_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutRegisterInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutRegisterInput, TeamUncheckedCreateWithoutRegisterInput>
  }

  export type UserCreateWithoutRegisterInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutUserInput
    Hackathon?: HackathonCreateNestedManyWithoutAdminInput
    Submission?: SubmissionCreateNestedManyWithoutUserInput
    Participant?: ParticipantCreateNestedManyWithoutParticipantInput
  }

  export type UserUncheckedCreateWithoutRegisterInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    team_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Hackathon?: HackathonUncheckedCreateNestedManyWithoutAdminInput
    Submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    Participant?: ParticipantUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type UserCreateOrConnectWithoutRegisterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegisterInput, UserUncheckedCreateWithoutRegisterInput>
  }

  export type HackathonCreateWithoutRegisterInput = {
    id?: string
    name: string
    max_teams: number
    max_participants: number
    min_participants: number
    prize: string
    prize_pool?: number | null
    overview: string
    cover_image: string
    profile_image: string
    webinar_time: Date | string
    webinar_link: string
    presentation_link: string
    presentation_time: Date | string
    result_time: Date | string
    points_for_first_place: string
    points_for_second_place: string
    points_for_third_place: string
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutHackathonInput
    Admin?: AdminCreateNestedOneWithoutHackathonsInput
    Submission?: SubmissionCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUncheckedCreateWithoutRegisterInput = {
    id?: string
    name: string
    max_teams: number
    max_participants: number
    min_participants: number
    prize: string
    prize_pool?: number | null
    overview: string
    cover_image: string
    profile_image: string
    webinar_time: Date | string
    webinar_link: string
    presentation_link: string
    presentation_time: Date | string
    result_time: Date | string
    points_for_first_place: string
    points_for_second_place: string
    points_for_third_place: string
    admin_id: string
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
    Submission?: SubmissionUncheckedCreateNestedManyWithoutHackathonInput
  }

  export type HackathonCreateOrConnectWithoutRegisterInput = {
    where: HackathonWhereUniqueInput
    create: XOR<HackathonCreateWithoutRegisterInput, HackathonUncheckedCreateWithoutRegisterInput>
  }

  export type SubmissionCreateWithoutRegisterInput = {
    id?: string
    repo_link: string
    placement: string
    user: UserCreateNestedOneWithoutSubmissionInput
    hackathon: HackathonCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutRegisterInput = {
    id?: string
    user_id: string
    repo_link: string
    placement: string
    hackathon_id: string
  }

  export type SubmissionCreateOrConnectWithoutRegisterInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutRegisterInput, SubmissionUncheckedCreateWithoutRegisterInput>
  }

  export type SubmissionCreateManyRegisterInputEnvelope = {
    data: SubmissionCreateManyRegisterInput | SubmissionCreateManyRegisterInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantCreateWithoutRegisterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participant: UserCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutRegisterInput = {
    id?: string
    participant_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantCreateOrConnectWithoutRegisterInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutRegisterInput, ParticipantUncheckedCreateWithoutRegisterInput>
  }

  export type ParticipantCreateManyRegisterInputEnvelope = {
    data: ParticipantCreateManyRegisterInput | ParticipantCreateManyRegisterInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutRegisterInput = {
    update: XOR<TeamUpdateWithoutRegisterInput, TeamUncheckedUpdateWithoutRegisterInput>
    create: XOR<TeamCreateWithoutRegisterInput, TeamUncheckedCreateWithoutRegisterInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutRegisterInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutRegisterInput, TeamUncheckedUpdateWithoutRegisterInput>
  }

  export type TeamUpdateWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leader_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leader_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutRegisterInput = {
    update: XOR<UserUpdateWithoutRegisterInput, UserUncheckedUpdateWithoutRegisterInput>
    create: XOR<UserCreateWithoutRegisterInput, UserUncheckedCreateWithoutRegisterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegisterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegisterInput, UserUncheckedUpdateWithoutRegisterInput>
  }

  export type UserUpdateWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutUserNestedInput
    Hackathon?: HackathonUpdateManyWithoutAdminNestedInput
    Submission?: SubmissionUpdateManyWithoutUserNestedInput
    Participant?: ParticipantUpdateManyWithoutParticipantNestedInput
  }

  export type UserUncheckedUpdateWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    team_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Hackathon?: HackathonUncheckedUpdateManyWithoutAdminNestedInput
    Submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    Participant?: ParticipantUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type HackathonUpsertWithoutRegisterInput = {
    update: XOR<HackathonUpdateWithoutRegisterInput, HackathonUncheckedUpdateWithoutRegisterInput>
    create: XOR<HackathonCreateWithoutRegisterInput, HackathonUncheckedCreateWithoutRegisterInput>
    where?: HackathonWhereInput
  }

  export type HackathonUpdateToOneWithWhereWithoutRegisterInput = {
    where?: HackathonWhereInput
    data: XOR<HackathonUpdateWithoutRegisterInput, HackathonUncheckedUpdateWithoutRegisterInput>
  }

  export type HackathonUpdateWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutHackathonNestedInput
    Admin?: AdminUpdateOneWithoutHackathonsNestedInput
    Submission?: SubmissionUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    Submission?: SubmissionUncheckedUpdateManyWithoutHackathonNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutRegisterInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutRegisterInput, SubmissionUncheckedUpdateWithoutRegisterInput>
    create: XOR<SubmissionCreateWithoutRegisterInput, SubmissionUncheckedCreateWithoutRegisterInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutRegisterInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutRegisterInput, SubmissionUncheckedUpdateWithoutRegisterInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutRegisterInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutRegisterInput>
  }

  export type ParticipantUpsertWithWhereUniqueWithoutRegisterInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutRegisterInput, ParticipantUncheckedUpdateWithoutRegisterInput>
    create: XOR<ParticipantCreateWithoutRegisterInput, ParticipantUncheckedCreateWithoutRegisterInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutRegisterInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutRegisterInput, ParticipantUncheckedUpdateWithoutRegisterInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutRegisterInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutRegisterInput>
  }

  export type UserCreateWithoutSubmissionInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutUserInput
    Hackathon?: HackathonCreateNestedManyWithoutAdminInput
    Register?: RegisterCreateNestedManyWithoutUserInput
    Participant?: ParticipantCreateNestedManyWithoutParticipantInput
  }

  export type UserUncheckedCreateWithoutSubmissionInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    team_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Hackathon?: HackathonUncheckedCreateNestedManyWithoutAdminInput
    Register?: RegisterUncheckedCreateNestedManyWithoutUserInput
    Participant?: ParticipantUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type UserCreateOrConnectWithoutSubmissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
  }

  export type HackathonCreateWithoutSubmissionInput = {
    id?: string
    name: string
    max_teams: number
    max_participants: number
    min_participants: number
    prize: string
    prize_pool?: number | null
    overview: string
    cover_image: string
    profile_image: string
    webinar_time: Date | string
    webinar_link: string
    presentation_link: string
    presentation_time: Date | string
    result_time: Date | string
    points_for_first_place: string
    points_for_second_place: string
    points_for_third_place: string
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutHackathonInput
    Admin?: AdminCreateNestedOneWithoutHackathonsInput
    Register?: RegisterCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUncheckedCreateWithoutSubmissionInput = {
    id?: string
    name: string
    max_teams: number
    max_participants: number
    min_participants: number
    prize: string
    prize_pool?: number | null
    overview: string
    cover_image: string
    profile_image: string
    webinar_time: Date | string
    webinar_link: string
    presentation_link: string
    presentation_time: Date | string
    result_time: Date | string
    points_for_first_place: string
    points_for_second_place: string
    points_for_third_place: string
    admin_id: string
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
    Register?: RegisterUncheckedCreateNestedManyWithoutHackathonInput
  }

  export type HackathonCreateOrConnectWithoutSubmissionInput = {
    where: HackathonWhereUniqueInput
    create: XOR<HackathonCreateWithoutSubmissionInput, HackathonUncheckedCreateWithoutSubmissionInput>
  }

  export type RegisterCreateWithoutSubmissionInput = {
    id?: string
    team: TeamCreateNestedOneWithoutRegisterInput
    user: UserCreateNestedOneWithoutRegisterInput
    hackathon: HackathonCreateNestedOneWithoutRegisterInput
    Participant?: ParticipantCreateNestedManyWithoutRegisterInput
  }

  export type RegisterUncheckedCreateWithoutSubmissionInput = {
    id?: string
    team_id: string
    user_id: string
    hackathon_id: string
    Participant?: ParticipantUncheckedCreateNestedManyWithoutRegisterInput
  }

  export type RegisterCreateOrConnectWithoutSubmissionInput = {
    where: RegisterWhereUniqueInput
    create: XOR<RegisterCreateWithoutSubmissionInput, RegisterUncheckedCreateWithoutSubmissionInput>
  }

  export type UserUpsertWithoutSubmissionInput = {
    update: XOR<UserUpdateWithoutSubmissionInput, UserUncheckedUpdateWithoutSubmissionInput>
    create: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionInput, UserUncheckedUpdateWithoutSubmissionInput>
  }

  export type UserUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutUserNestedInput
    Hackathon?: HackathonUpdateManyWithoutAdminNestedInput
    Register?: RegisterUpdateManyWithoutUserNestedInput
    Participant?: ParticipantUpdateManyWithoutParticipantNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    team_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Hackathon?: HackathonUncheckedUpdateManyWithoutAdminNestedInput
    Register?: RegisterUncheckedUpdateManyWithoutUserNestedInput
    Participant?: ParticipantUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type HackathonUpsertWithoutSubmissionInput = {
    update: XOR<HackathonUpdateWithoutSubmissionInput, HackathonUncheckedUpdateWithoutSubmissionInput>
    create: XOR<HackathonCreateWithoutSubmissionInput, HackathonUncheckedCreateWithoutSubmissionInput>
    where?: HackathonWhereInput
  }

  export type HackathonUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: HackathonWhereInput
    data: XOR<HackathonUpdateWithoutSubmissionInput, HackathonUncheckedUpdateWithoutSubmissionInput>
  }

  export type HackathonUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutHackathonNestedInput
    Admin?: AdminUpdateOneWithoutHackathonsNestedInput
    Register?: RegisterUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    Register?: RegisterUncheckedUpdateManyWithoutHackathonNestedInput
  }

  export type RegisterUpsertWithoutSubmissionInput = {
    update: XOR<RegisterUpdateWithoutSubmissionInput, RegisterUncheckedUpdateWithoutSubmissionInput>
    create: XOR<RegisterCreateWithoutSubmissionInput, RegisterUncheckedCreateWithoutSubmissionInput>
    where?: RegisterWhereInput
  }

  export type RegisterUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: RegisterWhereInput
    data: XOR<RegisterUpdateWithoutSubmissionInput, RegisterUncheckedUpdateWithoutSubmissionInput>
  }

  export type RegisterUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutRegisterNestedInput
    user?: UserUpdateOneRequiredWithoutRegisterNestedInput
    hackathon?: HackathonUpdateOneRequiredWithoutRegisterNestedInput
    Participant?: ParticipantUpdateManyWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
    Participant?: ParticipantUncheckedUpdateManyWithoutRegisterNestedInput
  }

  export type HackathonCreateManyAdminInput = {
    id?: string
    name: string
    max_teams: number
    max_participants: number
    min_participants: number
    prize: string
    prize_pool?: number | null
    overview: string
    cover_image: string
    profile_image: string
    webinar_time: Date | string
    webinar_link: string
    presentation_link: string
    presentation_time: Date | string
    result_time: Date | string
    points_for_first_place: string
    points_for_second_place: string
    points_for_third_place: string
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
  }

  export type RegisterCreateManyUserInput = {
    id?: string
    team_id: string
    hackathon_id: string
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    repo_link: string
    placement: string
    hackathon_id: string
    register_id: string
  }

  export type ParticipantCreateManyParticipantInput = {
    id?: string
    register_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HackathonUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Admin?: AdminUpdateOneWithoutHackathonsNestedInput
    Register?: RegisterUpdateManyWithoutHackathonNestedInput
    Submission?: SubmissionUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    Register?: RegisterUncheckedUpdateManyWithoutHackathonNestedInput
    Submission?: SubmissionUncheckedUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegisterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutRegisterNestedInput
    hackathon?: HackathonUpdateOneRequiredWithoutRegisterNestedInput
    Submission?: SubmissionUpdateManyWithoutRegisterNestedInput
    Participant?: ParticipantUpdateManyWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
    Submission?: SubmissionUncheckedUpdateManyWithoutRegisterNestedInput
    Participant?: ParticipantUncheckedUpdateManyWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_link?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    hackathon?: HackathonUpdateOneRequiredWithoutSubmissionNestedInput
    register?: RegisterUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_link?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
    register_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_link?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
    register_id?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    register?: RegisterUpdateOneRequiredWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    register_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    register_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyTeamInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    date_of_birth: Date | string
    phone_number: string
    position: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegisterCreateManyTeamInput = {
    id?: string
    user_id: string
    hackathon_id: string
  }

  export type UserUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Hackathon?: HackathonUpdateManyWithoutAdminNestedInput
    Register?: RegisterUpdateManyWithoutUserNestedInput
    Submission?: SubmissionUpdateManyWithoutUserNestedInput
    Participant?: ParticipantUpdateManyWithoutParticipantNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Hackathon?: HackathonUncheckedUpdateManyWithoutAdminNestedInput
    Register?: RegisterUncheckedUpdateManyWithoutUserNestedInput
    Submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    Participant?: ParticipantUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone_number?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegisterUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutRegisterNestedInput
    hackathon?: HackathonUpdateOneRequiredWithoutRegisterNestedInput
    Submission?: SubmissionUpdateManyWithoutRegisterNestedInput
    Participant?: ParticipantUpdateManyWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
    Submission?: SubmissionUncheckedUpdateManyWithoutRegisterNestedInput
    Participant?: ParticipantUncheckedUpdateManyWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
  }

  export type RegisterCreateManyHackathonInput = {
    id?: string
    team_id: string
    user_id: string
  }

  export type SubmissionCreateManyHackathonInput = {
    id?: string
    user_id: string
    repo_link: string
    placement: string
    register_id: string
  }

  export type RegisterUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutRegisterNestedInput
    user?: UserUpdateOneRequiredWithoutRegisterNestedInput
    Submission?: SubmissionUpdateManyWithoutRegisterNestedInput
    Participant?: ParticipantUpdateManyWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    Submission?: SubmissionUncheckedUpdateManyWithoutRegisterNestedInput
    Participant?: ParticipantUncheckedUpdateManyWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateManyWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_link?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    register?: RegisterUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    repo_link?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    register_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    repo_link?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    register_id?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutHackathonNestedInput
    Register?: RegisterUpdateManyWithoutHackathonNestedInput
    Submission?: SubmissionUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Register?: RegisterUncheckedUpdateManyWithoutHackathonNestedInput
    Submission?: SubmissionUncheckedUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_teams?: IntFieldUpdateOperationsInput | number
    max_participants?: IntFieldUpdateOperationsInput | number
    min_participants?: IntFieldUpdateOperationsInput | number
    prize?: StringFieldUpdateOperationsInput | string
    prize_pool?: NullableIntFieldUpdateOperationsInput | number | null
    overview?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    webinar_time?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar_link?: StringFieldUpdateOperationsInput | string
    presentation_link?: StringFieldUpdateOperationsInput | string
    presentation_time?: DateTimeFieldUpdateOperationsInput | Date | string
    result_time?: DateTimeFieldUpdateOperationsInput | Date | string
    points_for_first_place?: StringFieldUpdateOperationsInput | string
    points_for_second_place?: StringFieldUpdateOperationsInput | string
    points_for_third_place?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyRegisterInput = {
    id?: string
    user_id: string
    repo_link: string
    placement: string
    hackathon_id: string
  }

  export type ParticipantCreateManyRegisterInput = {
    id?: string
    participant_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    repo_link?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    hackathon?: HackathonUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    repo_link?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    repo_link?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    hackathon_id?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantUpdateWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: UserUpdateOneRequiredWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant_id?: StringFieldUpdateOperationsInput | string
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