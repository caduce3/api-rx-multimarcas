import { Prisma, Funcionario } from '@prisma/client'

export interface FuncionarioRepository {
    createFuncionario(data: Prisma.FuncionarioCreateInput): Promise<Funcionario>
    findByEmail(email: string): Promise<Funcionario | null>
    findById(id: string): Promise<Funcionario | null>
    deletarFuncionario(id: string): Promise<boolean>
    atualizarFuncionario(id: string, data: Prisma.FuncionarioUncheckedUpdateInput ): Promise<Funcionario>
}