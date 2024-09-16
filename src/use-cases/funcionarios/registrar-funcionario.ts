import { FuncionarioRepository } from "@/repositories/funcionario-repository";
import { hash } from "bcryptjs";
import { FuncionarioAlreadyExistsError } from "../@errors/funcionario-ja-existe";
import { Funcionario } from "@prisma/client";

interface RegisterFuncionarioRequest {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    senha: string;
}

interface RegisterFuncionarioResponse {
    funcionario: Funcionario
}

export class RegisterFuncionarioUseCase {
    constructor(private funcionarioRepository: FuncionarioRepository) {}

    async execute ({ nome, email, telefone, cpf, senha}: RegisterFuncionarioRequest): Promise<RegisterFuncionarioResponse> {

        const senha_hash = await hash(senha, 6)

        const funcionarioJaExiste = await this.funcionarioRepository.findByEmail(email)
    
        if(funcionarioJaExiste) throw new FuncionarioAlreadyExistsError()
    
        const funcionario = await this.funcionarioRepository.createFuncionario({
            nome,
            email,
            telefone,
            cpf,
            senha: senha_hash
        })

        return {
            funcionario
        }
    }
}