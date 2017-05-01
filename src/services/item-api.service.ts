import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ItemApi {

  constructor(private http: Http) {}

  getItems(){
    return new Promise(resolve => {
        this.http.get('assets/data.json')
          .subscribe(res => resolve(res.json()));
    });
  }

}
