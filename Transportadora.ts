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
        const pedido = pedidos.find(p => p.id === idPedido);
        if (pedido?.status === 'Em Transporte') {
            pedido.status = "Entregue";
            console.log(`Pedido ${pedido.id} entregue com sucesso!`);
        } else if (pedido?.status === 'Pendente') {
            pedido.status = "Em Transporte";
            console.log(`Pedido ${idPedido} em transporte.`);
        } else {
            console.log(`Pedido ID: ${pedido?.id} já está com status: ${pedido?.status}`);
        }
    }

    visualizarPedidos(pedidos: Pedido[]): void {
        pedidos.forEach(pedido => {
            console.log(`Pedido ID: ${pedido.id}, Data: ${pedido.data}, Status: ${pedido.status}`);
            console.log('Produtos:');
            pedido.produtos.forEach(produto => {
                console.log(`- ${produto.nome}, Quantidade: ${produto.quantidade}`);
            });
            console.log('Materias Primas:');
            pedido.materiasPrimas.forEach(materiaPrima => {
                console.log(`- ${materiaPrima.nome}, Quantidade: ${materiaPrima.quantidade}`);
            });
        });
    }
}
