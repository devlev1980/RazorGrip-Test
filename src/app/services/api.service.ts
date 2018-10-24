import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {HttpObserve} from '@angular/common/http/src/client';
import {Observable} from 'rxjs/Observable';
import {Feed} from '../models/feed';

@Injectable()
export class ApiService {
  apiKey = '0d0a42f302333118182a1fc53254bb24';
  secret = 'e59efc1719e9c7ce';
  url: string;
  headers;


  constructor(private http: HttpClient) {
    this.url = `https://api.flickr.com/services/feeds/photos_public.gne?api_key=${this.apiKey}&format=json&nojsoncallback=1`;
  }

  getFeed() {
    // this.headers = new Headers();
    // this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // this.headers.append('Access-Control-Allow-Methods', 'GET');
    // this.headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.url).pipe(
      map(data => data)
    );
  }


}
