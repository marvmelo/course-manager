export class Material {
    nome: string;
    tipo: string;
    link: string;


    constructor(){
        this.nome = "";
        this.tipo = "";
        this.link = "";
    }

    copy(): Material {
        var copiedMaterial: Material = new Material();
        copiedMaterial.nome = this.nome;
        copiedMaterial.tipo = this.tipo;
        copiedMaterial.link = this.link;
        return copiedMaterial;
    }

    set_material_data(nome: string, tipo: string, link: string){
        this.nome = nome;
        this.tipo = tipo;
        this.link = link;
    }

}