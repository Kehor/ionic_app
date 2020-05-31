import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NativeStorageSave{

users: any;

    constructor(private nativeStorage: NativeStorage){

    }

    public storeData() {
        this.nativeStorage.setItem('json-data', {
            users: this.users,
        })
        .then(
            () => console.log('Stored item!'),
            error => console.error('Error storing item', error)
        );
    }

    public getData(){
        this.nativeStorage.getItem('json-data')
        .then(
            data => {
                this.users = data.users;
                console.log('Saved restore' + data);
            },
            error => console.error(error)
         );
    }

}
