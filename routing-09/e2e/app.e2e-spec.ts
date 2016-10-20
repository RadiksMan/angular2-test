import { Routing09Page } from './app.po';

describe('routing-09 App', function() {
  let page: Routing09Page;

  beforeEach(() => {
    page = new Routing09Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
