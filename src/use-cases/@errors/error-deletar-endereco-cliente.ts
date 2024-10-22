export class ErroAoDeletarEnderecoCliente extends Error {
    constructor() {
        super('Erro ao deletar endereço do cliente.')
    }
}