import { Routes } from "@angular/router";
import { BoucleComponent } from "./boucle/boucle.component";
import { TemplateComponent } from "./template/template.component";
import { TodoComponent } from "./todo/todo.component";
import { TodoSecondComponent } from "./todo-second/todo-second.component";
import { ListeChienComponent } from "./liste-chien/liste-chien.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";



export const appRoutes:Routes = [
    {path: 'boucle', component: BoucleComponent},
    {path: 'template', component: TemplateComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'todo-second', component: TodoSecondComponent},
    {path: 'chiens', component: ListeChienComponent},
    {path: '', pathMatch:'full' , redirectTo: '/chiens'},
    {path: '**', component:PageNotFoundComponent}
];