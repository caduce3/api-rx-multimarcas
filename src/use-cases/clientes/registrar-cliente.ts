import { ClientesRepository } from "@/repositories/cliente-repository";
import { Clientes } from "@prisma/client";
import { ClienteAlreadyExistsError } from "../@errors/cliente-ja-existe";
import { validarEFormatarTelefone } from "@/services/formatar-telefone";
import { validarFormatarCPF } from "@/services/formatar-cpf";

interface Endereco {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
}

interface RegisterClienteRequest {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    endereco?: Endereco;
}

interface RegisterClienteResponse {
    cliente: Clientes;
}

export class RegisterClienteUseCase {
    constructor(
        private clientesRepository: ClientesRepository

    ) {}

    async execute({
        nome,
        email,
        telefone,
        cpf,
        endereco
    }: RegisterClienteRequest): Promise<RegisterClienteResponse> {

        if (!email || !email.trim()) {
            throw new Error("O campo de email é obrigatório.");
        }
        
        const clienteJaExiste = await this.clientesRepository.findByEmail(
            email.trim().toLowerCase()
        );

        if (clienteJaExiste) {
            throw new ClienteAlreadyExistsError();
        }

        if(endereco) {
            const cliente = await this.clientesRepository.createCliente({
                nome,
                email: email.trim().toLowerCase(),
                telefone: validarEFormatarTelefone(telefone),
                cpf: validarFormatarCPF(cpf),
                Endereco: {
                    create: endereco
                }
            });

            return {
                cliente
            };
        } else {
            const cliente = await this.clientesRepository.createCliente({
                nome,
                email: email.trim().toLowerCase(),
                telefone: validarEFormatarTelefone(telefone),
                cpf: validarFormatarCPF(cpf)
            });

            return {
                cliente
            };
        }
    }
}