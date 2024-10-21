export class ClienteAlreadyExistsError extends Error {
    constructor() {
        super('Cliente com esse email já existe')
    }
}