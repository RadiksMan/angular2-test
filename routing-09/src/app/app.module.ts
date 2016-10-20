import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-component.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit.component';
import { UserDetailComponent } from './user/user-detail.component';



import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserEditComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
