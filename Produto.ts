import { Lote } from "./Lote";

export class Produto {
    id: number;
    nome: string;
    quantidade: number;
    lotes: Lote[];
    tipo: string;

    constructor(id: number, nome: string, quantidade: number, tipo: string) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.lotes = [];
        this.tipo = tipo;
    }

    adicionarLote(lote: Lote): void {
        if (!this.lotes.includes(lote)) {
            this.lotes.push(lote);
            lote.adicionarProduto(this);
        }
    }

    listarLotes(): Lote[] {
        return this.lotes;
    }
}
