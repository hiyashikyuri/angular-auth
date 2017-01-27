import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Register} from "../shared/register.model";

@Component({
  selector: 'app-change-user-info',
  templateUrl: './change-user-info.component.html'
})
export class ChangeUserInfoComponent implements OnInit {


  userData = new Register();


  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  data(){
    let body = JSON.stringify({
      'name': this.userData.name,
      'company': this.userData.company,
      'email': this.userData.email,
    });

    this.authService.changeUserInfo(body);
  }
}
