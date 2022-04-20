import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  email:string ='';
  password:string ='';

  constructor(public loginService:LoginServiceService) { }

  login(){
    let user:any = {email: this.email, password: this.password};
    this.loginService.login(user).subscribe(data =>{
      localStorage.setItem('user', JSON.stringify(data))}
      ,error =>{
        Swal.fire({
          icon: 'error',
          title: 'Error en el Login',
          text: 'Email o Contraseña incorrecta',
          confirmButtonColor:'#0E6200'
        })
      }
    )
    
    
  }

  ngOnInit(): void {
  }

}
