import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Instituicoes } from '../instituicoes';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.css']
})
export class InstituicaoComponent implements OnInit {

  constructor(private cadastroService: CadastroService) { }

  nomeinstit: string = "";
  emailinst: string = "";
  codigocadastro: string = "";
  instituicoes: Instituicoes = new Instituicoes();

  cadastraInst(fInst: Instituicoes): void {
    
    // Essa função é chamada pelo html quando o botão é apertado
    // O hmtl chama createAccount(this.user);
    // As caixas de texto no html colocam os valores nas variáveis name, email e string
    // A função coloca esses valores em user e passar user para a função de cadastroService que manda para o servidor
    if (this.thereIsInvalidValues()) {
      this.failureCreationInvalid();
      return;
    }
    fInst.set_instituicao_data(this.nomeinstit, this.emailinst, this.codigocadastro);
    this.cadastroService.sendNewInst(fInst)
    .then(
      (value) => {this.succesCreation();},
      (value) => {if (value.error="Existing Email") {this.failureCreationExisting();}}
    );
  }

  private succesCreation(): void {
    window.alert("Instituicao cadastrada!");
    this.nomeinstit = "";
    this.emailinst = "";
    this. codigocadastro = "";
  }

  private failureCreationExisting(): void {
    window.alert("Email já cadastrado!");
  }

  private failureCreationInvalid(): void {
    window.alert("Formulário Incompleto!");
  }

  private thereIsInvalidValues(): Boolean {
    if (this.nomeinstit=="" || this.emailinst=="" || this.codigocadastro=="") {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
  }

}
