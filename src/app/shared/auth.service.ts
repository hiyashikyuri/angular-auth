import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Register} from "../shared/register.model";

@Injectable()
export class AuthService {
  register = new Register();

  private url = 'http://localhost:3000/auth';


  constructor(private http: Http) {
  }

  private saveToken(token: any) {
    if (token) {
      localStorage.setItem('Access-Token', token);
    }
  }

  send() {
    let body = JSON.stringify({
      'email': this.register.email,
      'password': this.register.password,
      'password_confirmation': this.register.password_confirmation,
    });
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions(({headers: headers}));

    return this.http.post(this.url, body, options).subscribe((response) =>
      console.log(response.json()));
  }

  login() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});


  }
}
