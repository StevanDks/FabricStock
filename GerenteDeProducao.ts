import { Usuario } from "./Usuario";
import { Estoque } from "./Estoque";
import { Pedido } from "./Pedido";

class GerenteDeProducao extends Usuario {
    Pedidos: Pedido[] = [];

    constructor(id: number, nome: string, email: string, senha: string) {
        super(id, nome, email, senha, 2);
    }

    monitorarEstoque(estoque: Estoque): void {

    }

    solicitarReposicao(estoque: Estoque): void {

    }
}  