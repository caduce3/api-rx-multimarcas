export class EnderecoClienteJaExiste extends Error {
    constructor() {
        super('O Cliente já tem um endereço.')
    }
}