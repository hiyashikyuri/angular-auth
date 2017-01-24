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
      this.token = params['token'];
      this.client_id = params['client_id'];
      this.uid = params['uid'];

      this.authService.Token(this.token);
      this.authService.Client(this.client_id);
      this.authService.Uid(this.uid);

      console.log(this.authService.tokenInfo());
      console.log(this.authService.uidInfo());
      console.log(this.authService.clientInfo());


    });
  }

  data() {
    let body = JSON.stringify({
      'email': this.reset.email,
      'redirect_url': 'http://localhost:4200'
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
