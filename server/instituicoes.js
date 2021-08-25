exports.Instituicoes = class {
    nomeinstit;
    emailinst;
    codigocadastro;

    constructor() {
        this.nomeinstit = "";
        this.emailinst = "";
        this.codigocadastro = "";
    }

    copy(){
        var copiedUser= new Instituicoes();
        copiedUser.nomeinstit = this.nomeinstit;
        copiedUser.emailinst = this.emailinst;
        copiedUser.codigocadastro = this.codigocadastro;
        return copiedUser; 
    }

    set_instituicao_data(nomeinstit, emailinst, codigocadastro){
        this.nomeinstit = nomeinstit;
        this.emailinst = emailinst;
        this.codigocadastro = codigocadastro;
    }
}