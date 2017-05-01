import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// Import pages to allow links to the page
import { CategoryPage } from '../../pages/category/category';

// Service import for items
import { ItemApi } from '../../services/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Http]
})
export class HomePage {

  // The items array to populate with data is created
  items: any;

  constructor(
              public navCtrl: NavController,
              public params:NavParams,
              private itemApi: ItemApi
            )
            {}

  // This is where the data loads from the service.
  // It happens when the view loads for the first time.
  ionViewDidLoad() {
    this.itemApi.getItems().then(data => this.items = data);
  }

  // This function is an event to listen to clicks on elements.
  // The SingleItem Page has been included to be passed in this function.
  CategoryTapped($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Fantasticness'
    });
  }

  CategoryTapped_2($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Short'
    });
  }

  CategoryTapped_3($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Booperness'
    });
  }

}
