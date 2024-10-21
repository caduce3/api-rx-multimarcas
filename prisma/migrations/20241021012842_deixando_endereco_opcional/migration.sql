-- DropForeignKey
ALTER TABLE "Clientes" DROP CONSTRAINT "Clientes_enderecoId_fkey";

-- AlterTable
ALTER TABLE "Clientes" ALTER COLUMN "enderecoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Clientes" ADD CONSTRAINT "Clientes_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE SET NULL ON UPDATE CASCADE;
