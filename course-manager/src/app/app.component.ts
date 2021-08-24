import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager';
  logado: boolean = false;
  login: boolean = false;

  mostrarlogin(): void{
    this.login = true;
  }

  logar(): void{
    console.log("Rodando")
    this.logado = true;
    this.login = false;
  }
}
