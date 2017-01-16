import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Password} from "../shared/password.model";


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  newPassword = new Password();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  data(){
    let body = JSON.stringify({
      'passwordCurrent': this.newPassword.passwordCurrent,
      'password': this.newPassword.password,
      'passwordConfirmation': this.newPassword.passwordConfirmation
    });
    this.authService.changePassword(body)
  }

}
