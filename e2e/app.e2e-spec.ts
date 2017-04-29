import { ProactivePage } from './app.po';

describe('proactive App', () => {
  let page: ProactivePage;

  beforeEach(() => {
    page = new ProactivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pr works!');
  });
});
