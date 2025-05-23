
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.7.0
 * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
 */
Prisma.prismaVersion = {
  client: "6.7.0",
  engine: "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsuarioScalarFieldEnum = {
  IdUsuario: 'IdUsuario',
  Nome: 'Nome',
  Email: 'Email',
  Senha: 'Senha',
  NiveldePermissao: 'NiveldePermissao',
  TipoDeUsuario: 'TipoDeUsuario'
};

exports.Prisma.FornecedorScalarFieldEnum = {
  IdFornecedor: 'IdFornecedor',
  CNPJ: 'CNPJ'
};

exports.Prisma.GerenteDeProducaoScalarFieldEnum = {
  IdGerenteDeProducao: 'IdGerenteDeProducao'
};

exports.Prisma.GerenteDeEstoqueScalarFieldEnum = {
  IdGerenteDeEstoque: 'IdGerenteDeEstoque'
};

exports.Prisma.AdministradorScalarFieldEnum = {
  IdAdministrador: 'IdAdministrador'
};

exports.Prisma.ProdutoScalarFieldEnum = {
  IdProduto: 'IdProduto',
  Nome: 'Nome',
  Quantidade: 'Quantidade',
  Tipo: 'Tipo',
  PedidoId: 'PedidoId'
};

exports.Prisma.LoteScalarFieldEnum = {
  IdLote: 'IdLote',
  Data: 'Data',
  Quantidade: 'Quantidade',
  EstoqueId: 'EstoqueId'
};

exports.Prisma.ProdutoLoteScalarFieldEnum = {
  produtoId: 'produtoId',
  loteId: 'loteId'
};

exports.Prisma.EstoqueScalarFieldEnum = {
  IdEstoque: 'IdEstoque',
  Reposicao: 'Reposicao',
  Endereco: 'Endereco'
};

exports.Prisma.PedidoScalarFieldEnum = {
  IdPedido: 'IdPedido',
  Data: 'Data',
  Status: 'Status',
  EnderecoDeEntrega: 'EnderecoDeEntrega',
  FornecedorId: 'FornecedorId',
  TransportadoraId: 'TransportadoraId',
  GerenteDeProducaoId: 'GerenteDeProducaoId'
};

