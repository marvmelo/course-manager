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

  curso:Curso = new Curso();
  cursos:Curso[] = [new Curso(),new Curso(),new Curso(),new Curso(),new Curso()]
  test:string[] = ["Calculadora", "Calculo I", "Informatica Teorica", "Sinais e Sistemas", "Deep Learning"];
  searchText:string = "";
  matches:Curso[] = [];


  constructor(private cadastroService: CadastroService) { }


  fillTest() : void{
    for(let i =0; i<this.cursos.length; i++){
      this.cursos[i].title = this.test[i];
    }
  }

  search(items:Curso[], searchText:string) : void {
    this.fillTest();
    searchText = searchText.toLowerCase();

    this.matches = items.filter(element => {return element.title.toLowerCase().includes(searchText)});
    
  }
  ngOnInit(): void {
  }

}
