import { Carrinho, TipoPagamento } from "@prisma/client";
import { CarrinhoRepository } from "@/repositories/carrinho-repository";
import { CarrinhoNaoExiste } from "../@errors/carrinho/erro-carrinho-nao-existe";
import { ErroAtualizarCarrinho } from "../@errors/carrinho/erro-atualizar-carrinho";

interface AtualizarCarrinhoRequest {
    id_carrinho: string;
    clienteId?: string;
    funcionarioId?: string;
    valorTotal?: number;
    desconto?: number;
    tipoPagamento?: TipoPagamento;
    subtotal?: number;
}

interface AtualizarCarrinhoResponse {
    carrinho: Carrinho
}

export class AtualizarCarrinhoUseCase {
    constructor(private carrinhoRepository: CarrinhoRepository) {}

    async execute ({ id_carrinho, clienteId, funcionarioId, valorTotal, desconto, tipoPagamento, subtotal }: AtualizarCarrinhoRequest): Promise<AtualizarCarrinhoResponse> {

        const carrinhoExiste = await this.carrinhoRepository.findById(id_carrinho)
        if(!carrinhoExiste) throw new CarrinhoNaoExiste()

        const atualizarCarrinho = await this.carrinhoRepository.atualizarCarrinho(id_carrinho, {
            clienteId,
            funcionarioId,
            valorTotal,
            desconto,
            tipoPagamento,
            subtotal
        })
        if(!atualizarCarrinho) throw new ErroAtualizarCarrinho()
 
        return {
            carrinho: atualizarCarrinho
        }
    }
}