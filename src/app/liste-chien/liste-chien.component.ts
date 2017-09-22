import { Component, OnInit } from '@angular/core';
import { Chien } from '../shared/chien';
import { ChienService } from '../shared/chien/chien.service';

@Component({
  selector: 'app-liste-chien',
  templateUrl: './liste-chien.component.html',
  styleUrls: ['./liste-chien.component.css']
})
export class ListeChienComponent implements OnInit {
  listeChien:Chien[];
  //Ne pas oublier d'initialiser le chien du formulaire
  nouveauChien:Chien={
    nom:'',
    race:'',
    dateNaissance:null
  };

  constructor(private chienService:ChienService) { }

  ngOnInit() {
    this.chienService.getAll()
    .then((chiens) => this.listeChien = chiens);
  }

  ajouter() {
    this.chienService.add(this.nouveauChien)
    .then((chien) => this.listeChien.push(chien));
  }

  supprimer(id:number) {
    this.chienService.delete(id)
    .then(() => this.ngOnInit());
  }
}
