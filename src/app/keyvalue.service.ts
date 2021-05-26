import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeyvalueService {
  msg: object= {};
  apiKey: string = '';
  apiURL: string =
    'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';

  constructor(private http: HttpClient) {}

  public getData(): Observable<Object> {
    return this.http.get(this.apiURL);
  }


  public postData(obj) {
    let promise = fetch(
      this.apiURL + '/post?key=' + this.apiKey + '&msg=' + this.msg,
      { method: 'POST'}
    );
    return promise;
  }


  //nuova chiave
  public Key() {
    let promise = fetch(this.apiURL + '/new', { method: 'POST' }).then(
      response => response.json(),
      error => alert(error)
    );
    return promise;
  }
}
