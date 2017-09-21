import { Component } from '@angular/core';
import { CompteurService } from './shared/compteur/compteur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPage = 'boucle';

  constructor(private cs:CompteurService) { }
  
    ngOnInit() {
      console.log('compte initial dans app : ' +this.cs.compte);
      this.cs.increment();
      console.log('compte final dans app : ' +this.cs.compte);
    }
}
