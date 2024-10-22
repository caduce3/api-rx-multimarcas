import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { CriarEnderecoClienteUseCase } from "@/use-cases/clientes/criar-endereco-cliente";

export function makeCriarEnderecoClienteUseCase(){
    const playersRepository = new PrismaClientesRepository()
    const criarEnderecoClienteUseCase = new CriarEnderecoClienteUseCase(playersRepository)

    return criarEnderecoClienteUseCase
}