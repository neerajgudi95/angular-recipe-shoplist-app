import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  public selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Spaghetti Aglio e Olio',
      'A classic Italian pasta dish with garlic and olive oil.',
      'https://images.pexels.com/photos/11654236/pexels-photo-11654236.jpeg?auto=compress&cs=tinysrgb&w=1600',
      [
        { name: 'spaghetti', amount: 200 },
        { name: 'garlic cloves', amount: 3 },
        { name: 'olive oil', amount: 4 },
        { name: 'red pepper flakes', amount: 1 },
        { name: 'salt', amount: 1 },
      ]
    ),

    new Recipe(
      2,
      'Pasta Carbonara',
      'A creamy pasta dish with eggs, cheese, and bacon.',
      'https://images.pexels.com/photos/2703468/pexels-photo-2703468.jpeg?auto=compress&cs=tinysrgb&w=1600',
      [
        { name: 'spaghetti', amount: 200 },
        { name: 'eggs', amount: 2 },
        { name: 'pecorino romano cheese', amount: 50 },
        { name: 'bacon', amount: 100 },
        { name: 'black pepper', amount: 1 },
      ]
    ),

    new Recipe(
      3,
      'Pasta al Pomodoro',
      "Pasta al pomodoro is a traditional Italian dish that's usually made with a combination of pasta (most commonly spaghetti, although any type of pasta can be used), fresh tomatoes, basil, salt, olive oil, and onions or garlic.",
      'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1600',
      [
        { name: 'spaghetti', amount: 200 },
        { name: 'canned tomatoes', amount: 400 },
        { name: 'garlic clove', amount: 1 },
        { name: 'olive oil', amount: 3 },
        { name: 'basil leaves', amount: 5 },
      ]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngsToShoppingList(ingredients) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    let recipe = this.recipes.filter((recipe) => recipe.id === id);
    return recipe;
  }
}
