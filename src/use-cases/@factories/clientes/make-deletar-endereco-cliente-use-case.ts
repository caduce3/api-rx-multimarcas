import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { DeletarEnderecoClienteUseCase } from "@/use-cases/clientes/deletar-endereco-cliente";

export function makeDeletarEnderecoClienteUseCase(){
    const playersRepository = new PrismaClientesRepository()
    const deletarEnderecoClienteUseCase = new DeletarEnderecoClienteUseCase(playersRepository)

    return deletarEnderecoClienteUseCase
}