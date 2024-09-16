import { FuncionarioRepository } from "@/repositories/funcionario-repository";
import { FuncionarioNaoExiste } from "../@errors/funcionario-nao-existe copy";
import { Funcionario } from "@prisma/client";
import { ErroAoAtualizarFuncionario } from "../@errors/funcionario-erro-atualizar";

interface AtualizarFuncionarioRequest {
    id: string;
    nome?: string;
    email?: string;
    telefone?: string;
    cpf?: string;
}

interface AtualizarFuncionarioResponse {
    funcionario: Funcionario
}

export class AtualizarFuncionarioUseCase {
    constructor(private funcionarioRepository: FuncionarioRepository) {}

    async execute ({ id, nome, email, telefone, cpf }: AtualizarFuncionarioRequest): Promise<AtualizarFuncionarioResponse> {

        const funcionario = await this.funcionarioRepository.findById(id)
        if(!funcionario) throw new FuncionarioNaoExiste()
    
        const atualizarFuncionario = await this.funcionarioRepository.atualizarFuncionario(id, {
            nome,
            email,
            telefone,
            cpf
        })

        if(!atualizarFuncionario) throw new ErroAoAtualizarFuncionario()

        return {
            funcionario: atualizarFuncionario
        }
    }
}