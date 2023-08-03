import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  // recipeDetails: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    // this.recipesService.selectedRecipe.subscribe((recipe: Recipe) => {
    //   this.recipeDetails = recipe;
    //   console.log(this.recipeDetails);
    // });
  }
}
