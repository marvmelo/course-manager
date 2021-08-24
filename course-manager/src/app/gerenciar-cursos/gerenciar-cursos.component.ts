import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { User } from '../user';
import { Curso } from '../../../../common/curso';

@Component({
  selector: 'gerenciar-cursos', //Change this line
  templateUrl: './gerenciar-cursos.component.html', //Change this line
  styleUrls: ['./gerenciar-cursos.component.css'] //Change This line
})
export class GerenciarCursosComponent implements OnInit {

  curso:Curso = new Curso();
  cursos:Curso[] = [];

  constructor(private cadastroService: CadastroService) { }

  
  createCurso(newCurso:Curso) :void{
    //console.log("Função Chamada");
    //alert("função chamada");

    if(newCurso.title == ""){
      alert("Título Vazio")
    }
    else{
      if(this.cursos.length == 0){
          newCurso.id = 0;
      }
      else{
        newCurso.id = this.cursos[this.cursos.length -1].id +1;
      }
      this.cadastroService.sendNewCurso(newCurso).then((value) => { this.curso.clear(); this.fillCursos();});
   }
  }

  fillCursos() : void{

    this.cadastroService.getCursos().then((value:Curso[]) => {this.cursos = value});
  }




  ngOnInit(): void {
    this.fillCursos();
  }

}
