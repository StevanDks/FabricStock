export class Usuario {

    id: number;
    nome: string;
    email: string;
    senha: string;
    nivelDePermissao: number;

    constructor(id: number, nome: string, email: string, senha: string, nivelDePermissao: number) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.nivelDePermissao = nivelDePermissao;
    }
}
