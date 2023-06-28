import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}


  //para el inicio de sesion profesor
  login() {
    this.authService.login(this.email, this.password)
    .then(() => {
        this.router.navigate(['/note-student']);
        window.alert('inicio de sesion exitoso');
      })
      .catch((error) => {
        window.alert('Error al iniciar sesion, Intento de nuevo o REGISTRESE');
        this.email="";
        this.password="";
        console.log(error);
      });
  }

  //registrar profesor
  register() {
    this.authService.register(this.email, this.password)
      .then(() => {
        window.alert('registro exitoso');
      })
      .catch((error) => {
        console.log(error);
        window.alert('registro fallido');
      });
  }

  ngOnInit() {}
}
