import { Prisma, Produtos } from '@prisma/client'

export interface ProdutoRepository {
    cadastrarProduto(data: Prisma.ProdutosCreateInput): Promise<Produtos>
    findProdutoById(id_produto: string): Promise<Produtos | null>
    findProdutoByNome(nome: string): Promise<Produtos | null>
    deletarProduto(id_produto: string): Promise<Produtos | null>
    pegarProdutos(take: number, page: number, nome?: string, descricao?: string, preco?: number, quantidade?: number): Promise<{ produtos: Prisma.ProdutosGetPayload<{}>[]; totalCount: number, }>
    pegarUnicoProduto(id_produto: string): Promise<Produtos | null>
    atualizarProduto(id_produto: string, data: Prisma.ProdutosUncheckedUpdateInput ): Promise<Produtos>
}