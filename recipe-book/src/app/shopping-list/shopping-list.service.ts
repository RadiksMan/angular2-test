import {Ingredient} from "../shared";

export class ShoppingListService {
    private items:Ingredient[] = [];
    constructor() { }

    getItems(){
        return this.items;
    }

    addItems(itemsArr: Ingredient[]){
        //Array.prototype.push.apply(this.items, itemsArr)      <--- old style
        for( let item of itemsArr){
            this.items.push(item);
        }
    }
}
