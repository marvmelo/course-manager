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
    selectCurso: string = "";
    material: Material = new Material();
    cursos: Curso[] = [];
    newCurso:Curso = new Curso();
    matches:Curso[] = [];

    adMaterial(fMaterial: Material): void {
    // Essa função é chamada pelo html quando o botão é apertado
    // O hmtl chama adMaterial(this.material);
    // As caixas de texto no html colocam os valores nas variáveis nome, tipo e link
    // A função coloca esses valores em material e passa material para a função de cadastroService que manda para o servidor
    /*
    
   
    //fMaterial.set_material_data(this.nome, this.tipo, this.link);
    

      

    */
    this.cadastroService.sendNewMaterial(fMaterial)
    .then(
      (value) => {this.succesCreation();},
      (value) => {if (value.error="Existing Material") {this.failureCreationExisting();}}
    );


    if (this.thereIsInvalidValues()) {
      this.failureCreationInvalid();
      return;
    }

    Promise.resolve(this.newMaterial()).then( result => {this.cadastroService.putCurso(this.newCurso).then(

        (value) => (this.succesCreation()),
        (value) => {if (value.error="Course Updated") {this.failureCreationExisting();}}
    )});

      


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
      if (this.material.nome=="" || this.material.tipo=="" || this.material.link=="" || this.selectCurso=="") {
        return true;
      }
      return false;
    }



  newMaterial() : void{

    
      
    
      this.matches = this.cursos.filter(cur => parseInt(this.selectCurso) == cur.id );
    
      if(this.matches.length!=0){
        this.newCurso = this.matches[0];
        this.newCurso.content.push([this.material.nome,this.material.tipo,this.material.link]);
      
      }

    
  }
  ngOnInit(): void {
    this.cadastroService.getCursos().then((value:Curso[]) => {this.cursos = value; this.selectCurso = value[0].id.toString()});  
  
  }

}