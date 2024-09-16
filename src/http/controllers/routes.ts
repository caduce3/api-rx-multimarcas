import { FastifyInstance } from "fastify";
import { registerUser } from "./funcionario/register";
import { authenticateUser } from "./funcionario/authenticate";
import { addPlayer } from "./cliente/add-player";
import { verifyJwt } from "../middlewares/verify-jwt";

export async function appRoutes(app: FastifyInstance) {
    app.post('/funcionario', registerUser)
    app.post('/sessions', authenticateUser)

    //precisa estar autenticado para acessar
    app.post('/add_player', { onRequest: [verifyJwt]}, addPlayer)


}