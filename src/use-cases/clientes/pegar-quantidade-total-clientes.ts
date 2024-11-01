import { ClientesRepository } from "@/repositories/cliente-repository";
import { ErroAoCarregarClientes } from "../@errors/cliente/cliente-erro-carregar";

interface pegarQuantidadeTotalClienteUseCaseRequest {
    date_init: string;
    date_finish: string;
}

interface pegarQuantidadeTotalClienteUseCaseResponse {
    quantidadeTotalClientes: number;
}

export class PegarQuantidadeTotalClienteUseCase {
    constructor(
        private clienteRepository: ClientesRepository
    ) {}
    
    async execute({
        date_init, date_finish
    }: pegarQuantidadeTotalClienteUseCaseRequest): Promise<pegarQuantidadeTotalClienteUseCaseResponse> {

        const qtdClients = await this.clienteRepository.pegarQtdTotalCliente(date_init, date_finish);
        if (!qtdClients) throw new ErroAoCarregarClientes()

        return { 
            quantidadeTotalClientes: qtdClients.quantidadeTotalClientes
        };
    }
}
