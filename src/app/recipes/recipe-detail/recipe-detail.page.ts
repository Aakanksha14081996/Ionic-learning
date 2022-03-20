import { RecipesServiceService } from './../recipes-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(private activateRoute: ActivatedRoute,
    private recipeService: RecipesServiceService,
    private router: Router,
    private alertCtrol: AlertController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(param => {
      if(!param.has('recipeId')){
        return;
      }
      const recipeId = param.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }

  deleteRecipe() {
    this.alertCtrol.create({
      header: 'Are you sure',
      message: 'you wanna delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.recipeService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertCtrl => alertCtrl.present());
  }

}
