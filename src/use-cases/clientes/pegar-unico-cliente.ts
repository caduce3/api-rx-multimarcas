import { Clientes } from "@prisma/client";
import { ClientesRepository } from "@/repositories/cliente-repository";
import { ClienteNaoExiste } from "../@errors/cliente/cliente-nao-existe";

interface pegarUnicoClienteUseCaseRequest {
    id: string;
}

interface pegarUnicoClienteUseCaseResponse {
    cliente: Clientes;
}

export class PegarUnicoClienteUseCase {
    constructor(
        private clienteRepository: ClientesRepository
    ) {}
    
    async execute({
        id
    }: pegarUnicoClienteUseCaseRequest): Promise<pegarUnicoClienteUseCaseResponse> {

        const cliente = await this.clienteRepository.pegarUnicoCliente(id);
        if (!cliente) throw new ClienteNaoExiste()

        return { 
            cliente
        };
    }
}
