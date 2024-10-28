import { Prisma, Carrinho } from '@prisma/client'

export interface CarrinhoRepository {
    createCarrinho(data: Prisma.CarrinhoCreateInput): Promise<Carrinho>
    atualizarCarrinho(id_carrinho: string, data: Prisma.CarrinhoUncheckedUpdateInput): Promise<Carrinho>
    findById(id: string): Promise<Carrinho | null>
    deletarCarrinho(id_carrinho: string): Promise<Carrinho | null>
    pegarCarrinhos(take: number, page: number, nome_cliente?: string, nome_funcionario?: string): Promise<{ carrinhos: Prisma.CarrinhoGetPayload<{
        include: {
            ItemCarrinho: true,
            Clientes: true,
            Funcionario: true
        }
    }>[]; totalCount: number, }>
    pegarUnicoCarrinho(id: string): Promise<Prisma.CarrinhoGetPayload<{
        include: {
            ItemCarrinho: true,
            Clientes: true,
            Funcionario: true
        }
    }> | null>
}