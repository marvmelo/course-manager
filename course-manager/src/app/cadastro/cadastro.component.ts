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
    // Essa função é chamada pelo html quando o botão é apertado
    // O hmtl chama createAccount(this.user);
    // As caixas de texto no html colocam os valores nas variáveis name, email e string
    // A função coloca esses valores em user e passar user para a função de cadastroService que manda para o servidor
    fUser.set_user_data(this.name, this.email, this.psw);
    this.cadastroService.sendNewUser(fUser);
  }

  ngOnInit(): void {
  }

}
