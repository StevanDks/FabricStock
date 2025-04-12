import { Pedido } from "./Pedido";

class Transportadora {
    id: number;
    nome: string;
    tempoDeEntregaEstimado: string;
    localDeEntrega: string;
    Pedidos: Pedido[];

    constructor(id: number, nome: string, tempoDeEntregaEstimado: string, localDeEntrega: string) {
        this.id = id;
        this.nome = nome;
        this.tempoDeEntregaEstimado = tempoDeEntregaEstimado;
        this.localDeEntrega = localDeEntrega;
        this.Pedidos = [];
    }

    atualizarStatusEntrega(pedidos: Pedido[], idPedido: number): void {

    }

    visualizarPedidos(pedidos: Pedido[]): void {

    }
}
