import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DirectivesComponent } from './directives.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [DirectivesComponent]
})
export class DirectivesModule { }
