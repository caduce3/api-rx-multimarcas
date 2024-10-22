import { ClientesRepository } from "@/repositories/cliente-repository"
import { EnderecoClienteNaoExiste } from "../@errors/endereco-cliente-nao-existe";
import { ErroAoDeletarEnderecoCliente } from "../@errors/error-deletar-endereco-cliente";


interface DeletarEnderecoClienteRequest {
    id_endereco: string
}

interface DeletarEnderecoClienteResponse {
    boolean: boolean
}

export class DeletarEnderecoClienteUseCase {
    constructor(private clientesRepository: ClientesRepository) {}

    async execute({ id_endereco }: DeletarEnderecoClienteRequest): Promise<DeletarEnderecoClienteResponse> {

        const enderecoExiste = await this.clientesRepository.findEnderecoById(id_endereco);
        if(!enderecoExiste) throw new EnderecoClienteNaoExiste()
        
        const deletarEnderecoCliente = await this.clientesRepository.deletarEnderecoCliente(id_endereco)
        if(!deletarEnderecoCliente) throw new ErroAoDeletarEnderecoCliente()

        return { 
            boolean: true
         }
    }
}