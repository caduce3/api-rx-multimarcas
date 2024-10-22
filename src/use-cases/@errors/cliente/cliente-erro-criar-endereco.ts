export class ErroAoCriarEnderecoCliente extends Error {
    constructor() {
        super('Erro ao criar endereço do cliente.')
    }
}