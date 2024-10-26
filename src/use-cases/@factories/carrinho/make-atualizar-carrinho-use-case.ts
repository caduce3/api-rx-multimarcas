import { PrismaCarrinhoRepository } from "@/repositories/prisma/prisma-carrinho-repository";
import { AtualizarCarrinhoUseCase } from "@/use-cases/carrinho/atualizar-carrinho";

export function makeAtualizarCarrinhoUseCase(){
    const carrinhoRepository = new PrismaCarrinhoRepository()

    const atualizarCarrinhoUseCase = new AtualizarCarrinhoUseCase(carrinhoRepository)

    return atualizarCarrinhoUseCase
}