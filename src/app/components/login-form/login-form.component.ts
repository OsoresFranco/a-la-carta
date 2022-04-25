import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import Swal from 'sweetalert2'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  loginForm = new FormGroup({});

  constructor(public loginService:LoginServiceService, private fb:FormBuilder) { }

  login(){
    let user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }

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
    )}
}
