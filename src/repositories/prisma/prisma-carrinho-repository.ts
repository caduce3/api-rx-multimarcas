import { Prisma, Carrinho } from '@prisma/client'
import { CarrinhoRepository } from '../carrinho-repository'
import { prisma } from '@/lib/prisma'

export class PrismaCarrinhoRepository implements CarrinhoRepository {
    async createCarrinho(data: Prisma.CarrinhoCreateInput): Promise<Carrinho> {
        const carrinho = await prisma.carrinho.create({
            data
        })

        return carrinho
    }

    async atualizarCarrinho(id_carrinho: string, data: Prisma.CarrinhoUncheckedUpdateInput): Promise<Carrinho> {
        const carrinho = await prisma.carrinho.update({
            where: { id: id_carrinho },
            data
        })

        return carrinho
    }

    async findById(id: string): Promise<Carrinho | null> {
        const carrinho = await prisma.carrinho.findUnique({
            where: { id }
        })

        return carrinho
    }
}