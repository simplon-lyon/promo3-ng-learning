import { Injectable } from '@angular/core';

@Injectable()
export class CompteurService {
  compte:number = 0;

  constructor() {
    console.log('nouvelle instance de CompteurService');
   }

  increment() {
    this.compte++;
  }

  decrement() {
    this.compte--;
  }

}
