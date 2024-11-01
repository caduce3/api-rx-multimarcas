import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { PegarQuantidadeTotalClienteUseCase } from "@/use-cases/clientes/pegar-quantidade-total-clientes";

export function makePegarQuantidadeTotalClienteUseCase(){
    const clientesRepository = new PrismaClientesRepository()
    const pegarQuantidadeTotalClienteUseCase = new PegarQuantidadeTotalClienteUseCase(clientesRepository)

    return pegarQuantidadeTotalClienteUseCase
}