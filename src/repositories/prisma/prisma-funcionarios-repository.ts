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

    async findById(id: string): Promise<Funcionario | null> {
        const funcionario = await prisma.funcionario.findUnique({
            where: {
                id
            }
        })

        return funcionario
    }

    async deletarFuncionario(id: string): Promise<boolean> {
        await prisma.funcionario.delete({
            where: {
                id
            }
        })

        return true
    }

    async atualizarFuncionario(id: string, data: Prisma.FuncionarioUpdateInput): Promise<Funcionario> {
        const funcionario = await prisma.funcionario.update({
            where: {
                id
            },
            data: {
                nome: data.nome,
                email: data.email,
                telefone: data.telefone,
                cpf: data.cpf
            }
        })

        return funcionario
    }
}