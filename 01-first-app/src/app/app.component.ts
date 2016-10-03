import { Component } from '@angular/core';

//import { DatabindingComponent } from './databinding';
import { LifecycleComponent } from './lifecycle.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Spme text</h1>
    <app-lifecycle>
        <p>{{test}}</p>
    </app-lifecycle>
    <button  (click)="test = 'Canged Value' " >Click to Change!</button>
  `
})
export class AppComponent {
  title = 'app worksc!';
  test = 'starting value';
}
