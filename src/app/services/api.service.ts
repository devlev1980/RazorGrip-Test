import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';


@Injectable()
export class ApiService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.flickrApiUrl}?api_key=${environment.flickrApiKey}&format=json&nojsoncallback=1`;
  }

  getFeed() {
    return this.http.get(this.url).pipe(
      map(data => data)
    );
  }


}
