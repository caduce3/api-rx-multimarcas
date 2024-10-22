import { Clientes } from "@prisma/client";
import { validarFormatarCPF } from "@/services/formatar-cpf";
import { validarEFormatarTelefone } from "@/services/formatar-telefone";
import { ClientesRepository } from "@/repositories/cliente-repository";
import { ClienteNaoExiste } from "../@errors/cliente-nao-existe";
import { ClienteAlreadyExistsError } from "../@errors/cliente-ja-existe";
import { ErroAoAtualizarCliente } from "../@errors/cliente-erro-atualizar";

interface AtualizarClienteRequest {
    id: string;
    nome?: string;
    email?: string;
    telefone?: string;
    cpf?: string;
}

interface AtualizarClienteResponse {
    cliente: Clientes
}

export class AtualizarClienteUseCase {
    constructor(private clienteRepository: ClientesRepository) {}

    async execute ({ id, nome, email, telefone, cpf }: AtualizarClienteRequest): Promise<AtualizarClienteResponse> {

        const cliente = await this.clienteRepository.findClienteById(id)
        if(!cliente) throw new ClienteNaoExiste()
        
        if(cpf != cliente.cpf && cpf != "") {
            const verifyCpf = await this.clienteRepository.findClienteByCpf(cpf ?? "")
            console.log(verifyCpf)
            if(verifyCpf) throw new ClienteAlreadyExistsError()
        }

        const atualizarCliente = await this.clienteRepository.atualizarCliente(id, {
            nome,
            email: email ? email.trim().toLowerCase() : cliente.email,
            telefone: telefone ? validarEFormatarTelefone(telefone) : cliente.telefone,
            cpf: cpf ? validarFormatarCPF(cpf) : cliente.cpf,
        })
        if(!atualizarCliente) throw new ErroAoAtualizarCliente()
 
        return {
            cliente: atualizarCliente
        }
    }
}