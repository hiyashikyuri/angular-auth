import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";


@Injectable()
export class AuthService {

  private url = 'http://localhost:3000';


  constructor(private http: Http) {
  }

  setToken(token: any) {
    if (token) {
      localStorage.setItem('access-token', token);
    }
  }

  setUid(uid: any) {
    if (uid) {
      localStorage.setItem('uid', uid);
    }
  }

  setClient(client: any) {
    if (client) {
      localStorage.setItem('client', client);
    }
  }


  // get(){} にする

  getToken() {
    return localStorage.getItem('access-token');
  }

  getUid() {
    return localStorage.getItem('uid');
  }

  getClient() {
    return localStorage.getItem('client');
  }


  register(body) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions(({headers: headers}));
    return this.http.post(this.url + '/auth', body, options).subscribe((response) =>
      console.log(response.json()));
  }

  changeUserInfo(body) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'access-token': this.getToken(),
      'uid': this.getUid(),
      'client': this.getClient()
    });
    let options = new RequestOptions(({headers: headers}));
    return this.http.put(this.url + '/auth', body, options).subscribe((response) =>
      console.log(response.json()));
  }


  login(body) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/auth/sign_in', body, options).subscribe((response) => {
      this.setToken(response.headers.get('access-token'));
      this.setClient(response.headers.get('client'));
      this.setUid(response.headers.get('uid'));
    });
  }

  logout() {
    let headers = new Headers({
      'access-token': this.getToken(),
      'uid': this.getUid(),
      'client': this.getClient()
    });

    let options = new RequestOptions({headers: headers});
    return this.http.delete(this.url + '/auth/sign_out', options).subscribe((response) => {
      console.log(response.json());
    });
  }

  changePassword(body) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'access-token': this.getToken(),
      'uid': this.getUid(),
      'client': this.getClient()
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
    });
  }
}


