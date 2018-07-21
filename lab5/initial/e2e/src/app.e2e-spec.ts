import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display users section', () => {
    page.navigateTo();
    expect(page.getUsersSectionText()).toEqual('Users');
  });
});
