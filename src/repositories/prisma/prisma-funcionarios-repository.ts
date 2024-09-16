import { prisma } from '@/lib/prisma'
import { Prisma, Funcionario } from '@prisma/client'
import { FuncionarioRepository } from '../funcionario-repository'

export class PrismaFuncionarioRepository implements FuncionarioRepository {
    async createFuncionario(data: Prisma.FuncionarioCreateInput) {
        const funcionario = await prisma.funcionario.create({
            data
        })
        
        return funcionario
    }

    async findByEmail(email: string): Promise<Funcionario | null> {
        const funcionario = await prisma.funcionario.findUnique({
            where: {
                email
            }
        })

        return funcionario
    }
}