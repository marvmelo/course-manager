export class User {
    nome: string;
    email: string;
    hashedpsw: number;

    constructor() {
        this.nome = "";
        this.email = "";
        this.hashedpsw = 0;
    }

    copy(): User {
        var copiedUser: User = new User();
        copiedUser.nome = this.nome;
        copiedUser.email = this.email;
        copiedUser.hashedpsw = this.hashedpsw;
        return copiedUser; 
    }

    set_user_data(nome: string, email: string, hashedpsw: number): void {
        this.nome = nome;
        this.email = email;
        this.hashedpsw = hashedpsw;
    }
}