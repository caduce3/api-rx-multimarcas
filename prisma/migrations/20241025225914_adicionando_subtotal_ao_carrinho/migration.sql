/*
  Warnings:

  - Added the required column `subtotal` to the `Carrinho` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carrinho" ADD COLUMN     "subtotal" DOUBLE PRECISION NOT NULL;
