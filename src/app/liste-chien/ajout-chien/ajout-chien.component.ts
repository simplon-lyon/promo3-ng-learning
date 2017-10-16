import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Chien } from '../../shared/chien';

@Component({
  selector: 'app-ajout-chien',
  templateUrl: './ajout-chien.component.html',
  styleUrls: ['./ajout-chien.component.css']
})
export class AjoutChienComponent implements OnInit {
  nouveauChien:Chien;
  /**
   * Le @Input() dit au component que LA variable juste
   * en dessous vient de l'extérieur du component. Il
   * rend disponible sur la balise component (<app-ajout-chien>)
   * un attribut du même nom que la variable décorée
   */
  @Input()
  numeroChien:number = 0;
  /**
   * le @Output() rend disponible sur la balise du component
   * un event du même nom que la variable décorée par
   * le output (ou alors du même nom que la valeur mise 
   * dans le output, comme ici "onAdd").
   * Le @Output() doit forcément décoré un EventEmitter,
   * qui est un objet angular qui permettra d'émettre
   * des évènements quand on le souhaite depuis ce
   * component.
   */
  @Output("onAdd")
  eventAjout:EventEmitter<Chien> = new EventEmitter();

  constructor() { 
    this.nouveauChien = {
      nom:'',
      race: '',
      dateNaissance: null
    };
  }

  ngOnInit() {
  }

  ajouter() {
    /*
    Au moment où on déclenche la méthode ajouter dans
    le component ajout-chien, on émet notre eventAjout
    avec le chien en paramètre, et celui ci pourra 
    être récupéré par le parent, quel qu'il soit
    */
    this.eventAjout.emit(this.nouveauChien);
  }

}
