import { RecipesServiceService } from './recipes-service.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipesServiceService) { }

  ngOnInit() {

  }
 ionViewWillEnter(){
  this.recipes = this.recipeService.getAllRecipes();
  console.log('recipes', this.recipes);
 }

 ionViewWillLeave(){
 // for testing
 }
 ionViewDidLeave(){
  // for testing
 }
}
