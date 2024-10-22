import { Prisma, Clientes, Endereco } from '@prisma/client'
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
        const enderecos = await prisma.endereco.deleteMany({
            where: {
                clienteId: id_cliente
            }
        });

        const cliente = await prisma.clientes.delete({
            where: {
                id: id_cliente
            }
        });

        return cliente
    }
    

    async atualizarCliente(id: string, data: Prisma.ClientesUncheckedUpdateInput): Promise<Clientes> {
        const cliente = await prisma.clientes.update({
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

        return cliente
    }

    
    async findClienteByCpf(cpf: string): Promise<Clientes | null> {
        const cliente = await prisma.clientes.findUnique({
            where: {
                cpf
            }
        })
        
        return cliente
    }

    async findClienteById(id: string): Promise<Clientes | null> {
        const cliente = await prisma.clientes.findUnique({
            where: {
                id
            }
        })
        
        return cliente
    }

    async atualizarEnderecoCliente(id: string, data: Prisma.EnderecoUncheckedUpdateInput): Promise<Endereco> {
        const endereco = await prisma.endereco.update({
            where: {
                id
            },
            data
        })
    
        return endereco
    }

    async findEnderecoById(id: string): Promise<Endereco | null> {
        const endereco = await prisma.endereco.findUnique({
            where: {
                id
            }
        })

        return endereco
    }

    async createEnderecoCliente(data: Prisma.EnderecoCreateInput): Promise<Endereco | null> {
        const endereco = await prisma.endereco.create({
            data
        })

        return endereco
    }

    async deletarEnderecoCliente(id_endereco: string): Promise<Endereco | null> {
        const endereco = await prisma.endereco.delete({
            where: {
                id: id_endereco
            }
        })

        return endereco
    }
}