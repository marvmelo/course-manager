import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router'
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  name: string = "";
  email: string = "";
  psw: string = "";
  user: User = new User();
  @Output() logarEvent = new EventEmitter<User>();

  logar(fUser: User): void {
    fUser.set_user_data(this.name, this.email, this.psw);
    this.loginService.confirmUser(fUser)
    .then(
      (value) => {this.userConfirmed(fUser);},
      (value) => {this.failureConfirmation();}
    );
  }

  private failureConfirmation(): void {
    window.alert("Informações Incorretas");
  }

  private userConfirmed(fUser: User): void {
    this.logarEvent.emit(fUser);
  }

  ngOnInit(): void {
  }

}
