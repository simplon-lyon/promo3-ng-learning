import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { BoucleComponent } from './boucle/boucle.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './shared/todo.service';
import { TodoSecondComponent } from './todo-second/todo-second.component';
import { CompteurService } from './shared/compteur/compteur.service';
import { TodoAjaxService } from './shared/todo-ajax.service';
import { ListeChienComponent } from './liste-chien/liste-chien.component';
import { ChienService } from './shared/chien/chien.service';
import {RouterModule} from '@angular/router';
import { appRoutes } from './app.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FicheChienComponent } from './fiche-chien/fiche-chien.component';
import { AjoutChienComponent } from './liste-chien/ajout-chien/ajout-chien.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    BoucleComponent,
    TodoComponent,
    TodoSecondComponent,
    ListeChienComponent,
    PageNotFoundComponent,
    FicheChienComponent,
    AjoutChienComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
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
    TodoService,
    CompteurService,
    TodoAjaxService,
    ChienService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

