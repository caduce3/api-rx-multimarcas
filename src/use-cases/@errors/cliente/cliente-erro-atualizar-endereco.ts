export class ErroAoAtualizarEnderecoCliente extends Error {
    constructor() {
        super('Erro ao atualizar endereço do cliente.')
    }
}