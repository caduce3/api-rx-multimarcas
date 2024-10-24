/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Produtos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Produtos_nome_key" ON "Produtos"("nome");
