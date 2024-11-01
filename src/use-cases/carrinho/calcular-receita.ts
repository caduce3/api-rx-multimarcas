import { CarrinhoRepository } from "@/repositories/carrinho-repository";
import { ErroCarregarGrafico } from "../@errors/carrinho/erro-carregar-grafico";

interface PegarReceitaUseCaseRequest {
    date_init: string;
    date_finish: string;
}

interface PegarReceitaUseCaseResponse {
    receitaTotal: number;
}

export class PegarReceitaUseCase {
    constructor(
        private carrinhosRepository: CarrinhoRepository
    ) {}
    
    async execute({
        date_init, date_finish
    }: PegarReceitaUseCaseRequest): Promise<PegarReceitaUseCaseResponse> {

        const result = await this.carrinhosRepository.pegarReceitaTotal(date_init, date_finish);
        if(!result) throw new ErroCarregarGrafico();


        return { 
            receitaTotal: result.receitaTotal
        };
    }
}
