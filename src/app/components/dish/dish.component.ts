import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';
import { autoCompleteDish } from 'src/app/models/autocompleteInterface';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  message:any[];

  dishes:any[];
  

  constructor(private data:DataShareService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  showme(){
    console.log(this.dishes)
  }
}
