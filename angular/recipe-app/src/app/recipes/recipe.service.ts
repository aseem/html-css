import { Recipe } from './recipe.model';
export class RecipeService {
  private recipes: Recipe[] = [
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

  // return a copy of the recipe list
  getRecipes() {
    return this.recipes.slice();
  }
}
