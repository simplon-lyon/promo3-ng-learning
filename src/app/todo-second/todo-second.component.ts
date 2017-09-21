import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'app-todo-second',
  /*
  Le fait de mettre un service en provider d'un component
  spécifique fera qu'une nouvelle instance de ce service
  sera créée spécifiquement pour chacune des occurrences
  de ce component, cette instance sera partagé avec les
  component enfant de ce component (un component enfant
  est un component dont on utilise la balise à l'intérieur
du template de ce component)
  */
  providers: [TodoService],
  templateUrl: './todo-second.component.html',
  styleUrls: ['./todo-second.component.css']
})
export class TodoSecondComponent implements OnInit {
  liste:string[];
  newTodo:string;

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
