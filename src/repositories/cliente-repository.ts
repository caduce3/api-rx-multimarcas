import { Prisma, Clientes, Endereco } from '@prisma/client'

export interface ClientesRepository {
    createCliente(data: Prisma.ClientesCreateInput): Promise<Clientes>
    findByEmail(email: string): Promise<Clientes | null>
    findClienteByCpf(cpf: string): Promise<Clientes | null>
    findClienteById(id: string): Promise<Clientes | null>
    deletarCliente(id_cliente: string): Promise<Clientes | null>
    atualizarCliente(id: string, data: Prisma.ClientesUncheckedUpdateInput ): Promise<Clientes>
    atualizarEnderecoCliente(id: string, data: Prisma.EnderecoUncheckedUpdateInput ): Promise<Endereco>
    findEnderecoById(id: string): Promise<Endereco | null>
    createEnderecoCliente(data: Prisma.EnderecoCreateInput): Promise<Endereco | null>
}