exports.Material = class {
    nome;
    tipo;
    link;

    constructor(){
        this.nome = "";
        this.tipo = "";
        this.link = "";
    }

    copy(){
        var copiedMaterial = new Material();
        copiedMaterial.nome = this.nome;
        copiedMaterial.tipo = this.tipo;
        copiedMaterial.link = this.link;
        return copiedMaterial;
    }

    set_material_data(nome, tipo, link){
        this.nome = nome;
        this.tipo = tipo;
        this.link = link;
    }
}
