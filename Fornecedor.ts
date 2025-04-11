import { Usuario } from "./Usuario";
import { Pedido } from "./Pedido";

class Fornecedor extends Usuario {
    Pedidos: Pedido[] = [];

    constructor(id: number, nome: string, email: string, senha: string) {
        super(id, nome, email, senha, 1);
    }

    recebePedidos(pedido: Pedido): void {
        this.Pedidos.push(pedido);
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

    atualizarStatusEntrega(pedidos: Pedido[]): void {
        pedidos.forEach(pedido => {
            if (pedido.status === 'Em Transporte') {
                pedido.status = 'Entregue';
            } else if (pedido.status === 'Pendente') {
                pedido.status = 'Em Transporte';
            } else {
                console.log(`Pedido ID: ${pedido.id} já está com status: ${pedido.status}`);
            }
        });
    }
}
