import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { AtualizarEnderecoClienteUseCase } from "@/use-cases/clientes/atualizar-endereco-cliente";

export function makeAtualizarEnderecoClienteUseCase(){
    const clientesRepository = new PrismaClientesRepository()
    const atualizarEnderecoClienteUseCase = new AtualizarEnderecoClienteUseCase(clientesRepository)

    return atualizarEnderecoClienteUseCase
}