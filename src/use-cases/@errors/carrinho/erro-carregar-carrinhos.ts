export class ErroCarregarCarrinhos extends Error {
    constructor() {
        super('Erro ao carregar carrinhos.')
    }
}