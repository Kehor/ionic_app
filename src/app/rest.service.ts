import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) {
  }

  public getUser(){
    const url = 'https://my-json-server.typicode.com/Kehor/demo/users';
    // const url = 'http://localhost:3000/posts';
    return this.http.get(url)
    .toPromise()
    .then(response => response as RestService)
    .catch(error => console.log('erreur survenue ' + error));
  }
}
