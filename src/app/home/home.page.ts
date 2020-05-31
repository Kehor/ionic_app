import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NativeStorageSave } from './../native-storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private restservice: RestService, public save: NativeStorageSave) {

    this.restservice.getUser()
    .then(data => {
      this.save.users = data;
      console.log(this.save.users);
    });

    if (this.save.users){
      save.storeData();
    }else{
      save.getData();
    }
  }

}
