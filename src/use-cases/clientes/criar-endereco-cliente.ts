import { ClientesRepository } from "@/repositories/cliente-repository";
import { Endereco } from "@prisma/client";
import { ClienteNaoExiste } from "../@errors/cliente/cliente-nao-existe";
import { ErroAoCriarEnderecoCliente } from "../@errors/cliente/cliente-erro-criar-endereco";


interface CriarEnderecoClienteRequest {
    id_cliente: string;
    endereco: {
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
    }
}

interface CriarEnderecoClienteResponse {
    endereco: {
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
    }
}

export class CriarEnderecoClienteUseCase {
    constructor(
        private clientesRepository: ClientesRepository
    ) {}

    async execute({ id_cliente, endereco }: CriarEnderecoClienteRequest): Promise<CriarEnderecoClienteResponse> {

        const cliente = await this.clientesRepository.findClienteById(id_cliente);
        if(!cliente) throw new ClienteNaoExiste();

        const criarEndereco = await this.clientesRepository.createEnderecoCliente({
            rua: endereco.rua,
            numero: endereco.numero,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
            cep: endereco.cep,
            Clientes: {
                connect: { id: id_cliente } 
            }
        })

        if(!criarEndereco) throw new ErroAoCriarEnderecoCliente();

        return {
            endereco: criarEndereco
        }
    }
}