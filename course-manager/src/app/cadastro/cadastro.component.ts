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

  name: string = "";
  email: string = "";
  psw: string = "";
  user: User = new User();

  createAccount(fUser: User): void {
    fUser.set_user_data(this.name, this.email, this.psw);
    this.cadastroService.sendNewUser(fUser);
  }

  ngOnInit(): void {
  }

}
