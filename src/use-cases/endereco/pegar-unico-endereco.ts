import { Endereco } from "@prisma/client";
import { ClientesRepository } from "@/repositories/cliente-repository";
import { ClienteNaoExiste } from "../@errors/cliente/cliente-nao-existe";
import { EnderecoClienteNaoExiste } from "../@errors/cliente/endereco-cliente-nao-existe";

interface pegarUnicoEnderecoClienteUseCaseRequest {
    id: string;
}

interface pegarUnicoEnderecoClienteUseCaseResponse {
    endereco: Endereco;
}

export class PegarUnicoEnderecoClienteUseCase {
    constructor(
        private clienteRepository: ClientesRepository
    ) {}
    
    async execute({
        id
    }: pegarUnicoEnderecoClienteUseCaseRequest): Promise<pegarUnicoEnderecoClienteUseCaseResponse> {

        const endereco = await this.clienteRepository.findEnderecoById(id);
        if (!endereco) throw new EnderecoClienteNaoExiste()

        return { 
            endereco
        };
    }
}
