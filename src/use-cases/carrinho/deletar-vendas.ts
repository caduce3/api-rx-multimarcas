import { Carrinho } from "@prisma/client"
import { CarrinhoRepository } from "@/repositories/carrinho-repository";
import { CarrinhoNaoExiste } from "../@errors/carrinho/erro-carrinho-nao-existe";
import { ErroDeletarCarrinho } from "../@errors/carrinho/erro-deletar-carrinho";


interface DeletarVendaRequest {
    id_carrinho: string
}

interface DeletarVendaResponse {
    carrinho: Carrinho | null;
}

export class DeletarCarrinhoUseCase {
    constructor(
        private carrinhoRepository: CarrinhoRepository
    ) {}

    async execute({ id_carrinho }: DeletarVendaRequest): Promise<DeletarVendaResponse> {

        const carrinhoExiste = await this.carrinhoRepository.findById(id_carrinho);
        if(!carrinhoExiste) throw new CarrinhoNaoExiste()
        
        const deletarCarrinho = await this.carrinhoRepository.deletarCarrinho(id_carrinho)
        if(!deletarCarrinho) throw new ErroDeletarCarrinho()

        return { 
            carrinho: deletarCarrinho
        }
    }
}