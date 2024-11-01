export class ErroCarregarCardTotalCarrinho extends Error {
    constructor() {
        super('Erro ao carregar o total de vendas')
    }
}