export class ErroQuantidadeProdutoIndisponivel extends Error {
    constructor(qtdDisponivel: number, nomeProduto: string) {
        super(`O produto ${nomeProduto} tem ${qtdDisponivel} unidade(s) disponíveis em estoque, atualize o estoque do produto ou solicite uma quantidade menor.`);
    }
}
