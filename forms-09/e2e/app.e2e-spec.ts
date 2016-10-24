import { Forms09Page } from './app.po';

describe('forms-09 App', function() {
  let page: Forms09Page;

  beforeEach(() => {
    page = new Forms09Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
