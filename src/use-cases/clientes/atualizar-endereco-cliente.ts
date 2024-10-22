import { ClientesRepository } from "@/repositories/cliente-repository";
import { Endereco } from "@prisma/client";
import { ClienteNaoExiste } from "../@errors/cliente-nao-existe";
import { ErroAoCriarEnderecoCliente } from "../@errors/cliente-erro-criar-endereco";
import { EnderecoClienteNaoExiste } from "../@errors/endereco-cliente-nao-existe";
import { ErroAoAtualizarEnderecoCliente } from "../@errors/cliente-erro-atualizar-endereco";


interface AtualizarEnderecoClienteRequest {
    id_endereco: string;
    endereco: {
        rua?: string;
        numero?: string;
        bairro?: string;
        cidade?: string;
        estado?: string;
        cep?: string;
    }
}

interface AtualizarEnderecoClienteResponse {
    endereco: {
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
    }
}

export class AtualizarEnderecoClienteUseCase {
    constructor(
        private clientesRepository: ClientesRepository
    ) {}

    async execute({ id_endereco, endereco }: AtualizarEnderecoClienteRequest): Promise<AtualizarEnderecoClienteResponse> {

        const enderecoCliente = await this.clientesRepository.findEnderecoById(id_endereco);
        if(!enderecoCliente) throw new EnderecoClienteNaoExiste();

        const atualizarEndereco = await this.clientesRepository.atualizarEnderecoCliente(id_endereco, {
            ...endereco
        })

        if(!atualizarEndereco) throw new ErroAoAtualizarEnderecoCliente();

        return {
            endereco: atualizarEndereco
        }
    }
}