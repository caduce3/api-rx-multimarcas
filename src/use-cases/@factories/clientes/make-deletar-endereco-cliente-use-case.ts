import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { DeletarEnderecoClienteUseCase } from "@/use-cases/clientes/deletar-endereco-cliente";

export function makeDeletarEnderecoClienteUseCase(){
    const clientesRepository = new PrismaClientesRepository()
    const deletarEnderecoClienteUseCase = new DeletarEnderecoClienteUseCase(clientesRepository)

    return deletarEnderecoClienteUseCase
}