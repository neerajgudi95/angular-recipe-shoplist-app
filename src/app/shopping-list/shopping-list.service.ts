import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addnewIng(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  addIngredients(ings: Ingredient[]) {
    this.ingredients.push(...ings);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  deleteIng(ing: Ingredient) {
    // let ingName=ing.name;
    let i = 0;
    this.ingredients.forEach((ingredient, index) => {
      if (
        ing.name &&
        ingredient.name.toLowerCase() === ing.name.toLowerCase()
      ) {
        i = index;
        let deleteItem = this.ingredients[i];
        let deleteAmt = +ing.amount;

        if (deleteAmt === 0) {
        } else if (deleteItem.amount > deleteAmt) {
          this.ingredients[i].amount = this.ingredients[i].amount - deleteAmt;
          console.log(
            'AMOUNT',
            this.ingredients[i],
            typeof Number(ing.amount),
            typeof ing.amount,
            ing.amount
          );
        } else if (deleteItem.amount === deleteAmt) {
          console.log(
            deleteItem.amount,
            deleteAmt,
            deleteItem.amount < deleteAmt
          );
          this.ingredients.splice(i, 1);
        } else {
        }
        this.ingredientAdded.emit(this.ingredients.slice());
        return;
      }
    });
  }
}
