/*
  Warnings:

  - Added the required column `totalItemCarrinho` to the `ItemCarrinho` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemCarrinho" ADD COLUMN     "totalItemCarrinho" DOUBLE PRECISION NOT NULL;
