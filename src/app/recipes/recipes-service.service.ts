import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {
  private recipes: Recipe[] = [{
    id: '1',
    title: 'Maggie',
    // eslint-disable-next-line max-len
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Masala_Chai.JPG/800px-Masala_Chai.JPG',
    ingredients: ['maggie', 'water', 'Masala']
  },
  {
    id: '2',
    title: 'Tea',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Masala_Chai.JPG/800px-Masala_Chai.JPG',
    ingredients: ['water', 'Sugar']
  }];
  constructor() { }

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(id: string): Recipe{
    return {...this.recipes.find(recipe => recipe.id === id)};
  }

  deleteRecipe(recipeId) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
