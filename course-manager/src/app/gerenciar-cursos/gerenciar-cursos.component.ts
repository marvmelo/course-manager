import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { User } from '../user';

@Component({
  selector: 'gerenciar-cursos', //Change this line
  templateUrl: './gerenciar-cursos.component.html', //Change this line
  styleUrls: ['./gerenciar-cursos.component.css'] //Change This line
})
export class GerenciarCursosComponent implements OnInit {

  constructor(private cadastroService: CadastroService) { }


  ngOnInit(): void {
  }

}
