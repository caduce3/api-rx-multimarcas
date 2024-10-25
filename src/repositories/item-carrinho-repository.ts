import { Prisma, ItemCarrinho } from '@prisma/client'

export interface ItemCarrinhoRepository {
    createItemCarrinho(data: Prisma.ItemCarrinhoCreateInput): Promise<ItemCarrinho>
}