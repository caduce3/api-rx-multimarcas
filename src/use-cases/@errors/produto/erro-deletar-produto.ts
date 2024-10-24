export class ErroDeletarProduto extends Error {
    constructor() {
        super('Erro ao deletar produto, tente novamente ou contate o suporte.')
    }
}