import { PrismaFuncionarioRepository } from "@/repositories/prisma/prisma-funcionarios-repository";
import { AuthenticateFuncionarioUseCase } from "@/use-cases/funcionarios/authenticate";

export function makeAuthenticateFuncionarioUseCase(){
    const usersRepository = new PrismaFuncionarioRepository()
    const authenticateFuncionarioUseCase = new AuthenticateFuncionarioUseCase(usersRepository)

    return authenticateFuncionarioUseCase
}