import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// Import pages to allow links to the page
import { SingleItem } from '../../pages/single-item/single-item';

// Service import for items
import { ItemApi } from '../../services/service';

// The component imports the specific parts from the html and scss file.
// The Http provider is included to make the API call to the service.
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [Http]
})

// The generic export class is created with the page name.
export class ListPage {

  items: any;

  // The navController and the ItemApi Service is injected into the constructor
  constructor(public navCtrl: NavController, public params:NavParams, private itemApi: ItemApi) {

  }

  // ------------------------------------------------------------------------------------------
  // FUNCTIONS
  // ------------------------------------------------------------------------------------------

  // This is where the data loads from the service.
  // It happens when the view loads for the first time.
  ionViewDidLoad() {
    this.itemApi.getItems().then(data => this.items = data);
  }

  // This function is an event to listen to clicks on elements.
  // The SingleItem Page has been included to be passed in this function.
  itemTapped($event, item) {
    this.navCtrl.push(SingleItem, item);
  }

}
