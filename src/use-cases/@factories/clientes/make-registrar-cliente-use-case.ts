import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { RegisterClienteUseCase } from "@/use-cases/clientes/registrar-cliente";

export function makeRegisterClienteUseCase(){
    const clientesRepository = new PrismaClientesRepository()
    const registerClienteUseCase = new RegisterClienteUseCase(clientesRepository)

    return registerClienteUseCase
}