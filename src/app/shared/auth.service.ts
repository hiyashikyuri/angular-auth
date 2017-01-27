import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";


@Injectable()
export class AuthService {

  private url = 'http://localhost:3000';


  constructor(private http: Http) {
  }

  // set xxxx(){} にする
  // 頭文字は小文字


  // Token(token: any) {
  //   if (token) {
  //     localStorage.setItem('access-Token', token);
  //   }
  // }


  // Uid(uid: any) {
  //   if (uid) {
  //     localStorage.setItem('uid', uid);
  //   }
  // }

  // Client(client: any) {
  //   if (client) {
  //     localStorage.setItem('client', client);
  //   }
  // }


  setToken(token) {
    localStorage.setItem('access-token', token);
  }

  setUid(uid) {
    localStorage.setItem('uid', uid);
  }

  setClient(client) {
    localStorage.setItem('client', client);
  }


  // get(){} にする

  getTokenInfo(): any {
    return localStorage.getItem('access-token');
  }

  getUidInfo(): any {
    return localStorage.getItem('uid');
  }

  getClientInfo(): any {
    return localStorage.getItem('client');
  }

  //
  // tokenInfo() {
  //   return localStorage.getItem('access-Token');
  // }
  //
  // uidInfo() {
  //   return localStorage.getItem('uid');
  // }
  //
  // clientInfo() {
  //   return localStorage.getItem('client');
  // }

  register(body) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions(({headers: headers}));
    return this.http.post(this.url + '/auth', body, options).subscribe((response) =>
      console.log(response.json()));
  }

  changeUserInfo(body) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'access-token': this.getTokenInfo(),
      'uid': this.getUidInfo(),
      'client': this.getClientInfo()
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
      console.log(token);
      console.log(uid);
      console.log(client);

      console.log(this);
      this.setToken(token);
      this.setClient(client);
      this.setUid(uid);
      // this.Token(token);
      // this.Client(client);
      // this.Uid(uid);
    });
  }

  logout() {
    let headers = new Headers({
      'access-token': this.getTokenInfo(),
      'uid': this.getUidInfo(),
      'client': this.getClientInfo()
    });

    let options = new RequestOptions({headers: headers});
    return this.http.delete(this.url + '/auth/sign_out', options).subscribe((response) => {
      console.log(response.json());
    });
  }

  changePassword(body) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'access-token': this.getTokenInfo(),
      'uid': this.getUidInfo(),
      'client': this.getClientInfo()
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


