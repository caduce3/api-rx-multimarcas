import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { InvalidCredentialsError } from "@/use-cases/@errors/invalid-credentials-error";
import { FuncionarioInativo } from "@/use-cases/@errors/funcionario-inativo";
import { makeAuthenticateFuncionarioUseCase } from "@/use-cases/@factories/funcionarios/make-authenticate-funcionario-use-case";

export async function authenticateFuncionario(request: FastifyRequest, reply: FastifyReply) {
    const authenticateFuncionarioBodySchema = z.object({
        email: z.string().email(),
        senha: z.string().min(6)
    })

    const { email, senha } = authenticateFuncionarioBodySchema.parse(request.body)

    try {
        const authenticateFuncionarioUseCase = makeAuthenticateFuncionarioUseCase()

        const { funcionario } = await authenticateFuncionarioUseCase.execute({
            email,
            senha
        })

        const token = await reply.jwtSign(
            {}, 
            {
            sign: {
                sub: funcionario.id
            }
            }
        )

        return reply.status(200).send({token})

    } catch (error) {
        if(
               error instanceof InvalidCredentialsError 
            || error instanceof FuncionarioInativo) {
        
            return reply.status(409).send({message: error.message})
        }
        throw error
    }
}