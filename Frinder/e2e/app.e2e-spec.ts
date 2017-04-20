import { FrinderPage } from './app.po';

describe('frinder App', () => {
  let page: FrinderPage;

  beforeEach(() => {
    page = new FrinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
