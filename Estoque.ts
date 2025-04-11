import { Produto } from "./Produto";

export class Estoque {
    reposicao: boolean;
    produtos: Produto[];

    constructor(produtos: Produto[]) {
        if (produtos.length === 0) {
            throw new Error("O estoque deve conter pelo menos um produto.");
        }
        this.reposicao = false;
        this.produtos = produtos;
    }

    gerenciarSaida(nomeProduto: string): Produto | undefined {
        const produto = this.produtos.find(p => p.nome === nomeProduto);
        if (produto && produto.quantidade > 0) {
            produto.quantidade--;
            return produto;
        }
        return undefined;
    }

    gerenciarEntrada(produto: Produto): void {
        const existente = this.produtos.find(p => p.nome === produto.nome);
        if (existente) {
            existente.quantidade += produto.quantidade;
        } else {
            this.produtos.push(produto);
        }
    }
}
