export class FuncionarioInativo extends Error {
    constructor() {
        super('O colaborador está bloqueado, entre em contato com o setor de desenvolvimento para liberar o acesso.')
    }
}