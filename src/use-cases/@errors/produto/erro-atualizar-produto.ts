export class ErroAoAtualizarProduto extends Error {
    constructor() {
        super('Erro ao atualizar produto, tente novamente ou contate o suporte.')
    }
}