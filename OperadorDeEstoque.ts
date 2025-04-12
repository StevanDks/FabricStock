import { Usuario } from "./Usuario";
import { Produto } from "./Produto";
import { Estoque } from "./Estoque";

class OperadorDeEstoque extends Usuario {

    constructor(id: number, nome: string, email: string, senha: string) {
        super(id, nome, email, senha, 1);
    }

    registrarEntrada(estoque: Estoque, produto: Produto): void {
        estoque.produtos.push(produto);
    }

    registrarSaida(estoque: Estoque): Produto {
        const produto = estoque.produtos.shift();
        if (!produto) {
            throw new Error("Estoque vazio, não é possível registrar saída.");
        }
        return produto;
    }

    verificarReposicao(estoque: Estoque): void {
        if (estoque.reposicao) {
            this.registrarSaida(estoque);
            console.log("Produto adicionado às prateleiras");
        } else {
            console.log("Não é necessario reposição");
        }
    }
}
