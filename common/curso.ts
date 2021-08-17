export class Curso{

    id: number;
    title:string;
    content:string;

    constructor(){
        this.id = 0;
        this.title = "";
        this.content = "";
    }

    copy(): Curso {
        var newCurso : Curso = new Curso();
        newCurso.id = this.id;
        newCurso.title = this.title;
        newCurso.content = this.content;
        return newCurso;
    }
    set(id:number, title: string, content:string): void{
        this.id = id;
        this.title = title;
        this.content = content;
    }
}