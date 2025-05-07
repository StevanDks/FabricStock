-- CreateEnum
CREATE TYPE "TipoDeUsuario" AS ENUM ('Administrador', 'GerenteDeEstoque', 'GerenteDeProducao', 'Fornecedor');

-- CreateEnum
CREATE TYPE "StatusPedido" AS ENUM ('Pendente', 'EmTransporte', 'Entregue');

-- CreateTable
CREATE TABLE "Usuario" (
    "IdUsuario" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,
    "NiveldePermissao" INTEGER NOT NULL,
    "TipoDeUsuario" "TipoDeUsuario" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("IdUsuario")
);

-- CreateTable
CREATE TABLE "Fornecedor" (
    "IdFornecedor" SERIAL NOT NULL,
    "CNPJ" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Fornecedor_pkey" PRIMARY KEY ("IdFornecedor")
);

-- CreateTable
CREATE TABLE "GerenteDeProducao" (
    "IdGerenteDeProducao" SERIAL NOT NULL,

    CONSTRAINT "GerenteDeProducao_pkey" PRIMARY KEY ("IdGerenteDeProducao")
);

-- CreateTable
CREATE TABLE "GerenteDeEstoque" (
    "IdGerenteDeEstoque" SERIAL NOT NULL,

    CONSTRAINT "GerenteDeEstoque_pkey" PRIMARY KEY ("IdGerenteDeEstoque")
);

-- CreateTable
CREATE TABLE "Administrador" (
    "IdAdministrador" SERIAL NOT NULL,

    CONSTRAINT "Administrador_pkey" PRIMARY KEY ("IdAdministrador")
);

-- CreateTable
CREATE TABLE "Produto" (
    "IdProduto" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "Quantidade" INTEGER NOT NULL,
    "EstoqueId" INTEGER NOT NULL,
    "PedidoId" INTEGER NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("IdProduto")
);

-- CreateTable
CREATE TABLE "MateriaPrima" (
    "IdMateriaPrima" SERIAL NOT NULL,
    "Tipo" TEXT NOT NULL,
    "PedidoId" INTEGER NOT NULL,

    CONSTRAINT "MateriaPrima_pkey" PRIMARY KEY ("IdMateriaPrima")
);

-- CreateTable
CREATE TABLE "Estoque" (
    "IdEstoque" SERIAL NOT NULL,
    "Reposicao" BOOLEAN NOT NULL,
    "Endereco" TEXT NOT NULL,

    CONSTRAINT "Estoque_pkey" PRIMARY KEY ("IdEstoque")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "IdPedido" SERIAL NOT NULL,
    "Data" TIMESTAMP(3) NOT NULL,
    "Status" "StatusPedido" NOT NULL,
    "EnderecoDeEntrega" TEXT NOT NULL,
    "FornecedorId" INTEGER NOT NULL,
    "TransportadoraId" INTEGER NOT NULL,
    "GerenteDeProducaoId" INTEGER NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("IdPedido")
);

-- CreateTable
CREATE TABLE "Transportadora" (
    "IdTransportadora" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "Endereco" TEXT NOT NULL,

    CONSTRAINT "Transportadora_pkey" PRIMARY KEY ("IdTransportadora")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_Email_key" ON "Usuario"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Fornecedor_CNPJ_key" ON "Fornecedor"("CNPJ");

-- AddForeignKey
ALTER TABLE "Fornecedor" ADD CONSTRAINT "Fornecedor_IdFornecedor_fkey" FOREIGN KEY ("IdFornecedor") REFERENCES "Usuario"("IdUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GerenteDeProducao" ADD CONSTRAINT "GerenteDeProducao_IdGerenteDeProducao_fkey" FOREIGN KEY ("IdGerenteDeProducao") REFERENCES "Usuario"("IdUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GerenteDeEstoque" ADD CONSTRAINT "GerenteDeEstoque_IdGerenteDeEstoque_fkey" FOREIGN KEY ("IdGerenteDeEstoque") REFERENCES "Usuario"("IdUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Administrador" ADD CONSTRAINT "Administrador_IdAdministrador_fkey" FOREIGN KEY ("IdAdministrador") REFERENCES "Usuario"("IdUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_EstoqueId_fkey" FOREIGN KEY ("EstoqueId") REFERENCES "Estoque"("IdEstoque") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_PedidoId_fkey" FOREIGN KEY ("PedidoId") REFERENCES "Pedido"("IdPedido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MateriaPrima" ADD CONSTRAINT "MateriaPrima_IdMateriaPrima_fkey" FOREIGN KEY ("IdMateriaPrima") REFERENCES "Produto"("IdProduto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MateriaPrima" ADD CONSTRAINT "MateriaPrima_PedidoId_fkey" FOREIGN KEY ("PedidoId") REFERENCES "Pedido"("IdPedido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_FornecedorId_fkey" FOREIGN KEY ("FornecedorId") REFERENCES "Fornecedor"("IdFornecedor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_TransportadoraId_fkey" FOREIGN KEY ("TransportadoraId") REFERENCES "Transportadora"("IdTransportadora") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_GerenteDeProducaoId_fkey" FOREIGN KEY ("GerenteDeProducaoId") REFERENCES "GerenteDeProducao"("IdGerenteDeProducao") ON DELETE RESTRICT ON UPDATE CASCADE;
