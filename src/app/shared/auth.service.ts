import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";


@Injectable()
export class AuthService {

  private url = 'http://localhost:3000/';

  constructor(private http: Http) {
  }

  private saveToken(token: any) {
    if (token) {
      localStorage.setItem('Access-Token', token);
    }
  }

  send(body) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions(({headers: headers}));
    return this.http.post(this.url + '/auth', body, options).subscribe((response) =>
      console.log(response.json()));
  }

  login(body) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/auth/sign_in', body, options).map((response) => response.json())
      .subscribe(auth => {
        console.log(auth.headers);
        this.saveToken(auth.access_token);
      });
  }
}

