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
    deletarEnderecoCliente(id_endereco: string): Promise<Endereco | null>
    pegarClientes(take: number, page: number, nome?: string, telefone?: string, email?: string, cpf?: string): Promise<{ clientes: Prisma.ClientesGetPayload<{
        include: {
            Enderecos: true,
            Carrinho: true
        }
    }>[]; totalCount: number, }>
    pegarUnicoCliente(id: string): Promise<Prisma.ClientesGetPayload<{
        include: {
            Enderecos: true,
            Carrinho: true
        }
    }> | null>
    pegarQtdTotalCliente(date_init: string, date_finish: string): Promise<{ quantidadeTotalClientes: number }>
}