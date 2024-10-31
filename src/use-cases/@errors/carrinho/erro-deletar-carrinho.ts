export class ErroDeletarCarrinho extends Error {
    constructor() {
        super('Erro interno ao deletar o carrinho, contate o suporte.')
    }
}