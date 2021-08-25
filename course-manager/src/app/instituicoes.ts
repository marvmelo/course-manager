export class Instituicoes {
    nomeinstit: string;
    emailinst: string;
    codigocadastro: string;

    constructor(){
        this.nomeinstit = "";
        this.emailinst = "";
        this.codigocadastro = "";
    }

    copy(): Instituicoes {
        var copiedMaterial: Instituicoes = new Instituicoes();
        copiedMaterial.nomeinstit = this.nomeinstit;
        copiedMaterial.emailinst = this.emailinst;
        copiedMaterial.codigocadastro = this.codigocadastro;
        return copiedMaterial;
    }

    set_instituicao_data(nomeinstit: string, emailinst: string, codigocadastro: string){
        this.nomeinstit = nomeinstit;
        this.emailinst = emailinst;
        this.codigocadastro = codigocadastro;
    }

}