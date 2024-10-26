import { PrismaCarrinhoRepository } from "@/repositories/prisma/prisma-carrinho-repository";
import { PegarUnicoCarrinhoUseCase } from "@/use-cases/carrinho/pegar-unico-carrinho";

export function makePegarUnicoCarrinhoUseCase(){
    const carrinhoRepository = new PrismaCarrinhoRepository()

    const pegarUnicoCarrinhoUseCase = new PegarUnicoCarrinhoUseCase(carrinhoRepository)

    return pegarUnicoCarrinhoUseCase
}