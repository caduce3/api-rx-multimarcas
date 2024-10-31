import { Prisma, ItemCarrinho } from '@prisma/client'
import { ItemCarrinhoRepository } from '../item-carrinho-repository'
import { prisma } from '@/lib/prisma'

export class PrismaItemCarrinhoRepository implements ItemCarrinhoRepository {
    async createItemCarrinho(data: Prisma.ItemCarrinhoCreateInput): Promise<ItemCarrinho> {
        const itemCarrinho = await prisma.itemCarrinho.create({
            data
        })

        return itemCarrinho
    }

    async deletarItemCarrinho(id_item_carrinho: string): Promise<ItemCarrinho | null> {
        const itemCarrinho = await prisma.itemCarrinho.delete({
            where: { id: id_item_carrinho }
        })

        return itemCarrinho
    }
}