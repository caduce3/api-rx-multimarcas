import {  ItemCarrinho } from "@prisma/client";
import { ProdutoRepository } from "@/repositories/produto-repository";
import { ItemCarrinhoRepository } from "@/repositories/item-carrinho-repository";
import { ProdutoNaoExiste } from "../@errors/produto/erro-produto-nao-existe";
import { ErroAoCriarItemCarrinho } from "../@errors/item-carrinho/erro-criar-item-carrinho";

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

        const criarItemCarrinho = await this.itemCarrinhoRepository.createItemCarrinho({
            Carrinho: { connect: { id: carrinhoId } },
            Produtos: { connect: { id: produtoId } },
            unidadesProduto,
            totalItemCarrinho: (produtoExiste.preco * unidadesProduto)
        })

        if(!criarItemCarrinho) throw new ErroAoCriarItemCarrinho();

        return {
            itemCarrinho: criarItemCarrinho
        }
    }
}