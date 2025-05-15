
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Fornecedor
 * 
 */
export type Fornecedor = $Result.DefaultSelection<Prisma.$FornecedorPayload>
/**
 * Model GerenteDeProducao
 * 
 */
export type GerenteDeProducao = $Result.DefaultSelection<Prisma.$GerenteDeProducaoPayload>
/**
 * Model GerenteDeEstoque
 * 
 */
export type GerenteDeEstoque = $Result.DefaultSelection<Prisma.$GerenteDeEstoquePayload>
/**
 * Model Administrador
 * 
 */
export type Administrador = $Result.DefaultSelection<Prisma.$AdministradorPayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Lote
 * 
 */
export type Lote = $Result.DefaultSelection<Prisma.$LotePayload>
/**
 * Model ProdutoLote
 * 
 */
export type ProdutoLote = $Result.DefaultSelection<Prisma.$ProdutoLotePayload>
/**
 * Model Estoque
 * 
 */
export type Estoque = $Result.DefaultSelection<Prisma.$EstoquePayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model Transportadora
 * 
 */
export type Transportadora = $Result.DefaultSelection<Prisma.$TransportadoraPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoDeUsuario: {
  Administrador: 'Administrador',
  GerenteDeEstoque: 'GerenteDeEstoque',
  GerenteDeProducao: 'GerenteDeProducao',
  Fornecedor: 'Fornecedor'
};

export type TipoDeUsuario = (typeof TipoDeUsuario)[keyof typeof TipoDeUsuario]


export const TipoDeProduto: {
  ProdutoFinal: 'ProdutoFinal',
  MateriaPrima: 'MateriaPrima'
};

export type TipoDeProduto = (typeof TipoDeProduto)[keyof typeof TipoDeProduto]


export const StatusPedido: {
  Pendente: 'Pendente',
  EmTransporte: 'EmTransporte',
  Entregue: 'Entregue'
};

export type StatusPedido = (typeof StatusPedido)[keyof typeof StatusPedido]

}

export type TipoDeUsuario = $Enums.TipoDeUsuario

export const TipoDeUsuario: typeof $Enums.TipoDeUsuario

export type TipoDeProduto = $Enums.TipoDeProduto

export const TipoDeProduto: typeof $Enums.TipoDeProduto

export type StatusPedido = $Enums.StatusPedido

