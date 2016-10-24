import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
    input.ng-invalid{border:1px solid red;}
`]
})
export class TemplateDrivenComponent{

    user = {
        username: '',
        email:'',
        password:'',
        gender: 'male'
    };
    genders = [
        'male',
        'female'
    ];



  onSubmit(form: NgForm){
      console.log('Its work !');
    console.log(form.value);
  }

}
