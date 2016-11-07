import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    myValue = 'lowercase';
    thisData = new Date(2016, 11, 2);

    values = ['Milky','Khalysi','darklord'];

    asyncValue = new Promise((resolve, reject) => {
       setTimeout( () => resolve('Data is here!'), 2000 );
    });
}
