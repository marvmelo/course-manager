import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CursosComponent } from './cursos/cursos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Isso permite enviar http para o servidor
    AppRoutingModule,
    FormsModule, // Isso permite que html se comunique com o Typescript
	RouterModule.forRoot([
		{
			path: 'cadastro',
			component: CadastroComponent
		},
		{
			path: 'cursos',
			component: CursosComponent

		}
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
