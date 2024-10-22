export class ErroAoCarregarClientes extends Error {
    constructor() {
        super('Erro ao carregar clientes.')
    }
}