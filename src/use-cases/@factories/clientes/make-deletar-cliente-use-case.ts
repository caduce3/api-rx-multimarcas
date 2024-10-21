import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { DeletarClienteUseCase } from "@/use-cases/clientes/deletar-cliente";

export function makeDeletarClienteUseCase(){
    const playersRepository = new PrismaClientesRepository()
    const deletarClienteUseCase = new DeletarClienteUseCase(playersRepository)

    return deletarClienteUseCase
}