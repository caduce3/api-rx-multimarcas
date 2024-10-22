/*
  Warnings:

  - You are about to drop the column `enderecoId` on the `Clientes` table. All the data in the column will be lost.
  - Added the required column `clienteId` to the `Endereco` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Clientes" DROP CONSTRAINT "Clientes_enderecoId_fkey";

-- AlterTable
ALTER TABLE "Clientes" DROP COLUMN "enderecoId";

-- AlterTable
ALTER TABLE "Endereco" ADD COLUMN     "clienteId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
