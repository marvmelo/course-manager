import { Material } from '../course-manager/src/app/material';





export class Curso{

    id: number;
    title:string;
    amountStudents: number;
    content:String[][];
    materials:string[] =[]

    constructor(){
        this.id = 0;
        this.title = "";
        this.amountStudents = 0;
        this.content = [];
        this.materials = [];
    }

    copy(): Curso {
        var newCurso : Curso = new Curso();
        newCurso.id = this.id;
        newCurso.title = this.title;
        newCurso.amountStudents = this.amountStudents;
        newCurso.content = this.content;
        return newCurso;
    }
    set(id:number, title: string, content:String[][], amountStudents: number): void{
        this.id = id;
        this.title = title;
        this.amountStudents = amountStudents;
        this.content = content;
        //this.materials = materials;
    }

    addMaterial(material:String[]) : void{
        this.content.push(material);
    }

    //materialToArray(material:Material): string[]{
      //  return [material.nome,material.tipo,material.link];
    //}

    clear() :void{
        this.id =  -1;
        this.title = "";
        this.amountStudents = 0;
        this.content = [];
        //this.materials = [[]];
    }
}