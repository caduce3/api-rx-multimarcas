-- CreateEnum
CREATE TYPE "TipoPagamento" AS ENUM ('DINHEIRO', 'CARTAO');

-- AlterTable
ALTER TABLE "Carrinho" ADD COLUMN     "tipoPagamento" "TipoPagamento" NOT NULL DEFAULT 'CARTAO';
