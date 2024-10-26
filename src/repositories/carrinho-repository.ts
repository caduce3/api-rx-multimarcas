import { Prisma, Carrinho } from '@prisma/client'

export interface CarrinhoRepository {
    createCarrinho(data: Prisma.CarrinhoCreateInput): Promise<Carrinho>
    atualizarCarrinho(id_carrinho: string, data: Prisma.CarrinhoUncheckedUpdateInput): Promise<Carrinho>
    findById(id: string): Promise<Carrinho | null>
}