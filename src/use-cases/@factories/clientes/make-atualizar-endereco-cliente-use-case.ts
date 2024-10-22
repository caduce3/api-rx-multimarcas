import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { AtualizarEnderecoClienteUseCase } from "@/use-cases/clientes/atualizar-endereco-cliente";

export function makeAtualizarEnderecoClienteUseCase(){
    const playersRepository = new PrismaClientesRepository()
    const atualizarEnderecoClienteUseCase = new AtualizarEnderecoClienteUseCase(playersRepository)

    return atualizarEnderecoClienteUseCase
}