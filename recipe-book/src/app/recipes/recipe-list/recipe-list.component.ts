import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [];
    @Output() recipeSelected = new EventEmitter<Recipe>();
    recipeOneItem = new Recipe('Dummy','Dummy', 'http://thumbs2.ebaystatic.com/d/l225/m/mO6VXtbZOhRiefkRJW6UWBg.jpg');

    constructor() { }

    ngOnInit() {
    }

    onSelected(recipeOneItem: Recipe){
        this.recipeSelected.emit(recipeOneItem);
    }

}
