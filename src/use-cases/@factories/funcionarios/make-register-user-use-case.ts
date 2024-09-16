import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { RegisterUserUseCase } from "@/use-cases/funcionarios/register-user";

export function makeRegisterUserUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const registerUsersUseCase = new RegisterUserUseCase(usersRepository)

    return registerUsersUseCase
}