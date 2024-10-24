import { PrismaProdutosRepository } from "@/repositories/prisma/prisma-produtos-repository";
import { PegarUnicoProdutoUseCase } from "@/use-cases/produtos/pegar-unico-produto";

export function makePegarUnicoProdutoUseCase(){
    const produtosRepository = new PrismaProdutosRepository()
    const pegarUnicoProdutoUseCase = new PegarUnicoProdutoUseCase(produtosRepository)

    return pegarUnicoProdutoUseCase
}