import { makeDeletarClienteUseCase } from "@/use-cases/@factories/clientes/make-deletar-cliente-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deletarCliente(request: FastifyRequest, reply: FastifyReply) {
    const deletarClienteBodySchema = z.object({
        id_cliente: z.string().uuid()
    })

    const { 
        id_cliente
    } = deletarClienteBodySchema.parse(request.body)

    try {
        const deletarClienteUseCase = makeDeletarClienteUseCase()

        await deletarClienteUseCase.execute({
            id_cliente
        })

        return reply.status(200).send({
            message: "Cliente deletado com sucesso!"
        });

    } catch (error) {
        return reply.status(500).send({ message: 'Erro ao deletar o cliente.' });
    }
}