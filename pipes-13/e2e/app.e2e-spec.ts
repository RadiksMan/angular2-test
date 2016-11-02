import { Pipes13Page } from './app.po';

describe('pipes-13 App', function() {
  let page: Pipes13Page;

  beforeEach(() => {
    page = new Pipes13Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
