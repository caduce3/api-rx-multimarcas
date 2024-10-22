import { ClientesRepository } from "@/repositories/cliente-repository"
import { Clientes } from "@prisma/client"
import { ClienteAlreadyExistsError } from "../@errors/cliente-ja-existe";


interface DeletarClienteRequest {
    id_cliente: string
}

interface DeletarClienteResponse {
    cliente: Clientes | null
}

export class DeletarClienteUseCase {
    constructor(private clientesRepository: ClientesRepository) {}

    async execute({ id_cliente }: DeletarClienteRequest): Promise<DeletarClienteResponse> {

        const clienteExiste = await this.clientesRepository.findClienteById(id_cliente);
        if(!clienteExiste) throw new ClienteAlreadyExistsError()
        
        const deletarCliente = await this.clientesRepository.deletarCliente(id_cliente)

        return { cliente: deletarCliente }
    }
}