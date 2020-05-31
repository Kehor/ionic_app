import { DataModelGlobal } from './models/data-global.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

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
    .then(response => response as DataModelGlobal)
    .catch(error => console.log('erreur survenue ' + error));
  }
}
