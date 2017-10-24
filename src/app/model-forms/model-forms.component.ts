import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

/**
 * Pour créer une fonction de validation perso, on doit
 * créer une fonction avec une signature précise, la 
 * "vraie" fonction de validation, celle qui sera utilisée
 * pour tester la valeur de l'input par angular est le
 * retour de notre fonction.
 * On crée une fonction externe qui la renvoie afin de
 * pouvoir éventuellement parametrer la validation.
 * La fonction interne doit renvoyer soit null si la validation
 * passe, soit un objet avec une clef du nom de notre 
 * validation et comme valeur, soit true, soit des 
 * informations concernant la non validation
 */
export function ageValidator(min=1, max=150):ValidatorFn {
  //La fonction qui sera en effet utilisée par angular
  //pour la validation, qui a pour argument le FormControl
  //ciblé
  return function(control:AbstractControl):ValidationErrors {
    const isOk = control.value > min && control.value <= max;
    if(isOk) {
      return null;
    }
    return {age:true};
  }
}



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
      age: ['', [Validators.required, ageValidator()]]
    });
    //Validator en mode RegExp pour un age entre 1 et 99
    //Validators.pattern(/^[1-9][0-9]?$/)
  }

  submit() {
    
    if(this.formulaire.valid) {
      console.log(this.formulaire.value);
    }
  }

}
