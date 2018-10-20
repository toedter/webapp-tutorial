import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getUsersSectionText() {
    return element(by.css('app-users h4')).getText();
  }
}
