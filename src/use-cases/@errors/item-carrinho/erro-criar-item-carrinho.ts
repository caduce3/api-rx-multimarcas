export class ErroAoCriarItemCarrinho extends Error {
    constructor() {
        super('Erro ao criar item do carrinho.')
    }
}