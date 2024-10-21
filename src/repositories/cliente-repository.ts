import { Prisma, Clientes } from '@prisma/client'

export interface ClientesRepository {
    createCliente(data: Prisma.ClientesCreateInput): Promise<Clientes>
    findByEmail(email: string): Promise<Clientes | null>
    deletarCliente(id_cliente: string): Promise<Clientes | null>
}