import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalDishComponent } from '../modal-dish/modal-dish.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DishAddSnackbarComponent } from '../dish-add-snackbar/dish-add-snackbar.component';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  constructor(private data:DataShareService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }


  message:any[];
  myVeganMenu:any[]=[];
  myRegularMenu:any[]=[];

  
  showModalDish(dish:any){
    this.data.changeModal(dish)
    this.dialog.open(ModalDishComponent);
  }

  addDish(dish:any){
    if(dish.vegan === true){
      if(this.myVeganMenu.length > 1){
        alert('Ya hay 2 platos veganos')
      }else{
        this.myVeganMenu.push(dish);
        this._snackBar.openFromComponent(DishAddSnackbarComponent, {
          duration: 2000,
          panelClass: ['custom-snackbar']
        }); 
      }
    }
    if(dish.vegan === false){
      if(this.myRegularMenu.length > 1){
        alert('Ya hay 2 platos Regulares')
      }else{
        this.myRegularMenu.push(dish);
        this._snackBar.openFromComponent(DishAddSnackbarComponent, {
          duration: 2000,
          panelClass: ['custom-snackbar']
        });
      }
    }
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.currentMyVeganMenu.subscribe(myMenu => this.myVeganMenu = myMenu);
    this.data.currentMyRegularMenu.subscribe(myMenu => this.myRegularMenu = myMenu);
  }
}
