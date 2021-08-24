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

  logar(user: User): void{
    this.logado = true;
  }
}
