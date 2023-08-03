import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeItem: Recipe;
  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.recipesService.selectedRecipe.subscribe((recipe: Recipe) => {
    //   this.recipeItem = recipe;
    // });
    this.route.params.subscribe((params) => {
      let selectedRecipe = this.recipesService.getRecipe(+params['id']);
      this.recipeItem = selectedRecipe[0];
    });
  }

  addToList() {
    this.recipesService.addIngsToShoppingList(this.recipeItem.ingredients);
  }

  editRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
