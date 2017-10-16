import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Chien } from '../../shared/chien';


@Component({
  selector: 'app-modifier-chien',
  templateUrl: './modifier-chien.component.html',
  styleUrls: ['./modifier-chien.component.css']
})
export class ModifierChienComponent implements OnInit {
  @Input()
  chien:Chien;
  @Output()
  onSave:EventEmitter<Chien> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sauvegarder() {
    this.onSave.emit(this.chien);
  }

}
