import { PrismaCarrinhoRepository } from "@/repositories/prisma/prisma-carrinho-repository";
import { DeletarCarrinhoUseCase } from "@/use-cases/carrinho/deletar-vendas";

export function makeDeletarCarrinhoUseCase(){
    const carrinhoRepository = new PrismaCarrinhoRepository()

    const deletarCarrinhoUseCase = new DeletarCarrinhoUseCase(carrinhoRepository)

    return deletarCarrinhoUseCase
}