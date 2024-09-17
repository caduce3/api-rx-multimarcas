export class FuncionarioAlreadyExistsError extends Error {
    constructor() {
        super('CPF já cadastrado')
    }
}