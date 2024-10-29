import {  ItemCarrinho } from "@prisma/client";
import { ProdutoRepository } from "@/repositories/produto-repository";
import { ItemCarrinhoRepository } from "@/repositories/item-carrinho-repository";
import { ProdutoNaoExiste } from "../@errors/produto/erro-produto-nao-existe";
import { ErroAoCriarItemCarrinho } from "../@errors/item-carrinho/erro-criar-item-carrinho";
import { ErroQuantidadeProdutoIndisponivel } from "../@errors/item-carrinho/erro-qtd-produtot";

interface CadastrarItemCarrinhoRequest {
    carrinhoId: string;
    produtoId: string;
    unidadesProduto: number;
}

interface CadastrarItemCarrinhoResponse {
    itemCarrinho: ItemCarrinho
}

export class CadastrarItemCarrinhoUseCase {
    constructor(
        private produtoRepository: ProdutoRepository,
        private itemCarrinhoRepository: ItemCarrinhoRepository
    ) {}

    async execute ({ carrinhoId, produtoId, unidadesProduto }: CadastrarItemCarrinhoRequest): Promise<CadastrarItemCarrinhoResponse> {

        //verificar se o produto existe
        const produtoExiste = await this.produtoRepository.findProdutoById(produtoId)
        if(!produtoExiste) throw new ProdutoNaoExiste();

        //antes de criar o itemCarrinho, verificar se a quantidadeDisponivel do produto é maior que a quantidade solicitada
        if(produtoExiste.quantidadeDisponivel < unidadesProduto) throw new ErroQuantidadeProdutoIndisponivel(produtoExiste.quantidadeDisponivel);

        const criarItemCarrinho = await this.itemCarrinhoRepository.createItemCarrinho({
            Carrinho: { connect: { id: carrinhoId } },
            Produtos: { connect: { id: produtoId } },
            unidadesProduto,
            totalItemCarrinho: Number((produtoExiste.preco * unidadesProduto).toFixed(2)),
        })
        if(!criarItemCarrinho) throw new ErroAoCriarItemCarrinho();

        //atualizar a quantidadeDisponivel do produto
        await this.produtoRepository.atualizarProduto(produtoId, {
            quantidadeDisponivel: produtoExiste.quantidadeDisponivel - unidadesProduto
        })

        return {
            itemCarrinho: criarItemCarrinho
        }
    }
}