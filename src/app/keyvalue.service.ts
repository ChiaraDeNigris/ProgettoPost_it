import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeyvalueService {
  apiKey: string = '';
  apiURL: string =
    'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';
  constructor(private http: HttpClient) {}

  //funzione per ottenere i dati associati a una chiave
  public getData() {
    let promise = fetch(this.apiURL + '/get?key=' + this.apiKey);
    return promise;
  }

  //funzione per postare i dati associati a una chiave
  public postData(data: string) {
    let promise = fetch(
      this.apiURL + '/post?key=' + this.apiKey + '&msg=' + data,
      { method: 'POST' }
    );
    return promise;
  }

  //funzione per ottenere una nuova chiave
  public Key() {
    let promise = fetch(this.apiURL + '/new', { method: 'POST' }).then(
      response => response.json(),
      error => alert(error)
    );
    return promise;
  }
}
