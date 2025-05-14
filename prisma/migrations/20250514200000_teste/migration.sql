-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_GerenteDeProducaoId_fkey";

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_GerenteDeProducaoId_fkey" FOREIGN KEY ("GerenteDeProducaoId") REFERENCES "GerenteDeProducao"("IdGerenteDeProducao") ON DELETE CASCADE ON UPDATE CASCADE;
