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

    async deletarCliente(id_cliente: string): Promise<Clientes | null> {

        const getCliente = await prisma.clientes.findUnique({
            where: {
                id: id_cliente
            }
        })

        if(getCliente) {

            if(getCliente.enderecoId != null) {
                await prisma.endereco.deleteMany({
                    where: {
                        id: getCliente.enderecoId
                    }
                })
            }

            const cliente = await prisma.clientes.delete({
                where: {
                    id: id_cliente
                }
            })

            return cliente
        } else {
            return null
        }
    }
}