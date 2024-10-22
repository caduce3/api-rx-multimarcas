import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { DeletarClienteUseCase } from "@/use-cases/clientes/deletar-cliente";

export function makeDeletarClienteUseCase(){
    const clientesRepository = new PrismaClientesRepository()
    const deletarClienteUseCase = new DeletarClienteUseCase(clientesRepository)

    return deletarClienteUseCase
}