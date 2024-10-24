export class ProdutoNaoExiste extends Error {
    constructor() {
        super('O produto não existe.')
    }
}