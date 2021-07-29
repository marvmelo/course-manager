export class User {
    
    nome: string;
    email: string;
    hashedpsw: string;

    constructor() {
        this.nome = "";
        this.email = "";
        this.hashedpsw = "";
    }

    copy(): User {
        var copiedUser: User = new User();
        copiedUser.nome = this.nome;
        copiedUser.email = this.email;
        copiedUser.hashedpsw = this.hashedpsw;
        return copiedUser; 
    }

    set_user_data(nome: string, email: string, hashedpsw: string): void {
        this.nome = nome;
        this.email = email;
        this.hashedpsw = hashedpsw;
    }
}