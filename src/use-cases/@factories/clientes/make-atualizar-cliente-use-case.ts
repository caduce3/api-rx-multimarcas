import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { AtualizarClienteUseCase } from "@/use-cases/clientes/atualizar-cliente";

export function makeAtualizarClienteUseCase(){
    const playersRepository = new PrismaClientesRepository()
    const atualizarClienteUseCase = new AtualizarClienteUseCase(playersRepository)

    return atualizarClienteUseCase
}