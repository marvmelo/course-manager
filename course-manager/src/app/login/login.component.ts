import { Component, OnInit } from '@angular/core';
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

  logar(fUser: User): void {
    fUser.set_user_data(this.name, this.email, this.psw);
    this.loginService.confirmUser(fUser)
    .then(
      (value) => {this.userConfirmed(value);},
      (value) => {this.failureConfirmation();}
    );
  }

  ngOnInit(): void {
  }

}
