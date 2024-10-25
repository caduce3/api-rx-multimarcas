/*
  Warnings:

  - You are about to drop the column `preco` on the `ItemCarrinho` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `ItemCarrinho` table. All the data in the column will be lost.
  - Added the required column `precoProduto` to the `ItemCarrinho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidadesProduto` to the `ItemCarrinho` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemCarrinho" DROP COLUMN "preco",
DROP COLUMN "quantidade",
ADD COLUMN     "precoProduto" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "unidadesProduto" INTEGER NOT NULL;
