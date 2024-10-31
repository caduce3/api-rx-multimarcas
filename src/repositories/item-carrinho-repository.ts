import { Prisma, ItemCarrinho } from '@prisma/client'

export interface ItemCarrinhoRepository {
    createItemCarrinho(data: Prisma.ItemCarrinhoCreateInput): Promise<ItemCarrinho>
    deletarItemCarrinho(id_item_carrinho: string): Promise<ItemCarrinho | null>
}