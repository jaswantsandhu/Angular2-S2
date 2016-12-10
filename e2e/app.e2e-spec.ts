import { Angular2SPage } from './app.po';

describe('angular2-s App', function() {
  let page: Angular2SPage;

  beforeEach(() => {
    page = new Angular2SPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
