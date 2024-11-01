import { CarrinhoRepository } from "@/repositories/carrinho-repository";
import { ErroCarregarGrafico } from "../@errors/carrinho/erro-carregar-grafico";

interface PegarSomaValorTotalByMesUseCaseRequest {
    ano: string;
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
        ano
    }: PegarSomaValorTotalByMesUseCaseRequest): Promise<PegarSomaValorTotalByMesUseCaseResponse> {

        const result = await this.carrinhosRepository.pegarSomaValorTotalMes(ano);
        if(!result) throw new ErroCarregarGrafico();


        return { 
            result: result
        };
    }
}
