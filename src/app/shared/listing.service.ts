import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Entry} from "./entry.model";
import {AuthService} from "../shared/auth.service";

@Injectable()
export class ListingService {

  constructor(private http: Http,
              private authService: AuthService) {
  }

  findAll(): Promise<Entry[]> {
    let headers = new Headers({
      'Access-Token': this.authService.tokenInfo(),
      'Client': this.authService.clientInfo(),
      'Uid': this.authService.uidInfo()
    });
    let options = new RequestOptions({headers: headers});
    return this.http.get('http://localhost:3000/api/v1/listings', options)
      .map(response => response.json().data)
      .map(data => {
        let entries: Entry[] = [];
        data.forEach((data: any) => {
          entries.push(new Entry(
            data['id'],
            data['title'],
            data['content'],
            data['books'] ? data['books'].map((entry: any[]) => new Entry(entry['id'], entry['book'], 'book')) : [],
          ));
        });
        return entries;
      }).toPromise();
  }
}


