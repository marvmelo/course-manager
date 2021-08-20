import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Material } from "./material";

@Injectable({
    providedIn: 'root'
})

export class AdMaterialService {
    // Endereço do servidor temporário para testes
  private serverUrl: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  // Essa função pegar um material e manda para http://localhost:3000/adMaterial com uma requisição POST
  // Ela retorna uma promesa, que pode ser um Material ou não em casos de sucesso e erro, respectivamente
  sendNewMaterial(material: Material): Promise<string>{
    return this.http.post<string>(this.serverUrl + "adMaterial", material, {responseType: 'text' as 'json' , observe: 'body'})
    .toPromise()
  }

}

