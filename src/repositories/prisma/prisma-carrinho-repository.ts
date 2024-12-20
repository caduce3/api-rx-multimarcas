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
        await prisma.itemCarrinho.deleteMany({
            where: { carrinhoId: id_carrinho }
        })
        
        const carrinho = await prisma.carrinho.delete({
            where: { id: id_carrinho }
        })


        return carrinho
    }

    async pegarCarrinhos(
        take: number, 
        page: number, 
        nome_cliente?: string, 
        nome_funcionario?: string
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
    
        if (nome_cliente) conditions.push({ Clientes: {nome: { contains: nome_cliente } }  });
        if (nome_funcionario)  conditions.push({ Funcionario: { nome: { contains: nome_funcionario }}  }); 
        
        // Garantindo que só passemos o AND se tivermos condições
        const whereClause: Prisma.CarrinhoWhereInput = conditions.length > 0 ? { AND: conditions } : {};
    
        const totalCount = await prisma.carrinho.count({
            where: whereClause
        });
    
        const carrinhos = await prisma.carrinho.findMany({
            where: whereClause,
            orderBy: {
                dateCreated: 'desc'
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

    async pegarUnicoCarrinho(id: string): Promise<Prisma.CarrinhoGetPayload<
    { 
        include: { 
            ItemCarrinho: true; 
            Clientes: true; 
            Funcionario: true;
        }; 
    }> | null> {
        const carrinho = await prisma.carrinho.findUnique({
            where: {
                id
            },
            include: {
                ItemCarrinho: true,
                Clientes: true,
                Funcionario: true
            }
        })

        return carrinho
    }

    async pegarSomaValorTotalMes(date_init: string, date_finish: string): Promise<{ mes: string; valorTotal: number; }[]> {
        
        const carrinhos = await prisma.carrinho.findMany({
            where: {
                dateCreated: {
                    gte: new Date(date_init),
                    lte: new Date(date_finish)
                }
            },
            select: {
                valorTotal: true,
                dateCreated: true
            }
        })

        const somaValorTotalMes = carrinhos.reduce((acc, carrinho) => {
            const mes = (carrinho.dateCreated.getMonth() + 1).toString().padStart(2, '0')
            const valorTotal = carrinho.valorTotal

            if (!acc[mes]) {
                acc[mes] = valorTotal
            } else {
                acc[mes] += valorTotal
            }

            return acc
        }, {} as { [key: string]: number })

        return Object.entries(somaValorTotalMes)
        .map(([mes, valorTotal]) => ({
            mes,
            valorTotal
        }))
        .sort((a, b) => parseInt(a.mes) - parseInt(b.mes));
    }

    async pegarQtdTotalCarrinho(date_init: string, date_finish: string): Promise<{ quantidadeTotalCarrinhos: number; }> {
        const quantidadeTotalCarrinhos = await prisma.carrinho.count({
            where: {
                dateCreated: {
                    gte: new Date(date_init),
                    lte: new Date(date_finish)
                }
            }
        })

        return { quantidadeTotalCarrinhos }
    }

    async pegarReceitaTotal(date_init: string, date_finish: string): Promise<{ receitaTotal: number; }> {
        const carrinhos = await prisma.carrinho.findMany({
            where: {
                dateCreated: {
                    gte: new Date(date_init),
                    lte: new Date(date_finish)
                }
            },
            select: {
                valorTotal: true
            }
        })

        const receitaTotal = carrinhos.reduce((acc, carrinho) => {
            return acc + carrinho.valorTotal
        }, 0)

        return { receitaTotal }
    }
}