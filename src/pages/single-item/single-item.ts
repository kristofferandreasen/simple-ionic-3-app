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

  item: any;

  constructor(
              public navCtrl: NavController,
              private navParams:NavParams,
              private itemApi: ItemApi
            )
            {
              this.item = this.navParams.data;
              console.log(this.item);
            }

  // ------------------------------------------------------------------------------------------
  // FUNCTIONS
  // ------------------------------------------------------------------------------------------


}
