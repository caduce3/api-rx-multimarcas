import { Carrinho, Produtos } from "@prisma/client";
import { ErroAoCarregarPagina } from "../@errors/erro-carregar-pagina";
import { ProdutoRepository } from "@/repositories/produto-repository";
import { ErroAoCarregarProdutos } from "../@errors/produto/erro-carregar-produtos";
import { CarrinhoRepository } from "@/repositories/carrinho-repository";
import { ErroCarregarCarrinhos } from "../@errors/carrinho/erro-carregar-carrinhos";

interface pegarCarrinhosUseCaseRequest {
    page: number;
    nome_cliente?: string;
    nome_funcionario?: string;
}

interface pegarCarrinhosUseCaseResponse {
    carrinhosList: Carrinho[];
    totalItens: number;
    totalPages: number;
    currentPage: number;
}

export class PegarCarrinhosUseCase {
    constructor(
        private carrinhosRepository: CarrinhoRepository
    ) {}
    
    async execute({
        page, nome_cliente, nome_funcionario
    }: pegarCarrinhosUseCaseRequest): Promise<pegarCarrinhosUseCaseResponse> {

        if (page <= 0) page = 1;

        const take = 10;
        const { carrinhos, totalCount } = await this.carrinhosRepository.pegarCarrinhos(take, page, nome_cliente, nome_funcionario);

        if (!carrinhos || carrinhos.length === 0) {
            return {
                carrinhosList: [],
                totalItens: 0,
                totalPages: 0,
                currentPage: page
            };
        }

        const totalPages = Math.ceil(totalCount / take);
        if (totalPages === 0) throw new ErroCarregarCarrinhos();
        if (page > totalPages) throw new ErroAoCarregarPagina();

        return { 
            carrinhosList: carrinhos,
            totalItens: totalCount,
            totalPages,
            currentPage: page
        };
    }
}
