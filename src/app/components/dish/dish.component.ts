import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  dish ={
    vegan: false,
    healthScore: 95,
    pricePerServing: 466.75,
    id: 1096014,
    title: "Spaghetti Squash Boats",
    readyInMinutes: 220,
    sourceUrl: "https://www.foodista.com/recipe/R3FD7GM8/spaghetti-squash-boats",
    image: "https://spoonacular.com/recipeImages/1096014-312x231.jpg",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
