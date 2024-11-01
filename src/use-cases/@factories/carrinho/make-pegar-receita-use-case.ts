import { PrismaCarrinhoRepository } from "@/repositories/prisma/prisma-carrinho-repository";
import { PegarReceitaUseCase } from "@/use-cases/carrinho/calcular-receita";

export function makePegarReceitaUseCase(){
    const carrinhoRepository = new PrismaCarrinhoRepository()

    const pegarReceitaUseCase = new PegarReceitaUseCase(carrinhoRepository)

    return pegarReceitaUseCase
}