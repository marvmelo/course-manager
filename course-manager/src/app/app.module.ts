import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CursosComponent } from './cursos/cursos.component';
import { GerenciarCursosComponent } from './gerenciar-cursos/gerenciar-cursos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdMaterialComponent } from './ad-material/ad-material.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
	GerenciarCursosComponent,
	CursosComponent,
 	AdMaterialComponent 
  	],
  imports: [
    BrowserModule,
    HttpClientModule, // Isso permite enviar http para o servidor
    AppRoutingModule,
    FormsModule, // Isso permite que html se comunique com o Typescript
	RouterModule.forRoot([
		{
			path: 'login',
			component: LoginComponent
		},
		{
			path: 'cadastro',
			component: CadastroComponent
		},
		{
			path: 'cursos',
			component: CursosComponent

		},
		{
			path: 'gerenciar-cursos',
			component: GerenciarCursosComponent
		},
		{
			path: 'adicionar-material',
			component: AdMaterialComponent
		}
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
