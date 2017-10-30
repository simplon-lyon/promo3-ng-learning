import { Routes } from "@angular/router";
import { BoucleComponent } from "./boucle/boucle.component";
import { TemplateComponent } from "./template/template.component";
import { TodoComponent } from "./todo/todo.component";
import { TodoSecondComponent } from "./todo-second/todo-second.component";
import { ListeChienComponent } from "./liste-chien/liste-chien.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FicheChienComponent } from "./fiche-chien/fiche-chien.component";
import { ModelFormsComponent } from "./model-forms/model-forms.component";
import { ChienGuard } from "./shared/chien.guard";


/*
    Les routes vont devoir définir le path (l'url) et 
    le component à associer à ce path. Si l'url match
    un path, le component en question sera instancié et
    placé à l'intérieur de la balise <router-outlet>
*/

export const appRoutes:Routes = [
    {path: 'boucle', component: BoucleComponent},
    {path: 'template', component: TemplateComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'todo-second', component: TodoSecondComponent},
    {path: 'chiens', component: ListeChienComponent},
    {path: 'chien/:id', component: FicheChienComponent, canActivate: [ChienGuard]},
    {path: 'model', component: ModelFormsComponent},
    //On peut faire des redirections sur certaines routes
    {path: '', pathMatch:'full' , redirectTo: '/chiens'},
    //Cette route est la wildcare, elle match toutes les
    //routes et doit donc être placée en dernier sous 
    //peine de la voir prendre le dessus sur toutes les
    //autres. On peut s'en servir pour faire un 404
    {path: '**', component:PageNotFoundComponent}
];