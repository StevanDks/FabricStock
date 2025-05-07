import { Produto } from "./Produto";

export class Pedido {
    id: number;
    data: Date;
    status: string;
    produtos: Produto[];

    constructor(id: number, data: Date, status: string, produtos: Produto[] = []) {
        if (produtos.length === 0) {
            throw new Error("O pedido deve conter pelo menos uma lista de produtos ou uma lista de matérias-primas.");
        }
        this.id = id;
        this.data = data;
        this.status = status;
        this.produtos = produtos;
    }
}
