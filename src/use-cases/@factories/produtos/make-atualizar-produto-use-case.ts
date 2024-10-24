import { PrismaProdutosRepository } from "@/repositories/prisma/prisma-produtos-repository";
import { AtualizarProdutoUseCase } from "@/use-cases/produtos/atualizar-produto";

export function makeAtualizarProdutoUseCase(){
    const produtosRepository = new PrismaProdutosRepository()
    const atualizarProdutoUseCase = new AtualizarProdutoUseCase(produtosRepository)

    return atualizarProdutoUseCase
}