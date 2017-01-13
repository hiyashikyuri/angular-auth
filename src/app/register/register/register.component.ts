import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  register(){
    this.authService.send()
  }
}
