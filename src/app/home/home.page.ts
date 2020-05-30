import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  db;
  constructor(private restservice: RestService) {

    this.restservice.getUser()
    .then(dataFetched => {
      this.db = dataFetched;
      console.log(this.db);
    });
  }

}
