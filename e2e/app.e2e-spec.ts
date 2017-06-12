import { Angular4ShopPage } from './app.po';

describe('angular4-shop App', () => {
  let page: Angular4ShopPage;

  beforeEach(() => {
    page = new Angular4ShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
