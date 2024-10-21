import { FastifyInstance } from "fastify";
import { registerFuncionario } from "./funcionario/register";
import { authenticateFuncionario } from "./funcionario/authenticate";
import { verifyJwt } from "../middlewares/verify-jwt";
import { getProfile } from "./funcionario/profile";
import { atualizarFuncionario } from "./funcionario/atualizar-funcionario";
import { getFuncionarios } from "./funcionario/pegar-funcionarios";
import { getUnicoFuncionario } from "./funcionario/pegar-unico-funcionario";
import { refresh } from "./funcionario/refresh";
import { verificarCargo } from "../middlewares/verificar-cargo";
import { registrarCliente } from "./cliente/registrar-cliente";
import { deletarCliente } from "./cliente/deletar-cliente";
import { deletarFuncionario } from "./funcionario/deletar-funcionario";

export async function appRoutes(app: FastifyInstance) {
    app.post('/funcionario', registerFuncionario)
    app.post('/sessions', authenticateFuncionario)

    app.patch('/token/refresh', refresh)

    //precisa estar autenticado para acessar
    
    //ROTAS DE FUNCIONÁRIOS
    app.get('/me', { onRequest: [verifyJwt] }, getProfile);
    app.put('/atualizar_funcionario', { onRequest: [verifyJwt, verificarCargo(['ADMINISTRADOR', 'PROPRIETARIO'])]}, atualizarFuncionario);
    app.post('/pegar_funcionarios', { onRequest: [verifyJwt] }, getFuncionarios)
    app.get('/pegar_unico_funcionario/:id', { onRequest: [verifyJwt, verificarCargo(['ADMINISTRADOR', 'PROPRIETARIO'])] }, getUnicoFuncionario)
    app.post('/deletar_funcionario', { onRequest: [verifyJwt, verificarCargo(['ADMINISTRADOR', 'PROPRIETARIO'])] }, deletarFuncionario);


    //ROTAS DE CLIENTES
    app.post('/registrar_cliente', { onRequest: [verifyJwt] }, registrarCliente);
    app.post('/deletar_cliente', { onRequest: [verifyJwt] }, deletarCliente);


}