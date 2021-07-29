import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  // Endereço do servidor temporário para testes
  private serverUrl: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  // Essa função pegar um usuário e manda para http://localhost:3000/createAccount com uma requisição POST
  // Ela retorna uma promesa, que pode ser um User ou não em casos de sucesso e erro, respectivamente
  sendNewUser(user: User): Promise<User>{
    return this.http.post<User>(this.serverUrl + "createAccount", user)
    .toPromise();
  }

}
