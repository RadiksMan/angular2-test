import { Component, OnInit, OnChanges, DoCheck , AfterContentInit , AfterContentChecked ,AfterViewInit , AfterViewChecked , OnDestroy , ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>test1</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck , AfterContentInit , AfterContentChecked , AfterViewInit , AfterViewChecked , OnDestroy {
3
  constructor() { }

  @ViewChild('boundParagraph') boundParagraph:HTMLElement;

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges(){
    this.log('ngOnChanges');
  }
  ngDoCheck(){
    this.log('ngDoCheck');
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit');
    console.log(this.boundParagraph);
  }
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook:string){
    console.info(hook);
  }
}
