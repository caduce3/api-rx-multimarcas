import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { FuncionarioAlreadyExistsError } from "@/use-cases/@errors/funcionario-ja-existe";
import { makeAtualizarFuncionarioUseCase } from "@/use-cases/@factories/funcionarios/make-atualizar-funcionario-use-case"
import { FuncionarioNaoExiste } from "@/use-cases/@errors/funcionario-nao-existe copy";
import { ErroAoAtualizarFuncionario } from "@/use-cases/@errors/funcionario-erro-atualizar";
import { TelefoneDeveConterOzeDigitos } from "@/use-cases/@errors/erro-telefone-deve-ter-11-digitos";
import { DddInvalido } from "@/use-cases/@errors/erro-ddd-invalido";
import { CpfDeveConterOzeDigitos } from "@/use-cases/@errors/erro-cpf-deve-ter-11-digitos";
import { CpfInvalido } from "@/use-cases/@errors/erro-cpf-inválido";
import { makeDeletarFuncionarioUseCase } from "@/use-cases/@factories/funcionarios/make-deletar-funcionario-use-case";

export async function deletarFuncionario(request: FastifyRequest, reply: FastifyReply) {
    const deletarFuncionarioBodySchema = z.object({
        id: z.string(),

    })

    const { id } = deletarFuncionarioBodySchema.parse(request.body)

    try {
        const deletarFuncionarioUseCase = makeDeletarFuncionarioUseCase()

        await deletarFuncionarioUseCase.execute({
            id
        })

    } catch (error) {
        if(error instanceof FuncionarioNaoExiste ) {
            return reply.status(409).send({message: error.message})
        }
        throw error
    }

    return reply.status(200).send(
        {
            message: "Funcionário deletado com sucesso"
        }
    )
}