import { PrismaItemCarrinhoRepository } from "@/repositories/prisma/prisma-item-carrinho-repository";
import { PrismaProdutosRepository } from "@/repositories/prisma/prisma-produtos-repository";
import { CadastrarItemCarrinhoUseCase } from "@/use-cases/itemCarrinho/criar-item-carrinho";

export function makeCadastrarItemCarrinhoUseCase(){
    const itemCarrinhoRepository = new PrismaItemCarrinhoRepository()
    const produtoRepository = new PrismaProdutosRepository()

    const cadastrarItemCarrinhoUseCase = new CadastrarItemCarrinhoUseCase(produtoRepository, itemCarrinhoRepository)

    return cadastrarItemCarrinhoUseCase
}