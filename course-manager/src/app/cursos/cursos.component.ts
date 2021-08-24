import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { User } from '../user';
import { Curso } from '../../../../common/curso';
@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //curso:Curso = new Curso();
  cursos:Curso[] = []
  //test:string[] = ["Calculadora", "Calculo I", "Informatica Teorica", "Sinais e Sistemas", "Deep Learning"];
  searchText:string = "";
  matches:Curso[] = [];
  selectMaterial:string = "";

  constructor(private cadastroService: CadastroService) { }


  search(items:Curso[], searchText:string) : void {

    if(searchText!= ""){
      this.cadastroService.getCursos().then((value) => {
        this.cursos = value;
        searchText = searchText.toLowerCase();
        //this.cadastroService.getCursos().then((value) => (this.cursos = value));
        this.matches = items.filter(element => {return element.title.toLowerCase().includes(searchText)});
        
      })
      
    }
    else{
      this.matches = [];
    }
    
  }

  match(items: Curso, searchText:string): void{

    
  }
  ngOnInit(): void {
    this.cadastroService.getCursos().then((value)=> this.cursos = value);
    this.search(this.cursos,this.searchText);
    
  }

}
