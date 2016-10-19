import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
