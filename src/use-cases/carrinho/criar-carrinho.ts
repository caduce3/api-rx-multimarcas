import {  Carrinho, TipoPagamento } from "@prisma/client";
import { CarrinhoRepository } from "@/repositories/carrinho-repository";
import { ClientesRepository } from "@/repositories/cliente-repository";
import { FuncionarioRepository } from "@/repositories/funcionario-repository";
import { ClienteNaoExiste } from "../@errors/cliente/cliente-nao-existe";
import { FuncionarioNaoExiste } from "../@errors/funcionario/funcionario-nao-existe copy";
import { ErroAoCriarCarrinho } from "../@errors/carrinho/erro-criar-carrinho";

interface CadastrarCarrinhoRequest {
    clienteId: string;
    funcionarioId: string;
    desconto: number;
    subtotal: number;
    tipoPagamento: TipoPagamento;
    valorTotal: number;
}

interface CadastrarCarrinhoResponse {
    carrinho: Carrinho
}

export class CadastrarCarrinhoUseCase {
    constructor(
        private carrinhoRepository: CarrinhoRepository,
        private clienteRepository: ClientesRepository,
        private funcionarioRepository: FuncionarioRepository
    ) {}

    async execute ({ clienteId, funcionarioId, valorTotal, tipoPagamento, desconto, subtotal }: CadastrarCarrinhoRequest): Promise<CadastrarCarrinhoResponse> {

        //verificar se o cliente existe pelo id
        const clienteExiste = await this.clienteRepository.findClienteById(clienteId)
        if(!clienteExiste) throw new ClienteNaoExiste();

        //verificar se o funcionario existe pelo id
        const funcionarioExiste = await this.funcionarioRepository.findById(funcionarioId)
        if(!funcionarioExiste) throw new FuncionarioNaoExiste();

        const criarCarrinho = await this.carrinhoRepository.createCarrinho({
            Clientes: { connect: { id: clienteId } },
            Funcionario: { connect: { id: funcionarioId } },
            desconto,
            subtotal,
            tipoPagamento,
            valorTotal
        })

        if(!criarCarrinho) throw new ErroAoCriarCarrinho();

        return {
           carrinho: criarCarrinho
        }
    }
}