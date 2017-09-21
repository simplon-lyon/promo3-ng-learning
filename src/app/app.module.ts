import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { BoucleComponent } from './boucle/boucle.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './shared/todo.service';
import { TodoSecondComponent } from './todo-second/todo-second.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    BoucleComponent,
    TodoComponent,
    TodoSecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  /*
  Pour pouvoir être injecté, un service a besoin d'être
  provid-é. On peut mettre une propriété providers sur
  les components ou le app.module. L'endroit où se trouve
  le provider d'un service va déterminer quand en sera
  faite une nouvelle instance et quand utiliser la même
  instance.
  Si on met un service en provider de l'app.module, alors
  une seule et même instance de ce service sera utilisée
  à travers toute notre application.
  */
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
