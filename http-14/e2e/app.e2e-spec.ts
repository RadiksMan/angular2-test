import { Http14Page } from './app.po';

describe('http-14 App', function() {
  let page: Http14Page;

  beforeEach(() => {
    page = new Http14Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
