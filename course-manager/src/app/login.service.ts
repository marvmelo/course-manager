import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private serverUrl: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  confirmUser(user: User): Promise<string>{
    return this.http.post<string>(this.serverUrl + "login", user, {responseType: 'text' as 'json' , observe: 'body'})
    .toPromise()
  }
}
