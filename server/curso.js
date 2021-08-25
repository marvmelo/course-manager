//import Material from './material';


exports.Curso = class{

    id;
    title;
    content = [];
    avaliacao = [];
    

    constructor(){
        this.id = 0;
        this.title = "";
        this.content = [];
        this.avaliacao = [];
        
    
    }

    copy() {
        var newCurso  = new Curso();
        newCurso.id = this.id;
        newCurso.title = this.title;
        newCurso.content = this.content;
        newCurso.materiais = this.materiais;
        newCurso.avaliacao = this.avaliacao;
        return newCurso;
    }
    set(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.avaliacao = avaliacao;
    }
}