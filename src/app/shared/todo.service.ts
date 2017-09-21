import { Injectable } from "@angular/core";

/**
 * Les Services vont servir à encapsuler la logique
 * business d'une application angular (les trucs du 
 * model en gros).
 * Ils pourront être facilement injectés et partagés
 * entre plusieurs components et autres services
 */

 //Un service peut être directement injecté sans décorateur
 //particulier, mais pour qu'il soit lui même capable
 //de recevoir des injections, il faut lui mettre le
 //décorateur Injectable
@Injectable()
export class TodoService {
    private liste:string[] = [
        'ga',
        'zo',
        'meu'
      ];
      /*
        On définit dans notre service des méthodes qui
        viendront intéragir avec le modèle pour 
        de l'ajout/suppression/modification etc.
        Ces méthodes seront ensuite appellées par les
        Component et Service qui se serviront de ce
        Service ci
      */

    getTodos():string[] {
        return this.liste;
    }

    add(todo:string) {
        this.liste.push(todo);
    }

    remove(index:number) {
        this.liste.splice(index,1);
    }
}