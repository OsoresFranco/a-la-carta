import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NetworkInterceptor } from './interceptors/network.interceptor';
import { DishComponent } from './components/dish/dish.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ModalDishComponent } from './components/modal-dish/modal-dish.component';
import { MyMenuComponent } from './components/my-menu/my-menu.component';
import { MyMenuStatsComponent } from './components/my-menu-stats/my-menu-stats.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    DishComponent,
    SearchBarComponent,
    ModalDishComponent,
    MyMenuComponent,
    MyMenuStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    SweetAlert2Module,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
