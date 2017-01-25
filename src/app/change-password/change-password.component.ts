import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Password} from "../shared/password.model";

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent implements OnInit {

  newPassword = new Password();

  constructor(private authService: AuthService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params=> {
      this.authService.Token(params['token']);
      this.authService.Client(params['client_id']);
      this.authService.Uid(params['uid']);
    });
  }

  data() {
    let body = JSON.stringify({
      'password': this.newPassword.password,
      'password_confirmation': this.newPassword.password_confirmation
    });
    this.authService.changePassword(body)
  }
}
