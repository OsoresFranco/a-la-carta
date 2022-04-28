import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';
import { ModalDishComponent } from '../modal-dish/modal-dish.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DishDeleteSnackbarComponent } from '../dish-delete-snackbar/dish-delete-snackbar.component';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.scss'],
})
export class MyMenuComponent implements OnInit {
  myVeganMenu: any[] = [];
  myRegularMenu: any[] = [];
  
  constructor(private data: DataShareService, public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  showModalDish(dish: any) {
    this.data.changeModal(dish);
    this.dialog.open(ModalDishComponent);
  }

  deleteDish(dish: any) {
    if (dish.vegan === true) {
      for (var i = 0; i < this.myVeganMenu.length; i++) {
        if (this.myVeganMenu[i].id === dish.id) {
          this.myVeganMenu.splice(i, 1);
        }
      }
      this._snackBar.openFromComponent(DishDeleteSnackbarComponent, {
        duration: 2000,
        panelClass: ['custom-snackbar']
      }); 
    }

    if (dish.vegan === false) {
      for (var i = 0; i < this.myRegularMenu.length; i++) {
        if (this.myRegularMenu[i].id === dish.id) {
          this.myRegularMenu.splice(i, 1);
        }
      }
      this._snackBar.openFromComponent(DishDeleteSnackbarComponent, {
        duration: 2000,
        panelClass: ['custom-snackbar']
      }); 
    }
  }

  ngOnInit(): void {
    this.data.currentMyVeganMenu.subscribe(
      (myVeganMenu) => (this.myVeganMenu = myVeganMenu)
    );
    this.data.currentMyRegularMenu.subscribe(
      (myRegularMenu) => (this.myRegularMenu = myRegularMenu)
    );
  }
}
