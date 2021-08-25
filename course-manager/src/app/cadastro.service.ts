import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Curso } from '../../../common/curso'
import { Material } from "./material";

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  // Endereço do servidor temporário para testes
  private serverUrl: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  // Essa função pegar um usuário e manda para http://localhost:3000/createAccount com uma requisição POST
  // Ela retorna uma promesa, que pode ser um User ou não em casos de sucesso e erro, respectivamente
  sendNewUser(user: User): Promise<string>{
    return this.http.post<string>(this.serverUrl + "createAccount", user, {responseType: 'text' as 'json' , observe: 'body'})
    .toPromise()
  }

  sendNewCurso(curso:Curso): Promise<string>{
   return this.http.post<string>(this.serverUrl + "cursos", curso, {responseType: 'text' as 'json', observe: 'body'}).toPromise();
 }

  sendNewMaterial(material: Material): Promise<string>{
  return this.http.post<string>(this.serverUrl + "adMaterial", material, {responseType: 'text' as 'json' , observe: 'body'})
  .toPromise()
  }

  getCursos() : Promise<Curso[]>{
    return this.http.get<Curso[]>(this.serverUrl + "cursos").toPromise();
  }

  deleteCurso(id:number) :Promise<string> {
    //alert("Here");
    return this.http.delete<string>(this.serverUrl + "cursos"  + "/"  + id,  {responseType: 'text' as 'json' , observe: 'body'}).toPromise();

  }

  putCurso(curso:Curso): Promise<string> {
    alert("putCurso");
    return this.http.put<string>(this.serverUrl + "cursos", curso,  {responseType: 'text' as 'json' , observe: 'body'}).toPromise();
  }

}
