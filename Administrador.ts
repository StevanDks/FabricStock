import { Usuario } from "./Usuario";

class Administrador extends Usuario {

    constructor(id: number, nome: string, email: string, senha: string) {
        super(id, nome, email, senha, 3);
    }

    gerenciarSistema(usuarios: Usuario[], email: string, novoNivelPermissao: number): void {
        const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);
        if (usuarioEncontrado) {
            usuarioEncontrado.nivelDePermissao = novoNivelPermissao;
        } else {
            console.log("Usuário não encontrado na lista.");
        }
    }
}  