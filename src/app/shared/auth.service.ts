import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {request} from "http";


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
    return this.http.post(this.url + '/auth/sign_in', body, options).subscribe((response) => {

      console.log(response.headers.get('access-token'));
      console.log(response.headers.get('uid'));
      console.log(response.headers.get('client'));



      // var data = res.headers.get('X-Custom-header');
      // console.log(data);
      // return res;
    });
  }
}






