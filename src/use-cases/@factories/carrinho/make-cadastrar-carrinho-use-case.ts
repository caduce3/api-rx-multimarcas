import { PrismaCarrinhoRepository } from "@/repositories/prisma/prisma-carrinho-repository";
import { PrismaClientesRepository } from "@/repositories/prisma/prisma-clientes-repository";
import { PrismaFuncionarioRepository } from "@/repositories/prisma/prisma-funcionarios-repository";
import { CadastrarCarrinhoUseCase } from "@/use-cases/carrinho/criar-carrinho";

export function makeCadastrarCarrinhoUseCase(){
    const carrinhoRepository = new PrismaCarrinhoRepository()
    const clienteRepository = new PrismaClientesRepository()
    const funcionarioRepository = new PrismaFuncionarioRepository()

    const cadastrarCarrinhoUseCase = new CadastrarCarrinhoUseCase(carrinhoRepository, clienteRepository, funcionarioRepository )

    return cadastrarCarrinhoUseCase
}