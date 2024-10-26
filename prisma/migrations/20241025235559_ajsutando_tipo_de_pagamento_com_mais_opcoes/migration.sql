/*
  Warnings:

  - The values [CARTAO] on the enum `TipoPagamento` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TipoPagamento_new" AS ENUM ('DINHEIRO', 'CREDITO', 'DEBITO');
ALTER TABLE "Carrinho" ALTER COLUMN "tipoPagamento" DROP DEFAULT;
ALTER TABLE "Carrinho" ALTER COLUMN "tipoPagamento" TYPE "TipoPagamento_new" USING ("tipoPagamento"::text::"TipoPagamento_new");
ALTER TYPE "TipoPagamento" RENAME TO "TipoPagamento_old";
ALTER TYPE "TipoPagamento_new" RENAME TO "TipoPagamento";
DROP TYPE "TipoPagamento_old";
COMMIT;

-- AlterTable
ALTER TABLE "Carrinho" ALTER COLUMN "tipoPagamento" DROP DEFAULT;
