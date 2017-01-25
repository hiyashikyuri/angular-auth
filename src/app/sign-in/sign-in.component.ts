import {Component, OnInit} from '@angular/core';
import {Signin} from "../shared/signin.model";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {

  signin = new Signin();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  data() {
    let body = JSON.stringify({
      'email': this.signin.email,
      'password': this.signin.password
    });
    this.authService.login(body);
  }
}
