exports.Curso = class{

    id;
    title;
    content;

    constructor(){
        this.id = 0;
        this.title = "";
        this.content = "";
    }

    copy() {
        var newCurso  = new Curso();
        newCurso.id = this.id;
        newCurso.title = this.title;
        newCurso.content = this.content;
        return newCurso;
    }
    set(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}