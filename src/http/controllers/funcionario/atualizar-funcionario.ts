import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { FuncionarioAlreadyExistsError } from "@/use-cases/@errors/funcionario-ja-existe";
import { makeAtualizarFuncionarioUseCase } from "@/use-cases/@factories/funcionarios/make-atualizar-funcionario-use-case"
import { FuncionarioNaoExiste } from "@/use-cases/@errors/funcionario-nao-existe copy";
import { ErroAoAtualizarFuncionario } from "@/use-cases/@errors/funcionario-erro-atualizar";

export async function atualizarFuncionario(request: FastifyRequest, reply: FastifyReply) {
    const atualizarFuncionarioBodySchema = z.object({
        id: z.string(),
        nome: z.string().optional(),
        email: z.string().email().optional(),
        cpf: z.string().min(11).max(11).optional(),
        telefone: z.string().min(10).max(11).optional(),

    })

    const { id, nome, email, cpf, telefone} = atualizarFuncionarioBodySchema.parse(request.body)

    try {
        const atualizarFuncionarioUseCase = makeAtualizarFuncionarioUseCase()

        await atualizarFuncionarioUseCase.execute({
            id,
            nome,
            email,
            telefone,
            cpf
        })

    } catch (error) {
        if(error instanceof FuncionarioNaoExiste || error instanceof ErroAoAtualizarFuncionario ) {
            return reply.status(409).send({message: error.message})
        }
        throw error
    }

    return reply.status(201).send(
        {
            message: "Funcionário atualizado com sucesso"

        }
    )
}