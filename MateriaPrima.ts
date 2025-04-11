import { Produto } from "./Produto";

export class MateriaPrima extends Produto {
    tipo: string;

    constructor(id: number, nome: string, quantidade: number, tipo: string) {
        super(id, nome, quantidade);
        this.tipo = tipo;
    }
}
