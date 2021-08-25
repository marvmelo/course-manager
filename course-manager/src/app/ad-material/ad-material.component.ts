import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CadastroService } from '../cadastro.service';
import { Material } from '../material';
import { Curso } from '../../../../common/curso';

@Component({
  selector: 'app-ad-material',
  templateUrl: './ad-material.component.html',
  styleUrls: ['./ad-material.component.css']
})

  export class AdMaterialComponent implements OnInit {

    constructor(private cadastroService: CadastroService) { }

    nome: string = "";
    tipo: string = "";
    link: string = "";
    selectCurso: string = "Selecionar";
    material: Material = new Material();
    cursos: Curso[] = [];
    newCurso:Curso = new Curso();


    adMaterial(fMaterial: Material): void {
    // Essa função é chamada pelo html quando o botão é apertado
    // O hmtl chama adMaterial(this.material);
    // As caixas de texto no html colocam os valores nas variáveis nome, tipo e link
    // A função coloca esses valores em material e passa material para a função de cadastroService que manda para o servidor
    if (this.thereIsInvalidValues()) {
        this.failureCreationInvalid();
      return;
    }
    fMaterial.set_material_data(this.nome, this.tipo, this.link);
    this.cadastroService.sendNewMaterial(fMaterial)
    .then(
      (value) => {this.succesCreation();},
      (value) => {if (value.error="Existing Material") {this.failureCreationExisting();}}
    );





      this.cadastroService.putCurso(this.newCurso).then();


  }
    private succesCreation(): void {
    window.alert("Arquivo adicionado!");
    this.nome = "";
    this.tipo = "";
    this.link = "";
    window.alert(this.selectCurso)
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
    this.cadastroService.getCursos().then((value:Curso[]) => {this.cursos = value});  
    this.newCurso.set(-1,"Emptyness",[],-1);
  }

}