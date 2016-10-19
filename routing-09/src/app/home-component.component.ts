import { Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{param}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {
  param: string;
  private subscription: Subscription;

  constructor(private router: ActivatedRoute) {
    this.subscription = router.queryParams.subscribe(
      queryParam => this.param = queryParam['analytics']
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }



}
