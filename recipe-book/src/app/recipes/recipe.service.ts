import {Injectable, EventEmitter} from '@angular/core';

import { Recipe } from "./recipe";
import { Ingredient } from "../shared";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

    recipeChanged = new EventEmitter<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', [
            new Ingredient ('French Fries', 2),
            new Ingredient ('Pork Meat', 1)
        ]),
        new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
            new Ingredient ('French Fries2', 2),
            new Ingredient ('Pork Meat2', 1)
        ])
    ];

    constructor(private http: Http) { }

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id:number){
      return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe){
      this.recipes.splice(this.recipes.indexOf(recipe),1);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
    }

    editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    }

    storeData(){
        const  body = JSON.stringify(this.recipes);
        const  headers = new Headers({
            'Content-type':'application/json'
        });
        return this.http.put('https://recipebook-fb6dd.firebaseio.com/recipes.json',body,{headers:headers});
    }

    fetchData(){
        return this.http.get('https://recipebook-fb6dd.firebaseio.com/recipes.json').map( (response: Response) => response.json() )
            .subscribe(
                ( data: Recipe[] ) => {
                    this.recipes = data;
                    this.recipeChanged.emit(this.recipes);
                    console.log(data);
                }
            );
    }
}
