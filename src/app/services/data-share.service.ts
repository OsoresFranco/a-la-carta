import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
   private messageSource = new BehaviorSubject<any>([]);
   private dishSource = new BehaviorSubject<any>([]);
   private myVeganMenuSource = new BehaviorSubject<any>([]);
   private myRegularMenuSource = new BehaviorSubject<any>([]);

   currentMessage = this.messageSource.asObservable();
   currentDish = this.dishSource.asObservable();
   currentMyVeganMenu = this.myVeganMenuSource.asObservable();
   currentMyRegularMenu = this.myRegularMenuSource.asObservable();


  constructor() { }

  changeMessage(query:any[]) {
    this.messageSource.next(query);
  }

  changeModal(id:any){
    this.dishSource.next(id);
  }

  changeMyVeganMenu(dish:any){
    this.myVeganMenuSource.next(dish);
  }

  changeMyRegularMenu(dish:any){
    this.myRegularMenuSource.next(dish);
  }
}
