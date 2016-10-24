import { Auth17Page } from './app.po';

describe('auth-17 App', function() {
  let page: Auth17Page;

  beforeEach(() => {
    page = new Auth17Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
