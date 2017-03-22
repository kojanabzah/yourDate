import { MydatePage } from './app.po';

describe('mydate App', () => {
  let page: MydatePage;

  beforeEach(() => {
    page = new MydatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
