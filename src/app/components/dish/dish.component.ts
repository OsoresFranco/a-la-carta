import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalDishComponent } from '../modal-dish/modal-dish.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DishAddSnackbarComponent } from '../dish-add-snackbar/dish-add-snackbar.component';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  page_size:number = 4;
  page_number:number = 1;

  handlePage(e:PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  constructor(private data:DataShareService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }


  message:any[]=[];
  myVeganMenu:any[]=[];
  myRegularMenu:any[]=[];

  errorMessage(dish:any){
    if(dish.vegan === true){
      Swal.fire(
        'Your Dish Was Not Added',
        'You may add only 2 Vegan Dishes',
        'info'
      )
    } else if(dish.vegan === false){
        Swal.fire(
          'Your Dish Was Not Added',
          'You may add only 2 Regular Dishes',
          'info'
        )
      }
  }

  
  showModalDish(dish:any){
    this.data.changeModal(dish)
    this.dialog.open(ModalDishComponent);
  }

  addDish(dish:any){
    if(dish.vegan === true){
      if(this.myVeganMenu.length > 1){
        this.errorMessage(dish)
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
        this.errorMessage(dish)
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
