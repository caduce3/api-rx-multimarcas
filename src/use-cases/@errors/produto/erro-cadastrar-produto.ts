export class ErroCadastrarProduto extends Error {
    constructor() {
        super('Erro ao cadastrar produto, tente novamente ou contate o suporte.')
    }
}