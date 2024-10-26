import { Carrinho } from "@prisma/client";
import { CarrinhoRepository } from "@/repositories/carrinho-repository";
import { CarrinhoNaoExiste } from "../@errors/carrinho/erro-carrinho-nao-existe";

interface pegarUnicoCarrinhoUseCaseRequest {
    id: string;
}

interface pegarUnicoCarrinhoUseCaseResponse {
    carrinho: Carrinho;
}

export class PegarUnicoCarrinhoUseCase {
    constructor(
        private carrinhoRepository: CarrinhoRepository
    ) {}
    
    async execute({
        id
    }: pegarUnicoCarrinhoUseCaseRequest): Promise<pegarUnicoCarrinhoUseCaseResponse> {

        const carrinho = await this.carrinhoRepository.pegarUnicoCarrinho(id);
        if (!carrinho) throw new CarrinhoNaoExiste()

        return { 
            carrinho
        };
    }
}
