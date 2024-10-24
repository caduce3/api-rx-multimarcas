import { Prisma, Produtos } from '@prisma/client'
import { ProdutoRepository } from '../produto-repository'
import { prisma } from '@/lib/prisma'

export class PrismaProdutosRepository implements ProdutoRepository {

    async cadastrarProduto(data: Prisma.ProdutosCreateInput): Promise<Produtos> {
        const produto = await prisma.produtos.create({
            data
        })

        return produto
    }

    async findProdutoById(id_produto: string): Promise<Produtos | null> {
        const produto = await prisma.produtos.findUnique({
            where: {
                id: id_produto
            }
        })
        
        return produto
    }

    async deletarProduto(id_produto: string): Promise<Produtos | null> {
        const produto = await prisma.produtos.delete({
            where: {
                id: id_produto
            }
        })

        return produto
    }

    async pegarProdutos(
        take: number, 
        page: number, 
        nome?: string, 
        descricao?: string, 
        preco?: number, 
        quantidadeDisponivel?: number
    ): Promise<{ 
        produtos: Prisma.ProdutosGetPayload<{}>[], 
        totalCount: number 
    }> {
    
        const skip = (page - 1) * take;
    
        // Construindo as condições dinamicamente
        const conditions: Prisma.ProdutosWhereInput[] = [];
    
        if (nome) conditions.push({ nome: { contains: nome, mode: 'insensitive' } });
        if (descricao)  conditions.push({ descricao: { contains: descricao, mode: 'insensitive' } });    
        if (preco) conditions.push({ preco: { equals: Number(preco) } });
        if (quantidadeDisponivel) conditions.push({ quantidadeDisponivel: { equals: Number(quantidadeDisponivel) } });

        
        // Garantindo que só passemos o AND se tivermos condições
        const whereClause: Prisma.ProdutosWhereInput = conditions.length > 0 ? { AND: conditions } : {};
    
        const totalCount = await prisma.produtos.count({
            where: whereClause
        });
    
        const produtos = await prisma.produtos.findMany({
            where: whereClause,
            orderBy: {
                nome: 'asc'
            },
            take,
            skip,
        });
    
        return {
            produtos,
            totalCount
        };
    }

    async pegarUnicoProduto(id_produto: string): Promise<Produtos | null> {
        const produto = await prisma.produtos.findUnique({
            where: {
                id: id_produto
            },
        })

        return produto
    }

    async atualizarProduto(id_produto: string, data: Prisma.ProdutosUncheckedUpdateInput): Promise<Produtos> {
        const produto = await prisma.produtos.update({
            where: {
                id: id_produto
            },
            data: {
                nome: data.nome,
                descricao: data.descricao,
                preco: data.preco,
                quantidadeDisponivel: data.quantidadeDisponivel
            }
        })

        return produto
    }

    async findProdutoByNome(nome: string): Promise<Produtos | null> {
        const produto = await prisma.produtos.findUnique({
            where: {
                nome: nome
            }
        })

        return produto
    }

}