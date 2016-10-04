import { Component } from '@angular/core';


@Component({
  selector: 'directives-app',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

    //43
    private switch = true;
    onSwitch(){
        this.switch = !this.switch;
    }

    //44
    private items = [1,2,3,4,5,6,7,8,9];

    //45
    private value = 10;
}