export const StatusPedido: typeof $Enums.StatusPedido

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fornecedor`: Exposes CRUD operations for the **Fornecedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fornecedors
    * const fornecedors = await prisma.fornecedor.findMany()
    * ```
    */
  get fornecedor(): Prisma.FornecedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gerenteDeProducao`: Exposes CRUD operations for the **GerenteDeProducao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GerenteDeProducaos
    * const gerenteDeProducaos = await prisma.gerenteDeProducao.findMany()
    * ```
    */
  get gerenteDeProducao(): Prisma.GerenteDeProducaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gerenteDeEstoque`: Exposes CRUD operations for the **GerenteDeEstoque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GerenteDeEstoques
    * const gerenteDeEstoques = await prisma.gerenteDeEstoque.findMany()
    * ```
    */
  get gerenteDeEstoque(): Prisma.GerenteDeEstoqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.administrador`: Exposes CRUD operations for the **Administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.AdministradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lote`: Exposes CRUD operations for the **Lote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lotes
    * const lotes = await prisma.lote.findMany()
    * ```
    */
  get lote(): Prisma.LoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produtoLote`: Exposes CRUD operations for the **ProdutoLote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProdutoLotes
    * const produtoLotes = await prisma.produtoLote.findMany()
    * ```
    */
  get produtoLote(): Prisma.ProdutoLoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estoque`: Exposes CRUD operations for the **Estoque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estoques
    * const estoques = await prisma.estoque.findMany()
    * ```
    */
  get estoque(): Prisma.EstoqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transportadora`: Exposes CRUD operations for the **Transportadora** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transportadoras
    * const transportadoras = await prisma.transportadora.findMany()
    * ```
    */
  get transportadora(): Prisma.TransportadoraDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Usuario: 'Usuario',
    Fornecedor: 'Fornecedor',
    GerenteDeProducao: 'GerenteDeProducao',
    GerenteDeEstoque: 'GerenteDeEstoque',
    Administrador: 'Administrador',
    Produto: 'Produto',
    Lote: 'Lote',
    ProdutoLote: 'ProdutoLote',
    Estoque: 'Estoque',
    Pedido: 'Pedido',
    Transportadora: 'Transportadora'
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
      modelProps: "usuario" | "fornecedor" | "gerenteDeProducao" | "gerenteDeEstoque" | "administrador" | "produto" | "lote" | "produtoLote" | "estoque" | "pedido" | "transportadora"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Fornecedor: {
        payload: Prisma.$FornecedorPayload<ExtArgs>
        fields: Prisma.FornecedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FornecedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FornecedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          findFirst: {
            args: Prisma.FornecedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FornecedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          findMany: {
            args: Prisma.FornecedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>[]
          }
          create: {
            args: Prisma.FornecedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          createMany: {
            args: Prisma.FornecedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FornecedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>[]
          }
          delete: {
            args: Prisma.FornecedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          update: {
            args: Prisma.FornecedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          deleteMany: {
            args: Prisma.FornecedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FornecedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FornecedorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>[]
          }
          upsert: {
            args: Prisma.FornecedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          aggregate: {
            args: Prisma.FornecedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFornecedor>
          }
          groupBy: {
            args: Prisma.FornecedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FornecedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FornecedorCountArgs<ExtArgs>
            result: $Utils.Optional<FornecedorCountAggregateOutputType> | number
          }
        }
      }
      GerenteDeProducao: {
        payload: Prisma.$GerenteDeProducaoPayload<ExtArgs>
        fields: Prisma.GerenteDeProducaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GerenteDeProducaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeProducaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GerenteDeProducaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeProducaoPayload>
          }
          findFirst: {
            args: Prisma.GerenteDeProducaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeProducaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GerenteDeProducaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeProducaoPayload>
          }
          findMany: {
            args: Prisma.GerenteDeProducaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeProducaoPayload>[]
          }
          create: {
            args: Prisma.GerenteDeProducaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeProducaoPayload>
          }
          createMany: {
            args: Prisma.GerenteDeProducaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GerenteDeProducaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeProducaoPayload>[]
          }
          delete: {
            args: Prisma.GerenteDeProducaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeProducaoPayload>
          }
          update: {
            args: Prisma.GerenteDeProducaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeProducaoPayload>
          }
          deleteMany: {
            args: Prisma.GerenteDeProducaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GerenteDeProducaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GerenteDeProducaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeProducaoPayload>[]
          }
          upsert: {
            args: Prisma.GerenteDeProducaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeProducaoPayload>
          }
          aggregate: {
            args: Prisma.GerenteDeProducaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGerenteDeProducao>
          }
          groupBy: {
            args: Prisma.GerenteDeProducaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GerenteDeProducaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GerenteDeProducaoCountArgs<ExtArgs>
            result: $Utils.Optional<GerenteDeProducaoCountAggregateOutputType> | number
          }
        }
      }
      GerenteDeEstoque: {
        payload: Prisma.$GerenteDeEstoquePayload<ExtArgs>
        fields: Prisma.GerenteDeEstoqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GerenteDeEstoqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeEstoquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GerenteDeEstoqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeEstoquePayload>
          }
          findFirst: {
            args: Prisma.GerenteDeEstoqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeEstoquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GerenteDeEstoqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeEstoquePayload>
          }
          findMany: {
            args: Prisma.GerenteDeEstoqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeEstoquePayload>[]
          }
          create: {
            args: Prisma.GerenteDeEstoqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeEstoquePayload>
          }
          createMany: {
            args: Prisma.GerenteDeEstoqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GerenteDeEstoqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeEstoquePayload>[]
          }
          delete: {
            args: Prisma.GerenteDeEstoqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeEstoquePayload>
          }
          update: {
            args: Prisma.GerenteDeEstoqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeEstoquePayload>
          }
          deleteMany: {
            args: Prisma.GerenteDeEstoqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GerenteDeEstoqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GerenteDeEstoqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeEstoquePayload>[]
          }
          upsert: {
            args: Prisma.GerenteDeEstoqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerenteDeEstoquePayload>
          }
          aggregate: {
            args: Prisma.GerenteDeEstoqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGerenteDeEstoque>
          }
          groupBy: {
            args: Prisma.GerenteDeEstoqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<GerenteDeEstoqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.GerenteDeEstoqueCountArgs<ExtArgs>
            result: $Utils.Optional<GerenteDeEstoqueCountAggregateOutputType> | number
          }
        }
      }
      Administrador: {
        payload: Prisma.$AdministradorPayload<ExtArgs>
        fields: Prisma.AdministradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findFirst: {
            args: Prisma.AdministradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findMany: {
            args: Prisma.AdministradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          create: {
            args: Prisma.AdministradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          createMany: {
            args: Prisma.AdministradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdministradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          delete: {
            args: Prisma.AdministradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          update: {
            args: Prisma.AdministradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          deleteMany: {
            args: Prisma.AdministradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdministradorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          upsert: {
            args: Prisma.AdministradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.AdministradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Lote: {
        payload: Prisma.$LotePayload<ExtArgs>
        fields: Prisma.LoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          findFirst: {
            args: Prisma.LoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          findMany: {
            args: Prisma.LoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>[]
          }
          create: {
            args: Prisma.LoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          createMany: {
            args: Prisma.LoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>[]
          }
          delete: {
            args: Prisma.LoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          update: {
            args: Prisma.LoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          deleteMany: {
            args: Prisma.LoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>[]
          }
          upsert: {
            args: Prisma.LoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          aggregate: {
            args: Prisma.LoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLote>
          }
          groupBy: {
            args: Prisma.LoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoteCountArgs<ExtArgs>
            result: $Utils.Optional<LoteCountAggregateOutputType> | number
          }
        }
      }
      ProdutoLote: {
        payload: Prisma.$ProdutoLotePayload<ExtArgs>
        fields: Prisma.ProdutoLoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoLoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoLotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoLoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoLotePayload>
          }
          findFirst: {
            args: Prisma.ProdutoLoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoLotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoLoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoLotePayload>
          }
          findMany: {
            args: Prisma.ProdutoLoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoLotePayload>[]
          }
          create: {
            args: Prisma.ProdutoLoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoLotePayload>
          }
          createMany: {
            args: Prisma.ProdutoLoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoLoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoLotePayload>[]
          }
          delete: {
            args: Prisma.ProdutoLoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoLotePayload>
          }
          update: {
            args: Prisma.ProdutoLoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoLotePayload>
          }
          deleteMany: {
            args: Prisma.ProdutoLoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoLoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoLoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoLotePayload>[]
          }
          upsert: {
            args: Prisma.ProdutoLoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoLotePayload>
          }
          aggregate: {
            args: Prisma.ProdutoLoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdutoLote>
          }
          groupBy: {
            args: Prisma.ProdutoLoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoLoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoLoteCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoLoteCountAggregateOutputType> | number
          }
        }
      }
      Estoque: {
        payload: Prisma.$EstoquePayload<ExtArgs>
        fields: Prisma.EstoqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstoqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstoqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>
          }
          findFirst: {
            args: Prisma.EstoqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstoqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>
          }
          findMany: {
            args: Prisma.EstoqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>[]
          }
          create: {
            args: Prisma.EstoqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>
          }
          createMany: {
            args: Prisma.EstoqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstoqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>[]
          }
          delete: {
            args: Prisma.EstoqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>
          }
          update: {
            args: Prisma.EstoqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>
          }
          deleteMany: {
            args: Prisma.EstoqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstoqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstoqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>[]
          }
          upsert: {
            args: Prisma.EstoqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>
          }
          aggregate: {
            args: Prisma.EstoqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstoque>
          }
          groupBy: {
            args: Prisma.EstoqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstoqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstoqueCountArgs<ExtArgs>
            result: $Utils.Optional<EstoqueCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      Transportadora: {
        payload: Prisma.$TransportadoraPayload<ExtArgs>
        fields: Prisma.TransportadoraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransportadoraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransportadoraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>
          }
          findFirst: {
            args: Prisma.TransportadoraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransportadoraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>
          }
          findMany: {
            args: Prisma.TransportadoraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>[]
          }
          create: {
            args: Prisma.TransportadoraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>
          }
          createMany: {
            args: Prisma.TransportadoraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransportadoraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>[]
          }
          delete: {
            args: Prisma.TransportadoraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>
          }
          update: {
            args: Prisma.TransportadoraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>
          }
          deleteMany: {
            args: Prisma.TransportadoraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransportadoraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransportadoraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>[]
          }
          upsert: {
            args: Prisma.TransportadoraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>
          }
          aggregate: {
            args: Prisma.TransportadoraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransportadora>
          }
          groupBy: {
            args: Prisma.TransportadoraGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransportadoraGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransportadoraCountArgs<ExtArgs>
            result: $Utils.Optional<TransportadoraCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    fornecedor?: FornecedorOmit
    gerenteDeProducao?: GerenteDeProducaoOmit
    gerenteDeEstoque?: GerenteDeEstoqueOmit
    administrador?: AdministradorOmit
    produto?: ProdutoOmit
    lote?: LoteOmit
    produtoLote?: ProdutoLoteOmit
    estoque?: EstoqueOmit
    pedido?: PedidoOmit
    transportadora?: TransportadoraOmit
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
   * Count Type FornecedorCountOutputType
   */

  export type FornecedorCountOutputType = {
    Pedidos: number
  }

  export type FornecedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedidos?: boolean | FornecedorCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorCountOutputType
     */
    select?: FornecedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type GerenteDeProducaoCountOutputType
   */

  export type GerenteDeProducaoCountOutputType = {
    Pedidos: number
  }

  export type GerenteDeProducaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedidos?: boolean | GerenteDeProducaoCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * GerenteDeProducaoCountOutputType without action
   */
  export type GerenteDeProducaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducaoCountOutputType
     */
    select?: GerenteDeProducaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GerenteDeProducaoCountOutputType without action
   */
  export type GerenteDeProducaoCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    ProdutoLote: number
    Lote: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProdutoLote?: boolean | ProdutoCountOutputTypeCountProdutoLoteArgs
    Lote?: boolean | ProdutoCountOutputTypeCountLoteArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountProdutoLoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoLoteWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountLoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoteWhereInput
  }


  /**
   * Count Type LoteCountOutputType
   */

  export type LoteCountOutputType = {
    ProdutoLote: number
    Produtos: number
  }

  export type LoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProdutoLote?: boolean | LoteCountOutputTypeCountProdutoLoteArgs
    Produtos?: boolean | LoteCountOutputTypeCountProdutosArgs
  }

  // Custom InputTypes
  /**
   * LoteCountOutputType without action
   */
  export type LoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoteCountOutputType
     */
    select?: LoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoteCountOutputType without action
   */
  export type LoteCountOutputTypeCountProdutoLoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoLoteWhereInput
  }

  /**
   * LoteCountOutputType without action
   */
  export type LoteCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }


  /**
   * Count Type EstoqueCountOutputType
   */

  export type EstoqueCountOutputType = {
    lotes: number
  }

  export type EstoqueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lotes?: boolean | EstoqueCountOutputTypeCountLotesArgs
  }

  // Custom InputTypes
  /**
   * EstoqueCountOutputType without action
   */
  export type EstoqueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueCountOutputType
     */
    select?: EstoqueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstoqueCountOutputType without action
   */
  export type EstoqueCountOutputTypeCountLotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoteWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    Produtos: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produtos?: boolean | PedidoCountOutputTypeCountProdutosArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }


  /**
   * Count Type TransportadoraCountOutputType
   */

  export type TransportadoraCountOutputType = {
    Pedidos: number
  }

  export type TransportadoraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedidos?: boolean | TransportadoraCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * TransportadoraCountOutputType without action
   */
  export type TransportadoraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportadoraCountOutputType
     */
    select?: TransportadoraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransportadoraCountOutputType without action
   */
  export type TransportadoraCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    IdUsuario: number | null
    NiveldePermissao: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    IdUsuario: number | null
    NiveldePermissao: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    IdUsuario: number | null
    Nome: string | null
    Email: string | null
    Senha: string | null
    NiveldePermissao: number | null
    TipoDeUsuario: $Enums.TipoDeUsuario | null
  }

  export type UsuarioMaxAggregateOutputType = {
    IdUsuario: number | null
    Nome: string | null
    Email: string | null
    Senha: string | null
    NiveldePermissao: number | null
    TipoDeUsuario: $Enums.TipoDeUsuario | null
  }

  export type UsuarioCountAggregateOutputType = {
    IdUsuario: number
    Nome: number
    Email: number
    Senha: number
    NiveldePermissao: number
    TipoDeUsuario: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    IdUsuario?: true
    NiveldePermissao?: true
  }

  export type UsuarioSumAggregateInputType = {
    IdUsuario?: true
    NiveldePermissao?: true
  }

  export type UsuarioMinAggregateInputType = {
    IdUsuario?: true
    Nome?: true
    Email?: true
    Senha?: true
    NiveldePermissao?: true
    TipoDeUsuario?: true
  }

  export type UsuarioMaxAggregateInputType = {
    IdUsuario?: true
    Nome?: true
    Email?: true
    Senha?: true
    NiveldePermissao?: true
    TipoDeUsuario?: true
  }

  export type UsuarioCountAggregateInputType = {
    IdUsuario?: true
    Nome?: true
    Email?: true
    Senha?: true
    NiveldePermissao?: true
    TipoDeUsuario?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    IdUsuario: number
    Nome: string
    Email: string
    Senha: string
    NiveldePermissao: number
    TipoDeUsuario: $Enums.TipoDeUsuario
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdUsuario?: boolean
    Nome?: boolean
    Email?: boolean
    Senha?: boolean
    NiveldePermissao?: boolean
    TipoDeUsuario?: boolean
    Fornecedor?: boolean | Usuario$FornecedorArgs<ExtArgs>
    GerenteDeProducao?: boolean | Usuario$GerenteDeProducaoArgs<ExtArgs>
    GerenteDeEstoque?: boolean | Usuario$GerenteDeEstoqueArgs<ExtArgs>
    Administrador?: boolean | Usuario$AdministradorArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdUsuario?: boolean
    Nome?: boolean
    Email?: boolean
    Senha?: boolean
    NiveldePermissao?: boolean
    TipoDeUsuario?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdUsuario?: boolean
    Nome?: boolean
    Email?: boolean
    Senha?: boolean
    NiveldePermissao?: boolean
    TipoDeUsuario?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    IdUsuario?: boolean
    Nome?: boolean
    Email?: boolean
    Senha?: boolean
    NiveldePermissao?: boolean
    TipoDeUsuario?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdUsuario" | "Nome" | "Email" | "Senha" | "NiveldePermissao" | "TipoDeUsuario", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Fornecedor?: boolean | Usuario$FornecedorArgs<ExtArgs>
    GerenteDeProducao?: boolean | Usuario$GerenteDeProducaoArgs<ExtArgs>
    GerenteDeEstoque?: boolean | Usuario$GerenteDeEstoqueArgs<ExtArgs>
    Administrador?: boolean | Usuario$AdministradorArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      Fornecedor: Prisma.$FornecedorPayload<ExtArgs> | null
      GerenteDeProducao: Prisma.$GerenteDeProducaoPayload<ExtArgs> | null
      GerenteDeEstoque: Prisma.$GerenteDeEstoquePayload<ExtArgs> | null
      Administrador: Prisma.$AdministradorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      IdUsuario: number
      Nome: string
      Email: string
      Senha: string
      NiveldePermissao: number
      TipoDeUsuario: $Enums.TipoDeUsuario
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `IdUsuario`
     * const usuarioWithIdUsuarioOnly = await prisma.usuario.findMany({ select: { IdUsuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `IdUsuario`
     * const usuarioWithIdUsuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { IdUsuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `IdUsuario`
     * const usuarioWithIdUsuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { IdUsuario: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Fornecedor<T extends Usuario$FornecedorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$FornecedorArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    GerenteDeProducao<T extends Usuario$GerenteDeProducaoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$GerenteDeProducaoArgs<ExtArgs>>): Prisma__GerenteDeProducaoClient<$Result.GetResult<Prisma.$GerenteDeProducaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    GerenteDeEstoque<T extends Usuario$GerenteDeEstoqueArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$GerenteDeEstoqueArgs<ExtArgs>>): Prisma__GerenteDeEstoqueClient<$Result.GetResult<Prisma.$GerenteDeEstoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Administrador<T extends Usuario$AdministradorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$AdministradorArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly IdUsuario: FieldRef<"Usuario", 'Int'>
    readonly Nome: FieldRef<"Usuario", 'String'>
    readonly Email: FieldRef<"Usuario", 'String'>
    readonly Senha: FieldRef<"Usuario", 'String'>
    readonly NiveldePermissao: FieldRef<"Usuario", 'Int'>
    readonly TipoDeUsuario: FieldRef<"Usuario", 'TipoDeUsuario'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.Fornecedor
   */
  export type Usuario$FornecedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    where?: FornecedorWhereInput
  }

  /**
   * Usuario.GerenteDeProducao
   */
  export type Usuario$GerenteDeProducaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoInclude<ExtArgs> | null
    where?: GerenteDeProducaoWhereInput
  }

  /**
   * Usuario.GerenteDeEstoque
   */
  export type Usuario$GerenteDeEstoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeEstoque
     */
    select?: GerenteDeEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeEstoque
     */
    omit?: GerenteDeEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeEstoqueInclude<ExtArgs> | null
    where?: GerenteDeEstoqueWhereInput
  }

  /**
   * Usuario.Administrador
   */
  export type Usuario$AdministradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    where?: AdministradorWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Fornecedor
   */

  export type AggregateFornecedor = {
    _count: FornecedorCountAggregateOutputType | null
    _avg: FornecedorAvgAggregateOutputType | null
    _sum: FornecedorSumAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  export type FornecedorAvgAggregateOutputType = {
    IdFornecedor: number | null
    CNPJ: number | null
  }

  export type FornecedorSumAggregateOutputType = {
    IdFornecedor: number | null
    CNPJ: number | null
  }

  export type FornecedorMinAggregateOutputType = {
    IdFornecedor: number | null
    CNPJ: number | null
  }

  export type FornecedorMaxAggregateOutputType = {
    IdFornecedor: number | null
    CNPJ: number | null
  }

  export type FornecedorCountAggregateOutputType = {
    IdFornecedor: number
    CNPJ: number
    _all: number
  }


  export type FornecedorAvgAggregateInputType = {
    IdFornecedor?: true
    CNPJ?: true
  }

  export type FornecedorSumAggregateInputType = {
    IdFornecedor?: true
    CNPJ?: true
  }

  export type FornecedorMinAggregateInputType = {
    IdFornecedor?: true
    CNPJ?: true
  }

  export type FornecedorMaxAggregateInputType = {
    IdFornecedor?: true
    CNPJ?: true
  }

  export type FornecedorCountAggregateInputType = {
    IdFornecedor?: true
    CNPJ?: true
    _all?: true
  }

  export type FornecedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fornecedor to aggregate.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fornecedors
    **/
    _count?: true | FornecedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FornecedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FornecedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FornecedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FornecedorMaxAggregateInputType
  }

  export type GetFornecedorAggregateType<T extends FornecedorAggregateArgs> = {
        [P in keyof T & keyof AggregateFornecedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFornecedor[P]>
      : GetScalarType<T[P], AggregateFornecedor[P]>
  }




  export type FornecedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FornecedorWhereInput
    orderBy?: FornecedorOrderByWithAggregationInput | FornecedorOrderByWithAggregationInput[]
    by: FornecedorScalarFieldEnum[] | FornecedorScalarFieldEnum
    having?: FornecedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FornecedorCountAggregateInputType | true
    _avg?: FornecedorAvgAggregateInputType
    _sum?: FornecedorSumAggregateInputType
    _min?: FornecedorMinAggregateInputType
    _max?: FornecedorMaxAggregateInputType
  }

  export type FornecedorGroupByOutputType = {
    IdFornecedor: number
    CNPJ: number
    _count: FornecedorCountAggregateOutputType | null
    _avg: FornecedorAvgAggregateOutputType | null
    _sum: FornecedorSumAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  type GetFornecedorGroupByPayload<T extends FornecedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FornecedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FornecedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
            : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
        }
      >
    >


  export type FornecedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdFornecedor?: boolean
    CNPJ?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Pedidos?: boolean | Fornecedor$PedidosArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedor"]>

  export type FornecedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdFornecedor?: boolean
    CNPJ?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedor"]>

  export type FornecedorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdFornecedor?: boolean
    CNPJ?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedor"]>

  export type FornecedorSelectScalar = {
    IdFornecedor?: boolean
    CNPJ?: boolean
  }

  export type FornecedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdFornecedor" | "CNPJ", ExtArgs["result"]["fornecedor"]>
  export type FornecedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Pedidos?: boolean | Fornecedor$PedidosArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FornecedorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type FornecedorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $FornecedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fornecedor"
    objects: {
      Usuario: Prisma.$UsuarioPayload<ExtArgs>
      Pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      IdFornecedor: number
      CNPJ: number
    }, ExtArgs["result"]["fornecedor"]>
    composites: {}
  }

  type FornecedorGetPayload<S extends boolean | null | undefined | FornecedorDefaultArgs> = $Result.GetResult<Prisma.$FornecedorPayload, S>

  type FornecedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FornecedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FornecedorCountAggregateInputType | true
    }

  export interface FornecedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fornecedor'], meta: { name: 'Fornecedor' } }
    /**
     * Find zero or one Fornecedor that matches the filter.
     * @param {FornecedorFindUniqueArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FornecedorFindUniqueArgs>(args: SelectSubset<T, FornecedorFindUniqueArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fornecedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FornecedorFindUniqueOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FornecedorFindUniqueOrThrowArgs>(args: SelectSubset<T, FornecedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fornecedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindFirstArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FornecedorFindFirstArgs>(args?: SelectSubset<T, FornecedorFindFirstArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fornecedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindFirstOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FornecedorFindFirstOrThrowArgs>(args?: SelectSubset<T, FornecedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fornecedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany()
     * 
     * // Get first 10 Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany({ take: 10 })
     * 
     * // Only select the `IdFornecedor`
     * const fornecedorWithIdFornecedorOnly = await prisma.fornecedor.findMany({ select: { IdFornecedor: true } })
     * 
     */
    findMany<T extends FornecedorFindManyArgs>(args?: SelectSubset<T, FornecedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fornecedor.
     * @param {FornecedorCreateArgs} args - Arguments to create a Fornecedor.
     * @example
     * // Create one Fornecedor
     * const Fornecedor = await prisma.fornecedor.create({
     *   data: {
     *     // ... data to create a Fornecedor
     *   }
     * })
     * 
     */
    create<T extends FornecedorCreateArgs>(args: SelectSubset<T, FornecedorCreateArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fornecedors.
     * @param {FornecedorCreateManyArgs} args - Arguments to create many Fornecedors.
     * @example
     * // Create many Fornecedors
     * const fornecedor = await prisma.fornecedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FornecedorCreateManyArgs>(args?: SelectSubset<T, FornecedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fornecedors and returns the data saved in the database.
     * @param {FornecedorCreateManyAndReturnArgs} args - Arguments to create many Fornecedors.
     * @example
     * // Create many Fornecedors
     * const fornecedor = await prisma.fornecedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fornecedors and only return the `IdFornecedor`
     * const fornecedorWithIdFornecedorOnly = await prisma.fornecedor.createManyAndReturn({
     *   select: { IdFornecedor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FornecedorCreateManyAndReturnArgs>(args?: SelectSubset<T, FornecedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fornecedor.
     * @param {FornecedorDeleteArgs} args - Arguments to delete one Fornecedor.
     * @example
     * // Delete one Fornecedor
     * const Fornecedor = await prisma.fornecedor.delete({
     *   where: {
     *     // ... filter to delete one Fornecedor
     *   }
     * })
     * 
     */
    delete<T extends FornecedorDeleteArgs>(args: SelectSubset<T, FornecedorDeleteArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fornecedor.
     * @param {FornecedorUpdateArgs} args - Arguments to update one Fornecedor.
     * @example
     * // Update one Fornecedor
     * const fornecedor = await prisma.fornecedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FornecedorUpdateArgs>(args: SelectSubset<T, FornecedorUpdateArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fornecedors.
     * @param {FornecedorDeleteManyArgs} args - Arguments to filter Fornecedors to delete.
     * @example
     * // Delete a few Fornecedors
     * const { count } = await prisma.fornecedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FornecedorDeleteManyArgs>(args?: SelectSubset<T, FornecedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fornecedors
     * const fornecedor = await prisma.fornecedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FornecedorUpdateManyArgs>(args: SelectSubset<T, FornecedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fornecedors and returns the data updated in the database.
     * @param {FornecedorUpdateManyAndReturnArgs} args - Arguments to update many Fornecedors.
     * @example
     * // Update many Fornecedors
     * const fornecedor = await prisma.fornecedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fornecedors and only return the `IdFornecedor`
     * const fornecedorWithIdFornecedorOnly = await prisma.fornecedor.updateManyAndReturn({
     *   select: { IdFornecedor: true },
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
    updateManyAndReturn<T extends FornecedorUpdateManyAndReturnArgs>(args: SelectSubset<T, FornecedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fornecedor.
     * @param {FornecedorUpsertArgs} args - Arguments to update or create a Fornecedor.
     * @example
     * // Update or create a Fornecedor
     * const fornecedor = await prisma.fornecedor.upsert({
     *   create: {
     *     // ... data to create a Fornecedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fornecedor we want to update
     *   }
     * })
     */
    upsert<T extends FornecedorUpsertArgs>(args: SelectSubset<T, FornecedorUpsertArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorCountArgs} args - Arguments to filter Fornecedors to count.
     * @example
     * // Count the number of Fornecedors
     * const count = await prisma.fornecedor.count({
     *   where: {
     *     // ... the filter for the Fornecedors we want to count
     *   }
     * })
    **/
    count<T extends FornecedorCountArgs>(
      args?: Subset<T, FornecedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FornecedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FornecedorAggregateArgs>(args: Subset<T, FornecedorAggregateArgs>): Prisma.PrismaPromise<GetFornecedorAggregateType<T>>

    /**
     * Group by Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorGroupByArgs} args - Group by arguments.
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
      T extends FornecedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FornecedorGroupByArgs['orderBy'] }
        : { orderBy?: FornecedorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FornecedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFornecedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fornecedor model
   */
  readonly fields: FornecedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fornecedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FornecedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Pedidos<T extends Fornecedor$PedidosArgs<ExtArgs> = {}>(args?: Subset<T, Fornecedor$PedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Fornecedor model
   */
  interface FornecedorFieldRefs {
    readonly IdFornecedor: FieldRef<"Fornecedor", 'Int'>
    readonly CNPJ: FieldRef<"Fornecedor", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Fornecedor findUnique
   */
  export type FornecedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor findUniqueOrThrow
   */
  export type FornecedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor findFirst
   */
  export type FornecedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor findFirstOrThrow
   */
  export type FornecedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor findMany
   */
  export type FornecedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedors to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor create
   */
  export type FornecedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Fornecedor.
     */
    data: XOR<FornecedorCreateInput, FornecedorUncheckedCreateInput>
  }

  /**
   * Fornecedor createMany
   */
  export type FornecedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fornecedors.
     */
    data: FornecedorCreateManyInput | FornecedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fornecedor createManyAndReturn
   */
  export type FornecedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * The data used to create many Fornecedors.
     */
    data: FornecedorCreateManyInput | FornecedorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fornecedor update
   */
  export type FornecedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Fornecedor.
     */
    data: XOR<FornecedorUpdateInput, FornecedorUncheckedUpdateInput>
    /**
     * Choose, which Fornecedor to update.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor updateMany
   */
  export type FornecedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fornecedors.
     */
    data: XOR<FornecedorUpdateManyMutationInput, FornecedorUncheckedUpdateManyInput>
    /**
     * Filter which Fornecedors to update
     */
    where?: FornecedorWhereInput
    /**
     * Limit how many Fornecedors to update.
     */
    limit?: number
  }

  /**
   * Fornecedor updateManyAndReturn
   */
  export type FornecedorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * The data used to update Fornecedors.
     */
    data: XOR<FornecedorUpdateManyMutationInput, FornecedorUncheckedUpdateManyInput>
    /**
     * Filter which Fornecedors to update
     */
    where?: FornecedorWhereInput
    /**
     * Limit how many Fornecedors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fornecedor upsert
   */
  export type FornecedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Fornecedor to update in case it exists.
     */
    where: FornecedorWhereUniqueInput
    /**
     * In case the Fornecedor found by the `where` argument doesn't exist, create a new Fornecedor with this data.
     */
    create: XOR<FornecedorCreateInput, FornecedorUncheckedCreateInput>
    /**
     * In case the Fornecedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FornecedorUpdateInput, FornecedorUncheckedUpdateInput>
  }

  /**
   * Fornecedor delete
   */
  export type FornecedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter which Fornecedor to delete.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor deleteMany
   */
  export type FornecedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fornecedors to delete
     */
    where?: FornecedorWhereInput
    /**
     * Limit how many Fornecedors to delete.
     */
    limit?: number
  }

  /**
   * Fornecedor.Pedidos
   */
  export type Fornecedor$PedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Fornecedor without action
   */
  export type FornecedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
  }


  /**
   * Model GerenteDeProducao
   */

  export type AggregateGerenteDeProducao = {
    _count: GerenteDeProducaoCountAggregateOutputType | null
    _avg: GerenteDeProducaoAvgAggregateOutputType | null
    _sum: GerenteDeProducaoSumAggregateOutputType | null
    _min: GerenteDeProducaoMinAggregateOutputType | null
    _max: GerenteDeProducaoMaxAggregateOutputType | null
  }

  export type GerenteDeProducaoAvgAggregateOutputType = {
    IdGerenteDeProducao: number | null
  }

  export type GerenteDeProducaoSumAggregateOutputType = {
    IdGerenteDeProducao: number | null
  }

  export type GerenteDeProducaoMinAggregateOutputType = {
    IdGerenteDeProducao: number | null
  }

  export type GerenteDeProducaoMaxAggregateOutputType = {
    IdGerenteDeProducao: number | null
  }

  export type GerenteDeProducaoCountAggregateOutputType = {
    IdGerenteDeProducao: number
    _all: number
  }


  export type GerenteDeProducaoAvgAggregateInputType = {
    IdGerenteDeProducao?: true
  }

  export type GerenteDeProducaoSumAggregateInputType = {
    IdGerenteDeProducao?: true
  }

  export type GerenteDeProducaoMinAggregateInputType = {
    IdGerenteDeProducao?: true
  }

  export type GerenteDeProducaoMaxAggregateInputType = {
    IdGerenteDeProducao?: true
  }

  export type GerenteDeProducaoCountAggregateInputType = {
    IdGerenteDeProducao?: true
    _all?: true
  }

  export type GerenteDeProducaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GerenteDeProducao to aggregate.
     */
    where?: GerenteDeProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GerenteDeProducaos to fetch.
     */
    orderBy?: GerenteDeProducaoOrderByWithRelationInput | GerenteDeProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GerenteDeProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GerenteDeProducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GerenteDeProducaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GerenteDeProducaos
    **/
    _count?: true | GerenteDeProducaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GerenteDeProducaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GerenteDeProducaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GerenteDeProducaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GerenteDeProducaoMaxAggregateInputType
  }

  export type GetGerenteDeProducaoAggregateType<T extends GerenteDeProducaoAggregateArgs> = {
        [P in keyof T & keyof AggregateGerenteDeProducao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGerenteDeProducao[P]>
      : GetScalarType<T[P], AggregateGerenteDeProducao[P]>
  }




  export type GerenteDeProducaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GerenteDeProducaoWhereInput
    orderBy?: GerenteDeProducaoOrderByWithAggregationInput | GerenteDeProducaoOrderByWithAggregationInput[]
    by: GerenteDeProducaoScalarFieldEnum[] | GerenteDeProducaoScalarFieldEnum
    having?: GerenteDeProducaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GerenteDeProducaoCountAggregateInputType | true
    _avg?: GerenteDeProducaoAvgAggregateInputType
    _sum?: GerenteDeProducaoSumAggregateInputType
    _min?: GerenteDeProducaoMinAggregateInputType
    _max?: GerenteDeProducaoMaxAggregateInputType
  }

  export type GerenteDeProducaoGroupByOutputType = {
    IdGerenteDeProducao: number
    _count: GerenteDeProducaoCountAggregateOutputType | null
    _avg: GerenteDeProducaoAvgAggregateOutputType | null
    _sum: GerenteDeProducaoSumAggregateOutputType | null
    _min: GerenteDeProducaoMinAggregateOutputType | null
    _max: GerenteDeProducaoMaxAggregateOutputType | null
  }

  type GetGerenteDeProducaoGroupByPayload<T extends GerenteDeProducaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GerenteDeProducaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GerenteDeProducaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GerenteDeProducaoGroupByOutputType[P]>
            : GetScalarType<T[P], GerenteDeProducaoGroupByOutputType[P]>
        }
      >
    >


  export type GerenteDeProducaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdGerenteDeProducao?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Pedidos?: boolean | GerenteDeProducao$PedidosArgs<ExtArgs>
    _count?: boolean | GerenteDeProducaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gerenteDeProducao"]>

  export type GerenteDeProducaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdGerenteDeProducao?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gerenteDeProducao"]>

  export type GerenteDeProducaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdGerenteDeProducao?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gerenteDeProducao"]>

  export type GerenteDeProducaoSelectScalar = {
    IdGerenteDeProducao?: boolean
  }

  export type GerenteDeProducaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdGerenteDeProducao", ExtArgs["result"]["gerenteDeProducao"]>
  export type GerenteDeProducaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Pedidos?: boolean | GerenteDeProducao$PedidosArgs<ExtArgs>
    _count?: boolean | GerenteDeProducaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GerenteDeProducaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type GerenteDeProducaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $GerenteDeProducaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GerenteDeProducao"
    objects: {
      Usuario: Prisma.$UsuarioPayload<ExtArgs>
      Pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      IdGerenteDeProducao: number
    }, ExtArgs["result"]["gerenteDeProducao"]>
    composites: {}
  }

  type GerenteDeProducaoGetPayload<S extends boolean | null | undefined | GerenteDeProducaoDefaultArgs> = $Result.GetResult<Prisma.$GerenteDeProducaoPayload, S>

  type GerenteDeProducaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GerenteDeProducaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GerenteDeProducaoCountAggregateInputType | true
    }

  export interface GerenteDeProducaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GerenteDeProducao'], meta: { name: 'GerenteDeProducao' } }
    /**
     * Find zero or one GerenteDeProducao that matches the filter.
     * @param {GerenteDeProducaoFindUniqueArgs} args - Arguments to find a GerenteDeProducao
     * @example
     * // Get one GerenteDeProducao
     * const gerenteDeProducao = await prisma.gerenteDeProducao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GerenteDeProducaoFindUniqueArgs>(args: SelectSubset<T, GerenteDeProducaoFindUniqueArgs<ExtArgs>>): Prisma__GerenteDeProducaoClient<$Result.GetResult<Prisma.$GerenteDeProducaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GerenteDeProducao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GerenteDeProducaoFindUniqueOrThrowArgs} args - Arguments to find a GerenteDeProducao
     * @example
     * // Get one GerenteDeProducao
     * const gerenteDeProducao = await prisma.gerenteDeProducao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GerenteDeProducaoFindUniqueOrThrowArgs>(args: SelectSubset<T, GerenteDeProducaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GerenteDeProducaoClient<$Result.GetResult<Prisma.$GerenteDeProducaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GerenteDeProducao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeProducaoFindFirstArgs} args - Arguments to find a GerenteDeProducao
     * @example
     * // Get one GerenteDeProducao
     * const gerenteDeProducao = await prisma.gerenteDeProducao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GerenteDeProducaoFindFirstArgs>(args?: SelectSubset<T, GerenteDeProducaoFindFirstArgs<ExtArgs>>): Prisma__GerenteDeProducaoClient<$Result.GetResult<Prisma.$GerenteDeProducaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GerenteDeProducao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeProducaoFindFirstOrThrowArgs} args - Arguments to find a GerenteDeProducao
     * @example
     * // Get one GerenteDeProducao
     * const gerenteDeProducao = await prisma.gerenteDeProducao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GerenteDeProducaoFindFirstOrThrowArgs>(args?: SelectSubset<T, GerenteDeProducaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GerenteDeProducaoClient<$Result.GetResult<Prisma.$GerenteDeProducaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GerenteDeProducaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeProducaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GerenteDeProducaos
     * const gerenteDeProducaos = await prisma.gerenteDeProducao.findMany()
     * 
     * // Get first 10 GerenteDeProducaos
     * const gerenteDeProducaos = await prisma.gerenteDeProducao.findMany({ take: 10 })
     * 
     * // Only select the `IdGerenteDeProducao`
     * const gerenteDeProducaoWithIdGerenteDeProducaoOnly = await prisma.gerenteDeProducao.findMany({ select: { IdGerenteDeProducao: true } })
     * 
     */
    findMany<T extends GerenteDeProducaoFindManyArgs>(args?: SelectSubset<T, GerenteDeProducaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GerenteDeProducaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GerenteDeProducao.
     * @param {GerenteDeProducaoCreateArgs} args - Arguments to create a GerenteDeProducao.
     * @example
     * // Create one GerenteDeProducao
     * const GerenteDeProducao = await prisma.gerenteDeProducao.create({
     *   data: {
     *     // ... data to create a GerenteDeProducao
     *   }
     * })
     * 
     */
    create<T extends GerenteDeProducaoCreateArgs>(args: SelectSubset<T, GerenteDeProducaoCreateArgs<ExtArgs>>): Prisma__GerenteDeProducaoClient<$Result.GetResult<Prisma.$GerenteDeProducaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GerenteDeProducaos.
     * @param {GerenteDeProducaoCreateManyArgs} args - Arguments to create many GerenteDeProducaos.
     * @example
     * // Create many GerenteDeProducaos
     * const gerenteDeProducao = await prisma.gerenteDeProducao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GerenteDeProducaoCreateManyArgs>(args?: SelectSubset<T, GerenteDeProducaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GerenteDeProducaos and returns the data saved in the database.
     * @param {GerenteDeProducaoCreateManyAndReturnArgs} args - Arguments to create many GerenteDeProducaos.
     * @example
     * // Create many GerenteDeProducaos
     * const gerenteDeProducao = await prisma.gerenteDeProducao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GerenteDeProducaos and only return the `IdGerenteDeProducao`
     * const gerenteDeProducaoWithIdGerenteDeProducaoOnly = await prisma.gerenteDeProducao.createManyAndReturn({
     *   select: { IdGerenteDeProducao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GerenteDeProducaoCreateManyAndReturnArgs>(args?: SelectSubset<T, GerenteDeProducaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GerenteDeProducaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GerenteDeProducao.
     * @param {GerenteDeProducaoDeleteArgs} args - Arguments to delete one GerenteDeProducao.
     * @example
     * // Delete one GerenteDeProducao
     * const GerenteDeProducao = await prisma.gerenteDeProducao.delete({
     *   where: {
     *     // ... filter to delete one GerenteDeProducao
     *   }
     * })
     * 
     */
    delete<T extends GerenteDeProducaoDeleteArgs>(args: SelectSubset<T, GerenteDeProducaoDeleteArgs<ExtArgs>>): Prisma__GerenteDeProducaoClient<$Result.GetResult<Prisma.$GerenteDeProducaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GerenteDeProducao.
     * @param {GerenteDeProducaoUpdateArgs} args - Arguments to update one GerenteDeProducao.
     * @example
     * // Update one GerenteDeProducao
     * const gerenteDeProducao = await prisma.gerenteDeProducao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GerenteDeProducaoUpdateArgs>(args: SelectSubset<T, GerenteDeProducaoUpdateArgs<ExtArgs>>): Prisma__GerenteDeProducaoClient<$Result.GetResult<Prisma.$GerenteDeProducaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GerenteDeProducaos.
     * @param {GerenteDeProducaoDeleteManyArgs} args - Arguments to filter GerenteDeProducaos to delete.
     * @example
     * // Delete a few GerenteDeProducaos
     * const { count } = await prisma.gerenteDeProducao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GerenteDeProducaoDeleteManyArgs>(args?: SelectSubset<T, GerenteDeProducaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GerenteDeProducaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeProducaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GerenteDeProducaos
     * const gerenteDeProducao = await prisma.gerenteDeProducao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GerenteDeProducaoUpdateManyArgs>(args: SelectSubset<T, GerenteDeProducaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GerenteDeProducaos and returns the data updated in the database.
     * @param {GerenteDeProducaoUpdateManyAndReturnArgs} args - Arguments to update many GerenteDeProducaos.
     * @example
     * // Update many GerenteDeProducaos
     * const gerenteDeProducao = await prisma.gerenteDeProducao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GerenteDeProducaos and only return the `IdGerenteDeProducao`
     * const gerenteDeProducaoWithIdGerenteDeProducaoOnly = await prisma.gerenteDeProducao.updateManyAndReturn({
     *   select: { IdGerenteDeProducao: true },
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
    updateManyAndReturn<T extends GerenteDeProducaoUpdateManyAndReturnArgs>(args: SelectSubset<T, GerenteDeProducaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GerenteDeProducaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GerenteDeProducao.
     * @param {GerenteDeProducaoUpsertArgs} args - Arguments to update or create a GerenteDeProducao.
     * @example
     * // Update or create a GerenteDeProducao
     * const gerenteDeProducao = await prisma.gerenteDeProducao.upsert({
     *   create: {
     *     // ... data to create a GerenteDeProducao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GerenteDeProducao we want to update
     *   }
     * })
     */
    upsert<T extends GerenteDeProducaoUpsertArgs>(args: SelectSubset<T, GerenteDeProducaoUpsertArgs<ExtArgs>>): Prisma__GerenteDeProducaoClient<$Result.GetResult<Prisma.$GerenteDeProducaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GerenteDeProducaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeProducaoCountArgs} args - Arguments to filter GerenteDeProducaos to count.
     * @example
     * // Count the number of GerenteDeProducaos
     * const count = await prisma.gerenteDeProducao.count({
     *   where: {
     *     // ... the filter for the GerenteDeProducaos we want to count
     *   }
     * })
    **/
    count<T extends GerenteDeProducaoCountArgs>(
      args?: Subset<T, GerenteDeProducaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GerenteDeProducaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GerenteDeProducao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeProducaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GerenteDeProducaoAggregateArgs>(args: Subset<T, GerenteDeProducaoAggregateArgs>): Prisma.PrismaPromise<GetGerenteDeProducaoAggregateType<T>>

    /**
     * Group by GerenteDeProducao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeProducaoGroupByArgs} args - Group by arguments.
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
      T extends GerenteDeProducaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GerenteDeProducaoGroupByArgs['orderBy'] }
        : { orderBy?: GerenteDeProducaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GerenteDeProducaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGerenteDeProducaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GerenteDeProducao model
   */
  readonly fields: GerenteDeProducaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GerenteDeProducao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GerenteDeProducaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Pedidos<T extends GerenteDeProducao$PedidosArgs<ExtArgs> = {}>(args?: Subset<T, GerenteDeProducao$PedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GerenteDeProducao model
   */
  interface GerenteDeProducaoFieldRefs {
    readonly IdGerenteDeProducao: FieldRef<"GerenteDeProducao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GerenteDeProducao findUnique
   */
  export type GerenteDeProducaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoInclude<ExtArgs> | null
    /**
     * Filter, which GerenteDeProducao to fetch.
     */
    where: GerenteDeProducaoWhereUniqueInput
  }

  /**
   * GerenteDeProducao findUniqueOrThrow
   */
  export type GerenteDeProducaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoInclude<ExtArgs> | null
    /**
     * Filter, which GerenteDeProducao to fetch.
     */
    where: GerenteDeProducaoWhereUniqueInput
  }

  /**
   * GerenteDeProducao findFirst
   */
  export type GerenteDeProducaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoInclude<ExtArgs> | null
    /**
     * Filter, which GerenteDeProducao to fetch.
     */
    where?: GerenteDeProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GerenteDeProducaos to fetch.
     */
    orderBy?: GerenteDeProducaoOrderByWithRelationInput | GerenteDeProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GerenteDeProducaos.
     */
    cursor?: GerenteDeProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GerenteDeProducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GerenteDeProducaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GerenteDeProducaos.
     */
    distinct?: GerenteDeProducaoScalarFieldEnum | GerenteDeProducaoScalarFieldEnum[]
  }

  /**
   * GerenteDeProducao findFirstOrThrow
   */
  export type GerenteDeProducaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoInclude<ExtArgs> | null
    /**
     * Filter, which GerenteDeProducao to fetch.
     */
    where?: GerenteDeProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GerenteDeProducaos to fetch.
     */
    orderBy?: GerenteDeProducaoOrderByWithRelationInput | GerenteDeProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GerenteDeProducaos.
     */
    cursor?: GerenteDeProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GerenteDeProducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GerenteDeProducaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GerenteDeProducaos.
     */
    distinct?: GerenteDeProducaoScalarFieldEnum | GerenteDeProducaoScalarFieldEnum[]
  }

  /**
   * GerenteDeProducao findMany
   */
  export type GerenteDeProducaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoInclude<ExtArgs> | null
    /**
     * Filter, which GerenteDeProducaos to fetch.
     */
    where?: GerenteDeProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GerenteDeProducaos to fetch.
     */
    orderBy?: GerenteDeProducaoOrderByWithRelationInput | GerenteDeProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GerenteDeProducaos.
     */
    cursor?: GerenteDeProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GerenteDeProducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GerenteDeProducaos.
     */
    skip?: number
    distinct?: GerenteDeProducaoScalarFieldEnum | GerenteDeProducaoScalarFieldEnum[]
  }

  /**
   * GerenteDeProducao create
   */
  export type GerenteDeProducaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoInclude<ExtArgs> | null
    /**
     * The data needed to create a GerenteDeProducao.
     */
    data: XOR<GerenteDeProducaoCreateInput, GerenteDeProducaoUncheckedCreateInput>
  }

  /**
   * GerenteDeProducao createMany
   */
  export type GerenteDeProducaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GerenteDeProducaos.
     */
    data: GerenteDeProducaoCreateManyInput | GerenteDeProducaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GerenteDeProducao createManyAndReturn
   */
  export type GerenteDeProducaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * The data used to create many GerenteDeProducaos.
     */
    data: GerenteDeProducaoCreateManyInput | GerenteDeProducaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GerenteDeProducao update
   */
  export type GerenteDeProducaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoInclude<ExtArgs> | null
    /**
     * The data needed to update a GerenteDeProducao.
     */
    data: XOR<GerenteDeProducaoUpdateInput, GerenteDeProducaoUncheckedUpdateInput>
    /**
     * Choose, which GerenteDeProducao to update.
     */
    where: GerenteDeProducaoWhereUniqueInput
  }

  /**
   * GerenteDeProducao updateMany
   */
  export type GerenteDeProducaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GerenteDeProducaos.
     */
    data: XOR<GerenteDeProducaoUpdateManyMutationInput, GerenteDeProducaoUncheckedUpdateManyInput>
    /**
     * Filter which GerenteDeProducaos to update
     */
    where?: GerenteDeProducaoWhereInput
    /**
     * Limit how many GerenteDeProducaos to update.
     */
    limit?: number
  }

  /**
   * GerenteDeProducao updateManyAndReturn
   */
  export type GerenteDeProducaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * The data used to update GerenteDeProducaos.
     */
    data: XOR<GerenteDeProducaoUpdateManyMutationInput, GerenteDeProducaoUncheckedUpdateManyInput>
    /**
     * Filter which GerenteDeProducaos to update
     */
    where?: GerenteDeProducaoWhereInput
    /**
     * Limit how many GerenteDeProducaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GerenteDeProducao upsert
   */
  export type GerenteDeProducaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoInclude<ExtArgs> | null
    /**
     * The filter to search for the GerenteDeProducao to update in case it exists.
     */
    where: GerenteDeProducaoWhereUniqueInput
    /**
     * In case the GerenteDeProducao found by the `where` argument doesn't exist, create a new GerenteDeProducao with this data.
     */
    create: XOR<GerenteDeProducaoCreateInput, GerenteDeProducaoUncheckedCreateInput>
    /**
     * In case the GerenteDeProducao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GerenteDeProducaoUpdateInput, GerenteDeProducaoUncheckedUpdateInput>
  }

  /**
   * GerenteDeProducao delete
   */
  export type GerenteDeProducaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoInclude<ExtArgs> | null
    /**
     * Filter which GerenteDeProducao to delete.
     */
    where: GerenteDeProducaoWhereUniqueInput
  }

  /**
   * GerenteDeProducao deleteMany
   */
  export type GerenteDeProducaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GerenteDeProducaos to delete
     */
    where?: GerenteDeProducaoWhereInput
    /**
     * Limit how many GerenteDeProducaos to delete.
     */
    limit?: number
  }

  /**
   * GerenteDeProducao.Pedidos
   */
  export type GerenteDeProducao$PedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * GerenteDeProducao without action
   */
  export type GerenteDeProducaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoInclude<ExtArgs> | null
  }


  /**
   * Model GerenteDeEstoque
   */

  export type AggregateGerenteDeEstoque = {
    _count: GerenteDeEstoqueCountAggregateOutputType | null
    _avg: GerenteDeEstoqueAvgAggregateOutputType | null
    _sum: GerenteDeEstoqueSumAggregateOutputType | null
    _min: GerenteDeEstoqueMinAggregateOutputType | null
    _max: GerenteDeEstoqueMaxAggregateOutputType | null
  }

  export type GerenteDeEstoqueAvgAggregateOutputType = {
    IdGerenteDeEstoque: number | null
  }

  export type GerenteDeEstoqueSumAggregateOutputType = {
    IdGerenteDeEstoque: number | null
  }

  export type GerenteDeEstoqueMinAggregateOutputType = {
    IdGerenteDeEstoque: number | null
  }

  export type GerenteDeEstoqueMaxAggregateOutputType = {
    IdGerenteDeEstoque: number | null
  }

  export type GerenteDeEstoqueCountAggregateOutputType = {
    IdGerenteDeEstoque: number
    _all: number
  }


  export type GerenteDeEstoqueAvgAggregateInputType = {
    IdGerenteDeEstoque?: true
  }

  export type GerenteDeEstoqueSumAggregateInputType = {
    IdGerenteDeEstoque?: true
  }

  export type GerenteDeEstoqueMinAggregateInputType = {
    IdGerenteDeEstoque?: true
  }

  export type GerenteDeEstoqueMaxAggregateInputType = {
    IdGerenteDeEstoque?: true
  }

  export type GerenteDeEstoqueCountAggregateInputType = {
    IdGerenteDeEstoque?: true
    _all?: true
  }

  export type GerenteDeEstoqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GerenteDeEstoque to aggregate.
     */
    where?: GerenteDeEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GerenteDeEstoques to fetch.
     */
    orderBy?: GerenteDeEstoqueOrderByWithRelationInput | GerenteDeEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GerenteDeEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GerenteDeEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GerenteDeEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GerenteDeEstoques
    **/
    _count?: true | GerenteDeEstoqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GerenteDeEstoqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GerenteDeEstoqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GerenteDeEstoqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GerenteDeEstoqueMaxAggregateInputType
  }

  export type GetGerenteDeEstoqueAggregateType<T extends GerenteDeEstoqueAggregateArgs> = {
        [P in keyof T & keyof AggregateGerenteDeEstoque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGerenteDeEstoque[P]>
      : GetScalarType<T[P], AggregateGerenteDeEstoque[P]>
  }




  export type GerenteDeEstoqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GerenteDeEstoqueWhereInput
    orderBy?: GerenteDeEstoqueOrderByWithAggregationInput | GerenteDeEstoqueOrderByWithAggregationInput[]
    by: GerenteDeEstoqueScalarFieldEnum[] | GerenteDeEstoqueScalarFieldEnum
    having?: GerenteDeEstoqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GerenteDeEstoqueCountAggregateInputType | true
    _avg?: GerenteDeEstoqueAvgAggregateInputType
    _sum?: GerenteDeEstoqueSumAggregateInputType
    _min?: GerenteDeEstoqueMinAggregateInputType
    _max?: GerenteDeEstoqueMaxAggregateInputType
  }

  export type GerenteDeEstoqueGroupByOutputType = {
    IdGerenteDeEstoque: number
    _count: GerenteDeEstoqueCountAggregateOutputType | null
    _avg: GerenteDeEstoqueAvgAggregateOutputType | null
    _sum: GerenteDeEstoqueSumAggregateOutputType | null
    _min: GerenteDeEstoqueMinAggregateOutputType | null
    _max: GerenteDeEstoqueMaxAggregateOutputType | null
  }

  type GetGerenteDeEstoqueGroupByPayload<T extends GerenteDeEstoqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GerenteDeEstoqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GerenteDeEstoqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GerenteDeEstoqueGroupByOutputType[P]>
            : GetScalarType<T[P], GerenteDeEstoqueGroupByOutputType[P]>
        }
      >
    >


  export type GerenteDeEstoqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdGerenteDeEstoque?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gerenteDeEstoque"]>

  export type GerenteDeEstoqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdGerenteDeEstoque?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gerenteDeEstoque"]>

  export type GerenteDeEstoqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdGerenteDeEstoque?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gerenteDeEstoque"]>

  export type GerenteDeEstoqueSelectScalar = {
    IdGerenteDeEstoque?: boolean
  }

  export type GerenteDeEstoqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdGerenteDeEstoque", ExtArgs["result"]["gerenteDeEstoque"]>
  export type GerenteDeEstoqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type GerenteDeEstoqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type GerenteDeEstoqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $GerenteDeEstoquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GerenteDeEstoque"
    objects: {
      Usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      IdGerenteDeEstoque: number
    }, ExtArgs["result"]["gerenteDeEstoque"]>
    composites: {}
  }

  type GerenteDeEstoqueGetPayload<S extends boolean | null | undefined | GerenteDeEstoqueDefaultArgs> = $Result.GetResult<Prisma.$GerenteDeEstoquePayload, S>

  type GerenteDeEstoqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GerenteDeEstoqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GerenteDeEstoqueCountAggregateInputType | true
    }

  export interface GerenteDeEstoqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GerenteDeEstoque'], meta: { name: 'GerenteDeEstoque' } }
    /**
     * Find zero or one GerenteDeEstoque that matches the filter.
     * @param {GerenteDeEstoqueFindUniqueArgs} args - Arguments to find a GerenteDeEstoque
     * @example
     * // Get one GerenteDeEstoque
     * const gerenteDeEstoque = await prisma.gerenteDeEstoque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GerenteDeEstoqueFindUniqueArgs>(args: SelectSubset<T, GerenteDeEstoqueFindUniqueArgs<ExtArgs>>): Prisma__GerenteDeEstoqueClient<$Result.GetResult<Prisma.$GerenteDeEstoquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GerenteDeEstoque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GerenteDeEstoqueFindUniqueOrThrowArgs} args - Arguments to find a GerenteDeEstoque
     * @example
     * // Get one GerenteDeEstoque
     * const gerenteDeEstoque = await prisma.gerenteDeEstoque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GerenteDeEstoqueFindUniqueOrThrowArgs>(args: SelectSubset<T, GerenteDeEstoqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GerenteDeEstoqueClient<$Result.GetResult<Prisma.$GerenteDeEstoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GerenteDeEstoque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeEstoqueFindFirstArgs} args - Arguments to find a GerenteDeEstoque
     * @example
     * // Get one GerenteDeEstoque
     * const gerenteDeEstoque = await prisma.gerenteDeEstoque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GerenteDeEstoqueFindFirstArgs>(args?: SelectSubset<T, GerenteDeEstoqueFindFirstArgs<ExtArgs>>): Prisma__GerenteDeEstoqueClient<$Result.GetResult<Prisma.$GerenteDeEstoquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GerenteDeEstoque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeEstoqueFindFirstOrThrowArgs} args - Arguments to find a GerenteDeEstoque
     * @example
     * // Get one GerenteDeEstoque
     * const gerenteDeEstoque = await prisma.gerenteDeEstoque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GerenteDeEstoqueFindFirstOrThrowArgs>(args?: SelectSubset<T, GerenteDeEstoqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__GerenteDeEstoqueClient<$Result.GetResult<Prisma.$GerenteDeEstoquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GerenteDeEstoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeEstoqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GerenteDeEstoques
     * const gerenteDeEstoques = await prisma.gerenteDeEstoque.findMany()
     * 
     * // Get first 10 GerenteDeEstoques
     * const gerenteDeEstoques = await prisma.gerenteDeEstoque.findMany({ take: 10 })
     * 
     * // Only select the `IdGerenteDeEstoque`
     * const gerenteDeEstoqueWithIdGerenteDeEstoqueOnly = await prisma.gerenteDeEstoque.findMany({ select: { IdGerenteDeEstoque: true } })
     * 
     */
    findMany<T extends GerenteDeEstoqueFindManyArgs>(args?: SelectSubset<T, GerenteDeEstoqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GerenteDeEstoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GerenteDeEstoque.
     * @param {GerenteDeEstoqueCreateArgs} args - Arguments to create a GerenteDeEstoque.
     * @example
     * // Create one GerenteDeEstoque
     * const GerenteDeEstoque = await prisma.gerenteDeEstoque.create({
     *   data: {
     *     // ... data to create a GerenteDeEstoque
     *   }
     * })
     * 
     */
    create<T extends GerenteDeEstoqueCreateArgs>(args: SelectSubset<T, GerenteDeEstoqueCreateArgs<ExtArgs>>): Prisma__GerenteDeEstoqueClient<$Result.GetResult<Prisma.$GerenteDeEstoquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GerenteDeEstoques.
     * @param {GerenteDeEstoqueCreateManyArgs} args - Arguments to create many GerenteDeEstoques.
     * @example
     * // Create many GerenteDeEstoques
     * const gerenteDeEstoque = await prisma.gerenteDeEstoque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GerenteDeEstoqueCreateManyArgs>(args?: SelectSubset<T, GerenteDeEstoqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GerenteDeEstoques and returns the data saved in the database.
     * @param {GerenteDeEstoqueCreateManyAndReturnArgs} args - Arguments to create many GerenteDeEstoques.
     * @example
     * // Create many GerenteDeEstoques
     * const gerenteDeEstoque = await prisma.gerenteDeEstoque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GerenteDeEstoques and only return the `IdGerenteDeEstoque`
     * const gerenteDeEstoqueWithIdGerenteDeEstoqueOnly = await prisma.gerenteDeEstoque.createManyAndReturn({
     *   select: { IdGerenteDeEstoque: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GerenteDeEstoqueCreateManyAndReturnArgs>(args?: SelectSubset<T, GerenteDeEstoqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GerenteDeEstoquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GerenteDeEstoque.
     * @param {GerenteDeEstoqueDeleteArgs} args - Arguments to delete one GerenteDeEstoque.
     * @example
     * // Delete one GerenteDeEstoque
     * const GerenteDeEstoque = await prisma.gerenteDeEstoque.delete({
     *   where: {
     *     // ... filter to delete one GerenteDeEstoque
     *   }
     * })
     * 
     */
    delete<T extends GerenteDeEstoqueDeleteArgs>(args: SelectSubset<T, GerenteDeEstoqueDeleteArgs<ExtArgs>>): Prisma__GerenteDeEstoqueClient<$Result.GetResult<Prisma.$GerenteDeEstoquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GerenteDeEstoque.
     * @param {GerenteDeEstoqueUpdateArgs} args - Arguments to update one GerenteDeEstoque.
     * @example
     * // Update one GerenteDeEstoque
     * const gerenteDeEstoque = await prisma.gerenteDeEstoque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GerenteDeEstoqueUpdateArgs>(args: SelectSubset<T, GerenteDeEstoqueUpdateArgs<ExtArgs>>): Prisma__GerenteDeEstoqueClient<$Result.GetResult<Prisma.$GerenteDeEstoquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GerenteDeEstoques.
     * @param {GerenteDeEstoqueDeleteManyArgs} args - Arguments to filter GerenteDeEstoques to delete.
     * @example
     * // Delete a few GerenteDeEstoques
     * const { count } = await prisma.gerenteDeEstoque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GerenteDeEstoqueDeleteManyArgs>(args?: SelectSubset<T, GerenteDeEstoqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GerenteDeEstoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeEstoqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GerenteDeEstoques
     * const gerenteDeEstoque = await prisma.gerenteDeEstoque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GerenteDeEstoqueUpdateManyArgs>(args: SelectSubset<T, GerenteDeEstoqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GerenteDeEstoques and returns the data updated in the database.
     * @param {GerenteDeEstoqueUpdateManyAndReturnArgs} args - Arguments to update many GerenteDeEstoques.
     * @example
     * // Update many GerenteDeEstoques
     * const gerenteDeEstoque = await prisma.gerenteDeEstoque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GerenteDeEstoques and only return the `IdGerenteDeEstoque`
     * const gerenteDeEstoqueWithIdGerenteDeEstoqueOnly = await prisma.gerenteDeEstoque.updateManyAndReturn({
     *   select: { IdGerenteDeEstoque: true },
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
    updateManyAndReturn<T extends GerenteDeEstoqueUpdateManyAndReturnArgs>(args: SelectSubset<T, GerenteDeEstoqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GerenteDeEstoquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GerenteDeEstoque.
     * @param {GerenteDeEstoqueUpsertArgs} args - Arguments to update or create a GerenteDeEstoque.
     * @example
     * // Update or create a GerenteDeEstoque
     * const gerenteDeEstoque = await prisma.gerenteDeEstoque.upsert({
     *   create: {
     *     // ... data to create a GerenteDeEstoque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GerenteDeEstoque we want to update
     *   }
     * })
     */
    upsert<T extends GerenteDeEstoqueUpsertArgs>(args: SelectSubset<T, GerenteDeEstoqueUpsertArgs<ExtArgs>>): Prisma__GerenteDeEstoqueClient<$Result.GetResult<Prisma.$GerenteDeEstoquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GerenteDeEstoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeEstoqueCountArgs} args - Arguments to filter GerenteDeEstoques to count.
     * @example
     * // Count the number of GerenteDeEstoques
     * const count = await prisma.gerenteDeEstoque.count({
     *   where: {
     *     // ... the filter for the GerenteDeEstoques we want to count
     *   }
     * })
    **/
    count<T extends GerenteDeEstoqueCountArgs>(
      args?: Subset<T, GerenteDeEstoqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GerenteDeEstoqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GerenteDeEstoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeEstoqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GerenteDeEstoqueAggregateArgs>(args: Subset<T, GerenteDeEstoqueAggregateArgs>): Prisma.PrismaPromise<GetGerenteDeEstoqueAggregateType<T>>

    /**
     * Group by GerenteDeEstoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerenteDeEstoqueGroupByArgs} args - Group by arguments.
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
      T extends GerenteDeEstoqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GerenteDeEstoqueGroupByArgs['orderBy'] }
        : { orderBy?: GerenteDeEstoqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GerenteDeEstoqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGerenteDeEstoqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GerenteDeEstoque model
   */
  readonly fields: GerenteDeEstoqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GerenteDeEstoque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GerenteDeEstoqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GerenteDeEstoque model
   */
  interface GerenteDeEstoqueFieldRefs {
    readonly IdGerenteDeEstoque: FieldRef<"GerenteDeEstoque", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GerenteDeEstoque findUnique
   */
  export type GerenteDeEstoqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeEstoque
     */
    select?: GerenteDeEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeEstoque
     */
    omit?: GerenteDeEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which GerenteDeEstoque to fetch.
     */
    where: GerenteDeEstoqueWhereUniqueInput
  }

  /**
   * GerenteDeEstoque findUniqueOrThrow
   */
  export type GerenteDeEstoqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeEstoque
     */
    select?: GerenteDeEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeEstoque
     */
    omit?: GerenteDeEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which GerenteDeEstoque to fetch.
     */
    where: GerenteDeEstoqueWhereUniqueInput
  }

  /**
   * GerenteDeEstoque findFirst
   */
  export type GerenteDeEstoqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeEstoque
     */
    select?: GerenteDeEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeEstoque
     */
    omit?: GerenteDeEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which GerenteDeEstoque to fetch.
     */
    where?: GerenteDeEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GerenteDeEstoques to fetch.
     */
    orderBy?: GerenteDeEstoqueOrderByWithRelationInput | GerenteDeEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GerenteDeEstoques.
     */
    cursor?: GerenteDeEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GerenteDeEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GerenteDeEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GerenteDeEstoques.
     */
    distinct?: GerenteDeEstoqueScalarFieldEnum | GerenteDeEstoqueScalarFieldEnum[]
  }

  /**
   * GerenteDeEstoque findFirstOrThrow
   */
  export type GerenteDeEstoqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeEstoque
     */
    select?: GerenteDeEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeEstoque
     */
    omit?: GerenteDeEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which GerenteDeEstoque to fetch.
     */
    where?: GerenteDeEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GerenteDeEstoques to fetch.
     */
    orderBy?: GerenteDeEstoqueOrderByWithRelationInput | GerenteDeEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GerenteDeEstoques.
     */
    cursor?: GerenteDeEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GerenteDeEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GerenteDeEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GerenteDeEstoques.
     */
    distinct?: GerenteDeEstoqueScalarFieldEnum | GerenteDeEstoqueScalarFieldEnum[]
  }

  /**
   * GerenteDeEstoque findMany
   */
  export type GerenteDeEstoqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeEstoque
     */
    select?: GerenteDeEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeEstoque
     */
    omit?: GerenteDeEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which GerenteDeEstoques to fetch.
     */
    where?: GerenteDeEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GerenteDeEstoques to fetch.
     */
    orderBy?: GerenteDeEstoqueOrderByWithRelationInput | GerenteDeEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GerenteDeEstoques.
     */
    cursor?: GerenteDeEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GerenteDeEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GerenteDeEstoques.
     */
    skip?: number
    distinct?: GerenteDeEstoqueScalarFieldEnum | GerenteDeEstoqueScalarFieldEnum[]
  }

  /**
   * GerenteDeEstoque create
   */
  export type GerenteDeEstoqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeEstoque
     */
    select?: GerenteDeEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeEstoque
     */
    omit?: GerenteDeEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeEstoqueInclude<ExtArgs> | null
    /**
     * The data needed to create a GerenteDeEstoque.
     */
    data: XOR<GerenteDeEstoqueCreateInput, GerenteDeEstoqueUncheckedCreateInput>
  }

  /**
   * GerenteDeEstoque createMany
   */
  export type GerenteDeEstoqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GerenteDeEstoques.
     */
    data: GerenteDeEstoqueCreateManyInput | GerenteDeEstoqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GerenteDeEstoque createManyAndReturn
   */
  export type GerenteDeEstoqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeEstoque
     */
    select?: GerenteDeEstoqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeEstoque
     */
    omit?: GerenteDeEstoqueOmit<ExtArgs> | null
    /**
     * The data used to create many GerenteDeEstoques.
     */
    data: GerenteDeEstoqueCreateManyInput | GerenteDeEstoqueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeEstoqueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GerenteDeEstoque update
   */
  export type GerenteDeEstoqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeEstoque
     */
    select?: GerenteDeEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeEstoque
     */
    omit?: GerenteDeEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeEstoqueInclude<ExtArgs> | null
    /**
     * The data needed to update a GerenteDeEstoque.
     */
    data: XOR<GerenteDeEstoqueUpdateInput, GerenteDeEstoqueUncheckedUpdateInput>
    /**
     * Choose, which GerenteDeEstoque to update.
     */
    where: GerenteDeEstoqueWhereUniqueInput
  }

  /**
   * GerenteDeEstoque updateMany
   */
  export type GerenteDeEstoqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GerenteDeEstoques.
     */
    data: XOR<GerenteDeEstoqueUpdateManyMutationInput, GerenteDeEstoqueUncheckedUpdateManyInput>
    /**
     * Filter which GerenteDeEstoques to update
     */
    where?: GerenteDeEstoqueWhereInput
    /**
     * Limit how many GerenteDeEstoques to update.
     */
    limit?: number
  }

  /**
   * GerenteDeEstoque updateManyAndReturn
   */
  export type GerenteDeEstoqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeEstoque
     */
    select?: GerenteDeEstoqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeEstoque
     */
    omit?: GerenteDeEstoqueOmit<ExtArgs> | null
    /**
     * The data used to update GerenteDeEstoques.
     */
    data: XOR<GerenteDeEstoqueUpdateManyMutationInput, GerenteDeEstoqueUncheckedUpdateManyInput>
    /**
     * Filter which GerenteDeEstoques to update
     */
    where?: GerenteDeEstoqueWhereInput
    /**
     * Limit how many GerenteDeEstoques to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeEstoqueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GerenteDeEstoque upsert
   */
  export type GerenteDeEstoqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeEstoque
     */
    select?: GerenteDeEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeEstoque
     */
    omit?: GerenteDeEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeEstoqueInclude<ExtArgs> | null
    /**
     * The filter to search for the GerenteDeEstoque to update in case it exists.
     */
    where: GerenteDeEstoqueWhereUniqueInput
    /**
     * In case the GerenteDeEstoque found by the `where` argument doesn't exist, create a new GerenteDeEstoque with this data.
     */
    create: XOR<GerenteDeEstoqueCreateInput, GerenteDeEstoqueUncheckedCreateInput>
    /**
     * In case the GerenteDeEstoque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GerenteDeEstoqueUpdateInput, GerenteDeEstoqueUncheckedUpdateInput>
  }

  /**
   * GerenteDeEstoque delete
   */
  export type GerenteDeEstoqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeEstoque
     */
    select?: GerenteDeEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeEstoque
     */
    omit?: GerenteDeEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeEstoqueInclude<ExtArgs> | null
    /**
     * Filter which GerenteDeEstoque to delete.
     */
    where: GerenteDeEstoqueWhereUniqueInput
  }

  /**
   * GerenteDeEstoque deleteMany
   */
  export type GerenteDeEstoqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GerenteDeEstoques to delete
     */
    where?: GerenteDeEstoqueWhereInput
    /**
     * Limit how many GerenteDeEstoques to delete.
     */
    limit?: number
  }

  /**
   * GerenteDeEstoque without action
   */
  export type GerenteDeEstoqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeEstoque
     */
    select?: GerenteDeEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeEstoque
     */
    omit?: GerenteDeEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeEstoqueInclude<ExtArgs> | null
  }


  /**
   * Model Administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorAvgAggregateOutputType = {
    IdAdministrador: number | null
  }

  export type AdministradorSumAggregateOutputType = {
    IdAdministrador: number | null
  }

  export type AdministradorMinAggregateOutputType = {
    IdAdministrador: number | null
  }

  export type AdministradorMaxAggregateOutputType = {
    IdAdministrador: number | null
  }

  export type AdministradorCountAggregateOutputType = {
    IdAdministrador: number
    _all: number
  }


  export type AdministradorAvgAggregateInputType = {
    IdAdministrador?: true
  }

  export type AdministradorSumAggregateInputType = {
    IdAdministrador?: true
  }

  export type AdministradorMinAggregateInputType = {
    IdAdministrador?: true
  }

  export type AdministradorMaxAggregateInputType = {
    IdAdministrador?: true
  }

  export type AdministradorCountAggregateInputType = {
    IdAdministrador?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrador to aggregate.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type AdministradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithAggregationInput | AdministradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: AdministradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _avg?: AdministradorAvgAggregateInputType
    _sum?: AdministradorSumAggregateInputType
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    IdAdministrador: number
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends AdministradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type AdministradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdAdministrador?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdAdministrador?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdAdministrador?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectScalar = {
    IdAdministrador?: boolean
  }

  export type AdministradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdAdministrador", ExtArgs["result"]["administrador"]>
  export type AdministradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AdministradorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AdministradorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AdministradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrador"
    objects: {
      Usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      IdAdministrador: number
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type AdministradorGetPayload<S extends boolean | null | undefined | AdministradorDefaultArgs> = $Result.GetResult<Prisma.$AdministradorPayload, S>

  type AdministradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface AdministradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrador'], meta: { name: 'Administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {AdministradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministradorFindUniqueArgs>(args: SelectSubset<T, AdministradorFindUniqueArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministradorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministradorFindFirstArgs>(args?: SelectSubset<T, AdministradorFindFirstArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministradorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `IdAdministrador`
     * const administradorWithIdAdministradorOnly = await prisma.administrador.findMany({ select: { IdAdministrador: true } })
     * 
     */
    findMany<T extends AdministradorFindManyArgs>(args?: SelectSubset<T, AdministradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrador.
     * @param {AdministradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends AdministradorCreateArgs>(args: SelectSubset<T, AdministradorCreateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administradors.
     * @param {AdministradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministradorCreateManyArgs>(args?: SelectSubset<T, AdministradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administradors and returns the data saved in the database.
     * @param {AdministradorCreateManyAndReturnArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administradors and only return the `IdAdministrador`
     * const administradorWithIdAdministradorOnly = await prisma.administrador.createManyAndReturn({
     *   select: { IdAdministrador: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdministradorCreateManyAndReturnArgs>(args?: SelectSubset<T, AdministradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Administrador.
     * @param {AdministradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends AdministradorDeleteArgs>(args: SelectSubset<T, AdministradorDeleteArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrador.
     * @param {AdministradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministradorUpdateArgs>(args: SelectSubset<T, AdministradorUpdateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administradors.
     * @param {AdministradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministradorDeleteManyArgs>(args?: SelectSubset<T, AdministradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministradorUpdateManyArgs>(args: SelectSubset<T, AdministradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors and returns the data updated in the database.
     * @param {AdministradorUpdateManyAndReturnArgs} args - Arguments to update many Administradors.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Administradors and only return the `IdAdministrador`
     * const administradorWithIdAdministradorOnly = await prisma.administrador.updateManyAndReturn({
     *   select: { IdAdministrador: true },
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
    updateManyAndReturn<T extends AdministradorUpdateManyAndReturnArgs>(args: SelectSubset<T, AdministradorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Administrador.
     * @param {AdministradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends AdministradorUpsertArgs>(args: SelectSubset<T, AdministradorUpsertArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends AdministradorCountArgs>(
      args?: Subset<T, AdministradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorGroupByArgs} args - Group by arguments.
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
      T extends AdministradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministradorGroupByArgs['orderBy'] }
        : { orderBy?: AdministradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdministradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrador model
   */
  readonly fields: AdministradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Administrador model
   */
  interface AdministradorFieldRefs {
    readonly IdAdministrador: FieldRef<"Administrador", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Administrador findUnique
   */
  export type AdministradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findUniqueOrThrow
   */
  export type AdministradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findFirst
   */
  export type AdministradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findFirstOrThrow
   */
  export type AdministradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findMany
   */
  export type AdministradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administradors to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador create
   */
  export type AdministradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to create a Administrador.
     */
    data: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
  }

  /**
   * Administrador createMany
   */
  export type AdministradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador createManyAndReturn
   */
  export type AdministradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Administrador update
   */
  export type AdministradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to update a Administrador.
     */
    data: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
    /**
     * Choose, which Administrador to update.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador updateMany
   */
  export type AdministradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
  }

  /**
   * Administrador updateManyAndReturn
   */
  export type AdministradorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Administrador upsert
   */
  export type AdministradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The filter to search for the Administrador to update in case it exists.
     */
    where: AdministradorWhereUniqueInput
    /**
     * In case the Administrador found by the `where` argument doesn't exist, create a new Administrador with this data.
     */
    create: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
    /**
     * In case the Administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
  }

  /**
   * Administrador delete
   */
  export type AdministradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter which Administrador to delete.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador deleteMany
   */
  export type AdministradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administradors to delete
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to delete.
     */
    limit?: number
  }

  /**
   * Administrador without action
   */
  export type AdministradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    IdProduto: number | null
    Quantidade: number | null
    PedidoId: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    IdProduto: number | null
    Quantidade: number | null
    PedidoId: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    IdProduto: number | null
    Nome: string | null
    Quantidade: number | null
    Tipo: $Enums.TipoDeProduto | null
    PedidoId: number | null
  }

  export type ProdutoMaxAggregateOutputType = {
    IdProduto: number | null
    Nome: string | null
    Quantidade: number | null
    Tipo: $Enums.TipoDeProduto | null
    PedidoId: number | null
  }

  export type ProdutoCountAggregateOutputType = {
    IdProduto: number
    Nome: number
    Quantidade: number
    Tipo: number
    PedidoId: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    IdProduto?: true
    Quantidade?: true
    PedidoId?: true
  }

  export type ProdutoSumAggregateInputType = {
    IdProduto?: true
    Quantidade?: true
    PedidoId?: true
  }

  export type ProdutoMinAggregateInputType = {
    IdProduto?: true
    Nome?: true
    Quantidade?: true
    Tipo?: true
    PedidoId?: true
  }

  export type ProdutoMaxAggregateInputType = {
    IdProduto?: true
    Nome?: true
    Quantidade?: true
    Tipo?: true
    PedidoId?: true
  }

  export type ProdutoCountAggregateInputType = {
    IdProduto?: true
    Nome?: true
    Quantidade?: true
    Tipo?: true
    PedidoId?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    IdProduto: number
    Nome: string
    Quantidade: number
    Tipo: $Enums.TipoDeProduto
    PedidoId: number | null
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdProduto?: boolean
    Nome?: boolean
    Quantidade?: boolean
    Tipo?: boolean
    PedidoId?: boolean
    ProdutoLote?: boolean | Produto$ProdutoLoteArgs<ExtArgs>
    Pedido?: boolean | Produto$PedidoArgs<ExtArgs>
    Lote?: boolean | Produto$LoteArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdProduto?: boolean
    Nome?: boolean
    Quantidade?: boolean
    Tipo?: boolean
    PedidoId?: boolean
    Pedido?: boolean | Produto$PedidoArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdProduto?: boolean
    Nome?: boolean
    Quantidade?: boolean
    Tipo?: boolean
    PedidoId?: boolean
    Pedido?: boolean | Produto$PedidoArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    IdProduto?: boolean
    Nome?: boolean
    Quantidade?: boolean
    Tipo?: boolean
    PedidoId?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdProduto" | "Nome" | "Quantidade" | "Tipo" | "PedidoId", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProdutoLote?: boolean | Produto$ProdutoLoteArgs<ExtArgs>
    Pedido?: boolean | Produto$PedidoArgs<ExtArgs>
    Lote?: boolean | Produto$LoteArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | Produto$PedidoArgs<ExtArgs>
  }
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | Produto$PedidoArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      ProdutoLote: Prisma.$ProdutoLotePayload<ExtArgs>[]
      Pedido: Prisma.$PedidoPayload<ExtArgs> | null
      Lote: Prisma.$LotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      IdProduto: number
      Nome: string
      Quantidade: number
      Tipo: $Enums.TipoDeProduto
      PedidoId: number | null
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `IdProduto`
     * const produtoWithIdProdutoOnly = await prisma.produto.findMany({ select: { IdProduto: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `IdProduto`
     * const produtoWithIdProdutoOnly = await prisma.produto.createManyAndReturn({
     *   select: { IdProduto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `IdProduto`
     * const produtoWithIdProdutoOnly = await prisma.produto.updateManyAndReturn({
     *   select: { IdProduto: true },
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
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProdutoLote<T extends Produto$ProdutoLoteArgs<ExtArgs> = {}>(args?: Subset<T, Produto$ProdutoLoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoLotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Pedido<T extends Produto$PedidoArgs<ExtArgs> = {}>(args?: Subset<T, Produto$PedidoArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Lote<T extends Produto$LoteArgs<ExtArgs> = {}>(args?: Subset<T, Produto$LoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly IdProduto: FieldRef<"Produto", 'Int'>
    readonly Nome: FieldRef<"Produto", 'String'>
    readonly Quantidade: FieldRef<"Produto", 'Int'>
    readonly Tipo: FieldRef<"Produto", 'TipoDeProduto'>
    readonly PedidoId: FieldRef<"Produto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.ProdutoLote
   */
  export type Produto$ProdutoLoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteInclude<ExtArgs> | null
    where?: ProdutoLoteWhereInput
    orderBy?: ProdutoLoteOrderByWithRelationInput | ProdutoLoteOrderByWithRelationInput[]
    cursor?: ProdutoLoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoLoteScalarFieldEnum | ProdutoLoteScalarFieldEnum[]
  }

  /**
   * Produto.Pedido
   */
  export type Produto$PedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
  }

  /**
   * Produto.Lote
   */
  export type Produto$LoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    where?: LoteWhereInput
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    cursor?: LoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Lote
   */

  export type AggregateLote = {
    _count: LoteCountAggregateOutputType | null
    _avg: LoteAvgAggregateOutputType | null
    _sum: LoteSumAggregateOutputType | null
    _min: LoteMinAggregateOutputType | null
    _max: LoteMaxAggregateOutputType | null
  }

  export type LoteAvgAggregateOutputType = {
    IdLote: number | null
    Quantidade: number | null
    EstoqueId: number | null
  }

  export type LoteSumAggregateOutputType = {
    IdLote: number | null
    Quantidade: number | null
    EstoqueId: number | null
  }

  export type LoteMinAggregateOutputType = {
    IdLote: number | null
    Data: Date | null
    Quantidade: number | null
    EstoqueId: number | null
  }

  export type LoteMaxAggregateOutputType = {
    IdLote: number | null
    Data: Date | null
    Quantidade: number | null
    EstoqueId: number | null
  }

  export type LoteCountAggregateOutputType = {
    IdLote: number
    Data: number
    Quantidade: number
    EstoqueId: number
    _all: number
  }


  export type LoteAvgAggregateInputType = {
    IdLote?: true
    Quantidade?: true
    EstoqueId?: true
  }

  export type LoteSumAggregateInputType = {
    IdLote?: true
    Quantidade?: true
    EstoqueId?: true
  }

  export type LoteMinAggregateInputType = {
    IdLote?: true
    Data?: true
    Quantidade?: true
    EstoqueId?: true
  }

  export type LoteMaxAggregateInputType = {
    IdLote?: true
    Data?: true
    Quantidade?: true
    EstoqueId?: true
  }

  export type LoteCountAggregateInputType = {
    IdLote?: true
    Data?: true
    Quantidade?: true
    EstoqueId?: true
    _all?: true
  }

  export type LoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lote to aggregate.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lotes
    **/
    _count?: true | LoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoteMaxAggregateInputType
  }

  export type GetLoteAggregateType<T extends LoteAggregateArgs> = {
        [P in keyof T & keyof AggregateLote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLote[P]>
      : GetScalarType<T[P], AggregateLote[P]>
  }




  export type LoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoteWhereInput
    orderBy?: LoteOrderByWithAggregationInput | LoteOrderByWithAggregationInput[]
    by: LoteScalarFieldEnum[] | LoteScalarFieldEnum
    having?: LoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoteCountAggregateInputType | true
    _avg?: LoteAvgAggregateInputType
    _sum?: LoteSumAggregateInputType
    _min?: LoteMinAggregateInputType
    _max?: LoteMaxAggregateInputType
  }

  export type LoteGroupByOutputType = {
    IdLote: number
    Data: Date
    Quantidade: number
    EstoqueId: number
    _count: LoteCountAggregateOutputType | null
    _avg: LoteAvgAggregateOutputType | null
    _sum: LoteSumAggregateOutputType | null
    _min: LoteMinAggregateOutputType | null
    _max: LoteMaxAggregateOutputType | null
  }

  type GetLoteGroupByPayload<T extends LoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoteGroupByOutputType[P]>
            : GetScalarType<T[P], LoteGroupByOutputType[P]>
        }
      >
    >


  export type LoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdLote?: boolean
    Data?: boolean
    Quantidade?: boolean
    EstoqueId?: boolean
    Estoque?: boolean | EstoqueDefaultArgs<ExtArgs>
    ProdutoLote?: boolean | Lote$ProdutoLoteArgs<ExtArgs>
    Produtos?: boolean | Lote$ProdutosArgs<ExtArgs>
    _count?: boolean | LoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lote"]>

  export type LoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdLote?: boolean
    Data?: boolean
    Quantidade?: boolean
    EstoqueId?: boolean
    Estoque?: boolean | EstoqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lote"]>

  export type LoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdLote?: boolean
    Data?: boolean
    Quantidade?: boolean
    EstoqueId?: boolean
    Estoque?: boolean | EstoqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lote"]>

  export type LoteSelectScalar = {
    IdLote?: boolean
    Data?: boolean
    Quantidade?: boolean
    EstoqueId?: boolean
  }

  export type LoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdLote" | "Data" | "Quantidade" | "EstoqueId", ExtArgs["result"]["lote"]>
  export type LoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estoque?: boolean | EstoqueDefaultArgs<ExtArgs>
    ProdutoLote?: boolean | Lote$ProdutoLoteArgs<ExtArgs>
    Produtos?: boolean | Lote$ProdutosArgs<ExtArgs>
    _count?: boolean | LoteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estoque?: boolean | EstoqueDefaultArgs<ExtArgs>
  }
  export type LoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estoque?: boolean | EstoqueDefaultArgs<ExtArgs>
  }

  export type $LotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lote"
    objects: {
      Estoque: Prisma.$EstoquePayload<ExtArgs>
      ProdutoLote: Prisma.$ProdutoLotePayload<ExtArgs>[]
      Produtos: Prisma.$ProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      IdLote: number
      Data: Date
      Quantidade: number
      EstoqueId: number
    }, ExtArgs["result"]["lote"]>
    composites: {}
  }

  type LoteGetPayload<S extends boolean | null | undefined | LoteDefaultArgs> = $Result.GetResult<Prisma.$LotePayload, S>

  type LoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoteCountAggregateInputType | true
    }

  export interface LoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lote'], meta: { name: 'Lote' } }
    /**
     * Find zero or one Lote that matches the filter.
     * @param {LoteFindUniqueArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoteFindUniqueArgs>(args: SelectSubset<T, LoteFindUniqueArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoteFindUniqueOrThrowArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoteFindUniqueOrThrowArgs>(args: SelectSubset<T, LoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindFirstArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoteFindFirstArgs>(args?: SelectSubset<T, LoteFindFirstArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindFirstOrThrowArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoteFindFirstOrThrowArgs>(args?: SelectSubset<T, LoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lotes
     * const lotes = await prisma.lote.findMany()
     * 
     * // Get first 10 Lotes
     * const lotes = await prisma.lote.findMany({ take: 10 })
     * 
     * // Only select the `IdLote`
     * const loteWithIdLoteOnly = await prisma.lote.findMany({ select: { IdLote: true } })
     * 
     */
    findMany<T extends LoteFindManyArgs>(args?: SelectSubset<T, LoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lote.
     * @param {LoteCreateArgs} args - Arguments to create a Lote.
     * @example
     * // Create one Lote
     * const Lote = await prisma.lote.create({
     *   data: {
     *     // ... data to create a Lote
     *   }
     * })
     * 
     */
    create<T extends LoteCreateArgs>(args: SelectSubset<T, LoteCreateArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lotes.
     * @param {LoteCreateManyArgs} args - Arguments to create many Lotes.
     * @example
     * // Create many Lotes
     * const lote = await prisma.lote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoteCreateManyArgs>(args?: SelectSubset<T, LoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lotes and returns the data saved in the database.
     * @param {LoteCreateManyAndReturnArgs} args - Arguments to create many Lotes.
     * @example
     * // Create many Lotes
     * const lote = await prisma.lote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lotes and only return the `IdLote`
     * const loteWithIdLoteOnly = await prisma.lote.createManyAndReturn({
     *   select: { IdLote: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoteCreateManyAndReturnArgs>(args?: SelectSubset<T, LoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lote.
     * @param {LoteDeleteArgs} args - Arguments to delete one Lote.
     * @example
     * // Delete one Lote
     * const Lote = await prisma.lote.delete({
     *   where: {
     *     // ... filter to delete one Lote
     *   }
     * })
     * 
     */
    delete<T extends LoteDeleteArgs>(args: SelectSubset<T, LoteDeleteArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lote.
     * @param {LoteUpdateArgs} args - Arguments to update one Lote.
     * @example
     * // Update one Lote
     * const lote = await prisma.lote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoteUpdateArgs>(args: SelectSubset<T, LoteUpdateArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lotes.
     * @param {LoteDeleteManyArgs} args - Arguments to filter Lotes to delete.
     * @example
     * // Delete a few Lotes
     * const { count } = await prisma.lote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoteDeleteManyArgs>(args?: SelectSubset<T, LoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lotes
     * const lote = await prisma.lote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoteUpdateManyArgs>(args: SelectSubset<T, LoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lotes and returns the data updated in the database.
     * @param {LoteUpdateManyAndReturnArgs} args - Arguments to update many Lotes.
     * @example
     * // Update many Lotes
     * const lote = await prisma.lote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lotes and only return the `IdLote`
     * const loteWithIdLoteOnly = await prisma.lote.updateManyAndReturn({
     *   select: { IdLote: true },
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
    updateManyAndReturn<T extends LoteUpdateManyAndReturnArgs>(args: SelectSubset<T, LoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lote.
     * @param {LoteUpsertArgs} args - Arguments to update or create a Lote.
     * @example
     * // Update or create a Lote
     * const lote = await prisma.lote.upsert({
     *   create: {
     *     // ... data to create a Lote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lote we want to update
     *   }
     * })
     */
    upsert<T extends LoteUpsertArgs>(args: SelectSubset<T, LoteUpsertArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteCountArgs} args - Arguments to filter Lotes to count.
     * @example
     * // Count the number of Lotes
     * const count = await prisma.lote.count({
     *   where: {
     *     // ... the filter for the Lotes we want to count
     *   }
     * })
    **/
    count<T extends LoteCountArgs>(
      args?: Subset<T, LoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoteAggregateArgs>(args: Subset<T, LoteAggregateArgs>): Prisma.PrismaPromise<GetLoteAggregateType<T>>

    /**
     * Group by Lote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteGroupByArgs} args - Group by arguments.
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
      T extends LoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoteGroupByArgs['orderBy'] }
        : { orderBy?: LoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lote model
   */
  readonly fields: LoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Estoque<T extends EstoqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstoqueDefaultArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ProdutoLote<T extends Lote$ProdutoLoteArgs<ExtArgs> = {}>(args?: Subset<T, Lote$ProdutoLoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoLotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Produtos<T extends Lote$ProdutosArgs<ExtArgs> = {}>(args?: Subset<T, Lote$ProdutosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lote model
   */
  interface LoteFieldRefs {
    readonly IdLote: FieldRef<"Lote", 'Int'>
    readonly Data: FieldRef<"Lote", 'DateTime'>
    readonly Quantidade: FieldRef<"Lote", 'Int'>
    readonly EstoqueId: FieldRef<"Lote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Lote findUnique
   */
  export type LoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote findUniqueOrThrow
   */
  export type LoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote findFirst
   */
  export type LoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lotes.
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lotes.
     */
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Lote findFirstOrThrow
   */
  export type LoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lotes.
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lotes.
     */
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Lote findMany
   */
  export type LoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lotes to fetch.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lotes.
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Lote create
   */
  export type LoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Lote.
     */
    data: XOR<LoteCreateInput, LoteUncheckedCreateInput>
  }

  /**
   * Lote createMany
   */
  export type LoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lotes.
     */
    data: LoteCreateManyInput | LoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lote createManyAndReturn
   */
  export type LoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * The data used to create many Lotes.
     */
    data: LoteCreateManyInput | LoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lote update
   */
  export type LoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Lote.
     */
    data: XOR<LoteUpdateInput, LoteUncheckedUpdateInput>
    /**
     * Choose, which Lote to update.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote updateMany
   */
  export type LoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lotes.
     */
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyInput>
    /**
     * Filter which Lotes to update
     */
    where?: LoteWhereInput
    /**
     * Limit how many Lotes to update.
     */
    limit?: number
  }

  /**
   * Lote updateManyAndReturn
   */
  export type LoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * The data used to update Lotes.
     */
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyInput>
    /**
     * Filter which Lotes to update
     */
    where?: LoteWhereInput
    /**
     * Limit how many Lotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lote upsert
   */
  export type LoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Lote to update in case it exists.
     */
    where: LoteWhereUniqueInput
    /**
     * In case the Lote found by the `where` argument doesn't exist, create a new Lote with this data.
     */
    create: XOR<LoteCreateInput, LoteUncheckedCreateInput>
    /**
     * In case the Lote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoteUpdateInput, LoteUncheckedUpdateInput>
  }

  /**
   * Lote delete
   */
  export type LoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter which Lote to delete.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote deleteMany
   */
  export type LoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lotes to delete
     */
    where?: LoteWhereInput
    /**
     * Limit how many Lotes to delete.
     */
    limit?: number
  }

  /**
   * Lote.ProdutoLote
   */
  export type Lote$ProdutoLoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteInclude<ExtArgs> | null
    where?: ProdutoLoteWhereInput
    orderBy?: ProdutoLoteOrderByWithRelationInput | ProdutoLoteOrderByWithRelationInput[]
    cursor?: ProdutoLoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoLoteScalarFieldEnum | ProdutoLoteScalarFieldEnum[]
  }

  /**
   * Lote.Produtos
   */
  export type Lote$ProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Lote without action
   */
  export type LoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
  }


  /**
   * Model ProdutoLote
   */

  export type AggregateProdutoLote = {
    _count: ProdutoLoteCountAggregateOutputType | null
    _avg: ProdutoLoteAvgAggregateOutputType | null
    _sum: ProdutoLoteSumAggregateOutputType | null
    _min: ProdutoLoteMinAggregateOutputType | null
    _max: ProdutoLoteMaxAggregateOutputType | null
  }

  export type ProdutoLoteAvgAggregateOutputType = {
    produtoId: number | null
    loteId: number | null
  }

  export type ProdutoLoteSumAggregateOutputType = {
    produtoId: number | null
    loteId: number | null
  }

  export type ProdutoLoteMinAggregateOutputType = {
    produtoId: number | null
    loteId: number | null
  }

  export type ProdutoLoteMaxAggregateOutputType = {
    produtoId: number | null
    loteId: number | null
  }

  export type ProdutoLoteCountAggregateOutputType = {
    produtoId: number
    loteId: number
    _all: number
  }


  export type ProdutoLoteAvgAggregateInputType = {
    produtoId?: true
    loteId?: true
  }

  export type ProdutoLoteSumAggregateInputType = {
    produtoId?: true
    loteId?: true
  }

  export type ProdutoLoteMinAggregateInputType = {
    produtoId?: true
    loteId?: true
  }

  export type ProdutoLoteMaxAggregateInputType = {
    produtoId?: true
    loteId?: true
  }

  export type ProdutoLoteCountAggregateInputType = {
    produtoId?: true
    loteId?: true
    _all?: true
  }

  export type ProdutoLoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProdutoLote to aggregate.
     */
    where?: ProdutoLoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoLotes to fetch.
     */
    orderBy?: ProdutoLoteOrderByWithRelationInput | ProdutoLoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoLoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoLotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoLotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProdutoLotes
    **/
    _count?: true | ProdutoLoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoLoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoLoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoLoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoLoteMaxAggregateInputType
  }

  export type GetProdutoLoteAggregateType<T extends ProdutoLoteAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutoLote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutoLote[P]>
      : GetScalarType<T[P], AggregateProdutoLote[P]>
  }




  export type ProdutoLoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoLoteWhereInput
    orderBy?: ProdutoLoteOrderByWithAggregationInput | ProdutoLoteOrderByWithAggregationInput[]
    by: ProdutoLoteScalarFieldEnum[] | ProdutoLoteScalarFieldEnum
    having?: ProdutoLoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoLoteCountAggregateInputType | true
    _avg?: ProdutoLoteAvgAggregateInputType
    _sum?: ProdutoLoteSumAggregateInputType
    _min?: ProdutoLoteMinAggregateInputType
    _max?: ProdutoLoteMaxAggregateInputType
  }

  export type ProdutoLoteGroupByOutputType = {
    produtoId: number
    loteId: number
    _count: ProdutoLoteCountAggregateOutputType | null
    _avg: ProdutoLoteAvgAggregateOutputType | null
    _sum: ProdutoLoteSumAggregateOutputType | null
    _min: ProdutoLoteMinAggregateOutputType | null
    _max: ProdutoLoteMaxAggregateOutputType | null
  }

  type GetProdutoLoteGroupByPayload<T extends ProdutoLoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoLoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoLoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoLoteGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoLoteGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoLoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    produtoId?: boolean
    loteId?: boolean
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    Lote?: boolean | LoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtoLote"]>

  export type ProdutoLoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    produtoId?: boolean
    loteId?: boolean
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    Lote?: boolean | LoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtoLote"]>

  export type ProdutoLoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    produtoId?: boolean
    loteId?: boolean
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    Lote?: boolean | LoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtoLote"]>

  export type ProdutoLoteSelectScalar = {
    produtoId?: boolean
    loteId?: boolean
  }

  export type ProdutoLoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"produtoId" | "loteId", ExtArgs["result"]["produtoLote"]>
  export type ProdutoLoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    Lote?: boolean | LoteDefaultArgs<ExtArgs>
  }
  export type ProdutoLoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    Lote?: boolean | LoteDefaultArgs<ExtArgs>
  }
  export type ProdutoLoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    Lote?: boolean | LoteDefaultArgs<ExtArgs>
  }

  export type $ProdutoLotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProdutoLote"
    objects: {
      Produto: Prisma.$ProdutoPayload<ExtArgs>
      Lote: Prisma.$LotePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      produtoId: number
      loteId: number
    }, ExtArgs["result"]["produtoLote"]>
    composites: {}
  }

  type ProdutoLoteGetPayload<S extends boolean | null | undefined | ProdutoLoteDefaultArgs> = $Result.GetResult<Prisma.$ProdutoLotePayload, S>

  type ProdutoLoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoLoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoLoteCountAggregateInputType | true
    }

  export interface ProdutoLoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProdutoLote'], meta: { name: 'ProdutoLote' } }
    /**
     * Find zero or one ProdutoLote that matches the filter.
     * @param {ProdutoLoteFindUniqueArgs} args - Arguments to find a ProdutoLote
     * @example
     * // Get one ProdutoLote
     * const produtoLote = await prisma.produtoLote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoLoteFindUniqueArgs>(args: SelectSubset<T, ProdutoLoteFindUniqueArgs<ExtArgs>>): Prisma__ProdutoLoteClient<$Result.GetResult<Prisma.$ProdutoLotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProdutoLote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoLoteFindUniqueOrThrowArgs} args - Arguments to find a ProdutoLote
     * @example
     * // Get one ProdutoLote
     * const produtoLote = await prisma.produtoLote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoLoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoLoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoLoteClient<$Result.GetResult<Prisma.$ProdutoLotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProdutoLote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoLoteFindFirstArgs} args - Arguments to find a ProdutoLote
     * @example
     * // Get one ProdutoLote
     * const produtoLote = await prisma.produtoLote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoLoteFindFirstArgs>(args?: SelectSubset<T, ProdutoLoteFindFirstArgs<ExtArgs>>): Prisma__ProdutoLoteClient<$Result.GetResult<Prisma.$ProdutoLotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProdutoLote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoLoteFindFirstOrThrowArgs} args - Arguments to find a ProdutoLote
     * @example
     * // Get one ProdutoLote
     * const produtoLote = await prisma.produtoLote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoLoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoLoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoLoteClient<$Result.GetResult<Prisma.$ProdutoLotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProdutoLotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoLoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProdutoLotes
     * const produtoLotes = await prisma.produtoLote.findMany()
     * 
     * // Get first 10 ProdutoLotes
     * const produtoLotes = await prisma.produtoLote.findMany({ take: 10 })
     * 
     * // Only select the `produtoId`
     * const produtoLoteWithProdutoIdOnly = await prisma.produtoLote.findMany({ select: { produtoId: true } })
     * 
     */
    findMany<T extends ProdutoLoteFindManyArgs>(args?: SelectSubset<T, ProdutoLoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoLotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProdutoLote.
     * @param {ProdutoLoteCreateArgs} args - Arguments to create a ProdutoLote.
     * @example
     * // Create one ProdutoLote
     * const ProdutoLote = await prisma.produtoLote.create({
     *   data: {
     *     // ... data to create a ProdutoLote
     *   }
     * })
     * 
     */
    create<T extends ProdutoLoteCreateArgs>(args: SelectSubset<T, ProdutoLoteCreateArgs<ExtArgs>>): Prisma__ProdutoLoteClient<$Result.GetResult<Prisma.$ProdutoLotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProdutoLotes.
     * @param {ProdutoLoteCreateManyArgs} args - Arguments to create many ProdutoLotes.
     * @example
     * // Create many ProdutoLotes
     * const produtoLote = await prisma.produtoLote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoLoteCreateManyArgs>(args?: SelectSubset<T, ProdutoLoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProdutoLotes and returns the data saved in the database.
     * @param {ProdutoLoteCreateManyAndReturnArgs} args - Arguments to create many ProdutoLotes.
     * @example
     * // Create many ProdutoLotes
     * const produtoLote = await prisma.produtoLote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProdutoLotes and only return the `produtoId`
     * const produtoLoteWithProdutoIdOnly = await prisma.produtoLote.createManyAndReturn({
     *   select: { produtoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoLoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoLoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoLotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProdutoLote.
     * @param {ProdutoLoteDeleteArgs} args - Arguments to delete one ProdutoLote.
     * @example
     * // Delete one ProdutoLote
     * const ProdutoLote = await prisma.produtoLote.delete({
     *   where: {
     *     // ... filter to delete one ProdutoLote
     *   }
     * })
     * 
     */
    delete<T extends ProdutoLoteDeleteArgs>(args: SelectSubset<T, ProdutoLoteDeleteArgs<ExtArgs>>): Prisma__ProdutoLoteClient<$Result.GetResult<Prisma.$ProdutoLotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProdutoLote.
     * @param {ProdutoLoteUpdateArgs} args - Arguments to update one ProdutoLote.
     * @example
     * // Update one ProdutoLote
     * const produtoLote = await prisma.produtoLote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoLoteUpdateArgs>(args: SelectSubset<T, ProdutoLoteUpdateArgs<ExtArgs>>): Prisma__ProdutoLoteClient<$Result.GetResult<Prisma.$ProdutoLotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProdutoLotes.
     * @param {ProdutoLoteDeleteManyArgs} args - Arguments to filter ProdutoLotes to delete.
     * @example
     * // Delete a few ProdutoLotes
     * const { count } = await prisma.produtoLote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoLoteDeleteManyArgs>(args?: SelectSubset<T, ProdutoLoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProdutoLotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoLoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProdutoLotes
     * const produtoLote = await prisma.produtoLote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoLoteUpdateManyArgs>(args: SelectSubset<T, ProdutoLoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProdutoLotes and returns the data updated in the database.
     * @param {ProdutoLoteUpdateManyAndReturnArgs} args - Arguments to update many ProdutoLotes.
     * @example
     * // Update many ProdutoLotes
     * const produtoLote = await prisma.produtoLote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProdutoLotes and only return the `produtoId`
     * const produtoLoteWithProdutoIdOnly = await prisma.produtoLote.updateManyAndReturn({
     *   select: { produtoId: true },
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
    updateManyAndReturn<T extends ProdutoLoteUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoLoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoLotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProdutoLote.
     * @param {ProdutoLoteUpsertArgs} args - Arguments to update or create a ProdutoLote.
     * @example
     * // Update or create a ProdutoLote
     * const produtoLote = await prisma.produtoLote.upsert({
     *   create: {
     *     // ... data to create a ProdutoLote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProdutoLote we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoLoteUpsertArgs>(args: SelectSubset<T, ProdutoLoteUpsertArgs<ExtArgs>>): Prisma__ProdutoLoteClient<$Result.GetResult<Prisma.$ProdutoLotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProdutoLotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoLoteCountArgs} args - Arguments to filter ProdutoLotes to count.
     * @example
     * // Count the number of ProdutoLotes
     * const count = await prisma.produtoLote.count({
     *   where: {
     *     // ... the filter for the ProdutoLotes we want to count
     *   }
     * })
    **/
    count<T extends ProdutoLoteCountArgs>(
      args?: Subset<T, ProdutoLoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoLoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProdutoLote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoLoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoLoteAggregateArgs>(args: Subset<T, ProdutoLoteAggregateArgs>): Prisma.PrismaPromise<GetProdutoLoteAggregateType<T>>

    /**
     * Group by ProdutoLote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoLoteGroupByArgs} args - Group by arguments.
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
      T extends ProdutoLoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoLoteGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoLoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoLoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoLoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProdutoLote model
   */
  readonly fields: ProdutoLoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProdutoLote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoLoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Lote<T extends LoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoteDefaultArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProdutoLote model
   */
  interface ProdutoLoteFieldRefs {
    readonly produtoId: FieldRef<"ProdutoLote", 'Int'>
    readonly loteId: FieldRef<"ProdutoLote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProdutoLote findUnique
   */
  export type ProdutoLoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoLote to fetch.
     */
    where: ProdutoLoteWhereUniqueInput
  }

  /**
   * ProdutoLote findUniqueOrThrow
   */
  export type ProdutoLoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoLote to fetch.
     */
    where: ProdutoLoteWhereUniqueInput
  }

  /**
   * ProdutoLote findFirst
   */
  export type ProdutoLoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoLote to fetch.
     */
    where?: ProdutoLoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoLotes to fetch.
     */
    orderBy?: ProdutoLoteOrderByWithRelationInput | ProdutoLoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProdutoLotes.
     */
    cursor?: ProdutoLoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoLotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoLotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdutoLotes.
     */
    distinct?: ProdutoLoteScalarFieldEnum | ProdutoLoteScalarFieldEnum[]
  }

  /**
   * ProdutoLote findFirstOrThrow
   */
  export type ProdutoLoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoLote to fetch.
     */
    where?: ProdutoLoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoLotes to fetch.
     */
    orderBy?: ProdutoLoteOrderByWithRelationInput | ProdutoLoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProdutoLotes.
     */
    cursor?: ProdutoLoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoLotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoLotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdutoLotes.
     */
    distinct?: ProdutoLoteScalarFieldEnum | ProdutoLoteScalarFieldEnum[]
  }

  /**
   * ProdutoLote findMany
   */
  export type ProdutoLoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoLotes to fetch.
     */
    where?: ProdutoLoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoLotes to fetch.
     */
    orderBy?: ProdutoLoteOrderByWithRelationInput | ProdutoLoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProdutoLotes.
     */
    cursor?: ProdutoLoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoLotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoLotes.
     */
    skip?: number
    distinct?: ProdutoLoteScalarFieldEnum | ProdutoLoteScalarFieldEnum[]
  }

  /**
   * ProdutoLote create
   */
  export type ProdutoLoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ProdutoLote.
     */
    data: XOR<ProdutoLoteCreateInput, ProdutoLoteUncheckedCreateInput>
  }

  /**
   * ProdutoLote createMany
   */
  export type ProdutoLoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProdutoLotes.
     */
    data: ProdutoLoteCreateManyInput | ProdutoLoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProdutoLote createManyAndReturn
   */
  export type ProdutoLoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * The data used to create many ProdutoLotes.
     */
    data: ProdutoLoteCreateManyInput | ProdutoLoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProdutoLote update
   */
  export type ProdutoLoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ProdutoLote.
     */
    data: XOR<ProdutoLoteUpdateInput, ProdutoLoteUncheckedUpdateInput>
    /**
     * Choose, which ProdutoLote to update.
     */
    where: ProdutoLoteWhereUniqueInput
  }

  /**
   * ProdutoLote updateMany
   */
  export type ProdutoLoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProdutoLotes.
     */
    data: XOR<ProdutoLoteUpdateManyMutationInput, ProdutoLoteUncheckedUpdateManyInput>
    /**
     * Filter which ProdutoLotes to update
     */
    where?: ProdutoLoteWhereInput
    /**
     * Limit how many ProdutoLotes to update.
     */
    limit?: number
  }

  /**
   * ProdutoLote updateManyAndReturn
   */
  export type ProdutoLoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * The data used to update ProdutoLotes.
     */
    data: XOR<ProdutoLoteUpdateManyMutationInput, ProdutoLoteUncheckedUpdateManyInput>
    /**
     * Filter which ProdutoLotes to update
     */
    where?: ProdutoLoteWhereInput
    /**
     * Limit how many ProdutoLotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProdutoLote upsert
   */
  export type ProdutoLoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ProdutoLote to update in case it exists.
     */
    where: ProdutoLoteWhereUniqueInput
    /**
     * In case the ProdutoLote found by the `where` argument doesn't exist, create a new ProdutoLote with this data.
     */
    create: XOR<ProdutoLoteCreateInput, ProdutoLoteUncheckedCreateInput>
    /**
     * In case the ProdutoLote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoLoteUpdateInput, ProdutoLoteUncheckedUpdateInput>
  }

  /**
   * ProdutoLote delete
   */
  export type ProdutoLoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteInclude<ExtArgs> | null
    /**
     * Filter which ProdutoLote to delete.
     */
    where: ProdutoLoteWhereUniqueInput
  }

  /**
   * ProdutoLote deleteMany
   */
  export type ProdutoLoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProdutoLotes to delete
     */
    where?: ProdutoLoteWhereInput
    /**
     * Limit how many ProdutoLotes to delete.
     */
    limit?: number
  }

  /**
   * ProdutoLote without action
   */
  export type ProdutoLoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoLote
     */
    select?: ProdutoLoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoLote
     */
    omit?: ProdutoLoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoLoteInclude<ExtArgs> | null
  }


  /**
   * Model Estoque
   */

  export type AggregateEstoque = {
    _count: EstoqueCountAggregateOutputType | null
    _avg: EstoqueAvgAggregateOutputType | null
    _sum: EstoqueSumAggregateOutputType | null
    _min: EstoqueMinAggregateOutputType | null
    _max: EstoqueMaxAggregateOutputType | null
  }

  export type EstoqueAvgAggregateOutputType = {
    IdEstoque: number | null
  }

  export type EstoqueSumAggregateOutputType = {
    IdEstoque: number | null
  }

  export type EstoqueMinAggregateOutputType = {
    IdEstoque: number | null
    Reposicao: boolean | null
    Endereco: string | null
  }

  export type EstoqueMaxAggregateOutputType = {
    IdEstoque: number | null
    Reposicao: boolean | null
    Endereco: string | null
  }

  export type EstoqueCountAggregateOutputType = {
    IdEstoque: number
    Reposicao: number
    Endereco: number
    _all: number
  }


  export type EstoqueAvgAggregateInputType = {
    IdEstoque?: true
  }

  export type EstoqueSumAggregateInputType = {
    IdEstoque?: true
  }

  export type EstoqueMinAggregateInputType = {
    IdEstoque?: true
    Reposicao?: true
    Endereco?: true
  }

  export type EstoqueMaxAggregateInputType = {
    IdEstoque?: true
    Reposicao?: true
    Endereco?: true
  }

  export type EstoqueCountAggregateInputType = {
    IdEstoque?: true
    Reposicao?: true
    Endereco?: true
    _all?: true
  }

  export type EstoqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estoque to aggregate.
     */
    where?: EstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estoques to fetch.
     */
    orderBy?: EstoqueOrderByWithRelationInput | EstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estoques
    **/
    _count?: true | EstoqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstoqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstoqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstoqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstoqueMaxAggregateInputType
  }

  export type GetEstoqueAggregateType<T extends EstoqueAggregateArgs> = {
        [P in keyof T & keyof AggregateEstoque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstoque[P]>
      : GetScalarType<T[P], AggregateEstoque[P]>
  }




  export type EstoqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstoqueWhereInput
    orderBy?: EstoqueOrderByWithAggregationInput | EstoqueOrderByWithAggregationInput[]
    by: EstoqueScalarFieldEnum[] | EstoqueScalarFieldEnum
    having?: EstoqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstoqueCountAggregateInputType | true
    _avg?: EstoqueAvgAggregateInputType
    _sum?: EstoqueSumAggregateInputType
    _min?: EstoqueMinAggregateInputType
    _max?: EstoqueMaxAggregateInputType
  }

  export type EstoqueGroupByOutputType = {
    IdEstoque: number
    Reposicao: boolean
    Endereco: string
    _count: EstoqueCountAggregateOutputType | null
    _avg: EstoqueAvgAggregateOutputType | null
    _sum: EstoqueSumAggregateOutputType | null
    _min: EstoqueMinAggregateOutputType | null
    _max: EstoqueMaxAggregateOutputType | null
  }

  type GetEstoqueGroupByPayload<T extends EstoqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstoqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstoqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstoqueGroupByOutputType[P]>
            : GetScalarType<T[P], EstoqueGroupByOutputType[P]>
        }
      >
    >


  export type EstoqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdEstoque?: boolean
    Reposicao?: boolean
    Endereco?: boolean
    lotes?: boolean | Estoque$lotesArgs<ExtArgs>
    _count?: boolean | EstoqueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estoque"]>

  export type EstoqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdEstoque?: boolean
    Reposicao?: boolean
    Endereco?: boolean
  }, ExtArgs["result"]["estoque"]>

  export type EstoqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdEstoque?: boolean
    Reposicao?: boolean
    Endereco?: boolean
  }, ExtArgs["result"]["estoque"]>

  export type EstoqueSelectScalar = {
    IdEstoque?: boolean
    Reposicao?: boolean
    Endereco?: boolean
  }

  export type EstoqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdEstoque" | "Reposicao" | "Endereco", ExtArgs["result"]["estoque"]>
  export type EstoqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lotes?: boolean | Estoque$lotesArgs<ExtArgs>
    _count?: boolean | EstoqueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstoqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EstoqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstoquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estoque"
    objects: {
      lotes: Prisma.$LotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      IdEstoque: number
      Reposicao: boolean
      Endereco: string
    }, ExtArgs["result"]["estoque"]>
    composites: {}
  }

  type EstoqueGetPayload<S extends boolean | null | undefined | EstoqueDefaultArgs> = $Result.GetResult<Prisma.$EstoquePayload, S>

  type EstoqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstoqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstoqueCountAggregateInputType | true
    }

  export interface EstoqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estoque'], meta: { name: 'Estoque' } }
    /**
     * Find zero or one Estoque that matches the filter.
     * @param {EstoqueFindUniqueArgs} args - Arguments to find a Estoque
     * @example
     * // Get one Estoque
     * const estoque = await prisma.estoque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstoqueFindUniqueArgs>(args: SelectSubset<T, EstoqueFindUniqueArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estoque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstoqueFindUniqueOrThrowArgs} args - Arguments to find a Estoque
     * @example
     * // Get one Estoque
     * const estoque = await prisma.estoque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstoqueFindUniqueOrThrowArgs>(args: SelectSubset<T, EstoqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estoque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueFindFirstArgs} args - Arguments to find a Estoque
     * @example
     * // Get one Estoque
     * const estoque = await prisma.estoque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstoqueFindFirstArgs>(args?: SelectSubset<T, EstoqueFindFirstArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estoque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueFindFirstOrThrowArgs} args - Arguments to find a Estoque
     * @example
     * // Get one Estoque
     * const estoque = await prisma.estoque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstoqueFindFirstOrThrowArgs>(args?: SelectSubset<T, EstoqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estoques
     * const estoques = await prisma.estoque.findMany()
     * 
     * // Get first 10 Estoques
     * const estoques = await prisma.estoque.findMany({ take: 10 })
     * 
     * // Only select the `IdEstoque`
     * const estoqueWithIdEstoqueOnly = await prisma.estoque.findMany({ select: { IdEstoque: true } })
     * 
     */
    findMany<T extends EstoqueFindManyArgs>(args?: SelectSubset<T, EstoqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estoque.
     * @param {EstoqueCreateArgs} args - Arguments to create a Estoque.
     * @example
     * // Create one Estoque
     * const Estoque = await prisma.estoque.create({
     *   data: {
     *     // ... data to create a Estoque
     *   }
     * })
     * 
     */
    create<T extends EstoqueCreateArgs>(args: SelectSubset<T, EstoqueCreateArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estoques.
     * @param {EstoqueCreateManyArgs} args - Arguments to create many Estoques.
     * @example
     * // Create many Estoques
     * const estoque = await prisma.estoque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstoqueCreateManyArgs>(args?: SelectSubset<T, EstoqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estoques and returns the data saved in the database.
     * @param {EstoqueCreateManyAndReturnArgs} args - Arguments to create many Estoques.
     * @example
     * // Create many Estoques
     * const estoque = await prisma.estoque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estoques and only return the `IdEstoque`
     * const estoqueWithIdEstoqueOnly = await prisma.estoque.createManyAndReturn({
     *   select: { IdEstoque: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstoqueCreateManyAndReturnArgs>(args?: SelectSubset<T, EstoqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estoque.
     * @param {EstoqueDeleteArgs} args - Arguments to delete one Estoque.
     * @example
     * // Delete one Estoque
     * const Estoque = await prisma.estoque.delete({
     *   where: {
     *     // ... filter to delete one Estoque
     *   }
     * })
     * 
     */
    delete<T extends EstoqueDeleteArgs>(args: SelectSubset<T, EstoqueDeleteArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estoque.
     * @param {EstoqueUpdateArgs} args - Arguments to update one Estoque.
     * @example
     * // Update one Estoque
     * const estoque = await prisma.estoque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstoqueUpdateArgs>(args: SelectSubset<T, EstoqueUpdateArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estoques.
     * @param {EstoqueDeleteManyArgs} args - Arguments to filter Estoques to delete.
     * @example
     * // Delete a few Estoques
     * const { count } = await prisma.estoque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstoqueDeleteManyArgs>(args?: SelectSubset<T, EstoqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estoques
     * const estoque = await prisma.estoque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstoqueUpdateManyArgs>(args: SelectSubset<T, EstoqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estoques and returns the data updated in the database.
     * @param {EstoqueUpdateManyAndReturnArgs} args - Arguments to update many Estoques.
     * @example
     * // Update many Estoques
     * const estoque = await prisma.estoque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estoques and only return the `IdEstoque`
     * const estoqueWithIdEstoqueOnly = await prisma.estoque.updateManyAndReturn({
     *   select: { IdEstoque: true },
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
    updateManyAndReturn<T extends EstoqueUpdateManyAndReturnArgs>(args: SelectSubset<T, EstoqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estoque.
     * @param {EstoqueUpsertArgs} args - Arguments to update or create a Estoque.
     * @example
     * // Update or create a Estoque
     * const estoque = await prisma.estoque.upsert({
     *   create: {
     *     // ... data to create a Estoque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estoque we want to update
     *   }
     * })
     */
    upsert<T extends EstoqueUpsertArgs>(args: SelectSubset<T, EstoqueUpsertArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueCountArgs} args - Arguments to filter Estoques to count.
     * @example
     * // Count the number of Estoques
     * const count = await prisma.estoque.count({
     *   where: {
     *     // ... the filter for the Estoques we want to count
     *   }
     * })
    **/
    count<T extends EstoqueCountArgs>(
      args?: Subset<T, EstoqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstoqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstoqueAggregateArgs>(args: Subset<T, EstoqueAggregateArgs>): Prisma.PrismaPromise<GetEstoqueAggregateType<T>>

    /**
     * Group by Estoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueGroupByArgs} args - Group by arguments.
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
      T extends EstoqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstoqueGroupByArgs['orderBy'] }
        : { orderBy?: EstoqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstoqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstoqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estoque model
   */
  readonly fields: EstoqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estoque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstoqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lotes<T extends Estoque$lotesArgs<ExtArgs> = {}>(args?: Subset<T, Estoque$lotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estoque model
   */
  interface EstoqueFieldRefs {
    readonly IdEstoque: FieldRef<"Estoque", 'Int'>
    readonly Reposicao: FieldRef<"Estoque", 'Boolean'>
    readonly Endereco: FieldRef<"Estoque", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estoque findUnique
   */
  export type EstoqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * Filter, which Estoque to fetch.
     */
    where: EstoqueWhereUniqueInput
  }

  /**
   * Estoque findUniqueOrThrow
   */
  export type EstoqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * Filter, which Estoque to fetch.
     */
    where: EstoqueWhereUniqueInput
  }

  /**
   * Estoque findFirst
   */
  export type EstoqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * Filter, which Estoque to fetch.
     */
    where?: EstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estoques to fetch.
     */
    orderBy?: EstoqueOrderByWithRelationInput | EstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estoques.
     */
    cursor?: EstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estoques.
     */
    distinct?: EstoqueScalarFieldEnum | EstoqueScalarFieldEnum[]
  }

  /**
   * Estoque findFirstOrThrow
   */
  export type EstoqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * Filter, which Estoque to fetch.
     */
    where?: EstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estoques to fetch.
     */
    orderBy?: EstoqueOrderByWithRelationInput | EstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estoques.
     */
    cursor?: EstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estoques.
     */
    distinct?: EstoqueScalarFieldEnum | EstoqueScalarFieldEnum[]
  }

  /**
   * Estoque findMany
   */
  export type EstoqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * Filter, which Estoques to fetch.
     */
    where?: EstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estoques to fetch.
     */
    orderBy?: EstoqueOrderByWithRelationInput | EstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estoques.
     */
    cursor?: EstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estoques.
     */
    skip?: number
    distinct?: EstoqueScalarFieldEnum | EstoqueScalarFieldEnum[]
  }

  /**
   * Estoque create
   */
  export type EstoqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * The data needed to create a Estoque.
     */
    data: XOR<EstoqueCreateInput, EstoqueUncheckedCreateInput>
  }

  /**
   * Estoque createMany
   */
  export type EstoqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estoques.
     */
    data: EstoqueCreateManyInput | EstoqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estoque createManyAndReturn
   */
  export type EstoqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * The data used to create many Estoques.
     */
    data: EstoqueCreateManyInput | EstoqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estoque update
   */
  export type EstoqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * The data needed to update a Estoque.
     */
    data: XOR<EstoqueUpdateInput, EstoqueUncheckedUpdateInput>
    /**
     * Choose, which Estoque to update.
     */
    where: EstoqueWhereUniqueInput
  }

  /**
   * Estoque updateMany
   */
  export type EstoqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estoques.
     */
    data: XOR<EstoqueUpdateManyMutationInput, EstoqueUncheckedUpdateManyInput>
    /**
     * Filter which Estoques to update
     */
    where?: EstoqueWhereInput
    /**
     * Limit how many Estoques to update.
     */
    limit?: number
  }

  /**
   * Estoque updateManyAndReturn
   */
  export type EstoqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * The data used to update Estoques.
     */
    data: XOR<EstoqueUpdateManyMutationInput, EstoqueUncheckedUpdateManyInput>
    /**
     * Filter which Estoques to update
     */
    where?: EstoqueWhereInput
    /**
     * Limit how many Estoques to update.
     */
    limit?: number
  }

  /**
   * Estoque upsert
   */
  export type EstoqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * The filter to search for the Estoque to update in case it exists.
     */
    where: EstoqueWhereUniqueInput
    /**
     * In case the Estoque found by the `where` argument doesn't exist, create a new Estoque with this data.
     */
    create: XOR<EstoqueCreateInput, EstoqueUncheckedCreateInput>
    /**
     * In case the Estoque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstoqueUpdateInput, EstoqueUncheckedUpdateInput>
  }

  /**
   * Estoque delete
   */
  export type EstoqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * Filter which Estoque to delete.
     */
    where: EstoqueWhereUniqueInput
  }

  /**
   * Estoque deleteMany
   */
  export type EstoqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estoques to delete
     */
    where?: EstoqueWhereInput
    /**
     * Limit how many Estoques to delete.
     */
    limit?: number
  }

  /**
   * Estoque.lotes
   */
  export type Estoque$lotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    where?: LoteWhereInput
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    cursor?: LoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Estoque without action
   */
  export type EstoqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    IdPedido: number | null
    FornecedorId: number | null
    TransportadoraId: number | null
    GerenteDeProducaoId: number | null
  }

  export type PedidoSumAggregateOutputType = {
    IdPedido: number | null
    FornecedorId: number | null
    TransportadoraId: number | null
    GerenteDeProducaoId: number | null
  }

  export type PedidoMinAggregateOutputType = {
    IdPedido: number | null
    Data: Date | null
    Status: $Enums.StatusPedido | null
    EnderecoDeEntrega: string | null
    FornecedorId: number | null
    TransportadoraId: number | null
    GerenteDeProducaoId: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    IdPedido: number | null
    Data: Date | null
    Status: $Enums.StatusPedido | null
    EnderecoDeEntrega: string | null
    FornecedorId: number | null
    TransportadoraId: number | null
    GerenteDeProducaoId: number | null
  }

  export type PedidoCountAggregateOutputType = {
    IdPedido: number
    Data: number
    Status: number
    EnderecoDeEntrega: number
    FornecedorId: number
    TransportadoraId: number
    GerenteDeProducaoId: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    IdPedido?: true
    FornecedorId?: true
    TransportadoraId?: true
    GerenteDeProducaoId?: true
  }

  export type PedidoSumAggregateInputType = {
    IdPedido?: true
    FornecedorId?: true
    TransportadoraId?: true
    GerenteDeProducaoId?: true
  }

  export type PedidoMinAggregateInputType = {
    IdPedido?: true
    Data?: true
    Status?: true
    EnderecoDeEntrega?: true
    FornecedorId?: true
    TransportadoraId?: true
    GerenteDeProducaoId?: true
  }

  export type PedidoMaxAggregateInputType = {
    IdPedido?: true
    Data?: true
    Status?: true
    EnderecoDeEntrega?: true
    FornecedorId?: true
    TransportadoraId?: true
    GerenteDeProducaoId?: true
  }

  export type PedidoCountAggregateInputType = {
    IdPedido?: true
    Data?: true
    Status?: true
    EnderecoDeEntrega?: true
    FornecedorId?: true
    TransportadoraId?: true
    GerenteDeProducaoId?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    IdPedido: number
    Data: Date
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    FornecedorId: number
    TransportadoraId: number
    GerenteDeProducaoId: number
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdPedido?: boolean
    Data?: boolean
    Status?: boolean
    EnderecoDeEntrega?: boolean
    FornecedorId?: boolean
    TransportadoraId?: boolean
    GerenteDeProducaoId?: boolean
    Produtos?: boolean | Pedido$ProdutosArgs<ExtArgs>
    Fornecedor?: boolean | Pedido$FornecedorArgs<ExtArgs>
    Transportadora?: boolean | Pedido$TransportadoraArgs<ExtArgs>
    GerenteDeProducao?: boolean | Pedido$GerenteDeProducaoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdPedido?: boolean
    Data?: boolean
    Status?: boolean
    EnderecoDeEntrega?: boolean
    FornecedorId?: boolean
    TransportadoraId?: boolean
    GerenteDeProducaoId?: boolean
    Fornecedor?: boolean | Pedido$FornecedorArgs<ExtArgs>
    Transportadora?: boolean | Pedido$TransportadoraArgs<ExtArgs>
    GerenteDeProducao?: boolean | Pedido$GerenteDeProducaoArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdPedido?: boolean
    Data?: boolean
    Status?: boolean
    EnderecoDeEntrega?: boolean
    FornecedorId?: boolean
    TransportadoraId?: boolean
    GerenteDeProducaoId?: boolean
    Fornecedor?: boolean | Pedido$FornecedorArgs<ExtArgs>
    Transportadora?: boolean | Pedido$TransportadoraArgs<ExtArgs>
    GerenteDeProducao?: boolean | Pedido$GerenteDeProducaoArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    IdPedido?: boolean
    Data?: boolean
    Status?: boolean
    EnderecoDeEntrega?: boolean
    FornecedorId?: boolean
    TransportadoraId?: boolean
    GerenteDeProducaoId?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdPedido" | "Data" | "Status" | "EnderecoDeEntrega" | "FornecedorId" | "TransportadoraId" | "GerenteDeProducaoId", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produtos?: boolean | Pedido$ProdutosArgs<ExtArgs>
    Fornecedor?: boolean | Pedido$FornecedorArgs<ExtArgs>
    Transportadora?: boolean | Pedido$TransportadoraArgs<ExtArgs>
    GerenteDeProducao?: boolean | Pedido$GerenteDeProducaoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Fornecedor?: boolean | Pedido$FornecedorArgs<ExtArgs>
    Transportadora?: boolean | Pedido$TransportadoraArgs<ExtArgs>
    GerenteDeProducao?: boolean | Pedido$GerenteDeProducaoArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Fornecedor?: boolean | Pedido$FornecedorArgs<ExtArgs>
    Transportadora?: boolean | Pedido$TransportadoraArgs<ExtArgs>
    GerenteDeProducao?: boolean | Pedido$GerenteDeProducaoArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      Produtos: Prisma.$ProdutoPayload<ExtArgs>[]
      Fornecedor: Prisma.$FornecedorPayload<ExtArgs> | null
      Transportadora: Prisma.$TransportadoraPayload<ExtArgs> | null
      GerenteDeProducao: Prisma.$GerenteDeProducaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      IdPedido: number
      Data: Date
      Status: $Enums.StatusPedido
      EnderecoDeEntrega: string
      FornecedorId: number
      TransportadoraId: number
      GerenteDeProducaoId: number
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `IdPedido`
     * const pedidoWithIdPedidoOnly = await prisma.pedido.findMany({ select: { IdPedido: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `IdPedido`
     * const pedidoWithIdPedidoOnly = await prisma.pedido.createManyAndReturn({
     *   select: { IdPedido: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `IdPedido`
     * const pedidoWithIdPedidoOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { IdPedido: true },
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
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
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
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Produtos<T extends Pedido$ProdutosArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$ProdutosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Fornecedor<T extends Pedido$FornecedorArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$FornecedorArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Transportadora<T extends Pedido$TransportadoraArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$TransportadoraArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    GerenteDeProducao<T extends Pedido$GerenteDeProducaoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$GerenteDeProducaoArgs<ExtArgs>>): Prisma__GerenteDeProducaoClient<$Result.GetResult<Prisma.$GerenteDeProducaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly IdPedido: FieldRef<"Pedido", 'Int'>
    readonly Data: FieldRef<"Pedido", 'DateTime'>
    readonly Status: FieldRef<"Pedido", 'StatusPedido'>
    readonly EnderecoDeEntrega: FieldRef<"Pedido", 'String'>
    readonly FornecedorId: FieldRef<"Pedido", 'Int'>
    readonly TransportadoraId: FieldRef<"Pedido", 'Int'>
    readonly GerenteDeProducaoId: FieldRef<"Pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.Produtos
   */
  export type Pedido$ProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Pedido.Fornecedor
   */
  export type Pedido$FornecedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    where?: FornecedorWhereInput
  }

  /**
   * Pedido.Transportadora
   */
  export type Pedido$TransportadoraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    where?: TransportadoraWhereInput
  }

  /**
   * Pedido.GerenteDeProducao
   */
  export type Pedido$GerenteDeProducaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerenteDeProducao
     */
    select?: GerenteDeProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GerenteDeProducao
     */
    omit?: GerenteDeProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerenteDeProducaoInclude<ExtArgs> | null
    where?: GerenteDeProducaoWhereInput
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model Transportadora
   */

  export type AggregateTransportadora = {
    _count: TransportadoraCountAggregateOutputType | null
    _avg: TransportadoraAvgAggregateOutputType | null
    _sum: TransportadoraSumAggregateOutputType | null
    _min: TransportadoraMinAggregateOutputType | null
    _max: TransportadoraMaxAggregateOutputType | null
  }

  export type TransportadoraAvgAggregateOutputType = {
    IdTransportadora: number | null
  }

  export type TransportadoraSumAggregateOutputType = {
    IdTransportadora: number | null
  }

  export type TransportadoraMinAggregateOutputType = {
    IdTransportadora: number | null
    Nome: string | null
    Endereco: string | null
  }

  export type TransportadoraMaxAggregateOutputType = {
    IdTransportadora: number | null
    Nome: string | null
    Endereco: string | null
  }

  export type TransportadoraCountAggregateOutputType = {
    IdTransportadora: number
    Nome: number
    Endereco: number
    _all: number
  }


  export type TransportadoraAvgAggregateInputType = {
    IdTransportadora?: true
  }

  export type TransportadoraSumAggregateInputType = {
    IdTransportadora?: true
  }

  export type TransportadoraMinAggregateInputType = {
    IdTransportadora?: true
    Nome?: true
    Endereco?: true
  }

  export type TransportadoraMaxAggregateInputType = {
    IdTransportadora?: true
    Nome?: true
    Endereco?: true
  }

  export type TransportadoraCountAggregateInputType = {
    IdTransportadora?: true
    Nome?: true
    Endereco?: true
    _all?: true
  }

  export type TransportadoraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transportadora to aggregate.
     */
    where?: TransportadoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportadoras to fetch.
     */
    orderBy?: TransportadoraOrderByWithRelationInput | TransportadoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransportadoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transportadoras
    **/
    _count?: true | TransportadoraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransportadoraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransportadoraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportadoraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportadoraMaxAggregateInputType
  }

  export type GetTransportadoraAggregateType<T extends TransportadoraAggregateArgs> = {
        [P in keyof T & keyof AggregateTransportadora]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransportadora[P]>
      : GetScalarType<T[P], AggregateTransportadora[P]>
  }




  export type TransportadoraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportadoraWhereInput
    orderBy?: TransportadoraOrderByWithAggregationInput | TransportadoraOrderByWithAggregationInput[]
    by: TransportadoraScalarFieldEnum[] | TransportadoraScalarFieldEnum
    having?: TransportadoraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportadoraCountAggregateInputType | true
    _avg?: TransportadoraAvgAggregateInputType
    _sum?: TransportadoraSumAggregateInputType
    _min?: TransportadoraMinAggregateInputType
    _max?: TransportadoraMaxAggregateInputType
  }

  export type TransportadoraGroupByOutputType = {
    IdTransportadora: number
    Nome: string
    Endereco: string
    _count: TransportadoraCountAggregateOutputType | null
    _avg: TransportadoraAvgAggregateOutputType | null
    _sum: TransportadoraSumAggregateOutputType | null
    _min: TransportadoraMinAggregateOutputType | null
    _max: TransportadoraMaxAggregateOutputType | null
  }

  type GetTransportadoraGroupByPayload<T extends TransportadoraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransportadoraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportadoraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportadoraGroupByOutputType[P]>
            : GetScalarType<T[P], TransportadoraGroupByOutputType[P]>
        }
      >
    >


  export type TransportadoraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdTransportadora?: boolean
    Nome?: boolean
    Endereco?: boolean
    Pedidos?: boolean | Transportadora$PedidosArgs<ExtArgs>
    _count?: boolean | TransportadoraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportadora"]>

  export type TransportadoraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdTransportadora?: boolean
    Nome?: boolean
    Endereco?: boolean
  }, ExtArgs["result"]["transportadora"]>

  export type TransportadoraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdTransportadora?: boolean
    Nome?: boolean
    Endereco?: boolean
  }, ExtArgs["result"]["transportadora"]>

  export type TransportadoraSelectScalar = {
    IdTransportadora?: boolean
    Nome?: boolean
    Endereco?: boolean
  }

  export type TransportadoraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdTransportadora" | "Nome" | "Endereco", ExtArgs["result"]["transportadora"]>
  export type TransportadoraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedidos?: boolean | Transportadora$PedidosArgs<ExtArgs>
    _count?: boolean | TransportadoraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransportadoraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TransportadoraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TransportadoraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transportadora"
    objects: {
      Pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      IdTransportadora: number
      Nome: string
      Endereco: string
    }, ExtArgs["result"]["transportadora"]>
    composites: {}
  }

  type TransportadoraGetPayload<S extends boolean | null | undefined | TransportadoraDefaultArgs> = $Result.GetResult<Prisma.$TransportadoraPayload, S>

  type TransportadoraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransportadoraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransportadoraCountAggregateInputType | true
    }

  export interface TransportadoraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transportadora'], meta: { name: 'Transportadora' } }
    /**
     * Find zero or one Transportadora that matches the filter.
     * @param {TransportadoraFindUniqueArgs} args - Arguments to find a Transportadora
     * @example
     * // Get one Transportadora
     * const transportadora = await prisma.transportadora.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransportadoraFindUniqueArgs>(args: SelectSubset<T, TransportadoraFindUniqueArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transportadora that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransportadoraFindUniqueOrThrowArgs} args - Arguments to find a Transportadora
     * @example
     * // Get one Transportadora
     * const transportadora = await prisma.transportadora.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransportadoraFindUniqueOrThrowArgs>(args: SelectSubset<T, TransportadoraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transportadora that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraFindFirstArgs} args - Arguments to find a Transportadora
     * @example
     * // Get one Transportadora
     * const transportadora = await prisma.transportadora.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransportadoraFindFirstArgs>(args?: SelectSubset<T, TransportadoraFindFirstArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transportadora that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraFindFirstOrThrowArgs} args - Arguments to find a Transportadora
     * @example
     * // Get one Transportadora
     * const transportadora = await prisma.transportadora.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransportadoraFindFirstOrThrowArgs>(args?: SelectSubset<T, TransportadoraFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transportadoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transportadoras
     * const transportadoras = await prisma.transportadora.findMany()
     * 
     * // Get first 10 Transportadoras
     * const transportadoras = await prisma.transportadora.findMany({ take: 10 })
     * 
     * // Only select the `IdTransportadora`
     * const transportadoraWithIdTransportadoraOnly = await prisma.transportadora.findMany({ select: { IdTransportadora: true } })
     * 
     */
    findMany<T extends TransportadoraFindManyArgs>(args?: SelectSubset<T, TransportadoraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transportadora.
     * @param {TransportadoraCreateArgs} args - Arguments to create a Transportadora.
     * @example
     * // Create one Transportadora
     * const Transportadora = await prisma.transportadora.create({
     *   data: {
     *     // ... data to create a Transportadora
     *   }
     * })
     * 
     */
    create<T extends TransportadoraCreateArgs>(args: SelectSubset<T, TransportadoraCreateArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transportadoras.
     * @param {TransportadoraCreateManyArgs} args - Arguments to create many Transportadoras.
     * @example
     * // Create many Transportadoras
     * const transportadora = await prisma.transportadora.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransportadoraCreateManyArgs>(args?: SelectSubset<T, TransportadoraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transportadoras and returns the data saved in the database.
     * @param {TransportadoraCreateManyAndReturnArgs} args - Arguments to create many Transportadoras.
     * @example
     * // Create many Transportadoras
     * const transportadora = await prisma.transportadora.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transportadoras and only return the `IdTransportadora`
     * const transportadoraWithIdTransportadoraOnly = await prisma.transportadora.createManyAndReturn({
     *   select: { IdTransportadora: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransportadoraCreateManyAndReturnArgs>(args?: SelectSubset<T, TransportadoraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transportadora.
     * @param {TransportadoraDeleteArgs} args - Arguments to delete one Transportadora.
     * @example
     * // Delete one Transportadora
     * const Transportadora = await prisma.transportadora.delete({
     *   where: {
     *     // ... filter to delete one Transportadora
     *   }
     * })
     * 
     */
    delete<T extends TransportadoraDeleteArgs>(args: SelectSubset<T, TransportadoraDeleteArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transportadora.
     * @param {TransportadoraUpdateArgs} args - Arguments to update one Transportadora.
     * @example
     * // Update one Transportadora
     * const transportadora = await prisma.transportadora.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransportadoraUpdateArgs>(args: SelectSubset<T, TransportadoraUpdateArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transportadoras.
     * @param {TransportadoraDeleteManyArgs} args - Arguments to filter Transportadoras to delete.
     * @example
     * // Delete a few Transportadoras
     * const { count } = await prisma.transportadora.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransportadoraDeleteManyArgs>(args?: SelectSubset<T, TransportadoraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transportadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transportadoras
     * const transportadora = await prisma.transportadora.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransportadoraUpdateManyArgs>(args: SelectSubset<T, TransportadoraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transportadoras and returns the data updated in the database.
     * @param {TransportadoraUpdateManyAndReturnArgs} args - Arguments to update many Transportadoras.
     * @example
     * // Update many Transportadoras
     * const transportadora = await prisma.transportadora.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transportadoras and only return the `IdTransportadora`
     * const transportadoraWithIdTransportadoraOnly = await prisma.transportadora.updateManyAndReturn({
     *   select: { IdTransportadora: true },
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
    updateManyAndReturn<T extends TransportadoraUpdateManyAndReturnArgs>(args: SelectSubset<T, TransportadoraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transportadora.
     * @param {TransportadoraUpsertArgs} args - Arguments to update or create a Transportadora.
     * @example
     * // Update or create a Transportadora
     * const transportadora = await prisma.transportadora.upsert({
     *   create: {
     *     // ... data to create a Transportadora
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transportadora we want to update
     *   }
     * })
     */
    upsert<T extends TransportadoraUpsertArgs>(args: SelectSubset<T, TransportadoraUpsertArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transportadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraCountArgs} args - Arguments to filter Transportadoras to count.
     * @example
     * // Count the number of Transportadoras
     * const count = await prisma.transportadora.count({
     *   where: {
     *     // ... the filter for the Transportadoras we want to count
     *   }
     * })
    **/
    count<T extends TransportadoraCountArgs>(
      args?: Subset<T, TransportadoraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportadoraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transportadora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransportadoraAggregateArgs>(args: Subset<T, TransportadoraAggregateArgs>): Prisma.PrismaPromise<GetTransportadoraAggregateType<T>>

    /**
     * Group by Transportadora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraGroupByArgs} args - Group by arguments.
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
      T extends TransportadoraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportadoraGroupByArgs['orderBy'] }
        : { orderBy?: TransportadoraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransportadoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportadoraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transportadora model
   */
  readonly fields: TransportadoraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transportadora.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransportadoraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pedidos<T extends Transportadora$PedidosArgs<ExtArgs> = {}>(args?: Subset<T, Transportadora$PedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Transportadora model
   */
  interface TransportadoraFieldRefs {
    readonly IdTransportadora: FieldRef<"Transportadora", 'Int'>
    readonly Nome: FieldRef<"Transportadora", 'String'>
    readonly Endereco: FieldRef<"Transportadora", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transportadora findUnique
   */
  export type TransportadoraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * Filter, which Transportadora to fetch.
     */
    where: TransportadoraWhereUniqueInput
  }

  /**
   * Transportadora findUniqueOrThrow
   */
  export type TransportadoraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * Filter, which Transportadora to fetch.
     */
    where: TransportadoraWhereUniqueInput
  }

  /**
   * Transportadora findFirst
   */
  export type TransportadoraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * Filter, which Transportadora to fetch.
     */
    where?: TransportadoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportadoras to fetch.
     */
    orderBy?: TransportadoraOrderByWithRelationInput | TransportadoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transportadoras.
     */
    cursor?: TransportadoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transportadoras.
     */
    distinct?: TransportadoraScalarFieldEnum | TransportadoraScalarFieldEnum[]
  }

  /**
   * Transportadora findFirstOrThrow
   */
  export type TransportadoraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * Filter, which Transportadora to fetch.
     */
    where?: TransportadoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportadoras to fetch.
     */
    orderBy?: TransportadoraOrderByWithRelationInput | TransportadoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transportadoras.
     */
    cursor?: TransportadoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transportadoras.
     */
    distinct?: TransportadoraScalarFieldEnum | TransportadoraScalarFieldEnum[]
  }

  /**
   * Transportadora findMany
   */
  export type TransportadoraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * Filter, which Transportadoras to fetch.
     */
    where?: TransportadoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportadoras to fetch.
     */
    orderBy?: TransportadoraOrderByWithRelationInput | TransportadoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transportadoras.
     */
    cursor?: TransportadoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportadoras.
     */
    skip?: number
    distinct?: TransportadoraScalarFieldEnum | TransportadoraScalarFieldEnum[]
  }

  /**
   * Transportadora create
   */
  export type TransportadoraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * The data needed to create a Transportadora.
     */
    data: XOR<TransportadoraCreateInput, TransportadoraUncheckedCreateInput>
  }

  /**
   * Transportadora createMany
   */
  export type TransportadoraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transportadoras.
     */
    data: TransportadoraCreateManyInput | TransportadoraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transportadora createManyAndReturn
   */
  export type TransportadoraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * The data used to create many Transportadoras.
     */
    data: TransportadoraCreateManyInput | TransportadoraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transportadora update
   */
  export type TransportadoraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * The data needed to update a Transportadora.
     */
    data: XOR<TransportadoraUpdateInput, TransportadoraUncheckedUpdateInput>
    /**
     * Choose, which Transportadora to update.
     */
    where: TransportadoraWhereUniqueInput
  }

  /**
   * Transportadora updateMany
   */
  export type TransportadoraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transportadoras.
     */
    data: XOR<TransportadoraUpdateManyMutationInput, TransportadoraUncheckedUpdateManyInput>
    /**
     * Filter which Transportadoras to update
     */
    where?: TransportadoraWhereInput
    /**
     * Limit how many Transportadoras to update.
     */
    limit?: number
  }

  /**
   * Transportadora updateManyAndReturn
   */
  export type TransportadoraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * The data used to update Transportadoras.
     */
    data: XOR<TransportadoraUpdateManyMutationInput, TransportadoraUncheckedUpdateManyInput>
    /**
     * Filter which Transportadoras to update
     */
    where?: TransportadoraWhereInput
    /**
     * Limit how many Transportadoras to update.
     */
    limit?: number
  }

  /**
   * Transportadora upsert
   */
  export type TransportadoraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * The filter to search for the Transportadora to update in case it exists.
     */
    where: TransportadoraWhereUniqueInput
    /**
     * In case the Transportadora found by the `where` argument doesn't exist, create a new Transportadora with this data.
     */
    create: XOR<TransportadoraCreateInput, TransportadoraUncheckedCreateInput>
    /**
     * In case the Transportadora was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransportadoraUpdateInput, TransportadoraUncheckedUpdateInput>
  }

  /**
   * Transportadora delete
   */
  export type TransportadoraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * Filter which Transportadora to delete.
     */
    where: TransportadoraWhereUniqueInput
  }

  /**
   * Transportadora deleteMany
   */
  export type TransportadoraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transportadoras to delete
     */
    where?: TransportadoraWhereInput
    /**
     * Limit how many Transportadoras to delete.
     */
    limit?: number
  }

  /**
   * Transportadora.Pedidos
   */
  export type Transportadora$PedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Transportadora without action
   */
  export type TransportadoraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    IdUsuario: 'IdUsuario',
    Nome: 'Nome',
    Email: 'Email',
    Senha: 'Senha',
    NiveldePermissao: 'NiveldePermissao',
    TipoDeUsuario: 'TipoDeUsuario'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const FornecedorScalarFieldEnum: {
    IdFornecedor: 'IdFornecedor',
    CNPJ: 'CNPJ'
  };

  export type FornecedorScalarFieldEnum = (typeof FornecedorScalarFieldEnum)[keyof typeof FornecedorScalarFieldEnum]


  export const GerenteDeProducaoScalarFieldEnum: {
    IdGerenteDeProducao: 'IdGerenteDeProducao'
  };

  export type GerenteDeProducaoScalarFieldEnum = (typeof GerenteDeProducaoScalarFieldEnum)[keyof typeof GerenteDeProducaoScalarFieldEnum]


  export const GerenteDeEstoqueScalarFieldEnum: {
    IdGerenteDeEstoque: 'IdGerenteDeEstoque'
  };

  export type GerenteDeEstoqueScalarFieldEnum = (typeof GerenteDeEstoqueScalarFieldEnum)[keyof typeof GerenteDeEstoqueScalarFieldEnum]


  export const AdministradorScalarFieldEnum: {
    IdAdministrador: 'IdAdministrador'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    IdProduto: 'IdProduto',
    Nome: 'Nome',
    Quantidade: 'Quantidade',
    Tipo: 'Tipo',
    PedidoId: 'PedidoId'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const LoteScalarFieldEnum: {
    IdLote: 'IdLote',
    Data: 'Data',
    Quantidade: 'Quantidade',
    EstoqueId: 'EstoqueId'
  };

  export type LoteScalarFieldEnum = (typeof LoteScalarFieldEnum)[keyof typeof LoteScalarFieldEnum]


  export const ProdutoLoteScalarFieldEnum: {
    produtoId: 'produtoId',
    loteId: 'loteId'
  };

  export type ProdutoLoteScalarFieldEnum = (typeof ProdutoLoteScalarFieldEnum)[keyof typeof ProdutoLoteScalarFieldEnum]


  export const EstoqueScalarFieldEnum: {
    IdEstoque: 'IdEstoque',
    Reposicao: 'Reposicao',
    Endereco: 'Endereco'
  };

  export type EstoqueScalarFieldEnum = (typeof EstoqueScalarFieldEnum)[keyof typeof EstoqueScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    IdPedido: 'IdPedido',
    Data: 'Data',
    Status: 'Status',
    EnderecoDeEntrega: 'EnderecoDeEntrega',
    FornecedorId: 'FornecedorId',
    TransportadoraId: 'TransportadoraId',
    GerenteDeProducaoId: 'GerenteDeProducaoId'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const TransportadoraScalarFieldEnum: {
    IdTransportadora: 'IdTransportadora',
    Nome: 'Nome',
    Endereco: 'Endereco'
  };

  export type TransportadoraScalarFieldEnum = (typeof TransportadoraScalarFieldEnum)[keyof typeof TransportadoraScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TipoDeUsuario'
   */
  export type EnumTipoDeUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDeUsuario'>
    


  /**
   * Reference to a field of type 'TipoDeUsuario[]'
   */
  export type ListEnumTipoDeUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDeUsuario[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TipoDeProduto'
   */
  export type EnumTipoDeProdutoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDeProduto'>
    


  /**
   * Reference to a field of type 'TipoDeProduto[]'
   */
  export type ListEnumTipoDeProdutoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDeProduto[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusPedido'
   */
  export type EnumStatusPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPedido'>
    


  /**
   * Reference to a field of type 'StatusPedido[]'
   */
  export type ListEnumStatusPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPedido[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    IdUsuario?: IntFilter<"Usuario"> | number
    Nome?: StringFilter<"Usuario"> | string
    Email?: StringFilter<"Usuario"> | string
    Senha?: StringFilter<"Usuario"> | string
    NiveldePermissao?: IntFilter<"Usuario"> | number
    TipoDeUsuario?: EnumTipoDeUsuarioFilter<"Usuario"> | $Enums.TipoDeUsuario
    Fornecedor?: XOR<FornecedorNullableScalarRelationFilter, FornecedorWhereInput> | null
    GerenteDeProducao?: XOR<GerenteDeProducaoNullableScalarRelationFilter, GerenteDeProducaoWhereInput> | null
    GerenteDeEstoque?: XOR<GerenteDeEstoqueNullableScalarRelationFilter, GerenteDeEstoqueWhereInput> | null
    Administrador?: XOR<AdministradorNullableScalarRelationFilter, AdministradorWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    IdUsuario?: SortOrder
    Nome?: SortOrder
    Email?: SortOrder
    Senha?: SortOrder
    NiveldePermissao?: SortOrder
    TipoDeUsuario?: SortOrder
    Fornecedor?: FornecedorOrderByWithRelationInput
    GerenteDeProducao?: GerenteDeProducaoOrderByWithRelationInput
    GerenteDeEstoque?: GerenteDeEstoqueOrderByWithRelationInput
    Administrador?: AdministradorOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    IdUsuario?: number
    Email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    Nome?: StringFilter<"Usuario"> | string
    Senha?: StringFilter<"Usuario"> | string
    NiveldePermissao?: IntFilter<"Usuario"> | number
    TipoDeUsuario?: EnumTipoDeUsuarioFilter<"Usuario"> | $Enums.TipoDeUsuario
    Fornecedor?: XOR<FornecedorNullableScalarRelationFilter, FornecedorWhereInput> | null
    GerenteDeProducao?: XOR<GerenteDeProducaoNullableScalarRelationFilter, GerenteDeProducaoWhereInput> | null
    GerenteDeEstoque?: XOR<GerenteDeEstoqueNullableScalarRelationFilter, GerenteDeEstoqueWhereInput> | null
    Administrador?: XOR<AdministradorNullableScalarRelationFilter, AdministradorWhereInput> | null
  }, "IdUsuario" | "Email">

  export type UsuarioOrderByWithAggregationInput = {
    IdUsuario?: SortOrder
    Nome?: SortOrder
    Email?: SortOrder
    Senha?: SortOrder
    NiveldePermissao?: SortOrder
    TipoDeUsuario?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    IdUsuario?: IntWithAggregatesFilter<"Usuario"> | number
    Nome?: StringWithAggregatesFilter<"Usuario"> | string
    Email?: StringWithAggregatesFilter<"Usuario"> | string
    Senha?: StringWithAggregatesFilter<"Usuario"> | string
    NiveldePermissao?: IntWithAggregatesFilter<"Usuario"> | number
    TipoDeUsuario?: EnumTipoDeUsuarioWithAggregatesFilter<"Usuario"> | $Enums.TipoDeUsuario
  }

  export type FornecedorWhereInput = {
    AND?: FornecedorWhereInput | FornecedorWhereInput[]
    OR?: FornecedorWhereInput[]
    NOT?: FornecedorWhereInput | FornecedorWhereInput[]
    IdFornecedor?: IntFilter<"Fornecedor"> | number
    CNPJ?: FloatFilter<"Fornecedor"> | number
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Pedidos?: PedidoListRelationFilter
  }

  export type FornecedorOrderByWithRelationInput = {
    IdFornecedor?: SortOrder
    CNPJ?: SortOrder
    Usuario?: UsuarioOrderByWithRelationInput
    Pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type FornecedorWhereUniqueInput = Prisma.AtLeast<{
    IdFornecedor?: number
    CNPJ?: number
    AND?: FornecedorWhereInput | FornecedorWhereInput[]
    OR?: FornecedorWhereInput[]
    NOT?: FornecedorWhereInput | FornecedorWhereInput[]
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Pedidos?: PedidoListRelationFilter
  }, "IdFornecedor" | "CNPJ">

  export type FornecedorOrderByWithAggregationInput = {
    IdFornecedor?: SortOrder
    CNPJ?: SortOrder
    _count?: FornecedorCountOrderByAggregateInput
    _avg?: FornecedorAvgOrderByAggregateInput
    _max?: FornecedorMaxOrderByAggregateInput
    _min?: FornecedorMinOrderByAggregateInput
    _sum?: FornecedorSumOrderByAggregateInput
  }

  export type FornecedorScalarWhereWithAggregatesInput = {
    AND?: FornecedorScalarWhereWithAggregatesInput | FornecedorScalarWhereWithAggregatesInput[]
    OR?: FornecedorScalarWhereWithAggregatesInput[]
    NOT?: FornecedorScalarWhereWithAggregatesInput | FornecedorScalarWhereWithAggregatesInput[]
    IdFornecedor?: IntWithAggregatesFilter<"Fornecedor"> | number
    CNPJ?: FloatWithAggregatesFilter<"Fornecedor"> | number
  }

  export type GerenteDeProducaoWhereInput = {
    AND?: GerenteDeProducaoWhereInput | GerenteDeProducaoWhereInput[]
    OR?: GerenteDeProducaoWhereInput[]
    NOT?: GerenteDeProducaoWhereInput | GerenteDeProducaoWhereInput[]
    IdGerenteDeProducao?: IntFilter<"GerenteDeProducao"> | number
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Pedidos?: PedidoListRelationFilter
  }

  export type GerenteDeProducaoOrderByWithRelationInput = {
    IdGerenteDeProducao?: SortOrder
    Usuario?: UsuarioOrderByWithRelationInput
    Pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type GerenteDeProducaoWhereUniqueInput = Prisma.AtLeast<{
    IdGerenteDeProducao?: number
    AND?: GerenteDeProducaoWhereInput | GerenteDeProducaoWhereInput[]
    OR?: GerenteDeProducaoWhereInput[]
    NOT?: GerenteDeProducaoWhereInput | GerenteDeProducaoWhereInput[]
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Pedidos?: PedidoListRelationFilter
  }, "IdGerenteDeProducao">

  export type GerenteDeProducaoOrderByWithAggregationInput = {
    IdGerenteDeProducao?: SortOrder
    _count?: GerenteDeProducaoCountOrderByAggregateInput
    _avg?: GerenteDeProducaoAvgOrderByAggregateInput
    _max?: GerenteDeProducaoMaxOrderByAggregateInput
    _min?: GerenteDeProducaoMinOrderByAggregateInput
    _sum?: GerenteDeProducaoSumOrderByAggregateInput
  }

  export type GerenteDeProducaoScalarWhereWithAggregatesInput = {
    AND?: GerenteDeProducaoScalarWhereWithAggregatesInput | GerenteDeProducaoScalarWhereWithAggregatesInput[]
    OR?: GerenteDeProducaoScalarWhereWithAggregatesInput[]
    NOT?: GerenteDeProducaoScalarWhereWithAggregatesInput | GerenteDeProducaoScalarWhereWithAggregatesInput[]
    IdGerenteDeProducao?: IntWithAggregatesFilter<"GerenteDeProducao"> | number
  }

  export type GerenteDeEstoqueWhereInput = {
    AND?: GerenteDeEstoqueWhereInput | GerenteDeEstoqueWhereInput[]
    OR?: GerenteDeEstoqueWhereInput[]
    NOT?: GerenteDeEstoqueWhereInput | GerenteDeEstoqueWhereInput[]
    IdGerenteDeEstoque?: IntFilter<"GerenteDeEstoque"> | number
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type GerenteDeEstoqueOrderByWithRelationInput = {
    IdGerenteDeEstoque?: SortOrder
    Usuario?: UsuarioOrderByWithRelationInput
  }

  export type GerenteDeEstoqueWhereUniqueInput = Prisma.AtLeast<{
    IdGerenteDeEstoque?: number
    AND?: GerenteDeEstoqueWhereInput | GerenteDeEstoqueWhereInput[]
    OR?: GerenteDeEstoqueWhereInput[]
    NOT?: GerenteDeEstoqueWhereInput | GerenteDeEstoqueWhereInput[]
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "IdGerenteDeEstoque">

  export type GerenteDeEstoqueOrderByWithAggregationInput = {
    IdGerenteDeEstoque?: SortOrder
    _count?: GerenteDeEstoqueCountOrderByAggregateInput
    _avg?: GerenteDeEstoqueAvgOrderByAggregateInput
    _max?: GerenteDeEstoqueMaxOrderByAggregateInput
    _min?: GerenteDeEstoqueMinOrderByAggregateInput
    _sum?: GerenteDeEstoqueSumOrderByAggregateInput
  }

  export type GerenteDeEstoqueScalarWhereWithAggregatesInput = {
    AND?: GerenteDeEstoqueScalarWhereWithAggregatesInput | GerenteDeEstoqueScalarWhereWithAggregatesInput[]
    OR?: GerenteDeEstoqueScalarWhereWithAggregatesInput[]
    NOT?: GerenteDeEstoqueScalarWhereWithAggregatesInput | GerenteDeEstoqueScalarWhereWithAggregatesInput[]
    IdGerenteDeEstoque?: IntWithAggregatesFilter<"GerenteDeEstoque"> | number
  }

  export type AdministradorWhereInput = {
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    IdAdministrador?: IntFilter<"Administrador"> | number
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AdministradorOrderByWithRelationInput = {
    IdAdministrador?: SortOrder
    Usuario?: UsuarioOrderByWithRelationInput
  }

  export type AdministradorWhereUniqueInput = Prisma.AtLeast<{
    IdAdministrador?: number
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "IdAdministrador">

  export type AdministradorOrderByWithAggregationInput = {
    IdAdministrador?: SortOrder
    _count?: AdministradorCountOrderByAggregateInput
    _avg?: AdministradorAvgOrderByAggregateInput
    _max?: AdministradorMaxOrderByAggregateInput
    _min?: AdministradorMinOrderByAggregateInput
    _sum?: AdministradorSumOrderByAggregateInput
  }

  export type AdministradorScalarWhereWithAggregatesInput = {
    AND?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    OR?: AdministradorScalarWhereWithAggregatesInput[]
    NOT?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    IdAdministrador?: IntWithAggregatesFilter<"Administrador"> | number
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    IdProduto?: IntFilter<"Produto"> | number
    Nome?: StringFilter<"Produto"> | string
    Quantidade?: IntFilter<"Produto"> | number
    Tipo?: EnumTipoDeProdutoFilter<"Produto"> | $Enums.TipoDeProduto
    PedidoId?: IntNullableFilter<"Produto"> | number | null
    ProdutoLote?: ProdutoLoteListRelationFilter
    Pedido?: XOR<PedidoNullableScalarRelationFilter, PedidoWhereInput> | null
    Lote?: LoteListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    IdProduto?: SortOrder
    Nome?: SortOrder
    Quantidade?: SortOrder
    Tipo?: SortOrder
    PedidoId?: SortOrderInput | SortOrder
    ProdutoLote?: ProdutoLoteOrderByRelationAggregateInput
    Pedido?: PedidoOrderByWithRelationInput
    Lote?: LoteOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    IdProduto?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    Nome?: StringFilter<"Produto"> | string
    Quantidade?: IntFilter<"Produto"> | number
    Tipo?: EnumTipoDeProdutoFilter<"Produto"> | $Enums.TipoDeProduto
    PedidoId?: IntNullableFilter<"Produto"> | number | null
    ProdutoLote?: ProdutoLoteListRelationFilter
    Pedido?: XOR<PedidoNullableScalarRelationFilter, PedidoWhereInput> | null
    Lote?: LoteListRelationFilter
  }, "IdProduto">

  export type ProdutoOrderByWithAggregationInput = {
    IdProduto?: SortOrder
    Nome?: SortOrder
    Quantidade?: SortOrder
    Tipo?: SortOrder
    PedidoId?: SortOrderInput | SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    IdProduto?: IntWithAggregatesFilter<"Produto"> | number
    Nome?: StringWithAggregatesFilter<"Produto"> | string
    Quantidade?: IntWithAggregatesFilter<"Produto"> | number
    Tipo?: EnumTipoDeProdutoWithAggregatesFilter<"Produto"> | $Enums.TipoDeProduto
    PedidoId?: IntNullableWithAggregatesFilter<"Produto"> | number | null
  }

  export type LoteWhereInput = {
    AND?: LoteWhereInput | LoteWhereInput[]
    OR?: LoteWhereInput[]
    NOT?: LoteWhereInput | LoteWhereInput[]
    IdLote?: IntFilter<"Lote"> | number
    Data?: DateTimeFilter<"Lote"> | Date | string
    Quantidade?: IntFilter<"Lote"> | number
    EstoqueId?: IntFilter<"Lote"> | number
    Estoque?: XOR<EstoqueScalarRelationFilter, EstoqueWhereInput>
    ProdutoLote?: ProdutoLoteListRelationFilter
    Produtos?: ProdutoListRelationFilter
  }

  export type LoteOrderByWithRelationInput = {
    IdLote?: SortOrder
    Data?: SortOrder
    Quantidade?: SortOrder
    EstoqueId?: SortOrder
    Estoque?: EstoqueOrderByWithRelationInput
    ProdutoLote?: ProdutoLoteOrderByRelationAggregateInput
    Produtos?: ProdutoOrderByRelationAggregateInput
  }

  export type LoteWhereUniqueInput = Prisma.AtLeast<{
    IdLote?: number
    AND?: LoteWhereInput | LoteWhereInput[]
    OR?: LoteWhereInput[]
    NOT?: LoteWhereInput | LoteWhereInput[]
    Data?: DateTimeFilter<"Lote"> | Date | string
    Quantidade?: IntFilter<"Lote"> | number
    EstoqueId?: IntFilter<"Lote"> | number
    Estoque?: XOR<EstoqueScalarRelationFilter, EstoqueWhereInput>
    ProdutoLote?: ProdutoLoteListRelationFilter
    Produtos?: ProdutoListRelationFilter
  }, "IdLote">

  export type LoteOrderByWithAggregationInput = {
    IdLote?: SortOrder
    Data?: SortOrder
    Quantidade?: SortOrder
    EstoqueId?: SortOrder
    _count?: LoteCountOrderByAggregateInput
    _avg?: LoteAvgOrderByAggregateInput
    _max?: LoteMaxOrderByAggregateInput
    _min?: LoteMinOrderByAggregateInput
    _sum?: LoteSumOrderByAggregateInput
  }

  export type LoteScalarWhereWithAggregatesInput = {
    AND?: LoteScalarWhereWithAggregatesInput | LoteScalarWhereWithAggregatesInput[]
    OR?: LoteScalarWhereWithAggregatesInput[]
    NOT?: LoteScalarWhereWithAggregatesInput | LoteScalarWhereWithAggregatesInput[]
    IdLote?: IntWithAggregatesFilter<"Lote"> | number
    Data?: DateTimeWithAggregatesFilter<"Lote"> | Date | string
    Quantidade?: IntWithAggregatesFilter<"Lote"> | number
    EstoqueId?: IntWithAggregatesFilter<"Lote"> | number
  }

  export type ProdutoLoteWhereInput = {
    AND?: ProdutoLoteWhereInput | ProdutoLoteWhereInput[]
    OR?: ProdutoLoteWhereInput[]
    NOT?: ProdutoLoteWhereInput | ProdutoLoteWhereInput[]
    produtoId?: IntFilter<"ProdutoLote"> | number
    loteId?: IntFilter<"ProdutoLote"> | number
    Produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    Lote?: XOR<LoteScalarRelationFilter, LoteWhereInput>
  }

  export type ProdutoLoteOrderByWithRelationInput = {
    produtoId?: SortOrder
    loteId?: SortOrder
    Produto?: ProdutoOrderByWithRelationInput
    Lote?: LoteOrderByWithRelationInput
  }

  export type ProdutoLoteWhereUniqueInput = Prisma.AtLeast<{
    produtoId_loteId?: ProdutoLoteProdutoIdLoteIdCompoundUniqueInput
    AND?: ProdutoLoteWhereInput | ProdutoLoteWhereInput[]
    OR?: ProdutoLoteWhereInput[]
    NOT?: ProdutoLoteWhereInput | ProdutoLoteWhereInput[]
    produtoId?: IntFilter<"ProdutoLote"> | number
    loteId?: IntFilter<"ProdutoLote"> | number
    Produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    Lote?: XOR<LoteScalarRelationFilter, LoteWhereInput>
  }, "produtoId_loteId">

  export type ProdutoLoteOrderByWithAggregationInput = {
    produtoId?: SortOrder
    loteId?: SortOrder
    _count?: ProdutoLoteCountOrderByAggregateInput
    _avg?: ProdutoLoteAvgOrderByAggregateInput
    _max?: ProdutoLoteMaxOrderByAggregateInput
    _min?: ProdutoLoteMinOrderByAggregateInput
    _sum?: ProdutoLoteSumOrderByAggregateInput
  }

  export type ProdutoLoteScalarWhereWithAggregatesInput = {
    AND?: ProdutoLoteScalarWhereWithAggregatesInput | ProdutoLoteScalarWhereWithAggregatesInput[]
    OR?: ProdutoLoteScalarWhereWithAggregatesInput[]
    NOT?: ProdutoLoteScalarWhereWithAggregatesInput | ProdutoLoteScalarWhereWithAggregatesInput[]
    produtoId?: IntWithAggregatesFilter<"ProdutoLote"> | number
    loteId?: IntWithAggregatesFilter<"ProdutoLote"> | number
  }

  export type EstoqueWhereInput = {
    AND?: EstoqueWhereInput | EstoqueWhereInput[]
    OR?: EstoqueWhereInput[]
    NOT?: EstoqueWhereInput | EstoqueWhereInput[]
    IdEstoque?: IntFilter<"Estoque"> | number
    Reposicao?: BoolFilter<"Estoque"> | boolean
    Endereco?: StringFilter<"Estoque"> | string
    lotes?: LoteListRelationFilter
  }

  export type EstoqueOrderByWithRelationInput = {
    IdEstoque?: SortOrder
    Reposicao?: SortOrder
    Endereco?: SortOrder
    lotes?: LoteOrderByRelationAggregateInput
  }

  export type EstoqueWhereUniqueInput = Prisma.AtLeast<{
    IdEstoque?: number
    AND?: EstoqueWhereInput | EstoqueWhereInput[]
    OR?: EstoqueWhereInput[]
    NOT?: EstoqueWhereInput | EstoqueWhereInput[]
    Reposicao?: BoolFilter<"Estoque"> | boolean
    Endereco?: StringFilter<"Estoque"> | string
    lotes?: LoteListRelationFilter
  }, "IdEstoque">

  export type EstoqueOrderByWithAggregationInput = {
    IdEstoque?: SortOrder
    Reposicao?: SortOrder
    Endereco?: SortOrder
    _count?: EstoqueCountOrderByAggregateInput
    _avg?: EstoqueAvgOrderByAggregateInput
    _max?: EstoqueMaxOrderByAggregateInput
    _min?: EstoqueMinOrderByAggregateInput
    _sum?: EstoqueSumOrderByAggregateInput
  }

  export type EstoqueScalarWhereWithAggregatesInput = {
    AND?: EstoqueScalarWhereWithAggregatesInput | EstoqueScalarWhereWithAggregatesInput[]
    OR?: EstoqueScalarWhereWithAggregatesInput[]
    NOT?: EstoqueScalarWhereWithAggregatesInput | EstoqueScalarWhereWithAggregatesInput[]
    IdEstoque?: IntWithAggregatesFilter<"Estoque"> | number
    Reposicao?: BoolWithAggregatesFilter<"Estoque"> | boolean
    Endereco?: StringWithAggregatesFilter<"Estoque"> | string
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    IdPedido?: IntFilter<"Pedido"> | number
    Data?: DateTimeFilter<"Pedido"> | Date | string
    Status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFilter<"Pedido"> | string
    FornecedorId?: IntFilter<"Pedido"> | number
    TransportadoraId?: IntFilter<"Pedido"> | number
    GerenteDeProducaoId?: IntFilter<"Pedido"> | number
    Produtos?: ProdutoListRelationFilter
    Fornecedor?: XOR<FornecedorNullableScalarRelationFilter, FornecedorWhereInput> | null
    Transportadora?: XOR<TransportadoraNullableScalarRelationFilter, TransportadoraWhereInput> | null
    GerenteDeProducao?: XOR<GerenteDeProducaoNullableScalarRelationFilter, GerenteDeProducaoWhereInput> | null
  }

  export type PedidoOrderByWithRelationInput = {
    IdPedido?: SortOrder
    Data?: SortOrder
    Status?: SortOrder
    EnderecoDeEntrega?: SortOrder
    FornecedorId?: SortOrder
    TransportadoraId?: SortOrder
    GerenteDeProducaoId?: SortOrder
    Produtos?: ProdutoOrderByRelationAggregateInput
    Fornecedor?: FornecedorOrderByWithRelationInput
    Transportadora?: TransportadoraOrderByWithRelationInput
    GerenteDeProducao?: GerenteDeProducaoOrderByWithRelationInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    IdPedido?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    Data?: DateTimeFilter<"Pedido"> | Date | string
    Status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFilter<"Pedido"> | string
    FornecedorId?: IntFilter<"Pedido"> | number
    TransportadoraId?: IntFilter<"Pedido"> | number
    GerenteDeProducaoId?: IntFilter<"Pedido"> | number
    Produtos?: ProdutoListRelationFilter
    Fornecedor?: XOR<FornecedorNullableScalarRelationFilter, FornecedorWhereInput> | null
    Transportadora?: XOR<TransportadoraNullableScalarRelationFilter, TransportadoraWhereInput> | null
    GerenteDeProducao?: XOR<GerenteDeProducaoNullableScalarRelationFilter, GerenteDeProducaoWhereInput> | null
  }, "IdPedido">

  export type PedidoOrderByWithAggregationInput = {
    IdPedido?: SortOrder
    Data?: SortOrder
    Status?: SortOrder
    EnderecoDeEntrega?: SortOrder
    FornecedorId?: SortOrder
    TransportadoraId?: SortOrder
    GerenteDeProducaoId?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    IdPedido?: IntWithAggregatesFilter<"Pedido"> | number
    Data?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    Status?: EnumStatusPedidoWithAggregatesFilter<"Pedido"> | $Enums.StatusPedido
    EnderecoDeEntrega?: StringWithAggregatesFilter<"Pedido"> | string
    FornecedorId?: IntWithAggregatesFilter<"Pedido"> | number
    TransportadoraId?: IntWithAggregatesFilter<"Pedido"> | number
    GerenteDeProducaoId?: IntWithAggregatesFilter<"Pedido"> | number
  }

  export type TransportadoraWhereInput = {
    AND?: TransportadoraWhereInput | TransportadoraWhereInput[]
    OR?: TransportadoraWhereInput[]
    NOT?: TransportadoraWhereInput | TransportadoraWhereInput[]
    IdTransportadora?: IntFilter<"Transportadora"> | number
    Nome?: StringFilter<"Transportadora"> | string
    Endereco?: StringFilter<"Transportadora"> | string
    Pedidos?: PedidoListRelationFilter
  }

  export type TransportadoraOrderByWithRelationInput = {
    IdTransportadora?: SortOrder
    Nome?: SortOrder
    Endereco?: SortOrder
    Pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type TransportadoraWhereUniqueInput = Prisma.AtLeast<{
    IdTransportadora?: number
    AND?: TransportadoraWhereInput | TransportadoraWhereInput[]
    OR?: TransportadoraWhereInput[]
    NOT?: TransportadoraWhereInput | TransportadoraWhereInput[]
    Nome?: StringFilter<"Transportadora"> | string
    Endereco?: StringFilter<"Transportadora"> | string
    Pedidos?: PedidoListRelationFilter
  }, "IdTransportadora">

  export type TransportadoraOrderByWithAggregationInput = {
    IdTransportadora?: SortOrder
    Nome?: SortOrder
    Endereco?: SortOrder
    _count?: TransportadoraCountOrderByAggregateInput
    _avg?: TransportadoraAvgOrderByAggregateInput
    _max?: TransportadoraMaxOrderByAggregateInput
    _min?: TransportadoraMinOrderByAggregateInput
    _sum?: TransportadoraSumOrderByAggregateInput
  }

  export type TransportadoraScalarWhereWithAggregatesInput = {
    AND?: TransportadoraScalarWhereWithAggregatesInput | TransportadoraScalarWhereWithAggregatesInput[]
    OR?: TransportadoraScalarWhereWithAggregatesInput[]
    NOT?: TransportadoraScalarWhereWithAggregatesInput | TransportadoraScalarWhereWithAggregatesInput[]
    IdTransportadora?: IntWithAggregatesFilter<"Transportadora"> | number
    Nome?: StringWithAggregatesFilter<"Transportadora"> | string
    Endereco?: StringWithAggregatesFilter<"Transportadora"> | string
  }

  export type UsuarioCreateInput = {
    Nome: string
    Email: string
    Senha: string
    NiveldePermissao: number
    TipoDeUsuario: $Enums.TipoDeUsuario
    Fornecedor?: FornecedorCreateNestedOneWithoutUsuarioInput
    GerenteDeProducao?: GerenteDeProducaoCreateNestedOneWithoutUsuarioInput
    GerenteDeEstoque?: GerenteDeEstoqueCreateNestedOneWithoutUsuarioInput
    Administrador?: AdministradorCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    IdUsuario?: number
    Nome: string
    Email: string
    Senha: string
    NiveldePermissao: number
    TipoDeUsuario: $Enums.TipoDeUsuario
    Fornecedor?: FornecedorUncheckedCreateNestedOneWithoutUsuarioInput
    GerenteDeProducao?: GerenteDeProducaoUncheckedCreateNestedOneWithoutUsuarioInput
    GerenteDeEstoque?: GerenteDeEstoqueUncheckedCreateNestedOneWithoutUsuarioInput
    Administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    NiveldePermissao?: IntFieldUpdateOperationsInput | number
    TipoDeUsuario?: EnumTipoDeUsuarioFieldUpdateOperationsInput | $Enums.TipoDeUsuario
    Fornecedor?: FornecedorUpdateOneWithoutUsuarioNestedInput
    GerenteDeProducao?: GerenteDeProducaoUpdateOneWithoutUsuarioNestedInput
    GerenteDeEstoque?: GerenteDeEstoqueUpdateOneWithoutUsuarioNestedInput
    Administrador?: AdministradorUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    IdUsuario?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    NiveldePermissao?: IntFieldUpdateOperationsInput | number
    TipoDeUsuario?: EnumTipoDeUsuarioFieldUpdateOperationsInput | $Enums.TipoDeUsuario
    Fornecedor?: FornecedorUncheckedUpdateOneWithoutUsuarioNestedInput
    GerenteDeProducao?: GerenteDeProducaoUncheckedUpdateOneWithoutUsuarioNestedInput
    GerenteDeEstoque?: GerenteDeEstoqueUncheckedUpdateOneWithoutUsuarioNestedInput
    Administrador?: AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    IdUsuario?: number
    Nome: string
    Email: string
    Senha: string
    NiveldePermissao: number
    TipoDeUsuario: $Enums.TipoDeUsuario
  }

  export type UsuarioUpdateManyMutationInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    NiveldePermissao?: IntFieldUpdateOperationsInput | number
    TipoDeUsuario?: EnumTipoDeUsuarioFieldUpdateOperationsInput | $Enums.TipoDeUsuario
  }

  export type UsuarioUncheckedUpdateManyInput = {
    IdUsuario?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    NiveldePermissao?: IntFieldUpdateOperationsInput | number
    TipoDeUsuario?: EnumTipoDeUsuarioFieldUpdateOperationsInput | $Enums.TipoDeUsuario
  }

  export type FornecedorCreateInput = {
    CNPJ: number
    Usuario?: UsuarioCreateNestedOneWithoutFornecedorInput
    Pedidos?: PedidoCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUncheckedCreateInput = {
    IdFornecedor?: number
    CNPJ: number
    Pedidos?: PedidoUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUpdateInput = {
    CNPJ?: FloatFieldUpdateOperationsInput | number
    Usuario?: UsuarioUpdateOneRequiredWithoutFornecedorNestedInput
    Pedidos?: PedidoUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorUncheckedUpdateInput = {
    IdFornecedor?: IntFieldUpdateOperationsInput | number
    CNPJ?: FloatFieldUpdateOperationsInput | number
    Pedidos?: PedidoUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorCreateManyInput = {
    IdFornecedor?: number
    CNPJ: number
  }

  export type FornecedorUpdateManyMutationInput = {
    CNPJ?: FloatFieldUpdateOperationsInput | number
  }

  export type FornecedorUncheckedUpdateManyInput = {
    IdFornecedor?: IntFieldUpdateOperationsInput | number
    CNPJ?: FloatFieldUpdateOperationsInput | number
  }

  export type GerenteDeProducaoCreateInput = {
    Usuario?: UsuarioCreateNestedOneWithoutGerenteDeProducaoInput
    Pedidos?: PedidoCreateNestedManyWithoutGerenteDeProducaoInput
  }

  export type GerenteDeProducaoUncheckedCreateInput = {
    IdGerenteDeProducao?: number
    Pedidos?: PedidoUncheckedCreateNestedManyWithoutGerenteDeProducaoInput
  }

  export type GerenteDeProducaoUpdateInput = {
    Usuario?: UsuarioUpdateOneRequiredWithoutGerenteDeProducaoNestedInput
    Pedidos?: PedidoUpdateManyWithoutGerenteDeProducaoNestedInput
  }

  export type GerenteDeProducaoUncheckedUpdateInput = {
    IdGerenteDeProducao?: IntFieldUpdateOperationsInput | number
    Pedidos?: PedidoUncheckedUpdateManyWithoutGerenteDeProducaoNestedInput
  }

  export type GerenteDeProducaoCreateManyInput = {
    IdGerenteDeProducao?: number
  }

  export type GerenteDeProducaoUpdateManyMutationInput = {

  }

  export type GerenteDeProducaoUncheckedUpdateManyInput = {
    IdGerenteDeProducao?: IntFieldUpdateOperationsInput | number
  }

  export type GerenteDeEstoqueCreateInput = {
    Usuario?: UsuarioCreateNestedOneWithoutGerenteDeEstoqueInput
  }

  export type GerenteDeEstoqueUncheckedCreateInput = {
    IdGerenteDeEstoque?: number
  }

  export type GerenteDeEstoqueUpdateInput = {
    Usuario?: UsuarioUpdateOneRequiredWithoutGerenteDeEstoqueNestedInput
  }

  export type GerenteDeEstoqueUncheckedUpdateInput = {
    IdGerenteDeEstoque?: IntFieldUpdateOperationsInput | number
  }

  export type GerenteDeEstoqueCreateManyInput = {
    IdGerenteDeEstoque?: number
  }

  export type GerenteDeEstoqueUpdateManyMutationInput = {

  }

  export type GerenteDeEstoqueUncheckedUpdateManyInput = {
    IdGerenteDeEstoque?: IntFieldUpdateOperationsInput | number
  }

  export type AdministradorCreateInput = {
    Usuario?: UsuarioCreateNestedOneWithoutAdministradorInput
  }

  export type AdministradorUncheckedCreateInput = {
    IdAdministrador?: number
  }

  export type AdministradorUpdateInput = {
    Usuario?: UsuarioUpdateOneRequiredWithoutAdministradorNestedInput
  }

  export type AdministradorUncheckedUpdateInput = {
    IdAdministrador?: IntFieldUpdateOperationsInput | number
  }

  export type AdministradorCreateManyInput = {
    IdAdministrador?: number
  }

  export type AdministradorUpdateManyMutationInput = {

  }

  export type AdministradorUncheckedUpdateManyInput = {
    IdAdministrador?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoCreateInput = {
    Nome: string
    Quantidade: number
    Tipo: $Enums.TipoDeProduto
    ProdutoLote?: ProdutoLoteCreateNestedManyWithoutProdutoInput
    Pedido?: PedidoCreateNestedOneWithoutProdutosInput
    Lote?: LoteCreateNestedManyWithoutProdutosInput
  }

  export type ProdutoUncheckedCreateInput = {
    IdProduto?: number
    Nome: string
    Quantidade: number
    Tipo: $Enums.TipoDeProduto
    PedidoId?: number | null
    ProdutoLote?: ProdutoLoteUncheckedCreateNestedManyWithoutProdutoInput
    Lote?: LoteUncheckedCreateNestedManyWithoutProdutosInput
  }

  export type ProdutoUpdateInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Tipo?: EnumTipoDeProdutoFieldUpdateOperationsInput | $Enums.TipoDeProduto
    ProdutoLote?: ProdutoLoteUpdateManyWithoutProdutoNestedInput
    Pedido?: PedidoUpdateOneWithoutProdutosNestedInput
    Lote?: LoteUpdateManyWithoutProdutosNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    IdProduto?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Tipo?: EnumTipoDeProdutoFieldUpdateOperationsInput | $Enums.TipoDeProduto
    PedidoId?: NullableIntFieldUpdateOperationsInput | number | null
    ProdutoLote?: ProdutoLoteUncheckedUpdateManyWithoutProdutoNestedInput
    Lote?: LoteUncheckedUpdateManyWithoutProdutosNestedInput
  }

  export type ProdutoCreateManyInput = {
    IdProduto?: number
    Nome: string
    Quantidade: number
    Tipo: $Enums.TipoDeProduto
    PedidoId?: number | null
  }

  export type ProdutoUpdateManyMutationInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Tipo?: EnumTipoDeProdutoFieldUpdateOperationsInput | $Enums.TipoDeProduto
  }

  export type ProdutoUncheckedUpdateManyInput = {
    IdProduto?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Tipo?: EnumTipoDeProdutoFieldUpdateOperationsInput | $Enums.TipoDeProduto
    PedidoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LoteCreateInput = {
    Data: Date | string
    Quantidade: number
    Estoque: EstoqueCreateNestedOneWithoutLotesInput
    ProdutoLote?: ProdutoLoteCreateNestedManyWithoutLoteInput
    Produtos?: ProdutoCreateNestedManyWithoutLoteInput
  }

  export type LoteUncheckedCreateInput = {
    IdLote?: number
    Data: Date | string
    Quantidade: number
    EstoqueId: number
    ProdutoLote?: ProdutoLoteUncheckedCreateNestedManyWithoutLoteInput
    Produtos?: ProdutoUncheckedCreateNestedManyWithoutLoteInput
  }

  export type LoteUpdateInput = {
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Estoque?: EstoqueUpdateOneRequiredWithoutLotesNestedInput
    ProdutoLote?: ProdutoLoteUpdateManyWithoutLoteNestedInput
    Produtos?: ProdutoUpdateManyWithoutLoteNestedInput
  }

  export type LoteUncheckedUpdateInput = {
    IdLote?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    EstoqueId?: IntFieldUpdateOperationsInput | number
    ProdutoLote?: ProdutoLoteUncheckedUpdateManyWithoutLoteNestedInput
    Produtos?: ProdutoUncheckedUpdateManyWithoutLoteNestedInput
  }

  export type LoteCreateManyInput = {
    IdLote?: number
    Data: Date | string
    Quantidade: number
    EstoqueId: number
  }

  export type LoteUpdateManyMutationInput = {
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type LoteUncheckedUpdateManyInput = {
    IdLote?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    EstoqueId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoLoteCreateInput = {
    Produto: ProdutoCreateNestedOneWithoutProdutoLoteInput
    Lote: LoteCreateNestedOneWithoutProdutoLoteInput
  }

  export type ProdutoLoteUncheckedCreateInput = {
    produtoId: number
    loteId: number
  }

  export type ProdutoLoteUpdateInput = {
    Produto?: ProdutoUpdateOneRequiredWithoutProdutoLoteNestedInput
    Lote?: LoteUpdateOneRequiredWithoutProdutoLoteNestedInput
  }

  export type ProdutoLoteUncheckedUpdateInput = {
    produtoId?: IntFieldUpdateOperationsInput | number
    loteId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoLoteCreateManyInput = {
    produtoId: number
    loteId: number
  }

  export type ProdutoLoteUpdateManyMutationInput = {

  }

  export type ProdutoLoteUncheckedUpdateManyInput = {
    produtoId?: IntFieldUpdateOperationsInput | number
    loteId?: IntFieldUpdateOperationsInput | number
  }

  export type EstoqueCreateInput = {
    Reposicao: boolean
    Endereco: string
    lotes?: LoteCreateNestedManyWithoutEstoqueInput
  }

  export type EstoqueUncheckedCreateInput = {
    IdEstoque?: number
    Reposicao: boolean
    Endereco: string
    lotes?: LoteUncheckedCreateNestedManyWithoutEstoqueInput
  }

  export type EstoqueUpdateInput = {
    Reposicao?: BoolFieldUpdateOperationsInput | boolean
    Endereco?: StringFieldUpdateOperationsInput | string
    lotes?: LoteUpdateManyWithoutEstoqueNestedInput
  }

  export type EstoqueUncheckedUpdateInput = {
    IdEstoque?: IntFieldUpdateOperationsInput | number
    Reposicao?: BoolFieldUpdateOperationsInput | boolean
    Endereco?: StringFieldUpdateOperationsInput | string
    lotes?: LoteUncheckedUpdateManyWithoutEstoqueNestedInput
  }

  export type EstoqueCreateManyInput = {
    IdEstoque?: number
    Reposicao: boolean
    Endereco: string
  }

  export type EstoqueUpdateManyMutationInput = {
    Reposicao?: BoolFieldUpdateOperationsInput | boolean
    Endereco?: StringFieldUpdateOperationsInput | string
  }

  export type EstoqueUncheckedUpdateManyInput = {
    IdEstoque?: IntFieldUpdateOperationsInput | number
    Reposicao?: BoolFieldUpdateOperationsInput | boolean
    Endereco?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoCreateInput = {
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    Produtos?: ProdutoCreateNestedManyWithoutPedidoInput
    Fornecedor?: FornecedorCreateNestedOneWithoutPedidosInput
    Transportadora?: TransportadoraCreateNestedOneWithoutPedidosInput
    GerenteDeProducao?: GerenteDeProducaoCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateInput = {
    IdPedido?: number
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    FornecedorId: number
    TransportadoraId: number
    GerenteDeProducaoId: number
    Produtos?: ProdutoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    Produtos?: ProdutoUpdateManyWithoutPedidoNestedInput
    Fornecedor?: FornecedorUpdateOneWithoutPedidosNestedInput
    Transportadora?: TransportadoraUpdateOneWithoutPedidosNestedInput
    GerenteDeProducao?: GerenteDeProducaoUpdateOneWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    IdPedido?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    FornecedorId?: IntFieldUpdateOperationsInput | number
    TransportadoraId?: IntFieldUpdateOperationsInput | number
    GerenteDeProducaoId?: IntFieldUpdateOperationsInput | number
    Produtos?: ProdutoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    IdPedido?: number
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    FornecedorId: number
    TransportadoraId: number
    GerenteDeProducaoId: number
  }

  export type PedidoUpdateManyMutationInput = {
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    IdPedido?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    FornecedorId?: IntFieldUpdateOperationsInput | number
    TransportadoraId?: IntFieldUpdateOperationsInput | number
    GerenteDeProducaoId?: IntFieldUpdateOperationsInput | number
  }

  export type TransportadoraCreateInput = {
    Nome: string
    Endereco: string
    Pedidos?: PedidoCreateNestedManyWithoutTransportadoraInput
  }

  export type TransportadoraUncheckedCreateInput = {
    IdTransportadora?: number
    Nome: string
    Endereco: string
    Pedidos?: PedidoUncheckedCreateNestedManyWithoutTransportadoraInput
  }

  export type TransportadoraUpdateInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Endereco?: StringFieldUpdateOperationsInput | string
    Pedidos?: PedidoUpdateManyWithoutTransportadoraNestedInput
  }

  export type TransportadoraUncheckedUpdateInput = {
    IdTransportadora?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Endereco?: StringFieldUpdateOperationsInput | string
    Pedidos?: PedidoUncheckedUpdateManyWithoutTransportadoraNestedInput
  }

  export type TransportadoraCreateManyInput = {
    IdTransportadora?: number
    Nome: string
    Endereco: string
  }

  export type TransportadoraUpdateManyMutationInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Endereco?: StringFieldUpdateOperationsInput | string
  }

  export type TransportadoraUncheckedUpdateManyInput = {
    IdTransportadora?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Endereco?: StringFieldUpdateOperationsInput | string
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

  export type EnumTipoDeUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDeUsuario | EnumTipoDeUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDeUsuario[] | ListEnumTipoDeUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDeUsuario[] | ListEnumTipoDeUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDeUsuarioFilter<$PrismaModel> | $Enums.TipoDeUsuario
  }

  export type FornecedorNullableScalarRelationFilter = {
    is?: FornecedorWhereInput | null
    isNot?: FornecedorWhereInput | null
  }

  export type GerenteDeProducaoNullableScalarRelationFilter = {
    is?: GerenteDeProducaoWhereInput | null
    isNot?: GerenteDeProducaoWhereInput | null
  }

  export type GerenteDeEstoqueNullableScalarRelationFilter = {
    is?: GerenteDeEstoqueWhereInput | null
    isNot?: GerenteDeEstoqueWhereInput | null
  }

  export type AdministradorNullableScalarRelationFilter = {
    is?: AdministradorWhereInput | null
    isNot?: AdministradorWhereInput | null
  }

  export type UsuarioCountOrderByAggregateInput = {
    IdUsuario?: SortOrder
    Nome?: SortOrder
    Email?: SortOrder
    Senha?: SortOrder
    NiveldePermissao?: SortOrder
    TipoDeUsuario?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    IdUsuario?: SortOrder
    NiveldePermissao?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    IdUsuario?: SortOrder
    Nome?: SortOrder
    Email?: SortOrder
    Senha?: SortOrder
    NiveldePermissao?: SortOrder
    TipoDeUsuario?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    IdUsuario?: SortOrder
    Nome?: SortOrder
    Email?: SortOrder
    Senha?: SortOrder
    NiveldePermissao?: SortOrder
    TipoDeUsuario?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    IdUsuario?: SortOrder
    NiveldePermissao?: SortOrder
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

  export type EnumTipoDeUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDeUsuario | EnumTipoDeUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDeUsuario[] | ListEnumTipoDeUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDeUsuario[] | ListEnumTipoDeUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDeUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoDeUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDeUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoDeUsuarioFilter<$PrismaModel>
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FornecedorCountOrderByAggregateInput = {
    IdFornecedor?: SortOrder
    CNPJ?: SortOrder
  }

  export type FornecedorAvgOrderByAggregateInput = {
    IdFornecedor?: SortOrder
    CNPJ?: SortOrder
  }

  export type FornecedorMaxOrderByAggregateInput = {
    IdFornecedor?: SortOrder
    CNPJ?: SortOrder
  }

  export type FornecedorMinOrderByAggregateInput = {
    IdFornecedor?: SortOrder
    CNPJ?: SortOrder
  }

  export type FornecedorSumOrderByAggregateInput = {
    IdFornecedor?: SortOrder
    CNPJ?: SortOrder
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

  export type GerenteDeProducaoCountOrderByAggregateInput = {
    IdGerenteDeProducao?: SortOrder
  }

  export type GerenteDeProducaoAvgOrderByAggregateInput = {
    IdGerenteDeProducao?: SortOrder
  }

  export type GerenteDeProducaoMaxOrderByAggregateInput = {
    IdGerenteDeProducao?: SortOrder
  }

  export type GerenteDeProducaoMinOrderByAggregateInput = {
    IdGerenteDeProducao?: SortOrder
  }

  export type GerenteDeProducaoSumOrderByAggregateInput = {
    IdGerenteDeProducao?: SortOrder
  }

  export type GerenteDeEstoqueCountOrderByAggregateInput = {
    IdGerenteDeEstoque?: SortOrder
  }

  export type GerenteDeEstoqueAvgOrderByAggregateInput = {
    IdGerenteDeEstoque?: SortOrder
  }

  export type GerenteDeEstoqueMaxOrderByAggregateInput = {
    IdGerenteDeEstoque?: SortOrder
  }

  export type GerenteDeEstoqueMinOrderByAggregateInput = {
    IdGerenteDeEstoque?: SortOrder
  }

  export type GerenteDeEstoqueSumOrderByAggregateInput = {
    IdGerenteDeEstoque?: SortOrder
  }

  export type AdministradorCountOrderByAggregateInput = {
    IdAdministrador?: SortOrder
  }

  export type AdministradorAvgOrderByAggregateInput = {
    IdAdministrador?: SortOrder
  }

  export type AdministradorMaxOrderByAggregateInput = {
    IdAdministrador?: SortOrder
  }

  export type AdministradorMinOrderByAggregateInput = {
    IdAdministrador?: SortOrder
  }

  export type AdministradorSumOrderByAggregateInput = {
    IdAdministrador?: SortOrder
  }

  export type EnumTipoDeProdutoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDeProduto | EnumTipoDeProdutoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDeProduto[] | ListEnumTipoDeProdutoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDeProduto[] | ListEnumTipoDeProdutoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDeProdutoFilter<$PrismaModel> | $Enums.TipoDeProduto
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

  export type ProdutoLoteListRelationFilter = {
    every?: ProdutoLoteWhereInput
    some?: ProdutoLoteWhereInput
    none?: ProdutoLoteWhereInput
  }

  export type PedidoNullableScalarRelationFilter = {
    is?: PedidoWhereInput | null
    isNot?: PedidoWhereInput | null
  }

  export type LoteListRelationFilter = {
    every?: LoteWhereInput
    some?: LoteWhereInput
    none?: LoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProdutoLoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    IdProduto?: SortOrder
    Nome?: SortOrder
    Quantidade?: SortOrder
    Tipo?: SortOrder
    PedidoId?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    IdProduto?: SortOrder
    Quantidade?: SortOrder
    PedidoId?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    IdProduto?: SortOrder
    Nome?: SortOrder
    Quantidade?: SortOrder
    Tipo?: SortOrder
    PedidoId?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    IdProduto?: SortOrder
    Nome?: SortOrder
    Quantidade?: SortOrder
    Tipo?: SortOrder
    PedidoId?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    IdProduto?: SortOrder
    Quantidade?: SortOrder
    PedidoId?: SortOrder
  }

  export type EnumTipoDeProdutoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDeProduto | EnumTipoDeProdutoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDeProduto[] | ListEnumTipoDeProdutoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDeProduto[] | ListEnumTipoDeProdutoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDeProdutoWithAggregatesFilter<$PrismaModel> | $Enums.TipoDeProduto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDeProdutoFilter<$PrismaModel>
    _max?: NestedEnumTipoDeProdutoFilter<$PrismaModel>
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

  export type EstoqueScalarRelationFilter = {
    is?: EstoqueWhereInput
    isNot?: EstoqueWhereInput
  }

  export type ProdutoListRelationFilter = {
    every?: ProdutoWhereInput
    some?: ProdutoWhereInput
    none?: ProdutoWhereInput
  }

  export type ProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoteCountOrderByAggregateInput = {
    IdLote?: SortOrder
    Data?: SortOrder
    Quantidade?: SortOrder
    EstoqueId?: SortOrder
  }

  export type LoteAvgOrderByAggregateInput = {
    IdLote?: SortOrder
    Quantidade?: SortOrder
    EstoqueId?: SortOrder
  }

  export type LoteMaxOrderByAggregateInput = {
    IdLote?: SortOrder
    Data?: SortOrder
    Quantidade?: SortOrder
    EstoqueId?: SortOrder
  }

  export type LoteMinOrderByAggregateInput = {
    IdLote?: SortOrder
    Data?: SortOrder
    Quantidade?: SortOrder
    EstoqueId?: SortOrder
  }

  export type LoteSumOrderByAggregateInput = {
    IdLote?: SortOrder
    Quantidade?: SortOrder
    EstoqueId?: SortOrder
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

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type LoteScalarRelationFilter = {
    is?: LoteWhereInput
    isNot?: LoteWhereInput
  }

  export type ProdutoLoteProdutoIdLoteIdCompoundUniqueInput = {
    produtoId: number
    loteId: number
  }

  export type ProdutoLoteCountOrderByAggregateInput = {
    produtoId?: SortOrder
    loteId?: SortOrder
  }

  export type ProdutoLoteAvgOrderByAggregateInput = {
    produtoId?: SortOrder
    loteId?: SortOrder
  }

  export type ProdutoLoteMaxOrderByAggregateInput = {
    produtoId?: SortOrder
    loteId?: SortOrder
  }

  export type ProdutoLoteMinOrderByAggregateInput = {
    produtoId?: SortOrder
    loteId?: SortOrder
  }

  export type ProdutoLoteSumOrderByAggregateInput = {
    produtoId?: SortOrder
    loteId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EstoqueCountOrderByAggregateInput = {
    IdEstoque?: SortOrder
    Reposicao?: SortOrder
    Endereco?: SortOrder
  }

  export type EstoqueAvgOrderByAggregateInput = {
    IdEstoque?: SortOrder
  }

  export type EstoqueMaxOrderByAggregateInput = {
    IdEstoque?: SortOrder
    Reposicao?: SortOrder
    Endereco?: SortOrder
  }

  export type EstoqueMinOrderByAggregateInput = {
    IdEstoque?: SortOrder
    Reposicao?: SortOrder
    Endereco?: SortOrder
  }

  export type EstoqueSumOrderByAggregateInput = {
    IdEstoque?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatusPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoFilter<$PrismaModel> | $Enums.StatusPedido
  }

  export type TransportadoraNullableScalarRelationFilter = {
    is?: TransportadoraWhereInput | null
    isNot?: TransportadoraWhereInput | null
  }

  export type PedidoCountOrderByAggregateInput = {
    IdPedido?: SortOrder
    Data?: SortOrder
    Status?: SortOrder
    EnderecoDeEntrega?: SortOrder
    FornecedorId?: SortOrder
    TransportadoraId?: SortOrder
    GerenteDeProducaoId?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    IdPedido?: SortOrder
    FornecedorId?: SortOrder
    TransportadoraId?: SortOrder
    GerenteDeProducaoId?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    IdPedido?: SortOrder
    Data?: SortOrder
    Status?: SortOrder
    EnderecoDeEntrega?: SortOrder
    FornecedorId?: SortOrder
    TransportadoraId?: SortOrder
    GerenteDeProducaoId?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    IdPedido?: SortOrder
    Data?: SortOrder
    Status?: SortOrder
    EnderecoDeEntrega?: SortOrder
    FornecedorId?: SortOrder
    TransportadoraId?: SortOrder
    GerenteDeProducaoId?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    IdPedido?: SortOrder
    FornecedorId?: SortOrder
    TransportadoraId?: SortOrder
    GerenteDeProducaoId?: SortOrder
  }

  export type EnumStatusPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPedidoFilter<$PrismaModel>
    _max?: NestedEnumStatusPedidoFilter<$PrismaModel>
  }

  export type TransportadoraCountOrderByAggregateInput = {
    IdTransportadora?: SortOrder
    Nome?: SortOrder
    Endereco?: SortOrder
  }

  export type TransportadoraAvgOrderByAggregateInput = {
    IdTransportadora?: SortOrder
  }

  export type TransportadoraMaxOrderByAggregateInput = {
    IdTransportadora?: SortOrder
    Nome?: SortOrder
    Endereco?: SortOrder
  }

  export type TransportadoraMinOrderByAggregateInput = {
    IdTransportadora?: SortOrder
    Nome?: SortOrder
    Endereco?: SortOrder
  }

  export type TransportadoraSumOrderByAggregateInput = {
    IdTransportadora?: SortOrder
  }

  export type FornecedorCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<FornecedorCreateWithoutUsuarioInput, FornecedorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutUsuarioInput
    connect?: FornecedorWhereUniqueInput
  }

  export type GerenteDeProducaoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<GerenteDeProducaoCreateWithoutUsuarioInput, GerenteDeProducaoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: GerenteDeProducaoCreateOrConnectWithoutUsuarioInput
    connect?: GerenteDeProducaoWhereUniqueInput
  }

  export type GerenteDeEstoqueCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<GerenteDeEstoqueCreateWithoutUsuarioInput, GerenteDeEstoqueUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: GerenteDeEstoqueCreateOrConnectWithoutUsuarioInput
    connect?: GerenteDeEstoqueWhereUniqueInput
  }

  export type AdministradorCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuarioInput
    connect?: AdministradorWhereUniqueInput
  }

  export type FornecedorUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<FornecedorCreateWithoutUsuarioInput, FornecedorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutUsuarioInput
    connect?: FornecedorWhereUniqueInput
  }

  export type GerenteDeProducaoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<GerenteDeProducaoCreateWithoutUsuarioInput, GerenteDeProducaoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: GerenteDeProducaoCreateOrConnectWithoutUsuarioInput
    connect?: GerenteDeProducaoWhereUniqueInput
  }

  export type GerenteDeEstoqueUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<GerenteDeEstoqueCreateWithoutUsuarioInput, GerenteDeEstoqueUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: GerenteDeEstoqueCreateOrConnectWithoutUsuarioInput
    connect?: GerenteDeEstoqueWhereUniqueInput
  }

  export type AdministradorUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuarioInput
    connect?: AdministradorWhereUniqueInput
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

  export type EnumTipoDeUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.TipoDeUsuario
  }

  export type FornecedorUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FornecedorCreateWithoutUsuarioInput, FornecedorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutUsuarioInput
    upsert?: FornecedorUpsertWithoutUsuarioInput
    disconnect?: FornecedorWhereInput | boolean
    delete?: FornecedorWhereInput | boolean
    connect?: FornecedorWhereUniqueInput
    update?: XOR<XOR<FornecedorUpdateToOneWithWhereWithoutUsuarioInput, FornecedorUpdateWithoutUsuarioInput>, FornecedorUncheckedUpdateWithoutUsuarioInput>
  }

  export type GerenteDeProducaoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<GerenteDeProducaoCreateWithoutUsuarioInput, GerenteDeProducaoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: GerenteDeProducaoCreateOrConnectWithoutUsuarioInput
    upsert?: GerenteDeProducaoUpsertWithoutUsuarioInput
    disconnect?: GerenteDeProducaoWhereInput | boolean
    delete?: GerenteDeProducaoWhereInput | boolean
    connect?: GerenteDeProducaoWhereUniqueInput
    update?: XOR<XOR<GerenteDeProducaoUpdateToOneWithWhereWithoutUsuarioInput, GerenteDeProducaoUpdateWithoutUsuarioInput>, GerenteDeProducaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type GerenteDeEstoqueUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<GerenteDeEstoqueCreateWithoutUsuarioInput, GerenteDeEstoqueUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: GerenteDeEstoqueCreateOrConnectWithoutUsuarioInput
    upsert?: GerenteDeEstoqueUpsertWithoutUsuarioInput
    disconnect?: GerenteDeEstoqueWhereInput | boolean
    delete?: GerenteDeEstoqueWhereInput | boolean
    connect?: GerenteDeEstoqueWhereUniqueInput
    update?: XOR<XOR<GerenteDeEstoqueUpdateToOneWithWhereWithoutUsuarioInput, GerenteDeEstoqueUpdateWithoutUsuarioInput>, GerenteDeEstoqueUncheckedUpdateWithoutUsuarioInput>
  }

  export type AdministradorUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuarioInput
    upsert?: AdministradorUpsertWithoutUsuarioInput
    disconnect?: AdministradorWhereInput | boolean
    delete?: AdministradorWhereInput | boolean
    connect?: AdministradorWhereUniqueInput
    update?: XOR<XOR<AdministradorUpdateToOneWithWhereWithoutUsuarioInput, AdministradorUpdateWithoutUsuarioInput>, AdministradorUncheckedUpdateWithoutUsuarioInput>
  }

  export type FornecedorUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FornecedorCreateWithoutUsuarioInput, FornecedorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutUsuarioInput
    upsert?: FornecedorUpsertWithoutUsuarioInput
    disconnect?: FornecedorWhereInput | boolean
    delete?: FornecedorWhereInput | boolean
    connect?: FornecedorWhereUniqueInput
    update?: XOR<XOR<FornecedorUpdateToOneWithWhereWithoutUsuarioInput, FornecedorUpdateWithoutUsuarioInput>, FornecedorUncheckedUpdateWithoutUsuarioInput>
  }

  export type GerenteDeProducaoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<GerenteDeProducaoCreateWithoutUsuarioInput, GerenteDeProducaoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: GerenteDeProducaoCreateOrConnectWithoutUsuarioInput
    upsert?: GerenteDeProducaoUpsertWithoutUsuarioInput
    disconnect?: GerenteDeProducaoWhereInput | boolean
    delete?: GerenteDeProducaoWhereInput | boolean
    connect?: GerenteDeProducaoWhereUniqueInput
    update?: XOR<XOR<GerenteDeProducaoUpdateToOneWithWhereWithoutUsuarioInput, GerenteDeProducaoUpdateWithoutUsuarioInput>, GerenteDeProducaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type GerenteDeEstoqueUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<GerenteDeEstoqueCreateWithoutUsuarioInput, GerenteDeEstoqueUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: GerenteDeEstoqueCreateOrConnectWithoutUsuarioInput
    upsert?: GerenteDeEstoqueUpsertWithoutUsuarioInput
    disconnect?: GerenteDeEstoqueWhereInput | boolean
    delete?: GerenteDeEstoqueWhereInput | boolean
    connect?: GerenteDeEstoqueWhereUniqueInput
    update?: XOR<XOR<GerenteDeEstoqueUpdateToOneWithWhereWithoutUsuarioInput, GerenteDeEstoqueUpdateWithoutUsuarioInput>, GerenteDeEstoqueUncheckedUpdateWithoutUsuarioInput>
  }

  export type AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuarioInput
    upsert?: AdministradorUpsertWithoutUsuarioInput
    disconnect?: AdministradorWhereInput | boolean
    delete?: AdministradorWhereInput | boolean
    connect?: AdministradorWhereUniqueInput
    update?: XOR<XOR<AdministradorUpdateToOneWithWhereWithoutUsuarioInput, AdministradorUpdateWithoutUsuarioInput>, AdministradorUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioCreateNestedOneWithoutFornecedorInput = {
    create?: XOR<UsuarioCreateWithoutFornecedorInput, UsuarioUncheckedCreateWithoutFornecedorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFornecedorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PedidoCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<PedidoCreateWithoutFornecedorInput, PedidoUncheckedCreateWithoutFornecedorInput> | PedidoCreateWithoutFornecedorInput[] | PedidoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutFornecedorInput | PedidoCreateOrConnectWithoutFornecedorInput[]
    createMany?: PedidoCreateManyFornecedorInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<PedidoCreateWithoutFornecedorInput, PedidoUncheckedCreateWithoutFornecedorInput> | PedidoCreateWithoutFornecedorInput[] | PedidoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutFornecedorInput | PedidoCreateOrConnectWithoutFornecedorInput[]
    createMany?: PedidoCreateManyFornecedorInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutFornecedorNestedInput = {
    create?: XOR<UsuarioCreateWithoutFornecedorInput, UsuarioUncheckedCreateWithoutFornecedorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFornecedorInput
    upsert?: UsuarioUpsertWithoutFornecedorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFornecedorInput, UsuarioUpdateWithoutFornecedorInput>, UsuarioUncheckedUpdateWithoutFornecedorInput>
  }

  export type PedidoUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<PedidoCreateWithoutFornecedorInput, PedidoUncheckedCreateWithoutFornecedorInput> | PedidoCreateWithoutFornecedorInput[] | PedidoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutFornecedorInput | PedidoCreateOrConnectWithoutFornecedorInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutFornecedorInput | PedidoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: PedidoCreateManyFornecedorInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutFornecedorInput | PedidoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutFornecedorInput | PedidoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<PedidoCreateWithoutFornecedorInput, PedidoUncheckedCreateWithoutFornecedorInput> | PedidoCreateWithoutFornecedorInput[] | PedidoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutFornecedorInput | PedidoCreateOrConnectWithoutFornecedorInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutFornecedorInput | PedidoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: PedidoCreateManyFornecedorInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutFornecedorInput | PedidoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutFornecedorInput | PedidoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutGerenteDeProducaoInput = {
    create?: XOR<UsuarioCreateWithoutGerenteDeProducaoInput, UsuarioUncheckedCreateWithoutGerenteDeProducaoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGerenteDeProducaoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PedidoCreateNestedManyWithoutGerenteDeProducaoInput = {
    create?: XOR<PedidoCreateWithoutGerenteDeProducaoInput, PedidoUncheckedCreateWithoutGerenteDeProducaoInput> | PedidoCreateWithoutGerenteDeProducaoInput[] | PedidoUncheckedCreateWithoutGerenteDeProducaoInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutGerenteDeProducaoInput | PedidoCreateOrConnectWithoutGerenteDeProducaoInput[]
    createMany?: PedidoCreateManyGerenteDeProducaoInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutGerenteDeProducaoInput = {
    create?: XOR<PedidoCreateWithoutGerenteDeProducaoInput, PedidoUncheckedCreateWithoutGerenteDeProducaoInput> | PedidoCreateWithoutGerenteDeProducaoInput[] | PedidoUncheckedCreateWithoutGerenteDeProducaoInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutGerenteDeProducaoInput | PedidoCreateOrConnectWithoutGerenteDeProducaoInput[]
    createMany?: PedidoCreateManyGerenteDeProducaoInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutGerenteDeProducaoNestedInput = {
    create?: XOR<UsuarioCreateWithoutGerenteDeProducaoInput, UsuarioUncheckedCreateWithoutGerenteDeProducaoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGerenteDeProducaoInput
    upsert?: UsuarioUpsertWithoutGerenteDeProducaoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutGerenteDeProducaoInput, UsuarioUpdateWithoutGerenteDeProducaoInput>, UsuarioUncheckedUpdateWithoutGerenteDeProducaoInput>
  }

  export type PedidoUpdateManyWithoutGerenteDeProducaoNestedInput = {
    create?: XOR<PedidoCreateWithoutGerenteDeProducaoInput, PedidoUncheckedCreateWithoutGerenteDeProducaoInput> | PedidoCreateWithoutGerenteDeProducaoInput[] | PedidoUncheckedCreateWithoutGerenteDeProducaoInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutGerenteDeProducaoInput | PedidoCreateOrConnectWithoutGerenteDeProducaoInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutGerenteDeProducaoInput | PedidoUpsertWithWhereUniqueWithoutGerenteDeProducaoInput[]
    createMany?: PedidoCreateManyGerenteDeProducaoInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutGerenteDeProducaoInput | PedidoUpdateWithWhereUniqueWithoutGerenteDeProducaoInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutGerenteDeProducaoInput | PedidoUpdateManyWithWhereWithoutGerenteDeProducaoInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutGerenteDeProducaoNestedInput = {
    create?: XOR<PedidoCreateWithoutGerenteDeProducaoInput, PedidoUncheckedCreateWithoutGerenteDeProducaoInput> | PedidoCreateWithoutGerenteDeProducaoInput[] | PedidoUncheckedCreateWithoutGerenteDeProducaoInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutGerenteDeProducaoInput | PedidoCreateOrConnectWithoutGerenteDeProducaoInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutGerenteDeProducaoInput | PedidoUpsertWithWhereUniqueWithoutGerenteDeProducaoInput[]
    createMany?: PedidoCreateManyGerenteDeProducaoInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutGerenteDeProducaoInput | PedidoUpdateWithWhereUniqueWithoutGerenteDeProducaoInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutGerenteDeProducaoInput | PedidoUpdateManyWithWhereWithoutGerenteDeProducaoInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutGerenteDeEstoqueInput = {
    create?: XOR<UsuarioCreateWithoutGerenteDeEstoqueInput, UsuarioUncheckedCreateWithoutGerenteDeEstoqueInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGerenteDeEstoqueInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutGerenteDeEstoqueNestedInput = {
    create?: XOR<UsuarioCreateWithoutGerenteDeEstoqueInput, UsuarioUncheckedCreateWithoutGerenteDeEstoqueInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGerenteDeEstoqueInput
    upsert?: UsuarioUpsertWithoutGerenteDeEstoqueInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutGerenteDeEstoqueInput, UsuarioUpdateWithoutGerenteDeEstoqueInput>, UsuarioUncheckedUpdateWithoutGerenteDeEstoqueInput>
  }

  export type UsuarioCreateNestedOneWithoutAdministradorInput = {
    create?: XOR<UsuarioCreateWithoutAdministradorInput, UsuarioUncheckedCreateWithoutAdministradorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAdministradorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutAdministradorNestedInput = {
    create?: XOR<UsuarioCreateWithoutAdministradorInput, UsuarioUncheckedCreateWithoutAdministradorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAdministradorInput
    upsert?: UsuarioUpsertWithoutAdministradorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAdministradorInput, UsuarioUpdateWithoutAdministradorInput>, UsuarioUncheckedUpdateWithoutAdministradorInput>
  }

  export type ProdutoLoteCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ProdutoLoteCreateWithoutProdutoInput, ProdutoLoteUncheckedCreateWithoutProdutoInput> | ProdutoLoteCreateWithoutProdutoInput[] | ProdutoLoteUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ProdutoLoteCreateOrConnectWithoutProdutoInput | ProdutoLoteCreateOrConnectWithoutProdutoInput[]
    createMany?: ProdutoLoteCreateManyProdutoInputEnvelope
    connect?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
  }

  export type PedidoCreateNestedOneWithoutProdutosInput = {
    create?: XOR<PedidoCreateWithoutProdutosInput, PedidoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutProdutosInput
    connect?: PedidoWhereUniqueInput
  }

  export type LoteCreateNestedManyWithoutProdutosInput = {
    create?: XOR<LoteCreateWithoutProdutosInput, LoteUncheckedCreateWithoutProdutosInput> | LoteCreateWithoutProdutosInput[] | LoteUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutProdutosInput | LoteCreateOrConnectWithoutProdutosInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type ProdutoLoteUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ProdutoLoteCreateWithoutProdutoInput, ProdutoLoteUncheckedCreateWithoutProdutoInput> | ProdutoLoteCreateWithoutProdutoInput[] | ProdutoLoteUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ProdutoLoteCreateOrConnectWithoutProdutoInput | ProdutoLoteCreateOrConnectWithoutProdutoInput[]
    createMany?: ProdutoLoteCreateManyProdutoInputEnvelope
    connect?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
  }

  export type LoteUncheckedCreateNestedManyWithoutProdutosInput = {
    create?: XOR<LoteCreateWithoutProdutosInput, LoteUncheckedCreateWithoutProdutosInput> | LoteCreateWithoutProdutosInput[] | LoteUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutProdutosInput | LoteCreateOrConnectWithoutProdutosInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type EnumTipoDeProdutoFieldUpdateOperationsInput = {
    set?: $Enums.TipoDeProduto
  }

  export type ProdutoLoteUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ProdutoLoteCreateWithoutProdutoInput, ProdutoLoteUncheckedCreateWithoutProdutoInput> | ProdutoLoteCreateWithoutProdutoInput[] | ProdutoLoteUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ProdutoLoteCreateOrConnectWithoutProdutoInput | ProdutoLoteCreateOrConnectWithoutProdutoInput[]
    upsert?: ProdutoLoteUpsertWithWhereUniqueWithoutProdutoInput | ProdutoLoteUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ProdutoLoteCreateManyProdutoInputEnvelope
    set?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    disconnect?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    delete?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    connect?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    update?: ProdutoLoteUpdateWithWhereUniqueWithoutProdutoInput | ProdutoLoteUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ProdutoLoteUpdateManyWithWhereWithoutProdutoInput | ProdutoLoteUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ProdutoLoteScalarWhereInput | ProdutoLoteScalarWhereInput[]
  }

  export type PedidoUpdateOneWithoutProdutosNestedInput = {
    create?: XOR<PedidoCreateWithoutProdutosInput, PedidoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutProdutosInput
    upsert?: PedidoUpsertWithoutProdutosInput
    disconnect?: PedidoWhereInput | boolean
    delete?: PedidoWhereInput | boolean
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutProdutosInput, PedidoUpdateWithoutProdutosInput>, PedidoUncheckedUpdateWithoutProdutosInput>
  }

  export type LoteUpdateManyWithoutProdutosNestedInput = {
    create?: XOR<LoteCreateWithoutProdutosInput, LoteUncheckedCreateWithoutProdutosInput> | LoteCreateWithoutProdutosInput[] | LoteUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutProdutosInput | LoteCreateOrConnectWithoutProdutosInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutProdutosInput | LoteUpsertWithWhereUniqueWithoutProdutosInput[]
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutProdutosInput | LoteUpdateWithWhereUniqueWithoutProdutosInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutProdutosInput | LoteUpdateManyWithWhereWithoutProdutosInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProdutoLoteUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ProdutoLoteCreateWithoutProdutoInput, ProdutoLoteUncheckedCreateWithoutProdutoInput> | ProdutoLoteCreateWithoutProdutoInput[] | ProdutoLoteUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ProdutoLoteCreateOrConnectWithoutProdutoInput | ProdutoLoteCreateOrConnectWithoutProdutoInput[]
    upsert?: ProdutoLoteUpsertWithWhereUniqueWithoutProdutoInput | ProdutoLoteUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ProdutoLoteCreateManyProdutoInputEnvelope
    set?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    disconnect?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    delete?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    connect?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    update?: ProdutoLoteUpdateWithWhereUniqueWithoutProdutoInput | ProdutoLoteUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ProdutoLoteUpdateManyWithWhereWithoutProdutoInput | ProdutoLoteUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ProdutoLoteScalarWhereInput | ProdutoLoteScalarWhereInput[]
  }

  export type LoteUncheckedUpdateManyWithoutProdutosNestedInput = {
    create?: XOR<LoteCreateWithoutProdutosInput, LoteUncheckedCreateWithoutProdutosInput> | LoteCreateWithoutProdutosInput[] | LoteUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutProdutosInput | LoteCreateOrConnectWithoutProdutosInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutProdutosInput | LoteUpsertWithWhereUniqueWithoutProdutosInput[]
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutProdutosInput | LoteUpdateWithWhereUniqueWithoutProdutosInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutProdutosInput | LoteUpdateManyWithWhereWithoutProdutosInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type EstoqueCreateNestedOneWithoutLotesInput = {
    create?: XOR<EstoqueCreateWithoutLotesInput, EstoqueUncheckedCreateWithoutLotesInput>
    connectOrCreate?: EstoqueCreateOrConnectWithoutLotesInput
    connect?: EstoqueWhereUniqueInput
  }

  export type ProdutoLoteCreateNestedManyWithoutLoteInput = {
    create?: XOR<ProdutoLoteCreateWithoutLoteInput, ProdutoLoteUncheckedCreateWithoutLoteInput> | ProdutoLoteCreateWithoutLoteInput[] | ProdutoLoteUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: ProdutoLoteCreateOrConnectWithoutLoteInput | ProdutoLoteCreateOrConnectWithoutLoteInput[]
    createMany?: ProdutoLoteCreateManyLoteInputEnvelope
    connect?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
  }

  export type ProdutoCreateNestedManyWithoutLoteInput = {
    create?: XOR<ProdutoCreateWithoutLoteInput, ProdutoUncheckedCreateWithoutLoteInput> | ProdutoCreateWithoutLoteInput[] | ProdutoUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutLoteInput | ProdutoCreateOrConnectWithoutLoteInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ProdutoLoteUncheckedCreateNestedManyWithoutLoteInput = {
    create?: XOR<ProdutoLoteCreateWithoutLoteInput, ProdutoLoteUncheckedCreateWithoutLoteInput> | ProdutoLoteCreateWithoutLoteInput[] | ProdutoLoteUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: ProdutoLoteCreateOrConnectWithoutLoteInput | ProdutoLoteCreateOrConnectWithoutLoteInput[]
    createMany?: ProdutoLoteCreateManyLoteInputEnvelope
    connect?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutLoteInput = {
    create?: XOR<ProdutoCreateWithoutLoteInput, ProdutoUncheckedCreateWithoutLoteInput> | ProdutoCreateWithoutLoteInput[] | ProdutoUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutLoteInput | ProdutoCreateOrConnectWithoutLoteInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EstoqueUpdateOneRequiredWithoutLotesNestedInput = {
    create?: XOR<EstoqueCreateWithoutLotesInput, EstoqueUncheckedCreateWithoutLotesInput>
    connectOrCreate?: EstoqueCreateOrConnectWithoutLotesInput
    upsert?: EstoqueUpsertWithoutLotesInput
    connect?: EstoqueWhereUniqueInput
    update?: XOR<XOR<EstoqueUpdateToOneWithWhereWithoutLotesInput, EstoqueUpdateWithoutLotesInput>, EstoqueUncheckedUpdateWithoutLotesInput>
  }

  export type ProdutoLoteUpdateManyWithoutLoteNestedInput = {
    create?: XOR<ProdutoLoteCreateWithoutLoteInput, ProdutoLoteUncheckedCreateWithoutLoteInput> | ProdutoLoteCreateWithoutLoteInput[] | ProdutoLoteUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: ProdutoLoteCreateOrConnectWithoutLoteInput | ProdutoLoteCreateOrConnectWithoutLoteInput[]
    upsert?: ProdutoLoteUpsertWithWhereUniqueWithoutLoteInput | ProdutoLoteUpsertWithWhereUniqueWithoutLoteInput[]
    createMany?: ProdutoLoteCreateManyLoteInputEnvelope
    set?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    disconnect?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    delete?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    connect?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    update?: ProdutoLoteUpdateWithWhereUniqueWithoutLoteInput | ProdutoLoteUpdateWithWhereUniqueWithoutLoteInput[]
    updateMany?: ProdutoLoteUpdateManyWithWhereWithoutLoteInput | ProdutoLoteUpdateManyWithWhereWithoutLoteInput[]
    deleteMany?: ProdutoLoteScalarWhereInput | ProdutoLoteScalarWhereInput[]
  }

  export type ProdutoUpdateManyWithoutLoteNestedInput = {
    create?: XOR<ProdutoCreateWithoutLoteInput, ProdutoUncheckedCreateWithoutLoteInput> | ProdutoCreateWithoutLoteInput[] | ProdutoUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutLoteInput | ProdutoCreateOrConnectWithoutLoteInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutLoteInput | ProdutoUpsertWithWhereUniqueWithoutLoteInput[]
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutLoteInput | ProdutoUpdateWithWhereUniqueWithoutLoteInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutLoteInput | ProdutoUpdateManyWithWhereWithoutLoteInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ProdutoLoteUncheckedUpdateManyWithoutLoteNestedInput = {
    create?: XOR<ProdutoLoteCreateWithoutLoteInput, ProdutoLoteUncheckedCreateWithoutLoteInput> | ProdutoLoteCreateWithoutLoteInput[] | ProdutoLoteUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: ProdutoLoteCreateOrConnectWithoutLoteInput | ProdutoLoteCreateOrConnectWithoutLoteInput[]
    upsert?: ProdutoLoteUpsertWithWhereUniqueWithoutLoteInput | ProdutoLoteUpsertWithWhereUniqueWithoutLoteInput[]
    createMany?: ProdutoLoteCreateManyLoteInputEnvelope
    set?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    disconnect?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    delete?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    connect?: ProdutoLoteWhereUniqueInput | ProdutoLoteWhereUniqueInput[]
    update?: ProdutoLoteUpdateWithWhereUniqueWithoutLoteInput | ProdutoLoteUpdateWithWhereUniqueWithoutLoteInput[]
    updateMany?: ProdutoLoteUpdateManyWithWhereWithoutLoteInput | ProdutoLoteUpdateManyWithWhereWithoutLoteInput[]
    deleteMany?: ProdutoLoteScalarWhereInput | ProdutoLoteScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutLoteNestedInput = {
    create?: XOR<ProdutoCreateWithoutLoteInput, ProdutoUncheckedCreateWithoutLoteInput> | ProdutoCreateWithoutLoteInput[] | ProdutoUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutLoteInput | ProdutoCreateOrConnectWithoutLoteInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutLoteInput | ProdutoUpsertWithWhereUniqueWithoutLoteInput[]
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutLoteInput | ProdutoUpdateWithWhereUniqueWithoutLoteInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutLoteInput | ProdutoUpdateManyWithWhereWithoutLoteInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ProdutoCreateNestedOneWithoutProdutoLoteInput = {
    create?: XOR<ProdutoCreateWithoutProdutoLoteInput, ProdutoUncheckedCreateWithoutProdutoLoteInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutProdutoLoteInput
    connect?: ProdutoWhereUniqueInput
  }

  export type LoteCreateNestedOneWithoutProdutoLoteInput = {
    create?: XOR<LoteCreateWithoutProdutoLoteInput, LoteUncheckedCreateWithoutProdutoLoteInput>
    connectOrCreate?: LoteCreateOrConnectWithoutProdutoLoteInput
    connect?: LoteWhereUniqueInput
  }

  export type ProdutoUpdateOneRequiredWithoutProdutoLoteNestedInput = {
    create?: XOR<ProdutoCreateWithoutProdutoLoteInput, ProdutoUncheckedCreateWithoutProdutoLoteInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutProdutoLoteInput
    upsert?: ProdutoUpsertWithoutProdutoLoteInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutProdutoLoteInput, ProdutoUpdateWithoutProdutoLoteInput>, ProdutoUncheckedUpdateWithoutProdutoLoteInput>
  }

  export type LoteUpdateOneRequiredWithoutProdutoLoteNestedInput = {
    create?: XOR<LoteCreateWithoutProdutoLoteInput, LoteUncheckedCreateWithoutProdutoLoteInput>
    connectOrCreate?: LoteCreateOrConnectWithoutProdutoLoteInput
    upsert?: LoteUpsertWithoutProdutoLoteInput
    connect?: LoteWhereUniqueInput
    update?: XOR<XOR<LoteUpdateToOneWithWhereWithoutProdutoLoteInput, LoteUpdateWithoutProdutoLoteInput>, LoteUncheckedUpdateWithoutProdutoLoteInput>
  }

  export type LoteCreateNestedManyWithoutEstoqueInput = {
    create?: XOR<LoteCreateWithoutEstoqueInput, LoteUncheckedCreateWithoutEstoqueInput> | LoteCreateWithoutEstoqueInput[] | LoteUncheckedCreateWithoutEstoqueInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutEstoqueInput | LoteCreateOrConnectWithoutEstoqueInput[]
    createMany?: LoteCreateManyEstoqueInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type LoteUncheckedCreateNestedManyWithoutEstoqueInput = {
    create?: XOR<LoteCreateWithoutEstoqueInput, LoteUncheckedCreateWithoutEstoqueInput> | LoteCreateWithoutEstoqueInput[] | LoteUncheckedCreateWithoutEstoqueInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutEstoqueInput | LoteCreateOrConnectWithoutEstoqueInput[]
    createMany?: LoteCreateManyEstoqueInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LoteUpdateManyWithoutEstoqueNestedInput = {
    create?: XOR<LoteCreateWithoutEstoqueInput, LoteUncheckedCreateWithoutEstoqueInput> | LoteCreateWithoutEstoqueInput[] | LoteUncheckedCreateWithoutEstoqueInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutEstoqueInput | LoteCreateOrConnectWithoutEstoqueInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutEstoqueInput | LoteUpsertWithWhereUniqueWithoutEstoqueInput[]
    createMany?: LoteCreateManyEstoqueInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutEstoqueInput | LoteUpdateWithWhereUniqueWithoutEstoqueInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutEstoqueInput | LoteUpdateManyWithWhereWithoutEstoqueInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type LoteUncheckedUpdateManyWithoutEstoqueNestedInput = {
    create?: XOR<LoteCreateWithoutEstoqueInput, LoteUncheckedCreateWithoutEstoqueInput> | LoteCreateWithoutEstoqueInput[] | LoteUncheckedCreateWithoutEstoqueInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutEstoqueInput | LoteCreateOrConnectWithoutEstoqueInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutEstoqueInput | LoteUpsertWithWhereUniqueWithoutEstoqueInput[]
    createMany?: LoteCreateManyEstoqueInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutEstoqueInput | LoteUpdateWithWhereUniqueWithoutEstoqueInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutEstoqueInput | LoteUpdateManyWithWhereWithoutEstoqueInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type ProdutoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ProdutoCreateWithoutPedidoInput, ProdutoUncheckedCreateWithoutPedidoInput> | ProdutoCreateWithoutPedidoInput[] | ProdutoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutPedidoInput | ProdutoCreateOrConnectWithoutPedidoInput[]
    createMany?: ProdutoCreateManyPedidoInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type FornecedorCreateNestedOneWithoutPedidosInput = {
    create?: XOR<FornecedorCreateWithoutPedidosInput, FornecedorUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutPedidosInput
    connect?: FornecedorWhereUniqueInput
  }

  export type TransportadoraCreateNestedOneWithoutPedidosInput = {
    create?: XOR<TransportadoraCreateWithoutPedidosInput, TransportadoraUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: TransportadoraCreateOrConnectWithoutPedidosInput
    connect?: TransportadoraWhereUniqueInput
  }

  export type GerenteDeProducaoCreateNestedOneWithoutPedidosInput = {
    create?: XOR<GerenteDeProducaoCreateWithoutPedidosInput, GerenteDeProducaoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: GerenteDeProducaoCreateOrConnectWithoutPedidosInput
    connect?: GerenteDeProducaoWhereUniqueInput
  }

  export type ProdutoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ProdutoCreateWithoutPedidoInput, ProdutoUncheckedCreateWithoutPedidoInput> | ProdutoCreateWithoutPedidoInput[] | ProdutoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutPedidoInput | ProdutoCreateOrConnectWithoutPedidoInput[]
    createMany?: ProdutoCreateManyPedidoInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type EnumStatusPedidoFieldUpdateOperationsInput = {
    set?: $Enums.StatusPedido
  }

  export type ProdutoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ProdutoCreateWithoutPedidoInput, ProdutoUncheckedCreateWithoutPedidoInput> | ProdutoCreateWithoutPedidoInput[] | ProdutoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutPedidoInput | ProdutoCreateOrConnectWithoutPedidoInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutPedidoInput | ProdutoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ProdutoCreateManyPedidoInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutPedidoInput | ProdutoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutPedidoInput | ProdutoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type FornecedorUpdateOneWithoutPedidosNestedInput = {
    create?: XOR<FornecedorCreateWithoutPedidosInput, FornecedorUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutPedidosInput
    upsert?: FornecedorUpsertWithoutPedidosInput
    disconnect?: FornecedorWhereInput | boolean
    delete?: FornecedorWhereInput | boolean
    connect?: FornecedorWhereUniqueInput
    update?: XOR<XOR<FornecedorUpdateToOneWithWhereWithoutPedidosInput, FornecedorUpdateWithoutPedidosInput>, FornecedorUncheckedUpdateWithoutPedidosInput>
  }

  export type TransportadoraUpdateOneWithoutPedidosNestedInput = {
    create?: XOR<TransportadoraCreateWithoutPedidosInput, TransportadoraUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: TransportadoraCreateOrConnectWithoutPedidosInput
    upsert?: TransportadoraUpsertWithoutPedidosInput
    disconnect?: TransportadoraWhereInput | boolean
    delete?: TransportadoraWhereInput | boolean
    connect?: TransportadoraWhereUniqueInput
    update?: XOR<XOR<TransportadoraUpdateToOneWithWhereWithoutPedidosInput, TransportadoraUpdateWithoutPedidosInput>, TransportadoraUncheckedUpdateWithoutPedidosInput>
  }

  export type GerenteDeProducaoUpdateOneWithoutPedidosNestedInput = {
    create?: XOR<GerenteDeProducaoCreateWithoutPedidosInput, GerenteDeProducaoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: GerenteDeProducaoCreateOrConnectWithoutPedidosInput
    upsert?: GerenteDeProducaoUpsertWithoutPedidosInput
    disconnect?: GerenteDeProducaoWhereInput | boolean
    delete?: GerenteDeProducaoWhereInput | boolean
    connect?: GerenteDeProducaoWhereUniqueInput
    update?: XOR<XOR<GerenteDeProducaoUpdateToOneWithWhereWithoutPedidosInput, GerenteDeProducaoUpdateWithoutPedidosInput>, GerenteDeProducaoUncheckedUpdateWithoutPedidosInput>
  }

  export type ProdutoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ProdutoCreateWithoutPedidoInput, ProdutoUncheckedCreateWithoutPedidoInput> | ProdutoCreateWithoutPedidoInput[] | ProdutoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutPedidoInput | ProdutoCreateOrConnectWithoutPedidoInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutPedidoInput | ProdutoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ProdutoCreateManyPedidoInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutPedidoInput | ProdutoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutPedidoInput | ProdutoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type PedidoCreateNestedManyWithoutTransportadoraInput = {
    create?: XOR<PedidoCreateWithoutTransportadoraInput, PedidoUncheckedCreateWithoutTransportadoraInput> | PedidoCreateWithoutTransportadoraInput[] | PedidoUncheckedCreateWithoutTransportadoraInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutTransportadoraInput | PedidoCreateOrConnectWithoutTransportadoraInput[]
    createMany?: PedidoCreateManyTransportadoraInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutTransportadoraInput = {
    create?: XOR<PedidoCreateWithoutTransportadoraInput, PedidoUncheckedCreateWithoutTransportadoraInput> | PedidoCreateWithoutTransportadoraInput[] | PedidoUncheckedCreateWithoutTransportadoraInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutTransportadoraInput | PedidoCreateOrConnectWithoutTransportadoraInput[]
    createMany?: PedidoCreateManyTransportadoraInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUpdateManyWithoutTransportadoraNestedInput = {
    create?: XOR<PedidoCreateWithoutTransportadoraInput, PedidoUncheckedCreateWithoutTransportadoraInput> | PedidoCreateWithoutTransportadoraInput[] | PedidoUncheckedCreateWithoutTransportadoraInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutTransportadoraInput | PedidoCreateOrConnectWithoutTransportadoraInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutTransportadoraInput | PedidoUpsertWithWhereUniqueWithoutTransportadoraInput[]
    createMany?: PedidoCreateManyTransportadoraInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutTransportadoraInput | PedidoUpdateWithWhereUniqueWithoutTransportadoraInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutTransportadoraInput | PedidoUpdateManyWithWhereWithoutTransportadoraInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutTransportadoraNestedInput = {
    create?: XOR<PedidoCreateWithoutTransportadoraInput, PedidoUncheckedCreateWithoutTransportadoraInput> | PedidoCreateWithoutTransportadoraInput[] | PedidoUncheckedCreateWithoutTransportadoraInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutTransportadoraInput | PedidoCreateOrConnectWithoutTransportadoraInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutTransportadoraInput | PedidoUpsertWithWhereUniqueWithoutTransportadoraInput[]
    createMany?: PedidoCreateManyTransportadoraInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutTransportadoraInput | PedidoUpdateWithWhereUniqueWithoutTransportadoraInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutTransportadoraInput | PedidoUpdateManyWithWhereWithoutTransportadoraInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
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

  export type NestedEnumTipoDeUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDeUsuario | EnumTipoDeUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDeUsuario[] | ListEnumTipoDeUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDeUsuario[] | ListEnumTipoDeUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDeUsuarioFilter<$PrismaModel> | $Enums.TipoDeUsuario
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

  export type NestedEnumTipoDeUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDeUsuario | EnumTipoDeUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDeUsuario[] | ListEnumTipoDeUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDeUsuario[] | ListEnumTipoDeUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDeUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoDeUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDeUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoDeUsuarioFilter<$PrismaModel>
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

  export type NestedEnumTipoDeProdutoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDeProduto | EnumTipoDeProdutoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDeProduto[] | ListEnumTipoDeProdutoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDeProduto[] | ListEnumTipoDeProdutoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDeProdutoFilter<$PrismaModel> | $Enums.TipoDeProduto
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

  export type NestedEnumTipoDeProdutoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDeProduto | EnumTipoDeProdutoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDeProduto[] | ListEnumTipoDeProdutoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDeProduto[] | ListEnumTipoDeProdutoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDeProdutoWithAggregatesFilter<$PrismaModel> | $Enums.TipoDeProduto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDeProdutoFilter<$PrismaModel>
    _max?: NestedEnumTipoDeProdutoFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoFilter<$PrismaModel> | $Enums.StatusPedido
  }

  export type NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPedidoFilter<$PrismaModel>
    _max?: NestedEnumStatusPedidoFilter<$PrismaModel>
  }

  export type FornecedorCreateWithoutUsuarioInput = {
    CNPJ: number
    Pedidos?: PedidoCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUncheckedCreateWithoutUsuarioInput = {
    CNPJ: number
    Pedidos?: PedidoUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorCreateOrConnectWithoutUsuarioInput = {
    where: FornecedorWhereUniqueInput
    create: XOR<FornecedorCreateWithoutUsuarioInput, FornecedorUncheckedCreateWithoutUsuarioInput>
  }

  export type GerenteDeProducaoCreateWithoutUsuarioInput = {
    Pedidos?: PedidoCreateNestedManyWithoutGerenteDeProducaoInput
  }

  export type GerenteDeProducaoUncheckedCreateWithoutUsuarioInput = {
    Pedidos?: PedidoUncheckedCreateNestedManyWithoutGerenteDeProducaoInput
  }

  export type GerenteDeProducaoCreateOrConnectWithoutUsuarioInput = {
    where: GerenteDeProducaoWhereUniqueInput
    create: XOR<GerenteDeProducaoCreateWithoutUsuarioInput, GerenteDeProducaoUncheckedCreateWithoutUsuarioInput>
  }

  export type GerenteDeEstoqueCreateWithoutUsuarioInput = {

  }

  export type GerenteDeEstoqueUncheckedCreateWithoutUsuarioInput = {

  }

  export type GerenteDeEstoqueCreateOrConnectWithoutUsuarioInput = {
    where: GerenteDeEstoqueWhereUniqueInput
    create: XOR<GerenteDeEstoqueCreateWithoutUsuarioInput, GerenteDeEstoqueUncheckedCreateWithoutUsuarioInput>
  }

  export type AdministradorCreateWithoutUsuarioInput = {

  }

  export type AdministradorUncheckedCreateWithoutUsuarioInput = {

  }

  export type AdministradorCreateOrConnectWithoutUsuarioInput = {
    where: AdministradorWhereUniqueInput
    create: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
  }

  export type FornecedorUpsertWithoutUsuarioInput = {
    update: XOR<FornecedorUpdateWithoutUsuarioInput, FornecedorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FornecedorCreateWithoutUsuarioInput, FornecedorUncheckedCreateWithoutUsuarioInput>
    where?: FornecedorWhereInput
  }

  export type FornecedorUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: FornecedorWhereInput
    data: XOR<FornecedorUpdateWithoutUsuarioInput, FornecedorUncheckedUpdateWithoutUsuarioInput>
  }

  export type FornecedorUpdateWithoutUsuarioInput = {
    CNPJ?: FloatFieldUpdateOperationsInput | number
    Pedidos?: PedidoUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorUncheckedUpdateWithoutUsuarioInput = {
    CNPJ?: FloatFieldUpdateOperationsInput | number
    Pedidos?: PedidoUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type GerenteDeProducaoUpsertWithoutUsuarioInput = {
    update: XOR<GerenteDeProducaoUpdateWithoutUsuarioInput, GerenteDeProducaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<GerenteDeProducaoCreateWithoutUsuarioInput, GerenteDeProducaoUncheckedCreateWithoutUsuarioInput>
    where?: GerenteDeProducaoWhereInput
  }

  export type GerenteDeProducaoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: GerenteDeProducaoWhereInput
    data: XOR<GerenteDeProducaoUpdateWithoutUsuarioInput, GerenteDeProducaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type GerenteDeProducaoUpdateWithoutUsuarioInput = {
    Pedidos?: PedidoUpdateManyWithoutGerenteDeProducaoNestedInput
  }

  export type GerenteDeProducaoUncheckedUpdateWithoutUsuarioInput = {
    Pedidos?: PedidoUncheckedUpdateManyWithoutGerenteDeProducaoNestedInput
  }

  export type GerenteDeEstoqueUpsertWithoutUsuarioInput = {
    update: XOR<GerenteDeEstoqueUpdateWithoutUsuarioInput, GerenteDeEstoqueUncheckedUpdateWithoutUsuarioInput>
    create: XOR<GerenteDeEstoqueCreateWithoutUsuarioInput, GerenteDeEstoqueUncheckedCreateWithoutUsuarioInput>
    where?: GerenteDeEstoqueWhereInput
  }

  export type GerenteDeEstoqueUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: GerenteDeEstoqueWhereInput
    data: XOR<GerenteDeEstoqueUpdateWithoutUsuarioInput, GerenteDeEstoqueUncheckedUpdateWithoutUsuarioInput>
  }

  export type GerenteDeEstoqueUpdateWithoutUsuarioInput = {

  }

  export type GerenteDeEstoqueUncheckedUpdateWithoutUsuarioInput = {

  }

  export type AdministradorUpsertWithoutUsuarioInput = {
    update: XOR<AdministradorUpdateWithoutUsuarioInput, AdministradorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    where?: AdministradorWhereInput
  }

  export type AdministradorUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: AdministradorWhereInput
    data: XOR<AdministradorUpdateWithoutUsuarioInput, AdministradorUncheckedUpdateWithoutUsuarioInput>
  }

  export type AdministradorUpdateWithoutUsuarioInput = {

  }

  export type AdministradorUncheckedUpdateWithoutUsuarioInput = {

  }

  export type UsuarioCreateWithoutFornecedorInput = {
    Nome: string
    Email: string
    Senha: string
    NiveldePermissao: number
    TipoDeUsuario: $Enums.TipoDeUsuario
    GerenteDeProducao?: GerenteDeProducaoCreateNestedOneWithoutUsuarioInput
    GerenteDeEstoque?: GerenteDeEstoqueCreateNestedOneWithoutUsuarioInput
    Administrador?: AdministradorCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFornecedorInput = {
    IdUsuario?: number
    Nome: string
    Email: string
    Senha: string
    NiveldePermissao: number
    TipoDeUsuario: $Enums.TipoDeUsuario
    GerenteDeProducao?: GerenteDeProducaoUncheckedCreateNestedOneWithoutUsuarioInput
    GerenteDeEstoque?: GerenteDeEstoqueUncheckedCreateNestedOneWithoutUsuarioInput
    Administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFornecedorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFornecedorInput, UsuarioUncheckedCreateWithoutFornecedorInput>
  }

  export type PedidoCreateWithoutFornecedorInput = {
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    Produtos?: ProdutoCreateNestedManyWithoutPedidoInput
    Transportadora?: TransportadoraCreateNestedOneWithoutPedidosInput
    GerenteDeProducao?: GerenteDeProducaoCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutFornecedorInput = {
    IdPedido?: number
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    TransportadoraId: number
    GerenteDeProducaoId: number
    Produtos?: ProdutoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutFornecedorInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutFornecedorInput, PedidoUncheckedCreateWithoutFornecedorInput>
  }

  export type PedidoCreateManyFornecedorInputEnvelope = {
    data: PedidoCreateManyFornecedorInput | PedidoCreateManyFornecedorInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutFornecedorInput = {
    update: XOR<UsuarioUpdateWithoutFornecedorInput, UsuarioUncheckedUpdateWithoutFornecedorInput>
    create: XOR<UsuarioCreateWithoutFornecedorInput, UsuarioUncheckedCreateWithoutFornecedorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFornecedorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFornecedorInput, UsuarioUncheckedUpdateWithoutFornecedorInput>
  }

  export type UsuarioUpdateWithoutFornecedorInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    NiveldePermissao?: IntFieldUpdateOperationsInput | number
    TipoDeUsuario?: EnumTipoDeUsuarioFieldUpdateOperationsInput | $Enums.TipoDeUsuario
    GerenteDeProducao?: GerenteDeProducaoUpdateOneWithoutUsuarioNestedInput
    GerenteDeEstoque?: GerenteDeEstoqueUpdateOneWithoutUsuarioNestedInput
    Administrador?: AdministradorUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFornecedorInput = {
    IdUsuario?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    NiveldePermissao?: IntFieldUpdateOperationsInput | number
    TipoDeUsuario?: EnumTipoDeUsuarioFieldUpdateOperationsInput | $Enums.TipoDeUsuario
    GerenteDeProducao?: GerenteDeProducaoUncheckedUpdateOneWithoutUsuarioNestedInput
    GerenteDeEstoque?: GerenteDeEstoqueUncheckedUpdateOneWithoutUsuarioNestedInput
    Administrador?: AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type PedidoUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutFornecedorInput, PedidoUncheckedUpdateWithoutFornecedorInput>
    create: XOR<PedidoCreateWithoutFornecedorInput, PedidoUncheckedCreateWithoutFornecedorInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutFornecedorInput, PedidoUncheckedUpdateWithoutFornecedorInput>
  }

  export type PedidoUpdateManyWithWhereWithoutFornecedorInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    IdPedido?: IntFilter<"Pedido"> | number
    Data?: DateTimeFilter<"Pedido"> | Date | string
    Status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFilter<"Pedido"> | string
    FornecedorId?: IntFilter<"Pedido"> | number
    TransportadoraId?: IntFilter<"Pedido"> | number
    GerenteDeProducaoId?: IntFilter<"Pedido"> | number
  }

  export type UsuarioCreateWithoutGerenteDeProducaoInput = {
    Nome: string
    Email: string
    Senha: string
    NiveldePermissao: number
    TipoDeUsuario: $Enums.TipoDeUsuario
    Fornecedor?: FornecedorCreateNestedOneWithoutUsuarioInput
    GerenteDeEstoque?: GerenteDeEstoqueCreateNestedOneWithoutUsuarioInput
    Administrador?: AdministradorCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutGerenteDeProducaoInput = {
    IdUsuario?: number
    Nome: string
    Email: string
    Senha: string
    NiveldePermissao: number
    TipoDeUsuario: $Enums.TipoDeUsuario
    Fornecedor?: FornecedorUncheckedCreateNestedOneWithoutUsuarioInput
    GerenteDeEstoque?: GerenteDeEstoqueUncheckedCreateNestedOneWithoutUsuarioInput
    Administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutGerenteDeProducaoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGerenteDeProducaoInput, UsuarioUncheckedCreateWithoutGerenteDeProducaoInput>
  }

  export type PedidoCreateWithoutGerenteDeProducaoInput = {
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    Produtos?: ProdutoCreateNestedManyWithoutPedidoInput
    Fornecedor?: FornecedorCreateNestedOneWithoutPedidosInput
    Transportadora?: TransportadoraCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutGerenteDeProducaoInput = {
    IdPedido?: number
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    FornecedorId: number
    TransportadoraId: number
    Produtos?: ProdutoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutGerenteDeProducaoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutGerenteDeProducaoInput, PedidoUncheckedCreateWithoutGerenteDeProducaoInput>
  }

  export type PedidoCreateManyGerenteDeProducaoInputEnvelope = {
    data: PedidoCreateManyGerenteDeProducaoInput | PedidoCreateManyGerenteDeProducaoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutGerenteDeProducaoInput = {
    update: XOR<UsuarioUpdateWithoutGerenteDeProducaoInput, UsuarioUncheckedUpdateWithoutGerenteDeProducaoInput>
    create: XOR<UsuarioCreateWithoutGerenteDeProducaoInput, UsuarioUncheckedCreateWithoutGerenteDeProducaoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutGerenteDeProducaoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutGerenteDeProducaoInput, UsuarioUncheckedUpdateWithoutGerenteDeProducaoInput>
  }

  export type UsuarioUpdateWithoutGerenteDeProducaoInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    NiveldePermissao?: IntFieldUpdateOperationsInput | number
    TipoDeUsuario?: EnumTipoDeUsuarioFieldUpdateOperationsInput | $Enums.TipoDeUsuario
    Fornecedor?: FornecedorUpdateOneWithoutUsuarioNestedInput
    GerenteDeEstoque?: GerenteDeEstoqueUpdateOneWithoutUsuarioNestedInput
    Administrador?: AdministradorUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutGerenteDeProducaoInput = {
    IdUsuario?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    NiveldePermissao?: IntFieldUpdateOperationsInput | number
    TipoDeUsuario?: EnumTipoDeUsuarioFieldUpdateOperationsInput | $Enums.TipoDeUsuario
    Fornecedor?: FornecedorUncheckedUpdateOneWithoutUsuarioNestedInput
    GerenteDeEstoque?: GerenteDeEstoqueUncheckedUpdateOneWithoutUsuarioNestedInput
    Administrador?: AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type PedidoUpsertWithWhereUniqueWithoutGerenteDeProducaoInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutGerenteDeProducaoInput, PedidoUncheckedUpdateWithoutGerenteDeProducaoInput>
    create: XOR<PedidoCreateWithoutGerenteDeProducaoInput, PedidoUncheckedCreateWithoutGerenteDeProducaoInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutGerenteDeProducaoInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutGerenteDeProducaoInput, PedidoUncheckedUpdateWithoutGerenteDeProducaoInput>
  }

  export type PedidoUpdateManyWithWhereWithoutGerenteDeProducaoInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutGerenteDeProducaoInput>
  }

  export type UsuarioCreateWithoutGerenteDeEstoqueInput = {
    Nome: string
    Email: string
    Senha: string
    NiveldePermissao: number
    TipoDeUsuario: $Enums.TipoDeUsuario
    Fornecedor?: FornecedorCreateNestedOneWithoutUsuarioInput
    GerenteDeProducao?: GerenteDeProducaoCreateNestedOneWithoutUsuarioInput
    Administrador?: AdministradorCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutGerenteDeEstoqueInput = {
    IdUsuario?: number
    Nome: string
    Email: string
    Senha: string
    NiveldePermissao: number
    TipoDeUsuario: $Enums.TipoDeUsuario
    Fornecedor?: FornecedorUncheckedCreateNestedOneWithoutUsuarioInput
    GerenteDeProducao?: GerenteDeProducaoUncheckedCreateNestedOneWithoutUsuarioInput
    Administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutGerenteDeEstoqueInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGerenteDeEstoqueInput, UsuarioUncheckedCreateWithoutGerenteDeEstoqueInput>
  }

  export type UsuarioUpsertWithoutGerenteDeEstoqueInput = {
    update: XOR<UsuarioUpdateWithoutGerenteDeEstoqueInput, UsuarioUncheckedUpdateWithoutGerenteDeEstoqueInput>
    create: XOR<UsuarioCreateWithoutGerenteDeEstoqueInput, UsuarioUncheckedCreateWithoutGerenteDeEstoqueInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutGerenteDeEstoqueInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutGerenteDeEstoqueInput, UsuarioUncheckedUpdateWithoutGerenteDeEstoqueInput>
  }

  export type UsuarioUpdateWithoutGerenteDeEstoqueInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    NiveldePermissao?: IntFieldUpdateOperationsInput | number
    TipoDeUsuario?: EnumTipoDeUsuarioFieldUpdateOperationsInput | $Enums.TipoDeUsuario
    Fornecedor?: FornecedorUpdateOneWithoutUsuarioNestedInput
    GerenteDeProducao?: GerenteDeProducaoUpdateOneWithoutUsuarioNestedInput
    Administrador?: AdministradorUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutGerenteDeEstoqueInput = {
    IdUsuario?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    NiveldePermissao?: IntFieldUpdateOperationsInput | number
    TipoDeUsuario?: EnumTipoDeUsuarioFieldUpdateOperationsInput | $Enums.TipoDeUsuario
    Fornecedor?: FornecedorUncheckedUpdateOneWithoutUsuarioNestedInput
    GerenteDeProducao?: GerenteDeProducaoUncheckedUpdateOneWithoutUsuarioNestedInput
    Administrador?: AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutAdministradorInput = {
    Nome: string
    Email: string
    Senha: string
    NiveldePermissao: number
    TipoDeUsuario: $Enums.TipoDeUsuario
    Fornecedor?: FornecedorCreateNestedOneWithoutUsuarioInput
    GerenteDeProducao?: GerenteDeProducaoCreateNestedOneWithoutUsuarioInput
    GerenteDeEstoque?: GerenteDeEstoqueCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAdministradorInput = {
    IdUsuario?: number
    Nome: string
    Email: string
    Senha: string
    NiveldePermissao: number
    TipoDeUsuario: $Enums.TipoDeUsuario
    Fornecedor?: FornecedorUncheckedCreateNestedOneWithoutUsuarioInput
    GerenteDeProducao?: GerenteDeProducaoUncheckedCreateNestedOneWithoutUsuarioInput
    GerenteDeEstoque?: GerenteDeEstoqueUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAdministradorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAdministradorInput, UsuarioUncheckedCreateWithoutAdministradorInput>
  }

  export type UsuarioUpsertWithoutAdministradorInput = {
    update: XOR<UsuarioUpdateWithoutAdministradorInput, UsuarioUncheckedUpdateWithoutAdministradorInput>
    create: XOR<UsuarioCreateWithoutAdministradorInput, UsuarioUncheckedCreateWithoutAdministradorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAdministradorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAdministradorInput, UsuarioUncheckedUpdateWithoutAdministradorInput>
  }

  export type UsuarioUpdateWithoutAdministradorInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    NiveldePermissao?: IntFieldUpdateOperationsInput | number
    TipoDeUsuario?: EnumTipoDeUsuarioFieldUpdateOperationsInput | $Enums.TipoDeUsuario
    Fornecedor?: FornecedorUpdateOneWithoutUsuarioNestedInput
    GerenteDeProducao?: GerenteDeProducaoUpdateOneWithoutUsuarioNestedInput
    GerenteDeEstoque?: GerenteDeEstoqueUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAdministradorInput = {
    IdUsuario?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    NiveldePermissao?: IntFieldUpdateOperationsInput | number
    TipoDeUsuario?: EnumTipoDeUsuarioFieldUpdateOperationsInput | $Enums.TipoDeUsuario
    Fornecedor?: FornecedorUncheckedUpdateOneWithoutUsuarioNestedInput
    GerenteDeProducao?: GerenteDeProducaoUncheckedUpdateOneWithoutUsuarioNestedInput
    GerenteDeEstoque?: GerenteDeEstoqueUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type ProdutoLoteCreateWithoutProdutoInput = {
    Lote: LoteCreateNestedOneWithoutProdutoLoteInput
  }

  export type ProdutoLoteUncheckedCreateWithoutProdutoInput = {
    loteId: number
  }

  export type ProdutoLoteCreateOrConnectWithoutProdutoInput = {
    where: ProdutoLoteWhereUniqueInput
    create: XOR<ProdutoLoteCreateWithoutProdutoInput, ProdutoLoteUncheckedCreateWithoutProdutoInput>
  }

  export type ProdutoLoteCreateManyProdutoInputEnvelope = {
    data: ProdutoLoteCreateManyProdutoInput | ProdutoLoteCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutProdutosInput = {
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    Fornecedor?: FornecedorCreateNestedOneWithoutPedidosInput
    Transportadora?: TransportadoraCreateNestedOneWithoutPedidosInput
    GerenteDeProducao?: GerenteDeProducaoCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutProdutosInput = {
    IdPedido?: number
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    FornecedorId: number
    TransportadoraId: number
    GerenteDeProducaoId: number
  }

  export type PedidoCreateOrConnectWithoutProdutosInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutProdutosInput, PedidoUncheckedCreateWithoutProdutosInput>
  }

  export type LoteCreateWithoutProdutosInput = {
    Data: Date | string
    Quantidade: number
    Estoque: EstoqueCreateNestedOneWithoutLotesInput
    ProdutoLote?: ProdutoLoteCreateNestedManyWithoutLoteInput
  }

  export type LoteUncheckedCreateWithoutProdutosInput = {
    IdLote?: number
    Data: Date | string
    Quantidade: number
    EstoqueId: number
    ProdutoLote?: ProdutoLoteUncheckedCreateNestedManyWithoutLoteInput
  }

  export type LoteCreateOrConnectWithoutProdutosInput = {
    where: LoteWhereUniqueInput
    create: XOR<LoteCreateWithoutProdutosInput, LoteUncheckedCreateWithoutProdutosInput>
  }

  export type ProdutoLoteUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ProdutoLoteWhereUniqueInput
    update: XOR<ProdutoLoteUpdateWithoutProdutoInput, ProdutoLoteUncheckedUpdateWithoutProdutoInput>
    create: XOR<ProdutoLoteCreateWithoutProdutoInput, ProdutoLoteUncheckedCreateWithoutProdutoInput>
  }

  export type ProdutoLoteUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ProdutoLoteWhereUniqueInput
    data: XOR<ProdutoLoteUpdateWithoutProdutoInput, ProdutoLoteUncheckedUpdateWithoutProdutoInput>
  }

  export type ProdutoLoteUpdateManyWithWhereWithoutProdutoInput = {
    where: ProdutoLoteScalarWhereInput
    data: XOR<ProdutoLoteUpdateManyMutationInput, ProdutoLoteUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ProdutoLoteScalarWhereInput = {
    AND?: ProdutoLoteScalarWhereInput | ProdutoLoteScalarWhereInput[]
    OR?: ProdutoLoteScalarWhereInput[]
    NOT?: ProdutoLoteScalarWhereInput | ProdutoLoteScalarWhereInput[]
    produtoId?: IntFilter<"ProdutoLote"> | number
    loteId?: IntFilter<"ProdutoLote"> | number
  }

  export type PedidoUpsertWithoutProdutosInput = {
    update: XOR<PedidoUpdateWithoutProdutosInput, PedidoUncheckedUpdateWithoutProdutosInput>
    create: XOR<PedidoCreateWithoutProdutosInput, PedidoUncheckedCreateWithoutProdutosInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutProdutosInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutProdutosInput, PedidoUncheckedUpdateWithoutProdutosInput>
  }

  export type PedidoUpdateWithoutProdutosInput = {
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    Fornecedor?: FornecedorUpdateOneWithoutPedidosNestedInput
    Transportadora?: TransportadoraUpdateOneWithoutPedidosNestedInput
    GerenteDeProducao?: GerenteDeProducaoUpdateOneWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutProdutosInput = {
    IdPedido?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    FornecedorId?: IntFieldUpdateOperationsInput | number
    TransportadoraId?: IntFieldUpdateOperationsInput | number
    GerenteDeProducaoId?: IntFieldUpdateOperationsInput | number
  }

  export type LoteUpsertWithWhereUniqueWithoutProdutosInput = {
    where: LoteWhereUniqueInput
    update: XOR<LoteUpdateWithoutProdutosInput, LoteUncheckedUpdateWithoutProdutosInput>
    create: XOR<LoteCreateWithoutProdutosInput, LoteUncheckedCreateWithoutProdutosInput>
  }

  export type LoteUpdateWithWhereUniqueWithoutProdutosInput = {
    where: LoteWhereUniqueInput
    data: XOR<LoteUpdateWithoutProdutosInput, LoteUncheckedUpdateWithoutProdutosInput>
  }

  export type LoteUpdateManyWithWhereWithoutProdutosInput = {
    where: LoteScalarWhereInput
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyWithoutProdutosInput>
  }

  export type LoteScalarWhereInput = {
    AND?: LoteScalarWhereInput | LoteScalarWhereInput[]
    OR?: LoteScalarWhereInput[]
    NOT?: LoteScalarWhereInput | LoteScalarWhereInput[]
    IdLote?: IntFilter<"Lote"> | number
    Data?: DateTimeFilter<"Lote"> | Date | string
    Quantidade?: IntFilter<"Lote"> | number
    EstoqueId?: IntFilter<"Lote"> | number
  }

  export type EstoqueCreateWithoutLotesInput = {
    Reposicao: boolean
    Endereco: string
  }

  export type EstoqueUncheckedCreateWithoutLotesInput = {
    IdEstoque?: number
    Reposicao: boolean
    Endereco: string
  }

  export type EstoqueCreateOrConnectWithoutLotesInput = {
    where: EstoqueWhereUniqueInput
    create: XOR<EstoqueCreateWithoutLotesInput, EstoqueUncheckedCreateWithoutLotesInput>
  }

  export type ProdutoLoteCreateWithoutLoteInput = {
    Produto: ProdutoCreateNestedOneWithoutProdutoLoteInput
  }

  export type ProdutoLoteUncheckedCreateWithoutLoteInput = {
    produtoId: number
  }

  export type ProdutoLoteCreateOrConnectWithoutLoteInput = {
    where: ProdutoLoteWhereUniqueInput
    create: XOR<ProdutoLoteCreateWithoutLoteInput, ProdutoLoteUncheckedCreateWithoutLoteInput>
  }

  export type ProdutoLoteCreateManyLoteInputEnvelope = {
    data: ProdutoLoteCreateManyLoteInput | ProdutoLoteCreateManyLoteInput[]
    skipDuplicates?: boolean
  }

  export type ProdutoCreateWithoutLoteInput = {
    Nome: string
    Quantidade: number
    Tipo: $Enums.TipoDeProduto
    ProdutoLote?: ProdutoLoteCreateNestedManyWithoutProdutoInput
    Pedido?: PedidoCreateNestedOneWithoutProdutosInput
  }

  export type ProdutoUncheckedCreateWithoutLoteInput = {
    IdProduto?: number
    Nome: string
    Quantidade: number
    Tipo: $Enums.TipoDeProduto
    PedidoId?: number | null
    ProdutoLote?: ProdutoLoteUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutLoteInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutLoteInput, ProdutoUncheckedCreateWithoutLoteInput>
  }

  export type EstoqueUpsertWithoutLotesInput = {
    update: XOR<EstoqueUpdateWithoutLotesInput, EstoqueUncheckedUpdateWithoutLotesInput>
    create: XOR<EstoqueCreateWithoutLotesInput, EstoqueUncheckedCreateWithoutLotesInput>
    where?: EstoqueWhereInput
  }

  export type EstoqueUpdateToOneWithWhereWithoutLotesInput = {
    where?: EstoqueWhereInput
    data: XOR<EstoqueUpdateWithoutLotesInput, EstoqueUncheckedUpdateWithoutLotesInput>
  }

  export type EstoqueUpdateWithoutLotesInput = {
    Reposicao?: BoolFieldUpdateOperationsInput | boolean
    Endereco?: StringFieldUpdateOperationsInput | string
  }

  export type EstoqueUncheckedUpdateWithoutLotesInput = {
    IdEstoque?: IntFieldUpdateOperationsInput | number
    Reposicao?: BoolFieldUpdateOperationsInput | boolean
    Endereco?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoLoteUpsertWithWhereUniqueWithoutLoteInput = {
    where: ProdutoLoteWhereUniqueInput
    update: XOR<ProdutoLoteUpdateWithoutLoteInput, ProdutoLoteUncheckedUpdateWithoutLoteInput>
    create: XOR<ProdutoLoteCreateWithoutLoteInput, ProdutoLoteUncheckedCreateWithoutLoteInput>
  }

  export type ProdutoLoteUpdateWithWhereUniqueWithoutLoteInput = {
    where: ProdutoLoteWhereUniqueInput
    data: XOR<ProdutoLoteUpdateWithoutLoteInput, ProdutoLoteUncheckedUpdateWithoutLoteInput>
  }

  export type ProdutoLoteUpdateManyWithWhereWithoutLoteInput = {
    where: ProdutoLoteScalarWhereInput
    data: XOR<ProdutoLoteUpdateManyMutationInput, ProdutoLoteUncheckedUpdateManyWithoutLoteInput>
  }

  export type ProdutoUpsertWithWhereUniqueWithoutLoteInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutLoteInput, ProdutoUncheckedUpdateWithoutLoteInput>
    create: XOR<ProdutoCreateWithoutLoteInput, ProdutoUncheckedCreateWithoutLoteInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutLoteInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutLoteInput, ProdutoUncheckedUpdateWithoutLoteInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutLoteInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutLoteInput>
  }

  export type ProdutoScalarWhereInput = {
    AND?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    OR?: ProdutoScalarWhereInput[]
    NOT?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    IdProduto?: IntFilter<"Produto"> | number
    Nome?: StringFilter<"Produto"> | string
    Quantidade?: IntFilter<"Produto"> | number
    Tipo?: EnumTipoDeProdutoFilter<"Produto"> | $Enums.TipoDeProduto
    PedidoId?: IntNullableFilter<"Produto"> | number | null
  }

  export type ProdutoCreateWithoutProdutoLoteInput = {
    Nome: string
    Quantidade: number
    Tipo: $Enums.TipoDeProduto
    Pedido?: PedidoCreateNestedOneWithoutProdutosInput
    Lote?: LoteCreateNestedManyWithoutProdutosInput
  }

  export type ProdutoUncheckedCreateWithoutProdutoLoteInput = {
    IdProduto?: number
    Nome: string
    Quantidade: number
    Tipo: $Enums.TipoDeProduto
    PedidoId?: number | null
    Lote?: LoteUncheckedCreateNestedManyWithoutProdutosInput
  }

  export type ProdutoCreateOrConnectWithoutProdutoLoteInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutProdutoLoteInput, ProdutoUncheckedCreateWithoutProdutoLoteInput>
  }

  export type LoteCreateWithoutProdutoLoteInput = {
    Data: Date | string
    Quantidade: number
    Estoque: EstoqueCreateNestedOneWithoutLotesInput
    Produtos?: ProdutoCreateNestedManyWithoutLoteInput
  }

  export type LoteUncheckedCreateWithoutProdutoLoteInput = {
    IdLote?: number
    Data: Date | string
    Quantidade: number
    EstoqueId: number
    Produtos?: ProdutoUncheckedCreateNestedManyWithoutLoteInput
  }

  export type LoteCreateOrConnectWithoutProdutoLoteInput = {
    where: LoteWhereUniqueInput
    create: XOR<LoteCreateWithoutProdutoLoteInput, LoteUncheckedCreateWithoutProdutoLoteInput>
  }

  export type ProdutoUpsertWithoutProdutoLoteInput = {
    update: XOR<ProdutoUpdateWithoutProdutoLoteInput, ProdutoUncheckedUpdateWithoutProdutoLoteInput>
    create: XOR<ProdutoCreateWithoutProdutoLoteInput, ProdutoUncheckedCreateWithoutProdutoLoteInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutProdutoLoteInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutProdutoLoteInput, ProdutoUncheckedUpdateWithoutProdutoLoteInput>
  }

  export type ProdutoUpdateWithoutProdutoLoteInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Tipo?: EnumTipoDeProdutoFieldUpdateOperationsInput | $Enums.TipoDeProduto
    Pedido?: PedidoUpdateOneWithoutProdutosNestedInput
    Lote?: LoteUpdateManyWithoutProdutosNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutProdutoLoteInput = {
    IdProduto?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Tipo?: EnumTipoDeProdutoFieldUpdateOperationsInput | $Enums.TipoDeProduto
    PedidoId?: NullableIntFieldUpdateOperationsInput | number | null
    Lote?: LoteUncheckedUpdateManyWithoutProdutosNestedInput
  }

  export type LoteUpsertWithoutProdutoLoteInput = {
    update: XOR<LoteUpdateWithoutProdutoLoteInput, LoteUncheckedUpdateWithoutProdutoLoteInput>
    create: XOR<LoteCreateWithoutProdutoLoteInput, LoteUncheckedCreateWithoutProdutoLoteInput>
    where?: LoteWhereInput
  }

  export type LoteUpdateToOneWithWhereWithoutProdutoLoteInput = {
    where?: LoteWhereInput
    data: XOR<LoteUpdateWithoutProdutoLoteInput, LoteUncheckedUpdateWithoutProdutoLoteInput>
  }

  export type LoteUpdateWithoutProdutoLoteInput = {
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Estoque?: EstoqueUpdateOneRequiredWithoutLotesNestedInput
    Produtos?: ProdutoUpdateManyWithoutLoteNestedInput
  }

  export type LoteUncheckedUpdateWithoutProdutoLoteInput = {
    IdLote?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    EstoqueId?: IntFieldUpdateOperationsInput | number
    Produtos?: ProdutoUncheckedUpdateManyWithoutLoteNestedInput
  }

  export type LoteCreateWithoutEstoqueInput = {
    Data: Date | string
    Quantidade: number
    ProdutoLote?: ProdutoLoteCreateNestedManyWithoutLoteInput
    Produtos?: ProdutoCreateNestedManyWithoutLoteInput
  }

  export type LoteUncheckedCreateWithoutEstoqueInput = {
    IdLote?: number
    Data: Date | string
    Quantidade: number
    ProdutoLote?: ProdutoLoteUncheckedCreateNestedManyWithoutLoteInput
    Produtos?: ProdutoUncheckedCreateNestedManyWithoutLoteInput
  }

  export type LoteCreateOrConnectWithoutEstoqueInput = {
    where: LoteWhereUniqueInput
    create: XOR<LoteCreateWithoutEstoqueInput, LoteUncheckedCreateWithoutEstoqueInput>
  }

  export type LoteCreateManyEstoqueInputEnvelope = {
    data: LoteCreateManyEstoqueInput | LoteCreateManyEstoqueInput[]
    skipDuplicates?: boolean
  }

  export type LoteUpsertWithWhereUniqueWithoutEstoqueInput = {
    where: LoteWhereUniqueInput
    update: XOR<LoteUpdateWithoutEstoqueInput, LoteUncheckedUpdateWithoutEstoqueInput>
    create: XOR<LoteCreateWithoutEstoqueInput, LoteUncheckedCreateWithoutEstoqueInput>
  }

  export type LoteUpdateWithWhereUniqueWithoutEstoqueInput = {
    where: LoteWhereUniqueInput
    data: XOR<LoteUpdateWithoutEstoqueInput, LoteUncheckedUpdateWithoutEstoqueInput>
  }

  export type LoteUpdateManyWithWhereWithoutEstoqueInput = {
    where: LoteScalarWhereInput
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyWithoutEstoqueInput>
  }

  export type ProdutoCreateWithoutPedidoInput = {
    Nome: string
    Quantidade: number
    Tipo: $Enums.TipoDeProduto
    ProdutoLote?: ProdutoLoteCreateNestedManyWithoutProdutoInput
    Lote?: LoteCreateNestedManyWithoutProdutosInput
  }

  export type ProdutoUncheckedCreateWithoutPedidoInput = {
    IdProduto?: number
    Nome: string
    Quantidade: number
    Tipo: $Enums.TipoDeProduto
    ProdutoLote?: ProdutoLoteUncheckedCreateNestedManyWithoutProdutoInput
    Lote?: LoteUncheckedCreateNestedManyWithoutProdutosInput
  }

  export type ProdutoCreateOrConnectWithoutPedidoInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutPedidoInput, ProdutoUncheckedCreateWithoutPedidoInput>
  }

  export type ProdutoCreateManyPedidoInputEnvelope = {
    data: ProdutoCreateManyPedidoInput | ProdutoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type FornecedorCreateWithoutPedidosInput = {
    CNPJ: number
    Usuario?: UsuarioCreateNestedOneWithoutFornecedorInput
  }

  export type FornecedorUncheckedCreateWithoutPedidosInput = {
    IdFornecedor?: number
    CNPJ: number
  }

  export type FornecedorCreateOrConnectWithoutPedidosInput = {
    where: FornecedorWhereUniqueInput
    create: XOR<FornecedorCreateWithoutPedidosInput, FornecedorUncheckedCreateWithoutPedidosInput>
  }

  export type TransportadoraCreateWithoutPedidosInput = {
    Nome: string
    Endereco: string
  }

  export type TransportadoraUncheckedCreateWithoutPedidosInput = {
    IdTransportadora?: number
    Nome: string
    Endereco: string
  }

  export type TransportadoraCreateOrConnectWithoutPedidosInput = {
    where: TransportadoraWhereUniqueInput
    create: XOR<TransportadoraCreateWithoutPedidosInput, TransportadoraUncheckedCreateWithoutPedidosInput>
  }

  export type GerenteDeProducaoCreateWithoutPedidosInput = {
    Usuario?: UsuarioCreateNestedOneWithoutGerenteDeProducaoInput
  }

  export type GerenteDeProducaoUncheckedCreateWithoutPedidosInput = {
    IdGerenteDeProducao?: number
  }

  export type GerenteDeProducaoCreateOrConnectWithoutPedidosInput = {
    where: GerenteDeProducaoWhereUniqueInput
    create: XOR<GerenteDeProducaoCreateWithoutPedidosInput, GerenteDeProducaoUncheckedCreateWithoutPedidosInput>
  }

  export type ProdutoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutPedidoInput, ProdutoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ProdutoCreateWithoutPedidoInput, ProdutoUncheckedCreateWithoutPedidoInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutPedidoInput, ProdutoUncheckedUpdateWithoutPedidoInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutPedidoInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type FornecedorUpsertWithoutPedidosInput = {
    update: XOR<FornecedorUpdateWithoutPedidosInput, FornecedorUncheckedUpdateWithoutPedidosInput>
    create: XOR<FornecedorCreateWithoutPedidosInput, FornecedorUncheckedCreateWithoutPedidosInput>
    where?: FornecedorWhereInput
  }

  export type FornecedorUpdateToOneWithWhereWithoutPedidosInput = {
    where?: FornecedorWhereInput
    data: XOR<FornecedorUpdateWithoutPedidosInput, FornecedorUncheckedUpdateWithoutPedidosInput>
  }

  export type FornecedorUpdateWithoutPedidosInput = {
    CNPJ?: FloatFieldUpdateOperationsInput | number
    Usuario?: UsuarioUpdateOneRequiredWithoutFornecedorNestedInput
  }

  export type FornecedorUncheckedUpdateWithoutPedidosInput = {
    IdFornecedor?: IntFieldUpdateOperationsInput | number
    CNPJ?: FloatFieldUpdateOperationsInput | number
  }

  export type TransportadoraUpsertWithoutPedidosInput = {
    update: XOR<TransportadoraUpdateWithoutPedidosInput, TransportadoraUncheckedUpdateWithoutPedidosInput>
    create: XOR<TransportadoraCreateWithoutPedidosInput, TransportadoraUncheckedCreateWithoutPedidosInput>
    where?: TransportadoraWhereInput
  }

  export type TransportadoraUpdateToOneWithWhereWithoutPedidosInput = {
    where?: TransportadoraWhereInput
    data: XOR<TransportadoraUpdateWithoutPedidosInput, TransportadoraUncheckedUpdateWithoutPedidosInput>
  }

  export type TransportadoraUpdateWithoutPedidosInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Endereco?: StringFieldUpdateOperationsInput | string
  }

  export type TransportadoraUncheckedUpdateWithoutPedidosInput = {
    IdTransportadora?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Endereco?: StringFieldUpdateOperationsInput | string
  }

  export type GerenteDeProducaoUpsertWithoutPedidosInput = {
    update: XOR<GerenteDeProducaoUpdateWithoutPedidosInput, GerenteDeProducaoUncheckedUpdateWithoutPedidosInput>
    create: XOR<GerenteDeProducaoCreateWithoutPedidosInput, GerenteDeProducaoUncheckedCreateWithoutPedidosInput>
    where?: GerenteDeProducaoWhereInput
  }

  export type GerenteDeProducaoUpdateToOneWithWhereWithoutPedidosInput = {
    where?: GerenteDeProducaoWhereInput
    data: XOR<GerenteDeProducaoUpdateWithoutPedidosInput, GerenteDeProducaoUncheckedUpdateWithoutPedidosInput>
  }

  export type GerenteDeProducaoUpdateWithoutPedidosInput = {
    Usuario?: UsuarioUpdateOneRequiredWithoutGerenteDeProducaoNestedInput
  }

  export type GerenteDeProducaoUncheckedUpdateWithoutPedidosInput = {
    IdGerenteDeProducao?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateWithoutTransportadoraInput = {
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    Produtos?: ProdutoCreateNestedManyWithoutPedidoInput
    Fornecedor?: FornecedorCreateNestedOneWithoutPedidosInput
    GerenteDeProducao?: GerenteDeProducaoCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutTransportadoraInput = {
    IdPedido?: number
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    FornecedorId: number
    GerenteDeProducaoId: number
    Produtos?: ProdutoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutTransportadoraInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutTransportadoraInput, PedidoUncheckedCreateWithoutTransportadoraInput>
  }

  export type PedidoCreateManyTransportadoraInputEnvelope = {
    data: PedidoCreateManyTransportadoraInput | PedidoCreateManyTransportadoraInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutTransportadoraInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutTransportadoraInput, PedidoUncheckedUpdateWithoutTransportadoraInput>
    create: XOR<PedidoCreateWithoutTransportadoraInput, PedidoUncheckedCreateWithoutTransportadoraInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutTransportadoraInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutTransportadoraInput, PedidoUncheckedUpdateWithoutTransportadoraInput>
  }

  export type PedidoUpdateManyWithWhereWithoutTransportadoraInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutTransportadoraInput>
  }

  export type PedidoCreateManyFornecedorInput = {
    IdPedido?: number
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    TransportadoraId: number
    GerenteDeProducaoId: number
  }

  export type PedidoUpdateWithoutFornecedorInput = {
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    Produtos?: ProdutoUpdateManyWithoutPedidoNestedInput
    Transportadora?: TransportadoraUpdateOneWithoutPedidosNestedInput
    GerenteDeProducao?: GerenteDeProducaoUpdateOneWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutFornecedorInput = {
    IdPedido?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    TransportadoraId?: IntFieldUpdateOperationsInput | number
    GerenteDeProducaoId?: IntFieldUpdateOperationsInput | number
    Produtos?: ProdutoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutFornecedorInput = {
    IdPedido?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    TransportadoraId?: IntFieldUpdateOperationsInput | number
    GerenteDeProducaoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateManyGerenteDeProducaoInput = {
    IdPedido?: number
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    FornecedorId: number
    TransportadoraId: number
  }

  export type PedidoUpdateWithoutGerenteDeProducaoInput = {
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    Produtos?: ProdutoUpdateManyWithoutPedidoNestedInput
    Fornecedor?: FornecedorUpdateOneWithoutPedidosNestedInput
    Transportadora?: TransportadoraUpdateOneWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutGerenteDeProducaoInput = {
    IdPedido?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    FornecedorId?: IntFieldUpdateOperationsInput | number
    TransportadoraId?: IntFieldUpdateOperationsInput | number
    Produtos?: ProdutoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutGerenteDeProducaoInput = {
    IdPedido?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    FornecedorId?: IntFieldUpdateOperationsInput | number
    TransportadoraId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoLoteCreateManyProdutoInput = {
    loteId: number
  }

  export type ProdutoLoteUpdateWithoutProdutoInput = {
    Lote?: LoteUpdateOneRequiredWithoutProdutoLoteNestedInput
  }

  export type ProdutoLoteUncheckedUpdateWithoutProdutoInput = {
    loteId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoLoteUncheckedUpdateManyWithoutProdutoInput = {
    loteId?: IntFieldUpdateOperationsInput | number
  }

  export type LoteUpdateWithoutProdutosInput = {
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Estoque?: EstoqueUpdateOneRequiredWithoutLotesNestedInput
    ProdutoLote?: ProdutoLoteUpdateManyWithoutLoteNestedInput
  }

  export type LoteUncheckedUpdateWithoutProdutosInput = {
    IdLote?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    EstoqueId?: IntFieldUpdateOperationsInput | number
    ProdutoLote?: ProdutoLoteUncheckedUpdateManyWithoutLoteNestedInput
  }

  export type LoteUncheckedUpdateManyWithoutProdutosInput = {
    IdLote?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    EstoqueId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoLoteCreateManyLoteInput = {
    produtoId: number
  }

  export type ProdutoLoteUpdateWithoutLoteInput = {
    Produto?: ProdutoUpdateOneRequiredWithoutProdutoLoteNestedInput
  }

  export type ProdutoLoteUncheckedUpdateWithoutLoteInput = {
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoLoteUncheckedUpdateManyWithoutLoteInput = {
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoUpdateWithoutLoteInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Tipo?: EnumTipoDeProdutoFieldUpdateOperationsInput | $Enums.TipoDeProduto
    ProdutoLote?: ProdutoLoteUpdateManyWithoutProdutoNestedInput
    Pedido?: PedidoUpdateOneWithoutProdutosNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutLoteInput = {
    IdProduto?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Tipo?: EnumTipoDeProdutoFieldUpdateOperationsInput | $Enums.TipoDeProduto
    PedidoId?: NullableIntFieldUpdateOperationsInput | number | null
    ProdutoLote?: ProdutoLoteUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutLoteInput = {
    IdProduto?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Tipo?: EnumTipoDeProdutoFieldUpdateOperationsInput | $Enums.TipoDeProduto
    PedidoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LoteCreateManyEstoqueInput = {
    IdLote?: number
    Data: Date | string
    Quantidade: number
  }

  export type LoteUpdateWithoutEstoqueInput = {
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    ProdutoLote?: ProdutoLoteUpdateManyWithoutLoteNestedInput
    Produtos?: ProdutoUpdateManyWithoutLoteNestedInput
  }

  export type LoteUncheckedUpdateWithoutEstoqueInput = {
    IdLote?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    ProdutoLote?: ProdutoLoteUncheckedUpdateManyWithoutLoteNestedInput
    Produtos?: ProdutoUncheckedUpdateManyWithoutLoteNestedInput
  }

  export type LoteUncheckedUpdateManyWithoutEstoqueInput = {
    IdLote?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoCreateManyPedidoInput = {
    IdProduto?: number
    Nome: string
    Quantidade: number
    Tipo: $Enums.TipoDeProduto
  }

  export type ProdutoUpdateWithoutPedidoInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Tipo?: EnumTipoDeProdutoFieldUpdateOperationsInput | $Enums.TipoDeProduto
    ProdutoLote?: ProdutoLoteUpdateManyWithoutProdutoNestedInput
    Lote?: LoteUpdateManyWithoutProdutosNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutPedidoInput = {
    IdProduto?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Tipo?: EnumTipoDeProdutoFieldUpdateOperationsInput | $Enums.TipoDeProduto
    ProdutoLote?: ProdutoLoteUncheckedUpdateManyWithoutProdutoNestedInput
    Lote?: LoteUncheckedUpdateManyWithoutProdutosNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutPedidoInput = {
    IdProduto?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Quantidade?: IntFieldUpdateOperationsInput | number
    Tipo?: EnumTipoDeProdutoFieldUpdateOperationsInput | $Enums.TipoDeProduto
  }

  export type PedidoCreateManyTransportadoraInput = {
    IdPedido?: number
    Data: Date | string
    Status: $Enums.StatusPedido
    EnderecoDeEntrega: string
    FornecedorId: number
    GerenteDeProducaoId: number
  }

  export type PedidoUpdateWithoutTransportadoraInput = {
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    Produtos?: ProdutoUpdateManyWithoutPedidoNestedInput
    Fornecedor?: FornecedorUpdateOneWithoutPedidosNestedInput
    GerenteDeProducao?: GerenteDeProducaoUpdateOneWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutTransportadoraInput = {
    IdPedido?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    FornecedorId?: IntFieldUpdateOperationsInput | number
    GerenteDeProducaoId?: IntFieldUpdateOperationsInput | number
    Produtos?: ProdutoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutTransportadoraInput = {
    IdPedido?: IntFieldUpdateOperationsInput | number
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    EnderecoDeEntrega?: StringFieldUpdateOperationsInput | string
    FornecedorId?: IntFieldUpdateOperationsInput | number
    GerenteDeProducaoId?: IntFieldUpdateOperationsInput | number
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