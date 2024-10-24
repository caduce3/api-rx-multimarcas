import { PrismaProdutosRepository } from "@/repositories/prisma/prisma-produtos-repository";
import { CadastrarProdutoUseCase } from "@/use-cases/produtos/cadastrar-produto";

export function makeCadastrarProdutoUseCase(){
    const produtosRepository = new PrismaProdutosRepository()
    const cadastrarProdutoUseCase = new CadastrarProdutoUseCase(produtosRepository)

    return cadastrarProdutoUseCase
}