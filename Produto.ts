export class Produto {
    id: number;
    nome: string;
    quantidade: number;

    constructor(id: number, nome: string, quantidade: number) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
    }
}
