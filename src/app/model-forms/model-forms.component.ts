import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-model-forms',
  templateUrl: './model-forms.component.html',
  styleUrls: ['./model-forms.component.css']
})
export class ModelFormsComponent implements OnInit {

  formulaire:FormGroup;

  constructor(private fb:FormBuilder) {
  }

  ngOnInit() {
    this.formulaire = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required]]
    });
  }

  submit() {
    
    if(this.formulaire.valid) {
      console.log(this.formulaire.value);
    }
  }

}
