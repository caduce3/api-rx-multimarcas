import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { PegarClientesUseCase } from "@/use-cases/clientes/pegar-clientes"

export function makePegarClientesUseCase(){
    const clientesRepository = new PrismaClientesRepository()
    const pegarClientesUseCase = new PegarClientesUseCase(clientesRepository)

    return pegarClientesUseCase
}