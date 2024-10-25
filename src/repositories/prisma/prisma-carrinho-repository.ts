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
}