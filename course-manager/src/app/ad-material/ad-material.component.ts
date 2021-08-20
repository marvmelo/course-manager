import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdMaterialService } from '../adMaterial.service';
import { Material } from '../material';

@Component({
  selector: 'app-ad-material',
  templateUrl: './ad-material.component.html',
  styleUrls: ['./ad-material.component.css']
})

  export class AdMaterialComponent implements OnInit {

    constructor(private adMaterialService: AdMaterialService) { }

    nome: string = "";
    tipo: string = "";
    link: string = "";
    material: Material = new Material();

    adMaterial(fMaterial: Material): void {
    // Essa função é chamada pelo html quando o botão é apertado
    // O hmtl chama adMaterial(this.material);
    // As caixas de texto no html colocam os valores nas variáveis nome, tipo e link
    // A função coloca esses valores em material e passa material para a função de adMaterialService que manda para o servidor
    if (this.thereIsInvalidValues()) {
        this.failureCreationInvalid();
      return;
    }
    fMaterial.set_material_data(this.nome, this.tipo, this.link);
    this.adMaterialService.sendNewMaterial(fMaterial)
    .then(
      (value) => {this.succesCreation();},
      (value) => {if (value.error="Existing Material") {this.failureCreationExisting();}}
    );
  }
    private succesCreation(): void {
    window.alert("Arquivo adicionado!");
    this.nome = "";
    this.tipo = "";
    this.link = "";
    }

    private failureCreationInvalid(): void {
      window.alert("Formulário Incompleto!");
    }

    private failureCreationExisting(): void {
    window.alert("Material já existente!");
    }

    private thereIsInvalidValues(): Boolean {
      if (this.nome=="" || this.tipo=="" || this.link=="") {
        return true;
      }
      return false;
    }

  ngOnInit(): void {
  }

}