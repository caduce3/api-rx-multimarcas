import { Prisma, Carrinho } from '@prisma/client'

export interface CarrinhoRepository {
    createCarrinho(data: Prisma.CarrinhoCreateInput): Promise<Carrinho>
}