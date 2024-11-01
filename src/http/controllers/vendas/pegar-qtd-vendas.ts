import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ErroAoCarregarProdutos } from "@/use-cases/@errors/produto/erro-carregar-produtos";
import { makePegarCarrinhosUseCase } from "@/use-cases/@factories/carrinho/make-pegar-carrinhos-use-case";
import { ErroCarregarCarrinhos } from "@/use-cases/@errors/carrinho/erro-carregar-carrinhos";
import { makePegarQuantidadeTotalCarrinhoUseCase } from "@/use-cases/@factories/carrinho/make-pegar-qtd-total-carrinho-use-case";

export async function pegarQuantidadeVendas(request: FastifyRequest, reply: FastifyReply) {
    const pegarQuantidadeVendasBodySchema = z.object({
        date_init: z.string(),
        date_finish: z.string(),
    })

    const { 
        date_init, date_finish
    } = pegarQuantidadeVendasBodySchema.parse(request.body)

    try {
        const pegarQtdCarrinhosUseCase = makePegarQuantidadeTotalCarrinhoUseCase()

        const qtd = await pegarQtdCarrinhosUseCase.execute({
            date_init, date_finish
        })

        return reply.status(200).send({
            qtd
        })

    } catch (error) {
        if(
            error instanceof ErroAoCarregarProdutos ||
            error instanceof ErroCarregarCarrinhos)
        {
            return reply.status(409).send({message: error.message})
        }

        throw error
    }
}