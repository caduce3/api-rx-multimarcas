import { FastifyReply, FastifyRequest } from "fastify"

export function verificarCargo(cargoParaVerificar: 'PROPRIETARIO' | 'ADMINISTRADOR' | 'COLABORADOR') {
    return async (request: FastifyRequest, reply: FastifyReply) => {
        const { cargo } = request.user
    
        if(cargo != cargoParaVerificar) {
            return reply.status(401).send({ message: "Não autorizado!"})
        }
    }
}