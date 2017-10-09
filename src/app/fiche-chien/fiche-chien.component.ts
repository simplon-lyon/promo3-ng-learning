import { Component, OnInit } from '@angular/core';
import { Chien } from '../shared/chien';
import { ActivatedRoute } from '@angular/router';
import { ChienService } from '../shared/chien/chien.service';

@Component({
  selector: 'app-fiche-chien',
  templateUrl: './fiche-chien.component.html',
  styleUrls: ['./fiche-chien.component.css']
})
export class FicheChienComponent implements OnInit {
  chien:Chien;

  //ActivatedRoute est un service de RouterModule qui
  //contient des informations relatives à la route
  //sur laquelle on est actuellement (path, arguments, etc.)
  constructor(private route:ActivatedRoute,
              private chienService:ChienService) { }

  ngOnInit() {
    //On peut récupérer les paramètres de l'url sous
    //forme d'un Observable depuis le ActivatedRoute
    this.route.params
    .subscribe((params) => {
      //Si le params est de type number on fait l'appel
      // au service
      if(parseInt(params.id) !== NaN) {
        this.chienService.getById(params.id)
        .then((chien) => this.chien = chien)
        //Si le service renvoie une erreur
        .catch(() => this.chien = null);
      }else {
        this.chien = null
      }
    });
    

  }

  

}
