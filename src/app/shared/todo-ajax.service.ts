import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import 'rxjs/add/operator/toPromise';
import { Todo } from "./todo";

@Injectable()
export class TodoAjaxService {
    private urlAPI:string = 'http://localhost:3000/todo';
    constructor(private http:HttpClient){}

    getAllTodo():Promise<Todo[]> {
        /*
        Pour faire une requête get avec le httpClient,
        on appel juste la méthode get avec l'url
        de l'api entre parenthèse. Cela nous renverra
        un Observable<Object>, que l'on peut convertir
        en Promise<Object> avec toPromise().

        Pour changer le type de l'observable/promise,
        on peut rajouter entre chevrons entre le get et
        ses parenthèses le type de données que l'on 
        attend du serveur.
        */
        return this.http.get<Todo[]>(this.urlAPI).toPromise();
    }

    addTodo(todo:Todo):Promise<Todo> {
        //Le post fonctionne globalement pareil, il faut
        //juste mettre en deuxième argument le body de la requête
        return this.http.post<Todo>(this.urlAPI, todo).toPromise();
    }

    removeTodo(todo:Todo):Promise<any> {
        //Pour le delete, l'argument se place dans l'url,on concatène donc celle ci d'un / et de l'id du todo à supprimer
        return this.http.delete(this.urlAPI+'/'+todo.id).toPromise();
    }

}