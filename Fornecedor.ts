import { Usuario } from "./Usuario";
import { Pedido } from "./Pedido";

class Fornecedor extends Usuario {
    CNPJ: number;
    Pedidos: Pedido[] = [];

    constructor(id: number, nome: string, email: string, senha: string, CNPJ: number) {
        super(id, nome, email, senha, 1);
        this.CNPJ = CNPJ;
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
            pedido.produtos.forEach(produto => {
                if (produto.tipo === 'MateriaPrima') {
                    console.log(`- ${produto.nome}, Quantidade: ${produto.quantidade}`);
                }
            });
        });
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
}
