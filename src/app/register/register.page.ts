import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email="";
  password="";

  constructor(private authService: AuthService) { }


  register() {
    this.authService.register(this.email, this.password)
      .then(() => {
        window.alert("registro exitoso");
      })
      .catch(error => {
        console.log(error);
        window.alert("registro fallido");
      });
  }

  ngOnInit() {
  }

}
