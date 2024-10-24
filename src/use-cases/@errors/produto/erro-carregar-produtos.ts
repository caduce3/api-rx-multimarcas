export class ErroAoCarregarProdutos extends Error {
    constructor() {
        super('Erro ao carregar produtos.')
    }
}