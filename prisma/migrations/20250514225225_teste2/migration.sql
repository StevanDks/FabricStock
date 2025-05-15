-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_PedidoId_fkey";

-- AlterTable
ALTER TABLE "Produto" ALTER COLUMN "PedidoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_PedidoId_fkey" FOREIGN KEY ("PedidoId") REFERENCES "Pedido"("IdPedido") ON DELETE SET NULL ON UPDATE CASCADE;
