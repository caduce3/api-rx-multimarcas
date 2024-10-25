/*
  Warnings:

  - You are about to drop the column `precoUnitario` on the `ItemCarrinho` table. All the data in the column will be lost.
  - Added the required column `preco` to the `ItemCarrinho` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemCarrinho" DROP COLUMN "precoUnitario",
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL;
