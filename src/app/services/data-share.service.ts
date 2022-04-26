import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
   private messageSource = new BehaviorSubject<any>([]);
   private dishSource = new BehaviorSubject<any>([]);
   private myMenuSource = new BehaviorSubject<any>([]);

   currentMessage = this.messageSource.asObservable();
   currentDish = this.dishSource.asObservable();
   currentMyMenu = this.myMenuSource.asObservable();


  constructor() { }

  changeMessage(query:any[]) {
    this.messageSource.next(query);
  }

  changeModal(id:any){
    this.dishSource.next(id);
  }

  changeMyMenu(dish:any){
    this.myMenuSource.next(dish);
  }
}
