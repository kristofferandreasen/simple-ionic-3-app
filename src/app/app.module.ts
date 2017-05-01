import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Http import
import { HttpModule } from '@angular/http';

// Page imports
import { CategoryPage } from '../pages/category/category';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SingleItem } from '../pages/single-item/single-item';

// Service imports
import { ItemApi } from '../services/item-api.service';

// Native imports
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CategoryPage,
    ListPage,
    HomePage,
    SingleItem,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoryPage,
    ListPage,
    HomePage,
    SingleItem,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemApi,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
