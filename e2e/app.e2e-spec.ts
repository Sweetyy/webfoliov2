import { Webfoliov2Page } from './app.po';

describe('webfoliov2 App', () => {
  let page: Webfoliov2Page;

  beforeEach(() => {
    page = new Webfoliov2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
