import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  liste:string[];
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
  constructor(private todoService:TodoService) { 
  }

  ngOnInit() {
    this.liste = this.todoService.getTodos();
  }

  addTodo() {
    this.todoService.add(this.newTodo);
  }

  removeTodo(index:number) {
    this.todoService.remove(index);
  }

}
