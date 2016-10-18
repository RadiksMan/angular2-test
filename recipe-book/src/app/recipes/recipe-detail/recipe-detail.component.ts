import { Component, OnInit , Input} from '@angular/core';

import {Recipe} from "../recipe";
// import {Ingredient} from "../../shared";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";


@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe:Recipe;

  constructor(private ShoppingLS: ShoppingListService ) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
      this.ShoppingLS.addItems(this.selectedRecipe.ingredients);
  }
}
