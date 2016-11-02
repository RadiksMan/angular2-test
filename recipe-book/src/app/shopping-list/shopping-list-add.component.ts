import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";
@Component({
    selector: 'rb-shopping-list-add',
    templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
    @Input() itemWhoSelected: Ingredient;
    @Output() cleared = new EventEmitter();
    isAdd = true;

    constructor(private sls: ShoppingListService) {
        this.isAdd = true;
    }

    ngOnChanges(changes) {
        console.log('ngOnChanges');
        if (changes.itemWhoSelected.currentValue == null) {

            this.isAdd = true;
            this.itemWhoSelected = {name:null, amount: null};
            console.log('check item');
        } else {
            this.isAdd = false;
            console.log('balalaika');
        }
    }

    onSubmit(ingredient: Ingredient) {
        const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
        if (!this.isAdd) {
            //Edit
            this.sls.editItem(this.itemWhoSelected, newIngredient);

            this.onClear();
        } else {
            this.itemWhoSelected = newIngredient;
            this.sls.addItem(this.itemWhoSelected);
        }
    }

    onDelete(){
        this.sls.deleteItem(this.itemWhoSelected);
        this.onClear();
    }

    onClear(){
        this.isAdd = true;
        this.cleared.emit(null);
    }
}
