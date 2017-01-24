import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  data() {
    this.authService.logout();
  }
}
