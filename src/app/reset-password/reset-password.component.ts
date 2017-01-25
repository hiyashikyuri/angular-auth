import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {ResetPassword} from "../shared/reset-password.model";
//本当は新しいモデル作ったほうがいいけど、めんどくさいから、とりあえず、register modelをしよう
import {Password} from "../shared/password.model";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  reset = new ResetPassword();
  newPassword = new Password();

  token: string;
  client_id: string;
  uid: string;

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
      'email': this.reset.email,
      'redirect_url': 'http://localhost:4200/reset_password'
    });
    this.authService.resetPassword(body);
  }

  password() {
    let body = JSON.stringify({
      'password': this.newPassword.password,
      'password_confirmation': this.newPassword.password_confirmation
    });

    this.authService.changePassword(body);
  }
}
