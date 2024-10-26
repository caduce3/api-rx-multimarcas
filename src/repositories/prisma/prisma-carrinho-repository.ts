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

    async deletarCarrinho(id_carrinho: string): Promise<Carrinho | null> {
        const carrinho = await prisma.carrinho.delete({
            where: { id: id_carrinho }
        })

        return carrinho
    }

    async pegarCarrinhos(
        take: number, 
        page: number, 
        clienteId?: string, 
        funcionarioId?: string
    ): Promise<{ 
        carrinhos: Prisma.CarrinhoGetPayload<{
            include: {
                ItemCarrinho: true,
                Clientes: true,
                Funcionario: true
            }
        }>[], 
        totalCount: number 
    }> {
    
        const skip = (page - 1) * take;
    
        // Construindo as condições dinamicamente
        const conditions: Prisma.CarrinhoWhereInput[] = [];
    
        if (clienteId) conditions.push({ clienteId: { contains: clienteId } });
        if (funcionarioId)  conditions.push({ funcionarioId: { contains: funcionarioId } }); 
        
        // Garantindo que só passemos o AND se tivermos condições
        const whereClause: Prisma.CarrinhoWhereInput = conditions.length > 0 ? { AND: conditions } : {};
    
        const totalCount = await prisma.carrinho.count({
            where: whereClause
        });
    
        const carrinhos = await prisma.carrinho.findMany({
            where: whereClause,
            orderBy: {
                dateCreated: 'asc'
            },
            include: {
                ItemCarrinho: true,
                Clientes: true,
                Funcionario: true
            },
            take,
            skip,
        });
    
        return {
            carrinhos,
            totalCount
        };
    }

    async pegarUnicoCarrinho(id_carrinho: string): Promise<Prisma.CarrinhoGetPayload<
    { 
        include: { 
            ItemCarrinho: true; 
            Clientes: true; 
            Funcionario: true;
        }; 
    }> | null> {
        const carrinho = await prisma.carrinho.findUnique({
            where: {
                id: id_carrinho
            },
            include: {
                ItemCarrinho: true,
                Clientes: true,
                Funcionario: true
            }
        })

        return carrinho
    }
}