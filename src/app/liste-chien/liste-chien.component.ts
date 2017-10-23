import { Component, OnInit } from '@angular/core';
import { Chien } from '../shared/chien';
import { ChienService } from '../shared/chien/chien.service';

@Component({
  selector: 'app-liste-chien',
  templateUrl: './liste-chien.component.html',
  styleUrls: ['./liste-chien.component.css']
})
export class ListeChienComponent implements OnInit {
  listeChien:Chien[] = [];
  aModifier:Chien;

  constructor(private chienService:ChienService) { }

  ngOnInit() {
    this.chienService.getAll()
    .subscribe((chiens) => this.listeChien = chiens);
  }

  ajouter(chien:Chien) {
    this.chienService.add(chien)
    .subscribe((chien) => this.listeChien.push(chien));
  }

  supprimer(id:number) {
    this.chienService.delete(id)
    .subscribe(() => this.ngOnInit());
  }

  modifier(chien:Chien) {
    this.chienService.update(chien.id,chien)
    .subscribe(() => console.log(chien));
  }
}
