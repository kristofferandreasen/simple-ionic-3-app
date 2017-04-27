import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// Service import for items
import { ItemApi } from '../../services/service';

@Component({
  selector: 'page-single-item',
  templateUrl: 'single-item.html',
  providers: [Http]
})
export class SingleItem {

  items: any;

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

}
