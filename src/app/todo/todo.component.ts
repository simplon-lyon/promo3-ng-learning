import { Component, OnInit } from '@angular/core';

import { TodoAjaxService } from '../shared/todo-ajax.service';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  liste:Todo[];
  newTodo:string;

    /**
     * Pour utiliser un service dans un component ou
     * ailleurs, on ne fait pas une instance nous même,
     * à la place, on utilise l'injection de dépendance
     * de angular (https://angular.io/guide/dependency-injection)
     * C'est elle qui se chargera de faire les instances
     * des services et de nous les rendre accessibles dans
     * les component et autre.
     * Pour injecter un service dans un component, on 
     * ajoute simplement en argument du constructor une 
     * variable (public ou private, mais souvent private)
     * qui aura notre classe service comme type (peu importe
     * le nom de la variable tant que le type correspond)
     */
  constructor(private todoService:TodoAjaxService) { 
  }

  ngOnInit() {
    this.todoService.getAllTodo().then((todos) => this.liste = todos);
  }

  addTodo() {
    /*
    Le addTodo attend un objet de type Todo, donc un
    objet possédant au moins une propriété message (et 
    optionnellement une propriété id), on met donc comme
    argument du addTodo un objet avec un message dont 
    la valeur sera celle de this.newTodo, qui est une
    string liée par un ngModel à un input du template.
    Une fois la requête lancée et la réponse obtenue,
    on récupère un todo dans le then qui nous est 
    envoyé par le json-server (c'est en gros l'objet
    todo que l'on vient de lui ajouter, avec son id 
    généré en plus). On récupère donc ce todo pour 
    l'ajouter à notre liste (histoire de pas refaire
    une requête de getAll, même si ça serait envisageable)
    */
    this.todoService.addTodo({message:this.newTodo})
    .then((todo) => this.liste.push(todo));
  }

  removeTodo(index:number) {
    this.todoService.removeTodo({id:index, message:''})
    .then(() => this.liste = this.liste.filter((todo) => todo.id !== index));
    
  }

}
