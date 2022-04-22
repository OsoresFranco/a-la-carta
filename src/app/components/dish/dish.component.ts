import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  dish ={
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: true,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    weightWatcherSmartPoints: 14,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 1,
    spoonacularScore: 88,
    healthScore: 95,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 466.75,
    id: 1096014,
    title: "Spaghetti Squash Boats",
    readyInMinutes: 220,
    servings: 4,
    sourceUrl: "https://www.foodista.com/recipe/R3FD7GM8/spaghetti-squash-boats",
    image: "https://spoonacular.com/recipeImages/1096014-312x231.jpg",
    imageType: "jpg",
    summary: '',
    cuisines: [''],
    dishTypes: [
    "side dish",
    "lunch",
    "main course",
    "main dish",
    "dinner"
    ],
    diets: [
    "gluten free"
    ],
    occasions: [''],
    analyzedInstructions: ['']
  }

  constructor() { }

  ngOnInit(): void {
  }

}
