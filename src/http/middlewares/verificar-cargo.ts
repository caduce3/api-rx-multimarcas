import { FastifyReply, FastifyRequest } from "fastify";

export function verificarCargo(cargoParaVerificar: 'PROPRIETARIO' | 'ADMINISTRADOR' | 'COLABORADOR') {
    return async (request: FastifyRequest, reply: FastifyReply) => {
        console.log("Cargo do usuário:", request.user.cargo); // Confirme se 'cargo' está presente
        console.log("Cargo para verificar:", cargoParaVerificar);

        const { cargo } = request.user;

        if (cargo !== cargoParaVerificar) {
            return reply.status(401).send({ message: "Não autorizado!" });
        }
    };
}
