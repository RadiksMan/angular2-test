import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";


@Component({
    selector: 'rb-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {
    recipeForm: FormGroup;
    private recipeIndex: number;
    private subscription: Subscription;
    private recipe: Recipe;
    private isNew = true;

    constructor(private route: ActivatedRoute,
                private recipeServive: RecipeService,
                private formBuilder: FormBuilder,
                private router: Router
    ){}

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params) => {
                if (params.hasOwnProperty('id')) {
                    // мы выбрали рецепт который хочем редактировать
                    this.recipeIndex = +params['id'];
                    this.recipe = this.recipeServive.getRecipe(this.recipeIndex);
                    this.isNew = false;
                } else {
                    //создать новый рецепт
                    this.isNew = true;
                    this.recipe = null;
                }
                this.initForm();

            }
        )
    };

    ngOnDestroy() {
        this.subscription.unsubscribe();
    };

    private navigateBack(){
        this.router.navigate(['../']);
    }

    onCancel(){
        this.navigateBack();
    }

    onAddItem(name: string, amount:string){
      (<FormArray>this.recipeForm.controls['ingredients']).push(
        new FormGroup({
          name:new FormControl(name, Validators.required),
          amount:new FormControl(amount, [
            Validators.required,
            Validators.pattern("\\d+")
          ])
        })
      );
    }

    onRemoveItem(index: number){
      (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
    }

    onSubmit(){
        const newRecipe = this.recipeForm.value;
        if(this.isNew){
            this.recipeServive.addRecipe(newRecipe);
        } else {
            this.recipeServive.editRecipe(this.recipe, newRecipe);
        }
        this.navigateBack();
    }

    private initForm() {
        let recipeName = '';
        let recipeImageUrl = '';
        let recipeContent = '';
        let recipeIngredients: FormArray = new FormArray([]);

        if(!this.isNew){
            for(let i = 0; i < this.recipe.ingredients.length; i++){
                recipeIngredients.push(
                    new FormGroup({
                        name:new FormControl(this.recipe.ingredients[i].name, Validators.required),
                        amount:new FormControl(this.recipe.ingredients[i].amount, [
                            Validators.required,
                            Validators.pattern("\\d+")
                        ])
                    })
                )
            }
            recipeName = this.recipe.name;
            recipeImageUrl = this.recipe.imagePath;
            recipeContent = this.recipe.description;

        }
        this.recipeForm = this.formBuilder.group({
            name: [recipeName, Validators.required],
            imagePath: [recipeImageUrl, Validators.required],
            description: [recipeContent, Validators.required],
            ingredients: recipeIngredients
        })

    };

}
