import { Produto } from "./Produto";

export class Lote {
    numeroDoLote: number;
    descricao: string;
    dataDeAquisicao: Date;
    produtos: Produto[];

    constructor(numeroDoLote: number, descricao: string, dataDeAquisicao: Date) {
        this.numeroDoLote = numeroDoLote;
        this.descricao = descricao;
        this.dataDeAquisicao = dataDeAquisicao;
        this.produtos = [];
    }

    adicionarProduto(produto: Produto): void {
        if (!this.produtos.includes(produto)) {
            this.produtos.push(produto);
            produto.adicionarLote(this);
        }
    }

    listarProdutos(): Produto[] {
        return this.produtos;
    }
}
