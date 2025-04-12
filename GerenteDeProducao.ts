import { Usuario } from "./Usuario";
import { Estoque } from "./Estoque";
import { Pedido } from "./Pedido";

class GerenteDeProducao extends Usuario {
    Pedidos: Pedido[] = [];

    constructor(id: number, nome: string, email: string, senha: string) {
        super(id, nome, email, senha, 2);
    }

    monitorarEstoque(estoque: Estoque): void {
        console.log("Produtos no estoque:");
        estoque.produtos.forEach(produto => {
            console.log(`- ${produto.nome}: ${produto.quantidade}`);
        });
    }

    solicitarReposicao(estoque: Estoque): void {
        estoque.reposicao = true;
    }
}  