export class FuncionarioNaoExiste extends Error {
    constructor() {
        super('Este funcionário não existe.')
    }
}