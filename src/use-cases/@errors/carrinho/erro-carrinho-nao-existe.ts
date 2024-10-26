export class CarrinhoNaoExiste extends Error {
    constructor() {
        super('Carrinho não existe')
    }
}