import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { PegarUnicoEnderecoClienteUseCase } from "@/use-cases/endereco/pegar-unico-endereco";

export function makePegarUnicoEnderecoClienteUseCase(){
    const clientesRepository = new PrismaClientesRepository()
    const pegarUnicoEnderecoClienteUseCase = new PegarUnicoEnderecoClienteUseCase(clientesRepository)

    return pegarUnicoEnderecoClienteUseCase
}