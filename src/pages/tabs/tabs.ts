import { Component } from '@angular/core';

import { AcronymPage } from '../acronym/acronym';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AcronymPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
