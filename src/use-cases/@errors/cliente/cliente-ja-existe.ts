export class ClienteAlreadyExistsError extends Error {
    constructor() {
        super('Cliente já existe')
    }
}