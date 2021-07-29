exports.User = class {
    nome;
    email;
    hashedpsw;

    constructor() {
        this.nome = "";
        this.email = "";
        this.hashedpsw = "";
    }

    copy(){
        var copiedUser= new User();
        copiedUser.nome = this.nome;
        copiedUser.email = this.email;
        copiedUser.hashedpsw = this.hashedpsw;
        return copiedUser; 
    }

    set_user_data(nome, email, hashedpsw){
        this.nome = nome;
        this.email = email;
        this.hashedpsw = hashedpsw;
    }
}