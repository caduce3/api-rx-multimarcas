/*
  Warnings:

  - You are about to drop the column `quantidade` on the `Produtos` table. All the data in the column will be lost.
  - Added the required column `quantidadeDisponivel` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produtos" DROP COLUMN "quantidade",
ADD COLUMN     "quantidadeDisponivel" INTEGER NOT NULL;
