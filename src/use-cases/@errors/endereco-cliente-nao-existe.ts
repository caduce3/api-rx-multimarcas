export class EnderecoClienteNaoExiste extends Error {
    constructor() {
        super('Endereço não encontrado!')
    }
}