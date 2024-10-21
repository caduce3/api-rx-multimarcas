import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { RegisterClienteUseCase } from "@/use-cases/clientes/registrar-cliente";

export function makeRegisterClienteUseCase(){
    const playersRepository = new PrismaClientesRepository()
    const registerClienteUseCase = new RegisterClienteUseCase(playersRepository)

    return registerClienteUseCase
}