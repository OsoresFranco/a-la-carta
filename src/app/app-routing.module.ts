import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { TokenAuthGuard } from './guards/token-auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { MyMenuPageComponent } from './pages/my-menu-page/my-menu-page.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component: HomeComponent, canActivate: [TokenAuthGuard] },
  { path: 'mymenu', component: MyMenuPageComponent, canActivate: [TokenAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
