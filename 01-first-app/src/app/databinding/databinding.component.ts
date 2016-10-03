import { Component } from '@angular/core';

import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding.component';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
     stringInterpolation = 'string interpolation';
     onTest(){
         return true
     }
     onClicked(value:string){
         alert(value);
     }
}

