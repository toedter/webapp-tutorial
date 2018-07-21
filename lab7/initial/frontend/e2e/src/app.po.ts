import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getUsersSectionText() {
    return element(by.css('app-chat-messages h4')).getText();
  }
}
