import { CarrinhoRepository } from "@/repositories/carrinho-repository";
import { ErroCarregarGrafico } from "../@errors/carrinho/erro-carregar-grafico";

interface PegarSomaValorTotalByMesUseCaseRequest {
    date_init: string;
    date_finish: string;
}

interface PegarSomaValorTotalByMesUseCaseResponse {
    result: {
        mes: string,
        valorTotal: number
    }[]
}

export class PegarSomaValorTotalByMesUseCase {
    constructor(
        private carrinhosRepository: CarrinhoRepository
    ) {}
    
    async execute({
        date_init, date_finish
    }: PegarSomaValorTotalByMesUseCaseRequest): Promise<PegarSomaValorTotalByMesUseCaseResponse> {

        const result = await this.carrinhosRepository.pegarSomaValorTotalMes(date_init, date_finish);
        if(!result) throw new ErroCarregarGrafico();


        return { 
            result: result
        };
    }
}
