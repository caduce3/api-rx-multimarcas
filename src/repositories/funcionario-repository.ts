import { Prisma, Funcionario } from '@prisma/client'

export interface FuncionarioRepository {
    createFuncionario(data: Prisma.FuncionarioCreateInput): Promise<Funcionario>
    findByEmail(email: string): Promise<Funcionario | null>
}