exports.Prisma.TransportadoraScalarFieldEnum = {
  IdTransportadora: 'IdTransportadora',
  Nome: 'Nome',
  Endereco: 'Endereco'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.TipoDeUsuario = exports.$Enums.TipoDeUsuario = {
  Administrador: 'Administrador',
  GerenteDeEstoque: 'GerenteDeEstoque',
  GerenteDeProducao: 'GerenteDeProducao',
  Fornecedor: 'Fornecedor'
};

exports.TipoDeProduto = exports.$Enums.TipoDeProduto = {
  ProdutoFinal: 'ProdutoFinal',
  MateriaPrima: 'MateriaPrima'
};

exports.StatusPedido = exports.$Enums.StatusPedido = {
  Pendente: 'Pendente',
  EmTransporte: 'EmTransporte',
  Entregue: 'Entregue'
};

exports.Prisma.ModelName = {
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
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Steva\\OneDrive\\Área de Trabalho\\Projeto Sistema de Estoque\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Steva\\OneDrive\\Área de Trabalho\\Projeto Sistema de Estoque\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.7.0",
  "engineVersion": "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "postgresql://Stevan:ProjectFabricStock@localhost:5432/thor?schema=public"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nenum TipoDeUsuario {\n  Administrador\n  GerenteDeEstoque\n  GerenteDeProducao\n  Fornecedor\n}\n\nmodel Usuario {\n  IdUsuario         Int                @id @default(autoincrement())\n  Nome              String\n  Email             String             @unique\n  Senha             String\n  NiveldePermissao  Int\n  TipoDeUsuario     TipoDeUsuario\n  Fornecedor        Fornecedor?        @relation(\"Fornecedor\")\n  GerenteDeProducao GerenteDeProducao? @relation(\"GerenteDeProducao\")\n  GerenteDeEstoque  GerenteDeEstoque?  @relation(\"GerenteDeEstoque\")\n  Administrador     Administrador?     @relation(\"Administrador\")\n}\n\nmodel Fornecedor {\n  IdFornecedor Int      @id @default(autoincrement())\n  Usuario      Usuario  @relation(\"Fornecedor\", fields: [IdFornecedor], references: [IdUsuario])\n  CNPJ         Float    @unique\n  Pedidos      Pedido[]\n}\n\nmodel GerenteDeProducao {\n  IdGerenteDeProducao Int      @id @default(autoincrement())\n  Usuario             Usuario  @relation(\"GerenteDeProducao\", fields: [IdGerenteDeProducao], references: [IdUsuario])\n  Pedidos             Pedido[]\n}\n\nmodel GerenteDeEstoque {\n  IdGerenteDeEstoque Int     @id @default(autoincrement())\n  Usuario            Usuario @relation(\"GerenteDeEstoque\", fields: [IdGerenteDeEstoque], references: [IdUsuario])\n}\n\nmodel Administrador {\n  IdAdministrador Int     @id @default(autoincrement())\n  Usuario         Usuario @relation(\"Administrador\", fields: [IdAdministrador], references: [IdUsuario])\n}\n\nenum TipoDeProduto {\n  ProdutoFinal\n  MateriaPrima\n}\n\nmodel Produto {\n  IdProduto   Int           @id @default(autoincrement())\n  Nome        String\n  Quantidade  Int\n  Tipo        TipoDeProduto\n  PedidoId    Int?\n  ProdutoLote ProdutoLote[]\n  Pedido      Pedido?       @relation(fields: [PedidoId], references: [IdPedido])\n  Lote        Lote[]        @relation(\"ProdutoLotes\")\n}\n\nmodel Lote {\n  IdLote      Int           @id @default(autoincrement())\n  Data        DateTime\n  Quantidade  Int\n  EstoqueId   Int\n  Estoque     Estoque       @relation(fields: [EstoqueId], references: [IdEstoque])\n  ProdutoLote ProdutoLote[]\n  Produtos    Produto[]     @relation(\"ProdutoLotes\")\n}\n\nmodel ProdutoLote {\n  produtoId Int\n  loteId    Int\n  Produto   Produto @relation(fields: [produtoId], references: [IdProduto])\n  Lote      Lote    @relation(fields: [loteId], references: [IdLote])\n\n  @@id([produtoId, loteId])\n}\n\nmodel Estoque {\n  IdEstoque Int     @id @default(autoincrement())\n  Reposicao Boolean\n  Endereco  String\n  lotes     Lote[]\n}\n\nenum StatusPedido {\n  Pendente\n  EmTransporte\n  Entregue\n}\n\nmodel Pedido {\n  IdPedido            Int                @id @default(autoincrement())\n  Data                DateTime\n  Status              StatusPedido\n  EnderecoDeEntrega   String\n  Produtos            Produto[]\n  FornecedorId        Int //Chave Estrangeira de Fornecedor\n  TransportadoraId    Int //Chave Estrangeira de Transportadora\n  GerenteDeProducaoId Int //Chave Estrangeira de Gerente de Produção\n  Fornecedor          Fornecedor?        @relation(fields: [FornecedorId], references: [IdFornecedor])\n  Transportadora      Transportadora?    @relation(fields: [TransportadoraId], references: [IdTransportadora])\n  GerenteDeProducao   GerenteDeProducao? @relation(fields: [GerenteDeProducaoId], references: [IdGerenteDeProducao], onDelete: Cascade)\n}\n\nmodel Transportadora {\n  IdTransportadora Int      @id @default(autoincrement())\n  Nome             String\n  Endereco         String\n  Pedidos          Pedido[]\n}\n",
  "inlineSchemaHash": "217e44e131462571291d600392fcef9e3eaf73d369eb110428438d5f4873d539",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma",
    "prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Usuario\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"IdUsuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NiveldePermissao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TipoDeUsuario\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoDeUsuario\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Fornecedor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fornecedor\",\"nativeType\":null,\"relationName\":\"Fornecedor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GerenteDeProducao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GerenteDeProducao\",\"nativeType\":null,\"relationName\":\"GerenteDeProducao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GerenteDeEstoque\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GerenteDeEstoque\",\"nativeType\":null,\"relationName\":\"GerenteDeEstoque\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Administrador\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Administrador\",\"nativeType\":null,\"relationName\":\"Administrador\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Fornecedor\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"IdFornecedor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"Fornecedor\",\"relationFromFields\":[\"IdFornecedor\"],\"relationToFields\":[\"IdUsuario\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CNPJ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pedidos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pedido\",\"nativeType\":null,\"relationName\":\"FornecedorToPedido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GerenteDeProducao\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"IdGerenteDeProducao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"GerenteDeProducao\",\"relationFromFields\":[\"IdGerenteDeProducao\"],\"relationToFields\":[\"IdUsuario\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pedidos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pedido\",\"nativeType\":null,\"relationName\":\"GerenteDeProducaoToPedido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GerenteDeEstoque\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"IdGerenteDeEstoque\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"GerenteDeEstoque\",\"relationFromFields\":[\"IdGerenteDeEstoque\"],\"relationToFields\":[\"IdUsuario\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Administrador\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"IdAdministrador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"Administrador\",\"relationFromFields\":[\"IdAdministrador\"],\"relationToFields\":[\"IdUsuario\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Produto\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"IdProduto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Quantidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tipo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoDeProduto\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PedidoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProdutoLote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProdutoLote\",\"nativeType\":null,\"relationName\":\"ProdutoToProdutoLote\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pedido\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pedido\",\"nativeType\":null,\"relationName\":\"PedidoToProduto\",\"relationFromFields\":[\"PedidoId\"],\"relationToFields\":[\"IdPedido\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Lote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lote\",\"nativeType\":null,\"relationName\":\"ProdutoLotes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Lote\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"IdLote\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Quantidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EstoqueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estoque\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Estoque\",\"nativeType\":null,\"relationName\":\"EstoqueToLote\",\"relationFromFields\":[\"EstoqueId\"],\"relationToFields\":[\"IdEstoque\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProdutoLote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProdutoLote\",\"nativeType\":null,\"relationName\":\"LoteToProdutoLote\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Produtos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Produto\",\"nativeType\":null,\"relationName\":\"ProdutoLotes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProdutoLote\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"produtoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Produto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Produto\",\"nativeType\":null,\"relationName\":\"ProdutoToProdutoLote\",\"relationFromFields\":[\"produtoId\"],\"relationToFields\":[\"IdProduto\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Lote\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lote\",\"nativeType\":null,\"relationName\":\"LoteToProdutoLote\",\"relationFromFields\":[\"loteId\"],\"relationToFields\":[\"IdLote\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"produtoId\",\"loteId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Estoque\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"IdEstoque\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reposicao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Endereco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lotes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lote\",\"nativeType\":null,\"relationName\":\"EstoqueToLote\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Pedido\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"IdPedido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusPedido\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EnderecoDeEntrega\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Produtos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Produto\",\"nativeType\":null,\"relationName\":\"PedidoToProduto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FornecedorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TransportadoraId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GerenteDeProducaoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Fornecedor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fornecedor\",\"nativeType\":null,\"relationName\":\"FornecedorToPedido\",\"relationFromFields\":[\"FornecedorId\"],\"relationToFields\":[\"IdFornecedor\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transportadora\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transportadora\",\"nativeType\":null,\"relationName\":\"PedidoToTransportadora\",\"relationFromFields\":[\"TransportadoraId\"],\"relationToFields\":[\"IdTransportadora\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GerenteDeProducao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GerenteDeProducao\",\"nativeType\":null,\"relationName\":\"GerenteDeProducaoToPedido\",\"relationFromFields\":[\"GerenteDeProducaoId\"],\"relationToFields\":[\"IdGerenteDeProducao\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transportadora\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"IdTransportadora\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Endereco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pedidos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pedido\",\"nativeType\":null,\"relationName\":\"PedidoToTransportadora\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"TipoDeUsuario\":{\"values\":[{\"name\":\"Administrador\",\"dbName\":null},{\"name\":\"GerenteDeEstoque\",\"dbName\":null},{\"name\":\"GerenteDeProducao\",\"dbName\":null},{\"name\":\"Fornecedor\",\"dbName\":null}],\"dbName\":null},\"TipoDeProduto\":{\"values\":[{\"name\":\"ProdutoFinal\",\"dbName\":null},{\"name\":\"MateriaPrima\",\"dbName\":null}],\"dbName\":null},\"StatusPedido\":{\"values\":[{\"name\":\"Pendente\",\"dbName\":null},{\"name\":\"EmTransporte\",\"dbName\":null},{\"name\":\"Entregue\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma/schema.prisma")
