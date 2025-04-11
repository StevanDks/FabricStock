import { Produto } from "./Produto";
import { MateriaPrima } from "./MateriaPrima"

export class Pedido {
    id: number;
    data: Date;
    status: string;
    produtos: Produto[];
    materiasPrimas: MateriaPrima[];

    constructor(id: number, data: Date, status: string) {
        this.id = id;
        this.data = data;
        this.status = status;
        this.produtos = [];
        this.materiasPrimas = [];
    }
}
