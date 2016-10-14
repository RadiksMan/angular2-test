import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', []),
        new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
    ];
    @Output() recipeSelectedItemFromList = new EventEmitter();


    constructor() { }

    ngOnInit() {
    }

    onSelected(value: Recipe){
        this.recipeSelectedItemFromList.emit(value);
    }

}
