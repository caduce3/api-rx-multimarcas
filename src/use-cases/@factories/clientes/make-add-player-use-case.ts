import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { AddPlayerUseCase } from "@/use-cases/clientes/add-player";

export function makeAddPlayerUseCase(){
    const playersRepository = new PrismaClientesRepository()
    const addPlayerUseCase = new AddPlayerUseCase(playersRepository)

    return addPlayerUseCase
}