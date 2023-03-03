import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg'
    ),
    new Recipe(
      'A Second Recipe',
      'This is simply a test',
      'https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg'
    ),
  ];
  selectedRecipe: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeClicked(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
