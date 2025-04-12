import { Produto } from "./Produto";
import { MateriaPrima } from "./MateriaPrima"

export class Pedido {
    id: number;
    data: Date;
    status: string;
    produtos: Produto[];
    materiasPrimas: MateriaPrima[];

    constructor(id: number, data: Date, status: string, produtos: Produto[] = [], materiasPrimas: MateriaPrima[] = []) {
        if (produtos.length === 0 && materiasPrimas.length === 0) {
            throw new Error("O pedido deve conter pelo menos uma lista de produtos ou uma lista de matérias-primas.");
        }
        this.id = id;
        this.data = data;
        this.status = status;
        this.produtos = produtos;
        this.materiasPrimas = materiasPrimas;
    }
}
