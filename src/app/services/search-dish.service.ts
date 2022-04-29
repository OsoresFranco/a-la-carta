import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SearchDishService {

  constructor(private http:HttpClient) { }

  autoCompleteSearch(query:string): Observable<any>{
    return this.http.get(`https://api.spoonacular.com/recipes/autocomplete?apiKey=13033a3723394081bd14009c5ab26a85&number=5&query=${query}`)
  }


  search(query:string, vegan:string): Observable<any> {
    return this.http.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=13033a3723394081bd14009c5ab26a85&addRecipeInformation=true&query=${query}&diet=${vegan}&number=20`);
  }
}
