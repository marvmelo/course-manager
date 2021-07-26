export class User {
    nome: string;
    email: string;
    hashedpsw: number;

    constructor() {
        this.nome = "";
        this.email = "";
        this.hashedpsw = 0;
    }
}