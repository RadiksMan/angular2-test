import {Ingredient} from "../shared";

export class ShoppingListService {
    private items: Ingredient[] = [];

    constructor() {
    }

    getItems() {
        return this.items;
    }

    addItems(itemsArr: Ingredient[]) {
        Array.prototype.push.apply(this.items, itemsArr)
        /*<--- old style*/
        // for( let item of itemsArr){
        //     this.items.push(item);
        // }
    }

    addItem(item: Ingredient) {
        this.items.push(item);
    }

    editItem(oldItem: Ingredient, newItem: Ingredient) {
        this.items[this.items.indexOf(oldItem)] = newItem;
    }

    deleteItem(item: Ingredient) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}
