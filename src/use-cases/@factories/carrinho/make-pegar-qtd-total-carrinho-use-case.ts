import { PrismaCarrinhoRepository } from "@/repositories/prisma/prisma-carrinho-repository";
import { PegarQuantidadeTotalCarrinhoUseCase } from "@/use-cases/carrinho/pegar-quantidade-total-carrinho";

export function makePegarQuantidadeTotalCarrinhoUseCase(){
    const carrinhoRepository = new PrismaCarrinhoRepository()

    const pegarQuantidadeTotalCarrinhoUseCase = new PegarQuantidadeTotalCarrinhoUseCase(carrinhoRepository)

    return pegarQuantidadeTotalCarrinhoUseCase
}