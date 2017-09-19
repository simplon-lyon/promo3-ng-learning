import {Component} from '@angular/core';

@Component({
    /*
    Le nom de la balise html qui sera liée 
    à ce component
    */
    selector: 'app-template',
    /*
    Le chemin vers le fichier html que gère ce component
    */
    templateUrl:'./template.component.html'
})
export class TemplateComponent {
    title = 'app';
    inputShown:boolean = false;
    personne = {
        nom: '',
        prenom: '',
        age:0,
        chien: {}
    };

    afficher() {
        console.log(this.personne);
    }
  
    methode() {
      this.title = 'autre chose';
    }
  
    toggleInput() {
      this.inputShown = !this.inputShown;
    }
}