import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {ResetPassword} from "../shared/reset-password.model";
//本当は新しいモデル作ったほうがいいけど、めんどくさいから、とりあえず、register modelをしよう
import {Password} from "../shared/password.model";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
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
      this.authService.token(params['token']);
      this.authService.client(params['client_id']);
      this.authService.uid(params['uid']);
    });
  }

  data() {
    let body = JSON.stringify({
      'email': this.reset.email,
      'redirect_url': 'http://localhost:4200/change_password'
    });
    this.authService.resetPassword(body);
  }
}

