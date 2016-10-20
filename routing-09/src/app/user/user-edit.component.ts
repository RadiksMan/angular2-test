import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ComponentCanDeactivate} from "./user-edit.guard";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-edit',
  template: `
     <h3>User Edit</h3>
     <br>
     <button (click)="done = true" >SUPER DONE</button>
     <button class="btn btn-alert" (click)="onNavigateToHome()" >Go Home </button>
  `
})
export class UserEditComponent implements  ComponentCanDeactivate{

  done = false;

  constructor(private router: Router) { }

  onNavigateToHome(){
    this.router.navigate(['/']);
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.done){
      return confirm("Do you want to leave ?");
    }
    return true;
  }
}
