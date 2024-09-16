import { FastifyInstance } from "fastify";
import { registerFuncionario } from "./funcionario/register";
import { authenticateFuncionario } from "./funcionario/authenticate";
// import { addPlayer } from "./cliente/add-player";
import { verifyJwt } from "../middlewares/verify-jwt";

export async function appRoutes(app: FastifyInstance) {
    app.post('/funcionario', registerFuncionario)
    app.post('/sessions', authenticateFuncionario)

    //precisa estar autenticado para acessar
    // app.post('/add_player', { onRequest: [verifyJwt]}, addPlayer)


}