import { Prisma, Clientes } from '@prisma/client'
import { ClientesRepository } from '../cliente-repository'
import { prisma } from '@/lib/prisma'

export class PrismaClientesRepository implements ClientesRepository {
    async createCliente(data: Prisma.ClientesCreateInput): Promise<Clientes> {
        const cliente = await prisma.clientes.create({
            data
        })

        return cliente
    }

    async findByEmail(email: string): Promise<Clientes | null> {
        const cliente = await prisma.clientes.findUnique({
            where: {
                email
            }
        })

        return cliente
    }
}