import { Prisma, Wallet } from '@prisma/client'
import { WalletRepository } from '../produto-repository'
import { prisma } from '@/lib/prisma'

export class PrismaWalletRepository implements WalletRepository {
    async createWallet(data: Prisma.WalletCreateInput) {
        const wallet = await prisma.wallet.create({
            data
        })

        return wallet
    }
}