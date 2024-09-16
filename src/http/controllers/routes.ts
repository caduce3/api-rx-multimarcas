import { FastifyInstance } from "fastify";
import { registerFuncionario } from "./funcionario/register";
import { authenticateFuncionario } from "./funcionario/authenticate";
import { verifyJwt } from "../middlewares/verify-jwt";
import { getProfile } from "./funcionario/profile";
import { atualizarFuncionario } from "./funcionario/atualizar-funcionario";
import { getFuncionarios } from "./funcionario/pegar-funcionarios";

export async function appRoutes(app: FastifyInstance) {
    app.post('/funcionario', registerFuncionario)
    app.post('/sessions', authenticateFuncionario)

    //precisa estar autenticado para acessar
    
    //ROTAS DE FUNCIONÁRIOS
    app.get('/me', { onRequest: [verifyJwt] }, getProfile);
    app.put('/atualizar_funcionario', { onRequest: [verifyJwt] }, atualizarFuncionario);
    app.post('/pegar_funcionarios', { onRequest: [verifyJwt] }, getFuncionarios)


}