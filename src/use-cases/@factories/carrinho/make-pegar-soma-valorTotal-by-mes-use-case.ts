import { PrismaCarrinhoRepository } from "@/repositories/prisma/prisma-carrinho-repository";
import { PegarSomaValorTotalByMesUseCase } from "@/use-cases/carrinho/grafico-soma-total-por-mes";

export function makePegarSomaValorTotalByMesUseCase(){
    const carrinhoRepository = new PrismaCarrinhoRepository()

    const pegarSomaValorTotalByMesUseCase = new PegarSomaValorTotalByMesUseCase(carrinhoRepository)

    return pegarSomaValorTotalByMesUseCase
}