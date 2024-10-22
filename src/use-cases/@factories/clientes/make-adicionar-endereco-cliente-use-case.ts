import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { CriarEnderecoClienteUseCase } from "@/use-cases/clientes/criar-endereco-cliente";

export function makeCriarEnderecoClienteUseCase(){
    const clientesRepository = new PrismaClientesRepository()
    const criarEnderecoClienteUseCase = new CriarEnderecoClienteUseCase(clientesRepository)

    return criarEnderecoClienteUseCase
}