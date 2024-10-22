import { Clientes } from "@prisma/client";
import { ErroAoCarregarPagina } from "../@errors/erro-carregar-pagina";
import { ClientesRepository } from "@/repositories/cliente-repository";
import { ErroAoCarregarClientes } from "../@errors/cliente/cliente-erro-carregar";

interface pegarClientesUseCaseRequest {
    page: number;
    nome?: string;
    telefone?: string;
    email?: string;
    cpf?: string;
}

interface pegarClientesUseCaseResponse {
    clientesList: Clientes[];
    totalItens: number;
    totalPages: number;
    currentPage: number;
}

export class PegarClientesUseCase {
    constructor(
        private clientesRepository: ClientesRepository
    ) {}
    
    async execute({
        page, nome, telefone, email, cpf
    }: pegarClientesUseCaseRequest): Promise<pegarClientesUseCaseResponse> {

        if (page <= 0) page = 1;

        const take = 10;
        const { clientes, totalCount } = await this.clientesRepository.pegarClientes(take, page, nome, telefone, email, cpf);

        if (!clientes || clientes.length === 0) {
            return {
                clientesList: [],
                totalItens: 0,
                totalPages: 0,
                currentPage: page
            };
        }

        const totalPages = Math.ceil(totalCount / take);
        if (totalPages === 0) throw new ErroAoCarregarClientes();
        if (page > totalPages) throw new ErroAoCarregarPagina();

        return { 
            clientesList: clientes,
            totalItens: totalCount,
            totalPages,
            currentPage: page
        };
    }
}
