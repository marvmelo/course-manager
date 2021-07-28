import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { User } from '../user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private cadastroService: CadastroService) { }

  user: User = new User();

  createAccount(user: User): void {
    this.cadastroService.sendNewUser(user);
  }

  ngOnInit(): void {
  }

}
