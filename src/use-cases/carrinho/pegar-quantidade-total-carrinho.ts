import { ClientesRepository } from "@/repositories/cliente-repository";
import { ErroAoCarregarClientes } from "../@errors/cliente/cliente-erro-carregar";
import { CarrinhoRepository } from "@/repositories/carrinho-repository";
import { ErroCarregarCardTotalCarrinho } from "../@errors/carrinho/erro-carregar-qtd-total-carrinho";

interface pegarQuantidadeTotalCarrinhoUseCaseRequest {
    date_init: string;
    date_finish: string;
}

interface pegarQuantidadeTotalCarrinhoUseCaseResponse {
    quantidadeTotalCarrinho: number;
}

export class PegarQuantidadeTotalCarrinhoUseCase {
    constructor(
        private carrinhoRepository: CarrinhoRepository
    ) {}
    
    async execute({
        date_init, date_finish
    }: pegarQuantidadeTotalCarrinhoUseCaseRequest): Promise<pegarQuantidadeTotalCarrinhoUseCaseResponse> {

        const qtdCarrinho = await this.carrinhoRepository.pegarQtdTotalCarrinho(date_init, date_finish);
        if (!qtdCarrinho) throw new ErroCarregarCardTotalCarrinho()

        return { 
            quantidadeTotalCarrinho: qtdCarrinho.quantidadeTotalCarrinhos
        };
    }
}
