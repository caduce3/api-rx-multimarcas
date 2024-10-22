import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { PegarUnicoClienteUseCase } from "@/use-cases/clientes/pegar-unico-cliente";

export function makePegarUnicoClienteUseCase(){
    const clientesRepository = new PrismaClientesRepository()
    const pegarUnicoClienteUseCase = new PegarUnicoClienteUseCase(clientesRepository)

    return pegarUnicoClienteUseCase
}