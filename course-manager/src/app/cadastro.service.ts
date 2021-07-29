import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private serverUrl: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  sendNewUser(user: User): Promise<User>{
    return this.http.post<User>(this.serverUrl + "createAccount", user)
    .toPromise();
  }

}
