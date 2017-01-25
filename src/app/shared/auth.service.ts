import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";


@Injectable()
export class AuthService {

  private url = 'http://localhost:3000';

  constructor(private http: Http) {
  }

  Token(token: any) {
    if (token) {
      localStorage.setItem('access-Token', token);
    }
  }

  Uid(uid: any) {
    if (uid) {
      localStorage.setItem('uid', uid);
    }
  }

  Client(client: any) {
    if (client) {
      localStorage.setItem('client', client);
    }
  }

  tokenInfo() {
    return localStorage.getItem('access-Token');
  }

  uidInfo() {
    return localStorage.getItem('uid');
  }

  clientInfo() {
    return localStorage.getItem('client');
  }

  register(body) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions(({headers: headers}));
    return this.http.post(this.url + '/auth', body, options).subscribe((response) =>
      console.log(response.json()));
  }

  chnageUserInfo(body){
    let headers = new Headers({
      'Content-Type': 'application/json',
      'access-token': this.tokenInfo(),
      'uid': this.uidInfo(),
      'client': this.clientInfo()
    });
    let options = new RequestOptions(({headers: headers}));
    return this.http.put(this.url + '/auth', body, options).subscribe((response) =>
      console.log(response.json()));
  }



  login(body) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/auth/sign_in', body, options).subscribe((response) => {

      let token = response.headers.get('access-token');
      let uid = response.headers.get('uid');
      let client = response.headers.get('client');

      this.Token(token);
      this.Client(client);
      this.Uid(uid);
    });
  }

  logout() {
    let headers = new Headers({
      'access-token': this.tokenInfo(),
      'uid': this.uidInfo(),
      'client': this.clientInfo()
    });

    let options = new RequestOptions({headers: headers});
    return this.http.delete(this.url + '/auth/sign_out', options).subscribe((response) => {
      console.log(response.json());
    });
  }

  changePassword(body) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'access-token': this.tokenInfo(),
      'uid': this.uidInfo(),
      'client': this.clientInfo()
    });
    console.log(headers);
    let options = new RequestOptions({headers: headers});
    return this.http.put(this.url + '/auth/password', body, options).subscribe((response) => {
      console.log(response.json());
    });
  }

  resetPassword(body) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/auth/password', body, options).subscribe((response) => {
      console.log(response.json());
    })
  }
}


