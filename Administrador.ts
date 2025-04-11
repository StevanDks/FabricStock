import { Usuario } from "./Usuario";

class Administrador extends Usuario {

    constructor(id: number, nome: string, email: string, senha: string) {
        super(id, nome, email, senha, 3);
    }

    gerenciarSistema(usuario: Usuario, novoNivelPermissao: number): void {
        const usuarioEncontrado = usuario;
        if (usuarioEncontrado) {
            usuarioEncontrado.nivelDePermissao = novoNivelPermissao;
        } else {
            console.log("Usuário não encontrado na lista.");
        }
    }
}  