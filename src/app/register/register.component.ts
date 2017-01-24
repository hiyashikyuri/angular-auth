import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Register} from "../shared/register.model";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = new Register();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  data() {
    let body = JSON.stringify({
      'name': this.register.name,
      'company': this.register.company,
      'email': this.register.email,
      'password': this.register.password,
      'password_confirmation': this.register.password_confirmation
    });
    this.authService.send(body)
  }
}
