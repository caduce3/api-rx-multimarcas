export class ProdutoJaExiste extends Error {
    constructor() {
        super('Já existe um produto com esse nome.')
    }
}