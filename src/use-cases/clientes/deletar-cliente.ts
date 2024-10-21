import { ClientesRepository } from "@/repositories/cliente-repository"
import { Clientes } from "@prisma/client"


interface DeletarClienteRequest {
    id_cliente: string
}

interface DeletarClienteResponse {
    cliente: Clientes | null
}

export class DeletarClienteUseCase {
    constructor(private clientesRepository: ClientesRepository) {}

    async execute({ id_cliente }: DeletarClienteRequest): Promise<DeletarClienteResponse> {
        
        const cliente = await this.clientesRepository.deletarCliente(id_cliente)

        return { cliente }
    }
}