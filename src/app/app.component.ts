import { Component } from '@angular/core';

//import { DatabindingComponent } from './databinding';
import { LifecycleComponent } from './lifecycle.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Spme text</h1>
    <app-lifecycle></app-lifecycle>
  `
})
export class AppComponent {
  title = 'app worksc!';
}
