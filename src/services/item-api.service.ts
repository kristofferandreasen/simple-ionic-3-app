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

  getFilteredItems(term: string){

    // Parameters
    let params = new URLSearchParams();
    params.set('search', term); // the passed parameter: term

    // Get request with search parameters
    return new Promise(resolve => {
        this.http.get('assets/data.json', { search: params })
          .subscribe(res => resolve(res.json()));
    });
    
  }


}
