import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { User } from '../user';
import { Curso } from '../../../../common/curso';
import { Material } from '../material';
@Component({
  selector: 'gerenciar-cursos', //Change this line
  templateUrl: './gerenciar-cursos.component.html', //Change this line
  styleUrls: ['./gerenciar-cursos.component.css'] //Change This line
})
export class GerenciarCursosComponent implements OnInit {

  curso:Curso = new Curso();
  cursos:Curso[] = [];
  message:string = "";
  constructor(private cadastroService: CadastroService) { }
  selectMaterial:string = "";
  link:string = "";
  material:Material = new Material();


  
  createCurso(newCurso:Curso) :void{
    //console.log("Função Chamada");
    //alert("função chamada");

    if(newCurso.title == ""){
      this.message = "Titulo Vazio";
    }
    else{
      if(this.cursos.length == 0){
          newCurso.id = 0;
      }
      else{
        newCurso.id = this.cursos[this.cursos.length -1].id +1;
        //newCurso.addMaterial(['Google', "site","https://www.google.com/"]);
        //newCurso.addMaterial(['stack', "site","https://www.youtube.com/"]);
       // newCurso.addMaterial([]);
      }
      this.cadastroService.sendNewCurso(newCurso).then((value) => { this.message = "Curso Cadastrado"; this.curso.clear(); this.fillCursos();},
                                                       (value) => {if(value.error == "Existing Course"){this.message = "Curso Existente" };});
   }
  }

fillCursos() : void{

  this.cadastroService.getCursos().then((value:Curso[]) => {this.cursos = value});
}

onMove() : void{
  this.message = ""
}


ngOnInit(): void {
  this.fillCursos();
}

}
