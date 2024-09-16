export class FuncionarioAlreadyExistsError extends Error {
    constructor() {
        super('Este funcionário já existe.')
    }
}