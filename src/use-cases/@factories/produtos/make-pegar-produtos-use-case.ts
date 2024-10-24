import { PrismaProdutosRepository } from "@/repositories/prisma/prisma-produtos-repository";
import { PegarProdutosUseCase } from "@/use-cases/produtos/pegar-produtos";

export function makePegarProdutosUseCase(){
    const produtosRepository = new PrismaProdutosRepository()
    const pegarProdutosUseCase = new PegarProdutosUseCase(produtosRepository)

    return pegarProdutosUseCase
}