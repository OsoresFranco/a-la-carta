import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalDishComponent } from '../modal-dish/modal-dish.component';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  constructor(private data:DataShareService, public dialog: MatDialog) { }


  message:any[];

  
  showModalDish(dish:any){
    this.data.changeModal(dish)
    this.dialog.open(ModalDishComponent);
  }



  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
}
