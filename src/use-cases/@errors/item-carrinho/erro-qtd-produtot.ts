export class ErroQuantidadeProdutoIndisponivel extends Error {
    constructor(qtdDisponivel: number) {
        super(`O produto desejado só tem ${qtdDisponivel} unidade(s) disponíveis em estoque, atualize o estoque do produto ou solicite uma quantidade menor.`);
    }
}
