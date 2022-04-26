import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-modal-dish',
  templateUrl: './modal-dish.component.html',
  styleUrls: ['./modal-dish.component.scss']
})
export class ModalDishComponent implements OnInit {
  dish:any;

  constructor(private data:DataShareService) { }

  ngOnInit(): void {
    this.data.currentDish.subscribe(dish => this.dish = dish)
  }

}
