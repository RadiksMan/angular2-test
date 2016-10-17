import { Service07Page } from './app.po';

describe('service-07 App', function() {
  let page: Service07Page;

  beforeEach(() => {
    page = new Service07Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
