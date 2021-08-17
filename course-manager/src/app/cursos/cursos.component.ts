import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { User } from '../user';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private cadastroService: CadastroService) { }


  ngOnInit(): void {
  }

}
