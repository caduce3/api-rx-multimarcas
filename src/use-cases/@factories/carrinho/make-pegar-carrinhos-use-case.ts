import { PrismaCarrinhoRepository } from "@/repositories/prisma/prisma-carrinho-repository";
import { PegarCarrinhosUseCase } from "@/use-cases/carrinho/pegar-carrinhos";

export function makePegarCarrinhosUseCase(){
    const carrinhoRepository = new PrismaCarrinhoRepository()

    const pegarCarrinhosUseCase = new PegarCarrinhosUseCase(carrinhoRepository)

    return pegarCarrinhosUseCase
}