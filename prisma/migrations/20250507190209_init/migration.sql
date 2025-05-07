/*
  Warnings:

  - You are about to drop the column `EstoqueId` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the `MateriaPrima` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Tipo` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoDeProduto" AS ENUM ('ProdutoFinal', 'MateriaPrima');

-- DropForeignKey
ALTER TABLE "MateriaPrima" DROP CONSTRAINT "MateriaPrima_IdMateriaPrima_fkey";

-- DropForeignKey
ALTER TABLE "MateriaPrima" DROP CONSTRAINT "MateriaPrima_PedidoId_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_EstoqueId_fkey";

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "EstoqueId",
ADD COLUMN     "Tipo" "TipoDeProduto" NOT NULL;

-- DropTable
DROP TABLE "MateriaPrima";

-- CreateTable
CREATE TABLE "Lote" (
    "IdLote" SERIAL NOT NULL,
    "Data" TIMESTAMP(3) NOT NULL,
    "Quantidade" INTEGER NOT NULL,
    "EstoqueId" INTEGER NOT NULL,

    CONSTRAINT "Lote_pkey" PRIMARY KEY ("IdLote")
);

-- CreateTable
CREATE TABLE "ProdutoLote" (
    "produtoId" INTEGER NOT NULL,
    "loteId" INTEGER NOT NULL,

    CONSTRAINT "ProdutoLote_pkey" PRIMARY KEY ("produtoId","loteId")
);

-- CreateTable
CREATE TABLE "_ProdutoLotes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProdutoLotes_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProdutoLotes_B_index" ON "_ProdutoLotes"("B");

-- AddForeignKey
ALTER TABLE "Lote" ADD CONSTRAINT "Lote_EstoqueId_fkey" FOREIGN KEY ("EstoqueId") REFERENCES "Estoque"("IdEstoque") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutoLote" ADD CONSTRAINT "ProdutoLote_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("IdProduto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutoLote" ADD CONSTRAINT "ProdutoLote_loteId_fkey" FOREIGN KEY ("loteId") REFERENCES "Lote"("IdLote") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProdutoLotes" ADD CONSTRAINT "_ProdutoLotes_A_fkey" FOREIGN KEY ("A") REFERENCES "Lote"("IdLote") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProdutoLotes" ADD CONSTRAINT "_ProdutoLotes_B_fkey" FOREIGN KEY ("B") REFERENCES "Produto"("IdProduto") ON DELETE CASCADE ON UPDATE CASCADE;
